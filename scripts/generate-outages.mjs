/**
 * Regenerates the `mockOutages` dataset from the PSA/PSGC barangay boundary
 * dataset (2019) published in https://github.com/faeldon/philippines-json-maps
 * (MIT, data (c) PSA / OSM).
 *
 * Usage (from the repository root):
 *   node scripts/generate-outages.mjs                       # defaults below
 *   node scripts/generate-outages.mjs 072211000:"Bogo City, Cebu" 072221000:"Daanbantayan, Cebu"
 *   node scripts/generate-outages.mjs 072231000             # label taken from the dataset
 *
 * The geometry is real barangay boundaries; `status` and `timeRemaining` are
 * mock values that rotate through a realistic set of outage states.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

/** Municipality PSGC codes to include, in map order. */
const DEFAULT_MUNICIPALITIES = [
  { psgc: "072211000", label: "Bogo City, Cebu" }, // City of Bogo — 29 barangays
  { psgc: "072221000", label: "Daanbantayan, Cebu" }, // Daanbantayan — 20 barangays
  { psgc: "072247000", label: "Sogod, Cebu" }, // Sogod — 18 barangays
  { psgc: "072213000", label: "Borbon, Cebu" }, // Borbon — 19 barangays
  { psgc: "072216000", label: "Catmon, Cebu" }, // Catmon — 20 barangays
  { psgc: "072231000", label: "Medellin, Cebu" }, // Medellin — 19 barangays
  { psgc: "072243000", label: "San Remigio, Cebu" }, // San Remigio — 27 barangays
  { psgc: "072248000", label: "Tabogon, Cebu" }, // Tabogon — 25 barangays
  { psgc: "072215000", label: "Carmen, Cebu" }, // Carmen — 21 barangays
  { psgc: "072223000", label: "Danao City, Cebu" }, // Danao City — 42 barangays
  { psgc: "072249000", label: "Tabuelan, Cebu" },
  { psgc: "072252000", label: "Tuburan, Cebu" },
];

const cliSpecs = process.argv.slice(2);
const MUNICIPALITIES = cliSpecs.length
  ? cliSpecs.map((spec) => {
      const [psgc, label] = spec.split(":");
      if (!/^\d{9}$/.test(psgc)) {
        throw new Error(`Bad PSGC code "${psgc}" (expected 9 digits, e.g. 072211000)`);
      }
      return { psgc, label };
    })
  : DEFAULT_MUNICIPALITIES;

const sourceUrl = (psgc) =>
  `https://raw.githubusercontent.com/faeldon/philippines-json-maps/master/` +
  `2019/geojson/barangays/medres/barangays-municity-ph${psgc}.0.01.json`;

const STATUSES = [
  "Brownout",
  "Line Maintenance",
  "Transformer Repair",
  "Scheduled Outage",
  "Emergency Interruption",
  "Power Restored",
];

const DURATIONS = [
  "2h 15m left",
  "1h 45m left",
  "45m left",
  "3h 10m left",
  "4h 00m left",
  "30m left",
  "Restored",
];

const OUTPUTS = [
  "frontend/src/data/outages.ts",
  "backend/src/data/outagesData.ts",
];

/** "La Purisima Concepcion (Pob.)" -> "la-purisima-concepcion" */
function toId(adm4) {
  return adm4
    .replace(/\(.*?\)/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/gi, "n")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** "DAANBANTAYAN" -> "Daanbantayan"; "CITY OF BOGO" -> "Bogo" */
function titleCase(value) {
  return value
    .toLowerCase()
    .replace(/^city of /, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** 6 decimals is ~0.1 m of precision — plenty for a web map. */
const round = (n) => Number(n.toFixed(6));

/** Area-weighted (shoelace) centroid so the marker lands inside the barangay. */
function centroidOf(ring) {
  let area = 0;
  let x = 0;
  let y = 0;
  for (let i = 0; i < ring.length - 1; i += 1) {
    const [x0, y0] = ring[i];
    const [x1, y1] = ring[i + 1];
    const cross = x0 * y1 - x1 * y0;
    area += cross;
    x += (x0 + x1) * cross;
    y += (y0 + y1) * cross;
  }
  area *= 0.5;
  if (area === 0) return ring[0];
  return [round(x / (6 * area)), round(y / (6 * area))];
}

/** Biggest ring of a Polygon / MultiPolygon (barangays are single polygons). */
function outerRing(geometry) {
  const rings =
    geometry.type === "MultiPolygon"
      ? geometry.coordinates.flat()
      : geometry.coordinates;
  return rings.reduce((a, b) => (b.length > a.length ? b : a), rings[0]);
}

/** Barangays of every requested municipality, in map order. */
const entries = [];
const usedIds = new Set();

for (const { psgc, label } of MUNICIPALITIES) {
  const url = sourceUrl(psgc);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const collection = await res.json();

  const adm3 = collection.features[0]?.properties.ADM3_EN ?? "UNKNOWN";
  const city = label ?? `${titleCase(adm3)}, Cebu`;
  const citySlug = toId(adm3)
    .replace(/^city-of-/, "")
    .replace(/-city$/, "");

  const features = collection.features
    .map((feature) => ({
      adm4: feature.properties.ADM4_EN,
      adm4Psgc: feature.properties.ADM4_PCODE,
      geometry: feature.geometry,
    }))
    .sort((a, b) => a.adm4.localeCompare(b.adm4));

  for (const { adm4, adm4Psgc, geometry } of features) {
    const ring = outerRing(geometry).map(([lon, lat]) => [round(lon), round(lat)]);
    const center = centroidOf(ring);
    const name = `Barangay ${adm4}`;

    // ids double as React keys and popup ids, so they must stay unique across
    // municipalities ("Poblacion", "Talisay", ... exist in several towns).
    let id = toId(adm4);
    if (usedIds.has(id)) id = `${citySlug}-${id}`;
    usedIds.add(id);

    const status = STATUSES[entries.length % STATUSES.length];
    const timeRemaining = DURATIONS[entries.length % DURATIONS.length];

    entries.push({
      id,
      name,
      city,
      status,
      timeRemaining,
      coordinates: center,
      markerOffset: center,
      geoJson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: { name, city, status, psgc: adm4Psgc },
            geometry: { type: "Polygon", coordinates: [ring] },
          },
        ],
      },
    });
  }

  console.log(`${city} (PSGC ${psgc}): ${features.length} barangays`);
}

/** Pretty JSON with each [lon, lat] pair kept on a single line. */
function stringify(value, indent = 0) {
  const pad = " ".repeat(indent);
  if (Array.isArray(value)) {
    if (value.every((v) => typeof v === "number")) {
      return `[${value.join(", ")}]`;
    }
    const inner = value.map((v) => `${pad}  ${stringify(v, indent + 2)}`);
    return `[\n${inner.join(",\n")}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const inner = Object.entries(value).map(
      ([k, v]) => `${pad}  ${JSON.stringify(k)}: ${stringify(v, indent + 2)}`,
    );
    return `{\n${inner.join(",\n")}\n${pad}}`;
  }
  return JSON.stringify(value);
}

const municipalityList = MUNICIPALITIES.map((m) => m.label ?? m.psgc).join(", ");
const municipalityArgs = MUNICIPALITIES.map((m) =>
  m.label ? `${m.psgc}:"${m.label}"` : m.psgc,
).join(" ");

const file = `import type * as GeoJSON from "geojson"

export interface OutageLocation {
  id: string
  name: string
  city: string
  status: string
  timeRemaining: string
  coordinates: [number, number]
  markerOffset: [number, number]
  geoJson: GeoJSON.FeatureCollection
}

/**
 * Mock outage feed for ${municipalityList} — one entry per barangay
 * (${entries.length} entries, ${MUNICIPALITIES.length} municipalities).
 *
 * - \`geoJson\` holds the real barangay boundaries from the PSA / PSGC 2019 dataset
 *   (faeldon/philippines-json-maps), rounded to 6 decimals.
 * - \`coordinates\` / \`markerOffset\` are the polygon centroid ([longitude, latitude]).
 * - \`status\` and \`timeRemaining\` are mock values.
 *
 * Regenerate with: node scripts/generate-outages.mjs ${municipalityArgs}
 */
export const mockOutages: OutageLocation[] = ${stringify(entries)}
`;

for (const target of OUTPUTS) {
  const outPath = path.resolve(process.cwd(), target);
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, file, "utf8");
  console.log(`wrote ${target} (${entries.length} entries)`);
}
