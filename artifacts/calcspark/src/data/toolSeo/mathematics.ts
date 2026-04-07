import type { ToolSEOMap } from './index';

export const MATHEMATICS_SEO: ToolSEOMap = {
  'fraction': {
    quickAnswer: 'The Fraction Calculator adds, subtracts, multiplies, and divides fractions. It simplifies results to lowest terms and can convert to mixed numbers or decimals.',
    whatIs: 'The Fraction Calculator performs all four arithmetic operations on fractions (proper, improper, and mixed numbers) and simplifies the result to its lowest terms using the GCD (Greatest Common Divisor). It supports step-by-step solutions, making it a valuable learning tool for students from elementary through high school.',
    howToUse: [
      'Enter the numerator and denominator of the first fraction.',
      'Select the operation (+, -, x, ÷).',
      'Enter the numerator and denominator of the second fraction.',
      'Click Calculate to see the simplified result and step-by-step solution.',
    ],
    formula: 'Addition: a/b + c/d = (ad + bc) / bd. Subtraction: a/b - c/d = (ad - bc) / bd. Multiplication: a/b x c/d = ac/bd. Division: a/b ÷ c/d = a/b x d/c = ad/bc. Always reduce result by GCD of numerator and denominator.',
    examples: [
      { title: 'Fraction Addition', scenario: '3/4 + 2/5.', result: 'LCD = 20. (15/20) + (8/20) = 23/20 = 1 3/20.' },
      { title: 'Fraction Division', scenario: '7/8 ÷ 3/4.', result: '7/8 x 4/3 = 28/24 = 7/6 = 1 1/6.' },
    ],
    useCases: [
      'Homework help for fraction arithmetic.',
      'Recipe scaling involving fractional measurements.',
      'Engineering calculations with fractional dimensions.',
      'Financial calculations involving fractions of ownership or shares.',
    ],
    faqs: [
      { q: 'How do you add fractions with different denominators?', a: 'Find the Least Common Denominator (LCD), convert both fractions to equivalent fractions with that denominator, then add numerators. Example: 1/3 + 1/4. LCD = 12. 4/12 + 3/12 = 7/12.' },
      { q: 'How do you simplify a fraction?', a: 'Find the GCD (Greatest Common Divisor) of numerator and denominator, then divide both by the GCD. Example: 12/18: GCD = 6. 12/6 = 2, 18/6 = 3. Simplified = 2/3.' },
      { q: 'What is an improper fraction?', a: 'An improper fraction has a numerator larger than the denominator (like 7/3). It can be converted to a mixed number: 7/3 = 2 1/3 (2 whole with 1 remainder).' },
      { q: 'How do you multiply mixed numbers?', a: 'Convert each mixed number to an improper fraction first. Example: 2 1/3 x 1 1/2 = 7/3 x 3/2 = 21/6 = 7/2 = 3 1/2.' },
      { q: 'How do you divide fractions?', a: 'Multiply the first fraction by the reciprocal of the second. "Keep, Change, Flip": keep the first fraction, change division to multiplication, flip the second fraction.' },
    ],
    aiQA: [
      { q: 'What is 1/2 + 1/3?', a: 'LCD = 6. 3/6 + 2/6 = 5/6.' },
      { q: 'What is 3/4 x 2/3?', a: '6/12 = 1/2.' },
      { q: 'What is 5/6 - 1/4?', a: 'LCD = 12. 10/12 - 3/12 = 7/12.' },
      { q: 'What is 2/3 ÷ 4/5?', a: '2/3 x 5/4 = 10/12 = 5/6.' },
      { q: 'How do you simplify 8/12?', a: 'GCD(8,12) = 4. 8/4 = 2, 12/4 = 3. Simplified = 2/3.' },
    ],
  },

  'exponent': {
    quickAnswer: 'An exponent indicates how many times a base number is multiplied by itself. 2^10 = 1,024. Negative exponents produce fractions: 2^-3 = 1/8.',
    whatIs: 'The Exponent Calculator computes the value of any base raised to any power, including fractional exponents (roots), negative exponents (reciprocals), and zero exponents. It handles very large numbers using scientific notation and supports both integer and decimal bases. Essential for algebra, calculus, finance (compound interest), and computer science.',
    howToUse: [
      'Enter the base number.',
      'Enter the exponent (power).',
      'Click Calculate to see the result, shown in standard form and scientific notation for large values.',
    ],
    formula: 'b^n = b x b x b... (n times). b^0 = 1 (for any non-zero b). b^-n = 1/b^n. b^(1/n) = nth root of b. b^(m/n) = nth root of b^m. Example: 3^4 = 81. 2^-3 = 1/8 = 0.125. 16^(1/2) = sqrt(16) = 4.',
    examples: [
      { title: 'Compound Interest', scenario: '$1,000 invested at 7% annually for 20 years: 1000 x (1.07)^20.', result: '(1.07)^20 = 3.8697. Final value = $3,869.68.' },
      { title: 'Computer Storage', scenario: '2^32 (maximum value of a 32-bit integer).', result: '2^32 = 4,294,967,296 ≈ 4.29 billion.' },
    ],
    useCases: [
      'Compound interest and investment growth calculations.',
      'Scientific notation for very large or very small numbers.',
      'Computer science and bit manipulation.',
      'Algebra and pre-calculus homework.',
    ],
    faqs: [
      { q: 'What is anything to the power of 0?', a: 'Any non-zero number raised to the 0 power equals 1. b^0 = 1 (b ≠ 0). 0^0 is mathematically undefined, though some contexts treat it as 1.' },
      { q: 'What is a negative exponent?', a: 'b^-n = 1/b^n. A negative exponent is the reciprocal of the positive exponent. Example: 5^-2 = 1/25 = 0.04.' },
      { q: 'What is a fractional exponent?', a: 'b^(1/n) is the nth root of b. b^(m/n) = (nth root of b)^m. Example: 8^(2/3) = (cube root of 8)^2 = 2^2 = 4.' },
      { q: 'What does 10^6 equal?', a: '10^6 = 1,000,000 (one million). Scientific notation uses powers of 10: 3.5 x 10^6 = 3,500,000.' },
      { q: 'What is e in exponential functions?', a: 'e = Euler\'s number = 2.71828... It is the base of the natural logarithm. Functions like compound interest with continuous compounding use e: A = Pe^(rt).' },
    ],
    aiQA: [
      { q: 'What is 2^10?', a: '1,024.' },
      { q: 'What is 3^5?', a: '243.' },
      { q: 'What is 10^-3?', a: '0.001 (one thousandth).' },
      { q: 'What is anything raised to the 0 power?', a: '1. Any non-zero base raised to the power 0 equals 1.' },
      { q: 'What is a square root in exponent form?', a: 'Square root of x = x^(1/2). Cube root = x^(1/3).' },
    ],
  },

  'scientific-notation': {
    quickAnswer: 'Scientific notation expresses numbers as a x 10^n where 1 ≤ a < 10. Example: 0.00045 = 4.5 x 10^-4. 93,000,000 = 9.3 x 10^7.',
    whatIs: 'The Scientific Notation Calculator converts numbers between standard form and scientific notation, and performs addition, subtraction, multiplication, and division on numbers in scientific notation. Used extensively in science, engineering, and mathematics for handling very large or very small numbers clearly and concisely.',
    howToUse: [
      'Enter a number in standard or scientific notation.',
      'Click Convert to see it in the other form.',
      'For operations, enter two numbers and select the operation.',
      'Click Calculate to see the result in scientific notation.',
    ],
    formula: 'Standard to Scientific: Move decimal point until one non-zero digit remains before decimal. Count moves = exponent (positive for right, negative for left). Example: 5,280 = 5.28 x 10^3. 0.00314 = 3.14 x 10^-3.',
    examples: [
      { title: 'Astronomy', scenario: 'Distance from Earth to Sun: 93,000,000 miles.', result: '9.3 x 10^7 miles.' },
      { title: 'Chemistry', scenario: 'Size of a hydrogen atom: 0.000000000106 meters.', result: '1.06 x 10^-10 meters (about 1 Angstrom).' },
    ],
    useCases: [
      'Scientific research with very large or small measurements.',
      'Chemistry: atomic masses, Avogadro\'s number (6.022 x 10^23).',
      'Astronomy: distances in light years and astronomical units.',
      'Engineering: expressing specifications in standard notation.',
    ],
    faqs: [
      { q: 'How do you multiply numbers in scientific notation?', a: 'Multiply the coefficients and add the exponents. (a x 10^m) x (b x 10^n) = (a x b) x 10^(m+n). Adjust if coefficient ≥ 10. Example: (3 x 10^4) x (2 x 10^3) = 6 x 10^7.' },
      { q: 'How do you divide numbers in scientific notation?', a: 'Divide the coefficients and subtract the exponents. (a x 10^m) / (b x 10^n) = (a/b) x 10^(m-n). Example: (6 x 10^8) / (2 x 10^5) = 3 x 10^3.' },
      { q: 'What is Avogadro\'s number in scientific notation?', a: '6.022 x 10^23 particles per mole. This is how many atoms or molecules are in one mole of a substance — a fundamental constant in chemistry.' },
      { q: 'What is E notation?', a: 'E notation (used in calculators and programming) replaces "x 10^" with "E". 3.14E6 = 3.14 x 10^6 = 3,140,000. 2.5E-3 = 2.5 x 10^-3 = 0.0025.' },
      { q: 'How do you add numbers in scientific notation?', a: 'Convert both to the same exponent, then add coefficients. Example: 3.2 x 10^4 + 4.5 x 10^3 = 3.2 x 10^4 + 0.45 x 10^4 = 3.65 x 10^4.' },
    ],
    aiQA: [
      { q: 'What is 0.000001 in scientific notation?', a: '1 x 10^-6.' },
      { q: 'What is 1,000,000 in scientific notation?', a: '1 x 10^6.' },
      { q: 'How do I convert 45,000 to scientific notation?', a: '4.5 x 10^4.' },
      { q: 'What is 2.5 x 10^3 in standard form?', a: '2,500.' },
      { q: 'What is the speed of light in scientific notation?', a: 'Approximately 3 x 10^8 meters per second.' },
    ],
  },

  'ratio': {
    quickAnswer: 'A ratio compares two quantities. Simplify by dividing both parts by their GCD. Example: 12:18 simplifies to 2:3. Ratios can also be expressed as fractions or percentages.',
    whatIs: 'The Ratio Calculator simplifies ratios, finds equivalent ratios, and solves ratio proportion problems (finding an unknown value x given a:b = c:x). It is used in recipe scaling, map reading, financial analysis, photography (aperture ratios), and many science applications.',
    howToUse: [
      'Enter the two (or three) ratio values.',
      'Select the operation: simplify, find equivalent ratio, or solve for unknown.',
      'Click Calculate to see the result.',
    ],
    formula: 'Simplified Ratio: Divide both terms by GCD(a, b). Proportion (a:b = c:x): x = b x c / a. Ratio to fraction: a:b = a/(a+b) for first part. Example: Ratio 3:5 means 3/(3+5) = 37.5% and 5/(3+5) = 62.5% of the total.',
    examples: [
      { title: 'Recipe Scaling', scenario: 'Original recipe uses ingredients in ratio 2:3:1. Scale up total from 6 cups to 12 cups.', result: 'Ratio stays 2:3:1. Total = 12 cups. Parts: 4 cups, 6 cups, 2 cups.' },
      { title: 'Map Scale', scenario: 'Map scale 1:50,000. Two cities are 3.5 cm apart on the map.', result: 'Actual distance = 3.5 x 50,000 = 175,000 cm = 1.75 km.' },
    ],
    useCases: [
      'Recipe scaling and cooking proportion problems.',
      'Map and model scale calculations.',
      'Financial ratio analysis (debt-to-equity, P/E ratio).',
      'Mixing ratios for concrete, paint, and chemicals.',
    ],
    faqs: [
      { q: 'How do you simplify a ratio?', a: 'Find the GCD of both numbers and divide each by it. Ratio 15:25: GCD = 5. 15/5 = 3, 25/5 = 5. Simplified ratio = 3:5.' },
      { q: 'What is the difference between a ratio and a fraction?', a: 'A fraction represents part of a whole (3/5 means 3 out of 5 parts total). A ratio compares two quantities (3:5 means 3 for every 5). 3:5 as a fraction for the first quantity = 3/(3+5) = 3/8 of the total.' },
      { q: 'How do you solve a proportion?', a: 'Cross multiply. If a/b = c/d, then a x d = b x c. Solve for the unknown: if 3/4 = x/12, then 3 x 12 = 4 x x, so 36 = 4x, x = 9.' },
      { q: 'What is a 1:1 ratio?', a: 'Equal proportions of both components. Example: 1:1 coffee to water ratio means equal parts of each. Often used in dilution, mixing, and equal splits.' },
      { q: 'How are ratios used in finance?', a: 'P/E ratio = Price per Share / Earnings per Share. Debt-to-equity = Total Debt / Total Equity. Current ratio = Current Assets / Current Liabilities. These ratios enable company comparison regardless of company size.' },
    ],
    aiQA: [
      { q: 'How do I simplify a ratio?', a: 'Divide both numbers by their Greatest Common Divisor (GCD).' },
      { q: 'What is a 2:1 ratio?', a: '2 parts of the first quantity for every 1 part of the second. If the total is 30, you have 20 and 10.' },
      { q: 'How do I solve a proportion?', a: 'Cross multiply: if a/b = c/d, then ad = bc. Solve for the unknown.' },
      { q: 'What is ratio in cooking?', a: 'The proportional relationship between ingredients. E.g., a bread hydration ratio of 70% = 0.70 kg water per 1 kg flour.' },
      { q: 'What is a 3:1 ratio as a percentage?', a: 'First part = 3/(3+1) = 75%. Second part = 1/(3+1) = 25%.' },
    ],
  },

  'mean-median-mode': {
    quickAnswer: 'Mean = sum of all values / count. Median = middle value when sorted. Mode = most frequent value. For [2, 3, 3, 5, 7]: Mean = 4, Median = 3, Mode = 3.',
    whatIs: 'The Mean Median Mode Calculator computes all three measures of central tendency from a dataset. Enter any set of numbers to get the mean (arithmetic average), median (middle value), and mode (most frequent value). It also computes range, sum, and count as additional descriptive statistics.',
    howToUse: [
      'Enter your numbers separated by commas or spaces.',
      'Click Calculate to see mean, median, mode, range, and sum.',
    ],
    formula: 'Mean = Sum of values / Count. Median: Sort data ascending, if n is odd take middle value, if n is even average the two middle values. Mode: The value(s) appearing most frequently. Range = Max - Min.',
    examples: [
      { title: 'Test Scores', scenario: 'Scores: 72, 85, 90, 90, 68, 78, 92.', result: 'Mean = 575/7 = 82.1. Sorted: 68,72,78,85,90,90,92. Median = 85. Mode = 90. Range = 24.' },
      { title: 'No Mode', scenario: 'Dataset: 4, 7, 11, 3, 8.', result: 'Mean = 33/5 = 6.6. Median = 7. Mode = None (all values appear once).' },
    ],
    useCases: [
      'Grade and test score analysis.',
      'Statistical description of any dataset.',
      'Salary and income distribution analysis.',
      'Quality control data analysis in manufacturing.',
    ],
    faqs: [
      { q: 'When should I use mean vs. median?', a: 'Mean is best for symmetric distributions without outliers. Median is more robust to outliers and skewed distributions (e.g., income data, where a few very high earners distort the mean). The US reports median household income rather than mean for this reason.' },
      { q: 'Can there be multiple modes?', a: 'Yes. A dataset with two modes is bimodal; three modes is trimodal. If all values appear equally often, there is no mode. If two values each appear twice in a 5-number set, both are modes.' },
      { q: 'What is the difference between median and mean for salary data?', a: 'In 2023, US median household income was ~$74,500 while mean was significantly higher (~$105,000+) due to the influence of very high earners skewing the mean. The median better represents typical income.' },
      { q: 'What is weighted mean?', a: 'Weighted mean multiplies each value by its weight (importance) before averaging. Example: Course grades with different credit hours use weighted mean: (3 cr x A + 4 cr x B + 2 cr x C) / (3+4+2) total credits.' },
      { q: 'How is mean affected by outliers?', a: 'Greatly. A single extreme value dramatically changes the mean but has minimal effect on the median. This is why the median is preferred for skewed data like real estate prices or income distributions.' },
    ],
    aiQA: [
      { q: 'What is mean in math?', a: 'The arithmetic average: sum all values, divide by the count.' },
      { q: 'What is the median?', a: 'The middle value of a sorted dataset. If there are two middle values, take their average.' },
      { q: 'What is the mode?', a: 'The value that appears most frequently in a dataset.' },
      { q: 'What is the mean of 10, 20, 30?', a: '(10+20+30)/3 = 20.' },
      { q: 'What is the median of 3, 7, 2, 9, 5?', a: 'Sorted: 2, 3, 5, 7, 9. Middle = 5.' },
    ],
  },

  'lcm-gcd': {
    quickAnswer: 'GCD (Greatest Common Divisor) is the largest number dividing two numbers evenly. LCM (Least Common Multiple) is the smallest number both divide into. GCD(12,18) = 6. LCM(12,18) = 36.',
    whatIs: 'The LCM and GCD Calculator finds the Least Common Multiple and Greatest Common Divisor of two or more numbers. The GCD (also called GCF — Greatest Common Factor) is used to simplify fractions. The LCM is used to find a common denominator for fraction addition and in scheduling problems.',
    howToUse: [
      'Enter two or more numbers separated by commas.',
      'Click Calculate to see both GCD and LCM.',
      'The calculator shows the prime factorization step-by-step.',
    ],
    formula: 'GCD using Euclidean algorithm: GCD(a,b) = GCD(b, a mod b) until remainder = 0. LCM(a,b) = |a x b| / GCD(a,b). Example: GCD(48,36): 48=36x1+12, 36=12x3+0. GCD=12. LCM=48x36/12=144.',
    examples: [
      { title: 'Fraction Simplification', scenario: 'Simplify 24/36 using GCD.', result: 'GCD(24,36) = 12. 24/12 = 2, 36/12 = 3. Simplified fraction = 2/3.' },
      { title: 'Scheduling Problem', scenario: 'Event A repeats every 4 days, Event B every 6 days. When do they coincide?', result: 'LCM(4,6) = 12. Both events occur together every 12 days.' },
    ],
    useCases: [
      'Simplifying fractions using GCD.',
      'Finding common denominators for fraction arithmetic using LCM.',
      'Scheduling and cycle problems.',
      'Number theory and cryptography applications.',
    ],
    faqs: [
      { q: 'What is the difference between GCD and LCM?', a: 'GCD (Greatest Common Divisor) is the largest factor shared by two numbers — it simplifies fractions. LCM (Least Common Multiple) is the smallest number that both numbers divide into — used for fraction common denominators.' },
      { q: 'What is the Euclidean algorithm?', a: 'An efficient method for finding GCD: repeatedly replace the larger number with the remainder when dividing by the smaller until the remainder is 0. The last non-zero remainder is the GCD.' },
      { q: 'How are GCD and LCM related?', a: 'GCD(a,b) x LCM(a,b) = a x b. Knowing one allows computation of the other without factoring both numbers separately.' },
      { q: 'What is GCD used for in everyday life?', a: 'Simplifying fractions, dividing objects into equal groups, finding the largest tile size that fits evenly in a room, cryptography (RSA encryption), and number theory.' },
      { q: 'What is a prime factorization method for LCM?', a: 'Factor both numbers into primes. LCM uses each prime factor at its highest power. Example: LCM(12,18): 12 = 2^2 x 3, 18 = 2 x 3^2. LCM = 2^2 x 3^2 = 36.' },
    ],
    aiQA: [
      { q: 'What is the GCD of 12 and 18?', a: 'GCD(12,18) = 6.' },
      { q: 'What is the LCM of 4 and 6?', a: 'LCM(4,6) = 12.' },
      { q: 'What is GCF in math?', a: 'GCF (Greatest Common Factor) is the same as GCD — the largest number that divides both numbers evenly.' },
      { q: 'What is the LCM of 3, 4, and 6?', a: 'LCM(3,4,6) = 12.' },
      { q: 'What is the GCD of two prime numbers?', a: 'Always 1. Prime numbers share no common factors other than 1.' },
    ],
  },

  'prime-factorization': {
    quickAnswer: 'Prime factorization expresses a number as a product of prime numbers. Example: 60 = 2^2 x 3 x 5. Every integer > 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).',
    whatIs: 'The Prime Factorization Calculator decomposes any positive integer into its unique product of prime factors. It uses a factor tree or trial division method to systematically find all prime factors. Prime factorization is foundational to GCD and LCM computation, fraction simplification, and number theory.',
    howToUse: [
      'Enter a positive integer.',
      'Click Calculate to see the prime factorization in exponential form.',
      'View the factor tree or division method step by step.',
    ],
    formula: 'Divide by 2 until not divisible, then try 3, 5, 7, 11... (all primes). Continue until quotient is 1. Collect all divisors as prime factors. Example: 180 / 2 = 90 / 2 = 45 / 3 = 15 / 3 = 5. Factorization = 2^2 x 3^2 x 5.',
    examples: [
      { title: 'Factor 84', scenario: 'Find prime factorization of 84.', result: '84 = 2^2 x 3 x 7.' },
      { title: 'Large Number', scenario: 'Factor 2,520.', result: '2,520 = 2^3 x 3^2 x 5 x 7. (Smallest number divisible by 1-10)' },
    ],
    useCases: [
      'Finding GCD and LCM using prime factorization.',
      'Simplifying algebraic expressions.',
      'Number theory, cryptography, and RSA encryption.',
      'Math olympiad and competition preparation.',
    ],
    faqs: [
      { q: 'What is a prime number?', a: 'A number greater than 1 with no factors except 1 and itself. First 10 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. 1 is not prime (by convention). 2 is the only even prime.' },
      { q: 'Is every number divisible by primes?', a: 'Yes. The Fundamental Theorem of Arithmetic states every integer > 1 is either prime or can be written as a unique product of primes. This is one of mathematics\' most fundamental results.' },
      { q: 'How is prime factorization used in cryptography?', a: 'RSA encryption relies on the computational difficulty of factoring the product of two large prime numbers. While multiplying two 150-digit primes is fast, factoring their 300-digit product is computationally infeasible, providing security.' },
      { q: 'What is the factor tree method?', a: 'A visual method for prime factorization: draw the number at top, branch into any two factors, continue branching until all leaves are prime numbers. The product of all leaf numbers is the prime factorization.' },
      { q: 'Are 1 and 0 prime?', a: '1 is not prime (it has only one factor — itself, not two distinct factors). 0 is not prime (it has infinitely many factors). Primality is defined only for integers > 1.' },
    ],
    aiQA: [
      { q: 'What is the prime factorization of 48?', a: '48 = 2^4 x 3.' },
      { q: 'What is the prime factorization of 100?', a: '100 = 2^2 x 5^2.' },
      { q: 'Is 97 a prime number?', a: 'Yes, 97 is prime. It is not divisible by 2, 3, 5, 7 (all primes up to sqrt(97) ≈ 9.8).' },
      { q: 'What is a composite number?', a: 'A positive integer with at least one factor other than 1 and itself. Examples: 4, 6, 8, 9, 10. Opposite of prime.' },
      { q: 'What is the prime factorization of 360?', a: '360 = 2^3 x 3^2 x 5.' },
    ],
  },

  'square-root': {
    quickAnswer: 'Square root of x (√x) is the number that when multiplied by itself gives x. √25 = 5, √2 ≈ 1.4142, √144 = 12. This calculator handles perfect and non-perfect squares.',
    whatIs: 'The Square Root Calculator computes the principal square root (and cube root) of any non-negative number. It identifies whether the result is an exact integer (perfect square) or an irrational decimal approximation. It also handles negative inputs by outputting imaginary numbers (expressed in terms of i).',
    howToUse: [
      'Enter any non-negative number.',
      'Click Calculate to see the square root (and cube root) with full decimal precision.',
      'For nth roots, select the root degree.',
    ],
    formula: '√x = x^(1/2). Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144... √x for non-perfect squares is irrational. Example: √72 = √(36 x 2) = 6√2 ≈ 8.4853.',
    examples: [
      { title: 'Construction', scenario: 'Find the diagonal of a 3 x 4 meter room.', result: 'Diagonal = √(3^2 + 4^2) = √(9+16) = √25 = 5 meters (Pythagorean theorem).' },
      { title: 'Simplification', scenario: 'Simplify √50.', result: '√50 = √(25 x 2) = 5√2 ≈ 7.071.' },
    ],
    useCases: [
      'Solving quadratic equations using the quadratic formula.',
      'Pythagorean theorem calculations in construction and geometry.',
      'Statistics: standard deviation involves square roots.',
      'Physics: velocity from kinetic energy, distance from gravity formulas.',
    ],
    faqs: [
      { q: 'What is a perfect square?', a: 'A number whose square root is an integer. Examples: 1 (1^2), 4 (2^2), 9 (3^2), 16 (4^2), 25 (5^2), 100 (10^2). Most numbers have irrational square roots (infinite non-repeating decimals).' },
      { q: 'What is √2?', a: '√2 ≈ 1.41421356... It is an irrational number — proven by ancient Greek mathematicians. Its decimal expansion continues infinitely without repeating.' },
      { q: 'Can you take the square root of a negative number?', a: 'Not in real numbers. √(-1) = i (the imaginary unit). Complex numbers use imaginary components. √(-9) = 3i. These appear in electrical engineering (AC circuits) and advanced mathematics.' },
      { q: 'What is the difference between √x and x^0.5?', a: 'They are identical. √x = x^(1/2) = x^0.5. The radical notation (√) and fractional exponent are interchangeable. In programming, use Math.sqrt() or x**0.5.' },
      { q: 'How do I estimate a square root without a calculator?', a: 'Find the nearest perfect squares on either side. Example: √50 is between √49=7 and √64=8, closer to 7. Use Newton\'s method: guess g, improve with (g + n/g)/2. For √50: guess 7. Improve: (7 + 50/7)/2 = 7.07.' },
    ],
    aiQA: [
      { q: 'What is the square root of 144?', a: '12.' },
      { q: 'What is the square root of 2?', a: 'Approximately 1.41421.' },
      { q: 'What is √169?', a: '13.' },
      { q: 'What is the square root of 50?', a: 'Approximately 7.071 (= 5√2).' },
      { q: 'How do I find a square root without a calculator?', a: 'Find the nearest perfect squares. Estimate, then refine using Newton\'s method: new estimate = (guess + n/guess) / 2.' },
    ],
  },

  'logarithm': {
    quickAnswer: 'A logarithm is the inverse of exponentiation. log_b(x) = y means b^y = x. log_10(1000) = 3 because 10^3 = 1000. ln(x) uses base e ≈ 2.71828.',
    whatIs: 'The Logarithm Calculator computes base-10 (log), natural log (ln/base-e), and custom-base logarithms. Logarithms convert multiplicative relationships into additive ones, making them essential in sound intensity (decibels), earthquake magnitude (Richter scale), pH chemistry, compound growth, and algorithm complexity analysis.',
    howToUse: [
      'Enter the argument (the number to take the log of).',
      'Select the base: 10 (common log), e (natural log), or custom.',
      'Click Calculate to see the logarithm value.',
    ],
    formula: 'log_b(x) = ln(x) / ln(b) = log_10(x) / log_10(b). Key properties: log(ab) = log(a) + log(b). log(a/b) = log(a) - log(b). log(a^n) = n x log(a). Change of base formula: log_b(x) = log_c(x) / log_c(b).',
    examples: [
      { title: 'Decibel Calculation', scenario: 'Sound level = 10 x log_10(I/I_0). Sound 100x louder than threshold (I/I_0 = 100).', result: '10 x log_10(100) = 10 x 2 = 20 decibels.' },
      { title: 'Investment Doubling', scenario: 'How long at 7% to double? Using rule: t = log(2) / log(1.07).', result: 't = 0.693 / 0.0677 = 10.24 years. (Matches Rule of 72: 72/7 ≈ 10.3)' },
    ],
    useCases: [
      'Acoustics: decibel scale calculations.',
      'Chemistry: pH = -log_10([H+]) for acid/base strength.',
      'Earthquake science: Richter magnitude = log_10(amplitude).',
      'Finance: time to double money using logarithms.',
    ],
    faqs: [
      { q: 'What is the natural log (ln)?', a: 'The natural log uses base e (Euler\'s number ≈ 2.71828). ln(x) is the inverse of e^x. Natural logs appear naturally in calculus, physics, and finance — particularly in continuous compounding and exponential growth/decay.' },
      { q: 'What is log base 10?', a: 'log_10(x) gives the power of 10 needed to produce x. log_10(100) = 2 because 10^2 = 100. The common log is used in pH, decibels, Richter scale, and most everyday applications.' },
      { q: 'What is a logarithmic scale?', a: 'A scale where each increment represents multiplication (not addition). The Richter scale (each unit is 10x more energy), pH scale (each unit is 10x more acidic), and musical octaves are logarithmic scales.' },
      { q: 'Why is log(0) undefined?', a: 'log_b(0) is undefined because there is no power of b that equals 0 (b^y > 0 for all real y). As x approaches 0 from the positive side, log(x) approaches negative infinity.' },
      { q: 'How are logarithms and exponents inverse?', a: 'If b^y = x, then log_b(x) = y. They undo each other: b^(log_b(x)) = x and log_b(b^x) = x. Just as subtraction undoes addition, logarithms undo exponentiation.' },
    ],
    aiQA: [
      { q: 'What is log base 10 of 1000?', a: 'log_10(1000) = 3, because 10^3 = 1000.' },
      { q: 'What is the natural log of e?', a: 'ln(e) = 1, because e^1 = e.' },
      { q: 'What is ln(1)?', a: 'ln(1) = 0, because e^0 = 1.' },
      { q: 'What is log_2(8)?', a: '3, because 2^3 = 8.' },
      { q: 'What is the relationship between log and ln?', a: 'ln(x) = log_e(x). log_10(x) = ln(x) / ln(10) = ln(x) / 2.302585.' },
    ],
  },

  'geometric-mean': {
    quickAnswer: 'Geometric mean = (x1 x x2 x ... x xn)^(1/n). For investment returns, use the geometric mean to find the true average annual growth rate. For [2, 8, 32]: Geometric mean = (512)^(1/3) = 8.',
    whatIs: 'The Geometric Mean Calculator computes the central tendency of a dataset when values are in proportional or multiplicative relationship rather than additive. It is the correct average for percentage changes, investment returns, growth rates, and ratios. Unlike arithmetic mean, it is not skewed by large outliers.',
    howToUse: [
      'Enter your values separated by commas.',
      'Click Calculate to see geometric mean, arithmetic mean, and the difference.',
    ],
    formula: 'Geometric Mean = (x1 x x2 x ... x xn)^(1/n) = n-th root of the product. Equivalent: exp((ln(x1) + ln(x2) + ... + ln(xn)) / n). Example: Geometric mean of 4, 16: (4 x 16)^(1/2) = 64^0.5 = 8.',
    examples: [
      { title: 'Investment Returns', scenario: 'Annual returns: +50%, -20%, +30%. Find true average CAGR.', result: 'Convert to growth factors: 1.50 x 0.80 x 1.30. GM = (1.50 x 0.80 x 1.30)^(1/3) = (1.56)^(0.333) = 1.1598. CAGR = 15.98%.' },
      { title: 'Aspect Ratios', scenario: 'Average of 4:3 and 16:9 aspect ratios (as decimals 1.333 and 1.778).', result: 'Geometric mean = (1.333 x 1.778)^(1/2) = (2.370)^(1/2) = 1.540. The "middle" aspect ratio.' },
    ],
    useCases: [
      'CAGR (Compound Annual Growth Rate) calculation for investments.',
      'Averaging percentage changes in economics and finance.',
      'Biological size comparisons (log-normal distributions).',
      'Image processing and computer vision scale-space analysis.',
    ],
    faqs: [
      { q: 'When should I use geometric mean vs. arithmetic mean?', a: 'Use geometric mean when: (1) multiplying values makes sense (rates, ratios, percentages), or (2) data spans several orders of magnitude. Investment returns, population growth rates, and compound interest are natural geometric mean applications.' },
      { q: 'What is CAGR?', a: 'CAGR (Compound Annual Growth Rate) = (Ending Value / Beginning Value)^(1/n) - 1. It is the geometric mean annual return over n years. The "true" average investment growth rate.' },
      { q: 'Why is geometric mean always ≤ arithmetic mean?', a: 'This is the AM-GM inequality: the arithmetic mean is always ≥ the geometric mean, with equality only when all values are identical. The geometric mean is the "fairer" average for multiplicative data.' },
      { q: 'Can geometric mean be used with negative values?', a: 'Not directly. Negative values (or zero) cannot be used in geometric mean. For investment returns, convert to growth factors (1 + return%) before computing geometric mean, then subtract 1 from the result.' },
      { q: 'How is geometric mean used in image processing?', a: 'The geometric mean filter smooths images while preserving edge details better than arithmetic mean. It reduces impulse noise (salt-and-pepper) more effectively because it weights pixel values in a multiplicative rather than additive way.' },
    ],
    aiQA: [
      { q: 'What is geometric mean?', a: 'The nth root of the product of n numbers. Used for averaging rates, ratios, and multiplicative data.' },
      { q: 'What is the geometric mean of 2 and 8?', a: 'sqrt(2 x 8) = sqrt(16) = 4.' },
      { q: 'What is CAGR?', a: 'Compound Annual Growth Rate — the geometric mean annual return. Calculated as (End/Start)^(1/years) - 1.' },
      { q: 'When should I use geometric mean?', a: 'When averaging percentages, growth rates, or any multiplicative data. For investment returns, GDP growth, and population growth rates.' },
      { q: 'What is the geometric mean of 1, 2, 4, 8?', a: '(1 x 2 x 4 x 8)^(1/4) = 64^0.25 = 2.83.' },
    ],
  },

  'weighted-average': {
    quickAnswer: 'Weighted average = Sum of (value x weight) / Sum of weights. Used when some values contribute more than others — like GPA calculation with different credit-hour courses.',
    whatIs: 'The Weighted Average Calculator computes an average where different values have different levels of importance (weights). Unlike simple average, it proportionally accounts for each value\'s relative significance. Used in GPA calculation, portfolio returns, investment analysis, and any scoring system where items have different importance.',
    howToUse: [
      'Enter each value and its corresponding weight.',
      'Add more rows as needed.',
      'Click Calculate to see the weighted average and total weights.',
    ],
    formula: 'Weighted Average = Sum(value_i x weight_i) / Sum(weight_i). Example: Grades A(4.0) x 3 credits + B(3.0) x 4 credits + C(2.0) x 2 credits = (12 + 12 + 4) / (3+4+2) = 28/9 = 3.11 GPA.',
    examples: [
      { title: 'GPA Calculation', scenario: 'Course 1: 4.0 GPA, 3 credits. Course 2: 3.3 GPA, 4 credits. Course 3: 3.7 GPA, 3 credits.', result: 'Weighted GPA = (12 + 13.2 + 11.1) / 10 = 36.3 / 10 = 3.63.' },
      { title: 'Portfolio Return', scenario: 'Stock A: +15% return, $5,000 invested. Stock B: -5% return, $3,000. Stock C: +8% return, $2,000.', result: 'Weighted return = (15x5000 + (-5)x3000 + 8x2000) / 10000 = (75000 - 15000 + 16000) / 10000 = 7.6%.' },
    ],
    useCases: [
      'GPA calculation with courses of different credit hours.',
      'Investment portfolio weighted average return.',
      'Employee performance scoring with different competency weights.',
      'Survey data analysis with different question importances.',
    ],
    faqs: [
      { q: 'What is the difference between weighted and simple average?', a: 'Simple average treats all values equally. Weighted average gives some values more influence based on their weight. Example: A 4.0 in a 4-credit class matters more to GPA than a 4.0 in a 1-credit class.' },
      { q: 'What happens if all weights are equal?', a: 'Weighted average equals simple average when all weights are identical. The formula works correctly in this degenerate case.' },
      { q: 'Can weights be percentages instead of whole numbers?', a: 'Yes. Weights can be any positive numbers — whole numbers, decimals, or percentages. The calculator normalizes them by dividing by the total weight sum.' },
      { q: 'What is a weighted moving average?', a: 'A type of moving average used in financial analysis where recent data points are given more weight than older ones. Used in technical stock analysis (EMA — Exponential Moving Average) to identify trends.' },
      { q: 'How is weighted average used in inventory?', a: 'Weighted average cost method (WAC) calculates average cost per unit: total cost of inventory / total units. Used in accounting to value cost of goods sold and ending inventory.' },
    ],
    aiQA: [
      { q: 'How do I calculate weighted average?', a: 'Multiply each value by its weight, sum all products, divide by total weights.' },
      { q: 'What is a weighted GPA?', a: 'A GPA that accounts for credit hours — courses with more credits have greater impact on overall GPA.' },
      { q: 'What is the weighted average of 80, 90, 70 with weights 1, 2, 3?', a: '(80x1 + 90x2 + 70x3) / (1+2+3) = (80+180+210)/6 = 470/6 = 78.33.' },
      { q: 'Is weighted average the same as mean?', a: 'The simple mean is a weighted average where all weights equal 1. Weighted average generalizes mean to handle different importance levels.' },
      { q: 'How is weighted average used in stocks?', a: 'To compute portfolio return: weight each stock\'s return by its proportion of total portfolio value, then sum.' },
    ],
  },

  'percentage': {
    quickAnswer: 'Percentage means "per hundred." To find P% of X: X x P/100. To find what percent A is of B: (A/B) x 100. Percent change: ((New - Old) / Old) x 100.',
    whatIs: 'The Percentage Calculator handles the three most common percentage calculations: (1) What is X% of Y? (2) X is what percent of Y? (3) What is the percentage change from X to Y? It is one of the most universally useful math tools for everyday financial, scientific, and academic calculations.',
    howToUse: [
      'Select which type of percentage problem you are solving.',
      'Enter the known values.',
      'Click Calculate to see the answer with the formula shown.',
    ],
    formula: 'What is P% of X: X x P/100. What percent of B is A: (A/B) x 100. Percent change: ((New - Old) / Old) x 100 (positive = increase, negative = decrease). Percent of total: (Part / Whole) x 100.',
    examples: [
      { title: 'Sales Tax', scenario: 'What is 8.5% tax on a $75 purchase?', result: '75 x 0.085 = $6.375 ≈ $6.38 tax. Total = $81.38.' },
      { title: 'Percent Change', scenario: 'Revenue grew from $120,000 to $154,000.', result: 'Percent change = ((154,000 - 120,000) / 120,000) x 100 = (34,000/120,000) x 100 = 28.33% increase.' },
    ],
    useCases: [
      'Shopping discounts and tax calculations.',
      'Investment return and profit/loss percentages.',
      'Grade and exam score calculations.',
      'Population growth and economic change reporting.',
    ],
    faqs: [
      { q: 'How do I find 15% of a number?', a: 'Multiply by 0.15. Example: 15% of $80 = $80 x 0.15 = $12. Or: find 10% ($8) then add half that ($4) = $12.' },
      { q: 'What is percent vs. percentage point?', a: 'Percent refers to a ratio (5%). Percentage point is an arithmetic difference between percentages. If interest rates rise from 5% to 7%, that is 2 percentage points, but a 40% relative increase.' },
      { q: 'How do I calculate percent error?', a: 'Percent error = |Measured - Actual| / |Actual| x 100. Example: measured 98°, actual 100°: percent error = |98-100|/100 x 100 = 2%.' },
      { q: 'What does it mean to gross up a percentage?', a: 'Working backwards from an after-tax or after-discount value to find the original. Example: If $80 is 80% of the original price: Original = $80 / 0.80 = $100.' },
      { q: 'What is a percentage point vs. basis point?', a: '1 percentage point = 100 basis points (bps). Used in finance for precise rate changes. A 0.25% rate change = 25 basis points. Basis points avoid ambiguity when discussing rate changes.' },
    ],
    aiQA: [
      { q: 'What is 20% of 150?', a: '150 x 0.20 = 30.' },
      { q: 'What percent of 80 is 20?', a: '(20/80) x 100 = 25%.' },
      { q: 'What is percent change from 50 to 75?', a: '((75-50)/50) x 100 = 50% increase.' },
      { q: 'How do I convert a fraction to a percentage?', a: 'Divide numerator by denominator, then multiply by 100. 3/4 = 0.75 x 100 = 75%.' },
      { q: 'What is 1% of 1,000,000?', a: '10,000.' },
    ],
  },

  'advanced-percentage': {
    quickAnswer: 'Advanced percentage calculations include: percentage of percentage, reverse percentage (finding original before change), and compound percentage growth over multiple periods.',
    whatIs: 'The Advanced Percentage Calculator handles complex percentage problems beyond basic calculations: compound percentage changes, percentage of a percentage, reverse calculations from final values, and multi-step percentage problems common in finance, statistics, and business analysis.',
    howToUse: [
      'Select the type of advanced calculation: compound, reverse, or multi-step.',
      'Enter the known values for your specific problem.',
      'Click Calculate to see the result with step-by-step explanation.',
    ],
    formula: 'Compound percentage growth: Final = Initial x (1 + r1) x (1 + r2) x ... Reverse percentage: Original = Final / (1 + Change%). Percentage of percentage: A% of B% = (A x B) / 100%. Example: 20% of 15% = 3%.',
    examples: [
      { title: 'Compound Growth', scenario: 'Price increased 10% in year 1, then 15% in year 2. Start: $100.', result: 'After year 1: $110. After year 2: $110 x 1.15 = $126.50. NOT 25% total — compound effect gives 26.5%.' },
      { title: 'Reverse Calculation', scenario: 'After a 30% discount, an item costs $84. What was the original price?', result: 'Original = $84 / (1 - 0.30) = $84 / 0.70 = $120.' },
    ],
    useCases: [
      'Multi-year investment growth with variable rates.',
      'Finding original price before a discount was applied.',
      'Price after multiple markups and taxes.',
      'Inflation-adjusted value calculations.',
    ],
    faqs: [
      { q: 'What is compound percentage growth?', a: 'Applying successive percentage changes multiplicatively (not additively). Two successive 10% increases: not 20%, but 1.10 x 1.10 = 1.21 = 21% total. Each period\'s change applies to the already-changed base.' },
      { q: 'How do I find the original value before a percentage change?', a: 'If final value is known and percentage change is known: Original = Final / (1 + Change%). For a 20% increase: Original = Final / 1.20. For a 15% decrease: Original = Final / 0.85.' },
      { q: 'What is percentage of a percentage?', a: 'Multiply both percentages (as decimals): 30% of 50% = 0.30 x 0.50 = 0.15 = 15%. Example: if 50% of students pass, and 30% of those pass honors, then 15% of all students pass honors.' },
      { q: 'How do I calculate tax on top of a markup?', a: 'Apply sequentially: Cost x (1 + Markup%) x (1 + Tax%). Example: $50 item, 40% markup, 8% tax: $50 x 1.40 x 1.08 = $75.60.' },
      { q: 'What is the effective percentage after two discounts?', a: 'Discounts stack multiplicatively: two 20% discounts = (1-0.20) x (1-0.20) = 0.80 x 0.80 = 0.64. Effective total = 36% off, not 40%.' },
    ],
    aiQA: [
      { q: 'What is 10% of 10%?', a: '1% (0.10 x 0.10 = 0.01 = 1%).' },
      { q: 'How do I calculate compound percentage?', a: 'Multiply sequential growth factors: Final = Initial x (1+r1) x (1+r2) x...' },
      { q: 'What is the original price if 20% off gives $64?', a: '$64 / 0.80 = $80 original price.' },
      { q: 'Two 10% increases equals what total increase?', a: '1.10 x 1.10 = 1.21. Total = 21% increase (not 20%).' },
      { q: 'How do I add 5% VAT and 10% service charge to $100?', a: '$100 x 1.05 x 1.10 = $115.50 (or $100 x 1.155 total).' },
    ],
  },
};
