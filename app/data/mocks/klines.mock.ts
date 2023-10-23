import { type Kline } from '~/types/api.types'

const klinesMock: Kline[] = [
  [
    1499040000000, // Kline open time
    '0.01634790', // Open price
    '0.80000000', // High price
    '0.01575800', // Low price
    '0.01577100', // Close price
    '148976.11427815', // Volume
    1499644799999, // Kline close time
    '2434.19055334', // Quote asset volume
    308, // Number of trades
    '1756.87402397', // Taker buy base asset volume
    '28.46694368', // Taker buy quote asset volume
    '0', // Unused field. Ignore.
  ],
  [
    1698055740000,
    '1580.37000000',
    '1581.00000000',
    '1580.37000000',
    '1580.87000000',
    '1.88800000',
    1698055799999,
    '2984.46345100',
    21,
    '1.59780000',
    '2525.70140200',
    '0',
  ],
  [
    1698055800000,
    '1580.46000000',
    '1580.46000000',
    '1579.28000000',
    '1579.39000000',
    '2.21890000',
    1698055859999,
    '3505.68111700',
    21,
    '1.14030000',
    '1801.49356400',
    '0',
  ],
  [
    1698055860000,
    '1579.61000000',
    '1580.41000000',
    '1579.55000000',
    '1580.41000000',
    '0.57030000',
    1698055919999,
    '901.09191400',
    14,
    '0.48170000',
    '761.09520700',
    '0',
  ],
  [
    1698055920000,
    '1580.62000000',
    '1581.59000000',
    '1580.62000000',
    '1581.59000000',
    '0.90070000',
    1698055979999,
    '1424.33863900',
    19,
    '0.63550000',
    '1004.98194300',
    '0',
  ],
  [
    1698055980000,
    '1581.59000000',
    '1581.59000000',
    '1580.52000000',
    '1580.52000000',
    '0.95470000',
    1698056039999,
    '1509.53133000',
    14,
    '0.13430000',
    '212.36093000',
    '0',
  ],
  [
    1698056040000,
    '1580.61000000',
    '1580.61000000',
    '1580.26000000',
    '1580.40000000',
    '0.70420000',
    1698056099999,
    '1112.88297200',
    12,
    '0.50260000',
    '794.29460400',
    '0',
  ],
  [
    1698056100000,
    '1580.29000000',
    '1581.09000000',
    '1580.29000000',
    '1581.09000000',
    '0.24950000',
    1698056159999,
    '394.45099800',
    8,
    '0.21250000',
    '335.96627300',
    '0',
  ],
  [
    1698056160000,
    '1580.66000000',
    '1580.66000000',
    '1580.27000000',
    '1580.36000000',
    '0.70870000',
    1698056219999,
    '1120.18600500',
    5,
    '0.00000000',
    '0.00000000',
    '0',
  ],
  [
    1698056220000,
    '1580.65000000',
    '1580.65000000',
    '1580.65000000',
    '1580.65000000',
    '0.06320000',
    1698056279999,
    '99.89708000',
    1,
    '0.06320000',
    '99.89708000',
    '0',
  ],
  [
    1698056280000,
    '1580.96000000',
    '1581.28000000',
    '1580.86000000',
    '1581.28000000',
    '0.67800000',
    1698056339999,
    '1071.97926500',
    12,
    '0.48410000',
    '765.37071100',
    '0',
  ],
  [
    1698056340000,
    '1581.11000000',
    '1581.74000000',
    '1581.10000000',
    '1581.74000000',
    '1.71980000',
    1698056399999,
    '2720.07251200',
    33,
    '1.65770000',
    '2621.85949900',
    '0',
  ],
  [
    1698056400000,
    '1581.94000000',
    '1581.94000000',
    '1581.72000000',
    '1581.74000000',
    '0.02570000',
    1698056459999,
    '40.65253000',
    3,
    '0.00980000',
    '15.50301200',
    '0',
  ],
  [
    1698056460000,
    '1581.78000000',
    '1581.78000000',
    '1581.61000000',
    '1581.61000000',
    '0.44970000',
    1698056519999,
    '711.31419100',
    7,
    '0.20990000',
    '332.00690700',
    '0',
  ],
  [
    1698056520000,
    '1581.84000000',
    '1581.85000000',
    '1581.67000000',
    '1581.79000000',
    '0.26180000',
    1698056579999,
    '414.12500400',
    7,
    '0.25760000',
    '407.48199000',
    '0',
  ],
  [
    1698056580000,
    '1581.78000000',
    '1582.01000000',
    '1581.51000000',
    '1582.01000000',
    '1.14660000',
    1698056639999,
    '1813.56846600',
    12,
    '0.20890000',
    '330.43043100',
    '0',
  ],
  [
    1698056640000,
    '1581.97000000',
    '1582.07000000',
    '1581.85000000',
    '1581.85000000',
    '0.96230000',
    1698056699999,
    '1522.32567200',
    16,
    '0.19900000',
    '314.81174900',
    '0',
  ],
  [
    1698056700000,
    '1581.70000000',
    '1581.80000000',
    '1581.65000000',
    '1581.80000000',
    '0.63710000',
    1698056759999,
    '1007.73926400',
    7,
    '0.61500000',
    '972.78369400',
    '0',
  ],
  [
    1698056760000,
    '1581.81000000',
    '1581.81000000',
    '1581.04000000',
    '1581.35000000',
    '1.43270000',
    1698056819999,
    '2265.89719900',
    13,
    '0.42060000',
    '665.13626100',
    '0',
  ],
  [
    1698056820000,
    '1581.46000000',
    '1581.52000000',
    '1581.15000000',
    '1581.52000000',
    '1.25760000',
    1698056879999,
    '1988.68925400',
    16,
    '0.09560000',
    '151.18887600',
    '0',
  ],
  [
    1698056880000,
    '1581.52000000',
    '1581.52000000',
    '1581.52000000',
    '1581.52000000',
    '0.00000000',
    1698056939999,
    '0.00000000',
    0,
    '0.00000000',
    '0.00000000',
    '0',
  ],
]

export default klinesMock