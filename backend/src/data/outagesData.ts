import type * as GeoJSON from "geojson"

export interface OutageLocation {
  id: string
  name: string
  city: string
  status: string
  timeRemaining: string
  coordinates: [number, number]
  markerOffset: [number, number]
  geoJson: GeoJSON.FeatureCollection
  reason?: string
  sourcePostId?: string
  isUpcoming?: boolean
  duration?: string
  dateEffective?: string
}

/**
 * Mock outage feed for Bogo City, Cebu, Daanbantayan, Cebu, Sogod, Cebu, Borbon, Cebu, Catmon, Cebu, Medellin, Cebu, San Remigio, Cebu, Tabogon, Cebu, Carmen, Cebu, Danao City, Cebu, Tabuelan, Cebu, Tuburan, Cebu — one entry per barangay
 * (306 entries, 12 municipalities).
 *
 * - `geoJson` holds the real barangay boundaries from the PSA / PSGC 2019 dataset
 *   (faeldon/philippines-json-maps), rounded to 6 decimals.
 * - `coordinates` / `markerOffset` are the polygon centroid ([longitude, latitude]).
 * - `status` and `timeRemaining` are mock values.
 *
 * Regenerate with: node scripts/generate-outages.mjs 072211000:"Bogo City, Cebu" 072221000:"Daanbantayan, Cebu" 072247000:"Sogod, Cebu" 072213000:"Borbon, Cebu" 072216000:"Catmon, Cebu" 072231000:"Medellin, Cebu" 072243000:"San Remigio, Cebu" 072248000:"Tabogon, Cebu" 072215000:"Carmen, Cebu" 072223000:"Danao City, Cebu" 072249000:"Tabuelan, Cebu" 072252000:"Tuburan, Cebu"
 */
export const mockOutages: OutageLocation[] = [
  {
    "id": "anonang-norte",
    "name": "Barangay Anonang Norte",
    "city": "Bogo City, Cebu",
    "status": "Brownout",
    "timeRemaining": "2h 15m left",
    "coordinates": [123.965223, 11.000455],
    "markerOffset": [123.965223, 11.000455],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Anonang Norte",
            "city": "Bogo City, Cebu",
            "status": "Brownout",
            "psgc": "PH072211002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.984175, 11.005032],
                [123.982253, 11.002977],
                [123.979272, 11.002096],
                [123.97661, 10.99936],
                [123.974853, 10.994201],
                [123.975955, 10.992928],
                [123.954405, 10.993257],
                [123.952911, 10.992987],
                [123.950673, 10.994894],
                [123.950609, 11.005929],
                [123.95959, 11.006234],
                [123.973473, 11.007941],
                [123.978977, 11.007399],
                [123.984175, 11.005032]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "anonang-sur",
    "name": "Barangay Anonang Sur",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.961612, 10.985299],
    "markerOffset": [123.961612, 10.985299],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Anonang Sur",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.975955, 10.992928],
                [123.978152, 10.99034],
                [123.972791, 10.985694],
                [123.968535, 10.981575],
                [123.965113, 10.979529],
                [123.960602, 10.973782],
                [123.957317, 10.971276],
                [123.956459, 10.969831],
                [123.955331, 10.976699],
                [123.951644, 10.977567],
                [123.950673, 10.994894],
                [123.952911, 10.992987],
                [123.954405, 10.993257],
                [123.975955, 10.992928]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "banban",
    "name": "Barangay Banban",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.961807, 11.018088],
    "markerOffset": [123.961807, 11.018088],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Banban",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.972703, 11.029477],
                [123.973262, 11.023428],
                [123.973473, 11.007941],
                [123.95959, 11.006234],
                [123.950609, 11.005929],
                [123.950858, 11.029671],
                [123.959505, 11.029744],
                [123.972703, 11.029477]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "binabag",
    "name": "Barangay Binabag",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.972139, 10.972465],
    "markerOffset": [123.972139, 10.972465],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Binabag",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.989432, 10.980447],
                [123.988241, 10.970609],
                [123.984253, 10.970859],
                [123.975593, 10.964597],
                [123.972386, 10.961312],
                [123.968905, 10.960589],
                [123.968138, 10.958454],
                [123.96506, 10.957275],
                [123.963144, 10.954701],
                [123.95837, 10.95447],
                [123.956893, 10.963227],
                [123.956459, 10.969831],
                [123.957317, 10.971276],
                [123.960602, 10.973782],
                [123.965113, 10.979529],
                [123.968535, 10.981575],
                [123.972791, 10.985694],
                [123.978152, 10.99034],
                [123.989432, 10.980447]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bungtod",
    "name": "Barangay Bungtod (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.006595, 11.042736],
    "markerOffset": [124.006595, 11.042736],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bungtod (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.006881, 11.048673],
                [124.007154, 11.044539],
                [124.010741, 11.039931],
                [124.00462, 11.036761],
                [124.005286, 11.038992],
                [124.004209, 11.047459],
                [124.003712, 11.048014],
                [124.004871, 11.048948],
                [124.005069, 11.049082],
                [124.006881, 11.048673]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carbon",
    "name": "Barangay Carbon (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.006328, 11.051206],
    "markerOffset": [124.006328, 11.051206],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Carbon (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.006791, 11.051816],
                [124.007351, 11.051694],
                [124.007479, 11.050952],
                [124.007486, 11.050911],
                [124.00562, 11.05063],
                [124.004857, 11.051267],
                [124.006791, 11.051816]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cayang",
    "name": "Barangay Cayang",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.968275, 11.043107],
    "markerOffset": [123.968275, 11.043107],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cayang",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.986986, 11.051997],
                [123.984276, 11.050837],
                [123.983212, 11.048391],
                [123.982977, 11.045479],
                [123.97997, 11.042719],
                [123.979693, 11.039169],
                [123.982764, 11.037219],
                [123.972703, 11.029477],
                [123.959505, 11.029744],
                [123.950858, 11.029671],
                [123.952366, 11.036341],
                [123.957274, 11.054073],
                [123.963279, 11.053537],
                [123.967842, 11.054325],
                [123.970818, 11.055321],
                [123.974763, 11.060893],
                [123.984781, 11.053858],
                [123.986986, 11.051997]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cogon",
    "name": "Barangay Cogon (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Line Maintenance",
    "timeRemaining": "1h 30m left",
    "coordinates": [123.998684, 11.040624],
    "markerOffset": [123.998684, 11.040624],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cogon (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Line Maintenance",
            "psgc": "PH072211001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.003712, 11.048014],
                [124.004209, 11.047459],
                [124.005286, 11.038992],
                [124.00462, 11.036761],
                [124.004693, 11.03594],
                [123.999672, 11.036702],
                [123.997543, 11.034906],
                [123.991116, 11.034933],
                [123.988064, 11.035571],
                [123.998443, 11.045823],
                [124.000386, 11.049397],
                [124.003712, 11.048014]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dakit",
    "name": "Barangay Dakit",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.001532, 11.023966],
    "markerOffset": [124.001532, 11.023966],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dakit",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.004693, 11.03594],
                [124.0054, 11.026503],
                [124.011467, 11.0149],
                [124.009783, 11.014506],
                [124.001148, 11.015185],
                [123.99397, 11.016018],
                [123.995386, 11.025499],
                [123.997543, 11.034906],
                [123.999672, 11.036702],
                [124.004693, 11.03594]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "don-pedro-rodriguez",
    "name": "Barangay Don Pedro Rodriguez",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.969133, 11.066706],
    "markerOffset": [123.969133, 11.066706],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Don Pedro Rodriguez",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.981496, 11.073854],
                [123.979872, 11.068562],
                [123.981407, 11.063409],
                [123.980716, 11.061722],
                [123.979067, 11.061492],
                [123.97731, 11.062755],
                [123.974763, 11.060893],
                [123.970818, 11.055321],
                [123.967842, 11.054325],
                [123.963279, 11.053537],
                [123.957274, 11.054073],
                [123.959277, 11.060715],
                [123.962321, 11.072653],
                [123.965024, 11.081959],
                [123.971748, 11.079234],
                [123.977006, 11.074907],
                [123.979165, 11.07359],
                [123.981496, 11.073854]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "gairan",
    "name": "Barangay Gairan",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.020274, 11.050336],
    "markerOffset": [124.020274, 11.050336],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Gairan",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.028161, 11.057138],
                [124.028431, 11.042413],
                [124.014694, 11.041811],
                [124.013569, 11.042864],
                [124.015638, 11.047663],
                [124.011571, 11.049716],
                [124.011398, 11.050835],
                [124.011547, 11.052877],
                [124.010773, 11.056255],
                [124.011301, 11.058704],
                [124.01442, 11.058684],
                [124.016772, 11.057364],
                [124.021707, 11.057014],
                [124.025193, 11.058309],
                [124.028161, 11.057138]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "guadalupe",
    "name": "Barangay Guadalupe",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.007358, 10.996232],
    "markerOffset": [124.007358, 10.996232],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Guadalupe",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.018548, 11.004966],
                [124.019336, 10.991897],
                [124.01893, 10.98245],
                [124.013856, 10.981076],
                [124.012263, 10.979268],
                [124.002747, 10.979982],
                [123.989432, 10.980447],
                [123.99727, 10.995051],
                [123.998393, 11.005138],
                [123.99958, 11.010868],
                [124.001148, 11.015185],
                [124.009783, 11.014506],
                [124.011467, 11.0149],
                [124.018138, 11.016558],
                [124.018548, 11.004966]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "la-paz",
    "name": "Barangay La Paz",
    "city": "Bogo City, Cebu",
    "status": "Brownout",
    "timeRemaining": "2h 45m left",
    "coordinates": [123.988884, 10.998629],
    "markerOffset": [123.988884, 10.998629],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay La Paz",
            "city": "Bogo City, Cebu",
            "status": "Brownout",
            "psgc": "PH072211013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.001148, 11.015185],
                [123.99958, 11.010868],
                [123.998393, 11.005138],
                [123.99727, 10.995051],
                [123.989432, 10.980447],
                [123.978152, 10.99034],
                [123.975955, 10.992928],
                [123.974853, 10.994201],
                [123.97661, 10.99936],
                [123.979272, 11.002096],
                [123.982253, 11.002977],
                [123.984175, 11.005032],
                [123.98757, 11.008859],
                [123.988575, 11.01125],
                [123.992118, 11.013522],
                [123.99397, 11.016018],
                [124.001148, 11.015185]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "la-purisima-concepcion",
    "name": "Barangay La Purisima Concepcion (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.002237, 11.050224],
    "markerOffset": [124.002237, 11.050224],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay La Purisima Concepcion (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.004871, 11.048948],
                [124.003712, 11.048014],
                [124.000386, 11.049397],
                [123.998424, 11.051321],
                [124.000986, 11.051029],
                [124.002881, 11.052939],
                [124.004871, 11.048948]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "libertad",
    "name": "Barangay Libertad",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.018121, 11.029341],
    "markerOffset": [124.018121, 11.029341],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Libertad",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.028431, 11.042413],
                [124.029156, 11.035326],
                [124.030586, 11.02509],
                [124.031568, 11.019633],
                [124.018138, 11.016558],
                [124.011467, 11.0149],
                [124.0054, 11.026503],
                [124.004693, 11.03594],
                [124.00462, 11.036761],
                [124.010741, 11.039931],
                [124.013569, 11.042864],
                [124.014694, 11.041811],
                [124.028431, 11.042413]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lourdes",
    "name": "Barangay Lourdes (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.00648, 11.049785],
    "markerOffset": [124.00648, 11.049785],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lourdes (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.007486, 11.050911],
                [124.007676, 11.049399],
                [124.006881, 11.048673],
                [124.005069, 11.049082],
                [124.00562, 11.05063],
                [124.007486, 11.050911]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "malingin",
    "name": "Barangay Malingin",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.984027, 11.022106],
    "markerOffset": [123.984027, 11.022106],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Malingin",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.988064, 11.035571],
                [123.991116, 11.034933],
                [123.997543, 11.034906],
                [123.995386, 11.025499],
                [123.99397, 11.016018],
                [123.992118, 11.013522],
                [123.988575, 11.01125],
                [123.98757, 11.008859],
                [123.984175, 11.005032],
                [123.978977, 11.007399],
                [123.973473, 11.007941],
                [123.973262, 11.023428],
                [123.972703, 11.029477],
                [123.982764, 11.037219],
                [123.986054, 11.036686],
                [123.988064, 11.035571]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "marangog",
    "name": "Barangay Marangog",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.030171, 11.012801],
    "markerOffset": [124.030171, 11.012801],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Marangog",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.03896, 11.02451],
                [124.037949, 11.020937],
                [124.038112, 11.018711],
                [124.039963, 11.015501],
                [124.041626, 11.005828],
                [124.041626, 11.005799],
                [124.041613, 11.00572],
                [124.032811, 11.004966],
                [124.018548, 11.004966],
                [124.018138, 11.016558],
                [124.031568, 11.019633],
                [124.030586, 11.02509],
                [124.032505, 11.024953],
                [124.035054, 11.02355],
                [124.03896, 11.02451]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "nailon",
    "name": "Barangay Nailon",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.034045, 11.050097],
    "markerOffset": [124.034045, 11.050097],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Nailon",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.037423, 11.043133],
                [124.028431, 11.042413],
                [124.028161, 11.057138],
                [124.028349, 11.057229],
                [124.028525, 11.057215],
                [124.032211, 11.057422],
                [124.034755, 11.054583],
                [124.040874, 11.056801],
                [124.0423, 11.054581],
                [124.040851, 11.051646],
                [124.039049, 11.046575],
                [124.037671, 11.045262],
                [124.037423, 11.043133]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "odlot",
    "name": "Barangay Odlot",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.030889, 10.994836],
    "markerOffset": [124.030889, 10.994836],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Odlot",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.01893, 10.98245],
                [124.019336, 10.991897],
                [124.018548, 11.004966],
                [124.032811, 11.004966],
                [124.041613, 11.00572],
                [124.042194, 11.00121],
                [124.043464, 10.998843],
                [124.043198, 10.993549],
                [124.044675, 10.990241],
                [124.043793, 10.987224],
                [124.041416, 10.984914],
                [124.036309, 10.98694],
                [124.033627, 10.983782],
                [124.030019, 10.985675],
                [124.01893, 10.98245]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "pandan",
    "name": "Barangay Pandan (Pandan Heights)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.010869, 11.045663],
    "markerOffset": [124.010869, 11.045663],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Pandan (Pandan Heights)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.013569, 11.042864],
                [124.010741, 11.039931],
                [124.007154, 11.044539],
                [124.006881, 11.048673],
                [124.007676, 11.049399],
                [124.011571, 11.049716],
                [124.015638, 11.047663],
                [124.013569, 11.042864]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "polambato",
    "name": "Barangay Polambato",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.987636, 11.063993],
    "markerOffset": [123.987636, 11.063993],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Polambato",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211022"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.995426, 11.056115],
                [123.991921, 11.054609],
                [123.98763, 11.05181],
                [123.986986, 11.051997],
                [123.984781, 11.053858],
                [123.974763, 11.060893],
                [123.97731, 11.062755],
                [123.979067, 11.061492],
                [123.980716, 11.061722],
                [123.981407, 11.063409],
                [123.979872, 11.068562],
                [123.981496, 11.073854],
                [123.984455, 11.072244],
                [123.986707, 11.073605],
                [123.988573, 11.076436],
                [123.992672, 11.072693],
                [123.995193, 11.072246],
                [123.997124, 11.070475],
                [123.998744, 11.071163],
                [123.997138, 11.066216],
                [123.994205, 11.063879],
                [123.994334, 11.06111],
                [123.993353, 11.059747],
                [123.995426, 11.056115]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sambag",
    "name": "Barangay Sambag (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.009064, 11.053686],
    "markerOffset": [124.009064, 11.053686],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sambag (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211023"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.011547, 11.052877],
                [124.007351, 11.051694],
                [124.006791, 11.051816],
                [124.006373, 11.054061],
                [124.006532, 11.053998],
                [124.006713, 11.053927],
                [124.010773, 11.056255],
                [124.011547, 11.052877]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-vicente",
    "name": "Barangay San Vicente (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.004327, 11.051592],
    "markerOffset": [124.004327, 11.051592],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Vicente (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211024"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.004596, 11.053887],
                [124.004857, 11.051267],
                [124.00562, 11.05063],
                [124.005069, 11.049082],
                [124.004871, 11.048948],
                [124.002881, 11.052939],
                [124.004596, 11.053887]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "santo-nino",
    "name": "Barangay Santo Niño",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.009752, 11.051638],
    "markerOffset": [124.009752, 11.051638],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Santo Niño",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211025"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.011398, 11.050835],
                [124.007479, 11.050952],
                [124.007351, 11.051694],
                [124.011547, 11.052877],
                [124.011398, 11.050835]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "santo-rosario",
    "name": "Barangay Santo Rosario (Pob.)",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.005637, 11.052731],
    "markerOffset": [124.005637, 11.052731],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Santo Rosario (Pob.)",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211026"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.006373, 11.054061],
                [124.006791, 11.051816],
                [124.004857, 11.051267],
                [124.004596, 11.053887],
                [124.006373, 11.054061]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "siocon",
    "name": "Barangay Siocon",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.034086, 11.033525],
    "markerOffset": [124.034086, 11.033525],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Siocon",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211027"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.037423, 11.043133],
                [124.037309, 11.039767],
                [124.039617, 11.031317],
                [124.038692, 11.029266],
                [124.039609, 11.027343],
                [124.03896, 11.02451],
                [124.035054, 11.02355],
                [124.032505, 11.024953],
                [124.030586, 11.02509],
                [124.029156, 11.035326],
                [124.028431, 11.042413],
                [124.037423, 11.043133]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sudlonon",
    "name": "Barangay Sudlonon",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.009425, 11.050222],
    "markerOffset": [124.009425, 11.050222],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sudlonon",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211029"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.011398, 11.050835],
                [124.011571, 11.049716],
                [124.007676, 11.049399],
                [124.007486, 11.050911],
                [124.007479, 11.050952],
                [124.011398, 11.050835]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "taytayan",
    "name": "Barangay Taytayan",
    "city": "Bogo City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.989761, 11.045685],
    "markerOffset": [123.989761, 11.045685],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Taytayan",
            "city": "Bogo City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072211028"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.998424, 11.051321],
                [124.000386, 11.049397],
                [123.998443, 11.045823],
                [123.988064, 11.035571],
                [123.986054, 11.036686],
                [123.982764, 11.037219],
                [123.979693, 11.039169],
                [123.97997, 11.042719],
                [123.982977, 11.045479],
                [123.983212, 11.048391],
                [123.984276, 11.050837],
                [123.986986, 11.051997],
                [123.98763, 11.05181],
                [123.991921, 11.054609],
                [123.995426, 11.056115],
                [123.997206, 11.054197],
                [123.997053, 11.05196],
                [123.998424, 11.051321]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "aguho",
    "name": "Barangay Aguho",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.00773, 11.26463],
    "markerOffset": [124.00773, 11.26463],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Aguho",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.017781, 11.269963],
                [124.017825, 11.267353],
                [124.018474, 11.260626],
                [124.019098, 11.255708],
                [124.017496, 11.256067],
                [124.010057, 11.259024],
                [124.00784, 11.261145],
                [124.003589, 11.259534],
                [124.002764, 11.257459],
                [124.001683, 11.257825],
                [123.998795, 11.259936],
                [123.996477, 11.259919],
                [123.996015, 11.263356],
                [123.995366, 11.265257],
                [123.998087, 11.269235],
                [123.998447, 11.271179],
                [124.001452, 11.271809],
                [124.002449, 11.271262],
                [124.00418, 11.271484],
                [124.007779, 11.271042],
                [124.011111, 11.271127],
                [124.017781, 11.269963]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagay",
    "name": "Barangay Bagay",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.027847, 11.201601],
    "markerOffset": [124.027847, 11.201601],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagay",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.04261, 11.216418],
                [124.04202, 11.21466],
                [124.04276, 11.21087],
                [124.040825, 11.209719],
                [124.037371, 11.205877],
                [124.037647, 11.204761],
                [124.036499, 11.202191],
                [124.037213, 11.201023],
                [124.037681, 11.197336],
                [124.0375, 11.194884],
                [124.03833, 11.193039],
                [124.038123, 11.19157],
                [124.038788, 11.188179],
                [124.038135, 11.185154],
                [124.038772, 11.183812],
                [124.038326, 11.182676],
                [124.036655, 11.182338],
                [124.032648, 11.182949],
                [124.031974, 11.184129],
                [124.028207, 11.184481],
                [124.026732, 11.185592],
                [124.025381, 11.185304],
                [124.024654, 11.186696],
                [124.023367, 11.186425],
                [124.021384, 11.187624],
                [124.012311, 11.19688],
                [124.010977, 11.198455],
                [124.012155, 11.200544],
                [124.014098, 11.202134],
                [124.013497, 11.205388],
                [124.011306, 11.20826],
                [124.016289, 11.20898],
                [124.02112, 11.210593],
                [124.02235, 11.212632],
                [124.021852, 11.21811],
                [124.025226, 11.2184],
                [124.026767, 11.219062],
                [124.031704, 11.219084],
                [124.032898, 11.218502],
                [124.0355, 11.218249],
                [124.038252, 11.216961],
                [124.04261, 11.216418]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bakhawan",
    "name": "Barangay Bakhawan",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.972669, 11.202321],
    "markerOffset": [123.972669, 11.202321],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bakhawan",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.983426, 11.199228],
                [123.981676, 11.198097],
                [123.978651, 11.192772],
                [123.969115, 11.193635],
                [123.969893, 11.197403],
                [123.965334, 11.201515],
                [123.96043, 11.204982],
                [123.965784, 11.208418],
                [123.969946, 11.212524],
                [123.971623, 11.213498],
                [123.975892, 11.208488],
                [123.983426, 11.199228]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bateria",
    "name": "Barangay Bateria",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.022274, 11.14446],
    "markerOffset": [124.022274, 11.14446],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bateria",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.035571, 11.151665],
                [124.035405, 11.148729],
                [124.033635, 11.145443],
                [124.031956, 11.145954],
                [124.030978, 11.142621],
                [124.030245, 11.143646],
                [124.027875, 11.141923],
                [124.027225, 11.137781],
                [124.025045, 11.135116],
                [124.025229, 11.133837],
                [124.024143, 11.130371],
                [124.0193, 11.134438],
                [124.010488, 11.136174],
                [124.012839, 11.139363],
                [124.014325, 11.14698],
                [124.013294, 11.154145],
                [124.023551, 11.153589],
                [124.035571, 11.151665]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bitoon",
    "name": "Barangay Bitoon",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.001647, 11.229551],
    "markerOffset": [124.001647, 11.229551],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bitoon",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.005821, 11.243985],
                [124.006103, 11.242644],
                [124.005712, 11.238121],
                [124.006895, 11.236137],
                [124.009427, 11.233022],
                [124.009734, 11.231894],
                [124.011436, 11.230107],
                [124.013726, 11.225787],
                [124.014703, 11.223115],
                [124.01211, 11.221485],
                [124.010899, 11.2196],
                [124.010657, 11.216036],
                [124.004084, 11.216934],
                [123.992859, 11.22179],
                [123.992116, 11.223299],
                [123.989319, 11.223852],
                [123.987317, 11.224891],
                [123.988657, 11.226224],
                [123.988698, 11.227259],
                [123.991233, 11.230242],
                [123.990946, 11.231615],
                [123.994486, 11.236088],
                [123.995681, 11.238614],
                [123.995502, 11.239614],
                [123.996968, 11.24359],
                [123.997239, 11.245723],
                [124.00431, 11.245379],
                [124.005821, 11.243985]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "calape",
    "name": "Barangay Calape",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.024663, 11.177225],
    "markerOffset": [124.024663, 11.177225],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Calape",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.038326, 11.182676],
                [124.038347, 11.18268],
                [124.038407, 11.182692],
                [124.039053, 11.181175],
                [124.037956, 11.180466],
                [124.036737, 11.174797],
                [124.035773, 11.172558],
                [124.035425, 11.170236],
                [124.02811, 11.170168],
                [124.01132, 11.16862],
                [124.013474, 11.176524],
                [124.014976, 11.182907],
                [124.021384, 11.187624],
                [124.023367, 11.186425],
                [124.024654, 11.186696],
                [124.025381, 11.185304],
                [124.026732, 11.185592],
                [124.028207, 11.184481],
                [124.031974, 11.184129],
                [124.032648, 11.182949],
                [124.036655, 11.182338],
                [124.038326, 11.182676]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carnaza",
    "name": "Barangay Carnaza",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.097981, 11.514282],
    "markerOffset": [124.097981, 11.514282],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Carnaza",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.093856, 11.52331],
                [124.095723, 11.522257],
                [124.096576, 11.522468],
                [124.097615, 11.52084],
                [124.099683, 11.520592],
                [124.102657, 11.516885],
                [124.104283, 11.516043],
                [124.103905, 11.513377],
                [124.105053, 11.513319],
                [124.104693, 11.509528],
                [124.103791, 11.509032],
                [124.103007, 11.506118],
                [124.098729, 11.505518],
                [124.097758, 11.507541],
                [124.094944, 11.51002],
                [124.094256, 11.511766],
                [124.092192, 11.513903],
                [124.090491, 11.513704],
                [124.09122, 11.517552],
                [124.089661, 11.518008],
                [124.090208, 11.519357],
                [124.091732, 11.519237],
                [124.093129, 11.520824],
                [124.093856, 11.52331]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dalingding",
    "name": "Barangay Dalingding",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.997997, 11.20097],
    "markerOffset": [123.997997, 11.20097],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dalingding",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.010657, 11.216036],
                [124.009786, 11.213525],
                [124.01009, 11.21021],
                [124.011306, 11.20826],
                [124.013497, 11.205388],
                [124.014098, 11.202134],
                [124.012155, 11.200544],
                [124.010977, 11.198455],
                [124.008051, 11.199851],
                [124.007529, 11.196415],
                [124.006108, 11.194776],
                [124.005586, 11.19327],
                [123.995658, 11.185786],
                [123.988244, 11.19021],
                [123.978651, 11.192772],
                [123.981676, 11.198097],
                [123.983426, 11.199228],
                [123.98584, 11.202397],
                [123.993231, 11.209232],
                [124.002175, 11.215439],
                [124.004084, 11.216934],
                [124.010657, 11.216036]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lanao",
    "name": "Barangay Lanao",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.028339, 11.251212],
    "markerOffset": [124.028339, 11.251212],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lanao",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.049102, 11.254225],
                [124.041543, 11.249155],
                [124.040198, 11.245121],
                [124.029456, 11.235107],
                [124.018891, 11.245569],
                [124.014541, 11.247648],
                [124.009532, 11.249042],
                [124.008617, 11.251539],
                [124.007503, 11.251948],
                [124.006642, 11.253776],
                [124.00784, 11.261145],
                [124.010057, 11.259024],
                [124.017496, 11.256067],
                [124.019098, 11.255708],
                [124.018474, 11.260626],
                [124.02525, 11.260134],
                [124.032267, 11.259323],
                [124.046655, 11.261394],
                [124.049102, 11.254225]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "logon",
    "name": "Barangay Logon",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.115861, 11.336573],
    "markerOffset": [124.115861, 11.336573],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Logon",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.116828, 11.347984],
                [124.118496, 11.34479],
                [124.117962, 11.344092],
                [124.1188, 11.340293],
                [124.118215, 11.340151],
                [124.117798, 11.337323],
                [124.118387, 11.335665],
                [124.118195, 11.334331],
                [124.119279, 11.33276],
                [124.121861, 11.330461],
                [124.121511, 11.32877],
                [124.12006, 11.327166],
                [124.118868, 11.326633],
                [124.113218, 11.326869],
                [124.114135, 11.32936],
                [124.11344, 11.330969],
                [124.113769, 11.337495],
                [124.112812, 11.338973],
                [124.112839, 11.340331],
                [124.111525, 11.340916],
                [124.110357, 11.34383],
                [124.108635, 11.345104],
                [124.108368, 11.346251],
                [124.111262, 11.345368],
                [124.115269, 11.345642],
                [124.116271, 11.346069],
                [124.116828, 11.347984]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "malbago",
    "name": "Barangay Malbago",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.024583, 11.161514],
    "markerOffset": [124.024583, 11.161514],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Malbago",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.035718, 11.151919],
                [124.03558, 11.151713],
                [124.035571, 11.151665],
                [124.023551, 11.153589],
                [124.013294, 11.154145],
                [124.01132, 11.16862],
                [124.02811, 11.170168],
                [124.035425, 11.170236],
                [124.035203, 11.166969],
                [124.036413, 11.164694],
                [124.036083, 11.160473],
                [124.036414, 11.157973],
                [124.035177, 11.156899],
                [124.035858, 11.155332],
                [124.035718, 11.151919]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "daanbantayan-malingin",
    "name": "Barangay Malingin",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.016381, 11.216931],
    "markerOffset": [124.016381, 11.216931],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Malingin",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.021852, 11.21811],
                [124.02235, 11.212632],
                [124.02112, 11.210593],
                [124.016289, 11.20898],
                [124.011306, 11.20826],
                [124.01009, 11.21021],
                [124.009786, 11.213525],
                [124.010657, 11.216036],
                [124.010899, 11.2196],
                [124.01211, 11.221485],
                [124.014703, 11.223115],
                [124.013726, 11.225787],
                [124.021379, 11.226478],
                [124.021852, 11.21811]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "maya",
    "name": "Barangay Maya",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.053604, 11.270179],
    "markerOffset": [124.053604, 11.270179],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maya",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.059548, 11.258661],
                [124.055574, 11.256824],
                [124.050857, 11.25526],
                [124.049102, 11.254225],
                [124.046655, 11.261394],
                [124.045873, 11.274025],
                [124.045738, 11.27911],
                [124.045246, 11.279044],
                [124.050136, 11.280139],
                [124.055242, 11.281063],
                [124.0571, 11.282993],
                [124.059438, 11.283251],
                [124.063776, 11.284564],
                [124.063653, 11.283223],
                [124.062227, 11.281562],
                [124.062483, 11.279815],
                [124.061783, 11.278883],
                [124.062592, 11.273686],
                [124.061956, 11.272207],
                [124.059708, 11.269615],
                [124.058259, 11.269051],
                [124.056998, 11.262708],
                [124.059548, 11.258661]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "pajo",
    "name": "Barangay Pajo",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.016275, 11.237037],
    "markerOffset": [124.016275, 11.237037],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Pajo",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.029456, 11.235107],
                [124.021379, 11.226478],
                [124.013726, 11.225787],
                [124.011436, 11.230107],
                [124.009734, 11.231894],
                [124.009427, 11.233022],
                [124.006895, 11.236137],
                [124.005712, 11.238121],
                [124.006103, 11.242644],
                [124.005821, 11.243985],
                [124.008913, 11.247279],
                [124.009532, 11.249042],
                [124.014541, 11.247648],
                [124.018891, 11.245569],
                [124.029456, 11.235107]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "paypay",
    "name": "Barangay Paypay",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.986661, 11.213401],
    "markerOffset": [123.986661, 11.213401],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Paypay",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.004084, 11.216934],
                [124.002175, 11.215439],
                [123.993231, 11.209232],
                [123.98584, 11.202397],
                [123.983426, 11.199228],
                [123.975892, 11.208488],
                [123.971623, 11.213498],
                [123.974135, 11.215324],
                [123.977211, 11.216902],
                [123.980648, 11.219351],
                [123.981521, 11.220507],
                [123.987317, 11.224891],
                [123.989319, 11.223852],
                [123.992116, 11.223299],
                [123.992859, 11.22179],
                [124.004084, 11.216934]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "poblacion",
    "name": "Barangay Poblacion",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.00279, 11.252308],
    "markerOffset": [124.00279, 11.252308],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.009532, 11.249042],
                [124.008913, 11.247279],
                [124.005821, 11.243985],
                [124.00431, 11.245379],
                [123.997239, 11.245723],
                [123.998061, 11.250107],
                [123.997533, 11.252311],
                [123.997395, 11.255628],
                [123.996732, 11.25675],
                [123.996477, 11.259919],
                [123.998795, 11.259936],
                [124.001683, 11.257825],
                [124.002764, 11.257459],
                [124.003589, 11.259534],
                [124.00784, 11.261145],
                [124.006642, 11.253776],
                [124.007503, 11.251948],
                [124.008617, 11.251539],
                [124.009532, 11.249042]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "talisay",
    "name": "Barangay Talisay",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.054417, 11.246599],
    "markerOffset": [124.054417, 11.246599],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Talisay",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.052832, 11.23209],
                [124.044013, 11.239165],
                [124.040198, 11.245121],
                [124.041543, 11.249155],
                [124.049102, 11.254225],
                [124.050857, 11.25526],
                [124.055574, 11.256824],
                [124.059548, 11.258661],
                [124.059861, 11.257934],
                [124.063506, 11.256292],
                [124.067002, 11.25611],
                [124.068955, 11.257286],
                [124.070235, 11.255641],
                [124.069665, 11.254114],
                [124.065938, 11.249345],
                [124.065858, 11.248401],
                [124.063976, 11.246036],
                [124.063447, 11.243641],
                [124.062136, 11.241297],
                [124.059526, 11.23841],
                [124.054188, 11.233639],
                [124.052832, 11.23209]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tapilon",
    "name": "Barangay Tapilon",
    "city": "Daanbantayan, Cebu",
    "status": "Scheduled Outage",
    "timeRemaining": "3h 00m left",
    "coordinates": [124.032996, 11.268871],
    "markerOffset": [124.032996, 11.268871],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tapilon",
            "city": "Daanbantayan, Cebu",
            "status": "Scheduled Outage",
            "psgc": "PH072221018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.045246, 11.279044],
                [124.045738, 11.27911],
                [124.045873, 11.274025],
                [124.046655, 11.261394],
                [124.032267, 11.259323],
                [124.02525, 11.260134],
                [124.018474, 11.260626],
                [124.017825, 11.267353],
                [124.017781, 11.269963],
                [124.019772, 11.269773],
                [124.020759, 11.270255],
                [124.021164, 11.271742],
                [124.023807, 11.275571],
                [124.025232, 11.277231],
                [124.024754, 11.278402],
                [124.025609, 11.279643],
                [124.033322, 11.278271],
                [124.037486, 11.278141],
                [124.041145, 11.278404],
                [124.045246, 11.279044]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tinubdan",
    "name": "Barangay Tinubdan",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.006034, 11.181812],
    "markerOffset": [124.006034, 11.181812],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tinubdan",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.010977, 11.198455],
                [124.012311, 11.19688],
                [124.021384, 11.187624],
                [124.014976, 11.182907],
                [124.013474, 11.176524],
                [124.01132, 11.16862],
                [123.999006, 11.168638],
                [123.992838, 11.168143],
                [123.994081, 11.175162],
                [123.995658, 11.185786],
                [124.005586, 11.19327],
                [124.006108, 11.194776],
                [124.007529, 11.196415],
                [124.008051, 11.199851],
                [124.010977, 11.198455]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tominjao",
    "name": "Barangay Tominjao",
    "city": "Daanbantayan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.036394, 11.228699],
    "markerOffset": [124.036394, 11.228699],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tominjao",
            "city": "Daanbantayan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072221020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.052832, 11.23209],
                [124.052887, 11.232092],
                [124.052959, 11.232019],
                [124.04884, 11.230318],
                [124.048181, 11.228283],
                [124.046909, 11.227433],
                [124.045553, 11.22448],
                [124.046006, 11.223185],
                [124.044921, 11.22162],
                [124.045293, 11.218085],
                [124.043976, 11.217905],
                [124.04261, 11.216418],
                [124.038252, 11.216961],
                [124.0355, 11.218249],
                [124.032898, 11.218502],
                [124.031704, 11.219084],
                [124.026767, 11.219062],
                [124.025226, 11.2184],
                [124.021852, 11.21811],
                [124.021379, 11.226478],
                [124.029456, 11.235107],
                [124.040198, 11.245121],
                [124.044013, 11.239165],
                [124.052832, 11.23209]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ampongol",
    "name": "Barangay Ampongol",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.968148, 10.769275],
    "markerOffset": [123.968148, 10.769275],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ampongol",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.969436, 10.784339],
                [123.984377, 10.771562],
                [123.985356, 10.755131],
                [123.958815, 10.754491],
                [123.950632, 10.781804],
                [123.961888, 10.787174],
                [123.969436, 10.784339]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagakay",
    "name": "Barangay Bagakay",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.93758, 10.78582],
    "markerOffset": [123.93758, 10.78582],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagakay",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.950632, 10.781804],
                [123.92646, 10.772753],
                [123.925898, 10.77719],
                [123.926902, 10.79176],
                [123.947362, 10.798448],
                [123.950632, 10.781804]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagatayam",
    "name": "Barangay Bagatayam",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.994584, 10.76116],
    "markerOffset": [123.994584, 10.76116],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagatayam",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.006551, 10.763082],
                [124.004289, 10.753395],
                [123.999803, 10.753012],
                [123.992595, 10.75434],
                [123.98932, 10.756525],
                [123.985356, 10.755131],
                [123.984377, 10.771562],
                [124.006551, 10.763082]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bawo",
    "name": "Barangay Bawo",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.999623, 10.734189],
    "markerOffset": [123.999623, 10.734189],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bawo",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.985511, 10.729424],
                [123.983088, 10.737968],
                [123.991304, 10.735359],
                [124.007398, 10.744312],
                [124.014984, 10.731929],
                [124.008848, 10.730682],
                [124.005239, 10.728042],
                [124.000184, 10.729307],
                [123.995296, 10.726506],
                [123.985511, 10.729424]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cabalawan",
    "name": "Barangay Cabalawan",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.942877, 10.731906],
    "markerOffset": [123.942877, 10.731906],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cabalawan",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.962625, 10.716969],
                [123.955445, 10.711893],
                [123.953523, 10.704981],
                [123.928371, 10.726107],
                [123.923661, 10.730515],
                [123.926453, 10.750476],
                [123.949199, 10.753298],
                [123.962625, 10.716969]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cabangahan",
    "name": "Barangay Cabangahan",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.94131, 10.764509],
    "markerOffset": [123.94131, 10.764509],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cabangahan",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.958815, 10.754491],
                [123.949199, 10.753298],
                [123.926453, 10.750476],
                [123.92646, 10.772753],
                [123.950632, 10.781804],
                [123.958815, 10.754491]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "calumboyan",
    "name": "Barangay Calumboyan",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.019067, 10.794189],
    "markerOffset": [124.019067, 10.794189],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Calumboyan",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.028941, 10.784502],
                [124.004148, 10.789652],
                [124.005092, 10.802195],
                [124.010453, 10.799714],
                [124.016635, 10.802775],
                [124.027078, 10.801355],
                [124.03314, 10.798643],
                [124.033885, 10.7959],
                [124.028941, 10.784502]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sogod-dakit",
    "name": "Barangay Dakit",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.979214, 10.789158],
    "markerOffset": [123.979214, 10.789158],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dakit",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.981953, 10.804998],
                [123.981261, 10.801278],
                [123.989274, 10.785616],
                [123.984377, 10.771562],
                [123.969436, 10.784339],
                [123.974582, 10.807004],
                [123.981953, 10.804998]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "damolog",
    "name": "Barangay Damolog",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.997773, 10.774477],
    "markerOffset": [123.997773, 10.774477],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Damolog",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.003377, 10.778321],
                [124.004107, 10.774669],
                [124.008825, 10.775226],
                [124.013272, 10.77101],
                [124.006551, 10.763082],
                [123.984377, 10.771562],
                [123.989274, 10.785616],
                [123.997898, 10.786227],
                [124.003377, 10.778321]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ibabao",
    "name": "Barangay Ibabao",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.991364, 10.747841],
    "markerOffset": [123.991364, 10.747841],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ibabao",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.999803, 10.753012],
                [124.002741, 10.748378],
                [123.992816, 10.741444],
                [123.983088, 10.737968],
                [123.985356, 10.755131],
                [123.98932, 10.756525],
                [123.992595, 10.75434],
                [123.999803, 10.753012]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "liki",
    "name": "Barangay Liki",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.994484, 10.7965],
    "markerOffset": [123.994484, 10.7965],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Liki",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.005092, 10.802195],
                [124.004148, 10.789652],
                [124.003377, 10.778321],
                [123.997898, 10.786227],
                [123.989274, 10.785616],
                [123.981261, 10.801278],
                [123.981953, 10.804998],
                [123.986077, 10.804688],
                [123.98945, 10.809285],
                [123.993677, 10.80971],
                [124.005092, 10.802195]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lubo",
    "name": "Barangay Lubo",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.967703, 10.799386],
    "markerOffset": [123.967703, 10.799386],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lubo",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.974582, 10.807004],
                [123.969436, 10.784339],
                [123.961888, 10.787174],
                [123.964935, 10.815945],
                [123.974582, 10.807004]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mohon",
    "name": "Barangay Mohon",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.938648, 10.809165],
    "markerOffset": [123.938648, 10.809165],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mohon",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.948715, 10.824435],
                [123.947362, 10.798448],
                [123.926902, 10.79176],
                [123.927156, 10.807852],
                [123.942727, 10.82955],
                [123.946484, 10.828476],
                [123.948715, 10.824435]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "nahus-an",
    "name": "Barangay Nahus-an",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.929075, 10.703619],
    "markerOffset": [123.929075, 10.703619],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Nahus-an",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.923661, 10.730515],
                [123.928371, 10.726107],
                [123.953523, 10.704981],
                [123.947382, 10.698047],
                [123.943179, 10.690156],
                [123.935431, 10.690729],
                [123.909741, 10.682975],
                [123.907466, 10.685858],
                [123.908292, 10.690375],
                [123.916624, 10.708042],
                [123.923661, 10.730515]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "pansoy",
    "name": "Barangay Pansoy",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.968615, 10.740343],
    "markerOffset": [123.968615, 10.740343],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Pansoy",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.983088, 10.737968],
                [123.985511, 10.729424],
                [123.975902, 10.728179],
                [123.973217, 10.724454],
                [123.967092, 10.72252],
                [123.962625, 10.716969],
                [123.949199, 10.753298],
                [123.958815, 10.754491],
                [123.985356, 10.755131],
                [123.983088, 10.737968]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sogod-poblacion",
    "name": "Barangay Poblacion",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.9975, 10.742758],
    "markerOffset": [123.9975, 10.742758],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.007398, 10.744312],
                [123.991304, 10.735359],
                [123.983088, 10.737968],
                [123.992816, 10.741444],
                [124.002741, 10.748378],
                [123.999803, 10.753012],
                [124.004289, 10.753395],
                [124.004824, 10.748124],
                [124.007398, 10.744312]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabunok",
    "name": "Barangay Tabunok",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.014471, 10.780779],
    "markerOffset": [124.014471, 10.780779],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tabunok",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.028941, 10.784502],
                [124.027172, 10.779119],
                [124.018216, 10.773043],
                [124.013272, 10.77101],
                [124.008825, 10.775226],
                [124.004107, 10.774669],
                [124.003377, 10.778321],
                [124.004148, 10.789652],
                [124.028941, 10.784502]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "takay",
    "name": "Barangay Takay",
    "city": "Sogod, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.955439, 10.803838],
    "markerOffset": [123.955439, 10.803838],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Takay",
            "city": "Sogod, Cebu",
            "status": "Power Restored",
            "psgc": "PH072247018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.964935, 10.815945],
                [123.961888, 10.787174],
                [123.950632, 10.781804],
                [123.947362, 10.798448],
                [123.948715, 10.824435],
                [123.954429, 10.823455],
                [123.964935, 10.815945]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagacay",
    "name": "Barangay Bagacay",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.008446, 10.875051],
    "markerOffset": [124.008446, 10.875051],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagacay",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.020051, 10.870245],
                [124.016266, 10.864666],
                [123.998412, 10.864303],
                [123.996786, 10.877754],
                [123.994907, 10.88457],
                [124.003827, 10.883681],
                [124.019841, 10.886399],
                [124.020051, 10.870245]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bili",
    "name": "Barangay Bili",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.955933, 10.837374],
    "markerOffset": [123.955933, 10.837374],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bili",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.967753, 10.840322],
                [123.969171, 10.839948],
                [123.968131, 10.830007],
                [123.944624, 10.836115],
                [123.940024, 10.833471],
                [123.937367, 10.837753],
                [123.950907, 10.842642],
                [123.956586, 10.843507],
                [123.967753, 10.840322]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bingay",
    "name": "Barangay Bingay",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.016171, 10.808131],
    "markerOffset": [124.016171, 10.808131],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bingay",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.034105, 10.80599],
                [124.033755, 10.799176],
                [124.029287, 10.799717],
                [124.027078, 10.801355],
                [124.021517, 10.801715],
                [124.017695, 10.800874],
                [124.016635, 10.802775],
                [124.010453, 10.799714],
                [124.005092, 10.802195],
                [124.00565, 10.818523],
                [124.019401, 10.818614],
                [124.018628, 10.807604],
                [124.034105, 10.80599]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bongdo",
    "name": "Barangay Bongdo",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.949575, 10.854658],
    "markerOffset": [123.949575, 10.854658],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bongdo",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.961621, 10.87111],
                [123.963864, 10.865849],
                [123.956586, 10.843507],
                [123.950907, 10.842642],
                [123.937367, 10.837753],
                [123.933039, 10.842859],
                [123.939172, 10.847237],
                [123.942071, 10.853153],
                [123.938179, 10.857413],
                [123.939698, 10.862527],
                [123.943105, 10.866782],
                [123.945853, 10.866687],
                [123.949674, 10.865794],
                [123.958443, 10.870554],
                [123.961621, 10.87111]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bongdo-gua",
    "name": "Barangay Bongdo Gua",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.966433, 10.853229],
    "markerOffset": [123.966433, 10.853229],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bongdo Gua",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.97425, 10.862061],
                [123.974444, 10.853623],
                [123.97351, 10.850294],
                [123.967753, 10.840322],
                [123.956586, 10.843507],
                [123.963864, 10.865849],
                [123.968704, 10.866726],
                [123.97425, 10.862061]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bongoyan",
    "name": "Barangay Bongoyan",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.00059, 10.854886],
    "markerOffset": [124.00059, 10.854886],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bongoyan",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.008843, 10.851578],
                [124.001315, 10.842434],
                [123.990463, 10.842066],
                [123.991228, 10.848171],
                [123.990343, 10.864591],
                [123.998412, 10.864303],
                [124.016266, 10.864666],
                [124.008843, 10.851578]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cadaruhan",
    "name": "Barangay Cadaruhan",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.026921, 10.854986],
    "markerOffset": [124.026921, 10.854986],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cadaruhan",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.039708, 10.8613],
                [124.041552, 10.84991],
                [124.039346, 10.843225],
                [124.037077, 10.840318],
                [124.033757, 10.841066],
                [124.031935, 10.843479],
                [124.028346, 10.842869],
                [124.024811, 10.844102],
                [124.023402, 10.847867],
                [124.015669, 10.849966],
                [124.011795, 10.848463],
                [124.008843, 10.851578],
                [124.016266, 10.864666],
                [124.020051, 10.870245],
                [124.028573, 10.865885],
                [124.039708, 10.8613]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cajel",
    "name": "Barangay Cajel",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.964004, 10.823324],
    "markerOffset": [123.964004, 10.823324],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cajel",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.968131, 10.830007],
                [123.975897, 10.830058],
                [123.97782, 10.82423],
                [123.979981, 10.805541],
                [123.974582, 10.807004],
                [123.964935, 10.815945],
                [123.954429, 10.823455],
                [123.948542, 10.824477],
                [123.946484, 10.828476],
                [123.942627, 10.829623],
                [123.940024, 10.833471],
                [123.944624, 10.836115],
                [123.968131, 10.830007]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "campusong",
    "name": "Barangay Campusong",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.026702, 10.813397],
    "markerOffset": [124.026702, 10.813397],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Campusong",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.030425, 10.822265],
                [124.03354, 10.816114],
                [124.034334, 10.812149],
                [124.034105, 10.80599],
                [124.018628, 10.807604],
                [124.019401, 10.818614],
                [124.030425, 10.822265]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "clavera",
    "name": "Barangay Clavera",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.986074, 10.833951],
    "markerOffset": [123.986074, 10.833951],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Clavera",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.001162, 10.829155],
                [123.985494, 10.827038],
                [123.97782, 10.82423],
                [123.975897, 10.830058],
                [123.968131, 10.830007],
                [123.969171, 10.839948],
                [123.974232, 10.838596],
                [123.983716, 10.838244],
                [123.988758, 10.83953],
                [123.990463, 10.842066],
                [124.001315, 10.842434],
                [124.001162, 10.829155]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "don-gregorio-antigua",
    "name": "Barangay Don Gregorio Antigua (Taytayan)",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.972071, 10.877183],
    "markerOffset": [123.972071, 10.877183],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Don Gregorio Antigua (Taytayan)",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.98109, 10.889749],
                [123.98205, 10.861878],
                [123.97425, 10.862061],
                [123.968704, 10.866726],
                [123.963864, 10.865849],
                [123.961621, 10.87111],
                [123.962186, 10.872856],
                [123.961063, 10.890433],
                [123.977866, 10.89027],
                [123.98109, 10.889749]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "laaw",
    "name": "Barangay Laaw",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.980128, 10.845155],
    "markerOffset": [123.980128, 10.845155],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Laaw",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.991228, 10.848171],
                [123.990463, 10.842066],
                [123.988758, 10.83953],
                [123.983716, 10.838244],
                [123.974232, 10.838596],
                [123.969171, 10.839948],
                [123.967753, 10.840322],
                [123.97351, 10.850294],
                [123.974444, 10.853623],
                [123.980648, 10.853333],
                [123.991228, 10.848171]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lugo",
    "name": "Barangay Lugo",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.992249, 10.816783],
    "markerOffset": [123.992249, 10.816783],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lugo",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.00565, 10.818523],
                [124.005092, 10.802195],
                [123.993677, 10.80971],
                [123.98945, 10.809285],
                [123.986077, 10.804688],
                [123.979981, 10.805541],
                [123.97782, 10.82423],
                [123.985494, 10.827038],
                [124.001162, 10.829155],
                [124.00565, 10.818523]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "managase",
    "name": "Barangay Managase",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.988777, 10.875253],
    "markerOffset": [123.988777, 10.875253],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Managase",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.994907, 10.88457],
                [123.996786, 10.877754],
                [123.998412, 10.864303],
                [123.990343, 10.864591],
                [123.98205, 10.861878],
                [123.98109, 10.889749],
                [123.986784, 10.88897],
                [123.991282, 10.88492],
                [123.994907, 10.88457]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "borbon-poblacion",
    "name": "Barangay Poblacion",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.015964, 10.833872],
    "markerOffset": [124.015964, 10.833872],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.033757, 10.841066],
                [124.031157, 10.838847],
                [124.032032, 10.835537],
                [124.029555, 10.824635],
                [124.030425, 10.822265],
                [124.019401, 10.818614],
                [124.00565, 10.818523],
                [124.001162, 10.829155],
                [124.001315, 10.842434],
                [124.008843, 10.851578],
                [124.011795, 10.848463],
                [124.015669, 10.849966],
                [124.023402, 10.847867],
                [124.024811, 10.844102],
                [124.028346, 10.842869],
                [124.031935, 10.843479],
                [124.033757, 10.841066]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sagay",
    "name": "Barangay Sagay",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.983631, 10.857072],
    "markerOffset": [123.983631, 10.857072],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sagay",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.991228, 10.848171],
                [123.980648, 10.853333],
                [123.974444, 10.853623],
                [123.97425, 10.862061],
                [123.98205, 10.861878],
                [123.990343, 10.864591],
                [123.991228, 10.848171]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-jose",
    "name": "Barangay San Jose",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.954796, 10.876457],
    "markerOffset": [123.954796, 10.876457],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Jose",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.961621, 10.87111],
                [123.958443, 10.870554],
                [123.949674, 10.865794],
                [123.945853, 10.866687],
                [123.94724, 10.871879],
                [123.945394, 10.873062],
                [123.951542, 10.882143],
                [123.961063, 10.890433],
                [123.962186, 10.872856],
                [123.961621, 10.87111]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabunan",
    "name": "Barangay Tabunan",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.033006, 10.871768],
    "markerOffset": [124.033006, 10.871768],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tabunan",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.021446, 10.886962],
                [124.026201, 10.878453],
                [124.031269, 10.876472],
                [124.048263, 10.875333],
                [124.046867, 10.86856],
                [124.041897, 10.861212],
                [124.039803, 10.861278],
                [124.039743, 10.861292],
                [124.039708, 10.8613],
                [124.028573, 10.865885],
                [124.020051, 10.870245],
                [124.019841, 10.886399],
                [124.021446, 10.886962]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tagnucan",
    "name": "Barangay Tagnucan",
    "city": "Borbon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.037586, 10.882124],
    "markerOffset": [124.037586, 10.882124],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tagnucan",
            "city": "Borbon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072213019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.048263, 10.875333],
                [124.031269, 10.876472],
                [124.026201, 10.878453],
                [124.021446, 10.886962],
                [124.028047, 10.890556],
                [124.034793, 10.884571],
                [124.037527, 10.886993],
                [124.051463, 10.886106],
                [124.053297, 10.884227],
                [124.053726, 10.8797],
                [124.0481, 10.8786],
                [124.048263, 10.875333]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "agsuwao",
    "name": "Barangay Agsuwao",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.936583, 10.675516],
    "markerOffset": [123.936583, 10.675516],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Agsuwao",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.920379, 10.667278],
                [123.917427, 10.685294],
                [123.935431, 10.690729],
                [123.943179, 10.690156],
                [123.946832, 10.689927],
                [123.95417, 10.686802],
                [123.94932, 10.659696],
                [123.939527, 10.657704],
                [123.920379, 10.667278]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "amancion",
    "name": "Barangay Amancion",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.916606, 10.637815],
    "markerOffset": [123.916606, 10.637815],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Amancion",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.937245, 10.646516],
                [123.935788, 10.640206],
                [123.913087, 10.626359],
                [123.904274, 10.62524],
                [123.904034, 10.638494],
                [123.913488, 10.65259],
                [123.92357, 10.640996],
                [123.937245, 10.646516]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "anapog",
    "name": "Barangay Anapog",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.911457, 10.665648],
    "markerOffset": [123.911457, 10.665648],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Anapog",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.913488, 10.65259],
                [123.904034, 10.638494],
                [123.905003, 10.648089],
                [123.905023, 10.673631],
                [123.909741, 10.682975],
                [123.917427, 10.685294],
                [123.920379, 10.667278],
                [123.913488, 10.65259]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bactas",
    "name": "Barangay Bactas",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.992829, 10.683989],
    "markerOffset": [123.992829, 10.683989],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bactas",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.000164, 10.675163],
                [123.980265, 10.674787],
                [123.989197, 10.69727],
                [123.994157, 10.697315],
                [124.000352, 10.687178],
                [124.006547, 10.683798],
                [124.000164, 10.675163]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "basak",
    "name": "Barangay Basak",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.983885, 10.636932],
    "markerOffset": [123.983885, 10.636932],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Basak",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.005531, 10.637019],
                [124.00268, 10.620457],
                [123.999388, 10.619757],
                [123.995517, 10.627656],
                [123.9787, 10.631149],
                [123.957289, 10.633667],
                [123.966373, 10.647191],
                [123.99059, 10.647567],
                [123.991479, 10.645316],
                [124.005531, 10.637019]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "binongkalan",
    "name": "Barangay Binongkalan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.015756, 10.630659],
    "markerOffset": [124.015756, 10.630659],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Binongkalan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.025701, 10.640183],
                [124.028692, 10.633865],
                [124.026836, 10.623422],
                [124.016103, 10.62252],
                [124.00268, 10.620457],
                [124.005531, 10.637019],
                [124.005799, 10.638894],
                [124.025701, 10.640183]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bongyas",
    "name": "Barangay Bongyas",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.928145, 10.653812],
    "markerOffset": [123.928145, 10.653812],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bongyas",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.94932, 10.659696],
                [123.937245, 10.646516],
                [123.92357, 10.640996],
                [123.913488, 10.65259],
                [123.920379, 10.667278],
                [123.939527, 10.657704],
                [123.94932, 10.659696]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cabungaan",
    "name": "Barangay Cabungaan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.985851, 10.660375],
    "markerOffset": [123.985851, 10.660375],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cabungaan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.000642, 10.652968],
                [123.99059, 10.647567],
                [123.966373, 10.647191],
                [123.970503, 10.658079],
                [123.980265, 10.674787],
                [124.000164, 10.675163],
                [124.000642, 10.652968]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cambangkaya",
    "name": "Barangay Cambangkaya",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.953219, 10.647602],
    "markerOffset": [123.953219, 10.647602],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cambangkaya",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.970503, 10.658079],
                [123.966373, 10.647191],
                [123.957289, 10.633667],
                [123.935788, 10.640206],
                [123.937245, 10.646516],
                [123.94932, 10.659696],
                [123.970503, 10.658079]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "can-ibuang",
    "name": "Barangay Can-ibuang",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.989873, 10.70727],
    "markerOffset": [123.989873, 10.70727],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Can-ibuang",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.000014, 10.708298],
                [123.994157, 10.697315],
                [123.989197, 10.69727],
                [123.979702, 10.708766],
                [123.968267, 10.708645],
                [123.998287, 10.716088],
                [124.000014, 10.708298]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "catmondaan",
    "name": "Barangay Catmondaan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.009565, 10.672172],
    "markerOffset": [124.009565, 10.672172],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Catmondaan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.021106, 10.664194],
                [124.000642, 10.652968],
                [124.000164, 10.675163],
                [124.006547, 10.683798],
                [124.000352, 10.687178],
                [124.014647, 10.691727],
                [124.01771, 10.675711],
                [124.021494, 10.668721],
                [124.021106, 10.664194]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "corazon",
    "name": "Barangay Corazon (Pob.)",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.008695, 10.721122],
    "markerOffset": [124.008695, 10.721122],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Corazon (Pob.)",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.013887, 10.723513],
                [124.014138, 10.719333],
                [124.011398, 10.71706],
                [124.001598, 10.721177],
                [124.003356, 10.723973],
                [124.013887, 10.723513]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "duyan",
    "name": "Barangay Duyan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.979326, 10.71712],
    "markerOffset": [123.979326, 10.71712],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Duyan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.003356, 10.723973],
                [124.001598, 10.721177],
                [123.998287, 10.716088],
                [123.968267, 10.708645],
                [123.960422, 10.713464],
                [123.967092, 10.72252],
                [123.973217, 10.724454],
                [123.975297, 10.727689],
                [123.976575, 10.722061],
                [123.980604, 10.720455],
                [123.988804, 10.721314],
                [124.003356, 10.723973]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "flores",
    "name": "Barangay Flores (Pob.)",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.006929, 10.714511],
    "markerOffset": [124.006929, 10.714511],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Flores (Pob.)",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.014825, 10.723303],
                [124.016165, 10.714743],
                [124.014247, 10.71029],
                [124.000014, 10.708298],
                [123.998287, 10.716088],
                [124.001598, 10.721177],
                [124.011398, 10.71706],
                [124.014138, 10.719333],
                [124.013887, 10.723513],
                [124.014825, 10.723303]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ginabucan",
    "name": "Barangay Ginabucan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.96293, 10.670322],
    "markerOffset": [123.96293, 10.670322],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ginabucan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.980265, 10.674787],
                [123.970503, 10.658079],
                [123.94932, 10.659696],
                [123.95417, 10.686802],
                [123.958518, 10.684082],
                [123.965469, 10.680386],
                [123.980265, 10.674787]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "macaas",
    "name": "Barangay Macaas",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.004989, 10.698907],
    "markerOffset": [124.004989, 10.698907],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Macaas",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.014647, 10.691727],
                [124.000352, 10.687178],
                [123.994157, 10.697315],
                [124.000014, 10.708298],
                [124.014247, 10.71029],
                [124.012199, 10.699762],
                [124.014647, 10.691727]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "panalipan",
    "name": "Barangay Panalipan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.011034, 10.648507],
    "markerOffset": [124.011034, 10.648507],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Panalipan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.025701, 10.640183],
                [124.005799, 10.638894],
                [124.005531, 10.637019],
                [123.991479, 10.645316],
                [123.99059, 10.647567],
                [124.000642, 10.652968],
                [124.021106, 10.664194],
                [124.020991, 10.659594],
                [124.026426, 10.645096],
                [124.025701, 10.640183]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-jose-pob",
    "name": "Barangay San Jose Pob. (Catadman)",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.994625, 10.725713],
    "markerOffset": [123.994625, 10.725713],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Jose Pob. (Catadman)",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.014825, 10.723303],
                [124.013887, 10.723513],
                [124.003356, 10.723973],
                [123.988804, 10.721314],
                [123.980604, 10.720455],
                [123.976575, 10.722061],
                [123.975297, 10.727689],
                [123.979887, 10.729533],
                [123.985318, 10.729539],
                [123.995296, 10.726506],
                [124.000184, 10.729307],
                [124.005239, 10.728042],
                [124.008848, 10.730682],
                [124.016536, 10.730301],
                [124.014825, 10.723303]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabili",
    "name": "Barangay Tabili",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.96016, 10.699273],
    "markerOffset": [123.96016, 10.699273],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tabili",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.960422, 10.713464],
                [123.968267, 10.708645],
                [123.979702, 10.708766],
                [123.958518, 10.684082],
                [123.95417, 10.686802],
                [123.946832, 10.689927],
                [123.943179, 10.690156],
                [123.947382, 10.698047],
                [123.955425, 10.70648],
                [123.955445, 10.711893],
                [123.960422, 10.713464]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tinabyonan",
    "name": "Barangay Tinabyonan",
    "city": "Catmon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.975792, 10.690376],
    "markerOffset": [123.975792, 10.690376],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tinabyonan",
            "city": "Catmon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072216017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.980265, 10.674787],
                [123.965469, 10.680386],
                [123.958518, 10.684082],
                [123.979702, 10.708766],
                [123.989197, 10.69727],
                [123.980265, 10.674787]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "antipolo",
    "name": "Barangay Antipolo",
    "city": "Medellin, Cebu",
    "status": "Emergency Interruption",
    "timeRemaining": "45m left",
    "coordinates": [123.955932, 11.161551],
    "markerOffset": [123.955932, 11.161551],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Antipolo",
            "city": "Medellin, Cebu",
            "status": "Emergency Interruption",
            "psgc": "PH072231001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.963866, 11.1762],
                [123.966484, 11.169903],
                [123.967408, 11.168763],
                [123.967124, 11.166379],
                [123.967372, 11.151938],
                [123.959498, 11.149648],
                [123.950315, 11.149516],
                [123.946436, 11.149077],
                [123.94458, 11.153257],
                [123.942793, 11.156497],
                [123.943193, 11.157315],
                [123.942114, 11.159924],
                [123.942394, 11.161932],
                [123.943127, 11.16338],
                [123.94319, 11.167101],
                [123.943583, 11.168879],
                [123.955029, 11.168862],
                [123.953656, 11.170937],
                [123.954938, 11.17179],
                [123.956142, 11.17411],
                [123.956347, 11.176784],
                [123.95864, 11.177143],
                [123.959709, 11.177898],
                [123.960986, 11.177671],
                [123.963866, 11.1762]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "canhabagat",
    "name": "Barangay Canhabagat",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.995214, 11.110022],
    "markerOffset": [123.995214, 11.110022],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Canhabagat",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.000164, 11.117722],
                [124.003749, 11.113643],
                [124.007037, 11.111371],
                [124.004862, 11.109553],
                [124.005405, 11.107611],
                [124.004352, 11.106288],
                [124.001602, 11.104304],
                [124.000096, 11.102484],
                [124.000407, 11.100122],
                [124.000227, 11.097818],
                [123.999524, 11.096973],
                [123.998127, 11.096879],
                [123.994571, 11.099442],
                [123.98876, 11.103936],
                [123.983965, 11.107209],
                [123.984385, 11.109489],
                [123.985026, 11.110857],
                [123.993369, 11.123762],
                [124.000164, 11.117722]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "caputatan-norte",
    "name": "Barangay Caputatan Norte",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.980133, 11.153324],
    "markerOffset": [123.980133, 11.153324],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Caputatan Norte",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.992838, 11.168143],
                [123.993048, 11.159083],
                [123.993979, 11.148942],
                [123.993417, 11.144912],
                [123.99255, 11.140432],
                [123.980121, 11.136202],
                [123.978817, 11.136396],
                [123.976215, 11.136098],
                [123.973318, 11.134962],
                [123.973252, 11.138648],
                [123.96749, 11.13997],
                [123.96704, 11.141871],
                [123.966825, 11.14443],
                [123.967372, 11.151938],
                [123.967124, 11.166379],
                [123.967408, 11.168763],
                [123.975649, 11.16806],
                [123.975815, 11.170081],
                [123.981634, 11.169335],
                [123.992838, 11.168143]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "caputatan-sur",
    "name": "Barangay Caputatan Sur",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.982501, 11.125188],
    "markerOffset": [123.982501, 11.125188],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Caputatan Sur",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.993369, 11.123762],
                [123.985026, 11.110857],
                [123.984385, 11.109489],
                [123.983965, 11.107209],
                [123.978847, 11.108716],
                [123.972489, 11.114432],
                [123.969581, 11.118053],
                [123.967857, 11.12221],
                [123.966642, 11.124588],
                [123.968265, 11.126389],
                [123.969785, 11.126852],
                [123.971019, 11.130302],
                [123.972513, 11.1323],
                [123.972258, 11.133821],
                [123.973318, 11.134962],
                [123.976215, 11.136098],
                [123.978817, 11.136396],
                [123.980121, 11.136202],
                [123.99255, 11.140432],
                [123.999181, 11.132718],
                [123.993369, 11.123762]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "curva",
    "name": "Barangay Curva",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.002223, 11.136627],
    "markerOffset": [124.002223, 11.136627],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Curva",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.014325, 11.14698],
                [124.012839, 11.139363],
                [124.010488, 11.136174],
                [124.008436, 11.134798],
                [124.006873, 11.132804],
                [124.003629, 11.127346],
                [124.00298, 11.125724],
                [124.005795, 11.12299],
                [124.003104, 11.120934],
                [124.000164, 11.117722],
                [123.993369, 11.123762],
                [123.999181, 11.132718],
                [123.99255, 11.140432],
                [123.993417, 11.144912],
                [123.993979, 11.148942],
                [123.996859, 11.148509],
                [124.00381, 11.147825],
                [124.014325, 11.14698]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "daanlungsod",
    "name": "Barangay Daanlungsod",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.957762, 11.145764],
    "markerOffset": [123.957762, 11.145764],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Daanlungsod",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.96704, 11.141871],
                [123.960408, 11.14125],
                [123.954081, 11.140924],
                [123.950088, 11.140442],
                [123.949137, 11.143552],
                [123.948055, 11.144827],
                [123.946436, 11.149077],
                [123.950315, 11.149516],
                [123.959498, 11.149648],
                [123.967372, 11.151938],
                [123.966825, 11.14443],
                [123.96704, 11.141871]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dalingding-sur",
    "name": "Barangay Dalingding Sur",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.985546, 11.179652],
    "markerOffset": [123.985546, 11.179652],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dalingding Sur",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.992838, 11.168143],
                [123.981634, 11.169335],
                [123.975815, 11.170081],
                [123.976429, 11.173851],
                [123.977666, 11.183503],
                [123.978182, 11.18923],
                [123.978651, 11.192772],
                [123.988244, 11.19021],
                [123.995658, 11.185786],
                [123.994081, 11.175162],
                [123.992838, 11.168143]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dayhagon",
    "name": "Barangay Dayhagon",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.98013, 11.084275],
    "markerOffset": [123.98013, 11.084275],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dayhagon",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.992479, 11.088628],
                [123.992004, 11.087558],
                [123.991968, 11.085353],
                [123.991242, 11.083755],
                [123.99125, 11.082161],
                [123.990229, 11.080536],
                [123.988221, 11.080908],
                [123.984877, 11.080912],
                [123.983357, 11.077874],
                [123.983599, 11.075665],
                [123.984286, 11.074531],
                [123.9801, 11.073551],
                [123.979165, 11.07359],
                [123.977006, 11.074907],
                [123.974663, 11.077053],
                [123.971748, 11.079234],
                [123.969008, 11.080623],
                [123.96735, 11.083237],
                [123.969005, 11.087903],
                [123.970021, 11.087644],
                [123.973258, 11.088126],
                [123.974817, 11.090157],
                [123.977839, 11.092282],
                [123.981712, 11.094358],
                [123.990008, 11.089809],
                [123.992479, 11.088628]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "don-virgilio-gonzales",
    "name": "Barangay Don Virgilio Gonzales",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.984274, 11.098231],
    "markerOffset": [123.984274, 11.098231],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Don Virgilio Gonzales",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.983965, 11.107209],
                [123.98876, 11.103936],
                [123.994571, 11.099442],
                [123.998127, 11.096879],
                [123.996226, 11.094587],
                [123.994663, 11.095162],
                [123.993608, 11.094446],
                [123.993416, 11.093344],
                [123.992136, 11.090297],
                [123.992479, 11.088628],
                [123.990008, 11.089809],
                [123.981712, 11.094358],
                [123.977839, 11.092282],
                [123.974817, 11.090157],
                [123.972602, 11.097554],
                [123.972927, 11.099456],
                [123.974515, 11.100116],
                [123.974764, 11.102221],
                [123.975582, 11.102786],
                [123.979164, 11.102922],
                [123.979158, 11.106584],
                [123.978847, 11.108716],
                [123.983965, 11.107209]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "gibitngil",
    "name": "Barangay Gibitngil",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.92142, 11.184788],
    "markerOffset": [123.92142, 11.184788],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Gibitngil",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.922904, 11.195331],
                [123.925414, 11.194173],
                [123.925882, 11.193171],
                [123.925964, 11.191211],
                [123.924772, 11.186836],
                [123.925097, 11.18461],
                [123.926054, 11.181661],
                [123.925962, 11.178323],
                [123.925196, 11.177224],
                [123.925755, 11.175779],
                [123.924966, 11.172579],
                [123.924378, 11.172209],
                [123.920741, 11.172741],
                [123.919451, 11.17515],
                [123.919544, 11.176437],
                [123.918536, 11.179227],
                [123.917422, 11.180937],
                [123.918075, 11.183455],
                [123.917228, 11.185367],
                [123.915212, 11.188447],
                [123.914884, 11.189502],
                [123.915954, 11.19235],
                [123.917807, 11.194198],
                [123.921868, 11.195286],
                [123.922904, 11.195331]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kawit",
    "name": "Barangay Kawit",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.957482, 11.189292],
    "markerOffset": [123.957482, 11.189292],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kawit",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.969115, 11.193635],
                [123.964475, 11.184176],
                [123.963866, 11.1762],
                [123.960986, 11.177671],
                [123.959709, 11.177898],
                [123.95864, 11.177143],
                [123.956347, 11.176784],
                [123.955055, 11.176755],
                [123.953311, 11.178209],
                [123.9509, 11.179375],
                [123.944822, 11.179191],
                [123.94414, 11.18249],
                [123.94407, 11.185429],
                [123.944757, 11.187872],
                [123.946835, 11.190349],
                [123.951741, 11.194264],
                [123.953853, 11.197421],
                [123.955763, 11.199502],
                [123.956473, 11.200921],
                [123.958123, 11.203009],
                [123.96043, 11.204982],
                [123.965334, 11.201515],
                [123.969893, 11.197403],
                [123.969115, 11.193635]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lamintak-norte",
    "name": "Barangay Lamintak Norte",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.966792, 11.102023],
    "markerOffset": [123.966792, 11.102023],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lamintak Norte",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.972602, 11.097554],
                [123.970988, 11.097258],
                [123.968566, 11.097359],
                [123.958943, 11.096399],
                [123.958985, 11.098808],
                [123.958126, 11.099939],
                [123.955577, 11.101708],
                [123.95627, 11.105023],
                [123.957068, 11.105028],
                [123.957318, 11.105216],
                [123.957359, 11.105247],
                [123.958881, 11.104985],
                [123.961693, 11.105562],
                [123.963442, 11.106499],
                [123.968155, 11.105982],
                [123.979158, 11.106584],
                [123.979164, 11.102922],
                [123.975582, 11.102786],
                [123.974764, 11.102221],
                [123.974515, 11.100116],
                [123.972927, 11.099456],
                [123.972602, 11.097554]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lamintak-sur",
    "name": "Barangay Lamintak Sur",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.966458, 11.09219],
    "markerOffset": [123.966458, 11.09219],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lamintak Sur",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.974817, 11.090157],
                [123.973258, 11.088126],
                [123.970021, 11.087644],
                [123.969005, 11.087903],
                [123.96735, 11.083237],
                [123.967146, 11.083272],
                [123.966786, 11.083452],
                [123.967376, 11.085122],
                [123.965563, 11.085676],
                [123.965512, 11.087114],
                [123.963386, 11.087389],
                [123.962818, 11.088755],
                [123.96178, 11.089094],
                [123.960507, 11.090582],
                [123.959648, 11.090114],
                [123.957802, 11.090794],
                [123.957401, 11.092578],
                [123.95753, 11.094528],
                [123.958943, 11.096399],
                [123.968566, 11.097359],
                [123.970988, 11.097258],
                [123.972602, 11.097554],
                [123.974817, 11.090157]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "luy-a",
    "name": "Barangay Luy-a",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.966377, 11.11267],
    "markerOffset": [123.966377, 11.11267],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Luy-a",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.966642, 11.124588],
                [123.967857, 11.12221],
                [123.969581, 11.118053],
                [123.972489, 11.114432],
                [123.978847, 11.108716],
                [123.979158, 11.106584],
                [123.968155, 11.105982],
                [123.963442, 11.106499],
                [123.961693, 11.105562],
                [123.958881, 11.104985],
                [123.957359, 11.105247],
                [123.957089, 11.107727],
                [123.959944, 11.108084],
                [123.959303, 11.110707],
                [123.955283, 11.111908],
                [123.956267, 11.113986],
                [123.958336, 11.115552],
                [123.959496, 11.117233],
                [123.960387, 11.116974],
                [123.962506, 11.117695],
                [123.961012, 11.119378],
                [123.963156, 11.121956],
                [123.964133, 11.123765],
                [123.966642, 11.124588]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "maharuhay",
    "name": "Barangay Maharuhay",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.971318, 11.18098],
    "markerOffset": [123.971318, 11.18098],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maharuhay",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.978651, 11.192772],
                [123.978182, 11.18923],
                [123.977666, 11.183503],
                [123.976429, 11.173851],
                [123.975815, 11.170081],
                [123.975649, 11.16806],
                [123.967408, 11.168763],
                [123.966484, 11.169903],
                [123.963866, 11.1762],
                [123.964475, 11.184176],
                [123.969115, 11.193635],
                [123.978651, 11.192772]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mahawak",
    "name": "Barangay Mahawak",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.949623, 11.173891],
    "markerOffset": [123.949623, 11.173891],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mahawak",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.956347, 11.176784],
                [123.956142, 11.17411],
                [123.954938, 11.17179],
                [123.953656, 11.170937],
                [123.955029, 11.168862],
                [123.943583, 11.168879],
                [123.943784, 11.171502],
                [123.944352, 11.173754],
                [123.944822, 11.179191],
                [123.9509, 11.179375],
                [123.953311, 11.178209],
                [123.955055, 11.176755],
                [123.956347, 11.176784]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "panugnawan",
    "name": "Barangay Panugnawan",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.003219, 11.158052],
    "markerOffset": [124.003219, 11.158052],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Panugnawan",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.014325, 11.14698],
                [124.00381, 11.147825],
                [123.996859, 11.148509],
                [123.993979, 11.148942],
                [123.993048, 11.159083],
                [123.992838, 11.168143],
                [123.999006, 11.168638],
                [124.01132, 11.16862],
                [124.014325, 11.14698]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "medellin-poblacion",
    "name": "Barangay Poblacion",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.96286, 11.134201],
    "markerOffset": [123.96286, 11.134201],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.973318, 11.134962],
                [123.972258, 11.133821],
                [123.972513, 11.1323],
                [123.971019, 11.130302],
                [123.969785, 11.126852],
                [123.968265, 11.126389],
                [123.966642, 11.124588],
                [123.964133, 11.123765],
                [123.963875, 11.125089],
                [123.962148, 11.126153],
                [123.960855, 11.125523],
                [123.959273, 11.125995],
                [123.958226, 11.127814],
                [123.958954, 11.129965],
                [123.957534, 11.130335],
                [123.956577, 11.12984],
                [123.955602, 11.131007],
                [123.953352, 11.135635],
                [123.952255, 11.137196],
                [123.950478, 11.136876],
                [123.950565, 11.138941],
                [123.950088, 11.140442],
                [123.954081, 11.140924],
                [123.960408, 11.14125],
                [123.96704, 11.141871],
                [123.96749, 11.13997],
                [123.973252, 11.138648],
                [123.973318, 11.134962]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tindog",
    "name": "Barangay Tindog",
    "city": "Medellin, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.011731, 11.125879],
    "markerOffset": [124.011731, 11.125879],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tindog",
            "city": "Medellin, Cebu",
            "status": "Power Restored",
            "psgc": "PH072231015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.007037, 11.111371],
                [124.003749, 11.113643],
                [124.000164, 11.117722],
                [124.003104, 11.120934],
                [124.005795, 11.12299],
                [124.00298, 11.125724],
                [124.003629, 11.127346],
                [124.006873, 11.132804],
                [124.008436, 11.134798],
                [124.010488, 11.136174],
                [124.0193, 11.134438],
                [124.024143, 11.130371],
                [124.023027, 11.126765],
                [124.022213, 11.126401],
                [124.021718, 11.124171],
                [124.02039, 11.121587],
                [124.019479, 11.122399],
                [124.016492, 11.12302],
                [124.013631, 11.123095],
                [124.013168, 11.12083],
                [124.010995, 11.119919],
                [124.009809, 11.11839],
                [124.008961, 11.11833],
                [124.008976, 11.116641],
                [124.008102, 11.116046],
                [124.008854, 11.114764],
                [124.00813, 11.113975],
                [124.007037, 11.111371]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-remigio-anapog",
    "name": "Barangay Anapog",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.910778, 11.028466],
    "markerOffset": [123.910778, 11.028466],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Anapog",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.920216, 11.034515],
                [123.920342, 11.026131],
                [123.911571, 11.017535],
                [123.910534, 11.016173],
                [123.908067, 11.019376],
                [123.904437, 11.023443],
                [123.902174, 11.026993],
                [123.901346, 11.029343],
                [123.901657, 11.033806],
                [123.902139, 11.035452],
                [123.905117, 11.037563],
                [123.907811, 11.036867],
                [123.920216, 11.034515]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "argawanon",
    "name": "Barangay Argawanon",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.955515, 11.073546],
    "markerOffset": [123.955515, 11.073546],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Argawanon",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.959277, 11.060715],
                [123.956866, 11.060983],
                [123.947532, 11.063506],
                [123.946766, 11.067844],
                [123.945804, 11.069261],
                [123.945626, 11.071166],
                [123.948044, 11.075191],
                [123.948461, 11.075162],
                [123.949822, 11.0788],
                [123.954281, 11.085146],
                [123.955163, 11.087281],
                [123.957007, 11.086407],
                [123.958115, 11.08686],
                [123.961259, 11.085367],
                [123.965024, 11.081959],
                [123.962321, 11.072653],
                [123.959277, 11.060715]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagtic",
    "name": "Barangay Bagtic",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.921693, 10.899956],
    "markerOffset": [123.921693, 10.899956],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagtic",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.940278, 10.906557],
                [123.941253, 10.902008],
                [123.926475, 10.891287],
                [123.925278, 10.891347],
                [123.923738, 10.888222],
                [123.922225, 10.884374],
                [123.91353, 10.887317],
                [123.907831, 10.889802],
                [123.909332, 10.904533],
                [123.910181, 10.905292],
                [123.918615, 10.915665],
                [123.92137, 10.913494],
                [123.926235, 10.913358],
                [123.926917, 10.91154],
                [123.92951, 10.908067],
                [123.929646, 10.906275],
                [123.930812, 10.904977],
                [123.93592, 10.906521],
                [123.939163, 10.906163],
                [123.940278, 10.906557]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bancasan",
    "name": "Barangay Bancasan",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.917777, 11.040684],
    "markerOffset": [123.917777, 11.040684],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bancasan",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.929275, 11.039384],
                [123.928258, 11.036582],
                [123.920216, 11.034515],
                [123.907811, 11.036867],
                [123.905117, 11.037563],
                [123.908775, 11.040622],
                [123.910182, 11.043813],
                [123.912978, 11.046346],
                [123.914467, 11.048436],
                [123.915869, 11.047765],
                [123.91769, 11.049069],
                [123.918273, 11.048727],
                [123.929275, 11.039384]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "batad",
    "name": "Barangay Batad",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.943799, 11.012341],
    "markerOffset": [123.943799, 11.012341],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Batad",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.950792, 11.019242],
                [123.950609, 11.005929],
                [123.950673, 10.994894],
                [123.94808, 10.996903],
                [123.946514, 10.996704],
                [123.943629, 11.008272],
                [123.94168, 11.009453],
                [123.934908, 11.012705],
                [123.934092, 11.016599],
                [123.934822, 11.021063],
                [123.933659, 11.025669],
                [123.94164, 11.021318],
                [123.947641, 11.019347],
                [123.950792, 11.019242]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "busogon",
    "name": "Barangay Busogon",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.931354, 10.962945],
    "markerOffset": [123.931354, 10.962945],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Busogon",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.92591, 10.973783],
                [123.925998, 10.973757],
                [123.930969, 10.972277],
                [123.942262, 10.970327],
                [123.943427, 10.960161],
                [123.938635, 10.954385],
                [123.920905, 10.954825],
                [123.920188, 10.954704],
                [123.919723, 10.956609],
                [123.919712, 10.958998],
                [123.918741, 10.95979],
                [123.918809, 10.963167],
                [123.920019, 10.963944],
                [123.920411, 10.965829],
                [123.921691, 10.967261],
                [123.922851, 10.967488],
                [123.925056, 10.969614],
                [123.925876, 10.970989],
                [123.925803, 10.973768],
                [123.92591, 10.973783]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "calambua",
    "name": "Barangay Calambua",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.948292, 10.894253],
    "markerOffset": [123.948292, 10.894253],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Calambua",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.957151, 10.904074],
                [123.95837, 10.891572],
                [123.961063, 10.890433],
                [123.951542, 10.882143],
                [123.948973, 10.884327],
                [123.943577, 10.885519],
                [123.935578, 10.886969],
                [123.941253, 10.902008],
                [123.940278, 10.906557],
                [123.941906, 10.906256],
                [123.94307, 10.906707],
                [123.945502, 10.904923],
                [123.947532, 10.904573],
                [123.94788, 10.903529],
                [123.950135, 10.904172],
                [123.957151, 10.904074]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "canagahan",
    "name": "Barangay Canagahan",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.943092, 10.942048],
    "markerOffset": [123.943092, 10.942048],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Canagahan",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.95576, 10.946285],
                [123.954165, 10.942974],
                [123.952964, 10.930449],
                [123.953694, 10.926586],
                [123.952868, 10.926633],
                [123.949471, 10.929594],
                [123.948022, 10.930529],
                [123.945531, 10.931203],
                [123.942313, 10.931353],
                [123.938611, 10.9298],
                [123.937031, 10.930552],
                [123.93606, 10.92994],
                [123.933452, 10.930881],
                [123.931908, 10.93201],
                [123.931962, 10.933434],
                [123.928521, 10.933999],
                [123.933724, 10.947067],
                [123.938635, 10.954385],
                [123.943427, 10.960161],
                [123.947442, 10.955282],
                [123.95576, 10.946285]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dapdap",
    "name": "Barangay Dapdap",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.927832, 11.031885],
    "markerOffset": [123.927832, 11.031885],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dapdap",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.933956, 11.03586],
                [123.933659, 11.025669],
                [123.920342, 11.026131],
                [123.920216, 11.034515],
                [123.928258, 11.036582],
                [123.929275, 11.039384],
                [123.933175, 11.041665],
                [123.933956, 11.03586]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "gawaygaway",
    "name": "Barangay Gawaygaway",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.950976, 10.96369],
    "markerOffset": [123.950976, 10.96369],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Gawaygaway",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.951644, 10.977567],
                [123.955331, 10.976699],
                [123.955854, 10.975206],
                [123.956589, 10.969155],
                [123.956893, 10.963227],
                [123.957955, 10.956173],
                [123.959333, 10.951064],
                [123.95576, 10.946285],
                [123.947442, 10.955282],
                [123.943427, 10.960161],
                [123.942262, 10.970327],
                [123.947336, 10.978621],
                [123.949449, 10.977069],
                [123.951644, 10.977567]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "hagnaya",
    "name": "Barangay Hagnaya",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.94596, 11.088087],
    "markerOffset": [123.94596, 11.088087],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Hagnaya",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.942089, 11.096927],
                [123.942122, 11.096864],
                [123.944114, 11.095595],
                [123.943987, 11.094976],
                [123.946432, 11.092357],
                [123.946091, 11.091724],
                [123.948528, 11.089598],
                [123.951066, 11.087794],
                [123.952521, 11.087215],
                [123.953824, 11.087687],
                [123.955163, 11.087281],
                [123.954281, 11.085146],
                [123.949822, 11.0788],
                [123.941167, 11.088786],
                [123.936065, 11.090378],
                [123.942087, 11.096929],
                [123.942089, 11.096927]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kayam",
    "name": "Barangay Kayam",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.945691, 11.042118],
    "markerOffset": [123.945691, 11.042118],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kayam",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.951567, 11.032857],
                [123.94912, 11.033095],
                [123.933956, 11.03586],
                [123.933175, 11.041665],
                [123.9346, 11.042446],
                [123.938711, 11.04626],
                [123.94209, 11.04775],
                [123.957274, 11.054073],
                [123.952366, 11.036341],
                [123.951567, 11.032857]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kinawahan",
    "name": "Barangay Kinawahan",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.92628, 10.946368],
    "markerOffset": [123.92628, 10.946368],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kinawahan",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.938635, 10.954385],
                [123.933724, 10.947067],
                [123.928521, 10.933999],
                [123.91496, 10.944062],
                [123.913189, 10.944324],
                [123.914152, 10.946071],
                [123.915731, 10.94619],
                [123.916607, 10.947285],
                [123.91877, 10.948717],
                [123.920349, 10.948875],
                [123.921472, 10.949762],
                [123.921022, 10.951583],
                [123.921322, 10.952976],
                [123.920188, 10.954704],
                [123.920905, 10.954825],
                [123.938635, 10.954385]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lambusan",
    "name": "Barangay Lambusan",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.939411, 10.99909],
    "markerOffset": [123.939411, 10.99909],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lambusan",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.950673, 10.994894],
                [123.951248, 10.985611],
                [123.946724, 10.985677],
                [123.945064, 10.986168],
                [123.942491, 10.990828],
                [123.940896, 10.993142],
                [123.939544, 10.992797],
                [123.93707, 10.990266],
                [123.935911, 10.990937],
                [123.933461, 10.991394],
                [123.932985, 10.992746],
                [123.932565, 10.99291],
                [123.932628, 10.992997],
                [123.93174, 10.994052],
                [123.930032, 10.994814],
                [123.930555, 10.998351],
                [123.92986, 10.999852],
                [123.929617, 11.002917],
                [123.92837, 11.005036],
                [123.928291, 11.007538],
                [123.929106, 11.007695],
                [123.933969, 11.011025],
                [123.934908, 11.012705],
                [123.94168, 11.009453],
                [123.943629, 11.008272],
                [123.946514, 10.996704],
                [123.94808, 10.996903],
                [123.950673, 10.994894]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lawis",
    "name": "Barangay Lawis",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.946919, 11.055917],
    "markerOffset": [123.946919, 11.055917],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lawis",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.959277, 11.060715],
                [123.957274, 11.054073],
                [123.94209, 11.04775],
                [123.938711, 11.04626],
                [123.937626, 11.056032],
                [123.936251, 11.0606],
                [123.94316, 11.060578],
                [123.947532, 11.063506],
                [123.956866, 11.060983],
                [123.959277, 11.060715]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "libaong",
    "name": "Barangay Libaong",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.938582, 10.924425],
    "markerOffset": [123.938582, 10.924425],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Libaong",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.953694, 10.926586],
                [123.955055, 10.919551],
                [123.953185, 10.919847],
                [123.948814, 10.918989],
                [123.946226, 10.918079],
                [123.945025, 10.918362],
                [123.941681, 10.916217],
                [123.940573, 10.916807],
                [123.938075, 10.916452],
                [123.937599, 10.917094],
                [123.933463, 10.917136],
                [123.927226, 10.919509],
                [123.926568, 10.92074],
                [123.92542, 10.920606],
                [123.92473, 10.92176],
                [123.922616, 10.92306],
                [123.928521, 10.933999],
                [123.931962, 10.933434],
                [123.931908, 10.93201],
                [123.933452, 10.930881],
                [123.93606, 10.92994],
                [123.937031, 10.930552],
                [123.938611, 10.9298],
                [123.942313, 10.931353],
                [123.945531, 10.931203],
                [123.948022, 10.930529],
                [123.949471, 10.929594],
                [123.952868, 10.926633],
                [123.953694, 10.926586]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "looc",
    "name": "Barangay Looc",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.94009, 11.066389],
    "markerOffset": [123.94009, 11.066389],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Looc",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.945626, 11.071166],
                [123.945804, 11.069261],
                [123.946766, 11.067844],
                [123.947532, 11.063506],
                [123.94316, 11.060578],
                [123.936251, 11.0606],
                [123.932382, 11.062355],
                [123.932053, 11.063467],
                [123.93342, 11.064613],
                [123.934114, 11.066872],
                [123.935719, 11.069345],
                [123.936431, 11.074186],
                [123.93763, 11.074551],
                [123.94177, 11.07184],
                [123.945626, 11.071166]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "luyang",
    "name": "Barangay Luyang",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.906404, 10.9158],
    "markerOffset": [123.906404, 10.9158],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Luyang",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.918615, 10.915665],
                [123.910181, 10.905292],
                [123.909332, 10.904533],
                [123.907265, 10.905949],
                [123.9047, 10.906299],
                [123.903694, 10.907247],
                [123.901358, 10.907986],
                [123.899886, 10.907621],
                [123.897794, 10.906401],
                [123.896772, 10.906851],
                [123.895141, 10.910436],
                [123.895497, 10.91288],
                [123.898086, 10.917602],
                [123.89959, 10.91881],
                [123.898095, 10.91941],
                [123.898728, 10.921437],
                [123.900338, 10.923707],
                [123.900263, 10.925324],
                [123.901523, 10.926739],
                [123.903566, 10.926475],
                [123.904593, 10.925991],
                [123.90931, 10.927234],
                [123.909921, 10.926103],
                [123.912673, 10.923788],
                [123.912493, 10.922255],
                [123.915126, 10.921968],
                [123.91599, 10.919093],
                [123.916694, 10.917947],
                [123.918086, 10.917605],
                [123.918615, 10.915665]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mano",
    "name": "Barangay Mano",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.929807, 11.050743],
    "markerOffset": [123.929807, 11.050743],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mano",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.932382, 11.062355],
                [123.936251, 11.0606],
                [123.937626, 11.056032],
                [123.938711, 11.04626],
                [123.9346, 11.042446],
                [123.933175, 11.041665],
                [123.929275, 11.039384],
                [123.918273, 11.048727],
                [123.91769, 11.049069],
                [123.920932, 11.053613],
                [123.92348, 11.055735],
                [123.924378, 11.055374],
                [123.9264, 11.057281],
                [123.925664, 11.058294],
                [123.927995, 11.058783],
                [123.927975, 11.05958],
                [123.929509, 11.060494],
                [123.930285, 11.061954],
                [123.932382, 11.062355]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-remigio-poblacion",
    "name": "Barangay Poblacion",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.940833, 11.080853],
    "markerOffset": [123.940833, 11.080853],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.936065, 11.090378],
                [123.941167, 11.088786],
                [123.949822, 11.0788],
                [123.948461, 11.075162],
                [123.948044, 11.075191],
                [123.945626, 11.071166],
                [123.94177, 11.07184],
                [123.93763, 11.074551],
                [123.936431, 11.074186],
                [123.936331, 11.074199],
                [123.936246, 11.074212],
                [123.935898, 11.077906],
                [123.935157, 11.078964],
                [123.935136, 11.081279],
                [123.93383, 11.086432],
                [123.931852, 11.092214],
                [123.936065, 11.090378]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "punta",
    "name": "Barangay Punta",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.936415, 11.098868],
    "markerOffset": [123.936415, 11.098868],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Punta",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.942087, 11.096929],
                [123.936065, 11.090378],
                [123.931852, 11.092214],
                [123.932345, 11.093377],
                [123.932074, 11.095075],
                [123.932629, 11.096535],
                [123.93225, 11.098084],
                [123.932786, 11.098937],
                [123.933014, 11.104325],
                [123.933319, 11.105686],
                [123.934558, 11.107499],
                [123.937007, 11.107673],
                [123.93821, 11.106432],
                [123.939026, 11.103715],
                [123.940937, 11.100749],
                [123.942087, 11.096929]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sab-a",
    "name": "Barangay Sab-a",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.940206, 10.912496],
    "markerOffset": [123.940206, 10.912496],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sab-a",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243022"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.955055, 10.919551],
                [123.956176, 10.913587],
                [123.957151, 10.904074],
                [123.950135, 10.904172],
                [123.94788, 10.903529],
                [123.947532, 10.904573],
                [123.945502, 10.904923],
                [123.94307, 10.906707],
                [123.941906, 10.906256],
                [123.940278, 10.906557],
                [123.939163, 10.906163],
                [123.93592, 10.906521],
                [123.930812, 10.904977],
                [123.929646, 10.906275],
                [123.92951, 10.908067],
                [123.926917, 10.91154],
                [123.926235, 10.913358],
                [123.92137, 10.913494],
                [123.918615, 10.915665],
                [123.922616, 10.92306],
                [123.92473, 10.92176],
                [123.92542, 10.920606],
                [123.926568, 10.92074],
                [123.927226, 10.919509],
                [123.933463, 10.917136],
                [123.937599, 10.917094],
                [123.938075, 10.916452],
                [123.940573, 10.916807],
                [123.941681, 10.916217],
                [123.945025, 10.918362],
                [123.946226, 10.918079],
                [123.948814, 10.918989],
                [123.953185, 10.919847],
                [123.955055, 10.919551]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-miguel",
    "name": "Barangay San Miguel",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.93158, 10.889612],
    "markerOffset": [123.93158, 10.889612],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Miguel",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243023"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.935578, 10.886969],
                [123.932594, 10.880493],
                [123.924661, 10.883556],
                [123.922225, 10.884374],
                [123.923738, 10.888222],
                [123.925278, 10.891347],
                [123.926475, 10.891287],
                [123.941253, 10.902008],
                [123.935578, 10.886969]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tacup",
    "name": "Barangay Tacup",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.938228, 10.981248],
    "markerOffset": [123.938228, 10.981248],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tacup",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243024"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.951248, 10.985611],
                [123.951644, 10.977567],
                [123.949449, 10.977069],
                [123.947336, 10.978621],
                [123.942262, 10.970327],
                [123.930969, 10.972277],
                [123.925998, 10.973757],
                [123.927792, 10.975594],
                [123.928543, 10.979366],
                [123.928046, 10.98187],
                [123.926908, 10.983367],
                [123.927762, 10.984244],
                [123.927357, 10.985602],
                [123.929108, 10.986195],
                [123.929696, 10.989711],
                [123.932985, 10.992746],
                [123.933461, 10.991394],
                [123.935911, 10.990937],
                [123.93707, 10.990266],
                [123.939544, 10.992797],
                [123.940896, 10.993142],
                [123.942491, 10.990828],
                [123.945064, 10.986168],
                [123.946724, 10.985677],
                [123.951248, 10.985611]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tambongon",
    "name": "Barangay Tambongon",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.923759, 11.015829],
    "markerOffset": [123.923759, 11.015829],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tambongon",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243025"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.933659, 11.025669],
                [123.934822, 11.021063],
                [123.934092, 11.016599],
                [123.934908, 11.012705],
                [123.933969, 11.011025],
                [123.929106, 11.007695],
                [123.928291, 11.007538],
                [123.928037, 11.009199],
                [123.926517, 11.00884],
                [123.926397, 11.007775],
                [123.923757, 11.002747],
                [123.922329, 11.002078],
                [123.918349, 11.006112],
                [123.917256, 11.006507],
                [123.91478, 11.00956],
                [123.910534, 11.016173],
                [123.911571, 11.017535],
                [123.920342, 11.026131],
                [123.933659, 11.025669]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "to-ong",
    "name": "Barangay To-ong",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.942774, 11.027848],
    "markerOffset": [123.942774, 11.027848],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay To-ong",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243026"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.951567, 11.032857],
                [123.950858, 11.029671],
                [123.950792, 11.019242],
                [123.947641, 11.019347],
                [123.94164, 11.021318],
                [123.933659, 11.025669],
                [123.933956, 11.03586],
                [123.94912, 11.033095],
                [123.951567, 11.032857]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "victoria",
    "name": "Barangay Victoria",
    "city": "San Remigio, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.915812, 10.930925],
    "markerOffset": [123.915812, 10.930925],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Victoria",
            "city": "San Remigio, Cebu",
            "status": "Power Restored",
            "psgc": "PH072243027"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.928521, 10.933999],
                [123.922616, 10.92306],
                [123.918615, 10.915665],
                [123.918086, 10.917605],
                [123.916694, 10.917947],
                [123.91599, 10.919093],
                [123.915126, 10.921968],
                [123.912493, 10.922255],
                [123.912673, 10.923788],
                [123.909921, 10.926103],
                [123.90931, 10.927234],
                [123.904593, 10.925991],
                [123.903566, 10.926475],
                [123.90354, 10.928102],
                [123.901477, 10.930399],
                [123.902441, 10.933034],
                [123.904355, 10.935892],
                [123.905933, 10.936915],
                [123.907309, 10.936817],
                [123.908985, 10.933488],
                [123.910546, 10.933594],
                [123.910493, 10.936664],
                [123.91323, 10.937372],
                [123.912421, 10.940738],
                [123.913049, 10.942167],
                [123.913189, 10.944324],
                [123.91496, 10.944062],
                [123.928521, 10.933999]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "alang-alang",
    "name": "Barangay Alang-alang",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.024632, 10.919817],
    "markerOffset": [124.024632, 10.919817],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Alang-alang",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.033953, 10.920729],
                [124.029331, 10.918225],
                [124.016214, 10.91594],
                [124.016401, 10.919335],
                [124.022486, 10.923166],
                [124.023406, 10.921612],
                [124.029166, 10.922292],
                [124.032118, 10.924359],
                [124.033953, 10.920729]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "caduawan",
    "name": "Barangay Caduawan",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.967328, 10.922676],
    "markerOffset": [123.967328, 10.922676],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Caduawan",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.979832, 10.927429],
                [123.979745, 10.914739],
                [123.966974, 10.913348],
                [123.956176, 10.913587],
                [123.952964, 10.930449],
                [123.960381, 10.930144],
                [123.973654, 10.932178],
                [123.978736, 10.932882],
                [123.979832, 10.927429]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "camoboan",
    "name": "Barangay Camoboan",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.033142, 10.957503],
    "markerOffset": [124.033142, 10.957503],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Camoboan",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.040149, 10.965481],
                [124.041436, 10.962892],
                [124.038376, 10.953143],
                [124.032242, 10.947038],
                [124.030012, 10.947185],
                [124.025544, 10.950315],
                [124.026742, 10.960302],
                [124.029125, 10.960281],
                [124.029603, 10.966359],
                [124.031703, 10.967355],
                [124.040149, 10.965481]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "canaocanao",
    "name": "Barangay Canaocanao",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.000161, 10.898098],
    "markerOffset": [124.000161, 10.898098],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Canaocanao",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.016106, 10.913473],
                [124.015539, 10.904209],
                [124.012082, 10.902999],
                [124.011381, 10.897314],
                [124.008259, 10.891185],
                [124.008301, 10.884106],
                [124.003827, 10.883681],
                [123.991282, 10.88492],
                [123.986784, 10.88897],
                [123.984567, 10.90205],
                [123.986446, 10.906626],
                [123.988072, 10.906188],
                [123.99723, 10.907509],
                [124.002046, 10.90565],
                [124.010116, 10.914636],
                [124.014643, 10.915243],
                [124.016106, 10.913473]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "combado",
    "name": "Barangay Combado",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.012954, 10.943538],
    "markerOffset": [124.012954, 10.943538],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Combado",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.020302, 10.947394],
                [124.020748, 10.942945],
                [124.0167, 10.942558],
                [124.010921, 10.938312],
                [124.006539, 10.940849],
                [124.005085, 10.944669],
                [124.017172, 10.947589],
                [124.020302, 10.947394]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "daantabogon",
    "name": "Barangay Daantabogon",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.025916, 10.912106],
    "markerOffset": [124.025916, 10.912106],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Daantabogon",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.033953, 10.920729],
                [124.035555, 10.917468],
                [124.035889, 10.911973],
                [124.035855, 10.911875],
                [124.035329, 10.911351],
                [124.034911, 10.908221],
                [124.029754, 10.90591],
                [124.024964, 10.907197],
                [124.015539, 10.904209],
                [124.016106, 10.913473],
                [124.016214, 10.91594],
                [124.029331, 10.918225],
                [124.033953, 10.920729]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ilihan",
    "name": "Barangay Ilihan",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.967625, 10.902473],
    "markerOffset": [123.967625, 10.902473],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ilihan",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.979604, 10.908883],
                [123.975539, 10.908012],
                [123.977293, 10.898804],
                [123.977866, 10.89027],
                [123.961063, 10.890433],
                [123.95837, 10.891572],
                [123.956176, 10.913587],
                [123.966974, 10.913348],
                [123.979745, 10.914739],
                [123.979604, 10.908883]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kal-anan",
    "name": "Barangay Kal-anan",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.013764, 10.936585],
    "markerOffset": [124.013764, 10.936585],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kal-anan",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.02138, 10.93857],
                [124.018478, 10.936318],
                [124.015792, 10.930153],
                [124.012567, 10.930878],
                [124.010649, 10.929482],
                [124.005724, 10.938059],
                [124.006539, 10.940849],
                [124.010921, 10.938312],
                [124.0167, 10.942558],
                [124.020748, 10.942945],
                [124.02138, 10.93857]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "labangon",
    "name": "Barangay Labangon",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.995292, 10.916304],
    "markerOffset": [123.995292, 10.916304],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Labangon",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.989615, 10.92656],
                [123.990216, 10.922142],
                [124.010899, 10.924161],
                [124.016401, 10.919335],
                [124.016214, 10.91594],
                [124.016106, 10.913473],
                [124.014643, 10.915243],
                [124.010116, 10.914636],
                [124.002046, 10.90565],
                [123.99723, 10.907509],
                [123.988072, 10.906188],
                [123.986446, 10.906626],
                [123.979604, 10.908883],
                [123.979745, 10.914739],
                [123.979832, 10.927429],
                [123.989615, 10.92656]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "libjo",
    "name": "Barangay Libjo",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.964387, 10.94311],
    "markerOffset": [123.964387, 10.94311],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Libjo",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.972386, 10.961312],
                [123.97258, 10.95014],
                [123.973654, 10.932178],
                [123.960381, 10.930144],
                [123.952964, 10.930449],
                [123.954165, 10.942974],
                [123.959333, 10.951064],
                [123.95837, 10.95447],
                [123.963144, 10.954701],
                [123.968905, 10.960589],
                [123.972386, 10.961312]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "loong",
    "name": "Barangay Loong",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.998291, 10.932127],
    "markerOffset": [123.998291, 10.932127],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Loong",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.006539, 10.940849],
                [124.005724, 10.938059],
                [124.010649, 10.929482],
                [124.010899, 10.924161],
                [123.990216, 10.922142],
                [123.989615, 10.92656],
                [123.9877, 10.932608],
                [123.98725, 10.942106],
                [124.002593, 10.941376],
                [124.006539, 10.940849]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mabuli",
    "name": "Barangay Mabuli",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.980784, 10.948542],
    "markerOffset": [123.980784, 10.948542],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mabuli",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.988241, 10.970609],
                [123.987235, 10.958559],
                [123.986884, 10.951764],
                [123.98725, 10.942106],
                [123.9877, 10.932608],
                [123.989615, 10.92656],
                [123.979832, 10.927429],
                [123.978736, 10.932882],
                [123.973654, 10.932178],
                [123.97258, 10.95014],
                [123.972386, 10.961312],
                [123.975593, 10.964597],
                [123.984253, 10.970859],
                [123.988241, 10.970609]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabogon-managase",
    "name": "Barangay Managase",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.981268, 10.899141],
    "markerOffset": [123.981268, 10.899141],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Managase",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.986446, 10.906626],
                [123.984567, 10.90205],
                [123.986784, 10.88897],
                [123.977866, 10.89027],
                [123.977293, 10.898804],
                [123.975539, 10.908012],
                [123.979604, 10.908883],
                [123.986446, 10.906626]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "manlagtang",
    "name": "Barangay Manlagtang",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.995504, 10.95006],
    "markerOffset": [123.995504, 10.95006],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Manlagtang",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.001512, 10.959367],
                [124.003646, 10.948359],
                [124.005085, 10.944669],
                [124.006539, 10.940849],
                [124.002593, 10.941376],
                [123.98725, 10.942106],
                [123.986884, 10.951764],
                [123.987235, 10.958559],
                [123.995718, 10.959734],
                [124.001512, 10.959367]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "maslog",
    "name": "Barangay Maslog",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.022474, 10.927536],
    "markerOffset": [124.022474, 10.927536],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maslog",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.031194, 10.936601],
                [124.033145, 10.933397],
                [124.030503, 10.927845],
                [124.032118, 10.924359],
                [124.029166, 10.922292],
                [124.023406, 10.921612],
                [124.022486, 10.923166],
                [124.016401, 10.919335],
                [124.010899, 10.924161],
                [124.010649, 10.929482],
                [124.012567, 10.930878],
                [124.015792, 10.930153],
                [124.018898, 10.928937],
                [124.022463, 10.931053],
                [124.023747, 10.934839],
                [124.031194, 10.936601]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "muabog",
    "name": "Barangay Muabog",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.040947, 10.895978],
    "markerOffset": [124.040947, 10.895978],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Muabog",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.02931, 10.89007],
                [124.03185, 10.898708],
                [124.03185, 10.900957],
                [124.036199, 10.903905],
                [124.040904, 10.911088],
                [124.04516, 10.910601],
                [124.045515, 10.907459],
                [124.048471, 10.901216],
                [124.050362, 10.894587],
                [124.05182, 10.893074],
                [124.052574, 10.887204],
                [124.051463, 10.886106],
                [124.037527, 10.886993],
                [124.034793, 10.884571],
                [124.031689, 10.886263],
                [124.02931, 10.89007]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "pio",
    "name": "Barangay Pio",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.022813, 10.935068],
    "markerOffset": [124.022813, 10.935068],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Pio",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.031194, 10.936601],
                [124.023747, 10.934839],
                [124.022463, 10.931053],
                [124.018898, 10.928937],
                [124.015792, 10.930153],
                [124.018478, 10.936318],
                [124.02138, 10.93857],
                [124.031469, 10.939708],
                [124.031194, 10.936601]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabogon-poblacion",
    "name": "Barangay Poblacion",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.026347, 10.941574],
    "markerOffset": [124.026347, 10.941574],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.031254, 10.944915],
                [124.031469, 10.939708],
                [124.02138, 10.93857],
                [124.020748, 10.942945],
                [124.031254, 10.944915]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "salag",
    "name": "Barangay Salag",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.031174, 10.977222],
    "markerOffset": [124.031174, 10.977222],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Salag",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.040149, 10.965481],
                [124.031703, 10.967355],
                [124.029603, 10.966359],
                [124.028969, 10.972759],
                [124.012274, 10.976776],
                [124.012263, 10.979268],
                [124.013856, 10.981076],
                [124.030019, 10.985675],
                [124.033627, 10.983782],
                [124.036309, 10.98694],
                [124.042093, 10.985291],
                [124.044286, 10.976811],
                [124.041026, 10.971643],
                [124.041592, 10.967764],
                [124.040149, 10.965481]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabogon-sambag",
    "name": "Barangay Sambag",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.00897, 10.953145],
    "markerOffset": [124.00897, 10.953145],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sambag",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.017172, 10.947589],
                [124.005085, 10.944669],
                [124.003646, 10.948359],
                [124.001512, 10.959367],
                [124.012578, 10.961656],
                [124.017172, 10.947589]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-isidro",
    "name": "Barangay San Isidro",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.020617, 10.967852],
    "markerOffset": [124.020617, 10.967852],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Isidro",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.029603, 10.966359],
                [124.029125, 10.960281],
                [124.026742, 10.960302],
                [124.012578, 10.961656],
                [124.012274, 10.976776],
                [124.028969, 10.972759],
                [124.029603, 10.966359]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabogon-san-vicente",
    "name": "Barangay San Vicente",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.020133, 10.955155],
    "markerOffset": [124.020133, 10.955155],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Vicente",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248022"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.026742, 10.960302],
                [124.025544, 10.950315],
                [124.020302, 10.947394],
                [124.017172, 10.947589],
                [124.012578, 10.961656],
                [124.026742, 10.960302]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "somosa",
    "name": "Barangay Somosa",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.999956, 10.969724],
    "markerOffset": [123.999956, 10.969724],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Somosa",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248023"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.012263, 10.979268],
                [124.012274, 10.976776],
                [124.012578, 10.961656],
                [124.001512, 10.959367],
                [123.995718, 10.959734],
                [123.987235, 10.958559],
                [123.988241, 10.970609],
                [123.989432, 10.980447],
                [124.002747, 10.979982],
                [124.012263, 10.979268]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "taba-ao",
    "name": "Barangay Taba-ao",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.021792, 10.89707],
    "markerOffset": [124.021792, 10.89707],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Taba-ao",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248024"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.040904, 10.911088],
                [124.036199, 10.903905],
                [124.03185, 10.900957],
                [124.03185, 10.898708],
                [124.02931, 10.89007],
                [124.027386, 10.890646],
                [124.024283, 10.887841],
                [124.019841, 10.886399],
                [124.008301, 10.884106],
                [124.008259, 10.891185],
                [124.011381, 10.897314],
                [124.012082, 10.902999],
                [124.015539, 10.904209],
                [124.024964, 10.907197],
                [124.029754, 10.90591],
                [124.034911, 10.908221],
                [124.035329, 10.911351],
                [124.040904, 10.911088]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tapul",
    "name": "Barangay Tapul",
    "city": "Tabogon, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.025135, 10.946354],
    "markerOffset": [124.025135, 10.946354],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tapul",
            "city": "Tabogon, Cebu",
            "status": "Power Restored",
            "psgc": "PH072248025"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.030012, 10.947185],
                [124.031254, 10.944915],
                [124.020748, 10.942945],
                [124.020302, 10.947394],
                [124.025544, 10.950315],
                [124.030012, 10.947185]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "baring",
    "name": "Barangay Baring",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.003318, 10.589387],
    "markerOffset": [124.003318, 10.589387],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Baring",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.009702, 10.597435],
                [124.015186, 10.595985],
                [124.016654, 10.592131],
                [124.01562, 10.588125],
                [124.015704, 10.584097],
                [124.007576, 10.58279],
                [124.00487, 10.581959],
                [123.996019, 10.57986],
                [123.991806, 10.580649],
                [123.990871, 10.592565],
                [123.993466, 10.595089],
                [123.998132, 10.596043],
                [124.000416, 10.598259],
                [124.003427, 10.596629],
                [124.00451, 10.599916],
                [124.009702, 10.597435]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cantipay",
    "name": "Barangay Cantipay",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.006195, 10.608575],
    "markerOffset": [124.006195, 10.608575],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cantipay",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.019986, 10.605664],
                [124.016966, 10.600424],
                [124.009702, 10.597435],
                [124.00451, 10.599916],
                [123.998334, 10.601443],
                [123.996271, 10.604263],
                [123.999388, 10.619757],
                [124.010443, 10.621755],
                [124.009963, 10.612894],
                [124.011029, 10.608642],
                [124.01537, 10.606383],
                [124.019986, 10.605664]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cantukong",
    "name": "Barangay Cantukong",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.992704, 10.616291],
    "markerOffset": [123.992704, 10.616291],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cantukong",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.999388, 10.619757],
                [123.996271, 10.604263],
                [123.994707, 10.603489],
                [123.98687, 10.605873],
                [123.987817, 10.61192],
                [123.987561, 10.628894],
                [123.995517, 10.627656],
                [123.999388, 10.619757]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cantumog",
    "name": "Barangay Cantumog",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.992654, 10.599437],
    "markerOffset": [123.992654, 10.599437],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cantumog",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.996271, 10.604263],
                [123.998334, 10.601443],
                [124.00451, 10.599916],
                [124.003427, 10.596629],
                [124.000416, 10.598259],
                [123.998132, 10.596043],
                [123.993466, 10.595089],
                [123.990871, 10.592565],
                [123.987575, 10.595342],
                [123.983696, 10.595707],
                [123.985821, 10.599159],
                [123.985594, 10.605192],
                [123.98687, 10.605873],
                [123.994707, 10.603489],
                [123.996271, 10.604263]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "caurasan",
    "name": "Barangay Caurasan",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.934626, 10.62126],
    "markerOffset": [123.934626, 10.62126],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Caurasan",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.957289, 10.633667],
                [123.954433, 10.622862],
                [123.951058, 10.607372],
                [123.936681, 10.60531],
                [123.932855, 10.606046],
                [123.909981, 10.607377],
                [123.914449, 10.618824],
                [123.913087, 10.626359],
                [123.935788, 10.640206],
                [123.957289, 10.633667]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cogon-east",
    "name": "Barangay Cogon East",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.020079, 10.591412],
    "markerOffset": [124.020079, 10.591412],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cogon East",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.023334, 10.592076],
                [124.019101, 10.587994],
                [124.017751, 10.588029],
                [124.019161, 10.595151],
                [124.023334, 10.592076]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cogon-west",
    "name": "Barangay Cogon West",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.017243, 10.592243],
    "markerOffset": [124.017243, 10.592243],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cogon West",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.019161, 10.595151],
                [124.017751, 10.588029],
                [124.01562, 10.588125],
                [124.016654, 10.592131],
                [124.015186, 10.595985],
                [124.019161, 10.595151]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "corte",
    "name": "Barangay Corte",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.97013, 10.588914],
    "markerOffset": [123.97013, 10.588914],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Corte",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.985594, 10.605192],
                [123.985821, 10.599159],
                [123.983696, 10.595707],
                [123.97633, 10.588758],
                [123.971201, 10.582417],
                [123.960562, 10.569186],
                [123.951026, 10.573355],
                [123.964886, 10.588484],
                [123.965855, 10.591622],
                [123.971997, 10.601823],
                [123.977231, 10.606116],
                [123.978318, 10.607028],
                [123.985594, 10.605192]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dawis-norte",
    "name": "Barangay Dawis Norte",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.014476, 10.57679],
    "markerOffset": [124.014476, 10.57679],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dawis Norte",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.027106, 10.578417],
                [124.023633, 10.573056],
                [124.021846, 10.572298],
                [124.012154, 10.573129],
                [124.008661, 10.572839],
                [124.004873, 10.575654],
                [124.00487, 10.581959],
                [124.007576, 10.58279],
                [124.008674, 10.581544],
                [124.01978, 10.578951],
                [124.027106, 10.578417]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dawis-sur",
    "name": "Barangay Dawis Sur",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.013136, 10.567343],
    "markerOffset": [124.013136, 10.567343],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dawis Sur",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.021846, 10.572298],
                [124.022166, 10.564402],
                [124.009365, 10.561794],
                [124.002855, 10.559867],
                [124.006171, 10.566296],
                [124.005122, 10.569243],
                [124.008661, 10.572839],
                [124.012154, 10.573129],
                [124.021846, 10.572298]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carmen-hagnaya",
    "name": "Barangay Hagnaya",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.977438, 10.569786],
    "markerOffset": [123.977438, 10.569786],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Hagnaya",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.99279, 10.575585],
                [123.988595, 10.566299],
                [123.989106, 10.563994],
                [123.987749, 10.558527],
                [123.981685, 10.558104],
                [123.960562, 10.569186],
                [123.971201, 10.582417],
                [123.97386, 10.580484],
                [123.984664, 10.575617],
                [123.99279, 10.575585]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ipil",
    "name": "Barangay Ipil",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.986216, 10.583788],
    "markerOffset": [123.986216, 10.583788],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ipil",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.990871, 10.592565],
                [123.991806, 10.580649],
                [123.996019, 10.57986],
                [124.00487, 10.581959],
                [124.004873, 10.575654],
                [123.999403, 10.577016],
                [123.99279, 10.575585],
                [123.984664, 10.575617],
                [123.97386, 10.580484],
                [123.971201, 10.582417],
                [123.97633, 10.588758],
                [123.983696, 10.595707],
                [123.987575, 10.595342],
                [123.990871, 10.592565]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lanipga",
    "name": "Barangay Lanipga",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.949195, 10.585068],
    "markerOffset": [123.949195, 10.585068],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lanipga",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.965855, 10.591622],
                [123.964886, 10.588484],
                [123.951026, 10.573355],
                [123.937463, 10.575225],
                [123.938551, 10.584645],
                [123.9371, 10.591812],
                [123.942997, 10.595033],
                [123.948583, 10.594482],
                [123.950266, 10.595536],
                [123.955263, 10.593005],
                [123.965855, 10.591622]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "liboron",
    "name": "Barangay Liboron",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.928821, 10.595401],
    "markerOffset": [123.928821, 10.595401],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Liboron",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.962022, 10.606861],
                [123.958738, 10.602931],
                [123.950266, 10.595536],
                [123.948583, 10.594482],
                [123.942997, 10.595033],
                [123.9371, 10.591812],
                [123.938551, 10.584645],
                [123.937463, 10.575225],
                [123.92874, 10.58139],
                [123.924909, 10.583237],
                [123.915697, 10.583201],
                [123.907776, 10.579333],
                [123.907629, 10.60135],
                [123.909981, 10.607377],
                [123.932855, 10.606046],
                [123.936681, 10.60531],
                [123.951058, 10.607372],
                [123.953923, 10.608169],
                [123.962022, 10.606861]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lower-natimao-an",
    "name": "Barangay Lower Natimao-an",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.982946, 10.617906],
    "markerOffset": [123.982946, 10.617906],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lower Natimao-an",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.987561, 10.628894],
                [123.987817, 10.61192],
                [123.98687, 10.605873],
                [123.985594, 10.605192],
                [123.978318, 10.607028],
                [123.977696, 10.612505],
                [123.978486, 10.617751],
                [123.9787, 10.631149],
                [123.987561, 10.628894]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carmen-luyang",
    "name": "Barangay Luyang",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.023115, 10.598078],
    "markerOffset": [124.023115, 10.598078],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Luyang",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.025995, 10.605038],
                [124.028095, 10.600199],
                [124.032674, 10.595323],
                [124.027289, 10.589094],
                [124.023334, 10.592076],
                [124.019161, 10.595151],
                [124.015186, 10.595985],
                [124.009702, 10.597435],
                [124.016966, 10.600424],
                [124.019986, 10.605664],
                [124.022069, 10.607217],
                [124.025995, 10.605038]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carmen-poblacion",
    "name": "Barangay Poblacion",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.017475, 10.582391],
    "markerOffset": [124.017475, 10.582391],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.017751, 10.588029],
                [124.019101, 10.587994],
                [124.019633, 10.584418],
                [124.027106, 10.578417],
                [124.01978, 10.578951],
                [124.008674, 10.581544],
                [124.007576, 10.58279],
                [124.015704, 10.584097],
                [124.01562, 10.588125],
                [124.017751, 10.588029]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "puente",
    "name": "Barangay Puente",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.01916, 10.614598],
    "markerOffset": [124.01916, 10.614598],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Puente",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.025995, 10.605038],
                [124.022069, 10.607217],
                [124.019986, 10.605664],
                [124.01537, 10.606383],
                [124.011029, 10.608642],
                [124.009963, 10.612894],
                [124.010443, 10.621755],
                [124.020384, 10.622319],
                [124.026836, 10.623422],
                [124.027838, 10.620798],
                [124.027585, 10.613465],
                [124.025995, 10.605038]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sac-on",
    "name": "Barangay Sac-on",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.963448, 10.599816],
    "markerOffset": [123.963448, 10.599816],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sac-on",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.977231, 10.606116],
                [123.971997, 10.601823],
                [123.965855, 10.591622],
                [123.955263, 10.593005],
                [123.950266, 10.595536],
                [123.958738, 10.602931],
                [123.962022, 10.606861],
                [123.965475, 10.608694],
                [123.971957, 10.606465],
                [123.977231, 10.606116]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "triumfo",
    "name": "Barangay Triumfo",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.997622, 10.567831],
    "markerOffset": [123.997622, 10.567831],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Triumfo",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.004873, 10.575654],
                [124.008661, 10.572839],
                [124.005122, 10.569243],
                [124.006171, 10.566296],
                [124.002855, 10.559867],
                [123.999031, 10.560746],
                [123.993265, 10.559037],
                [123.987749, 10.558527],
                [123.989106, 10.563994],
                [123.988595, 10.566299],
                [123.99279, 10.575585],
                [123.999403, 10.577016],
                [124.004873, 10.575654]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "upper-natimao-an",
    "name": "Barangay Upper Natimao-an",
    "city": "Carmen, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.966061, 10.619446],
    "markerOffset": [123.966061, 10.619446],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Upper Natimao-an",
            "city": "Carmen, Cebu",
            "status": "Power Restored",
            "psgc": "PH072215020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.9787, 10.631149],
                [123.978486, 10.617751],
                [123.977696, 10.612505],
                [123.978318, 10.607028],
                [123.977231, 10.606116],
                [123.971957, 10.606465],
                [123.965475, 10.608694],
                [123.962022, 10.606861],
                [123.953923, 10.608169],
                [123.951058, 10.607372],
                [123.954433, 10.622862],
                [123.957289, 10.633667],
                [123.9787, 10.631149]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "baliang",
    "name": "Barangay Baliang",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.956609, 10.507659],
    "markerOffset": [123.956609, 10.507659],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Baliang",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.971368, 10.514934],
                [123.964227, 10.508428],
                [123.966809, 10.502598],
                [123.966611, 10.497283],
                [123.958904, 10.497697],
                [123.947286, 10.496342],
                [123.943577, 10.495179],
                [123.945482, 10.506072],
                [123.946823, 10.515549],
                [123.952838, 10.518648],
                [123.958127, 10.51754],
                [123.970195, 10.519385],
                [123.971368, 10.514934]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bayabas",
    "name": "Barangay Bayabas",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.865516, 10.5855],
    "markerOffset": [123.865516, 10.5855],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bayabas",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.88328, 10.5924],
                [123.89222, 10.573985],
                [123.872096, 10.569946],
                [123.863507, 10.568707],
                [123.858696, 10.572323],
                [123.84355, 10.576324],
                [123.842356, 10.585867],
                [123.843871, 10.588545],
                [123.847819, 10.590022],
                [123.846636, 10.598823],
                [123.84895, 10.605151],
                [123.85438, 10.605626],
                [123.853448, 10.602362],
                [123.857771, 10.59972],
                [123.865841, 10.601367],
                [123.87314, 10.601844],
                [123.87674, 10.600328],
                [123.876506, 10.596847],
                [123.879678, 10.596097],
                [123.88328, 10.5924]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "binaliw",
    "name": "Barangay Binaliw",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.984346, 10.546761],
    "markerOffset": [123.984346, 10.546761],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Binaliw",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.981685, 10.558104],
                [123.980936, 10.556142],
                [123.984884, 10.550875],
                [123.990628, 10.547245],
                [123.998593, 10.544431],
                [123.997265, 10.536186],
                [123.991951, 10.535487],
                [123.984121, 10.538682],
                [123.977887, 10.543016],
                [123.97202, 10.552144],
                [123.974445, 10.5619],
                [123.981685, 10.558104]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cabungahan",
    "name": "Barangay Cabungahan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.983696, 10.518016],
    "markerOffset": [123.983696, 10.518016],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cabungahan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.999898, 10.521924],
                [123.994854, 10.518664],
                [123.991472, 10.507872],
                [123.980284, 10.512614],
                [123.976559, 10.511699],
                [123.971368, 10.514934],
                [123.970195, 10.519385],
                [123.974535, 10.524951],
                [123.987846, 10.525972],
                [123.988206, 10.522763],
                [123.991963, 10.521886],
                [123.996912, 10.523528],
                [123.999898, 10.521924]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cagat-lamac",
    "name": "Barangay Cagat-Lamac",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.999849, 10.552854],
    "markerOffset": [123.999849, 10.552854],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cagat-Lamac",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.002855, 10.559867],
                [124.002662, 10.555648],
                [124.004525, 10.550192],
                [124.007871, 10.547364],
                [123.998593, 10.544431],
                [123.993265, 10.559037],
                [123.999031, 10.560746],
                [124.002855, 10.559867]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cahumayan",
    "name": "Barangay Cahumayan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.950384, 10.563932],
    "markerOffset": [123.950384, 10.563932],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cahumayan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.96485, 10.566935],
                [123.961476, 10.555666],
                [123.952388, 10.556313],
                [123.934285, 10.557603],
                [123.944257, 10.574288],
                [123.951026, 10.573355],
                [123.96485, 10.566935]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cambanay",
    "name": "Barangay Cambanay",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.007014, 10.540497],
    "markerOffset": [124.007014, 10.540497],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cambanay",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.020458, 10.537378],
                [124.015106, 10.537941],
                [124.013157, 10.535874],
                [123.997265, 10.536186],
                [123.998593, 10.544431],
                [124.007871, 10.547364],
                [124.012933, 10.541912],
                [124.020911, 10.539419],
                [124.020458, 10.537378]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cambubho",
    "name": "Barangay Cambubho",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.882089, 10.543498],
    "markerOffset": [123.882089, 10.543498],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cambubho",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.889131, 10.557287],
                [123.889619, 10.546891],
                [123.889833, 10.542314],
                [123.888574, 10.527017],
                [123.886133, 10.52737],
                [123.880301, 10.532466],
                [123.87241, 10.532578],
                [123.873775, 10.535376],
                [123.873819, 10.545992],
                [123.871875, 10.547603],
                [123.877713, 10.555856],
                [123.881638, 10.558174],
                [123.889131, 10.557287]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "cogon-cruz",
    "name": "Barangay Cogon-Cruz",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.001751, 10.514595],
    "markerOffset": [124.001751, 10.514595],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cogon-Cruz",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.013686, 10.520413],
                [124.016037, 10.520339],
                [124.009788, 10.514109],
                [124.000912, 10.507019],
                [123.997037, 10.503519],
                [123.991472, 10.507872],
                [123.994854, 10.518664],
                [123.999898, 10.521924],
                [124.004476, 10.522952],
                [124.013686, 10.520413]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "danasan",
    "name": "Barangay Danasan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.858049, 10.560879],
    "markerOffset": [123.858049, 10.560879],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Danasan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.872096, 10.569946],
                [123.873633, 10.564427],
                [123.877713, 10.555856],
                [123.871875, 10.547603],
                [123.870063, 10.549054],
                [123.851806, 10.545584],
                [123.850419, 10.554805],
                [123.843437, 10.55667],
                [123.840596, 10.564708],
                [123.83937, 10.571178],
                [123.84355, 10.576324],
                [123.858696, 10.572323],
                [123.863507, 10.568707],
                [123.872096, 10.569946]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dungga",
    "name": "Barangay Dungga",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.942372, 10.54769],
    "markerOffset": [123.942372, 10.54769],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dungga",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.952388, 10.556313],
                [123.947183, 10.543588],
                [123.947776, 10.535745],
                [123.946825, 10.53057],
                [123.944082, 10.536538],
                [123.939602, 10.538429],
                [123.936278, 10.537821],
                [123.936132, 10.547931],
                [123.933304, 10.551622],
                [123.934285, 10.557603],
                [123.952388, 10.556313]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dunggoan",
    "name": "Barangay Dunggoan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.014218, 10.556814],
    "markerOffset": [124.014218, 10.556814],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dunggoan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.025793, 10.55273],
                [124.004525, 10.550192],
                [124.002662, 10.555648],
                [124.002855, 10.559867],
                [124.009365, 10.561794],
                [124.022166, 10.564402],
                [124.023123, 10.559498],
                [124.026522, 10.557273],
                [124.025793, 10.55273]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "guinacot",
    "name": "Barangay Guinacot",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.000951, 10.526432],
    "markerOffset": [124.000951, 10.526432],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Guinacot",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.012453, 10.530339],
                [124.013686, 10.520413],
                [124.004476, 10.522952],
                [123.999898, 10.521924],
                [123.996912, 10.523528],
                [123.991963, 10.521886],
                [123.988206, 10.522763],
                [123.987846, 10.525972],
                [123.989538, 10.529824],
                [123.992544, 10.531388],
                [124.012453, 10.530339]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "guinsay",
    "name": "Barangay Guinsay",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.02277, 10.545408],
    "markerOffset": [124.02277, 10.545408],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Guinsay",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.0296, 10.534836],
                [124.024973, 10.534583],
                [124.020458, 10.537378],
                [124.020911, 10.539419],
                [124.012933, 10.541912],
                [124.007871, 10.547364],
                [124.004525, 10.550192],
                [124.025793, 10.55273],
                [124.029049, 10.550924],
                [124.032007, 10.554372],
                [124.03555, 10.552118],
                [124.034928, 10.545995],
                [124.032857, 10.543913],
                [124.0296, 10.534836]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ibo",
    "name": "Barangay Ibo",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.958607, 10.523103],
    "markerOffset": [123.958607, 10.523103],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ibo",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.974535, 10.524951],
                [123.970195, 10.519385],
                [123.958127, 10.51754],
                [123.952838, 10.518648],
                [123.946823, 10.515549],
                [123.946401, 10.524819],
                [123.951212, 10.527458],
                [123.964095, 10.53103],
                [123.965209, 10.527541],
                [123.969051, 10.52446],
                [123.974535, 10.524951]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "langosig",
    "name": "Barangay Langosig",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.90642, 10.51827],
    "markerOffset": [123.90642, 10.51827],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Langosig",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.911931, 10.527969],
                [123.910988, 10.524451],
                [123.912911, 10.519668],
                [123.918142, 10.517803],
                [123.920267, 10.507709],
                [123.892007, 10.509885],
                [123.892102, 10.513683],
                [123.898159, 10.516177],
                [123.901781, 10.536576],
                [123.911931, 10.527969]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lawaan",
    "name": "Barangay Lawaan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.903628, 10.54626],
    "markerOffset": [123.903628, 10.54626],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lawaan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.91348, 10.557103],
                [123.914434, 10.553802],
                [123.913824, 10.537647],
                [123.911931, 10.527969],
                [123.901781, 10.536576],
                [123.889619, 10.546891],
                [123.889131, 10.557287],
                [123.895899, 10.556485],
                [123.91348, 10.557103]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "licos",
    "name": "Barangay Licos",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.916209, 10.502013],
    "markerOffset": [123.916209, 10.502013],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Licos",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.920267, 10.507709],
                [123.945482, 10.506072],
                [123.943577, 10.495179],
                [123.92694, 10.4957],
                [123.905388, 10.499359],
                [123.900928, 10.498954],
                [123.891873, 10.491925],
                [123.887977, 10.493495],
                [123.891255, 10.50496],
                [123.892007, 10.509885],
                [123.920267, 10.507709]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "danao-looc",
    "name": "Barangay Looc",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.02207, 10.508704],
    "markerOffset": [124.02207, 10.508704],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Looc",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.028101, 10.514816],
                [124.028104, 10.514739],
                [124.028098, 10.514693],
                [124.028084, 10.514558],
                [124.028191, 10.514485],
                [124.02787, 10.51036],
                [124.030709, 10.506676],
                [124.024605, 10.504409],
                [124.017996, 10.503373],
                [124.011385, 10.5043],
                [124.011901, 10.506955],
                [124.018071, 10.508693],
                [124.023526, 10.516959],
                [124.028101, 10.514816]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "magtagobtob",
    "name": "Barangay Magtagobtob",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.895683, 10.564848],
    "markerOffset": [123.895683, 10.564848],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Magtagobtob",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223022"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.919692, 10.557495],
                [123.91348, 10.557103],
                [123.895899, 10.556485],
                [123.889131, 10.557287],
                [123.881638, 10.558174],
                [123.877713, 10.555856],
                [123.873633, 10.564427],
                [123.872096, 10.569946],
                [123.89222, 10.573985],
                [123.903639, 10.569774],
                [123.907776, 10.579333],
                [123.919692, 10.557495]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "malapoc",
    "name": "Barangay Malapoc",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.998898, 10.53366],
    "markerOffset": [123.998898, 10.53366],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Malapoc",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223023"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.997265, 10.536186],
                [124.013157, 10.535874],
                [124.012453, 10.530339],
                [123.992544, 10.531388],
                [123.989538, 10.529824],
                [123.984689, 10.534776],
                [123.984121, 10.538682],
                [123.991951, 10.535487],
                [123.997265, 10.536186]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "manlayag",
    "name": "Barangay Manlayag",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.977006, 10.503833],
    "markerOffset": [123.977006, 10.503833],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Manlayag",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223024"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.991472, 10.507872],
                [123.987338, 10.504639],
                [123.985868, 10.499937],
                [123.986225, 10.490926],
                [123.979047, 10.494668],
                [123.966611, 10.497283],
                [123.966809, 10.502598],
                [123.964227, 10.508428],
                [123.971368, 10.514934],
                [123.976559, 10.511699],
                [123.980284, 10.512614],
                [123.991472, 10.507872]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mantija",
    "name": "Barangay Mantija",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.954452, 10.540612],
    "markerOffset": [123.954452, 10.540612],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mantija",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223025"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.961476, 10.555666],
                [123.958859, 10.546953],
                [123.962253, 10.541656],
                [123.961235, 10.535345],
                [123.964095, 10.53103],
                [123.951212, 10.527458],
                [123.946401, 10.524819],
                [123.946825, 10.53057],
                [123.947776, 10.535745],
                [123.947183, 10.543588],
                [123.952388, 10.556313],
                [123.961476, 10.555666]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "masaba",
    "name": "Barangay Masaba",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.968012, 10.550483],
    "markerOffset": [123.968012, 10.550483],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Masaba",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223026"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.974445, 10.5619],
                [123.97202, 10.552144],
                [123.977887, 10.543016],
                [123.976041, 10.538838],
                [123.971111, 10.53742],
                [123.966439, 10.538046],
                [123.962253, 10.541656],
                [123.958859, 10.546953],
                [123.961476, 10.555666],
                [123.96485, 10.566935],
                [123.974445, 10.5619]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "danao-maslog",
    "name": "Barangay Maslog",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.018267, 10.482689],
    "markerOffset": [124.018267, 10.482689],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maslog",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223027"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.027079, 10.487546],
                [124.02245, 10.480962],
                [124.019319, 10.473893],
                [124.013619, 10.477072],
                [124.011864, 10.479925],
                [124.012958, 10.485234],
                [124.012009, 10.488057],
                [124.021791, 10.488696],
                [124.027079, 10.487546]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "nangka",
    "name": "Barangay Nangka",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.941275, 10.528115],
    "markerOffset": [123.941275, 10.528115],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Nangka",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223028"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.946825, 10.53057],
                [123.946401, 10.524819],
                [123.946823, 10.515549],
                [123.935041, 10.524184],
                [123.936278, 10.537821],
                [123.939602, 10.538429],
                [123.944082, 10.536538],
                [123.946825, 10.53057]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "oguis",
    "name": "Barangay Oguis",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.924697, 10.547323],
    "markerOffset": [123.924697, 10.547323],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Oguis",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223029"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.936278, 10.537821],
                [123.913824, 10.537647],
                [123.914434, 10.553802],
                [123.91348, 10.557103],
                [123.919692, 10.557495],
                [123.934285, 10.557603],
                [123.933304, 10.551622],
                [123.936132, 10.547931],
                [123.936278, 10.537821]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "pili",
    "name": "Barangay Pili",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.898051, 10.58586],
    "markerOffset": [123.898051, 10.58586],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Pili",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223030"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.907776, 10.579333],
                [123.903639, 10.569774],
                [123.89222, 10.573985],
                [123.88328, 10.5924],
                [123.907629, 10.60135],
                [123.907776, 10.579333]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "danao-poblacion",
    "name": "Barangay Poblacion",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.025504, 10.520447],
    "markerOffset": [124.025504, 10.520447],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223031"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.03014, 10.521114],
                [124.028101, 10.514816],
                [124.023526, 10.516959],
                [124.023523, 10.520566],
                [124.018959, 10.520574],
                [124.022771, 10.52365],
                [124.022147, 10.526719],
                [124.03014, 10.521114]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "quisol",
    "name": "Barangay Quisol",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.979772, 10.532518],
    "markerOffset": [123.979772, 10.532518],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Quisol",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223032"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.984121, 10.538682],
                [123.984689, 10.534776],
                [123.989538, 10.529824],
                [123.987846, 10.525972],
                [123.974535, 10.524951],
                [123.971111, 10.53742],
                [123.976041, 10.538838],
                [123.977887, 10.543016],
                [123.984121, 10.538682]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sabang",
    "name": "Barangay Sabang",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.01656, 10.497434],
    "markerOffset": [124.01656, 10.497434],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sabang",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223033"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.030709, 10.506676],
                [124.03336, 10.502788],
                [124.032213, 10.496693],
                [124.027079, 10.487546],
                [124.021791, 10.488696],
                [124.012009, 10.488057],
                [124.006058, 10.490348],
                [124.000183, 10.495436],
                [124.001988, 10.506829],
                [124.011901, 10.506955],
                [124.011385, 10.5043],
                [124.017996, 10.503373],
                [124.024605, 10.504409],
                [124.030709, 10.506676]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sacsac",
    "name": "Barangay Sacsac",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.894574, 10.530024],
    "markerOffset": [123.894574, 10.530024],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sacsac",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223034"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.901781, 10.536576],
                [123.898159, 10.516177],
                [123.892102, 10.513683],
                [123.892285, 10.520031],
                [123.889978, 10.521224],
                [123.888574, 10.527017],
                [123.889833, 10.542314],
                [123.889619, 10.546891],
                [123.901781, 10.536576]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sandayong-norte",
    "name": "Barangay Sandayong Norte",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.990032, 10.552845],
    "markerOffset": [123.990032, 10.552845],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sandayong Norte",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223035"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.998593, 10.544431],
                [123.990628, 10.547245],
                [123.984884, 10.550875],
                [123.980936, 10.556142],
                [123.981685, 10.558104],
                [123.993265, 10.559037],
                [123.998593, 10.544431]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sandayong-sur",
    "name": "Barangay Sandayong Sur",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.997188, 10.493951],
    "markerOffset": [123.997188, 10.493951],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sandayong Sur",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223036"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.000912, 10.507019],
                [124.001988, 10.506829],
                [124.000183, 10.495436],
                [124.006058, 10.490348],
                [124.012009, 10.488057],
                [124.012958, 10.485234],
                [124.011864, 10.479925],
                [124.002654, 10.484778],
                [123.99619, 10.485274],
                [123.986225, 10.490926],
                [123.985868, 10.499937],
                [123.987338, 10.504639],
                [123.991472, 10.507872],
                [123.997037, 10.503519],
                [124.000912, 10.507019]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "santa-rosa",
    "name": "Barangay Santa Rosa",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.967788, 10.532231],
    "markerOffset": [123.967788, 10.532231],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Santa Rosa",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223037"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.971111, 10.53742],
                [123.974535, 10.524951],
                [123.969051, 10.52446],
                [123.965209, 10.527541],
                [123.964095, 10.53103],
                [123.961235, 10.535345],
                [123.962253, 10.541656],
                [123.966439, 10.538046],
                [123.971111, 10.53742]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "santican",
    "name": "Barangay Santican",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.925412, 10.570687],
    "markerOffset": [123.925412, 10.570687],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Santican",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223038"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.944257, 10.574288],
                [123.934285, 10.557603],
                [123.919692, 10.557495],
                [123.907776, 10.579333],
                [123.915697, 10.583201],
                [123.924909, 10.583237],
                [123.92874, 10.58139],
                [123.937463, 10.575225],
                [123.944257, 10.574288]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sibacan",
    "name": "Barangay Sibacan",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.92332, 10.528937],
    "markerOffset": [123.92332, 10.528937],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sibacan",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223039"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.935041, 10.524184],
                [123.918142, 10.517803],
                [123.912911, 10.519668],
                [123.910988, 10.524451],
                [123.911931, 10.527969],
                [123.913824, 10.537647],
                [123.936278, 10.537821],
                [123.935041, 10.524184]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "suba",
    "name": "Barangay Suba",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.028458, 10.525653],
    "markerOffset": [124.028458, 10.525653],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Suba",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223040"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.031468, 10.529048],
                [124.032772, 10.52724],
                [124.03014, 10.521114],
                [124.022147, 10.526719],
                [124.031468, 10.529048]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "taboc",
    "name": "Barangay Taboc",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.017947, 10.529453],
    "markerOffset": [124.017947, 10.529453],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Taboc",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223041"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.020458, 10.537378],
                [124.024973, 10.534583],
                [124.022147, 10.526719],
                [124.022771, 10.52365],
                [124.018959, 10.520574],
                [124.016037, 10.520339],
                [124.013686, 10.520413],
                [124.012453, 10.530339],
                [124.013157, 10.535874],
                [124.015106, 10.537941],
                [124.020458, 10.537378]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "taytay",
    "name": "Barangay Taytay",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.02686, 10.53087],
    "markerOffset": [124.02686, 10.53087],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Taytay",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223042"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.02956, 10.534527],
                [124.029489, 10.534316],
                [124.031468, 10.529048],
                [124.022147, 10.526719],
                [124.024973, 10.534583],
                [124.0296, 10.534836],
                [124.02956, 10.534527]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "togonon",
    "name": "Barangay Togonon",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.932811, 10.51405],
    "markerOffset": [123.932811, 10.51405],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Togonon",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223043"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.946823, 10.515549],
                [123.945482, 10.506072],
                [123.920267, 10.507709],
                [123.918142, 10.517803],
                [123.935041, 10.524184],
                [123.946823, 10.515549]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tuburan-sur",
    "name": "Barangay Tuburan Sur",
    "city": "Danao City, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [124.014332, 10.513118],
    "markerOffset": [124.014332, 10.513118],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tuburan Sur",
            "city": "Danao City, Cebu",
            "status": "Power Restored",
            "psgc": "PH072223044"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [124.023526, 10.516959],
                [124.018071, 10.508693],
                [124.011901, 10.506955],
                [124.001988, 10.506829],
                [124.000912, 10.507019],
                [124.009788, 10.514109],
                [124.016037, 10.520339],
                [124.018959, 10.520574],
                [124.023523, 10.520566],
                [124.023526, 10.516959]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bongon",
    "name": "Barangay Bongon",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.903556, 10.802266],
    "markerOffset": [123.903556, 10.802266],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bongon",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.893858, 10.825782],
                [123.900756, 10.824679],
                [123.902492, 10.822729],
                [123.907795, 10.819485],
                [123.909366, 10.819817],
                [123.914263, 10.817724],
                [123.917504, 10.815061],
                [123.920153, 10.816435],
                [123.922252, 10.815413],
                [123.923197, 10.812757],
                [123.927156, 10.807852],
                [123.926703, 10.794635],
                [123.926902, 10.79176],
                [123.925898, 10.77719],
                [123.897363, 10.785222],
                [123.876931, 10.791378],
                [123.880213, 10.79868],
                [123.880439, 10.802365],
                [123.882407, 10.805412],
                [123.88319, 10.809815],
                [123.885899, 10.815818],
                [123.883453, 10.81637],
                [123.880251, 10.820178],
                [123.879796, 10.823668],
                [123.882854, 10.824831],
                [123.884573, 10.825023],
                [123.886433, 10.828021],
                [123.890254, 10.828476],
                [123.891555, 10.8253],
                [123.893858, 10.825782]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "dalid",
    "name": "Barangay Dalid",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.920796, 10.826906],
    "markerOffset": [123.920796, 10.826906],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Dalid",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.933904, 10.841854],
                [123.937367, 10.837753],
                [123.940261, 10.833138],
                [123.942462, 10.832616],
                [123.942727, 10.82955],
                [123.937331, 10.822547],
                [123.927156, 10.807852],
                [123.923197, 10.812757],
                [123.922252, 10.815413],
                [123.920153, 10.816435],
                [123.917504, 10.815061],
                [123.914263, 10.817724],
                [123.909366, 10.819817],
                [123.907795, 10.819485],
                [123.902492, 10.822729],
                [123.900756, 10.824679],
                [123.893858, 10.825782],
                [123.893079, 10.827271],
                [123.894246, 10.835621],
                [123.898086, 10.834326],
                [123.899526, 10.835294],
                [123.90085, 10.83046],
                [123.901969, 10.829267],
                [123.905093, 10.83425],
                [123.908887, 10.832475],
                [123.908996, 10.835715],
                [123.912715, 10.834557],
                [123.916244, 10.836189],
                [123.919705, 10.834181],
                [123.920623, 10.838555],
                [123.928984, 10.838097],
                [123.92936, 10.840097],
                [123.933904, 10.841854]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kanlim-ao",
    "name": "Barangay Kanlim-ao",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.932371, 10.856607],
    "markerOffset": [123.932371, 10.856607],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kanlim-ao",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.947198, 10.870946],
                [123.946459, 10.867282],
                [123.943105, 10.866782],
                [123.939698, 10.862527],
                [123.938179, 10.857413],
                [123.94018, 10.856743],
                [123.942071, 10.853153],
                [123.939172, 10.847237],
                [123.937349, 10.846854],
                [123.933039, 10.842859],
                [123.933904, 10.841854],
                [123.92936, 10.840097],
                [123.926657, 10.846572],
                [123.920491, 10.853224],
                [123.919079, 10.855414],
                [123.91933, 10.860678],
                [123.927136, 10.862668],
                [123.933675, 10.867133],
                [123.934047, 10.871362],
                [123.936725, 10.870406],
                [123.947198, 10.870946]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kanluhangon",
    "name": "Barangay Kanluhangon",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.940973, 10.878657],
    "markerOffset": [123.940973, 10.878657],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kanluhangon",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.947198, 10.870946],
                [123.936725, 10.870406],
                [123.934047, 10.871362],
                [123.933882, 10.876147],
                [123.932594, 10.880493],
                [123.935578, 10.886969],
                [123.948973, 10.884327],
                [123.951542, 10.882143],
                [123.945394, 10.873062],
                [123.947198, 10.870946]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kantubaon",
    "name": "Barangay Kantubaon",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.918242, 10.873853],
    "markerOffset": [123.918242, 10.873853],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kantubaon",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.932594, 10.880493],
                [123.933882, 10.876147],
                [123.934047, 10.871362],
                [123.933675, 10.867133],
                [123.927136, 10.862668],
                [123.91933, 10.860678],
                [123.904266, 10.864451],
                [123.904642, 10.867241],
                [123.904052, 10.873894],
                [123.904946, 10.877582],
                [123.907831, 10.889802],
                [123.91353, 10.887317],
                [123.924661, 10.883556],
                [123.932594, 10.880493]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mabunao",
    "name": "Barangay Mabunao",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.910316, 10.842343],
    "markerOffset": [123.910316, 10.842343],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mabunao",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.92936, 10.840097],
                [123.928984, 10.838097],
                [123.920623, 10.838555],
                [123.919705, 10.834181],
                [123.916244, 10.836189],
                [123.912715, 10.834557],
                [123.908996, 10.835715],
                [123.908887, 10.832475],
                [123.905093, 10.83425],
                [123.901969, 10.829267],
                [123.90085, 10.83046],
                [123.899526, 10.835294],
                [123.898086, 10.834326],
                [123.894246, 10.835621],
                [123.894018, 10.846966],
                [123.895494, 10.850322],
                [123.910292, 10.847536],
                [123.916006, 10.852865],
                [123.920491, 10.853224],
                [123.926657, 10.846572],
                [123.92936, 10.840097]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "maravilla",
    "name": "Barangay Maravilla",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.898447, 10.892706],
    "markerOffset": [123.898447, 10.892706],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maravilla",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.907831, 10.889802],
                [123.904946, 10.877582],
                [123.885311, 10.881798],
                [123.885318, 10.881818],
                [123.88542, 10.882031],
                [123.884976, 10.884536],
                [123.889378, 10.891218],
                [123.889012, 10.892538],
                [123.891854, 10.902057],
                [123.892812, 10.907501],
                [123.894384, 10.908963],
                [123.897794, 10.906401],
                [123.901358, 10.907986],
                [123.909332, 10.904533],
                [123.907831, 10.889802]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "olivo",
    "name": "Barangay Olivo",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.887445, 10.855397],
    "markerOffset": [123.887445, 10.855397],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Olivo",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.896231, 10.866331],
                [123.895494, 10.850322],
                [123.894018, 10.846966],
                [123.894246, 10.835621],
                [123.887632, 10.841618],
                [123.884876, 10.847238],
                [123.881788, 10.850151],
                [123.87503, 10.851862],
                [123.876634, 10.859918],
                [123.878343, 10.862633],
                [123.881919, 10.864855],
                [123.880894, 10.868171],
                [123.893747, 10.867635],
                [123.896231, 10.866331]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabuelan-poblacion",
    "name": "Barangay Poblacion",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.87285, 10.809762],
    "markerOffset": [123.87285, 10.809762],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Poblacion",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.870873, 10.828467],
                [123.873132, 10.825614],
                [123.877207, 10.826537],
                [123.879101, 10.824818],
                [123.882854, 10.824831],
                [123.879796, 10.823668],
                [123.880251, 10.820178],
                [123.883453, 10.81637],
                [123.885899, 10.815818],
                [123.88319, 10.809815],
                [123.882407, 10.805412],
                [123.880439, 10.802365],
                [123.880213, 10.79868],
                [123.876931, 10.791378],
                [123.859286, 10.800108],
                [123.857326, 10.802721],
                [123.863207, 10.80741],
                [123.866081, 10.812412],
                [123.868205, 10.820014],
                [123.866586, 10.821448],
                [123.868038, 10.826837],
                [123.867526, 10.831357],
                [123.871161, 10.831081],
                [123.870873, 10.828467]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tabuelan-tabunok",
    "name": "Barangay Tabunok",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.881096, 10.836931],
    "markerOffset": [123.881096, 10.836931],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tabunok",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.894246, 10.835621],
                [123.893079, 10.827271],
                [123.893858, 10.825782],
                [123.891555, 10.8253],
                [123.890254, 10.828476],
                [123.886433, 10.828021],
                [123.884573, 10.825023],
                [123.882854, 10.824831],
                [123.879101, 10.824818],
                [123.877207, 10.826537],
                [123.873132, 10.825614],
                [123.870873, 10.828467],
                [123.873665, 10.830178],
                [123.874442, 10.83325],
                [123.872629, 10.835837],
                [123.868594, 10.834205],
                [123.868991, 10.837254],
                [123.871523, 10.842444],
                [123.873783, 10.850579],
                [123.875134, 10.851408],
                [123.87519, 10.851472],
                [123.875118, 10.851598],
                [123.875058, 10.851689],
                [123.87503, 10.851862],
                [123.881788, 10.850151],
                [123.884876, 10.847238],
                [123.887632, 10.841618],
                [123.894246, 10.835621]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tigbawan",
    "name": "Barangay Tigbawan",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.893133, 10.873156],
    "markerOffset": [123.893133, 10.873156],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tigbawan",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.885311, 10.881798],
                [123.904946, 10.877582],
                [123.904052, 10.873894],
                [123.904642, 10.867241],
                [123.904266, 10.864451],
                [123.896231, 10.866331],
                [123.893747, 10.867635],
                [123.880894, 10.868171],
                [123.880261, 10.872728],
                [123.882718, 10.877728],
                [123.884662, 10.878529],
                [123.885311, 10.881798]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "villahermosa",
    "name": "Barangay Villahermosa",
    "city": "Tabuelan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.906343, 10.856627],
    "markerOffset": [123.906343, 10.856627],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Villahermosa",
            "city": "Tabuelan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072249019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.904266, 10.864451],
                [123.91933, 10.860678],
                [123.919079, 10.855414],
                [123.920491, 10.853224],
                [123.916006, 10.852865],
                [123.910292, 10.847536],
                [123.895494, 10.850322],
                [123.896231, 10.866331],
                [123.904266, 10.864451]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "alegria",
    "name": "Barangay Alegria",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.841243, 10.70253],
    "markerOffset": [123.841243, 10.70253],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Alegria",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252001"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.856564, 10.711724],
                [123.853906, 10.706421],
                [123.850427, 10.699217],
                [123.84406, 10.688561],
                [123.830987, 10.693937],
                [123.828128, 10.702244],
                [123.834798, 10.71363],
                [123.839948, 10.712839],
                [123.856564, 10.711724]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "amatugan",
    "name": "Barangay Amatugan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.891351, 10.678444],
    "markerOffset": [123.891351, 10.678444],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Amatugan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252002"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.905021, 10.668651],
                [123.8914, 10.668563],
                [123.87154, 10.674578],
                [123.883107, 10.690203],
                [123.907921, 10.683743],
                [123.909741, 10.682975],
                [123.905023, 10.673631],
                [123.905021, 10.668651]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tuburan-antipolo",
    "name": "Barangay Antipolo",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.772527, 10.657295],
    "markerOffset": [123.772527, 10.657295],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Antipolo",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252003"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.785417, 10.656811],
                [123.773018, 10.646657],
                [123.759963, 10.653579],
                [123.769897, 10.667617],
                [123.774529, 10.669462],
                [123.774995, 10.666836],
                [123.785417, 10.656811]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "apalan",
    "name": "Barangay Apalan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.840105, 10.748654],
    "markerOffset": [123.840105, 10.748654],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Apalan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252004"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.85057, 10.751838],
                [123.849947, 10.745581],
                [123.849285, 10.740888],
                [123.845949, 10.740911],
                [123.834482, 10.741394],
                [123.831505, 10.748669],
                [123.831115, 10.755023],
                [123.835561, 10.760421],
                [123.84073, 10.754272],
                [123.845782, 10.751673],
                [123.85057, 10.751838]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bagasawe",
    "name": "Barangay Bagasawe",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.844482, 10.762142],
    "markerOffset": [123.844482, 10.762142],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bagasawe",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252005"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.851218, 10.77024],
                [123.85057, 10.751838],
                [123.845782, 10.751673],
                [123.84073, 10.754272],
                [123.835561, 10.760421],
                [123.83896, 10.762302],
                [123.837801, 10.765339],
                [123.837733, 10.77199],
                [123.837785, 10.772023],
                [123.837872, 10.77208],
                [123.851218, 10.77024]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bakyawan",
    "name": "Barangay Bakyawan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.832054, 10.642416],
    "markerOffset": [123.832054, 10.642416],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bakyawan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252006"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.84255, 10.645627],
                [123.845666, 10.638043],
                [123.840094, 10.638684],
                [123.824738, 10.637077],
                [123.823175, 10.636507],
                [123.819197, 10.645766],
                [123.826983, 10.647229],
                [123.838511, 10.647436],
                [123.84255, 10.645627]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bangkito",
    "name": "Barangay Bangkito",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.89998, 10.605091],
    "markerOffset": [123.89998, 10.605091],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bangkito",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252007"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.88328, 10.5924],
                [123.888233, 10.60161],
                [123.899918, 10.61227],
                [123.914449, 10.618824],
                [123.907629, 10.60135],
                [123.88328, 10.5924]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-i",
    "name": "Barangay Barangay I (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.828239, 10.730493],
    "markerOffset": [123.828239, 10.730493],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay I (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252048"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.830484, 10.733376],
                [123.830333, 10.730133],
                [123.826367, 10.728134],
                [123.825338, 10.729801],
                [123.830484, 10.733376]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-ii",
    "name": "Barangay Barangay II (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.830223, 10.727571],
    "markerOffset": [123.830223, 10.727571],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay II (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252049"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.834775, 10.729062],
                [123.82906, 10.723845],
                [123.827483, 10.726708],
                [123.826367, 10.728134],
                [123.830333, 10.730133],
                [123.834775, 10.729062]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-iii",
    "name": "Barangay Barangay III (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.825857, 10.727774],
    "markerOffset": [123.825857, 10.727774],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay III (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252050"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.826367, 10.728134],
                [123.827483, 10.726708],
                [123.825974, 10.72583],
                [123.824395, 10.72944],
                [123.825338, 10.729801],
                [123.826367, 10.728134]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-iv",
    "name": "Barangay Barangay IV (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.824785, 10.727367],
    "markerOffset": [123.824785, 10.727367],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay IV (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252051"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.824395, 10.72944],
                [123.825974, 10.72583],
                [123.82512, 10.725326],
                [123.824369, 10.727151],
                [123.823607, 10.728954],
                [123.824395, 10.72944]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-v",
    "name": "Barangay Barangay V (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.827052, 10.724659],
    "markerOffset": [123.827052, 10.724659],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay V (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252052"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.82906, 10.723845],
                [123.828942, 10.72362],
                [123.826206, 10.7229],
                [123.82512, 10.725326],
                [123.825974, 10.72583],
                [123.827483, 10.726708],
                [123.82906, 10.723845]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-vi",
    "name": "Barangay Barangay VI (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.821926, 10.727655],
    "markerOffset": [123.821926, 10.727655],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay VI (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252053"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.824369, 10.727151],
                [123.821331, 10.726115],
                [123.818954, 10.728294],
                [123.823607, 10.728954],
                [123.824369, 10.727151]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-vii",
    "name": "Barangay Barangay VII (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.823816, 10.724447],
    "markerOffset": [123.823816, 10.724447],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay VII (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252054"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.82512, 10.725326],
                [123.826206, 10.7229],
                [123.823509, 10.721578],
                [123.821331, 10.726115],
                [123.824369, 10.727151],
                [123.82512, 10.725326]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "barangay-viii",
    "name": "Barangay Barangay VIII (Pob.)",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.8148, 10.72136],
    "markerOffset": [123.8148, 10.72136],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Barangay VIII (Pob.)",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252055"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.818954, 10.728294],
                [123.821331, 10.726115],
                [123.823509, 10.721578],
                [123.824478, 10.719464],
                [123.815728, 10.713735],
                [123.809702, 10.71632],
                [123.809008, 10.721338],
                [123.800379, 10.720854],
                [123.801974, 10.722952],
                [123.810605, 10.725279],
                [123.815234, 10.727998],
                [123.818954, 10.728294]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bulwang",
    "name": "Barangay Bulwang",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.915393, 10.748192],
    "markerOffset": [123.915393, 10.748192],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Bulwang",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252008"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.922033, 10.725298],
                [123.919084, 10.724989],
                [123.904185, 10.729965],
                [123.89622, 10.730895],
                [123.906277, 10.752953],
                [123.920135, 10.778812],
                [123.925898, 10.77719],
                [123.92646, 10.772753],
                [123.926453, 10.750476],
                [123.923661, 10.730515],
                [123.922033, 10.725298]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "caridad",
    "name": "Barangay Caridad",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.813482, 10.662848],
    "markerOffset": [123.813482, 10.662848],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Caridad",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252015"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.820416, 10.675871],
                [123.826983, 10.647229],
                [123.819197, 10.645766],
                [123.808645, 10.642218],
                [123.806553, 10.660186],
                [123.799963, 10.679907],
                [123.802808, 10.6854],
                [123.815397, 10.676704],
                [123.820416, 10.675871]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "carmelo",
    "name": "Barangay Carmelo",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.801137, 10.702015],
    "markerOffset": [123.801137, 10.702015],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Carmelo",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252016"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.810905, 10.695189],
                [123.80628, 10.691372],
                [123.793478, 10.701601],
                [123.791596, 10.706873],
                [123.797706, 10.712374],
                [123.804472, 10.707207],
                [123.810905, 10.695189]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tuburan-cogon",
    "name": "Barangay Cogon",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.826193, 10.713202],
    "markerOffset": [123.826193, 10.713202],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Cogon",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252017"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.834798, 10.71363],
                [123.828128, 10.702244],
                [123.823995, 10.702887],
                [123.822537, 10.707924],
                [123.816492, 10.706742],
                [123.815728, 10.713735],
                [123.824478, 10.719464],
                [123.823509, 10.721578],
                [123.826206, 10.7229],
                [123.828942, 10.72362],
                [123.834386, 10.72103],
                [123.834798, 10.71363]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "colonia",
    "name": "Barangay Colonia",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.794624, 10.648122],
    "markerOffset": [123.794624, 10.648122],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Colonia",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252018"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.806553, 10.660186],
                [123.808645, 10.642218],
                [123.802641, 10.639076],
                [123.806859, 10.634408],
                [123.805977, 10.633291],
                [123.801973, 10.63223],
                [123.779666, 10.644399],
                [123.773018, 10.646657],
                [123.785417, 10.656811],
                [123.790024, 10.660696],
                [123.806553, 10.660186]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "daan-lungsod",
    "name": "Barangay Daan Lungsod",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.838711, 10.734746],
    "markerOffset": [123.838711, 10.734746],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Daan Lungsod",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252019"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.845949, 10.740911],
                [123.844835, 10.727928],
                [123.834775, 10.729062],
                [123.830333, 10.730133],
                [123.830484, 10.733376],
                [123.832593, 10.736499],
                [123.83403, 10.741909],
                [123.834269, 10.74179],
                [123.834482, 10.741394],
                [123.845949, 10.740911]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "fortaliza",
    "name": "Barangay Fortaliza",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.798045, 10.667397],
    "markerOffset": [123.798045, 10.667397],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Fortaliza",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252020"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.806553, 10.660186],
                [123.790024, 10.660696],
                [123.79125, 10.669116],
                [123.799963, 10.679907],
                [123.806553, 10.660186]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "ga-ang",
    "name": "Barangay Ga-ang",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.870522, 10.615124],
    "markerOffset": [123.870522, 10.615124],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Ga-ang",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252021"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.873261, 10.631398],
                [123.88504, 10.616684],
                [123.884846, 10.606799],
                [123.875998, 10.604894],
                [123.870977, 10.601909],
                [123.857771, 10.59972],
                [123.860334, 10.606151],
                [123.855156, 10.619161],
                [123.862696, 10.62106],
                [123.865349, 10.627682],
                [123.866301, 10.633419],
                [123.873261, 10.631398]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "gimama-a",
    "name": "Barangay Gimama-a",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.83703, 10.682146],
    "markerOffset": [123.83703, 10.682146],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Gimama-a",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252022"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.828128, 10.702244],
                [123.830987, 10.693937],
                [123.84406, 10.688561],
                [123.847509, 10.688431],
                [123.855654, 10.682385],
                [123.840462, 10.66448],
                [123.829928, 10.672122],
                [123.827634, 10.676409],
                [123.824821, 10.682308],
                [123.823949, 10.693618],
                [123.823995, 10.702887],
                [123.828128, 10.702244]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "jagbuaya",
    "name": "Barangay Jagbuaya",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.815905, 10.685663],
    "markerOffset": [123.815905, 10.685663],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Jagbuaya",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252023"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.820416, 10.675871],
                [123.815397, 10.676704],
                [123.802808, 10.6854],
                [123.80628, 10.691372],
                [123.810905, 10.695189],
                [123.823949, 10.693618],
                [123.824821, 10.682308],
                [123.827634, 10.676409],
                [123.820416, 10.675871]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kabangkalan",
    "name": "Barangay Kabangkalan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.875895, 10.662721],
    "markerOffset": [123.875895, 10.662721],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kabangkalan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252009"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.87154, 10.674578],
                [123.8914, 10.668563],
                [123.88154, 10.649159],
                [123.871593, 10.655213],
                [123.862062, 10.651498],
                [123.86421, 10.662234],
                [123.868127, 10.675564],
                [123.87154, 10.674578]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kabkaban",
    "name": "Barangay Kabkaban",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.861731, 10.70945],
    "markerOffset": [123.861731, 10.70945],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kabkaban",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252024"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.86763, 10.702493],
                [123.853906, 10.706421],
                [123.856564, 10.711724],
                [123.863497, 10.718869],
                [123.868056, 10.70483],
                [123.86763, 10.702493]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kagba-o",
    "name": "Barangay Kagba-o",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.815602, 10.635727],
    "markerOffset": [123.815602, 10.635727],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kagba-o",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252025"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.824738, 10.637077],
                [123.823001, 10.62768],
                [123.820803, 10.624173],
                [123.818499, 10.623607],
                [123.813762, 10.630657],
                [123.806859, 10.634408],
                [123.802641, 10.639076],
                [123.808645, 10.642218],
                [123.819197, 10.645766],
                [123.823175, 10.636507],
                [123.824738, 10.637077]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kalangahan",
    "name": "Barangay Kalangahan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.895973, 10.694045],
    "markerOffset": [123.895973, 10.694045],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kalangahan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252010"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.907921, 10.683743],
                [123.883107, 10.690203],
                [123.879899, 10.691073],
                [123.883754, 10.70294],
                [123.912121, 10.698494],
                [123.907835, 10.689567],
                [123.907921, 10.683743]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kamansi",
    "name": "Barangay Kamansi",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.893826, 10.650745],
    "markerOffset": [123.893826, 10.650745],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kamansi",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252011"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.904034, 10.638494],
                [123.892912, 10.635739],
                [123.879602, 10.633944],
                [123.88154, 10.649159],
                [123.8914, 10.668563],
                [123.905021, 10.668651],
                [123.905003, 10.648089],
                [123.904034, 10.638494]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kampoot",
    "name": "Barangay Kampoot",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.879633, 10.782306],
    "markerOffset": [123.879633, 10.782306],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kampoot",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252026"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.897363, 10.785222],
                [123.892929, 10.768828],
                [123.889816, 10.769771],
                [123.884397, 10.766505],
                [123.878732, 10.765218],
                [123.878621, 10.76822],
                [123.869966, 10.783368],
                [123.855277, 10.799384],
                [123.85797, 10.801816],
                [123.859286, 10.800108],
                [123.876931, 10.791378],
                [123.897363, 10.785222]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kan-an",
    "name": "Barangay Kan-an",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.883939, 10.602483],
    "markerOffset": [123.883939, 10.602483],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kan-an",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252012"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.88328, 10.5924],
                [123.879678, 10.596097],
                [123.876506, 10.596847],
                [123.87674, 10.600328],
                [123.870977, 10.601909],
                [123.875998, 10.604894],
                [123.884846, 10.606799],
                [123.899918, 10.61227],
                [123.888233, 10.60161],
                [123.88328, 10.5924]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kanlunsing",
    "name": "Barangay Kanlunsing",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.892117, 10.614745],
    "markerOffset": [123.892117, 10.614745],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kanlunsing",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252013"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.899918, 10.61227],
                [123.884846, 10.606799],
                [123.88504, 10.616684],
                [123.897635, 10.623372],
                [123.899918, 10.61227]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kansi",
    "name": "Barangay Kansi",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.840854, 10.622023],
    "markerOffset": [123.840854, 10.622023],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kansi",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252014"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.845666, 10.638043],
                [123.852155, 10.623996],
                [123.855156, 10.619161],
                [123.860334, 10.606151],
                [123.857771, 10.59972],
                [123.853448, 10.602362],
                [123.85438, 10.605626],
                [123.844358, 10.605022],
                [123.84097, 10.609795],
                [123.841475, 10.612735],
                [123.832457, 10.616611],
                [123.830938, 10.615476],
                [123.825495, 10.617596],
                [123.820803, 10.624173],
                [123.823001, 10.62768],
                [123.824738, 10.637077],
                [123.840094, 10.638684],
                [123.845666, 10.638043]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "kaorasan",
    "name": "Barangay Kaorasan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.90576, 10.620208],
    "markerOffset": [123.90576, 10.620208],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Kaorasan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252027"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.914449, 10.618824],
                [123.899918, 10.61227],
                [123.897635, 10.623372],
                [123.904274, 10.62524],
                [123.913087, 10.626359],
                [123.914449, 10.618824]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "libo",
    "name": "Barangay Libo",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.859572, 10.700627],
    "markerOffset": [123.859572, 10.700627],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Libo",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252028"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.86763, 10.702493],
                [123.866521, 10.694747],
                [123.850427, 10.699217],
                [123.853906, 10.706421],
                [123.86763, 10.702493]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "lusong",
    "name": "Barangay Lusong",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.896976, 10.760755],
    "markerOffset": [123.896976, 10.760755],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Lusong",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252029"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.920135, 10.778812],
                [123.906277, 10.752953],
                [123.89622, 10.730895],
                [123.892441, 10.735285],
                [123.887008, 10.741523],
                [123.885808, 10.74932],
                [123.878239, 10.749547],
                [123.873606, 10.754574],
                [123.874661, 10.758289],
                [123.878129, 10.76362],
                [123.878732, 10.765218],
                [123.884397, 10.766505],
                [123.889816, 10.769771],
                [123.892929, 10.768828],
                [123.897363, 10.785222],
                [123.920135, 10.778812]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "macupa",
    "name": "Barangay Macupa",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.862202, 10.757244],
    "markerOffset": [123.862202, 10.757244],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Macupa",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252030"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.878129, 10.76362],
                [123.874661, 10.758289],
                [123.873606, 10.754574],
                [123.878239, 10.749547],
                [123.866989, 10.747901],
                [123.849947, 10.745581],
                [123.85057, 10.751838],
                [123.851218, 10.77024],
                [123.873647, 10.764438],
                [123.878129, 10.76362]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mag-alwa",
    "name": "Barangay Mag-alwa",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.871524, 10.643421],
    "markerOffset": [123.871524, 10.643421],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mag-alwa",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252031"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.88154, 10.649159],
                [123.879602, 10.633944],
                [123.873261, 10.631398],
                [123.866301, 10.633419],
                [123.860898, 10.645336],
                [123.862062, 10.651498],
                [123.871593, 10.655213],
                [123.88154, 10.649159]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mag-antoy",
    "name": "Barangay Mag-antoy",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.855974, 10.633844],
    "markerOffset": [123.855974, 10.633844],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mag-antoy",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252032"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.860898, 10.645336],
                [123.866301, 10.633419],
                [123.865349, 10.627682],
                [123.862696, 10.62106],
                [123.855156, 10.619161],
                [123.852155, 10.623996],
                [123.845666, 10.638043],
                [123.84255, 10.645627],
                [123.846956, 10.644598],
                [123.860898, 10.645336]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mag-atubang",
    "name": "Barangay Mag-atubang",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.853821, 10.66202],
    "markerOffset": [123.853821, 10.66202],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mag-atubang",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252033"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.868127, 10.675564],
                [123.86421, 10.662234],
                [123.862062, 10.651498],
                [123.860898, 10.645336],
                [123.846956, 10.644598],
                [123.84255, 10.645627],
                [123.840462, 10.66448],
                [123.855654, 10.682385],
                [123.868127, 10.675564]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "maghan-ay",
    "name": "Barangay Maghan-ay",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.818619, 10.621402],
    "markerOffset": [123.818619, 10.621402],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Maghan-ay",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252034"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.820803, 10.624173],
                [123.825495, 10.617596],
                [123.830938, 10.615476],
                [123.828179, 10.612653],
                [123.822646, 10.611194],
                [123.805977, 10.633291],
                [123.806859, 10.634408],
                [123.813762, 10.630657],
                [123.818499, 10.623607],
                [123.820803, 10.624173]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "mangga",
    "name": "Barangay Mangga",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.81167, 10.706964],
    "markerOffset": [123.81167, 10.706964],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Mangga",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252035"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.815728, 10.713735],
                [123.816492, 10.706742],
                [123.822537, 10.707924],
                [123.823995, 10.702887],
                [123.823949, 10.693618],
                [123.810905, 10.695189],
                [123.804472, 10.707207],
                [123.797706, 10.712374],
                [123.799421, 10.714601],
                [123.800379, 10.720854],
                [123.809008, 10.721338],
                [123.809702, 10.71632],
                [123.815728, 10.713735]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "marmol",
    "name": "Barangay Marmol",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.863622, 10.687649],
    "markerOffset": [123.863622, 10.687649],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Marmol",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252036"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.87154, 10.674578],
                [123.868127, 10.675564],
                [123.855654, 10.682385],
                [123.847509, 10.688431],
                [123.84406, 10.688561],
                [123.850427, 10.699217],
                [123.866521, 10.694747],
                [123.879899, 10.691073],
                [123.883107, 10.690203],
                [123.87154, 10.674578]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "molobolo",
    "name": "Barangay Molobolo",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.79821, 10.692383],
    "markerOffset": [123.79821, 10.692383],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Molobolo",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252037"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.80628, 10.691372],
                [123.802808, 10.6854],
                [123.796796, 10.687509],
                [123.790734, 10.691732],
                [123.794134, 10.699386],
                [123.793478, 10.701601],
                [123.80628, 10.691372]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "montealegre",
    "name": "Barangay Montealegre",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.903286, 10.71425],
    "markerOffset": [123.903286, 10.71425],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Montealegre",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252038"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.922033, 10.725298],
                [123.916624, 10.708042],
                [123.912121, 10.698494],
                [123.883754, 10.70294],
                [123.886435, 10.71062],
                [123.89622, 10.730895],
                [123.904185, 10.729965],
                [123.919084, 10.724989],
                [123.922033, 10.725298]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "putat",
    "name": "Barangay Putat",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.858712, 10.779249],
    "markerOffset": [123.858712, 10.779249],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Putat",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252040"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.85797, 10.801816],
                [123.855277, 10.799384],
                [123.869966, 10.783368],
                [123.878621, 10.76822],
                [123.878732, 10.765218],
                [123.878129, 10.76362],
                [123.873647, 10.764438],
                [123.851218, 10.77024],
                [123.837872, 10.77208],
                [123.847987, 10.788915],
                [123.847587, 10.790496],
                [123.853749, 10.799726],
                [123.85797, 10.801816]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "san-juan",
    "name": "Barangay San Juan",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.843483, 10.720145],
    "markerOffset": [123.843483, 10.720145],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay San Juan",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252041"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.844835, 10.727928],
                [123.851295, 10.725473],
                [123.854178, 10.721149],
                [123.856564, 10.711724],
                [123.839948, 10.712839],
                [123.834798, 10.71363],
                [123.834386, 10.72103],
                [123.828942, 10.72362],
                [123.82906, 10.723845],
                [123.834775, 10.729062],
                [123.844835, 10.727928]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sandayong",
    "name": "Barangay Sandayong",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.878346, 10.714485],
    "markerOffset": [123.878346, 10.714485],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sandayong",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252042"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.89622, 10.730895],
                [123.886435, 10.71062],
                [123.883754, 10.70294],
                [123.879899, 10.691073],
                [123.866521, 10.694747],
                [123.86763, 10.702493],
                [123.868056, 10.70483],
                [123.863497, 10.718869],
                [123.868901, 10.726342],
                [123.892441, 10.735285],
                [123.89622, 10.730895]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tuburan-santo-nino",
    "name": "Barangay Santo Niño",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.787784, 10.674987],
    "markerOffset": [123.787784, 10.674987],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Santo Niño",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252043"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.790734, 10.691732],
                [123.796796, 10.687509],
                [123.802808, 10.6854],
                [123.799963, 10.679907],
                [123.79125, 10.669116],
                [123.790024, 10.660696],
                [123.785417, 10.656811],
                [123.774995, 10.666836],
                [123.774529, 10.669462],
                [123.7821, 10.680747],
                [123.784041, 10.685002],
                [123.790734, 10.691732]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "siotes",
    "name": "Barangay Siotes",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.877365, 10.739129],
    "markerOffset": [123.877365, 10.739129],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Siotes",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252044"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.892441, 10.735285],
                [123.868901, 10.726342],
                [123.867535, 10.733558],
                [123.866989, 10.747901],
                [123.878239, 10.749547],
                [123.885808, 10.74932],
                [123.887008, 10.741523],
                [123.892441, 10.735285]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "sumon",
    "name": "Barangay Sumon",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.831593, 10.660231],
    "markerOffset": [123.831593, 10.660231],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Sumon",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252045"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.840462, 10.66448],
                [123.84255, 10.645627],
                [123.838511, 10.647436],
                [123.826983, 10.647229],
                [123.820416, 10.675871],
                [123.827634, 10.676409],
                [123.829928, 10.672122],
                [123.840462, 10.66448]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tuburan-tominjao",
    "name": "Barangay Tominjao",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.857704, 10.732608],
    "markerOffset": [123.857704, 10.732608],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tominjao",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252046"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.868901, 10.726342],
                [123.863497, 10.718869],
                [123.856564, 10.711724],
                [123.854178, 10.721149],
                [123.851295, 10.725473],
                [123.844835, 10.727928],
                [123.845949, 10.740911],
                [123.849285, 10.740888],
                [123.849947, 10.745581],
                [123.866989, 10.747901],
                [123.867535, 10.733558],
                [123.868901, 10.726342]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "id": "tomugpa",
    "name": "Barangay Tomugpa",
    "city": "Tuburan, Cebu",
    "status": "Power Restored",
    "timeRemaining": "Stable",
    "coordinates": [123.890418, 10.628469],
    "markerOffset": [123.890418, 10.628469],
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Barangay Tomugpa",
            "city": "Tuburan, Cebu",
            "status": "Power Restored",
            "psgc": "PH072252047"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [123.904274, 10.62524],
                [123.897635, 10.623372],
                [123.88504, 10.616684],
                [123.873261, 10.631398],
                [123.879602, 10.633944],
                [123.892912, 10.635739],
                [123.904034, 10.638494],
                [123.904274, 10.62524]
              ]
            ]
          }
        }
      ]
    }
  }
]
