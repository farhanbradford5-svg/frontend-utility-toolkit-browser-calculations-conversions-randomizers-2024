import type { ToolSEOMap } from './index';

export const BUSINESS_SEO: ToolSEOMap = {
  'roi': {
    quickAnswer: 'ROI (Return on Investment) measures how much profit you made relative to the cost of an investment, expressed as a percentage. Use this calculator to instantly evaluate any project, campaign, or expense.',
    whatIs: 'The ROI Calculator is a free online tool that computes return on investment as a percentage from your net profit and investment cost. It is the most universally used financial metric in business, marketing, and investment analysis. Businesses use ROI to compare projects, justify budgets, and evaluate whether past spending delivered value.',
    howToUse: [
      'Enter the total investment cost (what you spent).',
      'Enter the total return or revenue generated from that investment.',
      'Click Calculate to see your ROI percentage and net profit.',
      'Compare scenarios by adjusting inputs to find the most profitable option.',
    ],
    formula: 'ROI = ((Return - Investment) / Investment) x 100. Example: You invested $5,000 and earned $8,000 back. ROI = ((8,000 - 5,000) / 5,000) x 100 = 60%. For every dollar spent, you gained $0.60 in profit.',
    examples: [
      {
        title: 'Marketing Campaign',
        scenario: 'A business spends $10,000 on paid ads and generates $35,000 in attributed revenue.',
        result: 'ROI = ((35,000 - 10,000) / 10,000) x 100 = 250%. The campaign returned $2.50 for every $1 spent.',
      },
      {
        title: 'Equipment Purchase',
        scenario: 'A factory buys a $50,000 machine that generates $70,000 in additional output over 2 years.',
        result: 'ROI = ((70,000 - 50,000) / 50,000) x 100 = 40% over 2 years.',
      },
    ],
    useCases: [
      'Evaluating marketing campaigns and ad spend efficiency.',
      'Comparing capital expenditure proposals before board approval.',
      'Calculating returns on real estate, stocks, and business investments.',
      'Justifying new hires, software purchases, or business expansions to stakeholders.',
    ],
    faqs: [
      { q: 'What is a good ROI percentage?', a: 'It depends on the context. For stock investments, 7-10% annually is solid. For marketing campaigns, 200-500% is common. For business projects, most target at least 20%. The higher the risk, the higher the expected ROI should be.' },
      { q: 'Can ROI be negative?', a: 'Yes. A negative ROI means the investment lost money. If you spent $1,000 and only got $700 back, your ROI is -30%. This signals the investment was not worthwhile and should be reconsidered.' },
      { q: 'Does basic ROI account for time?', a: 'No. Basic ROI does not adjust for how long the investment takes. A 50% ROI over 10 years is far less impressive than 50% in one year. For time-adjusted analysis, use annualized ROI or IRR (Internal Rate of Return).' },
      { q: 'What is annualized ROI?', a: 'Annualized ROI = ((1 + ROI)^(1/years) - 1) x 100. It normalizes returns to a yearly rate so you can compare investments held for different time periods fairly.' },
      { q: 'What is the difference between ROI and profit margin?', a: 'Profit margin = (Profit / Revenue) x 100 and measures how much of each dollar of revenue is profit. ROI = (Profit / Investment Cost) x 100 and measures efficiency relative to what was spent, not earned.' },
    ],
    aiQA: [
      { q: 'What does ROI stand for?', a: 'ROI stands for Return on Investment.' },
      { q: 'How do I calculate ROI?', a: 'ROI = ((Return - Cost) / Cost) x 100. Divide your profit by the original cost and multiply by 100.' },
      { q: 'What is a 100% ROI?', a: 'A 100% ROI means you doubled your money — you earned back exactly what you invested as pure profit.' },
      { q: 'Is a higher ROI always better?', a: 'Generally yes, but higher returns usually come with higher risk. Always consider risk, time horizon, and opportunity cost alongside ROI.' },
      { q: 'Can ROI be used for social media?', a: 'Yes. Social media ROI = ((Value Generated - Cost of Campaign) / Cost) x 100. Value can include leads, sales, or customer lifetime value attributed to social efforts.' },
    ],
  },

  'break-even': {
    quickAnswer: 'The break-even point is the number of units you must sell (or revenue you must generate) to cover all costs with zero profit or loss. This calculator finds it instantly from your fixed costs, variable costs, and selling price.',
    whatIs: 'The Break-Even Calculator determines exactly how many units you need to sell before your business or project becomes profitable. It separates fixed costs (rent, salaries) from variable costs (materials, per-unit labor) and shows you both the break-even unit count and break-even revenue. This is one of the most important tools in business planning and pricing strategy.',
    howToUse: [
      'Enter your total fixed costs (costs that do not change with volume).',
      'Enter your variable cost per unit (cost to produce or deliver each unit).',
      'Enter your selling price per unit.',
      'The calculator instantly shows break-even units and break-even revenue.',
    ],
    formula: 'Break-Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit). The denominator is called the "contribution margin per unit." Example: Fixed costs $10,000, selling price $50, variable cost $30. Break-even = 10,000 / (50 - 30) = 500 units.',
    examples: [
      {
        title: 'Coffee Shop',
        scenario: 'Monthly fixed costs are $8,000 (rent, staff). Each cup costs $1.50 to make and sells for $4.50.',
        result: 'Break-even = 8,000 / (4.50 - 1.50) = 8,000 / 3 = 2,667 cups per month. Anything above 2,667 cups is profit.',
      },
      {
        title: 'SaaS Product',
        scenario: 'Monthly development and overhead costs $20,000. Product costs $5/month to serve per customer and sells for $49/month.',
        result: 'Break-even = 20,000 / (49 - 5) = 20,000 / 44 = 455 customers before reaching profitability.',
      },
    ],
    useCases: [
      'Setting minimum sales targets for a new product launch.',
      'Evaluating whether a price increase or cost reduction improves viability.',
      'Presenting investor pitches with clear path to profitability.',
      'Analyzing whether a new business idea is financially feasible.',
    ],
    faqs: [
      { q: 'What is the contribution margin?', a: 'Contribution margin = Selling Price - Variable Cost per Unit. It represents how much each sale contributes toward covering fixed costs and then generating profit. A higher margin means fewer units needed to break even.' },
      { q: 'What are examples of fixed costs?', a: 'Fixed costs include rent, salaries, insurance, equipment leases, and software subscriptions — costs that do not change regardless of how much you produce or sell.' },
      { q: 'What are examples of variable costs?', a: 'Variable costs include raw materials, packaging, shipping, commission, and direct labor per unit — costs that rise and fall directly with production or sales volume.' },
      { q: 'Can I use break-even analysis for services?', a: 'Yes. For service businesses, replace "units" with billable hours or client engagements. The principle is identical: cover fixed overhead before you earn any profit.' },
      { q: 'What happens after the break-even point?', a: 'Every unit sold above the break-even point contributes its full contribution margin directly to profit. This is why scaling past break-even is so powerful for businesses with high fixed costs and low variable costs.' },
    ],
    aiQA: [
      { q: 'What is a break-even analysis?', a: 'Break-even analysis determines the point where total revenue equals total costs — no profit, no loss.' },
      { q: 'How do I lower my break-even point?', a: 'Reduce fixed costs, lower variable costs, or increase selling price. Any of these shrinks the number of units you need to sell to cover expenses.' },
      { q: 'Is break-even point the same as payback period?', a: 'No. Break-even point is a sales volume metric. Payback period measures how long it takes to recover an initial investment through cash flows.' },
      { q: 'What is a good break-even point?', a: 'A break-even point you can realistically reach within your operating capacity and market size. The lower the break-even relative to your maximum capacity, the safer your business model.' },
      { q: 'Can a business have multiple break-even points?', a: 'Yes. If a business sells multiple products with different margins, it can calculate a blended break-even or product-specific break-evens.' },
    ],
  },

  'discount': {
    quickAnswer: 'The Discount Calculator computes the sale price and savings amount when a percentage discount is applied to an original price. Enter any two of the three values to find the third instantly.',
    whatIs: 'The Discount Calculator helps shoppers, retailers, and business analysts compute discounted prices and savings quickly. You can calculate the final price after a percentage discount, the percentage discount given an original and sale price, or the original price if you know the discount and final price. It handles all three scenarios in one tool.',
    howToUse: [
      'Enter the original price of the item.',
      'Enter the discount percentage (e.g., 20 for 20% off).',
      'Click Calculate to see the discounted price and total savings.',
      'To find the discount rate, enter original price and sale price instead.',
    ],
    formula: 'Discounted Price = Original Price x (1 - Discount% / 100). Savings = Original Price x (Discount% / 100). Example: $80 item with 25% off: Savings = $80 x 0.25 = $20. Discounted price = $80 - $20 = $60.',
    examples: [
      { title: 'Retail Shopping', scenario: 'A jacket originally costs $120 and is 30% off during a sale.', result: 'Savings = $36. Final price = $84.' },
      { title: 'B2B Pricing', scenario: 'A software subscription is $500/year. A reseller receives 15% off.', result: 'Reseller price = $425/year. Savings = $75.' },
    ],
    useCases: [
      'Calculating final prices during shopping or Black Friday sales.',
      'Setting reseller or wholesale discount structures.',
      'Verifying promotional pricing accuracy before publishing.',
      'Comparing effective prices across different discount levels.',
    ],
    faqs: [
      { q: 'What is the formula for a discount?', a: 'Sale Price = Original Price x (1 - Discount/100). Savings = Original Price x (Discount/100). These two formulas handle all standard discount scenarios.' },
      { q: 'How do I calculate 20% off a price?', a: 'Multiply the original price by 0.80 (which is 1 - 0.20). For example, 20% off $150 = $150 x 0.80 = $120.' },
      { q: 'Can I stack discounts?', a: 'Stacked discounts are multiplicative, not additive. Two 20% discounts = 1 - (0.80 x 0.80) = 36% total discount, not 40%.' },
      { q: 'How do I find the original price from a sale price?', a: 'Original Price = Sale Price / (1 - Discount/100). If an item is $75 after a 25% discount: Original = 75 / 0.75 = $100.' },
      { q: 'What is the difference between discount and markdown?', a: 'In retail, a discount is a temporary price reduction; a markdown is a permanent price reduction. Mathematically they are computed the same way.' },
    ],
    aiQA: [
      { q: 'What is 10% off $50?', a: '$5 off. Final price = $45.' },
      { q: 'What is 25% off $200?', a: '$50 off. Final price = $150.' },
      { q: 'How do you calculate the original price before a discount?', a: 'Divide the sale price by (1 - discount rate). Example: $80 after 20% off means original = 80 / 0.80 = $100.' },
      { q: 'What is a discount code?', a: 'A discount code is a promotional code entered at checkout that applies a percentage or fixed-dollar reduction to the order total.' },
      { q: 'Is discount the same as rebate?', a: 'No. A discount reduces the price at the point of sale. A rebate is a partial refund paid after purchase, often requiring a claim form or receipt submission.' },
    ],
  },

  'margin': {
    quickAnswer: 'Profit margin is the percentage of revenue that becomes profit after deducting costs. This calculator computes gross margin, net margin, or the selling price needed to achieve your target margin.',
    whatIs: 'The Profit Margin Calculator computes the percentage of revenue retained as profit at various levels: gross (after cost of goods), operating (after operating expenses), and net (after all costs including taxes). It is used by business owners, accountants, and investors to measure profitability and compare businesses across industries.',
    howToUse: [
      'Enter your revenue (total sales) for the period.',
      'Enter your cost of goods sold or total costs.',
      'Click Calculate to see gross profit and gross margin percentage.',
      'Use the target margin mode to find the price needed to hit a specific margin.',
    ],
    formula: 'Gross Profit Margin = ((Revenue - COGS) / Revenue) x 100. Net Profit Margin = (Net Profit / Revenue) x 100. Example: Revenue $100,000, COGS $60,000. Gross profit = $40,000. Gross margin = 40%.',
    examples: [
      { title: 'E-commerce Store', scenario: 'Monthly revenue is $50,000. Products cost $30,000. Operating expenses $10,000.', result: 'Gross margin = 40%. Net margin = ($50K - $30K - $10K) / $50K = 20%.' },
      { title: 'Consulting Firm', scenario: 'Annual revenue $500,000. Total costs including salaries and overhead $375,000.', result: 'Net profit margin = ($500K - $375K) / $500K = 25%.' },
    ],
    useCases: [
      'Tracking profitability trends month over month.',
      'Benchmarking margins against industry averages.',
      'Setting pricing targets to achieve desired profitability.',
      'Investor pitch preparation and financial modeling.',
    ],
    faqs: [
      { q: 'What is a good profit margin?', a: 'It varies widely by industry. Grocery stores average 1-3% net margin; software companies 20-30%; consulting firms 15-25%. Compare your margin to industry peers rather than a universal standard.' },
      { q: 'What is the difference between gross and net profit margin?', a: 'Gross margin deducts only cost of goods sold (COGS) from revenue. Net margin deducts all expenses including operating costs, interest, and taxes, giving the truest picture of profitability.' },
      { q: 'What is the difference between margin and markup?', a: 'Margin is profit as a percentage of revenue. Markup is profit as a percentage of cost. A 50% markup equals a 33.3% margin. They describe the same dollar gap from different perspectives.' },
      { q: 'How do I improve profit margin?', a: 'Increase revenue (raise prices or volume), decrease COGS (negotiate supplier costs), or cut operating expenses. The most sustainable approach combines all three.' },
      { q: 'Can profit margin exceed 100%?', a: 'No. Since margin is profit divided by revenue, it is capped at 100% (which would mean zero costs). In practice, margins above 60-70% are rare outside software and pharma.' },
    ],
    aiQA: [
      { q: 'What is profit margin?', a: 'Profit margin is the percentage of revenue that remains as profit after deducting costs.' },
      { q: 'How do I calculate gross margin?', a: 'Gross Margin = ((Revenue - COGS) / Revenue) x 100.' },
      { q: 'What is a 30% profit margin?', a: 'A 30% profit margin means you keep $0.30 of every $1 in revenue as profit after deducting costs.' },
      { q: 'Is a 20% margin good?', a: 'A 20% net margin is excellent for most industries and indicates a highly profitable, well-managed business.' },
      { q: 'What is operating margin?', a: 'Operating margin = (Operating Income / Revenue) x 100. It measures profitability from core operations before interest and taxes.' },
    ],
  },

  'markup': {
    quickAnswer: 'Markup is the percentage added to a cost price to set a selling price. This calculator converts between markup percentage and final price, or calculates markup from cost and selling price.',
    whatIs: 'The Markup Calculator helps retailers, wholesalers, and product businesses set selling prices from cost prices. Unlike margin (which is profit as a percentage of revenue), markup expresses profit as a percentage of cost. Knowing both helps you price products accurately to hit your profit targets.',
    howToUse: [
      'Enter the cost price of the product.',
      'Enter your desired markup percentage.',
      'The calculator shows the selling price and profit amount.',
      'Or enter cost and selling price to calculate the markup percentage.',
    ],
    formula: 'Selling Price = Cost x (1 + Markup% / 100). Markup% = ((Selling Price - Cost) / Cost) x 100. Example: Cost $40, 75% markup. Selling price = $40 x 1.75 = $70. Profit = $30.',
    examples: [
      { title: 'Retail Product', scenario: 'A product costs $25 wholesale and you apply a 100% markup.', result: 'Selling price = $50. Profit = $25. Gross margin = 50%.' },
      { title: 'Restaurant Menu', scenario: 'A dish costs $4 in ingredients. The restaurant targets a 300% markup.', result: 'Menu price = $4 x 4 = $16. Food cost percentage = 25%.' },
    ],
    useCases: [
      'Pricing new products to achieve target gross margins.',
      'Verifying that retail prices cover costs and overhead.',
      'Comparing markup structures across product lines.',
      'Converting from cost-based to margin-based pricing models.',
    ],
    faqs: [
      { q: 'What is the difference between markup and margin?', a: 'Markup = (Profit / Cost) x 100. Margin = (Profit / Revenue) x 100. A 50% markup gives a 33.3% margin. They describe the same dollar profit from different reference points.' },
      { q: 'How do I convert markup to margin?', a: 'Margin = Markup / (1 + Markup). Example: 50% markup = 50 / 150 = 33.3% margin.' },
      { q: 'How do I convert margin to markup?', a: 'Markup = Margin / (1 - Margin). Example: 40% margin = 0.40 / 0.60 = 66.7% markup.' },
      { q: 'What markup do restaurants use?', a: 'Restaurants typically target a 25-35% food cost, which means marking up ingredients by 186-300%. Labor and overhead are covered by the overall gross margin.' },
      { q: 'Is a higher markup always better?', a: 'Higher markup increases profit per unit but may reduce volume if prices become uncompetitive. The optimal markup balances margin with market demand elasticity.' },
    ],
    aiQA: [
      { q: 'What is markup?', a: 'Markup is the percentage added to a product\'s cost to arrive at its selling price.' },
      { q: 'How do I calculate markup percentage?', a: 'Markup% = ((Selling Price - Cost) / Cost) x 100.' },
      { q: 'What is a 50% markup?', a: 'A 50% markup means you add half the cost to arrive at the price. A $20 item with 50% markup sells for $30.' },
      { q: 'What markup equals a 30% margin?', a: 'Markup = 0.30 / (1 - 0.30) = 42.9%. A 42.9% markup equals a 30% gross margin.' },
      { q: 'What markup percentage is standard in retail?', a: 'Retail markup varies: clothing 50-100%, electronics 5-20%, jewelry 100-300%. The standard varies widely by product category and competitive dynamics.' },
    ],
  },

  'commission': {
    quickAnswer: 'The Commission Calculator computes the commission amount earned from a sale based on a percentage rate or tiered structure. It is used by salespeople, managers, and payroll teams to calculate earnings accurately.',
    whatIs: 'The Commission Calculator converts sales revenue into commission earnings using flat-rate, tiered, or split commission structures. It supports gross commission, net commission after splits, and year-to-date commission tracking. Sales professionals and managers use it to verify paychecks and project earnings.',
    howToUse: [
      'Enter the total sale amount or revenue generated.',
      'Enter your commission rate as a percentage.',
      'Click Calculate to see your commission earned.',
      'For tiered commissions, enter multiple sales amounts and rates.',
    ],
    formula: 'Commission = Sale Amount x (Commission Rate / 100). Example: $10,000 sale at 5% commission = $10,000 x 0.05 = $500. For a split: if broker takes 30%, net commission = $500 x 0.70 = $350.',
    examples: [
      { title: 'Real Estate', scenario: 'A house sells for $400,000. Agent earns 3% commission split 50/50 with broker.', result: 'Total commission = $12,000. Agent net = $6,000.' },
      { title: 'SaaS Sales', scenario: 'A sales rep closes a $25,000 annual contract. Commission rate is 8%.', result: 'Commission = $2,000. With an accelerator of 1.5x for exceeding quota: $3,000.' },
    ],
    useCases: [
      'Calculating expected earnings from closed sales before payday.',
      'Designing commission plan structures for a new sales team.',
      'Projecting annual earnings at different sales volumes.',
      'Verifying commission payouts from payroll statements.',
    ],
    faqs: [
      { q: 'What is a typical sales commission rate?', a: 'Rates vary by industry: real estate 2.5-3%, insurance 5-15%, SaaS/software 6-12%, retail 1-5%. Higher-ticket or technical sales typically command higher rates.' },
      { q: 'What is the difference between gross and net commission?', a: 'Gross commission is the full percentage earned. Net commission is gross minus splits, fees, or deductions. Real estate agents typically keep 60-70% after broker splits.' },
      { q: 'What is a commission draw?', a: 'A commission draw is an advance against future commissions. The salesperson receives a guaranteed minimum payment but must repay it through commissions earned. A recoverable draw creates a debt if not covered.' },
      { q: 'What is an accelerator in a commission plan?', a: 'An accelerator is a higher commission rate that kicks in after a quota threshold. Example: 8% on sales up to quota, 12% on sales above quota. It incentivizes overperformance.' },
      { q: 'Is commission considered ordinary income?', a: 'Yes. In the US and most countries, commission earnings are taxable as ordinary income. Supplemental withholding rules may apply — consult a tax professional.' },
    ],
    aiQA: [
      { q: 'How is commission calculated?', a: 'Commission = Sale Amount x Commission Rate.' },
      { q: 'What is a 5% commission on $20,000?', a: '$1,000.' },
      { q: 'What is the average commission rate for sales reps?', a: 'Typically 5-10% of revenue generated, depending on industry and base salary level.' },
      { q: 'What is a tiered commission structure?', a: 'A structure where the commission rate increases as sales volume crosses certain thresholds, rewarding top performers.' },
      { q: 'Can you negotiate your commission rate?', a: 'Yes. Commission rates are often negotiable, especially for experienced salespeople or in markets where talent is scarce.' },
    ],
  },

  'conversion-rate': {
    quickAnswer: 'Conversion rate is the percentage of visitors, leads, or prospects who complete a desired action. This calculator computes conversion rate from total visitors and conversions.',
    whatIs: 'The Conversion Rate Calculator measures how effectively a marketing funnel, landing page, sales process, or e-commerce store turns prospects into customers. It divides conversions (purchases, sign-ups, calls) by total visitors and multiplies by 100 to express the rate as a percentage. Marketers and growth teams use it to benchmark and optimize performance.',
    howToUse: [
      'Enter the total number of visitors, leads, or prospects.',
      'Enter the number of conversions (completed actions).',
      'Click Calculate to see your conversion rate percentage.',
      'Compare across campaigns, channels, or time periods to spot trends.',
    ],
    formula: 'Conversion Rate = (Conversions / Total Visitors) x 100. Example: 5,000 website visitors, 150 purchases. CVR = (150 / 5,000) x 100 = 3%.',
    examples: [
      { title: 'E-commerce Landing Page', scenario: '10,000 visitors arrive at a product page in a month. 320 complete a purchase.', result: 'CVR = 3.2%. Industry average for e-commerce is 1-4%, so this is solid performance.' },
      { title: 'SaaS Free Trial', scenario: '2,000 people sign up for a free trial. 340 convert to paid after 14 days.', result: 'Trial-to-paid CVR = 17%. A healthy SaaS trial conversion rate is typically 15-25%.' },
    ],
    useCases: [
      'Measuring the effectiveness of landing page designs or copy changes.',
      'Benchmarking funnel performance across different traffic sources.',
      'Calculating how many leads are needed to hit a sales target.',
      'Reporting marketing ROI to leadership or investors.',
    ],
    faqs: [
      { q: 'What is a good conversion rate?', a: 'It depends on the funnel stage. Website-to-purchase: 1-4%. Landing page: 2-5%. Email: 1-3%. Sales calls: 20-40%. Always benchmark against your own historical data and industry averages.' },
      { q: 'What is CRO?', a: 'CRO stands for Conversion Rate Optimization — the systematic process of increasing the percentage of users who take a desired action through A/B testing, UX improvements, and copy optimization.' },
      { q: 'What is the difference between conversion rate and click-through rate?', a: 'CTR measures clicks on a link or ad divided by impressions. Conversion rate measures desired actions (purchases, sign-ups) divided by visitors. CTR drives traffic; conversion rate turns traffic into outcomes.' },
      { q: 'How do I improve conversion rate?', a: 'Common methods: clearer CTA buttons, faster page load speed, social proof (reviews, testimonials), simplified checkout, better targeting of qualified traffic, and A/B testing page elements.' },
      { q: 'What causes a low conversion rate?', a: 'Poor targeting (wrong audience), slow page speed, confusing UX, price concerns, lack of trust signals, or a mismatch between ad promise and landing page content.' },
    ],
    aiQA: [
      { q: 'What is conversion rate?', a: 'Conversion rate is the percentage of users who complete a desired goal out of total users who had the opportunity.' },
      { q: 'What is a 2% conversion rate?', a: '2 out of every 100 visitors completed the desired action.' },
      { q: 'What is CVR in marketing?', a: 'CVR stands for Conversion Rate — the percentage of people who take a target action (buy, sign up, call) after visiting a page or seeing an ad.' },
      { q: 'How do I calculate conversions from visits?', a: 'Conversions = Total Visits x (Conversion Rate / 100). If 10,000 visits and 3% CVR, you expect 300 conversions.' },
      { q: 'What tools track conversion rate?', a: 'Google Analytics, Adobe Analytics, Mixpanel, Hotjar, and Optimizely are common tools for tracking and optimizing conversion rates.' },
    ],
  },

  'productivity': {
    quickAnswer: 'The Productivity Calculator measures output per unit of input — work completed relative to time, resources, or workforce invested. Use it to benchmark team performance and identify efficiency improvements.',
    whatIs: 'The Productivity Calculator computes productivity as a ratio of output to input, expressed as units produced per hour, revenue per employee, or tasks completed per day. Operations managers, HR professionals, and business analysts use productivity metrics to identify bottlenecks, set staffing levels, and measure the impact of process improvements.',
    howToUse: [
      'Enter total output produced (units, revenue, or tasks).',
      'Enter total input used (hours worked, headcount, or resources).',
      'Click Calculate to see productivity rate per unit of input.',
      'Compare across teams, periods, or shifts to identify high performers.',
    ],
    formula: 'Productivity = Total Output / Total Input. Example: A team produces 240 units in 8 hours with 5 workers. Productivity per worker-hour = 240 / (8 x 5) = 6 units per worker-hour.',
    examples: [
      { title: 'Customer Support Team', scenario: '10 agents resolve 800 tickets in a 40-hour week.', result: 'Productivity = 800 / (10 x 40) = 2 tickets per agent per hour.' },
      { title: 'Sales Team', scenario: '5 reps generate $500,000 in monthly revenue.', result: 'Revenue per rep = $100,000/month. Industry benchmark can then determine if this is above or below standard.' },
    ],
    useCases: [
      'Benchmarking team output before and after a process change.',
      'Setting productivity KPIs for performance reviews.',
      'Calculating the revenue impact of adding or removing headcount.',
      'Identifying departments with productivity gaps requiring investment or training.',
    ],
    faqs: [
      { q: 'What is the formula for productivity?', a: 'Productivity = Output / Input. Depending on context, output may be units, revenue, or tasks, and input may be hours, workers, or dollars spent.' },
      { q: 'What is employee productivity?', a: 'Employee productivity typically measures revenue, output, or tasks completed per employee (or per employee-hour). Revenue per employee is a common metric in investor analysis.' },
      { q: 'What is OEE?', a: 'OEE (Overall Equipment Effectiveness) is a manufacturing productivity metric combining availability, performance, and quality: OEE = Availability x Performance x Quality. 85% OEE is considered world-class manufacturing.' },
      { q: 'How do I improve team productivity?', a: 'Reduce context switching, streamline workflows, eliminate low-value tasks, invest in automation, improve tools and training, and ensure clear prioritization of high-impact work.' },
      { q: 'What is the difference between efficiency and productivity?', a: 'Productivity measures output per unit of input (how much you produce). Efficiency measures how well you use resources relative to an ideal or maximum (how close to perfect you operate).' },
    ],
    aiQA: [
      { q: 'How is productivity measured?', a: 'Productivity = Output / Input. For workers, this is often units produced per hour or revenue generated per employee.' },
      { q: 'What is a productivity rate?', a: 'A productivity rate is the ratio of work output to work input, showing how efficiently resources are being used.' },
      { q: 'What reduces productivity at work?', a: 'Common causes include unclear priorities, excessive meetings, poor tools, frequent interruptions, and low employee engagement.' },
      { q: 'What is labor productivity?', a: 'Labor productivity = Total Output / Total Labor Hours. It measures the economic output generated per hour of human work.' },
      { q: 'Is productivity the same as performance?', a: 'Not exactly. Productivity measures output volume relative to input. Performance is broader and includes quality, accuracy, and behaviors alongside output quantity.' },
    ],
  },

  'roe': {
    quickAnswer: 'Return on Equity (ROE) measures how effectively a company uses shareholder equity to generate profit. ROE = Net Income / Shareholders Equity x 100.',
    whatIs: 'The Return on Equity Calculator computes ROE as a percentage, showing how much profit a company generates per dollar of equity invested by shareholders. It is a core metric used by investors, analysts, and financial managers to assess management effectiveness and compare companies within the same industry.',
    howToUse: [
      'Enter the company\'s net income for the period (from the income statement).',
      'Enter total shareholders equity (from the balance sheet).',
      'Click Calculate to see ROE as a percentage.',
      'Compare across periods or against industry peers for context.',
    ],
    formula: 'ROE = (Net Income / Average Shareholders Equity) x 100. Using average equity smooths out capital changes. Example: Net income $2M, average equity $10M. ROE = 20%.',
    examples: [
      { title: 'Technology Company', scenario: 'Annual net income: $5 million. Shareholders equity: $20 million.', result: 'ROE = 25%. Well above the S&P 500 average of ~14-15%.' },
      { title: 'Manufacturing Firm', scenario: 'Net income $800,000. Equity $8 million.', result: 'ROE = 10%. This may be below par for some industries — context matters.' },
    ],
    useCases: [
      'Comparing investment attractiveness between companies in the same sector.',
      'Tracking management efficiency over multiple financial periods.',
      'Screening for high-quality businesses in value investing.',
      'Identifying companies with competitive moats and capital efficiency.',
    ],
    faqs: [
      { q: 'What is a good ROE?', a: 'Most analysts consider ROE above 15% as strong. Warren Buffett looks for businesses with sustained ROE above 15-20% as a sign of competitive advantage. Industry context matters — capital-intensive industries have lower ROE norms.' },
      { q: 'Can ROE be too high?', a: 'Yes. Extremely high ROE (50%+) can be misleading if caused by excessive debt leverage, share buybacks reducing equity, or one-time events. Always inspect the balance sheet alongside ROE.' },
      { q: 'What is the DuPont formula for ROE?', a: 'DuPont ROE = Net Profit Margin x Asset Turnover x Equity Multiplier. It breaks ROE into profitability, efficiency, and leverage components for deeper analysis.' },
      { q: 'How does debt affect ROE?', a: 'Taking on more debt reduces equity, which can artificially inflate ROE even without improving operations. This is why ROE must be analyzed alongside the debt-to-equity ratio.' },
      { q: 'What is the difference between ROE and ROA?', a: 'ROE uses equity as the denominator; ROA uses total assets. ROA is unaffected by leverage and provides a purer measure of how efficiently a company uses all of its resources.' },
    ],
    aiQA: [
      { q: 'What does ROE stand for?', a: 'ROE stands for Return on Equity.' },
      { q: 'How do I calculate ROE?', a: 'ROE = (Net Income / Shareholders Equity) x 100.' },
      { q: 'What is a good ROE percentage?', a: 'Above 15% is generally considered strong. Many elite businesses sustain 20-30% or higher.' },
      { q: 'What is the S&P 500 average ROE?', a: 'Historically around 14-16% annually, though it varies by market conditions and sector mix.' },
      { q: 'Does a high ROE mean a good investment?', a: 'Not always — high ROE driven by excessive debt is risky. Look for high ROE combined with low debt-to-equity for the best signal of durable quality.' },
    ],
  },

  'roa': {
    quickAnswer: 'Return on Assets (ROA) measures how efficiently a company uses all its assets to generate profit. ROA = Net Income / Total Assets x 100.',
    whatIs: 'The Return on Assets Calculator computes ROA as a percentage, showing how much profit a company earns per dollar of total assets. Unlike ROE, ROA is unaffected by financial leverage, making it a cleaner measure of operational efficiency. It is widely used in banking, insurance, and capital-intensive industries.',
    howToUse: [
      'Enter the company\'s net income for the period.',
      'Enter total assets from the balance sheet.',
      'Click Calculate to see ROA as a percentage.',
      'Compare year-over-year or against industry peers.',
    ],
    formula: 'ROA = (Net Income / Total Assets) x 100. Example: Net income $3M, total assets $30M. ROA = 10%.',
    examples: [
      { title: 'Retail Chain', scenario: 'Net income $10 million. Total assets $100 million (inventory, stores, equipment).', result: 'ROA = 10%. Strong for retail, which typically sees 5-10% ROA.' },
      { title: 'Bank', scenario: 'Net income $500 million. Total assets $50 billion (loans, securities).', result: 'ROA = 1%. Banks operate on very thin ROA due to leverage — 1% is considered excellent.' },
    ],
    useCases: [
      'Comparing operational efficiency between companies with different capital structures.',
      'Evaluating asset-heavy industries like manufacturing, airlines, and utilities.',
      'Banking and financial analysis where asset quality and utilization are critical.',
      'Internal benchmarking of division performance within a conglomerate.',
    ],
    faqs: [
      { q: 'What is a good ROA?', a: 'For most industries, ROA above 5% is good; above 10% is excellent. Banks and financial companies operate at 1-2% ROA due to high leverage. Technology companies often achieve 15-20%+ ROA.' },
      { q: 'What is the difference between ROA and ROE?', a: 'ROA = Net Income / Total Assets — includes both equity and debt-funded assets. ROE = Net Income / Equity — only equity-funded. ROA is not inflated by leverage, making it more comparable across firms with different debt levels.' },
      { q: 'Can ROA be negative?', a: 'Yes. A negative ROA means the company is generating a net loss. This signals financial distress or a startup in an investment phase before profitability.' },
      { q: 'How does depreciation affect ROA?', a: 'Higher depreciation reduces net income (lowering the numerator) while also reducing asset book value over time (lowering the denominator). The net effect varies — fully depreciated old assets can make ROA appear artificially high.' },
      { q: 'What is total asset turnover?', a: 'Asset turnover = Revenue / Total Assets. Combined with net margin, it drives ROA (via the DuPont formula). High turnover with thin margins (retail) vs. low turnover with high margins (luxury) can both produce similar ROA.' },
    ],
    aiQA: [
      { q: 'What does ROA mean?', a: 'ROA stands for Return on Assets — it measures how profitably a company uses its total assets.' },
      { q: 'How is ROA calculated?', a: 'ROA = (Net Income / Total Assets) x 100.' },
      { q: 'What is a good ROA for a company?', a: 'Above 5% is generally solid; above 10% indicates high efficiency. Banks are the exception at 1-2%.' },
      { q: 'Which is better, ROA or ROE?', a: 'ROA is better for comparing across companies with different debt levels. ROE is better for shareholder-return analysis. Use both together for complete analysis.' },
      { q: 'Does ROA include debt?', a: 'Yes. Total assets = equity + debt. ROA measures returns on the entire asset base, regardless of how it was financed.' },
    ],
  },

  'ros': {
    quickAnswer: 'Return on Sales (ROS) measures operating profit as a percentage of net sales. ROS = Operating Profit / Net Sales x 100. It shows how efficiently a company converts revenue into profit.',
    whatIs: 'The Return on Sales Calculator computes operating profit margin, showing what percentage of every dollar of revenue is operating profit. Also called operating profit margin, ROS strips out financing costs and taxes to measure the core business performance. It is used by analysts and managers to track operational efficiency trends.',
    howToUse: [
      'Enter net sales (total revenue minus returns and discounts).',
      'Enter operating profit (revenue minus COGS minus operating expenses, before interest and taxes).',
      'Click Calculate to see ROS as a percentage.',
    ],
    formula: 'ROS = (Operating Profit / Net Sales) x 100. Example: Operating profit $2M on $20M revenue. ROS = 10%.',
    examples: [
      { title: 'Manufacturing Company', scenario: 'Net sales $50M. COGS $30M. Operating expenses $10M.', result: 'Operating profit = $10M. ROS = 10/50 = 20%.' },
      { title: 'Grocery Chain', scenario: 'Net sales $200M. Gross profit $30M. Operating expenses $25M.', result: 'Operating profit = $5M. ROS = 5/200 = 2.5%. Typical for high-volume, low-margin grocery.' },
    ],
    useCases: [
      'Tracking operating efficiency quarter over quarter.',
      'Comparing profitability across business units.',
      'Identifying the impact of cost changes on margins.',
      'Setting operating profit targets for management.',
    ],
    faqs: [
      { q: 'What is the difference between ROS and net profit margin?', a: 'ROS uses operating profit (before interest and taxes). Net profit margin uses net income (after interest and taxes). ROS isolates core business performance from financing and tax strategies.' },
      { q: 'What is a good ROS percentage?', a: 'By industry: software 20-30%, manufacturing 10-15%, retail 3-8%, grocery 1-3%. Always compare against industry peers rather than absolute thresholds.' },
      { q: 'Is ROS the same as EBIT margin?', a: 'Very similar. EBIT margin = EBIT / Revenue. ROS typically uses operating income, which equals EBIT for most companies. The key is that both exclude interest and taxes.' },
      { q: 'Why is ROS declining?', a: 'Common causes: rising input costs, pricing pressure, higher operating expense ratio, or revenue mix shift toward lower-margin products/services.' },
      { q: 'Can ROS be improved without increasing revenue?', a: 'Yes. Cutting operating costs, improving supply chain efficiency, or shifting to higher-margin products can improve ROS without growing the top line.' },
    ],
    aiQA: [
      { q: 'What is ROS in business?', a: 'ROS is Return on Sales — operating profit divided by net revenue, expressed as a percentage.' },
      { q: 'How do you calculate return on sales?', a: 'ROS = (Operating Profit / Net Sales) x 100.' },
      { q: 'What is the difference between ROS and ROI?', a: 'ROS measures operational profitability of revenue. ROI measures return on money invested.' },
      { q: 'What is a healthy ROS for a tech company?', a: 'Strong technology companies often achieve 20-35% ROS or higher.' },
      { q: 'Is ROS the same as profit margin?', a: 'ROS (return on sales) is essentially operating profit margin — similar to gross margin but after operating expenses.' },
    ],
  },

  'return-on-capital': {
    quickAnswer: 'Return on Invested Capital (ROIC) measures how efficiently a company generates profit from the capital investors have put into it. ROIC = NOPAT / Invested Capital x 100.',
    whatIs: 'The Return on Capital (ROIC) Calculator measures how effectively a business converts capital investment into after-tax operating profit. ROIC is considered the gold standard metric for assessing business quality, as it accounts for both equity and debt financing without distortion from leverage. Warren Buffett, Charlie Munger, and most value investors prioritize ROIC above other metrics.',
    howToUse: [
      'Enter NOPAT (Net Operating Profit After Tax) from the income statement.',
      'Enter Invested Capital (total equity + total debt, or total assets minus non-interest-bearing liabilities).',
      'Click Calculate to see ROIC as a percentage.',
      'Compare ROIC to the company\'s weighted average cost of capital (WACC) to assess value creation.',
    ],
    formula: 'ROIC = NOPAT / Invested Capital x 100. NOPAT = Operating Income x (1 - Tax Rate). Companies creating value have ROIC > WACC. Example: NOPAT $5M, invested capital $25M. ROIC = 20%.',
    examples: [
      { title: 'Software Company', scenario: 'NOPAT $50M. Total equity $200M, net debt $50M. Invested capital = $250M.', result: 'ROIC = 50/250 = 20%. Exceptional — software companies with high ROIC are powerful compounders.' },
      { title: 'Airline', scenario: 'NOPAT $300M. Invested capital $6 billion.', result: 'ROIC = 5%. Airlines often struggle to earn their cost of capital due to intense competition and high fixed costs.' },
    ],
    useCases: [
      'Identifying businesses that consistently earn above their cost of capital.',
      'Valuation modeling using economic profit frameworks.',
      'Comparing capital efficiency across different industries.',
      'Executive compensation tied to capital efficiency improvements.',
    ],
    faqs: [
      { q: 'What is NOPAT?', a: 'NOPAT stands for Net Operating Profit After Tax. NOPAT = EBIT x (1 - Tax Rate). It represents the profit a company earns from operations, excluding the impact of financing decisions.' },
      { q: 'What is a good ROIC?', a: 'Any ROIC above the company\'s WACC (typically 8-12%) creates shareholder value. ROIC above 20% indicates a strong competitive moat. Elite businesses like Visa and MSFT sustain 30-50%+ ROIC.' },
      { q: 'What is the difference between ROIC and ROE?', a: 'ROIC uses both equity and debt (total invested capital) as the denominator. ROE uses only equity. ROIC is not distorted by leverage and provides a purer view of business quality.' },
      { q: 'What is WACC?', a: 'WACC (Weighted Average Cost of Capital) is the blended cost of all capital (equity + debt) a company uses. If ROIC > WACC, the company creates value. If ROIC < WACC, it destroys value despite being profitable.' },
      { q: 'Can ROIC be negative?', a: 'Yes. Negative ROIC means NOPAT is negative — the company is losing money from operations even before financing costs. This signals fundamental operational issues.' },
    ],
    aiQA: [
      { q: 'What does ROIC stand for?', a: 'Return on Invested Capital.' },
      { q: 'How is ROIC calculated?', a: 'ROIC = NOPAT / Invested Capital x 100.' },
      { q: 'What is a good ROIC for a business?', a: 'Above 15% is strong; above 20% is excellent. Elite businesses sustain 30-50%+ ROIC.' },
      { q: 'Why is ROIC important?', a: 'ROIC tells you whether a business earns more than it costs to fund — the core test of long-term value creation.' },
      { q: 'What is the difference between ROIC and ROI?', a: 'ROI is a general return metric for any investment. ROIC is specifically for measuring business capital efficiency using NOPAT and total invested capital.' },
    ],
  },

  'cac': {
    quickAnswer: 'Customer Acquisition Cost (CAC) is the total cost to acquire a new customer, including marketing and sales expenses. CAC = Total Sales and Marketing Costs / Number of New Customers Acquired.',
    whatIs: 'The CAC Calculator computes the average cost to acquire one new customer by dividing total sales and marketing spend by the number of customers acquired in the same period. It is a foundational SaaS and e-commerce metric that, when compared to customer lifetime value (LTV), determines the viability of a business model.',
    howToUse: [
      'Enter total sales and marketing costs for the period (ad spend, salaries, tools, events).',
      'Enter the number of new customers acquired in the same period.',
      'Click Calculate to see your CAC.',
      'Divide LTV by CAC to assess the efficiency of your growth engine.',
    ],
    formula: 'CAC = Total Sales & Marketing Costs / New Customers Acquired. Example: $50,000 spent on marketing + $30,000 on sales = $80,000 total. 200 new customers acquired. CAC = $80,000 / 200 = $400.',
    examples: [
      { title: 'SaaS Startup', scenario: 'Monthly marketing spend $20,000. Sales salaries $15,000. 70 new customers added.', result: 'CAC = $35,000 / 70 = $500. If monthly MRR per customer is $100 and churn is 2%, LTV = $5,000. LTV/CAC = 10x — exceptional.' },
      { title: 'E-commerce Brand', scenario: 'Monthly ad spend $30,000. Customer service and checkout costs $5,000. 500 first-time buyers.', result: 'CAC = $35,000 / 500 = $70. If average order value is $85 and repeat rate is high, this can be sustainable.' },
    ],
    useCases: [
      'Evaluating channel efficiency — comparing CAC by source (paid, organic, referral).',
      'SaaS unit economics modeling and investor due diligence.',
      'Setting marketing budgets based on acceptable payback periods.',
      'Identifying which acquisition channels deliver the most cost-efficient customers.',
    ],
    faqs: [
      { q: 'What is a good CAC?', a: 'CAC is only meaningful relative to LTV. The LTV/CAC ratio should be at least 3:1 for healthy SaaS businesses. A ratio below 1:1 means you are losing money on each customer.' },
      { q: 'What costs are included in CAC?', a: 'All sales and marketing costs: ad spend, agency fees, sales salaries and commissions, CRM/marketing software, trade shows, and any other costs directly associated with acquiring customers.' },
      { q: 'What is CAC payback period?', a: 'CAC Payback Period = CAC / (MRR per customer x Gross Margin). It measures how many months of revenue are needed to recover the acquisition cost. Under 12 months is excellent for SaaS.' },
      { q: 'What is the difference between blended and paid CAC?', a: 'Blended CAC includes all acquisition channels. Paid CAC counts only paid marketing costs. Separating them reveals whether organic/word-of-mouth or paid channels are driving growth.' },
      { q: 'How do I reduce CAC?', a: 'Improve conversion rate optimization (CRO), invest in SEO and content for organic traffic, build referral programs, improve ad targeting and creative, and reduce friction in the sales process.' },
    ],
    aiQA: [
      { q: 'What is CAC?', a: 'CAC is Customer Acquisition Cost — the average cost to acquire one new paying customer.' },
      { q: 'How do you calculate CAC?', a: 'CAC = Total Sales & Marketing Spend / Number of New Customers Acquired.' },
      { q: 'What is a good LTV to CAC ratio?', a: '3:1 or higher is generally healthy for SaaS businesses.' },
      { q: 'Is CAC the same as CPA?', a: 'Similar but different. CPA (Cost Per Acquisition) is an ad metric for one conversion event. CAC is broader and covers all sales and marketing costs to acquire a customer.' },
      { q: 'What does high CAC mean?', a: 'High CAC means it costs more to bring in each customer — either your marketing is inefficient, competition is high, or your target market is hard to reach.' },
    ],
  },

  'ltv': {
    quickAnswer: 'Customer Lifetime Value (LTV or CLV) is the total revenue a business expects from a customer over their entire relationship. LTV = Average Purchase Value x Purchase Frequency x Customer Lifespan.',
    whatIs: 'The LTV Calculator estimates the total revenue or profit generated by a typical customer from acquisition to churn. It is the most important metric for SaaS companies, subscription businesses, and e-commerce brands because it tells you how much you can afford to spend on customer acquisition and retention. When LTV exceeds CAC by a healthy multiple, a business has a scalable growth engine.',
    howToUse: [
      'Enter average revenue per customer per period (monthly or annual).',
      'Enter your average customer lifespan (or calculate from churn rate: 1 / monthly churn rate).',
      'Enter gross margin if you want profit-based LTV.',
      'Click Calculate to see LTV and compare it to your CAC.',
    ],
    formula: 'Simple LTV = Average Revenue Per User (ARPU) x Average Customer Lifespan. For SaaS: LTV = ARPU / Monthly Churn Rate. Profit LTV = LTV x Gross Margin. Example: $100/month ARPU, 2% monthly churn. LTV = $100 / 0.02 = $5,000.',
    examples: [
      { title: 'Subscription App', scenario: '$29/month subscription, 3% monthly churn, 70% gross margin.', result: 'LTV = $29 / 0.03 = $967. Profit LTV = $967 x 0.70 = $677. If CAC = $150, LTV/CAC = 4.5x — healthy.' },
      { title: 'E-commerce Store', scenario: 'Average order $80, 3 purchases per year, average customer active for 4 years.', result: 'LTV = $80 x 3 x 4 = $960. This allows for a CAC up to ~$320 (at 3:1 ratio).' },
    ],
    useCases: [
      'Setting maximum allowable CAC for profitable growth.',
      'Justifying higher ad spend for high-LTV customer segments.',
      'Prioritizing customer retention investments versus acquisition.',
      'SaaS investor presentations and financial model building.',
    ],
    faqs: [
      { q: 'What is the difference between LTV and CLV?', a: 'LTV (Lifetime Value) and CLV (Customer Lifetime Value) are the same metric with different abbreviations. Some use CLV to emphasize a customer-centric perspective.' },
      { q: 'How does churn affect LTV?', a: 'LTV is inversely related to churn. Cutting monthly churn from 5% to 2.5% doubles LTV. Churn reduction is the highest-leverage lever for improving unit economics in subscription businesses.' },
      { q: 'What is the difference between simple and discounted LTV?', a: 'Simple LTV ignores time value of money. Discounted LTV (DCF-based) reduces future cash flows to present value, providing a more accurate valuation for financial modeling.' },
      { q: 'How do I increase LTV?', a: 'Reduce churn (improve product, support, onboarding), increase ARPU (upsells, cross-sells, price increases), and serve customers longer through better retention programs.' },
      { q: 'What does LTV/CAC ratio of 3 mean?', a: 'For every $1 spent acquiring a customer, the business earns $3 in lifetime revenue. A ratio of 3:1 is the common SaaS benchmark for efficient, scalable growth.' },
    ],
    aiQA: [
      { q: 'What is LTV in business?', a: 'LTV (Lifetime Value) is the total revenue expected from a single customer over their entire relationship with a business.' },
      { q: 'How is LTV calculated for SaaS?', a: 'LTV = ARPU / Monthly Churn Rate.' },
      { q: 'What is a good LTV?', a: 'LTV should be at least 3x CAC (customer acquisition cost) for a healthy growth model.' },
      { q: 'How does increasing prices affect LTV?', a: 'If price increases don\'t increase churn proportionally, higher ARPU directly increases LTV.' },
      { q: 'What is cohort LTV?', a: 'Cohort LTV tracks the actual cumulative revenue from a group of customers acquired at the same time, giving the most empirically accurate view of lifetime value.' },
    ],
  },

  'shopify-fees': {
    quickAnswer: 'Shopify charges monthly subscription fees plus transaction/payment processing fees per sale. Use this calculator to estimate your total monthly costs based on your plan and sales volume.',
    whatIs: 'The Shopify Fees Calculator estimates total monthly costs for Shopify merchants by combining the monthly subscription cost with per-transaction payment processing fees. It helps store owners choose the right plan, project profitability, and understand the true cost of each sale at different revenue levels.',
    howToUse: [
      'Select your Shopify plan (Basic, Shopify, or Advanced).',
      'Enter your monthly revenue or number of transactions.',
      'Enter your average order value if computing transaction fees.',
      'The calculator shows total monthly fees, effective fee rate, and net revenue.',
    ],
    formula: 'Total Fees = Monthly Plan Cost + (Transaction Volume x Per-Transaction Rate). Shopify Payments reduces transaction fees to 0% on its own gateway. Using third-party payments adds 0.5-2% depending on plan.',
    examples: [
      { title: 'Basic Shopify Store', scenario: 'Basic plan ($39/month), $10,000/month revenue, using Shopify Payments (2.9% + $0.30/transaction, 200 orders).', result: 'Monthly cost = $39 + (2.9% x $10,000) + (200 x $0.30) = $39 + $290 + $60 = $389 total fees.' },
      { title: 'Advanced Plan High Volume', scenario: 'Advanced plan ($399/month), $100,000/month revenue, 500 orders.', result: 'Total = $399 + (2.4% x $100,000) + (500 x $0.30) = $399 + $2,400 + $150 = $2,949/month.' },
    ],
    useCases: [
      'Choosing between Shopify plans based on revenue volume.',
      'Projecting true profit margins after platform costs.',
      'Comparing Shopify vs. other e-commerce platforms total cost of ownership.',
      'Planning pricing strategy to account for payment processing costs.',
    ],
    faqs: [
      { q: 'What are Shopify\'s monthly subscription costs?', a: 'As of 2024: Basic $39/month, Shopify $105/month, Advanced $399/month (billed annually). Monthly billing is higher. Shopify Plus starts at $2,300/month.' },
      { q: 'What are Shopify payment processing rates?', a: 'Shopify Payments rates: Basic 2.9%+$0.30, Shopify 2.6%+$0.30, Advanced 2.4%+$0.30 (online). In-person rates are lower. Third-party payment gateways add 0.5-2% extra.' },
      { q: 'Does Shopify charge transaction fees?', a: 'Shopify charges additional transaction fees (0.5-2%) only if you use a payment gateway other than Shopify Payments. Using Shopify Payments eliminates these extra transaction fees.' },
      { q: 'When should I upgrade my Shopify plan?', a: 'Upgrade when the savings on transaction fees exceed the cost increase of the higher plan. For example, upgrade from Basic to Shopify when monthly revenue exceeds ~$40,000 with third-party payments.' },
      { q: 'Are Shopify fees tax-deductible?', a: 'Yes. Shopify subscription and transaction fees are business expenses and are generally tax-deductible. Consult a tax professional for your specific situation.' },
    ],
    aiQA: [
      { q: 'How much does Shopify cost per month?', a: 'Shopify plans start at $39/month (Basic) up to $399/month (Advanced) when billed annually.' },
      { q: 'What percentage does Shopify take per sale?', a: 'With Shopify Payments: 2.9% + $0.30 on Basic, 2.6% on Shopify plan, 2.4% on Advanced.' },
      { q: 'Is Shopify free?', a: 'No, but Shopify offers a 3-day free trial and then a $1/month first 3 months promotional pricing for new merchants.' },
      { q: 'What is the cheapest Shopify plan?', a: 'Shopify Starter at $5/month (sell on social media only) or Basic at $39/month for a full online store.' },
      { q: 'Does Shopify charge a monthly fee plus transaction fees?', a: 'Yes. You pay a monthly subscription plus a per-transaction payment processing fee on every sale.' },
    ],
  },

  'ebay-fees': {
    quickAnswer: 'eBay charges insertion fees for listings plus a final value fee (FVF) on completed sales. This calculator estimates your total eBay selling costs and net profit per item.',
    whatIs: 'The eBay Fees Calculator estimates total costs for eBay sellers by combining insertion fees, final value fees (percentage of total sale including shipping), and optional PayPal/payment processing fees. Understanding total fees before listing helps sellers price accurately to protect their margins.',
    howToUse: [
      'Enter your listing price and shipping cost.',
      'Select your eBay category (fees vary by category).',
      'Enter your item cost or desired profit.',
      'The calculator shows total fees, net profit, and effective fee percentage.',
    ],
    formula: 'Total eBay Fees = Insertion Fee + Final Value Fee. FVF is charged on the total sale amount (item price + shipping). Standard FVF rates: 13.25% for most categories, capped per listing. Above-standard sellers may face higher rates.',
    examples: [
      { title: 'Electronics Sale', scenario: 'Sold a phone for $250 + $10 shipping. Category FVF = 13.25%. No insertion fee (free listings used).', result: 'FVF = 13.25% x $260 = $34.45. Net proceeds = $260 - $34.45 = $225.55.' },
      { title: 'Clothing Item', scenario: 'Sold jeans for $45 + $6 shipping. FVF = 13.25%.', result: 'FVF = 13.25% x $51 = $6.76. Net proceeds = $44.24.' },
    ],
    useCases: [
      'Pricing eBay listings to ensure desired profit after all fees.',
      'Comparing eBay vs. other platforms for profitability.',
      'Calculating break-even sale price for thrift store flips.',
      'Bulk seller fee forecasting for monthly bookkeeping.',
    ],
    faqs: [
      { q: 'What is eBay\'s final value fee?', a: 'eBay\'s FVF is a percentage of the total amount the buyer pays, including item price and shipping. Rates are typically 13.25% for most categories, with a $0.30 per order fee.' },
      { q: 'Does eBay charge shipping fees?', a: 'eBay charges FVF on the combined total of the item price AND shipping. So if you charge $10 shipping, you still pay FVF on it.' },
      { q: 'How many free listings does eBay offer?', a: 'Most sellers get 250 free zero-insertion-fee listings per month. After that, $0.35 per listing. Store subscribers get significantly more free listings.' },
      { q: 'Are eBay fees the same as Etsy or Amazon?', a: 'No. Etsy charges 6.5% transaction fee plus listing fees. Amazon charges 8-15% referral fee plus FBA fees. eBay at 13.25% can be higher for some categories but lower for others.' },
      { q: 'How do I calculate my eBay profit?', a: 'Net Profit = Sale Price - Item Cost - eBay Final Value Fee - Shipping Cost - Any Insertion Fees. Use this calculator to get an accurate figure before listing.' },
    ],
    aiQA: [
      { q: 'What percentage does eBay take?', a: 'eBay typically takes 13.25% of the total sale price including shipping as a final value fee, plus $0.30 per order.' },
      { q: 'Is selling on eBay profitable?', a: 'It can be. Profitability depends on sourcing cost, selling price, category fees, and shipping costs. Use the fee calculator to verify margins before listing.' },
      { q: 'Does eBay charge for returns?', a: 'eBay does not charge a fee for returns themselves, but you may lose FVF credit depending on the return reason and your seller policy.' },
      { q: 'What are insertion fees on eBay?', a: 'Insertion fees are charged per listing above your monthly free listing allowance. The standard rate is $0.35 per listing.' },
      { q: 'How does eBay store subscription affect fees?', a: 'Store subscriptions ($7.95-$349.95/month) provide more free listings per month and slightly reduced FVF rates, benefiting high-volume sellers.' },
    ],
  },
};
