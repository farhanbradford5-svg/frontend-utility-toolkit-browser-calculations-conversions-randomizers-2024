export type ToolCategory = 'calculators' | 'converters' | 'randomizers';

export interface Tool {
  slug: string;
  name: string;
  category: ToolCategory;
  subcategory: string;
  description: string;
  keywords: string[];
  path: string;
}

export interface Subcategory {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  icon: string;
  color: string;
}

export const CALCULATOR_SUBCATEGORIES: Subcategory[] = [
  { slug: 'business', name: 'Business', category: 'calculators', description: 'ROI, margins, break-even, and business metrics', icon: 'Briefcase', color: 'blue' },
  { slug: 'finance', name: 'Finance', category: 'calculators', description: 'Interest, loans, investments, and personal finance', icon: 'DollarSign', color: 'green' },
  { slug: 'date-time', name: 'Date & Time', category: 'calculators', description: 'Age, days between dates, time duration, and scheduling', icon: 'Calendar', color: 'purple' },
  { slug: 'health', name: 'Health', category: 'calculators', description: 'BMI, calories, body fat, and wellness metrics', icon: 'Heart', color: 'red' },
  { slug: 'fitness', name: 'Fitness', category: 'calculators', description: 'TDEE, macros, heart rate, and training metrics', icon: 'Activity', color: 'orange' },
  { slug: 'transportation', name: 'Transportation', category: 'calculators', description: 'Fuel cost, MPG, speed, and distance calculations', icon: 'Car', color: 'cyan' },
  { slug: 'construction', name: 'Construction', category: 'calculators', description: 'Paint, concrete, tile, gravel, and material quantities', icon: 'HardHat', color: 'yellow' },
  { slug: 'mathematics', name: 'Math', category: 'calculators', description: 'Fractions, percentages, exponents, and arithmetic', icon: 'Calculator', color: 'indigo' },
  { slug: 'geometry', name: 'Geometry', category: 'calculators', description: 'Area, volume, perimeter, and shape calculations', icon: 'Triangle', color: 'teal' },
  { slug: 'trigonometry', name: 'Trigonometry', category: 'calculators', description: 'Sin, cos, tan, and inverse trig functions', icon: 'Sigma', color: 'violet' },
  { slug: 'statistics', name: 'Statistics', category: 'calculators', description: 'Standard deviation, p-value, distributions, and tests', icon: 'BarChart2', color: 'pink' },
  { slug: 'physics', name: 'Physics', category: 'calculators', description: "Ohm's law, kinetic energy, acceleration, and forces", icon: 'Atom', color: 'lime' },
  { slug: 'data', name: 'Data', category: 'calculators', description: 'RAID, download time, and digital storage', icon: 'Database', color: 'slate' },
  { slug: 'cryptography', name: 'Cryptography', category: 'calculators', description: 'MD5, SHA, and hash generators', icon: 'Lock', color: 'amber' },
  { slug: 'cooking', name: 'Cooking', category: 'calculators', description: 'Recipe scaling, dough, rice, and coffee ratios', icon: 'ChefHat', color: 'rose' },
  { slug: 'other', name: 'Other', category: 'calculators', description: 'Tips, grades, GPA, odds, and miscellaneous tools', icon: 'Grid', color: 'gray' },
];

export const CONVERTER_SUBCATEGORIES: Subcategory[] = [
  { slug: 'dimensions', name: 'Dimensions', category: 'converters', description: 'Length and size unit conversions', icon: 'Ruler', color: 'blue' },
  { slug: 'distance', name: 'Distance', category: 'converters', description: 'km, miles, meters, yards, and more', icon: 'MapPin', color: 'green' },
  { slug: 'area', name: 'Area', category: 'converters', description: 'Square meters, feet, acres, hectares', icon: 'Square', color: 'purple' },
  { slug: 'volume', name: 'Volume', category: 'converters', description: 'Liters, gallons, cubic meters, and more', icon: 'Box', color: 'orange' },
  { slug: 'speed', name: 'Speed', category: 'converters', description: 'mph, km/h, m/s, knots conversions', icon: 'Zap', color: 'yellow' },
  { slug: 'date-time', name: 'Date & Time', category: 'converters', description: 'Time zones, military time, timestamps', icon: 'Clock', color: 'cyan' },
  { slug: 'mathematics', name: 'Math', category: 'converters', description: 'Fractions, decimals, hex, binary, Roman numerals', icon: 'Hash', color: 'indigo' },
  { slug: 'data', name: 'Data', category: 'converters', description: 'Bytes, kilobytes, megabytes, gigabytes', icon: 'HardDrive', color: 'teal' },
  { slug: 'physics', name: 'Physics', category: 'converters', description: 'Temperature, pressure, energy units', icon: 'Thermometer', color: 'red' },
  { slug: 'cooking', name: 'Cooking', category: 'converters', description: 'Cups, grams, tablespoons, ounces', icon: 'UtensilsCrossed', color: 'rose' },
  { slug: 'other', name: 'Other', category: 'converters', description: 'Currency, shoe sizes, and more', icon: 'Shuffle', color: 'gray' },
];

export const ALL_TOOLS: Tool[] = [
  // ─── BUSINESS CALCULATORS ────────────────────────────────────────────────
  { slug: 'roi', name: 'ROI Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate Return on Investment for any project or expense.', keywords: ['roi', 'return', 'investment', 'profit'], path: '/calculators/business/roi' },
  { slug: 'break-even', name: 'Break-Even Calculator', category: 'calculators', subcategory: 'business', description: 'Find the break-even point for your business or product.', keywords: ['break even', 'fixed cost', 'revenue'], path: '/calculators/business/break-even' },
  { slug: 'discount', name: 'Discount Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate discounted prices and savings.', keywords: ['discount', 'sale price', 'savings'], path: '/calculators/business/discount' },
  { slug: 'margin', name: 'Profit Margin Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate gross and net profit margin.', keywords: ['margin', 'profit', 'gross'], path: '/calculators/business/margin' },
  { slug: 'markup', name: 'Markup Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate price markup from cost.', keywords: ['markup', 'pricing', 'cost'], path: '/calculators/business/markup' },
  { slug: 'commission', name: 'Commission Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate sales commission amounts.', keywords: ['commission', 'sales', 'percentage'], path: '/calculators/business/commission' },
  { slug: 'conversion-rate', name: 'Conversion Rate Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate website or sales conversion rates.', keywords: ['conversion rate', 'cro', 'leads'], path: '/calculators/business/conversion-rate' },
  { slug: 'productivity', name: 'Productivity Calculator', category: 'calculators', subcategory: 'business', description: 'Measure and calculate productivity metrics.', keywords: ['productivity', 'output', 'efficiency'], path: '/calculators/business/productivity' },
  { slug: 'roe', name: 'Return on Equity', category: 'calculators', subcategory: 'business', description: 'Calculate return on equity (ROE) for a company.', keywords: ['roe', 'equity', 'return'], path: '/calculators/business/roe' },
  { slug: 'roa', name: 'Return on Assets', category: 'calculators', subcategory: 'business', description: 'Calculate return on assets (ROA) ratio.', keywords: ['roa', 'assets', 'return'], path: '/calculators/business/roa' },
  { slug: 'ros', name: 'Return on Sales', category: 'calculators', subcategory: 'business', description: 'Calculate return on sales (ROS) ratio.', keywords: ['ros', 'sales', 'return'], path: '/calculators/business/ros' },

  // ─── FINANCE CALCULATORS ─────────────────────────────────────────────────
  { slug: 'compound-interest', name: 'Compound Interest Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate compound interest and total future value.', keywords: ['compound interest', 'savings', 'investment growth'], path: '/calculators/finance/compound-interest' },
  { slug: 'simple-interest', name: 'Simple Interest Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate simple interest on a principal amount.', keywords: ['simple interest', 'principal', 'rate'], path: '/calculators/finance/simple-interest' },
  { slug: 'loan', name: 'Loan Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate monthly payments and total interest on loans.', keywords: ['loan', 'mortgage', 'monthly payment', 'amortization'], path: '/calculators/finance/loan' },
  { slug: 'vat', name: 'VAT Calculator', category: 'calculators', subcategory: 'finance', description: 'Add or remove VAT/GST from any price.', keywords: ['vat', 'tax', 'gst', 'sales tax'], path: '/calculators/finance/vat' },
  { slug: 'hourly-to-salary', name: 'Hourly to Salary Calculator', category: 'calculators', subcategory: 'finance', description: 'Convert hourly rate to annual salary.', keywords: ['hourly', 'salary', 'annual income'], path: '/calculators/finance/hourly-to-salary' },
  { slug: 'salary-to-hourly', name: 'Salary to Hourly Calculator', category: 'calculators', subcategory: 'finance', description: 'Convert annual salary to hourly rate.', keywords: ['salary', 'hourly', 'wage'], path: '/calculators/finance/salary-to-hourly' },
  { slug: 'percentage', name: 'Percentage Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate percentage of a number, percent change, or difference.', keywords: ['percentage', 'percent', 'percent change'], path: '/calculators/mathematics/percentage' },
  { slug: 'apy', name: 'APY Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate Annual Percentage Yield on savings.', keywords: ['apy', 'annual yield', 'savings'], path: '/calculators/finance/apy' },
  { slug: 'present-value', name: 'Present Value Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate the present value of a future sum.', keywords: ['present value', 'pv', 'time value', 'discounting'], path: '/calculators/finance/present-value' },
  { slug: 'car-depreciation', name: 'Car Depreciation Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate how much your car depreciates over time.', keywords: ['car depreciation', 'vehicle value', 'depreciation'], path: '/calculators/finance/car-depreciation' },
  { slug: 'tip', name: 'Tip Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate tips and split bills easily.', keywords: ['tip', 'gratuity', 'restaurant', 'bill split'], path: '/calculators/other/tip' },
  { slug: 'percent-off', name: 'Percent Off Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate the sale price after a percentage discount.', keywords: ['percent off', 'sale', 'discount price'], path: '/calculators/other/percent-off' },

  // ─── DATE/TIME CALCULATORS ────────────────────────────────────────────────
  { slug: 'days-between-dates', name: 'Days Between Dates', category: 'calculators', subcategory: 'date-time', description: 'Calculate the number of days between two dates.', keywords: ['days between', 'date difference', 'calendar'], path: '/calculators/date-time/days-between-dates' },
  { slug: 'age', name: 'Age Calculator', category: 'calculators', subcategory: 'date-time', description: 'Calculate exact age in years, months, and days.', keywords: ['age', 'birthday', 'born'], path: '/calculators/date-time/age' },
  { slug: 'hours-calculator', name: 'Hours Calculator', category: 'calculators', subcategory: 'date-time', description: 'Calculate hours and minutes between two times.', keywords: ['hours', 'time difference', 'duration'], path: '/calculators/date-time/hours-calculator' },
  { slug: 'date-duration', name: 'Date Duration Calculator', category: 'calculators', subcategory: 'date-time', description: 'Add or subtract days, months, and years from any date.', keywords: ['date add', 'date subtract', 'date duration'], path: '/calculators/date-time/date-duration' },
  { slug: 'sleep', name: 'Sleep Calculator', category: 'calculators', subcategory: 'date-time', description: 'Find the best time to wake up based on sleep cycles.', keywords: ['sleep', 'wake up time', 'sleep cycle', 'rem'], path: '/calculators/date-time/sleep' },
  { slug: 'time-card', name: 'Time Card Calculator', category: 'calculators', subcategory: 'date-time', description: 'Calculate total hours worked from time entries.', keywords: ['time card', 'work hours', 'timesheet'], path: '/calculators/date-time/time-card' },
  { slug: 'business-days', name: 'Business Days Calculator', category: 'calculators', subcategory: 'date-time', description: 'Count working days between two dates.', keywords: ['business days', 'working days', 'weekdays'], path: '/calculators/date-time/business-days' },
  { slug: 'birthday', name: 'Birthday Calculator', category: 'calculators', subcategory: 'date-time', description: 'Find out what day of the week you were born.', keywords: ['birthday', 'day of week', 'born on'], path: '/calculators/date-time/birthday' },
  { slug: 'years', name: 'Years Between Dates', category: 'calculators', subcategory: 'date-time', description: 'Calculate how many years between two dates.', keywords: ['years', 'date difference', 'elapsed years'], path: '/calculators/date-time/years' },
  { slug: 'time-calculator', name: 'Time Calculator', category: 'calculators', subcategory: 'date-time', description: 'Add or subtract time values easily.', keywords: ['time calculator', 'add time', 'subtract time'], path: '/calculators/date-time/time-calculator' },

  // ─── HEALTH CALCULATORS ──────────────────────────────────────────────────
  { slug: 'bmi', name: 'BMI Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate your Body Mass Index (BMI) and healthy weight range.', keywords: ['bmi', 'body mass index', 'weight', 'height'], path: '/calculators/health/bmi' },
  { slug: 'calorie', name: 'Calorie Calculator', category: 'calculators', subcategory: 'health', description: 'Estimate daily calorie needs based on age, weight, height, and activity.', keywords: ['calories', 'tdee', 'bmr', 'diet'], path: '/calculators/health/calorie' },
  { slug: 'water-intake', name: 'Water Intake Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate daily water intake based on weight and activity.', keywords: ['water intake', 'hydration', 'daily water'], path: '/calculators/health/water-intake' },
  { slug: 'body-fat', name: 'Body Fat Calculator', category: 'calculators', subcategory: 'health', description: 'Estimate body fat percentage using measurements.', keywords: ['body fat', 'fat percentage', 'body composition'], path: '/calculators/health/body-fat' },
  { slug: 'bmr', name: 'BMR Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate Basal Metabolic Rate (calories at rest).', keywords: ['bmr', 'basal metabolic rate', 'resting metabolism'], path: '/calculators/health/bmr' },
  { slug: 'weight-loss', name: 'Weight Loss Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate how long it will take to reach your goal weight.', keywords: ['weight loss', 'diet', 'calorie deficit'], path: '/calculators/health/weight-loss' },
  { slug: 'healthy-weight', name: 'Healthy Weight Calculator', category: 'calculators', subcategory: 'health', description: 'Find your ideal healthy weight range for your height.', keywords: ['healthy weight', 'ideal weight', 'bmi range'], path: '/calculators/health/healthy-weight' },
  { slug: 'height-predictor', name: 'Height Calculator', category: 'calculators', subcategory: 'health', description: 'Predict adult height based on parental height.', keywords: ['height prediction', 'adult height', 'child height'], path: '/calculators/health/height-predictor' },

  // ─── FITNESS CALCULATORS ─────────────────────────────────────────────────
  { slug: 'tdee', name: 'TDEE Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate Total Daily Energy Expenditure based on activity level.', keywords: ['tdee', 'energy expenditure', 'maintenance calories'], path: '/calculators/fitness/tdee' },
  { slug: 'macro', name: 'Macro Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate macronutrient targets for your diet goals.', keywords: ['macros', 'protein', 'carbs', 'fat', 'macronutrients'], path: '/calculators/fitness/macro' },
  { slug: 'one-rep-max', name: '1-Rep Max Calculator', category: 'calculators', subcategory: 'fitness', description: 'Estimate your one-repetition maximum for any lift.', keywords: ['1rm', 'one rep max', 'strength', 'lifting'], path: '/calculators/fitness/one-rep-max' },
  { slug: 'target-heart-rate', name: 'Target Heart Rate Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate your target heart rate zones for training.', keywords: ['heart rate', 'cardio', 'training zones', 'max hr'], path: '/calculators/fitness/target-heart-rate' },
  { slug: 'pace', name: 'Pace Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate running pace, speed, or distance.', keywords: ['pace', 'running', 'speed', 'marathon', 'race'], path: '/calculators/fitness/pace' },
  { slug: 'protein', name: 'Protein Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate daily protein intake needs.', keywords: ['protein', 'diet', 'muscle building'], path: '/calculators/fitness/protein' },

  // ─── TRANSPORTATION CALCULATORS ──────────────────────────────────────────
  { slug: 'fuel-cost', name: 'Fuel Cost Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate fuel cost for a trip based on distance and efficiency.', keywords: ['fuel cost', 'gas price', 'trip cost'], path: '/calculators/transportation/fuel-cost' },
  { slug: 'mpg', name: 'MPG Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate miles per gallon fuel economy.', keywords: ['mpg', 'fuel economy', 'gas mileage'], path: '/calculators/transportation/mpg' },
  { slug: 'speed-distance-time', name: 'Speed Distance Time', category: 'calculators', subcategory: 'transportation', description: 'Calculate speed, distance, or time given the other two.', keywords: ['speed', 'distance', 'time', 'velocity'], path: '/calculators/transportation/speed-distance-time' },
  { slug: 'average-speed', name: 'Average Speed Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate average speed over multiple legs of a journey.', keywords: ['average speed', 'mean speed', 'trip'], path: '/calculators/transportation/average-speed' },

  // ─── CONSTRUCTION CALCULATORS ────────────────────────────────────────────
  { slug: 'paint', name: 'Paint Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate how much paint you need for a room.', keywords: ['paint', 'gallons', 'wall coverage'], path: '/calculators/construction/paint' },
  { slug: 'concrete', name: 'Concrete Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate concrete volume for slabs, footings, and columns.', keywords: ['concrete', 'cement', 'slab', 'cubic yards'], path: '/calculators/construction/concrete' },
  { slug: 'tile', name: 'Tile Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate the number of tiles needed for a floor or wall.', keywords: ['tile', 'flooring', 'sq ft'], path: '/calculators/construction/tile' },
  { slug: 'gravel', name: 'Gravel Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate gravel or crushed stone quantity needed.', keywords: ['gravel', 'stone', 'landscaping', 'cubic yards'], path: '/calculators/construction/gravel' },
  { slug: 'brick', name: 'Brick Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate how many bricks needed for a wall.', keywords: ['brick', 'masonry', 'wall'], path: '/calculators/construction/brick' },
  { slug: 'square-footage', name: 'Square Footage Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate the square footage of rooms and spaces.', keywords: ['square footage', 'area', 'sq ft'], path: '/calculators/construction/square-footage' },
  { slug: 'mulch', name: 'Mulch Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate cubic yards of mulch needed for garden beds.', keywords: ['mulch', 'landscaping', 'cubic yards'], path: '/calculators/construction/mulch' },
  { slug: 'topsoil', name: 'Topsoil Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate topsoil or fill dirt needed for a project.', keywords: ['topsoil', 'soil', 'fill dirt', 'cubic yards'], path: '/calculators/construction/topsoil' },
  { slug: 'sand', name: 'Sand Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate the amount of sand needed for a project.', keywords: ['sand', 'cubic yards', 'landscaping'], path: '/calculators/construction/sand' },
  { slug: 'asphalt', name: 'Asphalt Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate asphalt tonnage needed for a surface.', keywords: ['asphalt', 'paving', 'tons', 'driveway'], path: '/calculators/construction/asphalt' },

  // ─── MATH CALCULATORS ────────────────────────────────────────────────────
  { slug: 'fraction', name: 'Fraction Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Add, subtract, multiply, and divide fractions.', keywords: ['fraction', 'numerator', 'denominator', 'simplify'], path: '/calculators/mathematics/fraction' },
  { slug: 'exponent', name: 'Exponent Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate powers and exponents.', keywords: ['exponent', 'power', 'base', 'squared', 'cubed'], path: '/calculators/mathematics/exponent' },
  { slug: 'scientific-notation', name: 'Scientific Notation Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Convert to/from scientific notation and perform operations.', keywords: ['scientific notation', 'exponent', 'powers of 10'], path: '/calculators/mathematics/scientific-notation' },
  { slug: 'ratio', name: 'Ratio Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Simplify ratios and solve ratio problems.', keywords: ['ratio', 'proportion', 'simplify'], path: '/calculators/mathematics/ratio' },
  { slug: 'mean-median-mode', name: 'Mean, Median & Mode', category: 'calculators', subcategory: 'mathematics', description: 'Calculate mean, median, mode, and range of a dataset.', keywords: ['mean', 'median', 'mode', 'average', 'range'], path: '/calculators/mathematics/mean-median-mode' },
  { slug: 'lcm-gcd', name: 'LCM & GCD Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Find the Least Common Multiple and Greatest Common Divisor.', keywords: ['lcm', 'gcd', 'lcf', 'greatest common divisor'], path: '/calculators/mathematics/lcm-gcd' },
  { slug: 'prime-factorization', name: 'Prime Factorization', category: 'calculators', subcategory: 'mathematics', description: 'Find the prime factors of any number.', keywords: ['prime factorization', 'prime factors', 'factor tree'], path: '/calculators/mathematics/prime-factorization' },
  { slug: 'square-root', name: 'Square Root Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate square roots and nth roots.', keywords: ['square root', 'sqrt', 'radical', 'cube root'], path: '/calculators/mathematics/square-root' },
  { slug: 'logarithm', name: 'Logarithm Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate logarithm base 10, natural log, and any base.', keywords: ['logarithm', 'log', 'natural log', 'ln'], path: '/calculators/mathematics/logarithm' },
  { slug: 'geometric-mean', name: 'Geometric Mean Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate the geometric mean of a dataset.', keywords: ['geometric mean', 'average', 'nth root'], path: '/calculators/mathematics/geometric-mean' },
  { slug: 'weighted-average', name: 'Weighted Average Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Calculate weighted average from values and weights.', keywords: ['weighted average', 'weighted mean', 'grade average'], path: '/calculators/mathematics/weighted-average' },
  { slug: 'advanced-percentage', name: 'Advanced Percentage Calculator', category: 'calculators', subcategory: 'mathematics', description: 'Compound percentage growth, reverse percentage, percentage difference, increase, and decrease.', keywords: ['advanced percentage', 'compound percentage', 'reverse percentage', 'percentage difference', 'percentage growth'], path: '/calculators/mathematics/advanced-percentage' },

  // ─── GEOMETRY CALCULATORS ────────────────────────────────────────────────
  { slug: 'area', name: 'Area Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area of circles, triangles, rectangles, and more.', keywords: ['area', 'surface area', 'shape'], path: '/calculators/geometry/area' },
  { slug: 'volume', name: 'Volume Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate volume of 3D shapes including spheres and cylinders.', keywords: ['volume', '3d shape', 'cubic'], path: '/calculators/geometry/volume' },
  { slug: 'perimeter', name: 'Perimeter Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate perimeter of polygons and shapes.', keywords: ['perimeter', 'circumference', 'outline'], path: '/calculators/geometry/perimeter' },
  { slug: 'surface-area', name: 'Surface Area Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate total surface area of 3D shapes.', keywords: ['surface area', 'sphere', 'cylinder', 'cone'], path: '/calculators/geometry/surface-area' },
  { slug: 'midpoint', name: 'Midpoint Calculator', category: 'calculators', subcategory: 'geometry', description: 'Find the midpoint between two coordinate points.', keywords: ['midpoint', 'coordinate', 'x y', 'point'], path: '/calculators/geometry/midpoint' },
  { slug: 'pythagorean', name: 'Pythagorean Theorem', category: 'calculators', subcategory: 'geometry', description: 'Solve for missing sides using the Pythagorean theorem.', keywords: ['pythagorean', 'hypotenuse', 'right triangle', 'a squared'], path: '/calculators/geometry/pythagorean' },

  // ─── TRIGONOMETRY CALCULATORS ─────────────────────────────────────────────
  { slug: 'trig', name: 'Trigonometry Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate all trig functions for any angle.', keywords: ['trig', 'sine', 'cosine', 'tangent', 'angle'], path: '/calculators/trigonometry/trig' },
  { slug: 'sine', name: 'Sine Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the sine of an angle.', keywords: ['sin', 'sine', 'angle'], path: '/calculators/trigonometry/sine' },
  { slug: 'cosine', name: 'Cosine Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the cosine of an angle.', keywords: ['cos', 'cosine', 'angle'], path: '/calculators/trigonometry/cosine' },
  { slug: 'tangent', name: 'Tangent Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the tangent of an angle.', keywords: ['tan', 'tangent', 'angle'], path: '/calculators/trigonometry/tangent' },
  { slug: 'arcsin', name: 'Arcsin Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the inverse sine (arcsin) of a value.', keywords: ['arcsin', 'inverse sine', 'asin'], path: '/calculators/trigonometry/arcsin' },
  { slug: 'arccos', name: 'Arccos Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the inverse cosine (arccos) of a value.', keywords: ['arccos', 'inverse cosine', 'acos'], path: '/calculators/trigonometry/arccos' },
  { slug: 'arctan', name: 'Arctan Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate the inverse tangent (arctan) of a value.', keywords: ['arctan', 'inverse tangent', 'atan'], path: '/calculators/trigonometry/arctan' },

  // ─── STATISTICS CALCULATORS ──────────────────────────────────────────────
  { slug: 'standard-deviation', name: 'Standard Deviation Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate standard deviation and variance of a dataset.', keywords: ['standard deviation', 'variance', 'statistics', 'spread'], path: '/calculators/statistics/standard-deviation' },
  { slug: 'z-score', name: 'Z-Score Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate z-scores and normal distribution probabilities.', keywords: ['z score', 'z-score', 'normal distribution', 'standard score'], path: '/calculators/statistics/z-score' },
  { slug: 'p-value', name: 'P-Value Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate p-value for hypothesis testing.', keywords: ['p value', 'significance', 'hypothesis test', 'null hypothesis'], path: '/calculators/statistics/p-value' },
  { slug: 'confidence-interval', name: 'Confidence Interval Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate confidence intervals for a population mean.', keywords: ['confidence interval', 'ci', 'margin of error', 'sample'], path: '/calculators/statistics/confidence-interval' },
  { slug: 'sample-size', name: 'Sample Size Calculator', category: 'calculators', subcategory: 'statistics', description: 'Determine the required sample size for a study.', keywords: ['sample size', 'power', 'margin of error', 'survey'], path: '/calculators/statistics/sample-size' },
  { slug: 'permutation-combination', name: 'Permutation & Combination', category: 'calculators', subcategory: 'statistics', description: 'Calculate permutations nPr and combinations nCr.', keywords: ['permutation', 'combination', 'nPr', 'nCr', 'factorial'], path: '/calculators/statistics/permutation-combination' },
  { slug: 'correlation', name: 'Correlation Coefficient Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate Pearson correlation coefficient.', keywords: ['correlation', 'pearson', 'r value', 'linear relationship'], path: '/calculators/statistics/correlation' },

  // ─── PHYSICS CALCULATORS ─────────────────────────────────────────────────
  { slug: 'ohms-law', name: "Ohm's Law Calculator", category: 'calculators', subcategory: 'physics', description: "Apply Ohm's Law to find voltage, current, or resistance.", keywords: ['ohms law', 'voltage', 'current', 'resistance', 'electricity'], path: '/calculators/physics/ohms-law' },
  { slug: 'kinetic-energy', name: 'Kinetic Energy Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate kinetic energy from mass and velocity.', keywords: ['kinetic energy', 'motion', 'velocity', 'mass'], path: '/calculators/physics/kinetic-energy' },
  { slug: 'acceleration', name: 'Acceleration Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate acceleration from force, mass, or velocity change.', keywords: ['acceleration', 'force', 'mass', 'newtons second law'], path: '/calculators/physics/acceleration' },
  { slug: 'density', name: 'Density Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate density, mass, or volume of an object.', keywords: ['density', 'mass', 'volume', 'g/cm3'], path: '/calculators/physics/density' },
  { slug: 'half-life', name: 'Half-Life Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate radioactive decay and half-life of substances.', keywords: ['half life', 'radioactive', 'decay', 'nuclear'], path: '/calculators/physics/half-life' },
  { slug: 'pressure', name: 'Pressure Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate pressure from force and area.', keywords: ['pressure', 'pascal', 'force', 'area'], path: '/calculators/physics/pressure' },

  // ─── DATA CALCULATORS ────────────────────────────────────────────────────
  { slug: 'download-time', name: 'Download Time Calculator', category: 'calculators', subcategory: 'data', description: 'Estimate download time based on file size and connection speed.', keywords: ['download time', 'bandwidth', 'internet speed', 'file size'], path: '/calculators/data/download-time' },
  { slug: 'raid', name: 'RAID Calculator', category: 'calculators', subcategory: 'data', description: 'Calculate usable storage for RAID 0, 1, 5, 6, and 10 configurations.', keywords: ['raid', 'storage', 'redundancy', 'disk'], path: '/calculators/data/raid' },

  // ─── CRYPTOGRAPHY CALCULATORS ─────────────────────────────────────────────
  { slug: 'md5', name: 'MD5 Generator', category: 'calculators', subcategory: 'cryptography', description: 'Generate MD5 hash of any text string.', keywords: ['md5', 'hash', 'checksum', 'crypto'], path: '/calculators/cryptography/md5' },
  { slug: 'sha256', name: 'SHA-256 Generator', category: 'calculators', subcategory: 'cryptography', description: 'Generate SHA-256 hash of any text string.', keywords: ['sha256', 'sha-256', 'hash', 'crypto'], path: '/calculators/cryptography/sha256' },
  { slug: 'sha512', name: 'SHA-512 Generator', category: 'calculators', subcategory: 'cryptography', description: 'Generate SHA-512 hash of any text string.', keywords: ['sha512', 'sha-512', 'hash', 'crypto'], path: '/calculators/cryptography/sha512' },
  { slug: 'sha1', name: 'SHA-1 Generator', category: 'calculators', subcategory: 'cryptography', description: 'Generate SHA-1 hash of any text string.', keywords: ['sha1', 'sha-1', 'hash', 'crypto'], path: '/calculators/cryptography/sha1' },

  // ─── COOKING CALCULATORS ─────────────────────────────────────────────────
  { slug: 'recipe-scaler', name: 'Recipe Scaler', category: 'calculators', subcategory: 'cooking', description: 'Scale recipe ingredients up or down for any serving size.', keywords: ['recipe', 'scale', 'serving size', 'ingredients'], path: '/calculators/cooking/recipe-scaler' },
  { slug: 'pizza-dough', name: 'Pizza Dough Calculator', category: 'calculators', subcategory: 'cooking', description: 'Calculate pizza dough ingredients by style and size.', keywords: ['pizza', 'dough', 'flour', 'hydration'], path: '/calculators/cooking/pizza-dough' },
  { slug: 'rice', name: 'Rice Calculator', category: 'calculators', subcategory: 'cooking', description: 'Calculate rice and water ratios for any serving size.', keywords: ['rice', 'water ratio', 'cooking', 'servings'], path: '/calculators/cooking/rice' },
  { slug: 'coffee', name: 'Coffee Ratio Calculator', category: 'calculators', subcategory: 'cooking', description: 'Calculate the perfect coffee-to-water ratio.', keywords: ['coffee', 'water ratio', 'brew', 'grams'], path: '/calculators/cooking/coffee' },

  // ─── OTHER CALCULATORS ───────────────────────────────────────────────────
  { slug: 'grade', name: 'Grade Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate your final grade from assignment scores.', keywords: ['grade', 'gpa', 'academic', 'score'], path: '/calculators/other/grade' },
  { slug: 'gpa', name: 'GPA Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate your Grade Point Average (GPA).', keywords: ['gpa', 'grade point average', 'college', 'academic'], path: '/calculators/other/gpa' },
  { slug: 'height-comparison', name: 'Height Comparison', category: 'calculators', subcategory: 'other', description: 'Compare heights of two or more people visually.', keywords: ['height comparison', 'taller', 'shorter', 'compare heights'], path: '/calculators/other/height-comparison' },
  { slug: 'odds', name: 'Odds Calculator', category: 'calculators', subcategory: 'other', description: 'Convert between different odds formats and probabilities.', keywords: ['odds', 'probability', 'betting', 'chance'], path: '/calculators/other/odds' },
  { slug: 'dog-years', name: 'Dog Years Calculator', category: 'calculators', subcategory: 'other', description: 'Convert your dog\'s age to human years.', keywords: ['dog years', 'dog age', 'human years', 'pet'], path: '/calculators/other/dog-years' },
  { slug: 'marks-percentage', name: 'Marks Percentage', category: 'calculators', subcategory: 'other', description: 'Calculate percentage from marks obtained out of total.', keywords: ['marks', 'percentage', 'score', 'exam'], path: '/calculators/other/marks-percentage' },

  // ─── DIMENSION CONVERTERS ────────────────────────────────────────────────
  { slug: 'universal-unit-converter', name: 'Universal Unit Converter', category: 'converters', subcategory: 'dimensions', description: 'Convert any unit across length, weight, volume, area, temperature, speed, and data in one tool.', keywords: ['unit converter', 'universal converter', 'all units', 'length weight volume temperature speed data'], path: '/converters/dimensions/universal-unit-converter' },
  { slug: 'length', name: 'Length Converter', category: 'converters', subcategory: 'dimensions', description: 'Convert between all length and distance units.', keywords: ['length', 'distance', 'unit conversion'], path: '/converters/dimensions/length' },
  { slug: 'height', name: 'Height Converter', category: 'converters', subcategory: 'dimensions', description: 'Convert height between feet/inches and cm/meters.', keywords: ['height', 'feet', 'centimeters', 'inches'], path: '/converters/dimensions/height' },
  { slug: 'inches-to-cm', name: 'Inches to Centimeters', category: 'converters', subcategory: 'dimensions', description: 'Convert inches to centimeters.', keywords: ['inches', 'centimeters', 'in to cm'], path: '/converters/dimensions/inches-to-cm' },
  { slug: 'cm-to-inches', name: 'Centimeters to Inches', category: 'converters', subcategory: 'dimensions', description: 'Convert centimeters to inches.', keywords: ['centimeters', 'inches', 'cm to in'], path: '/converters/dimensions/cm-to-inches' },
  { slug: 'feet-to-cm', name: 'Feet to Centimeters', category: 'converters', subcategory: 'dimensions', description: 'Convert feet to centimeters.', keywords: ['feet', 'centimeters', 'ft to cm'], path: '/converters/dimensions/feet-to-cm' },
  { slug: 'meters-to-feet', name: 'Meters to Feet', category: 'converters', subcategory: 'dimensions', description: 'Convert meters to feet.', keywords: ['meters', 'feet', 'm to ft'], path: '/converters/dimensions/meters-to-feet' },
  { slug: 'mm-to-inches', name: 'Millimeters to Inches', category: 'converters', subcategory: 'dimensions', description: 'Convert millimeters to inches.', keywords: ['millimeters', 'inches', 'mm to in'], path: '/converters/dimensions/mm-to-inches' },

  // ─── DISTANCE CONVERTERS ─────────────────────────────────────────────────
  { slug: 'km-to-miles', name: 'Kilometers to Miles', category: 'converters', subcategory: 'distance', description: 'Convert kilometers to miles.', keywords: ['km to miles', 'kilometers', 'miles'], path: '/converters/distance/km-to-miles' },
  { slug: 'miles-to-km', name: 'Miles to Kilometers', category: 'converters', subcategory: 'distance', description: 'Convert miles to kilometers.', keywords: ['miles to km', 'miles', 'kilometers'], path: '/converters/distance/miles-to-km' },
  { slug: 'meters-to-miles', name: 'Meters to Miles', category: 'converters', subcategory: 'distance', description: 'Convert meters to miles.', keywords: ['meters to miles', 'meters', 'miles'], path: '/converters/distance/meters-to-miles' },

  // ─── AREA CONVERTERS ─────────────────────────────────────────────────────
  { slug: 'area-converter', name: 'Area Converter', category: 'converters', subcategory: 'area', description: 'Convert between all area units.', keywords: ['area', 'sq ft', 'sq m', 'acres', 'hectares'], path: '/converters/area/area-converter' },
  { slug: 'acres-to-hectares', name: 'Acres to Hectares', category: 'converters', subcategory: 'area', description: 'Convert acres to hectares.', keywords: ['acres', 'hectares', 'land area'], path: '/converters/area/acres-to-hectares' },
  { slug: 'sqm-to-sqft', name: 'Square Meters to Square Feet', category: 'converters', subcategory: 'area', description: 'Convert square meters to square feet.', keywords: ['square meters', 'square feet', 'm2 to ft2'], path: '/converters/area/sqm-to-sqft' },
  { slug: 'sqft-to-sqm', name: 'Square Feet to Square Meters', category: 'converters', subcategory: 'area', description: 'Convert square feet to square meters.', keywords: ['square feet', 'square meters', 'ft2 to m2'], path: '/converters/area/sqft-to-sqm' },

  // ─── VOLUME CONVERTERS ───────────────────────────────────────────────────
  { slug: 'volume-converter', name: 'Volume Converter', category: 'converters', subcategory: 'volume', description: 'Convert between all volume units.', keywords: ['volume', 'liters', 'gallons', 'cubic', 'ml'], path: '/converters/volume/volume-converter' },

  // ─── SPEED CONVERTERS ────────────────────────────────────────────────────
  { slug: 'speed-converter', name: 'Speed Converter', category: 'converters', subcategory: 'speed', description: 'Convert between all speed units.', keywords: ['speed', 'mph', 'km/h', 'knots', 'm/s'], path: '/converters/speed/speed-converter' },
  { slug: 'mph-to-kmh', name: 'MPH to KM/H', category: 'converters', subcategory: 'speed', description: 'Convert miles per hour to kilometers per hour.', keywords: ['mph', 'kmh', 'speed'], path: '/converters/speed/mph-to-kmh' },
  { slug: 'kmh-to-mph', name: 'KM/H to MPH', category: 'converters', subcategory: 'speed', description: 'Convert kilometers per hour to miles per hour.', keywords: ['kmh', 'mph', 'speed'], path: '/converters/speed/kmh-to-mph' },

  // ─── DATE/TIME CONVERTERS ────────────────────────────────────────────────
  { slug: 'time-zone', name: 'Time Zone Converter', category: 'converters', subcategory: 'date-time', description: 'Convert times between any two time zones.', keywords: ['time zone', 'utc', 'est', 'pst', 'timezone'], path: '/converters/date-time/time-zone' },
  { slug: 'military-time', name: 'Military Time Converter', category: 'converters', subcategory: 'date-time', description: 'Convert between 12-hour and 24-hour (military) time.', keywords: ['military time', '24 hour', '12 hour', 'am pm'], path: '/converters/date-time/military-time' },
  { slug: 'unix-timestamp', name: 'Unix Timestamp Converter', category: 'converters', subcategory: 'date-time', description: 'Convert Unix timestamps to human-readable dates.', keywords: ['unix timestamp', 'epoch', 'timestamp', 'posix'], path: '/converters/date-time/unix-timestamp' },
  { slug: 'minutes-to-hours', name: 'Minutes to Hours', category: 'converters', subcategory: 'date-time', description: 'Convert minutes to hours and minutes.', keywords: ['minutes', 'hours', 'time conversion'], path: '/converters/date-time/minutes-to-hours' },
  { slug: 'salary-converter', name: 'Salary Converter', category: 'converters', subcategory: 'date-time', description: 'Convert salary between hourly, daily, weekly, monthly, and annual.', keywords: ['salary', 'hourly', 'annual', 'monthly', 'wage'], path: '/converters/date-time/salary-converter' },

  // ─── MATH CONVERTERS ─────────────────────────────────────────────────────
  { slug: 'roman-numerals', name: 'Roman Numerals Converter', category: 'converters', subcategory: 'mathematics', description: 'Convert between Arabic and Roman numerals.', keywords: ['roman numerals', 'arabic', 'roman', 'numerals'], path: '/converters/mathematics/roman-numerals' },
  { slug: 'percent-to-fraction', name: 'Percent to Fraction', category: 'converters', subcategory: 'mathematics', description: 'Convert percentages to fractions in simplest form.', keywords: ['percent to fraction', 'percentage', 'fraction'], path: '/converters/mathematics/percent-to-fraction' },
  { slug: 'fraction-to-percent', name: 'Fraction to Percent', category: 'converters', subcategory: 'mathematics', description: 'Convert fractions to percentages.', keywords: ['fraction to percent', 'fraction', 'percentage'], path: '/converters/mathematics/fraction-to-percent' },
  { slug: 'decimal-to-fraction', name: 'Decimal to Fraction', category: 'converters', subcategory: 'mathematics', description: 'Convert decimal numbers to fractions.', keywords: ['decimal', 'fraction', 'convert'], path: '/converters/mathematics/decimal-to-fraction' },
  { slug: 'fraction-to-decimal', name: 'Fraction to Decimal', category: 'converters', subcategory: 'mathematics', description: 'Convert fractions to decimal numbers.', keywords: ['fraction', 'decimal', 'convert'], path: '/converters/mathematics/fraction-to-decimal' },
  { slug: 'binary-to-decimal', name: 'Binary to Decimal', category: 'converters', subcategory: 'mathematics', description: 'Convert binary numbers to decimal.', keywords: ['binary', 'decimal', 'base 2', 'base 10'], path: '/converters/mathematics/binary-to-decimal' },
  { slug: 'decimal-to-binary', name: 'Decimal to Binary', category: 'converters', subcategory: 'mathematics', description: 'Convert decimal numbers to binary.', keywords: ['decimal', 'binary', 'base 10', 'base 2'], path: '/converters/mathematics/decimal-to-binary' },
  { slug: 'hex-to-decimal', name: 'Hex to Decimal', category: 'converters', subcategory: 'mathematics', description: 'Convert hexadecimal to decimal numbers.', keywords: ['hex', 'hexadecimal', 'decimal', 'base 16'], path: '/converters/mathematics/hex-to-decimal' },
  { slug: 'decimal-to-hex', name: 'Decimal to Hex', category: 'converters', subcategory: 'mathematics', description: 'Convert decimal numbers to hexadecimal.', keywords: ['decimal', 'hex', 'hexadecimal', 'base 16'], path: '/converters/mathematics/decimal-to-hex' },
  { slug: 'shoe-size', name: 'Shoe Size Converter', category: 'converters', subcategory: 'mathematics', description: 'Convert shoe sizes between US, UK, and EU standards.', keywords: ['shoe size', 'us', 'uk', 'eu', 'convert'], path: '/converters/mathematics/shoe-size' },

  // ─── DATA CONVERTERS ─────────────────────────────────────────────────────
  { slug: 'data-storage', name: 'Data Storage Converter', category: 'converters', subcategory: 'data', description: 'Convert between bytes, KB, MB, GB, TB, and more.', keywords: ['bytes', 'kilobytes', 'megabytes', 'gigabytes', 'data storage'], path: '/converters/data/data-storage' },
  { slug: 'grams-to-ml', name: 'Grams to mL', category: 'converters', subcategory: 'data', description: 'Convert grams to milliliters for common substances.', keywords: ['grams', 'milliliters', 'ml', 'weight to volume'], path: '/converters/data/grams-to-ml' },

  // ─── PHYSICS CONVERTERS ──────────────────────────────────────────────────
  { slug: 'temperature', name: 'Temperature Converter', category: 'converters', subcategory: 'physics', description: 'Convert between Celsius, Fahrenheit, and Kelvin.', keywords: ['temperature', 'celsius', 'fahrenheit', 'kelvin'], path: '/converters/physics/temperature' },
  { slug: 'pressure-converter', name: 'Pressure Converter', category: 'converters', subcategory: 'physics', description: 'Convert between Pascal, PSI, bar, atm, and mmHg.', keywords: ['pressure', 'pascal', 'psi', 'bar', 'atm'], path: '/converters/physics/pressure-converter' },
  { slug: 'energy-converter', name: 'Energy Converter', category: 'converters', subcategory: 'physics', description: 'Convert between joules, calories, BTU, and kWh.', keywords: ['energy', 'joules', 'calories', 'kwh', 'btu'], path: '/converters/physics/energy-converter' },

  // ─── COOKING CONVERTERS ──────────────────────────────────────────────────
  { slug: 'cups-to-grams', name: 'Cups to Grams', category: 'converters', subcategory: 'cooking', description: 'Convert cups to grams for baking ingredients.', keywords: ['cups to grams', 'baking', 'flour', 'sugar'], path: '/converters/cooking/cups-to-grams' },
  { slug: 'grams-to-cups', name: 'Grams to Cups', category: 'converters', subcategory: 'cooking', description: 'Convert grams to cups for baking ingredients.', keywords: ['grams to cups', 'baking', 'cooking'], path: '/converters/cooking/grams-to-cups' },
  { slug: 'cups-to-ml', name: 'Cups to mL', category: 'converters', subcategory: 'cooking', description: 'Convert cups to milliliters.', keywords: ['cups', 'ml', 'milliliters', 'cooking'], path: '/converters/cooking/cups-to-ml' },
  { slug: 'cups-to-tbsp', name: 'Cups to Tablespoons', category: 'converters', subcategory: 'cooking', description: 'Convert cups to tablespoons.', keywords: ['cups', 'tablespoons', 'tbsp', 'cooking'], path: '/converters/cooking/cups-to-tbsp' },
  { slug: 'cups-to-tsp', name: 'Cups to Teaspoons', category: 'converters', subcategory: 'cooking', description: 'Convert cups to teaspoons.', keywords: ['cups', 'teaspoons', 'tsp', 'cooking'], path: '/converters/cooking/cups-to-tsp' },
  { slug: 'butter-converter', name: 'Butter Converter', category: 'converters', subcategory: 'cooking', description: 'Convert butter between sticks, cups, grams, and tablespoons.', keywords: ['butter', 'sticks', 'cups', 'grams', 'tablespoons'], path: '/converters/cooking/butter-converter' },
  { slug: 'recipe-converter', name: 'Recipe Converter', category: 'converters', subcategory: 'cooking', description: 'Convert recipe ingredient quantities between units.', keywords: ['recipe', 'convert', 'cooking', 'units'], path: '/converters/cooking/recipe-converter' },

  // ─── NEW FINANCE TOOLS ───────────────────────────────────────────────────
  { slug: 'rent-affordability', name: 'Rent Affordability Calculator', category: 'calculators', subcategory: 'finance', description: 'Find out how much rent you can afford based on your income.', keywords: ['rent', 'afford', 'housing', 'income', 'monthly'], path: '/calculators/finance/rent-affordability' },
  { slug: 'cd-calculator', name: 'CD Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate the value of a Certificate of Deposit at maturity.', keywords: ['cd', 'certificate of deposit', 'savings', 'interest'], path: '/calculators/finance/cd-calculator' },
  { slug: 'us-take-home-pay', name: 'US Take-Home Pay Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate your US net take-home pay after federal tax, FICA, and state income tax using 2024 brackets.', keywords: ['take home pay', 'net salary', 'us tax', 'federal income tax', 'fica', 'paycheck calculator', 'after tax salary'], path: '/calculators/finance/us-take-home-pay' },

  // ─── NEW HEALTH TOOLS ────────────────────────────────────────────────────
  { slug: 'waist-to-hip', name: 'Waist-to-Hip Ratio Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate waist-to-hip ratio and assess health risk.', keywords: ['waist hip ratio', 'whr', 'abdominal fat', 'health risk'], path: '/calculators/health/waist-to-hip' },
  { slug: 'waist-to-height', name: 'Waist-to-Height Ratio Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate waist-to-height ratio for health assessment.', keywords: ['waist height ratio', 'obesity', 'health', 'body shape'], path: '/calculators/health/waist-to-height' },
  { slug: 'rmr', name: 'RMR Calculator', category: 'calculators', subcategory: 'health', description: 'Calculate Resting Metabolic Rate (RMR) using Mifflin-St Jeor.', keywords: ['rmr', 'resting metabolic rate', 'metabolism', 'calories'], path: '/calculators/health/rmr' },

  // ─── NEW DATE/TIME TOOLS ─────────────────────────────────────────────────
  { slug: 'age-difference', name: 'Age Difference Calculator', category: 'calculators', subcategory: 'date-time', description: 'Calculate the age difference between two people.', keywords: ['age difference', 'age gap', 'birthdays', 'compare ages'], path: '/calculators/date-time/age-difference' },
  { slug: 'day-counter', name: 'Day Counter', category: 'calculators', subcategory: 'date-time', description: 'Count total days, weekdays, and weekends between two dates.', keywords: ['day counter', 'count days', 'date range', 'weekdays'], path: '/calculators/date-time/day-counter' },

  // ─── NEW MATH CONVERTERS ──────────────────────────────────────────────────
  { slug: 'hex-to-binary', name: 'Hex to Binary', category: 'converters', subcategory: 'mathematics', description: 'Convert hexadecimal numbers to binary.', keywords: ['hex', 'binary', 'hexadecimal', 'base 16', 'base 2'], path: '/converters/mathematics/hex-to-binary' },
  { slug: 'binary-to-hex', name: 'Binary to Hex', category: 'converters', subcategory: 'mathematics', description: 'Convert binary numbers to hexadecimal.', keywords: ['binary', 'hex', 'hexadecimal', 'base 2', 'base 16'], path: '/converters/mathematics/binary-to-hex' },
  { slug: 'percent-to-decimal', name: 'Percent to Decimal', category: 'converters', subcategory: 'mathematics', description: 'Convert percentages to decimal numbers.', keywords: ['percent', 'decimal', 'percentage', 'convert'], path: '/converters/mathematics/percent-to-decimal' },
  { slug: 'decimal-to-percent', name: 'Decimal to Percent', category: 'converters', subcategory: 'mathematics', description: 'Convert decimal numbers to percentages.', keywords: ['decimal', 'percent', 'percentage', 'convert'], path: '/converters/mathematics/decimal-to-percent' },
  { slug: 'octal-to-decimal', name: 'Octal to Decimal', category: 'converters', subcategory: 'mathematics', description: 'Convert octal numbers to decimal.', keywords: ['octal', 'decimal', 'base 8', 'base 10'], path: '/converters/mathematics/octal-to-decimal' },

  // ─── MORE DISTANCE CONVERTERS ────────────────────────────────────────────
  { slug: 'miles-converter', name: 'Miles Converter', category: 'converters', subcategory: 'distance', description: 'Convert miles to km, meters, feet, yards, and more.', keywords: ['miles', 'kilometers', 'distance', 'convert', 'length'], path: '/converters/distance/miles-converter' },
  { slug: 'feet-to-meters', name: 'Feet to Meters', category: 'converters', subcategory: 'distance', description: 'Convert feet to meters and other units of length.', keywords: ['feet', 'meters', 'convert', 'length', 'imperial', 'metric'], path: '/converters/distance/feet-to-meters' },

  // ─── MORE VOLUME CONVERTERS ───────────────────────────────────────────────
  { slug: 'liter-to-gallon', name: 'Liters to Gallons', category: 'converters', subcategory: 'volume', description: 'Convert liters to gallons and other volume units.', keywords: ['liters', 'gallons', 'volume', 'convert', 'ml', 'fluid ounces'], path: '/converters/volume/liter-to-gallon' },
  { slug: 'gallons-converter', name: 'Gallons Converter', category: 'converters', subcategory: 'volume', description: 'Convert gallons to liters, pints, quarts, and more.', keywords: ['gallons', 'liters', 'volume', 'convert', 'pints', 'quarts'], path: '/converters/volume/gallons-converter' },
  { slug: 'cubic-meters-converter', name: 'Cubic Meters Converter', category: 'converters', subcategory: 'volume', description: 'Convert cubic meters to liters, gallons, cubic feet, and more.', keywords: ['cubic meters', 'volume', 'convert', 'cubic feet', 'liters'], path: '/converters/volume/cubic-meters-converter' },

  // ─── MORE SPEED CONVERTERS ────────────────────────────────────────────────
  { slug: 'mph-converter', name: 'MPH Converter', category: 'converters', subcategory: 'speed', description: 'Convert miles per hour to km/h, m/s, knots, and more.', keywords: ['mph', 'km/h', 'speed', 'convert', 'knots', 'mach'], path: '/converters/speed/mph-converter' },
  { slug: 'knots-converter', name: 'Knots Converter', category: 'converters', subcategory: 'speed', description: 'Convert knots to mph, km/h, and m/s.', keywords: ['knots', 'mph', 'speed', 'nautical', 'convert'], path: '/converters/speed/knots-converter' },

  // ─── MORE AREA CONVERTERS ─────────────────────────────────────────────────
  { slug: 'acre-to-sqft', name: 'Acres to Square Feet', category: 'converters', subcategory: 'area', description: 'Convert acres to square feet and other area units.', keywords: ['acres', 'square feet', 'area', 'convert', 'hectares', 'land'], path: '/converters/area/acre-to-sqft' },
  { slug: 'hectares-converter', name: 'Hectares Converter', category: 'converters', subcategory: 'area', description: 'Convert hectares to acres, square meters, and more.', keywords: ['hectares', 'acres', 'area', 'convert', 'land', 'square kilometers'], path: '/converters/area/hectares-converter' },

  // ─── MORE DATA CONVERTERS ─────────────────────────────────────────────────
  { slug: 'bits-bytes-converter', name: 'Bits & Bytes Converter', category: 'converters', subcategory: 'data', description: 'Convert between bits, bytes, kilobytes, megabytes, and more.', keywords: ['bits', 'bytes', 'kilobytes', 'megabytes', 'data', 'convert'], path: '/converters/data/bits-bytes-converter' },

  // ─── MORE DATE-TIME CONVERTERS ────────────────────────────────────────────
  { slug: 'seconds-to-minutes', name: 'Seconds to Minutes', category: 'converters', subcategory: 'date-time', description: 'Convert seconds to minutes, hours, days, and more.', keywords: ['seconds', 'minutes', 'hours', 'days', 'time', 'convert'], path: '/converters/date-time/seconds-to-minutes' },

  // ─── MORE GEOMETRY TOOLS ─────────────────────────────────────────────────
  { slug: 'circle', name: 'Circle Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area, circumference, and diameter of a circle.', keywords: ['circle', 'area', 'circumference', 'radius', 'diameter', 'pi'], path: '/calculators/geometry/circle' },
  { slug: 'triangle', name: 'Triangle Calculator', category: 'calculators', subcategory: 'geometry', description: "Calculate triangle area using Heron's formula from all three sides.", keywords: ['triangle', 'area', 'heron', 'perimeter', 'sides'], path: '/calculators/geometry/triangle' },
  { slug: 'rectangle', name: 'Rectangle Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area, perimeter, and diagonal of a rectangle.', keywords: ['rectangle', 'area', 'perimeter', 'diagonal', 'geometry'], path: '/calculators/geometry/rectangle' },
  { slug: 'sphere', name: 'Sphere Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate volume and surface area of a sphere.', keywords: ['sphere', 'volume', 'surface area', 'radius', '3d'], path: '/calculators/geometry/sphere' },
  { slug: 'cylinder', name: 'Cylinder Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate volume and surface area of a cylinder.', keywords: ['cylinder', 'volume', 'surface area', 'radius', 'height', '3d'], path: '/calculators/geometry/cylinder' },
  { slug: 'cone', name: 'Cone Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate volume, surface area, and slant height of a cone.', keywords: ['cone', 'volume', 'surface area', 'slant height', '3d'], path: '/calculators/geometry/cone' },
  { slug: 'distance', name: 'Distance Between Two Points', category: 'calculators', subcategory: 'geometry', description: 'Calculate the distance between two points using the distance formula.', keywords: ['distance', 'points', 'coordinate', 'geometry', 'formula', 'x y'], path: '/calculators/geometry/distance' },

  // ─── MORE STATS TOOLS ────────────────────────────────────────────────────
  { slug: 'mean', name: 'Mean Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate the arithmetic mean (average) of a set of numbers.', keywords: ['mean', 'average', 'arithmetic mean', 'statistics'], path: '/calculators/statistics/mean' },
  { slug: 'variance', name: 'Variance Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate variance and standard deviation for a data set.', keywords: ['variance', 'standard deviation', 'statistics', 'sample', 'population'], path: '/calculators/statistics/variance' },
  { slug: 'probability', name: 'Probability Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate probability as a fraction, decimal, and percentage.', keywords: ['probability', 'chance', 'odds', 'statistics', 'likelihood'], path: '/calculators/statistics/probability' },
  { slug: 'frequency', name: 'Frequency Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate frequency distribution for a data set.', keywords: ['frequency', 'distribution', 'frequency table', 'statistics'], path: '/calculators/statistics/frequency' },
  { slug: 'range', name: 'Range Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate the range (max - min) of a data set.', keywords: ['range', 'min', 'max', 'statistics', 'spread'], path: '/calculators/statistics/range' },

  // ─── MORE PHYSICS TOOLS ──────────────────────────────────────────────────
  { slug: 'gravitational-force', name: 'Gravitational Force Calculator', category: 'calculators', subcategory: 'physics', description: "Calculate gravitational force between two masses using Newton's law.", keywords: ['gravity', 'gravitational force', 'newton', 'physics', 'mass'], path: '/calculators/physics/gravitational-force' },
  { slug: 'work', name: 'Work Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate work done by a force over a distance.', keywords: ['work', 'force', 'distance', 'joules', 'physics', 'energy'], path: '/calculators/physics/work' },
  { slug: 'power', name: 'Power Calculator (Physics)', category: 'calculators', subcategory: 'physics', description: 'Calculate power from work and time.', keywords: ['power', 'work', 'time', 'watts', 'physics'], path: '/calculators/physics/power' },
  { slug: 'torque', name: 'Torque Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate torque from force, moment arm, and angle.', keywords: ['torque', 'force', 'moment arm', 'newton meter', 'physics'], path: '/calculators/physics/torque' },
  { slug: 'momentum', name: 'Momentum Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate linear momentum from mass and velocity.', keywords: ['momentum', 'mass', 'velocity', 'physics', 'inertia'], path: '/calculators/physics/momentum' },
  { slug: 'frequency-wavelength', name: 'Frequency & Wavelength', category: 'calculators', subcategory: 'physics', description: 'Calculate wavelength from frequency (speed of sound).', keywords: ['frequency', 'wavelength', 'sound', 'physics', 'wave'], path: '/calculators/physics/frequency-wavelength' },

  // ─── MORE FITNESS TOOLS ──────────────────────────────────────────────────
  { slug: 'calories-burned', name: 'Calories Burned Calculator', category: 'calculators', subcategory: 'fitness', description: 'Estimate calories burned during various activities.', keywords: ['calories burned', 'exercise', 'activity', 'workout', 'fitness'], path: '/calculators/fitness/calories-burned' },
  { slug: 'body-mass-index', name: 'Body Mass Index', category: 'calculators', subcategory: 'fitness', description: 'Calculate BMI from weight and height.', keywords: ['bmi', 'body mass index', 'weight', 'height', 'fitness'], path: '/calculators/fitness/body-mass-index' },
  { slug: 'swimming-pace', name: 'Swimming Pace Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate swimming pace per 100 meters or yards.', keywords: ['swimming', 'pace', 'lap', '100m', 'pool', 'fitness'], path: '/calculators/fitness/swimming-pace' },
  { slug: 'cycling-pace', name: 'Cycling Speed Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate average cycling speed from distance and time.', keywords: ['cycling', 'speed', 'pace', 'bike', 'distance', 'fitness'], path: '/calculators/fitness/cycling-pace' },

  // ─── MORE TRANSPORTATION TOOLS ───────────────────────────────────────────
  { slug: 'car-loan', name: 'Car Loan Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate monthly car loan payments, total cost, and interest.', keywords: ['car loan', 'auto loan', 'monthly payment', 'interest', 'finance'], path: '/calculators/transportation/car-loan' },
  { slug: 'trip-cost', name: 'Trip Cost Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate the total fuel cost for a road trip per person.', keywords: ['trip cost', 'road trip', 'fuel cost', 'gas price', 'per person'], path: '/calculators/transportation/trip-cost' },
  { slug: 'ev-cost', name: 'EV Cost Calculator', category: 'calculators', subcategory: 'transportation', description: 'Calculate annual electricity cost for an electric vehicle.', keywords: ['electric car', 'ev', 'electricity cost', 'kwh', 'miles', 'charging'], path: '/calculators/transportation/ev-cost' },

  // ─── MORE COOKING TOOLS ──────────────────────────────────────────────────
  { slug: 'yeast', name: 'Yeast Calculator', category: 'calculators', subcategory: 'cooking', description: 'Calculate yeast needed based on flour weight and yeast type.', keywords: ['yeast', 'bread', 'flour', 'baking', 'dough', 'active dry', 'instant'], path: '/calculators/cooking/yeast' },
  { slug: 'baking-substitution', name: 'Baking Substitution Guide', category: 'calculators', subcategory: 'cooking', description: 'Find common ingredient substitutions for baking.', keywords: ['baking substitution', 'ingredient substitute', 'cooking', 'vegan', 'dairy free'], path: '/calculators/cooking/baking-substitution' },
  { slug: 'calories-per-serving', name: 'Calories Per Serving', category: 'calculators', subcategory: 'cooking', description: 'Calculate calories per serving from total recipe calories.', keywords: ['calories per serving', 'recipe', 'nutrition', 'serving size', 'food'], path: '/calculators/cooking/calories-per-serving' },

  // ─── MORE STATISTICS ─────────────────────────────────────────────────────
  { slug: 'harmonic-mean', name: 'Harmonic Mean Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate the harmonic mean of a set of numbers.', keywords: ['harmonic mean', 'statistics', 'average', 'mean'], path: '/calculators/statistics/harmonic-mean' },
  { slug: 'iqr', name: 'IQR Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate interquartile range (IQR) and quartiles Q1, Q2, Q3.', keywords: ['iqr', 'interquartile range', 'quartile', 'statistics', 'q1', 'q3'], path: '/calculators/statistics/iqr' },
  { slug: 'mad', name: 'Mean Absolute Deviation', category: 'calculators', subcategory: 'statistics', description: 'Calculate the mean absolute deviation (MAD) of a data set.', keywords: ['mad', 'mean absolute deviation', 'statistics', 'spread'], path: '/calculators/statistics/mad' },
  { slug: 'binomial', name: 'Binomial Distribution', category: 'calculators', subcategory: 'statistics', description: 'Calculate binomial probability P(X=k) and cumulative probability.', keywords: ['binomial', 'distribution', 'probability', 'statistics', 'n', 'k', 'p'], path: '/calculators/statistics/binomial' },
  { slug: 'poisson', name: 'Poisson Distribution', category: 'calculators', subcategory: 'statistics', description: 'Calculate Poisson distribution probability P(X=k) from lambda.', keywords: ['poisson', 'distribution', 'probability', 'statistics', 'lambda'], path: '/calculators/statistics/poisson' },

  // ─── MORE GEOMETRY ───────────────────────────────────────────────────────
  { slug: 'trapezoid-calc', name: 'Trapezoid Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate the area of a trapezoid from two bases and height.', keywords: ['trapezoid', 'area', 'base', 'height', 'geometry'], path: '/calculators/geometry/trapezoid-calc' },
  { slug: 'ellipse', name: 'Ellipse Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area and perimeter (approximation) of an ellipse.', keywords: ['ellipse', 'area', 'perimeter', 'semi-major', 'semi-minor', 'geometry'], path: '/calculators/geometry/ellipse' },
  { slug: 'pentagon', name: 'Pentagon Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area and perimeter of a regular pentagon.', keywords: ['pentagon', 'area', 'perimeter', 'geometry', 'regular polygon'], path: '/calculators/geometry/pentagon' },
  { slug: 'hexagon', name: 'Hexagon Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate area and perimeter of a regular hexagon.', keywords: ['hexagon', 'area', 'perimeter', 'geometry', 'regular polygon'], path: '/calculators/geometry/hexagon' },
  { slug: 'pyramid', name: 'Pyramid Calculator', category: 'calculators', subcategory: 'geometry', description: 'Calculate volume, lateral surface area, and slant height of a square pyramid.', keywords: ['pyramid', 'volume', 'surface area', 'slant height', 'geometry', '3d'], path: '/calculators/geometry/pyramid' },
  { slug: 'endpoint', name: 'Endpoint Calculator', category: 'calculators', subcategory: 'geometry', description: 'Find the other endpoint of a line segment given one endpoint and the midpoint.', keywords: ['endpoint', 'midpoint', 'geometry', 'coordinate', 'line segment'], path: '/calculators/geometry/endpoint' },

  // ─── MORE TRIGONOMETRY ───────────────────────────────────────────────────
  { slug: 'cotangent', name: 'Cotangent Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate cotangent (cot) of an angle in degrees or radians.', keywords: ['cotangent', 'cot', 'trigonometry', 'angle', 'trig'], path: '/calculators/trigonometry/cotangent' },
  { slug: 'arccot', name: 'Arccot Calculator', category: 'calculators', subcategory: 'trigonometry', description: 'Calculate inverse cotangent (arccot) in degrees or radians.', keywords: ['arccot', 'arccotangent', 'inverse cotangent', 'trigonometry', 'trig'], path: '/calculators/trigonometry/arccot' },

  // ─── MORE PHYSICS ─────────────────────────────────────────────────────────
  { slug: 'potential-energy', name: 'Potential Energy Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate gravitational potential energy from mass, gravity, and height.', keywords: ['potential energy', 'gravity', 'height', 'physics', 'joules', 'pe'], path: '/calculators/physics/potential-energy' },
  { slug: 'tank-volume', name: 'Tank Volume Calculator', category: 'calculators', subcategory: 'physics', description: 'Calculate tank volume for cylinder, rectangular, and sphere shapes.', keywords: ['tank', 'volume', 'cylinder', 'rectangular', 'sphere', 'liters', 'gallons'], path: '/calculators/physics/tank-volume' },

  // ─── MORE CONSTRUCTION ────────────────────────────────────────────────────
  { slug: 'metal-weight', name: 'Metal Weight Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate metal sheet weight from material, dimensions, and density.', keywords: ['metal weight', 'steel', 'aluminum', 'copper', 'density', 'construction'], path: '/calculators/construction/metal-weight' },

  // ─── MORE BUSINESS ────────────────────────────────────────────────────────
  { slug: 'return-on-capital', name: 'Return on Capital (ROIC)', category: 'calculators', subcategory: 'business', description: 'Calculate Return on Invested Capital (ROIC) from NOPAT and capital.', keywords: ['roic', 'return on capital', 'invested capital', 'nopat', 'business'], path: '/calculators/business/return-on-capital' },

  // ─── MORE DATE/TIME ───────────────────────────────────────────────────────
  { slug: 'chronological-age', name: 'Chronological Age Calculator', category: 'calculators', subcategory: 'date-time', description: 'Calculate exact chronological age in years, months, and days.', keywords: ['chronological age', 'age', 'birthday', 'years months days', 'date'], path: '/calculators/date-time/chronological-age' },

  // ─── MORE CRYPTOGRAPHY ───────────────────────────────────────────────────
  { slug: 'crc32', name: 'CRC32 Generator', category: 'calculators', subcategory: 'cryptography', description: 'Calculate CRC32 checksum of any text string.', keywords: ['crc32', 'crc', 'checksum', 'crypto', 'hash', 'cyclic redundancy'], path: '/calculators/cryptography/crc32' },

  // ─── MORE DATE-TIME CONVERTERS ────────────────────────────────────────────
  { slug: 'hours-to-minutes', name: 'Hours to Minutes', category: 'converters', subcategory: 'date-time', description: 'Convert hours to minutes, seconds, days, and more.', keywords: ['hours', 'minutes', 'seconds', 'time', 'convert'], path: '/converters/date-time/hours-to-minutes' },
  { slug: 'decimal-to-time', name: 'Decimal to Time', category: 'converters', subcategory: 'date-time', description: 'Convert decimal hours to hours, minutes, and seconds (HH:MM:SS).', keywords: ['decimal hours', 'time', 'convert', 'hh mm ss'], path: '/converters/date-time/decimal-to-time' },
  { slug: 'time-to-decimal', name: 'Time to Decimal', category: 'converters', subcategory: 'date-time', description: 'Convert hours, minutes, and seconds to decimal hours.', keywords: ['time', 'decimal hours', 'convert', 'hh mm ss'], path: '/converters/date-time/time-to-decimal' },
  { slug: '24h-to-12h', name: '24h to 12h Converter', category: 'converters', subcategory: 'date-time', description: 'Convert 24-hour (military) time to 12-hour AM/PM format.', keywords: ['24 hour', '12 hour', 'military time', 'am pm', 'clock', 'convert'], path: '/converters/date-time/24h-to-12h' },

  // ─── MORE VOLUME/COOKING CONVERTERS ──────────────────────────────────────
  { slug: 'ml-to-cups', name: 'mL to Cups Converter', category: 'converters', subcategory: 'volume', description: 'Convert milliliters to cups, fluid ounces, tablespoons, and more.', keywords: ['ml', 'cups', 'milliliters', 'fluid ounces', 'tablespoons', 'convert'], path: '/converters/volume/ml-to-cups' },

  // ─── RANDOMIZERS ─────────────────────────────────────────────────────────
  { slug: 'random-number', name: 'Random Number Generator', category: 'randomizers', subcategory: 'randomizers', description: 'Generate random numbers with custom min, max, and count.', keywords: ['random number', 'generator', 'dice', 'lottery'], path: '/randomizers/random-number' },
  { slug: 'random-password', name: 'Password Generator', category: 'randomizers', subcategory: 'randomizers', description: 'Generate secure random passwords with custom options.', keywords: ['password', 'generator', 'secure', 'random'], path: '/randomizers/random-password' },
  { slug: 'random-color', name: 'Random Color Generator', category: 'randomizers', subcategory: 'randomizers', description: 'Generate random colors in HEX, RGB, and HSL formats.', keywords: ['color', 'random', 'hex', 'rgb', 'hsl'], path: '/randomizers/random-color' },
  { slug: 'list-randomizer', name: 'List Randomizer', category: 'randomizers', subcategory: 'randomizers', description: 'Shuffle and randomize any list of items.', keywords: ['list', 'shuffle', 'randomize', 'order'], path: '/randomizers/list-randomizer' },
  { slug: 'dice-roller', name: 'Dice Roller', category: 'randomizers', subcategory: 'randomizers', description: 'Roll virtual dice of any type: d4, d6, d8, d10, d12, d20.', keywords: ['dice', 'roll', 'd6', 'd20', 'tabletop'], path: '/randomizers/dice-roller' },
  { slug: 'name-picker', name: 'Random Name Picker', category: 'randomizers', subcategory: 'randomizers', description: 'Randomly pick names from a list for raffles and giveaways.', keywords: ['name picker', 'raffle', 'giveaway', 'random pick'], path: '/randomizers/name-picker' },
  { slug: 'team-generator', name: 'Random Team Generator', category: 'randomizers', subcategory: 'randomizers', description: 'Divide players into random teams fairly.', keywords: ['team generator', 'random teams', 'players', 'split'], path: '/randomizers/team-generator' },

  // ─── NEW TOOLS (BATCH 2) ─────────────────────────────────────────────────

  // Finance
  { slug: 'credit-card-payoff', name: 'Credit Card Payoff Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate how long it will take to pay off a credit card and total interest paid.', keywords: ['credit card', 'payoff', 'apr', 'debt', 'interest'], path: '/calculators/finance/credit-card-payoff' },
  { slug: 'minimum-payment', name: 'Minimum Payment Calculator', category: 'calculators', subcategory: 'finance', description: 'See how long it takes to pay off debt making only minimum payments.', keywords: ['minimum payment', 'credit card', 'debt', 'interest', 'apr'], path: '/calculators/finance/minimum-payment' },
  { slug: 'debt-snowball', name: 'Debt Snowball Calculator', category: 'calculators', subcategory: 'finance', description: 'Plan your debt payoff using the snowball method — smallest balance first.', keywords: ['debt snowball', 'debt payoff', 'credit card', 'loan'], path: '/calculators/finance/debt-snowball' },
  { slug: 'debt-avalanche', name: 'Debt Avalanche Calculator', category: 'calculators', subcategory: 'finance', description: 'Plan your debt payoff using the avalanche method — highest interest rate first.', keywords: ['debt avalanche', 'debt payoff', 'interest', 'loan'], path: '/calculators/finance/debt-avalanche' },
  { slug: 'mortgage-amortization', name: 'Mortgage Amortization Calculator', category: 'calculators', subcategory: 'finance', description: 'Generate a full year-by-year mortgage amortization schedule.', keywords: ['mortgage', 'amortization', 'schedule', 'home loan', 'principal'], path: '/calculators/finance/mortgage-amortization' },
  { slug: 'mortgage-overpayment', name: 'Mortgage Overpayment Calculator', category: 'calculators', subcategory: 'finance', description: 'See how much time and interest you save by making extra mortgage payments.', keywords: ['mortgage', 'overpayment', 'extra payment', 'interest saved', 'home loan'], path: '/calculators/finance/mortgage-overpayment' },
  { slug: 'rent-vs-buy', name: 'Rent vs Buy Calculator', category: 'calculators', subcategory: 'finance', description: 'Compare the financial impact of renting versus buying a home.', keywords: ['rent vs buy', 'rent or buy', 'home buying', 'mortgage', 'break even'], path: '/calculators/finance/rent-vs-buy' },
  { slug: 'refinance-calculator', name: 'Refinance Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate monthly savings and break-even point when refinancing your mortgage.', keywords: ['refinance', 'mortgage', 'break even', 'monthly savings', 'closing costs'], path: '/calculators/finance/refinance-calculator' },
  { slug: 'net-worth', name: 'Net Worth Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate your total net worth from assets and liabilities.', keywords: ['net worth', 'assets', 'liabilities', 'wealth', 'personal finance'], path: '/calculators/finance/net-worth' },
  { slug: 'emergency-fund', name: 'Emergency Fund Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate how large your emergency fund should be and track your progress.', keywords: ['emergency fund', 'savings', 'monthly expenses', 'financial cushion'], path: '/calculators/finance/emergency-fund' },
  { slug: 'savings-goal', name: 'Savings Goal Calculator', category: 'calculators', subcategory: 'finance', description: 'Calculate the monthly savings needed to reach a financial goal.', keywords: ['savings goal', 'monthly savings', 'target amount', 'compound interest'], path: '/calculators/finance/savings-goal' },
  { slug: 'budget-50-30-20', name: '50/30/20 Budget Calculator', category: 'calculators', subcategory: 'finance', description: 'Break down your income using the 50/30/20 budgeting rule.', keywords: ['50 30 20', 'budget', 'needs wants savings', 'personal finance', 'monthly budget'], path: '/calculators/finance/budget-50-30-20' },

  // Business
  { slug: 'cac', name: 'Customer Acquisition Cost (CAC)', category: 'calculators', subcategory: 'business', description: 'Calculate customer acquisition cost and LTV:CAC ratio.', keywords: ['cac', 'customer acquisition cost', 'marketing', 'ltv', 'business'], path: '/calculators/business/cac' },
  { slug: 'ltv', name: 'Customer Lifetime Value (LTV)', category: 'calculators', subcategory: 'business', description: 'Calculate customer lifetime value from purchase frequency and lifespan.', keywords: ['ltv', 'lifetime value', 'cac', 'customer', 'revenue'], path: '/calculators/business/ltv' },
  { slug: 'shopify-fees', name: 'Shopify Fee Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate Shopify plan fees, transaction fees, and net revenue.', keywords: ['shopify', 'fees', 'ecommerce', 'transaction fee', 'net revenue'], path: '/calculators/business/shopify-fees' },
  { slug: 'ebay-fees', name: 'eBay Fee Calculator', category: 'calculators', subcategory: 'business', description: 'Calculate eBay final value fees, payment processing, and net profit.', keywords: ['ebay', 'fees', 'final value fee', 'selling', 'ecommerce'], path: '/calculators/business/ebay-fees' },

  // Fitness
  { slug: 'lean-body-mass', name: 'Lean Body Mass Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate lean body mass (muscle, bone, organs) from weight and body fat percentage.', keywords: ['lean body mass', 'lbm', 'body fat', 'muscle mass', 'fitness'], path: '/calculators/fitness/lean-body-mass' },
  { slug: 'ffmi', name: 'FFMI Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate Fat-Free Mass Index to assess muscle development.', keywords: ['ffmi', 'fat free mass index', 'muscle', 'bodybuilding', 'body composition'], path: '/calculators/fitness/ffmi' },
  { slug: 'body-surface-area', name: 'Body Surface Area Calculator', category: 'calculators', subcategory: 'fitness', description: 'Calculate body surface area (BSA) using Mosteller, DuBois, or Haycock formula.', keywords: ['body surface area', 'bsa', 'mosteller', 'dubois', 'medical'], path: '/calculators/fitness/body-surface-area' },
  { slug: 'running-cadence', name: 'Running Cadence Calculator', category: 'calculators', subcategory: 'fitness', description: 'Analyze your running cadence and get recommendations for improvement.', keywords: ['running cadence', 'steps per minute', 'spm', 'stride', 'running form'], path: '/calculators/fitness/running-cadence' },

  // Construction
  { slug: 'flooring', name: 'Flooring Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate how much flooring material you need including waste factor.', keywords: ['flooring', 'hardwood', 'laminate', 'sq ft', 'boards'], path: '/calculators/construction/flooring' },
  { slug: 'drywall', name: 'Drywall Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate drywall sheets needed for walls and ceilings in a room.', keywords: ['drywall', 'sheetrock', 'gypsum', 'walls', 'sheets'], path: '/calculators/construction/drywall' },
  { slug: 'fence', name: 'Fence Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate posts, rails, and pickets needed to build a fence.', keywords: ['fence', 'fencing', 'posts', 'pickets', 'rails'], path: '/calculators/construction/fence' },
  { slug: 'stair', name: 'Stair Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate risers, treads, and stringer length for a staircase.', keywords: ['stairs', 'staircase', 'risers', 'treads', 'stringer'], path: '/calculators/construction/stair' },
  { slug: 'decking', name: 'Decking Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate how many decking boards you need for a deck project.', keywords: ['decking', 'deck boards', 'lumber', 'outdoor deck', 'sq ft'], path: '/calculators/construction/decking' },
  { slug: 'roofing', name: 'Roofing Calculator', category: 'calculators', subcategory: 'construction', description: 'Calculate roofing squares and shingle bundles for a roof replacement.', keywords: ['roofing', 'shingles', 'squares', 'bundles', 'pitch'], path: '/calculators/construction/roofing' },

  // Data / Tech
  { slug: 'internet-speed', name: 'Internet Speed Converter', category: 'calculators', subcategory: 'data', description: 'Convert between internet speed units: Mbps, MB/s, Kbps, Gbps.', keywords: ['internet speed', 'mbps', 'mb/s', 'bandwidth', 'converter'], path: '/calculators/data/internet-speed' },
  { slug: 'screen-size', name: 'Screen Size Calculator', category: 'calculators', subcategory: 'data', description: 'Calculate screen width and height from diagonal size and aspect ratio.', keywords: ['screen size', 'monitor', 'diagonal', 'aspect ratio', 'dimensions'], path: '/calculators/data/screen-size' },
  { slug: 'aspect-ratio', name: 'Aspect Ratio Calculator', category: 'calculators', subcategory: 'data', description: 'Simplify aspect ratios, scale dimensions, and find closest standard ratios.', keywords: ['aspect ratio', 'resolution', 'width height', '16:9', 'scale'], path: '/calculators/data/aspect-ratio' },
  { slug: 'pixel-density', name: 'Pixel Density (PPI) Calculator', category: 'calculators', subcategory: 'data', description: 'Calculate pixels per inch (PPI) from screen resolution and diagonal size.', keywords: ['ppi', 'pixel density', 'pixels per inch', 'retina', 'display'], path: '/calculators/data/pixel-density' },
  { slug: 'number-to-words', name: 'Number to Words Converter', category: 'calculators', subcategory: 'data', description: 'Convert any number to English words for checks and formal documents.', keywords: ['number to words', 'number in words', 'check writing', 'spelling', 'words'], path: '/calculators/data/number-to-words' },
  { slug: 'random-string', name: 'Random String Generator', category: 'calculators', subcategory: 'data', description: 'Generate random strings in alphanumeric, hex, UUID, and other formats.', keywords: ['random string', 'uuid', 'password', 'generator', 'hex'], path: '/calculators/data/random-string' },
  { slug: 'character-counter', name: 'Character Counter', category: 'calculators', subcategory: 'data', description: 'Count characters, words, sentences, paragraphs, and estimate reading time.', keywords: ['character counter', 'word count', 'characters', 'text analysis', 'reading time'], path: '/calculators/data/character-counter' },

  // Other - Scenario
  { slug: 'split-bill', name: 'Split Bill Calculator', category: 'calculators', subcategory: 'other', description: 'Split a restaurant bill with tip and tax evenly among a group.', keywords: ['split bill', 'divide bill', 'tip', 'restaurant', 'group'], path: '/calculators/other/split-bill' },
  { slug: 'moving-cost', name: 'Moving Cost Estimator', category: 'calculators', subcategory: 'other', description: 'Estimate the total cost of moving based on distance, home size, and services.', keywords: ['moving cost', 'moving estimate', 'relocation', 'movers', 'moving truck'], path: '/calculators/other/moving-cost' },
  { slug: 'wedding-budget', name: 'Wedding Budget Calculator', category: 'calculators', subcategory: 'other', description: 'Break down your wedding budget by category based on industry averages.', keywords: ['wedding budget', 'wedding cost', 'venue', 'catering', 'wedding planning'], path: '/calculators/other/wedding-budget' },
  { slug: 'grocery-budget', name: 'Grocery Budget Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate weekly and monthly grocery budget based on USDA food plans.', keywords: ['grocery budget', 'food budget', 'monthly groceries', 'usda', 'household'], path: '/calculators/other/grocery-budget' },

  // Other - Education
  { slug: 'final-grade-needed', name: 'Final Grade Needed Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate the score you need on your final exam to achieve a target grade.', keywords: ['final grade', 'exam score needed', 'grade calculator', 'academic', 'gpa'], path: '/calculators/other/final-grade-needed' },
  { slug: 'gpa-by-credits', name: 'GPA by Credits Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate weighted GPA from multiple courses with different credit hours.', keywords: ['gpa', 'grade point average', 'credits', 'weighted gpa', 'college'], path: '/calculators/other/gpa-by-credits' },
  { slug: 'semester-gpa', name: 'Semester GPA Calculator', category: 'calculators', subcategory: 'other', description: 'Calculate your new cumulative GPA after adding a semester of grades.', keywords: ['semester gpa', 'cumulative gpa', 'credits', 'grade point average', 'academic'], path: '/calculators/other/semester-gpa' },
  { slug: 'reverse-grade', name: 'Reverse Grade Calculator', category: 'calculators', subcategory: 'other', description: 'Find out how many points you still need to achieve a target course grade.', keywords: ['reverse grade', 'points needed', 'grade calculator', 'academic', 'exam'], path: '/calculators/other/reverse-grade' },

  // Cooking
  { slug: 'recipe-cost', name: 'Recipe Cost Calculator', category: 'calculators', subcategory: 'cooking', description: 'Calculate total ingredient cost, cost per serving, and selling price for recipes.', keywords: ['recipe cost', 'food cost', 'ingredient cost', 'cost per serving', 'markup'], path: '/calculators/cooking/recipe-cost' },
  { slug: 'meal-calorie-estimator', name: 'Meal Calorie Estimator', category: 'calculators', subcategory: 'cooking', description: 'Estimate total calories in a meal by listing ingredients and their caloric values.', keywords: ['meal calories', 'calorie estimator', 'food calories', 'nutrition', 'total calories'], path: '/calculators/cooking/meal-calorie-estimator' },

  // Statistics / Probability
  { slug: 'dice-probability', name: 'Dice Probability Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate the probability of rolling a specific sum with any number of dice.', keywords: ['dice probability', 'dice', 'd6', 'probability', 'rolling sum'], path: '/calculators/statistics/dice-probability' },
  { slug: 'lottery-odds', name: 'Lottery Odds Calculator', category: 'calculators', subcategory: 'statistics', description: 'Calculate the odds of winning a lottery by choosing numbers from a pool.', keywords: ['lottery odds', 'winning odds', 'probability', 'jackpot', 'combinations'], path: '/calculators/statistics/lottery-odds' },
  { slug: 'probability-multiple', name: 'Multiple Event Probability', category: 'calculators', subcategory: 'statistics', description: 'Calculate the combined probability of multiple independent events occurring.', keywords: ['probability', 'multiple events', 'independent', 'combined probability', 'and or'], path: '/calculators/statistics/probability-multiple' },

];

function fuzzyScore(text: string, query: string): number {
  text = text.toLowerCase();
  query = query.toLowerCase();
  if (text === query) return 100;
  if (text.startsWith(query)) return 90;
  if (text.includes(query)) return 80;
  // character-by-character subsequence matching
  let ti = 0, qi = 0, consecutive = 0, score = 0;
  while (ti < text.length && qi < query.length) {
    if (text[ti] === query[qi]) {
      consecutive++;
      score += consecutive * 2;
      qi++;
    } else {
      consecutive = 0;
    }
    ti++;
  }
  if (qi < query.length) return 0; // not all chars matched
  return Math.min(score, 70);
}

export function searchTools(query: string): Tool[] {
  if (!query.trim()) return ALL_TOOLS;
  const scored: Array<{ tool: Tool; score: number }> = [];
  for (const tool of ALL_TOOLS) {
    const nameScore = fuzzyScore(tool.name, query) * 3;
    const keywordScore = Math.max(0, ...tool.keywords.map(k => fuzzyScore(k, query))) * 2;
    const descScore = fuzzyScore(tool.description, query);
    const subScore = fuzzyScore(tool.subcategory, query);
    const total = nameScore + keywordScore + descScore + subScore;
    if (total > 0) scored.push({ tool, score: total });
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .map(s => s.tool);
}

export function getToolsBySubcategory(category: ToolCategory, subcategory: string): Tool[] {
  return ALL_TOOLS.filter(t => t.category === category && t.subcategory === subcategory);
}

export function getToolByPath(path: string): Tool | undefined {
  return ALL_TOOLS.find(t => t.path === path);
}

export const POPULAR_CALCULATORS = [
  'percentage', 'compound-interest', 'fuel-cost', 'hours-calculator', 'age', 
  'days-between-dates', 'bmi', 'water-intake', 'area', 'volume', 
  'grade', 'sleep', 'height-predictor', 'tip', 'percent-off',
];

export const POPULAR_CONVERTERS = [
  'length', 'height', 'km-to-miles', 'inches-to-cm', 'roman-numerals',
  'data-storage', 'grams-to-ml', 'speed-converter', 'temperature', 'shoe-size',
];

export const POPULAR_RANDOMIZERS = [
  'random-number', 'random-password', 'random-color', 'list-randomizer', 'dice-roller', 'name-picker',
];
