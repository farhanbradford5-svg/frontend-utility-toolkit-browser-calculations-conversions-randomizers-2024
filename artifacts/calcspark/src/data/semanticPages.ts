export interface SemanticFormula {
  expression: string;
  explanation: string;
  variables: { symbol: string; meaning: string }[];
}

export interface SemanticStep {
  title: string;
  detail: string;
}

export interface SemanticExample {
  title: string;
  given: string;
  solution: string;
  answer: string;
}

export interface SemanticTable {
  headers: string[];
  rows: string[][];
}

export interface SemanticProse {
  heading: string;
  body: string;
}

export interface SemanticFAQ {
  q: string;
  a: string;
}

export interface SemanticPageMeta {
  title: string;
  description: string;
  toolSlug: string;
  toolPath: string;
  pageType: 'formula' | 'how-to' | 'vs';
  hero: { heading: string; subheading: string };
  formula?: SemanticFormula;
  mathSolverEduType?: string;
  steps?: SemanticStep[];
  examples?: SemanticExample[];
  table?: SemanticTable;
  prose?: SemanticProse[];
  faqs: SemanticFAQ[];
}

export const SEMANTIC_PAGES: Record<string, SemanticPageMeta> = {

  // ── MATHEMATICS ────────────────────────────────────────────────────────────

  'percentage-formula': {
    title: 'Percentage Formula – How to Calculate Percentages',
    description: 'Learn the percentage formula with worked examples. Find what percent X is of Y, calculate percent change, and solve reverse percentage problems.',
    toolSlug: 'percentage',
    toolPath: '/calculators/mathematics/percentage',
    pageType: 'formula',
    mathSolverEduType: 'Arithmetic',
    hero: {
      heading: 'Percentage Formula: Complete Guide',
      subheading: 'Master every percentage calculation — from basic percent-of problems to percent change, reverse percentages, and compound growth. Includes worked examples for every formula variation.'
    },
    formula: {
      expression: 'P% of X = (P / 100) × X  |  % Change = ((New - Old) / Old) × 100  |  Reverse: Original = Value / (1 ± P/100)',
      explanation: 'The percentage formula has three main variations. To find P% of a number X, divide P by 100 and multiply by X. To find percent change between two values, subtract the old from the new, divide by the old, then multiply by 100. For reverse percentage (finding the original before a change), divide the known value by (1 plus or minus the percentage as a decimal).',
      variables: [
        { symbol: 'P', meaning: 'The percentage value (e.g., 25 for 25%)' },
        { symbol: 'X', meaning: 'The base number you are calculating the percentage of' },
        { symbol: 'New', meaning: 'The new (final) value in a percent change calculation' },
        { symbol: 'Old', meaning: 'The original (starting) value in a percent change calculation' },
        { symbol: 'Value', meaning: 'The known value after the percentage has been applied' },
      ]
    },
    steps: [
      { title: 'Identify what you need to find', detail: 'Determine whether you need to find a percentage of a number, convert between fractions and percentages, calculate percent change, or find the original value before a percentage change.' },
      { title: 'Choose the correct formula', detail: 'For "X% of Y", use (X/100) × Y. For "X is what % of Y", use (X/Y) × 100. For percent change, use ((New-Old)/Old) × 100. For reverse percentage, use Value/(1 ± P/100).' },
      { title: 'Plug in your values', detail: 'Substitute your known values into the selected formula. Double-check which value is the "base" or "whole" — this is critical for getting the right answer.' },
      { title: 'Calculate and verify', detail: 'Perform the arithmetic and check your answer makes sense. If something is a 50% increase, the result should be 1.5x the original. Use the calculator to verify.' }
    ],
    examples: [
      { title: 'Finding a percentage of a number', given: 'What is 15% of 200?', solution: 'P% of X = (15/100) × 200 = 0.15 × 200', answer: '30' },
      { title: 'Percent change calculation', given: 'A product price rose from $80 to $100. What is the percentage increase?', solution: '% Change = ((100 - 80) / 80) × 100 = (20/80) × 100 = 0.25 × 100', answer: '25% increase' },
      { title: 'Reverse percentage (finding the original)', given: 'A jacket costs $85 after a 15% discount. What was the original price?', solution: 'Original = 85 / (1 - 0.15) = 85 / 0.85', answer: '$100 original price' },
    ],
    table: {
      headers: ['Calculation Type', 'Formula', 'Example'],
      rows: [
        ['X% of Y', '(X/100) × Y', '20% of 50 = 10'],
        ['X is what % of Y', '(X/Y) × 100', '10 is 20% of 50'],
        ['Percent increase', '((New-Old)/Old) × 100', 'From 80 to 100 = +25%'],
        ['Percent decrease', '((Old-New)/Old) × 100', 'From 100 to 80 = -20%'],
        ['Reverse % (after increase)', 'Value / (1 + P/100)', '$110 after 10% up → $100'],
        ['Reverse % (after discount)', 'Value / (1 - P/100)', '$90 after 10% off → $100'],
      ]
    },
    prose: [
      { heading: 'When to Use Each Percentage Formula', body: 'The basic percentage formula (P% of X) is used for sales tax, tips, discounts, and markups. Percent change is essential in finance and science to measure growth or decline between two values. Reverse percentage is critical in retail pricing — when you know the sale price and the discount rate, but need to find the original price. Understanding which formula to use is the most important step.' },
      { heading: 'Common Percentage Mistakes to Avoid', body: 'The most common mistake is using percent change symmetrically — a 50% increase followed by a 50% decrease does NOT return to the original value. If a $100 item increases by 50% to $150, then decreases by 50%, it becomes $75, not $100. Always apply percent change to the current base value, not the original.' }
    ],
    faqs: [
      { q: 'What is the basic percentage formula?', a: 'The basic formula is: Percentage = (Part / Whole) × 100. To find a percentage of a number: Result = (Percentage / 100) × Number.' },
      { q: 'How do I calculate a percentage increase?', a: 'Percent Increase = ((New Value - Old Value) / Old Value) × 100. For example, from 50 to 75: ((75-50)/50) × 100 = 50% increase.' },
      { q: 'How do I calculate a percentage decrease?', a: 'Percent Decrease = ((Old Value - New Value) / Old Value) × 100. For example, from 100 to 80: ((100-80)/100) × 100 = 20% decrease.' },
      { q: 'What is reverse percentage?', a: 'Reverse percentage finds the original value before a percentage was applied. If a price after a 20% discount is $80, the original is $80 / (1 - 0.20) = $100.' },
      { q: 'How do I convert a fraction to a percentage?', a: 'Divide the numerator by the denominator, then multiply by 100. For example, 3/4 = 0.75 × 100 = 75%.' },
      { q: 'What is the difference between percentage points and percentage change?', a: 'Percentage points measure the arithmetic difference (from 10% to 15% is 5 percentage points). Percentage change measures the relative change (from 10% to 15% is a 50% increase).' },
      { q: 'How do I find what percentage X is of Y?', a: 'Use the formula: (X / Y) × 100. For example, to find what percentage 30 is of 120: (30/120) × 100 = 25%.' },
      { q: 'Can percentage change be greater than 100%?', a: 'Yes. A value growing from 10 to 30 is a 200% increase. A decrease can be at most 100% (going to zero). Percentage increases have no upper limit.' },
    ]
  },

  'how-to-percentage': {
    title: 'How to Calculate Percentages – Step-by-Step Guide',
    description: 'Learn how to calculate percentages step by step. Includes percent of a number, percent change, and reverse percentage with real-world examples.',
    toolSlug: 'percentage',
    toolPath: '/calculators/mathematics/percentage',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Percentages: Step-by-Step',
      subheading: 'A beginner-friendly guide to every type of percentage calculation. Includes real-world examples for shopping discounts, exam grades, salary increases, and more.'
    },
    steps: [
      { title: 'Identify the type of percentage problem', detail: 'Ask: Am I finding a % of a number? A % change between two values? Or the original value before a % was applied? Each requires a different approach.' },
      { title: 'Convert the percentage to a decimal', detail: 'Divide the percentage by 100. So 25% becomes 0.25, 8.5% becomes 0.085. This makes multiplication straightforward.' },
      { title: 'Apply the correct operation', detail: 'For "P% of X": multiply the decimal by X. For percent change: subtract old from new, divide by old, multiply by 100. For reverse %: divide by (1 plus or minus the decimal).' },
      { title: 'Check if the answer is reasonable', detail: 'A 10% tip on a $50 meal should be about $5. A 50% discount on $200 should give $100. Sanity-check your answer before accepting it.' },
      { title: 'Use the calculator for precision', detail: 'For tax rates, finance, or measurements, use the percentage calculator for exact results. Manual estimates are useful but rounding can accumulate errors.' }
    ],
    examples: [
      { title: 'Sales tax calculation', given: 'A $45 item with 8% sales tax', solution: 'Tax = 8% of $45 = 0.08 × 45 = $3.60; Total = $45 + $3.60', answer: 'Total price = $48.60' },
      { title: 'Exam score to percentage', given: 'You scored 42 out of 50 on a test', solution: 'Percentage = (42/50) × 100 = 0.84 × 100', answer: '84%' },
      { title: 'Salary increase', given: 'Salary goes from $55,000 to $60,500', solution: 'Change = ((60500-55000)/55000) × 100 = (5500/55000) × 100', answer: '10% salary increase' },
    ],
    faqs: [
      { q: 'How do I calculate 20% of a number in my head?', a: 'Divide the number by 5, or divide by 10 and double it. For example, 20% of 80: 80/5 = 16, or 80/10 = 8, doubled = 16.' },
      { q: 'How do I calculate a 15% tip?', a: 'Find 10% (divide by 10), then add half of that for 5%, and add both together. For a $60 bill: 10% = $6, 5% = $3, 15% tip = $9.' },
      { q: 'What is 100% of something?', a: '100% of any number is the number itself. 100% of 75 is 75. A 100% increase means the value doubled.' },
      { q: 'How do I subtract a percentage?', a: 'Multiply by (1 - percentage/100). To subtract 30% from 200: 200 × (1 - 0.30) = 200 × 0.70 = 140.' },
      { q: 'How do I add a percentage?', a: 'Multiply by (1 + percentage/100). To add 20% to 150: 150 × (1 + 0.20) = 150 × 1.20 = 180.' },
      { q: 'What is the easiest way to find 1%?', a: 'Divide the number by 100. Once you have 1%, you can multiply to find any other percentage. 1% of 850 = 8.50, so 7% = 8.50 × 7 = 59.50.' },
      { q: 'How do percentages work in compound interest?', a: 'In compound interest, the percentage is applied repeatedly to the growing total. Each period, the percentage is applied to both the original principal and the accumulated interest.' },
      { q: 'Can a percentage be over 100%?', a: 'Yes. A 150% efficiency means you produce 1.5 times what was expected. A 200% increase means the value tripled. Percentages describe ratios, not just portions under 100.' },
    ]
  },

  'pythagorean-formula': {
    title: 'Pythagorean Theorem Formula – a² + b² = c² Explained',
    description: 'Complete guide to the Pythagorean theorem formula. Learn a² + b² = c² with worked examples, proofs, and real-world applications.',
    toolSlug: 'pythagorean',
    toolPath: '/calculators/geometry/pythagorean',
    pageType: 'formula',
    mathSolverEduType: 'Geometry',
    hero: {
      heading: 'Pythagorean Theorem: a² + b² = c²',
      subheading: 'The most famous formula in geometry — discover how to use the Pythagorean theorem to find missing sides of right triangles, with worked examples from construction, navigation, and everyday life.'
    },
    formula: {
      expression: 'a² + b² = c²  |  c = √(a² + b²)  |  a = √(c² - b²)  |  b = √(c² - a²)',
      explanation: 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (the side opposite the right angle) equals the sum of squares of the other two sides. You can rearrange it to find any of the three sides: for the hypotenuse c, take the square root of (a² + b²). For a leg, take the square root of (c² minus the other leg squared).',
      variables: [
        { symbol: 'a', meaning: 'One leg of the right triangle (shorter or equal side)' },
        { symbol: 'b', meaning: 'Other leg of the right triangle' },
        { symbol: 'c', meaning: 'Hypotenuse — the longest side, opposite the right angle' },
        { symbol: '²', meaning: 'Squared — multiply the value by itself' },
        { symbol: '√', meaning: 'Square root — the inverse of squaring' },
      ]
    },
    steps: [
      { title: 'Identify the right angle', detail: 'The Pythagorean theorem only works for right triangles (triangles with exactly one 90-degree angle). The side opposite the right angle is always the hypotenuse (c).' },
      { title: 'Label the sides', detail: 'The two sides that form the right angle are legs a and b. The side opposite the right angle is the hypotenuse c. The hypotenuse is always the longest side.' },
      { title: 'Choose which side to find', detail: 'If you need the hypotenuse: c = √(a² + b²). If you need a leg: a = √(c² - b²), or b = √(c² - a²). Plug your known values into the appropriate formula.' },
      { title: 'Square the known values', detail: 'Calculate a² and b² (or c² and the known leg²). Perform the addition or subtraction, then take the square root of the result.' },
      { title: 'Verify with the original equation', detail: 'Check: does a² + b² = c²? Substitute your calculated values back in. If both sides are equal (within rounding), your answer is correct.' }
    ],
    examples: [
      { title: 'Finding the hypotenuse', given: 'Right triangle with legs a = 3 and b = 4', solution: 'c = √(3² + 4²) = √(9 + 16) = √25', answer: 'c = 5 (the classic 3-4-5 triangle)' },
      { title: 'Finding a missing leg', given: 'Right triangle with hypotenuse c = 13 and leg a = 5', solution: 'b = √(13² - 5²) = √(169 - 25) = √144', answer: 'b = 12' },
      { title: 'Real-world: ladder problem', given: 'A 10-foot ladder leans against a wall. The base is 6 feet from the wall. How high does the ladder reach?', solution: 'h = √(10² - 6²) = √(100 - 36) = √64', answer: 'The ladder reaches 8 feet high' },
    ],
    table: {
      headers: ['Pythagorean Triple', 'Leg a', 'Leg b', 'Hypotenuse c'],
      rows: [
        ['3-4-5', '3', '4', '5'],
        ['5-12-13', '5', '12', '13'],
        ['8-15-17', '8', '15', '17'],
        ['7-24-25', '7', '24', '25'],
        ['9-40-41', '9', '40', '41'],
        ['6-8-10', '6', '8', '10 (scaled 3-4-5)'],
      ]
    },
    prose: [
      { heading: 'Real-World Applications of the Pythagorean Theorem', body: 'The Pythagorean theorem is used in construction to ensure walls are square (the 3-4-5 method), in navigation to find the straight-line distance between two GPS coordinates, in carpentry to cut diagonal lengths, and in architecture to calculate rafter lengths for roofs. Surveyors, engineers, and architects use it daily.' },
      { heading: 'Pythagorean Theorem vs. the Law of Cosines', body: 'The Pythagorean theorem is a special case of the Law of Cosines (c² = a² + b² - 2ab·cos(C)) where the angle C is exactly 90°. At 90°, cos(90°) = 0, so the 2ab·cos(C) term vanishes, giving a² + b² = c². For non-right triangles, use the Law of Cosines or Law of Sines instead.' }
    ],
    faqs: [
      { q: 'What is the Pythagorean theorem in simple terms?', a: 'In any right triangle, the square of the longest side (hypotenuse) equals the sum of the squares of the other two sides: a² + b² = c².' },
      { q: 'Does the Pythagorean theorem work for all triangles?', a: 'No — only right triangles (triangles with one 90-degree angle). For other triangles, use the Law of Cosines or Law of Sines.' },
      { q: 'What is a Pythagorean triple?', a: 'A Pythagorean triple is a set of three integers that satisfy a² + b² = c². Common triples: 3-4-5, 5-12-13, 8-15-17. Any multiple of these also works (e.g., 6-8-10).' },
      { q: 'How do I know which side is the hypotenuse?', a: 'The hypotenuse is always opposite the right angle (90° angle) and is always the longest side of the right triangle.' },
      { q: 'Can I use the theorem to check if a triangle is a right triangle?', a: 'Yes. If a² + b² = c² for the three sides (where c is the longest), the triangle has a right angle. If a² + b² > c², the angle is acute. If a² + b² < c², the angle is obtuse.' },
      { q: 'Who invented the Pythagorean theorem?', a: 'Although named after the Greek mathematician Pythagoras (~570-495 BC), the theorem was known by the Babylonians and Indians over 1000 years earlier. Pythagoras or his school likely provided the first formal proof.' },
      { q: 'How is the Pythagorean theorem used in everyday life?', a: 'It is used to check if corners are square in construction (3-4-5 method), to find diagonal distances on maps, to calculate screen sizes (diagonal from width and height), and in GPS triangulation.' },
      { q: 'What is the distance formula and how is it related?', a: 'The distance formula d = √((x2-x1)² + (y2-y1)²) is derived directly from the Pythagorean theorem. The horizontal and vertical differences between two points form the legs, and the distance is the hypotenuse.' },
    ]
  },

  'how-to-pythagorean': {
    title: 'How to Use the Pythagorean Theorem – Step-by-Step',
    description: 'Step-by-step guide to applying the Pythagorean theorem. Find hypotenuse and legs with worked examples in construction, navigation, and screen size.',
    toolSlug: 'pythagorean',
    toolPath: '/calculators/geometry/pythagorean',
    pageType: 'how-to',
    hero: {
      heading: 'How to Use the Pythagorean Theorem: Step-by-Step',
      subheading: 'Follow these clear steps to solve any right-triangle problem using a² + b² = c². Includes real-world applications in construction, navigation, and design.'
    },
    steps: [
      { title: 'Confirm you have a right triangle', detail: 'The theorem requires exactly one 90-degree angle. Look for the square corner symbol in diagrams, or verify from the problem description.' },
      { title: 'Identify what you are solving for', detail: 'If both legs are known and you need the hypotenuse, use c = √(a² + b²). If one leg and the hypotenuse are known, use a = √(c² - b²) to find the missing leg.' },
      { title: 'Square each known side', detail: 'Multiply each known value by itself. If a = 6, then a² = 36. If c = 10, then c² = 100. Keep these values handy.' },
      { title: 'Add or subtract the squared values', detail: 'For the hypotenuse: add a² + b². For a leg: subtract the known leg squared from c². This gives you the square of the unknown side.' },
      { title: 'Take the square root', detail: 'Calculate the square root of the result. This is your answer. Most calculators have a √ button. The answer should be a positive number representing a length.' },
      { title: 'Check units and reasonableness', detail: 'Make sure your answer is in the same units as the inputs. The hypotenuse must be longer than either leg. If your answer is shorter than a leg, check your calculation.' }
    ],
    examples: [
      { title: 'TV screen diagonal', given: 'Screen width = 48 inches, height = 27 inches', solution: 'Diagonal = √(48² + 27²) = √(2304 + 729) = √3033', answer: '55.07 inches (approximately 55-inch TV)' },
      { title: 'Right-angled construction check', given: 'Wall corner: measure 3 feet along one wall, 4 feet along the other. What should the diagonal measure for a perfect square corner?', solution: 'c = √(3² + 4²) = √(9+16) = √25', answer: '5 feet — if the diagonal is exactly 5 feet, the corner is perfectly square' },
      { title: 'Park path shortcut', given: 'A park is 80m wide and 60m long. How long is the diagonal shortcut across the park?', solution: 'c = √(80² + 60²) = √(6400 + 3600) = √10000', answer: '100 meters diagonal distance' },
    ],
    faqs: [
      { q: 'What units should I use in the Pythagorean theorem?', a: 'All three values (a, b, c) must be in the same unit. If legs are in meters, the hypotenuse will also be in meters. Do not mix feet and inches without converting first.' },
      { q: 'Can I use decimals in the Pythagorean theorem?', a: 'Yes, the theorem works with any real numbers including decimals. For example, with legs 1.5 and 2.0: c = √(1.5² + 2.0²) = √(2.25 + 4) = √6.25 = 2.5.' },
      { q: 'How do I apply the 3-4-5 rule in construction?', a: 'Measure 3 feet (or any unit) along one wall from a corner, mark the point. Measure 4 feet along the other wall from the same corner. The distance between the two marks should be exactly 5 feet for a square corner.' },
      { q: 'What if I get a non-integer answer?', a: 'Most hypotenuse values are irrational numbers (like √2 = 1.414...). This is perfectly normal. Round to the required precision for practical applications.' },
      { q: 'How do I find the diagonal of a rectangle?', a: 'Use the Pythagorean theorem with width and height as the two legs. For a 16×9 rectangle: diagonal = √(16² + 9²) = √(256+81) = √337 ≈ 18.36 units.' },
      { q: 'Can I use the Pythagorean theorem in 3D?', a: 'Yes, extended to 3D: d = √(x² + y² + z²), where x, y, z are the three dimensions. This finds the space diagonal of a rectangular box.' },
      { q: 'What is the inverse Pythagorean theorem?', a: 'If you know all three sides and a² + b² = c², the triangle has a 90-degree angle at C. This can verify whether a triangle is right-angled without measuring angles.' },
      { q: 'How accurate does my measurement need to be?', a: 'For construction, measuring to the nearest millimeter or 1/16 inch is usually sufficient. For the 3-4-5 check method, being within 1/8 inch gives an angle within 0.1 degrees of 90.' },
    ]
  },

  'compound-interest-formula': {
    title: 'Compound Interest Formula – A = P(1 + r/n)^(nt)',
    description: 'Master the compound interest formula A = P(1 + r/n)^(nt). Includes worked examples, comparison with simple interest, and real-world savings scenarios.',
    toolSlug: 'compound-interest',
    toolPath: '/calculators/finance/compound-interest',
    pageType: 'formula',
    hero: {
      heading: 'Compound Interest Formula: A = P(1 + r/n)^(nt)',
      subheading: 'The most powerful formula in personal finance — compound interest grows your money exponentially. Learn the formula, understand each variable, and see how compounding frequency dramatically changes results.'
    },
    formula: {
      expression: 'A = P × (1 + r/n)^(n×t)  |  I = A - P  |  r = n × ((A/P)^(1/(n×t)) - 1)',
      explanation: 'The compound interest formula calculates the future value A of an investment or loan. P is the principal, r is the annual interest rate as a decimal, n is the number of times interest compounds per year, and t is time in years. The key insight is that interest is calculated on both the original principal and all previously accumulated interest, creating exponential growth.',
      variables: [
        { symbol: 'A', meaning: 'Final amount (principal + total interest earned)' },
        { symbol: 'P', meaning: 'Principal — the initial investment or loan amount' },
        { symbol: 'r', meaning: 'Annual interest rate as a decimal (e.g., 5% = 0.05)' },
        { symbol: 'n', meaning: 'Number of compounding periods per year (1=annual, 12=monthly, 365=daily)' },
        { symbol: 't', meaning: 'Time in years' },
        { symbol: 'I', meaning: 'Total interest earned (A minus P)' },
      ]
    },
    steps: [
      { title: 'Convert the interest rate to decimal', detail: 'Divide the percentage rate by 100. A rate of 6.5% becomes r = 0.065. This is essential before plugging into the formula.' },
      { title: 'Determine the compounding frequency (n)', detail: 'Annual (n=1), semi-annual (n=2), quarterly (n=4), monthly (n=12), daily (n=365). More frequent compounding means more interest but the difference diminishes at higher frequencies.' },
      { title: 'Calculate the rate per period (r/n)', detail: 'Divide the annual rate by n. For 6% compounding monthly: 0.06/12 = 0.005. This is the interest rate applied each period.' },
      { title: 'Raise (1 + r/n) to the power of (n×t)', detail: 'Multiply n (periods per year) by t (years) to get total compounding periods. Then raise (1 + r/n) to that power. For 5 years monthly: (1.005)^60 = 1.349.' },
      { title: 'Multiply by principal P', detail: 'The result gives you A, the total future value. Subtract P from A to find the total interest earned.' }
    ],
    examples: [
      { title: 'Savings account growth', given: 'P = $10,000, r = 5%, n = 12 (monthly), t = 10 years', solution: 'A = 10000 × (1 + 0.05/12)^(12×10) = 10000 × (1.004167)^120 = 10000 × 1.6470', answer: '$16,470 total — $6,470 in compound interest' },
      { title: 'Retirement savings', given: 'P = $5,000, r = 8%, n = 1 (annual), t = 30 years', solution: 'A = 5000 × (1 + 0.08)^30 = 5000 × 1.08^30 = 5000 × 10.0627', answer: '$50,313 — original $5,000 grew over 10x in 30 years' },
      { title: 'Effect of compounding frequency', given: 'P = $1,000, r = 10%, t = 1 year — comparing frequencies', solution: 'Annual: 1000×1.10^1=$1,100 | Monthly: 1000×(1.00833)^12=$1,104.71 | Daily: 1000×(1.000274)^365=$1,105.16', answer: 'Daily compounding earns $5.16 more than annual on $1,000' },
    ],
    table: {
      headers: ['Compounding Frequency', 'n value', '$10,000 at 6% after 10 years'],
      rows: [
        ['Annual', '1', '$17,908'],
        ['Semi-annual', '2', '$18,061'],
        ['Quarterly', '4', '$18,140'],
        ['Monthly', '12', '$18,194'],
        ['Daily', '365', '$18,221'],
        ['Continuous', 'e^(rt)', '$18,221'],
      ]
    },
    prose: [
      { heading: 'Compound Interest vs. Simple Interest', body: 'Simple interest calculates interest only on the principal: I = P × r × t. Compound interest recalculates on the growing total each period. On $10,000 at 5% for 10 years: simple interest earns $5,000. Compound interest (monthly) earns $6,470. The difference grows dramatically over longer periods — over 30 years, compound interest earns over 3x more than simple interest.' },
      { heading: 'The Rule of 72 — Estimating Doubling Time', body: 'A useful mental shortcut: divide 72 by the annual interest rate to estimate how many years it takes to double your money. At 6% interest: 72/6 = 12 years to double. At 9%: 72/9 = 8 years. At 12%: 72/12 = 6 years. This approximation works well for rates between 4% and 15%.' }
    ],
    faqs: [
      { q: 'What is compound interest in simple terms?', a: 'Compound interest is interest on interest. You earn interest on your original investment, and then you earn interest on that interest too, causing exponential growth over time.' },
      { q: 'How often should interest compound for maximum growth?', a: 'More frequent compounding always produces more interest. Daily compounding gives slightly more than monthly, which gives more than annual. However, the difference between daily and continuous compounding is tiny.' },
      { q: 'What is continuous compounding?', a: 'Continuous compounding is the mathematical limit of compounding infinitely often. The formula is A = P × e^(r×t) where e ≈ 2.71828. It gives slightly more than daily compounding.' },
      { q: 'How do I calculate compound interest without a calculator?', a: 'Use the Rule of 72 for quick doubling time estimates. For precise calculation, you need a calculator or use our compound interest calculator above.' },
      { q: 'Does compound interest work against me in debt?', a: 'Yes. Credit card debt compounds daily or monthly, making it grow rapidly. A $5,000 balance at 20% APR compounds to nearly $7,600 after 4 years without payments.' },
      { q: 'What is the APY vs APR difference?', a: 'APR (Annual Percentage Rate) is the stated rate. APY (Annual Percentage Yield) accounts for compounding and shows the effective annual rate. APY is always equal to or greater than APR.' },
      { q: 'How does compound interest work on a mortgage?', a: 'Mortgages in the US use monthly compounding. Each month, interest is charged on the remaining balance. Early payments go mostly to interest; later payments mostly to principal (amortization).' },
      { q: 'When did compound interest become widely used?', a: 'Compound interest has been known since ancient Babylonia (2000 BC). Modern banking systems standardized it. Albert Einstein reputedly called it the "eighth wonder of the world," though this quote is disputed.' },
    ]
  },

  'how-to-compound-interest': {
    title: 'How to Calculate Compound Interest – Step-by-Step',
    description: 'Learn how to calculate compound interest step by step. Use the A = P(1 + r/n)^(nt) formula with savings, investment, and loan examples.',
    toolSlug: 'compound-interest',
    toolPath: '/calculators/finance/compound-interest',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Compound Interest: Step-by-Step',
      subheading: 'Follow this complete walkthrough of the compound interest formula with real savings and investment examples. No financial background needed.'
    },
    steps: [
      { title: 'Gather your values', detail: 'You need: Principal (P) — starting amount, Annual interest rate (r) — as a percentage, Compounding frequency (n) — how many times per year interest is applied, and Time (t) — in years.' },
      { title: 'Convert rate to decimal', detail: 'Divide the percentage by 100. If your savings account pays 4.5% per year, r = 0.045.' },
      { title: 'Find your compounding frequency', detail: 'Common values: 1 = annual, 2 = semi-annual, 4 = quarterly, 12 = monthly, 365 = daily. Check your bank or investment account documentation.' },
      { title: 'Apply the formula: A = P(1 + r/n)^(nt)', detail: 'Step through: calculate r/n, add 1, raise to the power n×t, then multiply by P. Many scientific calculators have an xy button for exponents.' },
      { title: 'Calculate total interest earned', detail: 'Subtract the principal from the final amount: Interest = A - P. This tells you how much your money grew through compounding alone.' },
      { title: 'Add regular contributions (optional)', detail: 'If you contribute regularly, use the future value of annuity formula alongside compound interest, or use our calculator which handles contributions automatically.' }
    ],
    examples: [
      { title: '3-year savings account', given: 'P = $2,500, r = 3%, n = 12 (monthly), t = 3 years', solution: 'A = 2500 × (1 + 0.03/12)^(12×3) = 2500 × (1.0025)^36 = 2500 × 1.09405', answer: '$2,735.13 — earned $235.13 in compound interest' },
      { title: 'College fund projection', given: 'P = $15,000, r = 7%, n = 12, t = 18 years', solution: 'A = 15000 × (1 + 0.07/12)^(12×18) = 15000 × (1.005833)^216 = 15000 × 3.5081', answer: '$52,621 — $15,000 grew to over $52,000 in 18 years' },
      { title: 'CD (Certificate of Deposit)', given: 'P = $8,000, r = 5.25%, n = 4 (quarterly), t = 2 years', solution: 'A = 8000 × (1 + 0.0525/4)^(4×2) = 8000 × (1.013125)^8 = 8000 × 1.10975', answer: '$8,878 — $878 earned in 2 years with quarterly compounding' },
    ],
    faqs: [
      { q: 'What is the easiest way to calculate compound interest?', a: 'Use our compound interest calculator above — enter principal, rate, frequency, and time for instant results. For mental math, use the Rule of 72: divide 72 by the annual rate to get the years to double.' },
      { q: 'How do I calculate compound interest monthly?', a: 'Set n = 12 in the formula. Monthly compounding: A = P × (1 + r/12)^(12t). For $5,000 at 6% for 5 years: A = 5000 × (1.005)^60 = $6,744.25.' },
      { q: 'What if I make monthly deposits too?', a: 'Use the future value of a series formula: FV = PMT × ((1+r/n)^(nt) - 1) / (r/n), and add it to the compound interest result of your initial deposit.' },
      { q: 'How do I compare two savings accounts with different compounding?', a: 'Convert both to APY (Annual Percentage Yield): APY = (1 + r/n)^n - 1. The higher APY account will always grow your money faster, regardless of stated APR.' },
      { q: 'Does compounding affect loan costs too?', a: 'Yes. Most loans compound monthly. A higher compounding frequency means you pay more interest. Always check the APR and total interest cost, not just the monthly payment.' },
      { q: 'What is the difference between compound interest and compound growth?', a: 'Compound interest refers specifically to interest-on-interest in financial accounts. Compound growth is the broader concept applied to any quantity that grows by a percentage of its current value — investments, populations, revenue.' },
      { q: 'How do taxes affect compound interest?', a: 'Taxes on interest reduce your effective return. In taxable accounts, interest earned may be taxed annually, which reduces the compounding effect. Tax-advantaged accounts (IRA, 401k) allow compound growth tax-deferred.' },
      { q: 'At what interest rate does compound interest make the biggest difference?', a: 'Higher rates make compounding dramatically more powerful. At 3%, $10,000 grows to $18,061 in 20 years. At 8%, it grows to $46,610. Higher rates amplify the exponential effect significantly.' },
    ]
  },

  'kinetic-energy-formula': {
    title: 'Kinetic Energy Formula – KE = ½mv² Explained',
    description: 'Complete guide to the kinetic energy formula KE = ½mv². Includes worked examples, unit analysis, and real-world applications in physics and engineering.',
    toolSlug: 'kinetic-energy',
    toolPath: '/calculators/physics/kinetic-energy',
    pageType: 'formula',
    hero: {
      heading: 'Kinetic Energy Formula: KE = ½mv²',
      subheading: 'Everything you need to know about calculating kinetic energy — the energy of motion. Learn the formula, understand why velocity matters more than mass, and apply it to vehicles, sports, and engineering problems.'
    },
    formula: {
      expression: 'KE = ½ × m × v²  |  v = √(2 × KE / m)  |  m = 2 × KE / v²',
      explanation: 'Kinetic energy is the energy an object possesses due to its motion. The formula KE = ½mv² shows that kinetic energy is directly proportional to mass (m) and proportional to the square of velocity (v). This means doubling the speed quadruples the kinetic energy — which is why high-speed collisions are so much more dangerous than slow ones.',
      variables: [
        { symbol: 'KE', meaning: 'Kinetic Energy in Joules (J)' },
        { symbol: 'm', meaning: 'Mass of the object in kilograms (kg)' },
        { symbol: 'v', meaning: 'Velocity (speed) of the object in meters per second (m/s)' },
        { symbol: '½', meaning: 'The constant coefficient — always 0.5 in the formula' },
        { symbol: 'J', meaning: 'Joule — the SI unit of energy (1 J = 1 kg·m²/s²)' },
      ]
    },
    steps: [
      { title: 'Identify mass and velocity', detail: 'Mass must be in kilograms (kg). Velocity must be in meters per second (m/s). Convert if needed: 1 mph = 0.4470 m/s; 1 km/h = 0.2778 m/s; pounds to kg: divide by 2.205.' },
      { title: 'Square the velocity', detail: 'Multiply velocity by itself: v². This is the most important step — velocity is squared, so it has a much greater effect on kinetic energy than mass does.' },
      { title: 'Multiply by mass', detail: 'Compute m × v². This gives units of kg·m²/s² which is equivalent to Joules.' },
      { title: 'Multiply by ½', detail: 'Divide the result by 2. Your final answer is kinetic energy in Joules (J). For large objects, the result may be in kilojoules (kJ) or megajoules (MJ).' }
    ],
    examples: [
      { title: 'Moving car', given: 'Car mass m = 1500 kg, speed v = 27.8 m/s (100 km/h)', solution: 'KE = ½ × 1500 × 27.8² = ½ × 1500 × 772.84 = 0.5 × 1,159,260', answer: '579,630 J ≈ 580 kJ of kinetic energy at highway speed' },
      { title: 'Baseball pitch', given: 'Baseball mass m = 0.145 kg, speed v = 40 m/s (89 mph)', solution: 'KE = ½ × 0.145 × 40² = ½ × 0.145 × 1600 = ½ × 232', answer: '116 J — comparable to a 116 N force over 1 meter' },
      { title: 'Finding speed from KE', given: 'Object with m = 10 kg has KE = 2000 J. What is its speed?', solution: 'v = √(2 × KE / m) = √(2 × 2000 / 10) = √400', answer: 'v = 20 m/s (72 km/h or 44.7 mph)' },
    ],
    table: {
      headers: ['Object', 'Mass', 'Speed', 'Kinetic Energy'],
      rows: [
        ['Walking person', '70 kg', '1.4 m/s (3 mph)', '~69 J'],
        ['Cycling person', '80 kg', '6.7 m/s (15 mph)', '~1,800 J'],
        ['Car (city speed)', '1,500 kg', '13.9 m/s (50 km/h)', '~145,000 J'],
        ['Car (highway)', '1,500 kg', '27.8 m/s (100 km/h)', '~580,000 J'],
        ['Commercial airliner', '300,000 kg', '250 m/s (900 km/h)', '~9.4 GJ'],
        ['Bullet (9mm)', '0.008 kg', '370 m/s', '~548 J'],
      ]
    },
    prose: [
      { heading: 'Why Velocity Matters More Than Mass', body: 'The v² relationship means that velocity has a disproportionate impact on kinetic energy. Doubling an object\'s mass doubles its KE. But doubling its speed quadruples its KE. This is why speed limits are so important in traffic safety — a car at 60 mph has four times the kinetic energy of the same car at 30 mph, requiring four times the stopping distance.' },
      { heading: 'Kinetic Energy and the Work-Energy Theorem', body: 'The work-energy theorem states that the net work done on an object equals its change in kinetic energy: W = ΔKE. This means to bring a moving object to rest, you must do negative work equal to its kinetic energy. For brakes to stop a car with 580 kJ of kinetic energy, the brakes must dissipate 580 kJ as heat.' }
    ],
    faqs: [
      { q: 'What is kinetic energy in simple terms?', a: 'Kinetic energy is the energy an object has because it is moving. The faster it moves and the heavier it is, the more kinetic energy it has. When it stops, that energy converts to other forms (heat, sound, deformation).' },
      { q: 'What are the units of kinetic energy?', a: 'The SI unit is the Joule (J). 1 Joule = 1 kg·m²/s². Large kinetic energies are often expressed in kilojoules (kJ) or megajoules (MJ).' },
      { q: 'Why is kinetic energy ½mv² and not mv²?', a: 'The ½ comes from the mathematical derivation: the work done to accelerate an object from rest equals the integral of force × distance, which gives ½mv². Without the ½, the formula would not correctly equal the work done.' },
      { q: 'What happens to kinetic energy in a collision?', a: 'In a perfectly elastic collision, total kinetic energy is conserved. In real (inelastic) collisions, kinetic energy converts to heat, sound, and deformation. A car crash is highly inelastic — most KE converts to vehicle deformation.' },
      { q: 'Can kinetic energy be negative?', a: 'No. Since KE = ½mv² and both m (mass) and v² (squared velocity) are always positive or zero, kinetic energy is always zero or positive. Zero KE means the object is at rest.' },
      { q: 'How is kinetic energy related to potential energy?', a: 'In a conservative system (no friction), total mechanical energy is conserved: KE + PE = constant. As an object falls and loses height (PE decreases), it gains speed (KE increases). This is the basis of roller coasters and hydroelectric power.' },
      { q: 'What is rotational kinetic energy?', a: 'Rotating objects have rotational kinetic energy: KE_rot = ½Iω², where I is the moment of inertia and ω is angular velocity. A spinning top, flywheel, or rotating tire all have both translational and rotational kinetic energy.' },
      { q: 'How does kinetic energy apply to car safety ratings?', a: 'Crash tests measure impact forces related to kinetic energy. At 35 mph (15.6 m/s), a 1,500 kg car has about 183 kJ of kinetic energy that must be absorbed safely. Crumple zones, airbags, and seatbelts are designed to manage this energy dissipation.' },
    ]
  },

  'how-to-kinetic-energy': {
    title: 'How to Calculate Kinetic Energy – Step-by-Step Guide',
    description: 'Learn how to calculate kinetic energy step by step using KE = ½mv². Includes unit conversions, worked examples, and physics problem-solving tips.',
    toolSlug: 'kinetic-energy',
    toolPath: '/calculators/physics/kinetic-energy',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Kinetic Energy: Step-by-Step',
      subheading: 'Solve any kinetic energy problem confidently using KE = ½mv². This guide walks through every step with real-world examples and unit conversions.'
    },
    steps: [
      { title: 'Convert mass to kilograms', detail: 'If mass is in pounds, divide by 2.2046 to get kg. If in grams, divide by 1000. The formula requires kg for the answer to be in Joules.' },
      { title: 'Convert velocity to m/s', detail: 'If speed is in km/h, multiply by 0.2778 (or divide by 3.6). If in mph, multiply by 0.4470. If in ft/s, multiply by 0.3048.' },
      { title: 'Square the velocity', detail: 'Calculate v × v = v². Write this down — it is the largest factor and where most calculation errors occur.' },
      { title: 'Multiply: ½ × m × v²', detail: 'Multiply mass by v², then divide by 2. The result is in Joules (J). For large values, convert to kilojoules by dividing by 1000.' },
      { title: 'Verify units in your answer', detail: '1 Joule = 1 kg·m²/s². If mass was in kg and velocity in m/s, units work out automatically. Always state units with your answer.' }
    ],
    examples: [
      { title: 'Bicycle rider', given: 'Rider + bike mass = 90 kg, speed = 8 m/s', solution: 'KE = ½ × 90 × 8² = 0.5 × 90 × 64 = 0.5 × 5,760', answer: '2,880 J = 2.88 kJ' },
      { title: 'Hammer swing', given: 'Hammer mass = 0.9 kg, speed at impact = 12 m/s', solution: 'KE = ½ × 0.9 × 12² = 0.5 × 0.9 × 144 = 0.5 × 129.6', answer: '64.8 J' },
      { title: 'Convert mph to m/s first', given: 'Tennis ball: m = 0.057 kg, v = 140 mph', solution: 'First convert: 140 mph × 0.4470 = 62.6 m/s; KE = ½ × 0.057 × 62.6² = ½ × 0.057 × 3918.8', answer: '111.6 J' },
    ],
    faqs: [
      { q: 'How do I calculate kinetic energy in imperial units?', a: 'In imperial: KE (ft·lb) = ½ × m (slugs) × v (ft/s)². Alternatively, calculate in SI units (kg, m/s → Joules) and convert: 1 ft·lb = 1.356 J.' },
      { q: 'What if an object is moving diagonally?', a: 'Use the total speed (magnitude of velocity vector). If moving at vx horizontally and vy vertically: total speed v = √(vx² + vy²). KE uses total speed, not components separately.' },
      { q: 'How does air resistance affect kinetic energy calculations?', a: 'Air resistance converts kinetic energy to heat. For projectiles or vehicles, if you need the speed at a point after traveling through air, you must account for energy lost to drag. Our calculator assumes no air resistance.' },
      { q: 'Why does doubling speed quadruple kinetic energy?', a: 'Because velocity is squared: (2v)² = 4v². If v doubles, v² quadruples. KE = ½mv², so KE quadruples. This is why highway collisions are so much more severe than parking-lot fender-benders.' },
      { q: 'Can I calculate kinetic energy for rotating objects?', a: 'Use the rotational formula: KE_rot = ½Iω², where I = moment of inertia (kg·m²) and ω = angular velocity in rad/s. For a solid disk, I = ½mr².' },
      { q: 'How does braking distance relate to kinetic energy?', a: 'Braking distance is proportional to KE, which is proportional to v². Double the speed → 4× the braking distance. This is why speed limits exist and why highway driving requires much greater following distance.' },
      { q: 'What is the kinetic energy of a 1 kg mass at 1 m/s?', a: 'KE = ½ × 1 × 1² = 0.5 J. This is the simplest benchmark. At 2 m/s: 2 J. At 10 m/s: 50 J. At 100 m/s: 5,000 J.' },
      { q: 'Is kinetic energy a vector or scalar?', a: 'Kinetic energy is a scalar quantity — it has magnitude but no direction. A ball moving left at 10 m/s and right at 10 m/s have the same kinetic energy.' },
    ]
  },

  'loan-formula': {
    title: 'Loan Payment Formula – Monthly Payment Calculator Explained',
    description: 'Learn the loan payment formula M = P[r(1+r)^n]/[(1+r)^n-1]. Calculate monthly payments, total interest, and amortization for any loan.',
    toolSlug: 'loan',
    toolPath: '/calculators/finance/loan',
    pageType: 'formula',
    hero: {
      heading: 'Loan Payment Formula: M = P × [r(1+r)^n] / [(1+r)^n - 1]',
      subheading: 'Understand exactly how your loan monthly payment is calculated. Learn the amortization formula, see how interest and principal payments change over time, and compare loan options.'
    },
    formula: {
      expression: 'M = P × [r(1+r)^n] / [(1+r)^n - 1]  |  Total = M × n  |  Total Interest = Total - P',
      explanation: 'M is the monthly payment, P is the loan principal, r is the monthly interest rate (annual rate / 12), and n is the total number of payments (years × 12). The formula calculates the fixed payment that exactly pays off the loan with interest over n periods. Early payments go mostly to interest; later payments mostly to principal — this is amortization.',
      variables: [
        { symbol: 'M', meaning: 'Monthly payment amount in dollars' },
        { symbol: 'P', meaning: 'Principal — the total loan amount borrowed' },
        { symbol: 'r', meaning: 'Monthly interest rate = Annual rate / 12 (as decimal)' },
        { symbol: 'n', meaning: 'Total number of monthly payments = Years × 12' },
        { symbol: '(1+r)^n', meaning: 'Compound growth factor over all n periods' },
      ]
    },
    steps: [
      { title: 'Convert annual rate to monthly', detail: 'Divide the annual interest rate by 12 and convert to decimal. For a 6% annual rate: r = 0.06/12 = 0.005 per month.' },
      { title: 'Calculate total number of payments (n)', detail: 'Multiply loan term in years by 12. A 30-year mortgage: n = 30 × 12 = 360 monthly payments.' },
      { title: 'Calculate (1+r)^n', detail: 'Raise (1 + monthly rate) to the power of n. For r=0.005, n=360: (1.005)^360 = 6.0226. This is the compound growth factor.' },
      { title: 'Apply the full formula', detail: 'M = P × [r × (1+r)^n] / [(1+r)^n - 1]. Plug in P, r, and the calculated (1+r)^n. For P=$200,000, r=0.005, n=360: M = 200000 × [0.005 × 6.0226] / [6.0226 - 1].' },
      { title: 'Calculate total interest paid', detail: 'Total paid = M × n. Subtract the original principal to find total interest: Total Interest = (M × n) - P.' }
    ],
    examples: [
      { title: '30-year mortgage', given: 'P = $300,000, Annual rate = 7%, Term = 30 years', solution: 'r = 0.07/12 = 0.005833; n = 360; M = 300000 × [0.005833 × (1.005833)^360] / [(1.005833)^360 - 1]', answer: 'Monthly payment = $1,996; Total interest = $418,527 over 30 years' },
      { title: '5-year car loan', given: 'P = $25,000, Annual rate = 6%, Term = 5 years', solution: 'r = 0.005; n = 60; M = 25000 × [0.005 × (1.005)^60] / [(1.005)^60 - 1]', answer: 'Monthly payment = $483.32; Total interest = $3,999 over 5 years' },
      { title: 'Student loan', given: 'P = $40,000, Annual rate = 4.5%, Term = 10 years', solution: 'r = 0.00375; n = 120; Monthly payment formula applied', answer: 'Monthly payment = $414.43; Total interest = $9,732' },
    ],
    table: {
      headers: ['Loan Amount', 'Rate', 'Term', 'Monthly Payment', 'Total Interest'],
      rows: [
        ['$200,000', '6.5%', '30 years', '$1,264', '$255,088'],
        ['$200,000', '6.5%', '15 years', '$1,742', '$113,562'],
        ['$30,000', '7%', '5 years', '$594', '$5,640'],
        ['$50,000', '5%', '10 years', '$530', '$13,639'],
        ['$500,000', '7.5%', '30 years', '$3,496', '$758,483'],
      ]
    },
    prose: [
      { heading: 'How Amortization Works: Interest vs. Principal Over Time', body: 'In the early months of a loan, the vast majority of your payment goes to interest, not principal. On a $300,000 mortgage at 7%, your first payment of $1,996 covers $1,750 in interest and only $246 in principal. By year 25, the split reverses. This is why making extra principal payments early in a loan saves dramatically more interest than making the same payment later.' },
      { heading: 'How Loan Term Affects Total Cost', body: 'A longer term lowers your monthly payment but dramatically increases total interest paid. A $200,000 loan at 6%: over 15 years, monthly payment = $1,688 and total interest = $103,800. Over 30 years, monthly payment = $1,199 (43% lower) but total interest = $231,676 (123% more). The shorter loan costs 33% more per month but saves $127,876 in total interest.' }
    ],
    faqs: [
      { q: 'What is the monthly payment formula for a loan?', a: 'M = P × [r(1+r)^n] / [(1+r)^n - 1], where P = principal, r = monthly interest rate (annual rate/12), and n = total monthly payments.' },
      { q: 'How do I calculate total interest on a loan?', a: 'Multiply your monthly payment by the total number of payments, then subtract the original loan amount: Total Interest = (M × n) - P.' },
      { q: 'Does a higher down payment significantly reduce payments?', a: 'Yes. A 20% down payment instead of 10% on a $300,000 home reduces the loan by $30,000, saving about $200/month and over $70,000 in total interest on a 30-year mortgage.' },
      { q: 'What happens if I make extra payments on my loan?', a: 'Extra payments reduce principal faster, which reduces the interest charged in subsequent months. Even one extra payment per year on a 30-year mortgage can shorten it by 4-5 years and save tens of thousands in interest.' },
      { q: 'How does an adjustable-rate mortgage (ARM) differ from fixed?', a: 'A fixed-rate loan uses the same formula throughout. An ARM recalculates the payment periodically when the rate changes, using the remaining balance as the new P and the new rate.' },
      { q: 'What is a balloon payment?', a: 'Some loans have a balloon payment — a large lump sum due at the end. You pay regular (often interest-only) payments for the term, then owe the full remaining balance. Common in commercial real estate loans.' },
      { q: 'How does loan interest rate affect buying power?', a: 'At 5% rate, you can afford a $279,000 loan for a $1,500 monthly payment. At 7%, the same payment affords only a $225,000 loan. A 2% rate increase reduces buying power by about 20%.' },
      { q: 'What is APR vs interest rate on a loan?', a: 'The interest rate is what you pay on the principal. APR includes the interest rate plus all loan fees (origination fees, points, mortgage insurance), expressed as a yearly rate. APR gives a more complete picture of the loan\'s true cost.' },
    ]
  },

  'bmi-formula': {
    title: 'BMI Formula – How Body Mass Index is Calculated',
    description: 'Learn the BMI formula for metric and imperial units. Understand BMI categories, limitations, and when BMI is and is not a reliable health indicator.',
    toolSlug: 'bmi',
    toolPath: '/calculators/health/bmi',
    pageType: 'formula',
    hero: {
      heading: 'BMI Formula: Weight / Height² Explained',
      subheading: 'Understand exactly how BMI is calculated in metric and imperial units, what the BMI categories mean, and the important limitations of using BMI as a health metric.'
    },
    formula: {
      expression: 'BMI (metric) = Weight (kg) / Height² (m²)  |  BMI (imperial) = 703 × Weight (lbs) / Height² (in²)',
      explanation: 'Body Mass Index (BMI) is calculated by dividing weight by the square of height. In metric units, use kilograms and meters. In imperial units, divide pounds by inches squared, then multiply by 703 (a conversion factor). The result is a dimensionless number used to categorize weight status.',
      variables: [
        { symbol: 'BMI', meaning: 'Body Mass Index — a dimensionless number (kg/m²)' },
        { symbol: 'Weight', meaning: 'Body weight in kilograms (metric) or pounds (imperial)' },
        { symbol: 'Height', meaning: 'Height in meters (metric) or inches (imperial)' },
        { symbol: '703', meaning: 'Imperial conversion factor: converts lb/in² to kg/m²' },
        { symbol: 'Height²', meaning: 'Height multiplied by itself (in the same units)' },
      ]
    },
    steps: [
      { title: 'Convert height to the correct unit', detail: 'For metric: convert to meters. 5 feet 8 inches = 172.72 cm = 1.7272 m. For imperial: convert to total inches. 5 feet 8 inches = 68 inches.' },
      { title: 'Square your height', detail: 'Multiply height by itself. Metric: 1.7272 × 1.7272 = 2.983 m². Imperial: 68 × 68 = 4,624 in².' },
      { title: 'Divide weight by height squared', detail: 'Metric: divide weight in kg by height in m². Imperial: divide weight in pounds by height in in².' },
      { title: 'Apply the imperial conversion factor if needed', detail: 'In imperial units, multiply the result by 703. This converts lb/in² to the standard kg/m² scale.' },
      { title: 'Compare to BMI categories', detail: 'Underweight: below 18.5; Normal weight: 18.5–24.9; Overweight: 25–29.9; Obese: 30 and above. Discuss results with a healthcare provider.' }
    ],
    examples: [
      { title: 'Metric calculation', given: 'Weight = 70 kg, Height = 1.75 m', solution: 'BMI = 70 / (1.75)² = 70 / 3.0625', answer: 'BMI = 22.9 (Normal weight)' },
      { title: 'Imperial calculation', given: 'Weight = 165 lbs, Height = 5\'10" (70 inches)', solution: 'BMI = 703 × 165 / 70² = 703 × 165 / 4900 = 115,995 / 4900', answer: 'BMI = 23.7 (Normal weight)' },
      { title: 'Finding target weight', given: 'Height 1.68 m. What weight gives BMI of 22?', solution: 'Weight = BMI × Height² = 22 × (1.68)² = 22 × 2.8224', answer: 'Target weight = 62.1 kg (136.9 lbs)' },
    ],
    table: {
      headers: ['BMI Range', 'Category', 'Health Risk'],
      rows: [
        ['Below 18.5', 'Underweight', 'Moderate to high'],
        ['18.5 – 24.9', 'Normal weight', 'Low'],
        ['25.0 – 29.9', 'Overweight', 'Increased'],
        ['30.0 – 34.9', 'Obese (Class I)', 'High'],
        ['35.0 – 39.9', 'Obese (Class II)', 'Very high'],
        ['40.0 and above', 'Obese (Class III)', 'Extremely high'],
      ]
    },
    prose: [
      { heading: 'Limitations of BMI as a Health Metric', body: 'BMI does not distinguish between muscle and fat. A highly muscular athlete may have a BMI in the "overweight" range despite very low body fat. Conversely, someone with a "normal" BMI may have a high percentage of body fat ("skinny fat"). BMI also does not account for age, sex, ethnicity, bone density, or where fat is distributed (abdominal fat is more dangerous than hip fat). Use BMI as one indicator among many, not as a definitive health measure.' },
      { heading: 'Better Alternatives to BMI', body: 'Waist-to-height ratio (waist circumference / height, ideally below 0.5) is a better predictor of cardiovascular risk. Body fat percentage (measured via DEXA scan or bioelectrical impedance) gives more accurate body composition data. Waist circumference alone (below 94 cm for men, 80 cm for women) is a useful cardiovascular risk indicator. For most people, BMI is a reasonable screening tool but should not be the sole measure of health.' }
    ],
    faqs: [
      { q: 'What is a healthy BMI range?', a: 'The standard healthy BMI range is 18.5 to 24.9. However, optimal ranges may differ by age and ethnicity — some Asian populations show health risks at BMIs above 23.' },
      { q: 'Is BMI accurate for athletes?', a: 'No. Muscle is denser than fat. Athletes often have high BMIs due to muscle mass while having low body fat. BMI can misclassify athletes as overweight or obese.' },
      { q: 'Does BMI change with age?', a: 'The formula does not change, but interpretation does. For adults 65+, a slightly higher BMI (around 22-27) may be associated with better outcomes, as some extra weight can be protective against bone loss.' },
      { q: 'What is the BMI formula in pounds and feet?', a: 'BMI = 703 × weight (lbs) / [height (inches)]². Convert feet and inches to total inches first: 5 feet 9 inches = 69 inches.' },
      { q: 'How is pediatric BMI calculated?', a: 'Children use the same formula but results are interpreted using age- and sex-specific growth charts. A child\'s BMI is expressed as a percentile compared to peers of the same age and sex.' },
      { q: 'Can BMI predict diabetes risk?', a: 'BMI is correlated with type 2 diabetes risk but is not the only factor. Waist circumference and waist-to-hip ratio are better predictors of insulin resistance than BMI alone.' },
      { q: 'What BMI is considered morbidly obese?', a: 'A BMI of 40 or higher is classified as Class III obesity (sometimes called "morbid obesity"). This category is associated with significantly increased risk of diabetes, heart disease, and other conditions.' },
      { q: 'How do I calculate BMI for children?', a: 'Use the standard formula but then compare to the CDC BMI-for-age growth charts. A child is considered overweight if their BMI is at the 85th to 95th percentile for their age, and obese above the 95th percentile.' },
    ]
  },

  'standard-deviation-formula': {
    title: 'Standard Deviation Formula – Explained with Examples',
    description: 'Learn the standard deviation formula for population and sample. Step-by-step calculation with worked examples and interpretation guide.',
    toolSlug: 'standard-deviation',
    toolPath: '/calculators/statistics/standard-deviation',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Standard Deviation Formula: Population and Sample',
      subheading: 'Standard deviation measures how spread out data is from the mean. Learn both the population and sample formulas, when to use each, and how to interpret the results.'
    },
    formula: {
      expression: 'Population σ = √[Σ(xi - μ)² / N]  |  Sample s = √[Σ(xi - x̄)² / (n-1)]',
      explanation: 'Standard deviation measures the average distance of each data point from the mean. The population formula (σ) uses N (total population size). The sample formula (s) uses n-1 (Bessel\'s correction) because we are estimating from a sample — dividing by n-1 instead of n gives an unbiased estimate of the population standard deviation.',
      variables: [
        { symbol: 'σ (sigma)', meaning: 'Population standard deviation' },
        { symbol: 's', meaning: 'Sample standard deviation' },
        { symbol: 'xi', meaning: 'Each individual data point in the dataset' },
        { symbol: 'μ (mu)', meaning: 'Population mean (average)' },
        { symbol: 'x̄', meaning: 'Sample mean' },
        { symbol: 'N', meaning: 'Total number of values in the population' },
        { symbol: 'n', meaning: 'Number of values in the sample' },
        { symbol: 'Σ', meaning: 'Sum — add up all the values' },
      ]
    },
    steps: [
      { title: 'Calculate the mean', detail: 'Add all values together and divide by the count. For sample {2, 4, 4, 4, 5, 5, 7, 9}: mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5.' },
      { title: 'Find each deviation from the mean', detail: 'Subtract the mean from each value: (2-5)=-3, (4-5)=-1, (4-5)=-1, (4-5)=-1, (5-5)=0, (5-5)=0, (7-5)=2, (9-5)=4.' },
      { title: 'Square each deviation', detail: 'Square each result: 9, 1, 1, 1, 0, 0, 4, 16. Squaring makes all values positive and emphasizes outliers.' },
      { title: 'Sum the squared deviations', detail: 'Add all squared deviations: 9+1+1+1+0+0+4+16 = 32. This is the sum of squares (SS).' },
      { title: 'Divide by N (population) or n-1 (sample)', detail: 'Population variance = 32/8 = 4. Sample variance = 32/(8-1) = 32/7 ≈ 4.571. This gives you the variance.' },
      { title: 'Take the square root', detail: 'Population σ = √4 = 2. Sample s = √4.571 ≈ 2.138. Standard deviation is in the same units as your original data.' }
    ],
    examples: [
      { title: 'Student test scores', given: 'Scores: 65, 70, 75, 80, 85, 90 (sample)', solution: 'Mean = 77.5; Deviations: -12.5, -7.5, -2.5, 2.5, 7.5, 12.5; Squared: 156.25, 56.25, 6.25, 6.25, 56.25, 156.25; Sum = 437.5; Variance = 437.5/(6-1) = 87.5; s = √87.5', answer: 's ≈ 9.35 points (scores spread about 9.35 points from mean)' },
      { title: 'Daily temperatures', given: 'Temperatures (°C): 18, 21, 22, 19, 23, 20 (population)', solution: 'Mean = 20.5; Sum of squared deviations = 14.5; Variance = 14.5/6 = 2.417; σ = √2.417', answer: 'σ ≈ 1.55°C (temperature varies about 1.55°C from average)' },
    ],
    table: {
      headers: ['Standard Deviation', 'Interpretation', 'Example'],
      rows: [
        ['Very small (near 0)', 'Data points are very close to the mean', 'Factory products all 100.0 ± 0.1 g'],
        ['Small', 'Data is tightly clustered around the mean', 'Heights of adult males: σ = 7 cm'],
        ['Moderate', 'Moderate spread around the mean', 'IQ scores: σ = 15 points'],
        ['Large', 'Data is widely spread from the mean', 'Annual incomes: σ = $50,000+'],
        ['Equal to mean', 'High relative variability', 'Startup revenue projections'],
      ]
    },
    prose: [
      { heading: 'When to Use Population vs. Sample Standard Deviation', body: 'Use population standard deviation (σ) when you have data for the entire group you are describing — every student in a class, every product from a batch. Use sample standard deviation (s) when your data is a subset drawn from a larger group and you want to estimate the population variability. In practice, the sample formula (dividing by n-1) is used in almost all research and data analysis since complete population data is rarely available.' },
      { heading: 'The 68-95-99.7 Rule (Empirical Rule)', body: 'In a normal distribution, approximately 68% of values fall within 1 standard deviation of the mean, 95% fall within 2 standard deviations, and 99.7% fall within 3 standard deviations. This rule allows quick probability estimates. For IQ (mean=100, σ=15): 68% of people score between 85 and 115, 95% between 70 and 130, and 99.7% between 55 and 145.' }
    ],
    faqs: [
      { q: 'What does standard deviation tell you?', a: 'Standard deviation tells you how spread out or variable the data is. A small standard deviation means data points are close to the mean. A large one means they are widely dispersed.' },
      { q: 'What is the difference between variance and standard deviation?', a: 'Variance is the average squared deviation from the mean. Standard deviation is the square root of variance. Standard deviation is more interpretable because it is in the same units as the original data.' },
      { q: 'Why does the sample formula use n-1?', a: 'Using n-1 (Bessel\'s correction) corrects for the fact that a sample mean tends to be closer to the sample data than the true population mean is. This makes the sample standard deviation an unbiased estimator of the population standard deviation.' },
      { q: 'Can standard deviation be negative?', a: 'No. Standard deviation is always zero or positive. It equals zero only when all data points are identical (no variation). It cannot be negative because it is derived from squared deviations.' },
      { q: 'What is a good standard deviation?', a: 'There is no universally "good" standard deviation — it depends on context. For manufacturing, a tiny σ (high precision) is ideal. For investment returns, moderate σ (risk) is acceptable. Always interpret standard deviation relative to the mean and the domain.' },
      { q: 'How is standard deviation used in finance?', a: 'In finance, standard deviation measures volatility or risk. A stock with a standard deviation of 20% in annual returns is more volatile (riskier) than one with σ = 5%. The Sharpe ratio uses standard deviation to measure risk-adjusted returns.' },
      { q: 'What is the relationship between standard deviation and the normal distribution?', a: 'Many natural phenomena follow a normal (bell-shaped) distribution. Standard deviation defines how wide the bell curve is. The 68-95-99.7 rule describes the percentage of data within 1, 2, and 3 standard deviations of the mean in a normal distribution.' },
      { q: 'How do outliers affect standard deviation?', a: 'Outliers dramatically increase standard deviation because deviations are squared. One extreme value can greatly inflate σ. If outliers are present, the median absolute deviation (MAD) may be a more robust measure of spread.' },
    ]
  },

  'area-formula': {
    title: 'Area Formulas for All Shapes – Circle, Triangle, Rectangle & More',
    description: 'Complete reference for area formulas: rectangle, circle, triangle, trapezoid, ellipse, and more. Includes worked examples and unit conversion guide.',
    toolSlug: 'area',
    toolPath: '/calculators/geometry/area',
    pageType: 'formula',
    mathSolverEduType: 'Geometry',
    hero: {
      heading: 'Area Formulas: Every Shape Covered',
      subheading: 'Your complete reference for calculating area of any 2D shape. From basic rectangles to ellipses and sectors — each formula explained with variables, examples, and practical applications.'
    },
    formula: {
      expression: 'Rectangle: A = l × w  |  Circle: A = π × r²  |  Triangle: A = ½ × b × h  |  Trapezoid: A = ½(a+b) × h  |  Ellipse: A = π × a × b',
      explanation: 'Each 2D shape has its own area formula. The key is identifying the shape and the measurements you have available. All area calculations result in square units (cm², ft², m², etc.). The formulas describe the amount of 2D space enclosed by the shape\'s boundary.',
      variables: [
        { symbol: 'l', meaning: 'Length of a rectangle or square' },
        { symbol: 'w', meaning: 'Width of a rectangle or square' },
        { symbol: 'r', meaning: 'Radius of a circle (half the diameter)' },
        { symbol: 'b', meaning: 'Base of a triangle or parallel base of a trapezoid' },
        { symbol: 'h', meaning: 'Perpendicular height (altitude) of the shape' },
        { symbol: 'a, b', meaning: 'In trapezoid: the two parallel sides. In ellipse: semi-major and semi-minor axes.' },
        { symbol: 'π', meaning: 'Pi ≈ 3.14159...' },
      ]
    },
    examples: [
      { title: 'Room floor area (rectangle)', given: 'Room dimensions: 12 ft × 15 ft', solution: 'A = 12 × 15', answer: '180 sq ft' },
      { title: 'Circular garden', given: 'Garden radius = 3.5 meters', solution: 'A = π × 3.5² = 3.14159 × 12.25', answer: '38.48 m²' },
      { title: 'Triangular roof section', given: 'Base = 8 m, Height = 3.5 m', solution: 'A = ½ × 8 × 3.5 = ½ × 28', answer: '14 m²' },
    ],
    table: {
      headers: ['Shape', 'Formula', 'Variables'],
      rows: [
        ['Square', 'A = s²', 's = side length'],
        ['Rectangle', 'A = l × w', 'l = length, w = width'],
        ['Triangle', 'A = ½ × b × h', 'b = base, h = height'],
        ['Circle', 'A = π × r²', 'r = radius'],
        ['Trapezoid', 'A = ½(a + b) × h', 'a, b = parallel sides, h = height'],
        ['Ellipse', 'A = π × a × b', 'a = semi-major, b = semi-minor axis'],
        ['Parallelogram', 'A = b × h', 'b = base, h = perpendicular height'],
        ['Rhombus', 'A = ½ × d1 × d2', 'd1, d2 = diagonals'],
        ['Regular hexagon', 'A = (3√3/2) × s²', 's = side length'],
        ['Sector', 'A = ½ × r² × θ', 'r = radius, θ = angle in radians'],
      ]
    },
    prose: [
      { heading: 'How to Find Height for Triangle Area', body: 'The height (h) in the triangle area formula must be the perpendicular height — the straight-line distance from the base to the opposite vertex, measured at a right angle to the base. For a right triangle, this is simply one of the legs. For other triangles, you may need to calculate it using the Pythagorean theorem or trigonometry.' },
      { heading: 'Area Units and Conversion', body: 'Area is always expressed in square units. Common conversions: 1 m² = 10,000 cm²; 1 ft² = 144 in²; 1 acre = 43,560 ft²; 1 hectare = 10,000 m² = 2.471 acres; 1 km² = 1,000,000 m². When measuring a room in feet, always convert to the same unit before multiplying. Mixing feet and inches gives incorrect results.' }
    ],
    faqs: [
      { q: 'What is the formula for the area of a circle?', a: 'A = π × r², where r is the radius (half the diameter). For a circle with diameter 10: r = 5, A = π × 25 ≈ 78.54 square units.' },
      { q: 'How do I find the area of a triangle without the height?', a: 'Use Heron\'s formula: A = √(s(s-a)(s-b)(s-c)), where a, b, c are the three sides and s = (a+b+c)/2. This works for any triangle when all three sides are known.' },
      { q: 'What is the area of a regular hexagon?', a: 'A = (3√3/2) × s² ≈ 2.598 × s², where s is the side length. A hexagon with side 10 cm has area ≈ 259.8 cm².' },
      { q: 'How do I calculate the area of an irregular shape?', a: 'For irregular shapes, divide them into recognizable shapes (rectangles, triangles), calculate each area separately, then add them together. Alternatively, use integration for smooth curves.' },
      { q: 'What is the difference between area and perimeter?', a: 'Area measures the 2D space inside a shape (in square units). Perimeter measures the total length of the shape\'s boundary (in linear units). A 10×10 square has area 100 ft² and perimeter 40 ft.' },
      { q: 'How do I calculate how much flooring I need?', a: 'Calculate the room area in square feet. Add 10% waste factor for cuts and patterns. If buying tiles, divide total area by tile area to get number of tiles needed. For irregular rooms, divide into rectangles.' },
      { q: 'What is the area of a semicircle?', a: 'Area of a semicircle = ½ × π × r². For radius 6: A = ½ × π × 36 ≈ 56.55 square units.' },
      { q: 'How do I convert area between units?', a: 'To convert ft² to m²: multiply by 0.0929. To convert m² to ft²: multiply by 10.764. To convert acres to m²: multiply by 4047. To convert hectares to acres: multiply by 2.471.' },
    ]
  },

  'ohms-law-formula': {
    title: "Ohm's Law Formula – V = IR Explained with Examples",
    description: "Learn Ohm's Law V = IR with complete examples. Calculate voltage, current, and resistance. Includes power formulas and circuit applications.",
    toolSlug: 'ohms-law',
    toolPath: '/calculators/physics/ohms-law',
    pageType: 'formula',
    hero: {
      heading: "Ohm's Law: V = I × R",
      subheading: "The fundamental relationship governing electrical circuits — Ohm's Law relates voltage, current, and resistance. Master all four forms of the formula and the power equations that complete the picture."
    },
    formula: {
      expression: 'V = I × R  |  I = V / R  |  R = V / I  |  P = V × I = I² × R = V² / R',
      explanation: "Ohm's Law states that the voltage (V) across a conductor equals the current (I) flowing through it multiplied by its resistance (R). The formula can be rearranged to solve for any of the three variables. The power formulas extend Ohm's Law to calculate electrical power dissipated or consumed.",
      variables: [
        { symbol: 'V', meaning: 'Voltage in Volts (V) — the electrical potential difference' },
        { symbol: 'I', meaning: 'Current in Amperes (A) — the rate of charge flow' },
        { symbol: 'R', meaning: 'Resistance in Ohms (Ω) — opposition to current flow' },
        { symbol: 'P', meaning: 'Power in Watts (W) — rate of energy consumption' },
        { symbol: 'Ω', meaning: 'Ohm — unit of electrical resistance' },
      ]
    },
    steps: [
      { title: 'Identify what you need to find', detail: 'Determine whether you are solving for voltage (V), current (I), or resistance (R). Check which two values are given.' },
      { title: 'Select the correct formula', detail: 'V = IR (finding voltage). I = V/R (finding current). R = V/I (finding resistance). P = V×I or P = I²R or P = V²/R (finding power).' },
      { title: 'Plug in the known values', detail: 'Substitute your given values. Ensure units are consistent: V in Volts, I in Amperes, R in Ohms.' },
      { title: 'Perform the calculation', detail: 'This is a simple multiplication or division. The formula is algebraically simple but applies to enormously complex circuits.' },
      { title: 'Verify with power calculation', detail: "Check your answer by calculating power using P = VI. Cross-check with P = I²R or P = V²/R. All three should give the same power value." }
    ],
    examples: [
      { title: 'Finding resistance', given: 'Voltage = 12V, Current = 2A', solution: 'R = V/I = 12/2', answer: 'R = 6 Ohms; Power = 12×2 = 24 Watts' },
      { title: 'Finding current', given: 'Voltage = 120V (household), Resistance = 60 Ohms (light bulb)', solution: 'I = V/R = 120/60', answer: 'I = 2A; Power = 120×2 = 240 Watts' },
      { title: 'LED resistor calculation', given: 'Supply voltage = 5V, LED voltage drop = 2V, LED current = 20mA (0.02A)', solution: 'Voltage across resistor = 5-2 = 3V; R = V/I = 3/0.02', answer: 'R = 150 Ohms needed' },
    ],
    table: {
      headers: ['Find', 'Formula', 'Known Values Needed'],
      rows: [
        ['Voltage (V)', 'V = I × R', 'Current and Resistance'],
        ['Current (I)', 'I = V / R', 'Voltage and Resistance'],
        ['Resistance (R)', 'R = V / I', 'Voltage and Current'],
        ['Power (P)', 'P = V × I', 'Voltage and Current'],
        ['Power (P)', 'P = I² × R', 'Current and Resistance'],
        ['Power (P)', 'P = V² / R', 'Voltage and Resistance'],
      ]
    },
    prose: [
      { heading: "When Ohm's Law Applies (and When It Doesn't)", body: "Ohm's Law applies to ohmic materials — those where resistance remains constant regardless of voltage or current, at a fixed temperature. Most metal conductors (copper wire, resistors) are ohmic within normal operating ranges. However, non-ohmic components exist: diodes only conduct in one direction, light bulbs have resistance that changes with temperature, and transistors amplify current in complex ways. For these, Ohm's Law is a starting point but not the complete picture." },
      { heading: "Practical Circuit Applications", body: "Ohm's Law is used to design every electronic circuit. When choosing a resistor for an LED, you calculate R = (Supply V - LED V) / LED current. When diagnosing a short circuit, R approaches zero and I becomes dangerously large. When wiring a home's electrical system, knowing the current drawn by appliances (I = P/V) ensures circuit breakers are sized correctly." }
    ],
    faqs: [
      { q: "What is Ohm's Law in simple terms?", a: "Ohm's Law says: more voltage pushes more current through a circuit, and more resistance blocks current. The exact relationship is V = I × R (Voltage = Current × Resistance)." },
      { q: "Who discovered Ohm's Law?", a: "Georg Simon Ohm, a German physicist, published this relationship in 1827. The unit of electrical resistance, the Ohm (Ω), is named in his honor." },
      { q: "What is the difference between AC and DC Ohm's Law?", a: "For DC circuits, Ohm's Law applies directly with simple values. For AC circuits, resistance is replaced by impedance (Z), which includes capacitive and inductive reactance. V = IZ for AC circuits." },
      { q: "How do I use Ohm's Law to find amperage?", a: "Current (amperage) = Voltage / Resistance, or I = V/R. A 24V system with 8 Ohm resistance draws I = 24/8 = 3 Amperes." },
      { q: "What happens if resistance is zero?", a: "If resistance = 0 (a short circuit), current becomes theoretically infinite (I = V/0). In practice, the wire or component overheats and fails, or the circuit breaker trips to prevent damage." },
      { q: "How does Ohm's Law apply to batteries?", a: "Internal resistance of a battery (r) limits current output: I = EMF / (R + r), where EMF is the battery's electromotive force and R is the external resistance. A dead battery has higher internal resistance." },
      { q: "What is power in terms of Ohm's Law?", a: "Power = Voltage × Current = V × I. Substituting Ohm's Law: P = I²R = V²/R. These three forms let you calculate power from any two known circuit quantities." },
      { q: "What are the standard household voltages?", a: "Standard voltages: US/Canada: 120V (outlets), 240V (large appliances). Europe/UK: 230V. Japan: 100V. These affect current draw: a 1200W appliance draws 10A in the US (1200/120) but only 5.2A in Europe (1200/230)." },
    ]
  },

  'roi-formula': {
    title: 'ROI Formula – How to Calculate Return on Investment',
    description: 'Learn the ROI formula: ROI = (Net Profit / Cost) × 100. Calculate return on investment for marketing, real estate, and business projects with examples.',
    toolSlug: 'roi',
    toolPath: '/calculators/business/roi',
    pageType: 'formula',
    hero: {
      heading: 'ROI Formula: (Net Profit / Investment Cost) × 100',
      subheading: 'Return on Investment is the universal metric for evaluating profitability. Learn the formula, understand annualized ROI, and apply it to marketing campaigns, real estate, stocks, and business decisions.'
    },
    formula: {
      expression: 'ROI = (Net Return / Cost of Investment) × 100  |  Annualized ROI = ((1 + ROI)^(1/n) - 1) × 100',
      explanation: 'ROI measures the efficiency of an investment as a percentage. Divide net return (total return minus cost) by the cost of investment, then multiply by 100 to get a percentage. For multi-year investments, annualized ROI uses compound growth to give a per-year rate that is comparable across investments of different durations.',
      variables: [
        { symbol: 'ROI', meaning: 'Return on Investment as a percentage' },
        { symbol: 'Net Return', meaning: 'Total return minus the original investment cost' },
        { symbol: 'Cost', meaning: 'Original cost of the investment' },
        { symbol: 'n', meaning: 'Number of years the investment was held (for annualized ROI)' },
      ]
    },
    steps: [
      { title: 'Calculate net return', detail: 'Subtract the original investment from the total return received. Net Return = Final Value - Initial Cost. Include all revenue, dividends, and any sale proceeds.' },
      { title: 'Divide by the original cost', detail: 'Divide the net return by the original investment cost. This gives you the ROI as a decimal (e.g., 0.25 for 25%).' },
      { title: 'Convert to percentage', detail: 'Multiply by 100 to express as a percentage. ROI = (Net Return / Cost) × 100. A result of 25 means a 25% return on investment.' },
      { title: 'Annualize for multi-year investments', detail: 'For fair comparison, annualize: Annualized ROI = ((1 + ROI/100)^(1/n) - 1) × 100, where n = number of years. This accounts for the compounding effect of time.' }
    ],
    examples: [
      { title: 'Marketing campaign', given: 'Ad spend: $5,000. Revenue generated: $18,000', solution: 'Net Return = 18,000 - 5,000 = 13,000; ROI = (13,000/5,000) × 100', answer: 'ROI = 260% — for every $1 spent, $3.60 returned' },
      { title: 'Stock investment', given: 'Bought shares for $10,000. Sold for $14,500 after 3 years', solution: 'ROI = (4,500/10,000) × 100 = 45%; Annualized = ((1.45)^(1/3) - 1) × 100', answer: 'Total ROI = 45%; Annualized ROI = 13.2% per year' },
      { title: 'Rental property', given: 'Purchase: $250,000. Annual rent income: $24,000. Annual expenses: $8,000', solution: 'Net Annual Return = 24,000 - 8,000 = 16,000; ROI = (16,000/250,000) × 100', answer: 'Annual ROI = 6.4% (plus any appreciation)' },
    ],
    table: {
      headers: ['ROI %', 'Interpretation', 'Benchmark'],
      rows: [
        ['Below 0%', 'Loss — investment lost money', 'Avoid or exit'],
        ['0% – 5%', 'Low return', 'Below savings account rates'],
        ['6% – 10%', 'Moderate return', 'Near S&P 500 average (long-term ~7-10%)'],
        ['10% – 20%', 'Good return', 'Strong investment performance'],
        ['20% – 50%', 'Excellent return', 'Top-tier investment or marketing'],
        ['Above 50%', 'Outstanding return', 'Exceptional but scrutinize assumptions'],
        ['Above 100%', 'More than doubled investment', 'Verify calculations and sustainability'],
      ]
    },
    prose: [
      { heading: 'ROI vs. Other Return Metrics', body: 'ROI is simple and widely understood, but has limitations. It ignores the time value of money — a 50% ROI over 10 years is much less impressive than 50% in one year. Better alternatives for time-sensitive comparisons: IRR (Internal Rate of Return) accounts for timing of cash flows; NPV (Net Present Value) discounts future returns to today\'s value; CAGR (Compound Annual Growth Rate) shows year-over-year growth. Use ROI for quick comparisons, but use IRR or NPV for serious capital allocation decisions.' },
      { heading: 'The Biggest ROI Mistakes', body: 'Common errors in ROI calculation include: forgetting to include all costs (hidden fees, taxes, time, opportunity cost), not accounting for the time period, comparing ROI across different time horizons without annualizing, and cherry-picking favorable time windows for stock or crypto ROI claims. Always ask: "ROI over what time period?" and "What costs are excluded?"' }
    ],
    faqs: [
      { q: 'What is a good ROI?', a: 'A "good" ROI depends on the investment type and risk. For stocks, 7-10% annualized is considered solid (matching historical S&P 500 averages). For marketing, 3:1 ROI ($3 back for every $1 spent) is often a minimum threshold. For real estate, 8-12% annual ROI is strong.' },
      { q: 'How do I calculate ROI in Excel?', a: 'In Excel: = (B2 - A2) / A2 * 100, where A2 is the initial investment and B2 is the final value. This gives ROI as a percentage.' },
      { q: 'What is annualized ROI and why does it matter?', a: 'Annualized ROI converts total ROI to a yearly rate, allowing fair comparison across investments of different durations. A 100% ROI in 1 year is exceptional; 100% in 10 years is only 7.2% per year.' },
      { q: 'How is ROI different from profit margin?', a: 'ROI measures return relative to cost (efficiency of investment). Profit margin measures profit relative to revenue. A low-revenue product can have high ROI if costs are very low; a high-revenue product can have low profit margin if costs are also high.' },
      { q: 'How do I calculate marketing ROI?', a: 'Marketing ROI = (Revenue from campaign - Cost of campaign) / Cost of campaign × 100. Include all campaign costs: ad spend, creative, labor. Compare against the cost of goods to get true profitability.' },
      { q: 'What is negative ROI?', a: 'Negative ROI means the investment lost money — the net return was less than the cost. A negative ROI is always a loss. The question is whether the loss was acceptable given risk, strategy, or tax considerations.' },
      { q: 'How does ROI relate to IRR?', a: 'IRR (Internal Rate of Return) is the discount rate that makes NPV equal to zero — it is the time-adjusted ROI. For simple one-time investments with single exit, IRR is essentially the annualized ROI. For complex multi-period investments, IRR is more accurate.' },
      { q: 'Can ROI be over 100%?', a: 'Yes. An ROI over 100% means you more than doubled your money. A 200% ROI means you tripled it. ROI has no upper limit — some marketing campaigns or early-stage investments can achieve 500%+ ROI.' },
    ]
  },

  // ── STATISTICS ─────────────────────────────────────────────────────────────

  'z-score-formula': {
    title: 'Z-Score Formula – How to Calculate Standard Scores',
    description: 'Learn the z-score formula z = (x - μ) / σ with step-by-step examples. Understand how to interpret z-scores, find probabilities, and compare data across different scales.',
    toolSlug: 'z-score',
    toolPath: '/calculators/statistics/z-score',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Z-Score Formula: z = (x − μ) / σ',
      subheading: 'The z-score tells you how many standard deviations a data point is from the mean. Master this essential statistics formula to compare values across different datasets, find percentiles, and assess probabilities.',
    },
    formula: {
      expression: 'z = (x − μ) / σ  |  Sample: z = (x − x̄) / s  |  x = μ + z × σ',
      explanation: 'The z-score (or standard score) measures how many standard deviations a value x is from the mean μ. A positive z-score means x is above the mean; negative means below. Dividing by σ standardizes data so values from different distributions can be directly compared. The inverse formula recovers x from a known z-score.',
      variables: [
        { symbol: 'z', meaning: 'Z-score — number of standard deviations from the mean' },
        { symbol: 'x', meaning: 'The individual data point or raw score' },
        { symbol: 'μ (mu)', meaning: 'Population mean' },
        { symbol: 'x̄', meaning: 'Sample mean' },
        { symbol: 'σ (sigma)', meaning: 'Population standard deviation' },
        { symbol: 's', meaning: 'Sample standard deviation' },
      ],
    },
    steps: [
      { title: 'Find the mean (μ or x̄)', detail: 'Add all data values and divide by the count. If working with a known population mean, use that value directly.' },
      { title: 'Find the standard deviation (σ or s)', detail: 'Calculate the spread of the data. Use population standard deviation (σ) if you have the full dataset; sample standard deviation (s) if working from a sample.' },
      { title: 'Subtract the mean from your value', detail: 'Compute x − μ. A positive result means x is above average; negative means below average.' },
      { title: 'Divide by the standard deviation', detail: 'z = (x − μ) / σ. The result is the z-score. A z-score of 2 means x is 2 standard deviations above the mean.' },
      { title: 'Interpret the z-score', detail: 'Use a z-table (standard normal table) to find the probability of a value at or below this z-score. For example, z = 1.96 corresponds to the 97.5th percentile.' },
    ],
    examples: [
      { title: 'Exam score comparison', given: 'Score = 85, Class mean = 72, Standard deviation = 9', solution: 'z = (85 − 72) / 9 = 13 / 9', answer: 'z ≈ 1.44 (score is 1.44 standard deviations above the mean, ~92nd percentile)' },
      { title: 'Body weight assessment', given: 'Weight = 190 lbs, Population mean = 175 lbs, σ = 30 lbs', solution: 'z = (190 − 175) / 30 = 15 / 30', answer: 'z = 0.5 (slightly above average, ~69th percentile)' },
      { title: 'Finding the raw score from z', given: 'z = −1.5, mean = 100, σ = 15', solution: 'x = 100 + (−1.5) × 15 = 100 − 22.5', answer: 'x = 77.5 (the value at the 6.7th percentile)' },
    ],
    table: {
      headers: ['Z-Score', 'Percentile (approx.)', 'Interpretation'],
      rows: [
        ['−3.0', '0.13%', 'Extremely low — 3 SD below mean'],
        ['−2.0', '2.3%', 'Very low — 2 SD below mean'],
        ['−1.0', '15.9%', 'Below average'],
        ['0.0', '50%', 'Exactly average'],
        ['1.0', '84.1%', 'Above average'],
        ['1.96', '97.5%', 'Common 95% confidence cutoff'],
        ['2.0', '97.7%', 'Well above average'],
        ['3.0', '99.87%', 'Extremely high — 3 SD above mean'],
      ],
    },
    prose: [
      { heading: 'Why Z-Scores Are Useful', body: 'Z-scores standardize data from completely different scales onto a common scale. You can compare a student\'s performance on a math test (mean 65, σ 12) with their performance on an English test (mean 78, σ 8) by converting both scores to z-scores. Whichever has the higher z-score is the relatively better performance, even though the raw scores and scales differ.' },
      { heading: 'Z-Scores and the Normal Distribution', body: 'Z-scores are most meaningful when data is approximately normally distributed. In a normal distribution, z-scores correspond directly to probabilities via the standard normal table. The 68-95-99.7 rule says 68% of data falls within z = ±1, 95% within z = ±2, and 99.7% within z = ±3. Outliers are typically defined as values with |z| > 2 or |z| > 3.' },
    ],
    faqs: [
      { q: 'What is a z-score in simple terms?', a: 'A z-score tells you how unusual a value is compared to the average. A z-score of 0 means perfectly average. A z-score of 2 means the value is 2 standard deviations above average — more extreme than about 97.7% of values.' },
      { q: 'Can a z-score be negative?', a: 'Yes. A negative z-score means the value is below the mean. z = −1 means the value is 1 standard deviation below average. A z-score of 0 is exactly at the mean.' },
      { q: 'What is a good z-score?', a: '"Good" depends on context. In quality control, |z| < 2 is acceptable. In hypothesis testing, |z| > 1.96 typically indicates statistical significance at the 5% level. For detecting outliers, |z| > 3 is a common threshold.' },
      { q: 'What is the z-score for the 95th percentile?', a: 'The z-score corresponding to the 95th percentile is approximately 1.645. For the 97.5th percentile (used in two-tailed 95% confidence intervals), z = 1.96.' },
      { q: 'How do I use a z-score table?', a: 'Look up the integer and first decimal of your z-score in the row, and the second decimal in the column. The cell value is the cumulative probability (area to the left under the normal curve).' },
      { q: 'What is the difference between a z-score and a t-score?', a: 'Z-scores use the known population standard deviation and are used with large samples. T-scores use the sample standard deviation and are used when the population SD is unknown or sample size is small (n < 30). T-distributions have heavier tails.' },
      { q: 'How is a z-score used in hypothesis testing?', a: 'In a z-test, you compute a z-statistic from sample data and compare it to critical values (e.g., ±1.96 for 5% significance). If the computed z exceeds the critical value, you reject the null hypothesis.' },
      { q: 'What does a z-score of 1.96 mean?', a: 'A z-score of 1.96 corresponds to the 97.5th percentile. It means the value is higher than 97.5% of all values in a normal distribution. It is used as the critical value for two-tailed 95% confidence intervals.' },
    ],
  },

  'how-to-z-score': {
    title: 'How to Calculate a Z-Score – Step-by-Step Guide',
    description: 'Learn how to calculate a z-score step by step. Convert raw scores to standard scores, use z-tables, and find percentiles with worked examples.',
    toolSlug: 'z-score',
    toolPath: '/calculators/statistics/z-score',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate a Z-Score: Step-by-Step',
      subheading: 'This complete guide walks you through computing z-scores from raw data, reading z-tables, and using z-scores to find probabilities and compare performance across datasets.',
    },
    steps: [
      { title: 'Identify your data point (x)', detail: 'This is the individual value you want to standardize. It could be a test score, measurement, price, or any numeric value.' },
      { title: 'Find or calculate the mean', detail: 'If you have a dataset, add all values and divide by count. If using a known population (e.g., national test average), use the published mean.' },
      { title: 'Find or calculate the standard deviation', detail: 'Calculate how spread out the data is. Use σ for populations, s for samples. Most statistical problems provide this or you calculate it from the dataset.' },
      { title: 'Apply the z-score formula', detail: 'z = (x − mean) / standard deviation. Subtract the mean first, then divide by SD. Keep track of whether z is positive or negative.' },
      { title: 'Look up the probability in a z-table (optional)', detail: 'If you need a percentile or probability, use a standard normal table. Find your z-score row and column. The table gives the cumulative probability (P(Z < z)).' },
      { title: 'Interpret your result', detail: 'A z-score between −1 and +1 is within 1 standard deviation of the mean (fairly normal). Outside ±2 is unusual. Outside ±3 is very rare (less than 0.3% probability).' },
    ],
    examples: [
      { title: 'Class test ranking', given: 'Test scores: mean = 74, SD = 8. You scored 90.', solution: 'z = (90 − 74) / 8 = 16 / 8 = 2.0', answer: 'z = 2.0 → 97.7th percentile. Better than 97.7% of the class.' },
      { title: 'Manufacturing tolerance', given: 'Target weight: 500g, SD = 5g. A product weighs 488g.', solution: 'z = (488 − 500) / 5 = −12 / 5 = −2.4', answer: 'z = −2.4. Only 0.82% of products would be this light or lighter — likely defective.' },
      { title: 'IQ scoring', given: 'IQ test: mean = 100, SD = 15. Score = 130.', solution: 'z = (130 − 100) / 15 = 30 / 15 = 2.0', answer: 'z = 2.0 → 97.7th percentile. Equivalent to "gifted" range.' },
    ],
    faqs: [
      { q: 'Do I need the full dataset to calculate a z-score?', a: 'No. You only need the data point (x), the mean (μ), and the standard deviation (σ). These are often given directly in statistics problems.' },
      { q: 'How do I calculate a z-score in Excel?', a: 'Use =STANDARDIZE(x, mean, standard_dev) or manually: =(A1 - AVERAGE(A:A)) / STDEV(A:A) for each data point. Excel\'s NORM.S.DIST function converts z-scores to probabilities.' },
      { q: 'What if my data is not normally distributed?', a: 'You can still calculate z-scores, but interpreting them using a normal probability table will be inaccurate. Use z-scores with normal data or apply transformations (log, square root) to normalize skewed data.' },
      { q: 'How do I find the z-score for a proportion?', a: 'For a sample proportion p̂ with population proportion p: z = (p̂ − p) / √(p(1−p)/n). This is used in tests about population proportions.' },
      { q: 'What is the z-score for a 99% confidence interval?', a: 'For a 99% two-tailed confidence interval, z = 2.576. For 95%, z = 1.96. For 90%, z = 1.645.' },
      { q: 'Can I compare z-scores from two different tests?', a: 'Yes — this is one of the main uses of z-scores. A z-score of 1.5 on a physics test and 1.5 on a history test represent exactly the same relative performance within each course, regardless of the different raw score scales.' },
      { q: 'What is a z-test?', a: 'A z-test is a hypothesis test that uses z-scores to determine whether a sample mean (or proportion) is significantly different from a population value. It requires knowing the population standard deviation.' },
      { q: 'How many standard deviations is a z-score of 2.5?', a: 'A z-score of 2.5 means the value is exactly 2.5 standard deviations above the mean, corresponding to the 99.38th percentile.' },
    ],
  },

  'confidence-interval-formula': {
    title: 'Confidence Interval Formula – How to Calculate CI',
    description: 'Learn the confidence interval formula CI = x̄ ± z*(σ/√n). Includes step-by-step examples for 95% and 99% confidence intervals with margin of error calculations.',
    toolSlug: 'confidence-interval',
    toolPath: '/calculators/statistics/confidence-interval',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Confidence Interval Formula: x̄ ± z* × (σ / √n)',
      subheading: 'A confidence interval gives a range of plausible values for a population parameter based on sample data. Learn the formula, how to choose the right z* or t* value, and how to interpret confidence intervals correctly.',
    },
    formula: {
      expression: 'CI = x̄ ± z* × (σ / √n)  |  Margin of Error (E) = z* × (σ / √n)  |  t-based: CI = x̄ ± t* × (s / √n)',
      explanation: 'The confidence interval for a population mean uses the sample mean (x̄) plus or minus the margin of error. The margin of error is the critical value (z* or t*) multiplied by the standard error (σ/√n or s/√n). Use z* when σ is known or n ≥ 30; use t* (with n−1 degrees of freedom) for small samples with unknown σ.',
      variables: [
        { symbol: 'x̄', meaning: 'Sample mean' },
        { symbol: 'z*', meaning: 'Critical value from standard normal distribution (e.g., 1.96 for 95%)' },
        { symbol: 't*', meaning: 'Critical value from t-distribution (for small samples)' },
        { symbol: 'σ', meaning: 'Population standard deviation (known)' },
        { symbol: 's', meaning: 'Sample standard deviation (estimated from data)' },
        { symbol: 'n', meaning: 'Sample size' },
        { symbol: '√n', meaning: 'Square root of sample size — denominator of standard error' },
      ],
    },
    steps: [
      { title: 'Choose your confidence level', detail: 'Common choices: 90% (z* = 1.645), 95% (z* = 1.96), 99% (z* = 2.576). Higher confidence → wider interval. Most research uses 95%.' },
      { title: 'Calculate the standard error', detail: 'SE = σ/√n (if σ is known) or s/√n (if using sample SD). Standard error measures how much the sample mean varies from the true population mean.' },
      { title: 'Compute the margin of error', detail: 'E = z* × SE. For example, z* = 1.96, SE = 2.5 → E = 1.96 × 2.5 = 4.9. The margin of error defines the half-width of the confidence interval.' },
      { title: 'Build the confidence interval', detail: 'Lower bound = x̄ − E; Upper bound = x̄ + E. Write as (x̄ − E, x̄ + E). For x̄ = 50, E = 4.9: CI = (45.1, 54.9).' },
      { title: 'Interpret correctly', detail: 'A 95% CI means: if you repeated the sampling procedure 100 times, about 95 of those intervals would contain the true population mean. It does NOT mean there is a 95% chance the true mean is in this specific interval.' },
    ],
    examples: [
      { title: '95% confidence interval', given: 'Sample mean = 82, σ = 12, n = 36', solution: 'SE = 12/√36 = 12/6 = 2; E = 1.96 × 2 = 3.92', answer: '95% CI = (78.08, 85.92)' },
      { title: '99% confidence interval', given: 'Sample mean = 500, s = 40, n = 64', solution: 'SE = 40/√64 = 40/8 = 5; E = 2.576 × 5 = 12.88', answer: '99% CI = (487.12, 512.88)' },
      { title: 'Finding required sample size', given: 'Desired margin of error = 3, σ = 15, 95% confidence', solution: 'n = (z* × σ / E)² = (1.96 × 15 / 3)² = (9.8)² = 96.04', answer: 'Need at least n = 97 people' },
    ],
    table: {
      headers: ['Confidence Level', 'z* (critical value)', 'Typical Use'],
      rows: [
        ['80%', '1.282', 'Exploratory research, loose estimates'],
        ['90%', '1.645', 'General research, engineering tolerances'],
        ['95%', '1.960', 'Most academic and scientific research'],
        ['99%', '2.576', 'Medical research, high-stakes decisions'],
        ['99.9%', '3.291', 'Safety-critical applications'],
      ],
    },
    prose: [
      { heading: 'The Most Common Misinterpretation of Confidence Intervals', body: 'Many people think "95% confidence interval" means there is a 95% chance the true mean is inside the interval. This is wrong. The true population mean is fixed — it either is or isn\'t in your interval. The 95% refers to the long-run frequency: if you took many random samples and built a CI from each, 95% of those intervals would contain the true mean. Your specific CI either captures it or not.' },
      { heading: 'How Sample Size Affects the Confidence Interval', body: 'Larger samples produce narrower confidence intervals (more precision) because the standard error SE = σ/√n decreases as n increases. Doubling the sample size reduces the margin of error by a factor of √2 ≈ 1.41. To halve the margin of error, you need to quadruple the sample size. This is why large-scale surveys cost much more to achieve high precision.' },
    ],
    faqs: [
      { q: 'What is a 95% confidence interval?', a: 'A 95% CI is a range computed from sample data that, in repeated sampling, would contain the true population parameter 95% of the time. It reflects both the estimate and its uncertainty.' },
      { q: 'What is the critical value for a 95% confidence interval?', a: 'For a two-tailed 95% CI using the normal distribution, z* = 1.96. For small samples using the t-distribution, t* depends on degrees of freedom (n−1). At large n, t* ≈ 1.96.' },
      { q: 'How do I make a confidence interval narrower?', a: 'Increase sample size (n), or reduce confidence level (e.g., use 90% instead of 95%). A larger n reduces the standard error, which reduces the margin of error.' },
      { q: 'When do I use a t-interval vs a z-interval?', a: 'Use a z-interval when σ is known or when n ≥ 30. Use a t-interval (with t* from t-table at n−1 df) when σ is unknown and n < 30.' },
      { q: 'Can a confidence interval include negative values?', a: 'Yes, if the mean and margin of error allow it. A CI of (−3, 7) is perfectly valid and means the population mean could plausibly be negative, zero, or positive.' },
      { q: 'What is the margin of error in a poll?', a: 'In political polling, margin of error is the half-width of the 95% confidence interval for a proportion. "Candidate A leads 52% to 48%, margin of error ±3%" means the true support could be anywhere from 49% to 55% for Candidate A.' },
      { q: 'How is confidence interval used in A/B testing?', a: 'In A/B testing, you compare confidence intervals for conversion rates of two variants. If the CIs do not overlap, the difference is statistically significant at that confidence level.' },
      { q: 'Does a wider confidence interval mean less confidence?', a: 'Paradoxically no — a wider CI corresponds to a higher confidence level. A 99% CI is wider than a 95% CI for the same data. Wider means more confident of capturing the true value.' },
    ],
  },

  'variance-formula': {
    title: 'Variance Formula – Population and Sample Variance Explained',
    description: 'Learn the variance formula for population σ² = Σ(xi−μ)²/N and sample s² = Σ(xi−x̄)²/(n−1). Includes examples, interpretation, and relationship to standard deviation.',
    toolSlug: 'standard-deviation',
    toolPath: '/calculators/statistics/standard-deviation',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Variance Formula: σ² = Σ(xi − μ)² / N',
      subheading: 'Variance quantifies the spread of data around the mean. Learn both population and sample variance formulas, understand why variance is squared, and discover how it connects to standard deviation.',
    },
    formula: {
      expression: 'Population: σ² = Σ(xi − μ)² / N  |  Sample: s² = Σ(xi − x̄)² / (n − 1)  |  σ = √σ²',
      explanation: 'Variance measures average squared deviation from the mean. Each data point\'s deviation from the mean is squared (to make all terms positive and penalize larger deviations more), then all squared deviations are averaged. Population variance (σ²) divides by N. Sample variance (s²) divides by n−1 (Bessel\'s correction) for an unbiased estimate. Standard deviation is the square root of variance.',
      variables: [
        { symbol: 'σ²', meaning: 'Population variance (sigma squared)' },
        { symbol: 's²', meaning: 'Sample variance' },
        { symbol: 'xi', meaning: 'Each individual data value' },
        { symbol: 'μ', meaning: 'Population mean' },
        { symbol: 'x̄', meaning: 'Sample mean' },
        { symbol: 'N', meaning: 'Population size (total number of values)' },
        { symbol: 'n', meaning: 'Sample size' },
        { symbol: 'Σ', meaning: 'Sum of all terms' },
      ],
    },
    steps: [
      { title: 'Calculate the mean', detail: 'Sum all data values and divide by the count. For {4, 8, 6, 5, 3, 2, 8, 9, 2, 5}: sum = 52, n = 10, mean = 5.2.' },
      { title: 'Subtract the mean from each value', detail: 'Find (xi − x̄) for each data point. Keep negatives — they will be squared in the next step.' },
      { title: 'Square each deviation', detail: 'Compute (xi − x̄)² for each point. This removes negatives and gives greater weight to larger deviations from the mean.' },
      { title: 'Sum all squared deviations', detail: 'Add all (xi − x̄)² values to get the sum of squares (SS).' },
      { title: 'Divide by N or (n−1)', detail: 'Population variance: SS / N. Sample variance: SS / (n−1). Choose based on whether your data is the entire population or a sample.' },
    ],
    examples: [
      { title: 'Small dataset', given: 'Data: {2, 4, 4, 4, 5, 5, 7, 9} (population)', solution: 'Mean = 5; Deviations squared: 9, 1, 1, 1, 0, 0, 4, 16; Sum = 32; σ² = 32/8', answer: 'σ² = 4 (standard deviation σ = 2)' },
      { title: 'Stock returns (sample)', given: 'Monthly returns (%): {3, -1, 5, 2, -2, 4} (sample)', solution: 'Mean = 1.833; SS = 27.333; s² = 27.333/(6-1) = 27.333/5', answer: 's² ≈ 5.47 (standard deviation s ≈ 2.34%)' },
    ],
    table: {
      headers: ['Dataset', 'Mean', 'Variance', 'Std Dev', 'Interpretation'],
      rows: [
        ['{5, 5, 5, 5}', '5', '0', '0', 'No variability — all identical'],
        ['{4, 5, 5, 6}', '5', '0.5', '0.71', 'Very low spread'],
        ['{3, 5, 5, 7}', '5', '2', '1.41', 'Moderate spread'],
        ['{1, 3, 7, 9}', '5', '10.67', '3.27', 'High spread'],
        ['{0, 5, 5, 10}', '5', '12.5', '3.54', 'Very high spread'],
      ],
    },
    prose: [
      { heading: 'Why Variance Is Squared', body: 'Variance squares the deviations for two reasons. First, deviations can be positive or negative, and simply averaging them would give zero (positive and negative cancel out). Second, squaring gives more weight to outliers — a deviation of 4 contributes 16 to variance, while a deviation of 2 contributes only 4. This makes variance sensitive to extreme values, which is mathematically useful even if it means variance is in different units than the original data (hence taking the square root to get standard deviation).' },
      { heading: 'Variance in Finance and Risk Management', body: 'Portfolio variance measures investment risk. Modern Portfolio Theory (Markowitz) uses variance and covariance to optimize asset allocation — minimizing variance for a given expected return. For a two-asset portfolio: σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂, where w is weight, σ² is variance, and ρ is correlation. Diversification works because adding negatively correlated assets reduces portfolio variance.' },
    ],
    faqs: [
      { q: 'What is variance in simple terms?', a: 'Variance measures how spread out data values are from the mean. A variance of 0 means all values are identical. Larger variance means values are more dispersed.' },
      { q: 'What is the difference between variance and standard deviation?', a: 'Variance is the average squared deviation. Standard deviation is the square root of variance. Standard deviation is more intuitive because it is in the same units as the original data.' },
      { q: 'When do I use population vs sample variance?', a: 'Use population variance (σ², divide by N) when you have data for the entire group. Use sample variance (s², divide by n−1) when your data is a subset drawn from a larger population.' },
      { q: 'Can variance be negative?', a: 'No. Variance is always zero or positive because it is based on squared values. Variance equals zero only when all data points are identical.' },
      { q: 'What is Bessel\'s correction?', a: 'Bessel\'s correction is the use of n−1 (instead of n) in the denominator of sample variance. It corrects for the fact that a sample mean tends to underestimate the spread from the true population mean, producing an unbiased estimator.' },
      { q: 'How do I calculate variance in Excel?', a: 'Population variance: =VAR.P(range). Sample variance: =VAR.S(range) or =VAR(range). Standard deviation: =STDEV.P(range) for population, =STDEV.S(range) for sample.' },
      { q: 'What is pooled variance?', a: 'Pooled variance combines variance estimates from two or more groups (assuming equal population variances). Used in two-sample t-tests: s²_pooled = ((n₁−1)s₁² + (n₂−1)s₂²) / (n₁+n₂−2).' },
      { q: 'How does variance relate to covariance?', a: 'Covariance measures how two variables vary together. Variance is covariance of a variable with itself: Var(X) = Cov(X, X). Correlation standardizes covariance: r = Cov(X,Y) / (σ_X × σ_Y).' },
    ],
  },

  'mean-formula': {
    title: 'Mean Formula – Arithmetic, Geometric & Weighted Mean Explained',
    description: 'Learn all three mean formulas: arithmetic mean x̄ = Σx/n, geometric mean, and weighted mean. Includes when to use each with real-world examples.',
    toolSlug: 'mean-median-mode',
    toolPath: '/calculators/statistics/mean-median-mode',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Mean Formulas: Arithmetic, Geometric & Weighted',
      subheading: 'The mean is one of the most fundamental statistics. Discover the three types of mean, when each applies, and how to avoid the common mistake of using arithmetic mean when geometric or weighted mean is required.',
    },
    formula: {
      expression: 'Arithmetic: x̄ = (Σxi) / n  |  Geometric: GM = (x₁×x₂×…×xn)^(1/n)  |  Weighted: x̄_w = Σ(wi×xi) / Σwi',
      explanation: 'The arithmetic mean sums all values and divides by the count — best for additive quantities. The geometric mean takes the nth root of the product of all values — best for multiplicative quantities (growth rates, ratios). The weighted mean multiplies each value by its importance weight before averaging — best when values have different relevance or frequency.',
      variables: [
        { symbol: 'x̄', meaning: 'Arithmetic mean (simple average)' },
        { symbol: 'xi', meaning: 'Each individual data value' },
        { symbol: 'n', meaning: 'Number of data values' },
        { symbol: 'Σ', meaning: 'Sum of all values' },
        { symbol: 'GM', meaning: 'Geometric mean' },
        { symbol: 'wi', meaning: 'Weight assigned to data point xi' },
      ],
    },
    steps: [
      { title: 'Determine which mean to use', detail: 'Arithmetic mean: for simple averages of lengths, temperatures, scores. Geometric mean: for growth rates, investment returns, ratios. Weighted mean: when values have different importance (e.g., GPA, course grades with different credit hours).' },
      { title: 'For arithmetic mean: sum and divide', detail: 'Add all values: Σxi. Divide by count: n. Result = x̄.' },
      { title: 'For geometric mean: multiply and root', detail: 'Multiply all values together, then take the nth root. For 3 values: GM = (a × b × c)^(1/3). Equivalent to taking the arithmetic mean of logarithms.' },
      { title: 'For weighted mean: weight and divide', detail: 'Multiply each value by its weight: wi × xi. Sum all weighted values: Σ(wi × xi). Divide by total weight: Σwi.' },
    ],
    examples: [
      { title: 'Course GPA (weighted mean)', given: 'Math: grade 3.5 (4 credits), English: grade 3.0 (3 credits), Science: grade 4.0 (4 credits)', solution: 'x̄_w = (3.5×4 + 3.0×3 + 4.0×4) / (4+3+4) = (14 + 9 + 16) / 11 = 39/11', answer: 'GPA = 3.545' },
      { title: 'Investment return (geometric mean)', given: 'Annual returns: Year 1: +20%, Year 2: −10%, Year 3: +15%', solution: 'Convert to growth factors: 1.20, 0.90, 1.15; GM = (1.20 × 0.90 × 1.15)^(1/3) = (1.242)^(0.333)', answer: 'GM ≈ 7.5% average annual return (vs. 8.33% arithmetic — arithmetic overstates)' },
      { title: 'Arithmetic mean', given: 'Test scores: 72, 85, 90, 68, 77', solution: 'x̄ = (72+85+90+68+77) / 5 = 392/5', answer: 'Mean = 78.4' },
    ],
    table: {
      headers: ['Type', 'Formula', 'Best Used For'],
      rows: [
        ['Arithmetic mean', 'Σx / n', 'Averages of measurements, scores, prices'],
        ['Geometric mean', '(∏xi)^(1/n)', 'Compound growth rates, investment returns, ratios'],
        ['Weighted mean', 'Σ(w·x) / Σw', 'GPA, weighted surveys, importance-weighted data'],
        ['Harmonic mean', 'n / Σ(1/xi)', 'Rates and speeds (average speed over equal distances)'],
        ['Median', 'Middle value', 'Skewed data, income, home prices'],
      ],
    },
    prose: [
      { heading: 'Why Arithmetic Mean Can Mislead', body: 'Using arithmetic mean for investment returns gives an inflated picture of performance. If a portfolio gains 50% one year and loses 50% the next, the arithmetic mean is 0%, suggesting no change. But the true result: $1,000 → $1,500 → $750 — a 25% loss. The geometric mean correctly gives −13.4% per year. Always use geometric mean for compound growth rates.' },
      { heading: 'Mean vs. Median: When Each Matters', body: 'For symmetric distributions, mean and median are similar. For skewed data, the mean is pulled toward the tail. US household income has a mean around $100,000 but a median around $70,000 — because a small number of very high earners pull the mean up. The median better represents the "typical" household. In real estate, housing prices, and income analysis, median is usually the more meaningful statistic.' },
    ],
    faqs: [
      { q: 'What is the arithmetic mean?', a: 'The arithmetic mean is the sum of all values divided by the count: x̄ = Σxi/n. It is the most common type of average, used for test scores, temperatures, prices, and most everyday averages.' },
      { q: 'When should I use the geometric mean?', a: 'Use the geometric mean for quantities that multiply together: compound interest rates, population growth rates, investment returns, and ratios. It gives the equivalent constant rate that produces the same cumulative result.' },
      { q: 'What is a weighted average and when is it used?', a: 'A weighted average gives different importance to different values. GPA calculations weight each grade by credit hours. Composite test scores weight subscores by their relative importance. Index calculations weight components by market cap.' },
      { q: 'Can the mean be greater than the maximum value?', a: 'No. The arithmetic mean must always be between the minimum and maximum values in the dataset. If your calculated mean exceeds the maximum, check your arithmetic.' },
      { q: 'What is the mean of an empty dataset?', a: 'The mean is undefined for an empty dataset (dividing by zero is undefined). In software, this often returns NaN (Not a Number) or an error.' },
      { q: 'How is mean used in the normal distribution?', a: 'In a normal distribution, the mean is the center (peak) of the bell curve. The distribution is symmetric around the mean. The mean, median, and mode are all equal in a perfect normal distribution.' },
      { q: 'What is the harmonic mean and when is it used?', a: 'The harmonic mean = n / Σ(1/xi). It is used for averages of rates and speeds. If you drive the same distance at 40 mph and 60 mph, the average speed is the harmonic mean: 2/(1/40 + 1/60) = 48 mph, not (40+60)/2 = 50 mph.' },
      { q: 'Why is the mean sensitive to outliers?', a: 'Because every data point contributes equally to the sum. A single extreme value shifts the sum dramatically. Adding one billionaire to a survey of 1,000 people makes the mean income skyrocket while leaving 999 people unchanged. Median is resistant to outliers.' },
    ],
  },

  // ── TRIGONOMETRY ───────────────────────────────────────────────────────────

  'sine-formula': {
    title: 'Sine Formula – sin(θ) Explained with Examples',
    description: 'Learn the sine formula sin(θ) = opposite / hypotenuse. Includes the unit circle, inverse sine, sine rule, and real-world applications in waves and engineering.',
    toolSlug: 'sine',
    toolPath: '/calculators/trigonometry/sine',
    pageType: 'formula',
    mathSolverEduType: 'Trigonometry',
    hero: {
      heading: 'Sine Formula: sin(θ) = Opposite / Hypotenuse',
      subheading: 'Sine is one of the three fundamental trigonometric functions. Learn how to calculate sine from right triangles and the unit circle, find angles using inverse sine, and apply sine to wave motion, engineering, and navigation.',
    },
    formula: {
      expression: 'sin(θ) = Opposite / Hypotenuse  |  θ = arcsin(x)  |  sin²(θ) + cos²(θ) = 1',
      explanation: 'In a right triangle, sine of angle θ equals the length of the side opposite θ divided by the hypotenuse. On the unit circle, sin(θ) is the y-coordinate of the point at angle θ. The Pythagorean identity sin²(θ) + cos²(θ) = 1 connects sine and cosine. Inverse sine (arcsin) recovers the angle from a sine value.',
      variables: [
        { symbol: 'θ', meaning: 'The angle in degrees or radians' },
        { symbol: 'Opposite', meaning: 'The side of the right triangle opposite to angle θ' },
        { symbol: 'Hypotenuse', meaning: 'The longest side of the right triangle (opposite the 90° angle)' },
        { symbol: 'arcsin / sin⁻¹', meaning: 'Inverse sine — finds the angle given a sine value' },
      ],
    },
    steps: [
      { title: 'Identify the angle and the right triangle sides', detail: 'Label the hypotenuse (longest side), the side opposite your angle (opposite), and the side adjacent to your angle (adjacent).' },
      { title: 'Apply sin(θ) = Opposite / Hypotenuse', detail: 'Divide the opposite side length by the hypotenuse. The result is always between −1 and 1.' },
      { title: 'Use a calculator for the angle or sine value', detail: 'To find sin(30°), use a calculator: sin(30°) = 0.5. To find the angle when sin(θ) = 0.707: θ = arcsin(0.707) = 45°.' },
      { title: 'Apply to the problem', detail: 'If you know an angle and hypotenuse: Opposite = sin(θ) × Hypotenuse. If you know opposite and hypotenuse: θ = arcsin(Opposite/Hypotenuse).' },
    ],
    examples: [
      { title: 'Finding the opposite side', given: 'Right triangle with angle θ = 35°, hypotenuse = 20 m', solution: 'Opposite = sin(35°) × 20 = 0.5736 × 20', answer: 'Opposite side = 11.47 m' },
      { title: 'Finding the angle', given: 'Opposite = 8, Hypotenuse = 10', solution: 'sin(θ) = 8/10 = 0.8; θ = arcsin(0.8)', answer: 'θ ≈ 53.13°' },
      { title: 'Wave height', given: 'Sound wave: A sin(θ) where A = 3 and θ = 90°', solution: 'Height = 3 × sin(90°) = 3 × 1', answer: 'Maximum wave height = 3 (amplitude)' },
    ],
    table: {
      headers: ['Angle (θ)', 'sin(θ)', 'Exact Value'],
      rows: [
        ['0°', '0', '0'],
        ['30°', '0.5', '1/2'],
        ['45°', '0.7071', '√2/2'],
        ['60°', '0.8660', '√3/2'],
        ['90°', '1', '1'],
        ['120°', '0.8660', '√3/2'],
        ['180°', '0', '0'],
        ['270°', '−1', '−1'],
        ['360°', '0', '0'],
      ],
    },
    prose: [
      { heading: 'Sine on the Unit Circle', body: 'On a unit circle (radius = 1), the sine of an angle is the y-coordinate of the point on the circle at that angle. This extends sine beyond 0°–90° to all angles. At 90° the y-coordinate is 1 (maximum); at 270° it is −1 (minimum). Sine is periodic with period 360° (or 2π radians), meaning sin(θ + 360°) = sin(θ).' },
      { heading: 'Sine Waves in the Real World', body: 'Sine waves model oscillating phenomena: sound waves, electromagnetic waves, AC electrical current, tides, pendulum motion, and seasonal temperature variation. The general sine wave equation y = A·sin(Bx + C) + D has amplitude A, frequency B, phase shift C, and vertical displacement D. Understanding sine is foundational to physics, engineering, signal processing, and music.' },
    ],
    faqs: [
      { q: 'What is sine used for?', a: 'Sine is used to find sides and angles of triangles, model wave motion and oscillations, analyze AC circuits, describe circular motion, and in countless engineering and physics applications.' },
      { q: 'What is the range of the sine function?', a: 'Sine always produces values between −1 and 1 (inclusive). sin(θ) ∈ [−1, 1] for any angle θ.' },
      { q: 'What is the difference between sin and arcsin?', a: 'sin(θ) takes an angle and gives a ratio. arcsin(x) (or sin⁻¹(x)) takes a ratio and gives the angle. arcsin is defined for inputs in [−1, 1] and outputs in [−90°, 90°].' },
      { q: 'Why is sin(90°) = 1?', a: 'In a right triangle, if the angle is 90°, the opposite side is the hypotenuse itself (they coincide), so Opposite/Hypotenuse = 1. On the unit circle, the point at 90° is (0, 1), so y = 1 = sin(90°).' },
      { q: 'Is sine in degrees or radians?', a: 'Sine works with both. On most calculators, ensure the correct mode (DEG or RAD). Common: 30° = π/6 rad, 45° = π/4 rad, 90° = π/2 rad.' },
      { q: 'What is the Law of Sines?', a: 'Law of Sines: a/sin(A) = b/sin(B) = c/sin(C), where a, b, c are side lengths and A, B, C are opposite angles. Used for non-right triangles when you know two angles and one side, or two sides and one non-included angle.' },
      { q: 'How is sine related to cosine?', a: 'cos(θ) = sin(90° − θ). They are phase-shifted by 90°. The Pythagorean identity: sin²(θ) + cos²(θ) = 1 relates them for any angle.' },
      { q: 'Can sine be greater than 1?', a: 'No. For real angles, sin(θ) is always between −1 and 1. Values outside this range are impossible and indicate a calculation error.' },
    ],
  },

  'cosine-formula': {
    title: 'Cosine Formula – cos(θ) Explained with Examples',
    description: 'Learn the cosine formula cos(θ) = adjacent / hypotenuse. Covers the law of cosines, unit circle values, inverse cosine, and real-world applications.',
    toolSlug: 'cosine',
    toolPath: '/calculators/trigonometry/cosine',
    pageType: 'formula',
    mathSolverEduType: 'Trigonometry',
    hero: {
      heading: 'Cosine Formula: cos(θ) = Adjacent / Hypotenuse',
      subheading: 'Cosine is fundamental to geometry, physics, and engineering. Learn the right-triangle definition, unit circle values, the Law of Cosines for any triangle, and real-world applications from ramps to GPS.',
    },
    formula: {
      expression: 'cos(θ) = Adjacent / Hypotenuse  |  Law of Cosines: c² = a² + b² − 2ab·cos(C)  |  sin²(θ) + cos²(θ) = 1',
      explanation: 'Cosine of angle θ in a right triangle is the adjacent side divided by the hypotenuse. On the unit circle, cos(θ) is the x-coordinate. The Law of Cosines generalizes the Pythagorean theorem for any triangle. The Pythagorean identity links cosine and sine. Inverse cosine (arccos) recovers an angle from a cosine value.',
      variables: [
        { symbol: 'θ', meaning: 'The angle in degrees or radians' },
        { symbol: 'Adjacent', meaning: 'The side of the right triangle adjacent (next to) the angle θ' },
        { symbol: 'Hypotenuse', meaning: 'The longest side of the right triangle' },
        { symbol: 'a, b, c', meaning: 'Side lengths in the Law of Cosines; C is the angle opposite side c' },
        { symbol: 'arccos / cos⁻¹', meaning: 'Inverse cosine — finds angle from a cosine value' },
      ],
    },
    steps: [
      { title: 'Identify adjacent and hypotenuse', detail: 'The adjacent side is between the angle θ and the right angle. The hypotenuse is the side opposite the right angle (longest side).' },
      { title: 'Apply cos(θ) = Adjacent / Hypotenuse', detail: 'Divide adjacent by hypotenuse. The result is between −1 and 1.' },
      { title: 'For the Law of Cosines, identify all sides and angle C', detail: 'c² = a² + b² − 2ab·cos(C). Use when you have two sides and the included angle (SAS) or three sides (SSS) in any triangle.' },
      { title: 'Use arccos to find the angle', detail: 'If cos(θ) is known, θ = arccos(cosine value). Result is in [0°, 180°]. For arccos(0.5): θ = 60°.' },
    ],
    examples: [
      { title: 'Adjacent side of a ramp', given: 'Ramp angle = 15°, hypotenuse (ramp length) = 10 m', solution: 'Adjacent (horizontal run) = cos(15°) × 10 = 0.9659 × 10', answer: 'Horizontal distance = 9.66 m' },
      { title: 'Law of Cosines: find side c', given: 'Triangle with a = 7, b = 10, angle C = 60°', solution: 'c² = 7² + 10² − 2(7)(10)cos(60°) = 49 + 100 − 140(0.5) = 149 − 70', answer: 'c = √79 ≈ 8.89' },
      { title: 'Finding angle from sides', given: 'Triangle sides a = 5, b = 7, c = 9', solution: 'cos(C) = (a² + b² − c²)/(2ab) = (25+49−81)/70 = −7/70; C = arccos(−0.1)', answer: 'C ≈ 95.7°' },
    ],
    table: {
      headers: ['Angle (θ)', 'cos(θ)', 'Exact Value'],
      rows: [
        ['0°', '1', '1'],
        ['30°', '0.8660', '√3/2'],
        ['45°', '0.7071', '√2/2'],
        ['60°', '0.5', '1/2'],
        ['90°', '0', '0'],
        ['120°', '−0.5', '−1/2'],
        ['180°', '−1', '−1'],
        ['360°', '1', '1'],
      ],
    },
    prose: [
      { heading: 'Law of Cosines vs. Pythagorean Theorem', body: 'The Pythagorean theorem (a² + b² = c²) is a special case of the Law of Cosines where angle C = 90°. When C = 90°, cos(90°) = 0, so the 2ab·cos(C) term disappears, leaving a² + b² = c². The Law of Cosines works for any triangle — right, acute, or obtuse — making it far more general.' },
      { heading: 'Cosine in Physics: Work and Dot Products', body: 'In physics, the work done by a force is W = F·d·cos(θ), where θ is the angle between force and displacement. Cosine naturally handles the projection of one vector onto another. The dot product A·B = |A||B|cos(θ). When force and motion are parallel (θ = 0°), cos(0) = 1 and full work is done. When perpendicular (θ = 90°), cos(90°) = 0 and no work is done.' },
    ],
    faqs: [
      { q: 'What is the cosine formula?', a: 'In a right triangle: cos(θ) = adjacent/hypotenuse. On the unit circle: cos(θ) = x-coordinate of the point at angle θ. The range is always [−1, 1].' },
      { q: 'When do I use the Law of Cosines?', a: 'Use the Law of Cosines for non-right triangles when you know: (1) two sides and the included angle (SAS), or (2) all three sides (SSS). For other cases, use the Law of Sines.' },
      { q: 'What is cos(0°) and why?', a: 'cos(0°) = 1. In a right triangle, if θ = 0°, the adjacent side equals the hypotenuse, so adjacent/hypotenuse = 1. On the unit circle, the point at 0° is (1, 0), giving x-coordinate = 1.' },
      { q: 'What is the inverse cosine (arccos)?', a: 'arccos(x) returns the angle whose cosine is x. It is defined for x ∈ [−1, 1] and outputs angles in [0°, 180°]. For example, arccos(0) = 90°, arccos(1) = 0°, arccos(−1) = 180°.' },
      { q: 'How does cosine behave past 90°?', a: 'Cosine decreases from 1 at 0°, through 0 at 90°, to −1 at 180°, then returns to 0 at 270° and back to 1 at 360°. It is an even function: cos(−θ) = cos(θ).' },
      { q: 'What is cos²(θ) + sin²(θ)?', a: 'Always equals 1, for any angle θ. This is the Pythagorean identity, derived from the definition of the unit circle.' },
      { q: 'How is cosine used in navigation?', a: 'Cosine is used to find the north-south component of a displacement vector. If moving at angle θ from north with speed v, the northward component is v·cos(θ). GPS systems use cosine for coordinate transformations.' },
      { q: 'What is the double angle formula for cosine?', a: 'cos(2θ) = cos²(θ) − sin²(θ) = 2cos²(θ) − 1 = 1 − 2sin²(θ). These equivalent forms are useful for simplifying trigonometric expressions and solving equations.' },
    ],
  },

  'tangent-formula': {
    title: 'Tangent Formula – tan(θ) = sin/cos Explained',
    description: 'Learn the tangent formula tan(θ) = opposite/adjacent. Covers the unit circle, inverse tangent, gradient calculations, and practical trigonometry applications.',
    toolSlug: 'tangent',
    toolPath: '/calculators/trigonometry/tangent',
    pageType: 'formula',
    mathSolverEduType: 'Trigonometry',
    hero: {
      heading: 'Tangent Formula: tan(θ) = Opposite / Adjacent',
      subheading: 'Tangent is the ratio of opposite to adjacent sides — equivalent to sin/cos. Learn when to use tangent, how to find slopes and angles of elevation, and how arctan is used in navigation, physics, and engineering.',
    },
    formula: {
      expression: 'tan(θ) = Opposite / Adjacent  |  tan(θ) = sin(θ) / cos(θ)  |  θ = arctan(Opposite / Adjacent)',
      explanation: 'Tangent of angle θ equals the side opposite the angle divided by the adjacent side (in a right triangle). It also equals sin(θ)/cos(θ). Tangent is undefined at 90° and 270° (where cosine = 0). The arctangent (tan⁻¹) function recovers the angle from a tangent value and is commonly used for finding angles of elevation and slopes.',
      variables: [
        { symbol: 'θ', meaning: 'The angle in degrees or radians' },
        { symbol: 'Opposite', meaning: 'The side opposite angle θ in a right triangle' },
        { symbol: 'Adjacent', meaning: 'The side next to angle θ (not the hypotenuse)' },
        { symbol: 'arctan / tan⁻¹', meaning: 'Inverse tangent — finds the angle from a tangent value' },
      ],
    },
    steps: [
      { title: 'Identify opposite and adjacent', detail: 'Opposite is the side across from your angle. Adjacent is the side next to your angle (not the hypotenuse). Neither should be the hypotenuse.' },
      { title: 'Calculate the ratio', detail: 'tan(θ) = Opposite / Adjacent. If the opposite side is longer, tan > 1 and angle > 45°. If shorter, tan < 1 and angle < 45°.' },
      { title: 'Find a missing side using tangent', detail: 'Opposite = tan(θ) × Adjacent, or Adjacent = Opposite / tan(θ). Use when you know an angle and one non-hypotenuse side.' },
      { title: 'Find an angle using arctan', detail: 'θ = arctan(Opposite / Adjacent). This is the main way to find an angle when two legs of a right triangle are known.' },
    ],
    examples: [
      { title: 'Building height from shadow', given: 'Shadow length = 20 m, sun elevation angle = 40°', solution: 'Height = tan(40°) × 20 = 0.839 × 20', answer: 'Building height = 16.78 m' },
      { title: 'Angle of incline', given: 'Rise = 4 m, Run = 15 m (road grade)', solution: 'tan(θ) = 4/15 = 0.267; θ = arctan(0.267)', answer: 'θ ≈ 14.9° incline (about 27% grade)' },
      { title: 'Navigation bearing', given: 'Moving 5 km east and 12 km north. What direction?', solution: 'θ = arctan(5/12) = arctan(0.417)', answer: 'θ ≈ 22.6° east of north (bearing N22.6°E)' },
    ],
    table: {
      headers: ['Angle (θ)', 'tan(θ)', 'Exact Value'],
      rows: [
        ['0°', '0', '0'],
        ['30°', '0.5774', '1/√3'],
        ['45°', '1', '1'],
        ['60°', '1.7321', '√3'],
        ['89°', '57.29', 'Very large'],
        ['90°', 'Undefined', 'cos(90°) = 0, division by zero'],
        ['135°', '−1', '−1'],
        ['180°', '0', '0'],
      ],
    },
    prose: [
      { heading: 'Tangent as Slope', body: 'Tangent of an angle equals the slope of a line. A line rising at 45° has slope = tan(45°) = 1. A line at 30° has slope = tan(30°) ≈ 0.577. In calculus, the derivative of a function at a point gives the slope of the tangent line at that point, directly relating the tangent function to rates of change.' },
      { heading: 'Angle of Elevation and Depression', body: 'Tangent is the go-to function for angle of elevation problems. If you are 50 m from a building and look up at 35° to see its top: height = tan(35°) × 50 ≈ 35 m. For angles of depression (looking down from height), the calculation is identical but the angle is measured below horizontal. These problems appear in surveying, architecture, and navigation.' },
    ],
    faqs: [
      { q: 'What is the tangent function?', a: 'Tangent of angle θ in a right triangle is opposite/adjacent. It equals sin(θ)/cos(θ) and represents the slope of the hypotenuse relative to the adjacent side.' },
      { q: 'Why is tan(90°) undefined?', a: 'At 90°, cos(90°) = 0, so tan(90°) = sin(90°)/cos(90°) = 1/0, which is undefined. Graphically, the tangent function approaches +∞ from one side and −∞ from the other at 90°.' },
      { q: 'What is arctan used for?', a: 'arctan finds the angle from a ratio of opposite/adjacent. Used to find angles of elevation, navigation bearings, and in programming (atan2 function) to find the direction of a vector from its x and y components.' },
      { q: 'How is tangent used in architecture?', a: 'Architects and builders use tangent to calculate roof pitch, ramp angles, and stair rise-to-run ratios. A roof with rise 4 and run 12 has pitch = arctan(4/12) ≈ 18.4°.' },
      { q: 'What is the period of the tangent function?', a: 'Tangent has period 180° (π radians), meaning tan(θ + 180°) = tan(θ). This is unlike sine and cosine, which have period 360°.' },
      { q: 'What is the difference between tan and tanh?', a: 'tan is the trigonometric tangent. tanh is the hyperbolic tangent, defined as (eˣ − e⁻ˣ)/(eˣ + e⁻ˣ). They are entirely different functions used in different contexts.' },
      { q: 'How do I calculate tan without a calculator?', a: 'For common angles: tan(0°)=0, tan(30°)=1/√3≈0.577, tan(45°)=1, tan(60°)=√3≈1.732. For other angles, use the approximation tan(θ) ≈ sin(θ)/cos(θ) with known sine and cosine values.' },
      { q: 'Can tangent be greater than 1?', a: 'Yes. tan(60°) ≈ 1.732, tan(75°) ≈ 3.73, tan(89°) ≈ 57.3. Tangent can be any real number from negative infinity to positive infinity. It equals 1 at 45°.' },
    ],
  },

  'law-of-cosines-formula': {
    title: 'Law of Cosines Formula – c² = a² + b² − 2ab·cos(C)',
    description: 'Learn the Law of Cosines with worked examples. Solve for any side or angle in a non-right triangle with SSS and SAS cases.',
    toolSlug: 'law-of-cosines',
    toolPath: '/calculators/trigonometry/law-of-cosines',
    pageType: 'formula',
    mathSolverEduType: 'Trigonometry',
    hero: {
      heading: 'Law of Cosines: c² = a² + b² − 2ab·cos(C)',
      subheading: 'The Law of Cosines solves any triangle when you know two sides and the included angle, or all three sides. It is the extension of the Pythagorean theorem for non-right triangles.',
    },
    formula: {
      expression: 'c² = a² + b² − 2ab·cos(C)  |  cos(C) = (a² + b² − c²) / (2ab)  |  a² = b² + c² − 2bc·cos(A)',
      explanation: 'The Law of Cosines relates the three sides of any triangle to one of its angles. To find a missing side: identify the angle between (or opposite to) the desired side, substitute known values and solve. To find a missing angle: rearrange to solve for cos(C), then use arccos. It reduces to the Pythagorean theorem when the angle is 90°.',
      variables: [
        { symbol: 'a, b, c', meaning: 'The three side lengths of the triangle' },
        { symbol: 'A, B, C', meaning: 'The angles opposite their respective sides (angle C is opposite side c)' },
        { symbol: 'cos(C)', meaning: 'Cosine of angle C' },
      ],
    },
    steps: [
      { title: 'Identify the given information', detail: 'SAS (two sides and included angle): use c² = a² + b² − 2ab·cos(C). SSS (three sides): rearrange to find cos(C) = (a²+b²−c²)/(2ab), then use arccos.' },
      { title: 'Substitute into the formula', detail: 'Plug in your known values. Compute a², b², and 2ab·cos(C) separately to avoid errors.' },
      { title: 'Solve for the unknown', detail: 'For a side: compute the right side and take the square root. For an angle: divide and apply arccos.' },
      { title: 'Find remaining angles', detail: 'Once one angle is found, use the Law of Cosines again for another angle, or switch to the Law of Sines (sin(A)/a = sin(B)/b) for remaining unknowns.' },
    ],
    examples: [
      { title: 'SAS: find the missing side', given: 'a = 8, b = 11, C = 37°', solution: 'c² = 64 + 121 − 2(8)(11)cos(37°) = 185 − 176 × 0.7986 = 185 − 140.6', answer: 'c = √44.4 ≈ 6.66' },
      { title: 'SSS: find an angle', given: 'a = 5, b = 7, c = 9', solution: 'cos(C) = (25 + 49 − 81)/(2 × 5 × 7) = −7/70 = −0.1; C = arccos(−0.1)', answer: 'C ≈ 95.7°' },
    ],
    table: {
      headers: ['Given', 'Find', 'Formula to Use'],
      rows: [
        ['Two sides + included angle (SAS)', 'Third side', 'c² = a² + b² − 2ab·cos(C)'],
        ['Three sides (SSS)', 'Any angle', 'cos(C) = (a²+b²−c²)/(2ab)'],
        ['Two sides + opposite angle (SSA)', 'Third side or angles', 'Law of Sines (or Law of Cosines with quadratic)'],
      ],
    },
    prose: [
      { heading: 'Law of Cosines vs. Law of Sines', body: 'Use the Law of Cosines for SAS and SSS cases. Use the Law of Sines (a/sin(A) = b/sin(B)) for ASA, AAS cases, and with care for SSA (the ambiguous case, where two triangles may exist). The Law of Cosines always gives a unique, unambiguous answer and is preferred when the formula applies.' },
      { heading: 'Real-World Uses', body: 'The Law of Cosines is used in land surveying to calculate property boundaries, in navigation to find the distance between two GPS coordinates with a known bearing difference, in robotics for arm kinematics, and in crystallography to determine molecular bond angles from diffraction data.' },
    ],
    faqs: [
      { q: 'When do I use the Law of Cosines?', a: 'Use it when you have SAS (two sides and the included angle) or SSS (all three sides). It does not apply to ASA or AAS cases (use Law of Sines for those).' },
      { q: 'Is the Law of Cosines just the Pythagorean theorem?', a: 'The Pythagorean theorem is a special case. When C = 90°, cos(90°) = 0, so c² = a² + b² − 0 = a² + b². The Law of Cosines is the general version.' },
      { q: 'Can the Law of Cosines give a negative side length?', a: 'No. Since c² must be positive (and it is the sum of squared values minus a bounded term), c is always a real positive number for valid triangle inputs.' },
      { q: 'What if cos(C) comes out greater than 1 or less than −1?', a: 'This means no valid triangle exists with those side lengths. A valid triangle requires |cos(C)| ≤ 1 and must satisfy the triangle inequality (sum of any two sides > third side).' },
      { q: 'Can I use the Law of Cosines for right triangles?', a: 'Yes, it always works for any triangle. For right triangles it reduces to the Pythagorean theorem, but you can use it if you prefer the general formula.' },
      { q: 'How do I find all three angles of a triangle using the Law of Cosines?', a: 'Apply the formula three times — once for each angle — or find two angles using the Law of Cosines and calculate the third with A + B + C = 180°.' },
      { q: 'What is the Heron\'s formula connection?', a: 'Both the Law of Cosines and Heron\'s formula solve the SSS case. Heron\'s formula finds the triangle area. Law of Cosines finds the angles. They are complementary tools for the SSS triangle.' },
      { q: 'How accurate is the Law of Cosines for very small angles?', a: 'For very small angles, the 2ab·cos(C) term is nearly equal to 2ab (since cos(0) = 1), leading to catastrophic cancellation in floating-point arithmetic. In such cases, use the half-angle formula or numerical methods for better precision.' },
    ],
  },

  'law-of-sines-formula': {
    title: 'Law of Sines Formula – a/sin(A) = b/sin(B) = c/sin(C)',
    description: 'Learn the Law of Sines with step-by-step examples for ASA, AAS, and SSA triangles. Includes the ambiguous case and real-world navigation applications.',
    toolSlug: 'law-of-sines',
    toolPath: '/calculators/trigonometry/law-of-sines',
    pageType: 'formula',
    mathSolverEduType: 'Trigonometry',
    hero: {
      heading: 'Law of Sines: a/sin(A) = b/sin(B) = c/sin(C)',
      subheading: 'The Law of Sines solves triangles with two known angles or the SSA case. Learn the formula, understand the ambiguous case, and apply it to navigation, surveying, and geometry problems.',
    },
    formula: {
      expression: 'a/sin(A) = b/sin(B) = c/sin(C)  |  Rearranged: a = b·sin(A)/sin(B)',
      explanation: 'The Law of Sines states that in any triangle, each side divided by the sine of its opposite angle gives the same value (the circumdiameter = 2R). This ratio is constant for a given triangle. Use it to find unknown sides or angles when you know at least one angle-side pair and one more piece of information.',
      variables: [
        { symbol: 'a, b, c', meaning: 'The three side lengths' },
        { symbol: 'A, B, C', meaning: 'The interior angles opposite their respective sides' },
        { symbol: '2R', meaning: 'Diameter of the circumscribed circle (circumdiameter)' },
      ],
    },
    steps: [
      { title: 'Identify what you know', detail: 'ASA (two angles and included side): find remaining side. AAS (two angles and non-included side): find sides. SSA (two sides and non-included angle): the ambiguous case.' },
      { title: 'Set up a ratio', detail: 'Choose two pairs from a/sin(A) = b/sin(B). Cross-multiply to solve for the unknown.' },
      { title: 'Solve for the unknown', detail: 'If finding a side: a = b·sin(A)/sin(B). If finding an angle: sin(A) = a·sin(B)/b, then A = arcsin(...).' },
      { title: 'Check the ambiguous case (SSA)', detail: 'If you are finding angle A from sin(A): there may be two possible triangles (one with A acute, one with A = 180° − A). Check whether both give valid triangles (all angles sum to 180°).' },
    ],
    examples: [
      { title: 'AAS case', given: 'A = 50°, B = 70°, a = 12', solution: 'C = 180° − 50° − 70° = 60°; b = 12·sin(70°)/sin(50°) = 12 × 0.9397/0.7660', answer: 'b ≈ 14.72' },
      { title: 'SSA ambiguous case', given: 'a = 9, b = 12, A = 35°', solution: 'sin(B) = 12·sin(35°)/9 = 12×0.574/9 = 0.765; B = arcsin(0.765) ≈ 49.9° or 130.1°', answer: 'Two possible triangles: B ≈ 49.9° (C ≈ 95.1°) or B ≈ 130.1° (C ≈ 14.9°)' },
    ],
    table: {
      headers: ['Case', 'Given', 'Use'],
      rows: [
        ['ASA', 'Two angles + included side', 'Law of Sines'],
        ['AAS', 'Two angles + non-included side', 'Law of Sines'],
        ['SSA (ambiguous)', 'Two sides + non-included angle', 'Law of Sines (check for 2 solutions)'],
        ['SAS', 'Two sides + included angle', 'Law of Cosines'],
        ['SSS', 'Three sides', 'Law of Cosines'],
      ],
    },
    prose: [
      { heading: 'The Ambiguous Case Explained', body: 'When you have SSA (two sides and a non-included angle), two different triangles may satisfy the given conditions — one with an acute unknown angle and one with an obtuse angle. Always check: if sin(B) > 1, no triangle exists. If sin(B) = 1, exactly one right triangle. If sin(B) < 1 and the opposite side is shorter than the other given side, two triangles are possible. Always verify both solutions by checking A + B + C = 180°.' },
      { heading: 'Navigation and Surveying Applications', body: 'The Law of Sines is used by surveyors for triangulation — determining positions by measuring angles from known points. GPS triangulation uses related principles. In navigation, the Law of Sines helps find distances using bearing angles from two observation points, allowing the calculation of ship or aircraft positions without measuring the distance directly.' },
    ],
    faqs: [
      { q: 'What is the Law of Sines?', a: 'It states a/sin(A) = b/sin(B) = c/sin(C) for any triangle. Each side divided by the sine of the opposite angle gives the same constant (the circumdiameter).' },
      { q: 'When do I use Law of Sines vs Law of Cosines?', a: 'Law of Sines: use for ASA, AAS, and SSA. Law of Cosines: use for SAS and SSS. A mnemonic: Sines for A-cases (angles known), Cosines for S-cases (sides known).' },
      { q: 'Why is SSA called the ambiguous case?', a: 'Because a given SSA combination may produce 0, 1, or 2 valid triangles. The ambiguity arises because arcsin has two solutions in [0°, 180°] for any value between 0 and 1.' },
      { q: 'Can the Law of Sines solve a right triangle?', a: 'Yes. In a right triangle with C = 90°, sin(C) = 1, so c/1 = c. The formula simplifies to a/sin(A) = c, or sin(A) = a/c — which is the basic sine formula for right triangles.' },
      { q: 'What does the constant a/sin(A) represent?', a: 'It equals the diameter of the circle that passes through all three vertices of the triangle (the circumscribed circle). So a/sin(A) = 2R where R is the circumradius.' },
      { q: 'How accurate is the Law of Sines for very obtuse triangles?', a: 'The formula is mathematically exact. For obtuse triangles, one angle is greater than 90°, so its sine is still between 0 and 1. There is no special difficulty, but computational rounding may affect very flat or spiky triangles.' },
      { q: 'Can I use the Law of Sines to find all three angles if I know only the sides?', a: 'No. You need at least one angle-side pair. With only sides (SSS), use the Law of Cosines to find one angle first, then use the Law of Sines or Law of Cosines for the remaining angles.' },
      { q: 'What if all three angles are known but no sides?', a: 'An infinite family of similar triangles satisfies three given angles. You cannot determine a unique triangle without at least one side length.' },
    ],
  },

  // ── HEALTH & FITNESS ───────────────────────────────────────────────────────

  'bmr-formula': {
    title: 'BMR Formula – Mifflin-St Jeor & Harris-Benedict Equations',
    description: 'Learn the BMR formula with both Mifflin-St Jeor and Harris-Benedict equations. Calculate your basal metabolic rate step by step for men and women.',
    toolSlug: 'bmr',
    toolPath: '/calculators/health/bmr',
    pageType: 'formula',
    hero: {
      heading: 'BMR Formula: Basal Metabolic Rate Equations',
      subheading: 'Your BMR is the number of calories your body burns at complete rest. Understand the Mifflin-St Jeor and Harris-Benedict equations, how age and muscle mass affect BMR, and how to use BMR for weight management.',
    },
    formula: {
      expression: 'Mifflin-St Jeor (Men): BMR = 10W + 6.25H − 5A + 5  |  (Women): BMR = 10W + 6.25H − 5A − 161  |  Harris-Benedict (Men): BMR = 88.362 + 13.397W + 4.799H − 5.677A',
      explanation: 'BMR (Basal Metabolic Rate) is the calories burned per day at complete rest. The Mifflin-St Jeor equation (1990) is the most accurate for most people. Harris-Benedict (1919, revised 1984) is older but still widely used. Both use weight (kg), height (cm), and age (years). Mifflin-St Jeor tends to be within 10% of measured BMR for most adults.',
      variables: [
        { symbol: 'W', meaning: 'Weight in kilograms (kg)' },
        { symbol: 'H', meaning: 'Height in centimeters (cm)' },
        { symbol: 'A', meaning: 'Age in years' },
        { symbol: 'BMR', meaning: 'Basal Metabolic Rate in calories per day (kcal/day)' },
      ],
    },
    steps: [
      { title: 'Convert your measurements', detail: 'Weight in kg (divide lbs by 2.2046). Height in cm (multiply inches by 2.54). Age in full years.' },
      { title: 'Apply the Mifflin-St Jeor formula', detail: 'Men: BMR = (10 × weight) + (6.25 × height) − (5 × age) + 5. Women: BMR = (10 × weight) + (6.25 × height) − (5 × age) − 161.' },
      { title: 'Interpret your BMR', detail: 'BMR is calories burned doing absolutely nothing (comatose). Actual daily needs are higher — multiply by your activity factor (TDEE) to get total calories needed.' },
      { title: 'Multiply by activity factor for TDEE', detail: 'Sedentary (desk job): × 1.2. Lightly active (1–3 days/week exercise): × 1.375. Moderately active (3–5 days/week): × 1.55. Very active: × 1.725.' },
    ],
    examples: [
      { title: 'Male, 30 years old', given: 'Male, 80 kg, 180 cm, age 30', solution: 'BMR = 10(80) + 6.25(180) − 5(30) + 5 = 800 + 1125 − 150 + 5', answer: 'BMR = 1,780 kcal/day' },
      { title: 'Female, 45 years old', given: 'Female, 65 kg, 165 cm, age 45', solution: 'BMR = 10(65) + 6.25(165) − 5(45) − 161 = 650 + 1031.25 − 225 − 161', answer: 'BMR = 1,295 kcal/day' },
    ],
    table: {
      headers: ['Activity Level', 'Multiplier', 'Description'],
      rows: [
        ['Sedentary', '1.2', 'Little to no exercise, desk job'],
        ['Lightly active', '1.375', 'Light exercise 1–3 days/week'],
        ['Moderately active', '1.55', 'Moderate exercise 3–5 days/week'],
        ['Very active', '1.725', 'Hard exercise 6–7 days/week'],
        ['Extra active', '1.9', 'Very hard exercise, physical job, or twice-a-day training'],
      ],
    },
    prose: [
      { heading: 'What Affects BMR Most', body: 'Lean muscle mass is the biggest determinant of BMR — muscle tissue burns significantly more calories at rest than fat tissue. This is why strength training increases metabolism: more muscle = higher BMR. Age reduces BMR partly because muscle mass naturally declines (sarcopenia). BMR decreases roughly 1–2% per decade after age 20. Sex matters because men typically have more muscle mass relative to body size.' },
      { heading: 'BMR vs. TDEE: Which to Use for Weight Management', body: 'BMR is a theoretical baseline — no one actually sits completely still for 24 hours. For practical calorie targets, use TDEE (Total Daily Energy Expenditure) = BMR × activity factor. To lose weight, eat 300–500 calories below TDEE. To gain muscle, eat 200–300 above. Dropping below BMR for extended periods causes adaptive thermogenesis (metabolic slowdown), making further weight loss harder.' },
    ],
    faqs: [
      { q: 'What is BMR?', a: 'Basal Metabolic Rate (BMR) is the number of calories your body needs daily for essential functions at complete rest — breathing, circulation, cell repair, and temperature regulation.' },
      { q: 'Which BMR formula is most accurate?', a: 'The Mifflin-St Jeor equation is generally most accurate for most people, within 10% of measured values. For obese individuals, the Katch-McArdle formula (based on lean body mass) may be more accurate.' },
      { q: 'Does BMR change with diet?', a: 'Yes. Severe calorie restriction lowers BMR through metabolic adaptation. This is why crash diets slow weight loss over time. Eating adequate protein and resistance training help preserve BMR.' },
      { q: 'Can I increase my BMR?', a: 'Yes. Building muscle mass is the most effective long-term approach. High-protein diets have a slightly higher thermic effect of food. HIIT exercise can temporarily elevate metabolic rate (EPOC — excess post-exercise oxygen consumption).' },
      { q: 'What is the difference between BMR and RMR?', a: 'BMR is measured under very strict conditions (12-hour fasting, complete rest, thermoneutral environment). RMR (Resting Metabolic Rate) is measured under less strict conditions and is slightly higher. In practice, the terms are often used interchangeably.' },
      { q: 'How accurate are BMR equations?', a: 'Mifflin-St Jeor is accurate to within ±10% for most adults. Individual variation due to genetics, fitness level, and hormone balance means the formula is a useful estimate, not an exact measurement.' },
      { q: 'Does sleep affect BMR?', a: 'Sleep deprivation can reduce BMR and increase appetite hormones (ghrelin). Adequate sleep (7–9 hours) supports metabolic health. During sleep, BMR drops about 10–15% compared to waking rest.' },
      { q: 'How does BMR relate to weight loss?', a: 'Weight loss requires a calorie deficit below your TDEE. BMR is the floor — going too far below it triggers metabolic adaptation. A moderate deficit of 300–500 kcal/day below TDEE leads to 0.5–1 lb/week loss sustainably.' },
    ],
  },

  'tdee-formula': {
    title: 'TDEE Formula – Total Daily Energy Expenditure Calculator',
    description: 'Learn the TDEE formula TDEE = BMR × Activity Factor. Calculate your total daily energy expenditure for weight loss, maintenance, and muscle gain.',
    toolSlug: 'tdee',
    toolPath: '/calculators/health/tdee',
    pageType: 'formula',
    hero: {
      heading: 'TDEE Formula: Total Daily Energy Expenditure',
      subheading: 'TDEE is the total number of calories you burn each day — your actual calorie maintenance level. Learn how to calculate it, choose the right activity multiplier, and use TDEE to set accurate calorie targets for any fitness goal.',
    },
    formula: {
      expression: 'TDEE = BMR × Activity Factor  |  BMR (Mifflin-St Jeor men): 10W + 6.25H − 5A + 5  |  Deficit for loss: TDEE − 500 kcal/day',
      explanation: 'TDEE combines your BMR (calories at rest) with an activity multiplier that accounts for exercise, NEAT (non-exercise activity thermogenesis), and daily movement. The result is the total calories you burn in a typical day. Eating at TDEE maintains weight; below TDEE causes weight loss; above TDEE causes weight gain.',
      variables: [
        { symbol: 'TDEE', meaning: 'Total Daily Energy Expenditure in kcal/day' },
        { symbol: 'BMR', meaning: 'Basal Metabolic Rate (calories at complete rest)' },
        { symbol: 'Activity Factor', meaning: 'Multiplier from 1.2 (sedentary) to 1.9 (very active)' },
        { symbol: 'NEAT', meaning: 'Non-Exercise Activity Thermogenesis — incidental daily movement' },
      ],
    },
    steps: [
      { title: 'Calculate your BMR', detail: 'Use the Mifflin-St Jeor equation: Men: 10W + 6.25H − 5A + 5; Women: 10W + 6.25H − 5A − 161, where W = kg, H = cm, A = years.' },
      { title: 'Determine your activity level honestly', detail: 'Sedentary (1.2): desk job, no planned exercise. Light (1.375): 1–3 workouts/week. Moderate (1.55): 3–5 workouts/week. Active (1.725): 6–7 workouts/week. Extra active (1.9): physical labor + daily workouts.' },
      { title: 'Multiply BMR by activity factor', detail: 'TDEE = BMR × activity factor. This is your estimated daily maintenance calorie need.' },
      { title: 'Set your calorie target', detail: 'Weight loss: TDEE − 300 to 500 kcal/day (0.5–1 lb/week). Weight gain: TDEE + 200 to 300 kcal/day (lean bulk). Maintenance: eat at TDEE.' },
    ],
    examples: [
      { title: 'Male office worker wanting to lose weight', given: '75 kg, 175 cm, age 35, sedentary', solution: 'BMR = 10(75) + 6.25(175) − 5(35) + 5 = 1,756; TDEE = 1,756 × 1.2', answer: 'TDEE = 2,107 kcal; Deficit target = 1,607 kcal/day for ~1 lb/week loss' },
      { title: 'Female athlete maintaining weight', given: '60 kg, 168 cm, age 28, very active (5x/week training)', solution: 'BMR = 10(60) + 6.25(168) − 5(28) − 161 = 1,429; TDEE = 1,429 × 1.725', answer: 'TDEE = 2,465 kcal/day maintenance' },
    ],
    table: {
      headers: ['Goal', 'Calorie Target', 'Expected Result'],
      rows: [
        ['Aggressive fat loss', 'TDEE − 750', '~1.5 lb/week (risk of muscle loss)'],
        ['Moderate fat loss', 'TDEE − 500', '~1 lb/week (sustainable)'],
        ['Mild fat loss', 'TDEE − 250', '~0.5 lb/week'],
        ['Maintenance', 'TDEE', 'Weight stable'],
        ['Lean bulk', 'TDEE + 200', 'Slow muscle gain, minimal fat'],
        ['Aggressive bulk', 'TDEE + 500', 'Faster muscle gain, some fat gain'],
      ],
    },
    prose: [
      { heading: 'Why TDEE is More Useful Than BMR', body: 'BMR tells you calories at rest. TDEE reflects your actual life. A construction worker and a software developer of identical height and weight will have very different TDEEs because of activity level. TDEE accounts for all energy expenditure: BMR + physical exercise + NEAT (fidgeting, standing, walking) + thermic effect of food (digesting food burns ~10% of calories consumed).' },
      { heading: 'TDEE and Metabolic Adaptation', body: 'Extended calorie deficits cause metabolic adaptation — the body lowers TDEE by reducing NEAT and BMR. This is why weight loss plateaus occur. Strategies to combat this: diet breaks (eating at TDEE for 1–2 weeks), re-feeds (periodic high-carb days), and resistance training to preserve muscle. Recalculate TDEE as your weight changes, since a lighter body burns fewer calories.' },
    ],
    faqs: [
      { q: 'What is TDEE?', a: 'Total Daily Energy Expenditure is the total calories you burn in a day from all sources: metabolism, exercise, daily movement, and digesting food.' },
      { q: 'Is TDEE the same as maintenance calories?', a: 'Yes. Eating exactly at your TDEE means you are taking in as many calories as you expend — your weight stays stable.' },
      { q: 'How do I know which activity multiplier to choose?', a: 'Be honest and conservative. Most people overestimate their activity level. Desk job with 3 gym sessions/week is "lightly active" (1.375–1.55), not "very active." Tracking actual results over 2–4 weeks is the most accurate calibration.' },
      { q: 'How often should I recalculate TDEE?', a: 'Recalculate after significant weight changes (every 5–10 lbs lost or gained), when your activity level changes significantly, or after a weight-loss plateau.' },
      { q: 'Can TDEE calculators be wrong?', a: 'All TDEE formulas are estimates with ±10–15% variation. Genetics, thyroid function, and gut microbiome all affect actual TDEE. The best approach: calculate TDEE, track intake and weight for 2–3 weeks, then adjust based on actual results.' },
      { q: 'Does TDEE change when dieting?', a: 'Yes. Metabolic adaptation reduces TDEE during prolonged calorie restriction. The body becomes more fuel-efficient. This is why the same deficit produces less weight loss over time — your actual TDEE decreases below the original estimate.' },
      { q: 'What role does protein play in TDEE?', a: 'Protein has the highest thermic effect of food — digesting protein burns 20–30% of its calorie content, vs. 5–10% for carbs and 0–3% for fat. High protein diets slightly increase TDEE. Protein also preserves muscle during a deficit, maintaining BMR.' },
      { q: 'How many calories equal one pound of fat?', a: 'Approximately 3,500 calories. A daily deficit of 500 kcal × 7 days = 3,500 kcal deficit = approximately 1 lb of fat loss per week. This is an approximation — actual fat loss depends on body composition and metabolic adaptation.' },
    ],
  },

  'calorie-deficit-formula': {
    title: 'Calorie Deficit Formula – How to Calculate for Weight Loss',
    description: 'Learn the calorie deficit formula and how to calculate the right deficit for sustainable fat loss. Includes TDEE calculation, protein targets, and plateau-busting strategies.',
    toolSlug: 'calorie',
    toolPath: '/calculators/health/calorie',
    pageType: 'formula',
    hero: {
      heading: 'Calorie Deficit Formula: TDEE − Intake = Deficit',
      subheading: 'Weight loss ultimately comes down to energy balance. Learn how to calculate the right calorie deficit for safe, sustainable fat loss — including how to avoid muscle loss and metabolic adaptation.',
    },
    formula: {
      expression: 'Calorie Deficit = TDEE − Daily Calorie Intake  |  Weight Loss (lbs/week) = Deficit × 7 / 3,500  |  TDEE = BMR × Activity Factor',
      explanation: 'A calorie deficit exists when you consume fewer calories than your TDEE (total daily energy expenditure). The body compensates by burning stored energy (fat and some muscle). Every 3,500 calorie deficit (cumulative) results in approximately 1 pound of fat loss. A daily deficit of 500 kcal → ~1 lb/week loss.',
      variables: [
        { symbol: 'TDEE', meaning: 'Total Daily Energy Expenditure — your maintenance calories' },
        { symbol: 'Intake', meaning: 'Daily calorie consumption from food and drinks' },
        { symbol: 'Deficit', meaning: 'TDEE minus Intake (must be positive for weight loss)' },
        { symbol: '3,500', meaning: 'Approximate calories in one pound of body fat' },
      ],
    },
    steps: [
      { title: 'Calculate your TDEE', detail: 'Use BMR × activity factor. Example: BMR = 1,800, moderately active (×1.55) → TDEE = 2,790 kcal/day.' },
      { title: 'Choose a deficit size', detail: 'Conservative (250 kcal/day): ~0.5 lb/week. Moderate (500 kcal/day): ~1 lb/week. Aggressive (750–1,000 kcal/day): 1.5–2 lb/week. Do not exceed 1,000 kcal/day deficit to minimize muscle loss.' },
      { title: 'Calculate your daily calorie target', detail: 'Intake target = TDEE − chosen deficit. For TDEE = 2,790 and deficit = 500: eat 2,290 kcal/day.' },
      { title: 'Set macronutrient targets', detail: 'Prioritize protein: 0.7–1g per pound of body weight preserves muscle. Fill remaining calories with carbohydrates and fats based on preference.' },
    ],
    examples: [
      { title: 'Moderate deficit for steady loss', given: 'TDEE = 2,400 kcal, goal: lose 1 lb/week', solution: 'Deficit = 500 kcal/day; Intake = 2,400 − 500', answer: 'Eat 1,900 kcal/day; projected loss: ~1 lb/week = ~4 lbs/month' },
      { title: 'Aggressive deficit with exercise', given: 'TDEE = 2,800 kcal, deficit via diet + exercise', solution: 'Eat 2,300 kcal (−500 via diet) + burn 300 via exercise = 800 total daily deficit', answer: '800 kcal × 7 / 3,500 ≈ 1.6 lbs/week projected loss' },
    ],
    table: {
      headers: ['Daily Deficit', 'Weekly Loss', 'Monthly Loss', 'Sustainability'],
      rows: [
        ['250 kcal', '~0.5 lb', '~2 lbs', 'Very sustainable — minimal hunger'],
        ['500 kcal', '~1 lb', '~4 lbs', 'Sustainable — recommended standard'],
        ['750 kcal', '~1.5 lbs', '~6 lbs', 'Moderate — requires careful protein intake'],
        ['1,000 kcal', '~2 lbs', '~8 lbs', 'Aggressive — risk of muscle loss'],
        ['1,500+ kcal', '~3+ lbs', '~12+ lbs', 'Unsustainable — metabolic damage risk'],
      ],
    },
    prose: [
      { heading: 'Why the 3,500 Calorie Rule Is an Approximation', body: 'The "3,500 calories = 1 pound" rule is a simplification. Fat loss also involves water loss, glycogen depletion, and some muscle loss. As weight decreases, TDEE also decreases, meaning the same deficit produces less weekly loss over time. A more accurate model (Hall et al.) accounts for changing body composition. However, the 3,500-calorie rule is a useful starting estimate for short-term planning.' },
      { heading: 'Preserving Muscle on a Deficit', body: 'Calorie deficits cause both fat and muscle loss. To minimize muscle loss: maintain high protein intake (0.8–1.2g per pound of body weight), continue resistance training, avoid very large deficits, and get adequate sleep. Studies show that protein intake above 0.7g/lb and resistance training during a deficit preserve nearly all muscle mass even in aggressive deficits.' },
    ],
    faqs: [
      { q: 'What calorie deficit should I start with?', a: 'Start with 300–500 kcal/day below TDEE. This is aggressive enough to produce visible progress (0.5–1 lb/week) while being sustainable and minimizing muscle loss.' },
      { q: 'Is it safe to eat below my BMR?', a: 'For short periods, it may be acceptable under medical supervision. Long-term intake below BMR causes metabolic adaptation, muscle loss, nutrient deficiencies, and hormonal disruption. It is generally not recommended.' },
      { q: 'Why am I not losing weight on a deficit?', a: 'Common reasons: inaccurate calorie tracking (most people underestimate by 20–40%), overestimated TDEE, metabolic adaptation after prolonged dieting, water retention from stress or sodium, or muscle gain offsetting fat loss.' },
      { q: 'Does exercise create a calorie deficit?', a: 'Exercise burns calories, adding to your deficit when food intake stays constant. However, exercise also increases hunger. The combination of moderate deficit through diet plus moderate exercise is more effective than either alone.' },
      { q: 'How does protein affect calorie deficit results?', a: 'High protein (0.7–1g per lb of bodyweight) during a deficit preserves muscle, increases satiety, and has a higher thermic effect (burns more calories during digestion). It is the most important macronutrient for fat loss.' },
      { q: 'What is metabolic adaptation?', a: 'When calorie intake drops, the body reduces TDEE by lowering NEAT (unconscious movement), reducing BMR, and becoming more efficient. Diet breaks (eating at TDEE for 1–2 weeks) can partially reverse this adaptation.' },
      { q: 'How long can I maintain a calorie deficit?', a: 'Moderate deficits (300–500 kcal/day) can be maintained for several months. After losing 10–15% of body weight, consider a maintenance phase to allow metabolic recovery before continuing.' },
      { q: 'Does the type of food matter, or just calories?', a: 'For weight loss (fat mass), total calories are the primary driver — "a calorie is a calorie" for energy balance. However, food type dramatically affects satiety, muscle preservation, health markers, and diet adherence. Protein and fiber are most satiating. Whole foods generally make calorie control easier than processed foods.' },
    ],
  },

  'ideal-weight-formula': {
    title: 'Ideal Weight Formula – Hamwi, Devine & BMI Methods',
    description: 'Learn ideal weight formulas including Hamwi, Devine, and BMI-based methods. Understand their limitations and how to set realistic weight targets.',
    toolSlug: 'ideal-weight',
    toolPath: '/calculators/health/ideal-weight',
    pageType: 'formula',
    hero: {
      heading: 'Ideal Body Weight Formulas: Hamwi, Devine & BMI Methods',
      subheading: 'Ideal weight formulas give a starting reference for healthy weight based on height and sex. Learn the major formulas, how they were developed, their significant limitations, and how to set meaningful, personalized weight goals.',
    },
    formula: {
      expression: 'Hamwi (Men): IBW = 48 + 2.7 × (height in inches − 60)  |  Hamwi (Women): IBW = 45.5 + 2.2 × (height in inches − 60)  |  BMI method: Weight = BMI × height² (m²)',
      explanation: 'Ideal Body Weight (IBW) formulas estimate the weight at which individuals of a given height are statistically healthiest. Hamwi (1964) and Devine (1974) formulas are widely used in clinical settings for medication dosing. The BMI method targets a specific BMI (usually 22–24.9). All have significant limitations and ignore muscle mass, frame size, and individual variation.',
      variables: [
        { symbol: 'IBW', meaning: 'Ideal Body Weight in kilograms or pounds' },
        { symbol: 'Height in inches', meaning: 'Total height; must be above 60 inches (5 feet) for these formulas' },
        { symbol: 'BMI target', meaning: 'Usually 22 (midpoint of healthy range) for BMI-based calculation' },
      ],
    },
    steps: [
      { title: 'Convert height to inches', detail: 'Total inches = (feet × 12) + inches. For 5\'9": (5 × 12) + 9 = 69 inches.' },
      { title: 'Calculate inches over 5 feet', detail: 'Subtract 60 from total inches. For 69 inches: 69 − 60 = 9 inches over 5 feet.' },
      { title: 'Apply the formula', detail: 'Men (Hamwi): IBW = 48 + 2.7 × (inches − 60). Women: IBW = 45.5 + 2.2 × (inches − 60). Result is in kg.' },
      { title: 'Convert to pounds if needed', detail: 'Multiply kg by 2.205 to get pounds. For 69.3 kg: 69.3 × 2.205 = 152.8 lbs.' },
    ],
    examples: [
      { title: 'Male 5\'10" (Hamwi)', given: 'Male, height = 5\'10" = 70 inches', solution: 'IBW = 48 + 2.7 × (70 − 60) = 48 + 2.7 × 10 = 48 + 27', answer: 'IBW = 75 kg (165 lbs)' },
      { title: 'Female 5\'5" (Hamwi)', given: 'Female, height = 5\'5" = 65 inches', solution: 'IBW = 45.5 + 2.2 × (65 − 60) = 45.5 + 2.2 × 5 = 45.5 + 11', answer: 'IBW = 56.5 kg (124.5 lbs)' },
    ],
    table: {
      headers: ['Formula', 'Basis', 'Typical Use'],
      rows: [
        ['Hamwi', 'Height + sex, empirical', 'US clinical standard for medication dosing'],
        ['Devine', 'Similar to Hamwi, slightly different constants', 'Clinical pharmacy dosing'],
        ['Robinson', 'Height + sex, different constants', 'Alternative clinical estimate'],
        ['BMI method (BMI=22)', 'Weight = 22 × height² (m²)', 'Public health, general guidance'],
        ['Lean body mass based', 'Accounts for muscle mass', 'Athletes and bodybuilders'],
      ],
    },
    prose: [
      { heading: 'Why Ideal Weight Formulas Are Limited', body: 'All IBW formulas were developed from population averages and treat everyone of the same height and sex identically. They ignore frame size (bone structure), muscle mass, body composition, age, and ethnicity. A 5\'10" male powerlifter with 10% body fat and 200 lbs of muscle would be classified as "overweight" by Hamwi, yet they are extremely healthy. Use IBW formulas as a rough reference, not a definitive target.' },
      { heading: 'A Better Approach to Weight Goals', body: 'Rather than targeting a formula-based ideal weight, consider targeting a healthy body fat percentage: men 10–20% is athletic to healthy, women 18–28%. Alternatively, target a waist circumference below 40 inches (men) or 35 inches (women), which correlates better with cardiometabolic health than BMI or IBW. Work with a healthcare provider to set personalized, achievable, and health-focused weight targets.' },
    ],
    faqs: [
      { q: 'What is ideal body weight?', a: 'Ideal body weight is a statistically derived estimate of the weight at which a person of a given height and sex has the best health outcomes on a population level. It is a reference point, not a universal target.' },
      { q: 'Are ideal weight formulas accurate for athletes?', a: 'No. IBW formulas significantly underestimate appropriate weight for muscular individuals. A 6\'2" athlete with 200 lbs of lean muscle and 10% body fat is healthy, not overweight.' },
      { q: 'What is the Devine formula?', a: 'Devine formula: Men: IBW = 50 + 2.3 × (height in inches − 60); Women: IBW = 45.5 + 2.3 × (height in inches − 60). Very similar to Hamwi, developed for clinical medication dosing.' },
      { q: 'What weight should I aim for?', a: 'Rather than a specific number, aim for: healthy body fat (15–25% for men, 22–32% for women), normal blood pressure and blood lipids, good energy and strength, and waist circumference below gender-specific thresholds.' },
      { q: 'What is body frame size and how does it affect ideal weight?', a: 'Frame size (small, medium, large) describes bone and joint structure. Larger-framed people have heavier skeletons and should weigh more. Wrist circumference relative to height is a common proxy for frame size.' },
      { q: 'How does age affect ideal weight?', a: 'Most IBW formulas don\'t adjust for age. However, research suggests slightly higher BMI (22–27) may be associated with better outcomes in adults over 65, as lower weight in older adults can indicate muscle loss (sarcopenia).' },
      { q: 'Is there a single "correct" ideal weight for my height?', a: 'No. Healthy weight ranges span 20–30 lbs for most heights. Factors like muscle mass, bone density, and body composition mean there is no single ideal weight. Focus on health markers rather than a number on the scale.' },
      { q: 'Why are IBW formulas used in clinical settings?', a: 'In clinical pharmacology, drug doses for some medications (like certain antibiotics and chemotherapy) are based on IBW or adjusted body weight because these drugs distribute based on lean mass, not total body weight. This is the primary clinical use of IBW formulas.' },
    ],
  },

  // ── BUSINESS ───────────────────────────────────────────────────────────────

  'break-even-formula': {
    title: 'Break-Even Formula – Break-Even Point Calculation',
    description: 'Learn the break-even formula: Break-Even Units = Fixed Costs / (Price − Variable Cost). Calculate break-even in units and revenue for any business.',
    toolSlug: 'break-even',
    toolPath: '/calculators/business/break-even',
    pageType: 'formula',
    hero: {
      heading: 'Break-Even Formula: Fixed Costs / (Price − Variable Cost)',
      subheading: 'The break-even point tells you exactly how many units you need to sell (or how much revenue you need) to cover all costs. Learn the formula, understand contribution margin, and apply it to pricing and investment decisions.',
    },
    formula: {
      expression: 'Break-Even (units) = Fixed Costs / (Price − Variable Cost per Unit)  |  Break-Even (revenue) = Fixed Costs / Contribution Margin Ratio  |  CM Ratio = (Price − VC) / Price',
      explanation: 'The break-even point is where total revenue equals total costs — profit is zero. Fixed costs are constant regardless of output (rent, salaries, insurance). Variable costs change with each unit sold (materials, commissions). The difference between price and variable cost is the contribution margin — how much each unit contributes toward covering fixed costs.',
      variables: [
        { symbol: 'Fixed Costs', meaning: 'Costs that stay constant regardless of sales volume (rent, salaries, equipment)' },
        { symbol: 'Price', meaning: 'Selling price per unit' },
        { symbol: 'Variable Cost', meaning: 'Cost per unit that changes with production volume' },
        { symbol: 'Contribution Margin', meaning: 'Price minus Variable Cost — each unit\'s contribution to fixed costs' },
        { symbol: 'CM Ratio', meaning: 'Contribution Margin as a percentage of price' },
      ],
    },
    steps: [
      { title: 'Identify all fixed costs', detail: 'List monthly rent, salaries, insurance, loan payments, subscriptions, and any other costs that do not change with production volume. Sum them up.' },
      { title: 'Identify variable costs per unit', detail: 'Calculate raw materials, direct labor, packaging, shipping, and sales commissions per unit. These vary proportionally with output.' },
      { title: 'Calculate contribution margin', detail: 'CM = Price − Variable Cost per unit. This is how much each unit sold contributes toward covering fixed costs.' },
      { title: 'Divide fixed costs by contribution margin', detail: 'Break-Even Units = Fixed Costs / CM. This is the minimum number of units needed to avoid a loss.' },
      { title: 'Calculate break-even revenue', detail: 'Break-Even Revenue = Break-Even Units × Price, or = Fixed Costs / CM Ratio (where CM Ratio = CM / Price).' },
    ],
    examples: [
      { title: 'Coffee shop break-even', given: 'Fixed costs: $8,000/month. Coffee price: $5. Variable cost per cup: $1.50', solution: 'CM = $5 − $1.50 = $3.50; Break-Even = $8,000 / $3.50', answer: '2,286 cups/month needed to break even ($11,429 revenue)' },
      { title: 'Software product', given: 'Fixed costs: $50,000/month. Price per subscription: $99. Variable cost: $9', solution: 'CM = $99 − $9 = $90; Break-Even = $50,000 / $90', answer: '556 subscriptions/month to break even ($55,044 MRR)' },
      { title: 'Break-even revenue', given: 'Fixed costs: $20,000/month. CM Ratio = 60%', solution: 'Break-Even Revenue = $20,000 / 0.60', answer: '$33,333 in monthly revenue needed to break even' },
    ],
    table: {
      headers: ['Metric', 'Formula', 'What It Means'],
      rows: [
        ['Break-Even Units', 'Fixed Costs / CM per unit', 'Minimum units to sell to avoid loss'],
        ['Break-Even Revenue', 'Fixed Costs / CM Ratio', 'Minimum revenue to avoid loss'],
        ['Contribution Margin', 'Price − Variable Cost', 'Each unit\'s contribution to fixed costs'],
        ['CM Ratio', 'CM / Price', 'Percentage of each revenue dollar covering fixed costs'],
        ['Margin of Safety', 'Actual Sales − Break-Even', 'Buffer before the business starts losing money'],
      ],
    },
    prose: [
      { heading: 'Break-Even Analysis for Pricing Decisions', body: 'Break-even analysis is a powerful pricing tool. If you know your fixed costs and target sales volume, you can calculate the minimum price to cover costs. Conversely, if price is fixed by market, you can determine the maximum allowable variable cost. Entrepreneurs often use this to test the viability of a business: if the required break-even sales volume is unrealistic for the market, the business model needs adjustment.' },
      { heading: 'Limitations of Break-Even Analysis', body: 'Break-even analysis assumes price and variable cost per unit are constant, and fixed costs are truly fixed. In reality, prices may vary with volume discounts, variable costs may scale non-linearly, and some "fixed" costs step up at certain production levels. Break-even analysis provides a useful starting framework, but a full profitability model should account for these dynamic effects.' },
    ],
    faqs: [
      { q: 'What is a break-even point?', a: 'The break-even point is the sales volume at which total revenue exactly equals total costs — profit is zero. Sales above this point generate profit; below it generates a loss.' },
      { q: 'What is contribution margin?', a: 'Contribution margin is the selling price minus variable cost per unit. It represents how much each unit sold contributes toward paying fixed costs and, ultimately, generating profit.' },
      { q: 'How do I lower my break-even point?', a: 'Lower fixed costs (cheaper office, fewer full-time employees), raise prices (increases contribution margin), lower variable costs per unit (negotiate supplier contracts, improve processes), or change your product mix toward higher-margin items.' },
      { q: 'What is the margin of safety?', a: 'Margin of safety = Actual Sales − Break-Even Sales. It shows how much sales can drop before you start losing money. A large margin of safety means the business can withstand demand fluctuations.' },
      { q: 'Can break-even analysis be used for a service business?', a: 'Yes. For services, "units" can be hours billed, projects completed, or clients served. Fixed costs include overhead; variable costs include direct service delivery costs per unit.' },
      { q: 'What is a multi-product break-even?', a: 'When selling multiple products, weight each product\'s contribution margin by its percentage of total sales (sales mix) to get a weighted average CM. Divide fixed costs by weighted average CM to find break-even in units.' },
      { q: 'How does tax affect break-even analysis?', a: 'Standard break-even calculates pre-tax profit = 0. To find after-tax break-even with target profit P (after-tax) and tax rate t: Required pre-tax profit = P / (1−t). Add this to fixed costs before dividing by CM.' },
      { q: 'Is the break-even point the same as the payback period?', a: 'No. Break-even point is a sales volume calculation. Payback period is the time to recover an initial investment from cash flows. They are related but distinct concepts for different decisions.' },
    ],
  },

  'profit-margin-formula': {
    title: 'Profit Margin Formula – Gross, Operating & Net Margin',
    description: 'Learn profit margin formulas: gross margin, operating margin, and net profit margin. Includes worked examples and industry benchmarks for all business types.',
    toolSlug: 'profit-margin',
    toolPath: '/calculators/business/profit-margin',
    pageType: 'formula',
    hero: {
      heading: 'Profit Margin Formulas: Gross, Operating & Net',
      subheading: 'Profit margin shows how many cents of profit are generated for every dollar of revenue. Learn the three key margin types, what each reveals about business health, and industry benchmarks for comparison.',
    },
    formula: {
      expression: 'Gross Margin = (Revenue − COGS) / Revenue × 100  |  Operating Margin = Operating Income / Revenue × 100  |  Net Margin = Net Income / Revenue × 100',
      explanation: 'There are three main profit margin types, each revealing a different layer of profitability. Gross margin shows profitability after direct production costs (COGS). Operating margin shows profitability after all operating expenses (including overhead). Net margin is the bottom line — profit after all costs including taxes and interest.',
      variables: [
        { symbol: 'Revenue', meaning: 'Total sales income before any deductions' },
        { symbol: 'COGS', meaning: 'Cost of Goods Sold — direct costs to produce goods/services sold' },
        { symbol: 'Operating Income', meaning: 'Revenue minus COGS minus operating expenses (SG&A, R&D)' },
        { symbol: 'Net Income', meaning: 'Final profit after all costs including interest and taxes' },
      ],
    },
    steps: [
      { title: 'Identify gross margin first', detail: 'Gross Margin = (Revenue − COGS) / Revenue × 100. This isolates production efficiency. Low gross margin means high production costs relative to selling price.' },
      { title: 'Calculate operating margin', detail: 'Operating Margin = EBIT / Revenue × 100. Subtract all operating expenses (salaries, rent, marketing) from gross profit to get EBIT (Earnings Before Interest and Taxes).' },
      { title: 'Calculate net margin', detail: 'Net Margin = Net Income / Revenue × 100. Subtract interest expenses and taxes from operating income to get net income (the "bottom line").' },
      { title: 'Compare across time and to peers', detail: 'Single-period margins mean little in isolation. Compare to prior periods (trends) and to industry benchmarks. A 5% net margin is exceptional in grocery; poor in software.' },
    ],
    examples: [
      { title: 'Retail store analysis', given: 'Revenue: $500,000; COGS: $350,000; Operating Expenses: $80,000; Taxes: $14,000', solution: 'Gross Margin = (500,000−350,000)/500,000 = 30%; Operating Income = 500,000−350,000−80,000 = 70,000; Operating Margin = 70,000/500,000 = 14%; Net Income = 70,000−14,000 = 56,000; Net Margin = 11.2%', answer: 'Gross 30%, Operating 14%, Net 11.2%' },
      { title: 'SaaS company', given: 'MRR: $100,000; COGS: $15,000; OpEx: $55,000; Tax: $6,000', solution: 'Gross Margin = 85%; Operating Margin = 30%; Net Margin = 24%', answer: 'Strong SaaS margins — gross margin above 70% is typical for software' },
    ],
    table: {
      headers: ['Industry', 'Typical Gross Margin', 'Typical Net Margin'],
      rows: [
        ['Software/SaaS', '70–85%', '15–30%'],
        ['Retail', '25–50%', '2–8%'],
        ['Restaurant', '60–70%', '3–9%'],
        ['Manufacturing', '25–45%', '5–15%'],
        ['Grocery', '25–35%', '1–3%'],
        ['Financial Services', '40–60%', '15–30%'],
        ['Healthcare', '50–70%', '5–15%'],
      ],
    },
    prose: [
      { heading: 'Why Gross Margin Matters Most for Scalability', body: 'Gross margin is the foundation of business model scalability. A business with 80% gross margin can absorb large operating expense increases and still remain profitable at scale. A business with 20% gross margin must grow revenue dramatically just to cover fixed costs. Software businesses have high gross margins (low COGS) — each additional customer adds almost pure profit. Physical goods businesses have lower gross margins because materials and manufacturing scale with every unit sold.' },
      { heading: 'Using Margin Analysis to Improve Profitability', body: 'Compare gross margin and net margin together: if gross margin is high but net margin is low, you have an overhead problem — reduce operating expenses. If gross margin is low, you have a COGS problem — negotiate supplier prices, improve efficiency, or raise prices. If both are low, the business model needs fundamental rethinking. Tracking margins monthly reveals whether cost control efforts are working.' },
    ],
    faqs: [
      { q: 'What is profit margin?', a: 'Profit margin is the percentage of revenue that becomes profit after costs. Net profit margin = (Net Income / Revenue) × 100. A 15% net margin means $15 profit for every $100 in sales.' },
      { q: 'What is a good profit margin?', a: '"Good" depends on industry. Software: 15–30%+ net margin is excellent. Grocery: 1–3% is normal. Restaurant: 5–9% is good. Compare to industry benchmarks, not absolute numbers.' },
      { q: 'What is the difference between gross profit and gross margin?', a: 'Gross profit is a dollar amount: Revenue − COGS. Gross margin is a percentage: Gross Profit / Revenue × 100. Gross margin is more useful for comparison across companies of different sizes.' },
      { q: 'Can profit margin be negative?', a: 'Yes — a negative margin means the business is losing money. Many startups operate at negative margins intentionally while growing revenue, expecting to reach profitability at scale.' },
      { q: 'How do I increase profit margin?', a: 'Four levers: raise prices, reduce COGS, reduce operating expenses, or increase sales volume (to spread fixed costs). Raising prices has the highest impact — a 1% price increase typically increases profit more than a 1% cost reduction.' },
      { q: 'What is EBITDA margin?', a: 'EBITDA margin = EBITDA / Revenue × 100, where EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization. It removes non-cash items and financing costs to show core operating profitability.' },
      { q: 'What is markup vs margin?', a: 'Markup is profit over cost: Markup% = (Price − Cost) / Cost × 100. Margin is profit over price: Margin% = (Price − Cost) / Price × 100. A 50% markup gives a 33.3% margin. They are different ratios of the same numbers.' },
      { q: 'How does pricing strategy affect profit margin?', a: 'Higher prices directly increase gross margin on each unit. Premium pricing (Apple) or value pricing (Walmart) are both valid strategies — Apple maximizes margin per unit, Walmart maximizes volume with thin margins. Pricing strategy determines the fundamental margin structure.' },
    ],
  },

  'markup-formula': {
    title: 'Markup Formula – How to Calculate Price Markup',
    description: 'Learn the markup formula: Markup % = (Price − Cost) / Cost × 100. Understand the difference between markup and margin, and how to set prices correctly.',
    toolSlug: 'markup',
    toolPath: '/calculators/business/markup',
    pageType: 'formula',
    hero: {
      heading: 'Markup Formula: (Price − Cost) / Cost × 100',
      subheading: 'Markup tells you how much you\'ve added to your cost to arrive at the selling price. It\'s the foundation of retail pricing. Learn the formula, understand the crucial difference between markup and margin, and set prices that achieve your profitability targets.',
    },
    formula: {
      expression: 'Markup % = (Selling Price − Cost) / Cost × 100  |  Selling Price = Cost × (1 + Markup/100)  |  Margin % = Markup / (100 + Markup) × 100',
      explanation: 'Markup is always calculated as a percentage of cost. Margin is calculated as a percentage of selling price. These are the same dollar amount but different ratios. A 50% markup on a $10 item gives a $15 price ($5 profit). A 50% margin on $15 means $7.50 profit. Markup % and margin % are not interchangeable.',
      variables: [
        { symbol: 'Markup %', meaning: 'Profit expressed as a percentage of cost' },
        { symbol: 'Cost', meaning: 'Your purchase or production cost per unit' },
        { symbol: 'Selling Price', meaning: 'The price charged to the customer' },
        { symbol: 'Margin %', meaning: 'Profit expressed as a percentage of selling price' },
      ],
    },
    steps: [
      { title: 'Determine your cost per unit', detail: 'Include all direct costs: purchase price, shipping, import duties, packaging, and any direct labor. This is your "cost base" for markup.' },
      { title: 'Decide your desired markup percentage', detail: 'Common markups: retail clothing 100–300%, electronics 15–40%, restaurants 200–300% on food, software varies widely. Research industry standards.' },
      { title: 'Calculate selling price', detail: 'Price = Cost × (1 + Markup%). For $20 cost and 150% markup: Price = $20 × (1 + 1.50) = $20 × 2.50 = $50.' },
      { title: 'Verify the resulting margin', detail: 'Margin = (Price − Cost) / Price × 100. For the $50 item: Margin = ($30 / $50) × 100 = 60%. Ensure this meets your profitability targets after overhead.' },
    ],
    examples: [
      { title: 'Retail product', given: 'Wholesale cost: $25, desired markup: 80%', solution: 'Price = $25 × (1 + 0.80) = $25 × 1.80', answer: 'Selling price = $45; Gross margin = $20/$45 = 44.4%' },
      { title: 'Convert margin target to markup', given: 'You want 40% gross margin. What markup is needed?', solution: 'Markup = Margin / (1 − Margin) = 0.40 / 0.60 = 0.667', answer: '66.7% markup achieves 40% gross margin' },
    ],
    table: {
      headers: ['Markup %', 'Resulting Margin %'],
      rows: [
        ['25%', '20%'],
        ['50%', '33.3%'],
        ['100%', '50%'],
        ['150%', '60%'],
        ['200%', '66.7%'],
        ['400%', '80%'],
      ],
    },
    prose: [
      { heading: 'Markup vs. Margin: Why the Confusion Matters', body: 'The markup/margin confusion is extremely common and can seriously damage profitability if mixed up. If you aim for a 50% margin (50 cents of every dollar is profit) but mistakenly apply 50% markup, you will only achieve a 33.3% margin. To achieve any margin target M, the required markup is M/(1−M). Teach all sales and purchasing staff the difference between these two ratios.' },
      { heading: 'Setting Markup by Industry and Competition', body: 'Markup levels are constrained by both costs and market competition. Check competitors\' retail prices before setting markup. In a commodity market (gasoline, groceries), markup is thin and competition-driven. In differentiated markets (luxury goods, proprietary products), markup can be very high. Keystone pricing (100% markup, doubling cost) is a common retail starting point.' },
    ],
    faqs: [
      { q: 'What is the difference between markup and margin?', a: 'Markup = Profit/Cost. Margin = Profit/Price. A $10 profit on a $20 cost is 50% markup. The same $10 profit on a $30 selling price is 33.3% margin. Different denominators give different percentages for the same dollar profit.' },
      { q: 'What is a typical retail markup?', a: 'Varies widely by industry. Electronics: 15–40%. Clothing: 100–300%. Jewelry: 100–400%. Grocery: 15–50%. Restaurants: 200–400% on food. Always compare to direct competitors.' },
      { q: 'What is keystone pricing?', a: 'Keystone pricing means a 100% markup — selling for double the cost. It is a common starting rule in retail, though many items warrant higher or lower markups based on competition and turnover rate.' },
      { q: 'How do I calculate selling price from margin?', a: 'Price = Cost / (1 − Margin). For $20 cost and 40% margin target: Price = $20 / (1 − 0.40) = $20 / 0.60 = $33.33.' },
      { q: 'Should markup be applied to cost including or excluding shipping?', a: 'Best practice: include all landed costs (purchase price + shipping + duties + receiving) in your cost base before applying markup. This ensures all costs are covered by the markup.' },
      { q: 'Can markup be over 100%?', a: 'Yes, and it often is. A 200% markup on a $10 item gives a $30 price ($20 profit). Luxury goods, jewelry, and some specialty retail routinely use 300–500%+ markups.' },
      { q: 'How does discounting affect markup?', a: 'A 20% discount on a 100% markup item means: cost $10, price $20, discount gives $16. Markup relative to cost = 60%. Gross margin = $6/$16 = 37.5%. Heavy discounting erodes margins quickly.' },
      { q: 'What is the MSRP markup?', a: 'MSRP (Manufacturer\'s Suggested Retail Price) includes the manufacturer\'s markup to the retailer and the retailer\'s expected markup to the consumer. Retailers who sell below MSRP use their own markup margin to compete on price.' },
    ],
  },

  // ── CONSTRUCTION ───────────────────────────────────────────────────────────

  'concrete-formula': {
    title: 'Concrete Formula – How to Calculate Concrete Volume',
    description: 'Learn how to calculate concrete volume in cubic yards and cubic meters for slabs, footings, and columns. Includes waste factors and ready-mix ordering guide.',
    toolSlug: 'concrete',
    toolPath: '/calculators/construction/concrete',
    pageType: 'formula',
    hero: {
      heading: 'Concrete Volume Formula: Length × Width × Depth',
      subheading: 'Ordering the right amount of concrete is critical — too little stops the job, too much wastes money. Learn how to calculate concrete volume for slabs, footings, columns, and steps with easy conversion to cubic yards or cubic meters.',
    },
    formula: {
      expression: 'Volume (ft³) = Length × Width × Depth  |  Cubic Yards = Volume (ft³) / 27  |  Cubic Meters = Length (m) × Width (m) × Depth (m)',
      explanation: 'Concrete volume is calculated by multiplying the three dimensions of the pour. For slabs, use length × width × depth. For round columns or footings, use πr² × height. Convert cubic feet to cubic yards (÷27) for US ordering. Always add 5–10% waste for overruns, spillage, and slight variation in forms.',
      variables: [
        { symbol: 'Length', meaning: 'Horizontal length of the pour in feet or meters' },
        { symbol: 'Width', meaning: 'Horizontal width of the pour in feet or meters' },
        { symbol: 'Depth (Thickness)', meaning: 'Vertical thickness of the pour (convert inches to feet: ÷12)' },
        { symbol: 'Cubic Yard', meaning: 'Standard US unit for ordering ready-mix concrete (27 ft³)' },
        { symbol: 'r', meaning: 'Radius of a circular column or footing' },
      ],
    },
    steps: [
      { title: 'Measure length and width in feet', detail: 'Measure the area to be poured in feet. For irregular shapes, break into rectangles or triangles and calculate each separately.' },
      { title: 'Convert thickness to feet', detail: 'If thickness is in inches, divide by 12. A 4-inch slab = 4/12 = 0.333 feet. A 6-inch slab = 6/12 = 0.5 feet.' },
      { title: 'Multiply all three dimensions', detail: 'Volume (ft³) = Length × Width × (Depth/12 if in inches). This gives cubic feet.' },
      { title: 'Convert to cubic yards', detail: 'Divide cubic feet by 27 to get cubic yards (the standard US concrete ordering unit). Always round up to the nearest 0.25 yards when ordering.' },
      { title: 'Add waste factor', detail: 'Add 5–10% for waste, overrun, and spillage. For footings in uneven soil, add 10–15%. Multiply final cubic yards by 1.05 to 1.10.' },
    ],
    examples: [
      { title: 'Concrete driveway slab', given: '30 ft × 20 ft, 4 inches thick', solution: 'Volume = 30 × 20 × (4/12) = 30 × 20 × 0.333 = 200 ft³; Cubic yards = 200/27 = 7.41; With 10% waste: 8.15', answer: 'Order 8.25 cubic yards (round up to nearest quarter yard)' },
      { title: 'Round column footing', given: 'Diameter = 2 ft, depth = 3 ft', solution: 'r = 1 ft; Volume = π × 1² × 3 = 9.42 ft³; Cubic yards = 9.42/27 = 0.35', answer: '0.35 cubic yards — order 0.5 cubic yards minimum (typical minimum order)' },
      { title: 'Cubic meters (metric)', given: '10 m × 6 m, 15 cm (0.15 m) thick', solution: 'Volume = 10 × 6 × 0.15', answer: '9 cubic meters — add 5% waste = 9.45 m³' },
    ],
    table: {
      headers: ['Slab Thickness', 'Per 100 sq ft', 'Per 100 sq m'],
      rows: [
        ['3.5 inches (90mm)', '1.08 cu yd', '0.9 m³'],
        ['4 inches (100mm)', '1.23 cu yd', '1.0 m³'],
        ['5 inches (125mm)', '1.54 cu yd', '1.25 m³'],
        ['6 inches (150mm)', '1.85 cu yd', '1.5 m³'],
        ['8 inches (200mm)', '2.47 cu yd', '2.0 m³'],
      ],
    },
    prose: [
      { heading: 'Ready-Mix vs. Bags: When to Use Each', body: 'For volumes under about 0.5 cubic yards (~14 bags of 60-lb pre-mix), mixing bags is often practical for small DIY repairs. For anything larger — driveways, foundations, slabs — order ready-mix concrete delivered by truck. Ready-mix is sold by the cubic yard; most companies have a minimum order (typically 1 cubic yard) and charge extra for small loads. Always call ahead to confirm minimum order sizes and lead times.' },
      { heading: 'Concrete Strength Ratings (PSI)', body: 'Concrete is specified by compressive strength: 2,500 PSI for light-duty slabs and footings; 3,000–3,500 PSI for standard driveways and garage floors; 4,000 PSI for heavy traffic or frost areas; 5,000+ PSI for structural and industrial applications. Tell the ready-mix supplier the intended use and they will recommend the correct mix. Always get concrete with the right strength — under-specified concrete fails faster and costs more to repair than the small premium for stronger mix.' },
    ],
    faqs: [
      { q: 'How many bags of concrete for a 4×4 slab (4 inches thick)?', a: '4×4×(4/12) = 5.33 ft³. A 60-lb bag yields approximately 0.45 ft³, so you need about 12 bags. A 80-lb bag yields 0.6 ft³, needing about 9 bags. Add 10% extra.' },
      { q: 'How much does a cubic yard of concrete weigh?', a: 'Approximately 4,000 lbs (about 2 tons) per cubic yard for standard concrete. Lightweight concrete is about 3,000 lbs/yd³. This affects delivery truck weight and floor loading considerations.' },
      { q: 'What is the minimum thickness for a concrete slab?', a: 'For foot traffic: 3.5–4 inches. For driveways: 4–6 inches. For heavy vehicle traffic: 6+ inches. For sidewalks: 4 inches. Thinner slabs crack more easily under load.' },
      { q: 'How do I calculate concrete for stairs?', a: 'Calculate each step as a triangle in side view: Volume = 0.5 × rise × run × width × number of steps. Or calculate the full staircase block volume and subtract the void under each step.' },
      { q: 'How long does concrete take to cure?', a: '24–48 hours before foot traffic. 7 days to reach ~70% strength. 28 days for full design strength. Keep concrete moist (curing blanket, plastic sheeting, or wet curing) for the first week for maximum strength.' },
      { q: 'What is the water-cement ratio?', a: 'Lower water-cement ratio = stronger, less permeable concrete. Typical ratio: 0.45–0.50 (by weight). Adding excess water weakens concrete. On-site water additions by workers are a common cause of below-spec concrete.' },
      { q: 'How much does a concrete slab cost?', a: 'Ready-mix concrete costs $100–$150 per cubic yard (varies by region). A 10×10 ft, 4-inch slab needs about 1.24 cubic yards ($130–$185). Labor to pour and finish adds $3–$5 per sq ft for professional installation.' },
      { q: 'Can I calculate concrete in square feet?', a: 'Area alone is insufficient — you also need depth. Once you have all three dimensions, use Volume = Area × Depth (in feet). Converting just square feet to cubic yards without depth is not possible.' },
    ],
  },

  'paint-formula': {
    title: 'Paint Coverage Formula – How Much Paint Do I Need?',
    description: 'Calculate how much paint you need for any room. Learn the paint coverage formula, account for doors, windows, and multiple coats, with a step-by-step guide.',
    toolSlug: 'paint',
    toolPath: '/calculators/construction/paint',
    pageType: 'formula',
    hero: {
      heading: 'Paint Coverage Formula: Area / Coverage Rate',
      subheading: 'Buying too little paint means extra trips; too much wastes money. Learn the exact formula to calculate paint quantity for walls, ceilings, trim, and exterior surfaces with the right number of coats.',
    },
    formula: {
      expression: 'Paint Needed (gallons) = Paintable Area (sq ft) / Coverage Rate (sq ft/gallon)  |  Paintable Area = Total Wall Area − Doors − Windows  |  Standard Coverage ≈ 350 sq ft/gallon',
      explanation: 'Calculate the total paintable surface area, subtract non-painted areas (doors, windows), then divide by the paint\'s coverage rate (listed on the can, typically 350–400 sq ft per gallon for walls). Multiply by the number of coats needed. Add 10% for cutting in, texture, and waste.',
      variables: [
        { symbol: 'Paintable Area', meaning: 'Total surface area to be painted in square feet' },
        { symbol: 'Coverage Rate', meaning: 'Square feet per gallon from the paint label (typically 350–400 sq ft/gal)' },
        { symbol: 'Coats', meaning: 'Number of paint coats required (usually 2 for new work, 1 for same-color touch-up)' },
        { symbol: 'Waste Factor', meaning: '10–15% added for cutting-in, texture, and edge waste' },
      ],
    },
    steps: [
      { title: 'Measure total wall area', detail: 'Calculate perimeter × ceiling height for all walls. For a 12×14 ft room with 9 ft ceilings: perimeter = (12+14)×2 = 52 ft; Wall area = 52 × 9 = 468 sq ft.' },
      { title: 'Subtract doors and windows', detail: 'Standard door ≈ 20 sq ft. Standard window ≈ 15 sq ft. Subtract all doors and windows from total wall area. Painters often skip this step for rooms with few openings (it provides extra buffer).' },
      { title: 'Add ceiling area if painting', detail: 'Ceiling area = Length × Width. For 12×14 room: ceiling = 168 sq ft. Ceiling paint may have different coverage than wall paint.' },
      { title: 'Divide by coverage rate', detail: 'Gallons = Paintable Area / Coverage Rate. Use the rate on your specific paint can. Premium paints often have better coverage than budget brands.' },
      { title: 'Multiply by coats and add waste', detail: 'Total gallons = (Area/Coverage) × Coats × 1.10. Round up to the nearest gallon or quart when purchasing.' },
    ],
    examples: [
      { title: 'Standard bedroom', given: '12 ft × 14 ft room, 8 ft ceilings, 2 doors, 2 windows, 2 coats', solution: 'Wall area = (12+14)×2 × 8 = 416 sq ft; Less doors (40) and windows (30) = 346 sq ft; Ceiling = 168 sq ft; Total = 514 sq ft; Gallons = 514/350 × 2 × 1.10 = 3.23', answer: 'Buy 2 gallons wall paint + 1 gallon ceiling paint = 3 gallons total (or 4 for safety margin)' },
      { title: 'House exterior', given: '2,000 sq ft exterior, 2 coats, rough stucco surface (300 sq ft/gal)', solution: 'Gallons = 2,000/300 × 2 × 1.10 = 14.67', answer: 'Buy 15 gallons exterior paint for rough stucco finish' },
    ],
    table: {
      headers: ['Surface Type', 'Coverage Rate (sq ft/gal)', 'Notes'],
      rows: [
        ['Smooth drywall', '400', 'Best coverage — new construction standard'],
        ['Semi-smooth wall', '350', 'Most interior walls — typical coverage'],
        ['Textured wall/ceiling', '300–350', 'Texture absorbs more paint'],
        ['Bare wood', '300–350', 'First coat absorbed more; prime first'],
        ['Brick or masonry', '150–200', 'Very porous — needs extra paint or primer'],
        ['Rough stucco', '250–300', 'Texture significantly reduces coverage'],
      ],
    },
    prose: [
      { heading: 'One Coat vs. Two Coats', body: 'One coat is rarely sufficient for new painting. Two coats are standard for full coverage and color accuracy. When painting over a dramatically different color (light to dark or dark to light), a primer coat before two finish coats may be needed — check the paint label for hiding power. One-coat paints exist but may still need two coats on difficult colors. Budget for two coats unless painting same color over same color.' },
      { heading: 'Choosing the Right Finish', body: 'Flat/matte: best for ceilings and low-traffic walls — hides imperfections but not washable. Eggshell: most popular interior wall finish — slight sheen, somewhat washable. Satin: good for kitchens, bathrooms, and high-traffic areas. Semi-gloss: trim, doors, and cabinets — durable and moisture resistant. Gloss: doors and trim where maximum durability is needed. Higher sheen shows surface imperfections more.' },
    ],
    faqs: [
      { q: 'How much area does a gallon of paint cover?', a: 'A gallon of interior paint typically covers 350–400 square feet with one coat on smooth walls. Rough or porous surfaces may get only 200–300 sq ft per gallon. Always check the paint label.' },
      { q: 'How do I calculate paint for a room?', a: 'Measure perimeter × height = wall area. Subtract doors (20 sq ft each) and windows (15 sq ft each). Add ceiling area if painting. Divide by coverage rate (350 sq ft/gal). Multiply by number of coats.' },
      { q: 'Should I buy a quart or a gallon?', a: 'A gallon covers ~350 sq ft per coat. A quart covers ~87 sq ft. If you need less than 1 gallon: buy a quart or two. Note that paint per unit area is much cheaper in gallons than quarts.' },
      { q: 'How much extra paint should I buy?', a: 'Add 10% for first-time painting for waste, edge cutting, and touch-ups. Save leftover paint for future touch-ups — label it with room name and date.' },
      { q: 'Do I need primer before painting?', a: 'Use primer when: painting new drywall, covering dark colors with light ones, painting over stains, or painting bare wood. Modern paint-and-primer products work well for simple repaints but may not match dedicated primer performance on bare surfaces.' },
      { q: 'How much paint for a ceiling?', a: 'Calculate ceiling area = length × width. Ceilings usually need ceiling-specific paint (flat white). Coverage is similar to walls: 350–400 sq ft per gallon. One coat is sometimes sufficient for white on white.' },
      { q: 'How much exterior paint do I need?', a: 'Calculate wall area of all four sides plus any soffits, fascia, and trim. Exterior typically needs 2–3 coats on bare wood or when changing color significantly. Account for rough textures reducing coverage.' },
      { q: 'What is the best way to estimate paint for trim?', a: 'Trim coverage is hard to calculate directly. A good rule: buy 1 quart of trim paint for every 3–4 gallons of wall paint. For rooms with extensive crown molding or wainscoting, estimate trim linear footage × 0.5 ft width.' },
    ],
  },

  'how-to-tile': {
    title: 'How to Calculate Tile for Any Room – Step-by-Step',
    description: 'Learn how to calculate the number of tiles needed for floors, walls, and backsplashes. Includes waste factor, grout joint allowances, and tile ordering guide.',
    toolSlug: 'tile',
    toolPath: '/calculators/construction/tile',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Tile Quantity: Step-by-Step',
      subheading: 'Tile calculation is straightforward but getting it wrong is expensive — running short mid-project is a nightmare. This guide walks you through measuring, calculating tile quantity, waste allowance, and ordering with confidence.',
    },
    steps: [
      { title: 'Measure the area to be tiled', detail: 'For rectangular areas: Length × Width = Area in sq ft. For L-shaped rooms, break into rectangles and add. Measure in feet; convert inches by dividing by 12.' },
      { title: 'Calculate tiles per square foot', detail: 'Tile area = (tile length × tile width) in sq inches / 144 to convert to sq ft. Tiles per sq ft = 1 / tile area in sq ft. For 12×12 tiles: 1 tile/sq ft. For 6×6 tiles: 4 tiles/sq ft.' },
      { title: 'Account for grout joints', detail: 'Grout joints slightly increase spacing. Standard: 1/16 inch (rectified tiles), 1/8 inch (most tiles), 1/4 inch (rustic/handmade tiles). For most calculations, grout joints make a minor difference and are typically ignored in rough estimates.' },
      { title: 'Add waste allowance', detail: 'Straight lay: add 10%. Diagonal (45°) lay: add 15–20%. Complex patterns (herringbone, chevron): add 20–25%. Border tiles or many cuts: add extra. Always better to have 1–2 boxes extra than to run short.' },
      { title: 'Calculate total tiles to order', detail: 'Total tiles = (Area × tiles per sq ft) × (1 + waste %). Round up to the nearest box (tiles are sold in boxes). Record the lot number — tiles from different lots may have slight color variation.' },
    ],
    examples: [
      { title: 'Kitchen floor', given: '12 ft × 10 ft kitchen, 12×12 inch tiles, straight lay', solution: 'Area = 120 sq ft; Tiles needed = 120 × 1 = 120; With 10% waste = 132', answer: 'Order 132 tiles (typically 9–12 per box, so about 11–15 boxes)' },
      { title: 'Bathroom wall backsplash', given: '8 ft × 4 ft wall, 3×6 inch subway tiles, straight lay', solution: 'Area = 32 sq ft; Tile area = (3×6)/144 = 0.125 sq ft; Tiles per sq ft = 8; Total = 32 × 8 = 256; With 10% waste = 282', answer: 'Order 282 tiles (about 6 sq ft per sheet if mesh-mounted — order 37+ sheets)' },
    ],
    table: {
      headers: ['Tile Size', 'Tiles per Sq Ft', 'Sq Ft per 100 Tiles'],
      rows: [
        ['4×4 inches', '9', '11.1'],
        ['6×6 inches', '4', '25'],
        ['12×12 inches', '1', '100'],
        ['18×18 inches', '0.44', '225'],
        ['24×24 inches', '0.25', '400'],
        ['3×6 inches (subway)', '8', '12.5'],
        ['2×2 inches (mosaic)', '36', '2.8'],
      ],
    },
    prose: [
      { heading: 'Why Waste Allowance Is Essential', body: 'Tile waste comes from cuts at edges and corners, breakage during cutting, pattern matching, and occasional defective tiles. A "waste-free" installation does not exist. Ordering exactly the number you calculated means running short — then scrambling to find tiles from the same production lot (dye lot), which may have a slightly different color. Always order 10% extra (15–20% for diagonal or complex patterns) and keep leftovers for future repairs.' },
      { heading: 'Planning the Tile Layout Before Cutting', body: 'Before starting, do a dry layout — lay tiles across the floor without adhesive to plan the pattern. Start from the center of the room (find center by snapping chalk lines diagonally corner-to-corner). Plan so cut tiles at walls are equal on both sides and at least half a tile wide. Avoid having very small cut pieces (less than 1/3 tile width) at visible edges — shift the layout to make cuts larger.' },
    ],
    faqs: [
      { q: 'How do I calculate tile for a room?', a: 'Measure length × width to get sq ft. Divide by tile area in sq ft. Add 10% waste. Round up to the nearest box.' },
      { q: 'How much tile waste should I allow?', a: 'Straight lay: 10%. Diagonal or 45° lay: 15–20%. Complex patterns (herringbone, chevron): 20–25%. Large format tiles with many cuts: 15%.' },
      { q: 'How do I calculate tile for a diagonal pattern?', a: 'Calculate area normally, then add 15–20% for waste (diagonal cuts create significantly more waste at edges). The tile quantity calculation per sq ft is the same as straight lay.' },
      { q: 'What is a tile lot number and why does it matter?', a: 'Tiles from the same manufacturer are made in batches (lots). Different lots may have slight color, size, or texture variations. Always buy from the same lot number to ensure uniformity. Write down the lot number and buy all tiles at once.' },
      { q: 'How do I estimate grout for tile?', a: 'Grout quantity depends on tile size and joint width. A rough guide: small tiles with wide joints need more grout. For 12×12 tiles with 1/8 inch joints: about 1 lb grout per 3 sq ft. Check grout calculator for specific tile and joint combinations.' },
      { q: 'Can I tile over existing tile?', a: 'Yes in many cases, if the existing tile is firmly adhered and the added height is acceptable. Clean the surface well and use a bonding primer or polymer-modified thinset. Avoid if the floor is already at or above door transition height.' },
      { q: 'What size tile for a small bathroom?', a: 'Larger tiles (12×12 or larger) can make a small bathroom look bigger and have fewer grout lines. Mosaic tiles (1×1 or 2×2) work well for floors due to texture. Avoid very large format tiles (24×24+) in very small spaces as proportions look odd.' },
      { q: 'How do I calculate tile for a curved or irregular area?', a: 'Divide the area into triangles or rectangles and sum their areas. For true curves, use the area formula for circles or ellipses. Add extra waste (15–20%) for curves since more cuts are needed.' },
    ],
  },

  'flooring-formula': {
    title: 'Flooring Calculator Formula – How Much Flooring Do You Need?',
    description: 'Learn how to calculate flooring quantity for hardwood, laminate, vinyl, and carpet. Includes waste factors, room measurement tips, and ordering guide.',
    toolSlug: 'flooring',
    toolPath: '/calculators/construction/flooring',
    pageType: 'formula',
    hero: {
      heading: 'Flooring Formula: Area + Waste = Amount to Order',
      subheading: 'Whether it\'s hardwood, laminate, vinyl plank, or carpet, the core formula is the same: calculate the square footage and add waste. This guide covers all flooring types with material-specific waste allowances.',
    },
    formula: {
      expression: 'Total Flooring = Room Area × (1 + Waste %)  |  Room Area = Length × Width  |  Waste: straight lay 10%, diagonal 15%, carpet 15%',
      explanation: 'Calculate the total area of the room(s) in square feet. Add a waste percentage based on the flooring type and installation pattern. Flooring is sold in square feet or square yards (carpet). For multiple rooms, calculate each separately and sum.',
      variables: [
        { symbol: 'Room Area', meaning: 'Length × Width in square feet for each room' },
        { symbol: 'Waste %', meaning: '10–15% for most hard flooring; 15% for diagonal or carpet; 20% for herringbone/chevron' },
        { symbol: 'Linear Foot', meaning: 'Used for some specialty hardwood; 1 sq ft ≈ depends on plank width' },
      ],
    },
    steps: [
      { title: 'Measure each room accurately', detail: 'Measure the widest points in each direction, including closets. For L-shaped rooms, calculate each rectangle separately.' },
      { title: 'Calculate total area', detail: 'Sum all room areas. For open floor plans, measure the entire open area.' },
      { title: 'Choose your waste factor', detail: '10% for straight installation (planks run parallel to walls). 12–15% for diagonal. 20%+ for herringbone or chevron. 15% for carpet (rolls have width constraints). Stair installations add per-step calculations.' },
      { title: 'Calculate total to order', detail: 'Total sq ft = Room Area × (1 + waste%). Flooring is sold in boxes; divide by the box coverage (shown on box) to get number of boxes. Always round up.' },
    ],
    examples: [
      { title: 'Hardwood flooring, 2 rooms', given: 'Living room: 15×20 = 300 sq ft; Bedroom: 12×12 = 144 sq ft; straight lay, 10% waste', solution: 'Total area = 444 sq ft; With 10% waste = 488.4 sq ft', answer: 'Order 490 sq ft (approx. 33 boxes at 15 sq ft/box)' },
      { title: 'Carpet for bedroom', given: '14×16 ft bedroom, 15% waste', solution: 'Area = 224 sq ft × 1.15 = 257.6 sq ft', answer: 'Order 258 sq ft (about 28.7 sq yd) — carpet sold by sq yd: 258/9 ≈ 29 sq yd' },
    ],
    table: {
      headers: ['Flooring Type', 'Typical Waste', 'Installation Note'],
      rows: [
        ['Hardwood (straight)', '10%', 'Acclimate 72 hrs before install; leave ¾-inch gap at walls'],
        ['Hardwood (diagonal)', '15%', 'More waste at edges; striking look but labor-intensive'],
        ['Laminate', '10%', 'No acclimation needed; snap-lock installation'],
        ['Vinyl plank (LVP)', '10%', 'Easiest DIY install; no subfloor prep usually needed'],
        ['Ceramic/porcelain tile', '10–20%', 'See tile calculator; separate category'],
        ['Carpet', '15%', 'Sold in 12-ft rolls; rooms wider than 12 ft need seams'],
      ],
    },
    prose: [
      { heading: 'Dealing with Seams in Carpet', body: 'Carpet is manufactured in 12-foot-wide rolls. If any room dimension exceeds 12 feet, seams will be necessary. Plan seam placement where they will be least visible (behind furniture, away from main walking paths, perpendicular to the primary light source). Carpet direction (pile direction) should run toward the main entrance for best appearance. Include all seam waste in your 15% buffer.' },
      { heading: 'Acclimation and Installation Order', body: 'Hardwood and engineered wood flooring must acclimate in the installation environment for 48–72 hours before installation, allowing moisture equalization. Install the heaviest, largest furniture first. Install in the direction that shows the longest planks from the room\'s main entrance. Work from multiple boxes simultaneously to blend any color variation between boxes.' },
    ],
    faqs: [
      { q: 'How do I calculate flooring in square feet?', a: 'Measure room length and width in feet and multiply: Area = Length × Width. For rooms with closets or irregular shapes, break into rectangles and add each area.' },
      { q: 'How much extra flooring should I order?', a: 'Order 10% extra for straight installations, 15% for diagonal or herringbone patterns. Also keep a few boxes of leftover flooring for future repairs — matching discontinued products later is very difficult.' },
      { q: 'How do I convert square feet to square yards for carpet?', a: 'Divide square feet by 9 (since 1 sq yd = 3 ft × 3 ft = 9 sq ft). For 250 sq ft: 250/9 ≈ 27.8 sq yd. Round up.' },
      { q: 'Do I include closets in my flooring calculation?', a: 'Yes, always include closets. Measure closet depth × width and add to the room total.' },
      { q: 'What is the best flooring for high-traffic areas?', a: 'Luxury vinyl plank (LVP) is extremely durable and water-resistant — best for kitchens and bathrooms. Hardwood adds value but scratches. Tile is most durable but cold and hard. Laminate is an affordable mid-option.' },
      { q: 'How many boxes of laminate flooring do I need?', a: 'Calculate total sq ft needed (with waste). Divide by the sq ft per box (shown on label, typically 20–30 sq ft). Round up to the nearest whole box.' },
      { q: 'What is the direction to install hardwood flooring?', a: 'Run planks perpendicular to floor joists for structural reasons. Also consider room shape — longer dimension usually looks best with planks running the same direction.' },
      { q: 'Can I mix flooring boxes from different lots?', a: 'Avoid it for the main installation — color can vary slightly between lots. For repairs, small lot differences may be noticeable. Always buy enough for the entire job plus leftover from a single purchase.' },
    ],
  },

  // ── CONVERTERS ─────────────────────────────────────────────────────────────

  'how-to-convert-celsius-to-fahrenheit': {
    title: 'How to Convert Celsius to Fahrenheit – Formula & Examples',
    description: 'Learn how to convert Celsius to Fahrenheit using F = (C × 9/5) + 32 and the quick mental math shortcut. Includes a full conversion table and reverse formula.',
    toolSlug: 'temperature',
    toolPath: '/calculators/converters/temperature',
    pageType: 'how-to',
    hero: {
      heading: 'How to Convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32',
      subheading: 'Temperature conversion is one of the most common unit conversions needed in everyday life, cooking, travel, and science. Learn the exact formula, a quick mental math shortcut, and how to convert Fahrenheit back to Celsius.',
    },
    steps: [
      { title: 'Use the exact formula: °F = (°C × 9/5) + 32', detail: 'Multiply the Celsius temperature by 9/5 (or 1.8), then add 32. For 25°C: (25 × 1.8) + 32 = 45 + 32 = 77°F.' },
      { title: 'Quick mental math shortcut', detail: 'Approximate shortcut: double the Celsius, subtract 10%, add 32. For 20°C: 20 × 2 = 40, minus 10% = 36, plus 32 = 68°F (exact is 68°F — perfect!). Works well for everyday estimates.' },
      { title: 'For common cooking temperatures', detail: 'Key references: 0°C = 32°F (water freezes), 100°C = 212°F (water boils), 180°C = 356°F (moderate oven), 200°C = 392°F (hot oven). Memorize these anchor points for quick estimates.' },
      { title: 'Convert Fahrenheit back to Celsius', detail: 'Reverse formula: °C = (°F − 32) × 5/9. For 98.6°F: (98.6 − 32) × 5/9 = 66.6 × 0.5556 = 37°C (normal body temperature).' },
    ],
    examples: [
      { title: 'Oven temperature (baking)', given: 'Recipe calls for 180°C. What is this in Fahrenheit?', solution: 'F = (180 × 9/5) + 32 = 324 + 32', answer: '356°F — set oven to 350°F (nearest common setting)' },
      { title: 'Weather temperature', given: '35°C outside in summer. How hot is that in Fahrenheit?', solution: 'F = (35 × 1.8) + 32 = 63 + 32', answer: '95°F — very hot summer day' },
      { title: 'Fever temperature', given: '39°C fever. What is the Fahrenheit equivalent?', solution: 'F = (39 × 1.8) + 32 = 70.2 + 32', answer: '102.2°F — significant fever requiring attention' },
    ],
    table: {
      headers: ['°Celsius', '°Fahrenheit', 'Reference'],
      rows: [
        ['−40', '−40', 'Where Celsius and Fahrenheit are equal'],
        ['0', '32', 'Water freezes'],
        ['20', '68', 'Comfortable room temperature'],
        ['37', '98.6', 'Normal human body temperature'],
        ['100', '212', 'Water boils (at sea level)'],
        ['180', '356', 'Moderate oven (Celsius) / 350°F (Fahrenheit)'],
        ['200', '392', 'Hot oven'],
        ['220', '428', 'Very hot oven'],
      ],
    },
    prose: [
      { heading: 'Why Two Temperature Scales Exist', body: 'Fahrenheit was developed by Daniel Gabriel Fahrenheit in 1724, originally setting 0°F at the coldest brine temperature he could create and 96°F at human body temperature. Celsius (Anders Celsius, 1742) defined 0°C as water\'s freezing point and 100°C as its boiling point — a logical scientific scale. The US still uses Fahrenheit for everyday use; the rest of the world uses Celsius. The scientific community universally uses Celsius (and Kelvin for absolute temperatures).' },
      { heading: 'Kelvin: The Absolute Temperature Scale', body: 'Kelvin (K) is the SI unit of temperature, starting at absolute zero (−273.15°C), the coldest possible temperature. K = °C + 273.15. No degree symbol is used with Kelvin. Kelvin is used in physics, chemistry, and astronomy. 0 K = −273.15°C = −459.67°F. Water freezes at 273.15 K and boils at 373.15 K.' },
    ],
    faqs: [
      { q: 'What is the formula to convert Celsius to Fahrenheit?', a: '°F = (°C × 9/5) + 32, or equivalently °F = (°C × 1.8) + 32. For 100°C: (100 × 1.8) + 32 = 212°F.' },
      { q: 'Is there an easy way to mentally convert C to F?', a: 'Quick method: multiply by 2, subtract 10%, add 32. For 30°C: 30×2=60, minus 6 = 54, plus 32 = 86°F (exact is 86°F). This works because 1.8 ≈ 2 × 0.9.' },
      { q: 'At what temperature do Celsius and Fahrenheit meet?', a: '−40°. At −40°C and −40°F, both scales show the same number. This is the only point where they are equal.' },
      { q: 'What is 37°C in Fahrenheit?', a: '37°C = 98.6°F (normal body temperature). This is a useful anchor point: if you memorize 37°C = 98.6°F, you have a human health reference.' },
      { q: 'How do I convert Fahrenheit to Celsius?', a: '°C = (°F − 32) × 5/9 or × 0.5556. For 98.6°F: (98.6−32) × 0.5556 = 66.6 × 0.5556 = 37°C.' },
      { q: 'What is room temperature in Celsius?', a: 'Comfortable room temperature is typically 20–22°C (68–72°F). The ASHRAE standard defines comfortable room temperature as 20–26°C (68–79°F) depending on season.' },
      { q: 'What is the boiling point of water in Celsius and Fahrenheit?', a: 'At sea level: 100°C = 212°F. At high altitude, lower atmospheric pressure reduces the boiling point — Denver (5,280 ft) water boils at about 95°C (203°F).' },
      { q: 'Why does cooking sometimes use Fahrenheit ovens with Celsius recipes?', a: 'Recipes from different countries use different scales. Always convert before setting the oven. Most modern ovens display either scale. A 200°C recipe = 392°F — round to 400°F for closest common setting.' },
    ],
  },

  'km-to-miles-formula': {
    title: 'Kilometers to Miles Formula – km to miles Conversion',
    description: 'Learn the km to miles formula: miles = km × 0.6214. Includes the exact conversion factor, quick mental math tricks, and a full km/miles reference table.',
    toolSlug: 'length',
    toolPath: '/calculators/converters/length',
    pageType: 'formula',
    hero: {
      heading: 'Kilometers to Miles: 1 km = 0.6214 miles',
      subheading: 'Converting between kilometers and miles is needed for travel, running, cycling, and road signs in different countries. Learn the exact formula, a quick mental math shortcut, and the reverse miles-to-km conversion.',
    },
    formula: {
      expression: 'Miles = Kilometers × 0.621371  |  Kilometers = Miles × 1.60934  |  Quick: miles ≈ km × 0.6 (rough estimate)',
      explanation: 'One kilometer equals exactly 0.621371 miles. To convert km to miles, multiply by 0.621371 (or approximately 0.6 for rough estimates). To convert miles to kilometers, multiply by 1.60934. The ratio 8 km ≈ 5 miles is a useful approximation (exact: 8.04672 km = 5 miles).',
      variables: [
        { symbol: 'km', meaning: 'Kilometers — metric unit of distance (1 km = 1,000 meters)' },
        { symbol: 'miles', meaning: 'Miles — imperial unit of distance (1 mile = 5,280 feet = 1.60934 km)' },
        { symbol: '0.621371', meaning: 'Exact conversion factor: multiply km by this to get miles' },
        { symbol: '1.60934', meaning: 'Exact conversion factor: multiply miles by this to get km' },
      ],
    },
    steps: [
      { title: 'Multiply km by 0.621371', detail: 'For 10 km: 10 × 0.621371 = 6.214 miles. For 100 km: 100 × 0.621371 = 62.14 miles.' },
      { title: 'Use the 8:5 ratio for mental math', detail: '8 km ≈ 5 miles (close enough for most estimates). For 40 km: (40/8) × 5 = 25 miles. For 24 km: (24/8) × 5 = 15 miles.' },
      { title: 'Convert miles to km by multiplying by 1.609', detail: 'For 26.2 miles (marathon): 26.2 × 1.609 = 42.16 km. For 100 miles: 100 × 1.609 = 160.9 km.' },
      { title: 'Convert speed units (km/h to mph)', detail: 'Speed units use the same factor: mph = km/h × 0.6214. For 120 km/h: 120 × 0.6214 = 74.6 mph. For 60 mph: 60 / 0.6214 = 96.6 km/h.' },
    ],
    examples: [
      { title: '5K race', given: '5 km race — what is this in miles?', solution: '5 × 0.6214 = 3.107', answer: '5 km = 3.11 miles' },
      { title: 'Speed conversion', given: '100 km/h speed limit — what is this in mph?', solution: '100 × 0.6214 = 62.14', answer: '100 km/h ≈ 62.1 mph' },
      { title: 'Marathon distance', given: '26.2 miles — what is this in kilometers?', solution: '26.2 × 1.60934 = 42.16', answer: '26.2 miles = 42.2 km (marathon standard distance)' },
    ],
    table: {
      headers: ['Kilometers', 'Miles', 'Common Reference'],
      rows: [
        ['1', '0.621', ''],
        ['5', '3.11', '5K race'],
        ['10', '6.21', '10K race'],
        ['21.1', '13.1', 'Half marathon'],
        ['42.2', '26.2', 'Marathon'],
        ['100', '62.1', '100K ultramarathon'],
        ['1.609', '1', '1 mile'],
        ['8', '4.97 ≈ 5', 'Useful ratio: 8 km ≈ 5 miles'],
      ],
    },
    prose: [
      { heading: 'The Metric vs Imperial Divide', body: 'The US, Liberia, and Myanmar are the only countries still using miles as the standard road distance unit. All other countries use kilometers. If you are traveling internationally, rental car speedometers and road signs will be in km/h and kilometers. Speed conversion: 60 mph ≈ 97 km/h, 70 mph ≈ 113 km/h. Remember: highway speeds in Europe in km/h look much larger than the equivalent mph.' },
      { heading: 'Why 1.609 km per Mile?', body: 'The international mile is defined as exactly 1,609.344 meters (1.609344 km). This comes from the historical definition of 1 mile = 5,280 feet × 0.3048 m/foot = 1,609.344 m. The nautical mile is different: 1 nautical mile = 1,852 meters ≈ 1.151 statute miles, based on one arcminute of latitude. Aviation and maritime navigation use nautical miles.' },
    ],
    faqs: [
      { q: 'How many miles is 1 km?', a: '1 kilometer = 0.621371 miles. In everyday terms: slightly more than half a mile.' },
      { q: 'How do I convert km to miles quickly?', a: 'Use the 8:5 ratio: divide km by 8, multiply by 5. Or simply multiply by 0.6 for a rough estimate (off by about 3%).' },
      { q: 'What is 100 km in miles?', a: '100 km × 0.621371 = 62.14 miles. This is approximately 62 miles.' },
      { q: 'What is 1 mile in km?', a: '1 mile = 1.60934 km. Approximately 1.6 km per mile.' },
      { q: 'Is km/h the same as mph?', a: 'No. 1 km/h = 0.621371 mph. 60 km/h ≈ 37.3 mph. 100 km/h ≈ 62.1 mph. Always convert speeds when driving in countries that use different units.' },
      { q: 'What is 5 miles in km?', a: '5 miles × 1.60934 = 8.047 km. Approximately 8 km — this is why the 8:5 ratio works as an approximation.' },
      { q: 'How do GPS and mapping apps handle km/miles?', a: 'Most apps default to your device\'s regional settings. You can switch between km and miles in the app settings. Navigation apps in the US default to miles; European apps to km.' },
      { q: 'What is a nautical mile in km and regular miles?', a: '1 nautical mile = 1.852 km = 1.151 statute miles. Nautical miles are used in aviation and maritime navigation, defined as 1 arcminute of latitude along any meridian.' },
    ],
  },

  'how-to-convert-kg-to-lbs': {
    title: 'How to Convert kg to lbs – Kilograms to Pounds Formula',
    description: 'Learn how to convert kilograms to pounds: lbs = kg × 2.20462. Includes the reverse conversion, quick mental math, and a complete kg/lbs reference table.',
    toolSlug: 'weight',
    toolPath: '/calculators/converters/weight',
    pageType: 'how-to',
    hero: {
      heading: 'Kilograms to Pounds: 1 kg = 2.20462 lbs',
      subheading: 'Weight conversion between kg and lbs is needed for travel, shipping, fitness, cooking, and international trade. Learn the exact formula, quick mental shortcuts, and how to convert pounds back to kilograms.',
    },
    steps: [
      { title: 'Multiply kg by 2.20462', detail: 'Exact formula: lbs = kg × 2.20462. For 70 kg: 70 × 2.20462 = 154.32 lbs.' },
      { title: 'Use the quick approximation: multiply by 2.2', detail: 'For most purposes, multiply kg by 2.2. For 80 kg: 80 × 2.2 = 176 lbs (exact: 176.37 lbs). Error is only 0.2%.' },
      { title: 'Convert lbs to kg by dividing by 2.2046', detail: 'kg = lbs / 2.2046, or lbs × 0.4536. For 150 lbs: 150 / 2.2046 = 68.04 kg.' },
      { title: 'For precise conversions', detail: 'Use 1 kg = 2.20462262 lbs exactly. The pound is now defined as exactly 0.45359237 kg (since 1959 international treaty).' },
    ],
    examples: [
      { title: 'Body weight', given: '75 kg person — what is weight in lbs?', solution: '75 × 2.20462 = 165.35', answer: '75 kg = 165.3 lbs' },
      { title: 'Shipping weight', given: '10 lb package — what is weight in kg?', solution: '10 / 2.20462 = 4.536', answer: '10 lbs = 4.54 kg' },
      { title: 'Gym weight plates', given: 'You lift 100 kg. What is this in lbs?', solution: '100 × 2.20462 = 220.46', answer: '100 kg = 220.5 lbs' },
    ],
    table: {
      headers: ['Kilograms', 'Pounds', 'Common Reference'],
      rows: [
        ['1', '2.205', 'Typical can of food'],
        ['10', '22.05', 'Small dumbbell'],
        ['45.36', '100', '100 lbs'],
        ['50', '110.23', ''],
        ['68', '149.9', 'Average adult weight (some countries)'],
        ['70', '154.32', ''],
        ['90.7', '200', '200 lbs'],
        ['100', '220.46', 'Olympic barbell weight limit (equipment)'],
      ],
    },
    prose: [
      { heading: 'Metric vs. Imperial Weight Units', body: 'Most of the world measures body weight in kilograms. The US uses pounds. When traveling, gym memberships, doctor visits, or package shipping may express weight differently. Medical dosages (mg/kg) always use kilograms, even in the US, making accurate conversion important in healthcare settings.' },
      { heading: 'Stone: The UK Weight Unit', body: 'The UK also uses "stone" for body weight: 1 stone = 14 pounds = 6.35 kg. To convert kg to stone: divide by 6.35. A person weighing 76 kg is approximately 12 stone. Stone is rarely used outside the UK and Ireland for body weight.' },
    ],
    faqs: [
      { q: 'How many pounds is 1 kg?', a: '1 kilogram = 2.20462 pounds. For practical purposes, use 1 kg ≈ 2.2 lbs.' },
      { q: 'How do I convert kg to lbs without a calculator?', a: 'Multiply by 2.2 (close approximation). For more precision: multiply by 2 and add 10%: 70 kg → 70×2=140, plus 10% of 70=7, total = 147 (exact: 154.32 — better to use 2.2 directly).' },
      { q: 'How many kg is 100 lbs?', a: '100 lbs ÷ 2.20462 = 45.36 kg. Approximately 45.4 kg.' },
      { q: 'Is kg or lbs used in the Olympics?', a: 'Olympic weightlifting uses kilograms (metric). Olympic weight categories (e.g., 73 kg, 89 kg, 102 kg) are defined in kg. Medal weights are expressed in kg internationally.' },
      { q: 'How do airlines calculate luggage weight?', a: 'Airlines specify baggage limits in either kg or lbs depending on the airline and region. Common limits: 23 kg (50 lbs) for checked bags on economy class. Always convert when flying internationally to avoid overweight baggage fees.' },
      { q: 'Why is 1 kg exactly 2.20462 lbs?', a: 'The international pound is defined as exactly 0.45359237 kg since 1959. So 1 kg = 1/0.45359237 = 2.20462262... lbs. The kilogram is now defined via the Planck constant.' },
      { q: 'How do I convert pounds and ounces to kg?', a: 'Convert to total ounces first: (lbs × 16) + oz. Then: kg = total ounces × 0.02835. Or: convert lbs to kg (÷2.2046) and ounces to kg (÷35.274), then add.' },
      { q: 'What is 70 kg in stone and pounds?', a: '70 kg ÷ 6.35 = 11.02 stone = 11 stone 0.3 lbs ≈ 11 stone. Also: 70 × 2.20462 = 154.3 lbs = 11 stone 0.3 lbs.' },
    ],
  },

  'how-to-convert-celsius-to-kelvin': {
    title: 'How to Convert Celsius to Kelvin and Other Temperature Scales',
    description: 'Learn to convert between Celsius, Fahrenheit, and Kelvin. Includes exact formulas, absolute zero explained, and a reference conversion table.',
    toolSlug: 'temperature',
    toolPath: '/calculators/converters/temperature',
    pageType: 'how-to',
    hero: {
      heading: 'Temperature Scale Conversions: Celsius, Fahrenheit & Kelvin',
      subheading: 'Mastering temperature unit conversions is essential for science, cooking, and international travel. This guide covers all three major temperature scales with exact formulas and common reference points.',
    },
    steps: [
      { title: 'Celsius to Kelvin: add 273.15', detail: 'K = °C + 273.15. Water freezes at 0°C = 273.15 K. Water boils at 100°C = 373.15 K. Absolute zero = 0 K = −273.15°C.' },
      { title: 'Celsius to Fahrenheit: multiply and add', detail: '°F = (°C × 9/5) + 32. Room temperature 20°C = (20 × 1.8) + 32 = 68°F.' },
      { title: 'Fahrenheit to Celsius: subtract and multiply', detail: '°C = (°F − 32) × 5/9. Boiling point: (212−32) × 5/9 = 180 × 5/9 = 100°C.' },
      { title: 'Fahrenheit to Kelvin', detail: 'K = (°F + 459.67) × 5/9. Or convert to Celsius first, then add 273.15.' },
    ],
    examples: [
      { title: 'Scientific experiment', given: 'Reaction occurs at 250°C — convert to Kelvin', solution: 'K = 250 + 273.15', answer: '523.15 K' },
      { title: 'Outdoor temperature', given: '−10°C winter day — convert to Fahrenheit', solution: 'F = (−10 × 1.8) + 32 = −18 + 32', answer: '14°F' },
    ],
    table: {
      headers: ['°Celsius', '°Fahrenheit', 'Kelvin', 'Reference'],
      rows: [
        ['−273.15', '−459.67', '0', 'Absolute zero'],
        ['−196', '−320.8', '77.15', 'Liquid nitrogen'],
        ['−78.5', '−109.3', '194.65', 'Dry ice (CO₂)'],
        ['0', '32', '273.15', 'Water freezes'],
        ['20', '68', '293.15', 'Room temperature'],
        ['37', '98.6', '310.15', 'Body temperature'],
        ['100', '212', '373.15', 'Water boils'],
      ],
    },
    prose: [
      { heading: 'What Is Absolute Zero?', body: 'Absolute zero (0 K = −273.15°C = −459.67°F) is the lowest theoretically possible temperature — the point at which all particle motion stops. It cannot be reached, only approached. Scientists have cooled atoms to within billionths of a degree of absolute zero. At these temperatures, exotic quantum states like Bose-Einstein condensates form. The Kelvin scale is essential in physics and chemistry because all energy calculations require absolute temperatures.' },
    ],
    faqs: [
      { q: 'How do I convert Celsius to Kelvin?', a: 'Add 273.15: K = °C + 273.15. No degree symbol is used with Kelvin — it is simply "K", not "°K".' },
      { q: 'Why does Kelvin start at absolute zero?', a: 'Kelvin is an absolute temperature scale starting at the lowest physically possible temperature. This makes it ideal for scientific equations where negative temperatures would be physically meaningless (e.g., gas laws, thermodynamics).' },
      { q: 'What is the freezing point of water in all three scales?', a: 'Water freezes at 0°C = 32°F = 273.15 K.' },
      { q: 'What temperature is human body temperature in all three scales?', a: '37°C = 98.6°F = 310.15 K.' },
      { q: 'Can Kelvin be negative?', a: 'Not in the conventional thermodynamic sense. 0 K is absolute zero and temperatures cannot go below this. In quantum mechanics, "negative temperature" is a special technical state, not literally colder than 0 K.' },
      { q: 'Which temperature scale is used in science?', a: 'Kelvin is the SI unit for temperature used in physics and chemistry. Celsius is used in most countries for everyday life. Fahrenheit is used mainly in the US for everyday weather and cooking.' },
      { q: 'How is Rankine different from Kelvin?', a: 'Rankine (°R) is an absolute temperature scale based on Fahrenheit: 0°R = absolute zero, and the degree size equals Fahrenheit degrees (not Celsius). °R = °F + 459.67. Rarely used outside US engineering contexts.' },
      { q: 'What is room temperature in Kelvin?', a: 'Standard room temperature (20°C) = 293.15 K. Scientific standard temperature (25°C) = 298.15 K.' },
    ],
  },

  // ── DATE & TIME ────────────────────────────────────────────────────────────

  'how-to-calculate-age': {
    title: 'How to Calculate Age – Age from Date of Birth',
    description: 'Learn how to calculate exact age from date of birth. Covers years, months, and days calculation, leap year handling, and how age calculators work.',
    toolSlug: 'age',
    toolPath: '/calculators/date-time/age',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Age from Date of Birth',
      subheading: 'Calculating exact age in years, months, and days requires careful handling of calendar irregularities like leap years and varying month lengths. This guide explains the method used by age calculators and how to verify your result.',
    },
    steps: [
      { title: 'Note the birth date and current date', detail: 'Write both dates in the same format: Year-Month-Day. Example: Birth: 1990-07-15, Today: 2025-03-22.' },
      { title: 'Subtract the birth year from the current year', detail: '2025 − 1990 = 35 years (preliminary). This is not the final age — we need to check if the birthday has occurred yet this year.' },
      { title: 'Check if the birthday has passed this year', detail: 'If today\'s month is after the birth month, or same month with day ≥ birth day, the birthday has occurred. If not, subtract 1 year from the preliminary count.' },
      { title: 'Calculate remaining months', detail: 'If birthday hasn\'t occurred: months = 12 − (birth month − current month) ... or count forward from the last birthday. It is easier to use an age calculator for exact months and days.' },
      { title: 'Verify with a known reference', detail: 'Cross-check: in the birth year, what age were they turning? 2025 − 1990 = 35, and if birthday is July 15, before that date in 2025 they are 34, after they are 35.' },
    ],
    examples: [
      { title: 'Simple age calculation', given: 'Born: January 15, 1985. Today: March 22, 2025', solution: 'Years: 2025−1985 = 40. Birthday Jan 15 has passed in 2025 (before March 22).', answer: 'Age = 40 years, 2 months, 7 days' },
      { title: 'Birthday not yet this year', given: 'Born: December 10, 1990. Today: March 22, 2025', solution: 'Years: 2025−1990 = 35. December 10 has NOT occurred yet in 2025.', answer: 'Age = 34 years (birthday still 8+ months away)' },
    ],
    table: {
      headers: ['Milestone Age', 'Born 1990', 'Born 2000', 'Born 2010'],
      rows: [
        ['18 (legal adult, US)', '2008', '2018', '2028'],
        ['21 (drinking age, US)', '2011', '2021', '2031'],
        ['25 (car rental)', '2015', '2025', '2035'],
        ['65 (retirement, US)', '2055', '2065', '2075'],
      ],
    },
    prose: [
      { heading: 'How Leap Years Affect Age Calculation', body: 'February 29 birthdays (leap day babies) celebrate every four years on their exact birth date. In non-leap years, they typically celebrate on February 28 or March 1. Legally, in most US states, they are considered to turn their age on February 28 in non-leap years. The age calculation subtracts birth year from current year and adjusts by 1 if the birthday hasn\'t yet occurred — which requires knowing whether Feb 28 or March 1 is treated as the "birthday" in non-leap years.' },
      { heading: 'Age Calculation for Legal Purposes', body: 'For most legal purposes (contracts, age verification, eligibility), age is calculated in complete years — the whole number of years since birth. Partial years do not count. Legal age thresholds (18, 21, etc.) are met on the exact birthday. For financial purposes like pension eligibility, often the age as of December 31 of the tax year is used.' },
    ],
    faqs: [
      { q: 'How do I calculate my exact age in days?', a: 'Subtract your birth date from today\'s date to get total days. This requires accounting for leap years (366 days) and regular years (365 days). Our age calculator does this automatically.' },
      { q: 'How do I calculate age in Excel?', a: '=DATEDIF(birth_date, TODAY(), "Y") gives complete years. For months: =DATEDIF(birth_date, TODAY(), "YM"). For days: =DATEDIF(birth_date, TODAY(), "MD"). DATEDIF is an undocumented but widely supported Excel function.' },
      { q: 'What is the cutoff date used in schools for age?', a: 'School cutoff dates vary by district, but September 1 is most common in the US. Children must turn 5 (for kindergarten) before September 1 to enroll that fall. Other states use December 1 or January 1.' },
      { q: 'How is age calculated in Korean age?', a: 'Korean age (one of two systems) counts age from 1 at birth and adds 1 year every January 1 regardless of birth date. A baby born in December is already 2 by January 1 of the next year in this system. South Korea officially switched to international age reckoning in 2023.' },
      { q: 'How old would someone born in 1900 be today?', a: 'If they survived to 2025: 2025 − 1900 = 125 years (if birthday passed). The oldest verified human ever was Jeanne Calment who died at 122 years, 164 days.' },
      { q: 'How many days old am I?', a: 'Use our age calculator above to get your exact age in days, months, and years. Alternatively: calculate years × 365 + number of leap years since birth + additional days in current partial year.' },
      { q: 'What is the formula for calculating someone\'s age?', a: 'Age = Current Year − Birth Year − 1 (if birthday hasn\'t occurred yet this year), or Age = Current Year − Birth Year (if birthday has occurred). For exact months and days, use date arithmetic or an age calculator.' },
      { q: 'How do different cultures count age differently?', a: 'Most of the world uses the international system (0 at birth, adding 1 on each birthday). Traditional Chinese and Korean systems start at 1 at birth and add 1 each Lunar New Year or calendar year. In Japan, the traditional system (kazoedoshi) has been replaced by the Western system for most purposes.' },
    ],
  },

  'how-to-calculate-days-between-dates': {
    title: 'How to Calculate Days Between Dates – Date Difference',
    description: 'Learn how to calculate the number of days between two dates. Covers calendar arithmetic, leap year handling, business days, and real-world applications.',
    toolSlug: 'date-difference',
    toolPath: '/calculators/date-time/date-difference',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Days Between Two Dates',
      subheading: 'Whether counting days until an event, calculating contract duration, or verifying a deadline, knowing how to find the difference between two dates is a practical skill. This guide explains the method clearly.',
    },
    steps: [
      { title: 'Convert both dates to a common format', detail: 'Use Year-Month-Day (ISO 8601) format to avoid confusion. Dates like "3/5/2024" are ambiguous (March 5 in the US; May 3 in Europe). Use 2024-03-05 for clarity.' },
      { title: 'Count the calendar days', detail: 'For manual calculation: count the number of days in each month between the two dates, accounting for leap years (February has 29 days in leap years). Or use the Julian Day Number method for accuracy.' },
      { title: 'Decide whether to include both endpoints', detail: 'Inclusive counting: both start and end dates count (e.g., a 3-day event from Monday to Wednesday = 3 days). Exclusive counting: only one endpoint (duration in transit: depart March 1, arrive March 5 = 4 days of travel).' },
      { title: 'Adjust for business days if needed', detail: 'Business day calculation excludes weekends (and optionally holidays). For "X business days," use a business day calculator or count Mon-Fri days manually, skipping weekends.' },
    ],
    examples: [
      { title: 'Days until an event', given: 'Today: March 22, 2025. Event: July 4, 2025', solution: 'Days remaining in March: 31−22=9. April: 30. May: 31. June: 30. July 1–4: 4. Total = 9+30+31+30+4', answer: '104 days until July 4, 2025' },
      { title: 'Contract duration', given: 'Contract starts June 1, 2024 and ends May 31, 2025', solution: '365 days (2024 is a leap year — but neither endpoint is in Feb, so check: June 1 2024 to June 1 2025 = 365 days, minus 1 day = 364)', answer: '364 days (about 12 months)' },
    ],
    table: {
      headers: ['Month', 'Days (Normal Year)', 'Days (Leap Year)'],
      rows: [
        ['January', '31', '31'],
        ['February', '28', '29'],
        ['March', '31', '31'],
        ['April', '30', '30'],
        ['May', '31', '31'],
        ['June', '30', '30'],
        ['July', '31', '31'],
        ['August', '31', '31'],
        ['September', '30', '30'],
        ['October', '31', '31'],
        ['November', '30', '30'],
        ['December', '31', '31'],
      ],
    },
    prose: [
      { heading: 'Leap Year Rules', body: 'A year is a leap year (366 days) if it is divisible by 4, EXCEPT century years (1700, 1800, 1900) which are NOT leap years, UNLESS they are divisible by 400 (2000, 2400 ARE leap years). So 2024 is a leap year (÷4, not a century year). 1900 was not a leap year. 2000 was. Next century-year leap year: 2400. This matters when counting across February in a leap year.' },
      { heading: 'Business Days vs Calendar Days', body: 'Legal contracts, shipping estimates, and financial settlements often specify "business days" (Monday–Friday, excluding public holidays). "5 business days" from a Friday does not end the following Friday — it ends the next Thursday (Sat and Sun are excluded). Always clarify whether days are calendar days or business days in contracts and deadlines.' },
    ],
    faqs: [
      { q: 'How do I calculate days between dates in Excel?', a: '=B1-A1 where A1 and B1 are dates formatted as dates in Excel. The result is in days. For NETWORKDAYS (business days): =NETWORKDAYS(A1, B1) excludes weekends automatically.' },
      { q: 'How many days are in each month?', a: 'January, March, May, July, August, October, December: 31 days. April, June, September, November: 30 days. February: 28 days (29 in leap years).' },
      { q: 'How do I count business days?', a: 'Count Monday through Friday only, skipping Saturday and Sunday (and any holidays if required). Most date calculators have a business days option.' },
      { q: 'What is a Julian Date?', a: 'Julian Day Number (JDN) is a continuous count of days since January 1, 4713 BC (proleptic Julian calendar). Converting both dates to JDN and subtracting gives exact day count, handling all calendar complexities automatically. Many programming languages use Unix timestamps (days/seconds since Jan 1, 1970) for similar purposes.' },
      { q: 'How do I find what date is 90 days from today?', a: 'Add 90 to today\'s day number, rolling forward through months. Example: March 22 + 90 days: remaining March days=9, April=30, May=31, June has 20 remaining needed (9+30+31=70, need 20 more in June) = June 20.' },
      { q: 'What is the difference between "in X days" and "X days from now"?', a: 'They are the same: both mean count forward X calendar days from today\'s date. "After X days" sometimes means the same, but legal language may differ — "the 3rd day after" a Wednesday event is Saturday.' },
      { q: 'How do I calculate the number of weekends between two dates?', a: 'Divide the total number of days by 7 to get complete weeks (each with 2 weekend days). Add partial weekends depending on the start and end days of week. Total weekend days ≈ (total days / 7) × 2.' },
      { q: 'What is the longest possible month to month span?', a: 'One calendar month spans 28 to 31 days. The largest single-month span is January (31 days). February is the shortest at 28–29 days.' },
    ],
  },

  'how-to-calculate-time-difference': {
    title: 'How to Calculate Time Difference – Hours, Minutes & Time Zones',
    description: 'Learn how to calculate the time difference between two times, including time zones and crossing midnight. Includes a time zone conversion guide and worked examples.',
    toolSlug: 'time',
    toolPath: '/calculators/date-time/time',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate Time Difference Between Two Times',
      subheading: 'Time difference calculations are needed for scheduling, payroll, travel planning, and international coordination. This guide covers calculating hours and minutes between times, crossing midnight, and handling time zones.',
    },
    steps: [
      { title: 'Convert times to 24-hour format', detail: 'Eliminate AM/PM confusion by using 24-hour clock. 1:30 PM = 13:30. 9:45 PM = 21:45. Midnight = 00:00. Noon = 12:00.' },
      { title: 'Subtract start time from end time (minutes and hours separately)', detail: 'Subtract minutes: if end minutes < start minutes, borrow 60 minutes from hours. Subtract hours. For 9:15 to 14:45: 45-15=30 min, 14-9=5 hrs → 5 hours 30 minutes.' },
      { title: 'Handle crossing midnight', detail: 'If end time is earlier than start time, the time difference crosses midnight. Add 24 hours to the end time. For 10:30 PM to 7:15 AM: convert to 22:30 to 31:15 (07:15 + 24:00) → 31:15 − 22:30 = 8:45.' },
      { title: 'Convert to decimal hours for payroll or rates', detail: 'Divide minutes by 60 to get decimal hours. 5 hours 30 min = 5 + (30/60) = 5.5 hours. Multiply by hourly rate: 5.5 × $18 = $99.' },
      { title: 'For time zones, find the offset difference', detail: 'Time zone offsets are hours +/- from UTC. UTC+8 (China) to UTC−5 (New York EST): difference = 13 hours. If it is 3 PM in China, it is 3 PM − 13 hours = 2 AM in New York.' },
    ],
    examples: [
      { title: 'Work shift duration', given: 'Shift starts 7:45 AM, ends 4:30 PM', solution: '16:30 − 07:45: Minutes: 30 − 45 → borrow: 90 − 45 = 45 min; Hours: 16 − 7 − 1 (borrowed) = 8 hrs', answer: '8 hours 45 minutes (8.75 hours)' },
      { title: 'Overnight shift', given: 'Shift starts 11:30 PM, ends 7:15 AM (next day)', solution: '23:30 to 07:15 (next day): Add 24 to end: 31:15 − 23:30 = 7:45', answer: '7 hours 45 minutes' },
      { title: 'International meeting time', given: 'Meeting at 2:00 PM New York (UTC−5). What time is it in London (UTC+0) and Tokyo (UTC+9)?', solution: 'London: 2 PM + 5 hrs = 7 PM. Tokyo: 2 PM + 14 hrs = 4 AM next day.', answer: 'London: 7:00 PM; Tokyo: 4:00 AM (next day)' },
    ],
    table: {
      headers: ['City', 'Time Zone', 'Offset from NYC (EST)'],
      rows: [
        ['New York (EST)', 'UTC−5', '0 hours'],
        ['London (GMT)', 'UTC+0', '+5 hours'],
        ['Paris (CET)', 'UTC+1', '+6 hours'],
        ['Dubai (GST)', 'UTC+4', '+9 hours'],
        ['Mumbai (IST)', 'UTC+5:30', '+10.5 hours'],
        ['Tokyo (JST)', 'UTC+9', '+14 hours'],
        ['Sydney (AEST)', 'UTC+10', '+15 hours'],
        ['Los Angeles (PST)', 'UTC−8', '−3 hours'],
      ],
    },
    prose: [
      { heading: 'Daylight Saving Time Complicates Calculations', body: 'Many countries observe daylight saving time (DST), shifting clocks forward 1 hour in spring and back in fall. The US "springs forward" on the second Sunday in March and "falls back" on the first Sunday in November. During DST, US time zones shift: EST becomes EDT (UTC−4), CST becomes CDT (UTC−5). This affects international scheduling: the offset between New York and London changes from 5 hours to 4 hours during US summer. When calculating time differences across DST boundaries, always check which side of the DST change each date falls on.' },
    ],
    faqs: [
      { q: 'How do I calculate hours between two times?', a: 'Convert to 24-hour format. Subtract: (End hours − Start hours) + (End minutes − Start minutes)/60. Handle borrowing if end minutes < start minutes. For overnight, add 24 hours to end time.' },
      { q: 'What is UTC?', a: 'Coordinated Universal Time (UTC) is the primary time standard by which the world regulates clocks. All time zones are expressed as UTC offsets (+/−). UTC does not observe daylight saving time. It replaced Greenwich Mean Time (GMT) as the standard, though both are often used interchangeably.' },
      { q: 'How do I convert time zones?', a: 'Know both time zones\' UTC offsets. Add the offset to UTC, or calculate the difference between offsets. If NYC is UTC−5 and London is UTC+0, the offset is 5 hours. When it is 10 AM in NYC, it is 3 PM in London.' },
      { q: 'What is a half-hour time zone?', a: 'Some regions use half-hour UTC offsets. India is UTC+5:30, Nepal is UTC+5:45, Iran is UTC+3:30. When scheduling with these zones, account for the 30-minute difference carefully.' },
      { q: 'How do I add hours to a time?', a: 'Add hours to the hour portion. If result ≥ 24, subtract 24 and note it is the next day. 11:30 PM + 3 hours = 23:30 + 3:00 = 26:30 → 2:30 AM (next day).' },
      { q: 'How do I calculate elapsed time in Excel?', a: '=B1−A1 gives the elapsed time when A1 and B1 are formatted as times. To display as "h:mm" use custom format. For hours: =HOUR(B1-A1)+MINUTE(B1-A1)/60.' },
      { q: 'What is the International Date Line?', a: 'The International Date Line (IDL) runs roughly along the 180° meridian in the Pacific Ocean. Crossing it westward advances the calendar date by 1 day; crossing eastward moves it back 1 day. This is why flights from LA to Tokyo cross tomorrow, and flights from Tokyo to LA "arrive before departure" in local time.' },
      { q: 'How do I schedule a meeting across multiple time zones?', a: 'Find a time that is business hours for all participants. Use a world clock or time zone converter. Avoid early morning or late evening for any participant. Specify the meeting time with the time zone explicitly (e.g., "3 PM New York EST / 8 PM London GMT") to prevent confusion.' },
    ],
  },

  // ── ADDITIONAL MATH ────────────────────────────────────────────────────────

  'quadratic-formula': {
    title: 'Quadratic Formula – x = (−b ± √(b²−4ac)) / 2a',
    description: 'Learn the quadratic formula with step-by-step examples. Solve any quadratic equation ax² + bx + c = 0, understand the discriminant, and identify real vs complex roots.',
    toolSlug: 'quadratic',
    toolPath: '/calculators/mathematics/quadratic',
    pageType: 'formula',
    mathSolverEduType: 'Algebra',
    hero: {
      heading: 'Quadratic Formula: x = (−b ± √(b² − 4ac)) / 2a',
      subheading: 'The quadratic formula solves any equation of the form ax² + bx + c = 0. Learn the formula, how to use the discriminant to predict the type of roots, and when to use each solving method.',
    },
    formula: {
      expression: 'x = [−b ± √(b² − 4ac)] / 2a  |  Discriminant: Δ = b² − 4ac  |  Vertex: x = −b/2a',
      explanation: 'The quadratic formula is derived by completing the square on ax² + bx + c = 0. The ± gives two solutions (x₁ and x₂). The discriminant (Δ = b²−4ac) determines the nature of roots: Δ > 0 → two distinct real roots; Δ = 0 → one repeated real root; Δ < 0 → two complex conjugate roots.',
      variables: [
        { symbol: 'a', meaning: 'Coefficient of x² (must not be zero)' },
        { symbol: 'b', meaning: 'Coefficient of x' },
        { symbol: 'c', meaning: 'Constant term' },
        { symbol: 'x₁, x₂', meaning: 'The two solutions to the quadratic equation' },
        { symbol: 'Δ', meaning: 'Discriminant = b² − 4ac' },
        { symbol: '±', meaning: 'Plus or minus — generates the two solutions' },
      ],
    },
    steps: [
      { title: 'Write the equation in standard form', detail: 'ax² + bx + c = 0. If not in this form, rearrange. Identify a, b, and c. Example: 2x² − 5x + 3 = 0 → a=2, b=−5, c=3.' },
      { title: 'Calculate the discriminant', detail: 'Δ = b² − 4ac. For a=2, b=−5, c=3: Δ = (−5)² − 4(2)(3) = 25 − 24 = 1. Since Δ > 0, expect two real roots.' },
      { title: 'Apply the quadratic formula', detail: 'x = (−b ± √Δ) / 2a = (5 ± √1) / 4 = (5 ± 1) / 4.' },
      { title: 'Calculate both solutions', detail: 'x₁ = (5 + 1)/4 = 6/4 = 3/2 = 1.5. x₂ = (5 − 1)/4 = 4/4 = 1.' },
      { title: 'Verify by substitution', detail: 'Check: 2(1.5)² − 5(1.5) + 3 = 4.5 − 7.5 + 3 = 0 ✓. 2(1)² − 5(1) + 3 = 2 − 5 + 3 = 0 ✓.' },
    ],
    examples: [
      { title: 'Two real roots', given: 'x² − 7x + 10 = 0 (a=1, b=−7, c=10)', solution: 'Δ = 49 − 40 = 9; x = (7 ± 3)/2', answer: 'x = 5 or x = 2' },
      { title: 'One repeated root', given: 'x² − 6x + 9 = 0 (a=1, b=−6, c=9)', solution: 'Δ = 36 − 36 = 0; x = 6/2', answer: 'x = 3 (repeated double root)' },
      { title: 'Complex roots', given: 'x² + 4 = 0 (a=1, b=0, c=4)', solution: 'Δ = 0 − 16 = −16; x = ±√(−16)/2 = ±4i/2', answer: 'x = 2i or x = −2i (complex roots)' },
    ],
    table: {
      headers: ['Discriminant (Δ)', 'Type of Roots', 'Number of Real Solutions'],
      rows: [
        ['Δ > 0 (positive)', 'Two distinct real roots', '2'],
        ['Δ = 0', 'One repeated real root', '1'],
        ['Δ < 0 (negative)', 'Two complex conjugate roots', '0 (real)'],
        ['Δ is a perfect square', 'Two rational roots', '2 (factorable)'],
      ],
    },
    prose: [
      { heading: 'When to Use the Quadratic Formula vs Factoring', body: 'Factoring is faster when the roots are integers or simple fractions. Try factoring first: find two numbers that multiply to ac and add to b. If no such integers exist, use the quadratic formula — it always works. The quadratic formula is guaranteed to give exact roots for any quadratic with real or complex solutions, even when factoring is impossible.' },
      { heading: 'Real-World Applications of Quadratic Equations', body: 'Quadratic equations appear in projectile motion (height = initial height + initial velocity × t − ½g × t²), revenue optimization (revenue = price × quantity, where quantity is a linear function of price), area calculations (given perimeter, find dimensions maximizing area), and construction (finding dimensions given area constraints). The quadratic formula is one of the most practically useful formulas in applied mathematics.' },
    ],
    faqs: [
      { q: 'What is the quadratic formula?', a: 'x = (−b ± √(b² − 4ac)) / 2a. It solves any equation in the form ax² + bx + c = 0 for all values of a, b, and c (where a ≠ 0).' },
      { q: 'What does the ± mean in the quadratic formula?', a: 'It means "plus or minus" — the formula produces two solutions: one using + (x₁) and one using − (x₂). This is because a parabola can intersect the x-axis at zero, one, or two points.' },
      { q: 'How do I know if a quadratic is factorable?', a: 'Calculate the discriminant Δ = b² − 4ac. If Δ is a perfect square (0, 1, 4, 9, 16...), the quadratic factors over the integers. If not, it doesn\'t factor neatly but can still be solved with the quadratic formula.' },
      { q: 'Can the quadratic formula give complex numbers?', a: 'Yes. When Δ < 0, the square root of a negative number gives imaginary numbers. The solutions are complex conjugates: x = (−b ± i√|Δ|) / 2a, where i = √(−1).' },
      { q: 'What is completing the square?', a: 'An alternative method to solve quadratics by adding and subtracting a constant to create a perfect square trinomial. The quadratic formula is derived from completing the square on the general form ax² + bx + c = 0.' },
      { q: 'What does the discriminant tell you?', a: 'The discriminant (b² − 4ac) tells you how many real solutions exist: positive → 2 real roots; zero → 1 repeated root; negative → no real roots (2 complex roots).' },
      { q: 'Are there quartic or cubic formulas?', a: 'Yes — cubic and quartic (3rd and 4th degree) equations have general formulas, but they are extremely complex (the cubic formula fills a page). For degree 5 and above, no general algebraic formula exists (Abel-Ruffini theorem); numerical methods are required.' },
      { q: 'What is the sum and product of the roots?', a: 'By Vieta\'s formulas: x₁ + x₂ = −b/a and x₁ × x₂ = c/a. These allow you to quickly check your solutions: the two roots should sum to −b/a and multiply to c/a.' },
    ],
  },

  'factorial-formula': {
    title: 'Factorial Formula – n! Explained with Examples',
    description: 'Learn the factorial formula n! = n × (n−1) × ... × 1. Understand factorials in permutations, combinations, and probability with worked examples.',
    toolSlug: 'factorial',
    toolPath: '/calculators/mathematics/factorial',
    pageType: 'formula',
    mathSolverEduType: 'Arithmetic',
    hero: {
      heading: 'Factorial Formula: n! = n × (n−1) × (n−2) × … × 2 × 1',
      subheading: 'Factorials are used in counting problems, probability, and calculus. Learn how n! is calculated, why 0! = 1, and how factorials appear in the permutation and combination formulas.',
    },
    formula: {
      expression: 'n! = n × (n−1)!  |  0! = 1  |  Permutations: P(n,r) = n!/(n−r)!  |  Combinations: C(n,r) = n!/[r!(n−r)!]',
      explanation: 'The factorial of a non-negative integer n is the product of all positive integers up to n. Factorials grow extremely rapidly (10! = 3,628,800; 20! ≈ 2.4 × 10¹⁸). By definition, 0! = 1 (the empty product). Factorials appear in permutations (ordered arrangements) and combinations (unordered selections).',
      variables: [
        { symbol: 'n!', meaning: 'Factorial of n — product of all integers from 1 to n' },
        { symbol: 'P(n,r)', meaning: 'Permutations — ordered arrangements of r items from n' },
        { symbol: 'C(n,r)', meaning: 'Combinations (n choose r) — unordered selections of r from n' },
        { symbol: 'r', meaning: 'Number of items selected or arranged' },
      ],
    },
    steps: [
      { title: 'Calculate factorial by repeated multiplication', detail: '5! = 5 × 4 × 3 × 2 × 1 = 120. Work from n down to 1. For large n, use a calculator — factorials grow astronomically fast.' },
      { title: 'Apply permutation formula for ordered arrangements', detail: 'P(n,r) = n!/(n−r)!. How many ways to arrange 3 people from a group of 10? P(10,3) = 10!/7! = 10 × 9 × 8 = 720.' },
      { title: 'Apply combination formula for unordered selections', detail: 'C(n,r) = n!/[r!(n−r)!]. How many ways to choose 3 from 10 (without order)? C(10,3) = 10!/(3! × 7!) = 120.' },
      { title: 'Use cancel-down shortcuts for large factorials', detail: 'P(10,3) = 10!/7! — write out 10×9×8×7!/7! and cancel the 7! top and bottom. Result: 10×9×8 = 720. This avoids computing huge numbers unnecessarily.' },
    ],
    examples: [
      { title: 'Arranging books', given: 'How many ways can 5 different books be arranged on a shelf?', solution: '5! = 5 × 4 × 3 × 2 × 1', answer: '120 different arrangements' },
      { title: 'Lottery combinations', given: 'Choose 6 numbers from 49 (lottery). How many combinations?', solution: 'C(49,6) = 49!/[6! × 43!] = (49×48×47×46×45×44)/(6×5×4×3×2×1)', answer: '13,983,816 combinations — 1 in ~14 million chance' },
      { title: 'Password arrangements', given: 'How many 4-letter passwords from 26 letters (no repeats, order matters)?', solution: 'P(26,4) = 26!/(26−4)! = 26 × 25 × 24 × 23', answer: '358,800 possible passwords' },
    ],
    table: {
      headers: ['n', 'n!', 'Approximate size'],
      rows: [
        ['0', '1', '—'],
        ['1', '1', '—'],
        ['5', '120', '—'],
        ['10', '3,628,800', '~3.6 million'],
        ['15', '1,307,674,368,000', '~1.3 trillion'],
        ['20', '2,432,902,008,176,640,000', '~2.4 quintillion'],
        ['100', '9.33 × 10¹⁵⁷', 'More than atoms in the universe'],
      ],
    },
    prose: [
      { heading: 'Why 0! = 1', body: 'By convention and mathematical necessity, 0! = 1. The most intuitive explanation: there is exactly one way to arrange zero objects (the empty arrangement). More formally: n! = n × (n−1)!, so 1! = 1 × 0!, meaning 0! must equal 1. Also, the combination formula C(n,0) should equal 1 (one way to choose nothing) — and C(n,0) = n!/(0! × n!) = 1 only if 0! = 1.' },
      { heading: 'The Gamma Function: Factorials for Non-Integers', body: 'The Gamma function extends factorials to real and complex numbers: Γ(n) = (n−1)! for positive integers. Interestingly, Γ(1/2) = √π. So in a sense, (−1/2)! = √π. The Gamma function appears throughout statistics (in chi-squared and gamma distributions) and physics.' },
    ],
    faqs: [
      { q: 'What is a factorial?', a: 'The factorial of n (written n!) is the product of all positive integers from 1 to n. 5! = 5×4×3×2×1 = 120. Factorials count the number of ways to arrange n distinct objects.' },
      { q: 'Why do factorials grow so fast?', a: 'Each step multiplies by an increasingly large number. 10! is already 3.6 million; 20! is 2.4 × 10¹⁸. This is why the number of possible card arrangements in a shuffled 52-card deck (52!) is larger than the number of atoms in the observable universe.' },
      { q: 'What is the difference between permutations and combinations?', a: 'Permutations count ordered arrangements (order matters: ABC ≠ BAC). Combinations count unordered selections (order doesn\'t matter: ABC = BAC = CAB). Combinations = Permutations / r!.' },
      { q: 'How many ways can you arrange 52 playing cards?', a: '52! ≈ 8.07 × 10⁶⁷. This is an incomprehensibly large number — more than the number of atoms in the observable universe. Every properly shuffled deck is almost certainly in an arrangement never seen before in human history.' },
      { q: 'Can calculators compute large factorials?', a: 'Standard calculators overflow around 70! (the result exceeds 10¹⁰⁰, the maximum for many calculators). Scientific software and our factorial calculator handle arbitrarily large values using arbitrary-precision arithmetic.' },
      { q: 'What is the Stirling approximation?', a: 'Stirling\'s approximation: n! ≈ √(2πn) × (n/e)ⁿ. It is extremely accurate for large n and is used in statistics, thermodynamics, and information theory to approximate factorials without computing all n multiplications.' },
      { q: 'Where are factorials used in probability?', a: 'Factorials appear in the binomial distribution: P(X=k) = C(n,k) × pᵏ × (1−p)^(n−k). They appear in Poisson distribution, normal distribution approximations, and permutation-based counting problems in probability.' },
      { q: 'What does C(n,r) = C(n, n−r) mean?', a: 'Choosing 3 items from 10 is the same as choosing which 7 items to leave out: C(10,3) = C(10,7) = 120. This symmetry is reflected in Pascal\'s Triangle and simplifies many calculations.' },
    ],
  },

  // ── ADDITIONAL FINANCE ─────────────────────────────────────────────────────

  'inflation-formula': {
    title: 'Inflation Formula – How to Calculate Inflation Rate',
    description: 'Learn the inflation formula: Inflation Rate = (CPI_new − CPI_old) / CPI_old × 100. Calculate purchasing power loss, real vs nominal values, and how inflation affects savings.',
    toolSlug: 'inflation',
    toolPath: '/calculators/finance/inflation',
    pageType: 'formula',
    hero: {
      heading: 'Inflation Formula: (CPI₂ − CPI₁) / CPI₁ × 100',
      subheading: 'Inflation erodes purchasing power over time. Learn how inflation is calculated using the CPI, how to find the real value of money, and how inflation affects investments, salaries, and long-term savings.',
    },
    formula: {
      expression: 'Inflation Rate = (CPI_new − CPI_old) / CPI_old × 100  |  Future Value = Present Value × (CPI_future / CPI_past)  |  Real Rate = ((1 + Nominal) / (1 + Inflation)) − 1',
      explanation: 'The inflation rate measures the percentage increase in the general price level between two periods, using the Consumer Price Index (CPI) as the benchmark. CPI measures the average price of a basket of consumer goods and services. The real interest rate (Fisher equation) adjusts the nominal rate for inflation to show actual purchasing power growth.',
      variables: [
        { symbol: 'CPI', meaning: 'Consumer Price Index — average price level of a basket of goods' },
        { symbol: 'Inflation Rate', meaning: 'Percentage change in CPI between two periods' },
        { symbol: 'Real Rate', meaning: 'Nominal interest rate adjusted for inflation' },
        { symbol: 'Nominal Rate', meaning: 'Interest rate as stated before inflation adjustment' },
      ],
    },
    steps: [
      { title: 'Find the CPI for both periods', detail: 'CPI data is published monthly by the Bureau of Labor Statistics (US), Eurostat (EU), and similar agencies worldwide. Look up CPI for your start and end periods.' },
      { title: 'Apply the inflation rate formula', detail: 'Inflation Rate = (CPI_new − CPI_old) / CPI_old × 100. For CPI rising from 260 to 270: (270−260)/260 × 100 = 3.85%.' },
      { title: 'Calculate the inflation-adjusted value of money', detail: 'How much is $100 from 1990 worth today? Inflation-adjusted = $100 × (Current CPI / 1990 CPI). If CPI rose from 130 to 310: $100 × (310/130) = $238.46.' },
      { title: 'Calculate real interest rate', detail: 'Real Rate ≈ Nominal Rate − Inflation Rate (approximation). Exact: Real Rate = (1 + Nominal)/(1 + Inflation) − 1. If savings rate = 4% and inflation = 3%: Real rate = (1.04/1.03) − 1 = 0.97%.' },
    ],
    examples: [
      { title: 'Annual inflation rate', given: 'CPI January 2023: 299.2; CPI January 2024: 308.4', solution: 'Inflation = (308.4 − 299.2)/299.2 × 100 = 9.2/299.2 × 100', answer: 'Inflation rate = 3.07% over the 12-month period' },
      { title: 'Purchasing power erosion', given: '$50,000 salary in 2014. What equivalent salary is needed in 2024 (assume 3% annual inflation)?', solution: 'Equivalent = $50,000 × (1.03)^10 = $50,000 × 1.3439', answer: '$67,196 needed in 2024 to maintain the same purchasing power' },
      { title: 'Real return on savings', given: 'Savings account: 5% nominal rate, inflation: 4%', solution: 'Real Rate = (1.05/1.04) − 1 = 0.00962', answer: 'Real return = 0.96% — the actual purchasing power gain is only about 1%' },
    ],
    table: {
      headers: ['Annual Inflation', 'Purchasing Power After 10 years', 'After 20 years', 'After 30 years'],
      rows: [
        ['1%', '90.4 cents', '81.9 cents', '74.1 cents'],
        ['2%', '82.0 cents', '67.3 cents', '55.2 cents'],
        ['3%', '74.4 cents', '55.4 cents', '41.2 cents'],
        ['5%', '61.4 cents', '37.7 cents', '23.1 cents'],
        ['10%', '38.6 cents', '14.9 cents', '5.7 cents'],
      ],
    },
    prose: [
      { heading: 'Types of Inflation Measures', body: 'CPI (Consumer Price Index) measures prices for a fixed basket of goods and services purchased by typical households — the most common inflation measure. PPI (Producer Price Index) measures prices at the wholesale/production level — a leading indicator of future CPI changes. PCE (Personal Consumption Expenditures) is the Federal Reserve\'s preferred inflation measure as it better captures substitution between goods. Core inflation excludes volatile food and energy prices to show underlying inflation trends.' },
      { heading: 'Hyperinflation and Deflation', body: 'Hyperinflation (Weimar Germany 1923: 29,500% per month; Zimbabwe 2008: 89.7 sextillion % per month) destroys savings and economic stability. Deflation (falling prices) sounds good but can cause economic depression — consumers delay purchases expecting lower prices, causing reduced demand, layoffs, and further price drops (the deflationary spiral). Central banks target around 2% annual inflation as optimal — enough to discourage hoarding cash but not so much as to erode savings significantly.' },
    ],
    faqs: [
      { q: 'What is inflation?', a: 'Inflation is the rate at which the general price level of goods and services rises, reducing purchasing power. A 5% inflation rate means something that cost $100 last year costs $105 today.' },
      { q: 'How does inflation affect savings?', a: 'If your savings earn less than the inflation rate, your money\'s purchasing power decreases even as the dollar amount grows. A 1% savings account with 3% inflation means real purchasing power falls by about 2% per year.' },
      { q: 'What is the real interest rate?', a: 'The real interest rate adjusts nominal (stated) interest for inflation. Approximately: Real Rate ≈ Nominal Rate − Inflation Rate. More precisely: (1+Nominal)/(1+Inflation) − 1. A 4% nominal rate with 3% inflation gives about 1% real return.' },
      { q: 'How does the Fed control inflation?', a: 'The Federal Reserve primarily controls inflation by adjusting the federal funds rate. Raising rates makes borrowing more expensive, reduces spending and investment, and slows price increases. Quantitative easing (asset purchases) increases money supply and can raise inflation; tightening reduces it.' },
      { q: 'What causes inflation?', a: 'Demand-pull inflation: too much money chasing too few goods. Cost-push inflation: rising production costs (oil prices, wages) push prices higher. Built-in inflation: wage-price spiral where workers demand higher wages due to past inflation, which raises costs and causes more inflation.' },
      { q: 'How do I protect savings from inflation?', a: 'Options: TIPS (Treasury Inflation-Protected Securities) — principal adjusts with CPI. I-bonds — government savings bonds with inflation-linked interest. Equities — historically outpace inflation long-term. Real estate — often keeps pace with inflation. Avoid holding large amounts in low-interest cash during high inflation periods.' },
      { q: 'What is the rule of 70 for inflation?', a: 'Divide 70 by the inflation rate to estimate how many years it takes for prices to double. At 3.5% inflation: 70/3.5 = 20 years for prices to double. At 7% inflation: 70/7 = 10 years.' },
      { q: 'Is deflation better than inflation?', a: 'Mild deflation might seem good (prices fall), but persistent deflation is economically damaging — it triggers reduced spending (why buy today if it\'s cheaper tomorrow?), business failures, and unemployment. Most central banks target low positive inflation (2%) as the ideal zone.' },
    ],
  },

  'savings-formula': {
    title: 'Savings Formula – How to Calculate Future Savings Value',
    description: 'Learn the savings formula with regular contributions. Calculate future savings value using compound interest and monthly deposits with step-by-step examples.',
    toolSlug: 'savings',
    toolPath: '/calculators/finance/savings',
    pageType: 'formula',
    hero: {
      heading: 'Savings Formula: Lump Sum + Regular Contributions',
      subheading: 'How much will your savings be worth in the future? This guide covers the complete savings formula combining compound interest on an initial deposit with the future value of regular monthly or annual contributions.',
    },
    formula: {
      expression: 'FV (lump sum) = PV × (1 + r)^n  |  FV (contributions) = PMT × ((1+r)^n − 1) / r  |  Total FV = FV_lump + FV_contributions',
      explanation: 'The total future value of savings combines two components: (1) the future value of the initial deposit growing with compound interest, and (2) the future value of regular periodic contributions (an annuity). Both components use the periodic interest rate r (annual rate / periods per year) and n (total periods = years × periods per year).',
      variables: [
        { symbol: 'FV', meaning: 'Future Value — total savings at end of period' },
        { symbol: 'PV', meaning: 'Present Value — initial lump sum deposit' },
        { symbol: 'PMT', meaning: 'Regular payment/contribution per period' },
        { symbol: 'r', meaning: 'Periodic interest rate = Annual rate / periods per year' },
        { symbol: 'n', meaning: 'Total number of compounding periods = Years × periods per year' },
      ],
    },
    steps: [
      { title: 'Identify your initial deposit and contributions', detail: 'PV = one-time starting deposit. PMT = regular monthly or annual contribution. Separate these for the formula.' },
      { title: 'Convert annual rate to periodic rate', detail: 'For monthly contributions: r = Annual Rate / 12 / 100. For 5% annual with monthly contributions: r = 0.05/12 = 0.004167.' },
      { title: 'Calculate FV of initial deposit', detail: 'FV_lump = PV × (1 + r)^n. For $5,000 initial, 5% annual (monthly), 10 years: FV_lump = 5000 × (1.004167)^120.' },
      { title: 'Calculate FV of regular contributions', detail: 'FV_contrib = PMT × ((1+r)^n − 1) / r. For $200/month: FV_contrib = 200 × ((1.004167)^120 − 1) / 0.004167.' },
      { title: 'Add both components', detail: 'Total FV = FV_lump + FV_contrib. This is your projected savings balance.' },
    ],
    examples: [
      { title: '10-year savings plan', given: 'Initial deposit: $5,000. Monthly contribution: $300. Annual rate: 6%. Term: 10 years.', solution: 'r = 0.005; n = 120; FV_lump = 5000 × (1.005)^120 = 5000 × 1.8194 = $9,097; FV_contrib = 300 × ((1.005)^120 − 1)/0.005 = 300 × 163.88 = $49,163', answer: 'Total savings = $58,260 (contributed $36,000 + $5,000 initial = $41,000; earned $17,260 in interest)' },
      { title: 'Retirement fund projection', given: '$10,000 initial + $500/month at 7% for 30 years', solution: 'r = 0.005833; n = 360; FV_lump = 10000 × (1.005833)^360 ≈ $80,627; FV_contrib = 500 × 1,219.97 ≈ $609,985', answer: 'Projected retirement savings: ~$690,612' },
    ],
    table: {
      headers: ['Monthly Contribution', 'Years', 'Rate', 'Future Value'],
      rows: [
        ['$200', '20', '5%', '~$81,900'],
        ['$200', '30', '5%', '~$166,450'],
        ['$500', '20', '7%', '~$252,480'],
        ['$500', '30', '7%', '~$609,985'],
        ['$1,000', '25', '8%', '~$949,000'],
      ],
    },
    prose: [
      { heading: 'The Power of Starting Early', body: 'Time is the most powerful variable in savings. $200/month from age 25 at 7% returns about $525,000 at 65. Starting the same plan at 35 yields only about $243,000 — less than half, despite only 10 fewer years of contributions. The extra decade of compounding makes a far greater difference than the actual extra contributions. Each year you delay savings costs far more than the contributions themselves.' },
      { heading: 'Automating Contributions for Success', body: 'The most effective way to save is to automate transfers on payday before you can spend the money. Pay yourself first — transfer to savings immediately, then live on the rest. Even modest automated contributions ($50–$200/month) compound significantly over decades. Most retirement accounts (401k, IRA) allow automatic contributions. Employer matching multiplies the effective contribution rate — always contribute enough to get the full employer match.' },
    ],
    faqs: [
      { q: 'How do I calculate future savings value?', a: 'FV = PV × (1+r)^n for a lump sum. For regular contributions: FV = PMT × ((1+r)^n − 1)/r. Add both if you have an initial deposit plus regular contributions.' },
      { q: 'How much do I need to save for retirement?', a: 'The "25x rule": save 25 times your expected annual retirement spending. If you plan to spend $60,000/year, target $1.5 million. This assumes a 4% safe withdrawal rate, which historical data suggests can sustain 30+ years of retirement withdrawals.' },
      { q: 'What is the best interest rate for savings?', a: 'High-yield savings accounts typically offer 4–5% APY (as of 2024). Money market accounts are similar. CDs (certificates of deposit) may offer higher rates for locking in funds. Long-term investors can historically expect 7–10% in diversified equity index funds.' },
      { q: 'How does compounding frequency affect savings?', a: 'Daily compounding gives slightly more than monthly or annual. On $10,000 at 5% for 10 years: annual compounding = $16,289; monthly = $16,470; daily = $16,487. The difference is small but adds up over longer periods.' },
      { q: 'What is the Rule of 72 for savings?', a: 'Divide 72 by the interest rate to estimate years to double savings. At 6%: 72/6 = 12 years. At 9%: 72/9 = 8 years. This helps quickly estimate the long-term growth of savings.' },
      { q: 'Should I save an emergency fund before investing?', a: 'Yes — financial advisors generally recommend 3–6 months of expenses in a liquid, accessible account before investing. Emergency funds prevent you from withdrawing investments at a loss during unexpected expenses.' },
      { q: 'How do taxes affect savings calculations?', a: 'In taxable accounts, interest income may be taxed annually, reducing the compounding benefit. Tax-advantaged accounts (Roth IRA, Traditional IRA, 401k) shelter growth from taxes, significantly improving outcomes. Always maximize tax-advantaged accounts before taxable investing.' },
      { q: 'What is the 50/30/20 savings rule?', a: 'A budgeting guideline: 50% of take-home pay for needs (housing, food, utilities), 30% for wants (dining, entertainment), 20% for savings and debt repayment. The 20% savings category should include emergency fund, retirement, and other financial goals.' },
    ],
  },

  // ── ADDITIONAL PHYSICS ─────────────────────────────────────────────────────

  'speed-formula': {
    title: 'Speed Formula – Speed = Distance / Time Explained',
    description: 'Learn the speed formula Speed = Distance / Time with worked examples. Understand the difference between speed, velocity, and acceleration with practical applications.',
    toolSlug: 'speed',
    toolPath: '/calculators/physics/speed',
    pageType: 'formula',
    mathSolverEduType: 'Physics',
    hero: {
      heading: 'Speed Formula: Speed = Distance / Time',
      subheading: 'Speed is the most fundamental concept in kinematics. Learn the formula, the difference between speed and velocity, how to calculate average speed, and how speed appears in everyday scenarios from driving to physics problems.',
    },
    formula: {
      expression: 'Speed = Distance / Time  |  Distance = Speed × Time  |  Time = Distance / Speed  |  Velocity = Δx / Δt (includes direction)',
      explanation: 'Speed is the rate at which an object covers distance. The formula relates three quantities: speed (s), distance (d), and time (t). Rearranging gives any variable when two are known. Speed is a scalar (magnitude only); velocity is a vector (magnitude + direction). Average speed uses total distance over total time.',
      variables: [
        { symbol: 'Speed (s)', meaning: 'Rate of motion — distance per unit time (m/s, km/h, mph)' },
        { symbol: 'Distance (d)', meaning: 'Total path length traveled' },
        { symbol: 'Time (t)', meaning: 'Duration of the journey' },
        { symbol: 'Velocity (v)', meaning: 'Speed with direction — a vector quantity' },
      ],
    },
    steps: [
      { title: 'Identify what you need to find', detail: 'Speed: s = d/t. Distance: d = s × t. Time: t = d/s. Ensure consistent units before calculating.' },
      { title: 'Ensure consistent units', detail: 'If distance is in km and time in hours, speed is in km/h. If distance is in meters and time in seconds, speed is in m/s. Convert as needed: 1 m/s = 3.6 km/h = 2.237 mph.' },
      { title: 'Calculate and interpret', detail: 'Plug in known values and solve. For average speed over a trip with varying speeds, sum all distances and sum all times, then divide total distance by total time.' },
      { title: 'Convert speed units as needed', detail: 'km/h → m/s: divide by 3.6. m/s → km/h: multiply by 3.6. mph → km/h: multiply by 1.60934. km/h → mph: multiply by 0.62137. Example: 90 km/h = 90/3.6 = 25 m/s.' },
    ],
    examples: [
      { title: 'Car journey', given: 'Drove 240 km in 3 hours', solution: 'Speed = 240 / 3', answer: '80 km/h average speed' },
      { title: 'Time to destination', given: 'Distance = 500 miles, average speed = 65 mph', solution: 'Time = 500 / 65', answer: '7.69 hours = 7 hours 41 minutes' },
      { title: 'Average speed with stops', given: 'Leg 1: 100 km in 1 hr. Leg 2: 60 km in 1.5 hr (slower road)', solution: 'Total distance = 160 km; Total time = 2.5 hr; Avg speed = 160/2.5', answer: 'Average speed = 64 km/h (not the average of 100 and 40)' },
    ],
    table: {
      headers: ['Speed', 'm/s', 'km/h', 'mph'],
      rows: [
        ['Walking', '1.4', '5', '3.1'],
        ['Running', '4', '14.4', '8.9'],
        ['Cycling', '6.7', '24', '14.9'],
        ['City driving', '13.9', '50', '31.1'],
        ['Highway driving', '27.8', '100', '62.1'],
        ['Commercial jet', '250', '900', '559'],
        ['Speed of sound (air)', '343', '1,235', '767'],
        ['Speed of light', '3×10⁸', '1.08×10⁹', '6.7×10⁸'],
      ],
    },
    prose: [
      { heading: 'Speed vs. Velocity: A Critical Distinction', body: 'Speed is scalar — it has magnitude only (50 mph). Velocity is vector — it has both magnitude and direction (50 mph due north). A car driving around a circular track at constant 60 mph has constant speed but changing velocity (direction changes continuously). This distinction matters in physics: acceleration = change in velocity / time, so a constant-speed circular orbit still involves acceleration (centripetal acceleration) because direction is changing.' },
      { heading: 'Average Speed vs. Instantaneous Speed', body: 'Average speed = total distance / total time. Instantaneous speed is the speed at a specific moment — what your speedometer reads. These differ whenever speed changes. A car that stops for lunch has average speed significantly lower than driving speed. In physics, instantaneous speed is the limit of average speed as the time interval approaches zero — this is the basis of derivatives in calculus.' },
    ],
    faqs: [
      { q: 'What is the formula for speed?', a: 'Speed = Distance / Time. To find distance: Distance = Speed × Time. To find time: Time = Distance / Speed. All three forms solve the same relationship.' },
      { q: 'What is the difference between speed and velocity?', a: 'Speed is a scalar (just magnitude): 60 mph. Velocity is a vector (magnitude + direction): 60 mph due north. Speed is the magnitude of velocity. They are numerically equal when direction is constant.' },
      { q: 'How do I convert km/h to m/s?', a: 'Divide by 3.6 (or multiply by 1/3.6 = 0.2778). So 100 km/h = 100/3.6 = 27.78 m/s. To convert m/s to km/h: multiply by 3.6.' },
      { q: 'What is the speed of sound?', a: 'At sea level in air at 20°C: approximately 343 m/s (1,235 km/h, 767 mph). Speed of sound varies with air temperature, density, and medium. Sound travels faster in water (~1,480 m/s) and steel (~5,100 m/s).' },
      { q: 'What is average speed?', a: 'Average speed = Total Distance / Total Time. Important: do NOT average individual speeds — this gives the wrong answer when time or distance differs for each segment. Always divide total path length by total elapsed time.' },
      { q: 'What is terminal velocity?', a: 'Terminal velocity is the maximum speed a falling object reaches when gravitational force equals air resistance force. For a skydiver: approximately 55 m/s (120 mph) in a spread-eagle position; up to 90 m/s (200 mph) in a dive.' },
      { q: 'What is Mach number?', a: 'Mach number = Object Speed / Speed of Sound. Mach 1 = speed of sound. Mach 2 = twice the speed of sound. Commercial jets cruise around Mach 0.85. The Concorde cruised at Mach 2.04. Spacecraft reenter at Mach 25+.' },
      { q: 'What units is speed measured in?', a: 'Common units: m/s (physics), km/h (road speed in metric countries), mph (road speed in US/UK), knots (maritime/aviation, 1 knot = 1.852 km/h). Convert as needed for calculations.' },
    ],
  },

  'acceleration-formula': {
    title: 'Acceleration Formula – a = Δv / t Explained',
    description: 'Learn the acceleration formula a = (v_final − v_initial) / t with worked examples. Understand gravitational acceleration, Newton\'s second law F=ma, and kinematic equations.',
    toolSlug: 'acceleration',
    toolPath: '/calculators/physics/acceleration',
    pageType: 'formula',
    mathSolverEduType: 'Physics',
    hero: {
      heading: 'Acceleration Formula: a = (v_f − v_i) / t',
      subheading: 'Acceleration measures how quickly velocity changes. Learn the formula, the role of acceleration in Newton\'s second law, gravitational acceleration (g = 9.81 m/s²), and how to solve kinematic motion problems.',
    },
    formula: {
      expression: 'a = (v_f − v_i) / t  |  F = m × a  |  v_f² = v_i² + 2as  |  s = v_i × t + ½at²',
      explanation: 'Acceleration (a) is the rate of change of velocity. The basic formula uses change in velocity (Δv = final minus initial) divided by time. Newton\'s second law (F=ma) connects force, mass, and acceleration. The kinematic equations allow solving for distance, time, initial or final velocity given any three of the five variables: a, v_i, v_f, t, and s.',
      variables: [
        { symbol: 'a', meaning: 'Acceleration in m/s² (meters per second squared)' },
        { symbol: 'v_f', meaning: 'Final velocity in m/s' },
        { symbol: 'v_i', meaning: 'Initial velocity in m/s' },
        { symbol: 't', meaning: 'Time in seconds' },
        { symbol: 's', meaning: 'Displacement (distance) in meters' },
        { symbol: 'g', meaning: 'Gravitational acceleration ≈ 9.81 m/s² (varies slightly with location)' },
      ],
    },
    steps: [
      { title: 'Identify initial and final velocities and time', detail: 'v_i = velocity at start; v_f = velocity at end; t = time duration. Ensure all in SI units (m/s and seconds).' },
      { title: 'Apply a = (v_f − v_i) / t', detail: 'A car accelerates from 0 to 60 mph (26.8 m/s) in 5 seconds: a = (26.8 − 0) / 5 = 5.36 m/s².' },
      { title: 'Use kinematic equations for position and velocity', detail: 'If acceleration and time are known but final velocity isn\'t: v_f = v_i + at. For distance: s = v_i × t + ½at². For v_f from distance: v_f² = v_i² + 2as.' },
      { title: 'Apply F = ma for force problems', detail: 'If you know mass and acceleration, find force: F = ma. If you know force and mass, find acceleration: a = F/m.' },
    ],
    examples: [
      { title: 'Car acceleration', given: 'Car goes from 0 to 100 km/h (27.78 m/s) in 8 seconds', solution: 'a = (27.78 − 0) / 8', answer: 'a = 3.47 m/s² (about 0.35g)' },
      { title: 'Braking distance', given: 'Car at 30 m/s brakes to a stop in 60 m. What is the deceleration?', solution: 'v_f² = v_i² + 2as → 0 = 900 + 2a(60) → a = −900/120', answer: 'a = −7.5 m/s² (deceleration); braking force = m × 7.5 N' },
      { title: 'Falling object', given: 'Object dropped from rest. How fast after 3 seconds?', solution: 'v_f = v_i + gt = 0 + 9.81 × 3', answer: 'v_f = 29.43 m/s (about 66 mph after 3 seconds of free fall)' },
    ],
    table: {
      headers: ['Scenario', 'Acceleration', 'Notes'],
      rows: [
        ['Free fall (Earth)', '9.81 m/s²', 'Gravitational acceleration (g)'],
        ['Sports car 0-60mph', '5–8 m/s²', '0.5–0.8g'],
        ['Formula 1 car', '15–20 m/s²', '~1.5–2g under braking'],
        ['Space Shuttle launch', '29 m/s²', '~3g at maximum'],
        ['Elevator acceleration', '1–2 m/s²', '0.1–0.2g'],
        ['Emergency aircraft stop', '3–5 m/s²', '0.3–0.5g'],
        ['Moon gravity', '1.62 m/s²', '1/6 of Earth\'s gravity'],
      ],
    },
    prose: [
      { heading: 'Gravitational Acceleration and Free Fall', body: 'All objects fall at the same acceleration (g ≈ 9.81 m/s²) in a vacuum, regardless of mass — Galileo proved this by dropping different masses from the Leaning Tower of Pisa. Air resistance causes lighter objects to fall slower in air (a feather vs a hammer). On the Moon (g = 1.62 m/s²), everything falls more slowly. Astronauts experience weightlessness in orbit not because there is no gravity, but because they are in continuous free fall around Earth.' },
      { heading: 'Acceleration and Vehicle Safety', body: 'Human tolerance to acceleration is measured in g-forces. 1g = 9.81 m/s². Fighter pilots can withstand 9g with special suits. Comfortable civilian levels: 0.3g for a car braking emergency. 0.1g for elevator starts. Roller coasters reach 3–5g. High acceleration causes blood to pool in extremities (G-LOC, gravity-induced loss of consciousness) above about 5g sustained. Crash test standards specify maximum acceleration levels for occupant safety in collisions.' },
    ],
    faqs: [
      { q: 'What is acceleration?', a: 'Acceleration is the rate at which velocity changes. a = (v_final − v_initial) / t. It is measured in m/s² (meters per second squared). Positive acceleration means speeding up; negative acceleration (deceleration) means slowing down.' },
      { q: 'What is the formula for acceleration?', a: 'a = (v_f − v_i) / t, where v_f is final velocity, v_i is initial velocity, and t is time. This gives average acceleration over the time period.' },
      { q: 'What is g (gravitational acceleration)?', a: 'g ≈ 9.81 m/s² is the acceleration due to gravity near Earth\'s surface. It varies slightly by location (9.78 m/s² at equator, 9.83 m/s² at poles). Used as a benchmark: a force of 1g feels like normal gravity.' },
      { q: 'What is deceleration?', a: 'Deceleration is negative acceleration — slowing down. In physics, it is simply acceleration with a negative value when taking the direction of motion as positive. Braking in a car produces deceleration: a = (0 − v_initial) / t.' },
      { q: 'What are the kinematic equations?', a: 'The four kinematic equations relate v_i, v_f, a, t, and s: (1) v_f = v_i + at, (2) s = v_i×t + ½at², (3) v_f² = v_i² + 2as, (4) s = ½(v_i + v_f)×t. Use the equation containing your unknowns and three known values.' },
      { q: 'How is acceleration related to force?', a: 'Newton\'s Second Law: F = ma. Force (Newtons) = Mass (kg) × Acceleration (m/s²). To accelerate a 1,500 kg car at 3 m/s²: F = 1500 × 3 = 4,500 N of thrust force needed.' },
      { q: 'What is centripetal acceleration?', a: 'An object moving in a circle experiences centripetal acceleration directed toward the center: a_c = v²/r, where v is speed and r is radius. A car rounding a curve accelerates toward the inside of the curve even at constant speed.' },
      { q: 'Can acceleration be zero while velocity is non-zero?', a: 'Yes. Constant-velocity motion has zero acceleration. A car cruise-controlling at 100 km/h has non-zero velocity but zero acceleration (net forces balance). Only when velocity changes does acceleration occur.' },
    ],
  },

  'newtons-second-law-formula': {
    title: 'Newton\'s Second Law Formula – F = ma Explained',
    description: 'Learn Newton\'s Second Law F = ma with worked examples. Understand force, mass, and acceleration, and apply the formula to mechanics, engineering, and everyday situations.',
    toolSlug: 'force',
    toolPath: '/calculators/physics/force',
    pageType: 'formula',
    mathSolverEduType: 'Physics',
    hero: {
      heading: 'Newton\'s Second Law: F = m × a',
      subheading: 'F = ma is the most fundamental equation in classical mechanics. Learn how force, mass, and acceleration interrelate, apply the formula to everyday problems, and see how it connects to weight, friction, and free-body diagrams.',
    },
    formula: {
      expression: 'F = m × a  |  a = F / m  |  m = F / a  |  Weight: W = m × g (where g = 9.81 m/s²)',
      explanation: 'Newton\'s Second Law states that the net force on an object equals its mass multiplied by its acceleration. Force is measured in Newtons (N = kg·m/s²). Weight is a specific application: gravitational force = mass × gravitational acceleration. The law applies to any direction — always analyze forces along each axis separately.',
      variables: [
        { symbol: 'F', meaning: 'Net force in Newtons (N = kg·m/s²)' },
        { symbol: 'm', meaning: 'Mass in kilograms (kg)' },
        { symbol: 'a', meaning: 'Acceleration in m/s²' },
        { symbol: 'W', meaning: 'Weight — gravitational force = m × g' },
        { symbol: 'g', meaning: 'Gravitational acceleration = 9.81 m/s² on Earth\'s surface' },
      ],
    },
    steps: [
      { title: 'Identify all forces acting on the object', detail: 'Draw a free-body diagram. Label all forces: gravity (down), normal force (up from surface), friction (opposing motion), applied force, tension, drag, etc.' },
      { title: 'Find the net force', detail: 'Vector sum of all forces. Forces in the same direction add; opposing forces subtract. Net Force = Sum of all forces (positive for chosen positive direction).' },
      { title: 'Apply F_net = ma', detail: 'If mass and acceleration are known: F = m × a. If force and mass are known: a = F/m. If force and acceleration are known: m = F/a.' },
      { title: 'Analyze each axis separately', detail: 'For 2D problems, apply F = ma independently in the x and y directions. The net force in x causes x-acceleration; net y-force causes y-acceleration.' },
    ],
    examples: [
      { title: 'Pushing a box', given: 'Applied force: 50 N, friction: 20 N, box mass: 10 kg', solution: 'Net force = 50 − 20 = 30 N; a = F/m = 30/10', answer: 'Acceleration = 3 m/s²' },
      { title: 'Weight calculation', given: 'Object mass = 75 kg on Earth', solution: 'W = m × g = 75 × 9.81', answer: 'Weight = 735.75 N (about 165 lbs force)' },
      { title: 'Rocket thrust', given: 'Rocket mass = 5,000 kg, engine thrust = 100,000 N, gravity (weight) = 49,050 N', solution: 'Net force = 100,000 − 49,050 = 50,950 N upward; a = 50,950/5,000', answer: 'a = 10.19 m/s² upward (about 1.04g net upward acceleration)' },
    ],
    table: {
      headers: ['Situation', 'Force', 'Mass', 'Acceleration'],
      rows: [
        ['Falling feather (vacuum)', '0.01 N (gravity)', '0.001 kg', '9.81 m/s²'],
        ['Person standing', '735 N (gravity)', '75 kg', '0 (normal force balances)'],
        ['Car engine thrust', '4,000 N', '1,500 kg', '2.67 m/s²'],
        ['Bullet leaving gun', '~3,000 N', '0.01 kg', '~300,000 m/s²'],
        ['Space shuttle launch (net)', '~20,000,000 N net', '2,000,000 kg', '~10 m/s²'],
      ],
    },
    prose: [
      { heading: 'Newton\'s Three Laws Together', body: 'Newton\'s First Law: objects stay at rest or in constant motion unless a net force acts. Second Law: F=ma quantifies how force changes motion. Third Law: for every force, there is an equal and opposite reaction force. Together, these three laws fully describe classical mechanics — the motion of everyday objects at non-relativistic speeds. They break down only at very high speeds (special relativity) or very small scales (quantum mechanics).' },
      { heading: 'Mass vs. Weight: A Critical Distinction', body: 'Mass (kg) is the amount of matter in an object — constant everywhere. Weight (N) is the gravitational force on that mass — varies with gravitational field strength. A 75 kg person weighs 735 N on Earth, 123 N on the Moon (g=1.62), and zero in deep space (no gravitational field). "Weighing" yourself on a scale measures force, not mass; the scale converts to mass by dividing by local g.' },
    ],
    faqs: [
      { q: 'What is Newton\'s Second Law?', a: 'F = ma: the net force on an object equals its mass times its acceleration. A larger force on the same mass produces greater acceleration. The same force on a larger mass produces less acceleration.' },
      { q: 'What is a Newton?', a: '1 Newton (N) is the force needed to accelerate 1 kg at 1 m/s². It equals 1 kg·m/s². 1 N ≈ the force needed to hold a 100g apple against gravity (0.1 kg × 9.81 m/s² ≈ 0.98 N).' },
      { q: 'What is the difference between mass and weight?', a: 'Mass is the amount of matter (kg), constant everywhere. Weight is the gravitational force on that mass (N = kg × g), which varies by location. In everyday speech, "weight" often means mass, but in physics they are distinct.' },
      { q: 'How does friction affect F = ma?', a: 'Friction is a force opposing motion. Net force = Applied force − Friction force. F_net = ma, so the acceleration is reduced. A 100 N push against 40 N friction on a 20 kg box: a = (100−40)/20 = 3 m/s².' },
      { q: 'Does F = ma apply in space?', a: 'Yes. In space (zero gravity environment), F = ma still applies. A rocket applying thrust to an object accelerates it. Without gravity to overcome, even small forces produce measurable acceleration on large masses.' },
      { q: 'What is the SI unit of force?', a: 'The Newton (N). 1 N = 1 kg·m/s². Other units: pound-force (lbf) in imperial (1 lbf = 4.448 N), dyne (CGS system, 1 dyne = 10⁻⁵ N).' },
      { q: 'How is F=ma used in car crash analysis?', a: 'In a crash, the car decelerates rapidly (large negative a). F = ma gives the enormous force on occupants during impact. Crumple zones increase the time of impact, reducing deceleration, reducing force. Airbags further extend stopping time, reducing peak force on the body.' },
      { q: 'What is inertia and how does it relate to Newton\'s Second Law?', a: 'Inertia is an object\'s resistance to changes in motion. Greater mass = greater inertia = greater force needed for the same acceleration. Newton\'s Second Law quantifies inertia: a = F/m. Mass is the measure of inertia in classical mechanics.' },
    ],
  },

  // ── MORE STATISTICS ────────────────────────────────────────────────────────

  'median-formula': {
    title: 'Median Formula – How to Find the Median of a Dataset',
    description: 'Learn how to find the median of any dataset — odd and even number of values. Understand when median is better than mean and how to handle grouped data.',
    toolSlug: 'mean-median-mode',
    toolPath: '/calculators/statistics/mean-median-mode',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Median: The Middle Value of a Dataset',
      subheading: 'The median is the middle value when data is sorted — resistant to outliers and often more representative than the mean for skewed data. Learn how to find it for odd and even datasets, and when to use median instead of mean.',
    },
    formula: {
      expression: 'Odd n: Median = value at position (n+1)/2  |  Even n: Median = (value at n/2 + value at n/2+1) / 2',
      explanation: 'To find the median: sort the data in ascending order. If n (number of values) is odd, the median is the middle value at position (n+1)/2. If n is even, the median is the average of the two middle values at positions n/2 and n/2+1.',
      variables: [
        { symbol: 'n', meaning: 'Total number of data values' },
        { symbol: 'Median', meaning: 'The middle value of an ordered dataset (or average of two middle values)' },
        { symbol: 'Sorted data', meaning: 'Data values arranged in ascending (or descending) order' },
      ],
    },
    steps: [
      { title: 'Sort the data in ascending order', detail: 'Arrange all values from smallest to largest. Example: {5, 2, 8, 1, 9} becomes {1, 2, 5, 8, 9}.' },
      { title: 'Count the number of values (n)', detail: 'Count all data points. n = 5 in the example above.' },
      { title: 'Find the middle position', detail: 'If n is odd: middle position = (n+1)/2 = (5+1)/2 = 3. The 3rd value is the median. If n is even: average positions n/2 and n/2+1.' },
      { title: 'Read (or average) the middle value(s)', detail: 'For {1, 2, 5, 8, 9}: median = 5 (3rd value). For even data {1, 2, 5, 8}: median = (2+5)/2 = 3.5.' },
    ],
    examples: [
      { title: 'Odd number of values', given: '{3, 7, 1, 9, 4} → sorted: {1, 3, 4, 7, 9}', solution: 'n=5; median position = (5+1)/2 = 3', answer: 'Median = 4 (the 3rd value)' },
      { title: 'Even number of values', given: '{8, 3, 5, 1, 7, 2} → sorted: {1, 2, 3, 5, 7, 8}', solution: 'n=6; median = average of 3rd and 4th = (3+5)/2', answer: 'Median = 4' },
      { title: 'Home prices (skewed data)', given: 'Home prices: $200K, $220K, $240K, $260K, $1,500K', solution: 'Sorted already; n=5; median at position 3', answer: 'Median = $240K (mean would be $484K — far less representative due to the outlier)' },
    ],
    table: {
      headers: ['Data Type', 'Best Measure', 'Reason'],
      rows: [
        ['Home prices', 'Median', 'Skewed by expensive outliers'],
        ['Income distribution', 'Median', 'Pulled right by high earners'],
        ['Exam scores (normal)', 'Mean', 'Symmetric — mean = median'],
        ['Symmetric temperatures', 'Either', 'Both give similar results'],
        ['Survey ratings', 'Median', 'Ordinal data; not truly numeric'],
      ],
    },
    prose: [
      { heading: 'Median vs Mean: When to Use Each', body: 'The mean is best for symmetric, normally distributed data with no extreme outliers. The median is best for skewed distributions or data with outliers. US household income and home prices always report median because a few billionaires or mansions would dramatically inflate the mean, making it unrepresentative of the typical American household. The median tells you what the "middle" person experiences.' },
    ],
    faqs: [
      { q: 'What is the median?', a: 'The median is the middle value of a sorted dataset. Half the values are above it, half are below. It is resistant to outliers, unlike the mean.' },
      { q: 'What if there are two middle values?', a: 'Average the two middle values. For {2, 4, 6, 8}: median = (4+6)/2 = 5.' },
      { q: 'When is the median a better measure than the mean?', a: 'When data is skewed (asymmetric) or contains extreme outliers. Income, home prices, and response times are classic examples where median is more representative.' },
      { q: 'Can the median be calculated for any data type?', a: 'Yes for ordinal and continuous data. For nominal data (categories like colors), neither mean nor median applies — use mode instead.' },
      { q: 'What is the median of a normal distribution?', a: 'In a perfectly normal (symmetric) distribution, mean = median = mode. They are all at the center of the bell curve.' },
      { q: 'How is median used in box plots?', a: 'The median is the center line of a box plot (box-and-whisker plot). It divides the box into upper and lower halves (Q2 — the second quartile). The box shows the interquartile range (Q1 to Q3).' },
      { q: 'What is weighted median?', a: 'A weighted median assigns different importance to each data point, then finds the value where the cumulative weight reaches 50%. Used in some statistical and economic analyses.' },
      { q: 'Is the median the same as the 50th percentile?', a: 'Yes. The median equals the 50th percentile (Q2, second quartile). Half the data falls below it, half above.' },
    ],
  },

  'mode-formula': {
    title: 'Mode in Statistics – How to Find the Mode of a Dataset',
    description: 'Learn how to find the mode (most frequent value) in any dataset. Covers unimodal, bimodal, multimodal distributions and real-world applications.',
    toolSlug: 'mean-median-mode',
    toolPath: '/calculators/statistics/mean-median-mode',
    pageType: 'formula',
    mathSolverEduType: 'Statistics',
    hero: {
      heading: 'Mode: The Most Frequently Occurring Value',
      subheading: 'The mode is the value that appears most often in a dataset. Unlike mean and median, mode works for categorical data too. Learn how to find it, what to do with multiple modes, and when mode is the most useful measure of central tendency.',
    },
    formula: {
      expression: 'Mode = Value(s) that appear most frequently  |  No formula — requires counting frequencies  |  Bimodal: two modes; Multimodal: more than two',
      explanation: 'The mode is not calculated with a formula — it is identified by finding the value(s) that appear most frequently. Tally each unique value\'s count. The mode is the value with the highest count. A dataset can have one mode (unimodal), two modes (bimodal), multiple modes, or no mode (if all values appear equally often).',
      variables: [
        { symbol: 'Mode', meaning: 'The value(s) appearing most frequently in the dataset' },
        { symbol: 'Frequency', meaning: 'How many times a value appears in the dataset' },
        { symbol: 'Bimodal', meaning: 'Two values tied for highest frequency' },
        { symbol: 'Unimodal', meaning: 'Exactly one mode' },
      ],
    },
    steps: [
      { title: 'List all values and count each', detail: 'Make a tally or frequency table. Count how many times each unique value appears in the dataset.' },
      { title: 'Identify the maximum frequency', detail: 'Find the highest count in your tally. This is the modal frequency.' },
      { title: 'Identify which value(s) have that frequency', detail: 'If one value has the highest count: unimodal. If two values tie: bimodal. If all values appear the same number of times: no mode.' },
      { title: 'Report the mode in context', detail: 'State the mode with units and context. "The modal shoe size is 8" or "Mode = 3 and 5 (bimodal distribution)." For grouped data, report the modal class (the bin with highest frequency).' },
    ],
    examples: [
      { title: 'Shoe size data', given: '{7, 8, 8, 9, 8, 7, 10, 9, 8, 7}', solution: 'Count: 7 appears 3x, 8 appears 4x, 9 appears 2x, 10 appears 1x', answer: 'Mode = 8 (most common shoe size)' },
      { title: 'Bimodal dataset', given: '{2, 3, 3, 4, 5, 5, 6}', solution: 'Count: 3 appears 2x, 5 appears 2x, all others 1x', answer: 'Mode = 3 and 5 (bimodal)' },
      { title: 'Categorical data (no mean possible)', given: 'Favorite colors: {Red, Blue, Blue, Green, Red, Blue, Red, Blue}', solution: 'Count: Red=3, Blue=4, Green=1', answer: 'Mode = Blue (most popular color — only meaningful average for categorical data)' },
    ],
    table: {
      headers: ['Distribution Type', 'Modes', 'Example'],
      rows: [
        ['Unimodal', 'One mode', 'Normal distribution — one peak'],
        ['Bimodal', 'Two modes', 'Heights of men + women combined'],
        ['Multimodal', 'Multiple modes', 'Complex survey results'],
        ['Uniform', 'No mode', 'All values equal frequency'],
        ['Skewed', 'Mode ≠ mean ≠ median', 'Income distribution'],
      ],
    },
    prose: [
      { heading: 'Mode for Categorical and Ordinal Data', body: 'Mode is the only measure of central tendency that works for categorical data (nominal scale). You cannot compute the mean or median of {Red, Green, Blue} — there is no meaningful "average" color. But you can find the most common color. In business: most popular product, most common complaint category, most frequent customer type. Mode is underused in business analytics where categorical data is common.' },
      { heading: 'Mean, Median, and Mode in Skewed Distributions', body: 'In a perfectly symmetric (normal) distribution, mean = median = mode. When a distribution is right-skewed (e.g., income), the mode < median < mean. When left-skewed, mode > median > mean. This relationship helps diagnose distribution shape. For skewed data, the median or mode often better represents a "typical" value than the mean, which is pulled toward the tail.' },
    ],
    faqs: [
      { q: 'What is the mode in statistics?', a: 'The mode is the value that appears most frequently in a dataset. A dataset can have zero, one, or multiple modes.' },
      { q: 'What if there is no mode?', a: 'If all values appear the same number of times, there is no mode (or every value is a mode, depending on interpretation). Most statisticians say "no mode" in this case.' },
      { q: 'Can the mode be used for continuous data?', a: 'For continuous data with no exact repeats, mode is less meaningful. Group into bins first, then find the modal bin — this is essentially a histogram analysis.' },
      { q: 'What is a bimodal distribution?', a: 'A bimodal distribution has two local peaks (two modes). This often signals two distinct subgroups in the data (e.g., combining male and female heights creates a bimodal distribution).' },
      { q: 'Is mode the same as average?', a: 'No. Average typically refers to the arithmetic mean. Mode is the most frequent value. They can be very different: in {1, 1, 1, 100}, mode = 1 but mean = 25.75.' },
      { q: 'When is mode most useful?', a: 'Mode is most useful for categorical data, for identifying the "most typical" value in skewed distributions, and in business for finding bestselling products, most common errors, or peak usage hours.' },
      { q: 'What is the modal class in grouped data?', a: 'When data is grouped into intervals (bins), the modal class is the interval with the highest frequency. The mode is then estimated as a value within that interval.' },
      { q: 'How is mode used in machine learning?', a: 'In machine learning, mode is used to impute missing categorical values (replace missing with the most common category). Mode is also used in ensemble methods like mode-voting classifiers.' },
    ],
  },

  // ── MORE HEALTH ─────────────────────────────────────────────────────────────

  'how-to-bmi': {
    title: 'How to Calculate BMI – Step-by-Step Guide',
    description: 'Step-by-step guide to calculating BMI in metric and imperial units. Understand your BMI category, limitations, and healthier alternatives to BMI.',
    toolSlug: 'bmi',
    toolPath: '/calculators/health/bmi',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate BMI: Step-by-Step',
      subheading: 'Body Mass Index is easy to calculate from your height and weight. This guide walks through the calculation in both metric and imperial units, explains the BMI categories, and discusses important limitations.',
    },
    steps: [
      { title: 'Measure your height and weight', detail: 'Use metric: height in meters (m), weight in kilograms (kg). Or imperial: height in inches, weight in pounds. Convert if necessary: 1 inch = 2.54 cm; 1 lb = 0.4536 kg.' },
      { title: 'Metric calculation: BMI = kg / m²', detail: 'Divide weight (kg) by height in meters squared. For 70 kg, 1.75 m: BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.9.' },
      { title: 'Imperial calculation: BMI = 703 × lbs / in²', detail: 'For 154 lbs, 69 inches: BMI = 703 × 154 / (69 × 69) = 108,262 / 4,761 = 22.7.' },
      { title: 'Compare to BMI categories', detail: 'Underweight: < 18.5; Normal: 18.5–24.9; Overweight: 25–29.9; Obese: ≥ 30. These are WHO categories for adults 20+.' },
      { title: 'Understand the limitations', detail: 'BMI does not distinguish muscle from fat, does not account for age, sex, or ethnicity, and can misclassify athletes. Use it as a screening tool, not a diagnosis.' },
    ],
    examples: [
      { title: 'Metric calculation', given: 'Height: 1.68 m, Weight: 63 kg', solution: 'BMI = 63 / (1.68)² = 63 / 2.8224', answer: 'BMI = 22.3 (Normal weight)' },
      { title: 'Imperial calculation', given: 'Height: 5\'7" (67 inches), Weight: 180 lbs', solution: 'BMI = 703 × 180 / 67² = 126,540 / 4,489', answer: 'BMI = 28.2 (Overweight category)' },
    ],
    table: {
      headers: ['BMI Range', 'Category', 'Health Implication'],
      rows: [
        ['< 18.5', 'Underweight', 'Risk of nutritional deficiency, bone loss'],
        ['18.5–24.9', 'Normal weight', 'Lowest health risk range'],
        ['25.0–29.9', 'Overweight', 'Increased risk of metabolic conditions'],
        ['30.0–34.9', 'Obese (Class I)', 'High risk'],
        ['35.0–39.9', 'Obese (Class II)', 'Very high risk'],
        ['≥ 40', 'Obese (Class III)', 'Severely elevated risk'],
      ],
    },
    prose: [
      { heading: 'Why Athletes Often Have "Overweight" BMI', body: 'Muscle is denser than fat — the same volume of muscle weighs more. A professional athlete with minimal body fat may register as "overweight" or even "obese" by BMI because their high muscle mass inflates weight without excess fat. For these individuals, body fat percentage or waist-to-height ratio is a better health indicator.' },
    ],
    faqs: [
      { q: 'Is BMI accurate?', a: 'BMI is a rough population-level screening tool with significant individual limitations. It is not accurate for athletes, the elderly, or people with unusually large or small frames. It correlates with health risk at a population level but is not diagnostic for individuals.' },
      { q: 'How do I calculate BMI in pounds and feet?', a: 'Convert height to total inches (feet × 12 + inches). Then: BMI = 703 × weight(lbs) / height(inches)². For 6 feet = 72 inches, 180 lbs: BMI = 703 × 180 / 5184 = 24.4.' },
      { q: 'Does BMI apply to children?', a: 'Children use the same formula, but results are interpreted using age- and sex-specific percentile charts (CDC BMI-for-age). "Overweight" for children = 85th–95th percentile; "obese" = above 95th percentile.' },
      { q: 'What BMI is considered healthy?', a: 'The standard healthy BMI range is 18.5 to 24.9 for adults. Some Asian-specific guidelines suggest 18.5 to 22.9 as the healthy range due to different risk profiles at lower BMI values.' },
      { q: 'What is a BMI of 30?', a: 'BMI ≥ 30 is classified as obese (Class I). At 5\'9" (175 cm), this corresponds to approximately 203 lbs (92 kg) or more.' },
      { q: 'Can I be healthy with a high BMI?', a: 'Yes — "metabolically healthy obese" individuals exist who have normal blood pressure, blood sugar, and cholesterol despite high BMI. However, they are a minority, and most individuals with high BMI have associated health risks.' },
      { q: 'What is a better measure than BMI?', a: 'Waist-to-height ratio (waist ÷ height, target < 0.5), waist circumference alone (< 94 cm men, < 80 cm women per WHO), and body fat percentage (measured via DEXA scan or bioimpedance) all predict health risks better than BMI for individuals.' },
      { q: 'How often should I check my BMI?', a: 'For most adults, checking BMI every 1–2 years is sufficient. If actively working on weight management, monthly tracking alongside waist measurements provides better feedback. Always discuss results with a healthcare provider.' },
    ],
  },

  // ── MORE BUSINESS ───────────────────────────────────────────────────────────

  'gross-profit-formula': {
    title: 'Gross Profit Formula – Revenue Minus COGS',
    description: 'Learn the gross profit formula: Gross Profit = Revenue − COGS. Understand gross profit margin, contribution margin, and how to improve product profitability.',
    toolSlug: 'profit-margin',
    toolPath: '/calculators/business/profit-margin',
    pageType: 'formula',
    hero: {
      heading: 'Gross Profit Formula: Revenue − Cost of Goods Sold',
      subheading: 'Gross profit is the first measure of profitability — it shows how efficiently you produce or deliver your product or service before overhead is considered. Learn the formula and how to use gross profit to improve your pricing and cost structure.',
    },
    formula: {
      expression: 'Gross Profit = Revenue − COGS  |  Gross Margin % = (Gross Profit / Revenue) × 100  |  COGS = Direct Materials + Direct Labor + Manufacturing Overhead',
      explanation: 'Gross profit is the profit remaining after subtracting the direct costs of producing goods or services (COGS — Cost of Goods Sold). It does not include operating expenses like rent, salaries of non-production staff, marketing, or administration. Gross margin expresses gross profit as a percentage of revenue.',
      variables: [
        { symbol: 'Revenue', meaning: 'Total sales income' },
        { symbol: 'COGS', meaning: 'Cost of Goods Sold — direct costs to produce/deliver goods/services' },
        { symbol: 'Gross Profit', meaning: 'Revenue minus COGS' },
        { symbol: 'Gross Margin %', meaning: 'Gross Profit as a percentage of Revenue' },
      ],
    },
    steps: [
      { title: 'Identify total revenue', detail: 'Sum all sales revenue for the period. Deduct returns and allowances to get net revenue.' },
      { title: 'Calculate COGS accurately', detail: 'For manufacturers: raw materials + direct labor + factory overhead. For retailers: purchase cost of goods sold. For services: direct service delivery costs (direct labor, materials used per job).' },
      { title: 'Subtract COGS from Revenue', detail: 'Gross Profit = Revenue − COGS. If revenue = $500,000 and COGS = $300,000: Gross Profit = $200,000.' },
      { title: 'Calculate gross margin percentage', detail: 'Gross Margin % = (Gross Profit / Revenue) × 100 = ($200,000 / $500,000) × 100 = 40%.' },
    ],
    examples: [
      { title: 'Retail store', given: 'Monthly revenue: $80,000. Cost of goods purchased and sold: $52,000', solution: 'Gross Profit = $80,000 − $52,000 = $28,000; Gross Margin = 28,000/80,000 × 100', answer: 'Gross Profit = $28,000; Gross Margin = 35%' },
      { title: 'SaaS company', given: 'Annual revenue: $2,000,000. Server costs + customer support + onboarding: $300,000', solution: 'Gross Profit = $2,000,000 − $300,000 = $1,700,000; Gross Margin = 1,700,000/2,000,000 × 100', answer: 'Gross Profit = $1,700,000; Gross Margin = 85%' },
    ],
    table: {
      headers: ['Industry', 'Typical Gross Margin', 'Key COGS Components'],
      rows: [
        ['SaaS/Software', '70–85%', 'Hosting, support, onboarding'],
        ['Retail', '25–50%', 'Purchase price of goods'],
        ['Manufacturing', '25–45%', 'Raw materials, direct labor, factory overhead'],
        ['Restaurant', '60–70%', 'Food and beverage cost'],
        ['Consulting/Services', '30–60%', 'Direct labor hours billed'],
      ],
    },
    prose: [
      { heading: 'Gross Profit vs Net Profit: What\'s the Difference?', body: 'Gross profit stops at COGS. Net profit (net income) subtracts all additional costs: operating expenses (rent, salaries, marketing), interest, taxes, and depreciation. A business can have high gross profit but zero or negative net profit if overhead is too high. Growing gross profit while controlling overhead growth is the key to scaling profitability.' },
    ],
    faqs: [
      { q: 'What is gross profit?', a: 'Gross profit = Revenue − Cost of Goods Sold. It is the profit after paying for the direct cost of producing/delivering goods or services, before overhead and operating expenses.' },
      { q: 'What is a good gross profit margin?', a: 'It varies by industry. Software: 70–85% is good. Retail: 25–50%. Manufacturing: 25–45%. Always compare to industry benchmarks.' },
      { q: 'What is included in COGS?', a: 'COGS includes direct materials, direct labor, and manufacturing overhead. It does NOT include general admin expenses, marketing, sales team salaries, or R&D — those are operating expenses below the gross profit line.' },
      { q: 'How do I improve gross profit margin?', a: 'Raise prices (most impactful), negotiate lower COGS (bulk purchasing, cheaper suppliers), improve production efficiency, or shift product mix toward higher-margin items.' },
      { q: 'Can gross profit be negative?', a: 'Yes — negative gross profit means you are selling products for less than they cost to make. This is unsustainable and signals either severe mispricing or accounting errors.' },
      { q: 'What is the difference between gross profit and contribution margin?', a: 'Gross profit subtracts all COGS (both fixed manufacturing costs and variable costs). Contribution margin subtracts only variable costs from revenue. Contribution margin is used for break-even analysis; gross profit for overall profitability assessment.' },
      { q: 'How does gross margin affect valuation?', a: 'Investors pay attention to gross margin because it shows the underlying economics of the business model. High-margin businesses (SaaS, pharma) command higher valuation multiples because each additional revenue dollar adds more to the bottom line.' },
      { q: 'Does gross profit include salaries?', a: 'Only direct production/service delivery salaries. A factory worker\'s wages are in COGS. A marketing manager\'s salary is an operating expense, not in COGS.' },
    ],
  },

  'how-to-roi': {
    title: 'How to Calculate ROI – Step-by-Step Return on Investment Guide',
    description: 'Learn how to calculate ROI step by step for any investment type: marketing, stocks, real estate, and business projects. Includes annualized ROI and common mistakes.',
    toolSlug: 'roi',
    toolPath: '/calculators/business/roi',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate ROI: Step-by-Step',
      subheading: 'Return on Investment is the universal yardstick of investment performance. This guide walks through computing ROI for any scenario — from marketing campaigns to real estate — with clear examples and common pitfalls to avoid.',
    },
    steps: [
      { title: 'Identify all costs of the investment', detail: 'Include ALL costs: purchase price, fees, commissions, maintenance, opportunity cost. Missing costs is the #1 ROI calculation mistake.' },
      { title: 'Identify all returns', detail: 'Include ALL returns: revenue generated, dividends, sale proceeds, cost savings. For marketing: revenue attributable to the campaign.' },
      { title: 'Calculate net return', detail: 'Net Return = Total Returns − Total Costs. This is the profit (or loss) from the investment.' },
      { title: 'Divide by cost and multiply by 100', detail: 'ROI % = (Net Return / Cost) × 100. For $2,000 net return on $5,000 investment: ROI = (2,000/5,000) × 100 = 40%.' },
      { title: 'Annualize for multi-year investments', detail: 'Annualized ROI = ((1 + ROI/100)^(1/years) − 1) × 100. A 40% ROI over 3 years: ((1.40)^(1/3) − 1) × 100 = 11.9% per year.' },
    ],
    examples: [
      { title: 'Email marketing campaign', given: 'Campaign cost: $2,000. Revenue attributed: $11,000.', solution: 'Net Return = $9,000; ROI = (9,000/2,000) × 100', answer: 'ROI = 450% — every dollar spent returned $5.50' },
      { title: 'Real estate investment', given: 'Purchase: $200,000. Annual rent: $18,000. Annual costs: $6,000. Held 5 years, sold for $260,000.', solution: 'Total income = 5 × (18,000−6,000) + 60,000 gain = 60,000 + 60,000 = $120,000; ROI = 120,000/200,000 × 100 = 60%; Annualized = ((1.60)^(0.2)−1)×100', answer: 'Total ROI = 60%; Annualized ROI = 9.9%/year' },
    ],
    table: {
      headers: ['Investment Type', 'Typical ROI Benchmark', 'Key Costs to Include'],
      rows: [
        ['S&P 500 (long-term avg)', '7–10% annualized', 'Purchase price, brokerage fees, taxes'],
        ['Real estate', '8–12% annual', 'Purchase, maintenance, property tax, insurance, vacancy'],
        ['Email marketing', '36:1 (3,600%)', 'Creative, platform, staff time'],
        ['Google Ads', '200–300%', 'Ad spend, landing page, attribution'],
        ['Business equipment', 'Varies', 'Purchase, installation, maintenance, training'],
      ],
    },
    prose: [
      { heading: 'The Most Common ROI Mistakes', body: 'Forgetting all costs: ROI calculations often undercount costs. Marketing ROI often excludes staff time, creative costs, and platform fees. Real estate ROI often ignores maintenance, vacancy, and closing costs. Ignoring time: a 50% ROI looks great until you realize it took 10 years (only 4.1% per year annualized). Not attributing revenue correctly: in marketing, only revenue caused by the campaign should count, not all revenue that period.' },
    ],
    faqs: [
      { q: 'What is a good ROI?', a: 'It depends on the investment type and risk level. For stocks, 7–10% annualized is considered solid. For marketing, a minimum 3:1 ROI ($3 return per $1 spent) is a common threshold. For real estate, 8–12% annual is strong.' },
      { q: 'How do I calculate ROI in Excel?', a: '=(Revenue - Cost) / Cost * 100 in a cell, where Revenue and Cost are cell references. For annualized: =((1+ROI/100)^(1/Years)-1)*100.' },
      { q: 'What is the difference between ROI and ROAS?', a: 'ROI measures profit relative to cost. ROAS (Return on Ad Spend) measures revenue relative to ad spend, ignoring the cost of goods. ROI = (Revenue − COGS − Ad Spend) / Ad Spend. ROAS = Revenue / Ad Spend. ROAS is always higher than ROI.' },
      { q: 'Can ROI be negative?', a: 'Yes — a negative ROI means the investment lost money. The higher the negative %, the larger the loss relative to cost. A −100% ROI means you lost everything invested.' },
      { q: 'How is ROI different from IRR?', a: 'ROI is simple and ignores the timing of cash flows. IRR (Internal Rate of Return) accounts for when cash flows occur, making it more accurate for multi-period investments with uneven returns.' },
      { q: 'Should I include taxes in ROI calculation?', a: 'For personal investment decisions, after-tax ROI is more meaningful. For business project comparisons, pre-tax ROI is often used for consistency. Always specify which basis you are using.' },
      { q: 'What is social ROI?', a: 'Social ROI (SROI) measures social, environmental, and economic value created relative to costs. Used by nonprofits and social enterprises. Harder to measure than financial ROI as it requires quantifying non-monetary outcomes.' },
      { q: 'How do I improve ROI?', a: 'Reduce costs (negotiate prices, improve efficiency), increase returns (higher revenue, better conversion rates), shorten the investment period (faster payback), or reallocate capital from low-ROI to high-ROI activities.' },
    ],
  },

  // ── MORE CONSTRUCTION ───────────────────────────────────────────────────────

  'mulch-formula': {
    title: 'Mulch Calculator Formula – How Much Mulch Do I Need?',
    description: 'Learn how to calculate mulch volume in cubic yards and bags. Calculate mulch needed for any garden bed with this simple step-by-step formula.',
    toolSlug: 'mulch',
    toolPath: '/calculators/construction/mulch',
    pageType: 'formula',
    hero: {
      heading: 'Mulch Formula: Length × Width × Depth / 324',
      subheading: 'Buying the right amount of mulch saves money and trips to the store. Learn the simple formula to calculate cubic yards or bags of mulch for any garden bed, pathway, or landscaping area.',
    },
    formula: {
      expression: 'Cubic Yards = (Length × Width × Depth) / 324  |  [Length and Width in feet, Depth in inches]  |  Bags needed = Cubic Yards × 13.5 (for 2 cu ft bags)',
      explanation: 'Mulch volume is calculated the same way as concrete: length × width × depth. The division by 324 (= 27 ft³/yd³ × 12 in/ft) converts square feet with depth in inches to cubic yards — the standard mulch ordering unit. One cubic yard = approximately 13.5 bags of 2-cubic-foot mulch.',
      variables: [
        { symbol: 'Length', meaning: 'Length of the garden bed in feet' },
        { symbol: 'Width', meaning: 'Width of the garden bed in feet' },
        { symbol: 'Depth', meaning: 'Desired mulch depth in inches (typically 2–4 inches)' },
        { symbol: 'Cubic Yard', meaning: 'Standard unit for bulk mulch orders (1 yd³ = 27 ft³)' },
      ],
    },
    steps: [
      { title: 'Measure the area in feet', detail: 'Measure length and width of each garden bed in feet. For irregular shapes, break into rectangles. Curved beds: approximate with rectangles.' },
      { title: 'Decide on depth', detail: 'New beds or weed suppression: 3–4 inches. Refreshing existing mulch: 2 inches. Paths and play areas: 4–6 inches. More is not always better — too deep can suffocate plant roots.' },
      { title: 'Calculate cubic yards', detail: 'Cubic Yards = (Length × Width × Depth) / 324. For a 10 ft × 20 ft bed at 3 inches: (10 × 20 × 3) / 324 = 600/324 = 1.85 cubic yards.' },
      { title: 'Choose bulk or bagged', detail: 'For volumes under 2 cubic yards, bagged mulch is often more convenient. Over 2–3 cubic yards, bulk delivery (by the cubic yard) is more economical. 1 cubic yard ≈ 13.5 bags of 2 cu ft mulch.' },
    ],
    examples: [
      { title: 'Front garden beds', given: 'Three beds: 8×4 ft, 12×3 ft, 6×5 ft; all at 3 inches deep', solution: 'Area = 32 + 36 + 30 = 98 sq ft; Cubic yards = (98 × 3)/324 = 294/324', answer: '0.91 cubic yards — buy 1 cubic yard or 13 bags (2 cu ft each)' },
      { title: 'Large landscape project', given: 'Total area: 500 sq ft, 4 inches deep', solution: 'Cubic yards = (500 × 4)/324 = 2,000/324', answer: '6.17 cubic yards — order 7 cubic yards of bulk mulch' },
    ],
    table: {
      headers: ['Depth', 'Per 100 sq ft', 'Per 500 sq ft', 'Per 1,000 sq ft'],
      rows: [
        ['2 inches', '0.62 cu yd', '3.09 cu yd', '6.17 cu yd'],
        ['3 inches', '0.93 cu yd', '4.63 cu yd', '9.26 cu yd'],
        ['4 inches', '1.23 cu yd', '6.17 cu yd', '12.35 cu yd'],
        ['6 inches', '1.85 cu yd', '9.26 cu yd', '18.52 cu yd'],
      ],
    },
    prose: [
      { heading: 'Choosing the Right Mulch Type', body: 'Wood chip/shredded bark: most common, decomposes adding organic matter, ideal for trees and shrubs. Pine straw: good for acid-loving plants (azaleas, blueberries), lightweight. Rubber mulch: long-lasting for playgrounds, does not decompose, does not add nutrients. Gravel/stone: permanent, no decomposition, good for drainage, hot in summer. Compost: adds nutrients, best mixed into soil or as a thin top dressing.' },
    ],
    faqs: [
      { q: 'How many bags of mulch per cubic yard?', a: '1 cubic yard = 27 cubic feet. A 2 cu ft bag: 27/2 = 13.5 bags. A 3 cu ft bag: 27/3 = 9 bags.' },
      { q: 'How deep should mulch be?', a: '2–4 inches is the recommended range. 3 inches is ideal for most purposes: deep enough to suppress weeds and retain moisture, shallow enough not to suffocate roots. Keep mulch 2–3 inches away from plant stems and tree trunks.' },
      { q: 'How much does a cubic yard of mulch cover?', a: 'At 3 inches deep: 1 cubic yard covers approximately 108 sq ft. At 2 inches: 162 sq ft. At 4 inches: 81 sq ft.' },
      { q: 'Can I put too much mulch?', a: 'Yes. More than 4 inches can: prevent water from reaching roots, create anaerobic conditions, harbor pests, and suffocate plant crowns. "Volcano mulching" (piling against tree trunks) causes rot and invites disease.' },
      { q: 'When should I apply mulch?', a: 'Spring (after soil warms): suppresses weeds before they germinate and retains moisture. Fall: insulates roots from freeze-thaw cycles. Any time: for new beds to suppress weeds immediately.' },
      { q: 'Does mulch need to be replaced every year?', a: 'Wood mulches decompose over 1–3 years and should be replenished (add 1–2 inches). Check existing depth before ordering — you may only need to top up rather than replace fully. Rubber and stone mulch last much longer.' },
      { q: 'How much does mulch cost?', a: 'Bagged mulch: $4–8 per 2 cu ft bag. Bulk mulch: $30–50 per cubic yard plus delivery. Bulk is significantly cheaper for volumes over 3 cubic yards. Premium wood chips or specialty mulches cost more.' },
      { q: 'What is the difference between mulch and compost?', a: 'Mulch is spread on top of soil for moisture retention and weed suppression; it may or may not add nutrients as it decomposes. Compost is incorporated INTO soil to improve structure and add nutrients. Both are beneficial but serve different primary purposes.' },
    ],
  },

  // ── MORE CONVERTERS ─────────────────────────────────────────────────────────

  'inches-to-cm-formula': {
    title: 'Inches to Centimeters Formula – in to cm Conversion',
    description: 'Learn the inches to cm formula: cm = inches × 2.54. Includes the reverse cm to inches conversion, height conversion table, and quick mental math tips.',
    toolSlug: 'length',
    toolPath: '/calculators/converters/length',
    pageType: 'formula',
    hero: {
      heading: 'Inches to Centimeters: 1 inch = 2.54 cm',
      subheading: 'Converting between inches and centimeters is needed for height, clothing sizes, screen sizes, and international measurements. Learn the exact conversion factor, quick mental math, and how to convert heights in feet and inches to cm.',
    },
    formula: {
      expression: 'cm = inches × 2.54  |  inches = cm / 2.54  |  feet + inches to cm: ((feet × 12) + inches) × 2.54',
      explanation: '1 inch is defined as exactly 2.54 centimeters (since 1959 international agreement). To convert inches to cm, multiply by 2.54. To convert cm to inches, divide by 2.54. For heights in feet and inches, first convert to total inches (feet × 12 + inches), then multiply by 2.54.',
      variables: [
        { symbol: 'in', meaning: 'Inches — imperial unit of length (1 in = 2.54 cm exactly)' },
        { symbol: 'cm', meaning: 'Centimeters — metric unit of length (1 cm = 0.3937 in)' },
        { symbol: '2.54', meaning: 'Exact conversion factor: 1 inch = 2.54 cm by definition' },
      ],
    },
    steps: [
      { title: 'Multiply inches by 2.54', detail: 'cm = inches × 2.54. For 12 inches: 12 × 2.54 = 30.48 cm. For 6 inches: 6 × 2.54 = 15.24 cm.' },
      { title: 'For heights (feet + inches)', detail: 'Convert to total inches first. 5\'9" = (5 × 12) + 9 = 69 inches. Then: 69 × 2.54 = 175.26 cm.' },
      { title: 'Convert cm to inches', detail: 'Divide by 2.54. For 180 cm: 180 / 2.54 = 70.87 inches = 5\'10.87" ≈ 5\'11".' },
      { title: 'Quick mental approximation', detail: '1 inch ≈ 2.5 cm (within 2%). For rough estimates: double the inches and add half again, or multiply by 2.5.' },
    ],
    examples: [
      { title: 'Height conversion', given: 'Height: 5\'10" — convert to centimeters', solution: '5\'10" = 70 inches; 70 × 2.54', answer: '177.8 cm' },
      { title: 'Screen size', given: '27-inch monitor diagonal — what is this in cm?', solution: '27 × 2.54', answer: '68.58 cm diagonal' },
      { title: 'Reverse: cm to feet/inches', given: '165 cm — convert to feet and inches', solution: '165 / 2.54 = 64.96 inches; 64 / 12 = 5 ft, 64.96 - 60 = 4.96 inches', answer: '5\'4.96" ≈ 5\'5"' },
    ],
    table: {
      headers: ['Feet & Inches', 'Total Inches', 'Centimeters'],
      rows: [
        ['5\'0"', '60', '152.4'],
        ['5\'3"', '63', '160.0'],
        ['5\'6"', '66', '167.6'],
        ['5\'9"', '69', '175.3'],
        ['6\'0"', '72', '182.9'],
        ['6\'3"', '75', '190.5'],
      ],
    },
    prose: [
      { heading: 'The Metric and Imperial Length Systems', body: 'The US, UK (partially), and Myanmar use inches, feet, yards, and miles. Most of the world uses the metric system (mm, cm, m, km). The metric system is based on powers of 10, making conversions straightforward (10 mm = 1 cm, 100 cm = 1 m, 1,000 m = 1 km). Clothing sizes, medical records, and technical specifications often require conversion between systems when dealing internationally.' },
    ],
    faqs: [
      { q: 'How many cm is 1 inch?', a: 'Exactly 2.54 cm. This is a defined relationship, not a measurement approximation.' },
      { q: 'How do I convert my height from feet/inches to cm?', a: 'Convert to total inches: (feet × 12) + inches. Multiply by 2.54. For 5\'8": (5×12+8)×2.54 = 68×2.54 = 172.72 cm.' },
      { q: 'What is 6 feet in cm?', a: '6 feet = 72 inches; 72 × 2.54 = 182.88 cm.' },
      { q: 'What is 160 cm in feet?', a: '160 / 2.54 = 62.99 inches = 5 feet 2.99 inches ≈ 5\'3".' },
      { q: 'How do I convert cm to feet quickly?', a: 'Divide cm by 30.48 to get feet. Or divide by 2.54 for total inches, then divide by 12 for feet. For 175 cm: 175/30.48 = 5.74 feet = 5 feet 8.9 inches.' },
      { q: 'What is an inch in mm?', a: '1 inch = 25.4 mm (since 1 in = 2.54 cm = 25.4 mm).' },
      { q: 'How do clothing size conversions use inches and cm?', a: 'Waist sizes, inseam lengths, and chest measurements are often given in inches (US) or cm (Europe). A 32-inch waist = 32 × 2.54 = 81.3 cm ≈ European size 82.' },
      { q: 'What is a cubit?', a: 'A cubit is an ancient unit of measurement (the length of a forearm from elbow to fingertip), approximately 18 inches or 45 cm. Mentioned in the Bible and ancient Egyptian construction.' },
    ],
  },

  'liters-to-gallons-formula': {
    title: 'Liters to Gallons Formula – L to gal Conversion',
    description: 'Learn to convert liters to gallons and gallons to liters. Includes US gallons vs UK imperial gallons, fuel economy conversion, and a quick reference table.',
    toolSlug: 'volume',
    toolPath: '/calculators/converters/volume',
    pageType: 'formula',
    hero: {
      heading: 'Liters to Gallons: 1 US gallon = 3.78541 liters',
      subheading: 'Volume conversion between liters and gallons is needed for fuel economy, cooking, and liquid measurement across metric and imperial systems. This guide covers US gallons, UK imperial gallons, and the reverse liter conversion.',
    },
    formula: {
      expression: 'US Gallons = Liters / 3.78541  |  Liters = US Gallons × 3.78541  |  UK Gallons = Liters / 4.54609',
      explanation: 'The US gallon (fluid gallon) equals exactly 3.785411784 liters. The UK imperial gallon is larger: 4.54609 liters. When converting, always clarify which gallon is intended — fuel efficiency figures (mpg) differ significantly between US and UK standards because of this difference.',
      variables: [
        { symbol: 'US gallon', meaning: 'United States liquid gallon = 3.78541 liters = 231 cubic inches' },
        { symbol: 'UK gallon', meaning: 'Imperial gallon = 4.54609 liters (used in UK, Canada for some contexts)' },
        { symbol: 'Liter (L)', meaning: 'SI unit of volume = 1 cubic decimeter = 1,000 mL' },
      ],
    },
    steps: [
      { title: 'Identify which gallon type', detail: 'US gallon (most common in North America) = 3.785 L. UK imperial gallon = 4.546 L. This distinction matters for fuel, beverages, and international trade.' },
      { title: 'Convert liters to US gallons', detail: 'US gallons = liters / 3.78541. For 40 liters: 40/3.785 = 10.57 US gallons.' },
      { title: 'Convert US gallons to liters', detail: 'Liters = US gallons × 3.78541. For 10 gallons: 10 × 3.78541 = 37.85 liters.' },
      { title: 'Convert UK imperial gallons', detail: 'UK gallons = liters / 4.54609. Liters = UK gallons × 4.54609. Example: 20 liters = 20/4.546 = 4.40 UK gallons. Note: 20 liters = 5.28 US gallons — a US gallon is about 20% smaller than a UK gallon.' },
    ],
    examples: [
      { title: 'Fuel tank', given: 'Car fuel tank holds 15 US gallons. How many liters?', solution: '15 × 3.78541', answer: '56.78 liters' },
      { title: 'Fuel economy conversion', given: '35 mpg (US) — convert to L/100km', solution: '235.214 / 35 mpg (conversion formula)', answer: '≈ 6.72 L/100km' },
      { title: 'Water jugs', given: '5 liters — how many US gallons?', solution: '5 / 3.78541', answer: '1.32 US gallons' },
    ],
    table: {
      headers: ['Liters', 'US Gallons', 'UK Gallons'],
      rows: [
        ['1', '0.264', '0.220'],
        ['3.785', '1', '0.833'],
        ['4.546', '1.201', '1'],
        ['10', '2.642', '2.200'],
        ['20', '5.283', '4.399'],
        ['50', '13.209', '10.998'],
        ['100', '26.417', '21.997'],
      ],
    },
    prose: [
      { heading: 'Fuel Economy: L/100km vs MPG', body: 'The US expresses fuel economy in miles per gallon (mpg) — higher is better. Europe uses liters per 100 kilometers (L/100km) — lower is better. To convert: L/100km = 235.214 / mpg(US). To convert: mpg(US) = 235.214 / L/100km. A very efficient car getting 50 mpg uses only 4.7 L/100km. An average car at 30 mpg uses 7.8 L/100km.' },
      { heading: 'Common Volume Conversions Beyond Gallons', body: 'Volume comes in many units: 1 US gallon = 4 quarts = 8 pints = 16 cups = 128 fl oz. 1 liter = 1,000 mL = 33.81 fl oz ≈ 4.23 cups. For cooking: 1 tablespoon = 14.79 mL; 1 teaspoon = 4.93 mL; 1 cup = 236.6 mL. For larger volumes: 1 cubic meter = 1,000 liters = 264.2 US gallons = 219.97 UK gallons.' },
    ],
    faqs: [
      { q: 'How many liters are in a gallon?', a: 'US gallon: 3.78541 liters. UK imperial gallon: 4.54609 liters. These two are NOT the same — always specify which gallon.' },
      { q: 'How many gallons is 5 liters?', a: '5 / 3.78541 = 1.32 US gallons. In terms of common containers, a 5-liter bottle holds about 1.32 US gallons.' },
      { q: 'What is a liter in everyday terms?', a: 'A liter is about 1.06 US quarts or 33.8 fluid ounces. A typical large water bottle is 1 liter. A 2-liter soda bottle is about 0.53 US gallons.' },
      { q: 'Why are US and UK gallons different?', a: 'They evolved separately. The US gallon is based on the wine gallon from colonial British measurements. The UK imperial gallon was later standardized differently. The US never adopted the imperial system when Britain formalized it in 1824.' },
      { q: 'How do I convert mpg to L/100km?', a: 'L/100km = 235.214 / mpg. For 25 mpg: 235.214/25 = 9.41 L/100km. For 40 mpg: 235.214/40 = 5.88 L/100km.' },
      { q: 'What is a dry gallon?', a: 'The US dry gallon (4.405 liters) is used for dry goods like grain and produce. It is different from the liquid gallon (3.785 liters). The dry gallon is rarely used in everyday life.' },
      { q: 'How many cups in a gallon?', a: '16 US cups in 1 US gallon. 1 cup = 8 fl oz; 1 gallon = 128 fl oz; 128/8 = 16 cups.' },
      { q: 'What is a fluid ounce vs a regular ounce?', a: 'A fluid ounce (fl oz) measures volume (liquid). A regular ounce (oz) measures weight/mass. 1 US fl oz = 29.574 mL. 1 oz (weight) = 28.35 grams. Water happens to have about 1 fl oz ≈ 1 oz by weight, but other liquids differ.' },
    ],
  },

  // ── MORE MATH ──────────────────────────────────────────────────────────────

  'how-to-scientific-notation': {
    title: 'How to Write Numbers in Scientific Notation – Step-by-Step',
    description: 'Learn how to convert numbers to and from scientific notation. Includes examples of very large and very small numbers used in science, physics, and engineering.',
    toolSlug: 'scientific-notation',
    toolPath: '/calculators/mathematics/scientific-notation',
    pageType: 'how-to',
    hero: {
      heading: 'Scientific Notation: a × 10ⁿ',
      subheading: 'Scientific notation makes very large and very small numbers manageable. From the distance to stars to the size of atoms — learn to convert any number to and from scientific notation with confidence.',
    },
    steps: [
      { title: 'Write the number with one non-zero digit before the decimal', detail: 'Move the decimal point so there is exactly one non-zero digit before it. For 4,500,000: move decimal 6 places left → 4.5.' },
      { title: 'Count the decimal places moved', detail: 'The number of places moved is the exponent. Moving left = positive exponent. Moving right = negative exponent. For 4,500,000: moved 6 places left → 10⁶.' },
      { title: 'Write as a × 10ⁿ', detail: '4,500,000 = 4.5 × 10⁶. For 0.000045: decimal moves 5 places right → 4.5 × 10⁻⁵.' },
      { title: 'Converting back from scientific notation', detail: 'Multiply a by 10ⁿ: positive n moves decimal right (larger number), negative n moves decimal left (smaller number). 3.2 × 10⁴ = 32,000.' },
    ],
    examples: [
      { title: 'Distance to the Sun', given: '149,600,000 km', solution: 'Move decimal 8 places left: 1.496; exponent = 8', answer: '1.496 × 10⁸ km' },
      { title: 'Size of a hydrogen atom', given: '0.0000000001 m (1 Ångström)', solution: 'Move decimal 10 places right: 1.0; exponent = −10', answer: '1.0 × 10⁻¹⁰ m' },
      { title: 'Avogadro\'s number', given: '602,200,000,000,000,000,000,000', solution: 'Move decimal 23 places left: 6.022; exponent = 23', answer: '6.022 × 10²³ (Avogadro\'s number)' },
    ],
    table: {
      headers: ['Standard Notation', 'Scientific Notation', 'Context'],
      rows: [
        ['0.001', '1 × 10⁻³', '1 millimeter in meters'],
        ['0.000001', '1 × 10⁻⁶', '1 micrometer'],
        ['1,000', '1 × 10³', '1 kilometer in meters'],
        ['1,000,000', '1 × 10⁶', '1 megawatt in watts'],
        ['1,000,000,000', '1 × 10⁹', '1 gigabyte in bytes'],
        ['6.674 × 10⁻¹¹', '0.00000000006674', 'Gravitational constant (G)'],
        ['3 × 10⁸', '300,000,000', 'Speed of light (m/s)'],
      ],
    },
    prose: [
      { heading: 'Why Scientists Use Scientific Notation', body: 'Writing the distance from Earth to the nearest star as 40,208,000,000,000,000 m is impractical and error-prone. Scientific notation (4.0208 × 10¹⁶ m) is compact, clear, and shows precision: the number of significant figures is explicitly communicated by the digits before × 10ⁿ. Calculators and computers use scientific notation (often written as 4.0208E16) to handle numbers that would overflow standard display.' },
    ],
    faqs: [
      { q: 'What is scientific notation?', a: 'Scientific notation expresses a number as a × 10ⁿ, where 1 ≤ |a| < 10 and n is an integer. It handles very large or very small numbers compactly: 0.0000045 = 4.5 × 10⁻⁶.' },
      { q: 'How do I multiply numbers in scientific notation?', a: 'Multiply the coefficients and add the exponents: (3 × 10⁴) × (2 × 10³) = (3 × 2) × 10^(4+3) = 6 × 10⁷.' },
      { q: 'How do I add numbers in scientific notation?', a: 'First make exponents equal by adjusting the coefficient, then add coefficients: (3 × 10⁴) + (2 × 10³) = (3 × 10⁴) + (0.2 × 10⁴) = 3.2 × 10⁴.' },
      { q: 'What does E mean on a calculator?', a: 'The "E" notation (like 4.5E6) means 4.5 × 10⁶. On calculators, EE or EXP button enters the exponent. 4.5E-6 = 4.5 × 10⁻⁶ = 0.0000045.' },
      { q: 'What is the difference between scientific and engineering notation?', a: 'Engineering notation requires the exponent to be a multiple of 3 (10³, 10⁶, 10⁹) corresponding to kilo, mega, giga prefixes. Scientific notation allows any integer exponent. For 45,000: scientific = 4.5 × 10⁴; engineering = 45 × 10³ (= 45 kilo).' },
      { q: 'How many significant figures does scientific notation show?', a: 'The digits in the coefficient (a) indicate significant figures. 4.5 × 10⁶ has 2 significant figures. 4.500 × 10⁶ has 4 significant figures. This is one advantage over standard notation (trailing zeros can be ambiguous).' },
      { q: 'How do I convert from scientific to standard notation?', a: 'Positive exponent: move decimal right n places (adding zeros): 3.5 × 10⁵ = 350,000. Negative exponent: move decimal left n places: 3.5 × 10⁻⁴ = 0.00035.' },
      { q: 'What is Avogadro\'s number in scientific notation?', a: '6.022 × 10²³ — the number of particles (atoms, molecules) in one mole of substance. It is an enormous number: 602,200,000,000,000,000,000,000.' },
    ],
  },

  'exponent-formula': {
    title: 'Exponent Rules and Formulas – Power Laws Explained',
    description: 'Learn all exponent rules: product rule, quotient rule, power rule, zero exponent, and negative exponents. Includes worked examples and applications.',
    toolSlug: 'exponents',
    toolPath: '/calculators/mathematics/exponents',
    pageType: 'formula',
    mathSolverEduType: 'Algebra',
    hero: {
      heading: 'Exponent Rules: aⁿ × aᵐ = aⁿ⁺ᵐ and More',
      subheading: 'Exponent rules (laws of exponents) let you simplify expressions with powers. Master the six core rules and you can handle any exponent problem in algebra, calculus, and beyond.',
    },
    formula: {
      expression: 'Product: aⁿ × aᵐ = aⁿ⁺ᵐ  |  Quotient: aⁿ / aᵐ = aⁿ⁻ᵐ  |  Power: (aⁿ)ᵐ = aⁿˣᵐ  |  Zero: a⁰ = 1  |  Negative: a⁻ⁿ = 1/aⁿ  |  Fractional: a^(1/n) = ⁿ√a',
      explanation: 'Exponents represent repeated multiplication. The rules govern how to combine expressions with exponents. The product rule adds exponents when multiplying same-base terms. The quotient rule subtracts them when dividing. The power rule multiplies exponents when raising a power to another power. Zero exponent always gives 1. Negative exponents give reciprocals. Fractional exponents give roots.',
      variables: [
        { symbol: 'a', meaning: 'The base (any real number, a ≠ 0 for some rules)' },
        { symbol: 'n, m', meaning: 'The exponents (can be integers, fractions, or negatives)' },
        { symbol: 'aⁿ', meaning: 'a raised to the power n = a multiplied by itself n times' },
      ],
    },
    steps: [
      { title: 'Identify the bases and exponents', detail: 'Check if the bases are the same (required for product/quotient rules). If bases differ, the rules apply within each base separately.' },
      { title: 'Apply the appropriate rule', detail: 'Same base, multiplying → add exponents. Same base, dividing → subtract exponents. Power to power → multiply exponents. See the formula list above.' },
      { title: 'Simplify negative and zero exponents', detail: 'a⁰ = 1 (for any non-zero a). a⁻ⁿ = 1/aⁿ. Write final answers with positive exponents unless otherwise required.' },
      { title: 'Handle fractional exponents and roots', detail: 'a^(1/2) = √a; a^(1/3) = ∛a; a^(p/q) = (ᵠ√a)ᵖ. Example: 27^(2/3) = (∛27)² = 3² = 9. Fractional exponents bridge exponent and radical notation.' },
    ],
    examples: [
      { title: 'Product rule', given: '3⁴ × 3² = ?', solution: '3⁴ × 3² = 3^(4+2) = 3⁶', answer: '3⁶ = 729' },
      { title: 'Power rule', given: '(2³)⁴ = ?', solution: '(2³)⁴ = 2^(3×4) = 2¹²', answer: '2¹² = 4,096' },
      { title: 'Negative exponent', given: '5⁻³ = ?', solution: '5⁻³ = 1/5³ = 1/125', answer: '0.008' },
    ],
    table: {
      headers: ['Rule', 'Formula', 'Example'],
      rows: [
        ['Product', 'aⁿ × aᵐ = aⁿ⁺ᵐ', 'x³ × x⁵ = x⁸'],
        ['Quotient', 'aⁿ / aᵐ = aⁿ⁻ᵐ', 'y⁷ / y² = y⁵'],
        ['Power of power', '(aⁿ)ᵐ = aⁿᵐ', '(z²)⁴ = z⁸'],
        ['Power of product', '(ab)ⁿ = aⁿbⁿ', '(2x)³ = 8x³'],
        ['Zero exponent', 'a⁰ = 1', '99⁰ = 1'],
        ['Negative exponent', 'a⁻ⁿ = 1/aⁿ', 'x⁻² = 1/x²'],
        ['Fractional exponent', 'a^(p/q) = (ᵠ√a)ᵖ', '8^(2/3) = (∛8)² = 4'],
      ],
    },
    prose: [
      { heading: 'Why Exponent Rules Work', body: 'Exponent rules are not arbitrary — they follow directly from the definition. aⁿ means a multiplied n times. So a³ × a² = (a×a×a) × (a×a) = a⁵ = a^(3+2). The rules encode these patterns in compact form. The zero exponent rule (a⁰ = 1) follows from the quotient rule: aⁿ/aⁿ = aⁿ⁻ⁿ = a⁰, and any number divided by itself = 1.' },
      { heading: 'Exponents in Science and Technology', body: 'Exponents are everywhere in modern life. Computer storage uses powers of 2: 1 KB = 2¹⁰ bytes, 1 MB = 2²⁰, 1 GB = 2³⁰. The Richter scale for earthquakes is logarithmic (base 10): each step is 10× stronger. pH in chemistry is −log₁₀[H⁺]. Sound decibels, stellar magnitudes, and radio signal strength all use logarithmic (exponent-based) scales. Scientific notation itself is a direct application of powers of 10.' },
    ],
    faqs: [
      { q: 'What are the rules of exponents?', a: 'Six main rules: Product (add exponents), Quotient (subtract), Power (multiply), Zero exponent (= 1), Negative exponent (= 1/aⁿ), Fractional exponent (= nth root). Memorize these and you can simplify any power expression.' },
      { q: 'What is anything to the power of 0?', a: 'Any non-zero number to the power 0 equals 1: a⁰ = 1. The value 0⁰ is undefined or considered 1 in combinatorics contexts.' },
      { q: 'What is a negative exponent?', a: 'A negative exponent means the reciprocal: a⁻ⁿ = 1/aⁿ. So 2⁻³ = 1/2³ = 1/8 = 0.125.' },
      { q: 'What is a fractional exponent?', a: 'A fractional exponent represents a root: a^(1/n) = ⁿ√a. So 9^(1/2) = √9 = 3. 8^(1/3) = ∛8 = 2. Generally: a^(p/q) = (ᵠ√a)ᵖ.' },
      { q: 'Can exponents be negative or fractional?', a: 'Yes. Exponents can be any real number: negative, fractional, irrational. 2^π ≈ 8.825. 4^(−1/2) = 1/√4 = 0.5. Calculus handles irrational exponents rigorously.' },
      { q: 'How do I solve equations with exponents?', a: 'If the unknown is in the exponent: use logarithms (2ˣ = 16 → x log 2 = log 16 → x = 4). If the unknown is the base: take the nth root (x³ = 27 → x = ∛27 = 3).' },
      { q: 'What is an exponential function?', a: 'An exponential function has the variable in the exponent: f(x) = aˣ. Exponential growth (a > 1) increases rapidly; exponential decay (0 < a < 1) decreases toward zero. The natural exponential function f(x) = eˣ is especially important in mathematics.' },
      { q: 'What is the difference between 2³ and 3²?', a: '2³ = 2×2×2 = 8. 3² = 3×3 = 9. Exponentiation is NOT commutative: aⁿ ≠ nᵃ in general.' },
    ],
  },

  'percentage-change-formula': {
    title: 'Percentage Change Formula – Increase & Decrease',
    description: 'Learn the percentage change formula: % Change = (New − Old) / Old × 100. Calculate percentage increase, decrease, and error with step-by-step examples.',
    toolSlug: 'percentage',
    toolPath: '/calculators/mathematics/percentage',
    pageType: 'formula',
    mathSolverEduType: 'Arithmetic',
    hero: {
      heading: 'Percentage Change: (New − Old) / Old × 100',
      subheading: 'Percentage change measures how much a value has increased or decreased relative to its original value. Learn the formula, understand the difference between percentage change and percentage difference, and avoid common errors.',
    },
    formula: {
      expression: '% Change = (New Value − Old Value) / Old Value × 100  |  % Increase: result is positive  |  % Decrease: result is negative',
      explanation: 'Percentage change compares a new value to an old (reference) value. Divide the difference by the original value and multiply by 100. Positive result = increase; negative result = decrease. Note: percentage change is NOT symmetric — a 50% decrease followed by a 50% increase does not return to the original value.',
      variables: [
        { symbol: 'New Value', meaning: 'The updated or final measurement' },
        { symbol: 'Old Value', meaning: 'The original or starting measurement (the reference)' },
        { symbol: '% Change', meaning: 'Positive = increase, negative = decrease' },
      ],
    },
    steps: [
      { title: 'Subtract old value from new value', detail: 'Difference = New − Old. For old = 80, new = 100: difference = 20.' },
      { title: 'Divide by the old value', detail: 'Rate = Difference / Old = 20 / 80 = 0.25.' },
      { title: 'Multiply by 100 to get percentage', detail: '% Change = 0.25 × 100 = 25%. A 25% increase.' },
      { title: 'Interpret the sign', detail: 'Positive result: increase. Negative result: decrease. A result of −30% means the value dropped by 30% from the original.' },
    ],
    examples: [
      { title: 'Salary increase', given: 'Old salary: $60,000. New salary: $66,000', solution: '% Change = (66,000 − 60,000) / 60,000 × 100 = 6,000/60,000 × 100', answer: '10% salary increase' },
      { title: 'Stock price drop', given: 'Stock: was $150, now $120', solution: '% Change = (120 − 150) / 150 × 100 = −30/150 × 100', answer: '−20% decrease (stock lost 20% of its value)' },
      { title: 'Asymmetry trap', given: 'Price drops 50%, then increases 50%', solution: '$100 → $50 (−50%) → $75 (+50%)', answer: 'Final value = $75, not $100. Percentage changes are NOT reversible in equal amounts.' },
    ],
    table: {
      headers: ['Old Value', 'New Value', '% Change', 'Interpretation'],
      rows: [
        ['100', '110', '+10%', '10% increase'],
        ['100', '90', '−10%', '10% decrease'],
        ['200', '250', '+25%', '25% increase'],
        ['80', '100', '+25%', '25% increase'],
        ['100', '50', '−50%', '50% decrease'],
        ['50', '100', '+100%', '100% increase (doubled)'],
      ],
    },
    prose: [
      { heading: 'Percentage Change vs Percentage Difference', body: 'Percentage change uses one value as the reference point (usually the older/original). Percentage difference is symmetric — it compares two values without a designated "original": % Difference = |A − B| / ((A + B)/2) × 100. Use percentage change when one value is clearly the baseline (before/after, budget/actual). Use percentage difference when neither value is the reference.' },
    ],
    faqs: [
      { q: 'What is the formula for percentage change?', a: '% Change = (New − Old) / Old × 100. Positive means increase; negative means decrease.' },
      { q: 'How is percentage change different from percentage difference?', a: 'Change uses one value as reference (old/new). Difference is symmetric: |A−B|/average × 100. Use change for before/after comparisons; difference when no clear reference exists.' },
      { q: 'Why can\'t I average percentage changes?', a: 'A 10% gain and a 10% loss do not cancel out. $100 × 1.10 × 0.90 = $99. Always use geometric mean for combining percentage changes over time.' },
      { q: 'What is a 100% increase?', a: 'A 100% increase means the value doubled. Old = $50, New = $100: (100−50)/50 × 100 = 100%.' },
      { q: 'What does a negative percentage change mean?', a: 'A negative percentage change indicates a decrease. −25% means the new value is 25% less than the original.' },
      { q: 'How do I calculate the original value from a percentage change?', a: 'Original = New Value / (1 + % Change/100). If a value increased 20% to reach $180: Original = 180 / 1.20 = $150.' },
      { q: 'What is CAGR?', a: 'Compound Annual Growth Rate = ((Final/Initial)^(1/years) − 1) × 100. It gives the equivalent constant annual percentage change that produces the same cumulative result over multiple years.' },
      { q: 'How does percentage change relate to basis points?', a: '1 basis point = 0.01 percentage point. Used in finance: an interest rate change from 5.00% to 5.25% is a 25 basis point increase. Not the same as a 25% change (which would be from 5% to 6.25%).' },
    ],
  },

  'gravitational-force-formula': {
    title: 'Gravitational Force Formula – Newton\'s Law of Gravitation',
    description: 'Learn the gravitational force formula F = Gm₁m₂/r². Calculate gravitational attraction between any two masses with worked examples from everyday to astronomical scale.',
    toolSlug: 'gravity',
    toolPath: '/calculators/physics/gravity',
    pageType: 'formula',
    mathSolverEduType: 'Physics',
    hero: {
      heading: 'Gravitational Force: F = G × m₁ × m₂ / r²',
      subheading: 'Newton\'s Law of Universal Gravitation explains the attractive force between any two masses. From falling apples to orbiting planets, this formula governs everything pulled by gravity.',
    },
    formula: {
      expression: 'F = G × m₁ × m₂ / r²  |  G = 6.674 × 10⁻¹¹ N·m²/kg²  |  g = GM/R² (surface gravity)',
      explanation: 'The gravitational force between two objects is proportional to each mass and inversely proportional to the square of the distance between them (inverse square law). G is the universal gravitational constant. Surface gravity (g = 9.81 m/s² on Earth) is calculated from Earth\'s mass and radius using this formula.',
      variables: [
        { symbol: 'F', meaning: 'Gravitational force between the two objects (Newtons)' },
        { symbol: 'G', meaning: 'Universal gravitational constant = 6.674 × 10⁻¹¹ N·m²/kg²' },
        { symbol: 'm₁, m₂', meaning: 'Masses of the two objects in kilograms' },
        { symbol: 'r', meaning: 'Distance between the centers of the two objects in meters' },
      ],
    },
    steps: [
      { title: 'Identify masses and separation', detail: 'Find m₁ and m₂ in kg, and r (center-to-center distance) in meters. For large objects like planets, r is from center to center.' },
      { title: 'Multiply the masses', detail: 'm₁ × m₂. For Earth (5.97 × 10²⁴ kg) and Moon (7.35 × 10²² kg): product = 4.39 × 10⁴⁷ kg².' },
      { title: 'Divide by r squared', detail: 'r² where r = center-to-center distance in meters. Earth-Moon distance: 3.84 × 10⁸ m; r² = 1.47 × 10¹⁷ m².' },
      { title: 'Multiply by G', detail: 'F = 6.674 × 10⁻¹¹ × (m₁ × m₂) / r². Result is in Newtons.' },
    ],
    examples: [
      { title: 'Earth-Moon gravitational pull', given: 'Earth mass: 5.97×10²⁴ kg, Moon mass: 7.35×10²² kg, distance: 3.84×10⁸ m', solution: 'F = 6.674×10⁻¹¹ × 5.97×10²⁴ × 7.35×10²² / (3.84×10⁸)²', answer: 'F ≈ 1.98 × 10²⁰ N (the force keeping the Moon in orbit)' },
      { title: 'Weight as gravity', given: 'Person mass: 70 kg, Earth mass: 5.97×10²⁴ kg, Earth radius: 6.37×10⁶ m', solution: 'F = 6.674×10⁻¹¹ × 70 × 5.97×10²⁴ / (6.37×10⁶)² = 70 × 9.81', answer: 'F = 686.7 N = 154.4 lbs (their weight)' },
    ],
    table: {
      headers: ['Planet/Moon', 'Surface Gravity (m/s²)', 'Weight of 70 kg person'],
      rows: [
        ['Mercury', '3.70', '259 N (58 lbs)'],
        ['Venus', '8.87', '621 N (140 lbs)'],
        ['Earth', '9.81', '687 N (154 lbs)'],
        ['Moon', '1.62', '113 N (25 lbs)'],
        ['Mars', '3.72', '260 N (58 lbs)'],
        ['Jupiter', '24.79', '1,735 N (390 lbs)'],
        ['Saturn', '10.44', '731 N (164 lbs)'],
      ],
    },
    prose: [
      { heading: 'The Inverse Square Law', body: 'Gravity weakens with the square of distance. Double the distance → gravitational force drops to 1/4. Triple the distance → force drops to 1/9. This is why astronauts feel weightless in orbit: they are far enough from Earth that gravity is weaker, and they are in constant free fall. At the International Space Station altitude (400 km), gravity is still about 89% as strong as on the surface.' },
    ],
    faqs: [
      { q: 'What is Newton\'s law of universal gravitation?', a: 'F = Gm₁m₂/r² — the gravitational force between two masses is proportional to each mass and inversely proportional to the square of their separation. Every mass attracts every other mass.' },
      { q: 'Why is G so small?', a: 'G = 6.674 × 10⁻¹¹ means gravity is an extremely weak force compared to electromagnetic, strong nuclear, and weak nuclear forces. You need planetary-scale masses before gravity dominates.' },
      { q: 'Is gravity the same everywhere on Earth?', a: 'Nearly, but not exactly. g varies from about 9.78 m/s² at the equator to 9.83 m/s² at the poles due to Earth\'s equatorial bulge and rotation. Altitude also reduces g: at 1,000 m elevation, g ≈ 9.807 m/s².' },
      { q: 'What is the gravitational constant G?', a: 'G = 6.674 × 10⁻¹¹ N·m²/kg² is the universal constant of proportionality in Newton\'s law. It was first measured by Cavendish in 1798 using a torsion balance — a delicate experiment to measure the tiny attraction between lead spheres.' },
      { q: 'Does gravity travel at the speed of light?', a: 'Yes. According to General Relativity, gravitational effects propagate at the speed of light (c). Gravitational waves — ripples in spacetime — travel at c and were directly detected by LIGO in 2015.' },
      { q: 'What is the difference between gravity and gravitation?', a: 'Gravitation is the universal attractive force between masses (Newton\'s formula). Gravity specifically refers to the gravitational force experienced on a planet\'s surface (g = 9.81 m/s² on Earth). Gravity is a special case of universal gravitation.' },
      { q: 'Why does the Moon not fall to Earth?', a: 'The Moon is falling toward Earth — but it also has tangential velocity (≈1 km/s). The combination of falling and forward motion results in a circular orbit. The Moon constantly "misses" Earth as it falls around it.' },
      { q: 'How does general relativity change Newton\'s formula?', a: 'Newton\'s law is very accurate for most everyday situations. Einstein\'s General Relativity describes gravity as curvature of spacetime, providing corrections important at very high masses (black holes), very high speeds, or very precise measurements (GPS satellites require relativistic corrections).' },
    ],
  },

  'net-worth-formula': {
    title: 'Net Worth Formula – Assets Minus Liabilities',
    description: 'Learn the net worth formula: Net Worth = Assets − Liabilities. Calculate your personal or business net worth, track wealth growth, and understand what counts as assets and liabilities.',
    toolSlug: 'net-worth',
    toolPath: '/calculators/finance/net-worth',
    pageType: 'formula',
    hero: {
      heading: 'Net Worth Formula: Assets − Liabilities',
      subheading: 'Net worth is your financial scoreboard — the clearest single number representing your financial health. Learn what counts as assets and liabilities, how to calculate net worth accurately, and how to use it to track financial progress.',
    },
    formula: {
      expression: 'Net Worth = Total Assets − Total Liabilities  |  Assets: cash + investments + property + vehicles  |  Liabilities: mortgage + loans + credit cards + other debt',
      explanation: 'Net worth is calculated by listing everything you own (assets) and subtracting everything you owe (liabilities). Positive net worth means assets exceed debts. Negative net worth means debts exceed assets (common early in life due to student loans or mortgages). Increasing net worth over time is the fundamental measure of wealth building.',
      variables: [
        { symbol: 'Assets', meaning: 'Everything you own that has financial value' },
        { symbol: 'Liabilities', meaning: 'Everything you owe — all debts and financial obligations' },
        { symbol: 'Net Worth', meaning: 'Assets minus Liabilities — your total financial position' },
      ],
    },
    steps: [
      { title: 'List all assets with current values', detail: 'Include: bank accounts, retirement accounts, investment portfolios, real estate market value, vehicle value (Kelley Blue Book), business equity, valuable personal property. Use current market values, not purchase prices.' },
      { title: 'List all liabilities with current balances', detail: 'Include: mortgage balance, car loans, student loans, credit card balances, personal loans, medical debt, any other outstanding debts. Use current payoff balances.' },
      { title: 'Sum each category', detail: 'Total Assets = sum of all asset values. Total Liabilities = sum of all debt balances.' },
      { title: 'Subtract liabilities from assets', detail: 'Net Worth = Total Assets − Total Liabilities. Track this number over time — increasing net worth means you are building wealth.' },
    ],
    examples: [
      { title: '35-year-old couple', given: 'Assets: Checking $8K, savings $25K, 401k $120K, home value $350K, car $25K = $528K. Liabilities: Mortgage $280K, car loan $18K, student loans $15K, credit cards $3K = $316K.', solution: 'Net Worth = $528,000 − $316,000', answer: 'Net Worth = $212,000' },
      { title: 'Recent graduate', given: 'Assets: $3,000 (savings) + $8,000 (car). Liabilities: $45,000 student loans + $8,000 car loan.', solution: 'Net Worth = $11,000 − $53,000', answer: 'Net Worth = −$42,000 (negative, but common for new graduates — improves with income)' },
    ],
    table: {
      headers: ['Age Group', 'Median Net Worth (US)', 'Key Driver'],
      rows: [
        ['Under 35', '~$14,000', 'Student loans common; career starting'],
        ['35–44', '~$91,000', 'Career growth, home equity building'],
        ['45–54', '~$168,000', 'Peak earnings, retirement growth'],
        ['55–64', '~$213,000', 'Pre-retirement accumulation'],
        ['65–74', '~$266,000', 'Retirement assets, paid-off home'],
        ['75+', '~$254,000', 'Drawdown begins'],
      ],
    },
    prose: [
      { heading: 'Why Track Net Worth Regularly?', body: 'Tracking net worth monthly or quarterly reveals whether your financial decisions are working. A rising income with flat net worth means spending is absorbing all gains. Falling net worth despite income signals a debt or spending problem. Net worth also tracks the compounding effect: the same income produces faster net worth growth as debts are eliminated and investments compound.' },
      { heading: 'Net Worth at Different Life Stages', body: 'Negative net worth is normal in early adulthood due to student loans. Focus on the trend, not the number. In your 30s, home equity and retirement accounts begin to dominate. A common milestone benchmark: 1× your annual income saved by 30, 3× by 40, 7× by 55. The median US net worth is ~$192,000 (2022), but the average is ~$1.06 million — skewed upward by the ultra-wealthy. The median is more relevant for typical households.' },
    ],
    faqs: [
      { q: 'What is net worth?', a: 'Net worth = Assets − Liabilities. It is the total financial value you have built (or owe). A positive net worth means you own more than you owe.' },
      { q: 'Should I include my car as an asset?', a: 'Yes, include the current market value (not purchase price). However, cars are depreciating assets — their value decreases over time, unlike real estate or investments.' },
      { q: 'Is a house counted in net worth?', a: 'Yes — use the current market value minus the remaining mortgage balance (which equals home equity). Example: $400K home with $300K mortgage = $100K of equity (net contribution to net worth).' },
      { q: 'What is a good net worth by age?', a: 'A common rule: target net worth = your age × your annual income / 10. By 40 with $80K income: target = 40 × 80K / 10 = $320K. The Millionaire Next Door rule suggests 1× annual income at 30, 3× at 40, 5× at 50, 7× at 60.' },
      { q: 'Should I include pension or Social Security in net worth?', a: 'Pension present value can be included (estimate as annual benefit × 25 using the 4% rule). Social Security is typically not included in personal net worth calculations as it is not an owned asset. Include 401k, IRA, and investment accounts.' },
      { q: 'Can you have a high income and low net worth?', a: 'Absolutely. High earners with expensive lifestyles, high debt, or poor savings may have low or negative net worth. Wealth is built through the gap between income and spending, not income alone.' },
      { q: 'How do I increase my net worth?', a: 'Two levers: grow assets (invest, buy appreciating assets, save) and reduce liabilities (pay off debts, especially high-interest). The fastest route is doing both simultaneously: aggressive debt paydown while maintaining contributions to tax-advantaged retirement accounts.' },
      { q: 'What is liquid net worth?', a: 'Liquid net worth includes only easily accessible assets (cash, stocks, bonds) minus liabilities — excluding illiquid assets like real estate, business equity, or retirement accounts with penalties. It shows what you could access quickly in an emergency.' },
    ],
  },

  'time-zone-formula': {
    title: 'Time Zone Formula – How to Convert Between Time Zones',
    description: 'Learn how to convert between time zones using UTC offsets. Covers DST, UTC±offset arithmetic, and a world time zone reference table for travel and business.',
    toolSlug: 'time-zone',
    toolPath: '/calculators/converters/time-zone',
    pageType: 'formula',
    hero: {
      heading: 'Time Zone Conversion: Local Time = UTC + Offset',
      subheading: 'Time zones are defined by their UTC offset (e.g., UTC+5:30 for India, UTC-5 for Eastern US). Learn how to convert any local time to another time zone, handle Daylight Saving Time, and coordinate across continents.',
    },
    formula: {
      expression: 'Local Time = UTC + Offset  |  UTC = Local Time − Offset  |  Time Difference = Offset₂ − Offset₁  |  If result < 0: add 24h; if > 24: subtract 24h',
      explanation: 'Every time zone is expressed as an offset from Coordinated Universal Time (UTC). To convert between zones: find each zone\'s UTC offset, compute the difference, and apply it. UTC offsets range from UTC-12 (Baker Island) to UTC+14 (Line Islands). Many zones also observe Daylight Saving Time (DST), shifting the offset by +1 hour during summer months.',
      variables: [
        { symbol: 'UTC', meaning: 'Coordinated Universal Time — the global time standard (replaces GMT for precise use)' },
        { symbol: 'Offset', meaning: 'Hours (and sometimes minutes) added to or subtracted from UTC to get local time' },
        { symbol: 'DST', meaning: 'Daylight Saving Time — clocks advance 1 hour in spring in many countries' },
        { symbol: 'Time Difference', meaning: 'Offset₂ − Offset₁ — how many hours behind or ahead one zone is from another' },
      ],
    },
    steps: [
      { title: 'Find the UTC offset for each time zone', detail: 'Eastern US (ET): UTC-5 (standard) / UTC-4 (DST). Central European: UTC+1 (standard) / UTC+2 (DST). India (IST): UTC+5:30. Japan (JST): UTC+9. Australia Eastern: UTC+10 / UTC+11 (DST).' },
      { title: 'Convert your local time to UTC', detail: 'UTC = Local Time − Offset. If it\'s 3:00 PM EDT (UTC-4): UTC = 15:00 − (−4) = 15:00 + 4 = 19:00 UTC.' },
      { title: 'Add the target zone\'s offset', detail: 'Target Local Time = UTC + Target Offset. To find London time (UTC+1 BST): 19:00 + 1 = 20:00 BST.' },
      { title: 'Adjust for day boundaries', detail: 'If the result is < 0:00, add 24 hours and subtract one day. If ≥ 24:00, subtract 24 hours and add one day. Example: UTC 23:00 + 8 hours = 31:00 → 7:00 next day.' },
      { title: 'Account for DST if applicable', detail: 'Check if DST is currently in effect for the source and target zones. DST rules vary by country — the US and EU switch on different dates. Some countries (Japan, India, China) do not observe DST at all.' },
    ],
    examples: [
      { title: 'New York to London', given: '9:00 AM EST (UTC-5) in New York — what time is it in London (UTC+0 GMT)?', solution: 'UTC = 09:00 − (−5) = 14:00. London = 14:00 + 0 = 14:00 GMT', answer: '2:00 PM GMT in London' },
      { title: 'Los Angeles to Tokyo', given: '10:00 AM PDT (UTC-7) in Los Angeles — what time is it in Tokyo (UTC+9)?', solution: 'UTC = 10:00 + 7 = 17:00. Tokyo = 17:00 + 9 = 26:00 → 02:00 next day', answer: '2:00 AM next day in Tokyo (JST)' },
      { title: 'London to Mumbai', given: '12:00 PM BST (UTC+1) in London — what time in Mumbai (UTC+5:30)?', solution: 'UTC = 12:00 − 1 = 11:00. Mumbai = 11:00 + 5:30 = 16:30', answer: '4:30 PM IST in Mumbai' },
    ],
    table: {
      headers: ['City / Zone', 'Standard Offset', 'DST Offset', 'DST Observed?'],
      rows: [
        ['New York (ET)', 'UTC-5', 'UTC-4', 'Yes (Mar–Nov)'],
        ['Los Angeles (PT)', 'UTC-8', 'UTC-7', 'Yes (Mar–Nov)'],
        ['London (GMT/BST)', 'UTC+0', 'UTC+1', 'Yes (Mar–Oct)'],
        ['Paris / Berlin (CET)', 'UTC+1', 'UTC+2', 'Yes (Mar–Oct)'],
        ['Dubai (GST)', 'UTC+4', 'UTC+4', 'No'],
        ['Mumbai (IST)', 'UTC+5:30', 'UTC+5:30', 'No'],
        ['Shanghai / Singapore', 'UTC+8', 'UTC+8', 'No'],
        ['Tokyo (JST)', 'UTC+9', 'UTC+9', 'No'],
        ['Sydney (AEST)', 'UTC+10', 'UTC+11', 'Yes (Oct–Apr)'],
      ],
    },
    prose: [
      { heading: 'Why Time Zones Exist — and Why They Are Messy', body: 'Before railroads, every town set its clocks to local solar noon. When rail travel made consistency essential, the US adopted 4 standard time zones in 1883; international standardization came at the 1884 Prime Meridian Conference. Today there are over 38 distinct UTC offsets (including half-hour and quarter-hour offsets like India\'s UTC+5:30 and Nepal\'s UTC+5:45). Politics complicates things: China uses a single time zone (UTC+8) for its entire vast width, creating extreme solar-time mismatches in the west.' },
      { heading: 'Business and Travel Best Practices', body: 'When scheduling across time zones: always specify UTC or use a shared reference (e.g., "9:00 AM ET"). For meeting invitations, calendar apps like Google Calendar automatically convert to each attendee\'s local time. During DST transitions, double-check times — the US and EU switch DST on different Sundays, creating a 2-week window where the usual offset between zones is wrong. For software: store all timestamps in UTC and convert to local time only for display.' },
    ],
    faqs: [
      { q: 'What is UTC?', a: 'Coordinated Universal Time (UTC) is the global time standard, not adjusted for daylight saving. It replaced Greenwich Mean Time (GMT) for scientific purposes. UTC and GMT differ by at most 0.9 seconds; for everyday use they are the same.' },
      { q: 'What is the difference between GMT and UTC?', a: 'GMT is a time zone (UTC+0). UTC is a time standard maintained by atomic clocks. They show the same time in practice, but UTC is the precise standard; GMT is the historical and colloquial term. The UK uses GMT in winter and BST (UTC+1) in summer.' },
      { q: 'Why does India have a half-hour offset?', a: 'India (UTC+5:30) uses a half-hour offset because a full UTC+5 would place sunrise too late in the east, while UTC+6 would place it too early in the west. The compromise of +5:30 was chosen to best serve the entire subcontinent.' },
      { q: 'When does Daylight Saving Time change?', a: 'In the US: clocks spring forward on the second Sunday of March, fall back on the first Sunday of November. In the EU: last Sunday of March and last Sunday of October. Many countries do not observe DST at all, including Japan, China, India, and most of Africa.' },
      { q: 'What is the International Date Line?', a: 'The International Date Line (IDL) runs roughly along the 180° meridian in the Pacific Ocean. Crossing it westward advances the date by one day; crossing eastward goes back one day. The line zigzags around island nations to avoid splitting countries across two dates.' },
      { q: 'How do I schedule a meeting across many time zones?', a: 'Use a shared UTC reference or a world clock tool. Find overlapping business hours — often challenging between Asia-Pacific and Americas. A meeting at 9:00 AM ET is 22:00 JST (Japan) — too late. Try 8:00 AM PT / 11:00 AM ET / 24:00 JST — still difficult. Consider alternating inconvenient times fairly.' },
      { q: 'Why do some countries have unusual time zones like UTC+5:45?', a: 'Nepal uses UTC+5:45 — the only country with a 45-minute offset. It was chosen so Nepal\'s time would differ visibly from both India (UTC+5:30) and China (UTC+8) to assert national distinctiveness. UTC offsets are determined by each country\'s government, not by any international mandate.' },
      { q: 'What is epoch/Unix time?', a: 'Unix time (epoch) is the number of seconds since January 1, 1970 00:00:00 UTC. It is how computers internally store timestamps — timezone-independent. As of 2026, Unix time is approximately 1,750,000,000 seconds. Convert to human-readable time by adding the local UTC offset.' },
    ],
  },

  'how-to-calculate-tip': {
    title: 'How to Calculate a Tip – Step-by-Step Tip Guide',
    description: 'Learn how to calculate a tip quickly for any bill amount. Covers the tip formula, standard tip percentages, how to split tips, and mental math shortcuts.',
    toolSlug: 'tip',
    toolPath: '/calculators/other/tip',
    pageType: 'how-to',
    hero: {
      heading: 'How to Calculate a Tip: Bill × Tip % = Tip Amount',
      subheading: 'Tipping etiquette and math made simple. Learn the formula, standard percentages for different services, mental shortcuts, and how to split tips evenly across a group.',
    },
    steps: [
      { title: 'Determine the pre-tax bill amount', detail: 'Tip should be calculated on the pre-tax bill, not the total including tax. If your bill is $45.00 with $3.60 tax, tip on $45.00, not $48.60.' },
      { title: 'Choose a tip percentage', detail: 'Standard US tipping: Restaurant servers: 18–20% (good service), 15% (adequate), 25%+ (exceptional). Bartenders: $1–2/drink or 15–20% of tab. Delivery: 10–15% or $3–5 minimum. Taxi/rideshare: 15–20%.' },
      { title: 'Calculate the tip amount', detail: 'Tip = Bill × (Tip % / 100). For $45 at 20%: Tip = $45 × 0.20 = $9.00. Total = $45 + $9 = $54.00.' },
      { title: 'Use mental math shortcuts', detail: '10% shortcut: Move decimal one place left ($45 → $4.50 = 10%). For 20%: double the 10% amount ($4.50 × 2 = $9.00). For 15%: take 10% + half of 10% ($4.50 + $2.25 = $6.75).' },
      { title: 'Split among the group', detail: 'Total per person = (Bill + Tip) / Number of people. For $45 bill + $9 tip = $54 ÷ 4 people = $13.50 each.' },
    ],
    examples: [
      { title: 'Restaurant dinner for 2', given: 'Bill = $68.00, want to tip 20%', solution: 'Tip = $68 × 0.20 = $13.60. Total = $81.60. Per person = $40.80', answer: 'Tip: $13.60. Total: $81.60 ($40.80 each)' },
      { title: 'Quick mental math at $35', given: 'Bill = $35, tip 18%', solution: '10% = $3.50. 5% = $1.75. 3% ≈ $1.05. 18% ≈ $3.50 + $1.75 + $1.05', answer: 'Tip ≈ $6.30. Total ≈ $41.30' },
      { title: 'Food delivery', given: 'Order = $22.50 delivered, tip 15%', solution: 'Tip = $22.50 × 0.15 = $3.38', answer: 'Tip: $3.38 (round up to $3.50 or $4 for convenience)' },
    ],
    table: {
      headers: ['Service', 'Standard Tip', 'Notes'],
      rows: [
        ['Restaurant (sit-down)', '18–20%', 'On pre-tax bill; 25%+ for exceptional service'],
        ['Buffet', '10%', 'Lower since less table service'],
        ['Bartender', '15–20%', 'Or $1–2 per drink'],
        ['Coffee shop (counter)', '0–15%', 'Optional; common to tip $1 or round up'],
        ['Food delivery', '10–15%', 'Minimum $3–5; 20%+ in bad weather'],
        ['Taxi / rideshare', '15–20%', 'App often suggests amounts'],
        ['Hotel housekeeping', '$2–5/night', 'Leave daily (different cleaner each day)'],
        ['Salon / spa', '15–20%', 'Per service provider'],
      ],
    },
    prose: [
      { heading: 'Tipping Culture Around the World', body: 'Tipping is not universal. In Japan, tipping is considered rude — servers may chase you to return the money. In Australia and much of Europe, service charges are often included in the price, and tipping a few coins is appreciated but not expected. In the US, low base wages for service workers (often $2.13/hour for tipped employees, below minimum wage) make tips essential income. When traveling internationally, research local customs to avoid offense or missed expectations.' },
      { heading: 'The Math Behind Splitting Bills Fairly', body: 'When splitting a restaurant bill with different orders: each person pays for their items + their share of the tip. If one person orders significantly more, it is fairest to split based on individual totals rather than equally. For shared appetizers or drinks, divide those costs equally and add each person\'s individual items. Apps like Splitwise or Venmo simplify the math and payment. For even splits: (Subtotal + Tip) / Number of people = each person\'s share.' },
    ],
    faqs: [
      { q: 'How much should I tip at a restaurant?', a: '15–20% for good service, 18–20% is the current US standard. Less than 15% signals dissatisfaction; more than 20% signals exceptional service. Always tip on the pre-tax amount, not the total.' },
      { q: 'How do I calculate 20% tip quickly?', a: 'Move the decimal one place left to get 10%, then double it. $60 bill: 10% = $6.00; 20% = $12.00. Total = $72.00. Takes about 3 seconds once practiced.' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Etiquette says tip on the pre-tax amount. In practice, the difference is small (for a $50 bill with 8% tax, that is tipping on $50 vs $54 — about $0.80 difference at 20%). Many people simply tip on the total for convenience.' },
      { q: 'Is tipping mandatory?', a: 'In the US, tipping is a strong social expectation, not legally required. However, servers depend on tips for their income (often earning $2–3/hour base pay). Not tipping for adequate service is considered inappropriate. Refusing to tip for poor service is acceptable, but consider speaking to the manager first.' },
      { q: 'What is a service charge?', a: 'Some restaurants add an automatic gratuity (typically 18–20%) for large parties. Check your bill before adding an additional tip. Many European restaurants include a service charge in the prices. Always review the receipt.' },
      { q: 'How do I tip when paying by card?', a: 'Tip lines are usually provided on the receipt or card terminal. For restaurant tabs, many terminals now show suggested percentages (18%, 20%, 25%). You can also write in a custom amount. Tips added to cards are typically processed with your payment and received by the server.' },
      { q: 'How much do I tip for takeout?', a: 'Takeout tipping: 0–10% is common, since no table service is provided. However, staff still package and prepare your food. Tipping $1–2 or 5–10% for complex or large takeout orders is appreciated.' },
      { q: 'What is the tip credit for tipped workers?', a: 'In the US, federal law allows employers to pay tipped workers $2.13/hour (the "tip credit"), provided tips bring total pay to at least $7.25/hour. If they do not, the employer must make up the difference. Many states have higher minimums. This system is why tips are so important to service workers\' income.' },
    ],
  },

  // ── REMAINING SQUARE ROOT ENTRY (already in file) ──────────────────────────

  'square-root-formula': {
    title: 'Square Root Formula – How to Calculate √n',
    description: 'Learn how to calculate square roots manually and with formulas. Includes perfect squares table, nth roots, and real-world applications.',
    toolSlug: 'square-root',
    toolPath: '/calculators/mathematics/square-root',
    pageType: 'formula',
    mathSolverEduType: 'Arithmetic',
    hero: {
      heading: 'Square Root: √n = n^(1/2) Explained',
      subheading: 'Understand square roots from the ground up — how to calculate them, recognize perfect squares, and apply the concept to geometry, physics, and algebra problems.'
    },
    formula: {
      expression: '√n = n^(1/2)  |  ∛n = n^(1/3)  |  ⁿ√x = x^(1/n)  |  Simplify: √(a×b) = √a × √b',
      explanation: 'The square root of a number n is the value that, when multiplied by itself, gives n. It is equivalent to raising n to the power of 1/2. The cube root uses the exponent 1/3. For nth roots, raise to the power 1/n. The product rule (√ab = √a × √b) is useful for simplifying radical expressions.',
      variables: [
        { symbol: '√n', meaning: 'Square root of n — the positive value x such that x² = n' },
        { symbol: 'n', meaning: 'The radicand — the number inside the radical sign' },
        { symbol: '∛n', meaning: 'Cube root of n — the value x such that x³ = n' },
        { symbol: 'ⁿ√x', meaning: 'nth root of x — the value y such that yⁿ = x' },
        { symbol: '^(1/n)', meaning: 'Fractional exponent equivalent of nth root' },
      ]
    },
    steps: [
      { title: 'Check if it is a perfect square', detail: 'Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400. If the number is a perfect square, the answer is an integer.' },
      { title: 'Estimate between two perfect squares', detail: 'For non-perfect squares, find the two nearest perfect squares. √50 lies between √49=7 and √64=8, closer to 7. Initial estimate: 7.1.' },
      { title: 'Use the Babylonian method to refine', detail: 'Start with guess g. Improve: new_g = (g + n/g) / 2. Repeat until accurate enough. For √50: g=7, new_g=(7+50/7)/2=(7+7.143)/2=7.071. Accurate to 3 decimal places after 2 iterations.' },
      { title: 'Simplify if possible', detail: 'Factor out perfect squares: √72 = √(36×2) = √36 × √2 = 6√2. Always check if the radicand has perfect square factors.' }
    ],
    examples: [
      { title: 'Perfect square', given: '√144', solution: '12 × 12 = 144', answer: '√144 = 12' },
      { title: 'Non-perfect square (estimation)', given: '√75', solution: '√75 = √(25 × 3) = 5√3 = 5 × 1.73205...', answer: '√75 ≈ 8.660' },
      { title: 'Square root in a physics formula', given: 'Period of a pendulum: T = 2π√(L/g), where L = 2.5 m, g = 9.81 m/s²', solution: 'T = 2π × √(2.5/9.81) = 2π × √0.2549 = 2π × 0.5049', answer: 'T ≈ 3.17 seconds' },
    ],
    table: {
      headers: ['n', '√n', 'n', '√n'],
      rows: [
        ['1', '1.000', '36', '6.000'],
        ['2', '1.414', '49', '7.000'],
        ['3', '1.732', '64', '8.000'],
        ['4', '2.000', '81', '9.000'],
        ['5', '2.236', '100', '10.000'],
        ['9', '3.000', '144', '12.000'],
        ['16', '4.000', '169', '13.000'],
        ['25', '5.000', '225', '15.000'],
      ]
    },
    prose: [
      { heading: 'Irrational Square Roots', body: 'Most square roots are irrational numbers — they cannot be expressed as fractions and their decimal expansions never terminate or repeat. √2 = 1.41421356... is the most famous irrational number, proven by ancient Greek mathematicians. Only square roots of perfect squares (1, 4, 9, 16...) are rational integers.' },
      { heading: 'Square Roots in Geometry and Physics', body: 'Square roots appear constantly in applied mathematics. The Pythagorean theorem requires a square root to find the hypotenuse. The quadratic formula (-b ± √(b²-4ac))/2a needs a square root. The period of a pendulum depends on √(L/g). Standard deviation uses √(Σ(x-μ)²/n). Understanding square roots unlocks these fundamental formulas.' }
    ],
    faqs: [
      { q: 'What is a square root?', a: 'The square root of n is the number that, when multiplied by itself, gives n. √25 = 5 because 5 × 5 = 25. Every positive number has exactly one positive square root.' },
      { q: 'Can you take the square root of a negative number?', a: 'Not in real numbers. However, in complex numbers, √(-1) = i (the imaginary unit). √(-9) = 3i. Complex numbers are used in electrical engineering, quantum mechanics, and signal processing.' },
      { q: 'What is the square root of 2?', a: '√2 ≈ 1.41421356... It is an irrational number, meaning it cannot be expressed as a fraction. It is the diagonal of a unit square (a square with side length 1).' },
      { q: 'How do I calculate square root without a calculator?', a: 'Use the digit-by-digit method (long division for square roots), or the Babylonian/Newton\'s method: guess g, then repeatedly compute (g + n/g)/2 until convergence. Two or three iterations usually give sufficient accuracy.' },
      { q: 'What are perfect squares?', a: 'Perfect squares are squares of integers: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144... Their square roots are integers. The nth perfect square is n².' },
      { q: 'What is the square root of a fraction?', a: '√(a/b) = √a / √b. For example, √(9/16) = √9 / √16 = 3/4. Both numerator and denominator must be positive.' },
      { q: 'How does √ relate to exponents?', a: '√n = n^(1/2). This means the square root is the same as raising to the power of 1/2. Similarly, the cube root ∛n = n^(1/3). This connection to exponents allows square roots to be manipulated using exponent rules.' },
      { q: 'What is the square root of 0?', a: '√0 = 0, because 0 × 0 = 0. Zero is unique in that it is both a perfect square (0 = 0²) and the boundary between positive and negative numbers.' },
    ]
  },

};
