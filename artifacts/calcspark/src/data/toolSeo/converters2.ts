import { ToolSEOMap } from './index';

export const CONVERTERS2_SEO: ToolSEOMap = {
  'volume-converter': {
    quickAnswer: 'Convert any volume unit instantly — liters, gallons, milliliters, cubic meters, pints, quarts, fluid ounces, and more.',
    whatIs: 'A volume converter is a universal tool that converts between all common volume and capacity units used in cooking, science, industry, and everyday life. It handles metric units like liters and milliliters, imperial units like gallons and pints, and scientific units like cubic meters.',
    howToUse: [
      'Enter the volume value you want to convert.',
      'Select the source unit (e.g., liters).',
      'Select the target unit (e.g., gallons).',
      'Read the converted result instantly.'
    ],
    formula: '1 liter = 0.264172 US gallons = 1000 mL = 0.001 cubic meters = 2.11338 US pints',
    examples: [
      { title: 'Cooking conversion', scenario: 'Convert 500 mL to cups', result: '500 mL = 2.113 US cups' },
      { title: 'Fuel tank', scenario: 'Convert 50 liters to gallons', result: '50 L = 13.209 US gallons' },
      { title: 'Pool volume', scenario: 'Convert 25 cubic meters to liters', result: '25 m3 = 25,000 liters' }
    ],
    useCases: [
      'Recipe scaling between metric and imperial measurements',
      'Fuel consumption and tank capacity calculations',
      'Industrial and scientific volume measurements',
      'Shipping and logistics container capacity',
      'Aquarium and pool volume planning'
    ],
    faqs: [
      { q: 'What is the difference between US and UK gallons?', a: 'A US gallon is 3.785 liters, while a UK (imperial) gallon is 4.546 liters — about 20% larger.' },
      { q: 'How many mL are in a cup?', a: 'One US cup equals 236.588 milliliters. One metric cup equals 250 mL.' },
      { q: 'What is a fluid ounce?', a: 'A US fluid ounce is 29.5735 mL. There are 128 fluid ounces in a US gallon.' },
      { q: 'How do I convert liters to cubic meters?', a: 'Divide the number of liters by 1000. So 500 liters = 0.5 cubic meters.' }
    ],
    aiQA: [
      { q: 'Why do recipes fail when using the wrong volume unit?', a: 'US and metric cups differ by about 6%, and US vs imperial gallons differ by 20%. These discrepancies compound in large batches, causing significant errors in cooking and chemistry.' },
      { q: 'Which volume unit is most accurate for scientific work?', a: 'Milliliters and liters are preferred in science due to their decimal relationship with the metric system. Cubic centimeters (cc) are equivalent to mL for liquids.' }
    ]
  },

  'liter-to-gallon': {
    quickAnswer: '1 liter = 0.264172 US gallons. Multiply liters by 0.264172 to convert to gallons.',
    whatIs: 'The liters to gallons converter calculates the equivalent volume in US or imperial gallons for any number of liters. It is widely used for fuel calculations, recipe conversions, and container capacity measurements across metric and imperial countries.',
    howToUse: [
      'Enter the number of liters you want to convert.',
      'Choose US gallons or UK (imperial) gallons as the target.',
      'Read the converted gallon value instantly.'
    ],
    formula: 'US Gallons = Liters x 0.264172 | UK Gallons = Liters x 0.219969',
    examples: [
      { title: 'Small bottle', scenario: 'Convert 1.5 liters to US gallons', result: '1.5 L = 0.396 US gallons' },
      { title: 'Car fuel tank', scenario: 'Convert 60 liters to US gallons', result: '60 L = 15.85 US gallons' },
      { title: 'Water tank', scenario: 'Convert 200 liters to US gallons', result: '200 L = 52.83 US gallons' }
    ],
    useCases: [
      'Comparing fuel prices between metric and imperial countries',
      'Converting recipe volumes for US and European cooks',
      'Calculating aquarium or pool capacity',
      'Industrial chemical and fluid ordering',
      'Travel fuel budgeting in foreign countries'
    ],
    faqs: [
      { q: 'How many liters in a gallon?', a: '1 US gallon = 3.78541 liters. 1 UK gallon = 4.54609 liters.' },
      { q: 'Is this for US or UK gallons?', a: 'The calculator supports both. US gallons are more common in North America; UK (imperial) gallons are used in the UK and some Commonwealth countries.' },
      { q: 'How do I convert gallons back to liters?', a: 'Multiply gallons by 3.78541 for US gallons, or by 4.54609 for UK gallons.' }
    ],
    aiQA: [
      { q: 'Why does the US use gallons instead of liters?', a: 'The US retained the British imperial system from before the UK switched to metric. Changing to metric would require updating fuel pumps, road signs, and consumer habits at enormous cost.' },
      { q: 'Which countries still use gallons?', a: 'The US, Liberia, and Myanmar officially use gallons. The UK still uses miles per gallon for fuel economy but sells fuel in liters.' }
    ]
  },

  'gallons-converter': {
    quickAnswer: 'Convert gallons to liters, pints, quarts, fluid ounces, cups, and more with instant results.',
    whatIs: 'The gallons converter transforms US or imperial gallons into any other volume unit including liters, milliliters, pints, quarts, fluid ounces, and cups. It is essential for cooking, fuel calculations, and cross-regional volume comparisons.',
    howToUse: [
      'Enter the number of gallons to convert.',
      'Select US gallons or UK (imperial) gallons as the input unit.',
      'View conversions to all major volume units simultaneously.'
    ],
    formula: '1 US gallon = 3.78541 L = 4 quarts = 8 pints = 16 cups = 128 fl oz',
    examples: [
      { title: 'Water jug', scenario: 'Convert 1 gallon to liters', result: '1 US gallon = 3.785 liters' },
      { title: 'Recipe scale', scenario: 'Convert 2 gallons to pints', result: '2 US gallons = 16 pints' },
      { title: 'Fuel tank', scenario: 'Convert 15 gallons to liters', result: '15 US gallons = 56.78 liters' }
    ],
    useCases: [
      'Converting US gallon recipes to metric for international use',
      'Fuel and oil measurement conversions',
      'Beverage and brewing volume calculations',
      'Agricultural water and chemical mixing',
      'Paint and coating coverage estimates'
    ],
    faqs: [
      { q: 'How many pints in a gallon?', a: 'There are 8 US pints in 1 US gallon, or 8 imperial pints in 1 imperial gallon.' },
      { q: 'How many quarts in a gallon?', a: 'There are exactly 4 quarts in 1 gallon, whether US or imperial.' },
      { q: 'How many cups in a gallon?', a: 'There are 16 US cups in 1 US gallon.' }
    ],
    aiQA: [
      { q: 'What is the most useful gallons conversion in daily life?', a: 'Gallons to liters is most useful internationally. In the US, gallons to ounces or cups is most useful for cooking and beverages.' },
      { q: 'Are UK and US gallons interchangeable?', a: 'No. A UK imperial gallon (4.546 L) is about 20% larger than a US gallon (3.785 L). Using the wrong conversion can cause significant errors.' }
    ]
  },

  'cubic-meters-converter': {
    quickAnswer: '1 cubic meter = 1000 liters = 264.172 US gallons = 35.3147 cubic feet = 1,000,000 mL.',
    whatIs: 'The cubic meters converter converts cubic meters (m3) to liters, gallons, cubic feet, cubic inches, and other volume units. Cubic meters are the standard SI unit for large volumes in engineering, construction, and international trade.',
    howToUse: [
      'Enter the volume in cubic meters.',
      'Select the target unit (liters, gallons, cubic feet, etc.).',
      'Read the converted volume instantly.'
    ],
    formula: '1 m3 = 1000 L = 264.172 US gal = 35.3147 ft3 = 61023.7 in3',
    examples: [
      { title: 'Concrete pour', scenario: 'Convert 5 cubic meters to cubic feet', result: '5 m3 = 176.57 cubic feet' },
      { title: 'Water storage', scenario: 'Convert 10 cubic meters to liters', result: '10 m3 = 10,000 liters' },
      { title: 'Shipping container', scenario: 'Convert 33 cubic meters to cubic feet', result: '33 m3 = 1165.4 cubic feet' }
    ],
    useCases: [
      'Construction and engineering volume calculations',
      'Water tank and reservoir capacity planning',
      'Shipping container and cargo volume',
      'Soil, gravel, and fill material ordering',
      'Natural gas and liquid storage capacity'
    ],
    faqs: [
      { q: 'How many liters are in a cubic meter?', a: 'Exactly 1000 liters. One liter is defined as 0.001 cubic meters (1 dm3).' },
      { q: 'What is a cubic meter in cubic feet?', a: '1 cubic meter = 35.3147 cubic feet. This is important for US construction estimates.' },
      { q: 'How do I calculate cubic meters?', a: 'Multiply length x width x height in meters. For example, a space 2m x 3m x 4m = 24 cubic meters.' }
    ],
    aiQA: [
      { q: 'Why is the cubic meter the standard for large volumes?', a: 'As the SI derived unit for volume, cubic meters integrate naturally with the metric system. One cubic meter of water has a mass of approximately 1000 kg (1 metric ton), making calculations straightforward.' },
      { q: 'How are cubic meters used in natural gas measurement?', a: 'Natural gas is commonly billed in cubic meters. At standard pressure and temperature, 1 m3 of natural gas contains roughly 10 kWh of energy.' }
    ]
  },

  'ml-to-cups': {
    quickAnswer: '1 mL = 0.00423 US cups. 1 US cup = 236.588 mL. 1 metric cup = 250 mL.',
    whatIs: 'The mL to cups converter converts milliliters to US cups, metric cups, fluid ounces, tablespoons, and teaspoons. It is a kitchen essential for scaling international recipes and converting between metric and US measurements.',
    howToUse: [
      'Enter the volume in milliliters.',
      'Choose US cups or metric cups as target.',
      'View the equivalent in cups, tablespoons, or teaspoons.'
    ],
    formula: 'US Cups = mL / 236.588 | Tablespoons = mL / 14.787 | Teaspoons = mL / 4.929',
    examples: [
      { title: 'Milk for recipe', scenario: 'Convert 250 mL to cups', result: '250 mL = 1.057 US cups (or exactly 1 metric cup)' },
      { title: 'Sauce portion', scenario: 'Convert 60 mL to tablespoons', result: '60 mL = 4.058 tablespoons' },
      { title: 'Large batch', scenario: 'Convert 500 mL to US cups', result: '500 mL = 2.113 US cups' }
    ],
    useCases: [
      'Converting European recipes to US measurements',
      'Scaling recipe ingredients up or down',
      'Measuring liquid medicines in cooking volumes',
      'Barista and beverage portion control',
      'Baking with metric-to-US measurement conversion'
    ],
    faqs: [
      { q: 'How many mL in a US cup?', a: 'One US cup equals 236.588 milliliters.' },
      { q: 'What is a metric cup in mL?', a: 'A metric cup is exactly 250 mL, used in Australia, Canada, and other metric countries.' },
      { q: 'How many tablespoons in a cup?', a: 'There are 16 US tablespoons in 1 US cup.' },
      { q: 'How many mL in a teaspoon?', a: 'One US teaspoon = 4.929 mL. One metric teaspoon = 5 mL.' }
    ],
    aiQA: [
      { q: 'Why do US and metric cups differ?', a: 'The US customary cup (236.588 mL) is based on historical British measurements, while the metric cup (250 mL) was adopted for simplicity in countries using the metric system.' },
      { q: 'Does it matter which cup I use in baking?', a: 'Yes — the 5.7% difference between US and metric cups can noticeably affect baking results, especially in bread and pastry recipes that require precise ratios.' }
    ]
  },

  'gallon-to-liter': {
    quickAnswer: '1 US gallon = 3.78541 liters. 1 UK (imperial) gallon = 4.54609 liters.',
    whatIs: 'The gallon to liter converter instantly converts US or UK gallons to liters. It is the most common volume conversion needed when traveling, comparing fuel prices, or following recipes from different countries.',
    howToUse: [
      'Enter the number of gallons.',
      'Select US gallon or UK (imperial) gallon.',
      'Read the equivalent in liters instantly.'
    ],
    formula: 'Liters = US Gallons x 3.78541 | Liters = UK Gallons x 4.54609',
    examples: [
      { title: 'Drinking water jug', scenario: 'Convert 1 US gallon to liters', result: '1 US gallon = 3.785 liters' },
      { title: 'Gas tank fill', scenario: 'Convert 10 US gallons to liters', result: '10 US gallons = 37.854 liters' },
      { title: 'UK fuel purchase', scenario: 'Convert 5 UK gallons to liters', result: '5 UK gallons = 22.73 liters' }
    ],
    useCases: [
      'Comparing fuel prices when traveling between the US and Europe',
      'Converting paint and liquid products bought in gallons to liters',
      'Understanding drink quantities on international labels',
      'Agricultural irrigation volume planning',
      'Boat and vehicle fuel capacity conversion'
    ],
    faqs: [
      { q: 'How many liters in a US gallon?', a: '1 US gallon = 3.78541 liters exactly.' },
      { q: 'How many liters in a UK gallon?', a: '1 UK (imperial) gallon = 4.54609 liters, roughly 20% more than a US gallon.' },
      { q: 'Which gallon is bigger, US or UK?', a: 'The UK imperial gallon is larger at 4.546 L, compared to the US gallon at 3.785 L.' }
    ],
    aiQA: [
      { q: 'Why is European fuel economy measured in L/100km rather than MPG?', a: 'Liters per 100 km shows fuel consumption directly (lower is better), while MPG shows fuel efficiency (higher is better). Europe uses L/100km because the metric system is standard there, making fuel costs easier to calculate per kilometer.' },
      { q: 'Can I use gallon-to-liter for oil changes?', a: 'Yes. Most engine oils in the US are sold in quarts or gallons. Converting to liters helps when using European service manuals that specify oil capacity in liters.' }
    ]
  },

  'speed-converter': {
    quickAnswer: 'Convert between mph, km/h, m/s, knots, ft/s, and Mach number instantly.',
    whatIs: 'The speed converter is a comprehensive tool for converting between all common speed units including miles per hour, kilometers per hour, meters per second, knots, feet per second, and Mach number. It is used in transportation, aviation, meteorology, and physics.',
    howToUse: [
      'Enter the speed value to convert.',
      'Select the source unit (e.g., mph).',
      'Select the target unit (e.g., km/h).',
      'Read the converted speed instantly.'
    ],
    formula: '1 mph = 1.60934 km/h = 0.44704 m/s = 0.86898 knots | 1 km/h = 0.62137 mph = 0.27778 m/s',
    examples: [
      { title: 'Highway speed', scenario: 'Convert 60 mph to km/h', result: '60 mph = 96.56 km/h' },
      { title: 'Aircraft speed', scenario: 'Convert 500 knots to km/h', result: '500 knots = 926 km/h' },
      { title: 'Physics problem', scenario: 'Convert 100 m/s to mph', result: '100 m/s = 223.69 mph' }
    ],
    useCases: [
      'Converting speedometer readings when driving abroad',
      'Aviation and marine speed calculations',
      'Physics and engineering velocity problems',
      'Weather and wind speed reporting',
      'Sports performance and athletic speed analysis'
    ],
    faqs: [
      { q: 'What is Mach 1?', a: 'Mach 1 is the speed of sound, approximately 343 m/s (1235 km/h or 767 mph) at sea level and 20 degrees Celsius.' },
      { q: 'What are knots?', a: 'Knots are nautical miles per hour. 1 knot = 1.852 km/h = 1.15078 mph. They are the standard unit for marine and aviation navigation.' },
      { q: 'How do I convert m/s to km/h?', a: 'Multiply m/s by 3.6. For example, 10 m/s x 3.6 = 36 km/h.' }
    ],
    aiQA: [
      { q: 'Why does aviation use knots instead of mph or km/h?', a: 'A nautical mile equals exactly 1/60th of a degree of latitude, making navigation calculations much simpler. Knots directly relate to chart distances, which is why aviation and maritime navigation adopted them globally.' },
      { q: 'Is the speed of light ever used in speed conversions?', a: 'In physics, the speed of light (c = 299,792,458 m/s) is used for relativistic calculations. At everyday speeds, Newtonian physics applies and light-speed conversions are not needed.' }
    ]
  },

  'mph-to-kmh': {
    quickAnswer: '1 mph = 1.60934 km/h. Multiply mph by 1.60934 to convert to km/h.',
    whatIs: 'The mph to km/h converter converts miles per hour to kilometers per hour, the two most commonly used speed units in the world. It is essential for international driving, comparing vehicle speeds, and understanding speed limits when traveling.',
    howToUse: [
      'Enter the speed in miles per hour (mph).',
      'Read the equivalent in kilometers per hour (km/h) instantly.'
    ],
    formula: 'km/h = mph x 1.60934',
    examples: [
      { title: 'City speed limit', scenario: 'Convert 30 mph to km/h', result: '30 mph = 48.28 km/h' },
      { title: 'Highway speed', scenario: 'Convert 70 mph to km/h', result: '70 mph = 112.65 km/h' },
      { title: 'High speed', scenario: 'Convert 120 mph to km/h', result: '120 mph = 193.12 km/h' }
    ],
    useCases: [
      'Understanding speed limits when renting a car in Europe',
      'Comparing US and European car performance specs',
      'Setting GPS devices to correct speed units',
      'Sports speed records comparison internationally',
      'Converting weather or storm speed advisories'
    ],
    faqs: [
      { q: 'Is 100 km/h faster than 60 mph?', a: '100 km/h = 62.14 mph, so it is slightly faster than 60 mph.' },
      { q: 'What is the quick estimate for mph to km/h?', a: 'A rough estimate: multiply mph by 1.6 for a quick conversion. For example, 50 mph x 1.6 = 80 km/h (actual: 80.47 km/h).' },
      { q: 'What countries use mph?', a: 'The United States, United Kingdom, and a few other countries use mph. Most of the world uses km/h.' }
    ],
    aiQA: [
      { q: 'Why do the UK and US still use mph instead of km/h?', a: 'Both countries have extensive road infrastructure built around imperial measurements. The cost and effort of changing road signs, speedometers, and driver habits makes switching to km/h politically and economically challenging.' },
      { q: 'How fast is 100 mph in real terms?', a: '100 mph (160.9 km/h) is a very high speed on public roads. Most highway speed limits globally are between 100-130 km/h (62-81 mph).' }
    ]
  },

  'kmh-to-mph': {
    quickAnswer: '1 km/h = 0.621371 mph. Multiply km/h by 0.621371 to convert to mph.',
    whatIs: 'The km/h to mph converter converts kilometers per hour to miles per hour. This conversion is frequently needed by travelers going from metric countries to the US or UK, and for comparing vehicle specifications across different markets.',
    howToUse: [
      'Enter the speed in kilometers per hour (km/h).',
      'Read the equivalent in miles per hour (mph) instantly.'
    ],
    formula: 'mph = km/h x 0.621371',
    examples: [
      { title: 'Motorway limit', scenario: 'Convert 130 km/h to mph', result: '130 km/h = 80.78 mph' },
      { title: 'City driving', scenario: 'Convert 50 km/h to mph', result: '50 km/h = 31.07 mph' },
      { title: 'Car top speed', scenario: 'Convert 250 km/h to mph', result: '250 km/h = 155.34 mph' }
    ],
    useCases: [
      'Understanding speed limits when driving in the US from Europe',
      'Comparing car performance specs listed in km/h to mph',
      'Sports and athletics speed benchmarks internationally',
      'Converting cycling or running speeds for international events',
      'Aviation and weather data interpretation'
    ],
    faqs: [
      { q: 'What is the quick estimate for km/h to mph?', a: 'Multiply km/h by 0.6 for a rough estimate. For example, 100 km/h x 0.6 = 60 mph (actual: 62.14 mph).' },
      { q: 'What is 60 km/h in mph?', a: '60 km/h = 37.28 mph.' },
      { q: 'Is 100 km/h fast?', a: '100 km/h = 62.14 mph. This is a typical highway speed in many countries.' }
    ],
    aiQA: [
      { q: 'Why do car manufacturers list top speed in both km/h and mph?', a: 'To appeal to global markets. European buyers expect km/h while US buyers expect mph. Performance cars often list both in spec sheets to reach the widest audience.' },
      { q: 'How does wind speed in km/h translate to real-world conditions?', a: 'A gentle breeze is about 20 km/h (12 mph). Strong wind is 60 km/h (37 mph). Hurricane force starts at 119 km/h (74 mph). These benchmarks help interpret weather forecasts.' }
    ]
  },

  'mph-converter': {
    quickAnswer: 'Convert mph to km/h, m/s, knots, ft/s, and Mach number with one click.',
    whatIs: 'The MPH converter is a dedicated speed tool that converts miles per hour to all major speed units including kilometers per hour, meters per second, knots, feet per second, and Mach number. It is used in driving, aviation, sports, and scientific contexts.',
    howToUse: [
      'Enter a speed value in miles per hour (mph).',
      'View instant conversions to km/h, m/s, knots, ft/s, and Mach.'
    ],
    formula: '1 mph = 1.60934 km/h = 0.44704 m/s = 0.86898 knots = 1.46667 ft/s = 0.001303 Mach',
    examples: [
      { title: 'Car speed', scenario: 'Convert 65 mph to km/h', result: '65 mph = 104.61 km/h' },
      { title: 'Aircraft cruise', scenario: 'Convert 575 mph to knots', result: '575 mph = 499.6 knots' },
      { title: 'Running speed', scenario: 'Convert 6 mph to m/s', result: '6 mph = 2.682 m/s' }
    ],
    useCases: [
      'Cross-country driving trip speed planning',
      'Pilot and aviation speed calculations',
      'Sports performance comparison across countries',
      'Physics coursework and problem solving',
      'Wind and storm speed interpretation from US reports'
    ],
    faqs: [
      { q: 'What is 1 mph in m/s?', a: '1 mph = 0.44704 meters per second.' },
      { q: 'What is 1 mph in knots?', a: '1 mph = 0.868976 knots.' },
      { q: 'What is 100 mph in Mach?', a: '100 mph = approximately Mach 0.13 at sea level.' }
    ],
    aiQA: [
      { q: 'At what mph does a car reach Mach 1?', a: 'Mach 1 at sea level is approximately 767 mph (1235 km/h). Only specially designed vehicles like the ThrustSSC have broken the sound barrier on land.' },
      { q: 'Why is feet per second used in some mph conversions?', a: 'Feet per second is used in ballistics, sports timing, and some US engineering contexts where feet are the standard distance unit. 1 mph = 1.467 ft/s.' }
    ]
  },

  'knots-converter': {
    quickAnswer: '1 knot = 1.852 km/h = 1.15078 mph = 0.514444 m/s.',
    whatIs: 'The knots converter converts nautical miles per hour (knots) to kilometers per hour, miles per hour, meters per second, and other speed units. Knots are the standard speed unit for maritime navigation, aviation, and meteorology worldwide.',
    howToUse: [
      'Enter the speed in knots.',
      'Select the target unit (km/h, mph, m/s, ft/s).',
      'Read the converted speed value instantly.'
    ],
    formula: 'km/h = Knots x 1.852 | mph = Knots x 1.15078 | m/s = Knots x 0.514444',
    examples: [
      { title: 'Sailing boat', scenario: 'Convert 8 knots to km/h', result: '8 knots = 14.82 km/h' },
      { title: 'Commercial flight', scenario: 'Convert 480 knots to mph', result: '480 knots = 552.4 mph' },
      { title: 'Hurricane wind', scenario: 'Convert 65 knots to km/h', result: '65 knots = 120.4 km/h' }
    ],
    useCases: [
      'Marine navigation and sailing speed calculations',
      'Aviation airspeed and wind speed conversion',
      'Weather and hurricane intensity reporting',
      'Military and naval vessel speed specifications',
      'Pilot training and flight planning'
    ],
    faqs: [
      { q: 'What is a knot?', a: 'A knot is one nautical mile per hour. One nautical mile = 1852 meters = 1.15078 statute miles.' },
      { q: 'Why do ships and planes use knots?', a: 'Nautical miles correspond to degrees of latitude, making navigation calculations easier. 1 nautical mile = 1 arcminute of latitude, which links speed directly to geographic position.' },
      { q: 'How fast is 30 knots?', a: '30 knots = 55.56 km/h = 34.52 mph. This is a fast speed for a recreational vessel.' }
    ],
    aiQA: [
      { q: 'Why is it called a "knot"?', a: 'The name comes from the historical method of measuring ship speed by counting knots on a rope. Sailors would throw a piece of wood overboard and count how many equally spaced knots passed through their hands in a set time period.' },
      { q: 'Are knots used in space travel?', a: 'Spacecraft speeds are typically expressed in km/s or mph. Knots are not used in space travel since they are tied to Earth-based navigation concepts.' }
    ]
  }
};
