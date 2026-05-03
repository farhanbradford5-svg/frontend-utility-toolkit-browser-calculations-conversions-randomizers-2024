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

  'square-root-formula': {
    title: 'Square Root Formula – How to Calculate √n',
    description: 'Learn how to calculate square roots manually and with formulas. Includes perfect squares table, nth roots, and real-world applications.',
    toolSlug: 'square-root',
    toolPath: '/calculators/mathematics/square-root',
    pageType: 'formula',
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
