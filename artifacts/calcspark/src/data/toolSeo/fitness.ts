import type { ToolSEOMap } from './index';

export const FITNESS_SEO: ToolSEOMap = {
  'tdee': {
    quickAnswer: 'TDEE (Total Daily Energy Expenditure) is the total calories your body burns each day including all activity. It is your maintenance calorie level — eating at TDEE maintains your current weight.',
    whatIs: 'The TDEE Calculator computes Total Daily Energy Expenditure by multiplying your Basal Metabolic Rate (BMR) by an activity factor representing your lifestyle and exercise habits. TDEE is the most important number in nutrition and body composition — eat below it to lose weight, above it to gain, and at it to maintain. It is calculated using the Mifflin-St Jeor formula for BMR with five activity level multipliers.',
    howToUse: [
      'Enter your sex, age, weight, and height.',
      'Select your activity level from sedentary to very active.',
      'Click Calculate to see your TDEE in calories per day.',
      'Use the weight loss/gain targets shown to set your calorie goal.',
    ],
    formula: 'TDEE = BMR x Activity Factor. Activity factors: Sedentary (1.2), Light exercise 1-3x/week (1.375), Moderate exercise 3-5x/week (1.55), Heavy exercise 6-7x/week (1.725), Athlete/physical job (1.9). Example: BMR 1,800 x 1.55 = TDEE 2,790 cal/day.',
    examples: [
      { title: 'Moderately Active Woman', scenario: 'Age 30, 65kg, 168cm, exercises 3-4x/week.', result: 'BMR = 1,419. TDEE = 1,419 x 1.55 = 2,199 calories. Weight loss target: 1,699-1,899 cal/day.' },
      { title: 'Active Male Athlete', scenario: 'Age 25, 85kg, 183cm, trains 6 days/week.', result: 'BMR = 1,961. TDEE = 1,961 x 1.725 = 3,383 calories/day to maintain weight.' },
    ],
    useCases: [
      'Setting daily calorie targets for weight loss, maintenance, or muscle gain.',
      'Planning nutrition for an athletic training season.',
      'Understanding why two people with the same weight need different calories.',
      'Recalibrating calorie targets after significant weight change.',
    ],
    faqs: [
      { q: 'How accurate is the TDEE calculator?', a: 'TDEE calculators are estimates with ±10-15% accuracy for most people. Activity multipliers are the main source of error — most people overestimate their activity level. Track actual weight change for 2-3 weeks and adjust accordingly.' },
      { q: 'Should I use TDEE for cutting or bulking?', a: 'Cutting: eat 300-500 calories below TDEE for 0.5-1 lb/week loss. Bulking: eat 200-300 above TDEE for lean muscle gain. Aggressive cuts (500+ deficit) risk muscle loss.' },
      { q: 'Why does my TDEE change?', a: 'TDEE changes with body weight (lighter people have lower BMR), activity patterns, age, and metabolic adaptation. Recalculate after significant weight change or exercise pattern shifts.' },
      { q: 'What is a reasonable TDEE for a 150 lb woman?', a: 'Approximately 1,800-2,300 calories depending on age and activity. Sedentary: ~1,700. Moderately active: ~2,000. Very active: ~2,400.' },
      { q: 'How do I verify my TDEE?', a: 'Track calorie intake at a fixed level for 3-4 weeks. If weight holds steady, that\'s your TDEE. If losing, add 100-200 calories until stable. This empirical approach is more accurate than formulas alone.' },
    ],
    aiQA: [
      { q: 'What is TDEE?', a: 'Total Daily Energy Expenditure — the total calories your body burns in a day including rest and all activity.' },
      { q: 'How do I calculate TDEE?', a: 'TDEE = BMR x Activity Factor. BMR calculated from Mifflin-St Jeor formula.' },
      { q: 'What is the average TDEE?', a: 'Men: approximately 2,000-3,000 cal/day. Women: 1,600-2,400 cal/day. Varies widely with size and activity.' },
      { q: 'How many calories below TDEE to lose weight?', a: 'A 500 cal/day deficit (eating 500 below TDEE) creates approximately 1 lb/week weight loss.' },
      { q: 'Should I eat my TDEE on rest days?', a: 'For simplicity, many people use the same TDEE every day. Advanced training periodization uses higher calories on training days (carb cycling). For most people, averaging across the week is sufficient.' },
    ],
  },

  'macro': {
    quickAnswer: 'Macros (macronutrients) are protein, carbohydrates, and fat. Recommended targets: protein 1.6-2.2g/kg body weight, fats 20-35% of calories, carbs make up the remainder.',
    whatIs: 'The Macro Calculator determines your ideal daily protein, carbohydrate, and fat intake based on your TDEE, fitness goal (cutting, maintaining, or bulking), and body composition. Getting macros right is essential for preserving muscle during fat loss, supporting recovery during muscle building, and maintaining energy for performance.',
    howToUse: [
      'Enter your TDEE or calculate it in the TDEE calculator first.',
      'Select your goal: fat loss, maintenance, muscle gain, or recomposition.',
      'Select your activity type (endurance, strength, mixed).',
      'Click Calculate to see daily grams of protein, carbs, and fat.',
    ],
    formula: 'Protein: 1.6-2.2g/kg body weight (2g/kg recommended for most). Fat: 20-35% of total calories (9 cal/g). Carbs: remaining calories (4 cal/g). Example: 2,000 cal, 70kg person: Protein = 140g (560 cal), Fat = 60g (540 cal), Carbs = 225g (900 cal).',
    examples: [
      { title: 'Fat Loss Phase', scenario: '75kg person, 1,800 cal target, muscle preservation focus.', result: 'Protein: 165g (750 cal, 42%). Fat: 55g (495 cal, 28%). Carbs: 139g (555 cal, 31%).' },
      { title: 'Muscle Building', scenario: '80kg lifter, 3,000 cal target, strength training 5x/week.', result: 'Protein: 160g (640 cal, 21%). Fat: 80g (720 cal, 24%). Carbs: 410g (1,640 cal, 55%).' },
    ],
    useCases: [
      'Setting up a macro-based diet for body composition goals.',
      'Tracking food intake with apps like MyFitnessPal.',
      'Planning meals around specific macro targets.',
      'Understanding protein needs during injury recovery.',
    ],
    faqs: [
      { q: 'How much protein do I need to build muscle?', a: 'Research suggests 1.6-2.2g per kg body weight per day for muscle protein synthesis optimization. The majority of evidence points to 2g/kg as a practical, effective target for resistance-trained individuals.' },
      { q: 'Are low-carb or low-fat diets better?', a: 'Research consistently shows that neither is superior for weight loss when protein and total calories are matched. The best diet is the one you can consistently follow. Both can work well for different people.' },
      { q: 'What is flexible dieting (IIFYM)?', a: 'If It Fits Your Macros (IIFYM) is an approach where any food can be consumed as long as it fits within daily macro targets. It prioritizes sustainability and does not restrict food types, but still requires accurate tracking.' },
      { q: 'How many calories per gram of each macro?', a: 'Protein: 4 calories/gram. Carbohydrates: 4 calories/gram. Fat: 9 calories/gram. Alcohol: 7 calories/gram (not a macro but calorie-dense).' },
      { q: 'Do I need to hit macros exactly every day?', a: 'Not exactly. Weekly averages matter more than daily perfection. Hitting within 5-10g of each macro target daily is sufficient for most goals.' },
    ],
    aiQA: [
      { q: 'What are macros?', a: 'Macronutrients: protein, carbohydrates, and fat — the three main categories of calorie-containing nutrients.' },
      { q: 'How much protein per day to lose weight?', a: 'At least 1.6g per kg body weight to preserve muscle during a calorie deficit.' },
      { q: 'What is a macro split?', a: 'The percentage of calories from each macronutrient. A common split is 30% protein, 40% carbs, 30% fat.' },
      { q: 'What is the best macro ratio for fat loss?', a: 'High protein (30-40%) helps preserve muscle. Carbs and fats can be balanced based on preference — both approaches work.' },
      { q: 'How do I track my macros?', a: 'Use apps like MyFitnessPal, Cronometer, or Carb Manager to log food and track protein, carbs, and fat against your targets.' },
    ],
  },

  'one-rep-max': {
    quickAnswer: 'Your 1-rep max (1RM) is the maximum weight you can lift for one complete repetition. Estimate it by entering a weight you can lift for 2-10 reps using the Epley, Brzycki, or Lander formula.',
    whatIs: 'The One-Rep Max Calculator estimates your true maximum lifting capacity from a submaximal effort. Instead of testing a potentially dangerous maximum lift, you enter a weight and the number of reps completed, and the calculator applies validated formulas (Epley, Brzycki, Lander, Mayhew) to estimate your 1RM. Powerlifters, Olympic lifters, and gym athletes use it to program percentage-based training.',
    howToUse: [
      'Enter the weight you lifted in pounds or kilograms.',
      'Enter the number of repetitions you completed (best range: 2-10 reps).',
      'Click Calculate to see your estimated 1RM and percentage breakdown table.',
      'Use the percentage table to program training weights (e.g., sets at 80% 1RM).',
    ],
    formula: 'Epley: 1RM = w x (1 + r/30). Brzycki: 1RM = w x 36/(37-r). Lander: 1RM = 100w/(101.3 - 2.67123r). Where w = weight, r = reps. Best accuracy with 3-10 reps. Example: 100kg for 5 reps. Epley: 100 x (1 + 5/30) = 116.7kg 1RM.',
    examples: [
      { title: 'Bench Press', scenario: 'Lifted 100kg for 5 reps.', result: 'Estimated 1RM: ~117kg (Epley). Training at 80% = 93.6kg for 3-4 sets of 3-5 reps.' },
      { title: 'Squat', scenario: 'Squatted 140kg for 3 reps.', result: 'Estimated 1RM: ~154kg. Training at 70% (typically used for hypertrophy volume) = 107.8kg.' },
    ],
    useCases: [
      'Programming percentage-based powerlifting cycles.',
      'Tracking strength progress without frequent true max tests.',
      'Setting starting weights for new training programs.',
      'Comparing relative strength across lifts and athletes.',
    ],
    faqs: [
      { q: 'How accurate is the 1RM estimate?', a: 'Estimates are typically within 5-10% of true 1RM when using 3-6 rep sets. Accuracy decreases with more reps (10+ reps). Individual variation in rep-to-max ratio exists, so calibrate by comparing estimates to occasional true max tests.' },
      { q: 'Should I ever test my true 1RM?', a: 'In competitive powerlifting and Olympic weightlifting, yes. For general training, 1RM testing carries injury risk. Most programs use estimated 1RM for programming. Test true 1RM when you need an exact competition-ready number.' },
      { q: 'What is percentage-based programming?', a: 'Training programs using percentages of 1RM to prescribe weights. Common: 65-75% for volume/hypertrophy, 80-85% for strength development, 90%+ for peak intensity. Programs like 5/3/1, Texas Method, and Wendler all use 1RM percentages.' },
      { q: 'What are the big three lifts?', a: 'The squat, bench press, and deadlift — the three competition lifts in powerlifting. A lifter\'s combined 1RM in all three is their "total."' },
      { q: 'What is a relative strength standard?', a: 'Relative strength = 1RM / Body Weight. Strength standards for each lift (e.g., a 1.5x bodyweight squat is considered intermediate for most lifters) allow comparison between athletes of different sizes.' },
    ],
    aiQA: [
      { q: 'What is a 1 rep max?', a: 'The maximum weight you can lift for exactly one full repetition with proper form.' },
      { q: 'How do I calculate my 1RM?', a: 'Lift a submaximal weight for 2-10 reps, then use the Epley formula: 1RM = weight x (1 + reps/30).' },
      { q: 'What weight is 80% of my 1RM?', a: 'Multiply your 1RM by 0.80. For a 200 lb 1RM, 80% = 160 lbs.' },
      { q: 'Is it safe to test your 1RM?', a: 'With proper warm-up, form, and a spotter for pressing movements. Always prioritize safety and technique over maximum weight.' },
      { q: 'What is a good 1RM bench press?', a: 'Bodyweight bench press (1x BW) is a common intermediate standard. 1.25x BW is solid. 1.5x BW is advanced for most untrained individuals.' },
    ],
  },

  'target-heart-rate': {
    quickAnswer: 'Target heart rate for exercise is 50-85% of your maximum heart rate. Max HR = 220 - age. For a 30-year-old, max HR = 190, target zone = 95-162 bpm.',
    whatIs: 'The Target Heart Rate Calculator determines your exercise heart rate zones based on age and resting heart rate. The Karvonen formula (which uses heart rate reserve) produces more personalized zones than the simple percentage of max HR method. Knowing your zones helps optimize workouts: fat-burning zone for steady-state cardio, aerobic zone for cardiovascular fitness, and high-intensity zone for performance improvements.',
    howToUse: [
      'Enter your age.',
      'Optionally enter your resting heart rate for Karvonen formula accuracy.',
      'Click Calculate to see your heart rate zones and training targets.',
    ],
    formula: 'Max HR = 220 - Age (Haskell formula). Karvonen Target HR = ((Max HR - Resting HR) x Intensity%) + Resting HR. Example: Age 35, resting HR 65. Max HR = 185. At 70% intensity: Target = ((185-65) x 0.70) + 65 = 84 + 65 = 149 bpm.',
    examples: [
      { title: '30-Year-Old Runner', scenario: 'Age 30, resting HR 55 bpm. Target 70% intensity.', result: 'Max HR = 190. Target (Karvonen) = ((190-55) x 0.70) + 55 = 149.5 bpm.' },
      { title: '50-Year-Old Beginner', scenario: 'Age 50, resting HR 72. Moderate zone (60-70%).', result: 'Max HR = 170. Zone 60-70%: 130-143 bpm (Karvonen adjusted).' },
    ],
    useCases: [
      'Programming cardio training zones for optimal fitness adaptations.',
      'Monitoring exercise intensity with a heart rate monitor.',
      'Rehabilitation and cardiac recovery exercise planning.',
      'Race pacing for runners and cyclists.',
    ],
    faqs: [
      { q: 'What are the 5 heart rate training zones?', a: 'Zone 1 (50-60%): Recovery, easy cardio. Zone 2 (60-70%): Aerobic base, fat burning. Zone 3 (70-80%): Aerobic fitness improvement. Zone 4 (80-90%): Lactate threshold training. Zone 5 (90-100%): Maximum effort, anaerobic.' },
      { q: 'Is the 220 minus age formula accurate?', a: 'It is a population average with high individual variability (standard deviation of ±10-12 bpm). Many people\'s true max HR deviates significantly. A maximal exercise test (running to exhaustion) gives the most accurate personal max HR.' },
      { q: 'What is the fat burning zone?', a: 'The fat burning zone (60-70% max HR) burns the highest proportion of fat calories, but not the most total calories. Higher intensity burns more total calories, which is more important for weight loss than fuel source proportion.' },
      { q: 'What is the Karvonen formula?', a: 'A more individualized heart rate zone calculation that uses heart rate reserve (Max HR - Resting HR). It accounts for your cardiovascular fitness level, giving more accurate zones than simple max HR percentages alone.' },
      { q: 'Can I train in all 5 zones?', a: 'Yes — most training programs recommend 80% of volume in low zones (1-2) for aerobic development and 20% in high zones (4-5) for performance improvements. This is called polarized training.' },
    ],
    aiQA: [
      { q: 'What is a target heart rate zone?', a: 'The range of heart beats per minute optimal for a specific training benefit during exercise.' },
      { q: 'What is a safe heart rate during exercise?', a: '50-85% of max HR (220 - age) is the generally safe exercise range. Stop if you feel chest pain, dizziness, or extreme shortness of breath.' },
      { q: 'What is a good resting heart rate?', a: 'Below 60 bpm is considered excellent (common in athletes). 60-100 is normal for adults. Above 100 (tachycardia) warrants medical evaluation.' },
      { q: 'How do I measure my heart rate?', a: 'Press two fingers to your wrist or neck, count beats for 15 seconds, multiply by 4. Or use a heart rate monitor or smartwatch for continuous tracking.' },
      { q: 'What heart rate is cardio exercise?', a: 'Moderate cardio: 50-70% max HR. Vigorous cardio: 70-85% max HR. These are the aerobic training zones.' },
    ],
  },

  'pace': {
    quickAnswer: 'Running pace converts between time per mile/km, speed (mph/km/h), and race finish time. Enter any two values to calculate the third.',
    whatIs: 'The Pace Calculator converts between running pace (minutes per mile or kilometer), speed (mph or km/h), distance, and time. It is used by runners to plan training paces, predict race finish times, and assess performance. It handles any combination of inputs to find the missing value.',
    howToUse: [
      'Enter any two of three values: pace, distance, or time.',
      'Or enter speed in mph/km/h to see equivalent pace.',
      'Select units (miles or kilometers).',
      'Click Calculate to see the third value and race time projections.',
    ],
    formula: 'Pace (min/mile) = Time (minutes) / Distance (miles). Speed (mph) = 60 / Pace (min/mile). Time = Pace x Distance. Example: 9 min/mile pace over a 5K (3.1 miles): Time = 9 x 3.1 = 27 min 54 sec.',
    examples: [
      { title: 'Marathon Prediction', scenario: 'Training pace 8:30/mile. What marathon finish time?', result: '8:30 x 26.2 miles = 3 hours 42 minutes 42 seconds (3:42:42).' },
      { title: '5K Goal Time', scenario: 'Goal: finish 5K in 25 minutes. What pace needed?', result: '25 min / 3.107 miles = 8:03 per mile (5:00 per km).' },
    ],
    useCases: [
      'Setting goal paces for 5K, 10K, half-marathon, and marathon races.',
      'Planning training paces for easy, tempo, and interval runs.',
      'Assessing running fitness improvements over time.',
      'Converting between mph and min/mile for treadmill settings.',
    ],
    faqs: [
      { q: 'What is a good running pace for beginners?', a: 'Beginning runners often start at 12-15 min/mile. After a few months, 10-12 min/mile is typical. A comfortable conversational pace where you can speak in full sentences is ideal for base building.' },
      { q: 'What is a 7-minute mile?', a: '7 min/mile = 8.57 mph. This is an intermediate runner level — faster than average recreational runners but slower than competitive runners. World record marathon pace is approximately 4:36/mile.' },
      { q: 'What is negative splits running?', a: 'Negative splits means running the second half of a race faster than the first half. It is considered optimal race strategy — starting conservatively prevents early energy depletion and allows a strong finish.' },
      { q: 'What pace is needed to qualify for the Boston Marathon?', a: 'For 2024: Men 18-34 qualify with under 3:00:00 (6:51/mile). Women 18-34: under 3:30:00 (8:01/mile). Qualifying times increase by 5 minutes per 5-year age group.' },
      { q: 'What is a tempo run?', a: 'A tempo run is sustained effort at lactate threshold pace — comfortably hard, typically about 10-15 seconds per mile slower than 5K race pace. Improves the pace you can sustain for longer distances.' },
    ],
    aiQA: [
      { q: 'What is a 10-minute mile pace in km/h?', a: '10 min/mile = 6 mph = 9.66 km/h.' },
      { q: 'What is a 5K in miles?', a: '5 kilometers = 3.107 miles.' },
      { q: 'What pace for a 30-minute 5K?', a: '30 min / 3.107 miles = 9:39 per mile (6:00 per km).' },
      { q: 'What is a good marathon time?', a: 'Sub-4 hours is a common amateur benchmark. Average marathon finish time in the US is approximately 4:30. Sub-3 hours is competitive amateur. Elite men finish under 2:10.' },
      { q: 'How do I convert mph to min/mile?', a: 'Min/mile = 60 / mph. At 6 mph, pace = 60/6 = 10:00 per mile.' },
    ],
  },

  'protein': {
    quickAnswer: 'Most active adults need 1.6-2.2g of protein per kilogram of body weight per day. For muscle building, target the upper end. For general health, 0.8-1.2g/kg is the minimum recommendation.',
    whatIs: 'The Protein Calculator determines your optimal daily protein intake based on body weight, fitness goal, and activity level. Protein is the most important macronutrient for preserving muscle during fat loss, supporting muscle growth, improving body composition, and maintaining satiety. It uses research-based recommendations from sports nutrition organizations.',
    howToUse: [
      'Enter your body weight in pounds or kilograms.',
      'Select your fitness goal (fat loss, maintenance, muscle gain).',
      'Select your activity level (sedentary, recreational, competitive athlete).',
      'Click Calculate to see protein target in grams per day and per meal.',
    ],
    formula: 'General health: 0.8g/kg. Active lifestyle: 1.2-1.6g/kg. Muscle building: 1.6-2.2g/kg. Fat loss with muscle preservation: 2.0-2.4g/kg. Protein at 4 cal/g. Example: 80kg active person building muscle: 80 x 2.0 = 160g protein/day = 640 calories from protein.',
    examples: [
      { title: 'Muscle Building', scenario: '80kg male, strength training 4x/week, muscle gain goal.', result: 'Target: 2.0g/kg x 80kg = 160g protein/day. Spread over 4 meals: ~40g per meal.' },
      { title: 'Fat Loss', scenario: '70kg female, cutting to 60kg, wants to preserve lean mass.', result: 'Target: 2.2g/kg x 70kg = 154g protein/day (higher during cut to protect muscle).' },
    ],
    useCases: [
      'Planning protein intake for muscle building programs.',
      'Ensuring adequate protein during calorie restriction to preserve muscle.',
      'Meal planning and grocery shopping for high-protein diets.',
      'Athlete nutrition periodization by training phase.',
    ],
    faqs: [
      { q: 'Is too much protein harmful?', a: 'For healthy individuals with normal kidney function, high protein intakes (up to 2.2-3.0g/kg) are safe. The concern about kidney damage applies primarily to those with existing kidney disease. Excess protein is converted to energy and excreted as urea — no evidence of harm in healthy people.' },
      { q: 'Can I get enough protein from plants?', a: 'Yes, with planning. Combine varied plant sources (beans, lentils, tofu, tempeh, seitan, quinoa, hemp seeds) to get all essential amino acids. Plant protein is less bioavailable than animal protein, so aim for 10-20% higher intake.' },
      { q: 'Does protein timing matter?', a: 'Research shows protein timing is less critical than total daily intake. However, distributing 20-40g per meal (rather than one large meal) optimizes muscle protein synthesis throughout the day. Post-workout protein within 2 hours is beneficial.' },
      { q: 'What are complete proteins?', a: 'Complete proteins contain all 9 essential amino acids in adequate amounts. All animal proteins are complete. Plant complete proteins include quinoa, soy, hemp, and buckwheat. Most plant proteins are incomplete and should be combined.' },
      { q: 'How much protein is in common foods?', a: 'Chicken breast 100g: 31g. Egg: 6g. Greek yogurt 170g: 17g. Tuna 100g: 26g. Lentils 100g cooked: 9g. Protein powder (one scoop): 20-25g.' },
    ],
    aiQA: [
      { q: 'How much protein do I need per day?', a: '0.8g/kg for general health; 1.6-2.2g/kg for muscle building; up to 2.4g/kg during fat loss.' },
      { q: 'Is 100g of protein a day enough?', a: 'For a 70kg person, 100g = ~1.4g/kg — adequate for general fitness, slightly below optimal for muscle building.' },
      { q: 'What happens if I don\'t eat enough protein?', a: 'Muscle breakdown for energy, slower recovery, reduced immune function, and difficulty losing fat while preserving lean mass.' },
      { q: 'How much protein for a 200 lb man?', a: '200 lbs = 91kg. Target: 146-200g/day depending on goals.' },
      { q: 'What is leucine threshold?', a: 'Approximately 2-3g of leucine (an essential amino acid) per meal triggers maximum muscle protein synthesis. This roughly equates to 20-40g of high-quality protein per meal.' },
    ],
  },

  'calories-burned': {
    quickAnswer: 'Calorie burn during exercise depends on activity type, duration, body weight, and intensity. Use MET (Metabolic Equivalent) values multiplied by weight and time for accurate estimates.',
    whatIs: 'The Calories Burned Calculator estimates energy expenditure from dozens of physical activities using MET values from the Compendium of Physical Activities. MET represents energy expenditure relative to rest — 1 MET = resting metabolic rate. Multiplying MET by body weight in kg and hours of activity gives calories burned with good accuracy for planning exercise programs.',
    howToUse: [
      'Select your activity from the list (cardio, strength training, sports, etc.).',
      'Enter your body weight.',
      'Enter duration in minutes.',
      'Click Calculate to see calories burned.',
    ],
    formula: 'Calories Burned = MET x Body Weight (kg) x Time (hours). Example: Cycling moderate (MET 8.0), 75kg, 45 minutes: 8.0 x 75 x 0.75 = 450 calories.',
    examples: [
      { title: 'Running', scenario: '70kg person, 30 minutes jogging at 6 mph (MET 10).', result: 'Calories = 10 x 70 x 0.5 = 350 calories.' },
      { title: 'Weight Training', scenario: '80kg person, 60 minutes moderate weight lifting (MET 3.5).', result: 'Calories = 3.5 x 80 x 1.0 = 280 calories.' },
    ],
    useCases: [
      'Planning exercise for calorie deficit goals.',
      'Estimating daily calorie burn from all activity.',
      'Choosing activities by calorie efficiency.',
      'Food compensation planning after intense exercise.',
    ],
    faqs: [
      { q: 'What is MET?', a: 'MET (Metabolic Equivalent of Task) measures exercise intensity relative to rest. 1 MET = resting oxygen consumption (3.5 ml O2/kg/min). Walking is 3-4 MET; running 8-12 MET; weight training 3-6 MET.' },
      { q: 'Are wearable calorie estimates accurate?', a: 'Research shows fitness trackers overestimate calorie burn by 20-100% depending on the device and activity. Heart rate-based devices are more accurate than accelerometer-only devices, but still have significant error.' },
      { q: 'Does exercise suppress or increase appetite?', a: 'Moderate exercise (30-60 min) often temporarily suppresses appetite. However, intense exercise can increase appetite substantially. Many people compensate by eating more after exercise than they burned — tracking food intake is crucial for weight loss.' },
      { q: 'How does body weight affect calorie burn?', a: 'Heavier bodies burn more calories performing the same activity because more mass must be moved. A 100kg person burns roughly 25% more calories per hour of exercise than a 80kg person at the same intensity.' },
      { q: 'What exercise burns the most calories?', a: 'High-intensity activities: running (600-1200 cal/hour), swimming (500-900), cycling fast (700-1100), rowing (600-1000), CrossFit (450-900). Per minute, HIIT and running typically top the list.' },
    ],
    aiQA: [
      { q: 'How many calories does running burn?', a: 'Approximately 80-100 calories per mile. A 1-hour run at 6 mph burns 500-700 calories for a 70kg person.' },
      { q: 'How many calories does weight lifting burn?', a: 'Approximately 200-400 calories per hour for moderate strength training — much less than cardio during the session, but more metabolism boost after.' },
      { q: 'How many calories does swimming burn?', a: 'A vigorous 30-minute swim burns 250-400 calories depending on weight and stroke style.' },
      { q: 'Does HIIT burn more calories than steady-state cardio?', a: 'HIIT burns more calories per minute during the workout and causes a greater "afterburn" (EPOC). Steady-state burns more total calories if done for longer duration.' },
      { q: 'How long to burn 500 calories?', a: 'Running: 40-60 min. Cycling vigorous: 45-60 min. Swimming vigorous: 50-70 min. Walking: 90-120 min.' },
    ],
  },

  'body-mass-index': {
    quickAnswer: 'Body Mass Index (BMI) in the fitness context is used alongside body fat percentage and muscle mass to give a complete picture of body composition. BMI = weight (kg) / height (m)^2.',
    whatIs: 'The Body Mass Index tool in the fitness category calculates BMI with a fitness-oriented interpretation. For active individuals, it presents BMI alongside context about athletic body composition, explains the limitations of BMI for muscular individuals, and suggests complementary metrics like body fat percentage and waist circumference for a more complete assessment.',
    howToUse: [
      'Enter your weight and height.',
      'Click Calculate to see BMI.',
      'Read the fitness-specific interpretation for your result.',
      'Use the body fat calculator alongside BMI for a complete picture.',
    ],
    formula: 'BMI = Weight (kg) / Height (m)^2. Athletic BMI norms differ from general population norms due to increased muscle mass. Example: A 180cm, 90kg muscular male has BMI 27.8 (overweight) but may have 12% body fat — clearly healthy.',
    examples: [
      { title: 'Muscular Athlete', scenario: '90kg male, 183cm, competes in weightlifting.', result: 'BMI = 26.9 (overweight category). But body fat likely 12-15% — BMI is misleading for muscular individuals.' },
      { title: 'Endurance Runner', scenario: '58kg female, 170cm.', result: 'BMI = 20.1 (normal). Consistent with an endurance athlete\'s lean composition.' },
    ],
    useCases: [
      'Insurance and employer wellness screenings.',
      'Understanding BMI limitations for athletes and strength trainers.',
      'Comparing fitness level before and after a training cycle.',
      'Quick screening when body fat measurement is unavailable.',
    ],
    faqs: [
      { q: 'Why does BMI fail for athletes?', a: 'BMI uses total weight without distinguishing fat from muscle. Highly muscular individuals have dense, heavy muscle tissue that elevates BMI into "overweight" or "obese" categories despite low body fat and excellent health markers.' },
      { q: 'What is a good BMI for fitness?', a: 'For general fitness, 18.5-24.9 is normal. Active, muscular individuals in the 25-27 range may have excellent health markers. The best assessment combines BMI with body fat percentage, waist circumference, and fitness performance.' },
      { q: 'Does BMI change with muscle building?', a: 'Yes. Adding muscle increases body weight, which raises BMI even though body composition improves. This is why fitness professionals typically track body fat % and lean mass rather than BMI.' },
      { q: 'What percentage of Americans are overweight by BMI?', a: 'Approximately 73% of US adults are overweight (BMI 25+) or obese (BMI 30+), according to CDC data. This is an important public health benchmark despite BMI\'s limitations.' },
      { q: 'Can BMI be used to track fitness progress?', a: 'Not reliably for strength athletes — you may gain weight (from muscle) while getting healthier. Better fitness metrics: body fat %, waist circumference, VO2 max, strength-to-weight ratio, and resting heart rate.' },
    ],
    aiQA: [
      { q: 'What is a healthy BMI for athletes?', a: 'BMI tables do not apply well to athletes. Body fat percentage is a better metric — most elite athletes have 6-15% (men) or 14-25% (women) body fat at any BMI.' },
      { q: 'Can I be fit and have a high BMI?', a: 'Yes — muscular individuals often have BMI in the overweight range while being very fit and healthy.' },
      { q: 'What is the BMI of an Olympic athlete?', a: 'Varies by sport: Weightlifters and throwers often 25-35+. Endurance runners typically 18-22. BMI alone means nothing for athletic performance.' },
      { q: 'Should athletes use BMI?', a: 'Not as a primary metric. Use body composition (fat %, lean mass) and performance measures instead.' },
      { q: 'What is a skinny fat BMI?', a: 'Skinny fat is normal BMI with high body fat and low muscle mass — looks lean but has poor body composition. BMI cannot detect this; body fat measurement can.' },
    ],
  },

  'swimming-pace': {
    quickAnswer: 'Swimming pace is measured per 100 meters or 100 yards in the pool. A beginner might swim 100m in 2:30-3:00; intermediate 1:45-2:20; competitive 1:15-1:45.',
    whatIs: 'The Swimming Pace Calculator converts swim times, distances, and paces for pool and open water swimming. It computes per-100m or per-100yd pace from total time and distance, projects race or workout times, and converts between pool lengths. Used by competitive swimmers, triathletes, masters swimmers, and casual lap swimmers.',
    howToUse: [
      'Enter your total swim distance (meters or yards, or number of pool lengths).',
      'Enter the total time taken.',
      'Click Calculate to see pace per 100m/100yd and speed in km/h or mph.',
    ],
    formula: 'Pace per 100m = Total Time (seconds) / (Distance in meters / 100). Total Time = (Distance / 100) x Pace per 100. Example: 1,500m in 30 minutes: Pace = 1800 sec / 15 = 120 sec/100m = 2:00 per 100m.',
    examples: [
      { title: 'Triathlete Open Water', scenario: '1500m Olympic triathlon swim in 22:30.', result: 'Pace = 1350 sec / 15 = 90 sec/100m = 1:30 per 100m. Good competitive triathlete pace.' },
      { title: 'Masters Swimmer', scenario: '50 laps in a 25-yard pool (1,250 yards) in 35 minutes.', result: 'Pace = 2100 sec / 12.5 = 168 sec/100yd = 2:48 per 100 yards.' },
    ],
    useCases: [
      'Tracking improvement in pool lap times.',
      'Planning triathlon swim training paces.',
      'Setting interval training targets for swim workouts.',
      'Comparing open water vs. pool performance.',
    ],
    faqs: [
      { q: 'What is a good 100m swimming pace?', a: 'Beginner: 3:00+/100m. Intermediate: 2:00-2:30. Competitive: 1:20-1:50. Elite: sub-1:00. These vary by stroke and age group.' },
      { q: 'What is the difference between yards and meters in swimming?', a: '1 yard = 0.9144 meters. Short course (SC) pools in the US are typically 25 yards. International pools are 50 meters (long course) or 25 meters (short course meters). Yards to meters: divide by 1.0936.' },
      { q: 'What are the four swimming strokes?', a: 'Freestyle (front crawl), backstroke, breaststroke, and butterfly. Freestyle is fastest; breaststroke slowest. Individual medley (IM) events use all four strokes.' },
      { q: 'How is swimming efficiency measured?', a: 'SWOLF (Swim Golf) = Stroke Count + Time for one length. Lower is more efficient. Also measured by distance per stroke and stroke rate.' },
      { q: 'How do I improve swimming pace?', a: 'Focus on technique (high elbow catch, body rotation, streamlined kick), then add interval training. Improve stroke efficiency before increasing yardage. Pulling drills and kickboard drills isolate and strengthen components.' },
    ],
    aiQA: [
      { q: 'What is a good swim pace for beginners?', a: '2:30-3:30 per 100 meters is typical for beginner swimmers.' },
      { q: 'How do I calculate swimming pace?', a: 'Pace per 100m = Total seconds / (Distance in meters / 100).' },
      { q: 'How many lengths of a pool is 1 mile?', a: '1 mile = 1,609m. In a 25m pool: 64 lengths. In a 50m pool: 32 lengths.' },
      { q: 'What is a 1500m swim time?', a: 'Beginner: 35-50 minutes. Intermediate: 25-35 minutes. Competitive: 18-25 minutes. Elite: under 15 minutes.' },
      { q: 'How do I convert pool yards to meters?', a: 'Yards x 0.9144 = meters. Or: yards / 1.0936 = meters.' },
    ],
  },

  'cycling-pace': {
    quickAnswer: 'Cycling speed is measured in mph or km/h and varies dramatically by terrain, power output, and bike type. Average recreational cyclists ride 12-16 mph; intermediate 16-20 mph; competitive 20-25 mph.',
    whatIs: 'The Cycling Speed Calculator converts cycling time, distance, and average speed, and projects finish times for rides and races. It supports multiple units (mph, km/h) and includes power-to-speed estimates for different cycling disciplines. Used by road cyclists, mountain bikers, triathletes, and commuter cyclists to plan and analyze rides.',
    howToUse: [
      'Enter total riding distance in miles or kilometers.',
      'Enter total riding time.',
      'Click Calculate to see average speed and per-mile or per-km pace.',
      'Or enter speed to project time for a target distance.',
    ],
    formula: 'Average Speed = Distance / Time. Time = Distance / Speed. Distance = Speed x Time. Example: 40 miles in 2h 15min (2.25h): Average speed = 40 / 2.25 = 17.8 mph.',
    examples: [
      { title: 'Century Ride', scenario: '100-mile (161km) ride at average 18 mph.', result: 'Time = 100 / 18 = 5 hours 33 minutes.' },
      { title: 'Triathlon Bike Leg', scenario: '40km Olympic triathlon bike in 1:05.', result: 'Average speed = 40 / 1.083 = 36.9 km/h (22.9 mph).' },
    ],
    useCases: [
      'Planning ride duration for a target distance.',
      'Calculating average speed from completed ride data.',
      'Setting cycling race or time trial pace targets.',
      'Training load planning and progression.',
    ],
    faqs: [
      { q: 'What is a good average cycling speed?', a: 'Recreational: 12-16 mph. Intermediate fitness rider: 16-20 mph. Strong amateur: 20-25 mph. Elite: 25-30 mph on flat road. Mountain biking and wind conditions significantly affect these numbers.' },
      { q: 'How does wind affect cycling speed?', a: 'A 10 mph headwind can reduce cycling speed by 2-4 mph for the same power output. A tailwind of the same strength can increase speed by 2-3 mph. Crosswinds reduce speed and increase technical demands.' },
      { q: 'What is average watts for cycling?', a: 'Recreational cyclists average 100-150W. Cat 3 amateur racers: 200-250W. Cat 1/pro: 280-400W. Power-to-weight ratio (watts/kg) is more meaningful than absolute power.' },
      { q: 'How do I convert between mph and km/h for cycling?', a: 'mph x 1.60934 = km/h. km/h x 0.62137 = mph. Example: 20 mph = 32.2 km/h. Use our speed converter for quick conversions.' },
      { q: 'What is functional threshold power (FTP)?', a: 'FTP is the highest average power you can sustain for approximately 1 hour. It is the foundation of power-based cycling training — all training zones are set as percentages of FTP.' },
    ],
    aiQA: [
      { q: 'What is a good cycling speed for beginners?', a: '10-14 mph (16-22 km/h) is typical for cycling beginners.' },
      { q: 'How long to bike 10 miles?', a: 'At 15 mph: 40 minutes. At 20 mph: 30 minutes. At 10 mph: 60 minutes.' },
      { q: 'What is average cycling speed?', a: 'Approximately 12-14 mph for a recreational cyclist on flat terrain with no wind.' },
      { q: 'How fast do Tour de France cyclists ride?', a: 'Average speeds of 24-28 mph over multi-week stage races. Individual time trial stages can average 30-34 mph.' },
      { q: 'What is the bike leg speed in a triathlon?', a: 'Sprint: 15-18 mph beginner, 22-25 mph elite. Olympic: 22-26 mph competitive. Ironman: 21-24 mph for age groupers.' },
    ],
  },

  'lean-body-mass': {
    quickAnswer: 'Lean Body Mass (LBM) is your total body weight minus fat mass. LBM includes muscles, bones, organs, and water. It is used to calculate protein needs, medication dosing, and body composition progress.',
    whatIs: 'The Lean Body Mass Calculator estimates LBM using the Boer formula (validated against DEXA) from height, weight, and sex. LBM is the metabolically active portion of your body — muscles, organs, bones, and fluids. It is a more stable and meaningful metric than total weight for tracking fitness and health progress, as it reflects actual muscle and structural mass.',
    howToUse: [
      'Enter your sex, weight, and height.',
      'Click Calculate to see lean body mass estimate.',
      'If you know your body fat percentage, enter it for a more precise calculation.',
    ],
    formula: 'Boer Formula: Men: LBM = 0.407 x weight (kg) + 0.267 x height (cm) - 19.2. Women: LBM = 0.252 x weight (kg) + 0.473 x height (cm) - 48.3. Or: LBM = Total Weight - (Total Weight x Body Fat%). Example: 80kg male, 180cm: LBM = 0.407 x 80 + 0.267 x 180 - 19.2 = 32.56 + 48.06 - 19.2 = 61.4 kg.',
    examples: [
      { title: 'Male Using Formula', scenario: '82kg male, 182cm, unknown body fat.', result: 'LBM (Boer) = 0.407 x 82 + 0.267 x 182 - 19.2 = 62.9 kg LBM. Fat mass = 82 - 62.9 = 19.1 kg = 23.3% body fat.' },
      { title: 'Female With Body Fat', scenario: '65kg female, 22% body fat known.', result: 'LBM = 65 x (1 - 0.22) = 65 x 0.78 = 50.7 kg lean mass.' },
    ],
    useCases: [
      'Calculating protein requirements based on LBM instead of total weight.',
      'Tracking muscle gain or muscle loss during diet programs.',
      'Medical dosing that uses LBM (e.g., some anesthetics, antibiotics).',
      'Body composition assessment and fitness progress monitoring.',
    ],
    faqs: [
      { q: 'Why use LBM instead of total weight for protein calculation?', a: 'LBM-based protein targets are more accurate for muscular or obese individuals. Calculating protein as g/kg of total body weight overestimates needs for obese individuals (fat tissue doesn\'t need protein to maintain). g per kg LBM gives more precise targets.' },
      { q: 'How does LBM change with age?', a: 'After age 30, adults typically lose 3-5% of muscle mass per decade (sarcopenia) without resistance training. By 70+, some individuals have lost 30% of peak LBM. Resistance training can slow or partially reverse this process.' },
      { q: 'What is fat-free mass?', a: 'Fat-free mass (FFM) and lean body mass (LBM) are used interchangeably by most sources. Technically, FFM excludes all fat (including essential fat in organs and bones), while LBM includes a small amount of essential fat.' },
      { q: 'Can I increase my lean body mass while losing fat?', a: 'Yes — body recomposition is possible, especially for beginners, people returning from time off, and those with more body fat. It requires sufficient protein (2g/kg LBM), resistance training, and a modest calorie deficit or maintenance calories.' },
      { q: 'How is LBM used in anesthesia?', a: 'Anesthesia dosing for drugs like propofol and many opioids is based on LBM or IBW rather than total weight, especially in obese patients. Using total weight would cause overdose in obese patients; LBM prevents this.' },
    ],
    aiQA: [
      { q: 'What is lean body mass?', a: 'Total body weight minus fat mass — includes muscles, bones, organs, and fluids.' },
      { q: 'How do I calculate lean body mass?', a: 'If body fat % is known: LBM = Total Weight x (1 - Body Fat%). Or use the Boer formula with height and weight.' },
      { q: 'Is lean body mass the same as muscle mass?', a: 'No — LBM includes muscle, bone, organs, and water. Muscle mass is a subset of LBM.' },
      { q: 'What is a good lean body mass for a man?', a: 'Depends on height and goals. A 180cm man might have 65-75kg LBM as a fit baseline; athletes might have 75-85kg or more.' },
      { q: 'Does losing weight reduce lean body mass?', a: 'Not necessarily if done correctly. High protein intake and resistance training during a calorie deficit preserves most LBM.' },
    ],
  },

  'ffmi': {
    quickAnswer: 'FFMI (Fat-Free Mass Index) measures muscularity relative to height. Natural FFMI limit is approximately 25 for men and 22 for women. Above 25 for men is rare without performance-enhancing drugs.',
    whatIs: 'The FFMI Calculator quantifies muscularity by dividing fat-free mass by height squared, similar to BMI but for muscle. A natural genetic ceiling for men is around FFMI 25-26. Studies comparing athletes pre- and post-steroid era found mean FFMI of 25.4 for admitted steroid users vs. 21.8 for naturals. FFMI is used in body composition research and fitness goal setting.',
    howToUse: [
      'Enter your weight, height, and body fat percentage.',
      'Click Calculate to see FFMI and normalized FFMI (adjusted to 180cm height).',
      'Compare your result to FFMI category benchmarks.',
    ],
    formula: 'FFMI = Fat-Free Mass (kg) / Height (m)^2. Normalized FFMI = FFMI + 6.1 x (1.8 - Height in meters). Fat-Free Mass = Total Weight x (1 - Body Fat%). Example: 85kg, 10% body fat, 180cm: FFM = 76.5kg. FFMI = 76.5 / (1.80)^2 = 76.5 / 3.24 = 23.6.',
    examples: [
      { title: 'Natural Bodybuilder', scenario: '88kg, 12% body fat, 178cm.', result: 'FFM = 77.4kg. FFMI = 77.4 / (1.78)^2 = 24.4. Advanced natural level.' },
      { title: 'Beginner', scenario: '75kg, 18% body fat, 175cm.', result: 'FFM = 61.5kg. FFMI = 61.5 / (1.75)^2 = 20.1. Untrained normal.' },
    ],
    useCases: [
      'Setting realistic natural muscle building goals.',
      'Comparing muscularity across athletes of different sizes.',
      'Research on body composition in strength sports.',
      'Motivational benchmarking for natural athletes.',
    ],
    faqs: [
      { q: 'What FFMI is considered advanced for a natural lifter?', a: 'FFMI 22-23 requires serious dedication but is achievable naturally. FFMI 24-25 represents near-peak natural potential for most people — achievable but requires years of optimal training and nutrition. Above 26 is extremely rare naturally.' },
      { q: 'Does the 25 FFMI natural limit apply to women?', a: 'Women have lower absolute muscle mass potential. A natural FFMI ceiling for women is approximately 22-23. Female bodybuilders testing positive for steroids averaged around 23.7 in research data.' },
      { q: 'Is FFMI a reliable steroid detector?', a: 'FFMI above 25-26 is suspicious but not definitive proof. Some genetic outliers (very muscular individuals with favorable hormone profiles) may naturally exceed 25. It is a probabilistic tool, not a test.' },
      { q: 'What is the average FFMI?', a: 'Untrained adult males: approximately 17-20 FFMI. Recreational gym-goers: 20-22. Advanced natural bodybuilders: 22-25. Elite powerlifters: may reach 25-27.' },
      { q: 'How long does it take to reach FFMI 25?', a: 'For most people, reaching FFMI 25 naturally takes 8-15 years of consistent training with optimal nutrition. The muscle gain rate slows dramatically after the first 1-3 "newbie gain" years.' },
    ],
    aiQA: [
      { q: 'What is FFMI?', a: 'Fat-Free Mass Index — a measure of muscularity relative to height. Higher FFMI indicates more muscle relative to body size.' },
      { q: 'What FFMI is natural?', a: 'The natural genetic ceiling is approximately FFMI 25 for men, 22 for women.' },
      { q: 'How do I calculate FFMI?', a: 'FFMI = (Weight x (1 - Body Fat%)) / Height (m)^2.' },
      { q: 'What is a good FFMI for a man?', a: 'FFMI 22+ is considered athletic; 24-25 is advanced natural level.' },
      { q: 'Is FFMI 23 achievable naturally?', a: 'Yes — FFMI 23 is achievable for most men with 4-8 years of dedicated training and proper nutrition.' },
    ],
  },

  'body-surface-area': {
    quickAnswer: 'Body Surface Area (BSA) estimates the total surface area of the human body. The Mosteller formula gives BSA = square root of (height cm x weight kg / 3600). Used in medicine for drug dosing.',
    whatIs: 'The Body Surface Area Calculator estimates total skin surface area using validated formulas (Mosteller, DuBois, Haycock). BSA is used extensively in medicine: chemotherapy dosing, cardiac output calculations, burn surface area estimation, and pediatric drug dosing are all based on BSA. Unlike BMI, BSA correlates better with metabolic rate and organ sizes for clinical applications.',
    howToUse: [
      'Enter your height in centimeters and weight in kilograms.',
      'Click Calculate to see BSA in square meters using multiple formulas.',
      'The Mosteller formula is most commonly used in modern clinical practice.',
    ],
    formula: 'Mosteller: BSA (m^2) = square root(height cm x weight kg / 3600). DuBois: BSA = 0.007184 x height^0.725 x weight^0.425. Example: 175cm, 75kg: Mosteller BSA = sqrt(175 x 75 / 3600) = sqrt(3.646) = 1.91 m^2.',
    examples: [
      { title: 'Adult Male', scenario: '180cm, 80kg male.', result: 'Mosteller BSA = sqrt(180 x 80 / 3600) = sqrt(4.0) = 2.00 m^2.' },
      { title: 'Child', scenario: '120cm, 25kg, age 8.', result: 'Mosteller BSA = sqrt(120 x 25 / 3600) = sqrt(0.833) = 0.913 m^2. Pediatric dosing uses BSA to scale drugs.' },
    ],
    useCases: [
      'Chemotherapy drug dosing calculation.',
      'Burn injury severity assessment (% BSA affected).',
      'Pediatric medication dosing scaling.',
      'Cardiac output and physiological research.',
    ],
    faqs: [
      { q: 'What is average body surface area?', a: 'Average BSA is approximately 1.7-1.9 m^2 for adults. Women average 1.6-1.7 m^2; men 1.8-1.9 m^2. Newborns: approximately 0.25 m^2. This calculator computes your individual BSA from your measurements.' },
      { q: 'Why is BSA used for chemotherapy dosing?', a: 'Chemotherapy drugs are highly toxic with narrow therapeutic windows. BSA correlates better than weight alone with drug clearance, organ function, and blood volume. Dosing per m^2 BSA reduces toxicity variability across patients.' },
      { q: 'What is the Rule of Nines for burns?', a: 'The Rule of Nines estimates the percentage of BSA affected by burns: Head = 9%, each arm = 9%, each leg = 18%, front torso = 18%, back torso = 18%, perineum = 1%. Critical burns involve 20%+ BSA.' },
      { q: 'Which BSA formula is most accurate?', a: 'The Mosteller formula is most commonly used in modern medicine due to its simplicity. The DuBois formula (1916) is historically foundational but less accurate in obese patients. No single formula is superior for all populations.' },
      { q: 'Is BSA related to basal metabolic rate?', a: 'Yes. Research from the early 20th century showed BMR correlates strongly with BSA in normal-weight individuals. This led to early metabolic rate expressed as cal/m^2/hour. For modern clinical use, direct calorimetry or Mifflin-St Jeor is preferred.' },
    ],
    aiQA: [
      { q: 'What is body surface area?', a: 'The total surface area of the human body, measured in square meters. Used for drug dosing and medical calculations.' },
      { q: 'What is the average adult body surface area?', a: 'Approximately 1.7-1.9 square meters for most adults.' },
      { q: 'What is the Mosteller formula?', a: 'BSA = square root(height cm x weight kg / 3600). The most widely used BSA formula in modern medicine.' },
      { q: 'Why is BSA important in medicine?', a: 'BSA allows dosing of potent medications (especially chemotherapy) to be scaled accurately to body size, reducing both under-dosing and over-dosing risks.' },
      { q: 'How much does BSA change with weight loss?', a: 'Moderately. A 10% reduction in weight changes BSA by approximately 5-7% — BSA changes less dramatically than weight because height is unchanged.' },
    ],
  },

  'running-cadence': {
    quickAnswer: 'Running cadence is steps per minute (SPM). The often-cited ideal is 180 SPM, though research shows optimal cadence varies by individual. Increasing cadence by 5-10% can reduce injury risk.',
    whatIs: 'The Running Cadence Calculator determines your running cadence (steps per minute) and helps optimize it for injury prevention and efficiency. Cadence affects ground contact time, vertical oscillation, and overstriding. Higher cadence (shorter, faster steps) generally reduces impact forces and overstriding, which are associated with common running injuries.',
    howToUse: [
      'Count your steps for 20 seconds while running at your normal pace, then multiply by 3.',
      'Or enter your current pace and a target steps per minute.',
      'Click Calculate to see your cadence and suggested optimal range.',
    ],
    formula: 'Cadence (SPM) = Steps counted in 1 minute. Stride length (meters) = Speed (m/s) / (Cadence / 60). Example: Running at 10 min/mile (2.68 m/s) with 170 SPM: Stride length = 2.68 / (170/60) = 0.945m (94.5cm per step).',
    examples: [
      { title: 'Beginner Runner', scenario: '12-min/mile pace, counted 150 steps in 1 minute.', result: 'Cadence = 150 SPM. Below the 170+ range associated with lower injury risk. Try increasing by 5% to 158 SPM to start.' },
      { title: 'Experienced Runner', scenario: '8-min/mile pace, 182 SPM.', result: 'Well within optimal range. Stride length = 3.35 m/s / (182/60) = 1.10m per step.' },
    ],
    useCases: [
      'Reducing running injuries by correcting overstriding.',
      'Improving running economy and efficiency.',
      'Training plan design with cadence as a performance variable.',
      'Metronome-guided cadence improvement drills.',
    ],
    faqs: [
      { q: 'Is 180 SPM the correct cadence for everyone?', a: 'No. The 180 SPM figure comes from Jack Daniels observing elite runners, but research shows optimal cadence varies with height, leg length, and pace. The key is avoiding excessive overstriding — your cadence should prevent your foot from landing far in front of your center of mass.' },
      { q: 'How do I increase my running cadence?', a: 'Use a metronome app set to your target cadence. Run with shorter, quicker steps while maintaining the same effort. Increase gradually (5% at a time). Cadence drills on a treadmill with cadence display are very effective.' },
      { q: 'Does higher cadence mean faster running?', a: 'Not directly. Speed = Stride Length x Cadence. Faster running can come from longer strides or higher cadence (or both). Elite sprinters use very long strides at high cadence, while elite distance runners optimize both for efficiency.' },
      { q: 'What cadence is associated with fewer injuries?', a: 'Studies suggest cadences above 170 SPM are associated with lower vertical oscillation, reduced ground contact time, shorter overstriding, and lower impact forces — all linked to lower injury rates in recreational runners.' },
      { q: 'How does running cadence change with speed?', a: 'Cadence naturally increases with running speed. What matters is that at any given speed, you are not overstriding. Most runners should aim for 170-180 SPM at easy pace, increasing to 180-200+ at race pace.' },
    ],
    aiQA: [
      { q: 'What is running cadence?', a: 'The number of steps taken per minute while running. Measured in SPM (steps per minute).' },
      { q: 'What is an ideal running cadence?', a: '170-180 SPM is commonly recommended for recreational runners to reduce injury risk.' },
      { q: 'How do I measure my running cadence?', a: 'Count steps for 20 seconds, multiply by 3. Or use a GPS watch or running app with cadence display.' },
      { q: 'Does cadence affect running speed?', a: 'Yes. Speed = Cadence x Stride Length. Optimizing both cadence and stride length improves running speed and efficiency.' },
      { q: 'What causes low running cadence?', a: 'Overstriding (landing with foot far in front of center of mass), which also increases injury risk. Focus on landing under your hips.' },
    ],
  },
};
