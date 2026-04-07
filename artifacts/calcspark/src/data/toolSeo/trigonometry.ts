import type { ToolSEOMap } from './index';

export const TRIGONOMETRY_SEO: ToolSEOMap = {
  'trig': {
    quickAnswer: 'The trigonometry calculator computes all six trig functions (sin, cos, tan, csc, sec, cot) for any angle in degrees or radians. Just enter an angle and get instant results.',
    whatIs: 'The Trigonometry Calculator evaluates all six trigonometric functions — sine, cosine, tangent, cosecant, secant, and cotangent — for any input angle in degrees or radians. It is used in physics, engineering, architecture, navigation, signal processing, and any field involving angles, waves, or oscillations. The calculator displays results to full decimal precision.',
    howToUse: [
      'Enter the angle value.',
      'Select units: degrees or radians.',
      'Click Calculate to see all six trig function values simultaneously.',
      'Use the unit converter if you need to switch between degrees and radians.',
    ],
    formula: 'sin(θ), cos(θ), tan(θ) are the primary functions. Reciprocals: csc(θ) = 1/sin(θ), sec(θ) = 1/cos(θ), cot(θ) = 1/tan(θ). Pythagorean identity: sin^2(θ) + cos^2(θ) = 1. Radians to degrees: degrees = radians x 180/π.',
    examples: [
      { title: 'Common Angle', scenario: 'Find all trig values for θ = 45° (π/4 radians).', result: 'sin(45°) = cos(45°) = √2/2 ≈ 0.7071. tan(45°) = 1. csc(45°) = sec(45°) = √2 ≈ 1.4142. cot(45°) = 1.' },
      { title: 'Physics Application', scenario: 'A projectile launched at 30° — find sin and cos for velocity components.', result: 'sin(30°) = 0.5, cos(30°) = √3/2 ≈ 0.8660. Vertical component = V x 0.5, Horizontal = V x 0.866.' },
    ],
    useCases: [
      'Physics: projectile motion, wave analysis, oscillations.',
      'Engineering: structural force analysis, electrical AC circuits.',
      'Architecture: roof pitches, ramp angles, structural angles.',
      'Navigation: bearing and heading calculations.',
    ],
    faqs: [
      { q: 'What is SOHCAHTOA?', a: 'A mnemonic for right-triangle trig ratios: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. Only applies in right triangles.' },
      { q: 'When do I use degrees vs radians?', a: 'Degrees for everyday navigation, construction, and engineering problems. Radians for calculus, physics formulas, and programming math libraries. Convert: degrees x π/180 = radians.' },
      { q: 'What is the unit circle?', a: 'A circle with radius 1 centered at the origin. A point (cos θ, sin θ) on the circle corresponds to angle θ. The unit circle defines trig functions for all angles, including angles outside 0-90°.' },
      { q: 'What are the Pythagorean identities?', a: 'sin^2(θ) + cos^2(θ) = 1. 1 + tan^2(θ) = sec^2(θ). 1 + cot^2(θ) = csc^2(θ). These follow from the unit circle definition and are fundamental to trig simplification.' },
      { q: 'Why is tan(90°) undefined?', a: 'tan(θ) = sin(θ)/cos(θ). At 90°, cos(90°) = 0, making the division undefined. On a graph, tan approaches ±∞ as θ approaches 90° (π/2) from either side.' },
    ],
    aiQA: [
      { q: 'What is sin 30 degrees?', a: '0.5 (exactly 1/2).' },
      { q: 'What is cos 60 degrees?', a: '0.5 (exactly 1/2).' },
      { q: 'What is tan 45 degrees?', a: '1.' },
      { q: 'What is sin 90 degrees?', a: '1.' },
      { q: 'What is cos 0 degrees?', a: '1.' },
    ],
  },

  'sine': {
    quickAnswer: 'Sine of an angle (sin θ) in a right triangle = Opposite side / Hypotenuse. sin(30°) = 0.5, sin(90°) = 1, sin(45°) = √2/2 ≈ 0.707.',
    whatIs: 'The Sine Calculator computes the sine of any angle in degrees or radians. Sine is one of the fundamental trigonometric functions, representing the ratio of the opposite side to the hypotenuse in a right triangle, and the y-coordinate of the corresponding point on the unit circle. It is a periodic function with period 2π and amplitude 1.',
    howToUse: ['Enter the angle in degrees or radians.', 'Click Calculate to see the sine value.'],
    formula: 'In a right triangle: sin(θ) = Opposite / Hypotenuse. On the unit circle: sin(θ) = y-coordinate. Taylor series: sin(x) = x - x^3/3! + x^5/5! - ... (x in radians). Range: -1 to 1.',
    examples: [
      { title: 'Height Calculation', scenario: 'A ramp rises at 15°. How high is it over 10m horizontal run?', result: 'Height = 10 x tan(15°)... or if along the ramp: height = length x sin(15°) = 10 x 0.2588 = 2.588m.' },
      { title: 'Wave Function', scenario: 'Describe a sound wave with amplitude 3 and frequency 440 Hz at t = 0.001s.', result: 'y = 3 x sin(2π x 440 x 0.001) = 3 x sin(2.764 rad) ≈ 3 x 0.3891 = 1.167.' },
    ],
    useCases: [
      'Calculating vertical components in physics and engineering.',
      'Wave and oscillation analysis (sound, light, AC current).',
      'Angle problems in construction and architecture.',
      'Coordinate geometry and circular motion.',
    ],
    faqs: [
      { q: 'What is the range of sine?', a: 'Sine values are always between -1 and 1 inclusive. sin(90°) = 1 (maximum), sin(-90°) = -1 (minimum), sin(0°) = sin(180°) = 0.' },
      { q: 'What is the period of sine?', a: '360° (or 2π radians). After a full rotation, the pattern repeats. sin(θ) = sin(θ + 360°).' },
      { q: 'What is the inverse of sine?', a: 'Arcsin (or sin^-1) is the inverse. arcsin(x) gives the angle whose sine is x. Domain: [-1, 1]. Range: [-90°, 90°]. Example: arcsin(0.5) = 30°.' },
      { q: 'How is sine used in AC electricity?', a: 'AC voltage and current follow sinusoidal waveforms. V(t) = V_peak x sin(2πft + φ). Household electricity (60 Hz in US, 50 Hz in Europe) oscillates sinusoidally.' },
      { q: 'What is the law of sines?', a: 'In any triangle: a/sin(A) = b/sin(B) = c/sin(C). Used to solve non-right triangles when you know two angles and one side (AAS or ASA), or two sides and an angle opposite one of them (SSA).' },
    ],
    aiQA: [
      { q: 'What is sine?', a: 'sin(θ) = opposite/hypotenuse in a right triangle, or the y-coordinate on the unit circle.' },
      { q: 'What is sin(0)?', a: '0.' },
      { q: 'What is sin(90°)?', a: '1.' },
      { q: 'What is sin(60°)?', a: '√3/2 ≈ 0.8660.' },
      { q: 'What is sin(180°)?', a: '0.' },
    ],
  },

  'cosine': {
    quickAnswer: 'Cosine of an angle (cos θ) = Adjacent side / Hypotenuse in a right triangle. cos(0°) = 1, cos(60°) = 0.5, cos(90°) = 0.',
    whatIs: 'The Cosine Calculator computes the cosine of any angle in degrees or radians. Cosine represents the ratio of the adjacent side to the hypotenuse in a right triangle, and the x-coordinate on the unit circle. It is used for horizontal components in physics, phase relationships in electronics, and coordinate system transformations.',
    howToUse: ['Enter the angle in degrees or radians.', 'Click Calculate to see the cosine value.'],
    formula: 'cos(θ) = Adjacent / Hypotenuse. On unit circle: cos(θ) = x-coordinate. Relationship: cos^2(θ) + sin^2(θ) = 1 (Pythagorean identity). cos(θ) = sin(90° - θ) (co-function identity).',
    examples: [
      { title: 'Horizontal Force Component', scenario: 'A 50N force applied at 30° to the horizontal. Find horizontal component.', result: 'F_horizontal = 50 x cos(30°) = 50 x 0.8660 = 43.3 N.' },
      { title: 'Inner Product', scenario: 'Find the angle between two vectors A=[3,4] and B=[1,0].', result: 'cos(θ) = (A·B) / (|A||B|) = 3 / (5 x 1) = 0.6. θ = arccos(0.6) = 53.13°.' },
    ],
    useCases: [
      'Horizontal force and velocity components.',
      'Vector dot product and angle between vectors.',
      'AC circuit phase calculations.',
      'GPS and coordinate system transformations.',
    ],
    faqs: [
      { q: 'What is the relationship between sine and cosine?', a: 'cos(θ) = sin(90° - θ). Cosine is the sine of the complementary angle. They are the same function shifted by 90°. cos(θ) = sin(θ + 90°) as a horizontal shift.' },
      { q: 'What is the law of cosines?', a: 'c^2 = a^2 + b^2 - 2ab x cos(C). Generalizes the Pythagorean theorem for non-right triangles. Used for SSS and SAS triangle solving.' },
      { q: 'What is arccos?', a: 'The inverse cosine function. arccos(x) gives the angle whose cosine is x. Domain: [-1, 1]. Range: [0°, 180°]. Example: arccos(0.5) = 60°.' },
      { q: 'What is the dot product in terms of cosine?', a: 'A·B = |A| x |B| x cos(θ), where θ is the angle between vectors. This is why the dot product of perpendicular vectors is 0 (cos 90° = 0) and parallel vectors gives the product of their magnitudes (cos 0° = 1).' },
      { q: 'Why does cosine start at 1 and sine start at 0?', a: 'At θ = 0, we are at the rightmost point on the unit circle: coordinates (1, 0). Since cos = x-coordinate, cos(0) = 1. Since sin = y-coordinate, sin(0) = 0.' },
    ],
    aiQA: [
      { q: 'What is cosine?', a: 'cos(θ) = adjacent/hypotenuse in a right triangle, or the x-coordinate on the unit circle.' },
      { q: 'What is cos(0°)?', a: '1.' },
      { q: 'What is cos(90°)?', a: '0.' },
      { q: 'What is cos(60°)?', a: '0.5 (exactly 1/2).' },
      { q: 'What is cos(180°)?', a: '-1.' },
    ],
  },

  'tangent': {
    quickAnswer: 'Tangent of an angle (tan θ) = Opposite / Adjacent = sin(θ) / cos(θ). tan(45°) = 1, tan(30°) = 1/√3 ≈ 0.577, tan(60°) = √3 ≈ 1.732.',
    whatIs: 'The Tangent Calculator computes the tangent of any angle. Tangent equals the ratio of opposite to adjacent sides in a right triangle, or the slope of the line making the angle with the x-axis. It is used for slope calculations, angle of elevation/depression problems, and finding missing sides or angles in triangles.',
    howToUse: ['Enter the angle in degrees or radians.', 'Click Calculate to see the tangent value and the angle on the unit circle.'],
    formula: 'tan(θ) = sin(θ) / cos(θ) = Opposite / Adjacent. Undefined at 90° and 270° (where cos = 0). tan(-θ) = -tan(θ) (odd function). Period: 180° (π radians).',
    examples: [
      { title: 'Angle of Elevation', scenario: 'You stand 50 feet from a building and the top is at 30° angle of elevation. How tall is the building?', result: 'Height = 50 x tan(30°) = 50 x 0.5774 = 28.87 feet.' },
      { title: 'Road Grade', scenario: 'A road rises 8 feet over a 200-foot horizontal run. What is the grade angle?', result: 'tan(θ) = 8/200 = 0.04. θ = arctan(0.04) ≈ 2.29°. Grade = 4%.' },
    ],
    useCases: [
      'Angle of elevation/depression problems in surveying.',
      'Road grade and ramp slope calculations.',
      'Finding unknown sides in right triangles.',
      'Computer graphics: viewing transformations.',
    ],
    faqs: [
      { q: 'Why is tan(90°) undefined?', a: 'tan(θ) = sin(θ)/cos(θ). At 90°, cos(90°) = 0, creating division by zero. Geometrically, the line at 90° is vertical — with infinite slope.' },
      { q: 'What is the period of tangent?', a: '180° (π radians), half the period of sine and cosine. tan(θ) = tan(θ + 180°).' },
      { q: 'How is tangent used for slopes?', a: 'The slope of a line = tan(angle with x-axis). A 45° angle has slope = tan(45°) = 1. A 30° angle has slope ≈ 0.577. This connects calculus derivatives (slopes) to trigonometry.' },
      { q: 'What is arctan?', a: 'The inverse tangent (atan). arctan(x) gives the angle whose tangent is x. Range: (-90°, 90°). arctan2(y, x) handles all four quadrants. arctan(1) = 45°, arctan(0) = 0°.' },
      { q: 'What is the tangent line in calculus?', a: 'A tangent line touches a curve at exactly one point and has the same slope as the curve there. The derivative gives the slope (tangent) of the tangent line — a different use of "tangent" than the trig function, though related through the unit circle.' },
    ],
    aiQA: [
      { q: 'What is tangent in math?', a: 'tan(θ) = opposite/adjacent = sin/cos. Represents the slope of a line at angle θ.' },
      { q: 'What is tan(45°)?', a: '1.' },
      { q: 'What is tan(60°)?', a: '√3 ≈ 1.7321.' },
      { q: 'What is tan(0°)?', a: '0.' },
      { q: 'What is tan(30°)?', a: '1/√3 = √3/3 ≈ 0.5774.' },
    ],
  },

  'arcsin': {
    quickAnswer: 'Arcsin (sin⁻¹) is the inverse of sine. It gives the angle whose sine is a given value. arcsin(0.5) = 30°, arcsin(1) = 90°, arcsin(-1) = -90°. Range: -90° to 90°.',
    whatIs: 'The Arcsin Calculator computes the inverse sine of a value between -1 and 1, returning the angle (in degrees or radians) whose sine equals that value. Arcsin is used whenever you know a sine ratio and need to find the angle — for example, finding an unknown angle in a right triangle from the opposite and hypotenuse measurements.',
    howToUse: ['Enter a value between -1 and 1.', 'Select output in degrees or radians.', 'Click Calculate to see arcsin.'],
    formula: 'arcsin(x) = sin^-1(x). If sin(θ) = x, then arcsin(x) = θ. Domain: [-1, 1]. Principal range: [-90°, 90°] or [-π/2, π/2]. Note: arcsin only returns one angle; the full general solution is θ = arcsin(x) + 360°n or θ = 180° - arcsin(x) + 360°n.',
    examples: [
      { title: 'Right Triangle', scenario: 'Hypotenuse = 10 cm, opposite side = 6 cm. Find the angle.', result: 'sin(θ) = 6/10 = 0.6. θ = arcsin(0.6) ≈ 36.87°.' },
      { title: 'Physics', scenario: 'A wave has maximum displacement 5 m. At what angle is displacement 3 m?', result: 'sin(θ) = 3/5 = 0.6. θ = arcsin(0.6) ≈ 36.87° (or 143.13°).' },
    ],
    useCases: [
      'Finding unknown angles in right triangles.',
      'Angle of incidence in optics and light refraction.',
      'Signal processing and wave angle determination.',
      'Geographic latitude from astronomical observations.',
    ],
    faqs: [
      { q: 'What is the domain of arcsin?', a: 'Arcsin is only defined for inputs between -1 and 1 (the range of sine). Inputs outside this range produce no real result — arcsin(2) is undefined in real numbers.' },
      { q: 'Why does arcsin only return one angle?', a: 'Sine is not one-to-one — multiple angles share the same sine value (e.g., sin(30°) = sin(150°) = 0.5). Arcsin is defined as the principal value in [-90°, 90°] only. For complete solutions, consider all angles with the given sine.' },
      { q: 'What is the difference between sin^-1 and 1/sin?', a: 'sin^-1(x) is arcsin — the inverse function. 1/sin(x) is cosecant (csc). These are completely different. The -1 notation for inverse functions can cause confusion; writing arcsin is clearer.' },
      { q: 'How is arcsin used in Snell\'s law?', a: 'Snell\'s law: n1 x sin(θ1) = n2 x sin(θ2). To find the refraction angle: θ2 = arcsin(n1 x sin(θ1) / n2). This calculates light bending at a boundary between media.' },
      { q: 'What is arcsin in programming?', a: 'Most languages use asin() for arcsin, returning values in radians. Python: math.asin(x). JavaScript: Math.asin(x). C: asin(x). Multiply by 180/π to convert to degrees.' },
    ],
    aiQA: [
      { q: 'What is arcsin(1)?', a: '90° (π/2 radians).' },
      { q: 'What is arcsin(0.5)?', a: '30° (π/6 radians).' },
      { q: 'What is sin inverse of 0?', a: '0°.' },
      { q: 'What is arcsin(-1)?', a: '-90° (-π/2 radians).' },
      { q: 'What is the range of arcsin?', a: '-90° to 90° (-π/2 to π/2 radians).' },
    ],
  },

  'arccos': {
    quickAnswer: 'Arccos (cos⁻¹) is the inverse of cosine. arccos(0.5) = 60°, arccos(1) = 0°, arccos(0) = 90°, arccos(-1) = 180°. Range: 0° to 180°.',
    whatIs: 'The Arccos Calculator computes the inverse cosine, returning the angle whose cosine equals the input. Unlike arcsin, arccos returns values in [0°, 180°], covering the full semicircle of unique cosine values. It is used in vector analysis, triangle solving (law of cosines), and any problem where you know a cosine ratio and need the angle.',
    howToUse: ['Enter a value between -1 and 1.', 'Click Calculate to see the angle in degrees and radians.'],
    formula: 'arccos(x) = cos^-1(x). If cos(θ) = x, then θ = arccos(x). Range: [0°, 180°] (or [0, π] radians). Relationship: arccos(x) + arcsin(x) = 90° for all x in [-1, 1].',
    examples: [
      { title: 'Dot Product Angle', scenario: 'Vectors A=[1,2] and B=[3,4]. Find angle between them.', result: 'cos(θ) = A·B/(|A||B|) = (3+8)/(√5 x √25) = 11/(√125) ≈ 0.9839. θ = arccos(0.9839) ≈ 10.3°.' },
      { title: 'Triangle Angle', scenario: 'Triangle sides a=5, b=7, c=10. Find angle C opposite side c.', result: 'By law of cosines: cos(C) = (25+49-100)/(2x5x7) = -26/70 = -0.3714. C = arccos(-0.3714) ≈ 111.8°.' },
    ],
    useCases: [
      'Finding angles between vectors (dot product applications).',
      'Law of cosines triangle solving (SSS configuration).',
      'Computer graphics: calculating lighting angles.',
      'Navigation: finding great circle angles.',
    ],
    faqs: [
      { q: 'Why does arccos go from 0° to 180° while arcsin goes from -90° to 90°?', a: 'Cosine is positive in quadrants I and IV, negative in II and III. The principal range [0°, 180°] covers where cosine uniquely maps each value from 1 to -1 (decreasing). Arcsin uses [-90°, 90°] because sine increases uniquely there.' },
      { q: 'How is arccos used in the law of cosines?', a: 'SSS triangle: given all three sides, find angles using: A = arccos((b^2+c^2-a^2)/(2bc)). This is the direct application — plugging the sides into the law of cosines formula and solving for angle with arccos.' },
      { q: 'What is arccos(0)?', a: 'arccos(0) = 90°. This makes sense: cos(90°) = 0, so the angle whose cosine is 0 is 90°.' },
      { q: 'What is arccos(-1)?', a: 'arccos(-1) = 180°. cos(180°) = -1. The point (-1, 0) on the unit circle corresponds to 180°.' },
      { q: 'Is arccos the same as 1/cos?', a: 'No. arccos(x) is the inverse cosine function (returns an angle). 1/cos(x) is secant (a different trig function). The -1 exponent notation for function inverses causes this common confusion.' },
    ],
    aiQA: [
      { q: 'What is arccos(0.5)?', a: '60° (π/3 radians).' },
      { q: 'What is arccos(1)?', a: '0°.' },
      { q: 'What is arccos(0)?', a: '90°.' },
      { q: 'What is arccos(-0.5)?', a: '120° (2π/3 radians).' },
      { q: 'What is the range of arccos?', a: '0° to 180° (0 to π radians).' },
    ],
  },

  'arctan': {
    quickAnswer: 'Arctan (tan⁻¹) is the inverse of tangent. arctan(1) = 45°, arctan(0) = 0°. Range: -90° to 90°. Used to find angles from slopes and ratios.',
    whatIs: 'The Arctan Calculator computes the inverse tangent, returning the angle whose tangent equals the input. Arctan accepts all real number inputs (unlike arcsin and arccos which are limited to [-1,1]). It is used to convert slopes to angles, find bearings from coordinate differences, and solve for angles in right triangles from opposite/adjacent ratios.',
    howToUse: ['Enter any real number (the tangent value or slope).', 'Click Calculate to see the angle in degrees and radians.'],
    formula: 'arctan(x) = tan^-1(x). If tan(θ) = x, then θ = arctan(x). Range: (-90°, 90°) — exclusive of ±90°. For full quadrant support, use atan2(y, x) which returns values in (-180°, 180°].',
    examples: [
      { title: 'Slope to Angle', scenario: 'A hill has a 20% grade (rise/run = 0.20). Find the angle.', result: 'θ = arctan(0.20) ≈ 11.31°. This is the angle from horizontal.' },
      { title: 'Navigation Bearing', scenario: 'Moving 3 km east and 4 km north. Find bearing from start.', result: 'θ = arctan(3/4) = arctan(0.75) ≈ 36.87° east of north. Or compass bearing ≈ 36.87°.' },
    ],
    useCases: [
      'Converting slope percentage to angle of inclination.',
      'Navigation: computing bearing from coordinate differences.',
      'Computer graphics: calculating rotation angles.',
      'Signal processing: phase angle of complex numbers.',
    ],
    faqs: [
      { q: 'What is atan2?', a: 'atan2(y, x) is a two-argument arctan function that correctly handles all four quadrants. It returns values in (-180°, 180°]. Unlike arctan(y/x), it preserves sign information of both components. Essential in programming for vector angles.' },
      { q: 'What is arctan of infinity?', a: 'arctan(∞) = 90° (π/2 radians). As the tangent approaches infinity (slope approaches vertical), the angle approaches 90°. Similarly, arctan(-∞) = -90°.' },
      { q: 'How is arctan used in complex numbers?', a: 'A complex number z = a + bi has argument (phase angle) θ = atan2(b, a). The magnitude is |z| = √(a^2 + b^2). This converts from rectangular to polar form.' },
      { q: 'What is the Maclaurin series for arctan?', a: 'arctan(x) = x - x^3/3 + x^5/5 - x^7/7 + ... (|x| ≤ 1). Setting x=1 gives the famous Leibniz formula: π/4 = 1 - 1/3 + 1/5 - 1/7 + ... This series converges slowly.' },
      { q: 'What is arctan(√3)?', a: 'arctan(√3) = 60°. Because tan(60°) = √3.' },
    ],
    aiQA: [
      { q: 'What is arctan(1)?', a: '45° (π/4 radians).' },
      { q: 'What is arctan(0)?', a: '0°.' },
      { q: 'What is tan inverse of √3?', a: '60°.' },
      { q: 'What is the range of arctan?', a: 'From just above -90° to just below 90°, exclusive.' },
      { q: 'How do I convert a slope to an angle?', a: 'Angle = arctan(rise/run). A 100% grade (rise = run) = arctan(1) = 45°.' },
    ],
  },
};
