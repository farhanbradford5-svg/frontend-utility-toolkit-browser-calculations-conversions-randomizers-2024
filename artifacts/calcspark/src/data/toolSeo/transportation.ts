import type { ToolSEOMap } from './index';

export const TRANSPORTATION_SEO: ToolSEOMap = {
  'fuel-cost': {
    quickAnswer: 'Fuel cost for a trip = (Distance / MPG) x Gas Price per Gallon. This calculator computes the exact fuel cost for any trip with your vehicle\'s fuel efficiency and current gas prices.',
    whatIs: 'The Fuel Cost Calculator estimates the total fuel expense for any road trip by combining trip distance, vehicle fuel economy (MPG or L/100km), and current fuel price. It supports both imperial and metric units and can compare fuel costs for multiple vehicles side by side. Essential for road trip budgeting and evaluating the true cost of different vehicles.',
    howToUse: [
      'Enter the total trip distance in miles or kilometers.',
      'Enter your vehicle\'s fuel efficiency (MPG or L/100km).',
      'Enter the current fuel price per gallon or liter.',
      'Click Calculate to see total fuel cost and fuel needed.',
    ],
    formula: 'Fuel Cost = (Distance / MPG) x Price per Gallon. Or: Fuel Cost = Distance x (L/100km / 100) x Price per Liter. Example: 300 miles, 30 MPG, $3.50/gallon: Cost = (300/30) x $3.50 = 10 gallons x $3.50 = $35.',
    examples: [
      { title: 'Road Trip', scenario: '500-mile trip, 28 MPG SUV, $3.80/gallon.', result: 'Fuel needed = 17.86 gallons. Fuel cost = $67.86.' },
      { title: 'Commute Cost', scenario: '40-mile daily round trip, 35 MPG sedan, $3.60/gallon.', result: 'Daily cost = $4.11. Monthly (22 days) = $90.50. Annual = $1,085.' },
    ],
    useCases: [
      'Road trip budgeting and planning.',
      'Comparing commute costs for different vehicles.',
      'Evaluating fuel savings from a hybrid or more efficient vehicle.',
      'Business mileage expense calculation.',
    ],
    faqs: [
      { q: 'How do I find my vehicle\'s MPG?', a: 'Check the EPA fuel economy sticker, visit fueleconomy.gov, or calculate real-world MPG by filling up, driving 100+ miles, refueling, and dividing miles driven by gallons added.' },
      { q: 'How much does fuel efficiency matter for commuting?', a: 'A lot over time. A car getting 25 MPG vs. 35 MPG costs approximately $500-700 more per year in fuel at 15,000 miles/year and $3.50/gallon gas. Over 5 years, the difference can exceed $3,000.' },
      { q: 'What factors affect real-world fuel economy?', a: 'Speed (aerodynamic drag increases exponentially above 50 mph), acceleration habits (aggressive = worse), tire pressure, A/C use, cargo weight, temperature, and road gradient all significantly affect actual MPG vs. EPA estimates.' },
      { q: 'How do I convert L/100km to MPG?', a: 'MPG = 235.214 / (L/100km). Example: 7 L/100km = 235.214 / 7 = 33.6 MPG.' },
      { q: 'What is the IRS mileage reimbursement rate?', a: 'For 2024, the IRS standard mileage rate for business use is 67 cents per mile. This rate is updated annually and includes fuel, maintenance, insurance, and depreciation.' },
    ],
    aiQA: [
      { q: 'How do I calculate fuel cost for a road trip?', a: 'Divide miles by MPG to get gallons, then multiply by price per gallon.' },
      { q: 'How much does it cost to drive 100 miles?', a: 'At 30 MPG and $3.50/gallon: (100/30) x $3.50 = $11.67.' },
      { q: 'What is the cost per mile to drive?', a: 'Fuel cost per mile = Gas Price / MPG. At $3.50/gal and 28 MPG: $3.50/28 = $0.125 per mile.' },
      { q: 'How much gas does a 500-mile trip use?', a: 'At 30 MPG: 500/30 = 16.7 gallons. At 25 MPG: 20 gallons.' },
      { q: 'What is the cheapest way to calculate gas for a trip?', a: 'Use this calculator with your car\'s highway MPG and the average gas price along your route.' },
    ],
  },

  'mpg': {
    quickAnswer: 'MPG (Miles Per Gallon) measures fuel efficiency. Calculate MPG by dividing miles driven by gallons of fuel consumed. Higher MPG = better fuel economy.',
    whatIs: 'The MPG Calculator computes fuel economy from distance traveled and fuel consumed, or converts between MPG (US or UK) and L/100km. Tracking real-world MPG against EPA estimates reveals driving habits and maintenance issues. It is used by drivers to monitor fuel efficiency, compare vehicles, and calculate operating costs.',
    howToUse: [
      'Record your odometer reading at fill-up.',
      'Drive until next fill-up, then record miles driven and gallons added.',
      'Enter both values and click Calculate to see your real-world MPG.',
      'Or enter MPG to see equivalent L/100km.',
    ],
    formula: 'MPG = Miles Driven / Gallons Used. L/100km = 235.214 / MPG. Example: 350 miles driven, 12.5 gallons added: MPG = 350 / 12.5 = 28 MPG = 8.4 L/100km.',
    examples: [
      { title: 'Highway Driving', scenario: '420 miles driven on highway, 11.5 gallons used.', result: 'MPG = 420 / 11.5 = 36.5 MPG. Excellent highway efficiency.' },
      { title: 'City Commuting', scenario: '180 miles city driving, 8.2 gallons.', result: 'MPG = 180 / 8.2 = 21.95 MPG. City driving is typically 20-30% less efficient than highway.' },
    ],
    useCases: [
      'Tracking fuel efficiency to detect engine or tire issues.',
      'Comparing real-world to EPA-estimated MPG.',
      'Calculating monthly and annual fuel costs.',
      'Vehicle purchase decisions based on long-term fuel economy.',
    ],
    faqs: [
      { q: 'What is a good MPG?', a: 'For sedans: 30-40 MPG combined is good. For SUVs: 25-35 MPG. For trucks: 20-30 MPG. Hybrids: 45-60+ MPG. EVs are rated in MPGe (miles per gallon equivalent) and typically 100+ MPGe.' },
      { q: 'Why is my MPG lower than the EPA estimate?', a: 'Real-world driving typically yields 15-30% below EPA estimates due to aggressive driving, frequent stops, A/C use, higher speeds, cold weather, cargo weight, and tire underinflation. The EPA has improved testing protocols, but gaps remain.' },
      { q: 'Does speed affect MPG?', a: 'Dramatically. Most vehicles achieve peak efficiency at 45-55 mph. Above 60 mph, aerodynamic drag increases sharply — driving 75 mph instead of 65 mph can reduce MPG by 15-20%.' },
      { q: 'What is combined MPG?', a: 'EPA combined MPG = 55% city + 45% highway. It represents a blend of driving conditions and is the primary number for vehicle comparisons. Most drivers experience somewhere between city and highway MPG depending on their routes.' },
      { q: 'How does tire pressure affect MPG?', a: 'Tires underinflated by 10 PSI can reduce MPG by 3-5%. Properly inflated tires reduce rolling resistance. Check tire pressure monthly and after significant temperature changes.' },
    ],
    aiQA: [
      { q: 'How do I calculate MPG?', a: 'MPG = Miles Driven / Gallons of Fuel Used.' },
      { q: 'What is a good MPG for a car?', a: '30+ MPG combined is good for most sedans. 40+ for compact/small cars. 50+ for hybrids.' },
      { q: 'What is MPG vs L/100km?', a: 'MPG (miles per gallon) is used in the US and UK. L/100km (liters per 100km) is used in most other countries. Higher MPG = better. Lower L/100km = better.' },
      { q: 'How many miles to the gallon is good?', a: '30-40 MPG is good for most car types. 50+ MPG is excellent (hybrid territory).' },
      { q: 'What car has the best MPG?', a: 'Hybrids like Toyota Prius (52 MPG), Hyundai Elantra Hybrid (54 MPG), and Toyota Corolla Hybrid (53 MPG) top non-electric fuel economy ratings.' },
    ],
  },

  'speed-distance-time': {
    quickAnswer: 'Speed, distance, and time are related by: Speed = Distance / Time, Distance = Speed x Time, Time = Distance / Speed. Enter any two to calculate the third.',
    whatIs: 'The Speed Distance Time Calculator solves the fundamental relationship between speed, distance, and time. Given any two values, it instantly calculates the third. It supports multiple units (mph, km/h, m/s, knots for speed; miles, km, meters for distance; hours, minutes, seconds for time) and is used in physics, travel planning, athletics, and navigation.',
    howToUse: [
      'Select which value you want to calculate (speed, distance, or time).',
      'Enter the other two known values with appropriate units.',
      'Click Calculate to see the missing value.',
    ],
    formula: 'Speed = Distance / Time. Distance = Speed x Time. Time = Distance / Speed. Unit conversions: 1 mph = 1.60934 km/h = 0.44704 m/s. Example: Driving 120 miles at 60 mph: Time = 120 / 60 = 2 hours.',
    examples: [
      { title: 'Road Trip Timing', scenario: '250-mile trip at 65 mph average speed.', result: 'Time = 250 / 65 = 3 hours 51 minutes.' },
      { title: 'Running Speed', scenario: 'Ran 5km in 25 minutes.', result: 'Speed = 5 / (25/60) = 12 km/h = 7.46 mph = 5:00 min/km pace.' },
    ],
    useCases: [
      'Estimating travel time for road trips.',
      'Converting running distance and time to speed.',
      'Physics homework and motion problems.',
      'Navigation calculations for pilots, sailors, and hikers.',
    ],
    faqs: [
      { q: 'What is the formula for speed?', a: 'Speed = Distance / Time. All three variables are interrelated — knowing any two allows calculation of the third.' },
      { q: 'How do I calculate average speed?', a: 'Average Speed = Total Distance / Total Time. Note: average speed is not the same as the average of two speeds. If you drive 60 mph for 1 hour and 30 mph for 1 hour, average speed = 90 miles / 2 hours = 45 mph.' },
      { q: 'What is the difference between speed and velocity?', a: 'Speed is a scalar (magnitude only). Velocity is a vector (magnitude and direction). Speed tells you how fast; velocity tells you how fast and in which direction. In everyday transportation calculations, speed is what matters.' },
      { q: 'What is mph in km/h?', a: '1 mph = 1.60934 km/h. Common conversions: 60 mph = 96.6 km/h; 100 km/h = 62.1 mph.' },
      { q: 'How does the speed-distance-time triangle work?', a: 'Cover the variable you want to find. The remaining two show the operation: D and T uncovered (T on bottom) = D/T = Speed. D over T = Speed. S and T (T on right) = S x T = Distance. Etc.' },
    ],
    aiQA: [
      { q: 'How do I calculate speed from distance and time?', a: 'Speed = Distance / Time.' },
      { q: 'How long does it take to drive 200 miles at 70 mph?', a: '200 / 70 = 2.857 hours = 2 hours 51 minutes.' },
      { q: 'What is 100 mph in km/h?', a: '100 mph x 1.60934 = 160.93 km/h.' },
      { q: 'How far can you travel in 3 hours at 65 mph?', a: '65 x 3 = 195 miles.' },
      { q: 'What speed is 26.2 miles in 4 hours?', a: 'Marathon pace: 26.2 / 4 = 6.55 mph = 9:09 per mile.' },
    ],
  },

  'average-speed': {
    quickAnswer: 'Average speed = Total Distance / Total Time. It accounts for all stops, slow segments, and fast segments. Enter multiple legs of a journey for the true average.',
    whatIs: 'The Average Speed Calculator computes the true average speed for a trip with multiple legs or varying speeds. It correctly handles the common mistake of averaging speeds arithmetically (which gives wrong results when time spent at each speed differs). It also computes multi-leg travel time and total distance.',
    howToUse: [
      'Enter the distance and speed (or time) for each leg of your trip.',
      'Click Add Leg to include more segments.',
      'Click Calculate to see total distance, total time, and true average speed.',
    ],
    formula: 'True Average Speed = Total Distance / Total Time. NOT the average of individual speeds. Example: 60 mph for 1 hour (60 miles) then 30 mph for 2 hours (60 miles) = 120 miles / 3 hours = 40 mph. NOT (60+30)/2 = 45 mph.',
    examples: [
      { title: 'City and Highway Mix', scenario: 'Leg 1: 30 miles at 30 mph. Leg 2: 70 miles at 70 mph.', result: 'Total distance = 100 miles. Time: 1h + 1h = 2h. True average = 100/2 = 50 mph.' },
      { title: 'Multi-Stop Road Trip', scenario: 'Leg 1: 150 miles at 65 mph. Stop: 30 min. Leg 2: 100 miles at 60 mph.', result: 'Total time = 2.31h + 0.5h + 1.67h = 4.47h. Distance = 250 miles. Avg = 55.9 mph.' },
    ],
    useCases: [
      'Calculating true average speed including stops on road trips.',
      'Multi-leg journey time estimation.',
      'Logistics and fleet management route analysis.',
      'Physics problems involving non-constant velocity.',
    ],
    faqs: [
      { q: 'Why can\'t I just average the speeds?', a: 'Averaging speeds only works if you spend equal time at each speed. If you spend different amounts of time at each speed, the arithmetic mean is wrong. Total Distance / Total Time gives the correct result every time.' },
      { q: 'What is average speed vs. average velocity?', a: 'Average speed = total distance / total time (scalar). Average velocity = displacement / time (vector — direction matters). For a round trip where you return to the start, average velocity = 0, but average speed is non-zero.' },
      { q: 'Does average speed include stops?', a: 'Only if you include the stopped time in the "total time" calculation. If you stopped for gas for 10 minutes, that time either counts (reducing average speed) or is excluded from the calculation depending on your goal.' },
      { q: 'What is a harmonic mean speed?', a: 'If you drive the same distance at two different speeds (not the same time), the average speed is the harmonic mean: 2 x (v1 x v2) / (v1 + v2). Example: 60 mph and 30 mph for equal distances: 2 x (60 x 30) / (60 + 30) = 40 mph.' },
      { q: 'How is average speed used in sports?', a: 'In cycling and marathon racing, average speed/pace determines overall performance. Official race timing computes exact average speed: total distance / total race time. This accounts for natural pace variation over the course.' },
    ],
    aiQA: [
      { q: 'What is average speed?', a: 'Total distance traveled divided by total time elapsed, including any stops or slow segments.' },
      { q: 'How do I calculate average speed?', a: 'Average Speed = Total Distance / Total Time.' },
      { q: 'Can I average two speeds together?', a: 'Only if you spent equal time at each speed. Otherwise, use total distance / total time.' },
      { q: 'What is the average driving speed on a highway?', a: 'US highway average: 60-70 mph. Interstate limits are typically 65-80 mph; average actual speeds run 65-75 mph.' },
      { q: 'How do I find average speed with different distances?', a: 'Add distances, add times for each segment, then divide total distance by total time.' },
    ],
  },

  'car-loan': {
    quickAnswer: 'Car loan monthly payment is calculated using the standard amortization formula. A $30,000 car loan at 7% for 60 months costs $594/month and $5,640 in total interest.',
    whatIs: 'The Car Loan Calculator computes monthly payments, total interest, and total cost for auto financing. It supports down payment input, trade-in value, sales tax, and extended warranties — giving a complete picture of what you actually pay for a car beyond just the sticker price. Used by car buyers before visiting the dealership.',
    howToUse: [
      'Enter the vehicle price and any down payment or trade-in value.',
      'Enter the loan interest rate (APR) and loan term in months.',
      'Optionally enter sales tax rate and fees.',
      'Click Calculate to see monthly payment, total interest, and total cost.',
    ],
    formula: 'Loan Amount = Vehicle Price - Down Payment - Trade-in + Tax + Fees. Monthly Payment = Loan Amount x [r(1+r)^n] / [(1+r)^n - 1]. Where r = monthly rate (APR/12), n = months. Example: $25,000 at 6.5%, 60 months: Payment = $487.60.',
    examples: [
      { title: 'New Car Purchase', scenario: '$35,000 car, $5,000 down, 7% APR, 60 months, no trade-in.', result: 'Loan = $30,000. Monthly payment = $594.04. Total interest = $5,642.40. Total cost = $40,642.40.' },
      { title: 'Used Car', scenario: '$18,000 used car, $2,000 down, 9.5% APR, 48 months.', result: 'Loan = $16,000. Monthly payment = $400.76. Total interest = $3,236.48.' },
    ],
    useCases: [
      'Evaluating affordability before going to the dealership.',
      'Comparing different loan terms and their impact on total cost.',
      'Understanding how down payment size affects monthly payments.',
      'Negotiating loan terms with better-informed expectations.',
    ],
    faqs: [
      { q: 'What is a good car loan interest rate?', a: 'For excellent credit (750+ score): 4-6% for new cars in 2024. Good credit (700-749): 6-8%. Fair credit (660-699): 8-12%. Below 660: 12-20%+. Used car rates are typically 1-3% higher than new car rates.' },
      { q: 'Should I get pre-approved for a car loan?', a: 'Yes — pre-approval from your bank or credit union gives you a rate baseline to compare dealer financing against. Pre-approval also speeds up the dealership process and strengthens your negotiating position.' },
      { q: 'Is 72 months too long for a car loan?', a: 'Generally yes. Longer terms reduce monthly payments but increase total interest paid and create a greater risk of being "underwater" (owing more than the car is worth) for an extended period due to rapid depreciation.' },
      { q: 'What is dealer financing vs. bank financing?', a: 'Dealers get a commission ("dealer reserve") on loans they arrange, sometimes marking up the rate you qualify for. Banks, credit unions, and online lenders often offer lower rates with no dealer markup.' },
      { q: 'What is GAP insurance for a car loan?', a: 'GAP (Guaranteed Asset Protection) insurance covers the difference between what you owe on your loan and the car\'s actual cash value if the car is totaled. Most valuable in early loan years when depreciation outpaces loan paydown.' },
    ],
    aiQA: [
      { q: 'What is a good monthly car payment?', a: 'Financial advisors recommend car expenses (payment + insurance + fuel + maintenance) be under 15-20% of take-home pay.' },
      { q: 'How much car can I afford?', a: 'Monthly car payment should not exceed 10-15% of monthly take-home pay. At $4,000/month take-home, that is $400-600/month.' },
      { q: 'What is the monthly payment on a $25,000 car loan?', a: 'At 7% for 60 months: approximately $495/month.' },
      { q: 'How does a larger down payment help?', a: 'Reduces loan amount, monthly payment, total interest paid, and the risk of going underwater on the loan.' },
      { q: 'What is a 72-month car loan?', a: 'A 6-year auto loan. Monthly payments are lower but you pay more interest and risk owing more than the car is worth for years.' },
    ],
  },

  'trip-cost': {
    quickAnswer: 'Total road trip cost = fuel cost + tolls + meals + lodging + activities. The fuel portion is (distance / MPG) x gas price. Use this calculator for a complete trip budget.',
    whatIs: 'The Trip Cost Calculator estimates the comprehensive cost of a road trip, including fuel, tolls, food, accommodation, and entry fees. It calculates per-person cost when splitting with travel companions. Unlike a simple fuel calculator, it builds a complete trip budget to help travelers plan accurately and avoid budget surprises.',
    howToUse: [
      'Enter total trip distance and vehicle MPG.',
      'Enter current fuel price.',
      'Add estimated daily costs for accommodation, meals, and activities.',
      'Enter number of travelers to see cost per person.',
      'Click Calculate for total trip cost and per-person breakdown.',
    ],
    formula: 'Fuel Cost = (Miles / MPG) x Price per Gallon. Total Trip Cost = Fuel + Tolls + Meals (daily rate x days) + Lodging (nightly rate x nights) + Activities. Per Person Cost = Total / Number of Travelers.',
    examples: [
      { title: 'Weekend Getaway', scenario: '400-mile round trip, 30 MPG, $3.60/gal. 2 nights at $120/night. $50/day food x 2 days. 2 people.', result: 'Fuel: $48. Lodging: $240. Food: $100. Total: $388. Per person: $194.' },
      { title: 'Cross-Country', scenario: '3,000 miles, 28 MPG, $3.75/gal. 14 days, $80/night camping, $40/day food. 3 people.', result: 'Fuel: $401. Lodging: $1,120. Food: $560. Total: $2,081. Per person: $694.' },
    ],
    useCases: [
      'Comprehensive road trip budget planning.',
      'Comparing road trip vs. flying for the same route.',
      'Splitting costs fairly among multiple travelers.',
      'Annual road trip cost tracking and planning.',
    ],
    faqs: [
      { q: 'How much does a road trip cost on average?', a: 'A 1,000-mile weekend road trip typically costs $300-600 total for one car with 2-4 passengers, including fuel, one or two nights lodging, and meals. Cross-country trips (3,000-4,000 miles) can run $800-2,000+.' },
      { q: 'Is driving or flying cheaper for the same distance?', a: 'Generally, driving is cheaper for trips under 500-600 miles, especially with multiple passengers. For longer distances, flying often wins on time and sometimes cost, especially when factor in hotels, food, and wear on the vehicle.' },
      { q: 'What is the IRS rate for business road trips?', a: 'The 2024 IRS standard mileage rate is 67 cents per mile for business use, covering fuel, insurance, maintenance, and depreciation. This is used for business expense reimbursement and tax deductions.' },
      { q: 'How do I estimate tolls for a road trip?', a: 'Use apps like TollGuru, Tollsmart, or Google Maps\' toll estimation feature. Tolls vary widely by state and route. Many interstate routes in the Northeast US have significant tolls.' },
      { q: 'What hidden costs should I include in a road trip budget?', a: 'Parking fees, roadside snacks and coffee, souvenir stops, unexpected maintenance (tire pressure, wiper fluid), and a safety buffer of 10-15% for overruns.' },
    ],
    aiQA: [
      { q: 'How much does a road trip cost?', a: 'Typically $300-500 per 1,000 miles for a two-person trip including fuel, lodging, and food.' },
      { q: 'How do I split road trip costs?', a: 'Add up all shared costs (fuel, lodging, tolls) and divide by the number of travelers.' },
      { q: 'What is the cheapest way to road trip?', a: 'Camp instead of hotels, cook some meals, drive a fuel-efficient car, and travel during non-peak seasons.' },
      { q: 'How much gas for a 1,000-mile trip?', a: 'At 30 MPG: 33.3 gallons. At $3.50/gal: $116.67 in fuel costs.' },
      { q: 'Is a road trip cheaper with more people?', a: 'Yes — fuel and lodging costs are shared but personal expenses (meals, souvenirs) are individual. The more people sharing costs, the cheaper per person.' },
    ],
  },

  'ev-cost': {
    quickAnswer: 'EV electricity cost = (Miles driven / EV efficiency in miles/kWh) x electricity cost per kWh. EVs typically cost 2-4x less per mile to fuel than gasoline vehicles.',
    whatIs: 'The EV Cost Calculator estimates the annual electricity cost to charge an electric vehicle based on your annual mileage, vehicle efficiency (miles per kWh or kWh/100 miles), and local electricity rate. It compares EV fuel cost to equivalent gasoline cost to show the fuel savings from going electric.',
    howToUse: [
      'Enter your annual mileage.',
      'Enter your EV\'s efficiency in miles per kWh (or kWh/100 miles).',
      'Enter your electricity rate in cents per kWh.',
      'Optionally enter a comparable gas car\'s MPG and gas price for comparison.',
      'Click Calculate for annual EV electricity cost and savings vs. gas.',
    ],
    formula: 'Annual kWh = Annual Miles / (Miles per kWh). Annual Electricity Cost = Annual kWh x $/kWh. Annual Gas Cost = Annual Miles / MPG x Gas Price/gal. Fuel Savings = Annual Gas Cost - Annual Electricity Cost.',
    examples: [
      { title: 'Tesla Model 3', scenario: '12,000 miles/year, 4 miles/kWh efficiency, $0.13/kWh electricity. vs. 30 MPG gas car at $3.50/gal.', result: 'EV cost: $390/year. Gas equivalent: $1,400/year. Annual saving: $1,010.' },
      { title: 'Heavy EV Driver', scenario: '20,000 miles/year, 3.5 miles/kWh, $0.15/kWh electricity.', result: 'EV cost: $857/year. vs. 25 MPG at $3.60/gal = $2,880/year. Saving: $2,023/year.' },
    ],
    useCases: [
      'Calculating annual electricity cost for an EV purchase decision.',
      'Comparing total cost of ownership between EV and gas vehicles.',
      'Estimating home charging costs vs. public charging.',
      'Planning charging infrastructure for a home or business fleet.',
    ],
    faqs: [
      { q: 'What is the average electricity rate in the US?', a: 'The national average is approximately 13-15 cents per kWh in 2024, but rates vary significantly by state: Hawaii (40+ cents), California (25+ cents), Louisiana (10 cents). Your local utility bill shows your rate.' },
      { q: 'Is it cheaper to charge an EV at home or publicly?', a: 'Home charging is almost always cheaper — typically 10-20 cents/kWh vs. 30-60+ cents/kWh at public DC fast chargers. Home charging (Level 2) is the most cost-effective way to fuel an EV.' },
      { q: 'How much does it cost to charge an EV from 0 to 100%?', a: 'For a 75 kWh battery EV at $0.13/kWh: 75 x $0.13 = $9.75 for a full charge (roughly 250+ miles of range). Compared to about $50-60 to fill a similar-size gas tank.' },
      { q: 'What is Level 1, Level 2, and DC Fast Charging?', a: 'Level 1: standard 120V outlet (3-5 miles/hour). Level 2: 240V home/public charger (20-30 miles/hour). DC Fast Charging: 100-350 kW chargers (150-350 miles/hour). Most EV owners use Level 2 at home.' },
      { q: 'Are there federal tax credits for EVs?', a: 'The Inflation Reduction Act (2022) provides up to $7,500 federal tax credit for new EVs and $4,000 for used EVs meeting eligibility criteria (price caps, income limits, North American assembly). Check IRS guidance for current eligibility.' },
    ],
    aiQA: [
      { q: 'How much does it cost to charge an electric car?', a: 'At $0.13/kWh and 4 miles/kWh: $0.0325 per mile = $3.25 per 100 miles.' },
      { q: 'How much cheaper is an EV than a gas car to fuel?', a: 'Typically 2-4x cheaper per mile in fuel costs. Savings vary with local electricity and gas prices.' },
      { q: 'How far can an EV go on one charge?', a: 'Current EVs range from 100 miles (short-range) to 400+ miles (Tesla Model S Long Range). Average mainstream EV: 250-300 miles per charge.' },
      { q: 'How much does home EV charging cost per month?', a: 'A typical EV driver using 300 miles/week at 4 miles/kWh and $0.13/kWh pays about $24/month — compared to $50-100/month in gasoline.' },
      { q: 'Is an EV cheaper than gas over 5 years?', a: 'Usually yes, despite higher purchase price. Lower fuel and maintenance costs (no oil changes, brake wear reduced by regenerative braking) typically offset the price premium within 3-7 years.' },
    ],
  },
};
