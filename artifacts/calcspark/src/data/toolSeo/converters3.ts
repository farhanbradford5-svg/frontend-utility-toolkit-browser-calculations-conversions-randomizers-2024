import { ToolSEOMap } from './index';

export const CONVERTERS3_SEO: ToolSEOMap = {
  'kg-to-lbs': {
    quickAnswer: '1 kg = 2.20462 lbs. Multiply kilograms by 2.20462 to convert to pounds.',
    whatIs: 'The kg to lbs converter instantly converts kilograms to pounds, the two most widely used units of mass in the world. It is essential for fitness tracking, travel weight limits, shipping, cooking, and understanding weight measurements across metric and imperial countries.',
    howToUse: [
      'Enter the weight in kilograms (kg).',
      'Read the converted weight in pounds (lbs) instantly.',
      'Optionally view the weight in stones, ounces, or grams as well.'
    ],
    formula: 'Pounds = Kilograms x 2.20462 | Ounces = Kilograms x 35.274 | Stones = Kilograms x 0.157473',
    examples: [
      { title: 'Body weight', scenario: 'Convert 70 kg to lbs', result: '70 kg = 154.32 lbs' },
      { title: 'Luggage limit', scenario: 'Convert 23 kg to lbs', result: '23 kg = 50.71 lbs' },
      { title: 'Dumbbell weight', scenario: 'Convert 10 kg to lbs', result: '10 kg = 22.05 lbs' }
    ],
    useCases: [
      'Tracking body weight in pounds from a metric scale',
      'Checking airline luggage weight limits',
      'Gym and fitness equipment weight conversion',
      'Food and recipe ingredient weight conversion',
      'Shipping and freight weight calculation in imperial units'
    ],
    faqs: [
      { q: 'How many pounds is 1 kg?', a: '1 kilogram = 2.20462 pounds exactly.' },
      { q: 'How do I convert kg to lbs quickly?', a: 'Multiply kg by 2.2 for a quick estimate. For example, 50 kg x 2.2 = 110 lbs (actual: 110.23 lbs).' },
      { q: 'What is 100 kg in lbs?', a: '100 kg = 220.46 lbs.' },
      { q: 'How many ounces in a kilogram?', a: '1 kg = 35.274 ounces.' },
      { q: 'What is 60 kg in stones and pounds?', a: '60 kg = 9 stones and 6.4 pounds.' }
    ],
    aiQA: [
      { q: 'Why do some countries use kg and others use lbs for body weight?', a: 'The metric system (kg) is used in most countries worldwide due to its scientific basis and ease of use. The US and a few other countries retained pounds from the old British imperial system. The UK uses a mix, often expressing body weight in stones and pounds.' },
      { q: 'What is the heaviest weight a standard scale measures in kg vs lbs?', a: 'Most household bathroom scales measure up to 150 kg (330 lbs) or 180 kg (396 lbs). Industrial scales can handle thousands of kilograms or tons.' },
      { q: 'Is kg or lbs more accurate for medical measurements?', a: 'Both are equally accurate. However, kilograms are preferred in medicine and pharmacology worldwide because drug dosages are calculated per kilogram of body weight, making metric easier for precise dosing.' }
    ]
  },

  'lbs-to-kg': {
    quickAnswer: '1 lb = 0.453592 kg. Multiply pounds by 0.453592 to convert to kilograms.',
    whatIs: 'The lbs to kg converter transforms pounds into kilograms instantly. It is one of the most frequently needed conversions for people traveling to metric countries, working with international health or fitness data, or following recipes and shipping requirements that use kilograms.',
    howToUse: [
      'Enter the weight in pounds (lbs).',
      'Read the converted weight in kilograms (kg) instantly.',
      'Optionally view in grams, stones, or ounces as well.'
    ],
    formula: 'Kilograms = Pounds x 0.453592 | Grams = Pounds x 453.592 | Stones = Pounds / 14',
    examples: [
      { title: 'Body weight', scenario: 'Convert 150 lbs to kg', result: '150 lbs = 68.04 kg' },
      { title: 'Newborn weight', scenario: 'Convert 7.5 lbs to kg', result: '7.5 lbs = 3.40 kg' },
      { title: 'Luggage weight', scenario: 'Convert 50 lbs to kg', result: '50 lbs = 22.68 kg' }
    ],
    useCases: [
      'Converting US weight to metric for international travel',
      'Understanding BMI and health metrics in kg',
      'Calculating drug dosages that require weight in kg',
      'Converting gym lifting weights from lbs to kg plates',
      'International food and produce weight conversion'
    ],
    faqs: [
      { q: 'How many kg is 1 lb?', a: '1 pound = 0.453592 kilograms.' },
      { q: 'What is a quick way to estimate lbs to kg?', a: 'Divide pounds by 2.2 for a quick estimate. For example, 220 lbs / 2.2 = 100 kg (actual: 99.79 kg).' },
      { q: 'What is 200 lbs in kg?', a: '200 lbs = 90.72 kg.' },
      { q: 'What is 1 stone in kg?', a: '1 stone = 14 pounds = 6.35 kg.' },
      { q: 'What is 130 lbs in kg?', a: '130 lbs = 58.97 kg.' }
    ],
    aiQA: [
      { q: 'Why is it important to know your weight in kg for medical purposes?', a: 'Almost all medical dosing worldwide is calculated in mg per kg of body weight. Knowing your weight in kilograms ensures you receive correct medication doses, especially for anesthesia, chemotherapy, and weight-sensitive medications.' },
      { q: 'How do Olympic weightlifting categories use kg instead of lbs?', a: 'The Olympics and international sports use kg because the metric system is universal. Weight classes (e.g., 73 kg, 96 kg) are cleaner numbers in metric. National competitions in the US may use lbs locally.' },
      { q: 'Is there a difference between mass and weight in lbs vs kg?', a: 'Scientifically yes. Kilograms measure mass (amount of matter), while pounds can measure both mass and force. In everyday use, lbs and kg are both treated as weight. Pound-force (lbf) and pound-mass (lbm) are the more precise scientific distinctions.' }
    ]
  }
};
