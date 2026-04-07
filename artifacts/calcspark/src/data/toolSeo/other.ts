import type { ToolSEOMap } from './index';

export const OTHER_SEO: ToolSEOMap = {
  'tip': {
    quickAnswer: 'Tip amount = Bill x Tip%. For $65 bill: 15% tip = $9.75, 20% = $13, 25% = $16.25. Split evenly: divide total by number of people.',
    whatIs: 'The Tip Calculator computes tip amounts and total bills for any percentage, then splits the total among any number of people. It handles pre-tax and post-tax tipping and provides quick reference for standard tip percentages across different service industries.',
    howToUse: ['Enter the bill subtotal.', 'Select or enter your tip percentage.', 'Enter the number of people to split between.', 'Click Calculate to see tip amount, total, and per-person amount.'],
    formula: 'Tip = Bill x (Tip% / 100). Total = Bill + Tip. Per person = Total / Number of people. Example: $80 bill, 20% tip = $16 tip, $96 total. Split 4 ways = $24 per person.',
    examples: [
      { title: 'Restaurant Dinner', scenario: '$120 dinner bill for 4 people. 18% tip.', result: 'Tip: $21.60. Total: $141.60. Per person: $35.40.' },
      { title: 'Quick Tip', scenario: '$45 lunch, 20% tip.', result: 'Tip: $9. Total: $54.' },
    ],
    useCases: ['Restaurant and cafe tipping.', 'Delivery service tip calculation.', 'Salon and spa service gratuities.', 'Group bill splitting.'],
    faqs: [
      { q: 'How much should I tip at a restaurant?', a: 'US standard: 15-18% for good service, 20% for excellent, 25%+ for exceptional. Counter service / takeout: optional, 10-15%. Buffet: 10-15% (servers still clear tables and bring drinks).' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Either is acceptable. Pre-tax is technically correct and slightly less. In practice, on a $50 pre-tax bill with 10% tax ($5), tipping on pre-tax vs. post-tax differs by just $1 at 20%.' },
      { q: 'What services get tipped?', a: 'Restaurants: yes. Bars: $1-2/drink or 15-20%. Taxi/Uber: 15-20%. Food delivery: 15-20% (minimum $2-3). Hairstylist: 15-20%. Hotel housekeeping: $2-5/day.' },
      { q: 'What is the easy tip trick?', a: 'For 20%: move the decimal left one place and double. $45 → $4.50 → $9 tip. For 15%: find 10% (move decimal left) then add half. $45: 10% = $4.50, half = $2.25, total tip = $6.75.' },
      { q: 'Is tipping mandatory?', a: 'In the US, tipping is a strong cultural expectation in service industries. Many tipped workers receive minimum wages below the federal minimum. Internationally, tipping practices vary widely — some countries (Japan, Korea) consider tipping rude.' },
    ],
    aiQA: [
      { q: 'How much is a 20% tip on $50?', a: '$10.' },
      { q: 'How much is a 15% tip on $80?', a: '$12.' },
      { q: 'How do I split a $120 bill 3 ways with 20% tip?', a: 'Tip: $24. Total: $144. Per person: $48.' },
      { q: 'What is the standard restaurant tip?', a: '18-20% for good service in the US.' },
      { q: 'How do I calculate a 20% tip quickly?', a: 'Move decimal left one place and double. $65 → $6.50 → $13 tip.' },
    ],
  },

  'percent-off': {
    quickAnswer: 'Sale price = Original price x (1 - Discount%). $80 item at 25% off: $80 x 0.75 = $60. Savings: $20. Calculate discounts and sale prices instantly.',
    whatIs: 'The Percent Off Calculator computes sale prices, savings amounts, and original prices for any discount percentage. Use it for shopping deals, coupon calculations, and understanding how much you actually save on discounted items.',
    howToUse: ['Enter the original price.', 'Enter the discount percentage.', 'Click Calculate to see sale price and savings amount.'],
    formula: 'Sale price = Original x (1 - discount%/100). Savings = Original - Sale price = Original x discount%/100. Original from sale price: Original = Sale price / (1 - discount%/100). Example: $120 at 30% off: $120 x 0.7 = $84. Savings: $36.',
    examples: [
      { title: 'Black Friday Deal', scenario: '$350 headphones at 40% off.', result: 'Sale price: $350 x 0.60 = $210. Savings: $140.' },
      { title: 'Stacked Discounts', scenario: '$100 item, first 20% off, then additional 10% off.', result: 'After 20%: $80. After additional 10%: $72. Total effective discount: 28%, not 30%.' },
    ],
    useCases: ['Comparing deals while shopping.', 'Coupon and promo code savings calculation.', 'Price negotiation discount analysis.', 'Retail markdown planning.'],
    faqs: [
      { q: 'Do stacked discounts add up?', a: 'No — they compound. A 20% discount followed by a 10% discount = 28% total discount, not 30%. Each subsequent discount applies to the already-reduced price.' },
      { q: 'How do I find the original price from a sale price?', a: 'Original = Sale price / (1 - discount%). If something is $75 after 25% off: Original = $75 / 0.75 = $100.' },
      { q: 'What is the best time to shop for discounts?', a: 'Black Friday/Cyber Monday (electronics, fashion). End of season (clearance). January (gym equipment, holiday items). Memorial Day (appliances). End of month (car dealerships).' },
      { q: 'Are "BOGO" deals always a good value?', a: 'BOGO (Buy One Get One) = 50% off per item. BOGO 50% off = 25% off total. Compare to regular sales. Also consider whether you actually need 2 units or the expiration date for perishables.' },
      { q: 'What is the markup vs. discount calculation?', a: 'Markup is percentage above cost: Markup = (Price - Cost) / Cost x 100%. Discount is percentage below original price. A product with 100% markup sells for twice cost. A 50% discount on that product returns it to cost price.' },
    ],
    aiQA: [
      { q: 'How do I calculate 30% off $200?', a: '$200 x 0.30 = $60 off. Sale price: $140.' },
      { q: 'What is 25% off $80?', a: '$80 x 0.25 = $20 off. Sale price: $60.' },
      { q: 'If something is 40% off at $60, what was the original price?', a: '$60 / (1 - 0.40) = $60 / 0.60 = $100.' },
      { q: 'What is 20% off $150?', a: '$150 x 0.80 = $120.' },
      { q: 'Are two 10% discounts the same as one 20% discount?', a: 'No. Two 10% discounts = 19% total. First 10% off: $90. Second 10% off $90: $81 (vs. $80 for 20% off).' },
    ],
  },

  'grade': {
    quickAnswer: 'Grade percentage = (Points earned / Total points) x 100. 85/100 = 85%. Use this to calculate your course grade from individual assignment scores.',
    whatIs: 'The Grade Calculator computes course grades from weighted or unweighted assignments. Enter assignment scores and their weights to see your current grade and what you need on remaining assignments to achieve a target grade.',
    howToUse: ['Enter each assignment score and maximum points.', 'Optionally enter each assignment\'s weight (for weighted grading).', 'Click Calculate to see your current grade percentage and letter grade.'],
    formula: 'Unweighted: Grade = (Sum of all points earned / Sum of all total points) x 100%. Weighted: Grade = Σ(category_weight x category_average). Example: Tests 40% (avg 82%), Homework 30% (avg 95%), Quizzes 30% (avg 88%) = 0.4x82 + 0.3x95 + 0.3x88 = 87.1%.',
    examples: [
      { title: 'Midterm Grade', scenario: 'Quiz avg: 88% (20% weight). Homework avg: 95% (30% weight). Tests: 78% (50% weight).', result: 'Grade = 0.20x88 + 0.30x95 + 0.50x78 = 17.6 + 28.5 + 39 = 85.1% (B).' },
      { title: 'Points-Based', scenario: 'Earned 847 points out of 1000 possible points.', result: '847/1000 x 100 = 84.7% (B).' },
    ],
    useCases: ['Tracking academic performance throughout the semester.', 'Calculating required final exam score.', 'Determining if extra credit is needed.', 'Understanding weighted grading systems.'],
    faqs: [
      { q: 'What are common letter grade cutoffs?', a: 'Standard US scale: A: 90-100%. B: 80-89%. C: 70-79%. D: 60-69%. F: below 60%. Plus/minus grades: A+ = 97-100, A = 93-96, A- = 90-92, etc. Cutoffs vary by school and professor.' },
      { q: 'What is a weighted average grade?', a: 'Different assignments count differently toward the final grade. If tests are 50% and homework is 50%, and you score 100% on homework but 60% on tests: grade = 0.5x100 + 0.5x60 = 80%.' },
      { q: 'What GPA is an A/B/C?', a: 'A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, D = 1.0, F = 0.0. Some schools use different scales.' },
      { q: 'How do I calculate what I need on the final?', a: 'Required final score = (Target grade% - Current grade% x (1 - final weight)) / Final weight. Example: Target 90%, current 85%, final is 30% weight: Required = (90 - 85x0.7) / 0.3 = (90-59.5)/0.3 = 101.7% — need extra credit!' },
      { q: 'What is the difference between median and mean grade?', a: 'Mean = average of all grades. Median = middle grade when sorted. Professors often report median to give a better sense of "typical" performance when a few very high or low scores skew the average.' },
    ],
    aiQA: [
      { q: 'How do I calculate my grade percentage?', a: '(Points earned / Total possible points) x 100.' },
      { q: 'What letter grade is 87%?', a: 'B+ on most standard US grading scales.' },
      { q: 'What letter grade is 73%?', a: 'C on most standard scales.' },
      { q: 'How do weighted grades work?', a: 'Each category (tests, homework) is multiplied by its percentage weight before averaging.' },
      { q: 'What GPA is a B?', a: 'B = 3.0 GPA on a standard 4.0 scale.' },
    ],
  },

  'gpa': {
    quickAnswer: 'GPA = Sum of (Grade points x Credits) / Total credits. A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0. A 3.0 GPA is considered average (B); 3.5+ is excellent.',
    whatIs: 'The GPA Calculator computes your cumulative and semester GPA from course grades and credit hours. Enter each course, its grade, and credit hours to see the weighted GPA. Includes conversion between letter grades, percentages, and GPA points.',
    howToUse: ['Enter each course name, credit hours, and letter grade.', 'Click Calculate to see semester GPA and how it affects cumulative GPA.'],
    formula: 'GPA = Σ(grade_points x credit_hours) / Σ(credit_hours). Grade points: A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0. Example: 3 credits A (12) + 4 credits B (12) = 24 points / 7 credits = 3.43 GPA.',
    examples: [
      { title: 'Semester Calculation', scenario: 'English (3 cr, A), Math (4 cr, B+), History (3 cr, B), Lab (1 cr, A-).', result: 'Points: 12+13.2+9+3.7=37.9. Credits: 11. GPA=37.9/11=3.45.' },
      { title: 'Cumulative Effect', scenario: 'Previous GPA 3.2 (45 credits). This semester GPA 3.8 (15 credits).', result: 'New cumulative: (3.2x45 + 3.8x15) / 60 = (144 + 57) / 60 = 3.35.' },
    ],
    useCases: ['Tracking academic standing throughout college.', 'Graduate school GPA requirement planning.', 'Scholarship eligibility calculation.', 'Dean\'s list and honors qualification.'],
    faqs: [
      { q: 'What is a good GPA?', a: '3.5+ = excellent (often Dean\'s List). 3.0-3.49 = good. 2.5-2.99 = average. Below 2.0 = academic probation at most schools. Medical school: typically need 3.7+. Law school: 3.5+.' },
      { q: 'What is the difference between weighted and unweighted GPA?', a: 'Unweighted GPA: max 4.0, all classes equal. Weighted GPA: AP/honors classes worth more (up to 5.0). Most college admissions use unweighted GPA for comparison. Class rank may use weighted GPA.' },
      { q: 'Can failing one class destroy my GPA?', a: 'Yes, significantly. An F (0 grade points) pulls the average down sharply. Retaking the course: at many schools, the higher grade replaces the F in GPA calculation. Always check your school\'s retake policy.' },
      { q: 'What GPA do I need for graduate school?', a: 'Varies by program. MBA programs: often 3.0 minimum, competitive at 3.5+. Medical school: 3.7+ competitive. Law school: 3.5+. Master\'s programs: typically 3.0-3.5 minimum.' },
      { q: 'How many A\'s do I need to raise my GPA?', a: 'GPA increase depends on how many credits you\'ve already completed. More credits = harder to change GPA significantly. If you have 60 credits at 3.0, earning all A\'s (4.0) in 15 credits raises GPA to (180+60)/75 = 3.2. Early semesters have much more impact.' },
    ],
    aiQA: [
      { q: 'What GPA is an A?', a: '4.0.' },
      { q: 'What GPA is a B?', a: '3.0.' },
      { q: 'What GPA is a C?', a: '2.0.' },
      { q: 'What is a 3.5 GPA in letter grade?', a: 'Between B+ (3.3) and A- (3.7). Approximately A- range.' },
      { q: 'What is the minimum GPA for Dean\'s List?', a: 'Typically 3.5 or above, but varies by institution.' },
    ],
  },

  'height-comparison': {
    quickAnswer: 'Compare heights between people or objects. 5\'11" = 180.3 cm. 6\'0" = 182.9 cm. 5\'6" = 167.6 cm. Convert between feet/inches and centimeters and visualize the difference.',
    whatIs: 'The Height Comparison Calculator converts heights between feet/inches and centimeters, and computes the height difference between two people or objects. It includes reference heights for famous people, average heights by country, and percentile rankings.',
    howToUse: ['Enter Person A\'s height in feet/inches or cm.', 'Enter Person B\'s height (optional, for comparison).', 'Click Calculate to see heights in both units and the difference.'],
    formula: '1 inch = 2.54 cm. 1 foot = 12 inches = 30.48 cm. Height (cm) = feet x 30.48 + inches x 2.54. Height (ft/in): feet = floor(cm / 30.48), inches = (cm / 2.54) mod 12.',
    examples: [
      { title: 'Height Difference', scenario: 'Person A: 5\'10" (177.8 cm). Person B: 5\'4" (162.6 cm).', result: 'Difference: 6 inches = 15.2 cm. Person A is 9.4% taller.' },
      { title: 'Average Height', scenario: 'Average American male: 5\'9" (175.3 cm). Average female: 5\'4" (162.1 cm).', result: 'Height difference: 5 inches (12.7 cm) between average male and female.' },
    ],
    useCases: ['Online dating height filtering.', 'Clothing and furniture sizing.', 'Sports analytics and comparison.', 'Travel: international height measurement conversion.'],
    faqs: [
      { q: 'What is the average height worldwide?', a: 'Global average: men 171 cm (5\'7"), women 159 cm (5\'3"). Tallest countries: Netherlands (men 182.5 cm), Latvia (women 170 cm). Shortest: Bolivia (men 160 cm), Guatemala (women 149 cm).' },
      { q: 'What percentile is 6 feet (183 cm) for American men?', a: '6 feet is approximately the 75th-80th percentile for American men. About 20-25% of American men are 6 feet or taller. Average US male height: 5\'9" (175 cm).' },
      { q: 'Do height requirements still exist?', a: 'Some occupations have height requirements: police (varies by department, typically 5\'6"-5\'8" minimum), military (often 60-80 inches for most roles), flight attendants (60-80 inches for overhead bin reach). Most have moved to functional ability tests.' },
      { q: 'How is height measured in different countries?', a: 'US, UK: feet and inches. Most of the world: centimeters and meters. Japan: cm. India: both feet/inches and cm common. Converting: 5\'10" = 177.8 cm. 6\'0" = 182.88 cm.' },
      { q: 'Does height affect health?', a: 'Taller individuals have slightly higher risk of some cancers. Shorter individuals have slightly higher risk of cardiovascular disease. These are statistical associations, not deterministic outcomes — genetics, diet, and lifestyle matter far more.' },
    ],
    aiQA: [
      { q: 'How many cm is 5\'11"?', a: '5x30.48 + 11x2.54 = 152.4 + 27.94 = 180.34 cm.' },
      { q: 'How many cm is 6 feet?', a: '6 x 30.48 = 182.88 cm ≈ 183 cm.' },
      { q: 'What is 170 cm in feet?', a: '170 / 30.48 = 5.577 feet = 5 feet 6.9 inches ≈ 5\'7".' },
      { q: 'What is the average height for men?', a: 'US average male: 5\'9" (175.3 cm). Global average: 5\'7" (171 cm).' },
      { q: 'How tall is 5\'5" in cm?', a: '5x30.48 + 5x2.54 = 152.4 + 12.7 = 165.1 cm.' },
    ],
  },

  'odds': {
    quickAnswer: 'Convert odds: 3:1 odds against = 25% probability. 2:1 odds for = 66.7% probability. Implied probability = 1 / (decimal odds). Moneyline +200 = 33.3% implied probability.',
    whatIs: 'The Odds Calculator converts between different odds formats (fractional, decimal, moneyline/American) and probability percentages. It computes implied probability, expected value, and payout amounts for betting and probability analysis.',
    howToUse: ['Enter odds in any format (fractional 3/1, decimal 4.0, or American moneyline +300).', 'Click Calculate to see the odds in all formats and implied probability.'],
    formula: 'Fractional odds a/b: probability = b/(a+b). Decimal odds: probability = 1/decimal. American moneyline: + odds: probability = 100/(odds+100). - odds: probability = |odds|/(|odds|+100). Payout (decimal): stake x decimal odds.',
    examples: [
      { title: 'Sports Bet', scenario: 'Team at +250 moneyline (American odds).', result: 'Implied probability = 100/350 = 28.6%. Decimal odds = 3.5. Fractional: 5/2. $100 bet pays $350 total ($250 profit).' },
      { title: 'Horse Racing', scenario: '5/1 fractional odds on a horse.', result: 'Probability = 1/6 = 16.7%. Decimal odds = 6.0. Moneyline: +500. $10 bet returns $60 ($50 profit).' },
    ],
    useCases: ['Sports betting analysis and comparison.', 'Poker and card game probability.', 'Insurance and risk assessment.', 'Understanding probability representations in media.'],
    faqs: [
      { q: 'What is the difference between odds and probability?', a: 'Probability: likelihood of event (0-1 or 0-100%). Odds: ratio of event occurring to not occurring. P = 25% = 1:3 odds against = 3:1 odds against. Probability and odds convey the same information differently.' },
      { q: 'What is vigorish (vig)?', a: 'The bookmaker\'s commission built into odds. A fair coin flip at decimal odds 2.0 = 50% implied probability. Bookmakers set both sides at 1.9 (52.6% implied), totaling 105.2% > 100%. The 5.2% excess is the vig.' },
      { q: 'What is a parlay bet?', a: 'Multiple bets combined — all must win. Decimal odds multiply: 3 bets at 2.0 each = 2x2x2 = 8.0 decimal odds. Higher payout but exponentially harder to win. Expected value is negative with bookmaker vig.' },
      { q: 'What is the Kelly Criterion?', a: 'Optimal bet size: f = (bp - q) / b. b = net odds, p = win probability, q = loss probability. Maximizes long-term expected growth. Commonly applied at half-Kelly for risk reduction.' },
      { q: 'What is expected value in gambling?', a: 'EV = (probability of win x profit) - (probability of loss x stake). If EV < 0, you lose money on average. Most gambling has negative EV. Sports betting can have positive EV if you have better information than the bookmaker.' },
    ],
    aiQA: [
      { q: 'What does +200 mean in sports betting?', a: '$100 bet wins $200 profit (total return $300). Implied probability: 33.3%.' },
      { q: 'What does -150 mean in sports betting?', a: 'Bet $150 to win $100 profit. Implied probability: 60%.' },
      { q: 'What is 4:1 odds as a probability?', a: '1/(4+1) = 20% probability of winning.' },
      { q: 'What is decimal odds 2.5 in fractional?', a: '2.5 decimal = 3/2 fractional = +150 American.' },
      { q: 'What is implied probability?', a: 'The probability of an outcome implied by the odds. Used to find value bets where your assessed probability differs from the bookmaker\'s.' },
    ],
  },

  'dog-years': {
    quickAnswer: 'The "7 dog years = 1 human year" rule is outdated. Modern research: 1 dog year is roughly equivalent to 15 human years at year 1, then slows to ~5 years per dog year in small breeds.',
    whatIs: 'The Dog Years Calculator converts your dog\'s age to an equivalent human age using modern breed-size-adjusted formulas. The classic "multiply by 7" rule is inaccurate — dogs age rapidly early in life and more slowly later. Breed size significantly affects aging rate.',
    howToUse: ['Enter your dog\'s age in years.', 'Select the breed size (small, medium, large, giant).', 'Click Calculate to see equivalent human age and life stage.'],
    formula: 'Modern formula (Nature Aging, 2019): Human equivalent age = 16 x ln(dog_age) + 31. Small breeds (< 20 lbs) age slower; large breeds (> 50 lbs) age faster. A 5-year-old small dog ≈ 36 human years; a 5-year-old large dog ≈ 40 human years.',
    examples: [
      { title: 'Puppy First Year', scenario: '1-year-old dog.', result: '16 x ln(1) + 31 = 16x0 + 31 = 31 human years (not 7). Dogs are young adults at age 1, not young children.' },
      { title: 'Senior Dog', scenario: '10-year-old medium dog.', result: '16 x ln(10) + 31 = 16x2.303 + 31 = 36.8 + 31 = 67.8 human years.' },
    ],
    useCases: ['Understanding your dog\'s life stage for care decisions.', 'Veterinary health screening by age.', 'Fun comparison for dog lovers.', 'Pet insurance planning.'],
    faqs: [
      { q: 'Why is the 7x rule wrong?', a: 'Dogs develop much faster in early years. A 1-year-old dog is sexually mature and fully developed — comparable to a 15-20 year old human, not a 7-year-old. After the rapid early aging, the rate slows considerably.' },
      { q: 'What is the average dog lifespan?', a: 'Small breeds (under 20 lbs): 12-16 years. Medium breeds: 10-14 years. Large breeds: 9-12 years. Giant breeds (80+ lbs): 7-10 years. Genetics, diet, and veterinary care are major factors.' },
      { q: 'What age is "senior" for a dog?', a: 'Small breeds: 10-12 years. Medium: 8-10. Large: 7-8. Giant: 5-6. Senior status means: more frequent vet visits (twice yearly), possible joint supplements, dental care, and monitoring for age-related conditions.' },
      { q: 'How do cats compare to dogs in aging?', a: 'Cats also age rapidly early: a 1-year-old cat ≈ 15 human years. After that, roughly 4-5 human years per cat year. Average indoor cat lifespan: 12-18 years. Some indoor cats live 20+ years.' },
      { q: 'Does dog size affect aging?', a: 'Yes. Large breeds have shorter lifespans. Theories: larger bodies produce more free radicals, faster metabolism, higher cancer rates in giant breeds. Small dogs age slower physiologically after their rapid first year of development.' },
    ],
    aiQA: [
      { q: 'How old is a 7-year-old dog in human years?', a: 'Using modern formula: 16 x ln(7) + 31 = 50.7 human years (not 49 from the 7x rule).' },
      { q: 'How old is 1 dog year in human years?', a: 'About 15-31 human years depending on breed size. Much more than 7.' },
      { q: 'What is the lifespan of a small dog?', a: 'Average 12-16 years. Some live to 20.' },
      { q: 'What is considered a senior dog?', a: 'Small breeds: 10+. Large breeds: 7-8+.' },
      { q: 'Is a 10-year-old dog old?', a: 'Yes, definitely senior. Equivalent to about 65-70 human years depending on breed size.' },
    ],
  },

  'marks-percentage': {
    quickAnswer: 'Marks percentage = (Marks obtained / Total marks) x 100. Score 450/600 = 75%. Use this to calculate percentage from any exam or test marks.',
    whatIs: 'The Marks Percentage Calculator converts raw exam scores to percentages. Used for academic result analysis, scholarship eligibility, and grade conversion in educational systems that use percentage-based grading (common in India, UK, and many other countries).',
    howToUse: ['Enter your marks obtained.', 'Enter the total maximum marks.', 'Click Calculate to see percentage and corresponding grade.'],
    formula: 'Percentage = (Marks obtained / Total marks) x 100. For multiple subjects: total percentage = (Sum of all marks obtained / Sum of all maximum marks) x 100. Grade: depends on grading scheme.',
    examples: [
      { title: 'CBSE Exam', scenario: 'Marks: English 82, Math 91, Science 78, Social 85, Hindi 89. Each out of 100.', result: 'Total: 425/500. Percentage: 425/500 x 100 = 85%. Grade: A1 (90-100=A1, 80-89=A2).' },
      { title: 'Single Subject', scenario: '47 out of 75 in an exam.', result: '47/75 x 100 = 62.67%.' },
    ],
    useCases: ['Academic performance calculation.', 'Scholarship eligibility (minimum percentage requirements).', 'University admission percentage requirements.', 'Competitive exam result analysis.'],
    faqs: [
      { q: 'What percentage is a "distinction" or "first class"?', a: 'Varies by country/institution. India (common): Distinction = 75%+, First Class = 60-74%, Second Class = 50-59%, Pass = 40-49%. UK: First Class = 70%+, Upper Second (2:1) = 60-69%, Lower Second (2:2) = 50-59%, Third = 40-49%.' },
      { q: 'How do I convert marks percentage to GPA?', a: 'India to US GPA (approximate): 90-100% ≈ 4.0. 80-89% ≈ 3.0-3.9. 70-79% ≈ 2.7-2.9. 60-69% ≈ 2.3-2.6. Various conversion tools exist; check your target institution\'s specific conversion policy.' },
      { q: 'What is aggregate percentage?', a: 'The overall percentage across all subjects or semesters combined, not averaged per semester. Aggregate = Total marks obtained across all subjects / Total maximum marks across all subjects.' },
      { q: 'How is percentage different from percentile?', a: 'Percentage = marks out of total marks (absolute score). Percentile = percentage of students who scored lower than you (relative rank). 90 percentile ≠ 90% — it means you scored better than 90% of test takers.' },
      { q: 'What percentage do I need for engineering admission in India?', a: 'Most state engineering colleges: 60% or 65% minimum in PCM (Physics, Chemistry, Math) in Class 12. Top NITs/IITs: admission through JEE, not direct percentage.' },
    ],
    aiQA: [
      { q: 'How do I calculate marks percentage?', a: '(Marks obtained / Total marks) x 100.' },
      { q: 'What is 450 out of 600 in percentage?', a: '450/600 x 100 = 75%.' },
      { q: 'What percentage is 85 out of 100?', a: '85%.' },
      { q: 'What is the passing percentage in most exams?', a: 'Typically 33-40% depending on the board or institution.' },
      { q: 'What is the difference between percentage and percentile?', a: 'Percentage = your score out of total marks. Percentile = how many people scored below you.' },
    ],
  },

  'split-bill': {
    quickAnswer: 'Split a restaurant bill evenly: total / number of people. For unequal splits, add each person\'s items plus their share of tax and tip. $120 bill ÷ 4 people = $30 each.',
    whatIs: 'The Split Bill Calculator divides restaurant and group expense bills fairly, with options for equal splitting, item-based splitting, or custom amounts. It handles tip, tax, and rounding to ensure everyone pays correctly.',
    howToUse: ['Enter the bill subtotal.', 'Enter tip percentage and tax rate.', 'Enter number of people for equal split, OR enter each person\'s item total for unequal split.', 'Click Calculate to see each person\'s share.'],
    formula: 'Equal split: each person pays (Subtotal + Tax + Tip) / N. Unequal: each person pays their items + (items/total) x shared tip and tax. Rounding: always round up to avoid shortfall; last person may pay slightly less.',
    examples: [
      { title: 'Equal Split', scenario: '$180 dinner for 6 people, 20% tip, 8% tax.', result: 'Tax: $14.40. Total: $194.40. Tip: $36. Grand total: $230.40. Per person: $38.40.' },
      { title: 'Unequal Split', scenario: 'Person A: $45, Person B: $30, Person C: $25. 20% tip.', result: 'Total items: $100. Tip: $20. A pays $45x1.2=$54. B pays $30x1.2=$36. C pays $25x1.2=$30.' },
    ],
    useCases: ['Restaurant group dining bill splitting.', 'Splitting shared household expenses.', 'Group travel expense management.', 'Roommate expense splitting.'],
    faqs: [
      { q: 'Should we tip on pre-tax or post-tax amount?', a: 'Either is acceptable — the difference is small. Pre-tax is technically correct. Tipping on post-tax is common and gives servers a slightly higher tip.' },
      { q: 'What apps split bills?', a: 'Splitwise (tracks over time). Venmo/CashApp (payment split). Tab (restaurant specific). Many calculator apps. For one-time restaurant bills, this calculator is the simplest option.' },
      { q: 'Who should pay the leftover rounding difference?', a: 'Traditionally the person whose order is most expensive, or the last person to pay. Most groups split the extra cents equally or whoever organizes the payment absorbs it.' },
      { q: 'What is Dutch treat?', a: 'Everyone pays for their own portion — no sharing. "Going Dutch" means individual billing. More common in some cultures (Netherlands, Germany) than others (US, UK where group splitting or treating is common).' },
      { q: 'How do you handle drinks vs. food in group bills?', a: 'Options: everyone pays for their own drinks (common if one person drinks alcohol and others don\'t). Round-based (each person buys a round). Even split if consumption is roughly equal. Be upfront about preferences before ordering.' },
    ],
    aiQA: [
      { q: 'How do I split a $200 bill 5 ways?', a: '$200 / 5 = $40 per person.' },
      { q: 'How do I add 20% tip to a $90 bill?', a: '$90 x 1.20 = $108 total.' },
      { q: 'How much is each person\'s share of a $150 bill for 3 with 18% tip?', a: 'Total with tip: $177. Per person: $59.' },
      { q: 'What is a fair way to split a bill unequally?', a: 'Each person pays for their items plus a proportional share of shared costs (tax and tip).' },
      { q: 'How do I split a bill with different tax rates?', a: 'Add each person\'s items, apply their local tax rate, then add their proportional share of tip.' },
    ],
  },

  'moving-cost': {
    quickAnswer: 'Average moving costs: Local (< 100 miles): $800-$2,500. Long-distance: $2,000-$10,000+. DIY truck rental: $200-$2,000. Cost depends on distance, home size, and services.',
    whatIs: 'The Moving Cost Estimator calculates approximate moving costs based on home size, distance, and service level. Get estimates for professional movers, partial service, and DIY options to budget your next move accurately.',
    howToUse: ['Enter your home size (studio, 1BR, 2BR, 3BR, 4BR+).', 'Enter the moving distance.', 'Select service level (full-service, partial, DIY).', 'Click Estimate to see cost ranges.'],
    formula: 'Estimated cost = base rate x distance factor x home size factor x service multiplier. Local movers: $75-125/hour for 2 movers + truck. Long distance: weight-based ($0.50-$1.50/lb) or per-mile. DIY: truck rental + fuel + supplies.',
    examples: [
      { title: 'Local 2-Bedroom Move', scenario: '2-bedroom apartment, local move (< 30 miles), 2 professional movers.', result: 'Estimated: $600-$1,200. At 4-6 hours x $100/hour for 2 movers + truck.' },
      { title: 'Cross-Country', scenario: '3-bedroom house, 1,500 miles, full-service movers.', result: 'Estimated: $5,000-$12,000 depending on weight and services included.' },
    ],
    useCases: ['Budgeting for a residential move.', 'Comparing DIY vs. professional mover costs.', 'Employer relocation benefit planning.', 'First-time mover cost awareness.'],
    faqs: [
      { q: 'How do I save money on moving?', a: 'Move mid-month and mid-week (lowest demand). Pack yourself. Donate/sell items to reduce weight. Get multiple quotes. Move in winter if possible. Avoid adding-on services (packing, piano moving) where possible.' },
      { q: 'What is binding vs. non-binding estimate?', a: 'Binding: final price guaranteed regardless of actual weight (good if you have more than estimated). Non-binding: based on estimated weight, final price adjusted after weighing (could be more or less). Request binding estimates for interstate moves.' },
      { q: 'What does "full-service" moving include?', a: 'Packing all items. Loading and unloading. Transportation. Basic furniture reassembly. Typically does not include: unpacking, mounting TVs, specialty items (piano, art), or storage.' },
      { q: 'What should I NOT let movers pack?', a: 'Valuables (jewelry, cash, documents). Hazardous materials (paint, propane, batteries — many are prohibited). Perishable food. Plants (often declined for long distance). Items of irreplaceable sentimental value.' },
      { q: 'What is released value protection vs. full value protection?', a: 'Released value: free, covers only $0.60/pound (a 50 lb TV worth $1,000 pays $30 if damaged). Full value: additional cost, covers repair or replacement at current market value. Always get full value protection.' },
    ],
    aiQA: [
      { q: 'How much does it cost to move a 2-bedroom apartment?', a: 'Local: $800-$1,500. Long-distance: $2,500-$6,000.' },
      { q: 'How much does a cross-country move cost?', a: '$2,000-$10,000+ depending on home size and services.' },
      { q: 'Is it cheaper to rent a truck or hire movers?', a: 'DIY truck rental: $200-$2,000. Full-service movers: typically 3-5x more. DIY saves money but requires significant effort.' },
      { q: 'When is the cheapest time to move?', a: 'Mid-month, mid-week, fall/winter months. Avoid summer (peak season) and end-of-month.' },
      { q: 'How do I get a moving quote?', a: 'Get in-home estimates from at least 3 licensed movers. In-home estimates are most accurate; phone/online estimates often low-ball.' },
    ],
  },

  'wedding-budget': {
    quickAnswer: 'Average US wedding: $30,000. Budget breakdown: venue 30-40%, catering 30-35%, photography 10-12%, music 5-8%, flowers 5-8%, attire 5-10%.',
    whatIs: 'The Wedding Budget Calculator helps you allocate your total wedding budget across all categories — venue, catering, photography, attire, flowers, music, invitations, and more. It shows recommended percentages per category based on industry averages.',
    howToUse: ['Enter your total wedding budget.', 'Review the recommended percentage allocation.', 'Adjust categories based on your priorities.', 'The calculator shows dollar amounts per category and tracks remaining budget.'],
    formula: 'Allocation = Total budget x category percentage. Common allocation: Venue 30%. Catering 32%. Photography 12%. Music 7%. Attire 8%. Flowers 6%. Invitations/paper 3%. Officiant 2%. Miscellaneous/buffer 10%.',
    examples: [
      { title: '$25,000 Budget', scenario: 'Total budget $25,000.', result: 'Venue: $7,500. Catering: $8,000. Photography: $3,000. Music: $1,750. Attire: $2,000. Flowers: $1,500. Other: $1,250 (10% buffer recommended).' },
      { title: 'Priority Shift', scenario: '$30,000 budget, prioritize photography.', result: 'Allocate 15% to photography ($4,500) by reducing flowers (4%) and invitations (2%).' },
    ],
    useCases: ['Wedding planning budget allocation.', 'Identifying where to splurge vs. save.', 'Tracking spending against budget.', 'Vendor payment scheduling.'],
    faqs: [
      { q: 'What is the average cost of a US wedding?', a: 'National average: approximately $30,000 (2023). Median: about $20,000 (half spend more, half less). Highly regional: NYC averages $50,000+. Rural Midwest may average $15,000.' },
      { q: 'What should I prioritize in my wedding budget?', a: 'Photos and video last forever — prioritize these. Venue determines guest count and drives catering costs (your biggest expenses together). Music significantly impacts guest experience. Flowers and decor are most flexible.' },
      { q: 'What budget items do couples most often forget?', a: 'Marriage license ($50-100). Vendors\' meals and gratuity. Rehearsal dinner. Alterations. Hair and makeup trial. Postage for invitations. Day-of transportation. Vendor overtime. Wedding insurance ($150-600).' },
      { q: 'Can I have a nice wedding on $10,000?', a: 'Yes, with creativity: weekday or off-season wedding (30-50% venue discount). Smaller guest list (cost is roughly per-head). DIY flowers and decor. Food truck or brunch reception. Digital invitations. Borrow or rent attire.' },
      { q: 'What is a buffer percentage in wedding budgets?', a: 'Always hold 10-15% as unallocated buffer. Weddings reliably cost more than planned. Common overruns: extra guests, vendor overtime, weather issues, forgotten details. The buffer prevents financial stress.' },
    ],
    aiQA: [
      { q: 'How much does a wedding cost on average?', a: 'About $30,000 nationally in the US, with wide variation by location and style.' },
      { q: 'What percentage of wedding budget goes to catering?', a: 'Typically 30-35% of total budget.' },
      { q: 'What percentage goes to venue?', a: 'Typically 30-40% of total budget.' },
      { q: 'How much should I budget for photography?', a: '10-12% of total budget, often $2,500-$5,000.' },
      { q: 'What is a good wedding buffer?', a: '10-15% of total budget held in reserve for unexpected costs.' },
    ],
  },

  'grocery-budget': {
    quickAnswer: 'Average grocery spending: single adult $200-400/month. Couple: $400-700. Family of 4: $600-1,200. USDA thrifty plan: ~$200/month per adult. Plan meals and make lists to reduce by 20-30%.',
    whatIs: 'The Grocery Budget Calculator helps you allocate a monthly grocery budget across food categories, track spending, and identify saving opportunities. Based on USDA food cost data and nutritional adequacy guidelines.',
    howToUse: ['Enter your monthly grocery budget.', 'Enter your household size and dietary preferences.', 'Click Calculate to see suggested spending by category and per-person amount.'],
    formula: 'Per-person budget = Total budget / household size. USDA thrifty plan (2023): ~$210/month per adult. Moderate cost plan: ~$340/month. Liberal plan: ~$480/month. Category allocation: produce 20-25%, protein 25-30%, dairy 10%, grains 15%, pantry 15%, other 10-15%.',
    examples: [
      { title: 'Family of 4', scenario: '$800/month grocery budget for 2 adults, 2 kids.', result: 'Per person: $200/month. Produce: $160-200. Protein: $200-240. Dairy: $80. Grains: $120. Pantry: $120. Other: $80.' },
      { title: 'Single Person', scenario: '$300/month, single adult, minimal cooking.', result: 'Per day: $10. Per meal: ~$3.33. Realistic with strategic shopping and meal planning.' },
    ],
    useCases: ['Monthly food budget allocation.', 'Reducing grocery spending with meal planning.', 'Comparing actual spend to USDA guidelines.', 'Family food cost tracking.'],
    faqs: [
      { q: 'How can I reduce my grocery bill?', a: 'Meal plan before shopping (reduces impulse buys 20-30%). Buy store brands (25-40% cheaper). Buy seasonal produce. Use frozen vegetables (nutritionally equivalent, cheaper). Reduce meat consumption. Use unit pricing to compare value.' },
      { q: 'What percentage of income should go to groceries?', a: 'Financial advisors suggest 10-15% of after-tax income for food (groceries + dining out). Average American family spends about 10% on food. Higher grocery budget = lower dining out budget.' },
      { q: 'Is organic food worth the cost?', a: 'EWG\'s Dirty Dozen list identifies highest-pesticide produce worth buying organic. Clean Fifteen can be bought conventionally. Organic is typically 20-100% more expensive. Prioritize organic for produce eaten with skin.' },
      { q: 'How much does meal planning save?', a: 'Studies suggest meal planning reduces grocery spend by 15-25% by reducing food waste (Americans waste 30-40% of food) and eliminating impulse purchases. Also reduces dining out spending.' },
      { q: 'What is the cheapest nutritious way to eat?', a: 'Legumes (beans, lentils): $0.50-1.00/lb dried, highly nutritious. Rice and oats. Eggs. Canned fish (sardines, tuna). Frozen vegetables. Seasonal produce. These staples can provide balanced nutrition at $5-7/day per person.' },
    ],
    aiQA: [
      { q: 'How much should I spend on groceries per month?', a: 'USDA thrifty plan: ~$210/adult/month. Moderate: ~$340/adult. Actual varies widely.' },
      { q: 'How much does a family of 4 spend on groceries?', a: 'Average: $600-$1,200/month depending on location, diet, and shopping habits.' },
      { q: 'How do I reduce my grocery bill?', a: 'Meal plan, buy seasonal produce, use store brands, reduce meat, and minimize food waste.' },
      { q: 'What percentage of income should go to food?', a: 'Financial guidelines suggest 10-15% of after-tax income for all food expenses.' },
      { q: 'What are the cheapest healthy foods?', a: 'Lentils, beans, rice, oats, eggs, frozen vegetables, canned fish, and seasonal produce.' },
    ],
  },

  'final-grade-needed': {
    quickAnswer: 'Required final exam score = (Target grade% - Current grade% x (1 - final weight)) / Final weight. If you need an 85% final grade, have 82% with 30% remaining: required = (85 - 82x0.7) / 0.3 = 92%.',
    whatIs: 'The Final Grade Needed Calculator computes the minimum score you must earn on your final exam to achieve a desired course grade. Enter your current average, the weight of the final exam, and your target grade to see what you need.',
    howToUse: ['Enter your current grade percentage in the course.', 'Enter the weight of the final exam (as a decimal or percentage).', 'Enter your desired final course grade.', 'Click Calculate to see required final exam score.'],
    formula: 'Required final = (Target% - Current% x (1 - Final_weight)) / Final_weight. Example: Target 80%, current 75%, final is 40%: Required = (80 - 75x0.6) / 0.4 = (80-45) / 0.4 = 87.5%.',
    examples: [
      { title: 'Need a B', scenario: 'Current grade 76%, target 80%, final is 30% of grade.', result: 'Required = (80 - 76x0.7) / 0.3 = (80-53.2) / 0.3 = 89.3%. Need nearly 90% on final.' },
      { title: 'Can I Skip?', scenario: 'Current 94%, target 90%, final is 20%.', result: 'Required = (90 - 94x0.8) / 0.2 = (90-75.2) / 0.2 = 74%. Need 74%+ on final. Cannot skip entirely.' },
    ],
    useCases: ['Exam study priority planning.', 'Determining if final exam will change letter grade.', 'Academic planning at semester end.', 'Motivating or managing expectations for final study effort.'],
    faqs: [
      { q: 'What if the required score is over 100%?', a: 'It is mathematically impossible to reach your target grade. Focus on the highest grade now achievable and consider whether extra credit options exist.' },
      { q: 'What if the required score is negative?', a: 'You already have your target grade locked in regardless of the final. You may still want to try your best — it can only help, not hurt.' },
      { q: 'How do I raise a low grade before the final?', a: 'Check for missing assignments (zeros kill grades). Complete any extra credit. Ask about assignment resubmission. Attend office hours. Focus on high-weight remaining assignments. Communicate with the professor early.' },
      { q: 'How much can the final exam change my grade?', a: 'It depends on its weight. A 50% weighted final can swing your grade dramatically. A 10% weighted final has limited impact. This calculator shows the exact impact for your specific situation.' },
      { q: 'What is the minimum passing grade?', a: 'Usually D (60-69%) or C (70%) depending on program requirements. Many major courses require C or higher. Graduate programs often require B or higher (80%+) in core courses.' },
    ],
    aiQA: [
      { q: 'What score do I need on my final to get a B?', a: 'Use the formula: Required = (80% - Current% x (1 - Final_weight)) / Final_weight.' },
      { q: 'How is the final exam grade calculated?', a: 'Final course grade = Current grade x (1 - final_weight) + Final exam score x final_weight.' },
      { q: 'Can I fail the final and still pass?', a: 'Depends on current grade and final weight. Calculate using the final grade formula.' },
      { q: 'What if I need over 100% on the final?', a: 'Your target grade is not achievable. Focus on maximizing what is still possible.' },
      { q: 'How much does the final exam affect your grade?', a: 'Depends on its weight. A 40% weighted final can change your grade by up to ±40 percentage points.' },
    ],
  },

  'gpa-by-credits': {
    quickAnswer: 'GPA by credits = Sum of (grade points x credit hours) / total credit hours. A course worth 4 credits contributes more than a 2-credit course. Harder courses with more credits have greater GPA impact.',
    whatIs: 'The GPA by Credits Calculator computes your GPA accounting for different credit hour weights per course. It shows which courses most heavily influence your overall GPA and helps you strategize for maximum GPA improvement.',
    howToUse: ['Enter each course with its credit hours and letter grade.', 'Click Calculate to see GPA and how each course contributes.'],
    formula: 'Quality points per course = Grade points x Credit hours. Cumulative GPA = Total quality points / Total credit hours. High-credit courses contribute more: 4-credit A (16 points) vs. 2-credit A (8 points).',
    examples: [
      { title: 'Semester Courses', scenario: 'Calculus (4 cr, B+), English (3 cr, A), Chemistry (4 cr, C+), PE (1 cr, A).', result: 'Quality points: 13.2+12+9.2+4=38.4. Credits: 12. GPA = 38.4/12 = 3.2.' },
      { title: 'High Impact Course', scenario: 'Same GPA 3.0. Adding 4-credit A vs. 2-credit A.', result: '4-credit A adds 16 quality points. 2-credit A adds 8. High-credit courses matter twice as much.' },
    ],
    useCases: ['Strategic course selection for GPA improvement.', 'Understanding which classes matter most.', 'Degree audit planning.', 'Transfer GPA calculation.'],
    faqs: [
      { q: 'Should I take harder courses with higher credit hours?', a: 'Strategically: taking more credits in your strong subjects and fewer in weak ones maximizes GPA. But credit overloading increases academic workload risk. Balance challenge with sustainable performance.' },
      { q: 'How many credits does a typical semester have?', a: 'Full-time: 12-18 credits per semester. Typical: 15 credits (5 x 3-credit courses). Maximum: most schools cap at 18-21 without advisor approval.' },
      { q: 'How do I improve a low GPA?', a: 'Focus on high-credit courses where you can earn A\'s. Retake courses where you earned D or F (if school allows grade replacement). Avoid W\'s (withdrawals) that count but earn no grade points.' },
      { q: 'What is a quality point?', a: 'Quality points = grade points x credit hours. An A in a 4-credit course = 4.0 x 4 = 16 quality points. GPA = total quality points / total credit hours.' },
      { q: 'Do pass/fail courses affect GPA?', a: 'Pass/fail (P/F) courses typically do NOT affect GPA (credits count toward graduation but not GPA calculation). This makes them useful for electives in challenging areas.' },
    ],
    aiQA: [
      { q: 'How do credit hours affect GPA?', a: 'More credit hours = more weight in GPA. A 4-credit A contributes twice as many quality points as a 2-credit A.' },
      { q: 'What are quality points?', a: 'Grade points x credit hours for each course. Sum of quality points / total credits = GPA.' },
      { q: 'How many credits is a full-time semester?', a: 'Typically 12-18 credits. 15 credits is most common (5 three-credit courses).' },
      { q: 'Does a 1-credit course affect GPA much?', a: 'Minimally. 1-credit A adds 4.0 quality points vs. potentially hundreds already earned.' },
      { q: 'How do I raise a 2.5 GPA to 3.0?', a: 'Depends on credits completed. Fewer completed credits = faster GPA change. With 60 credits at 2.5, need ~120 quality points above current average in future courses.' },
    ],
  },

  'semester-gpa': {
    quickAnswer: 'Semester GPA = Total quality points this semester / Total credits this semester. Quality points = Grade points x Credit hours. A 3.5 semester GPA with 15 credits = 52.5 quality points.',
    whatIs: 'The Semester GPA Calculator computes your GPA for just the current semester (not cumulative) and shows how the semester affects your overall cumulative GPA. See your term GPA and projected cumulative GPA update in real time.',
    howToUse: ['Enter each course this semester: name, credit hours, and expected grade.', 'Enter your current cumulative GPA and total earned credits.', 'Click Calculate to see semester GPA and updated cumulative GPA.'],
    formula: 'Semester GPA = Σ(grade_points x credits) / Σ(credits) for this semester. New cumulative GPA = (Previous quality points + Semester quality points) / (Previous credits + Semester credits). Previous quality points = Previous GPA x Previous credits.',
    examples: [
      { title: 'Good Semester', scenario: 'Previous: 3.0 GPA, 60 credits. This semester: 4 courses, 15 credits, all A\'s and B\'s.', result: 'Semester GPA: 3.6. New cumulative: (3.0x60 + 3.6x15) / 75 = (180+54)/75 = 3.12. GPA up 0.12.' },
      { title: 'Recovery Semester', scenario: 'Previous: 2.5 GPA, 30 credits. This semester: 15 credits of A\'s (4.0).', result: 'New cumulative: (2.5x30 + 4.0x15) / 45 = (75+60)/45 = 3.0. Significant recovery!' },
    ],
    useCases: ['Real-time grade tracking during semester.', 'Goal setting for GPA improvement.', 'Scholarship maintenance planning.', 'Academic probation recovery planning.'],
    faqs: [
      { q: 'How much can one semester change my cumulative GPA?', a: 'Depends on how many credits you\'ve already completed. Early in your degree (30 credits), one 15-credit semester at 4.0 can raise GPA by 0.5+. Later (90 credits), the same semester raises it only by ~0.15.' },
      { q: 'What GPA should I aim for each semester?', a: 'If your current GPA equals your target, maintain it. To raise GPA: each semester GPA must exceed your current cumulative GPA. To raise from 2.5 to 3.0, you need semesters consistently above 3.0.' },
      { q: 'What is Latin honors GPA cutoff?', a: 'Typically: Cum Laude: 3.5 GPA. Magna Cum Laude: 3.7 GPA. Summa Cum Laude: 3.9-4.0 GPA. Varies by institution — some use class rank instead of GPA cutoffs.' },
      { q: 'Does taking fewer courses help GPA?', a: 'Only if you perform better in fewer courses. The total credits and quality points are what matter — not course load per se. However, reducing load during difficult personal circumstances is often wise.' },
      { q: 'Can I see my GPA before official grades are posted?', a: 'Yes — use this calculator. Enter your expected grades (based on current scores) to project your GPA before official posting. Track all assignment scores throughout semester for most accurate projection.' },
    ],
    aiQA: [
      { q: 'What is semester GPA?', a: 'Your GPA for just the current semester, separate from cumulative GPA.' },
      { q: 'How does semester GPA affect cumulative GPA?', a: 'New cumulative = (Old quality points + Semester quality points) / Total credits.' },
      { q: 'Can one good semester fix a bad GPA?', a: 'It helps, but early semesters have more impact. 30 credits of high GPA has less effect when you have 90 credits of low GPA already.' },
      { q: 'What semester GPA do I need to raise a 2.5 to 3.0?', a: 'Depends on current credits. More past credits means higher semester GPA required.' },
      { q: 'What is the term GPA?', a: 'Same as semester GPA — the GPA earned in a single academic term, not counting previous semesters.' },
    ],
  },

  'reverse-grade': {
    quickAnswer: 'Reverse grade: if a test is worth 100 points and the class average is 72, what score puts you in the top 25%? Or: you need a 90% course average — what grade do you need on the next assignment?',
    whatIs: 'The Reverse Grade Calculator works backwards from a desired outcome: given your current grade and the weight of remaining assignments, it calculates what score you need to achieve a target grade. It also reverse-calculates missing scores from known averages.',
    howToUse: ['Select the calculation type: required score for target grade, or find missing score from average.', 'Enter your known values.', 'Click Calculate to see the required or missing score.'],
    formula: 'Required score = (Target% - Current% x Weight_already_done) / Weight_of_assignment. Missing score from average: Score = (Average x N) - Sum_of_known_scores. Example: 3 quizzes averaging 85: 255 total. Quizzes 90 and 80 known: 255-170=85 for third quiz.',
    examples: [
      { title: 'Missing Quiz Score', scenario: '3 quiz average is 88. Scores: 92, ?, 85.', result: 'Total needed: 88x3 = 264. Known: 92+85=177. Missing: 264-177=87.' },
      { title: 'Target Final Assignment', scenario: 'Current grade 82%. Final assignment worth 20%. Target 85%.', result: 'Required score = (85 - 82x0.8) / 0.2 = (85-65.6)/0.2 = 97%.' },
    ],
    useCases: ['Determining what grade is needed on upcoming assignments.', 'Recovering a missing quiz or test score from an average.', 'Planning study effort allocation.', 'Academic advising calculations.'],
    faqs: [
      { q: 'How do I find a missing score from an average?', a: 'Missing score = (Average x number of scores) - sum of known scores. If 4 scores average 80 (total=320) and you know 75, 85, 90: missing = 320-250=70.' },
      { q: 'What if I need more than 100% on an assignment?', a: 'Your target grade is unachievable this term. Adjust your target to the highest attainable grade, or look for extra credit opportunities.' },
      { q: 'How accurate are grade estimates?', a: 'Perfectly accurate when you have exact weights and current scores. Estimates become less certain when assignments are not yet graded or weights are approximate.' },
      { q: 'What is the difference between this and the Final Grade Needed calculator?', a: 'This calculator is more general — it works for any single assignment or remaining portion, not just final exams. Use for essays, projects, midterms, and any upcoming grade component.' },
      { q: 'Can I use this for weighted categories?', a: 'Yes. Convert category weights to the percentage of total grade remaining. If tests are 50% and you have one more test, it is worth 50% x 1/3 of tests taken = various depending on your syllabus.' },
    ],
    aiQA: [
      { q: 'How do I find a missing score from an average?', a: 'Missing = (Average x number of items) - sum of known items.' },
      { q: 'What score do I need on an assignment worth 25% to get a 90% average if I have 88% currently?', a: 'Required = (90 - 88x0.75) / 0.25 = (90-66) / 0.25 = 96%.' },
      { q: 'My 3 test average is 82. I scored 78 and 90. What was my other test?', a: '82x3 = 246 total. 78+90=168 known. Missing: 246-168=78.' },
      { q: 'Can I get an A if I need 103% on the final?', a: 'No — that is mathematically impossible. Your target grade for the course is not achievable.' },
      { q: 'What is reverse grade calculation useful for?', a: 'Figuring out exactly what score you need on remaining work to hit a grade target.' },
    ],
  },
};
