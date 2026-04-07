import type { ToolSEOMap } from './index';

export const HEALTH_SEO: ToolSEOMap = {
  'bmi': {
    quickAnswer: 'BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared. A BMI of 18.5-24.9 is considered normal weight.',
    whatIs: 'The BMI Calculator computes your Body Mass Index using the World Health Organization\'s standard formula: weight (kg) / height (m)^2. BMI is the most widely used population-level screening tool for weight status. While it has limitations (it doesn\'t account for muscle mass or fat distribution), it provides a quick, evidence-based indicator of whether someone is underweight, normal weight, overweight, or obese.',
    howToUse: [
      'Enter your weight in kilograms or pounds.',
      'Enter your height in meters, feet/inches, or centimeters.',
      'Click Calculate to see your BMI value and weight category.',
      'Read the interpretation for your BMI range.',
    ],
    formula: 'BMI = Weight (kg) / Height (m)^2. For imperial: BMI = (Weight (lbs) / Height (inches)^2) x 703. Example: 70kg at 1.75m height: BMI = 70 / (1.75)^2 = 70 / 3.0625 = 22.9 (Normal weight).',
    examples: [
      { title: 'Adult Male', scenario: '80kg, 180cm tall.', result: 'BMI = 80 / (1.80)^2 = 80 / 3.24 = 24.7. Normal weight range.' },
      { title: 'Imperial Measurement', scenario: '165 lbs, 5\'6" (66 inches) tall.', result: 'BMI = (165 / 66^2) x 703 = (165 / 4356) x 703 = 26.6. Overweight range.' },
    ],
    useCases: [
      'Annual health check-up baseline screening.',
      'Tracking weight status changes during diet or exercise programs.',
      'Insurance and clinical health risk assessment.',
      'Public health research and population screening.',
    ],
    faqs: [
      { q: 'What are the BMI categories?', a: 'WHO categories: Underweight < 18.5, Normal 18.5-24.9, Overweight 25.0-29.9, Obese Class I 30.0-34.9, Obese Class II 35.0-39.9, Obese Class III (severe) >= 40.' },
      { q: 'Is BMI accurate for athletes?', a: 'No. Athletes with high muscle mass may have a high BMI while having low body fat. BMI cannot distinguish muscle from fat. Athletes and bodybuilders are often classified as "overweight" or "obese" by BMI despite being very healthy.' },
      { q: 'Is BMI different for men and women?', a: 'The BMI scale is the same for adult men and women. However, women naturally carry more body fat at any given BMI than men. Some researchers argue for gender-specific cutoffs.' },
      { q: 'What is BMI for children?', a: 'For children (2-19 years), BMI is plotted on growth charts as a percentile. Below 5th percentile is underweight; 85th-95th is overweight; above 95th is obese. The CDC growth charts are the US standard.' },
      { q: 'What is the healthy BMI range for Asians?', a: 'Some Asian populations have higher health risks at lower BMI values. The WHO recommends lower cutoffs for Asian populations: overweight at BMI 23+, obese at BMI 27.5+ for some Asian groups.' },
    ],
    aiQA: [
      { q: 'What is a normal BMI?', a: '18.5 to 24.9 is the normal (healthy weight) BMI range.' },
      { q: 'How do I calculate my BMI?', a: 'BMI = weight (kg) / height (m)^2. Or use this calculator by entering your weight and height.' },
      { q: 'What BMI is overweight?', a: 'BMI 25.0-29.9 is classified as overweight.' },
      { q: 'What BMI is obese?', a: 'BMI 30.0 or above is classified as obese.' },
      { q: 'What is a healthy weight for 5\'6"?', a: 'For a height of 5\'6" (168cm), healthy weight range (BMI 18.5-24.9) is approximately 115-154 lbs (52-70kg).' },
    ],
  },

  'calorie': {
    quickAnswer: 'Your daily calorie needs depend on age, sex, height, weight, and activity level. The Harris-Benedict formula estimates BMR; multiply by an activity factor for total daily needs (TDEE).',
    whatIs: 'The Calorie Calculator estimates your daily calorie needs using the Mifflin-St Jeor equation (the gold standard recommended by the Academy of Nutrition and Dietetics) to calculate Basal Metabolic Rate (BMR), then applies an activity multiplier to find Total Daily Energy Expenditure (TDEE). It provides separate targets for weight loss, maintenance, and weight gain.',
    howToUse: [
      'Enter your age, sex, height, and weight.',
      'Select your activity level (sedentary, lightly active, moderately active, very active, extra active).',
      'Click Calculate to see BMR and TDEE.',
      'Subtract 500 calories from TDEE for 1 lb/week weight loss goal.',
    ],
    formula: 'Mifflin-St Jeor BMR: Men = (10 x weight kg) + (6.25 x height cm) - (5 x age) + 5. Women = (10 x weight kg) + (6.25 x height cm) - (5 x age) - 161. TDEE = BMR x Activity Multiplier (1.2 to 1.9).',
    examples: [
      { title: '30-Year-Old Female', scenario: '65kg, 165cm, lightly active (desk job + 3 workouts/week).', result: 'BMR = 1,418 calories. TDEE = 1,418 x 1.375 = 1,950 calories/day.' },
      { title: '45-Year-Old Male', scenario: '85kg, 178cm, moderately active.', result: 'BMR = 1,841 calories. TDEE = 1,841 x 1.55 = 2,853 calories/day.' },
    ],
    useCases: [
      'Setting a daily calorie target for weight loss or muscle gain.',
      'Planning meal prep and tracking macros.',
      'Understanding how much exercise offsets specific foods.',
      'Calculating calorie needs for athletic training periods.',
    ],
    faqs: [
      { q: 'What is the Mifflin-St Jeor equation?', a: 'The most accurate BMR formula for most adults, recommended by nutrition organizations. It accounts for sex, weight, height, and age. It typically estimates within 10% of true BMR for non-obese individuals.' },
      { q: 'What is a calorie deficit?', a: 'A calorie deficit occurs when you eat fewer calories than you burn (TDEE). A 500-calorie daily deficit creates approximately 1 lb of fat loss per week (since 3,500 calories ≈ 1 lb of fat).' },
      { q: 'What are activity multipliers?', a: 'Sedentary (little exercise): x1.2. Lightly active (1-3 days/week): x1.375. Moderately active (3-5 days/week): x1.55. Very active (6-7 days/week): x1.725. Extra active (athletic, physical job): x1.9.' },
      { q: 'Can I eat below 1,200 calories safely?', a: 'Very low calorie diets (below 1,200 for women, 1,500 for men) increase muscle loss risk, nutritional deficiencies, and metabolic adaptation. Most nutritionists advise against going below 1,200 calories without medical supervision.' },
      { q: 'Why do calorie needs decrease with age?', a: 'BMR decreases approximately 1-2% per decade after age 30, partly due to muscle mass loss (sarcopenia). Also, activity levels typically decrease. Both factors reduce daily calorie needs as we age.' },
    ],
    aiQA: [
      { q: 'How many calories should I eat per day?', a: 'Depends on your size, age, and activity. Average adult needs 1,800-2,500 calories/day. Use this calculator for your specific estimate.' },
      { q: 'How many calories to lose weight?', a: 'Eat 500 calories below your TDEE to lose approximately 1 lb per week.' },
      { q: 'What is a calorie?', a: 'A unit of energy. Food calories (kcal) measure the energy your body extracts from food for metabolism and physical activity.' },
      { q: 'How many calories does walking burn?', a: 'Approximately 80-100 calories per mile walked, depending on weight and pace.' },
      { q: 'What is the difference between calories in and calories out?', a: 'Calories in = food energy consumed. Calories out = energy burned through BMR + activity. The balance determines weight change.' },
    ],
  },

  'water-intake': {
    quickAnswer: 'The general recommendation is to drink about 8 glasses (2 liters) of water per day, but actual needs vary by body weight, activity, and climate. A better estimate is 35ml per kg of body weight.',
    whatIs: 'The Water Intake Calculator estimates your personalized daily water needs based on body weight, activity level, and climate. The common "8 glasses a day" rule is a simplification — actual needs vary significantly. Active individuals, hot climates, and higher body weights all increase requirements. This calculator uses evidence-based formulas from sports medicine and nutrition research.',
    howToUse: [
      'Enter your body weight in pounds or kilograms.',
      'Select your activity level.',
      'Select climate conditions (hot, temperate, cold).',
      'Click Calculate to see your recommended daily water intake in cups, liters, and fluid ounces.',
    ],
    formula: 'Base intake = Weight (lbs) x 0.5 oz/lb (or 35ml/kg). Exercise adds 12 oz per 30 minutes of exercise. Heat adds 10-15% to base. Pregnancy adds 300ml; breastfeeding adds 700ml. Example: 150 lb person: 150 x 0.5 = 75 oz = 2.2 liters/day.',
    examples: [
      { title: 'Active Runner', scenario: '70kg person, runs 1 hour daily, temperate climate.', result: 'Base: 70 x 35ml = 2,450ml. Exercise: 480ml (1 hour). Total: approximately 2.9 liters = 12 cups/day.' },
      { title: 'Sedentary Office Worker', scenario: '60kg, air-conditioned office, minimal exercise.', result: 'Base: 60 x 35ml = 2,100ml = 2.1 liters = 8.8 cups/day.' },
    ],
    useCases: [
      'Athletes planning fluid intake during training and events.',
      'People trying to improve hydration habits.',
      'Tracking hydration for weight loss programs.',
      'Health-conscious individuals optimizing wellness routines.',
    ],
    faqs: [
      { q: 'What is the 8x8 rule for water?', a: 'Drink 8 glasses of 8 oz each daily — totaling 64 oz or about 1.9 liters. While easy to remember, research shows individual needs vary widely. Weight and activity are better predictors than a universal rule.' },
      { q: 'Does coffee count toward water intake?', a: 'Yes. Despite the mild diuretic effect of caffeine, research shows coffee and tea count toward daily fluid intake. At typical consumption levels, the diuretic effect is outweighed by the fluid volume consumed.' },
      { q: 'What are signs of dehydration?', a: 'Dark yellow urine, thirst, dry mouth, headache, fatigue, and reduced concentration are early signs. Severe dehydration causes dizziness, rapid heartbeat, and confusion — a medical emergency.' },
      { q: 'Is it possible to drink too much water?', a: 'Yes. Overhydration (hyponatremia) can dangerously dilute blood sodium levels. At risk: endurance athletes who drink only water, not electrolytes. For average people, the risk is very low — kidneys can handle 0.8-1 liter per hour.' },
      { q: 'How does climate affect water needs?', a: 'Hot and humid conditions increase sweat losses significantly. A person exercising in 90°F heat can lose 2-3 liters of sweat per hour. Cold weather reduces thirst but not necessarily fluid needs, especially at altitude.' },
    ],
    aiQA: [
      { q: 'How much water should I drink per day?', a: 'About 2-3 liters for most adults, depending on weight and activity. A simple guide: half your body weight in pounds = ounces per day.' },
      { q: 'How many glasses of water is 2 liters?', a: 'Approximately 8 glasses (using 8oz/250ml glasses).' },
      { q: 'Can drinking more water help lose weight?', a: 'Yes — water boosts metabolism slightly, reduces appetite, and replaces calorie-containing drinks.' },
      { q: 'What color should urine be for good hydration?', a: 'Pale yellow (straw-colored) indicates good hydration. Dark yellow or amber suggests dehydration.' },
      { q: 'Does food count toward daily water intake?', a: 'Yes. Food provides about 20% of daily fluid intake. Water-rich foods (fruits, vegetables, soups) contribute significantly.' },
    ],
  },

  'body-fat': {
    quickAnswer: 'Body fat percentage is the proportion of your total body weight that is fat tissue. Healthy ranges are 10-25% for men and 20-35% for women. This calculator uses the US Navy circumference method.',
    whatIs: 'The Body Fat Calculator estimates body fat percentage using the US Navy circumference method, which uses waist, neck, and hip measurements. While not as accurate as DEXA scans or hydrostatic weighing, it is a reliable non-invasive method that correlates well with clinical measures. It is used in military fitness testing and health assessments worldwide.',
    howToUse: [
      'Select your sex.',
      'Enter your waist circumference at the navel (natural waist for women).',
      'Enter your neck circumference below the larynx.',
      'Women: also enter hip circumference at the widest point.',
      'Click Calculate to see estimated body fat percentage and lean mass.',
    ],
    formula: 'Men: %BF = 86.010 x log10(waist - neck) - 70.041 x log10(height) + 36.76. Women: %BF = 163.205 x log10(waist + hip - neck) - 97.684 x log10(height) - 78.387. All measurements in cm. Developed by the US Navy.',
    examples: [
      { title: 'Male Example', scenario: 'Male, waist 86cm, neck 38cm, height 178cm.', result: 'Estimated body fat: approximately 16%. Lean mass at 80kg: 67.2kg.' },
      { title: 'Female Example', scenario: 'Female, waist 75cm, hip 97cm, neck 34cm, height 165cm.', result: 'Estimated body fat: approximately 25%. Within healthy range for women.' },
    ],
    useCases: [
      'Tracking body composition changes during diet and exercise programs.',
      'US military physical fitness testing and compliance.',
      'Setting realistic body composition goals beyond just weight.',
      'Athletic program design using lean mass as a reference point.',
    ],
    faqs: [
      { q: 'What is the healthy body fat percentage range?', a: 'Men: Essential fat 2-5%, Athletes 6-13%, Fitness 14-17%, Average 18-24%, Obese 25%+. Women: Essential 10-13%, Athletes 14-20%, Fitness 21-24%, Average 25-31%, Obese 32%+.' },
      { q: 'What is the most accurate way to measure body fat?', a: 'DEXA (Dual-Energy X-ray Absorptiometry) is the gold standard at ±1-2% accuracy. Hydrostatic weighing and Bod Pod are also highly accurate. Skinfold calipers (4-5%) and bioelectrical impedance (BIA) (3-5%) are common but less precise.' },
      { q: 'How often should I measure body fat?', a: 'Monthly measurements are most useful for tracking trends. Daily fluctuations from hydration, food intake, and measurement inconsistency can be misleading. Use the same method, time of day, and conditions each time.' },
      { q: 'What is visceral fat?', a: 'Visceral fat is fat stored around internal organs (liver, intestines, pancreas). Unlike subcutaneous fat (under the skin), visceral fat is metabolically active and strongly linked to diabetes, heart disease, and inflammation. Waist circumference is the best proxy measure.' },
      { q: 'Can I reduce body fat without losing weight?', a: 'Yes — body recomposition. Consistent strength training with adequate protein intake can simultaneously build muscle and lose fat, leaving scale weight unchanged while body fat percentage drops.' },
    ],
    aiQA: [
      { q: 'What is a healthy body fat percentage?', a: 'Men: 10-20% healthy. Women: 20-30% healthy. Athletes are typically lower.' },
      { q: 'How accurate is the Navy method for body fat?', a: 'The US Navy method is accurate within 3-4% for most people — reliable for tracking trends if not absolute precision.' },
      { q: 'What is essential body fat?', a: 'The minimum fat needed for basic physiological functions: 2-5% for men, 10-13% for women.' },
      { q: 'Does higher muscle mass lower body fat percentage?', a: 'Yes. Body fat % = fat mass / total body mass. More muscle increases total body mass, lowering fat percentage even if fat mass stays the same.' },
      { q: 'What is the difference between fat loss and weight loss?', a: 'Weight loss includes fat, muscle, water, and bone. Fat loss specifically targets fat tissue. The goal of healthy weight loss is to maximize fat loss while minimizing muscle loss.' },
    ],
  },

  'bmr': {
    quickAnswer: 'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic functions — breathing, circulation, and cell production. The Mifflin-St Jeor equation is the most accurate formula.',
    whatIs: 'The BMR Calculator estimates the calories your body uses at complete rest using validated formulas. BMR represents the minimum calorie intake needed just to stay alive if you did nothing all day. It is the foundation of all calorie calculations — multiply by an activity factor to get TDEE (Total Daily Energy Expenditure). Understanding BMR helps set realistic calorie targets for any health goal.',
    howToUse: [
      'Enter your sex, age, weight, and height.',
      'Click Calculate to see your BMR using multiple formula options.',
      'Compare Mifflin-St Jeor (most accurate), Harris-Benedict (classic), and Katch-McArdle (if body fat is known).',
    ],
    formula: 'Mifflin-St Jeor (Recommended): Men: BMR = 10W + 6.25H - 5A + 5. Women: BMR = 10W + 6.25H - 5A - 161. Where W = weight (kg), H = height (cm), A = age. Harris-Benedict (1919): Men: BMR = 88.362 + (13.397 x W) + (4.799 x H) - (5.677 x A).',
    examples: [
      { title: '35-Year-Old Woman', scenario: '68kg, 163cm, age 35.', result: 'Mifflin-St Jeor BMR = (10 x 68) + (6.25 x 163) - (5 x 35) - 161 = 680 + 1018.75 - 175 - 161 = 1,362 calories/day at rest.' },
      { title: '28-Year-Old Man', scenario: '82kg, 182cm, age 28.', result: 'BMR = (10 x 82) + (6.25 x 182) - (5 x 28) + 5 = 820 + 1137.5 - 140 + 5 = 1,822 calories/day at rest.' },
    ],
    useCases: [
      'Foundation for TDEE and calorie target calculations.',
      'Understanding why weight loss slows down over time (BMR decreases as weight drops).',
      'Nutrition planning and diet program design.',
      'Explaining metabolic differences between individuals.',
    ],
    faqs: [
      { q: 'What is the difference between BMR and RMR?', a: 'BMR (Basal Metabolic Rate) is measured under strict conditions: 12-hour fast, rested, thermoneutral environment. RMR (Resting Metabolic Rate) is measured at rest but without these strict conditions. RMR is typically 10-20% higher than BMR and more practically measurable.' },
      { q: 'Does BMR decrease when dieting?', a: 'Yes. Calorie restriction causes adaptive thermogenesis — BMR decreases beyond what is expected from weight loss alone, a phenomenon sometimes called "metabolic adaptation" or "starvation mode." This is why long-term dieting becomes progressively harder.' },
      { q: 'What factors increase BMR?', a: 'Higher muscle mass (muscle burns 6x more calories than fat at rest), youth, male sex, tall height, fever, and hyperthyroidism all increase BMR. Cold exposure and stimulants like caffeine cause modest increases.' },
      { q: 'What is the Katch-McArdle formula?', a: 'BMR = 370 + (21.6 x Lean Body Mass in kg). Uses lean body mass instead of total weight, making it the most accurate formula when body fat percentage is known. Requires an accurate body composition measurement.' },
      { q: 'How does muscle affect BMR?', a: 'A pound of muscle burns approximately 6 calories/day at rest vs. 2 calories/day for a pound of fat. Building muscle through resistance training is the most effective long-term strategy for raising BMR.' },
    ],
    aiQA: [
      { q: 'What is BMR?', a: 'Basal Metabolic Rate — the calories your body burns daily at complete rest to maintain basic life functions.' },
      { q: 'What is the average BMR for women?', a: 'Approximately 1,200-1,500 calories/day, depending on size and age.' },
      { q: 'What is the average BMR for men?', a: 'Approximately 1,500-2,000 calories/day, depending on size and age.' },
      { q: 'How do I increase my BMR?', a: 'Build muscle through strength training, eat adequate protein, stay active, and avoid extreme calorie restriction.' },
      { q: 'Is BMR the same as resting metabolism?', a: 'Very similar. BMR is stricter (measured under controlled conditions). RMR is more practical and slightly higher.' },
    ],
  },

  'weight-loss': {
    quickAnswer: 'To lose 1 pound per week, create a 500-calorie daily deficit through diet, exercise, or both. This calculator shows your target date for reaching your goal weight based on your current calorie balance.',
    whatIs: 'The Weight Loss Calculator computes how long it will take to reach a goal weight based on your current calorie deficit or surplus. It uses the 3,500 calories per pound approximation (with Mifflin-St Jeor for TDEE calculation) to project a weight loss timeline. It also shows healthy maximum weekly loss targets and warns about losses that may indicate muscle breakdown.',
    howToUse: [
      'Enter your current weight and goal weight.',
      'Enter your age, height, and sex.',
      'Select your activity level.',
      'Enter your daily calorie intake.',
      'Click Calculate to see weekly calorie deficit and estimated weeks to goal.',
    ],
    formula: 'Weekly Deficit = (TDEE - Daily Intake) x 7. Pounds Lost Per Week = Weekly Deficit / 3,500. Weeks to Goal = (Current Weight - Goal Weight) / Pounds Per Week. Note: actual results vary due to metabolic adaptation.',
    examples: [
      { title: 'Moderate Loss', scenario: 'TDEE 2,200 calories. Eating 1,700 calories/day. Goal: lose 20 lbs.', result: 'Daily deficit: 500 calories. Weekly loss: 1 lb. Time to goal: 20 weeks (5 months).' },
      { title: 'Aggressive Cut', scenario: 'TDEE 2,500. Eating 1,500 calories. Goal: lose 15 lbs.', result: 'Daily deficit: 1,000 calories. Weekly loss: 2 lbs. Time: 7.5 weeks. Warning: 1,000 cal/day deficit risks muscle loss.' },
    ],
    useCases: [
      'Setting realistic weight loss timeline expectations.',
      'Comparing diet plan options by projected duration.',
      'Motivation tool showing specific milestone dates.',
      'Planning weight loss around a specific event or deadline.',
    ],
    faqs: [
      { q: 'Is 3,500 calories per pound accurate?', a: 'The 3,500 cal/lb rule is a useful approximation for short-term planning. It overestimates long-term weight loss because metabolic adaptation, reduced TDEE from lower body mass, and changing body composition affect actual results.' },
      { q: 'What is a safe rate of weight loss?', a: '0.5-1% of body weight per week is generally considered safe. For a 200 lb person, that is 1-2 lbs per week. Faster loss increases muscle breakdown, nutritional deficiency risk, and metabolic adaptation.' },
      { q: 'What is a weight loss plateau?', a: 'A plateau occurs when weight loss stalls despite consistent effort. Causes include metabolic adaptation (reduced BMR), reduced NEAT, and dietary miscalculation. Breaking plateaus typically requires recalculating TDEE at the new body weight.' },
      { q: 'Should I exercise or diet for weight loss?', a: 'Diet creates the calorie deficit more efficiently — exercise burns far fewer calories than most people estimate. However, exercise (especially resistance training) preserves muscle mass during a deficit, improving body composition outcomes. Both together are optimal.' },
      { q: 'What is the minimum daily calorie intake for weight loss?', a: 'Most nutrition guidelines recommend no less than 1,200 calories/day for women and 1,500 for men, even during weight loss. Very low calorie diets should only be undertaken under medical supervision.' },
    ],
    aiQA: [
      { q: 'How do I lose 1 pound a week?', a: 'Create a 500 calorie daily deficit through diet, exercise, or both.' },
      { q: 'How long to lose 20 pounds?', a: 'At 1 lb/week deficit: 20 weeks. At 2 lbs/week: 10 weeks (though faster loss risks muscle loss).' },
      { q: 'What is the fastest safe way to lose weight?', a: 'A 1-1.5% body weight loss per week is the fastest typically recommended to preserve muscle and metabolic rate.' },
      { q: 'Does drinking water help you lose weight?', a: 'Slightly — water boosts metabolism 24-30% for 60-90 minutes and reduces appetite. But it is not a substitute for a calorie deficit.' },
      { q: 'What is intermittent fasting for weight loss?', a: 'Restricting eating to a specific window (e.g., 8 hours) to naturally reduce calorie intake. Effective mainly because it reduces total calories consumed, not because of special metabolic effects.' },
    ],
  },

  'healthy-weight': {
    quickAnswer: 'Healthy weight is the weight range associated with BMI 18.5-24.9. For a 5\'7" person, the healthy weight range is approximately 118-159 lbs (53-72 kg).',
    whatIs: 'The Healthy Weight Calculator determines your ideal weight range for your height using multiple formulas: BMI-based range (18.5-24.9), Devine formula (clinical standard for medication dosing), Robinson formula, Miller formula, and Hamwi formula. Since no single formula is perfect, presenting the range across methods gives a more complete picture.',
    howToUse: [
      'Enter your height in feet/inches or centimeters.',
      'Select your sex.',
      'Click Calculate to see healthy weight range from multiple methods.',
    ],
    formula: 'BMI Range: Weight range for BMI 18.5-24.9 = Height (m)^2 x 18.5 to Height (m)^2 x 24.9. Devine Formula (men): IBW = 50 + 2.3 x (Height in inches - 60). Women: IBW = 45.5 + 2.3 x (Height in inches - 60).',
    examples: [
      { title: '5\'10" Male', scenario: 'Height 5\'10" (178cm), male.', result: 'BMI range: 129-174 lbs. Devine IBW: 73.4 kg (162 lbs). Healthy range consensus: 140-175 lbs.' },
      { title: '5\'5" Female', scenario: 'Height 5\'5" (165cm), female.', result: 'BMI range: 111-150 lbs. Devine IBW: 59.9 kg (132 lbs). Healthy range: 115-150 lbs.' },
    ],
    useCases: [
      'Setting realistic weight goals based on height.',
      'Understanding the range (not just one number) of healthy weight.',
      'Clinical drug dosing that uses ideal body weight.',
      'Assessing reasonable goal weight before starting a program.',
    ],
    faqs: [
      { q: 'What is ideal body weight?', a: 'Ideal body weight (IBW) is a clinical concept representing the weight at which health risks are minimized for a given height. Different formulas (Devine, Hamwi, Robinson) give slightly different estimates. Most clinicians use a range, not a single number.' },
      { q: 'Does frame size affect healthy weight?', a: 'Yes. Larger bone structure (large frame) naturally supports more weight. The Hamwi formula adjusts for frame size. A large-framed person\'s healthy weight can be 10% above the median IBW.' },
      { q: 'Is there one "perfect" weight?', a: 'No — health exists in a range. Healthy BMI covers a 6-7 kg range for most heights. Genetics, muscle mass, age, and ethnicity all influence where within this range a person is healthiest.' },
      { q: 'What if my goal weight is below the healthy range?', a: 'A goal weight below the healthy BMI range (< 18.5) is considered underweight and carries health risks including bone density loss, hormonal disruption, and immune impairment. Consult a healthcare provider before pursuing such a goal.' },
      { q: 'How does muscle mass affect ideal weight?', a: 'Muscular individuals can be heavier than standard IBW formulas suggest while remaining healthy. BMI and IBW are not designed for highly muscular individuals — body composition measures are more appropriate.' },
    ],
    aiQA: [
      { q: 'What is the ideal weight for my height?', a: 'Use this calculator — it provides the healthy weight range for your height using multiple clinical formulas.' },
      { q: 'What is the healthy weight range for 5\'6"?', a: 'Approximately 115-154 lbs (BMI 18.5-24.9) for a person 5\'6" (168cm).' },
      { q: 'What is ideal body weight?', a: 'The weight range associated with optimal health outcomes for a given height, typically BMI 18.5-24.9.' },
      { q: 'Can I be healthy above my ideal weight?', a: 'Yes. The BMI healthy range is a guideline, not a strict rule. Fitness level, blood pressure, cholesterol, and metabolic health matter more than the scale number alone.' },
      { q: 'What does overweight mean?', a: 'BMI 25.0-29.9. Overweight increases risk for certain health conditions but is not itself a disease — health risks depend on many factors beyond just weight.' },
    ],
  },

  'height-predictor': {
    quickAnswer: 'Adult height is estimated from parent heights using the mid-parental height formula: (Father\'s height + Mother\'s height) / 2, then +/- 2.5 inches for son/daughter.',
    whatIs: 'The Height Calculator (Height Predictor) estimates a child\'s projected adult height based on the heights of both biological parents using the mid-parental height method. The prediction gives a ±4 inch (±10cm) range within which approximately 68% of children end up. Nutrition, health during childhood, and genetics all influence final adult height.',
    howToUse: [
      'Enter the father\'s height in feet/inches or centimeters.',
      'Enter the mother\'s height.',
      'Select the child\'s sex.',
      'Click Calculate to see predicted height and the likely range.',
    ],
    formula: 'For a son: Mid-Parental Height = (Father + Mother + 5 inches) / 2. For a daughter: (Father + Mother - 5 inches) / 2. Or in cm: son = (Father + Mother + 13cm) / 2; daughter = (Father + Mother - 13cm) / 2. Prediction accuracy ±4 inches (68% confidence).',
    examples: [
      { title: 'Predicting Son\'s Height', scenario: 'Father 6\'0" (183cm), Mother 5\'5" (165cm). Predicting for son.', result: 'Mid-parental = (183 + 165 + 13) / 2 = 180.5cm (5\'11"). Range: 5\'9" to 6\'1".' },
      { title: 'Predicting Daughter\'s Height', scenario: 'Father 5\'9" (175cm), Mother 5\'3" (160cm). For daughter.', result: 'Mid-parental = (175 + 160 - 13) / 2 = 161cm (5\'3.5"). Range: 5\'1" to 5\'6".' },
    ],
    useCases: [
      'Curious parents wanting to estimate a child\'s future height.',
      'Pediatricians tracking growth relative to genetic potential.',
      'Sports coaches identifying athletes with height potential.',
      'Children and teenagers wondering how tall they will be.',
    ],
    faqs: [
      { q: 'How accurate is the height prediction?', a: 'The mid-parental method is about 68% accurate within ±4 inches. About 95% of children fall within ±8 inches of the prediction. Many factors — nutrition, sleep, stress, chronic illness — can shift actual height away from the genetic potential.' },
      { q: 'When do boys and girls stop growing?', a: 'Girls typically reach adult height by 15-17 after their growth spurt (usually 2-3 years after puberty onset). Boys continue growing until 17-20, typically peaking later than girls due to later puberty onset.' },
      { q: 'Can nutrition affect final height?', a: 'Yes. Chronic malnutrition, particularly calcium and zinc deficiency, can significantly reduce achieved height below genetic potential. Well-nourished children in developed countries tend to reach their genetic height potential.' },
      { q: 'What is HGH (human growth hormone)?', a: 'HGH is a pituitary hormone that drives childhood and adolescent growth. Synthetic HGH is prescribed for growth hormone deficiency. Its misuse for enhancement is prohibited in sports and carries health risks.' },
      { q: 'Can I make my child taller?', a: 'Ensure adequate sleep (GH secretion peaks during deep sleep), balanced nutrition (protein, calcium, vitamin D, zinc), and regular physical activity. You cannot exceed genetic potential, but you can prevent falling short of it.' },
    ],
    aiQA: [
      { q: 'How tall will my child be?', a: 'Use the mid-parental height formula: (Father + Mother height +/- 5 inches for sex) / 2. This gives a predicted range, not an exact number.' },
      { q: 'At what age do boys stop growing?', a: 'Most boys stop growing between 17-20 years old, typically 4-5 years after puberty begins.' },
      { q: 'Does tall parents mean tall children?', a: 'Generally yes — height is 70-80% heritable. But environment and nutrition also play a role.' },
      { q: 'Can you predict height from age 2?', a: 'A child\'s height at age 2 doubled is often cited as a rough adult height estimate. More accurate: use the mid-parental height formula.' },
      { q: 'What is the average height for men and women?', a: 'US averages: Men 5\'9" (175cm), Women 5\'4" (162cm). Varies significantly by country and ethnicity.' },
    ],
  },

  'waist-to-hip': {
    quickAnswer: 'Waist-to-Hip Ratio (WHR) measures body fat distribution and cardiovascular risk. Divide waist measurement by hip measurement. Healthy WHR: men < 0.90, women < 0.85.',
    whatIs: 'The Waist-to-Hip Ratio Calculator computes WHR by dividing waist circumference by hip circumference. WHR is a better predictor of cardiovascular disease, type 2 diabetes, and mortality than BMI for many populations because it measures fat distribution. Apple-shaped (waist-heavy) distribution is more dangerous than pear-shaped (hip-heavy).',
    howToUse: [
      'Measure your waist circumference at the narrowest point (just above the navel for women, at the navel for men).',
      'Measure your hip circumference at the widest point.',
      'Enter both measurements and click Calculate.',
      'Compare your result to the WHO risk categories.',
    ],
    formula: 'WHR = Waist Circumference / Hip Circumference. Low risk: women < 0.80, men < 0.90. Moderate risk: women 0.80-0.85, men 0.90-0.95. High risk: women > 0.85, men > 0.95.',
    examples: [
      { title: 'Female', scenario: 'Waist: 78cm. Hip: 96cm.', result: 'WHR = 78/96 = 0.81. WHO moderate risk category. Consider lifestyle improvements.' },
      { title: 'Male', scenario: 'Waist: 88cm. Hip: 100cm.', result: 'WHR = 88/100 = 0.88. Low risk for men (< 0.90).' },
    ],
    useCases: [
      'Cardiovascular disease risk screening.',
      'Tracking progress of targeted abdominal fat loss.',
      'Healthcare professional body composition assessment.',
      'Personal health monitoring beyond just BMI.',
    ],
    faqs: [
      { q: 'Why does fat distribution matter?', a: 'Visceral fat (abdominal fat, measured by waist circumference) is metabolically active and releases inflammatory hormones. It is more strongly linked to insulin resistance, heart disease, and type 2 diabetes than subcutaneous fat (hip and thigh fat).' },
      { q: 'Is WHR better than BMI?', a: 'For predicting cardiometabolic risk, WHR and waist circumference are better than BMI in many studies. However, BMI is easier to measure and standardize. Using both together provides a more complete picture.' },
      { q: 'What is a healthy waist circumference?', a: 'WHO recommends waist circumference below 94cm for men and 80cm for women to minimize risk. Above 102cm (men) and 88cm (women) indicates high risk regardless of BMI.' },
      { q: 'What causes high WHR?', a: 'High WHR is caused by excess abdominal fat, which is influenced by genetics, diet (high refined carbs, sugar), physical inactivity, chronic stress, poor sleep, and hormonal changes (especially in menopause).' },
      { q: 'Can WHR be reduced?', a: 'Yes. A combination of calorie deficit, aerobic exercise, strength training, stress reduction, and sleep improvement specifically reduces visceral fat and waist circumference. Spot reduction through targeted exercise is a myth — overall fat loss reduces the waist.' },
    ],
    aiQA: [
      { q: 'What is waist-to-hip ratio?', a: 'WHR = waist circumference / hip circumference. Measures where body fat is stored and indicates cardiovascular risk.' },
      { q: 'What is a healthy waist-to-hip ratio for women?', a: 'Below 0.80 is low risk. 0.80-0.85 moderate. Above 0.85 is high risk.' },
      { q: 'What is a healthy waist-to-hip ratio for men?', a: 'Below 0.90 is low risk. 0.90-0.95 moderate. Above 0.95 is high risk.' },
      { q: 'Is WHR or BMI more accurate?', a: 'WHR better predicts cardiometabolic risk in many studies. Both have limitations and are most useful together.' },
      { q: 'Where do I measure waist for WHR?', a: 'At the narrowest part of the torso, usually just above the navel. Measure after a normal exhale, not sucked in.' },
    ],
  },

  'waist-to-height': {
    quickAnswer: 'Waist-to-Height Ratio (WHtR) should be below 0.5 for most adults. The simple rule: your waist circumference should be less than half your height. This is a strong predictor of cardiometabolic risk.',
    whatIs: 'The Waist-to-Height Ratio Calculator computes WHtR by dividing waist circumference by height. Research suggests WHtR is the single most practical predictor of cardiometabolic risk across all ages, sexes, and ethnicities — more consistent than BMI. The memorable "keep your waist less than half your height" rule encapsulates the health target.',
    howToUse: [
      'Measure your waist circumference at the narrowest point.',
      'Enter your height in the same unit.',
      'Click Calculate to see your WHtR and risk category.',
    ],
    formula: 'WHtR = Waist Circumference / Height. Both in same units (cm/cm or in/in). Boundary values: < 0.40 Extremely Thin, 0.40-0.49 Healthy, 0.50-0.59 Overweight, 0.60+ Obese.',
    examples: [
      { title: 'Male', scenario: 'Height 180cm, waist 87cm.', result: 'WHtR = 87/180 = 0.483. Healthy range.' },
      { title: 'Female', scenario: 'Height 162cm, waist 84cm.', result: 'WHtR = 84/162 = 0.519. Slightly above 0.50 target.' },
    ],
    useCases: [
      'Quick self-assessment of abdominal obesity risk.',
      'Population health research and screening programs.',
      'Tracking waist reduction progress during fitness programs.',
      'Clinical risk stratification in primary care.',
    ],
    faqs: [
      { q: 'Why is 0.5 the healthy boundary?', a: 'Research across multiple large populations consistently shows that WHtR above 0.5 is associated with significantly higher risk of type 2 diabetes, hypertension, heart disease, and metabolic syndrome — regardless of age, sex, or ethnicity.' },
      { q: 'Is WHtR better than BMI for health prediction?', a: 'Several studies suggest WHtR outperforms BMI for predicting cardiometabolic risk. Unlike BMI, WHtR accounts for abdominal obesity distribution and does not vary by sex. The simple 0.5 boundary applies universally.' },
      { q: 'Does height affect the healthy waist size?', a: 'Yes — that\'s the point. A 178cm person can have a larger absolute waist than a 155cm person while both maintaining the same WHtR of 0.50. Taller people have more room to carry weight proportionally.' },
      { q: 'Can children use WHtR?', a: 'WHtR applies to children as young as 6. The same 0.5 boundary applies across age groups, making it more universal than BMI percentile charts. Several studies confirm its utility in pediatric metabolic risk assessment.' },
      { q: 'What is the difference between WHR and WHtR?', a: 'WHR (waist/hip) measures fat distribution between upper and lower body. WHtR (waist/height) measures overall abdominal adiposity. Both are useful; WHtR is considered simpler and more universally applicable.' },
    ],
    aiQA: [
      { q: 'What is waist to height ratio?', a: 'Waist circumference divided by height. Should be below 0.5 for most adults.' },
      { q: 'What is a healthy waist to height ratio?', a: '0.40-0.49 is considered healthy for most adults.' },
      { q: 'What does a WHtR above 0.5 mean?', a: 'Above 0.5 indicates abdominal obesity and elevated cardiometabolic risk.' },
      { q: 'Is WHtR the same for men and women?', a: 'The same 0.5 boundary applies to both sexes, which is one of its advantages over BMI.' },
      { q: 'How do I reduce my waist-to-height ratio?', a: 'Reduce waist circumference through aerobic exercise, diet changes, stress management, and adequate sleep.' },
    ],
  },

  'rmr': {
    quickAnswer: 'RMR (Resting Metabolic Rate) is the calories burned at rest, slightly higher than BMR because it doesn\'t require strict fasting conditions. The Mifflin-St Jeor formula is used as a close approximation.',
    whatIs: 'The RMR Calculator estimates Resting Metabolic Rate — the energy expended while at rest in a neutrally temperate environment, without strict fasting. RMR is approximately 10-20% higher than BMR (Basal Metabolic Rate) and is what most metabolic testing devices measure in clinical settings. Understanding your RMR is fundamental for nutrition planning and understanding why two people with the same weight can have different energy needs.',
    howToUse: [
      'Enter your sex, age, weight, and height.',
      'Click Calculate to see your estimated RMR in calories per day.',
      'Compare to BMR to understand the measurement difference.',
      'Multiply by your activity factor to estimate total daily calories needed.',
    ],
    formula: 'RMR is typically estimated using the same formulas as BMR (Mifflin-St Jeor). Some sources add 10% to BMR as a practical RMR estimate. Clinical RMR testing uses indirect calorimetry (measuring O2 consumption and CO2 production). Mifflin-St Jeor: Men = 10W + 6.25H - 5A + 5; Women = 10W + 6.25H - 5A - 161.',
    examples: [
      { title: '40-Year-Old Woman', scenario: '70kg, 167cm, age 40.', result: 'BMR = 1,401 cal. RMR ≈ 1,401 x 1.10 = 1,541 cal/day (if adding 10% adjustment).' },
      { title: '35-Year-Old Man', scenario: '90kg, 185cm, age 35.', result: 'BMR = 1,953 cal. Clinical RMR typically within 10-15% of this value.' },
    ],
    useCases: [
      'Pre-dietitian consultation baseline data.',
      'Post-bariatric surgery energy needs assessment.',
      'Understanding why diet-to-diet results differ between individuals.',
      'Personalizing nutrition plans beyond population averages.',
    ],
    faqs: [
      { q: 'What is the difference between RMR and BMR?', a: 'BMR (Basal Metabolic Rate) is measured under strict conditions: 12-hour fast, no prior exercise, thermoneutral. RMR (Resting Metabolic Rate) requires only 4-6 hours fasting and rest beforehand. RMR is 10-20% higher than true BMR and is more commonly measured clinically.' },
      { q: 'How is RMR clinically measured?', a: 'By indirect calorimetry: the patient breathes into a mask or canopy that measures oxygen consumed and carbon dioxide produced. From these gas exchanges, energy expenditure is calculated. Takes 20-30 minutes and requires resting quietly.' },
      { q: 'What factors raise RMR?', a: 'High muscle mass, youth, male sex, large body size, fever, hyperthyroidism, high altitude, cold exposure, recent exercise, and being pregnant all raise RMR.' },
      { q: 'What factors lower RMR?', a: 'Calorie restriction (metabolic adaptation), older age, female sex, small body size, hypothyroidism, sleep deprivation, and hot ambient temperatures lower RMR.' },
      { q: 'How can I increase my RMR?', a: 'Build muscle through resistance training (each lb of muscle burns ~6 cal/day at rest), stay active, eat adequate protein (thermal effect of protein is highest among macronutrients), get enough sleep, and avoid severe calorie restriction.' },
    ],
    aiQA: [
      { q: 'What is RMR?', a: 'Resting Metabolic Rate — calories burned at rest. Slightly higher than BMR and more practical to measure.' },
      { q: 'Is RMR the same as BMR?', a: 'No — RMR is 10-20% higher than BMR because it does not require the same strict measurement conditions.' },
      { q: 'What is average RMR?', a: 'Adult women: approximately 1,300-1,600 cal/day. Adult men: approximately 1,600-2,100 cal/day. Varies widely by size, age, and body composition.' },
      { q: 'How do I measure my true RMR?', a: 'Through indirect calorimetry in a clinical setting. Online calculators provide estimates based on anthropometric formulas.' },
      { q: 'Does RMR change with diet?', a: 'Yes — calorie restriction reduces RMR (adaptive thermogenesis). Increasing protein and resistance training partially protect RMR during a calorie deficit.' },
    ],
  },

  'steps-to-calories': {
    quickAnswer: 'The average person burns approximately 40-50 calories per 1,000 steps walked. This varies with body weight and walking speed — heavier people burn more per step.',
    whatIs: 'The Steps to Calories Calculator converts pedometer or fitness tracker step counts to estimated calorie burn. It uses body weight, step count, and walking stride to estimate energy expenditure based on MET (Metabolic Equivalent of Task) values for walking. It helps people connect daily step goals to tangible calorie burn numbers for weight management.',
    howToUse: [
      'Enter your body weight in pounds or kilograms.',
      'Enter your total step count (from phone, fitness tracker, or pedometer).',
      'Optionally enter your height to estimate stride length.',
      'Click Calculate to see estimated calories burned.',
    ],
    formula: 'Estimated Calories = Steps x (Body Weight in kg x 0.000057). Or: Calories = (Steps / Steps Per Mile) x (Body Weight lbs x 0.57). A 150 lb person walking 10,000 steps burns approximately 350-400 calories.',
    examples: [
      { title: '10,000 Steps', scenario: '68kg (150 lb) person walks 10,000 steps at moderate pace.', result: 'Approximately 350-400 calories burned (varies by terrain and speed).' },
      { title: 'Heavy Walker', scenario: '100kg (220 lb) person, 8,000 steps.', result: 'Approximately 400-440 calories — heavier people burn more per step.' },
    ],
    useCases: [
      'Tracking daily calorie burn from walking against fitness goals.',
      'Understanding if daily step count supports weight loss targets.',
      'Setting step goals based on desired calorie expenditure.',
      'Motivating regular walking by quantifying energy burned.',
    ],
    faqs: [
      { q: 'How many steps to burn 500 calories?', a: 'For a 70kg person walking at moderate pace, approximately 10,000-12,000 steps to burn 500 calories. Heavier individuals need fewer steps for the same burn.' },
      { q: 'What is the 10,000 steps per day goal?', a: '10,000 steps originated from a Japanese pedometer marketing campaign in the 1960s, not from scientific research. Research now suggests 7,000-8,000 steps for most health benefits, with diminishing returns above that.' },
      { q: 'Does step speed affect calorie burn?', a: 'Yes. Brisk walking (3.5-4 mph, ~100+ steps/minute) burns significantly more calories per step than leisurely walking (2-2.5 mph). Walking uphill or on uneven terrain also increases burn.' },
      { q: 'How many steps per mile?', a: 'Average: approximately 2,000 steps per mile. This varies by height, stride length, and walking speed. Taller people with longer strides take fewer steps per mile.' },
      { q: 'How accurate are step-to-calorie estimates?', a: 'These are estimates with about 15-20% error. Fitness trackers add heart rate and GPS data for better accuracy. For weight management, consistency in method matters more than absolute accuracy.' },
    ],
    aiQA: [
      { q: 'How many calories do 10,000 steps burn?', a: 'Approximately 300-500 calories for most adults, depending on weight and pace.' },
      { q: 'How many steps to lose a pound?', a: 'Approximately 35,000 steps to burn enough calories to lose 1 lb of fat (3,500 calories).' },
      { q: 'What is a good daily step count?', a: 'Research supports 7,000-8,000 steps/day for most health benefits. 10,000 is a popular but somewhat arbitrary target.' },
      { q: 'Does running vs. walking change calorie burn per step?', a: 'Running burns more calories per minute but slightly fewer per step (steps are longer). Per mile, running and walking burn roughly similar calories.' },
      { q: 'How many steps per day does the average American take?', a: 'Approximately 3,000-4,000 steps per day — well below recommended levels.' },
    ],
  },

  'walking-calories': {
    quickAnswer: 'Walking burns approximately 80-100 calories per mile for most people. The exact amount depends on your body weight, walking speed, terrain, and grade (incline).',
    whatIs: 'The Walking Calories Calculator estimates the energy expenditure from walking using MET (Metabolic Equivalent of Task) values. MET values for walking range from 2.0 (very slow) to 4.5+ (brisk walking, uphill). Combined with body weight and duration, this gives a reliable estimate of calories burned. Used by walkers, fitness enthusiasts, and weight managers.',
    howToUse: [
      'Enter your body weight in pounds or kilograms.',
      'Enter walking duration in minutes.',
      'Select walking pace (leisurely, moderate, brisk, or uphill).',
      'Click Calculate to see total calories burned and per-mile burn.',
    ],
    formula: 'Calories Burned = MET x Body Weight (kg) x Time (hours). MET values: Slow 2mph = 2.5, Moderate 3mph = 3.5, Brisk 3.5mph = 4.3, Very brisk 4mph = 5.0. Example: 70kg, brisk walking (MET 4.3) for 30 min = 4.3 x 70 x 0.5 = 150.5 cal.',
    examples: [
      { title: 'Lunch Walk', scenario: '75kg person, 30-minute moderate walk at 3mph.', result: 'MET 3.5 x 75 x 0.5 = 131 calories burned.' },
      { title: 'Morning Walk', scenario: '80kg person, 60-minute brisk walk at 3.5mph.', result: 'MET 4.3 x 80 x 1.0 = 344 calories burned.' },
    ],
    useCases: [
      'Planning daily walking routines for weight management.',
      'Balancing calories burned from walking against dietary intake.',
      'Building exercise habits with quantifiable calorie goals.',
      'Recovering from injury using low-impact walking as primary exercise.',
    ],
    faqs: [
      { q: 'How many calories does a 30-minute walk burn?', a: 'Typically 100-200 calories depending on weight and pace. A 70kg person at moderate pace burns about 130 calories in 30 minutes. A 100kg person burns about 185 calories.' },
      { q: 'Does walking incline burn more calories?', a: 'Yes significantly. Walking up a 5% grade increases calorie burn by about 30%. At 10% incline, burn increases 50-70%. This is why hiking is such an effective exercise.' },
      { q: 'Is walking enough exercise for weight loss?', a: 'Walking can support weight loss when combined with a calorie deficit from diet. To lose 1 lb/week, you need a 3,500 calorie weekly deficit — requiring about 7-10 hours of walking weekly just from exercise.' },
      { q: 'What is a brisk walking pace?', a: 'Brisk walking is typically 3.5-4.5 mph (5.6-7.2 km/h). At this pace, you should feel slightly breathless but still able to hold a conversation. Heart rate is elevated to 50-70% of maximum.' },
      { q: 'Does fasted walking burn more fat?', a: 'Walking before breakfast (fasted) does burn a higher proportion of fat for fuel. However, total calorie burn is the same as fed walking. For weight loss, total energy balance over the day matters more than timing.' },
    ],
    aiQA: [
      { q: 'How many calories does walking burn per mile?', a: 'Approximately 80-100 calories per mile for most adults.' },
      { q: 'How many calories in a 1-hour walk?', a: 'A 70kg person at brisk pace burns approximately 280-350 calories in one hour.' },
      { q: 'Does walking help lose belly fat?', a: 'Walking reduces total body fat, including belly fat, when combined with a calorie deficit. It cannot spot-reduce belly fat specifically.' },
      { q: 'What is MET in exercise?', a: 'MET (Metabolic Equivalent of Task) measures exercise intensity relative to rest. A MET of 1 = rest; 3 = moderate activity; 7+ = vigorous activity.' },
      { q: 'How many miles to walk to lose 1 pound?', a: 'Approximately 35 miles (burning ~3,500 calories at 100 cal/mile for a 70kg person).' },
    ],
  },
};
