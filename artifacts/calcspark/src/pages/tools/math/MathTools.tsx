import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function PercentageCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'percentage')!;
  const [mode, setMode] = useState("of");
  const [a, setA] = useState("20");
  const [b, setB] = useState("80");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const av = parseFloat(a), bv = parseFloat(b);
    if (isNaN(av) || isNaN(bv)) return;
    if (mode === 'of') setResult(`${(av / 100) * bv}`);
    else if (mode === 'what') setResult(`${((av / bv) * 100).toFixed(4)}%`);
    else if (mode === 'change') setResult(`${(((bv - av) / av) * 100).toFixed(4)}%`);
    else if (mode === 'increase') setResult(`${bv * (1 + av / 100)}`);
    else if (mode === 'decrease') setResult(`${bv * (1 - av / 100)}`);
  };

  const labels: Record<string, [string, string]> = {
    of: [`Percentage (%)`, `Of what number?`],
    what: [`Value`, `Total / whole`],
    change: [`From`, `To`],
    increase: [`Increase %`, `Original value`],
    decrease: [`Decrease %`, `Original value`],
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['square-root', 'fraction', 'ratio', 'percent-off', 'marks-percentage']}>
      <div className="space-y-4">
        <Field label="Calculation Type">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="of">What is X% of Y?</option>
            <option value="what">X is what % of Y?</option>
            <option value="change">% change from X to Y</option>
            <option value="increase">Increase Y by X%</option>
            <option value="decrease">Decrease Y by X%</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label={labels[mode][0]}><Input type="number" value={a} onChange={e => setA(e.target.value)} /></Field>
          <Field label={labels[mode][1]}><Input type="number" value={b} onChange={e => setB(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result !== null && <ResultBox label="Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function FractionCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'fraction')!;
  const [n1, setN1] = useState("1");
  const [d1, setD1] = useState("2");
  const [op, setOp] = useState("+");
  const [n2, setN2] = useState("1");
  const [d2, setD2] = useState("3");
  const [result, setResult] = useState<{ n: number; d: number; decimal: number } | null>(null);

  const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);

  const calculate = () => {
    const num1 = parseInt(n1), den1 = parseInt(d1), num2 = parseInt(n2), den2 = parseInt(d2);
    if ([num1, den1, num2, den2].some(isNaN) || den1 === 0 || den2 === 0) return;
    let rn: number, rd: number;
    if (op === '+') { rn = num1 * den2 + num2 * den1; rd = den1 * den2; }
    else if (op === '-') { rn = num1 * den2 - num2 * den1; rd = den1 * den2; }
    else if (op === '*') { rn = num1 * num2; rd = den1 * den2; }
    else { rn = num1 * den2; rd = den1 * num2; }
    const g = gcd(rn, rd);
    setResult({ n: rn / g, d: rd / g, decimal: rn / rd });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 space-y-2">
            <Input type="number" value={n1} onChange={e => setN1(e.target.value)} placeholder="Numerator" />
            <div className="h-0.5 bg-border" />
            <Input type="number" value={d1} onChange={e => setD1(e.target.value)} placeholder="Denominator" />
          </div>
          <Select value={op} onChange={e => setOp(e.target.value)} className="w-16">
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </Select>
          <div className="flex-1 space-y-2">
            <Input type="number" value={n2} onChange={e => setN2(e.target.value)} placeholder="Numerator" />
            <div className="h-0.5 bg-border" />
            <Input type="number" value={d2} onChange={e => setD2(e.target.value)} placeholder="Denominator" />
          </div>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Result (fraction)" value={`${result.n}/${result.d}`} highlight />
            <ResultBox label="Decimal" value={result.decimal.toFixed(6)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ExponentCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'exponent')!;
  const [base, setBase] = useState("2");
  const [exp, setExp] = useState("10");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const b = parseFloat(base), e = parseFloat(exp);
    if (isNaN(b) || isNaN(e)) return;
    setResult(Math.pow(b, e));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Base"><Input type="number" value={base} onChange={e => setBase(e.target.value)} /></Field>
          <Field label="Exponent"><Input type="number" value={exp} onChange={e => setExp(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate {base}^{exp}</CalcButton>
        {result !== null && <ResultBox label="Result" value={result.toLocaleString()} highlight />}
      </div>
    </ToolPage>
  );
}

export function ScientificNotationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'scientific-notation')!;
  const [num, setNum] = useState("12345.678");
  const [result, setResult] = useState<{ scientific: string; coefficient: number; exponent: number } | null>(null);

  const calculate = () => {
    const n = parseFloat(num);
    if (isNaN(n)) return;
    const exp = Math.floor(Math.log10(Math.abs(n)));
    const coeff = n / Math.pow(10, exp);
    setResult({ scientific: n.toExponential(4), coefficient: coeff, exponent: exp });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Number">
          <Input type="number" value={num} onChange={e => setNum(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Convert to Scientific Notation</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Scientific Notation" value={result.scientific} highlight />
            <ResultBox label="Coefficient" value={result.coefficient.toFixed(4)} />
            <ResultBox label="Exponent (10^n)" value={result.exponent.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function RatioCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ratio')!;
  const [a, setA] = useState("6");
  const [b, setB] = useState("9");
  const [result, setResult] = useState<{ simplA: number; simplB: number; decimal: string } | null>(null);

  const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);

  const calculate = () => {
    const av = parseInt(a), bv = parseInt(b);
    if (isNaN(av) || isNaN(bv) || bv === 0) return;
    const g = gcd(av, bv);
    setResult({ simplA: av / g, simplB: bv / g, decimal: (av / bv).toFixed(4) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input type="number" value={a} onChange={e => setA(e.target.value)} />
          </div>
          <span className="font-bold text-muted-foreground text-xl">:</span>
          <div className="flex-1">
            <Input type="number" value={b} onChange={e => setB(e.target.value)} />
          </div>
        </div>
        <CalcButton onClick={calculate} className="w-full">Simplify Ratio</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Simplified Ratio" value={`${result.simplA} : ${result.simplB}`} highlight />
            <ResultBox label="As Decimal" value={result.decimal} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MeanMedianModeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mean-median-mode')!;
  const [input, setInput] = useState("4, 8, 6, 5, 3, 2, 8, 9, 2, 5");
  const [result, setResult] = useState<{ mean: number; median: number; mode: number[]; range: number; count: number } | null>(null);

  const calculate = () => {
    const nums = input.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
    if (nums.length === 0) return;
    const sorted = [...nums].sort((a, b) => a - b);
    const mean = nums.reduce((s, v) => s + v, 0) / nums.length;
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
    const freq: Record<number, number> = {};
    nums.forEach(n => { freq[n] = (freq[n] || 0) + 1; });
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.keys(freq).filter(k => freq[+k] === maxFreq).map(Number);
    setResult({ mean, median, mode, range: sorted[sorted.length - 1] - sorted[0], count: nums.length });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Dataset (comma or space separated)" hint="e.g. 4, 8, 6, 5, 3">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Statistics</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Mean (Average)" value={result.mean.toFixed(4)} highlight />
            <ResultBox label="Median" value={result.median.toFixed(4)} />
            <ResultBox label="Mode" value={result.mode.join(', ')} />
            <ResultBox label="Range" value={result.range.toFixed(4)} />
            <ResultBox label="Count (n)" value={result.count.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function LCMGCDCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'lcm-gcd')!;
  const [a, setA] = useState("12");
  const [b, setB] = useState("18");
  const [result, setResult] = useState<{ gcd: number; lcm: number } | null>(null);

  const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);

  const calculate = () => {
    const av = parseInt(a), bv = parseInt(b);
    if (isNaN(av) || isNaN(bv)) return;
    const g = gcd(av, bv);
    setResult({ gcd: g, lcm: Math.abs(av * bv) / g });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="First Number"><Input type="number" value={a} onChange={e => setA(e.target.value)} /></Field>
          <Field label="Second Number"><Input type="number" value={b} onChange={e => setB(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate LCM & GCD</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="GCD (Greatest Common Divisor)" value={result.gcd.toString()} highlight />
            <ResultBox label="LCM (Least Common Multiple)" value={result.lcm.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PrimeFactorizationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'prime-factorization')!;
  const [num, setNum] = useState("360");
  const [result, setResult] = useState<{ factors: number[]; expression: string } | null>(null);

  const calculate = () => {
    let n = parseInt(num);
    if (isNaN(n) || n < 2) return;
    const factors: number[] = [];
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) { factors.push(i); n /= i; }
    }
    if (n > 1) factors.push(n);
    const counts: Record<number, number> = {};
    factors.forEach(f => { counts[f] = (counts[f] || 0) + 1; });
    const expression = Object.entries(counts).map(([f, c]) => c > 1 ? `${f}^${c}` : f).join(' × ');
    setResult({ factors, expression });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Number (integer ≥ 2)">
          <Input type="number" value={num} onChange={e => setNum(e.target.value)} min="2" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Factorize</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Prime Factorization" value={result.expression} highlight />
            <ResultBox label="All Factors" value={result.factors.join(' × ')} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SquareRootCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'square-root')!;
  const [num, setNum] = useState("144");
  const [nthRoot, setNthRoot] = useState("2");
  const [result, setResult] = useState<{ root: number; isPerfect: boolean } | null>(null);

  const calculate = () => {
    const n = parseFloat(num), r = parseFloat(nthRoot);
    if (isNaN(n) || isNaN(r)) return;
    const root = Math.pow(n, 1 / r);
    setResult({ root, isPerfect: Number.isInteger(root) });
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['percentage', 'exponent', 'logarithm', 'fraction', 'pythagorean']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Number"><Input type="number" value={num} onChange={e => setNum(e.target.value)} /></Field>
          <Field label="Root (n-th)"><Input type="number" value={nthRoot} onChange={e => setNthRoot(e.target.value)} min="2" /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Root</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label={`${nthRoot}th Root`} value={result.root.toFixed(8)} highlight />
            <ResultBox label="Perfect Root?" value={result.isPerfect ? 'Yes' : 'No'} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function LogarithmCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'logarithm')!;
  const [num, setNum] = useState("1000");
  const [base, setBase] = useState("10");
  const [result, setResult] = useState<{ log: number; ln: number; log2: number; custom: number } | null>(null);

  const calculate = () => {
    const n = parseFloat(num), b = parseFloat(base);
    if (isNaN(n) || n <= 0) return;
    setResult({ log: Math.log10(n), ln: Math.log(n), log2: Math.log2(n), custom: Math.log(n) / Math.log(b) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Number (x)"><Input type="number" value={num} onChange={e => setNum(e.target.value)} /></Field>
          <Field label="Custom Base"><Input type="number" value={base} onChange={e => setBase(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Logarithm</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="log₁₀(x)" value={result.log.toFixed(6)} highlight />
            <ResultBox label="ln(x) = logₑ(x)" value={result.ln.toFixed(6)} />
            <ResultBox label="log₂(x)" value={result.log2.toFixed(6)} />
            <ResultBox label={`log_${base}(x)`} value={result.custom.toFixed(6)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function GeometricMeanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'geometric-mean')!;
  const [input, setInput] = useState("4, 9, 16, 25");
  const [result, setResult] = useState<{ gm: number; am: number } | null>(null);

  const calculate = () => {
    const nums = input.split(/[,\s]+/).map(Number).filter(n => !isNaN(n) && n > 0);
    if (nums.length === 0) return;
    const product = nums.reduce((p, v) => p * v, 1);
    const gm = Math.pow(product, 1 / nums.length);
    const am = nums.reduce((s, v) => s + v, 0) / nums.length;
    setResult({ gm, am });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Values (comma separated)" hint="All values must be positive">
          <Input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Geometric Mean" value={result.gm.toFixed(6)} highlight />
            <ResultBox label="Arithmetic Mean" value={result.am.toFixed(6)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function WeightedAverageCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'weighted-average')!;
  const [entries, setEntries] = useState([
    { value: '90', weight: '30' },
    { value: '85', weight: '30' },
    { value: '78', weight: '40' },
  ]);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    let sumWV = 0, sumW = 0;
    entries.forEach(e => {
      const v = parseFloat(e.value), w = parseFloat(e.weight);
      if (!isNaN(v) && !isNaN(w)) { sumWV += v * w; sumW += w; }
    });
    if (sumW === 0) return;
    setResult(sumWV / sumW);
  };

  const update = (i: number, field: 'value' | 'weight', val: string) => {
    setEntries(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Value</span>
            <span>Weight</span>
          </div>
          {entries.map((e, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <Input type="number" value={e.value} onChange={ev => update(i, 'value', ev.target.value)} />
              <Input type="number" value={e.weight} onChange={ev => update(i, 'weight', ev.target.value)} />
            </div>
          ))}
          <button
            onClick={() => setEntries(prev => [...prev, { value: '', weight: '' }])}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            + Add row
          </button>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Weighted Average</CalcButton>
        {result !== null && <ResultBox label="Weighted Average" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function AdvancedPercentageCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'advanced-percentage')!;
  const [mode, setMode] = useState("compound");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [n, setN] = useState("1");
  const [result, setResult] = useState<{ label: string; value: string }[] | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError(""); setResult(null);
    const av = parseFloat(a), bv = parseFloat(b), nv = parseFloat(n);
    if (mode === "compound") {
      if (isNaN(av) || isNaN(bv) || isNaN(nv) || nv < 1) { setError("Enter valid values."); return; }
      const final = av * Math.pow(1 + bv / 100, nv);
      const total = final - av;
      setResult([
        { label: "Final Value", value: final.toLocaleString(undefined, { maximumFractionDigits: 4 }) },
        { label: "Total Change", value: `${total >= 0 ? "+" : ""}${total.toLocaleString(undefined, { maximumFractionDigits: 4 })}` },
        { label: "Overall % Change", value: `${((total / av) * 100).toFixed(4)}%` },
      ]);
    } else if (mode === "reverse") {
      if (isNaN(av) || isNaN(bv)) { setError("Enter valid values."); return; }
      const original = av / (1 + bv / 100);
      setResult([
        { label: "Original Value", value: original.toLocaleString(undefined, { maximumFractionDigits: 4 }) },
        { label: "The Change Was", value: (av - original).toLocaleString(undefined, { maximumFractionDigits: 4 }) },
      ]);
    } else if (mode === "difference") {
      if (isNaN(av) || isNaN(bv)) { setError("Enter valid values."); return; }
      const diff = (Math.abs(av - bv) / ((av + bv) / 2)) * 100;
      setResult([
        { label: "Percentage Difference", value: `${diff.toFixed(4)}%` },
        { label: "Absolute Difference", value: Math.abs(av - bv).toLocaleString(undefined, { maximumFractionDigits: 4 }) },
      ]);
    } else if (mode === "increase") {
      if (isNaN(av) || isNaN(bv)) { setError("Enter valid values."); return; }
      const res = av * (1 + bv / 100);
      setResult([
        { label: "Result After Increase", value: res.toLocaleString(undefined, { maximumFractionDigits: 4 }) },
        { label: "Amount Added", value: (res - av).toLocaleString(undefined, { maximumFractionDigits: 4 }) },
      ]);
    } else if (mode === "decrease") {
      if (isNaN(av) || isNaN(bv)) { setError("Enter valid values."); return; }
      const res = av * (1 - bv / 100);
      setResult([
        { label: "Result After Decrease", value: res.toLocaleString(undefined, { maximumFractionDigits: 4 }) },
        { label: "Amount Removed", value: (av - res).toLocaleString(undefined, { maximumFractionDigits: 4 }) },
      ]);
    }
  };

  const modes = [
    { value: "compound", label: "Compound Percentage Growth" },
    { value: "reverse",  label: "Reverse Percentage (Find Original)" },
    { value: "difference", label: "Percentage Difference" },
    { value: "increase", label: "Percentage Increase" },
    { value: "decrease", label: "Percentage Decrease" },
  ];

  const labelA: Record<string, string> = {
    compound: "Starting Value", reverse: "Final Value (after increase)",
    difference: "Value A", increase: "Original Value", decrease: "Original Value",
  };
  const labelB: Record<string, string> = {
    compound: "Rate per Period (%)", reverse: "Percentage Increase (%)",
    difference: "Value B", increase: "Percentage Increase (%)", decrease: "Percentage Decrease (%)",
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['percentage', 'percent-off', 'compound-interest', 'ratio', 'marks-percentage']}>
      <div className="space-y-4">
        <Field label="Calculation Type">
          <Select value={mode} onChange={e => { setMode(e.target.value); setResult(null); setError(""); }}>
            {modes.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label={labelA[mode]}>
            <Input type="number" value={a} onChange={e => setA(e.target.value)} placeholder="e.g. 1000" />
          </Field>
          <Field label={labelB[mode]}>
            <Input type="number" value={b} onChange={e => setB(e.target.value)} placeholder={mode === "compound" ? "e.g. 5" : "e.g. 25"} />
          </Field>
        </div>
        {mode === "compound" && (
          <Field label="Number of Periods" hint="e.g. years, months, or quarters">
            <Input type="number" value={n} min="1" onChange={e => setN(e.target.value)} placeholder="e.g. 5" />
          </Field>
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            {result.map((r, i) => (
              <ResultBox key={i} label={r.label} value={r.value} highlight={i === 0} />
            ))}
          </ResultGrid>
        )}
      </div>
      <div className="mt-8 space-y-3 text-sm text-muted-foreground">
        <h3 className="font-semibold text-foreground">Formulas Used</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li><strong>Compound Growth:</strong> Final = Start × (1 + r/100)^n</li>
          <li><strong>Reverse Percentage:</strong> Original = Final ÷ (1 + r/100)</li>
          <li><strong>Percentage Difference:</strong> |A − B| / ((A + B) / 2) × 100</li>
          <li><strong>Percentage Increase:</strong> Result = Value × (1 + r/100)</li>
          <li><strong>Percentage Decrease:</strong> Result = Value × (1 − r/100)</li>
        </ul>
      </div>
    </ToolPage>
  );
}
