import type { ToolSEOMap } from './index';

export const RANDOMIZERS_SEO: ToolSEOMap = {
  'random-number': {
    quickAnswer: 'Generate a random integer between any two numbers. Random number between 1 and 100: click and get an instant result. Uses cryptographically secure random generation.',
    whatIs: 'The Random Number Generator produces truly random integers or decimals between any minimum and maximum you specify. Uses the browser\'s secure random number generator (window.crypto). Perfect for games, raffles, sampling, and any application requiring unbiased random selection.',
    howToUse: ['Enter a minimum value.', 'Enter a maximum value.', 'Click Generate to get a random number in that range. Click again for a new number.'],
    formula: 'Random integer between min and max: floor(Math.random() x (max - min + 1)) + min. For cryptographic quality: window.crypto.getRandomValues(). Range: any integer range from -2,147,483,648 to 2,147,483,647.',
    examples: [
      { title: 'Dice Roll', scenario: 'Simulate a six-sided die.', result: 'Min: 1, Max: 6. Each click produces a random number 1-6 with equal probability (1/6 each).' },
      { title: 'Lottery Number', scenario: 'Pick a number 1-100 for a raffle.', result: 'Min: 1, Max: 100. Each of the 100 outcomes has exactly 1% probability.' },
    ],
    useCases: ['Games: dice rolls, coin flips, card draws.', 'Raffles and random selection from a group.', 'Statistical sampling without repetition.', 'Decision making when choice doesn\'t matter.'],
    faqs: [
      { q: 'Is this truly random?', a: 'Yes. This uses window.crypto.getRandomValues() — the browser\'s cryptographically secure pseudorandom number generator (CSPRNG). It produces statistically uniform outputs indistinguishable from true randomness.' },
      { q: 'What is the difference between random and pseudorandom?', a: 'True random uses physical entropy (atmospheric noise, radioactive decay). Pseudorandom uses deterministic algorithms seeded with entropy. Cryptographic PRNGs (used here) are indistinguishable from true random for all practical purposes.' },
      { q: 'Can I generate multiple random numbers at once?', a: 'Use the "Generate N numbers" feature to create a list of random numbers. For sampling without replacement (no duplicates), select the "no repeat" option.' },
      { q: 'What is a seed in random number generation?', a: 'The starting value for a pseudorandom algorithm. Same seed = same sequence of "random" numbers. Useful for reproducible simulations. Our generator uses system entropy as seed, ensuring different sequences each time.' },
      { q: 'What is uniform distribution?', a: 'Each possible outcome has equal probability. Our random number generator produces a uniform distribution — every integer from min to max is equally likely. This is the fairest possible random selection.' },
    ],
    aiQA: [
      { q: 'How do I generate a random number between 1 and 10?', a: 'Set min=1, max=10, and click Generate.' },
      { q: 'Can I generate a random number between 1 and 1000?', a: 'Yes. Set min=1, max=1000.' },
      { q: 'Is the random number generator fair?', a: 'Yes. Each number in the range has equal probability.' },
      { q: 'What is the maximum number I can generate?', a: 'Any integer up to about 2 billion in each direction.' },
      { q: 'How do I simulate a coin flip?', a: 'Set min=0, max=1. 0 = tails, 1 = heads.' },
    ],
  },

  'random-password': {
    quickAnswer: 'A secure 16-character password with uppercase, lowercase, numbers, and symbols has 95^16 ≈ 4.4 x 10^31 possible combinations. That would take billions of years to brute-force.',
    whatIs: 'The Password Generator creates cryptographically secure random passwords of any length with customizable character sets (uppercase, lowercase, numbers, symbols). Generated in your browser — nothing is sent to any server. Ideal for creating strong, unique passwords.',
    howToUse: ['Select the desired password length (12-32 recommended).', 'Choose character types: uppercase, lowercase, numbers, symbols.', 'Click Generate. Click again for a new password.', 'Copy and save in a password manager immediately.'],
    formula: 'Password entropy (bits) = length x log2(charset_size). 12-char alphanumeric: 12 x log2(62) = 71.4 bits. 16-char full ASCII: 16 x log2(95) = 105 bits. NIST recommends at least 80 bits for high-value accounts.',
    examples: [
      { title: 'Strong Password', scenario: '16 characters, all character types.', result: 'Example: K@7mN2pQw8!T1vY4 — 16 chars from 95-char set = 104.9 bits entropy.' },
      { title: 'PIN', scenario: '6-digit numeric PIN.', result: 'Example: 847293 — only 19.9 bits entropy. Avoid for important accounts; use longer alphanumeric passwords.' },
    ],
    useCases: ['Creating secure account passwords.', 'Generating temporary passwords for shared accounts.', 'API key and secret token generation.', 'Creating strong WiFi passwords.'],
    faqs: [
      { q: 'How long should my password be?', a: 'Minimum 12 characters for regular accounts. 16+ for important accounts (banking, email). 20+ for master passwords (password manager). Longer is always better — length has more impact than complexity.' },
      { q: 'Should I include symbols in my password?', a: 'Yes. Symbols increase the character set from 62 (alphanumeric) to 95, adding ~0.57 bits of entropy per character. Avoid symbols that cause issues in some systems (quotes, backslash, etc.). Our generator avoids ambiguous symbols.' },
      { q: 'What is a password manager?', a: 'Software (1Password, Bitwarden, LastPass) that stores all your passwords securely, encrypted behind one master password. This allows using unique, complex passwords for every site without memorization. Essential for good password hygiene.' },
      { q: 'Why shouldn\'t I reuse passwords?', a: 'When any website is breached, attackers try your credentials on all other sites (credential stuffing). If you reuse passwords, one breach compromises all accounts. Unique passwords per site limit damage to one compromised account.' },
      { q: 'What makes a password weak?', a: 'Dictionary words. Names or birthdays. Sequential patterns (123456, qwerty). Short length (< 8 characters). Previously breached passwords (check haveibeenpwned.com). Common substitutions (p@ssword is as weak as password to modern crackers).' },
    ],
    aiQA: [
      { q: 'How long should a secure password be?', a: 'At least 12 characters. 16+ for high-value accounts.' },
      { q: 'What characters should a strong password include?', a: 'Uppercase, lowercase, numbers, and symbols for maximum entropy.' },
      { q: 'Is this password generator safe to use?', a: 'Yes. Passwords are generated in your browser using secure random generation. Nothing is sent to servers.' },
      { q: 'What is password entropy?', a: 'A measure of password unpredictability in bits. More bits = harder to guess. Aim for 80+ bits for important accounts.' },
      { q: 'Should I use a password manager?', a: 'Yes. Password managers allow unique, complex passwords for every site — dramatically improving security.' },
    ],
  },

  'random-color': {
    quickAnswer: 'Generate random HEX colors (#A3F2B8), RGB values (rgb(163, 242, 184)), or HSL values. Random colors are used in design, art, testing, and creative projects.',
    whatIs: 'The Random Color Generator creates random colors in HEX, RGB, HSL, and CMYK formats. Options include random from full spectrum, random within a hue range, random pastel, random dark, or random within a specific palette. Perfect for design inspiration, testing, and creative projects.',
    howToUse: ['Click Generate for a completely random color.', 'Select a color mode (full random, pastel, dark, vibrant).', 'See the color in HEX, RGB, HSL, and CMYK formats instantly.', 'Click to copy any format to clipboard.'],
    formula: 'Random RGB: each of R, G, B = random integer 0-255. Random HEX: convert R, G, B to 2-digit hex. Pastel: R, G, B each in range 150-255 (lighter values). Dark: R, G, B each in range 0-100. Vibrant: high saturation in HSL.',
    examples: [
      { title: 'Design Inspiration', scenario: 'Need a random color palette for a new project.', result: 'Generate 5 colors. See HEX codes for CSS/design tools. Colors with good contrast for text/background pairs.' },
      { title: 'Testing UI', scenario: 'Testing a chart with random data colors.', result: 'Generate distinct random colors for chart series. Check contrast ratios for accessibility.' },
    ],
    useCases: ['Graphic design: color inspiration and palette generation.', 'Web development: testing with random colors.', 'Art projects requiring random color choices.', 'Game development: procedurally generated colors.'],
    faqs: [
      { q: 'What is a HEX color code?', a: 'A 6-digit hexadecimal representation of RGB color: #RRGGBB. Each pair (RR, GG, BB) is 00-FF (0-255 in decimal). #000000 = black. #FFFFFF = white. #FF0000 = red. #00FF00 = lime green.' },
      { q: 'What is the difference between RGB, HSL, and CMYK?', a: 'RGB: Red-Green-Blue additive model (screens). HSL: Hue-Saturation-Lightness (intuitive for design). CMYK: Cyan-Magenta-Yellow-Black subtractive model (print). Web design uses RGB/HSL; print design uses CMYK.' },
      { q: 'What makes a good color palette?', a: 'Color theory: complementary (opposite on color wheel), analogous (adjacent), triadic (three evenly spaced), split-complementary. Tools: Adobe Color, Coolors.co. Ensure sufficient contrast for accessibility (WCAG AA: 4.5:1 ratio for text).' },
      { q: 'What is color contrast ratio?', a: 'The difference in luminance between foreground and background colors. WCAG AA accessibility requires 4.5:1 for normal text, 3:1 for large text. High contrast is essential for readability and accessibility compliance.' },
      { q: 'What is a pastel color?', a: 'High lightness, low saturation — light, muted tones. Created by mixing colors with white. HSL: lightness > 70%, saturation 30-60%. Popular in UI design for backgrounds and gentle accents.' },
    ],
    aiQA: [
      { q: 'What is a random HEX color?', a: 'A randomly generated 6-character hexadecimal color code like #F3A72B.' },
      { q: 'What is HEX color format?', a: '#RRGGBB where RR, GG, BB are 00-FF representing red, green, blue intensity.' },
      { q: 'How many possible RGB colors are there?', a: '256 x 256 x 256 = 16,777,216 colors.' },
      { q: 'What is HSL color?', a: 'Hue (0-360°), Saturation (0-100%), Lightness (0-100%). More intuitive for designers than RGB.' },
      { q: 'What makes a color pastel?', a: 'High lightness and low saturation — light, washed-out tones.' },
    ],
  },

  'list-randomizer': {
    quickAnswer: 'Randomly shuffle any list of items. Enter one item per line or comma-separated. Perfect for randomizing teams, presentation orders, decision-making, or any list that needs fair random ordering.',
    whatIs: 'The List Randomizer shuffles any list of items into a random order using the Fisher-Yates shuffle algorithm — the most unbiased random ordering method available. Each possible ordering is equally likely. Use for team assignments, presentation order, random selection, and more.',
    howToUse: ['Enter your list items, one per line or comma-separated.', 'Click Randomize to shuffle the list.', 'Click again for a different random order.', 'Optionally select to pick only N items from the list.'],
    formula: 'Fisher-Yates shuffle: for i from n-1 to 1, swap element[i] with element[random(0, i)]. Produces perfectly uniform distribution over all n! possible orderings. For 10 items: 3,628,800 equally likely orderings.',
    examples: [
      { title: 'Class Presentation Order', scenario: '30 students need a random presentation order.', result: 'Enter all 30 names, click Randomize. Each of the 30! ≈ 2.65 x 10^32 orderings is equally possible.' },
      { title: 'Team Assignment', scenario: '12 players to be divided into 3 teams of 4.', result: 'Randomize the list. First 4 = Team 1, next 4 = Team 2, last 4 = Team 3. Perfectly fair.' },
    ],
    useCases: ['Assigning random presentation or speaking order.', 'Fair team formation from a player pool.', 'Random task assignment in a group.', 'Decision-making when multiple options are equivalent.'],
    faqs: [
      { q: 'What is the Fisher-Yates shuffle?', a: 'The gold standard for unbiased list shuffling. Works by iterating from the last element to the first, swapping each with a randomly chosen element at or before it. Every permutation has exactly equal probability.' },
      { q: 'Can I pick a random subset?', a: 'Yes — use the "Pick N from list" feature. Equivalent to shuffling and taking the first N items. Each possible N-item subset has equal probability of selection.' },
      { q: 'What is wrong with naive shuffling?', a: 'Many naive approaches (repeatedly picking random pairs to swap) produce biased distributions where some orderings are more likely than others. Fisher-Yates is provably unbiased.' },
      { q: 'How many possible orderings of 10 items are there?', a: '10! = 3,628,800. For 20 items: 20! ≈ 2.4 x 10^18. The Fisher-Yates algorithm samples uniformly from all these possibilities in O(n) time.' },
      { q: 'Is list randomization truly fair?', a: 'Yes — using cryptographic random number generation ensures each element has an equal chance of appearing in any position. Suitable for legally binding random selections like jury pools or lottery drawings.' },
    ],
    aiQA: [
      { q: 'How do I randomly shuffle a list?', a: 'Enter items and click Randomize. Uses Fisher-Yates algorithm for unbiased results.' },
      { q: 'Is the shuffle fair?', a: 'Yes. Every possible ordering has equal probability.' },
      { q: 'Can I pick random items without replacement?', a: 'Yes. Use the "Pick N items" feature — each unique subset has equal probability.' },
      { q: 'What algorithm is used for shuffling?', a: 'Fisher-Yates shuffle — the standard for unbiased random permutation.' },
      { q: 'How many orderings of 5 items exist?', a: '5! = 120 equally possible orderings.' },
    ],
  },

  'dice-roller': {
    quickAnswer: 'Roll any combination of dice: 1d6 (one six-sided die), 2d10, 4d6 drop lowest (D&D character stats), or custom dice. See individual results and sum.',
    whatIs: 'The Dice Roller simulates rolling any number and type of dice (d4, d6, d8, d10, d12, d20, d100) with individual results, sum, and statistics. Supports D&D notation (XdY), advantages/disadvantages, and drop highest/lowest modifiers used in tabletop RPGs.',
    howToUse: ['Enter dice notation: e.g., "2d6" for two six-sided dice.', 'Or select dice type and quantity from buttons.', 'Click Roll to see individual die results and total.', 'Click again to re-roll.'],
    formula: 'XdY = roll X dice, each with Y sides. Expected value per die = (Y+1)/2. Total expected = X x (Y+1)/2. 2d6 expected = 7. Advantage (D&D): roll 2d20, take higher. Disadvantage: take lower. 4d6 drop lowest: roll 4, discard minimum.',
    examples: [
      { title: 'D&D Attack Roll', scenario: 'Roll d20 with advantage.', result: 'Rolls: 12, 7. Take higher: 12. Add attack bonus to hit.' },
      { title: 'Character Stats', scenario: '4d6 drop lowest for ability scores.', result: 'Rolls: 5, 3, 4, 6. Drop 3. Sum remaining: 5+4+6=15.' },
    ],
    useCases: ['Tabletop RPG (D&D, Pathfinder) dice rolling.', 'Board game dice simulation.', 'Probability demonstrations.', 'Fair random selection using physical dice analog.'],
    faqs: [
      { q: 'What is dice notation (XdY)?', a: 'X = number of dice. d = "dice." Y = number of sides. 2d6 = two 6-sided dice. 1d20 = one 20-sided die. 3d8+5 = three 8-sided dice, add 5 to total (common in D&D damage rolls).' },
      { q: 'What does "advantage" mean in D&D?', a: 'Roll d20 twice, use the higher result. Disadvantage: use the lower. Advantage significantly improves low-probability outcomes. P(20 with advantage) = 1 - (19/20)^2 = 9.75% vs. 5% normally.' },
      { q: 'What is the most common 2d6 result?', a: '7 (six combinations: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1). The distribution is triangular: results near 7 are most likely. This is why 7 is so important in Craps.' },
      { q: 'What are polyhedral dice?', a: 'The standard D&D set: d4 (tetrahedron), d6 (cube), d8 (octahedron), d10 (pentagonal trapezohedron), d12 (dodecahedron), d20 (icosahedron), d100 (percentile, two d10s). All Platonic solids are represented.' },
      { q: 'Is a digital dice roll as fair as physical dice?', a: 'Yes. Using cryptographic randomness, each outcome has exactly equal probability. Physical dice can be biased by manufacturing imperfections, wear, or improper rolling. Digital dice are theoretically fairer.' },
    ],
    aiQA: [
      { q: 'What is a d20?', a: 'A 20-sided die used in D&D for most skill checks and attack rolls.' },
      { q: 'What is the average roll of a d6?', a: '(1+2+3+4+5+6)/6 = 3.5.' },
      { q: 'What is 2d6 in board games?', a: 'Two six-sided dice. Results range from 2-12. Most common sum: 7.' },
      { q: 'What does roll with advantage mean?', a: 'Roll two dice, keep the higher result. Used in D&D 5e.' },
      { q: 'What is 4d6 drop lowest?', a: 'Roll 4 six-sided dice, discard the lowest value. Used for D&D ability score generation.' },
    ],
  },

  'name-picker': {
    quickAnswer: 'Randomly pick a name from your list. Enter names separated by commas or new lines, click Pick, and get a random selection. Perfect for raffles, class participation, and giveaways.',
    whatIs: 'The Random Name Picker selects one or more names randomly from a list you provide. Uses secure random selection to ensure every name has equal probability of being chosen. Perfect for teachers selecting students, organizers running raffles, or anyone who needs a fair random selection.',
    howToUse: ['Enter names: one per line, or comma-separated.', 'Select how many names to pick (1 or more).', 'Click Pick to select randomly.', 'Optionally remove selected names so they won\'t be picked again.'],
    formula: 'Pick 1 from N names: each name has probability 1/N. For repeated picking without replacement: first pick has 1/N probability, second 1/(N-1), etc. Equivalent to Fisher-Yates shuffle and taking first K elements.',
    examples: [
      { title: 'Class Participation', scenario: 'Teacher has 30 students, needs to call on one randomly.', result: 'Each student has 1/30 ≈ 3.3% equal chance. After each pick, optionally remove name so everyone gets a turn.' },
      { title: 'Raffle Winner', scenario: '200 raffle ticket holders, pick 3 winners.', result: 'Each of the C(200,3) = 1,313,400 possible winning combinations is equally likely.' },
    ],
    useCases: ['Classroom random student selection.', 'Raffle and giveaway winner selection.', 'Random task or chore assignment.', 'Secret Santa / gift exchange pairing.'],
    faqs: [
      { q: 'Is the name picker truly fair?', a: 'Yes. Each name has exactly equal probability of selection. Uses cryptographic randomness — no name is preferred over any other.' },
      { q: 'Can I pick without replacement?', a: 'Yes. Enable "remove after picking" mode to prevent the same name from being selected twice. This creates a random ordering without repetition.' },
      { q: 'Can I weight names differently?', a: 'Yes — enter a name multiple times to give it proportionally higher weight. A name listed 3 times has 3x the probability of a name listed once. Used for weighted raffles (more tickets = more entries).' },
      { q: 'How do I organize a Secret Santa?', a: 'Enter all participant names. Pick pairs (first name gives to second, etc.) until all are paired, ensuring no one has themselves. The calculator handles circular assignments or random pairing.' },
      { q: 'What is the probability that my name is picked?', a: 'If N names total, probability = 1/N for equal weighting. For 30 names: 3.33%. For 100 names: 1%. Each additional pick without replacement: probability for remaining names increases.' },
    ],
    aiQA: [
      { q: 'How does the name picker work?', a: 'Randomly selects from your list with equal probability for each name.' },
      { q: 'Is the name picker fair?', a: 'Yes. Cryptographically secure random selection ensures equal probability.' },
      { q: 'Can I pick multiple names at once?', a: 'Yes. Set the "Pick N names" option to select more than one.' },
      { q: 'Can I prevent the same name from being picked twice?', a: 'Yes. Enable "remove after pick" mode.' },
      { q: 'What is the random name picker useful for?', a: 'Raffles, class participation, random task assignment, Secret Santa.' },
    ],
  },

  'team-generator': {
    quickAnswer: 'Randomly divide a list of players into balanced teams. Enter names, select number of teams or team size, and get fair random team assignments instantly.',
    whatIs: 'The Random Team Generator creates balanced, randomly assigned teams from a list of participants. Perfect for sports, classroom activities, hackathons, and group projects. Choose teams by count (N teams) or by size (N per team), with optional team name assignment.',
    howToUse: ['Enter participant names, one per line.', 'Select "Number of teams" or "People per team."', 'Click Generate to create random teams.', 'Click again for different random assignments.'],
    formula: 'Shuffle all names using Fisher-Yates algorithm. Distribute sequentially to teams: team 1 gets names 1, N+1, 2N+1... For N teams from M players: teams have either floor(M/N) or ceil(M/N) members (distributed evenly). Each possible set of teams is equally likely.',
    examples: [
      { title: 'Soccer Teams', scenario: '20 players, 4 teams of 5.', result: 'Randomize all 20 names. First 5 = Team 1, next 5 = Team 2, etc. Each team gets exactly 5 random players.' },
      { title: 'Hackathon Groups', scenario: '17 participants, teams of 4.', result: '4 teams of 4 (16 players) + 1 group of 1, OR 3 teams of 4 and 1 team of 5. Calculator distributes extras fairly.' },
    ],
    useCases: ['Sports team selection and scrimmage organization.', 'Classroom group projects.', 'Hackathon team formation.', 'Office team building activities.'],
    faqs: [
      { q: 'How are uneven group sizes handled?', a: 'Extra members are distributed evenly — some teams get one extra person. The calculator ensures the most balanced possible distribution. Example: 17 people, 4 teams → three teams of 4 and one team of 5.' },
      { q: 'Can I balance teams by skill level?', a: 'This tool creates random teams. For skill-balanced teams, first rank players by skill (1-10), then use "snake draft" assignment: team 1 gets picks 1,8,9,16; team 2 gets picks 2,7,10,15; etc.' },
      { q: 'Can I set team names?', a: 'Yes. Enter custom team names, or the generator assigns default names (Team 1, Team 2, etc.). You can also assign team colors for visual distinction.' },
      { q: 'How do I prevent friends from being on the same team?', a: 'True constraint-based team generation is more complex. A workaround: run the generator multiple times until you get a satisfactory assignment, or manually swap specific players after initial random generation.' },
      { q: 'What is a round-robin tournament format?', a: 'Each team plays every other team exactly once. For N teams: N x (N-1) / 2 games total. Our team generator creates balanced teams; combine with a round-robin schedule for complete tournament organization.' },
    ],
    aiQA: [
      { q: 'How do I split 20 people into 4 teams?', a: 'Enter 20 names, select 4 teams, click Generate.' },
      { q: 'Are the teams balanced?', a: 'Yes — teams are as equal in size as possible. For 17 people in 4 teams: three of 4 and one of 5.' },
      { q: 'Is the team selection random and fair?', a: 'Yes. Fisher-Yates shuffle ensures unbiased random distribution.' },
      { q: 'Can I regenerate teams?', a: 'Yes. Click Generate again for a completely different random assignment.' },
      { q: 'What if I have an odd number of players?', a: 'Extra players are distributed to teams so size difference is at most 1 person.' },
    ],
  },

  'random-date': {
    quickAnswer: 'Generate a random date between any two dates. Use for sampling, test data, games, and random event planning. A random date in 2024 falls anywhere in the 366-day year.',
    whatIs: 'The Random Date Generator creates random dates between a start and end date you specify. Each date in the range has equal probability of being selected. Useful for statistical sampling, generating test data, and games requiring random date selection.',
    howToUse: ['Enter a start date.', 'Enter an end date.', 'Click Generate to get a random date within that range.', 'Optionally generate multiple random dates.'],
    formula: 'Random date = Start date + random integer between 0 and (End - Start) days. Number of possible dates = (End date - Start date) in days + 1. Each date has probability 1/(total days) of being selected.',
    examples: [
      { title: 'Historical Event', scenario: 'Random date during World War II (Sept 1, 1939 to Sept 2, 1945).', result: 'Range: 2,193 days. Each day has 1/2,193 ≈ 0.046% probability of selection.' },
      { title: 'Annual Planning', scenario: 'Random date in 2025 for a planning exercise.', result: 'Range: Jan 1 - Dec 31, 2025 (365 days). Equal chance for any day in the year.' },
    ],
    useCases: ['Statistical sampling: selecting random survey dates.', 'Software testing: generating test date data.', 'Games and trivia: random historical date questions.', 'Birthday and anniversary random selection.'],
    faqs: [
      { q: 'Are weekdays more likely than weekends?', a: 'No. This generator selects any calendar day with equal probability. If you need a random weekday only (no Saturday/Sunday), select the "weekdays only" option.' },
      { q: 'Can I generate a random business day?', a: 'Yes — use the "weekdays only" filter. This excludes Saturdays and Sundays, selecting only Monday through Friday within your specified range.' },
      { q: 'Can I generate multiple random dates?', a: 'Yes. Set the quantity to generate N dates. You can choose "with replacement" (same date may appear multiple times) or "without replacement" (all dates unique).' },
      { q: 'What format are the dates shown in?', a: 'Dates are shown in your locale format (MM/DD/YYYY in the US, DD/MM/YYYY in Europe) and ISO 8601 format (YYYY-MM-DD) which is internationally unambiguous.' },
      { q: 'What is the probability that a random date falls in a specific month?', a: 'Approximately days_in_month / total_range_days. For a full year: January has 31/365 ≈ 8.5% probability. All months within the range are weighted by their day count.' },
    ],
    aiQA: [
      { q: 'How do I generate a random date?', a: 'Enter start and end dates, click Generate.' },
      { q: 'Can I generate a random date in 2025?', a: 'Yes. Set start to Jan 1, 2025 and end to Dec 31, 2025.' },
      { q: 'Can I get a random weekday?', a: 'Yes. Use the weekdays-only filter to exclude Saturdays and Sundays.' },
      { q: 'What format is the date shown in?', a: 'Both your local format and ISO 8601 (YYYY-MM-DD).' },
      { q: 'Is every date in the range equally likely?', a: 'Yes. Each calendar day has equal probability of selection.' },
    ],
  },

  'random-time': {
    quickAnswer: 'Generate a random time between any two times. Random time between 9:00 AM and 5:00 PM = any time in that 8-hour window with equal probability. Each second has equal chance.',
    whatIs: 'The Random Time Generator creates random times (hours, minutes, seconds) between any two times you specify. Useful for scheduling random events, testing time-based software, and games requiring random time selection.',
    howToUse: ['Enter a start time (HH:MM or HH:MM:SS).', 'Enter an end time.', 'Click Generate to get a random time in that range.'],
    formula: 'Random time = Start time + random integer seconds between 0 and (End - Start) in seconds. Range of 8 hours = 28,800 seconds = 28,800 equally likely moments. Output in HH:MM:SS and 12-hour format.',
    examples: [
      { title: 'Meeting Scheduler', scenario: 'Random meeting time within business hours (9:00 AM - 5:00 PM).', result: 'Range: 28,800 seconds. Each second equally likely.' },
      { title: 'Alarm Time', scenario: 'Random wakeup time between 6:00 and 7:30 AM.', result: 'Range: 90 minutes = 5,400 seconds of possible times.' },
    ],
    useCases: ['Software testing with random timestamps.', 'Scheduling random events or reminders.', 'Games requiring random time selection.', 'Randomized study break timers.'],
    faqs: [
      { q: 'Can I generate a random time in 12-hour format?', a: 'Yes. The tool shows both 24-hour and 12-hour (AM/PM) formats.' },
      { q: 'Can I generate only times on the hour?', a: 'Use the "minute precision" setting to round to the nearest hour, half hour, quarter hour, or 15-minute intervals.' },
      { q: 'What is the resolution of the random time?', a: 'By default, second precision. You can set to minute or hour precision.' },
      { q: 'Can I generate times that cross midnight?', a: 'Yes — set start time to 11:00 PM and end time to 2:00 AM. The generator handles the midnight boundary correctly.' },
      { q: 'Is the probability uniform?', a: 'Yes. Each second (or minute, depending on precision setting) in the range has exactly equal probability.' },
    ],
    aiQA: [
      { q: 'How do I generate a random time?', a: 'Enter start and end times, click Generate.' },
      { q: 'Is every time in the range equally likely?', a: 'Yes. Each second in the range has equal probability.' },
      { q: 'Can I generate a random time in AM/PM format?', a: 'Yes. Results are shown in both 12-hour and 24-hour formats.' },
      { q: 'What is the smallest time unit generated?', a: 'By default, one second. Can be set to minute or hour precision.' },
      { q: 'Can random times cross midnight?', a: 'Yes, if your range spans midnight.' },
    ],
  },

  'random-decimal': {
    quickAnswer: 'Generate random decimals between any two values. Random decimal between 0 and 1: any value like 0.7342819... Each decimal is uniformly distributed in the range.',
    whatIs: 'The Random Decimal Generator creates random floating-point numbers between any minimum and maximum values with a specified number of decimal places. Essential for simulations, statistical sampling, Monte Carlo methods, and testing applications that handle decimal inputs.',
    howToUse: ['Enter minimum and maximum values.', 'Select the number of decimal places (1-10).', 'Click Generate to see a random decimal in that range.'],
    formula: 'Random decimal = min + Math.random() x (max - min). Precision: Math.round(value x 10^places) / 10^places. For max entropy, uses window.crypto.getRandomValues() with uniform distribution across the range.',
    examples: [
      { title: 'Monte Carlo', scenario: 'Need random numbers between 0 and 1 for simulation.', result: 'Generate values like 0.7342, 0.1891, 0.9023 — uniform distribution for statistical analysis.' },
      { title: 'Price Simulation', scenario: 'Random price between $9.99 and $99.99.', result: 'Min: 9.99, Max: 99.99, 2 decimal places. Produces values like $47.83, $23.17.' },
    ],
    useCases: ['Monte Carlo simulation and statistical sampling.', 'Software testing with random floating-point inputs.', 'Generating random percentages and ratios.', 'Physics simulation with random variables.'],
    faqs: [
      { q: 'What is the difference between random integer and random decimal?', a: 'Integers are whole numbers (1, 2, 3...). Decimals include fractional parts (1.7834, 2.4521...). Decimal generation uses floating-point numbers with specified precision.' },
      { q: 'What is uniform distribution?', a: 'Every value in the range has equal probability density. Formally: P(a ≤ X ≤ b) = (b-a)/(max-min) for any a,b in the range. The area under the probability density function is constant.' },
      { q: 'What is a Monte Carlo simulation?', a: 'A computational technique that uses random sampling to estimate mathematical results. Example: estimating π by randomly sampling points in a square and checking if they fall inside an inscribed circle.' },
      { q: 'What precision should I use?', a: 'Match your application\'s needs. Currency: 2 places. Scientific measurements: 4-6 places. Probability values: 4-6 places. Physics: as many as needed. More decimal places = more distinct possible values.' },
      { q: 'What is the precision limit?', a: 'JavaScript floating-point numbers have about 15-17 significant decimal digits (IEEE 754 double precision). Beyond this, values are mathematically identical at that precision.' },
    ],
    aiQA: [
      { q: 'How do I generate a random decimal between 0 and 1?', a: 'Set min=0, max=1, choose decimal places, click Generate.' },
      { q: 'What is the difference between random integers and decimals?', a: 'Integers are whole numbers. Decimals include fractional parts.' },
      { q: 'Can I generate a random percentage?', a: 'Yes. Set min=0, max=100, 2 decimal places.' },
      { q: 'Is the distribution uniform?', a: 'Yes. Every value in the range has equal probability density.' },
      { q: 'What is a random decimal used for?', a: 'Simulations, statistical sampling, software testing, and Monte Carlo methods.' },
    ],
  },

  'random-yes-no': {
    quickAnswer: 'Random yes or no: 50/50 probability. Click for an instant random answer to any yes/no question. Useful for decisions when you\'re truly indifferent between two choices.',
    whatIs: 'The Random Yes or No Generator produces a random binary answer (yes or no) with exactly 50% probability for each outcome. Uses cryptographically secure randomness. Perfect for breaking ties, making decisions when you\'re indifferent, or any binary random selection.',
    howToUse: ['Click the "Yes or No?" button.', 'See an instant random answer with 50% probability for each outcome.', 'Click again for a new random answer.'],
    formula: 'Random bit: P(Yes) = P(No) = 0.5. Equivalent to a fair coin flip. Using window.crypto.getRandomValues(): generates a uniform random integer and checks if it is even (Yes) or odd (No).',
    examples: [
      { title: 'Tie-Breaking', scenario: 'Two equally good options and you can\'t decide.', result: 'Click Yes or No. If you feel relieved or disappointed by the answer, it reveals your true preference.' },
      { title: 'Random Decision', scenario: 'Truly indifferent about which restaurant to go to.', result: 'Yes = Restaurant A, No = Restaurant B. Each has exactly 50% probability.' },
    ],
    useCases: ['Breaking ties and stalemates.', 'Making arbitrary binary decisions.', 'Simulating fair coin flips.', 'Random element in games or exercises.'],
    faqs: [
      { q: 'Is this a truly fair 50/50?', a: 'Yes. Each click produces an independent, cryptographically random binary outcome with exactly P = 0.5 for each answer. There are no streaks, biases, or patterns.' },
      { q: 'Can I adjust the probability?', a: 'Yes — use the custom probability feature. Set 70% for Yes / 30% for No if you want a weighted random decision.' },
      { q: 'What is a fair coin flip?', a: 'A physical coin flip where each side has 50% probability. A perfectly fair coin, flipped and caught without rolling, produces heads and tails with equal probability in the long run.' },
      { q: 'Is it safe to make decisions with random yes/no?', a: 'Use it only when you are genuinely indifferent between options. A useful trick: if you feel unhappy with the result, it suggests you actually preferred the other option — revealing your true preference.' },
      { q: 'What is the law of large numbers?', a: 'Over many trials, the proportion of Yes answers approaches exactly 50%. After 100 clicks, you may see 45-55 Yes answers. After 10,000 clicks: very close to 50%. Each individual click is still 50/50.' },
    ],
    aiQA: [
      { q: 'Is random yes or no 50/50?', a: 'Yes. Exactly 50% probability for each answer, every time.' },
      { q: 'What is random yes or no used for?', a: 'Breaking ties, making arbitrary binary decisions, simulating coin flips.' },
      { q: 'Does the answer depend on previous answers?', a: 'No. Each click is completely independent. There are no streaks or patterns.' },
      { q: 'Can I get 5 Yes answers in a row?', a: 'Yes. Probability = (0.5)^5 = 3.125%. Perfectly possible with fair random generation.' },
      { q: 'What is a fair coin flip?', a: 'A 50/50 probability between two outcomes, like this random yes/no generator.' },
    ],
  },

  'random-letter': {
    quickAnswer: 'Generate random letters from A-Z. Random uppercase letter: 1/26 ≈ 3.85% chance for each letter. Use for games, acronyms, coding exercises, and random selections.',
    whatIs: 'The Random Letter Generator selects random letters from the alphabet with equal probability. Options include uppercase only, lowercase only, mixed case, and vowels/consonants only. Generate single letters or sequences. Used in word games, programming exercises, and creative projects.',
    howToUse: ['Select letter type: uppercase, lowercase, or mixed.', 'Optionally filter to vowels only or consonants only.', 'Select how many letters to generate.', 'Click Generate for random letters.'],
    formula: 'Random letter: choose uniformly from selected alphabet. Full alphabet: 26 letters. Vowels: 5 (A, E, I, O, U). Consonants: 21. Each letter in the selected set has equal probability. Multiple letters: independent draws.',
    examples: [
      { title: 'Word Game', scenario: 'Generate 7 random letters for a word game.', result: 'Example: M, E, R, A, T, S, I — can form "MASTER," "STREAM," "MISTER," etc.' },
      { title: 'Random Initial', scenario: 'Random initial for a character name.', result: 'Each of 26 letters has 3.85% probability. Click for a random starting letter.' },
    ],
    useCases: ['Scrabble and word game letter generation.', 'Random initial selection for lists or games.', 'Programming exercises: alphabet sorting, character processing.', 'Creative writing: random letter constraints.'],
    faqs: [
      { q: 'What is the distribution of letters in English?', a: 'The most common: E (12.7%), T (9.1%), A (8.2%), O (7.5%), I (7.0%). Rarest: Z (0.07%), Q (0.10%), J (0.15%), X (0.15%). Random letter selection is uniform (each has 1/26 probability), unlike actual English text.' },
      { q: 'What is the probability of generating a specific letter?', a: '1/26 ≈ 3.85% for any specific letter from the full alphabet. For vowels only (5): 20%. For consonants only (21): 1/21 ≈ 4.76%.' },
      { q: 'Can I generate a random word?', a: 'Yes — generate N random letters and arrange them. Random letter sequences are not real words. For random real words, use a word randomizer tool.' },
      { q: 'What letters are vowels?', a: 'Standard vowels: A, E, I, O, U. Sometimes Y is counted as a vowel (e.g., in "gym"). For this tool, Y is classified as a consonant by default.' },
      { q: 'What is a random letter used for in coding?', a: 'Variable name generation, test data, alphabet iteration exercises, cipher and encoding examples, and educational programs teaching character manipulation.' },
    ],
    aiQA: [
      { q: 'What is the probability of a random letter being a vowel?', a: '5/26 ≈ 19.2% (for uniform selection from A-Z).' },
      { q: 'How many letters are in the English alphabet?', a: '26 letters (A-Z).' },
      { q: 'What is the most common letter in English?', a: 'E is the most common letter in English text.' },
      { q: 'Can I generate random consonants only?', a: 'Yes. Use the "consonants only" filter.' },
      { q: 'What is the least common letter in English?', a: 'Z is the least common letter in English text.' },
    ],
  },
};
