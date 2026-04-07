import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function CompoundInterestCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'compound-interest')!;
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");
  const [freq, setFreq] = useState("12");
  const [monthly, setMonthly] = useState("0");
  const [result, setResult] = useState<{ future: number; interest: number; total: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(freq);
    const t = parseFloat(years);
    const PMT = parseFloat(monthly);
    if ([P, r, n, t].some(isNaN)) return;
    const A = P * Math.pow(1 + r / n, n * t);
    const contrib = PMT > 0 ? PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n)) : 0;
    const future = A + contrib;
    const total = P + PMT * 12 * t;
    setResult({ future, interest: future - total, total });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Principal ($)">
            <Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
          </Field>
          <Field label="Annual Rate (%)">
            <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </Field>
          <Field label="Time (years)">
            <Input type="number" value={years} onChange={e => setYears(e.target.value)} />
          </Field>
          <Field label="Compound frequency">
            <Select value={freq} onChange={e => setFreq(e.target.value)}>
              <option value="1">Annually</option>
              <option value="2">Semi-annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </Select>
          </Field>
        </div>
        <Field label="Monthly Contribution ($)" hint="Optional — set to 0 if not applicable">
          <Input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Future Value" value={`$${result.future.toFixed(2)}`} highlight />
            <ResultBox label="Interest Earned" value={`$${result.interest.toFixed(2)}`} />
            <ResultBox label="Total Contributed" value={`$${result.total.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">Compound Interest Formula</h3>
        <p>A = P(1 + r/n)^(nt) where P = principal, r = annual rate, n = compounding frequency, t = time in years.</p>
      </div>
    </ToolPage>
  );
}

export function SimpleInterestCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'simple-interest')!;
  const [principal, setPrincipal] = useState("5000");
  const [rate, setRate] = useState("5");
  const [time, setTime] = useState("3");
  const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    if ([P, r, t].some(isNaN)) return;
    const interest = P * r * t;
    setResult({ interest, total: P + interest });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Principal ($)">
          <Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
        </Field>
        <Field label="Annual Interest Rate (%)">
          <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
        </Field>
        <Field label="Time (years)">
          <Input type="number" value={time} onChange={e => setTime(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Simple Interest" value={`$${result.interest.toFixed(2)}`} highlight />
            <ResultBox label="Total Amount" value={`$${result.total.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function LoanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'loan')!;
  const [amount, setAmount] = useState("20000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("60");
  const [result, setResult] = useState<{ monthly: number; total: number; interest: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term);
    if ([P, r, n].some(isNaN) || r === 0) return;
    const monthly = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    setResult({ monthly, total, interest: total - P });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Loan Amount ($)">
          <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Annual Interest Rate (%)">
            <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </Field>
          <Field label="Loan Term (months)">
            <Input type="number" value={term} onChange={e => setTerm(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Payment</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Monthly Payment" value={`$${result.monthly.toFixed(2)}`} highlight />
            <ResultBox label="Total Amount Paid" value={`$${result.total.toFixed(2)}`} />
            <ResultBox label="Total Interest" value={`$${result.interest.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function VATCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'vat')!;
  const [price, setPrice] = useState("100");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState("add");
  const [result, setResult] = useState<{ taxAmount: number; finalPrice: number; preVat: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const r = parseFloat(rate) / 100;
    if (isNaN(p) || isNaN(r)) return;
    if (mode === 'add') {
      const taxAmount = p * r;
      setResult({ taxAmount, finalPrice: p + taxAmount, preVat: p });
    } else {
      const preVat = p / (1 + r);
      const taxAmount = p - preVat;
      setResult({ taxAmount, finalPrice: p, preVat });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Price ($)">
          <Input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="VAT Rate (%)">
            <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </Field>
          <Field label="Mode">
            <Select value={mode} onChange={e => setMode(e.target.value)}>
              <option value="add">Add VAT to price</option>
              <option value="remove">Remove VAT from price</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate VAT</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Price excl. VAT" value={`$${result.preVat.toFixed(2)}`} />
            <ResultBox label="VAT Amount" value={`$${result.taxAmount.toFixed(2)}`} />
            <ResultBox label="Price incl. VAT" value={`$${result.finalPrice.toFixed(2)}`} highlight />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function HourlyToSalaryCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'hourly-to-salary')!;
  const [hourly, setHourly] = useState("25");
  const [hours, setHours] = useState("40");
  const [result, setResult] = useState<{ annual: number; monthly: number; weekly: number; daily: number } | null>(null);

  const calculate = () => {
    const h = parseFloat(hourly);
    const w = parseFloat(hours);
    if (isNaN(h) || isNaN(w)) return;
    const weekly = h * w;
    setResult({ annual: weekly * 52, monthly: weekly * 52 / 12, weekly, daily: h * (w / 5) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Hourly Rate ($)">
          <Input type="number" value={hourly} onChange={e => setHourly(e.target.value)} />
        </Field>
        <Field label="Hours per Week">
          <Input type="number" value={hours} onChange={e => setHours(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Convert</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Annual Salary" value={`$${result.annual.toFixed(0)}`} highlight />
            <ResultBox label="Monthly" value={`$${result.monthly.toFixed(0)}`} />
            <ResultBox label="Weekly" value={`$${result.weekly.toFixed(0)}`} />
            <ResultBox label="Daily" value={`$${result.daily.toFixed(0)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SalaryToHourlyCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'salary-to-hourly')!;
  const [salary, setSalary] = useState("60000");
  const [hours, setHours] = useState("40");
  const [result, setResult] = useState<{ hourly: number; daily: number; weekly: number; monthly: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(salary);
    const w = parseFloat(hours);
    if (isNaN(a) || isNaN(w)) return;
    const annual = a;
    const hourly = annual / 52 / w;
    setResult({ hourly, daily: hourly * (w / 5), weekly: hourly * w, monthly: annual / 12 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Annual Salary ($)">
          <Input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
        </Field>
        <Field label="Hours per Week">
          <Input type="number" value={hours} onChange={e => setHours(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Convert</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Hourly Rate" value={`$${result.hourly.toFixed(2)}`} highlight />
            <ResultBox label="Daily" value={`$${result.daily.toFixed(2)}`} />
            <ResultBox label="Weekly" value={`$${result.weekly.toFixed(2)}`} />
            <ResultBox label="Monthly" value={`$${result.monthly.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function APYCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'apy')!;
  const [apr, setApr] = useState("5");
  const [freq, setFreq] = useState("12");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const r = parseFloat(apr) / 100;
    const n = parseFloat(freq);
    if (isNaN(r) || isNaN(n)) return;
    setResult((Math.pow(1 + r / n, n) - 1) * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Annual Percentage Rate (APR, %)">
          <Input type="number" value={apr} onChange={e => setApr(e.target.value)} />
        </Field>
        <Field label="Compounding Frequency">
          <Select value={freq} onChange={e => setFreq(e.target.value)}>
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate APY</CalcButton>
        {result !== null && (
          <ResultBox label="Annual Percentage Yield (APY)" value={`${result.toFixed(4)}%`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function PresentValueCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'present-value')!;
  const [future, setFuture] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");
  const [result, setResult] = useState<{ pv: number; discount: number } | null>(null);

  const calculate = () => {
    const FV = parseFloat(future);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    if ([FV, r, t].some(isNaN)) return;
    const pv = FV / Math.pow(1 + r, t);
    setResult({ pv, discount: FV - pv });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Future Value ($)">
          <Input type="number" value={future} onChange={e => setFuture(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Discount Rate (%)">
            <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </Field>
          <Field label="Time (years)">
            <Input type="number" value={years} onChange={e => setYears(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Present Value</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Present Value" value={`$${result.pv.toFixed(2)}`} highlight />
            <ResultBox label="Discount Amount" value={`$${result.discount.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CarDepreciationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'car-depreciation')!;
  const [price, setPrice] = useState("30000");
  const [age, setAge] = useState("5");
  const [rate, setRate] = useState("15");
  const [result, setResult] = useState<{ currentValue: number; depreciation: number; percentLost: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(price);
    const t = parseFloat(age);
    const r = parseFloat(rate) / 100;
    if ([P, t, r].some(isNaN)) return;
    const currentValue = P * Math.pow(1 - r, t);
    const depreciation = P - currentValue;
    const percentLost = (depreciation / P) * 100;
    setResult({ currentValue, depreciation, percentLost });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Original Price ($)">
          <Input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Age (years)">
            <Input type="number" value={age} onChange={e => setAge(e.target.value)} />
          </Field>
          <Field label="Annual Depreciation Rate (%)">
            <Input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Depreciation</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Current Value" value={`$${result.currentValue.toFixed(0)}`} highlight />
            <ResultBox label="Total Depreciation" value={`$${result.depreciation.toFixed(0)}`} />
            <ResultBox label="Value Lost" value={`${result.percentLost.toFixed(1)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function RentAffordabilityCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rent-affordability')!;
  const [income, setIncome] = useState("5000");
  const [debts, setDebts] = useState("500");
  const [result, setResult] = useState<{ maxRent: number; recommended: number; dti: number } | null>(null);

  const calculate = () => {
    const monthlyIncome = parseFloat(income);
    const monthlyDebts = parseFloat(debts);
    if (isNaN(monthlyIncome) || monthlyIncome <= 0) return;
    const recommended = monthlyIncome * 0.3;
    const maxRent = Math.max(0, monthlyIncome * 0.4 - (isNaN(monthlyDebts) ? 0 : monthlyDebts));
    const dti = ((isNaN(monthlyDebts) ? 0 : monthlyDebts) / monthlyIncome) * 100;
    setResult({ maxRent, recommended, dti });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Gross Monthly Income ($)">
          <Input value={income} onChange={e => setIncome(e.target.value)} type="number" min="0" />
        </Field>
        <Field label="Monthly Debt Payments ($)">
          <Input value={debts} onChange={e => setDebts(e.target.value)} type="number" min="0" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Rent Affordability</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Recommended Rent (30%)" value={`$${result.recommended.toFixed(0)}/mo`} highlight />
            <ResultBox label="Maximum Rent" value={`$${result.maxRent.toFixed(0)}/mo`} />
            <ResultBox label="Debt-to-Income Ratio" value={`${result.dti.toFixed(1)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CDCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cd-calculator')!;
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [months, setMonths] = useState("12");
  const [result, setResult] = useState<{ value: number; interest: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(months) / 12;
    if ([P, r, t].some(isNaN)) return;
    const value = P * Math.pow(1 + r / 12, 12 * t);
    setResult({ value, interest: value - P });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Principal Amount ($)">
          <Input value={principal} onChange={e => setPrincipal(e.target.value)} type="number" min="0" />
        </Field>
        <Field label="Annual Interest Rate (%)">
          <Input value={rate} onChange={e => setRate(e.target.value)} type="number" min="0" step="0.01" />
        </Field>
        <Field label="Term (months)">
          <Input value={months} onChange={e => setMonths(e.target.value)} type="number" min="1" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate CD Value</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Final Value" value={`$${result.value.toFixed(2)}`} highlight />
            <ResultBox label="Interest Earned" value={`$${result.interest.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function USTakeHomePayCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'us-take-home-pay')!;
  const [salary, setSalary] = useState("75000");
  const [filing, setFiling] = useState("single");
  const [stateRate, setStateRate] = useState("5");
  const [overtime, setOvertime] = useState("0");
  const [overtimeRate, setOvertimeRate] = useState("1.5");
  const [result, setResult] = useState<{
    gross: number; federal: number; fica: number; state: number;
    net: number; monthly: number; biweekly: number; weekly: number; hourly: number;
    effectiveRate: number;
  } | null>(null);

  const FED_BRACKETS_SINGLE = [
    { up: 11600,  rate: 0.10 },
    { up: 47150,  rate: 0.12 },
    { up: 100525, rate: 0.22 },
    { up: 191950, rate: 0.24 },
    { up: 243725, rate: 0.32 },
    { up: 609350, rate: 0.35 },
    { up: Infinity, rate: 0.37 },
  ];
  const FED_BRACKETS_MFJ = [
    { up: 23200,  rate: 0.10 },
    { up: 94300,  rate: 0.12 },
    { up: 201050, rate: 0.22 },
    { up: 383900, rate: 0.24 },
    { up: 487450, rate: 0.32 },
    { up: 731200, rate: 0.35 },
    { up: Infinity, rate: 0.37 },
  ];
  const STD_DEDUCTION: Record<string, number> = { single: 14600, mfj: 29200, hoh: 21900 };

  const calcFederal = (taxable: number, brackets: typeof FED_BRACKETS_SINGLE) => {
    let tax = 0, prev = 0;
    for (const b of brackets) {
      if (taxable <= prev) break;
      const chunk = Math.min(taxable - prev, b.up - prev);
      tax += chunk * b.rate;
      prev = b.up;
    }
    return tax;
  };

  const calculate = () => {
    const base = parseFloat(salary);
    const ot = parseFloat(overtime) || 0;
    const otMult = parseFloat(overtimeRate) || 1.5;
    const sr = parseFloat(stateRate) / 100;
    if (isNaN(base) || base <= 0) return;
    const hourlyBase = base / 2080;
    const otPay = ot * hourlyBase * otMult * 52;
    const gross = base + otPay;
    const std = STD_DEDUCTION[filing] ?? 14600;
    const taxable = Math.max(0, gross - std);
    const brackets = filing === "mfj" ? FED_BRACKETS_MFJ : FED_BRACKETS_SINGLE;
    const federal = calcFederal(taxable, brackets);
    const ss = Math.min(gross, 168600) * 0.062;
    const medicare = gross * 0.0145 + (gross > 200000 ? (gross - 200000) * 0.009 : 0);
    const fica = ss + medicare;
    const state = gross * sr;
    const net = gross - federal - fica - state;
    setResult({
      gross, federal, fica, state, net,
      monthly: net / 12, biweekly: net / 26,
      weekly: net / 52, hourly: net / 2080,
      effectiveRate: ((federal + fica + state) / gross) * 100,
    });
  };

  const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <ToolPage tool={tool} relatedSlugs={['hourly-to-salary', 'salary-to-hourly', 'compound-interest', 'vat', 'cd-calculator']}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Annual Salary ($)">
            <Input type="number" value={salary} onChange={e => setSalary(e.target.value)} placeholder="e.g. 75000" />
          </Field>
          <Field label="Filing Status">
            <Select value={filing} onChange={e => setFiling(e.target.value)}>
              <option value="single">Single</option>
              <option value="mfj">Married Filing Jointly</option>
              <option value="hoh">Head of Household</option>
            </Select>
          </Field>
          <Field label="State Income Tax Rate (%)" hint="Enter your state's flat/effective rate">
            <Input type="number" value={stateRate} onChange={e => setStateRate(e.target.value)} placeholder="e.g. 5" />
          </Field>
          <Field label="Weekly Overtime Hours" hint="Hours over 40/week (optional)">
            <Input type="number" value={overtime} min="0" onChange={e => setOvertime(e.target.value)} placeholder="e.g. 5" />
          </Field>
          {parseFloat(overtime) > 0 && (
            <Field label="Overtime Multiplier" hint="1.5 = time-and-a-half">
              <Input type="number" value={overtimeRate} step="0.25" onChange={e => setOvertimeRate(e.target.value)} />
            </Field>
          )}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Take-Home Pay</CalcButton>
        {result && (
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <ResultBox label="Annual Net" value={fmt(result.net)} highlight />
              <ResultBox label="Monthly" value={fmt(result.monthly)} />
              <ResultBox label="Bi-Weekly" value={fmt(result.biweekly)} />
              <ResultBox label="Hourly Net" value={`$${result.hourly.toFixed(2)}`} />
            </div>
            <div className="bg-secondary rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-sm text-foreground mb-3">Tax Breakdown (Annual)</h3>
              {[
                { label: "Gross Income", value: fmt(result.gross) },
                { label: "Federal Income Tax", value: `-${fmt(result.federal)}` },
                { label: "FICA (Social Security + Medicare)", value: `-${fmt(result.fica)}` },
                { label: "State Income Tax (est.)", value: `-${fmt(result.state)}` },
                { label: "Net Take-Home Pay", value: fmt(result.net), bold: true },
                { label: "Effective Tax Rate", value: `${result.effectiveRate.toFixed(1)}%` },
              ].map(row => (
                <div key={row.label} className={`flex justify-between items-center text-sm py-1 ${row.label.startsWith("Net") ? "border-t border-border pt-2 mt-1" : ""}`}>
                  <span className={`text-muted-foreground ${row.bold ? "font-semibold text-foreground" : ""}`}>{row.label}</span>
                  <span className={`font-medium ${row.bold ? "text-primary text-base" : "text-foreground"}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 text-sm text-muted-foreground space-y-2">
        <h3 className="font-semibold text-foreground">How this calculator works</h3>
        <p>Uses 2024 US federal income tax brackets with the standard deduction applied first. FICA includes Social Security (6.2%, up to $168,600 wage base) and Medicare (1.45% + 0.9% Additional Medicare Tax above $200,000). State tax uses the rate you enter. Results are estimates — actual withholding may differ based on allowances, credits, and other deductions.</p>
      </div>
    </ToolPage>
  );
}

// ─── NEW FINANCE TOOLS ─────────────────────────────────────────────────────

export function CreditCardPayoffCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'credit-card-payoff')!;
  const [balance, setBalance] = useState("5000");
  const [apr, setApr] = useState("19.99");
  const [payment, setPayment] = useState("150");
  const [result, setResult] = useState<{months:number;interest:number;total:number}|null>(null);

  const calculate = () => {
    const B = parseFloat(balance), r = parseFloat(apr)/100/12, P = parseFloat(payment);
    if (!B||!r||!P||P<=B*r) { setResult(null); return; }
    const months = Math.ceil(-Math.log(1 - B*r/P) / Math.log(1 + r));
    const total = P * months;
    setResult({ months, interest: total - B, total });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['debt-snowball','debt-avalanche','minimum-payment','loan','compound-interest']}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Field label="Balance ($)"><Input type="number" value={balance} onChange={e=>setBalance(e.target.value)} /></Field>
          <Field label="APR (%)"><Input type="number" value={apr} onChange={e=>setApr(e.target.value)} /></Field>
          <Field label="Monthly Payment ($)"><Input type="number" value={payment} onChange={e=>setPayment(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Payoff</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Months to Pay Off" value={`${result.months} months`} highlight />
          <ResultBox label="Total Interest" value={fmt(result.interest)} />
          <ResultBox label="Total Paid" value={fmt(result.total)} />
          <ResultBox label="Years" value={`${(result.months/12).toFixed(1)} yrs`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground"><strong className="text-foreground">Formula:</strong> n = -log(1 - r×B/P) / log(1+r) where r = APR/12, B = balance, P = payment.</div>
    </ToolPage>
  );
}

export function MinimumPaymentCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'minimum-payment')!;
  const [balance, setBalance] = useState("8000");
  const [apr, setApr] = useState("24.99");
  const [minPct, setMinPct] = useState("2");
  const [minFixed, setMinFixed] = useState("25");
  const [result, setResult] = useState<{months:number;interest:number;total:number;firstMin:number}|null>(null);

  const calculate = () => {
    let B = parseFloat(balance);
    const r = parseFloat(apr)/100/12;
    const pct = parseFloat(minPct)/100;
    const fixed = parseFloat(minFixed);
    if (!B||!r||!pct) return;
    let months = 0, totalPaid = 0, firstMin = 0;
    while (B > 0.01 && months < 1200) {
      const minPay = Math.max(B * pct + B * r, fixed);
      if (months === 0) firstMin = minPay;
      const interest = B * r;
      const pay = Math.min(minPay, B + interest);
      totalPaid += pay;
      B = B + interest - pay;
      months++;
    }
    const orig = parseFloat(balance);
    setResult({ months, interest: totalPaid - orig, total: totalPaid, firstMin });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['credit-card-payoff','debt-snowball','debt-avalanche','loan']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Balance ($)"><Input type="number" value={balance} onChange={e=>setBalance(e.target.value)} /></Field>
          <Field label="APR (%)"><Input type="number" value={apr} onChange={e=>setApr(e.target.value)} /></Field>
          <Field label="Min Payment %" hint="e.g. 2% of balance"><Input type="number" value={minPct} onChange={e=>setMinPct(e.target.value)} /></Field>
          <Field label="Min Fixed ($)" hint="Minimum floor"><Input type="number" value={minFixed} onChange={e=>setMinFixed(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Months to Pay Off" value={`${result.months} mo`} highlight />
          <ResultBox label="Years" value={`${(result.months/12).toFixed(1)}`} />
          <ResultBox label="Total Interest" value={fmt(result.interest)} />
          <ResultBox label="First Min Payment" value={fmt(result.firstMin)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Minimum payments are recalculated each month as a percentage of the outstanding balance, floored at the fixed minimum.</div>
    </ToolPage>
  );
}

export function DebtSnowballCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'debt-snowball')!;
  type Debt = { name:string; balance:string; rate:string; minPayment:string };
  const [debts, setDebts] = useState<Debt[]>([
    { name:"Credit Card A", balance:"3200", rate:"22", minPayment:"64" },
    { name:"Credit Card B", balance:"1500", rate:"18", minPayment:"30" },
    { name:"Personal Loan",  balance:"8000", rate:"9", minPayment:"160" },
  ]);
  const [extra, setExtra] = useState("100");
  const [result, setResult] = useState<{order:string[];totalInterest:number;months:number}|null>(null);

  const update = (i:number, k:keyof Debt, v:string) => setDebts(d => d.map((x,j)=>j===i?{...x,[k]:v}:x));

  const calculate = () => {
    const ds = debts.map(d => ({
      name:d.name,
      balance:parseFloat(d.balance)||0,
      rate:(parseFloat(d.rate)||0)/100/12,
      min:parseFloat(d.minPayment)||0,
      paid:false,
    })).filter(d=>d.balance>0).sort((a,b)=>a.balance-b.balance);
    let extraAmt = parseFloat(extra)||0;
    let months = 0, totalInterest = 0;
    while (ds.some(d=>!d.paid) && months < 600) {
      months++;
      let availableExtra = extraAmt;
      for (let i=0; i<ds.length; i++) {
        if (ds[i].paid) continue;
        const interest = ds[i].balance * ds[i].rate;
        totalInterest += interest;
        ds[i].balance += interest;
        let pay = ds[i].min;
        if (i === ds.findIndex(d=>!d.paid)) pay += availableExtra;
        pay = Math.min(pay, ds[i].balance);
        ds[i].balance -= pay;
        if (ds[i].balance < 0.01) {
          ds[i].paid = true;
          availableExtra += ds[i].min;
        }
      }
    }
    const allDebts = debts.map(d=>d.name.trim()||'Unnamed').filter((_,i)=>parseFloat(debts[i].balance)>0);
    const sorted = [...allDebts].sort((a,b) => {
      const dA = debts.find(d=>d.name===a); const dB = debts.find(d=>d.name===b);
      return (parseFloat(dA?.balance||'0')) - (parseFloat(dB?.balance||'0'));
    });
    setResult({ order: sorted, totalInterest, months });
  };

  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['debt-avalanche','credit-card-payoff','minimum-payment','loan']}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Name</span><span>Balance ($)</span><span>APR (%)</span><span>Min Pay ($)</span>
          </div>
          {debts.map((d,i)=>(
            <div key={i} className="grid grid-cols-4 gap-2">
              <Input value={d.name} onChange={e=>update(i,'name',e.target.value)} />
              <Input type="number" value={d.balance} onChange={e=>update(i,'balance',e.target.value)} />
              <Input type="number" value={d.rate} onChange={e=>update(i,'rate',e.target.value)} />
              <Input type="number" value={d.minPayment} onChange={e=>update(i,'minPayment',e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={()=>setDebts(d=>[...d,{name:'',balance:'',rate:'',minPayment:''}])} className="text-sm text-primary hover:text-primary/80">+ Add debt</button>
        <Field label="Extra Monthly Payment ($)" hint="Applied to smallest balance first">
          <Input type="number" value={extra} onChange={e=>setExtra(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Snowball</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultGrid>
              <ResultBox label="Total Months" value={`${result.months} mo`} highlight />
              <ResultBox label="Years" value={(result.months/12).toFixed(1)} />
              <ResultBox label="Total Interest" value={fmt(result.totalInterest)} />
            </ResultGrid>
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Payoff Order (Snowball)</p>
              {result.order.map((name,i)=><div key={i} className="flex items-center gap-2 text-sm py-1"><span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{i+1}</span><span>{name}</span></div>)}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Debt Snowball: pay minimums on all debts, put extra money toward the smallest balance. When paid, roll that payment to the next.</div>
    </ToolPage>
  );
}

export function DebtAvalancheCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'debt-avalanche')!;
  type Debt = { name:string; balance:string; rate:string; minPayment:string };
  const [debts, setDebts] = useState<Debt[]>([
    { name:"Credit Card A", balance:"3200", rate:"22", minPayment:"64" },
    { name:"Credit Card B", balance:"1500", rate:"18", minPayment:"30" },
    { name:"Personal Loan",  balance:"8000", rate:"9", minPayment:"160" },
  ]);
  const [extra, setExtra] = useState("100");
  const [result, setResult] = useState<{order:string[];totalInterest:number;months:number}|null>(null);

  const update = (i:number, k:keyof Debt, v:string) => setDebts(d => d.map((x,j)=>j===i?{...x,[k]:v}:x));

  const calculate = () => {
    const ds = debts.map(d => ({
      name:d.name,
      balance:parseFloat(d.balance)||0,
      rate:(parseFloat(d.rate)||0)/100/12,
      annualRate:parseFloat(d.rate)||0,
      min:parseFloat(d.minPayment)||0,
      paid:false,
    })).filter(d=>d.balance>0).sort((a,b)=>b.annualRate-a.annualRate);
    let extraAmt = parseFloat(extra)||0;
    let months = 0, totalInterest = 0;
    while (ds.some(d=>!d.paid) && months < 600) {
      months++;
      let availableExtra = extraAmt;
      for (let i=0; i<ds.length; i++) {
        if (ds[i].paid) continue;
        const interest = ds[i].balance * ds[i].rate;
        totalInterest += interest;
        ds[i].balance += interest;
        let pay = ds[i].min;
        if (i === ds.findIndex(d=>!d.paid)) pay += availableExtra;
        pay = Math.min(pay, ds[i].balance);
        ds[i].balance -= pay;
        if (ds[i].balance < 0.01) {
          ds[i].paid = true;
          availableExtra += ds[i].min;
        }
      }
    }
    const sorted = debts.filter(d=>parseFloat(d.balance)>0).map(d=>d.name.trim()||'Unnamed').sort((a,b) => {
      const dA = debts.find(d=>d.name===a); const dB = debts.find(d=>d.name===b);
      return (parseFloat(dB?.rate||'0')) - (parseFloat(dA?.rate||'0'));
    });
    setResult({ order: sorted, totalInterest, months });
  };

  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['debt-snowball','credit-card-payoff','minimum-payment','loan']}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Name</span><span>Balance ($)</span><span>APR (%)</span><span>Min Pay ($)</span>
          </div>
          {debts.map((d,i)=>(
            <div key={i} className="grid grid-cols-4 gap-2">
              <Input value={d.name} onChange={e=>update(i,'name',e.target.value)} />
              <Input type="number" value={d.balance} onChange={e=>update(i,'balance',e.target.value)} />
              <Input type="number" value={d.rate} onChange={e=>update(i,'rate',e.target.value)} />
              <Input type="number" value={d.minPayment} onChange={e=>update(i,'minPayment',e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={()=>setDebts(d=>[...d,{name:'',balance:'',rate:'',minPayment:''}])} className="text-sm text-primary hover:text-primary/80">+ Add debt</button>
        <Field label="Extra Monthly Payment ($)" hint="Applied to highest-rate debt first">
          <Input type="number" value={extra} onChange={e=>setExtra(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Avalanche</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultGrid>
              <ResultBox label="Total Months" value={`${result.months} mo`} highlight />
              <ResultBox label="Years" value={(result.months/12).toFixed(1)} />
              <ResultBox label="Total Interest" value={fmt(result.totalInterest)} />
            </ResultGrid>
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Payoff Order (Avalanche)</p>
              {result.order.map((name,i)=><div key={i} className="flex items-center gap-2 text-sm py-1"><span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{i+1}</span><span>{name}</span></div>)}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Debt Avalanche: pay minimums on all debts, put extra money toward the highest-interest debt. Saves the most total interest.</div>
    </ToolPage>
  );
}

export function MortgageAmortizationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mortgage-amortization')!;
  const [price, setPrice] = useState("350000");
  const [down, setDown] = useState("70000");
  const [rate, setRate] = useState("7.0");
  const [term, setTerm] = useState("30");
  const [result, setResult] = useState<{payment:number;totalInterest:number;totalPaid:number;loan:number;table:{year:number;balance:number;interest:number;principal:number}[]}|null>(null);

  const calculate = () => {
    const P = parseFloat(price)-parseFloat(down); const r = parseFloat(rate)/100/12; const n = parseFloat(term)*12;
    if (!P||!r||!n) return;
    const payment = P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
    const table: typeof result extends null ? never : NonNullable<typeof result>['table'] = [];
    let balance = P;
    for (let year = 1; year <= parseFloat(term); year++) {
      let yearInterest = 0, yearPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const interest = balance * r;
        const principal = payment - interest;
        yearInterest += interest;
        yearPrincipal += principal;
        balance = Math.max(0, balance - principal);
      }
      table.push({ year, balance, interest: yearInterest, principal: yearPrincipal });
    }
    setResult({ payment, totalInterest: payment*n - P, totalPaid: payment*n, loan: P, table });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['mortgage-overpayment','rent-vs-buy','refinance-calculator','loan','compound-interest']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Home Price ($)"><Input type="number" value={price} onChange={e=>setPrice(e.target.value)} /></Field>
          <Field label="Down Payment ($)"><Input type="number" value={down} onChange={e=>setDown(e.target.value)} /></Field>
          <Field label="Interest Rate (%)"><Input type="number" value={rate} step="0.1" onChange={e=>setRate(e.target.value)} /></Field>
          <Field label="Loan Term (years)">
            <Select value={term} onChange={e=>setTerm(e.target.value)}>
              <option value="10">10 years</option><option value="15">15 years</option>
              <option value="20">20 years</option><option value="30">30 years</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Generate Amortization Schedule</CalcButton>
        {result && (
          <div className="space-y-4">
            <ResultGrid>
              <ResultBox label="Monthly Payment" value={fmt(result.payment)} highlight />
              <ResultBox label="Loan Amount" value={fmt(result.loan)} />
              <ResultBox label="Total Interest" value={fmt(result.totalInterest)} />
              <ResultBox label="Total Cost" value={fmt(result.totalPaid + parseFloat(down))} />
            </ResultGrid>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="text-muted-foreground border-b border-border">
                  <th className="text-left py-2">Year</th><th className="text-right py-2">Principal</th>
                  <th className="text-right py-2">Interest</th><th className="text-right py-2">Balance</th>
                </tr></thead>
                <tbody>
                  {result.table.map(r=>(
                    <tr key={r.year} className="border-b border-border/50 hover:bg-secondary/50">
                      <td className="py-1.5">{r.year}</td>
                      <td className="text-right">{fmt(r.principal)}</td>
                      <td className="text-right">{fmt(r.interest)}</td>
                      <td className="text-right">{fmt(r.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function MortgageOverpaymentCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mortgage-overpayment')!;
  const [loan, setLoan] = useState("280000");
  const [rate, setRate] = useState("7.0");
  const [term, setTerm] = useState("30");
  const [extra, setExtra] = useState("200");
  const [result, setResult] = useState<{normalMonths:number;newMonths:number;monthsSaved:number;interestSaved:number;normalPayment:number}|null>(null);

  const calcMonths = (P:number,r:number,pmt:number) => {
    if (pmt <= P*r) return Infinity;
    return Math.ceil(-Math.log(1-P*r/pmt)/Math.log(1+r));
  };

  const calculate = () => {
    const P = parseFloat(loan), r = parseFloat(rate)/100/12, n = parseFloat(term)*12;
    if (!P||!r||!n) return;
    const pmt = P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const extraAmt = parseFloat(extra)||0;
    const normalMonths = n;
    const newMonths = calcMonths(P, r, pmt+extraAmt);
    const monthsSaved = normalMonths - newMonths;
    const normalInterest = pmt * normalMonths - P;
    const newInterest = (pmt+extraAmt)*newMonths - P;
    setResult({ normalMonths, newMonths, monthsSaved, interestSaved: normalInterest-newInterest, normalPayment: pmt });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['mortgage-amortization','loan','compound-interest','refinance-calculator']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Loan Amount ($)"><Input type="number" value={loan} onChange={e=>setLoan(e.target.value)} /></Field>
          <Field label="Interest Rate (%)"><Input type="number" value={rate} step="0.1" onChange={e=>setRate(e.target.value)} /></Field>
          <Field label="Term (years)"><Input type="number" value={term} onChange={e=>setTerm(e.target.value)} /></Field>
          <Field label="Extra Monthly Payment ($)"><Input type="number" value={extra} onChange={e=>setExtra(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Savings</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Months Saved" value={`${result.monthsSaved} months`} highlight />
          <ResultBox label="Years Saved" value={(result.monthsSaved/12).toFixed(1)} />
          <ResultBox label="Interest Saved" value={fmt(result.interestSaved)} />
          <ResultBox label="Normal Payment" value={fmt(result.normalPayment)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Making extra mortgage payments reduces your principal faster, shortening your loan term and saving significant interest.</div>
    </ToolPage>
  );
}

export function RentVsBuyCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rent-vs-buy')!;
  const [homePrice, setHomePrice] = useState("400000");
  const [down, setDown] = useState("80000");
  const [mortgageRate, setMortgageRate] = useState("7.0");
  const [propertyTax, setPropertyTax] = useState("1.2");
  const [maintenance, setMaintenance] = useState("1.0");
  const [monthlyRent, setMonthlyRent] = useState("2200");
  const [rentIncrease, setRentIncrease] = useState("3");
  const [appreciation, setAppreciation] = useState("4");
  const [years, setYears] = useState("7");
  const [result, setResult] = useState<{buyCost:number;rentCost:number;breakEven:number;homeValue:number;equity:number}|null>(null);

  const calculate = () => {
    const HP = parseFloat(homePrice), DP = parseFloat(down);
    const loan = HP - DP, r = parseFloat(mortgageRate)/100/12, n = 30*12;
    const pmt = loan * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
    const ptax = parseFloat(propertyTax)/100/12 * HP;
    const maint = parseFloat(maintenance)/100/12 * HP;
    const yrs = parseInt(years);
    const appRate = parseFloat(appreciation)/100;
    const rentInc = parseFloat(rentIncrease)/100;

    // Buy costs
    let balance = loan;
    const monthR = parseFloat(mortgageRate)/100/12;
    for (let m = 0; m < yrs*12; m++) balance = Math.max(0, balance - (pmt - balance*monthR));
    const homeValue = HP * Math.pow(1+appRate, yrs);
    const equity = homeValue - balance;
    const totalBuy = (pmt + ptax + maint) * yrs * 12 + DP;

    // Rent costs
    let totalRent = 0, curRent = parseFloat(monthlyRent);
    for (let y = 0; y < yrs; y++) { totalRent += curRent*12; curRent *= (1+rentInc); }

    // Break-even approx: first year where buy is cheaper (net of equity)
    let breakEven = yrs;
    for (let y = 1; y <= 30; y++) {
      const hv = HP * Math.pow(1+appRate, y);
      let bal = loan;
      for (let m = 0; m < y*12; m++) bal = Math.max(0, bal-(pmt-bal*monthR));
      const eq = hv - bal;
      const bc = (pmt+ptax+maint)*y*12 + DP - eq;
      let rc = 0; let cr = parseFloat(monthlyRent);
      for (let yi = 0; yi < y; yi++) { rc += cr*12; cr *= (1+rentInc); }
      if (bc < rc) { breakEven = y; break; }
    }

    setResult({ buyCost: totalBuy, rentCost: totalRent, breakEven, homeValue, equity });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['mortgage-amortization','mortgage-overpayment','loan','rent-affordability']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Home Price ($)"><Input type="number" value={homePrice} onChange={e=>setHomePrice(e.target.value)} /></Field>
          <Field label="Down Payment ($)"><Input type="number" value={down} onChange={e=>setDown(e.target.value)} /></Field>
          <Field label="Mortgage Rate (%)"><Input type="number" value={mortgageRate} step="0.1" onChange={e=>setMortgageRate(e.target.value)} /></Field>
          <Field label="Property Tax (%/yr)"><Input type="number" value={propertyTax} step="0.1" onChange={e=>setPropertyTax(e.target.value)} /></Field>
          <Field label="Maintenance (%/yr)"><Input type="number" value={maintenance} step="0.1" onChange={e=>setMaintenance(e.target.value)} /></Field>
          <Field label="Monthly Rent ($)"><Input type="number" value={monthlyRent} onChange={e=>setMonthlyRent(e.target.value)} /></Field>
          <Field label="Rent Increase (%/yr)"><Input type="number" value={rentIncrease} step="0.5" onChange={e=>setRentIncrease(e.target.value)} /></Field>
          <Field label="Home Appreciation (%/yr)"><Input type="number" value={appreciation} step="0.5" onChange={e=>setAppreciation(e.target.value)} /></Field>
          <Field label="Years to Compare"><Input type="number" value={years} onChange={e=>setYears(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Compare Rent vs Buy</CalcButton>
        {result && <div className="space-y-3">
          <ResultGrid>
            <ResultBox label={`Total Buy Cost (${years} yrs)`} value={fmt(result.buyCost)} />
            <ResultBox label={`Total Rent Cost (${years} yrs)`} value={fmt(result.rentCost)} />
            <ResultBox label="Break-Even Year" value={`Year ${result.breakEven}`} highlight />
            <ResultBox label="Projected Equity" value={fmt(result.equity)} />
          </ResultGrid>
          <div className="bg-secondary rounded-xl p-3 text-sm text-center font-medium">
            {result.buyCost < result.rentCost
              ? `Buying is cheaper by ${fmt(result.rentCost - result.buyCost)} over ${years} years`
              : `Renting is cheaper by ${fmt(result.buyCost - result.rentCost)} over ${years} years`}
          </div>
        </div>}
      </div>
    </ToolPage>
  );
}

export function RefinanceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'refinance-calculator')!;
  const [currentBalance, setCurrentBalance] = useState("250000");
  const [currentRate, setCurrentRate] = useState("8.0");
  const [currentTerm, setCurrentTerm] = useState("25");
  const [newRate, setNewRate] = useState("6.5");
  const [newTerm, setNewTerm] = useState("25");
  const [closingCosts, setClosingCosts] = useState("4000");
  const [result, setResult] = useState<{currentPmt:number;newPmt:number;savings:number;breakEven:number;lifetimeSavings:number}|null>(null);

  const pmt = (P:number,r:number,n:number) => P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  const calculate = () => {
    const P = parseFloat(currentBalance);
    const currentPmt = pmt(P, parseFloat(currentRate)/100/12, parseFloat(currentTerm)*12);
    const newPmt = pmt(P, parseFloat(newRate)/100/12, parseFloat(newTerm)*12);
    const monthlySavings = currentPmt - newPmt;
    const cc = parseFloat(closingCosts)||0;
    const breakEven = monthlySavings > 0 ? Math.ceil(cc/monthlySavings) : Infinity;
    const lifetimeSavings = monthlySavings * parseFloat(newTerm) * 12 - cc;
    setResult({ currentPmt, newPmt, savings: monthlySavings, breakEven, lifetimeSavings });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['mortgage-amortization','mortgage-overpayment','loan','rent-vs-buy']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Current Balance ($)"><Input type="number" value={currentBalance} onChange={e=>setCurrentBalance(e.target.value)} /></Field>
          <Field label="Current Rate (%)"><Input type="number" value={currentRate} step="0.1" onChange={e=>setCurrentRate(e.target.value)} /></Field>
          <Field label="Current Term Left (yrs)"><Input type="number" value={currentTerm} onChange={e=>setCurrentTerm(e.target.value)} /></Field>
          <Field label="New Rate (%)"><Input type="number" value={newRate} step="0.1" onChange={e=>setNewRate(e.target.value)} /></Field>
          <Field label="New Term (yrs)"><Input type="number" value={newTerm} onChange={e=>setNewTerm(e.target.value)} /></Field>
          <Field label="Closing Costs ($)"><Input type="number" value={closingCosts} onChange={e=>setClosingCosts(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Refinance</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Current Payment" value={fmt(result.currentPmt)} />
          <ResultBox label="New Payment" value={fmt(result.newPmt)} highlight />
          <ResultBox label="Monthly Savings" value={fmt(result.savings)} />
          <ResultBox label="Break-Even" value={`${result.breakEven === Infinity ? 'Never' : result.breakEven + ' months'}`} />
          <ResultBox label="Lifetime Savings" value={fmt(result.lifetimeSavings)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Break-even = closing costs / monthly savings. Refinancing makes sense if you plan to stay in your home beyond the break-even point.</div>
    </ToolPage>
  );
}

export function NetWorthCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'net-worth')!;
  type Item = { label:string; value:string };
  const [assets, setAssets] = useState<Item[]>([
    {label:'Cash & Savings',value:'15000'},{label:'Investments',value:'45000'},
    {label:'Home Value',value:'350000'},{label:'Vehicle',value:'18000'},
  ]);
  const [liabilities, setLiabilities] = useState<Item[]>([
    {label:'Mortgage Balance',value:'280000'},{label:'Car Loan',value:'12000'},
    {label:'Credit Cards',value:'3500'},{label:'Student Loans',value:'25000'},
  ]);
  const [result, setResult] = useState<{assets:number;liabilities:number;netWorth:number}|null>(null);

  const updateItem = (list:'a'|'l', i:number, k:keyof Item, v:string) => {
    if (list==='a') setAssets(a=>a.map((x,j)=>j===i?{...x,[k]:v}:x));
    else setLiabilities(a=>a.map((x,j)=>j===i?{...x,[k]:v}:x));
  };

  const calculate = () => {
    const totalAssets = assets.reduce((s,a)=>s+(parseFloat(a.value)||0),0);
    const totalLiab = liabilities.reduce((s,a)=>s+(parseFloat(a.value)||0),0);
    setResult({ assets: totalAssets, liabilities: totalLiab, netWorth: totalAssets-totalLiab });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0})}`;
  const ItemList = ({items,list,title}:{items:Item[];list:'a'|'l';title:string}) => (
    <div>
      <p className="text-sm font-semibold text-foreground mb-2">{title}</p>
      <div className="space-y-2">
        {items.map((item,i)=>(
          <div key={i} className="grid grid-cols-2 gap-2">
            <Input value={item.label} onChange={e=>updateItem(list,i,'label',e.target.value)} placeholder="Label" />
            <Input type="number" value={item.value} onChange={e=>updateItem(list,i,'value',e.target.value)} placeholder="Amount" />
          </div>
        ))}
      </div>
      <button onClick={()=>list==='a'?setAssets(a=>[...a,{label:'',value:''}]):setLiabilities(a=>[...a,{label:'',value:''}])} className="text-sm text-primary hover:text-primary/80 mt-2">+ Add item</button>
    </div>
  );

  return (
    <ToolPage tool={tool} relatedSlugs={['budget-50-30-20','emergency-fund','savings-goal','compound-interest']}>
      <div className="space-y-6">
        <ItemList items={assets} list="a" title="Assets" />
        <ItemList items={liabilities} list="l" title="Liabilities" />
        <CalcButton onClick={calculate} className="w-full">Calculate Net Worth</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Total Assets" value={fmt(result.assets)} />
          <ResultBox label="Total Liabilities" value={fmt(result.liabilities)} />
          <ResultBox label="Net Worth" value={fmt(result.netWorth)} highlight />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Net Worth = Total Assets - Total Liabilities. Tracking net worth regularly is a key indicator of financial health.</div>
    </ToolPage>
  );
}

export function EmergencyFundCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'emergency-fund')!;
  const [housing, setHousing] = useState("1800");
  const [food, setFood] = useState("500");
  const [transport, setTransport] = useState("400");
  const [utilities, setUtilities] = useState("200");
  const [insurance, setInsurance] = useState("300");
  const [other, setOther] = useState("200");
  const [months, setMonths] = useState("6");
  const [saved, setSaved] = useState("2000");
  const [result, setResult] = useState<{monthly:number;target:number;remaining:number;monthsToGoal:number;progress:number}|null>(null);

  const calculate = () => {
    const monthly = [housing,food,transport,utilities,insurance,other].reduce((s,v)=>s+(parseFloat(v)||0),0);
    const target = monthly * (parseFloat(months)||6);
    const rem = Math.max(0, target - (parseFloat(saved)||0));
    const monthlySavingsNeeded = rem / 12;
    const progress = Math.min(100, ((parseFloat(saved)||0)/target)*100);
    setResult({ monthly, target, remaining: rem, monthsToGoal: monthlySavingsNeeded, progress });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['net-worth','savings-goal','budget-50-30-20','compound-interest']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Housing/Rent ($)"><Input type="number" value={housing} onChange={e=>setHousing(e.target.value)} /></Field>
          <Field label="Food & Groceries ($)"><Input type="number" value={food} onChange={e=>setFood(e.target.value)} /></Field>
          <Field label="Transportation ($)"><Input type="number" value={transport} onChange={e=>setTransport(e.target.value)} /></Field>
          <Field label="Utilities ($)"><Input type="number" value={utilities} onChange={e=>setUtilities(e.target.value)} /></Field>
          <Field label="Insurance ($)"><Input type="number" value={insurance} onChange={e=>setInsurance(e.target.value)} /></Field>
          <Field label="Other Essentials ($)"><Input type="number" value={other} onChange={e=>setOther(e.target.value)} /></Field>
          <Field label="Months of Coverage" hint="3-6 months recommended">
            <Select value={months} onChange={e=>setMonths(e.target.value)}>
              <option value="3">3 months</option><option value="4">4 months</option>
              <option value="5">5 months</option><option value="6">6 months</option>
              <option value="9">9 months</option><option value="12">12 months</option>
            </Select>
          </Field>
          <Field label="Currently Saved ($)"><Input type="number" value={saved} onChange={e=>setSaved(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Emergency Fund</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultGrid>
              <ResultBox label="Monthly Expenses" value={fmt(result.monthly)} />
              <ResultBox label="Target Fund" value={fmt(result.target)} highlight />
              <ResultBox label="Still Needed" value={fmt(result.remaining)} />
            </ResultGrid>
            <div className="bg-secondary rounded-xl p-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{result.progress.toFixed(1)}%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{width:`${result.progress}%`}} />
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function SavingsGoalCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'savings-goal')!;
  const [target, setTarget] = useState("20000");
  const [current, setCurrent] = useState("2000");
  const [rate, setRate] = useState("4.5");
  const [years, setYears] = useState("3");
  const [result, setResult] = useState<{monthly:number;totalContrib:number;interest:number}|null>(null);

  const calculate = () => {
    const FV = parseFloat(target), PV = parseFloat(current);
    const r = parseFloat(rate)/100/12, n = parseFloat(years)*12;
    if (!FV||!n) return;
    const FVofPV = PV * Math.pow(1+r, n);
    const remaining = FV - FVofPV;
    const monthly = remaining * r / (Math.pow(1+r,n) - 1);
    const totalContrib = monthly * n + PV;
    setResult({ monthly: Math.max(0, monthly), totalContrib, interest: FV - totalContrib });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['emergency-fund','compound-interest','net-worth','budget-50-30-20']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Savings Goal ($)"><Input type="number" value={target} onChange={e=>setTarget(e.target.value)} /></Field>
          <Field label="Current Savings ($)"><Input type="number" value={current} onChange={e=>setCurrent(e.target.value)} /></Field>
          <Field label="Annual Interest Rate (%)"><Input type="number" value={rate} step="0.1" onChange={e=>setRate(e.target.value)} /></Field>
          <Field label="Time (years)"><Input type="number" value={years} onChange={e=>setYears(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Monthly Savings Needed" value={fmt(result.monthly)} highlight />
          <ResultBox label="Total Contributions" value={fmt(result.totalContrib)} />
          <ResultBox label="Interest Earned" value={fmt(result.interest)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Uses the future value of annuity formula to solve for the required monthly contribution to reach your goal.</div>
    </ToolPage>
  );
}

export function Budget503020Calculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'budget-50-30-20')!;
  const [income, setIncome] = useState("5000");
  const [period, setPeriod] = useState("monthly");
  const [result, setResult] = useState<{monthly:number;needs:number;wants:number;savings:number}|null>(null);

  const calculate = () => {
    let monthly = parseFloat(income)||0;
    if (period==='annual') monthly /= 12;
    else if (period==='biweekly') monthly = monthly*26/12;
    else if (period==='weekly') monthly = monthly*52/12;
    setResult({ monthly, needs: monthly*0.5, wants: monthly*0.3, savings: monthly*0.2 });
  };

  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['net-worth','emergency-fund','savings-goal','us-take-home-pay']}>
      <div className="space-y-4">
        <Field label="Income Amount">
          <Input type="number" value={income} onChange={e=>setIncome(e.target.value)} />
        </Field>
        <Field label="Pay Period">
          <Select value={period} onChange={e=>setPeriod(e.target.value)}>
            <option value="monthly">Monthly</option><option value="biweekly">Bi-Weekly</option>
            <option value="weekly">Weekly</option><option value="annual">Annual</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Budget</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultBox label="Monthly Take-Home" value={fmt(result.monthly)} />
            <div className="space-y-2">
              {[
                {label:'Needs (50%) — Housing, Food, Transport, Bills', val:result.needs, color:'bg-blue-500'},
                {label:'Wants (30%) — Dining, Entertainment, Hobbies', val:result.wants, color:'bg-lime-500'},
                {label:'Savings (20%) — Emergency Fund, Investments, Debt', val:result.savings, color:'bg-purple-500'},
              ].map(item=>(
                <div key={item.label} className="bg-secondary rounded-xl p-3">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{fmt(item.val)}</span>
                  </div>
                  <div className="h-1.5 bg-background rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{width:item.label.includes('50')?"50%":item.label.includes('30')?"30%":"20%"}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">The 50/30/20 rule: allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment.</div>
    </ToolPage>
  );
}

export function RuleOf72Calculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rule-of-72')!;
  const [rate, setRate] = useState("7");
  const [result, setResult] = useState<{ exact: number; rule72: number; rule69: number } | null>(null);

  const calc = () => {
    const r = parseFloat(rate);
    if (isNaN(r) || r <= 0) return;
    setResult({ exact: Math.log(2) / Math.log(1 + r / 100), rule72: 72 / r, rule69: 69.3 / r });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Annual Interest Rate (%)">
          <Input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Doubling Time</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Rule of 72 (years)" value={result.rule72.toFixed(2)} highlight />
            <ResultBox label="Exact (years)" value={result.exact.toFixed(2)} />
            <ResultBox label="Rule of 69.3 (years)" value={result.rule69.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Formula: Years to double = 72 / rate. Exact: ln(2) / ln(1 + r/100). Rule of 69.3 is more accurate for continuous compounding.</div>
    </ToolPage>
  );
}

export function APRCalculatorTool() {
  const tool = ALL_TOOLS.find(t => t.slug === 'apr-calculator')!;
  const [principal, setPrincipal] = useState("10000");
  const [fee, setFee] = useState("200");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");
  const [result, setResult] = useState<{ apr: number; totalCost: number; monthlyPayment: number } | null>(null);

  const calc = () => {
    const P = parseFloat(principal), F = parseFloat(fee), r = parseFloat(rate) / 100 / 12, n = parseFloat(years) * 12;
    if ([P, F, r, n].some(isNaN)) return;
    const monthly = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalCost = monthly * n - P + F;
    const pWithFee = P - F;
    let lo = 0, hi = 1, aprMonthly = r;
    for (let i = 0; i < 200; i++) {
      aprMonthly = (lo + hi) / 2;
      const pv = monthly * (1 - Math.pow(1 + aprMonthly, -n)) / aprMonthly;
      if (pv > pWithFee) lo = aprMonthly; else hi = aprMonthly;
    }
    setResult({ apr: aprMonthly * 12 * 100, totalCost, monthlyPayment: monthly });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Loan Amount ($)"><Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} /></Field>
          <Field label="Total Fees ($)"><Input type="number" value={fee} onChange={e => setFee(e.target.value)} /></Field>
          <Field label="Interest Rate (%)"><Input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.1" /></Field>
          <Field label="Loan Term (years)"><Input type="number" value={years} onChange={e => setYears(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate APR</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="APR" value={`${result.apr.toFixed(3)}%`} highlight />
            <ResultBox label="Monthly Payment" value={`$${result.monthlyPayment.toFixed(2)}`} />
            <ResultBox label="Total Extra Cost (fees + interest)" value={`$${result.totalCost.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">APR includes the nominal interest rate plus origination fees, giving a true annual cost of borrowing.</div>
    </ToolPage>
  );
}

export function LoanComparisonCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'loan-comparison')!;
  const [a, setA] = useState({ amount: "20000", rate: "5.5", years: "5" });
  const [b, setB] = useState({ amount: "20000", rate: "7.2", years: "3" });
  const [result, setResult] = useState<{ loanA: { monthly: number; total: number; interest: number }; loanB: { monthly: number; total: number; interest: number } } | null>(null);

  const calcLoan = (amount: string, rate: string, years: string) => {
    const P = parseFloat(amount), r = parseFloat(rate) / 100 / 12, n = parseFloat(years) * 12;
    if ([P, r, n].some(isNaN) || r === 0) return null;
    const monthly = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return { monthly, total, interest: total - P };
  };

  const calc = () => {
    const la = calcLoan(a.amount, a.rate, a.years);
    const lb = calcLoan(b.amount, b.rate, b.years);
    if (la && lb) setResult({ loanA: la, loanB: lb });
  };

  const fmt = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[{ label: 'Loan A', state: a, set: setA }, { label: 'Loan B', state: b, set: setB }].map(({ label, state, set }) => (
            <div key={label} className="bg-secondary rounded-xl p-3 space-y-2">
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <Field label="Amount ($)"><Input type="number" value={state.amount} onChange={e => set(p => ({ ...p, amount: e.target.value }))} /></Field>
              <Field label="Rate (%)"><Input type="number" value={state.rate} onChange={e => set(p => ({ ...p, rate: e.target.value }))} step="0.1" /></Field>
              <Field label="Term (years)"><Input type="number" value={state.years} onChange={e => set(p => ({ ...p, years: e.target.value }))} /></Field>
            </div>
          ))}
        </div>
        <CalcButton onClick={calc} className="w-full">Compare Loans</CalcButton>
        {result && (
          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Loan A', d: result.loanA }, { label: 'Loan B', d: result.loanB }].map(({ label, d }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-3 space-y-2">
                <p className="font-semibold text-sm text-primary">{label}</p>
                <div className="text-xs text-muted-foreground">Monthly</div>
                <div className="font-bold text-foreground">{fmt(d.monthly)}</div>
                <div className="text-xs text-muted-foreground">Total Cost</div>
                <div className="font-semibold text-foreground">{fmt(d.total)}</div>
                <div className="text-xs text-muted-foreground">Total Interest</div>
                <div className="font-semibold text-orange-500">{fmt(d.interest)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function InvestmentDoublingTimeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'investment-doubling-time')!;
  const [principal, setPrincipal] = useState("5000");
  const [result, setResult] = useState<{ rate: number; years: number }[] | null>(null);

  const calc = () => {
    const P = parseFloat(principal);
    if (isNaN(P) || P <= 0) return;
    const rates = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15];
    setResult(rates.map(r => ({ rate: r, years: 72 / r })));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Initial Investment ($)">
          <Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
        </Field>
        <CalcButton onClick={calc} className="w-full">Show Doubling Times</CalcButton>
        {result && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border">
                <th className="py-2 text-left text-muted-foreground">Annual Rate</th>
                <th className="py-2 text-left text-muted-foreground">Years to Double</th>
                <th className="py-2 text-left text-muted-foreground">Value After Doubling</th>
              </tr></thead>
              <tbody>{result.map(row => (
                <tr key={row.rate} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-2 font-semibold text-primary">{row.rate}%</td>
                  <td className="py-2 text-foreground">{row.years.toFixed(1)} yrs</td>
                  <td className="py-2 text-foreground">${(parseFloat(principal) * 2).toLocaleString()}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Uses the Rule of 72: Years to double = 72 / annual return rate. Higher returns = faster doubling.</div>
    </ToolPage>
  );
}

export function PaybackPeriodCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'payback-period')!;
  const [initial, setInitial] = useState("50000");
  const [cashflows, setCashflows] = useState("12000\n15000\n18000\n20000\n22000");
  const [result, setResult] = useState<{ years: number; fraction: number; simple: boolean } | null>(null);

  const calc = () => {
    const inv = parseFloat(initial);
    const flows = cashflows.split('\n').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    if (isNaN(inv) || flows.length === 0) return;
    let cumulative = 0;
    for (let i = 0; i < flows.length; i++) {
      cumulative += flows[i];
      if (cumulative >= inv) {
        const prev = cumulative - flows[i];
        const fraction = (inv - prev) / flows[i];
        setResult({ years: i, fraction, simple: true });
        return;
      }
    }
    setResult(null);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Initial Investment ($)">
          <Input type="number" value={initial} onChange={e => setInitial(e.target.value)} />
        </Field>
        <Field label="Annual Cash Flows ($, one per line)">
          <textarea value={cashflows} onChange={e => setCashflows(e.target.value)} rows={5}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Payback Period</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Payback Period" value={`${result.years} yr ${Math.round(result.fraction * 12)} mo`} highlight />
            <ResultBox label="Full Years" value={`${result.years}`} />
            <ResultBox label="Fractional Year" value={`${(result.fraction).toFixed(3)}`} />
          </ResultGrid>
        )}
        {!result && initial && cashflows && <p className="text-sm text-orange-500">Investment not recovered within provided cash flows.</p>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Payback period = number of years to recover the initial investment from cumulative cash flows.</div>
    </ToolPage>
  );
}

export function ReverseDiscountCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'reverse-discount')!;
  const [salePrice, setSalePrice] = useState("85");
  const [discountPct, setDiscountPct] = useState("15");
  const [result, setResult] = useState<{ original: number; savings: number } | null>(null);

  const calc = () => {
    const sale = parseFloat(salePrice), disc = parseFloat(discountPct);
    if (isNaN(sale) || isNaN(disc) || disc >= 100) return;
    const original = sale / (1 - disc / 100);
    setResult({ original, savings: original - sale });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Sale Price ($)"><Input type="number" value={salePrice} onChange={e => setSalePrice(e.target.value)} step="0.01" /></Field>
          <Field label="Discount (%)"><Input type="number" value={discountPct} onChange={e => setDiscountPct(e.target.value)} step="0.1" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Find Original Price</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Original Price" value={`$${result.original.toFixed(2)}`} highlight />
            <ResultBox label="Your Savings" value={`$${result.savings.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Formula: Original price = Sale price / (1 - discount%). Use when you know the final price and discount applied.</div>
    </ToolPage>
  );
}
