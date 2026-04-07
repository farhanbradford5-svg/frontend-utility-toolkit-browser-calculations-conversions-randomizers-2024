import type { ToolSEOMap } from './index';

export const DATETIME_SEO: ToolSEOMap = {
  'days-between-dates': {
    quickAnswer: 'The Days Between Dates Calculator counts the exact number of calendar days, weekdays, or weekends between any two dates. Enter both dates to get an instant result.',
    whatIs: 'The Days Between Dates Calculator computes the precise number of days separating two calendar dates. It supports options for counting only business days (Monday-Friday), only weekends, or total calendar days. It is used for project deadlines, lease calculations, legal date computations, billing periods, and countdown timers.',
    howToUse: [
      'Select or enter the start date.',
      'Select or enter the end date.',
      'Choose whether to count calendar days, business days, or weekend days.',
      'Click Calculate to see the exact day count and breakdown.',
    ],
    formula: 'Calendar Days = End Date - Start Date (in days). Business Days = Calendar Days minus Saturdays, Sundays, and optionally public holidays. Example: Jan 1 to Mar 31 = 89 calendar days, 63 business days.',
    examples: [
      { title: 'Project Deadline', scenario: 'Project starts February 1, 2025 and must be completed by April 30, 2025.', result: '88 calendar days. 62 business days (excluding weekends, no holidays). Plan accordingly.' },
      { title: 'Lease Calculation', scenario: 'Lease starts March 15, ends August 14 (5-month lease).', result: '152 calendar days. Pro-rated daily rent = monthly rent / 30.4 days.' },
    ],
    useCases: [
      'Legal and contract date calculations.',
      'Project planning and deadline management.',
      'Counting days until a vacation, birthday, or event.',
      'Invoice payment terms and billing period calculations.',
    ],
    faqs: [
      { q: 'Does the calculator include both the start and end dates?', a: 'By default, the calculator returns the number of days between (exclusive of start, inclusive of end). You can adjust this — for example, counting both start and end days adds 1 to the result.' },
      { q: 'What counts as a business day?', a: 'Business days are Monday through Friday, excluding Saturday and Sunday. Some calculators also exclude federal or national holidays. The standard financial and legal definition excludes only weekends.' },
      { q: 'How do I calculate days between dates manually?', a: 'Convert both dates to their day number within the year (Julian day number), then subtract. Or convert to Unix timestamps (seconds since epoch) and divide by 86,400 seconds/day.' },
      { q: 'Can I calculate days in the past or future?', a: 'Yes. The calculator works with any two dates, past, present, or future. Use it to find how many days ago an event occurred, or how many days until a future date.' },
      { q: 'How are leap years handled?', a: 'Leap years (divisible by 4, except century years unless divisible by 400) add a February 29. The calculator accounts for this automatically in all date range calculations.' },
    ],
    aiQA: [
      { q: 'How many days between January 1 and December 31?', a: '364 days (non-leap year) or 365 days (leap year).' },
      { q: 'How many business days are in a month?', a: 'Typically 20-23 business days per month, depending on the month and how weekends fall.' },
      { q: 'How do I count days between two dates?', a: 'Subtract the earlier date from the later date. This calculator does it instantly.' },
      { q: 'How many weeks between two dates?', a: 'Divide the number of days by 7. For example, 84 days = 12 weeks.' },
      { q: 'What is a Julian day number?', a: 'A continuous count of days since a fixed reference point, used to calculate differences between calendar dates regardless of month names.' },
    ],
  },

  'age': {
    quickAnswer: 'The Age Calculator computes your exact age in years, months, and days from your date of birth to today — or to any other target date.',
    whatIs: 'The Age Calculator determines exact age with precision — down to years, months, and days. It correctly handles all edge cases including leap year birthdays, month-end calculations, and the difference between complete and partial years. It is used for legal documents, medical records, school enrollment, insurance forms, and simple curiosity.',
    howToUse: [
      'Enter your date of birth.',
      'Select today or enter a specific target date.',
      'Click Calculate to see your exact age in years, months, and days.',
      'Use it to find someone\'s age on any past or future date.',
    ],
    formula: 'Age = Target Date - Birth Date. Years = complete calendar years elapsed. Months = complete months in current year. Days = remaining days in current month. Leap years are handled automatically.',
    examples: [
      { title: 'Birthday Age', scenario: 'Born June 15, 1990. Today is March 10, 2025.', result: 'Age = 34 years, 8 months, 23 days.' },
      { title: 'Future Age', scenario: 'Born September 1, 1985. What age on December 31, 2030?', result: 'Age = 45 years, 4 months, 0 days.' },
    ],
    useCases: [
      'Filling out forms and official documents requiring exact age.',
      'Calculating age for medical, legal, or insurance purposes.',
      'Checking if someone meets an age requirement (driving, drinking, retirement).',
      'Historical or genealogical research on ages at specific events.',
    ],
    faqs: [
      { q: 'What if I was born on February 29?', a: 'Leap year birthdays (Feb 29) are handled correctly. In non-leap years, the "official" birthday is recognized as either Feb 28 or March 1 depending on jurisdiction. The calculator uses the date-based approach to compute age.' },
      { q: 'How is age calculated legally?', a: 'Legal age counts complete calendar years from the birth date. You are considered a specific age from your birthday until the day before your next birthday. For example, born June 15: you turn 18 at the start of June 15 on your 18th birthday year.' },
      { q: 'What is chronological vs. biological age?', a: 'Chronological age is calendar years since birth. Biological age reflects physiological health status, which can be younger or older than chronological age depending on lifestyle and genetics.' },
      { q: 'Can I calculate my age in total days?', a: 'Yes. Simply use the days-between-dates calculator from your birth date to today. A 30-year-old is approximately 10,957-10,959 days old.' },
      { q: 'How do I calculate someone\'s age from their Social Security number?', a: 'You cannot — SSNs do not encode birthdate. You need the actual date of birth to calculate age.' },
    ],
    aiQA: [
      { q: 'How do I calculate my exact age?', a: 'Enter your birthday in this calculator to get age in years, months, and days.' },
      { q: 'How old am I if born in 1990?', a: 'As of 2025, approximately 34-35 years old, depending on your birthday.' },
      { q: 'How many days old am I?', a: 'Use this calculator from your birth date to today — approximately 365 days per year.' },
      { q: 'What is my age in months if I am 25?', a: '25 years x 12 months = 300 months, plus the months in the current year.' },
      { q: 'What day of the week was I born?', a: 'Use the birthday calculator to find the exact day of the week for any date of birth.' },
    ],
  },

  'hours-calculator': {
    quickAnswer: 'The Hours Calculator computes the total hours and minutes between a start time and end time. It handles overnight spans, multiple time entries, and time format conversions.',
    whatIs: 'The Hours Calculator finds the difference between two times in hours and minutes, supporting both 12-hour and 24-hour (military) time formats. It handles spans that cross midnight, multiple time entry rows for timesheets, and optional break deductions. It is essential for payroll, time tracking, and scheduling.',
    howToUse: [
      'Enter the start time (e.g., 9:00 AM or 09:00).',
      'Enter the end time (e.g., 5:30 PM or 17:30).',
      'Optionally enter break duration to subtract.',
      'Click Calculate to see total hours worked.',
    ],
    formula: 'Hours = (End Time - Start Time) in minutes / 60. If end time is before start time, add 24 hours (overnight span). Example: 8:30 AM to 5:15 PM = 8 hours 45 minutes = 8.75 hours.',
    examples: [
      { title: 'Standard Work Day', scenario: 'Start: 8:00 AM. End: 5:30 PM. Lunch break: 30 minutes.', result: 'Gross hours = 9.5 hours. Net hours = 9 hours after 30-minute break.' },
      { title: 'Night Shift', scenario: 'Start: 10:00 PM. End: 6:30 AM.', result: '8 hours 30 minutes (overnight calculation handled automatically).' },
    ],
    useCases: [
      'Calculating daily hours worked for timesheet entry.',
      'Tracking billable hours for freelance invoicing.',
      'Computing work hours for overtime calculations.',
      'Event duration calculation for planning and scheduling.',
    ],
    faqs: [
      { q: 'How do I calculate hours worked?', a: 'Subtract start time from end time. For breaks, subtract the break duration. Convert to decimal hours by dividing minutes by 60 (45 min = 0.75 hours).' },
      { q: 'What is decimal time?', a: 'Decimal time expresses hours as a decimal fraction rather than hours:minutes. 8h 30min = 8.5 decimal hours. Used in payroll systems for easy multiplication with hourly rates.' },
      { q: 'How do I convert minutes to decimal hours?', a: 'Divide minutes by 60. Examples: 15 min = 0.25h, 30 min = 0.50h, 45 min = 0.75h, 20 min = 0.333h.' },
      { q: 'What happens with overnight shifts?', a: 'When the end time is earlier than the start time, the calculator assumes the shift crosses midnight and adds 24 hours to the end time for the calculation.' },
      { q: 'How do I calculate overtime?', a: 'Total hours minus 40 (weekly) or 8 (daily, in some states) = overtime hours. Overtime is typically paid at 1.5x the regular hourly rate.' },
    ],
    aiQA: [
      { q: 'How do I calculate hours between two times?', a: 'Subtract the start time from the end time. 9 AM to 5 PM = 8 hours.' },
      { q: 'How many hours between 8am and 5pm?', a: '9 hours. Subtract 30 minutes for a lunch break and it is 8.5 hours worked.' },
      { q: 'How do I convert 7 hours 45 minutes to decimal?', a: '7 + (45/60) = 7.75 decimal hours.' },
      { q: 'How many hours is a full-time work week?', a: 'Standard is 40 hours per week (8 hours per day, 5 days).' },
      { q: 'What is military time?', a: 'A 24-hour clock system where 1:00 PM = 13:00, midnight = 00:00. Used in military, healthcare, and aviation.' },
    ],
  },

  'date-duration': {
    quickAnswer: 'The Date Duration Calculator adds or subtracts days, weeks, months, or years to any date, showing the resulting date. Perfect for calculating deadlines and due dates.',
    whatIs: 'The Date Duration Calculator performs date arithmetic — adding or subtracting a specified number of days, weeks, months, or years from any starting date to find a future or past date. It correctly handles month-length variations, leap years, and end-of-month edge cases. Used for deadline calculation, due date estimation, and calendar planning.',
    howToUse: [
      'Enter your starting date.',
      'Choose to add or subtract.',
      'Enter the number and unit (days, weeks, months, or years).',
      'Click Calculate to see the resulting date.',
    ],
    formula: 'Result Date = Start Date + Duration. For months, the same day is used in the target month (or the last day if the original day does not exist in that month). Example: March 31 + 1 month = April 30.',
    examples: [
      { title: 'Contract Deadline', scenario: 'Agreement signed February 10, 2025. Payment due in 90 days.', result: 'Due date: May 11, 2025.' },
      { title: 'Warranty Period', scenario: 'Product purchased December 5, 2024. 2-year warranty.', result: 'Warranty expires December 5, 2026.' },
    ],
    useCases: [
      'Calculating contract payment and delivery deadlines.',
      'Finding due dates for loans, leases, and warranties.',
      'Determining age-related eligibility dates.',
      'Planning future events and scheduling milestones.',
    ],
    faqs: [
      { q: 'What happens when adding months to a month-end date?', a: 'Adding 1 month to January 31 gives February 28 (or 29 in a leap year) — the last day of the resulting month. Most date libraries and calculators handle this edge case automatically.' },
      { q: 'How do I calculate a date 30 business days from today?', a: 'Use the business days mode to add exactly 30 working days (Mon-Fri), skipping weekends and optionally holidays. The result will be further in the future than 30 calendar days.' },
      { q: 'How is "one month from today" calculated?', a: 'One month advances the month field by 1, keeping the same day if possible. February\'s shorter length can cause edge cases that this calculator handles correctly.' },
      { q: 'What is a day count convention?', a: 'In finance, day count conventions (Actual/365, Actual/360, 30/360) define how to count days between dates for interest calculations. This matters for bond pricing and swap contracts.' },
      { q: 'Can I calculate a date in the past?', a: 'Yes. Subtracting days or months from a date gives a past date, useful for backtracking to find when something started or occurred.' },
    ],
    aiQA: [
      { q: 'What date is 30 days from today?', a: 'Use this calculator with today\'s date and add 30 days for an exact result.' },
      { q: 'What date is 90 days from February 1?', a: 'May 2 (non-leap year) or May 1 (leap year).' },
      { q: 'How do I add business days to a date?', a: 'Use the business days mode, which skips Saturdays and Sundays in the day count.' },
      { q: 'What is 6 months from March 31?', a: 'September 30 (the last day of September, since March 31 has no equivalent in September).' },
      { q: 'How many days until my deadline?', a: 'Enter your start date (today) and end date (deadline) in the days-between-dates calculator.' },
    ],
  },

  'sleep': {
    quickAnswer: 'The Sleep Calculator finds the best times to wake up based on your bedtime, aligning wake time with the end of a 90-minute sleep cycle to minimize grogginess.',
    whatIs: 'The Sleep Calculator uses sleep science to recommend optimal wake times based on 90-minute sleep cycles. Waking up mid-cycle causes sleep inertia (that groggy, disoriented feeling). Waking at the end of a cycle — after 4.5, 6, 7.5, or 9 hours — leaves you feeling more refreshed. The calculator also works in reverse: enter your wake time to find the ideal bedtimes.',
    howToUse: [
      'Enter your planned bedtime.',
      'Add approximately 15 minutes for sleep onset (the time it takes to fall asleep).',
      'Click Calculate to see the 4 best times to set your alarm.',
      'Choose the wake time that fits your schedule.',
    ],
    formula: 'Optimal Wake Time = Bedtime + Sleep Onset (15 min) + (N x 90 minutes). Where N = 4, 5, 6 cycles. 4 cycles = 6h 15min total; 5 cycles = 7h 45min; 6 cycles = 9h 15min. Most adults do best with 5 full cycles.',
    examples: [
      { title: 'Night Owl', scenario: 'Going to bed at 11:30 PM, need to wake at 7 AM.', result: '7:00 AM falls at 7 hours 30 min. Optimal would be 6:45 AM (5 cycles, 7h 15min after onset) or 7:00 AM is close enough to the 5-cycle mark at 7h 30min. Set alarm for 7:00 AM.' },
      { title: 'Early Riser Reverse', scenario: 'Must wake at 5:30 AM. What time should I go to bed?', result: 'Ideal bedtimes: 10:15 PM (7h 15min), 8:45 PM (8h 45min), or 11:45 PM (5h 45min for shorter nights).' },
    ],
    useCases: [
      'Setting an alarm that avoids mid-cycle wake-ups.',
      'Planning sleep schedule around early morning commitments.',
      'Optimizing sleep quality for important days (exams, presentations).',
      'Shift workers planning split sleep around irregular schedules.',
    ],
    faqs: [
      { q: 'What are sleep cycles?', a: 'A sleep cycle lasts approximately 90 minutes and consists of light sleep, deep sleep (slow-wave), and REM (Rapid Eye Movement) sleep. Adults typically complete 4-6 cycles per night. REM sleep (important for memory and mood) is longest in later cycles.' },
      { q: 'Why do I feel worse after 8 hours than 7.5?', a: 'If your total sleep doesn\'t align with a complete cycle, you wake during deep sleep and experience sleep inertia — grogginess that can last 30-60 minutes. 7.5 hours (5 complete cycles) often feels better than 8 hours interrupted mid-cycle.' },
      { q: 'How many sleep cycles do I need?', a: 'Most adults function best with 5 full cycles (7.5 hours). Some do fine with 4 cycles (6 hours) short-term. Consistently getting fewer than 4 cycles impairs cognitive performance.' },
      { q: 'What is REM sleep?', a: 'REM (Rapid Eye Movement) sleep is the stage associated with vivid dreaming, emotional memory processing, and creativity. It is most prevalent in the latter half of the night. Missing morning sleep cuts REM time significantly.' },
      { q: 'Does the 90-minute cycle change for everyone?', a: 'Average cycle length ranges from 80-120 minutes. For personal optimization, track how many hours you naturally sleep without an alarm and divide by cycles. Most people\'s cycles cluster around 90 minutes.' },
    ],
    aiQA: [
      { q: 'What time should I go to bed to wake up at 6 AM?', a: 'Ideal bedtimes: 8:45 PM (9h 15min), 10:15 PM (7h 45min), or 11:45 PM (6h 15min), accounting for 15 minutes to fall asleep.' },
      { q: 'How long is a sleep cycle?', a: 'Approximately 90 minutes, ranging from 80-120 minutes depending on the individual.' },
      { q: 'How many hours of sleep do adults need?', a: '7-9 hours per night is the CDC recommendation for adults aged 18-60.' },
      { q: 'Is it bad to wake up during deep sleep?', a: 'Yes — waking during deep (slow-wave) sleep causes the most severe sleep inertia and impairs alertness for up to an hour.' },
      { q: 'What is sleep inertia?', a: 'The groggy, disoriented feeling experienced when waking mid-sleep-cycle. It typically lasts 15-60 minutes and is worst when waking from deep sleep.' },
    ],
  },

  'time-card': {
    quickAnswer: 'The Time Card Calculator totals hours worked from multiple daily time entries, computing regular and overtime hours for any pay period with automatic decimal conversion.',
    whatIs: 'The Time Card Calculator adds up work hours from daily in/out time entries over a week or pay period, automatically computing total regular hours, overtime hours, and gross pay. It supports multiple shifts per day, breaks, and both 40-hour weekly and 8-hour daily overtime rules. Used by employees, employers, and payroll administrators.',
    howToUse: [
      'Enter daily start and end times for each workday.',
      'Enter break durations to subtract for each day.',
      'Enter hourly rate to calculate gross pay.',
      'Click Calculate to see daily and total hours, overtime, and earnings.',
    ],
    formula: 'Daily Hours = End Time - Start Time - Break Time. Weekly Total = Sum of all daily hours. Overtime = Hours above 40 per week (or above 8 per day in California). Gross Pay = (Regular Hours x Rate) + (Overtime Hours x Rate x 1.5).',
    examples: [
      { title: 'Standard Work Week', scenario: 'Mon-Fri: 8:00 AM - 5:00 PM each day, 30-minute lunch. Hourly rate $22.', result: 'Daily hours = 8.5. Weekly = 42.5 hours. Overtime = 2.5 hours at 1.5x. Gross = (40 x $22) + (2.5 x $33) = $965.50.' },
      { title: 'Variable Hours', scenario: 'Mon 6h, Tue 9h, Wed 8h, Thu 10h, Fri 7h. Rate $18/hour.', result: 'Total = 40 hours, no overtime. Gross = $720.' },
    ],
    useCases: [
      'Weekly payroll calculation for hourly employees.',
      'Freelancer invoicing based on tracked time.',
      'Manager verification of submitted timesheets.',
      'Tracking hours toward overtime threshold.',
    ],
    faqs: [
      { q: 'What is the federal overtime rule?', a: 'Under the FLSA, non-exempt employees must receive at least 1.5x their regular rate for hours worked over 40 in a workweek. California also requires daily overtime for hours over 8/day and double time over 12/day.' },
      { q: 'Who is exempt from overtime?', a: 'Employees classified as exempt (executive, administrative, professional, outside sales) earning above the salary threshold (~$684/week in 2024) are not entitled to overtime pay under federal law.' },
      { q: 'How do I convert minutes to hours for payroll?', a: 'Divide minutes by 60. 45 minutes = 0.75 hours. 20 minutes = 0.33 hours. Payroll systems need decimal hours, not HH:MM format.' },
      { q: 'What is a bi-weekly pay period?', a: 'Pay every two weeks, resulting in 26 paychecks per year. Some months have 3 pay periods. Bi-weekly differs from semi-monthly (twice per month = 24 paychecks).' },
      { q: 'Does lunch count as paid work time?', a: 'Typically no. A bona fide meal break (usually 30+ minutes where the employee is completely relieved of work duties) is unpaid. Short breaks under 20 minutes are generally considered paid work time under FLSA.' },
    ],
    aiQA: [
      { q: 'How do I calculate hours worked for payroll?', a: 'Sum daily hours (end - start - breaks) for the pay period, then separate regular vs. overtime hours.' },
      { q: 'What is overtime pay?', a: 'Pay at 1.5x the regular rate for hours worked over 40 per week (or 8 per day in some states).' },
      { q: 'How many hours is full time per week?', a: 'Standard is 40 hours per week in the US.' },
      { q: 'How do I record time on a timesheet?', a: 'Enter daily start and end times, subtract any unpaid breaks, and total for the week.' },
      { q: 'What is double time pay?', a: 'Pay at 2x the regular rate. Required in California for hours over 12/day and the first 8 hours on the 7th consecutive workday.' },
    ],
  },

  'business-days': {
    quickAnswer: 'The Business Days Calculator counts the number of working days (Monday-Friday) between two dates, or adds a specified number of business days to a start date.',
    whatIs: 'The Business Days Calculator computes working days excluding weekends. Many financial, legal, and commercial transactions are measured in business days: bank transfers take 1-3 business days, legal notices may require 10 business days, and shipping estimates often use business days. This calculator handles all these scenarios accurately.',
    howToUse: [
      'Enter your start date.',
      'Either enter an end date to count business days between them, or enter a number of business days to add.',
      'Optionally exclude specific holidays.',
      'Click Calculate to see results.',
    ],
    formula: 'Business Days = Total Calendar Days - (Saturdays + Sundays) in range. Business days do not automatically exclude public holidays unless specified — "business day" in legal contexts often means Mon-Fri regardless of holidays.',
    examples: [
      { title: 'Payment Terms', scenario: 'Invoice dated March 3, 2025. Payment due in "Net 30 business days."', result: '30 business days from March 3 = April 14, 2025 (skipping weekends). Note: some contracts mean 30 calendar days.' },
      { title: 'Legal Notice', scenario: 'Notice served Friday January 10, 2025. Response required in 10 business days.', result: 'Counting from the next business day (Monday Jan 13): 10 business days = January 27, 2025.' },
    ],
    useCases: [
      'Calculating invoice due dates with "Net 30/60/90 business days" terms.',
      'Legal notice response deadlines.',
      'Bank transfer arrival estimates.',
      'Project milestone scheduling excluding weekends.',
    ],
    faqs: [
      { q: 'What is the difference between calendar days and business days?', a: 'Calendar days count all 7 days per week. Business days count only Monday-Friday (5 days per week). 10 calendar days includes 2 weekends; 10 business days is exactly 2 work weeks.' },
      { q: 'Do business days include holidays?', a: 'In common usage, business days mean Mon-Fri. Whether public holidays count depends on the contract or regulation. Some define "business day" as any Mon-Fri on which banks are open, excluding federal holidays.' },
      { q: 'What does Net 30 mean?', a: 'Net 30 means payment is due 30 days after the invoice date. Most often this means 30 calendar days, not business days. Always clarify in contracts whether the term is calendar or business days.' },
      { q: 'What is T+2 settlement?', a: 'In financial markets, T+2 means a transaction settles 2 business days after the trade date. The US stock market moved from T+3 to T+2 in 2017 and is transitioning to T+1 in 2024.' },
      { q: 'How many business days are in a year?', a: 'Approximately 261 business days per year (365 days minus 52 Saturdays and 52 Sundays). Subtracting 10-11 federal holidays gives approximately 250 business days.' },
    ],
    aiQA: [
      { q: 'How many business days in a week?', a: '5 business days (Monday through Friday).' },
      { q: 'What is 10 business days from today?', a: 'Approximately 2 weeks from today, skipping weekends.' },
      { q: 'Do business days include Saturday?', a: 'No. Business days are Monday through Friday only.' },
      { q: 'How many business days in a month?', a: 'Approximately 20-23, depending on the month and how weekends fall.' },
      { q: 'What does 3 business days mean for shipping?', a: 'If ordered Monday, expect delivery Thursday. If ordered Thursday, delivery is Monday or Tuesday of the following week.' },
    ],
  },

  'birthday': {
    quickAnswer: 'The Birthday Calculator tells you what day of the week you were born, how many days until your next birthday, and fun birthday facts for any date.',
    whatIs: 'The Birthday Calculator determines the day of the week for any date of birth, counts down to the next birthday, calculates the total days lived, and provides interesting birthday facts like birth stone, zodiac sign, and famous people born on the same date. It turns a birthday into a rich, contextual experience.',
    howToUse: [
      'Enter your date of birth.',
      'Click Calculate to see your birth day of the week, days until next birthday, total days lived, and birthday facts.',
    ],
    formula: 'Day of Week: Use Zeller\'s congruence or Tomohiko Sakamoto\'s algorithm. Days to Next Birthday: Days from today to next occurrence of birth month/day. Total Days Lived: Today - Birthdate in days.',
    examples: [
      { title: 'Birthday Facts', scenario: 'Born April 15, 1990.', result: 'Born on a Sunday. 30,000 days old on approximately June 18, 2072. Zodiac: Aries. Birthstone: Diamond.' },
      { title: 'Countdown', scenario: 'Born November 8. Today is September 1.', result: '68 days until your next birthday.' },
    ],
    useCases: [
      'Satisfying curiosity about birth day of week.',
      'Birthday countdown for personal or party planning.',
      'Teaching children about dates and calendars.',
      'Fun facts for birthday cards and social media posts.',
    ],
    faqs: [
      { q: 'What is the most common birth date?', a: 'September 9 is the most common birthday in the US. September is the most common birth month — conception typically peaks in late December and the holiday season.' },
      { q: 'What is the rarest birthday?', a: 'February 29 (leap day) is the rarest, occurring only every 4 years. Among common dates, Christmas (Dec 25) and New Year\'s (Jan 1) are unusually rare due to planned C-section and induction avoidance.' },
      { q: 'What day was I born if born in 1985?', a: 'Use this calculator — enter your exact birthdate to see the specific day of the week you were born.' },
      { q: 'What is the Chinese zodiac?', a: 'The Chinese zodiac assigns one of 12 animals (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig) to each year in a repeating 12-year cycle.' },
      { q: 'What is a golden birthday?', a: 'A golden birthday occurs when you turn the age matching your birth date. Born on the 17th? Your golden birthday is when you turn 17. Born on the 3rd? It\'s when you turn 3.' },
    ],
    aiQA: [
      { q: 'What day of the week was I born?', a: 'Enter your birthdate in this calculator to find out instantly.' },
      { q: 'How many days until my birthday?', a: 'Enter your birthday to get a countdown to your next birthday.' },
      { q: 'What is my zodiac sign?', a: 'Zodiac signs are based on your birth month/day. Aries: Mar 21-Apr 19, Taurus: Apr 20-May 20, etc.' },
      { q: 'What is the most popular birthday month?', a: 'September is the most common birth month in the US, particularly mid-September.' },
      { q: 'How many days old am I?', a: 'This calculator computes your exact age in days from your birthdate to today.' },
    ],
  },

  'years': {
    quickAnswer: 'The Years Between Dates Calculator computes the number of complete years (and remaining months) separating two dates. It correctly handles partial years and leap years.',
    whatIs: 'The Years Between Dates Calculator determines the number of full years elapsed between two dates, along with any remaining months and days. It is used for calculating age, experience durations on resumes, years in business, investment holding periods, and any measurement requiring complete-year counts.',
    howToUse: [
      'Enter the start date.',
      'Enter the end date.',
      'Click Calculate to see complete years, remaining months, and remaining days.',
    ],
    formula: 'Complete Years = Subtract years, check if birth month/day has passed in the end year. Remaining Months = Months since the last complete year anniversary. Days = Days since the last complete month. Example: Feb 15, 2015 to Nov 10, 2024 = 9 years, 8 months, 24 days.',
    examples: [
      { title: 'Resume Experience', scenario: 'Job started July 1, 2018. Left April 30, 2024.', result: '5 years, 10 months at the company.' },
      { title: 'Investment Holding', scenario: 'Stock bought September 12, 2019. Sold March 5, 2025.', result: '5 years, 5 months, 21 days held.' },
    ],
    useCases: [
      'Calculating years of experience for job applications.',
      'Determining investment holding period for tax purposes.',
      'Computing years in business for anniversary celebrations.',
      'Age calculation in years for legal or administrative purposes.',
    ],
    faqs: [
      { q: 'How do I calculate years between two dates exactly?', a: 'Subtract the earlier year from the later year, then check if the anniversary has passed in the current year. If not, subtract 1. This calculator handles all edge cases automatically.' },
      { q: 'What is a capital gains holding period?', a: 'In US tax law, long-term capital gains apply to assets held more than 1 year (365+ days). Short-term gains (held 1 year or less) are taxed as ordinary income. The holding period calculation is critical for tax strategy.' },
      { q: 'How many years is 10,000 days?', a: '10,000 days / 365.25 = approximately 27.4 years.' },
      { q: 'Does a leap year affect the year count?', a: 'Leap years affect the day count but not typically the complete-year count, unless your start or end date is February 29. The calculator handles all these edge cases.' },
      { q: 'How is a work anniversary calculated?', a: 'A work anniversary marks the same month and day as the start date in subsequent years. After exactly 5 years from a March 1 start, the anniversary falls on March 1 five years later.' },
    ],
    aiQA: [
      { q: 'How many years between 2010 and 2025?', a: '15 years.' },
      { q: 'How do I calculate years of experience?', a: 'Subtract your start date from your end date to get complete years and remaining months.' },
      { q: 'How many years is 5,000 days?', a: 'Approximately 13.7 years.' },
      { q: 'What is a decade?', a: '10 years.' },
      { q: 'How many years between 1990 and 2024?', a: '34 years.' },
    ],
  },

  'time-calculator': {
    quickAnswer: 'The Time Calculator adds and subtracts hours, minutes, and seconds. It handles time operations that span multiple days, with both clock time and total duration modes.',
    whatIs: 'The Time Calculator performs arithmetic on time values — adding or subtracting hours, minutes, and seconds. It is useful for calculating total project time from multiple durations, adding travel time to departure time to find arrival, or summing recorded work sessions. It handles overflow (where minutes exceed 60) automatically.',
    howToUse: [
      'Enter the first time value (hours, minutes, seconds).',
      'Select addition (+) or subtraction (-).',
      'Enter the second time value.',
      'Click Calculate to see the result in H:MM:SS format.',
      'Add multiple time values together for total duration.',
    ],
    formula: 'Convert all values to seconds, perform arithmetic, then convert back. Total Seconds = (hours x 3600) + (minutes x 60) + seconds. Result = Total Seconds converted to H:MM:SS. Example: 2h 45min + 1h 30min = 4h 15min.',
    examples: [
      { title: 'Travel Planning', scenario: 'Departure 7:30 AM. Drive 2h 15min. What is arrival?', result: 'Arrival = 9:45 AM.' },
      { title: 'Total Project Time', scenario: 'Day 1: 2h 45min. Day 2: 3h 20min. Day 3: 1h 55min. Total?', result: 'Total = 8h 0min.' },
    ],
    useCases: [
      'Adding drive, flight, and layover times for total travel duration.',
      'Summing project time entries for invoicing.',
      'Calculating cumulative race or competition time from splits.',
      'Adding cooking times to find when a multi-course meal is ready.',
    ],
    faqs: [
      { q: 'How do I add time values?', a: 'Convert all to the smallest unit (seconds or minutes), add, then convert back. This calculator does it automatically — just enter each value and click Calculate.' },
      { q: 'What if my time calculation results in more than 24 hours?', a: 'The calculator displays total hours beyond 24 (e.g., 25:30:00 for 25 hours 30 minutes) when used in duration mode. In clock mode, it wraps around to the next day.' },
      { q: 'How do I subtract time?', a: 'Same as addition but select the subtraction operator. If the result would be negative (subtracting a larger duration), some modes show the absolute value or display an error — ensure your values are in the correct order.' },
      { q: 'What is a time segment for video editing?', a: 'Video timecode (HH:MM:SS:FF) adds frames. At 30fps, 1 second = 30 frames. This calculator handles standard time without frames — use specialized video software for frame-accurate timecode.' },
      { q: 'How do I convert hours and minutes to decimal hours?', a: 'Decimal Hours = Hours + (Minutes / 60). Example: 2h 45min = 2 + 45/60 = 2.75 decimal hours.' },
    ],
    aiQA: [
      { q: 'How do I add 1 hour 30 minutes to 2:45 PM?', a: '2:45 PM + 1h 30min = 4:15 PM.' },
      { q: 'What is 3 hours 20 minutes plus 2 hours 50 minutes?', a: '6 hours 10 minutes.' },
      { q: 'How do I convert 150 minutes to hours?', a: '150 / 60 = 2.5 hours (2 hours 30 minutes).' },
      { q: 'What is 8 hours minus 2 hours 45 minutes?', a: '5 hours 15 minutes.' },
      { q: 'How do I add multiple time durations?', a: 'Enter all durations into this calculator one at a time, adding each to the running total.' },
    ],
  },

  'age-difference': {
    quickAnswer: 'The Age Difference Calculator computes the exact age gap between two people or dates in years, months, and days. Simply enter both birthdates.',
    whatIs: 'The Age Difference Calculator finds the exact age gap between two people by comparing their dates of birth. It returns the difference in years, months, and days, along with which person is older and by how much. Used for family planning discussions, relationship curiosity, celebrity comparisons, and historical analysis.',
    howToUse: [
      'Enter the first person\'s date of birth.',
      'Enter the second person\'s date of birth.',
      'Click Calculate to see the age difference in years, months, and days.',
    ],
    formula: 'Age Difference = |Date1 - Date2|. Find the older date, then calculate years, months, and days elapsed until the younger date. Example: Born Jan 5, 1985 and April 20, 1990 = 5 years 3 months 15 days apart.',
    examples: [
      { title: 'Siblings', scenario: 'First child born March 12, 2010. Second born July 5, 2013.', result: 'Age difference: 3 years, 3 months, 23 days.' },
      { title: 'Couple', scenario: 'Partner A born February 20, 1988. Partner B born November 3, 1991.', result: 'Age difference: 3 years, 8 months, 11 days.' },
    ],
    useCases: [
      'Finding the exact age gap between siblings or twins.',
      'Comparing ages of historical figures at the same event.',
      'Relationship compatibility curiosity.',
      'Medical or developmental age-gap analysis.',
    ],
    faqs: [
      { q: 'What is the average age difference between siblings?', a: 'In the US, the average age gap between siblings is about 2-3 years. The most common planned gap is 2 years, giving the first child time to develop before a new baby arrives.' },
      { q: 'What is the typical age gap in couples?', a: 'Most heterosexual couples have an age gap of 1-5 years, with the male typically slightly older. Median age difference in US marriages is about 2 years.' },
      { q: 'Does age difference matter in relationships?', a: 'Research suggests relationships with larger age gaps (10+ years) face more social challenges but can be equally successful. The key factors are life stage compatibility and shared values, not years alone.' },
      { q: 'How is age difference measured for twins?', a: 'Twins born on the same date have zero age difference. For twins born around midnight straddling two dates, their ages may differ by one day (technically) though they are considered the same age.' },
      { q: 'What is the Irish twins age gap?', a: 'Irish twins refers to siblings born within 12 months of each other (one pregnancy following the next almost immediately). The calculator can show any age gap down to the day.' },
    ],
    aiQA: [
      { q: 'How do I calculate the age difference between two people?', a: 'Subtract the earlier birthdate from the later birthdate to get years, months, and days apart.' },
      { q: 'What is a 10-year age gap?', a: 'One person was born 10 years before the other. At ages 30 and 40, the gap is 10 years; at 50 and 60, still 10 years.' },
      { q: 'How old is someone born in 1985 compared to someone born in 2000?', a: '15 years younger (born in 2000) vs. older (born in 1985). In 2025, they are 40 and 25.' },
      { q: 'Can you calculate age difference in days?', a: 'Yes — use the days-between-dates calculator with both birthdates for a day count.' },
      { q: 'How much older is someone born on March 1 vs. December 31 of the same year?', a: 'The March 1 person is 9 months older in the same calendar year.' },
    ],
  },

  'day-counter': {
    quickAnswer: 'The Day Counter calculates the number of days from today until a future date, or how many days ago a past date occurred. Enter any date for an instant countdown or day count.',
    whatIs: 'The Day Counter calculates the number of days from today to any future date (countdown) or from any past date to today (elapsed days). It is used for event countdowns, deadline tracking, anniversary counts, product launch countdowns, and tracking milestones.',
    howToUse: [
      'Enter the target date (past or future).',
      'Click Calculate to see days until or since that date.',
      'Optionally select to show only business days in the countdown.',
    ],
    formula: 'Days Until = Target Date - Today. Days Since = Today - Past Date. The result is always a positive number, with the direction (until/since) determined by which date is earlier.',
    examples: [
      { title: 'Product Launch Countdown', scenario: 'Product launches November 15, 2025. Today is March 1, 2025.', result: '259 days until launch.' },
      { title: 'Milestone Anniversary', scenario: 'Company founded June 3, 2015. Today is June 3, 2025.', result: 'Exactly 10 years since founding. 3,652 days in business.' },
    ],
    useCases: [
      'Event countdown timers for websites and apps.',
      'Personal milestone tracking (sobriety, fitness goals, saving goals).',
      'Deadline awareness for projects and submissions.',
      'Holiday and special occasion countdowns.',
    ],
    faqs: [
      { q: 'What is a countdown timer?', a: 'A countdown timer counts down to a future event, updating the days (and sometimes hours/minutes/seconds) remaining. Day counters typically show full days only, while timers show real-time precision.' },
      { q: 'How do I track days sober?', a: 'Enter your sobriety start date. The day counter shows how many consecutive days you have been sober. Many recovery programs use milestone days (30, 60, 90, 100, 365 days) as significant achievements.' },
      { q: 'How many days until the New Year?', a: 'Use this calculator with December 31 as the target date. The number of days until December 31 shows the countdown to New Year\'s Eve.' },
      { q: 'How many days since a historical event?', a: 'Enter the historical date and the calculator shows elapsed days from then to today. For example, entering the Moon landing date (July 20, 1969) shows thousands of days elapsed.' },
      { q: 'Can I add this to my website?', a: 'CalcSpark\'s calculators are browser-based. For your website, embed a dedicated countdown timer widget or use a JavaScript library like Countdown.js for custom implementations.' },
    ],
    aiQA: [
      { q: 'How many days until Christmas?', a: 'Use this calculator with December 25 as your target date.' },
      { q: 'How many days until New Year?', a: 'Enter December 31 of the current year.' },
      { q: 'How many days have passed since January 1, 2020?', a: 'As of early 2025, approximately 1,826-1,827 days since January 1, 2020.' },
      { q: 'How many days until my birthday?', a: 'Enter your next birthday in the calculator.' },
      { q: 'How many days in a year?', a: '365 days in a common year, 366 in a leap year.' },
    ],
  },

  'chronological-age': {
    quickAnswer: 'Chronological age is your exact age in years, months, and days from birth to today. It is used in medical, educational, and developmental assessments requiring precise age measurement.',
    whatIs: 'The Chronological Age Calculator computes precise age for clinical, educational, and developmental purposes. Unlike casual age (just years), chronological age in months and days is critical for pediatric development milestones, school enrollment eligibility, developmental screening, speech therapy assessments, and early childhood education placement. It uses the standard date-subtraction method validated in clinical practice.',
    howToUse: [
      'Enter the child\'s (or person\'s) date of birth.',
      'Enter the assessment or reference date.',
      'Click Calculate to see chronological age in years, months, and days.',
      'Use the result for developmental milestone comparisons.',
    ],
    formula: 'Chronological Age = Reference Date - Birth Date. Years = complete calendar years. Months = complete months in the current year. Days = remaining days. Important for developmental screening: a 2-year-old assessed at 2 years 3 months may perform differently than at exactly 2 years 0 months.',
    examples: [
      { title: 'Pediatric Assessment', scenario: 'Child born August 14, 2022. Assessment date March 5, 2025.', result: 'Chronological age: 2 years, 6 months, 19 days. Developmental milestone charts use this exact age.' },
      { title: 'School Enrollment', scenario: 'Child born September 30, 2019. Kindergarten cutoff date: September 1, 2024.', result: 'Age on Sep 1: 4 years, 11 months, 2 days — just under 5 years. May not meet the 5-year-old cutoff in some states.' },
    ],
    useCases: [
      'Pediatric developmental milestone assessments.',
      'Special education eligibility determination.',
      'Speech and language therapy baseline establishment.',
      'School enrollment age eligibility checks.',
    ],
    faqs: [
      { q: 'Why does chronological age matter in child development?', a: 'Developmental milestones (walking, talking, reading) are age-referenced. A child\'s chronological age in months determines which milestones they should have achieved, making precise age critical for accurate developmental screening and early intervention.' },
      { q: 'What is adjusted age (corrected age)?', a: 'For premature babies, adjusted age = chronological age - weeks premature. A baby born 2 months early at 10 months old has an adjusted age of 8 months. Developmental milestones should be compared to adjusted, not chronological age, until about age 2.' },
      { q: 'How is age calculated for kindergarten cutoff?', a: 'Most US states require children to be 5 years old by a specific cutoff date (September 1 is most common). The child\'s age on that date determines eligibility for the school year.' },
      { q: 'What are developmental milestone charts?', a: 'Charts produced by pediatric organizations (CDC, AAP) listing typical ages (in months) for skills like sitting (6 months), walking (12 months), and speaking (12-18 months). They use chronological age as the reference.' },
      { q: 'What is the difference between chronological age and mental age?', a: 'Chronological age is calendar age since birth. Mental age is a historical concept from IQ testing — the age level at which someone performs. IQ was originally calculated as mental age / chronological age x 100.' },
    ],
    aiQA: [
      { q: 'What is chronological age?', a: 'Chronological age is the actual calendar age since birth, measured in years, months, and days.' },
      { q: 'How do I calculate a child\'s age in months?', a: 'This calculator gives exact months. Or multiply complete years by 12 and add remaining complete months.' },
      { q: 'What is adjusted age for premature babies?', a: 'Corrected age = chronological age minus weeks born premature. Used for developmental milestone tracking.' },
      { q: 'What age is a child in kindergarten?', a: 'Most US kindergartners are 5-6 years old. Cutoff dates typically require the child to be 5 by September 1 of the school year.' },
      { q: 'How precise should chronological age be for developmental screening?', a: 'Year and month is typically sufficient for most milestone charts. Days matter for neonatal and very early childhood assessments.' },
    ],
  },

  'time-duration-with-breaks': {
    quickAnswer: 'The Time Duration with Breaks Calculator computes net work time by subtracting scheduled breaks from total time on the clock. Ideal for timesheets, billing, and break management.',
    whatIs: 'The Time Duration with Breaks Calculator computes net worked time by subtracting one or more break periods from a total clock span. It supports multiple break entries (morning break, lunch, afternoon break) and correctly handles partial hours for payroll purposes. Employers, employees, and freelancers use it to track billable hours excluding non-work time.',
    howToUse: [
      'Enter your shift start and end time.',
      'Enter each break: start time and end time (or duration in minutes).',
      'Click Calculate to see gross time, total break time, and net worked time.',
    ],
    formula: 'Net Time = (End Time - Start Time) - Sum of all break durations. Convert to decimal hours for payroll: Decimal Hours = Total Minutes / 60. Example: 9 AM to 6 PM = 9h. Breaks: 30 min lunch + 15 min afternoon = 45 min. Net = 8h 15min = 8.25 hours.',
    examples: [
      { title: 'Office Worker', scenario: 'Start 8:00 AM, End 5:30 PM. Breaks: 30-min lunch, 10-min morning, 10-min afternoon.', result: 'Gross = 9.5h. Total breaks = 50 min. Net worked = 8h 40min = 8.67 decimal hours.' },
      { title: 'Freelancer', scenario: 'Clocked in 10:00 AM, out 4:45 PM. One 25-minute break.', result: 'Gross = 6h 45min. Net billable = 6h 20min = 6.33 hours.' },
    ],
    useCases: [
      'Accurate hourly payroll calculation with multiple break deductions.',
      'Freelance billing excluding non-billable break time.',
      'Tracking compliance with mandatory break laws.',
      'Restaurant and retail staff timesheet management.',
    ],
    faqs: [
      { q: 'Are breaks required by law?', a: 'Federal law (FLSA) does not require meal or rest breaks but mandates that short breaks (typically under 20 minutes) be paid. California and some states require a 30-minute unpaid meal break for shifts over 5 hours and a paid 10-minute rest break for every 4 hours.' },
      { q: 'What is the difference between paid and unpaid breaks?', a: 'Paid breaks (usually 15-minute rest breaks) are counted as work time and included in total hours worked. Unpaid meal breaks (usually 30+ minutes where employee is completely off duty) are deducted from total hours.' },
      { q: 'How do I handle working through lunch?', a: 'If you worked through lunch, do not deduct a break. Your payroll should reflect the full time worked. However, most employers require proper meal breaks — check company policy and local labor laws.' },
      { q: 'How do I track break times accurately?', a: 'Note the exact clock time when breaks start and end. Even 5 minutes matters over many shifts. Many time-tracking apps (Toggl, Clockify) have break-tracking features built in.' },
      { q: 'What is the minimum meal break length?', a: 'Most labor laws requiring breaks specify 30 minutes as the minimum unpaid meal break (e.g., California, many EU countries). Under 30 minutes generally must be paid under FLSA if the employee cannot fully disengage from duties.' },
    ],
    aiQA: [
      { q: 'How do I calculate time worked minus breaks?', a: 'Total shift time minus all break durations equals net worked time.' },
      { q: 'Is a lunch break paid or unpaid?', a: 'Typically unpaid if 30+ minutes and the employee is fully relieved of duties. Short breaks under 20 minutes are usually paid.' },
      { q: 'How many hours is 9 AM to 5 PM minus 30 minutes lunch?', a: '8 hours minus 0.5 hours = 7.5 hours worked.' },
      { q: 'What is the standard lunch break length?', a: '30-60 minutes is the most common lunch break length in the US. 30 minutes is the minimum typically required for unpaid status.' },
      { q: 'How do I convert 8 hours 45 minutes to decimal?', a: '8 + 45/60 = 8.75 decimal hours.' },
    ],
  },

  'shift-calculator': {
    quickAnswer: 'The Shift Calculator computes your earnings for a work shift based on start time, end time, hourly rate, and any premium rates for nights, weekends, or overtime.',
    whatIs: 'The Shift Calculator computes gross pay for a single work shift or across a 5-7 day schedule, accounting for standard pay, night shift differentials, weekend premiums, and daily overtime. It is used by hourly workers, shift managers, and payroll departments to verify earnings, plan budgets, and schedule staff cost-effectively.',
    howToUse: [
      'Enter shift start and end times for each day of the week.',
      'Enter your base hourly rate.',
      'Enable night shift differential or weekend premium if applicable.',
      'Click Calculate to see daily and weekly earnings breakdown.',
    ],
    formula: 'Shift Pay = Hours Worked x Base Rate + (Premium Hours x Premium Rate). Night premium typically 10-25% extra. Weekend premium 5-25% extra. Overtime = hours over 8/day or 40/week at 1.5x rate.',
    examples: [
      { title: '12-Hour Night Shift', scenario: '7 PM to 7 AM. Rate $20/hour. Night premium 15%.', result: 'Regular 8h = $160. Night premium 4h = $80 + $12 = $92. Total shift pay = $252.' },
      { title: '5-Day Rotation', scenario: 'Mon-Fri 8-hour shifts at $18/hour. One 10-hour Saturday at time-and-a-half.', result: 'Weekday: 40h x $18 = $720. Saturday: 8h x $27 + 2h OT = $216 + $54 = $270. Weekly total = $990.' },
    ],
    useCases: [
      'Verifying expected paycheck before it arrives.',
      'Comparing the value of different shift assignments.',
      'Budgeting personal income from variable shift schedules.',
      'Managers estimating staffing cost for different shift configurations.',
    ],
    faqs: [
      { q: 'What is a shift differential?', a: 'A shift differential is extra pay for working less desirable hours — evenings, nights, or weekends. Typically 10-25% above the base rate. The exact differential is set by company policy or union contract, not federal law.' },
      { q: 'Are all night shift workers paid a differential?', a: 'No. Shift differentials are not legally required — they are a compensation tool used by employers to attract workers to less desirable shifts. About 7% of US workers receive shift differential pay.' },
      { q: 'What is the typical night shift differential?', a: 'Typically 5-25% above the base pay rate. Healthcare often pays 15-20%. Government and manufacturing often 7-12%. Some roles offer flat-dollar differentials ($1-3/hour extra).' },
      { q: 'How does a rotating shift schedule work?', a: 'Rotating shifts cycle workers through different shift times (day, evening, night) on a regular schedule. Common patterns: 2-2-3 (Panama), 4-on-4-off, and DuPont (4-week rotation). They distribute undesirable hours equitably.' },
      { q: 'What is a split shift?', a: 'A split shift divides a single workday into two or more distinct periods. For example, 7-11 AM and 3-7 PM. California requires a split shift premium equal to at least the state minimum wage for one additional hour.' },
    ],
    aiQA: [
      { q: 'What is a shift differential?', a: 'Extra pay (typically 10-25% more) for working evening, night, or weekend shifts.' },
      { q: 'How do I calculate my shift pay?', a: 'Hours worked x hourly rate, plus any applicable differential or overtime.' },
      { q: 'What is time and a half?', a: '1.5x your regular hourly rate. Required for overtime (hours over 40/week under federal law).' },
      { q: 'What is double time pay?', a: '2x your regular rate. Required in California for hours over 12/day and on the 7th consecutive workday.' },
      { q: 'How much more does a night shift pay?', a: 'Typically 10-25% more than day shift, though this varies by employer and industry.' },
    ],
  },

  'payroll-hours': {
    quickAnswer: 'The Payroll Hours Calculator adds up work hours from HH:MM time entries for a pay period and computes gross pay including regular and overtime hours.',
    whatIs: 'The Payroll Hours Calculator is designed for small business owners and HR teams to compute employee payroll quickly. It accepts clock-in and clock-out times in HH:MM format, automatically subtracts breaks, separates regular from overtime hours, and computes gross pay. It supports weekly, bi-weekly, and semi-monthly pay periods.',
    howToUse: [
      'Enter clock-in and clock-out times for each workday.',
      'Specify break durations if applicable.',
      'Enter the employee\'s hourly rate.',
      'Select the pay period (weekly, bi-weekly, semi-monthly).',
      'Click Calculate to see total hours, overtime, and gross pay.',
    ],
    formula: 'Payroll Gross = (Regular Hours x Rate) + (Overtime Hours x Rate x 1.5). Regular Hours = MIN(Total Hours, 40) per week. Overtime Hours = MAX(0, Total Hours - 40) per week. Daily and weekly overtime rules vary by state.',
    examples: [
      { title: 'Bi-Weekly Payroll', scenario: 'Week 1: 43 hours. Week 2: 38 hours. Rate $17/hour.', result: 'Week 1: 40 regular x $17 = $680 + 3 OT x $25.50 = $76.50. Week 2: 38 x $17 = $646. Bi-weekly gross = $1,402.50.' },
      { title: 'Part-Time Employee', scenario: '3 days: 6h, 7h, 6.5h per week. Rate $15/hour.', result: 'Total 19.5 hours. All regular (under 40). Gross = $292.50.' },
    ],
    useCases: [
      'Small business weekly payroll processing.',
      'Tracking hours and pay for multiple employees.',
      'Employee self-verification of expected paycheck.',
      'Converting HH:MM timesheet entries to decimal for accounting software.',
    ],
    faqs: [
      { q: 'What payroll software integrates with time tracking?', a: 'QuickBooks Payroll, Gusto, ADP, and Rippling all integrate with time tracking apps. For small teams, manual entry using this calculator is often sufficient before investing in integrated software.' },
      { q: 'What is the difference between weekly and bi-weekly payroll?', a: 'Weekly = 52 paychecks/year. Bi-weekly = 26 paychecks/year (every 2 weeks). Semi-monthly = 24 paychecks/year (twice per month: 1st and 15th). Bi-weekly is most common in the US (36% of employers).' },
      { q: 'How do I handle employees who work across two workweeks?', a: 'Overtime is calculated per workweek (a fixed 7-day period defined by the employer), not per pay period. A bi-weekly pay period still requires overtime calculation for each individual workweek within it.' },
      { q: 'What is a workweek?', a: 'A fixed, regularly recurring period of 168 hours (7 consecutive 24-hour periods). The workweek does not need to start on Sunday — an employer can define it as any day. Overtime is calculated within each workweek independently.' },
      { q: 'Do I need to round time entries?', a: 'Many employers round to the nearest 5, 6, or 15 minutes. The FLSA allows rounding if it is neutral (rounds up and down equally over time). Precise time tracking without rounding is always acceptable and avoids potential compliance issues.' },
    ],
    aiQA: [
      { q: 'How do I calculate payroll hours?', a: 'Sum daily work hours (end - start - breaks), separate regular vs. overtime, then multiply by hourly rate.' },
      { q: 'How many hours is full-time per year?', a: 'Approximately 2,080 hours (40h/week x 52 weeks).' },
      { q: 'What is a semi-monthly pay period?', a: 'Pay twice per month, typically on the 1st and 15th, resulting in 24 paychecks per year.' },
      { q: 'How is overtime calculated for salaried employees?', a: 'Non-exempt salaried employees below the FLSA threshold are entitled to overtime at 1.5x their equivalent hourly rate for hours over 40/week.' },
      { q: 'How do I convert HH:MM to decimal hours for payroll?', a: 'Divide minutes by 60 and add to hours. 7:45 = 7 + 45/60 = 7.75 hours.' },
    ],
  },

  'overtime': {
    quickAnswer: 'Overtime pay is 1.5x your regular rate for hours worked over 40 per week (federal). Some states require daily overtime. This calculator computes your overtime earnings from regular and overtime hours.',
    whatIs: 'The Overtime Calculator computes total pay including overtime premium for hourly employees. It separates regular and overtime hours, applies the appropriate multiplier (1.5x for time-and-a-half, 2x for double time), and calculates gross pay. It supports both federal FLSA rules and state-specific rules like California\'s daily overtime.',
    howToUse: [
      'Enter your regular hourly rate.',
      'Enter total hours worked during the week.',
      'Select your overtime rule (federal: over 40/week, or state: over 8/day).',
      'Click Calculate to see regular pay, overtime pay, and total gross.',
    ],
    formula: 'Federal Overtime: Regular Pay = MIN(hours, 40) x rate. OT Pay = MAX(0, hours - 40) x rate x 1.5. CA Daily OT: First 8h/day = regular. Hours 8-12/day = 1.5x. Over 12h/day = 2x. 7th consecutive day: first 8h = 1.5x, over 8h = 2x.',
    examples: [
      { title: 'Federal FLSA', scenario: '45 hours worked in a week at $20/hour.', result: 'Regular: 40h x $20 = $800. OT: 5h x $30 = $150. Total gross = $950.' },
      { title: 'California Daily OT', scenario: 'Worked 10 hours on Monday at $22/hour.', result: 'Regular: 8h x $22 = $176. OT: 2h x $33 = $66. Daily total = $242 (vs. $220 at straight time).' },
    ],
    useCases: [
      'Verifying expected paycheck after a week of overtime.',
      'Planning how extra hours impact weekly take-home pay.',
      'Understanding state-specific overtime rules beyond federal FLSA.',
      'Comparing the cost of overtime vs. hiring additional part-time staff.',
    ],
    faqs: [
      { q: 'What is the FLSA overtime rule?', a: 'The Fair Labor Standards Act requires non-exempt employees to receive 1.5x their regular rate for all hours over 40 in a workweek. This applies regardless of whether the 41st hour occurs on the same day as previous hours.' },
      { q: 'Do salaried employees get overtime?', a: 'Non-exempt salaried employees earning below the FLSA threshold (~$684/week in 2024) are entitled to overtime. Exempt employees (managerial, professional, earning above threshold) are not entitled to OT pay.' },
      { q: 'What states have daily overtime rules?', a: 'California is the primary state with daily overtime (over 8 hours in a day). Alaska and Nevada also have daily overtime provisions. Most other states follow only the federal weekly overtime rule.' },
      { q: 'What is the regular rate of pay for overtime purposes?', a: 'The regular rate includes base pay plus most additional compensation (production bonuses, shift differentials, non-discretionary bonuses). Certain payments are excluded: discretionary bonuses, holiday gifts, and expense reimbursements.' },
      { q: 'Can my employer require me to work overtime?', a: 'Generally yes, unless you have a contract or CBA limiting it. Employees can be disciplined or terminated for refusing mandatory overtime in most states. However, there are limits in certain industries (healthcare, trucking) and for minors.' },
    ],
    aiQA: [
      { q: 'What is overtime pay?', a: '1.5x your regular hourly rate for hours worked over 40 in a workweek (federal standard).' },
      { q: 'How is overtime calculated?', a: 'Overtime pay = (Total hours - 40) x Hourly rate x 1.5.' },
      { q: 'What is time and a half?', a: '1.5 times your regular pay rate. If you earn $20/hour, time and a half is $30/hour.' },
      { q: 'At what point does overtime kick in?', a: 'Under federal law, after 40 hours per workweek. California: after 8 hours per day.' },
      { q: 'Do I get overtime if I work 8 hours on Saturday after a 40-hour week?', a: 'Under federal law, yes — those 8 Saturday hours are overtime hours. Under California law, even those 8 Saturday hours have daily OT rules applied.' },
    ],
  },
};
