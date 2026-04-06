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
