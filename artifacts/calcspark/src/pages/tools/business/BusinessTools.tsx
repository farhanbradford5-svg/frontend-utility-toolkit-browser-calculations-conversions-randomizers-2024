import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function BreakEvenCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'break-even')!;
  const [fixedCost, setFixedCost] = useState("50000");
  const [pricePerUnit, setPricePerUnit] = useState("25");
  const [varCostPerUnit, setVarCostPerUnit] = useState("10");
  const [result, setResult] = useState<{ units: number; revenue: number; margin: number } | null>(null);

  const calculate = () => {
    const fc = parseFloat(fixedCost);
    const p = parseFloat(pricePerUnit);
    const vc = parseFloat(varCostPerUnit);
    if (isNaN(fc) || isNaN(p) || isNaN(vc) || p <= vc) return;
    const units = fc / (p - vc);
    const revenue = units * p;
    const margin = ((p - vc) / p) * 100;
    setResult({ units, revenue, margin });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Fixed Costs ($)" hint="Rent, salaries, equipment, etc.">
          <Input type="number" value={fixedCost} onChange={e => setFixedCost(e.target.value)} />
        </Field>
        <Field label="Price per Unit ($)">
          <Input type="number" value={pricePerUnit} onChange={e => setPricePerUnit(e.target.value)} />
        </Field>
        <Field label="Variable Cost per Unit ($)">
          <Input type="number" value={varCostPerUnit} onChange={e => setVarCostPerUnit(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Break-Even</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Break-Even Units" value={Math.ceil(result.units).toLocaleString()} highlight />
            <ResultBox label="Break-Even Revenue" value={`$${result.revenue.toFixed(2)}`} />
            <ResultBox label="Contribution Margin" value={`${result.margin.toFixed(1)}%`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">Break-Even Analysis</h3>
        <p>The break-even point is where total revenue equals total costs — you make neither profit nor loss.</p>
        <p><strong>Formula:</strong> Break-Even Units = Fixed Costs / (Price − Variable Cost per Unit)</p>
      </div>
    </ToolPage>
  );
}

export function DiscountCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'discount')!;
  const [original, setOriginal] = useState("100");
  const [discount, setDiscount] = useState("20");
  const [result, setResult] = useState<{ salePrice: number; savings: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(original);
    const d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return;
    const savings = p * (d / 100);
    setResult({ salePrice: p - savings, savings });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Original Price ($)">
          <Input type="number" value={original} onChange={e => setOriginal(e.target.value)} />
        </Field>
        <Field label="Discount (%)">
          <Input type="number" value={discount} onChange={e => setDiscount(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Discount</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Sale Price" value={`$${result.salePrice.toFixed(2)}`} highlight />
            <ResultBox label="You Save" value={`$${result.savings.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MarginCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'margin')!;
  const [cost, setCost] = useState("50");
  const [revenue, setRevenue] = useState("100");
  const [result, setResult] = useState<{ gross: number; profit: number } | null>(null);

  const calculate = () => {
    const c = parseFloat(cost);
    const r = parseFloat(revenue);
    if (isNaN(c) || isNaN(r) || r === 0) return;
    const profit = r - c;
    const gross = (profit / r) * 100;
    setResult({ gross, profit });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Cost ($)">
          <Input type="number" value={cost} onChange={e => setCost(e.target.value)} />
        </Field>
        <Field label="Revenue / Selling Price ($)">
          <Input type="number" value={revenue} onChange={e => setRevenue(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Margin</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Gross Margin" value={`${result.gross.toFixed(2)}%`} highlight />
            <ResultBox label="Gross Profit" value={`$${result.profit.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MarkupCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'markup')!;
  const [cost, setCost] = useState("50");
  const [markup, setMarkup] = useState("40");
  const [result, setResult] = useState<{ price: number; profit: number; margin: number } | null>(null);

  const calculate = () => {
    const c = parseFloat(cost);
    const m = parseFloat(markup);
    if (isNaN(c) || isNaN(m)) return;
    const profit = c * (m / 100);
    const price = c + profit;
    const margin = (profit / price) * 100;
    setResult({ price, profit, margin });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Cost ($)">
          <Input type="number" value={cost} onChange={e => setCost(e.target.value)} />
        </Field>
        <Field label="Markup (%)">
          <Input type="number" value={markup} onChange={e => setMarkup(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Markup</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Selling Price" value={`$${result.price.toFixed(2)}`} highlight />
            <ResultBox label="Profit" value={`$${result.profit.toFixed(2)}`} />
            <ResultBox label="Profit Margin" value={`${result.margin.toFixed(2)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CommissionCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'commission')!;
  const [sales, setSales] = useState("10000");
  const [rate, setRate] = useState("5");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const s = parseFloat(sales);
    const r = parseFloat(rate);
    if (isNaN(s) || isNaN(r)) return;
    setResult(s * (r / 100));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Sales Amount ($)">
          <Input type="number" value={sales} onChange={e => setSales(e.target.value)} />
        </Field>
        <Field label="Commission Rate (%)">
          <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Commission</CalcButton>
        {result !== null && (
          <ResultBox label="Commission Earned" value={`$${result.toFixed(2)}`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ConversionRateCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'conversion-rate')!;
  const [visitors, setVisitors] = useState("1000");
  const [conversions, setConversions] = useState("35");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v = parseFloat(visitors);
    const c = parseFloat(conversions);
    if (isNaN(v) || isNaN(c) || v === 0) return;
    setResult((c / v) * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Total Visitors / Leads">
          <Input type="number" value={visitors} onChange={e => setVisitors(e.target.value)} />
        </Field>
        <Field label="Conversions / Sales">
          <Input type="number" value={conversions} onChange={e => setConversions(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Conversion Rate</CalcButton>
        {result !== null && (
          <ResultBox label="Conversion Rate" value={`${result.toFixed(2)}%`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ProductivityCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'productivity')!;
  const [output, setOutput] = useState("200");
  const [input, setInput] = useState("8");
  const [result, setResult] = useState<{ productivity: number } | null>(null);

  const calculate = () => {
    const o = parseFloat(output);
    const i = parseFloat(input);
    if (isNaN(o) || isNaN(i) || i === 0) return;
    setResult({ productivity: o / i });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Total Output (units, revenue, etc.)">
          <Input type="number" value={output} onChange={e => setOutput(e.target.value)} />
        </Field>
        <Field label="Total Input (hours, workers, etc.)">
          <Input type="number" value={input} onChange={e => setInput(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Productivity</CalcButton>
        {result && (
          <ResultBox label="Productivity (Output / Input)" value={result.productivity.toFixed(2)} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ROECalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'roe')!;
  const [netIncome, setNetIncome] = useState("50000");
  const [equity, setEquity] = useState("200000");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const ni = parseFloat(netIncome);
    const eq = parseFloat(equity);
    if (isNaN(ni) || isNaN(eq) || eq === 0) return;
    setResult((ni / eq) * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Net Income ($)">
          <Input type="number" value={netIncome} onChange={e => setNetIncome(e.target.value)} />
        </Field>
        <Field label="Shareholders' Equity ($)">
          <Input type="number" value={equity} onChange={e => setEquity(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate ROE</CalcButton>
        {result !== null && (
          <ResultBox label="Return on Equity (ROE)" value={`${result.toFixed(2)}%`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ROACalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'roa')!;
  const [netIncome, setNetIncome] = useState("50000");
  const [assets, setAssets] = useState("500000");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const ni = parseFloat(netIncome);
    const a = parseFloat(assets);
    if (isNaN(ni) || isNaN(a) || a === 0) return;
    setResult((ni / a) * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Net Income ($)">
          <Input type="number" value={netIncome} onChange={e => setNetIncome(e.target.value)} />
        </Field>
        <Field label="Total Assets ($)">
          <Input type="number" value={assets} onChange={e => setAssets(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate ROA</CalcButton>
        {result !== null && (
          <ResultBox label="Return on Assets (ROA)" value={`${result.toFixed(2)}%`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ROSCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ros')!;
  const [netIncome, setNetIncome] = useState("50000");
  const [sales, setSales] = useState("500000");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const ni = parseFloat(netIncome);
    const s = parseFloat(sales);
    if (isNaN(ni) || isNaN(s) || s === 0) return;
    setResult((ni / s) * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Net Income ($)">
          <Input type="number" value={netIncome} onChange={e => setNetIncome(e.target.value)} />
        </Field>
        <Field label="Net Sales Revenue ($)">
          <Input type="number" value={sales} onChange={e => setSales(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate ROS</CalcButton>
        {result !== null && (
          <ResultBox label="Return on Sales (ROS)" value={`${result.toFixed(2)}%`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function ReturnOnCapitalCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'return-on-capital')!;
  const [nopat, setNopat] = useState("500000"); const [capital, setCapital] = useState("2000000");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const n=parseFloat(nopat), c=parseFloat(capital);
    if([n,c].some(isNaN)||c===0) return;
    setResult(n/c*100);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Net Operating Profit After Tax (NOPAT, $)"><Input type="number" value={nopat} onChange={e=>setNopat(e.target.value)} /></Field>
        <Field label="Invested Capital ($)"><Input type="number" value={capital} onChange={e=>setCapital(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate ROIC</CalcButton>
        {result !== null && <ResultBox label="Return on Invested Capital (ROIC)" value={`${result.toFixed(2)}%`} highlight />}
      </div>
    </ToolPage>
  );
}
