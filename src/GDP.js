import React from "react";
//import { Line } from "react-svg-curve";
const gdpdata2 = [
  {
    year: 1790,
    gdp: 189
  },
  {
    year: 1791,
    gdp: 206
  },
  {
    year: 1792,
    gdp: 225
  },
  {
    year: 1793,
    gdp: 251
  },
  {
    year: 1794,
    gdp: 315
  },
  {
    year: 1795,
    gdp: 383
  },
  {
    year: 1796,
    gdp: 417
  },
  {
    year: 1797,
    gdp: 409
  },
  {
    year: 1798,
    gdp: 413
  },
  {
    year: 1799,
    gdp: 442
  },
  {
    year: 1800,
    gdp: 480
  },
  {
    year: 1801,
    gdp: 514
  },
  {
    year: 1802,
    gdp: 451
  },
  {
    year: 1803,
    gdp: 487
  },
  {
    year: 1804,
    gdp: 533
  },
  {
    year: 1805,
    gdp: 561
  },
  {
    year: 1806,
    gdp: 617
  },
  {
    year: 1807,
    gdp: 589
  },
  {
    year: 1808,
    gdp: 646
  },
  {
    year: 1809,
    gdp: 687
  },
  {
    year: 1810,
    gdp: 706
  },
  {
    year: 1811,
    gdp: 767
  },
  {
    year: 1812,
    gdp: 786
  },
  {
    year: 1813,
    gdp: 969
  },
  {
    year: 1814,
    gdp: 1078
  },
  {
    year: 1815,
    gdp: 925
  },
  {
    year: 1816,
    gdp: 819
  },
  {
    year: 1817,
    gdp: 769
  },
  {
    year: 1818,
    gdp: 737
  },
  {
    year: 1819,
    gdp: 726
  },
  {
    year: 1820,
    gdp: 710
  },
  {
    year: 1821,
    gdp: 735
  },
  {
    year: 1822,
    gdp: 805
  },
  {
    year: 1823,
    gdp: 759
  },
  {
    year: 1824,
    gdp: 754
  },
  {
    year: 1825,
    gdp: 822
  },
  {
    year: 1826,
    gdp: 866
  },
  {
    year: 1827,
    gdp: 916
  },
  {
    year: 1828,
    gdp: 897
  },
  {
    year: 1829,
    gdp: 930
  },
  {
    year: 1830,
    gdp: 1022
  },
  {
    year: 1831,
    gdp: 1052
  },
  {
    year: 1832,
    gdp: 1129
  },
  {
    year: 1833,
    gdp: 1158
  },
  {
    year: 1834,
    gdp: 1219
  },
  {
    year: 1835,
    gdp: 1340
  },
  {
    year: 1836,
    gdp: 1479
  },
  {
    year: 1837,
    gdp: 1554
  },
  {
    year: 1838,
    gdp: 1598
  },
  {
    year: 1839,
    gdp: 1661
  },
  {
    year: 1840,
    gdp: 1574
  },
  {
    year: 1841,
    gdp: 1652
  },
  {
    year: 1842,
    gdp: 1618
  },
  {
    year: 1843,
    gdp: 1568
  },
  {
    year: 1844,
    gdp: 1702
  },
  {
    year: 1845,
    gdp: 1859
  },
  {
    year: 1846,
    gdp: 2065
  },
  {
    year: 1847,
    gdp: 2410
  },
  {
    year: 1848,
    gdp: 2427
  },
  {
    year: 1849,
    gdp: 2419
  },
  {
    year: 1850,
    gdp: 2581
  },
  {
    year: 1851,
    gdp: 2724
  },
  {
    year: 1852,
    gdp: 3066
  },
  {
    year: 1853,
    gdp: 3311
  },
  {
    year: 1854,
    gdp: 3713
  },
  {
    year: 1855,
    gdp: 3975
  },
  {
    year: 1856,
    gdp: 4047
  },
  {
    year: 1857,
    gdp: 4180
  },
  {
    year: 1858,
    gdp: 4093
  },
  {
    year: 1859,
    gdp: 4425
  },
  {
    year: 1860,
    gdp: 4387
  },
  {
    year: 1861,
    gdp: 4643
  },
  {
    year: 1862,
    gdp: 5844
  },
  {
    year: 1863,
    gdp: 7698
  },
  {
    year: 1864,
    gdp: 9549
  },
  {
    year: 1865,
    gdp: 9977
  },
  {
    year: 1866,
    gdp: 9081
  },
  {
    year: 1867,
    gdp: 8424
  },
  {
    year: 1868,
    gdp: 8224
  },
  {
    year: 1869,
    gdp: 7921
  },
  {
    year: 1870,
    gdp: 7812
  },
  {
    year: 1871,
    gdp: 7665
  },
  {
    year: 1872,
    gdp: 8309
  },
  {
    year: 1873,
    gdp: 8837
  },
  {
    year: 1874,
    gdp: 8563
  },
  {
    year: 1875,
    gdp: 8239
  },
  {
    year: 1876,
    gdp: 8388
  },
  {
    year: 1877,
    gdp: 8604
  },
  {
    year: 1878,
    gdp: 8460
  },
  {
    year: 1879,
    gdp: 9449
  },
  {
    year: 1880,
    gdp: 10462
  },
  {
    year: 1881,
    gdp: 11740
  },
  {
    year: 1882,
    gdp: 12331
  },
  {
    year: 1883,
    gdp: 12435
  },
  {
    year: 1884,
    gdp: 11896
  },
  {
    year: 1885,
    gdp: 11705
  },
  {
    year: 1886,
    gdp: 12297
  },
  {
    year: 1887,
    gdp: 13273
  },
  {
    year: 1888,
    gdp: 14000
  },
  {
    year: 1889,
    gdp: 13987
  },
  {
    year: 1890,
    gdp: 15223
  },
  {
    year: 1891,
    gdp: 15558
  },
  {
    year: 1892,
    gdp: 16514
  },
  {
    year: 1893,
    gdp: 15566
  },
  {
    year: 1894,
    gdp: 14280
  },
  {
    year: 1895,
    gdp: 15754
  },
  {
    year: 1896,
    gdp: 15643
  },
  {
    year: 1897,
    gdp: 16309
  },
  {
    year: 1898,
    gdp: 18263
  },
  {
    year: 1899,
    gdp: 19694
  },
  {
    year: 1900,
    gdp: 20766
  },
  {
    year: 1901,
    gdp: 22484
  },
  {
    year: 1902,
    gdp: 24294
  },
  {
    year: 1903,
    gdp: 26180
  },
  {
    year: 1904,
    gdp: 25928
  },
  {
    year: 1905,
    gdp: 29066
  },
  {
    year: 1906,
    gdp: 31336
  },
  {
    year: 1907,
    gdp: 34178
  },
  {
    year: 1908,
    gdp: 30423
  },
  {
    year: 1909,
    gdp: 32540
  },
  {
    year: 1910,
    gdp: 33746
  },
  {
    year: 1911,
    gdp: 34675
  },
  {
    year: 1912,
    gdp: 37745
  },
  {
    year: 1913,
    gdp: 39517
  },
  {
    year: 1914,
    gdp: 36831
  },
  {
    year: 1915,
    gdp: 39048
  },
  {
    year: 1916,
    gdp: 50117
  },
  {
    year: 1917,
    gdp: 60278
  },
  {
    year: 1918,
    gdp: 76567
  },
  {
    year: 1919,
    gdp: 79090
  },
  {
    year: 1920,
    gdp: 89246
  },
  {
    year: 1921,
    gdp: 74314
  },
  {
    year: 1922,
    gdp: 74140
  },
  {
    year: 1923,
    gdp: 86238
  },
  {
    year: 1924,
    gdp: 87786
  },
  {
    year: 1925,
    gdp: 91449
  },
  {
    year: 1926,
    gdp: 97885
  },
  {
    year: 1927,
    gdp: 96466
  },
  {
    year: 1928,
    gdp: 98305
  },
  {
    year: 1929,
    gdp: 104600
  },
  {
    year: 1930,
    gdp: 92200
  },
  {
    year: 1931,
    gdp: 77400
  },
  {
    year: 1932,
    gdp: 59500
  },
  {
    year: 1933,
    gdp: 57200
  },
  {
    year: 1934,
    gdp: 66800
  },
  {
    year: 1935,
    gdp: 74200
  },
  {
    year: 1936,
    gdp: 84800
  },
  {
    year: 1937,
    gdp: 93000
  },
  {
    year: 1938,
    gdp: 87400
  },
  {
    year: 1939,
    gdp: 93400
  },
  {
    year: 1940,
    gdp: 102900
  },
  {
    year: 1941,
    gdp: 129300
  },
  {
    year: 1942,
    gdp: 166000
  },
  {
    year: 1943,
    gdp: 203100
  },
  {
    year: 1944,
    gdp: 224400
  },
  {
    year: 1945,
    gdp: 228000
  },
  {
    year: 1946,
    gdp: 227500
  },
  {
    year: 1947,
    gdp: 249600
  },
  {
    year: 1948,
    gdp: 274500
  },
  {
    year: 1949,
    gdp: 272500
  },
  {
    year: 1950,
    gdp: 299800
  },
  {
    year: 1951,
    gdp: 346900
  },
  {
    year: 1952,
    gdp: 367300
  },
  {
    year: 1953,
    gdp: 389200
  },
  {
    year: 1954,
    gdp: 390500
  },
  {
    year: 1955,
    gdp: 425500
  },
  {
    year: 1956,
    gdp: 449400
  },
  {
    year: 1957,
    gdp: 474000
  },
  {
    year: 1958,
    gdp: 481200
  },
  {
    year: 1959,
    gdp: 521700
  },
  {
    year: 1960,
    gdp: 542400
  },
  {
    year: 1961,
    gdp: 562200
  },
  {
    year: 1962,
    gdp: 603900
  },
  {
    year: 1963,
    gdp: 637500
  },
  {
    year: 1964,
    gdp: 684500
  },
  {
    year: 1965,
    gdp: 742300
  },
  {
    year: 1966,
    gdp: 813400
  },
  {
    year: 1967,
    gdp: 860000
  },
  {
    year: 1968,
    gdp: 940700
  },
  {
    year: 1969,
    gdp: 1017600
  },
  {
    year: 1970,
    gdp: 1073300
  },
  {
    year: 1971,
    gdp: 1164900
  },
  {
    year: 1972,
    gdp: 1279100
  },
  {
    year: 1973,
    gdp: 1425400
  },
  {
    year: 1974,
    gdp: 1545200
  },
  {
    year: 1975,
    gdp: 1684900
  },
  {
    year: 1976,
    gdp: 1873400
  },
  {
    year: 1977,
    gdp: 2081800
  },
  {
    year: 1978,
    gdp: 2351600
  },
  {
    year: 1979,
    gdp: 2627300
  },
  {
    year: 1980,
    gdp: 2857300
  },
  {
    year: 1981,
    gdp: 3207000
  },
  {
    year: 1982,
    gdp: 3343800
  },
  {
    year: 1983,
    gdp: 3634000
  },
  {
    year: 1984,
    gdp: 4037600
  },
  {
    year: 1985,
    gdp: 4339000
  },
  {
    year: 1986,
    gdp: 4579600
  },
  {
    year: 1987,
    gdp: 4855200
  },
  {
    year: 1988,
    gdp: 5236400
  },
  {
    year: 1989,
    gdp: 5641600
  },
  {
    year: 1990,
    gdp: 5963100
  },
  {
    year: 1991,
    gdp: 6158100
  },
  {
    year: 1992,
    gdp: 6520300
  },
  {
    year: 1993,
    gdp: 6858600
  },
  {
    year: 1994,
    gdp: 7287200
  },
  {
    year: 1995,
    gdp: 7639700
  },
  {
    year: 1996,
    gdp: 8073100
  },
  {
    year: 1997,
    gdp: 8577600
  },
  {
    year: 1998,
    gdp: 9062800
  },
  {
    year: 1999,
    gdp: 9631200
  },
  {
    year: 2000,
    gdp: 10251000
  },
  {
    year: 2001,
    gdp: 10581900
  },
  {
    year: 2002,
    gdp: 10929100
  },
  {
    year: 2003,
    gdp: 11456500
  },
  {
    year: 2004,
    gdp: 12217200
  },
  {
    year: 2005,
    gdp: 13039200
  },
  {
    year: 2006,
    gdp: 13815600
  },
  {
    year: 2007,
    gdp: 14474200
  },
  {
    year: 2008,
    gdp: 14769900
  },
  {
    year: 2009,
    gdp: 14478100
  },
  {
    year: 2010,
    gdp: 15049000
  },
  {
    year: 2011,
    gdp: 15599700
  },
  {
    year: 2012,
    gdp: 16254000
  },
  {
    year: 2013,
    gdp: 16843200
  },
  {
    year: 2014,
    gdp: 17550700
  },
  {
    year: 2015,
    gdp: 18206000
  },
  {
    year: 2016,
    gdp: 18695100
  },
  {
    year: 2017,
    gdp: 19477300
  },
  {
    year: 2018,
    gdp: 20533100
  },
  {
    year: 2019,
    gdp: 21381000
  },
  {
    year: 2020,
    gdp: 21060500
  }
];
export const gdpdata = [
  { year: 1791, num: 0.3 },
  { year: 1792, num: 0.3 },
  { year: 1793, num: 0.3 },
  { year: 1794, num: 0.4 },
  { year: 1795, num: 0.4 },
  { year: 1796, num: 0.5 },
  { year: 1797, num: 0.5 },
  { year: 1798, num: 0.5 },
  { year: 1799, num: 0.5 },
  { year: 1800, num: 0.5 },
  { year: 1801, num: 0.6 },
  { year: 1802, num: 0.6 },
  { year: 1803, num: 0.6 },
  { year: 1804, num: 0.6 },
  { year: 1805, num: 0.7 },
  { year: 1806, num: 0.7 },
  { year: 1807, num: 0.7 },
  { year: 1808, num: 0.6 },
  { year: 1809, num: 0.7 },
  { year: 1810, num: 0.8 },
  { year: 1811, num: 0.8 },
  { year: 1812, num: 0.8 },
  { year: 1813, num: 1 },
  { year: 1814, num: 1.2 },
  { year: 1815, num: 1.2 },
  { year: 1816, num: 1.3 },
  { year: 1817, num: 1.3 },
  { year: 1818, num: 1.4 },
  { year: 1819, num: 1.2 },
  { year: 1820, num: 1.1 },
  { year: 1821, num: 1 },
  { year: 1822, num: 1.1 },
  { year: 1823, num: 1.1 },
  { year: 1824, num: 1.1 },
  { year: 1825, num: 1.2 },
  { year: 1826, num: 1.2 },
  { year: 1827, num: 1.2 },
  { year: 1828, num: 1.2 },
  { year: 1829, num: 1.2 },
  { year: 1830, num: 1.2 },
  { year: 1831, num: 1.3 },
  { year: 1832, num: 1.5 },
  { year: 1833, num: 1.6 },
  { year: 1834, num: 1.6 },
  { year: 1835, num: 1.7 },
  { year: 1836, num: 1.7 },
  { year: 1837, num: 1.9 },
  { year: 1838, num: 1.8 },
  { year: 1839, num: 1.9 },
  { year: 1840, num: 1.8 },
  { year: 1841, num: 1.8 },
  { year: 1842, num: 1.7 },
  { year: 1843, num: 1.9 },
  { year: 1844, num: 2 },
  { year: 1845, num: 2.1 },
  { year: 1846, num: 2.3 },
  { year: 1847, num: 2.5 },
  { year: 1848, num: 2.5 },
  { year: 1849, num: 2.5 },
  { year: 1850, num: 2.8 },
  { year: 1851, num: 2.8 },
  { year: 1852, num: 3.2 },
  { year: 1853, num: 3.6 },
  { year: 1854, num: 3.6 },
  { year: 1855, num: 4 },
  { year: 1856, num: 4.2 },
  { year: 1857, num: 4 },
  { year: 1858, num: 4.3 },
  { year: 1859, num: 4.1 },
  { year: 1860, num: 4.1 },
  { year: 1861, num: 4.2 },
  { year: 1862, num: 4.9 },
  { year: 1863, num: 6.2 },
  { year: 1864, num: 8.8 },
  { year: 1865, num: 8.8 },
  { year: 1866, num: 8.6 },
  { year: 1867, num: 8.3 },
  { year: 1868, num: 8.4 },
  { year: 1869, num: 8.3 },
  { year: 1870, num: 8.5 },
  { year: 1871, num: 8.8 },
  { year: 1872, num: 8.9 },
  { year: 1873, num: 9.3 },
  { year: 1874, num: 9 },
  { year: 1875, num: 9 },
  { year: 1876, num: 8.8 },
  { year: 1877, num: 8.9 },
  { year: 1878, num: 8.7 },
  { year: 1879, num: 9.5 },
  { year: 1880, num: 11.2 },
  { year: 1881, num: 11.5 },
  { year: 1882, num: 12.5 },
  { year: 1883, num: 12.4 },
  { year: 1884, num: 12.1 },
  { year: 1885, num: 11.8 },
  { year: 1886, num: 12.2 },
  { year: 1887, num: 12.8 },
  { year: 1888, num: 12.9 },
  { year: 1889, num: 13.7 },
  { year: 1890, num: 13.6 },
  { year: 1891, num: 14 },
  { year: 1892, num: 14.5 },
  { year: 1893, num: 14.6 },
  { year: 1894, num: 13.4 },
  { year: 1895, num: 14.7 },
  { year: 1896, num: 14.4 },
  { year: 1897, num: 15.4 },
  { year: 1898, num: 15.9 },
  { year: 1899, num: 18 },
  { year: 1900, num: 18.8 },
  { year: 1901, num: 21.2 },
  { year: 1902, num: 21.8 },
  { year: 1903, num: 23 },
  { year: 1904, num: 24.1 },
  { year: 1905, num: 26.3 },
  { year: 1906, num: 28.3 },
  { year: 1907, num: 29.1 },
  { year: 1908, num: 26.9 },
  { year: 1909, num: 30.1 },
  { year: 1910, num: 31.5 },
  { year: 1911, num: 32.4 },
  { year: 1912, num: 35.1 },
  { year: 1913, num: 36.8 },
  { year: 1914, num: 34.5 },
  { year: 1915, num: 36.5 },
  { year: 1916, num: 46.1 },
  { year: 1917, num: 55.1 },
  { year: 1918, num: 69.7 },
  { year: 1919, num: 77 },
  { year: 1920, num: 87.2 },
  { year: 1921, num: 73.3 },
  { year: 1922, num: 72.8 },
  { year: 1923, num: 85.3 },
  { year: 1924, num: 87.7 },
  { year: 1925, num: 91.2 },
  { year: 1926, num: 97.2 },
  { year: 1927, num: 96.1 },
  { year: 1928, num: 97 },
  { year: 1929, num: 103.6 },
  { year: 1930, num: 91.2 },
  { year: 1931, num: 76.5 },
  { year: 1932, num: 58.7 },
  { year: 1933, num: 56.4 },
  { year: 1934, num: 66 },
  { year: 1935, num: 73.3 },
  { year: 1936, num: 83.8 },
  { year: 1937, num: 91.9 },
  { year: 1938, num: 86.1 },
  { year: 1939, num: 92.2 },
  { year: 1940, num: 101.4 },
  { year: 1941, num: 126.7 },
  { year: 1942, num: 161.9 },
  { year: 1943, num: 198.6 },
  { year: 1944, num: 219.8 },
  { year: 1945, num: 223.1 },
  { year: 1946, num: 222.3 },
  { year: 1947, num: 244.2 },
  { year: 1948, num: 269.2 },
  { year: 1949, num: 267.3 },
  { year: 1950, num: 293.8 },
  { year: 1951, num: 339.3 },
  { year: 1952, num: 358.3 },
  { year: 1953, num: 379.4 },
  { year: 1954, num: 380.4 },
  { year: 1955, num: 414.8 },
  { year: 1956, num: 437.5 },
  { year: 1957, num: 461.1 },
  { year: 1958, num: 467.2 },
  { year: 1959, num: 506.6 },
  { year: 1960, num: 526.4 },
  { year: 1961, num: 544.7 },
  { year: 1962, num: 585.6 },
  { year: 1963, num: 617.7 },
  { year: 1964, num: 663.6 },
  { year: 1965, num: 719.1 },
  { year: 1966, num: 787.8 },
  { year: 1967, num: 832.6 },
  { year: 1968, num: 910 },
  { year: 1969, num: 984.6 },
  { year: 1970, num: 1038.5 },
  { year: 1971, num: 1127.1 },
  { year: 1972, num: 1238.3 },
  { year: 1973, num: 1382.7 },
  { year: 1974, num: 1500 },
  { year: 1975, num: 1638.3 },
  { year: 1976, num: 1825.3 },
  { year: 1977, num: 2030.9 },
  { year: 1978, num: 2294.7 },
  { year: 1979, num: 2563.3 },
  { year: 1980, num: 2789.5 },
  { year: 1981, num: 3128.4 },
  { year: 1982, num: 3255 },
  { year: 1983, num: 3536.7 },
  { year: 1984, num: 3933.2 },
  { year: 1985, num: 4220.3 },
  { year: 1986, num: 4462.8 },
  { year: 1987, num: 4739.5 },
  { year: 1988, num: 5103.8 },
  { year: 1989, num: 5484.4 },
  { year: 1990, num: 5803.1 },
  { year: 1991, num: 5995.9 },
  { year: 1992, num: 6337.7 },
  { year: 1993, num: 6657.4 },
  { year: 1994, num: 7072.2 },
  { year: 1995, num: 7397.7 },
  { year: 1996, num: 7816.9 },
  { year: 1997, num: 8304.3 },
  { year: 1998, num: 8747 },
  { year: 1999, num: 9268.4 },
  { year: 2000, num: 9817 },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 }
];

export const popdata = [
  {
    year: 1790,
    pop: 3929214
  },
  {
    year: 1800,
    pop: 5308483
  },
  {
    year: 1810,
    pop: 7239881
  },
  {
    year: 1820,
    pop: 9638453
  },
  {
    year: 1830,
    pop: 12860702
  },
  {
    year: 1840,
    pop: 17063353
  },
  {
    year: 1850,
    pop: 23191876
  },
  {
    year: 1860,
    pop: 31443321
  },
  {
    year: 1870,
    pop: 38558371
  },
  {
    year: 1880,
    pop: 50189209
  },
  {
    year: 1890,
    pop: 62979766
  },
  {
    year: 1900,
    pop: 76212168
  },
  {
    year: 1910,
    pop: 92228496
  },
  {
    year: 1920,
    pop: 106021537
  },
  {
    year: 1930,
    pop: 123202624
  },
  {
    year: 1940,
    pop: 142164569
  },
  {
    year: 1950,
    pop: 161325798
  },
  {
    year: 1960,
    pop: 189323175
  },
  {
    year: 1970,
    pop: 213302031
  },
  {
    year: 1980,
    pop: 236542199
  },
  {
    year: 1990,
    pop: 258709873
  },
  {
    year: 2000,
    pop: 291421906
  },
  {
    year: 2010,
    pop: 308745538
  },
  {
    year: 2020,
    pop: 333005258
  },
  {
    year: 2030,
    pop: 349655258
  },
  {
    year: 2040,
    pop: 366305258
  }
];

class GDPchild extends React.Component {
  constructor(props) {
    super(props);

    let testingData = [];
    let testing = [];
    let noData = [];
    let date = [];
    props.data.map((x) => {
      date.push(x.year);
      const gdppop = x.num / x.pop;
      testing.push(gdppop);
      testingData.push([x.year, gdppop]);
      return noData.push([x.year, 0]);
    });
    var highDate = Math.max(...date);
    var lowTesting = Math.min(...testing);
    var lowDate = Math.min(...date);
    var highTesting = Math.max(...testing);
    noData.sort((a, b) => a[0] - b[0]);
    testingData.sort((a, b) => a[0] - b[0]);

    var state = {
      highTesting,
      testingData,
      noData,
      yAxis: highTesting - lowTesting,
      xAxis: highDate - lowDate,
      lowTesting,
      highDate,
      lowDate
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      let testingData = [];
      let testing = [];
      let noData = [];
      let date = [];
      this.props.data.map((x) => {
        date.push(x.year);
        const gdppop = x.num / x.pop;
        testing.push(gdppop);
        testingData.push([x.year, gdppop]);
        return noData.push([x.year, 0]);
      });
      var highDate = Math.max(...date);
      var lowTesting = Math.min(...testing);
      var lowDate = Math.min(...date);
      var highTesting = Math.max(...testing);
      noData.sort((a, b) => a[0] - b[0]);
      testingData.sort((a, b) => a[0] - b[0]);
      this.setState({
        highTesting,
        testingData,
        noData,
        yAxis: highTesting - lowTesting,
        xAxis: highDate - lowDate,
        lowTesting,
        highDate,
        lowDate
      });
    }
  };
  render() {
    /*const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };*/

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    /*const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };*/
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.8 *
        this.props.lastWidth,
      0
    ]);
    const testingData = this.state.testingData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.8 *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * 150
    ]);
    if (this.props.data) {
      return (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "100%",
            minHeight: "230px",
            position: "relative"
          }}
        >
          <div
            style={{
              padding: "4px 8px",
              top: "60px",
              display: "flex",
              position: "absolute",
              left: "0px",
              flexDirection: "column",
              zIndex: "1",
              backgroundColor: "rgba(250,250,250,.6)"
            }}
          >
            ${Math.round(this.state.lowTesting * 100) / 100}/person -&nbsp;
            <br />${Math.round(this.state.highTesting * 100) / 100}/person
            <div
              style={{
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {this.state.lowDate}
              &nbsp;-&nbsp;
              {this.state.highDate}
            </div>
          </div>
          <div style={{ transform: "translate(0px,220px)" }}>
            <svg
              className="all"
              style={linecss}
              xmlns="http://www.w3.org/2000/svg"
            >
              {noData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={4}
                      height={4}
                      stroke="rgb(230,230,230)"
                      fill="transparent"
                      strokeWidth={0}
                      key={i}
                    />
                  )
              )}
              {testingData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="white"
                      fill="white"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "rgba(250,250,250,0.6)",
              top: "10px",
              height: "50px",
              display: "flex",
              position: "relative",
              width: "100%",
              left: "2px",
              zIndex: "0",
              overflowX: "auto",
              overflowY: "hidden"
            }}
          >
            <div
              style={{
                fontSize: "15px",
                display: "flex",
                position: "absolute",
                width: "max-content"
              }}
            >
              Gross Domestic Product per population/person/cohort/capita
              <br />
              any deviation is technological advancement. which way?
              {/*<div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                covid19&nbsp;(+)&nbsp;&nbsp;
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                num
                </div>*/}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

class GDP extends React.Component {
  constructor(props) {
    super(props);
    const popdatapre2010 = popdata.filter((x) => x.year < 2010);
    this.state = {
      chosenDecade: 1910,
      chosenDecadeInx: popdatapre2010.length - 12,
      data: gdpdata2.map((x) => {
        var foo = { ...x };
        var b4Idx = null;
        var thisdecade = popdata.find(
          (p) => x.year - p.year < 10 && x.year - p.year > -1
        );
        //if (foo.num) {
        foo.num = foo.gdp * 1000000;

        var b4pop = popdata[b4Idx - 1] ? popdata[b4Idx - 1].pop : 0;
        var b4year = popdata[b4Idx - 1] ? popdata[b4Idx - 1].year : 0;
        var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
        foo.pop = thisdecade.pop + addi;
        return foo;
      }),
      //.filter((x) => x.year < 2000 + 1 && 2000 - x.year < 120),
      chosenState: "Florida",
      last: 1000,
      crime: true
    };
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.chosenDecadeInx !== this.state.lastChosenDecadeInx) {
      // var chosenstate = [].find((x) => x.name === this.state.chosenState);
      this.setState(
        { lastChosenDecadeInx: this.state.chosenDecadeInx },
        async () => {
          const copy = gdpdata2.map((x) => {
            var foo = { ...x };
            var b4Idx = null;
            var thisdecade = popdata.find((p, i) => {
              b4Idx = i;
              return x.year - p.year < 10 && x.year - p.year > -1;
            });
            foo.num = foo.gdp * 1000000;
            var b4pop = popdata[b4Idx - 1] ? popdata[b4Idx - 1].pop : 0;
            var b4year = popdata[b4Idx - 1] ? popdata[b4Idx - 1].year : 0;
            var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
            foo.pop = thisdecade.pop + addi;
            return foo;
          });
          this.setState({
            data: copy.filter(
              (x) =>
                x.year < this.state.chosenDecade + 1 &&
                this.state.chosenDecade - x.year < 120
            )
          });
        }
      );
    }
  };
  render() {
    const { data } = this.state;
    /*var statesAvailable = [];
    [].map((x) => {
      return statesAvailable.push(x.jurisdiction_of_occurrence);
    });
    var filteredByState = this.state.data.filter(
      (x) => x.jurisdiction_of_occurrence === this.state.chosenState
    );
    var unique = [...new Set(statesAvailable)];
    var statesGood = unique.filter((x) =>
       unique.includes(
        x.jurisdiction_of_occurrence
      )
    );*/
    //console.log(this.props.covidData);
    //if (this.state.chosenState === this.state.lastChosenState) {
    const popdatapre2010 = popdata.filter((x) => x.year < 2030);
    return (
      <div style={{ width: this.props.lastWidth }}>
        cases to tests; mv1===mv2==
        <a href="https://www.measuringworth.com/datasets/usgdp/">GDP</a>
        /yr&nbsp;
        <span role="img" aria-label="skull">
          💀
        </span>
        <GDPchild
          lastWidth={this.props.lastWidth}
          data={data} //filteredByState
          crime={this.state.crime}
          chosenState={this.state.chosenState}
        />
        <div
          style={{
            margin: "10px 50px",
            display: "flex",
            width: "70%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx > 0)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx - 1 },
                  () => {
                    this.setState({
                      chosenDecade:
                        popdatapre2010[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {"<"}
          </div>
          {this.state.chosenDecade}
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx < popdatapre2010.length - 1)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx + 1 },
                  () => {
                    this.setState({
                      chosenDecade:
                        popdatapre2010[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    );
  }
}
export default GDP;

