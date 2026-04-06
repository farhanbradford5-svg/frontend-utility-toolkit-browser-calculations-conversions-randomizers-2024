import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

function factorialBig(n: number): number {
  if (n <= 1) return 1;
  return n * factorialBig(n - 1);
}

function normalCDF(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const poly = t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  const phi = Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
  const cdf = 1 - phi * poly;
  return z >= 0 ? cdf : 1 - cdf;
}

export function StandardDeviationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'standard-deviation')!;
  const [input, setInput] = useState("2, 4, 4, 4, 5, 5, 7, 9");
  const [type, setType] = useState("population");
  const [result, setResult] = useState<{ mean: number; variance: number; sd: number; count: number } | null>(null);

  const calculate = () => {
    const nums = input.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
    if (nums.length < 2) return;
    const mean = nums.reduce((s, v) => s + v, 0) / nums.length;
    const denom = type === 'population' ? nums.length : nums.length - 1;
    const variance = nums.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / denom;
    setResult({ mean, variance, sd: Math.sqrt(variance), count: nums.length });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Dataset (comma or space separated)">
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <Field label="Type">
          <Select value={type} onChange={e => setType(e.target.value)}>
            <option value="population">Population (σ)</option>
            <option value="sample">Sample (s)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Standard Deviation" value={result.sd.toFixed(6)} highlight />
            <ResultBox label="Variance" value={result.variance.toFixed(6)} />
            <ResultBox label="Mean" value={result.mean.toFixed(6)} />
            <ResultBox label="Count (n)" value={result.count.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ZScoreCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'z-score')!;
  const [x, setX] = useState("75");
  const [mean, setMean] = useState("70");
  const [sd, setSd] = useState("5");
  const [result, setResult] = useState<{ z: number; pLeft: number; pRight: number; percentile: number } | null>(null);

  const calculate = () => {
    const xv = parseFloat(x), mv = parseFloat(mean), sdv = parseFloat(sd);
    if ([xv, mv, sdv].some(isNaN) || sdv === 0) return;
    const z = (xv - mv) / sdv;
    const pLeft = normalCDF(z);
    setResult({ z, pLeft, pRight: 1 - pLeft, percentile: pLeft * 100 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Value (X)"><Input type="number" value={x} onChange={e => setX(e.target.value)} /></Field>
          <Field label="Mean (μ)"><Input type="number" value={mean} onChange={e => setMean(e.target.value)} /></Field>
          <Field label="Std Dev (σ)"><Input type="number" value={sd} onChange={e => setSd(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Z-Score</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Z-Score" value={result.z.toFixed(4)} highlight />
            <ResultBox label="Percentile" value={`${result.percentile.toFixed(2)}%`} />
            <ResultBox label="P (X ≤ x)" value={result.pLeft.toFixed(4)} />
            <ResultBox label="P (X > x)" value={result.pRight.toFixed(4)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PValueCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'p-value')!;
  const [z, setZ] = useState("1.96");
  const [tail, setTail] = useState("two");
  const [result, setResult] = useState<{ pValue: number; significant: boolean } | null>(null);

  const calculate = () => {
    const zv = parseFloat(z);
    if (isNaN(zv)) return;
    const oneTail = 1 - normalCDF(Math.abs(zv));
    const pValue = tail === 'two' ? 2 * oneTail : oneTail;
    setResult({ pValue, significant: pValue < 0.05 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Z-Score (or t-statistic)"><Input type="number" value={z} onChange={e => setZ(e.target.value)} step="0.01" /></Field>
          <Field label="Hypothesis test">
            <Select value={tail} onChange={e => setTail(e.target.value)}>
              <option value="two">Two-tailed</option>
              <option value="right">Right-tailed</option>
              <option value="left">Left-tailed</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate P-Value</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="P-Value" value={result.pValue.toFixed(6)} highlight />
            <ResultBox label="Significant at α=0.05?" value={result.significant ? 'Yes ✓' : 'No ✗'} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ConfidenceIntervalCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'confidence-interval')!;
  const [mean, setMean] = useState("50");
  const [sd, setSd] = useState("10");
  const [n, setN] = useState("30");
  const [cl, setCl] = useState("95");
  const [result, setResult] = useState<{ lower: number; upper: number; me: number; se: number } | null>(null);

  const zMap: Record<string, number> = { '90': 1.645, '95': 1.96, '99': 2.576 };

  const calculate = () => {
    const mv = parseFloat(mean), sdv = parseFloat(sd), nv = parseFloat(n);
    if ([mv, sdv, nv].some(isNaN) || nv <= 0) return;
    const z = zMap[cl] || 1.96;
    const se = sdv / Math.sqrt(nv);
    const me = z * se;
    setResult({ lower: mv - me, upper: mv + me, me, se });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Sample Mean"><Input type="number" value={mean} onChange={e => setMean(e.target.value)} /></Field>
          <Field label="Standard Deviation"><Input type="number" value={sd} onChange={e => setSd(e.target.value)} /></Field>
          <Field label="Sample Size (n)"><Input type="number" value={n} onChange={e => setN(e.target.value)} /></Field>
          <Field label="Confidence Level">
            <Select value={cl} onChange={e => setCl(e.target.value)}>
              <option value="90">90%</option>
              <option value="95">95%</option>
              <option value="99">99%</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Confidence Interval</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label={`${cl}% CI`} value={`${result.lower.toFixed(4)} – ${result.upper.toFixed(4)}`} highlight />
            <ResultBox label="Margin of Error" value={result.me.toFixed(4)} />
            <ResultBox label="Standard Error" value={result.se.toFixed(4)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SampleSizeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'sample-size')!;
  const [cl, setCl] = useState("95");
  const [me, setMe] = useState("5");
  const [p, setP] = useState("50");
  const [result, setResult] = useState<{ n: number } | null>(null);

  const zMap: Record<string, number> = { '90': 1.645, '95': 1.96, '99': 2.576 };

  const calculate = () => {
    const z = zMap[cl] || 1.96;
    const pv = parseFloat(p) / 100, mev = parseFloat(me) / 100;
    if (isNaN(pv) || isNaN(mev) || mev === 0) return;
    const n = Math.ceil((z * z * pv * (1 - pv)) / (mev * mev));
    setResult({ n });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Confidence Level">
            <Select value={cl} onChange={e => setCl(e.target.value)}>
              <option value="90">90%</option>
              <option value="95">95%</option>
              <option value="99">99%</option>
            </Select>
          </Field>
          <Field label="Margin of Error (%)"><Input type="number" value={me} onChange={e => setMe(e.target.value)} /></Field>
          <Field label="Population % (p)"><Input type="number" value={p} onChange={e => setP(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Sample Size</CalcButton>
        {result && <ResultBox label="Required Sample Size" value={result.n.toLocaleString()} highlight />}
      </div>
    </ToolPage>
  );
}

export function PermutationCombinationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'permutation-combination')!;
  const [n, setN] = useState("10");
  const [r, setR] = useState("3");
  const [result, setResult] = useState<{ perm: number; comb: number } | null>(null);

  const calculate = () => {
    const nv = parseInt(n), rv = parseInt(r);
    if (isNaN(nv) || isNaN(rv) || rv > nv || nv < 0 || rv < 0) return;
    const fn = factorialBig(nv);
    const fr = factorialBig(rv);
    const fnr = factorialBig(nv - rv);
    setResult({ perm: fn / fnr, comb: fn / (fr * fnr) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="n (total items)"><Input type="number" value={n} onChange={e => setN(e.target.value)} min="0" /></Field>
          <Field label="r (chosen items)"><Input type="number" value={r} onChange={e => setR(e.target.value)} min="0" /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="nPr (Permutations)" value={result.perm.toLocaleString()} highlight />
            <ResultBox label="nCr (Combinations)" value={result.comb.toLocaleString()} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 prose prose-sm max-w-none text-muted-foreground">
        <p><strong>Permutations</strong> (order matters): nPr = n! / (n−r)!</p>
        <p><strong>Combinations</strong> (order doesn't matter): nCr = n! / (r! × (n−r)!)</p>
      </div>
    </ToolPage>
  );
}

export function CorrelationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'correlation')!;
  const [xInput, setXInput] = useState("1, 2, 3, 4, 5");
  const [yInput, setYInput] = useState("2, 4, 5, 4, 5");
  const [result, setResult] = useState<{ r: number; r2: number; strength: string } | null>(null);

  const calculate = () => {
    const xs = xInput.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
    const ys = yInput.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
    if (xs.length !== ys.length || xs.length < 2) return;
    const n = xs.length;
    const mx = xs.reduce((s, v) => s + v, 0) / n;
    const my = ys.reduce((s, v) => s + v, 0) / n;
    const num = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
    const den = Math.sqrt(xs.reduce((s, x) => s + Math.pow(x - mx, 2), 0) * ys.reduce((s, y) => s + Math.pow(y - my, 2), 0));
    const r = den === 0 ? 0 : num / den;
    const abs = Math.abs(r);
    const strength = abs >= 0.9 ? 'Very strong' : abs >= 0.7 ? 'Strong' : abs >= 0.5 ? 'Moderate' : abs >= 0.3 ? 'Weak' : 'Very weak';
    setResult({ r, r2: r * r, strength });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="X values (comma separated)">
          <Input type="text" value={xInput} onChange={e => setXInput(e.target.value)} />
        </Field>
        <Field label="Y values (comma separated)">
          <Input type="text" value={yInput} onChange={e => setYInput(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Correlation</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Pearson r" value={result.r.toFixed(6)} highlight />
            <ResultBox label="R² (Coefficient of Determination)" value={result.r2.toFixed(6)} />
            <ResultBox label="Correlation Strength" value={result.strength} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MeanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mean')!;
  const [vals, setVals] = useState("2, 4, 6, 8, 10");
  const [result, setResult] = useState<{mean:number;count:number;sum:number}|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
    if(!nums.length) return;
    const sum=nums.reduce((a,b)=>a+b,0);
    setResult({mean:sum/nums.length, count:nums.length, sum});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Mean</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Mean (Average)" value={result.mean.toFixed(6)} highlight />
          <ResultBox label="Count" value={`${result.count}`} />
          <ResultBox label="Sum" value={`${result.sum}`} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function VarianceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'variance')!;
  const [vals, setVals] = useState("2, 4, 4, 4, 5, 5, 7, 9");
  const [pop, setPop] = useState("sample");
  const [result, setResult] = useState<{variance:number;sd:number}|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
    if(nums.length<2) return;
    const mean=nums.reduce((a,b)=>a+b,0)/nums.length;
    const sq=nums.map(n=>(n-mean)**2).reduce((a,b)=>a+b,0);
    const variance=sq/(pop==='population'?nums.length:nums.length-1);
    setResult({variance, sd:Math.sqrt(variance)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <Field label="Type">
          <Select value={pop} onChange={e=>setPop(e.target.value)}>
            <option value="sample">Sample</option>
            <option value="population">Population</option>
          </Select>
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Variance</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Variance" value={result.variance.toFixed(6)} highlight />
          <ResultBox label="Std Deviation" value={result.sd.toFixed(6)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function ProbabilityCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'probability')!;
  const [favorable, setFavorable] = useState("3");
  const [total, setTotal] = useState("6");
  const [result, setResult] = useState<{prob:number;percent:number;odds:string}|null>(null);
  const calc = () => {
    const f=parseFloat(favorable), t=parseFloat(total);
    if(isNaN(f)||isNaN(t)||t<=0||f>t) return;
    const prob=f/t;
    setResult({prob, percent:prob*100, odds:`${f}:${t-f}`});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Favorable Outcomes"><Input type="number" value={favorable} onChange={e=>setFavorable(e.target.value)} /></Field>
          <Field label="Total Outcomes"><Input type="number" value={total} onChange={e=>setTotal(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Probability</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Probability" value={result.prob.toFixed(6)} highlight />
          <ResultBox label="Percentage" value={`${result.percent.toFixed(2)}%`} />
          <ResultBox label="Odds" value={result.odds} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function FrequencyCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'frequency')!;
  const [vals, setVals] = useState("1 2 2 3 3 3 4 4 5");
  const [result, setResult] = useState<{freq:Record<string,number>}|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).filter(s=>s.trim());
    if(!nums.length) return;
    const freq: Record<string,number>={};
    nums.forEach(n=>{freq[n]=(freq[n]||0)+1;});
    setResult({freq});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Data Values (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Frequency</CalcButton>
        {result && (
          <div className="overflow-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary"><tr><th className="px-4 py-2 text-left">Value</th><th className="px-4 py-2 text-right">Frequency</th><th className="px-4 py-2 text-right">Relative (%)</th></tr></thead>
              <tbody>
                {Object.entries(result.freq).sort().map(([k,v])=>(
                  <tr key={k} className="border-t border-border">
                    <td className="px-4 py-2">{k}</td>
                    <td className="px-4 py-2 text-right">{v}</td>
                    <td className="px-4 py-2 text-right">{(v/vals.split(/[,\s]+/).filter(s=>s.trim()).length*100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RangeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'range')!;
  const [vals, setVals] = useState("3, 7, 1, 12, 5, 9");
  const [result, setResult] = useState<{range:number;min:number;max:number}|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
    if(!nums.length) return;
    setResult({range:Math.max(...nums)-Math.min(...nums), min:Math.min(...nums), max:Math.max(...nums)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Range</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Range" value={`${result.range}`} highlight />
          <ResultBox label="Minimum" value={`${result.min}`} />
          <ResultBox label="Maximum" value={`${result.max}`} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function HarmonicMeanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'harmonic-mean')!;
  const [vals, setVals] = useState("1, 2, 4");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n)&&n!==0);
    if(!nums.length) return;
    setResult(nums.length / nums.reduce((a,b)=>a+1/b, 0));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Harmonic Mean</CalcButton>
        {result !== null && <ResultBox label="Harmonic Mean" value={result.toFixed(6)} highlight />}
      </div>
    </ToolPage>
  );
}

export function IQRCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'iqr')!;
  const [vals, setVals] = useState("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
  const [result, setResult] = useState<{q1:number;q2:number;q3:number;iqr:number}|null>(null);
  const calc = () => {
    const sorted = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n)).sort((a,b)=>a-b);
    if(sorted.length<4) return;
    const q=(arr:number[],p:number)=>{ const i=(p/100)*(arr.length-1); const lo=Math.floor(i),hi=Math.ceil(i); return arr[lo]+(arr[hi]-arr[lo])*(i-lo); };
    const q1=q(sorted,25), q2=q(sorted,50), q3=q(sorted,75);
    setResult({q1,q2,q3,iqr:q3-q1});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate IQR</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="IQR (Q3 - Q1)" value={result.iqr.toFixed(4)} highlight />
          <ResultBox label="Q1 (25th percentile)" value={result.q1.toFixed(4)} />
          <ResultBox label="Q2 (Median)" value={result.q2.toFixed(4)} />
          <ResultBox label="Q3 (75th percentile)" value={result.q3.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function MADCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mad')!;
  const [vals, setVals] = useState("2, 4, 4, 4, 5, 5, 7, 9");
  const [result, setResult] = useState<{mad:number;mean:number}|null>(null);
  const calc = () => {
    const nums = vals.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
    if(!nums.length) return;
    const mean=nums.reduce((a,b)=>a+b,0)/nums.length;
    const mad=nums.reduce((a,b)=>a+Math.abs(b-mean),0)/nums.length;
    setResult({mad,mean});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Numbers (comma or space separated)">
          <textarea value={vals} onChange={e=>setVals(e.target.value)} rows={3}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate MAD</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Mean Absolute Deviation" value={result.mad.toFixed(6)} highlight />
          <ResultBox label="Mean" value={result.mean.toFixed(6)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function BinomialDistributionCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'binomial')!;
  const [n, setN] = useState("10"); const [k, setK] = useState("3"); const [p, setP] = useState("0.5");
  const [result, setResult] = useState<{prob:number;cumulative:number}|null>(null);
  const factorial = (x:number):number => x<=1?1:x*factorial(x-1);
  const comb = (a:number,b:number) => factorial(a)/(factorial(b)*factorial(a-b));
  const calc = () => {
    const nv=parseInt(n), kv=parseInt(k), pv=parseFloat(p);
    if(isNaN(nv)||isNaN(kv)||isNaN(pv)||kv>nv||pv<0||pv>1) return;
    const prob=comb(nv,kv)*Math.pow(pv,kv)*Math.pow(1-pv,nv-kv);
    let cumulative=0;
    for(let i=0;i<=kv;i++) cumulative+=comb(nv,i)*Math.pow(pv,i)*Math.pow(1-pv,nv-i);
    setResult({prob,cumulative});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="n (trials)"><Input type="number" value={n} onChange={e=>setN(e.target.value)} /></Field>
          <Field label="k (successes)"><Input type="number" value={k} onChange={e=>setK(e.target.value)} /></Field>
          <Field label="p (probability)"><Input type="number" value={p} onChange={e=>setP(e.target.value)} step="0.01" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Binomial Probability</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="P(X = k)" value={result.prob.toFixed(6)} highlight />
          <ResultBox label="P(X ≤ k) Cumulative" value={result.cumulative.toFixed(6)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function PoissonDistributionCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'poisson')!;
  const [lambda, setLambda] = useState("3"); const [k, setK] = useState("2");
  const [result, setResult] = useState<{prob:number}|null>(null);
  const factorial = (x:number):number => x<=1?1:x*factorial(x-1);
  const calc = () => {
    const L=parseFloat(lambda), kv=parseInt(k);
    if(isNaN(L)||isNaN(kv)||kv<0||L<=0) return;
    setResult({prob:(Math.pow(L,kv)*Math.exp(-L))/factorial(kv)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="λ (average rate)"><Input type="number" value={lambda} onChange={e=>setLambda(e.target.value)} step="0.1" /></Field>
          <Field label="k (occurrences)"><Input type="number" value={k} onChange={e=>setK(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Poisson Probability</CalcButton>
        {result && <ResultBox label="P(X = k)" value={result.prob.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}
