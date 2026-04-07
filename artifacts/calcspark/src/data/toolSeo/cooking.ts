import type { ToolSEOMap } from './index';

export const COOKING_SEO: ToolSEOMap = {
  'recipe-scaler': {
    quickAnswer: 'Scale any recipe to any number of servings. If a recipe serves 4 and you need 10 servings, multiply all ingredients by 10/4 = 2.5. Our calculator does this instantly for every ingredient.',
    whatIs: 'The Recipe Scaler multiplies or divides all ingredient quantities proportionally to change the number of servings. Enter the original serving count, desired serving count, and all ingredient quantities — get scaled amounts instantly. Works for any unit: cups, grams, ounces, tablespoons.',
    howToUse: ['Enter the original number of servings.', 'Enter your desired number of servings.', 'Input each ingredient and quantity.', 'Click Scale to see all ingredient amounts adjusted proportionally.'],
    formula: 'Scaled amount = Original amount x (Desired servings / Original servings). Scale factor = Desired / Original. Example: Recipe for 6, need 9: scale factor = 9/6 = 1.5. 2 cups flour → 3 cups flour.',
    examples: [
      { title: 'Holiday Cookies', scenario: 'Cookie recipe makes 24 cookies. Need 60 cookies.', result: 'Scale factor = 60/24 = 2.5. 2 cups flour → 5 cups flour. 1 tsp vanilla → 2.5 tsp.' },
      { title: 'Halving a Recipe', scenario: 'Cake recipe for 12 slices, only need 6.', result: 'Scale factor = 0.5. 3 eggs → 1.5 eggs (use 1 egg + 1 yolk). 2 tsp baking powder → 1 tsp.' },
    ],
    useCases: ['Scaling holiday recipes for large family gatherings.', 'Halving recipes when cooking for one or two.', 'Batch cooking and meal prep calculations.', 'Restaurant portion size adjustments.'],
    faqs: [
      { q: 'Does scaling always work proportionally?', a: 'For most ingredients, yes. However: leavening agents (baking powder, baking soda) should not be scaled exactly — use about 25% less than proportional for large batches. Spices and salt often need less scaling than the recipe suggests (taste and adjust).' },
      { q: 'How do I handle eggs when scaling?', a: 'For 1.5 eggs: use 1 egg + 1 tablespoon beaten egg. For 2.5 eggs: use 2 eggs + 2 tablespoons beaten egg (about half an egg). Alternatively, use a scale and weight the eggs in grams.' },
      { q: 'Does cooking time change when scaling?', a: 'Pan size and cooking time often need adjustment. More food in the same pan takes longer. If scaling up significantly, use multiple pans rather than one large pan. Roasting times increase with the mass of the roast, not linearly with serving count.' },
      { q: 'What about baking chemistry when scaling?', a: 'Baking is more sensitive than cooking. Large batches: reduce leavening by 20-25%. Yeast bread: rising time doesn\'t scale. Very large cakes may need longer baking at lower temperature. Test-bake when scaling significantly.' },
      { q: 'How do I scale tablespoons and teaspoons?', a: '3 teaspoons = 1 tablespoon. 4 tablespoons = 1/4 cup. When scaling yields fractional amounts, convert to the nearest convenient unit. 1.5 tablespoons = 1 tablespoon + 1.5 teaspoons.' },
    ],
    aiQA: [
      { q: 'How do I scale a recipe from 4 to 10 servings?', a: 'Multiply all ingredients by 10/4 = 2.5.' },
      { q: 'How do I halve a recipe?', a: 'Multiply all ingredients by 0.5.' },
      { q: 'Can I scale baking recipes?', a: 'Yes, but leavening agents should be scaled slightly less (25% less than proportional for large batches).' },
      { q: 'What is 1.5 tablespoons in teaspoons?', a: '4.5 teaspoons.' },
      { q: 'Does oven temperature change when scaling?', a: 'No. Temperature stays the same. Cooking time may increase for larger quantities.' },
    ],
  },

  'pizza-dough': {
    quickAnswer: 'Classic pizza dough: 500g flour, 325ml water (65% hydration), 10g salt, 7g yeast. This makes two 12" pizzas. Adjust hydration for your style: Neapolitan 60-65%, NY style 58-60%.',
    whatIs: 'The Pizza Dough Calculator computes ingredient amounts for any number of pizzas of any size, with adjustable hydration percentages. It scales flour, water, salt, yeast, and oil using baker\'s percentages — the professional method where all ingredients are expressed relative to flour weight.',
    howToUse: ['Enter the number of pizzas and size (diameter in inches).', 'Select your pizza style (Neapolitan, New York, thin crust).', 'Adjust hydration percentage if desired.', 'Click Calculate to see precise ingredient weights.'],
    formula: 'Baker\'s percentages: Water = Flour x hydration%. Salt = Flour x 2-3%. Yeast = Flour x 0.3-1% (dry) or 1-3% (fresh). Dough ball weight ≈ π x (r/2)^2 x 0.1 oz per sq inch (for thickness). Example: 12" pizza ≈ 250g dough ball.',
    examples: [
      { title: 'Neapolitan Pizza (2 pizzas)', scenario: '2 x 12" Neapolitan pizzas.', result: '500g 00 flour, 325ml water (65%), 15g salt, 1g dry yeast. Cold ferment 24-72 hours.' },
      { title: 'NY Style (4 pizzas)', scenario: '4 x 14" New York style.', result: '1kg bread flour, 590ml water (59%), 20g salt, 7g dry yeast, 30ml olive oil.' },
    ],
    useCases: ['Home pizza making with precise ingredient amounts.', 'Scaling dough for pizza parties.', 'Experimenting with different hydration levels.', 'Learning baker\'s percentages for bread baking.'],
    faqs: [
      { q: 'What is hydration percentage?', a: 'The ratio of water weight to flour weight. 65% hydration means 65g water per 100g flour. Higher hydration = wetter, stickier dough = more open crumb. Beginners should start at 60-65%.' },
      { q: 'What flour should I use?', a: 'Neapolitan: Italian 00 flour (finely milled, low gluten). NY style: bread flour (high protein, 12-14%). All-purpose works for beginners. Higher protein = stronger gluten = chewier crust.' },
      { q: 'How long should pizza dough rest?', a: 'Minimum: 1-2 hours at room temperature. Better: 24-48 hours in refrigerator (cold fermentation develops complex flavor). Best: 48-72 hours cold fermentation. Remove from fridge 1-2 hours before shaping.' },
      { q: 'What is the difference between active dry yeast and instant yeast?', a: 'Active dry yeast: must be dissolved in warm water first (proof) before mixing. Instant (rapid-rise): can be added directly to flour. Use 25% less instant yeast than active dry. Both produce equivalent results.' },
      { q: 'How do I know when the dough is properly kneaded?', a: 'Windowpane test: stretch a small piece of dough thin enough to see light through without tearing. Properly kneaded gluten is elastic and won\'t tear immediately when stretched thin.' },
    ],
    aiQA: [
      { q: 'What is a good pizza dough hydration?', a: '60-65% for beginners. Neapolitan: 60-65%. NY style: 58-60%. High-hydration (70%+) for ciabatta-like open crumb.' },
      { q: 'How much dough per pizza?', a: 'About 200-250g per 12" pizza.' },
      { q: 'How long do you knead pizza dough?', a: '8-10 minutes by hand. 5-6 minutes with a stand mixer at medium speed.' },
      { q: 'What temperature should water be for yeast?', a: '37-43°C (100-110°F). Too hot kills yeast; too cold slows activation.' },
      { q: 'Can I freeze pizza dough?', a: 'Yes. Freeze after first rise in oiled zip bags. Thaw overnight in refrigerator, then bring to room temperature before shaping.' },
    ],
  },

  'rice': {
    quickAnswer: 'Standard rice ratio: 1 cup dry rice to 2 cups water = 3 cups cooked rice (serves 2-3). Brown rice: 1:2.5 ratio. Jasmine: 1:1.5. Adjust for your cooker.',
    whatIs: 'The Rice Calculator computes the correct water-to-rice ratio and cook time for different rice varieties (white, brown, jasmine, basmati, sushi, arborio) and cooking methods (stovetop, rice cooker, Instant Pot). Perfect rice ratios are the most common kitchen calculation question.',
    howToUse: ['Select the rice variety.', 'Enter the dry rice amount in cups or grams.', 'Select the cooking method (stovetop, rice cooker, pressure cooker).', 'Click Calculate to see water amount, cook time, and yield.'],
    formula: 'White rice: 1:2 ratio (cups). Cooked yield ≈ 3x dry weight. Brown rice: 1:2.5. Basmati: 1:1.5. Sushi rice: 1:1.25. Risotto (arborio): add stock gradually (total ~4:1). 1 cup dry white rice = 180g = 3 cups cooked.',
    examples: [
      { title: 'Dinner for 4', scenario: 'Need 4 cups cooked rice. How much dry rice?', result: '4 cups cooked / 3 = 1.33 cups dry rice. Use 1.33 cups rice + 2.67 cups water.' },
      { title: 'Meal Prep', scenario: '5 cups dry jasmine rice for weekly meal prep.', result: '5 cups jasmine rice + 7.5 cups water (1:1.5 ratio). Yield: ~15 cups cooked rice.' },
    ],
    useCases: ['Calculating exact rice amounts for any number of servings.', 'Scaling rice for meal prep.', 'Adjusting for different rice varieties and cookers.', 'Avoiding overcooked or undercooked rice.'],
    faqs: [
      { q: 'Why does my rice always turn out mushy?', a: 'Too much water, or lid opened during cooking. Use exact ratios, never open lid during cooking, and let rest off heat for 5-10 minutes before fluffing with a fork.' },
      { q: 'Do I need to rinse rice?', a: 'Rinse white rice until water runs clear for less sticky, fluffier results. Sushi rice: rinse, then apply vinegar dressing. Brown rice: rinsing optional. Risotto arborio: do NOT rinse (starch creates creaminess).' },
      { q: 'Why is the water ratio different for every rice type?', a: 'Different rice varieties have different starch content and grain density. Jasmine and basmati are long-grain with less starch and need less water. Brown rice has bran layer and needs more water and time.' },
      { q: 'Can I cook rice in broth?', a: 'Yes, and it adds excellent flavor. Use the same ratio of broth as water. Low-sodium broth recommended so you can control salt level.' },
      { q: 'How long does cooked rice last?', a: 'Refrigerator: 4-6 days in airtight container. Freezer: 6 months. Cool quickly and refrigerate promptly — rice can harbor Bacillus cereus spores that produce toxins if left at room temperature for extended periods.' },
    ],
    aiQA: [
      { q: 'What is the water to rice ratio?', a: 'White rice: 1 cup rice to 2 cups water. Brown rice: 1 cup to 2.5 cups. Jasmine: 1 to 1.5.' },
      { q: 'How much cooked rice does 1 cup dry make?', a: 'About 3 cups of cooked white rice.' },
      { q: 'How long does it take to cook white rice?', a: '18-20 minutes on stovetop after bringing to boil.' },
      { q: 'How much rice per person?', a: '1/4 cup (45g) dry rice per person as a side dish. 1/3 cup for a main dish portion.' },
      { q: 'What is the ratio for brown rice?', a: '1 cup brown rice to 2.5 cups water. Cook 40-45 minutes.' },
    ],
  },

  'coffee': {
    quickAnswer: 'Golden coffee ratio: 1:15 to 1:17 (coffee to water by weight). For a 12 oz cup: 20-22g coffee in 300-350ml water. Espresso: 1:2 ratio (18g in → 36g out).',
    whatIs: 'The Coffee Ratio Calculator computes precise coffee and water amounts for any brew method (drip, French press, pour-over, espresso, cold brew). Using weight (grams) rather than scoops produces consistent, repeatable coffee quality every time.',
    howToUse: ['Select your brewing method.', 'Enter the volume of water or number of cups.', 'Adjust the ratio (1:15 for strong, 1:17 for mild).', 'Click Calculate to see grams of coffee and extraction parameters.'],
    formula: 'Coffee (g) = Water (ml) / Ratio. Standard: 1:15 = 1g coffee per 15ml water. Espresso: 18g ground → 36g shot (1:2). French press: 1:15. Cold brew: 1:8 concentrate, dilute 1:1 before serving.',
    examples: [
      { title: 'Pour-Over (2 cups)', scenario: '500ml pour-over at 1:15 ratio.', result: '500/15 = 33g coffee. Grind: medium-fine. Water temperature: 93-96°C (200-205°F). Total brew time: 3-4 minutes.' },
      { title: 'Espresso Double Shot', scenario: 'Double espresso shot.', result: '18g ground → 36g espresso out (1:2 ratio). 25-30 second extraction.' },
    ],
    useCases: ['Brewing consistently great coffee at home.', 'Calibrating new coffee equipment.', 'Adjusting strength for personal preference.', 'Scaling coffee for groups and catering.'],
    faqs: [
      { q: 'What is the SCA (Specialty Coffee Association) recommended ratio?', a: 'SCA recommends 55g of coffee per liter of water (1:18 ratio) for drip coffee. Many specialty coffee enthusiasts use 1:15 to 1:16 for bolder flavor.' },
      { q: 'Why use grams instead of scoops?', a: 'A "scoop" of coffee varies dramatically by grind size (fine = more grams per scoop, coarse = fewer). Weight is always accurate regardless of grind. A kitchen scale costing $10-15 is the best coffee equipment investment.' },
      { q: 'What temperature should water be for coffee?', a: '91-96°C (195-205°F) for most brewing methods. Boiling water (100°C) can over-extract and make coffee bitter. Let boiled water rest 30 seconds before pouring.' },
      { q: 'What is bloom in pour-over coffee?', a: 'Wetting grounds for 30-45 seconds before full pour. CO2 from fresh coffee creates a "bloom" as it releases. This ensures even extraction. Fresh coffee blooms vigorously; stale coffee barely blooms.' },
      { q: 'What is TDS (Total Dissolved Solids)?', a: 'A measure of coffee concentration. Specialty coffee targets 1.15-1.45% TDS for drip coffee. Measured with a refractometer. Too low: under-extracted (weak, sour). Too high: over-extracted (bitter, harsh).' },
    ],
    aiQA: [
      { q: 'What is the standard coffee to water ratio?', a: '1:15 to 1:17 by weight. About 60g per liter for drip coffee.' },
      { q: 'How many grams of coffee per cup?', a: 'About 15-18g per 250ml cup.' },
      { q: 'What ratio is used for espresso?', a: '1:2. 18g coffee in, 36g espresso out.' },
      { q: 'What is the cold brew ratio?', a: '1:8 for concentrate (steep 12-24 hours). Dilute 1:1 before serving.' },
      { q: 'How much coffee for a French press?', a: '1 tablespoon (7g) per 100ml water, or 1:15 by weight.' },
    ],
  },

  'cups-to-grams': {
    quickAnswer: 'Cups to grams varies by ingredient: 1 cup flour = 120g. 1 cup sugar = 200g. 1 cup butter = 227g. 1 cup water = 237g. Use this calculator for any ingredient.',
    whatIs: 'The Cups to Grams Converter converts US cup measurements to grams for any cooking ingredient. Since volume-to-weight varies dramatically by ingredient (flour packs differently than sugar, butter, or rice), this tool provides accurate conversions using a comprehensive ingredient database.',
    howToUse: ['Enter the cup amount (e.g., 1.5).', 'Select or search for the ingredient.', 'Click Convert to see the exact gram weight.'],
    formula: 'Grams = Cups x (density x 236.588 ml/cup). Each ingredient has a unique density. Flour: 1 cup = 120g (spooned) or 140g (scooped). Sugar: 1 cup = 200g. Butter: 1 cup = 227g. Rice: 1 cup = 185g.',
    examples: [
      { title: 'Baking Recipe', scenario: 'Recipe calls for 2.5 cups all-purpose flour.', result: '2.5 x 120g = 300g flour.' },
      { title: 'Brown Sugar', scenario: '3/4 cup packed brown sugar in grams.', result: '3/4 cup packed brown sugar = 165g.' },
    ],
    useCases: ['Converting American cup recipes to metric for precision baking.', 'International recipe adaptation.', 'Accurate portion control and nutrition tracking.', 'Scaling recipes using weight measurements.'],
    faqs: [
      { q: 'Why does 1 cup of flour not equal 1 cup of sugar?', a: 'Volume measures the space, not the weight. Different ingredients have different densities. Flour is lighter (120g/cup) than sugar (200g/cup) because of air between particles.' },
      { q: 'Why should I bake by weight?', a: 'Weight is precise and consistent. A "cup" of flour can range from 110g (sifted) to 160g (scooped directly from bag). A scale eliminates this variable and produces consistent results every time.' },
      { q: 'What is the difference between spooned and scooped flour?', a: 'Spooned: spoon flour into measuring cup, level off = ~120g/cup. Scooped: dip cup into flour bag = ~140g/cup due to compaction. Most recipes assume spooned-and-leveled measurement.' },
      { q: 'How do I convert cups to grams for liquids?', a: '1 US cup = 236.6 ml. For water: 1 cup = 237g. For milk: 1 cup ≈ 244g (slightly denser). For oil: 1 cup ≈ 218g (less dense).' },
      { q: 'What is 1 cup in metric countries?', a: 'US cup = 236.6ml. Metric cup (Australia, Canada) = 250ml. UK cup = 284ml (imperial). Always specify which cup measure a recipe uses.' },
    ],
    aiQA: [
      { q: 'How many grams is 1 cup of flour?', a: 'Approximately 120g (all-purpose, spooned and leveled).' },
      { q: 'How many grams is 1 cup of sugar?', a: '200g (granulated white sugar).' },
      { q: 'How many grams is 1 cup of butter?', a: '227g (2 sticks of US butter).' },
      { q: 'How many grams is 1 cup of water?', a: 'Approximately 237g (1 US cup = 236.6ml).' },
      { q: 'How many grams is 1 cup of rice?', a: 'About 185g (uncooked white rice).' },
    ],
  },

  'grams-to-cups': {
    quickAnswer: 'Grams to cups: 120g flour = 1 cup. 200g sugar = 1 cup. 227g butter = 1 cup. Enter grams and select ingredient for instant cup conversion.',
    whatIs: 'The Grams to Cups Converter converts gram weights to US cup measurements for any cooking ingredient. Use this when working from a metric recipe and you only have US measuring cups, or when adapting European baking recipes to American measurements.',
    howToUse: ['Enter the weight in grams.', 'Select the ingredient from the list.', 'Click Convert to see the cup and tablespoon measurement.'],
    formula: 'Cups = Grams / (ingredient_density x 236.588). Flour: 120g = 1 cup. Sugar: 200g = 1 cup. Butter: 113g = 1/2 cup = 1 stick. 1 tablespoon = 1/16 cup.',
    examples: [
      { title: 'European Recipe', scenario: 'Recipe calls for 250g all-purpose flour.', result: '250g / 120g per cup = 2.08 cups ≈ 2 cups + 1 tablespoon.' },
      { title: 'Butter Conversion', scenario: '100g butter in cups.', result: '100g / 227g per cup = 0.44 cups ≈ 3.5 tablespoons.' },
    ],
    useCases: ['Converting metric recipes to US cup measurements.', 'When you only have measuring cups, not a scale.', 'Understanding international recipe conversions.', 'Teaching cooking measurement concepts.'],
    faqs: [
      { q: 'How precise are gram-to-cup conversions?', a: 'The conversion uses standard densities. Actual results may vary slightly based on how ingredients are scooped, humidity (for flour), and ingredient freshness. For critical baking, using grams directly on a scale is always more accurate.' },
      { q: 'What does 1/3 cup equal in tablespoons?', a: '1/3 cup = 5 tablespoons + 1 teaspoon. Full conversion: 1 cup = 16 tablespoons = 48 teaspoons.' },
      { q: 'How do I measure 75g of butter without a scale?', a: '75g butter ≈ 5 tablespoons + 1 teaspoon. Or use the water displacement method: fill a cup with 1 cup cold water, add butter until water reaches 1 cup + 75ml level mark.' },
      { q: 'Why are European and American baking recipes so different?', a: 'Europe uses metric (grams by weight). America uses volume (cups). Professional bakers worldwide prefer metric weight for accuracy. Many American home cooks are learning to use scales for better results.' },
      { q: 'What is the conversion for cocoa powder?', a: 'Cocoa powder: 1 cup = 85-100g depending on type (Dutch-process is denser than natural). This illustrates why weight is more precise than volume for baking.' },
    ],
    aiQA: [
      { q: 'How many cups is 200g flour?', a: '200g / 120g = 1.67 cups ≈ 1 cup + 10 tablespoons.' },
      { q: 'How many cups is 250g sugar?', a: '250g / 200g = 1.25 cups = 1 cup + 4 tablespoons.' },
      { q: 'How many cups is 100g butter?', a: '100g / 227g ≈ 0.44 cups ≈ 7 tablespoons.' },
      { q: 'How many tablespoons in 1 cup?', a: '16 tablespoons = 1 cup.' },
      { q: 'How many teaspoons in 1 tablespoon?', a: '3 teaspoons = 1 tablespoon.' },
    ],
  },

  'cups-to-ml': {
    quickAnswer: '1 US cup = 236.6 mL. 1/2 cup = 118 mL. 1/4 cup = 59 mL. 1 tablespoon = 14.8 mL. 1 teaspoon = 4.9 mL.',
    whatIs: 'The Cups to mL Converter instantly converts US cup measurements to milliliters and liters. Use it to adapt American recipes to metric measuring tools, or to understand exact liquid volumes when cooking or baking.',
    howToUse: ['Enter the cup amount (fractions like 1/4 or decimals like 0.25).', 'Click Convert to see the result in mL and fl oz.'],
    formula: '1 US cup = 236.588 mL ≈ 237 mL. 1 UK/metric cup = 250 mL. 1/4 cup = 59.1 mL. 1/3 cup = 78.9 mL. 1/2 cup = 118.3 mL. 1 tablespoon (US) = 14.787 mL. 1 teaspoon = 4.929 mL.',
    examples: [
      { title: 'Baking Liquid', scenario: '3/4 cup milk to mL.', result: '3/4 x 236.6 = 177.4 mL ≈ 177 mL.' },
      { title: 'Large Recipe', scenario: '5 cups water to liters.', result: '5 x 236.6 = 1,183 mL = 1.183 liters.' },
    ],
    useCases: ['Converting American liquid recipes to metric.', 'Using milliliter measuring cups with cup recipes.', 'Understanding medication dosing volumes.', 'International recipe adaptation.'],
    faqs: [
      { q: 'What is a metric cup?', a: 'In Australia, Canada, and New Zealand: 1 metric cup = 250 mL. In the US: 1 cup = 236.6 mL. This ~6% difference matters for precision baking.' },
      { q: 'How many mL is a teaspoon?', a: '1 US teaspoon = 4.929 mL ≈ 5 mL. Medical/pharmaceutical teaspoon is exactly 5 mL.' },
      { q: 'How many mL is a tablespoon?', a: '1 US tablespoon = 14.787 mL ≈ 15 mL. UK tablespoon = 15 mL (convenient coincidence).' },
      { q: 'How do I measure 250 mL without a measuring cup?', a: 'Standard drinking glasses are about 250-300 mL. A regular coffee mug is about 350-400 mL. Use a kitchen measuring cup with mL markings for accuracy.' },
      { q: 'What is a fluid ounce?', a: '1 US fluid ounce = 29.57 mL. 1 UK fluid ounce = 28.41 mL. 8 US fl oz = 1 US cup = 236.6 mL.' },
    ],
    aiQA: [
      { q: 'How many mL in 1 cup?', a: '1 US cup = 236.6 mL ≈ 237 mL.' },
      { q: 'How many mL in 1/2 cup?', a: '118 mL.' },
      { q: 'How many mL in 1/4 cup?', a: 'Approximately 59 mL.' },
      { q: 'How many mL in 1 tablespoon?', a: 'About 15 mL.' },
      { q: 'How many mL in 1 teaspoon?', a: 'About 5 mL.' },
    ],
  },

  'cups-to-tbsp': {
    quickAnswer: '1 cup = 16 tablespoons. 1/2 cup = 8 tablespoons. 1/4 cup = 4 tablespoons. 1/3 cup = 5 tablespoons + 1 teaspoon.',
    whatIs: 'The Cups to Tablespoons Converter converts cup fractions to tablespoons (and teaspoons). Use it when you need a small amount that is easier to measure with tablespoons than a fractional measuring cup.',
    howToUse: ['Enter the cup amount.', 'Click Convert to see tablespoons and teaspoons.'],
    formula: '1 cup = 16 tablespoons = 48 teaspoons. 1 tablespoon = 3 teaspoons. 1/4 cup = 4 tablespoons. 1/3 cup = 5 tablespoons + 1 teaspoon. 1/2 cup = 8 tablespoons.',
    examples: [
      { title: 'Small Recipe', scenario: '1/3 cup butter in tablespoons.', result: '1/3 cup = 5 tablespoons + 1 teaspoon.' },
      { title: 'Seasoning', scenario: '3 tablespoons in cups.', result: '3/16 cup ≈ just under 1/4 cup.' },
    ],
    useCases: ['Measuring small liquid amounts without fraction cups.', 'Scaling down large recipes.', 'Cooking substitutions when cups are unavailable.', 'Baking precision for small batches.'],
    faqs: [
      { q: 'How many tablespoons is 1/3 cup?', a: '5 tablespoons + 1 teaspoon (or 5.33 tablespoons).' },
      { q: 'How many tablespoons is 3/4 cup?', a: '12 tablespoons.' },
      { q: 'How many teaspoons in a tablespoon?', a: '3 teaspoons = 1 tablespoon.' },
      { q: 'How many tablespoons in a cup?', a: '16 tablespoons = 1 cup.' },
      { q: 'What is 2 tablespoons in cups?', a: '2/16 = 1/8 cup.' },
    ],
    aiQA: [
      { q: 'How many tablespoons in 1 cup?', a: '16 tablespoons.' },
      { q: 'How many tablespoons in 1/2 cup?', a: '8 tablespoons.' },
      { q: 'How many tablespoons in 1/4 cup?', a: '4 tablespoons.' },
      { q: 'How many tablespoons in 1/3 cup?', a: '5 tablespoons + 1 teaspoon.' },
      { q: 'How many teaspoons in 1/2 cup?', a: '24 teaspoons.' },
    ],
  },

  'cups-to-tsp': {
    quickAnswer: '1 cup = 48 teaspoons. 1 tablespoon = 3 teaspoons. 1/4 cup = 12 teaspoons. 1/2 teaspoon = 2.5 mL.',
    whatIs: 'The Cups to Teaspoons Converter provides exact teaspoon equivalents for cup fractions. Essential for small ingredient amounts in baking and cooking where precision matters — especially for spices, leavening agents, and extracts.',
    howToUse: ['Enter the cup amount or fraction.', 'Click Convert to see teaspoons and tablespoons.'],
    formula: '1 cup = 48 teaspoons = 16 tablespoons. 1 tablespoon = 3 teaspoons. 1/4 cup = 12 teaspoons. 1 teaspoon = 4.929 mL.',
    examples: [
      { title: 'Baking Powder', scenario: '1/4 cup baking powder in teaspoons.', result: '12 teaspoons. (Note: standard recipes rarely use this much — doublecheck your scaling!)' },
      { title: 'Vanilla Extract', scenario: '2 tablespoons vanilla = how many teaspoons?', result: '2 x 3 = 6 teaspoons.' },
    ],
    useCases: ['Precise small ingredient measurement.', 'Recipe scaling for spice amounts.', 'Understanding US measurement system.', 'Baking chemistry precision.'],
    faqs: [
      { q: 'How many teaspoons in a tablespoon?', a: '3 teaspoons = 1 tablespoon.' },
      { q: 'How many teaspoons in a cup?', a: '48 teaspoons.' },
      { q: 'What is 1/2 teaspoon in mL?', a: 'About 2.5 mL.' },
      { q: 'How do I measure 1/8 teaspoon?', a: 'Use a pinch (about 1/8 tsp) or buy a set of small measuring spoons that includes 1/8 tsp.' },
      { q: 'What is a dash in cooking?', a: 'About 1/8 teaspoon. A pinch is slightly less — about 1/16 teaspoon.' },
    ],
    aiQA: [
      { q: 'How many teaspoons in 1 cup?', a: '48 teaspoons.' },
      { q: 'How many teaspoons in 1 tablespoon?', a: '3 teaspoons.' },
      { q: 'How many teaspoons in 1/4 cup?', a: '12 teaspoons.' },
      { q: 'How many teaspoons in 1/2 cup?', a: '24 teaspoons.' },
      { q: 'What is 1 teaspoon in mL?', a: 'Approximately 5 mL.' },
    ],
  },

  'butter-converter': {
    quickAnswer: '1 US stick of butter = 1/2 cup = 8 tablespoons = 113g = 4 oz. 1 cup butter = 2 sticks = 227g. European butter: same weight, no sticks — use grams directly.',
    whatIs: 'The Butter Converter converts between butter measurements including US sticks, cups, tablespoons, teaspoons, grams, ounces, and pounds. Essential when adapting American recipes (using sticks) to European/metric format, or vice versa.',
    howToUse: ['Enter the butter amount.', 'Select the input unit (sticks, cups, tablespoons, grams, oz).', 'Click Convert to see equivalents in all other units.'],
    formula: '1 US stick butter = 113.4g = 4 oz = 1/2 cup = 8 tablespoons = 24 teaspoons. 1 cup butter = 2 sticks = 227g = 8 oz. 100g butter ≈ 7 tablespoons = 0.44 cups.',
    examples: [
      { title: 'American to Metric', scenario: 'Recipe calls for 3 sticks of butter.', result: '3 sticks = 340g = 1.5 cups = 24 tablespoons.' },
      { title: 'European to American', scenario: '250g butter in American measurements.', result: '250g / 113.4g per stick = 2.2 sticks ≈ 2 sticks + 3 tablespoons.' },
    ],
    useCases: ['Converting between US and European butter amounts.', 'Adapting international baking recipes.', 'Precise butter measurement for pastry.', 'Grocery shopping with different package sizes.'],
    faqs: [
      { q: 'Why does the US use butter sticks?', a: 'US butter is sold in 1-pound boxes of 4 sticks (4 oz each). The wrapper has tablespoon markings for easy cutting. European butter is sold in 250g blocks without sticks.' },
      { q: 'What is the difference between salted and unsalted butter?', a: 'Unsalted (sweet) butter: most baking recipes assume unsalted. Salted: contains about 1/4 tsp salt per stick — adjust salt in recipe. European butter (82-84% fat) is richer than American (80%). Cultured butter has tangy flavor from fermentation.' },
      { q: 'Can I substitute oil for butter?', a: 'In most recipes: 3/4 cup oil = 1 cup butter (or 7/8 ratio). Oil produces moister results. For pastry (where butter creates flakiness through lamination), oil substitution changes texture significantly.' },
      { q: 'How do I soften butter quickly?', a: 'Cut into small cubes and let sit 15-20 minutes at room temperature. Or: place between plastic wrap and pound with rolling pin. Microwave: 5-10 seconds at 30% power, check frequently — melting ruins most recipes.' },
      { q: 'What is clarified butter?', a: 'Butter with milk solids and water removed, leaving pure butterfat. Higher smoke point (450°F vs. 350°F for whole butter). Ghee is clarified butter cooked until milk solids brown slightly (nutty flavor). 1 cup butter = ~3/4 cup clarified butter.' },
    ],
    aiQA: [
      { q: 'How much is 1 stick of butter?', a: '1 US stick = 1/2 cup = 8 tablespoons = 113g = 4 oz.' },
      { q: 'How many grams is 2 sticks of butter?', a: '2 x 113.4g = 226.8g ≈ 227g = 1 cup.' },
      { q: 'How many tablespoons is 1/2 cup butter?', a: '8 tablespoons (1 US stick).' },
      { q: 'How many grams is 1 cup of butter?', a: '227g (2 US sticks).' },
      { q: 'What is 100g butter in tablespoons?', a: '100g / 14.175g per tbsp ≈ 7 tablespoons.' },
    ],
  },

  'recipe-converter': {
    quickAnswer: 'Convert recipes between metric and imperial: 1 oz = 28.35g. 1 lb = 453.6g. 1 cup = 237mL. 1 fl oz = 29.6mL. This calculator converts any recipe unit instantly.',
    whatIs: 'The Recipe Converter handles all cooking measurement conversions — weight (grams, oz, lbs), volume (cups, mL, fl oz, liters), and temperature (°C/°F for ovens). Use it to adapt any recipe from metric to imperial or vice versa, or to convert between different cooking measurements.',
    howToUse: ['Enter a value and select the input unit.', 'Select the target unit.', 'Click Convert for instant result.'],
    formula: 'Weight: 1 oz = 28.35g. 1 lb = 453.59g. 1 kg = 35.27 oz = 2.205 lb. Volume: 1 cup (US) = 236.6mL. 1 fl oz = 29.57mL. 1 liter = 4.227 cups. Temperature: °F = °C x 9/5 + 32.',
    examples: [
      { title: 'UK to US Recipe', scenario: 'UK recipe: 200g flour, 150ml milk, 180°C oven.', result: '200g flour = 7.05 oz = 1.67 cups. 150ml milk = 5.07 fl oz = 0.63 cups. 180°C = 356°F (set oven to 350°F).' },
      { title: 'US to Metric', scenario: '2 cups flour, 1 stick butter, 350°F.', result: '2 cups = 473mL = 240g flour. 1 stick butter = 113g. 350°F = 177°C.' },
    ],
    useCases: ['Adapting international recipes from any country.', 'Converting between home and professional kitchen measurements.', 'Nutrition label reading across measurement systems.', 'International food blogging and recipe development.'],
    faqs: [
      { q: 'What is the difference between US and UK fluid ounces?', a: '1 US fl oz = 29.57mL. 1 UK (Imperial) fl oz = 28.41mL. 1 US cup = 8 US fl oz = 236.6mL. 1 UK cup (Imperial) = 10 UK fl oz = 284mL. Always check recipe origin!' },
      { q: 'What are some common oven temperature conversions?', a: '150°C = 302°F (very low). 180°C = 356°F (moderate, most cakes). 200°C = 392°F (hot). 220°C = 428°F (very hot, pizza). For fan-assisted ovens, reduce by 20°C (36°F).' },
      { q: 'What is a "pinch" in cooking?', a: 'About 1/16 teaspoon — the amount you can hold between thumb and index finger. A "dash" is about 1/8 teaspoon. A "smidgen" is 1/32 teaspoon. These are informal measures.' },
      { q: 'How precise do I need to be when cooking vs. baking?', a: 'Cooking: very forgiving. "A handful of pasta," "season to taste" — approximate is fine. Baking: leavening, ratios, and temperature matter. Be precise for baking, especially bread and pastry.' },
      { q: 'What is a jigger in cocktail measurements?', a: '1 jigger = 1.5 fl oz = 44mL (US standard). A double jigger = 3 fl oz. Some jiggers are 1 oz / 2 oz. European "shot" = 40mL. Bartenders also use "splash" (about 1/4 oz) and "dash" (about 1/8 tsp barspoon).' },
    ],
    aiQA: [
      { q: 'How many grams in an ounce?', a: '1 oz = 28.35g.' },
      { q: 'How many mL in a fluid ounce?', a: '1 US fl oz = 29.57mL.' },
      { q: 'How do I convert Fahrenheit to Celsius for baking?', a: '°C = (°F - 32) x 5/9. Example: 350°F = (350-32) x 5/9 = 176.7°C.' },
      { q: 'How many cups is 500mL?', a: '500 / 236.6 = 2.11 cups ≈ 2 cups + 2 tablespoons.' },
      { q: 'How many ounces in a pound?', a: '16 oz = 1 lb.' },
    ],
  },

  'yeast': {
    quickAnswer: 'Yeast conversion: 1 packet active dry yeast (7g) = 2.25 tsp = 1/4 oz. Substitute 1:1 for instant yeast (use 25% less instant). Fresh yeast: use 3x the dry yeast amount.',
    whatIs: 'The Yeast Calculator converts between active dry yeast, instant (rapid-rise) yeast, and fresh yeast. It also computes yeast amounts for different batch sizes, calculates fermentation time adjustments for temperature, and provides guidance for wild/sourdough starter substitution.',
    howToUse: ['Enter the yeast amount and type from your recipe.', 'Select the yeast type you have available.', 'Click Convert to see the equivalent amount.'],
    formula: 'Equivalencies: 1 tsp active dry = 3/4 tsp instant = 1/2 oz fresh yeast. 1 packet (7g) active dry = 5.25g instant = 21g fresh. Yeast activity doubles for every 10°C (18°F) temperature increase (within active range).',
    examples: [
      { title: 'Yeast Substitution', scenario: 'Recipe calls for 2 tsp active dry yeast. Have instant yeast.', result: '2 x 3/4 = 1.5 tsp instant yeast.' },
      { title: 'Fresh to Dry', scenario: '25g fresh yeast in a professional recipe.', result: '25g fresh / 3 = 8.3g ≈ 1 packet (7g) + 1/4 tsp active dry yeast.' },
    ],
    useCases: ['Substituting yeast types in bread recipes.', 'Scaling yeast for large bread batches.', 'Understanding proofing times at different temperatures.', 'Converting professional recipes using fresh yeast.'],
    faqs: [
      { q: 'What is the difference between active dry and instant yeast?', a: 'Active dry: larger granules, must be dissolved in warm water (proof) first. Instant: finer, can be mixed directly with dry ingredients. Instant works faster. Use 25% less instant than active dry.' },
      { q: 'How do I proof yeast?', a: 'Dissolve in 38-43°C (100-110°F) water with a pinch of sugar. Wait 5-10 minutes. If it foams and bubbles, it is active. No activity = dead yeast. This step is optional for instant yeast.' },
      { q: 'What kills yeast?', a: 'Water above 49°C (120°F) kills yeast. Salt in direct contact inhibits yeast (mix salt with flour first, not directly with yeast). Alcohol above 10-12% inhibits further fermentation.' },
      { q: 'How much yeast for slow rise vs. fast rise?', a: 'Fast rise (2 hours): 1-2% yeast (bakers\'s %). Slow rise (overnight refrigerator): 0.1-0.5%. Very slow (3+ days): 0.05-0.1%. Less yeast + cold temperature = more complex flavor development.' },
      { q: 'What is wild yeast / sourdough starter?', a: 'Naturally occurring yeast and bacteria culture fed with flour and water. Replace 1 tsp commercial yeast with 100g active starter + reduce flour by 50g and water by 50g in recipe. Extends fermentation time to 4-12+ hours.' },
    ],
    aiQA: [
      { q: 'How much instant yeast equals 1 packet of active dry yeast?', a: '1 packet active dry (7g/2.25 tsp) = 1.75 tsp instant yeast.' },
      { q: 'How much fresh yeast equals 7g dry yeast?', a: '7g dry yeast = 21g fresh yeast (3:1 ratio).' },
      { q: 'What temperature water should I use for yeast?', a: '38-43°C (100-110°F) — warm but not hot. Above 49°C (120°F) kills yeast.' },
      { q: 'How long does yeast rise?', a: 'Standard rise at room temperature: 1-2 hours. Refrigerator overnight: 8-12 hours. Depends on yeast amount, temperature, and dough composition.' },
      { q: 'Can I use expired yeast?', a: 'Test it by proofing in warm sugar water. If it foams, it is still active. Expired yeast may work but rise more slowly.' },
    ],
  },

  'baking-substitution': {
    quickAnswer: 'Common substitutions: 1 cup buttermilk = 1 cup milk + 1 tbsp lemon juice. 1 egg = 3 tbsp aquafaba or 1 flax egg. 1 cup cake flour = 3/4 cup + 2 tbsp all-purpose + 2 tbsp cornstarch.',
    whatIs: 'The Baking Substitution Guide provides tested ingredient substitutions for common baking ingredients. Use when you are missing an ingredient, cooking for dietary restrictions (vegan, gluten-free, dairy-free), or experimenting with healthier alternatives.',
    howToUse: ['Select the ingredient you need to substitute.', 'See all available substitutions with exact amounts.', 'Notes indicate when substitutions may affect texture or flavor.'],
    formula: 'No single formula — substitutions are tested recipes. Key principles: match moisture (buttermilk adds moisture + acid). Match structure (eggs provide binding + lift). Match fat (oil vs. butter changes texture). Match leavening chemistry.',
    examples: [
      { title: 'Out of Eggs', scenario: 'Recipe calls for 2 eggs. Vegan or allergic.', result: 'Option 1: 6 tbsp aquafaba (chickpea liquid). Option 2: 2 flax eggs (2 tbsp ground flax + 6 tbsp water, rest 5 min). Option 3: 1/2 cup applesauce per egg (adds moisture and sweetness).' },
      { title: 'No Buttermilk', scenario: 'Recipe calls for 1 cup buttermilk.', result: '1 cup milk + 1 tbsp white vinegar or lemon juice. Rest 5 minutes — it curdles and acidifies to match buttermilk chemistry.' },
    ],
    useCases: ['Baking with pantry staples when missing ingredients.', 'Vegan and dairy-free baking adaptations.', 'Egg-free baking for allergies.', 'Reducing sugar or fat in recipes.'],
    faqs: [
      { q: 'Can I substitute all-purpose flour for cake flour?', a: 'Yes: 1 cup cake flour = 3/4 cup + 2 tbsp all-purpose flour + 2 tbsp cornstarch. This reduces protein content, mimicking cake flour\'s lighter texture. For self-rising flour: 1 cup = 1 cup all-purpose + 1.5 tsp baking powder + 1/4 tsp salt.' },
      { q: 'Can I replace butter with oil?', a: 'Yes for most cakes and muffins: 3/4 cup oil = 1 cup butter. Oil produces moister results but lacks butter\'s flavor. For cookies and pastry where butter creates structure, substitution is more difficult and changes texture.' },
      { q: 'What is an egg replacer in baking?', a: 'Eggs provide binding (protein coagulation), leavening (trapped air), moisture, and structure. Different substitutes mimic different functions: flax egg = binding. Aquafaba = binding + some lift. Banana = binding + moisture + flavor. Baking powder + vinegar = lift.' },
      { q: 'Can I use honey instead of sugar?', a: 'Yes: replace 1 cup sugar with 3/4 cup honey. Reduce other liquids by 1/4 cup. Add 1/4 tsp baking soda (honey is acidic). Lower oven temperature by 25°F (honey browns faster). Honey adds distinct flavor.' },
      { q: 'What is a flax egg?', a: '1 tablespoon ground flaxseed + 3 tablespoons water. Let rest 5 minutes until gel forms. Works best in dense baked goods (muffins, brownies). Does not work well in recipes where eggs provide significant lift (souffles, angel food cake).' },
    ],
    aiQA: [
      { q: 'What can I use instead of buttermilk?', a: '1 cup milk + 1 tbsp lemon juice or white vinegar. Let sit 5 minutes.' },
      { q: 'What is an egg substitute for baking?', a: '3 tbsp aquafaba, 1 flax egg (1 tbsp flax + 3 tbsp water), or 1/4 cup applesauce per egg.' },
      { q: 'Can I use baking soda instead of baking powder?', a: '1/4 tsp baking soda = 1 tsp baking powder (but you need an acid like buttermilk or vinegar).' },
      { q: 'What is a substitute for cake flour?', a: '3/4 cup + 2 tbsp all-purpose flour + 2 tbsp cornstarch per cup.' },
      { q: 'What can replace butter in baking?', a: 'Oil (3/4 cup per cup of butter), applesauce (half), Greek yogurt (half), or coconut oil (1:1). Each affects texture and flavor differently.' },
    ],
  },

  'calories-per-serving': {
    quickAnswer: 'Calories per serving = Total recipe calories / Number of servings. Total recipe calories = sum of all ingredient calories. Use this to calculate exact nutrition for homemade dishes.',
    whatIs: 'The Calories Per Serving Calculator computes the calorie content of homemade recipes by summing all ingredient calories and dividing by the number of servings. Essential for meal prep, calorie tracking, and nutritional label creation for home-cooked food.',
    howToUse: ['Enter each ingredient with its amount and calorie count (found on nutrition labels or USDA database).', 'Enter the number of servings.', 'Click Calculate to see calories per serving and macronutrient breakdown.'],
    formula: 'Calories per serving = Σ(ingredient_calories) / servings. Calories from fat = fat grams x 9. Calories from protein = protein grams x 4. Calories from carbs = carb grams x 4. Alcohol: 7 cal/gram.',
    examples: [
      { title: 'Chicken Stir-Fry', scenario: 'Ingredients: 400g chicken breast (440 cal), 200g vegetables (80 cal), 2 tbsp oil (240 cal), sauce (80 cal). Serves 4.', result: 'Total = 840 cal. Per serving = 840/4 = 210 calories.' },
      { title: 'Pasta Dish', scenario: '200g dry pasta (700 cal), 100g ground beef (250 cal), 200g tomato sauce (60 cal). Serves 3.', result: 'Total = 1,010 cal. Per serving = 337 calories.' },
    ],
    useCases: ['Calorie tracking for weight management.', 'Meal prep nutrition planning.', 'Creating nutrition labels for home food businesses.', 'Understanding the caloric impact of cooking methods.'],
    faqs: [
      { q: 'Do calories change when food is cooked?', a: 'Raw vs. cooked calories: the total calories in the food do not change much, but weight and volume change (water evaporates, food absorbs oil). Track by cooked weight using nutrition data for cooked food.' },
      { q: 'How do I find the calories in each ingredient?', a: 'Check nutrition labels on packaging. Use the USDA FoodData Central database (fdc.nal.usda.gov) for raw ingredients. MyFitnessPal and Cronometer also have extensive databases.' },
      { q: 'Does cooking method affect calories?', a: 'Frying adds calories from oil absorbed. Boiling and steaming add no calories. Grilling loses some fat. Baking is generally calorie-neutral but added fats increase total. Raw foods weigh more (water content).' },
      { q: 'What are macronutrients?', a: 'Protein (4 cal/g), Carbohydrates (4 cal/g), Fat (9 cal/g), and Alcohol (7 cal/g). A balanced diet typically aims for 45-65% carbs, 20-35% fat, 10-35% protein. Your specific needs vary by goals and health status.' },
      { q: 'How many calories should I eat per day?', a: 'Average adult women: 1,600-2,400 calories/day. Average adult men: 2,000-3,000 calories/day. Highly individual — depends on age, weight, height, activity level, and goals. Consult a registered dietitian for personalized guidance.' },
    ],
    aiQA: [
      { q: 'How do I calculate calories per serving?', a: 'Add up total calories for all ingredients, then divide by number of servings.' },
      { q: 'How many calories per gram of fat?', a: '9 calories per gram of fat.' },
      { q: 'How many calories per gram of protein?', a: '4 calories per gram of protein.' },
      { q: 'How many calories per gram of carbohydrates?', a: '4 calories per gram of carbohydrate.' },
      { q: 'How do I track calories for homemade meals?', a: 'Log each ingredient\'s calories in a food tracker app, sum them, and divide by servings.' },
    ],
  },

  'recipe-cost': {
    quickAnswer: 'Recipe cost = sum of (ingredient quantity used x ingredient cost per unit). A $3 pasta dish with $2 sauce and $1 seasoning = $6 recipe cost. For 4 servings: $1.50 per serving.',
    whatIs: 'The Recipe Cost Calculator computes the total cost of making a recipe and the cost per serving by pricing each ingredient based on purchased package cost and quantity used. Essential for food businesses, meal prep budgeting, and understanding true food costs.',
    howToUse: ['Enter each ingredient: what you bought, its price, total package size, and how much the recipe uses.', 'Click Calculate to see ingredient costs, total recipe cost, and cost per serving.'],
    formula: 'Ingredient cost = (Amount used / Package size) x Package price. Recipe cost = Σ(ingredient costs). Cost per serving = Recipe cost / Servings. Food cost percentage = Ingredient cost / Menu price x 100%.',
    examples: [
      { title: 'Pasta Dinner', scenario: '500g pasta ($2.50/1kg bag), 400g ground beef ($5/lb), 400g pasta sauce ($3 jar). Makes 4 servings.', result: 'Pasta: $1.25. Beef: $4.41. Sauce: $3.00. Total: $8.66. Per serving: $2.17.' },
      { title: 'Smoothie', scenario: '1 banana ($0.25), 200g frozen berries (from $4/600g bag), 200ml almond milk ($0.40 per 200ml). Single serving.', result: 'Banana: $0.25. Berries: $1.33. Milk: $0.40. Total: $1.98 per smoothie.' },
    ],
    useCases: ['Restaurant and food service food cost management.', 'Meal prep budgeting for the week.', 'Pricing homemade food products for sale.', 'Comparing homemade vs. restaurant meal costs.'],
    faqs: [
      { q: 'What is a good food cost percentage for restaurants?', a: 'Industry standard: 28-35% food cost (ingredient cost / selling price). Full-service restaurant: 30-35%. Fast casual: 25-30%. Fine dining may be 35%+ with higher margins elsewhere.' },
      { q: 'What costs am I missing?', a: 'Recipe cost calculators only capture ingredient costs. Total food cost also includes: energy for cooking, equipment depreciation, packaging, labor, overhead. For home cooking, ingredient cost is the primary variable.' },
      { q: 'How much does it cost to cook vs. eating out?', a: 'Home cooking typically costs $2-5 per serving for a full meal. Restaurant meals: $12-25+ per person. Even accounting for time, cooking at home can save $5,000-10,000+ per year for a family.' },
      { q: 'How do I calculate waste factor?', a: 'Waste factor accounts for trimming, spoilage. If you buy 1kg chicken and 200g is bone/skin, yield = 80%. Actual cost per usable kg = purchase price / yield %. A $5/kg chicken with 80% yield costs $6.25/kg usable.' },
      { q: 'What is batch cooking savings?', a: 'Buying in bulk reduces unit cost. Batch cooking amortizes preparation time. Many ingredients (spices, oils) have negligible per-recipe cost. The first batch of a recipe has higher cost; subsequent batches using remaining ingredients cost much less.' },
    ],
    aiQA: [
      { q: 'How do I calculate recipe cost?', a: 'Multiply each ingredient\'s unit cost by the amount used, then sum all ingredient costs.' },
      { q: 'What is cost per serving?', a: 'Total recipe ingredient cost divided by number of servings.' },
      { q: 'What is food cost percentage?', a: 'Ingredient cost / selling price x 100%. Restaurants target 28-35%.' },
      { q: 'How much does a home-cooked meal cost?', a: 'Typically $2-5 per serving for a balanced meal. Much less than eating out.' },
      { q: 'How do I reduce recipe cost?', a: 'Buy in bulk, use seasonal ingredients, reduce meat portions, substitute expensive proteins with legumes, and minimize food waste.' },
    ],
  },

  'meal-calorie-estimator': {
    quickAnswer: 'Estimate meal calories without exact recipes. A typical restaurant meal: 600-1,200 calories. Home-cooked dinner: 400-700 cal. Use portion visual guides to estimate without weighing food.',
    whatIs: 'The Meal Calorie Estimator provides calorie estimates for common meals and food combinations without requiring exact measurements. It uses typical portion sizes and cooking methods to give reasonable estimates for calorie tracking when precise measurement is not possible.',
    howToUse: ['Select the meal type (breakfast, lunch, dinner, snack).', 'Add food items from common categories.', 'Adjust portion sizes using visual estimates.', 'Click Estimate to see approximate calorie total.'],
    formula: 'Estimates based on USDA food database averages. Protein: 25-35 cal/oz. Starchy foods: 100-150 cal per 1/2 cup. Fats: 100-120 cal per tablespoon. Vegetables: 20-50 cal per cup. Added oil: 120 cal per tablespoon.',
    examples: [
      { title: 'Restaurant Burger Meal', scenario: 'Burger with fries and soda at casual restaurant.', result: 'Burger patty: 350 cal. Bun: 200 cal. Fries (medium): 350 cal. Soda (16oz): 200 cal. Estimated total: 1,100 calories.' },
      { title: 'Home Cooked Dinner', scenario: 'Grilled chicken breast, rice, and steamed broccoli.', result: '6oz chicken: 280 cal. 1 cup rice: 200 cal. 1 cup broccoli: 55 cal. 1 tsp olive oil: 40 cal. Total: ~575 calories.' },
    ],
    useCases: ['Calorie tracking when eating out.', 'Quick meal planning without precise measurements.', 'Learning appropriate portion sizes.', 'Weight management and nutrition awareness.'],
    faqs: [
      { q: 'How accurate are calorie estimates for restaurant food?', a: 'Restaurant calorie counts vary widely from stated values (studies show ±20% for chain restaurants, much higher for independent restaurants). Use calorie estimates as approximations, not precise values.' },
      { q: 'What is a palm-sized portion?', a: 'Your palm (without fingers) ≈ 3 oz (85g) of protein. A fist ≈ 1 cup (240ml) for liquids or 1/2 cup for grains/legumes. Your thumb ≈ 1 tablespoon of fat. A cupped hand ≈ 1 oz of nuts.' },
      { q: 'How do I estimate oil calories?', a: 'Each tablespoon of any cooking oil = ~120 calories. A restaurant-cooked meal uses 2-4 tablespoons (240-480 added calories). Restaurant salads often have 200-400 calories of dressing alone.' },
      { q: 'What is the difference between calorie estimation apps?', a: 'Apps like MyFitnessPal, Cronometer, and Lose It use barcode scanning and databases for packaged foods. For restaurants, they rely on restaurant-submitted data. For home cooking, manual entry using this calculator is most accurate.' },
      { q: 'How do I lose weight using calorie tracking?', a: 'Calorie deficit of 500 cal/day = ~1 lb/week weight loss. But this is an oversimplification. Metabolism adapts. Protein intake, sleep, stress, and food quality all affect body composition beyond calorie counting.' },
    ],
    aiQA: [
      { q: 'How many calories in a typical dinner?', a: '500-800 calories for a home-cooked balanced dinner.' },
      { q: 'How many calories in a restaurant meal?', a: '700-1,500+ calories. Restaurant portions are often 2-3x home portions.' },
      { q: 'How many calories should I eat per meal?', a: 'For 2,000 cal/day: ~500-700 per meal + snacks. Varies by individual goals.' },
      { q: 'How many calories in a tablespoon of oil?', a: 'About 120 calories per tablespoon of any cooking oil.' },
      { q: 'How do I estimate calories when eating out?', a: 'Use the restaurant\'s calorie menu, an app, or estimate by components (protein + starch + vegetables + added fats).' },
    ],
  },
};
