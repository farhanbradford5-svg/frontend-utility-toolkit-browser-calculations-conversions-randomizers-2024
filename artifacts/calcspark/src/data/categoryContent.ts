export interface CategoryContent {
  intro: string;
  about: string[];
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {

  /* ──────── CALCULATOR CATEGORIES ──────── */

  'calculators/business': {
    intro: 'Run faster financial analysis with free, browser-based business calculators covering ROI, profit margins, break-even points, markup, and more — no spreadsheet required.',
    about: [
      'Business decisions rely on numbers. Whether you\'re evaluating a new product line, pricing a service, or pitching to investors, having instant access to accurate financial metrics is critical. CalcSpark\'s business calculator suite covers every fundamental metric — from return on investment (ROI) and return on equity (ROE) to break-even analysis, profit margins, and employee cost — so you can run scenarios in seconds.',
      'The ROI calculator helps you determine how efficiently you\'re generating returns relative to your investment, expressed as a percentage. Use the break-even calculator to find the exact unit volume where your revenues cover all fixed and variable costs — essential for setting realistic sales targets. The profit margin calculator gives you both gross and net margin figures, while the markup calculator converts your desired margin into the correct selling price.',
      'For payroll and HR decisions, the employee cost calculator reveals the true all-in cost of each hire including benefits, taxes, and overhead. The revenue run rate tool projects annual revenue from any shorter period — useful for startups reporting monthly or quarterly metrics to stakeholders. The EBITDA and working capital calculators provide quick snapshots of operational profitability and short-term liquidity.',
      'All calculations follow standard accounting and finance formulas used by CFOs, analysts, and MBA programs worldwide. Results appear instantly in your browser — nothing is sent to a server, no account is required, and every formula is verifiable. Bookmark the tools you use most often for quick daily access during planning, budgeting, and board-meeting prep.',
    ],
    faqs: [
      { q: 'How is ROI calculated?', a: 'ROI = (Net Profit / Cost of Investment) × 100. It measures the gain or loss generated relative to the money invested, expressed as a percentage.' },
      { q: 'What is the break-even formula?', a: 'Break-even units = Fixed Costs / (Selling Price per Unit − Variable Cost per Unit). This tells you how many units you must sell before covering all costs.' },
      { q: 'What\'s the difference between gross margin and net margin?', a: 'Gross margin excludes operating expenses (just revenue minus cost of goods). Net margin subtracts all expenses including taxes and interest, giving a truer picture of profitability.' },
    ],
  },

  'calculators/finance': {
    intro: 'Make smarter money decisions with free finance calculators for compound interest, loan payments, mortgage amortization, APY, tax, and investment growth — all computed instantly in your browser.',
    about: [
      'Personal finance is built on a handful of powerful formulas — and understanding them can be the difference between financial freedom and costly mistakes. CalcSpark\'s finance calculators bring these formulas directly to your fingertips, covering compound interest, simple interest, loan amortization, APY, present value, VAT, and salary conversions.',
      'The compound interest calculator shows how your savings grow exponentially over time when interest is reinvested — a concept Albert Einstein reportedly called the "eighth wonder of the world." Enter your principal, interest rate, compounding frequency, and investment period to see both the final balance and total interest earned. The loan calculator does the reverse: given a loan amount, interest rate, and term, it computes your monthly payment and total interest paid, and displays a full amortization schedule.',
      'Planning for large purchases? The mortgage calculator handles home-loan scenarios with optional extra payments to reveal how much interest you can save by paying ahead. The APY calculator converts nominal annual rates to effective yields, accounting for compounding periods — essential when comparing savings accounts, CDs, and high-yield accounts. For salary negotiations, the hourly-to-salary and salary-to-hourly converters quickly translate between pay structures.',
      'Tax-related tools include a VAT/GST calculator for adding or stripping sales tax from prices, and an income tax estimator. All these tools run entirely client-side — your financial data never leaves your device. Every formula is based on standard actuarial and accounting principles used by banks, certified financial planners, and CFA-level finance professionals.',
    ],
    faqs: [
      { q: 'How does compound interest differ from simple interest?', a: 'Simple interest is calculated only on the principal. Compound interest is calculated on the principal plus accumulated interest, causing exponential growth over time.' },
      { q: 'What information do I need for the loan calculator?', a: 'You need three values: the loan amount (principal), the annual interest rate, and the loan term in months or years. The calculator returns your monthly payment and total interest paid.' },
      { q: 'What is APY vs APR?', a: 'APR (Annual Percentage Rate) is the nominal rate without accounting for compounding. APY (Annual Percentage Yield) reflects the actual return when compounding is applied — APY is always equal to or higher than APR.' },
    ],
  },

  'calculators/date-time': {
    intro: 'Calculate age, days between dates, time durations, countdowns, and working days instantly with free online date and time calculators — accurate for any timezone or calendar.',
    about: [
      'Date and time calculations appear constantly in everyday life — figuring out someone\'s exact age, counting days until a deadline, scheduling meetings across time zones, or calculating how long a project took. CalcSpark\'s date and time calculators handle all these scenarios with precision and ease.',
      'The age calculator is one of the most-used tools on the site, computing exact age in years, months, and days from a date of birth to today (or any target date). It\'s useful for legal documents, medical records, HR compliance, and simple curiosity. The days-between-dates calculator counts the exact number of calendar days, weekdays, or weekends between any two dates — invaluable for project planning, billing, and legal deadlines.',
      'The time duration calculator helps you find the difference between two clock times in hours, minutes, and seconds — useful for timesheets, event timing, and performance tracking. For forward planning, the date-add calculator lets you add or subtract days, weeks, or months from any date, instantly showing the resulting date. The working-days calculator excludes weekends to give business-relevant timelines.',
      'Countdown timers and Unix timestamp converters round out the suite. Whether you need to convert a Unix epoch to a human-readable date, determine if a year is a leap year, or find the day of the week for any historical date, the tools are here. All date math follows ISO 8601 standards and accounts for leap years, ensuring results you can rely on for official, legal, or medical use cases.',
    ],
    faqs: [
      { q: 'How is exact age calculated?', a: 'Exact age is computed by subtracting the birth date from today\'s date, taking into account the precise day and month to determine whether the current birthday has occurred this year yet.' },
      { q: 'Does the calculator account for leap years?', a: 'Yes. All date calculations account for leap years automatically, ensuring accurate day counts across any date range that spans February 29.' },
      { q: 'What is a Unix timestamp?', a: 'A Unix timestamp (epoch time) is the number of seconds elapsed since January 1, 1970, 00:00:00 UTC. It is widely used in programming, databases, and APIs to store and compare dates.' },
    ],
  },

  'calculators/health': {
    intro: 'Free health calculators for BMI, ideal weight, calorie needs, body fat percentage, blood pressure ranges, and more — clear, accurate, and private (all calculations stay in your browser).',
    about: [
      'Understanding your health metrics is a powerful first step toward better wellbeing. CalcSpark\'s health calculators translate clinical formulas into plain-language answers, helping you interpret your BMI, estimate ideal body weight, understand calorie requirements, and track important measurements — all without requiring a medical appointment or app account.',
      'The BMI (Body Mass Index) calculator uses the World Health Organization\'s standard formula — weight in kilograms divided by height in meters squared — to place you in an underweight, normal, overweight, or obese category. While BMI doesn\'t account for muscle mass or fat distribution, it remains the most widely used population-level screening tool. The ideal body weight calculator provides ranges based on Hamwi, Devine, and Robinson formulas, giving a broader picture than any single number.',
      'The basal metabolic rate (BMR) calculator uses the Mifflin-St Jeor equation — the gold standard recommended by the Academy of Nutrition and Dietetics — to estimate how many calories your body burns at rest. Pair it with the TDEE (Total Daily Energy Expenditure) tool to factor in your activity level and get a personalized daily calorie target for weight maintenance, loss, or gain.',
      'Additional health tools include a body fat percentage estimator using the U.S. Navy method, a waist-to-hip ratio calculator for cardiovascular risk screening, a blood alcohol content (BAC) estimator, and a calorie deficit/surplus planner. These tools are designed for general informational purposes and are based on peer-reviewed formulas — but always consult a qualified healthcare professional for medical decisions.',
    ],
    faqs: [
      { q: 'Is BMI an accurate measure of health?', a: 'BMI is a useful screening tool but has limitations — it doesn\'t distinguish fat from muscle, bone density, or fat distribution. Athletes may have a "high" BMI despite low body fat. Use it alongside other metrics for a fuller picture.' },
      { q: 'What is the most accurate BMR formula?', a: 'The Mifflin-St Jeor equation is widely considered the most accurate for most adults and is recommended by the Academy of Nutrition and Dietetics. It factors in age, sex, height, and weight.' },
      { q: 'Are these health calculators a substitute for medical advice?', a: 'No. These calculators provide general informational estimates based on validated formulas. Always consult a qualified healthcare professional before making health or medical decisions.' },
    ],
  },

  'calculators/fitness': {
    intro: 'Reach your training goals faster with free fitness calculators for TDEE, macros, max heart rate, one-rep max, pace, VO2 max, and calories burned — science-backed and instantly calculated.',
    about: [
      'Effective fitness programming is grounded in numbers. Whether you\'re preparing for a marathon, trying to build muscle, or simply establishing a consistent exercise habit, the right calculations help you train smarter, recover better, and progress faster. CalcSpark\'s fitness calculators are built around exercise science formulas used by certified personal trainers, strength coaches, and sports dietitians.',
      'The TDEE (Total Daily Energy Expenditure) calculator combines your BMR with an activity multiplier to give you a realistic daily calorie target. Choose from sedentary to very active and see exactly how many calories to eat for your goal — whether that\'s a calorie surplus for muscle gain, a deficit for fat loss, or maintenance for body recomposition. The macro calculator then splits those calories into optimal protein, carbohydrate, and fat targets based on your goal and body weight.',
      'Strength athletes will find the one-rep max (1RM) calculator invaluable. Enter a weight you can lift for multiple reps and the tool uses the Epley, Brzycki, or Lander formula to estimate your true maximum — allowing you to program percentages for powerlifting and strength phases without maxing out every session. Heart rate zone calculators use the Karvonen formula and your resting heart rate to define precise zones for endurance, tempo, and interval training.',
      'Additional tools include a running pace calculator (converting between pace per mile/km and race finish times), a calories-burned estimator using MET values for dozens of activities, a body fat change tracker, and a hydration needs calculator. All tools are built on peer-reviewed exercise science research and update as you type, giving you instant feedback during workout planning.',
    ],
    faqs: [
      { q: 'What is TDEE and why does it matter?', a: 'TDEE is Total Daily Energy Expenditure — the total calories your body burns in a day including rest, movement, and digestion. Matching calorie intake to your TDEE determines whether you gain, lose, or maintain weight.' },
      { q: 'How accurate is the one-rep max calculator?', a: 'One-rep max estimates from submaximal lifts are typically within 5–10% of your true max. They are useful for programming percentages but should be treated as estimates, not precise measurements.' },
      { q: 'What are heart rate zones used for?', a: 'Heart rate zones (usually 5 zones from easy to maximum effort) help athletes train at the right intensity for each workout goal — building aerobic base, improving lactate threshold, or developing speed.' },
    ],
  },

  'calculators/transportation': {
    intro: 'Calculate fuel costs, MPG, road trip expenses, car lease payments, speed-distance-time, and emission estimates with free transportation and automotive calculators.',
    about: [
      'Every journey — whether a daily commute or a cross-country road trip — has a cost. CalcSpark\'s transportation calculators help you understand exactly what you\'re spending on fuel, anticipate lease or loan payments, optimize your driving habits for fuel efficiency, and plan trips with accurate time and distance estimates.',
      'The fuel cost calculator asks for your vehicle\'s fuel efficiency (MPG or L/100km), fuel price, and trip distance to tell you exactly how much that drive will cost. Use it to compare driving versus flying, evaluate whether a hybrid or EV makes financial sense at your commute distance, or budget for a vacation road trip. The MPG calculator works in reverse — enter gallons used and miles driven to measure your vehicle\'s real-world fuel economy and track it over time.',
      'The car lease payment calculator breaks down monthly payments based on capitalized cost, residual value, money factor, and term — the four numbers that determine every lease deal. Understanding these variables puts you in a stronger negotiating position at the dealership. The auto loan calculator handles financing scenarios with customizable down payments, trade-in values, and interest rates, displaying full amortization schedules.',
      'Speed, distance, and time calculators help with trip planning, safety analysis, and physics homework. The speed calculator handles mph, km/h, m/s, and knots conversions. Emission calculators estimate your vehicle\'s carbon footprint based on fuel type and consumption, useful for corporate sustainability reporting and personal carbon-offset planning. All tools work instantly in your browser with no sign-up needed.',
    ],
    faqs: [
      { q: 'How do I calculate fuel cost for a road trip?', a: 'Divide the total trip distance by your vehicle\'s MPG (or L/100km) to get fuel volume, then multiply by the price per gallon or liter. Our fuel cost calculator does this automatically with real-time input.' },
      { q: 'What is a money factor in a car lease?', a: 'The money factor is the financing rate used in lease calculations. Multiply it by 2,400 to convert it to an approximate equivalent APR. A lower money factor means cheaper financing costs.' },
      { q: 'How is MPG calculated?', a: 'MPG = Miles Driven / Gallons of Fuel Used. For metric calculations, L/100km = (Liters Used / Distance in km) × 100.' },
    ],
  },

  'calculators/construction': {
    intro: 'Estimate materials accurately with free construction calculators for concrete, paint, tiles, flooring, gravel, bricks, drywall, lumber, and more — designed for contractors, DIYers, and homeowners.',
    about: [
      'Accurate material estimation is one of the most critical skills in construction and home improvement. Ordering too little means costly project delays; ordering too much wastes money and creates disposal headaches. CalcSpark\'s construction calculators use industry-standard formulas to give you reliable quantity estimates for dozens of building materials.',
      'The concrete calculator computes cubic yards or cubic meters of concrete needed for slabs, footings, columns, and walls. Enter your dimensions and it automatically factors in standard waste allowances. The paint coverage calculator determines how many gallons of paint you need based on room dimensions, number of coats, and doors/windows to subtract — accounting for the typical coverage rate of 350–400 square feet per gallon.',
      'Tile and flooring calculators handle both rectangular rooms and irregular spaces. Enter the room area, tile size, and desired waste percentage (typically 10–15% for cuts and breakage) to get the exact number of tiles to purchase. The gravel, topsoil, and mulch calculator converts coverage area and depth to cubic yards or tons, with approximate cost estimates when you enter price per yard.',
      'Other tools include a brick-and-mortar calculator (accounting for joint width and waste), a drywall calculator for walls and ceilings, a lumber board-feet calculator, a roofing calculator for shingles, and a staircase calculator for rise, run, and total steps. All formulas follow building industry norms used by general contractors and project managers. Add 10–15% waste factor to any estimate for real-world projects.',
    ],
    faqs: [
      { q: 'How much concrete do I need for a 10×10 slab at 4 inches thick?', a: 'Volume = 10 ft × 10 ft × 0.333 ft = 33.3 cubic feet = 1.23 cubic yards. Add 10% for waste, so order approximately 1.35 cubic yards.' },
      { q: 'How many tiles do I need for a 200 sq ft room?', a: 'Divide room area by tile area (in the same unit). For 12×12 inch tiles, that\'s 200 tiles for 200 sq ft. Always add 10–15% for cuts and breakage, so purchase 220–230 tiles.' },
      { q: 'How much paint do I need to paint a room?', a: 'Measure total wall area (perimeter × height), subtract door/window area, then divide by the paint\'s coverage rate (usually 350 sq ft/gallon). Multiply by number of coats.' },
    ],
  },

  'calculators/mathematics': {
    intro: 'Free online math calculators for percentages, fractions, exponents, LCM, GCF, logarithms, scientific notation, ratios, and more — instant results, step-by-step explanations.',
    about: [
      'Mathematics is the language of logic, and having reliable tools for everyday arithmetic and algebra makes learning and problem-solving faster. CalcSpark\'s math calculator collection covers the full range from basic percentage calculations to exponents, logarithms, factoring, and modular arithmetic — useful for students, engineers, accountants, and anyone working with numbers.',
      'The percentage calculator handles three common scenarios: finding what percent one number is of another, calculating a percentage of a value, and computing percent change or difference between two numbers. The fraction calculator performs addition, subtraction, multiplication, and division on fractions, simplifying the result to its lowest terms and optionally converting to decimals or mixed numbers.',
      'For number theory and algebra, the LCM (Least Common Multiple) and GCF (Greatest Common Factor) calculators support multiple inputs, making them perfect for fraction work and scheduling problems. The exponent and scientific notation converters handle large and small numbers cleanly, while the logarithm calculator computes base-2, base-10, and natural log (ln) values. A ratio calculator expresses any two quantities in their simplest ratio form.',
      'Additional tools include a square root / cube root calculator, a prime factorization tool, a modulo calculator for divisibility and programming uses, a rounding calculator with configurable decimal places, and a number base converter (binary, octal, hexadecimal, decimal). Each tool displays not just the answer but also the formula used, turning every calculation into a learning moment suitable for students from middle school through university level.',
    ],
    faqs: [
      { q: 'How do I calculate percentage change?', a: 'Percentage change = ((New Value − Old Value) / |Old Value|) × 100. A positive result is an increase; negative is a decrease.' },
      { q: 'What is the difference between LCM and GCF?', a: 'GCF (Greatest Common Factor) is the largest number that divides two numbers evenly. LCM (Least Common Multiple) is the smallest number that both divide into evenly. Both are fundamental to fraction arithmetic.' },
      { q: 'How are logarithms used in real life?', a: 'Logarithms appear in pH calculations (chemistry), decibel scales (acoustics), earthquake magnitudes (Richter scale), finance (compound growth), and algorithm complexity analysis in computer science.' },
    ],
  },

  'calculators/geometry': {
    intro: 'Calculate area, perimeter, volume, diagonal, and surface area for circles, triangles, rectangles, polygons, cones, spheres, and cylinders with free geometry calculators.',
    about: [
      'Geometry underpins architecture, engineering, design, manufacturing, and everyday problem-solving. Whether you need to figure out how much carpet covers an irregular floor, find the volume of a storage tank, or solve a homework problem, CalcSpark\'s geometry calculators handle every common two-dimensional and three-dimensional shape with precision.',
      'For 2D shapes, the area and perimeter calculator supports rectangles, squares, circles, triangles (all types), parallelograms, trapezoids, ellipses, and regular polygons. Enter the known dimensions and the calculator returns all properties simultaneously — area, perimeter, diagonal, and for circles, circumference and sector properties. The triangle calculator supports all three types (equilateral, isosceles, scalene) and uses the Heron\'s formula for area when all three sides are known.',
      'For 3D shapes, the volume and surface area calculator covers cubes, rectangular prisms, cylinders, cones, spheres, pyramids, and frustums. These are essential for engineering applications like tank sizing, packaging design, and material volume estimation. The sphere calculator is particularly useful for tanks and domes — enter radius to get volume in liters or gallons, and surface area in square meters or square feet.',
      'Advanced geometric tools include the Pythagorean theorem calculator (for finding any side of a right triangle), a coordinate geometry tool for distance and midpoint between two points, a polygon area calculator using the shoelace formula, and a sector/arc length calculator for circular segments. All results are displayed in both metric and imperial units where applicable, making them useful for users worldwide.',
    ],
    faqs: [
      { q: 'How do I find the area of an irregular shape?', a: 'Break the irregular shape into regular shapes (rectangles, triangles, etc.), calculate each area separately, then add or subtract them. For precise measurements, use the shoelace formula with coordinate geometry.' },
      { q: 'What is the formula for the volume of a cylinder?', a: 'Volume = π × r² × h, where r is the radius of the circular base and h is the height. For a cylinder with radius 3m and height 5m: V = π × 9 × 5 ≈ 141.37 cubic meters.' },
      { q: 'How is Heron\'s formula used?', a: 'Heron\'s formula finds triangle area when all three sides are known: Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2 is the semi-perimeter.' },
    ],
  },

  'calculators/trigonometry': {
    intro: 'Calculate sine, cosine, tangent, inverse trig functions, law of sines, law of cosines, and solve triangles completely with free online trigonometry calculators.',
    about: [
      'Trigonometry is essential in physics, engineering, surveying, architecture, navigation, and computer graphics. CalcSpark\'s trigonometry calculators cover the complete set of trig functions — sin, cos, tan, and their inverses — as well as the laws of sines and cosines for solving any triangle given partial information.',
      'The basic trig function calculator accepts angles in degrees or radians and returns sin, cos, and tan values simultaneously. It also computes the reciprocal functions — cosecant (csc), secant (sec), and cotangent (cot) — which appear in physics and advanced math. The inverse trig calculator (arcsin, arccos, arctan) converts a ratio back to an angle, essential for finding unknown angles in real-world applications like roof pitch and ramp gradients.',
      'The triangle solver is one of the most powerful tools in the suite. Given any combination of angles and sides (ASA, SAS, SSS, or AAS), it applies the law of sines and law of cosines to compute all remaining angles and sides. This is invaluable for land surveying, structural engineering, and navigation problems where direct measurement of all sides is impossible.',
      'Unit conversion between degrees, radians, and gradians is built in throughout. The angle converter also handles arcminutes and arcseconds, the standard units in astronomy and precise navigation. Additional tools include a trig identity verifier, a reference angle calculator, and a coterminal angle calculator for simplifying angular measurements in cyclical systems like robotics and signal processing.',
    ],
    faqs: [
      { q: 'When should I use degrees vs radians?', a: 'Use degrees for everyday navigation, construction, and most engineering work. Radians are the natural unit in pure mathematics and physics — they simplify calculus formulas and are used in programming math libraries.' },
      { q: 'What is the law of cosines used for?', a: 'The law of cosines (c² = a² + b² − 2ab·cos(C)) solves triangles when you know all three sides (SSS) or two sides and the included angle (SAS). It generalizes the Pythagorean theorem for non-right triangles.' },
      { q: 'What is SOHCAHTOA?', a: 'SOHCAHTOA is a mnemonic for right-triangle trig ratios: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.' },
    ],
  },

  'calculators/statistics': {
    intro: 'Free statistics calculators for mean, median, mode, standard deviation, variance, z-score, p-value, confidence intervals, correlation, and regression — used by students, analysts, and researchers.',
    about: [
      'Statistical analysis transforms raw data into actionable insight. Whether you\'re analyzing survey results, running a scientific experiment, or building a data model, CalcSpark\'s statistics calculators handle descriptive statistics, probability distributions, and inferential tests quickly and accurately.',
      'The descriptive statistics calculator takes a list of numbers and instantly returns mean, median, mode, range, variance, standard deviation, quartiles, and interquartile range (IQR). These measures of central tendency and spread are the foundation of any data analysis workflow. The standard deviation calculator supports both population (σ) and sample (s) versions, crucial for correctly interpreting research data.',
      'For inferential statistics, the z-score calculator converts any raw data point to a standardized score indicating how many standard deviations it lies from the mean — essential for identifying outliers and calculating probabilities from the normal distribution. The p-value calculator and critical value tables support one-tailed and two-tailed hypothesis tests, making it straightforward to evaluate whether experimental results are statistically significant at the α = 0.05 or α = 0.01 level.',
      'Additional tools include a confidence interval calculator (for both proportions and means), a correlation coefficient calculator (Pearson r), a simple linear regression tool with slope and intercept output, a chi-square goodness-of-fit calculator, and a sample size estimator for planning surveys and experiments. All calculations use standard formulas from the AP Statistics, college-level statistics, and professional analytics curricula.',
    ],
    faqs: [
      { q: 'What is the difference between population and sample standard deviation?', a: 'Population standard deviation (σ) divides by N; sample standard deviation (s) divides by N−1 (Bessel\'s correction) to account for the fact that a sample underestimates the true population spread.' },
      { q: 'How do I interpret a p-value?', a: 'A p-value below your significance threshold (typically 0.05) means the result is statistically significant — the observed effect is unlikely due to chance alone. It doesn\'t measure practical significance or the size of the effect.' },
      { q: 'What is a z-score?', a: 'Z = (X − μ) / σ. It tells you how many standard deviations a value is from the mean. A z-score of 2.0 means the value is two standard deviations above the mean, placing it roughly in the top 2.3% of a normal distribution.' },
    ],
  },

  'calculators/physics': {
    intro: 'Solve physics problems instantly with free calculators for Ohm\'s law, kinetic energy, Newton\'s laws, momentum, force, work, power, gravitational potential energy, and more.',
    about: [
      'Physics calculators are used by students, engineers, electricians, and scientists to apply fundamental principles quickly and accurately. CalcSpark\'s physics calculator suite covers mechanics, electromagnetism, thermodynamics, and wave physics — using the exact formulas taught in high school AP Physics and university physics courses worldwide.',
      'The Ohm\'s law calculator — one of the most popular on the site — computes voltage (V), current (I), or resistance (R) given the other two, using the fundamental relation V = IR. It also calculates power (P = IV) simultaneously, making it the go-to tool for electronics troubleshooting, circuit design, and electrical engineering coursework. The power factor and three-phase power calculators extend these calculations to AC electrical systems.',
      'In classical mechanics, the kinetic energy calculator (KE = ½mv²), potential energy calculator (PE = mgh), and work-energy theorem calculator help students understand conservation of energy and solve projectile, pulley, and inclined-plane problems. Newton\'s second law calculator (F = ma) handles multi-force scenarios with unit conversions between Newtons, pounds-force, and dynes.',
      'Additional tools include a momentum and impulse calculator, a projectile motion calculator (range, height, time of flight), a wavelength-frequency-speed converter, a gravitational force calculator (Newton\'s law of gravitation), and a pressure calculator. All tools display intermediate steps and the formula being applied, making them excellent study tools alongside your physics textbook.',
    ],
    faqs: [
      { q: 'What is Ohm\'s law?', a: 'Ohm\'s law states V = IR: Voltage (V) equals Current (I) multiplied by Resistance (R). Knowing any two values lets you calculate the third, forming the basis of circuit analysis.' },
      { q: 'How is kinetic energy calculated?', a: 'KE = ½ × mass × velocity². A 10 kg object moving at 5 m/s has KE = ½ × 10 × 25 = 125 joules.' },
      { q: 'What is the difference between mass and weight?', a: 'Mass is the amount of matter (measured in kg), invariant everywhere. Weight is the gravitational force on that mass (measured in Newtons) — on Earth, Weight = mass × 9.81 m/s².' },
    ],
  },

  'calculators/data': {
    intro: 'Free data and digital storage calculators for RAID configurations, download time estimation, bandwidth requirements, and file size conversions — essential for IT professionals and developers.',
    about: [
      'Digital storage and network calculations are daily necessities in IT, systems administration, and software engineering. CalcSpark\'s data calculators cover RAID configurations, download time, bandwidth planning, and storage unit conversions — saving time and reducing manual calculation errors in infrastructure work.',
      'The RAID calculator supports RAID 0, 1, 5, 6, and 10 configurations. Enter the number of drives and size per drive to instantly see usable storage, redundancy level, minimum drive count, and read/write performance characteristics. This is invaluable when designing NAS systems, enterprise storage arrays, and backup infrastructures where balancing capacity, performance, and fault tolerance is critical.',
      'The download time calculator takes a file size (in any unit — bytes to terabytes) and connection speed (in Mbps, Gbps, or Kbps) to estimate how long a transfer will take. Use it to plan large backup windows, estimate software deployment times, or advise clients on bandwidth requirements. The bandwidth calculator works in reverse: given a time constraint and file size, it tells you the minimum connection speed needed.',
      'Storage unit conversions handle the full hierarchy from bits to petabytes — in both SI (base-10) and binary (base-2) prefixes, so you can distinguish between a marketed gigabyte (1,000,000,000 bytes) and a computing gibibyte (1,073,741,824 bytes). This distinction matters in disk capacity reporting, RAM specification, and OS-level storage readings.',
    ],
    faqs: [
      { q: 'How long does it take to download a 10 GB file on a 100 Mbps connection?', a: '10 GB = 80,000 Mb. At 100 Mbps, download time = 80,000 / 100 = 800 seconds ≈ 13.3 minutes. Our download time calculator handles this instantly with any file size and speed.' },
      { q: 'What is the difference between GB and GiB?', a: '1 GB (gigabyte) = 1,000,000,000 bytes (SI definition used by storage manufacturers). 1 GiB (gibibyte) = 1,073,741,824 bytes (binary definition used by operating systems). A "1 TB" drive shows as ~931 GiB in Windows.' },
      { q: 'What RAID level gives the best balance of speed and redundancy?', a: 'RAID 5 is the most popular balance — one drive can fail without data loss, and usable space is (N−1) × drive size. RAID 6 tolerates two failures at the cost of more overhead. RAID 10 offers best performance with 50% space efficiency.' },
    ],
  },

  'calculators/cryptography': {
    intro: 'Generate MD5, SHA-1, SHA-256, and SHA-512 hashes, encode or decode Base64, and compute HMAC values entirely in your browser — private, instant, and free.',
    about: [
      'Cryptographic hash functions are foundational to modern software security, data integrity verification, and password storage. CalcSpark\'s cryptography tools let developers, sysadmins, and security professionals generate and verify hashes without installing software or sending sensitive data to a third-party server.',
      'The MD5 hash generator creates a 128-bit hex digest from any text input. While MD5 is no longer considered cryptographically secure for passwords or digital signatures (due to collision vulnerabilities), it remains widely used for file integrity checksums, non-security identifiers, and legacy system compatibility. The SHA-1 generator produces a 160-bit digest and is still used in some legacy certificate and git object systems.',
      'For security-sensitive applications, the SHA-256 and SHA-512 generators follow NIST FIPS 180-4 standards. SHA-256 is the most widely deployed hash in TLS/SSL certificates, Bitcoin mining, and API request signing. SHA-512 provides greater collision resistance and is preferred in high-security contexts. The HMAC calculator generates keyed hashes for API authentication, supporting HMAC-MD5, HMAC-SHA256, and HMAC-SHA512.',
      'The Base64 encoder/decoder converts binary or text data to a URL-safe text representation — ubiquitous in HTTP headers (Authorization: Bearer), email attachments (MIME), and JSON web tokens (JWTs). All operations run entirely in your browser using the Web Crypto API and native JavaScript — no data is transmitted anywhere, making these tools safe for processing credentials and sensitive configuration strings.',
    ],
    faqs: [
      { q: 'Is MD5 safe for passwords?', a: 'No. MD5 is vulnerable to collision attacks and can be reversed using rainbow tables. Use bcrypt, Argon2, or scrypt for password hashing. MD5 is still acceptable for file integrity checks where security attacks are not a concern.' },
      { q: 'What is the difference between hashing and encryption?', a: 'Hashing is one-way — you cannot recover the original data from a hash. Encryption is reversible with the right key. Hashes are used for integrity verification; encryption is used for confidentiality.' },
      { q: 'Why is SHA-256 used in Bitcoin?', a: 'Bitcoin\'s proof-of-work system requires miners to find a nonce that makes the SHA-256 hash of a block header start with a specific number of leading zeros. SHA-256 is used twice (double-SHA-256) for added security.' },
    ],
  },

  'calculators/cooking': {
    intro: 'Scale recipes, convert butter sticks to grams, calculate coffee-to-water ratios, find dough hydration percentages, and convert cooking measurements instantly with free cooking calculators.',
    about: [
      'Cooking is a blend of art and science, and the science part often comes down to ratios, weights, and temperatures. CalcSpark\'s cooking calculators help home bakers, professional chefs, food bloggers, and recipe developers work with measurements precisely — eliminating guesswork when scaling up for a crowd or scaling down for a single portion.',
      'The recipe scaler is perhaps the most universally useful cooking tool: enter your recipe\'s original serving size, the ingredients and their quantities, and your target serving count. Every ingredient scales instantly and proportionally. This is essential for catering, meal prep, and professional kitchen production where recipes written for 4 need to serve 40 or 400.',
      'For bakers, the dough hydration calculator computes the water-to-flour ratio as a percentage — the single most important variable in bread baking that determines crumb structure, crust character, and fermentation behavior. A baguette sits at 65–70% hydration; ciabatta at 75–80%; focaccia at 80–90%. The coffee ratio calculator similarly expresses the brew ratio (grams of coffee to grams of water) for espresso, pour-over, French press, and cold brew.',
      'Unit conversion tools translate between cups, tablespoons, teaspoons, milliliters, and fluid ounces for liquids, and between grams, ounces, and pounds for dry ingredients. The butter converter is particularly popular, converting sticks to cups, tablespoons, grams, and ounces. A temperature converter handles Fahrenheit-Celsius-Kelvin conversions for oven settings, candy stages, and meat doneness temperatures.',
    ],
    faqs: [
      { q: 'How do I scale a recipe from 4 servings to 12?', a: 'Multiply every ingredient quantity by 3 (12 ÷ 4). The recipe scaler does this automatically for any number of ingredients — enter original servings, new servings, and all quantities scale proportionally.' },
      { q: 'What is dough hydration?', a: 'Hydration = (weight of water / weight of flour) × 100%. A recipe with 500g flour and 350g water is 70% hydration. Higher hydration creates open, chewy crumb; lower hydration produces denser, tighter bread.' },
      { q: 'How many grams is one stick of butter?', a: 'One US stick of butter = 113g = 4 oz = ½ cup = 8 tablespoons. Our butter converter handles all these equivalencies simultaneously.' },
    ],
  },

  'calculators/other': {
    intro: 'Free miscellaneous calculators for tips, discounts, grade and GPA, lottery odds, random number generation, and dozens of other everyday calculations — no sign-up, instant results.',
    about: [
      'Not every calculation fits neatly into a single subject category. CalcSpark\'s "Other" collection gathers the everyday utility calculators that millions of people search for daily — tip splitters, discount price calculators, grade and GPA tools, lottery probability estimators, and more. These are the tools you open on your phone at a restaurant, in a classroom, or when curiosity strikes.',
      'The tip calculator is one of the most frequently used tools on the entire site. Enter the bill total, desired tip percentage (10%, 15%, 18%, 20%, or a custom amount), and number of people splitting the bill to instantly see the tip amount, each person\'s share, and the grand total per person. The percent-off calculator handles sale prices — enter the original price and discount percentage to see both the savings amount and the final sale price.',
      'For students, the grade calculator accepts any number of assignments with individual weights and calculates the weighted average grade and letter grade equivalent. The GPA calculator converts grades to the 4.0 scale used by most US universities, supporting both weighted and unweighted calculations. The final grade needed calculator works backward: tell it your current grade, desired final grade, and how much the final exam is worth — it tells you exactly what score you need.',
      'The lottery odds calculator uses the combination formula C(n,r) to compute the exact probability of winning any lottery — Powerball, Mega Millions, EuroMillions, or custom formats. Seeing the actual odds (often 1 in 292 million for Powerball jackpots) provides useful mathematical perspective. The random number generator creates cryptographically random values within any range, useful for games, selections, and statistical sampling.',
    ],
    faqs: [
      { q: 'How much should I tip at a restaurant?', a: 'The standard restaurant tip in the US is 15–20% of the pre-tax bill for adequate to excellent service. Our tip calculator lets you choose any percentage and splits the total among any number of people.' },
      { q: 'How is GPA calculated on a 4.0 scale?', a: 'Each letter grade maps to a point value (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0). GPA = sum of (grade points × credit hours) / total credit hours. Our GPA calculator handles weighted and unweighted calculations.' },
      { q: 'What are the odds of winning Powerball?', a: 'The odds of winning the Powerball jackpot are 1 in 292,201,338. You\'re significantly more likely to be struck by lightning (1 in 15,300 lifetime odds). Our lottery calculator computes exact odds for any lottery format.' },
    ],
  },

  /* ──────── CONVERTER CATEGORIES ──────── */

  'converters/dimensions': {
    intro: 'Convert length and dimension measurements instantly — meters to feet, centimeters to inches, millimeters to yards, and more — with free online length unit converters.',
    about: [
      'Length and dimension conversions arise constantly in construction, engineering, fashion, manufacturing, real estate, and everyday life. The world uses two primary systems — the metric system (meters, centimeters, millimeters) and the imperial/US customary system (feet, inches, yards, miles) — and converting between them accurately is essential for international projects and product specifications.',
      'The meter-to-foot converter is among the most searched unit converters globally. The conversion factor is 1 meter = 3.28084 feet (or exactly 1 meter = 100/2.54 × 12 = 3.280839895 feet by definition). For architectural drawings, engineering specifications, and interior design, the centimeter-to-inch converter (1 cm = 0.393701 in) is indispensable. Both conversions round to as many decimal places as you need.',
      'Smaller dimensions — millimeters to inches (1 mm = 0.0393701 in) — matter in precision manufacturing, jewelry, typography, and electronics. A standard credit card is 85.6 mm × 53.98 mm; a smartphone screen might be measured in both millimeters and inches. The nanometer converter extends to the microscale for semiconductor fabrication and optics, where chip features are measured in nanometers and light wavelengths span 400–700 nm.',
      'Larger scales are covered by kilometer, mile, league, and nautical mile converters. The nautical mile (1 nm = 1,852 m exactly) is defined by the international standard and used in aviation and maritime navigation. All converters support fractional input (like 5 feet 11 inches) and display results in up to ten common units simultaneously, saving you from running multiple conversions.',
    ],
    faqs: [
      { q: 'How many centimeters are in an inch?', a: 'Exactly 2.54 centimeters = 1 inch, by international definition since 1959. This is a fixed, exact conversion — not an approximation.' },
      { q: 'How many feet are in a meter?', a: '1 meter = 3.28084 feet (approximately). More precisely, 1 meter = 100/2.54 × 12 inches = 3.280839895... feet.' },
      { q: 'What is a nautical mile?', a: 'One nautical mile = 1,852 meters exactly (international standard). It was originally defined as one arc-minute of latitude, making it natural for navigation. 1 nautical mile ≈ 1.15078 statute miles.' },
    ],
  },

  'converters/distance': {
    intro: 'Convert distance units instantly — kilometers to miles, miles to km, meters to yards, light-years to kilometers, and more — free, accurate, and updated as you type.',
    about: [
      'Distance measurement is fundamental to travel planning, navigation, athletics, astronomy, and logistics. Whether you\'re planning a road trip and need to convert kilometers to miles, training for a race in a country that uses different units, or working with astronomical distances, the right converter makes the job effortless.',
      'The kilometer-to-mile converter is the most globally used distance conversion: 1 kilometer = 0.621371 miles. Road distances in Europe, Asia, and Australia are posted in kilometers; the US, UK, and a few others use miles. For runners and cyclists, converting between the two pace systems (min/km and min/mile) is equally important — our pace converter handles this alongside the distance conversion.',
      'At larger scales, the converter handles megameters, gigameters, and astronomical units (AU) — 1 AU = 149,597,870.7 km, the mean distance between the Earth and the Sun. Light-years (1 ly ≈ 9.461 × 10¹² km) and parsecs (1 pc ≈ 3.086 × 10¹³ km) cover the distances used in astronomy and astrophysics. For ocean and aviation navigation, nautical miles and knots remain the standard.',
      'Microscale distances appear in physics, biology, and materials science: micrometers (µm), nanometers (nm), and angstroms (Å = 0.1 nm). DNA strand width is roughly 2 nm; a human hair is about 70 µm; a red blood cell is 6–8 µm. All our distance converters update results in real time as you type, displaying the converted value in multiple units at once.',
    ],
    faqs: [
      { q: 'How many miles is 5 kilometers?', a: '5 km × 0.621371 = 3.107 miles. A 5K race is 3.107 miles.' },
      { q: 'What is an astronomical unit (AU)?', a: 'One AU = 149,597,870.7 km — the mean distance from Earth to the Sun, used as a convenient unit for measuring distances within the solar system.' },
      { q: 'How far is a light-year in kilometers?', a: 'One light-year ≈ 9.461 × 10¹² km (about 9.461 trillion kilometers) — the distance light travels through a vacuum in one year.' },
    ],
  },

  'converters/area': {
    intro: 'Convert area measurements between square meters, square feet, acres, hectares, square miles, and more — free online area unit converter with instant results.',
    about: [
      'Area measurement conversions are needed across real estate, agriculture, urban planning, interior design, and geography. The two most common area units globally are square meters (m²) in the metric world and square feet (ft²) in the US/UK — converting between them is a daily necessity for international property transactions, construction projects, and architectural drawings.',
      'The square meter to square foot conversion (1 m² = 10.7639 ft²) is fundamental in real estate: a 100 m² apartment equals 1,076.4 ft². For large plots of land, acres and hectares dominate. One acre = 4,046.86 m² = 0.404686 hectares; one hectare = 10,000 m² = 2.47105 acres. These conversions are essential for agricultural land assessment, urban zoning, and property valuations.',
      'For even larger geographic areas, the converter handles square kilometers (1 km² = 100 hectares = 247.105 acres) and square miles (1 mi² = 640 acres = 2.58999 km²). City sizes, national parks, and country areas are often compared using both square kilometers and square miles in international reporting. The converter supports all these scales in a single input-output interface.',
      'At the smaller end, square centimeters, square millimeters, and square inches handle engineering drawings, tile sizing, textile patterns, and screen area calculations. A 15.6-inch laptop screen has an area of roughly 1,226 cm²; a standard A4 sheet of paper is 623.7 cm². Our area converter handles all these scales with high-precision conversions accurate to at least six significant figures.',
    ],
    faqs: [
      { q: 'How many square feet are in an acre?', a: 'Exactly 43,560 square feet in one acre. One acre = 4,046.86 square meters = 0.404686 hectares.' },
      { q: 'How do I convert square meters to square feet?', a: 'Multiply by 10.7639. So 50 m² = 50 × 10.7639 = 538.2 ft². Reversing: 1 ft² = 0.0929 m².' },
      { q: 'What is the difference between a hectare and an acre?', a: '1 hectare = 10,000 m² = 2.471 acres. 1 acre = 4,047 m² = 0.4047 hectares. Hectares are used in metric countries (agriculture, land area); acres are used in the US and UK.' },
    ],
  },

  'converters/volume': {
    intro: 'Convert volume units — liters to gallons, milliliters to cups, cubic meters to cubic feet, fluid ounces to milliliters, and more — with a free, accurate online volume converter.',
    about: [
      'Volume conversions are essential in cooking, chemistry, fuel measurement, shipping, and engineering. The global split between metric (liters, milliliters, cubic meters) and US customary (gallons, quarts, cups, fluid ounces) units creates conversion needs in everyday life, manufacturing, and trade.',
      'The liter to gallon converter handles both US gallons (1 L = 0.264172 US gal) and UK/Imperial gallons (1 L = 0.219969 UK gal) — these differ by about 20%, and confusing them in fuel calculations, tank sizing, or recipe conversions can cause significant errors. At the fuel pump, a car\'s 60-liter tank holds about 15.85 US gallons or 13.2 UK gallons.',
      'In cooking, the milliliter-to-cup converter (1 US cup = 236.588 mL) and tablespoon/teaspoon conversions (1 tbsp = 14.787 mL; 1 tsp = 4.929 mL) are constant needs. International recipe conversions become seamless with our fluid ounce and cup converters. The dry volume converter handles bushels, pecks, and quarts used in agriculture and grain trading.',
      'Industrial and engineering applications require cubic conversions: 1 cubic meter = 1,000 liters = 264.172 US gallons. Tank capacity, concrete volume, and shipping container volumes are measured in cubic meters, cubic feet, or cubic yards. 1 cubic foot = 28.3168 liters = 7.481 US gallons. Our converter handles all scales from microliters (µL, used in lab pipettes) to cubic kilometers (used in hydrology and oceanography).',
    ],
    faqs: [
      { q: 'How many liters are in a gallon?', a: '1 US gallon = 3.78541 liters. 1 UK (Imperial) gallon = 4.54609 liters. These are different — always specify which gallon system you\'re using.' },
      { q: 'How many cups are in a liter?', a: '1 liter = 4.22675 US cups. 1 US cup = 236.588 mL.' },
      { q: 'How many milliliters are in a fluid ounce?', a: '1 US fluid ounce = 29.5735 mL. 1 UK fluid ounce = 28.4131 mL. A standard shot glass is 1.5 US fl oz = 44.36 mL.' },
    ],
  },

  'converters/speed': {
    intro: 'Convert speed and velocity units — mph to km/h, m/s to mph, knots to km/h, Mach number conversions — instantly with a free online speed unit converter.',
    about: [
      'Speed unit conversion is essential for transportation, aviation, meteorology, athletics, and physics. The dominant speed measurement systems — miles per hour (mph) in the US and UK, kilometers per hour (km/h) in most of the world, and meters per second (m/s) in science — require constant conversion in automotive specifications, sports performance tracking, and wind speed reporting.',
      'The mph to km/h conversion (1 mph = 1.60934 km/h) appears every time a US driver crosses into Canada, an American watches international Formula 1 coverage, or an engineer converts automotive specifications between markets. A US freeway speed limit of 65 mph is 104.6 km/h; a school zone limit of 25 mph is 40.2 km/h. For pedestrians and cyclists, the converter works equally well at walking speed (3 mph = 4.83 km/h).',
      'In aviation and maritime contexts, the knot (nautical mile per hour) is the standard unit. 1 knot = 1.852 km/h = 1.15078 mph. Aircraft airspeed, wind speed in aviation weather reports (METARs), and ship speeds are all in knots. Our knot converter lets you switch instantly between knot, mph, km/h, m/s, and feet per second — all relevant for different professional contexts.',
      'For physics and engineering, meters per second (m/s) is the SI unit. Mach number (speed relative to the speed of sound) depends on altitude and temperature — at sea level and 20°C, Mach 1 ≈ 343 m/s ≈ 1,235 km/h ≈ 767 mph. Our Mach converter uses the standard sea-level value while noting that actual Mach speed varies with conditions. Centimeters per second and feet per second round out the collection for precision scientific and engineering applications.',
    ],
    faqs: [
      { q: 'How do you convert mph to km/h?', a: 'Multiply by 1.60934. So 60 mph = 60 × 1.60934 = 96.56 km/h. To convert km/h to mph, multiply by 0.621371.' },
      { q: 'What is a knot in mph?', a: '1 knot = 1.15078 mph = 1.852 km/h. Knots are used in aviation and maritime navigation because they relate directly to nautical miles (1 knot = 1 nautical mile per hour).' },
      { q: 'How fast is Mach 1?', a: 'At sea level and 20°C (68°F), Mach 1 ≈ 343 m/s ≈ 1,235 km/h ≈ 767 mph. This varies with altitude and temperature — at 30,000 ft, Mach 1 is about 1,091 km/h.' },
    ],
  },

  'converters/date-time': {
    intro: 'Convert time zones, Unix timestamps to human-readable dates, military time to standard time, and more — free online date and time format converters.',
    about: [
      'Time conversion is a universal need in a connected world. Scheduling international meetings, reading server logs, interpreting API timestamps, or understanding a historical date all require reliable time conversion tools. CalcSpark\'s time converters cover timezone conversion, Unix epoch time, military time, and time format standardization.',
      'The timezone converter shows any time in multiple timezones simultaneously — useful for scheduling meetings between teams in New York, London, and Tokyo, or for understanding when a live event starts in your local time. All major IANA timezones are supported, including daylight saving time transitions. A New York meeting at 9 AM EST is 2 PM GMT, 3 PM CET, and 11 PM SGT.',
      'Unix timestamps are a cornerstone of software development: they represent the number of seconds (or milliseconds) since January 1, 1970, 00:00:00 UTC (the Unix epoch). Database timestamps, API responses, log files, and JWT tokens all commonly store time as Unix seconds or milliseconds. Our epoch converter transforms any Unix timestamp to a human-readable date and time in any timezone, and vice versa.',
      'Military time (24-hour clock) eliminates AM/PM ambiguity. 0000 is midnight, 1200 is noon, and 2359 is one minute before midnight. The converter handles the full 24-hour spectrum and is used by the military, hospitals, aviation, and most countries outside the US. ISO 8601 date format conversion (YYYY-MM-DD) rounds out the suite, standardizing dates for international data exchange and sorting.',
    ],
    faqs: [
      { q: 'What is a Unix timestamp?', a: 'A Unix timestamp is the number of seconds elapsed since January 1, 1970 00:00:00 UTC. For example, the timestamp 1700000000 corresponds to November 14, 2023, 22:13:20 UTC.' },
      { q: 'How do I convert 1500 military time to standard time?', a: '1500 in 24-hour time = 3:00 PM. Subtract 1200 from any time ≥ 1300 to get the PM equivalent. Times before 1200 are AM (0900 = 9:00 AM).' },
      { q: 'How do I schedule a meeting across different time zones?', a: 'Use the timezone converter: enter the meeting time and the organizer\'s timezone, then see the equivalent time in each participant\'s timezone. Account for daylight saving time, which changes on different dates in different countries.' },
    ],
  },

  'converters/mathematics': {
    intro: 'Convert between number bases (binary, octal, decimal, hexadecimal), fractions, decimals, Roman numerals, and more with free online math format converters.',
    about: [
      'Mathematical format conversions — especially number base conversions — are daily tasks in programming, computer science, digital electronics, and mathematics education. CalcSpark\'s math converters handle binary, octal, decimal, and hexadecimal conversion, plus fraction-to-decimal, Roman numeral, and scientific notation translation.',
      'Binary (base 2) is the native language of digital computers. Every number, text character, and instruction in a CPU is ultimately stored as a sequence of 0s and 1s. The binary-to-decimal converter shows the place value of each bit position: the rightmost bit represents 2⁰=1, then 2¹=2, 2²=4, 2³=8, and so on. Hexadecimal (base 16) is widely used in programming because two hex digits represent one byte exactly — colors in HTML (#FF5733), memory addresses, and binary data are all commonly written in hex.',
      'Octal (base 8) appears in Unix/Linux file permissions: the chmod value 755 means owner can read/write/execute (7=111 in binary), group can read and execute (5=101), others can read and execute (5=101). Understanding octal and binary together is fundamental to Linux system administration. Our converter handles all four bases simultaneously, showing the same value in decimal, binary, octal, and hex at once.',
      'Fraction to decimal conversion simplifies math homework and recipe measurements. ¾ = 0.75 exactly; ⅓ = 0.3333... (repeating). The converter identifies repeating decimals and expresses them with overbar notation. Roman numeral conversion covers values from 1 (I) to 3,999 (MMMCMXCIX), useful for chapter headings, clock faces, and historical year formatting. Scientific notation conversion handles extremely large (like Avogadro\'s number: 6.022 × 10²³) and extremely small (like electron mass: 9.109 × 10⁻³¹ kg) values.',
    ],
    faqs: [
      { q: 'How do I convert binary to decimal?', a: 'Multiply each binary digit by its place value (powers of 2) and sum. Binary 1011 = 1×8 + 0×4 + 1×2 + 1×1 = 8+0+2+1 = 11 in decimal.' },
      { q: 'Why is hexadecimal used in programming?', a: 'Two hex digits represent exactly one byte (8 bits), making hex a compact, human-readable way to display binary data. It\'s used for memory addresses, color codes, and binary file inspection.' },
      { q: 'How do I read Unix file permissions (like 755)?', a: '755 in octal: 7 = rwx (read+write+execute), 5 = r-x (read+execute), 5 = r-x. The three digits represent owner, group, and other permissions respectively. Binary: 111 101 101.' },
    ],
  },

  'converters/data': {
    intro: 'Convert digital storage units — bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes — in both SI (base-10) and binary (base-2) standards instantly.',
    about: [
      'Digital storage unit confusion is one of the most common sources of misunderstanding in tech: why does your "1 TB" hard drive only show 931 GB in Windows? The answer lies in the difference between marketing units (base-10, SI prefixes) and computing units (base-2, IEC binary prefixes) — and our data storage converter handles both systems with clear labeling.',
      'In the SI system used by storage manufacturers: 1 kilobyte (KB) = 1,000 bytes, 1 megabyte (MB) = 1,000,000 bytes, 1 gigabyte (GB) = 1,000,000,000 bytes, and 1 terabyte (TB) = 1,000,000,000,000 bytes. In the binary system used by operating systems and programming: 1 kibibyte (KiB) = 1,024 bytes, 1 mebibyte (MiB) = 1,048,576 bytes, 1 gibibyte (GiB) = 1,073,741,824 bytes, and 1 tebibyte (TiB) = 1,099,511,627,776 bytes.',
      'A "1 TB" drive marketed at 1,000,000,000,000 bytes equals only 931.32 GiB when Windows displays it using binary GiB units — the "missing" 68.68 GiB is simply the difference between the two counting systems, not lost space. Understanding this distinction is critical for storage procurement, capacity planning, cloud storage pricing, and database administration.',
      'At the network layer, data rates are measured in bits per second (bps, Kbps, Mbps, Gbps, Tbps) — note bits, not bytes. Internet speed of "100 Mbps" means 100 megabits per second, which equals roughly 12.5 megabytes per second transfer speed (divide by 8). Our converter handles bit-to-byte conversions alongside storage unit conversions, covering the full range from individual bits to zettabytes and beyond.',
    ],
    faqs: [
      { q: 'Why does my 1TB hard drive show less than 1TB in Windows?', a: 'Manufacturers use 1 TB = 1,000,000,000,000 bytes (base-10). Windows shows storage in GiB (base-2), where 1 TiB = 1,099,511,627,776 bytes. So 1 TB ÷ 1,073,741,824 = 931.32 GiB — the drive is full-size, just displayed in a different unit.' },
      { q: 'How many MB are in a GB?', a: '1 GB (SI) = 1,000 MB. 1 GiB (binary) = 1,024 MiB. Use SI units for storage marketing and binary units for operating system readouts.' },
      { q: 'What is the difference between Mbps and MBps?', a: 'Mbps = megabits per second (network speed). MBps = megabytes per second (file transfer rate). 1 MBps = 8 Mbps. A 100 Mbps internet connection transfers files at about 12.5 MBps.' },
    ],
  },

  'converters/physics': {
    intro: 'Convert temperature (°C, °F, K), pressure (Pa, bar, psi, atm), energy (joules, BTU, calories, kWh), and other physics units instantly with free online converters.',
    about: [
      'Physics unit conversions span temperature, pressure, energy, force, and power — the fundamental quantities of the physical world. Engineers, scientists, HVAC technicians, chemists, and students all need reliable conversions between the many unit systems that co-exist in science and industry.',
      'Temperature conversion is one of the most common calculations in everyday life. The Fahrenheit to Celsius formula (°C = (°F − 32) × 5/9) must be applied precisely — getting body temperature, oven settings, or weather forecasts wrong can have real consequences. The Kelvin scale (K = °C + 273.15) is the SI standard used in scientific research, thermodynamics, and cryogenics. Absolute zero (0 K = −273.15°C = −459.67°F) is the lowest theoretically possible temperature.',
      'Pressure conversions are critical in engineering, meteorology, and medicine. The SI unit is the pascal (Pa): 1 atmosphere (atm) = 101,325 Pa = 1.01325 bar = 14.696 psi. Tire pressure in the US is measured in psi; in Europe, in bar. Weather systems use hectopascals (hPa) or millibars (1 hPa = 1 mbar). Blood pressure is measured in mmHg (millimeters of mercury). Our pressure converter handles all these units with the precision needed for medical, meteorological, and industrial applications.',
      'Energy conversions connect joules (J, the SI unit) to the practical units used in different fields: kilowatt-hours (kWh) for electricity, British thermal units (BTU) for HVAC and heating, calories (cal) and kilocalories (kcal) for food energy, and electron volts (eV) for particle physics. 1 kWh = 3,600,000 J = 3,412 BTU = 860 kcal. These conversions are essential for energy efficiency analysis, HVAC system sizing, and nutritional science.',
    ],
    faqs: [
      { q: 'How do you convert Fahrenheit to Celsius?', a: '°C = (°F − 32) × 5/9. So 98.6°F (body temperature) = (98.6 − 32) × 5/9 = 66.6 × 0.5556 = 37°C.' },
      { q: 'What is absolute zero in Fahrenheit and Celsius?', a: 'Absolute zero = 0 Kelvin = −273.15°C = −459.67°F. It\'s the theoretical minimum temperature where all thermal motion stops.' },
      { q: 'How many joules are in a kilowatt-hour?', a: '1 kWh = 3,600,000 joules (3.6 MJ). A typical US household uses about 30 kWh per day = 108,000,000 joules of energy daily.' },
    ],
  },

  'converters/cooking': {
    intro: 'Convert cooking measurements — cups to grams, tablespoons to milliliters, ounces to grams, Fahrenheit to Celsius — instantly with free cooking unit converters for any recipe.',
    about: [
      'Cooking measurement conversions are among the most practically important unit conversions in daily life. International recipes routinely mix metric and imperial measurements, and weight-based recipes (grams, ounces) differ fundamentally from volume-based recipes (cups, tablespoons) — especially for baking, where precision is everything.',
      'The cups to grams converter is the most important cooking conversion tool for bakers following weight-based recipes. The catch: the conversion depends entirely on the ingredient. 1 cup of all-purpose flour ≈ 125g; 1 cup of sugar ≈ 200g; 1 cup of honey ≈ 340g; 1 cup of butter ≈ 227g. Our converter includes ingredient-specific density data for the most common baking and cooking ingredients, giving accurate gram weights rather than a generic approximation.',
      'The tablespoon and teaspoon converters handle both US and metric systems: 1 US tablespoon = 14.787 mL; 1 teaspoon = 4.929 mL; 1 cup = 16 tablespoons = 48 teaspoons = 236.588 mL. These conversions are constantly needed for scaling recipes and for cooks who prefer working in a single unit system. The fluid ounce converter (1 US fl oz = 29.574 mL) completes the liquid measurement suite.',
      'Oven temperature conversion between Fahrenheit and Celsius is critical when following recipes from different countries. 350°F = 177°C (moderate oven); 400°F = 204°C (hot oven); 450°F = 232°C (very hot). For fan ovens (convection), typically reduce the temperature by 20°C / 25°F. Weight conversions between ounces and grams (1 oz = 28.3495g) and pounds and kilograms (1 lb = 453.592g) complete the cooking converter suite.',
    ],
    faqs: [
      { q: 'How many grams is one cup of flour?', a: '1 cup of all-purpose flour ≈ 125g (spooned and leveled). This varies by flour type: bread flour ≈ 130g, cake flour ≈ 100g, whole wheat flour ≈ 120g. Always weigh flour for accurate baking.' },
      { q: 'How many mL is a tablespoon?', a: '1 US tablespoon = 14.787 mL. 1 metric tablespoon (Australia, Canada) = 15 mL. 1 UK tablespoon = 17.758 mL. The differences matter in precise recipes.' },
      { q: 'What temperature is 350°F in Celsius?', a: '350°F = (350 − 32) × 5/9 = 318 × 0.556 = 176.7°C ≈ 177°C. For fan/convection ovens, reduce to about 160°C.' },
    ],
  },
};
