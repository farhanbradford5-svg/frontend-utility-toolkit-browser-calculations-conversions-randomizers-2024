import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function TipCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'tip')!;
  const [bill, setBill] = useState("65");
  const [tip, setTip] = useState("18");
  const [people, setPeople] = useState("2");
  const [result, setResult] = useState<{ tipAmount: number; total: number; perPerson: number } | null>(null);

  const calculate = () => {
    const b = parseFloat(bill), t = parseFloat(tip), p = parseFloat(people);
    if (isNaN(b) || isNaN(t)) return;
    const tipAmount = b * (t / 100);
    const total = b + tipAmount;
    const n = isNaN(p) || p < 1 ? 1 : p;
    setResult({ tipAmount, total, perPerson: total / n });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Bill Amount ($)"><Input type="number" value={bill} onChange={e => setBill(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Tip (%)"><Input type="number" value={tip} onChange={e => setTip(e.target.value)} /></Field>
          <Field label="Number of People"><Input type="number" value={people} onChange={e => setPeople(e.target.value)} min="1" /></Field>
        </div>
        <div className="flex gap-2">
          {[10, 15, 18, 20, 25].map(pct => (
            <button key={pct} onClick={() => setTip(pct.toString())}
              className={`flex-1 py-1.5 text-sm font-medium rounded-lg border transition-colors ${tip === pct.toString() ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary border-border hover:border-primary/40'}`}>
              {pct}%
            </button>
          ))}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Tip</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Tip Amount" value={`$${result.tipAmount.toFixed(2)}`} highlight />
            <ResultBox label="Total Bill" value={`$${result.total.toFixed(2)}`} />
            {parseFloat(people) > 1 && <ResultBox label="Per Person" value={`$${result.perPerson.toFixed(2)}`} />}
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PercentOffCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'percent-off')!;
  const [original, setOriginal] = useState("120");
  const [discount, setDiscount] = useState("25");
  const [result, setResult] = useState<{ salePrice: number; savings: number; discountedAmount: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(original), d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return;
    const discountedAmount = p * (d / 100);
    setResult({ salePrice: p - discountedAmount, savings: discountedAmount, discountedAmount });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Original Price ($)"><Input type="number" value={original} onChange={e => setOriginal(e.target.value)} /></Field>
          <Field label="Percent Off (%)"><Input type="number" value={discount} onChange={e => setDiscount(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
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

export function GradeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'grade')!;
  const [entries, setEntries] = useState([
    { score: '90', weight: '30', label: 'Homework' },
    { score: '85', weight: '35', label: 'Midterm' },
    { score: '92', weight: '35', label: 'Final' },
  ]);
  const [result, setResult] = useState<{ grade: number; letter: string } | null>(null);

  const update = (i: number, field: keyof typeof entries[0], val: string) => {
    setEntries(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };

  const calculate = () => {
    let sum = 0, totalW = 0;
    entries.forEach(e => {
      const s = parseFloat(e.score), w = parseFloat(e.weight);
      if (!isNaN(s) && !isNaN(w)) { sum += s * w; totalW += w; }
    });
    if (totalW === 0) return;
    const grade = sum / totalW;
    const letter = grade >= 90 ? 'A' : grade >= 80 ? 'B' : grade >= 70 ? 'C' : grade >= 60 ? 'D' : 'F';
    setResult({ grade, letter });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Assignment</span>
            <span>Score</span>
            <span>Weight %</span>
          </div>
          {entries.map((e, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input type="text" value={e.label} onChange={ev => update(i, 'label', ev.target.value)} />
              <Input type="number" value={e.score} onChange={ev => update(i, 'score', ev.target.value)} />
              <Input type="number" value={e.weight} onChange={ev => update(i, 'weight', ev.target.value)} />
            </div>
          ))}
          <button onClick={() => setEntries(prev => [...prev, { score: '', weight: '', label: 'Assignment' }])}
            className="text-sm text-primary hover:text-primary/80 transition-colors">
            + Add row
          </button>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Grade</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Overall Grade" value={`${result.grade.toFixed(2)}%`} highlight />
            <ResultBox label="Letter Grade" value={result.letter} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function GPACalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'gpa')!;
  const gradePoints: Record<string, number> = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0 };
  const [courses, setCourses] = useState([
    { name: 'Math', grade: 'A', credits: '3' },
    { name: 'English', grade: 'B+', credits: '3' },
    { name: 'Science', grade: 'A-', credits: '4' },
    { name: 'History', grade: 'B', credits: '3' },
  ]);
  const [result, setResult] = useState<{ gpa: number; totalCredits: number; totalPoints: number } | null>(null);

  const update = (i: number, field: keyof typeof courses[0], val: string) => {
    setCourses(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };

  const calculate = () => {
    let points = 0, credits = 0;
    courses.forEach(c => {
      const cr = parseFloat(c.credits), gp = gradePoints[c.grade];
      if (!isNaN(cr) && gp !== undefined) { points += gp * cr; credits += cr; }
    });
    if (credits === 0) return;
    setResult({ gpa: points / credits, totalCredits: credits, totalPoints: points });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Course</span>
            <span>Grade</span>
            <span>Credits</span>
          </div>
          {courses.map((c, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input type="text" value={c.name} onChange={ev => update(i, 'name', ev.target.value)} />
              <Select value={c.grade} onChange={ev => update(i, 'grade', ev.target.value)}>
                {Object.keys(gradePoints).map(g => <option key={g} value={g}>{g}</option>)}
              </Select>
              <Input type="number" value={c.credits} onChange={ev => update(i, 'credits', ev.target.value)} />
            </div>
          ))}
          <button onClick={() => setCourses(prev => [...prev, { name: 'Course', grade: 'A', credits: '3' }])}
            className="text-sm text-primary hover:text-primary/80 transition-colors">
            + Add course
          </button>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate GPA</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="GPA" value={result.gpa.toFixed(2)} highlight />
            <ResultBox label="Total Credits" value={result.totalCredits.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function OddsCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'odds')!;
  const [mode, setMode] = useState("prob");
  const [val, setVal] = useState("30");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const calculate = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    if (mode === 'prob') {
      const p = v / 100;
      const decimal = 1 / p;
      const frac = `${Math.round(1 / p - 1) * 10}/${Math.round(1 / p - 1) * 10 - Math.round(1 / p - 1) * 10 + 10}`;
      const american = p >= 0.5 ? `-${Math.round((p / (1 - p)) * 100)}` : `+${Math.round(((1 - p) / p) * 100)}`;
      setResult({ 'Decimal Odds': decimal.toFixed(4), 'American Odds': american, 'Implied Probability': `${v}%` });
    } else {
      const decimal = v;
      const prob = (1 / decimal * 100);
      const american = decimal >= 2 ? `+${Math.round((decimal - 1) * 100)}` : `-${Math.round(100 / (decimal - 1))}`;
      setResult({ 'Implied Probability': `${prob.toFixed(2)}%`, 'American Odds': american, 'Decimal Odds': decimal.toFixed(4) });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Input type">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="prob">Probability (%)</option>
            <option value="decimal">Decimal odds</option>
          </Select>
        </Field>
        <Field label={mode === 'prob' ? 'Probability (%)' : 'Decimal Odds'}>
          <Input type="number" value={val} onChange={e => setVal(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Convert Odds</CalcButton>
        {result && (
          <div className="space-y-2 mt-4">
            {Object.entries(result).map(([label, value]) => (
              <div key={label} className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="text-sm font-bold text-foreground">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function DogYearsCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'dog-years')!;
  const [dogAge, setDogAge] = useState("3");
  const [breed, setBreed] = useState("medium");
  const [result, setResult] = useState<{ humanAge: number } | null>(null);

  const calculate = () => {
    const age = parseFloat(dogAge);
    if (isNaN(age)) return;
    let humanAge: number;
    if (age <= 1) {
      humanAge = breed === 'large' ? 12 : 15;
    } else if (age <= 2) {
      humanAge = breed === 'large' ? 22 : 24;
    } else {
      const yearFactor = breed === 'small' ? 4 : breed === 'medium' ? 5 : 6;
      humanAge = 24 + (age - 2) * yearFactor;
    }
    setResult({ humanAge });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Dog's Age (years)"><Input type="number" value={dogAge} onChange={e => setDogAge(e.target.value)} min="0" /></Field>
          <Field label="Breed Size">
            <Select value={breed} onChange={e => setBreed(e.target.value)}>
              <option value="small">Small (under 20 lbs)</option>
              <option value="medium">Medium (20–50 lbs)</option>
              <option value="large">Large (over 50 lbs)</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Dog Age</CalcButton>
        {result && (
          <ResultBox label="Dog's Age in Human Years" value={`~${Math.round(result.humanAge)} years`} highlight />
        )}
      </div>
    </ToolPage>
  );
}

export function MarksPercentageCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'marks-percentage')!;
  const [obtained, setObtained] = useState("420");
  const [total, setTotal] = useState("500");
  const [result, setResult] = useState<{ pct: number; grade: string } | null>(null);

  const calculate = () => {
    const o = parseFloat(obtained), t = parseFloat(total);
    if (isNaN(o) || isNaN(t) || t === 0) return;
    const pct = (o / t) * 100;
    const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : pct >= 50 ? 'D' : 'F';
    setResult({ pct, grade });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Marks Obtained"><Input type="number" value={obtained} onChange={e => setObtained(e.target.value)} /></Field>
          <Field label="Total Marks"><Input type="number" value={total} onChange={e => setTotal(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Percentage</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Percentage" value={`${result.pct.toFixed(2)}%`} highlight />
            <ResultBox label="Grade" value={result.grade} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function HeightComparisonCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'height-comparison')!;
  const [h1, setH1] = useState("175");
  const [h2, setH2] = useState("160");
  const [unit, setUnit] = useState("cm");
  const [result, setResult] = useState<{ diff: number; percent: number; taller: string } | null>(null);

  const calculate = () => {
    const a = parseFloat(h1), b = parseFloat(h2);
    if (isNaN(a) || isNaN(b)) return;
    const diff = Math.abs(a - b);
    const taller = a > b ? 'Person 1' : a < b ? 'Person 2' : 'Same height';
    setResult({ diff, percent: (diff / Math.min(a, b)) * 100, taller });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Unit">
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="cm">Centimeters</option>
            <option value="in">Inches</option>
            <option value="ft">Feet</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label={`Person 1 Height (${unit})`}><Input type="number" value={h1} onChange={e => setH1(e.target.value)} /></Field>
          <Field label={`Person 2 Height (${unit})`}><Input type="number" value={h2} onChange={e => setH2(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Compare Heights</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Taller" value={result.taller} highlight />
            <ResultBox label="Difference" value={`${result.diff.toFixed(1)} ${unit}`} />
            <ResultBox label="% Taller" value={`${result.percent.toFixed(2)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

// ─── NEW SCENARIO & EDUCATION TOOLS ────────────────────────────────────────

export function SplitBillCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'split-bill')!;
  const [total, setTotal] = useState("120");
  const [people, setPeople] = useState("4");
  const [tip, setTip] = useState("18");
  const [tax, setTax] = useState("8.5");
  const [result, setResult] = useState<{perPerson:number;tipAmount:number;taxAmount:number;grandTotal:number}|null>(null);

  const calculate = () => {
    const bill = parseFloat(total)||0;
    const tipAmt = bill * (parseFloat(tip)||0)/100;
    const taxAmt = bill * (parseFloat(tax)||0)/100;
    const grandTotal = bill + tipAmt + taxAmt;
    const perPerson = grandTotal / (parseFloat(people)||1);
    setResult({ perPerson, tipAmount: tipAmt, taxAmount: taxAmt, grandTotal });
  };
  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['tip','wedding-budget','grocery-budget','moving-cost','budget-50-30-20']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Bill Total ($)"><Input type="number" value={total} onChange={e=>setTotal(e.target.value)} /></Field>
          <Field label="Number of People"><Input type="number" value={people} onChange={e=>setPeople(e.target.value)} /></Field>
          <Field label="Tip (%)"><Input type="number" value={tip} onChange={e=>setTip(e.target.value)} /></Field>
          <Field label="Sales Tax (%)"><Input type="number" value={tax} step="0.1" onChange={e=>setTax(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Split Bill</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Each Person Pays" value={fmt(result.perPerson)} highlight />
          <ResultBox label="Tip Amount" value={fmt(result.tipAmount)} />
          <ResultBox label="Tax Amount" value={fmt(result.taxAmount)} />
          <ResultBox label="Grand Total" value={fmt(result.grandTotal)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function MovingCostCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'moving-cost')!;
  const [distance, setDistance] = useState("300");
  const [homeSize, setHomeSize] = useState("2br");
  const [movers, setMovers] = useState("3");
  const [hours, setHours] = useState("6");
  const [packing, setPacking] = useState("no");
  const [result, setResult] = useState<{labor:number;truck:number;packing:number;total:number}|null>(null);

  const BASE_RATE: Record<string,number> = { studio:60, '1br':75, '2br':90, '3br':110, '4br':130 };

  const calculate = () => {
    const dist = parseFloat(distance)||0;
    const hourlyRate = (BASE_RATE[homeSize]||90) * (parseFloat(movers)||3);
    const labor = hourlyRate * (parseFloat(hours)||6);
    const truckRate = dist < 50 ? 0 : dist < 200 ? dist*1.2 : dist*0.95;
    const packingCost = packing==='yes' ? (BASE_RATE[homeSize]||90)*8 : 0;
    setResult({ labor, truck: truckRate, packing: packingCost, total: labor+truckRate+packingCost });
  };
  const fmt = (n:number) => `$${n.toFixed(0)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['split-bill','wedding-budget','budget-50-30-20','grocery-budget']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Distance (miles)"><Input type="number" value={distance} onChange={e=>setDistance(e.target.value)} /></Field>
          <Field label="Home Size">
            <Select value={homeSize} onChange={e=>setHomeSize(e.target.value)}>
              <option value="studio">Studio</option><option value="1br">1 Bedroom</option>
              <option value="2br">2 Bedroom</option><option value="3br">3 Bedroom</option>
              <option value="4br">4+ Bedroom</option>
            </Select>
          </Field>
          <Field label="# of Movers"><Input type="number" value={movers} onChange={e=>setMovers(e.target.value)} /></Field>
          <Field label="Estimated Hours"><Input type="number" value={hours} onChange={e=>setHours(e.target.value)} /></Field>
          <Field label="Include Packing Service?">
            <Select value={packing} onChange={e=>setPacking(e.target.value)}>
              <option value="no">No</option><option value="yes">Yes</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Estimate Moving Cost</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Labor" value={fmt(result.labor)} />
          <ResultBox label="Truck/Transport" value={fmt(result.truck)} />
          <ResultBox label="Packing Services" value={fmt(result.packing)} />
          <ResultBox label="Total Estimate" value={fmt(result.total)} highlight />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Estimates based on average US market rates. Local moves are typically charged hourly. Long-distance moves are charged by weight and distance. Always get 3+ quotes.</div>
    </ToolPage>
  );
}

export function WeddingBudgetCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'wedding-budget')!;
  const [budget, setBudget] = useState("30000");
  const [guests, setGuests] = useState("100");
  const [result, setResult] = useState<{items:{name:string;pct:number;amount:number}[];perGuest:number}|null>(null);

  const CATEGORIES = [
    {name:'Venue & Catering',pct:0.48},
    {name:'Photography & Video',pct:0.12},
    {name:'Music & Entertainment',pct:0.08},
    {name:'Flowers & Decor',pct:0.08},
    {name:'Wedding Attire',pct:0.06},
    {name:'Stationery & Invites',pct:0.02},
    {name:'Transportation',pct:0.03},
    {name:'Hair & Makeup',pct:0.03},
    {name:'Officiant & Ceremony',pct:0.03},
    {name:'Favors & Gifts',pct:0.02},
    {name:'Rings',pct:0.03},
  ];

  const calculate = () => {
    const total = parseFloat(budget)||0;
    const items = CATEGORIES.map(c=>({name:c.name,pct:c.pct*100,amount:total*c.pct}));
    setResult({ items, perGuest: total/(parseFloat(guests)||1) });
  };
  const fmt = (n:number) => `$${n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0})}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['budget-50-30-20','savings-goal','split-bill','grocery-budget']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Total Budget ($)"><Input type="number" value={budget} onChange={e=>setBudget(e.target.value)} /></Field>
          <Field label="Number of Guests"><Input type="number" value={guests} onChange={e=>setGuests(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Break Down Budget</CalcButton>
        {result && (
          <div className="space-y-2 mt-2">
            <div className="bg-secondary rounded-xl p-2 text-sm font-semibold text-center">Cost per Guest: {fmt(result.perGuest)}</div>
            {result.items.map(item=>(
              <div key={item.name} className="flex justify-between items-center bg-secondary rounded-lg px-3 py-2 text-sm">
                <span className="text-muted-foreground">{item.name} <span className="text-xs">({item.pct.toFixed(0)}%)</span></span>
                <span className="font-semibold text-foreground">{fmt(item.amount)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Based on average US wedding budget allocations. Percentages can vary significantly by region, season, and personal priorities.</div>
    </ToolPage>
  );
}

export function GroceryBudgetCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'grocery-budget')!;
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("1");
  const [plan, setPlan] = useState("moderate");
  const [result, setResult] = useState<{weekly:number;monthly:number;perPerson:number;annual:number}|null>(null);

  const PLANS: Record<string,{adult:number;child:number}> = {
    thrifty:     {adult:52,  child:35},
    lowcost:     {adult:68,  child:47},
    moderate:    {adult:88,  child:60},
    liberal:     {adult:110, child:80},
  };
  const PLAN_NAMES: Record<string,string> = {thrifty:'Thrifty',lowcost:'Low-Cost',moderate:'Moderate',liberal:'Liberal'};

  const calculate = () => {
    const a = parseInt(adults)||0, c = parseInt(children)||0;
    const p = PLANS[plan];
    const weekly = a*p.adult + c*p.child;
    const monthly = weekly*52/12;
    const total = a+c;
    setResult({ weekly, monthly, perPerson: monthly/total, annual: weekly*52 });
  };
  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['budget-50-30-20','wedding-budget','split-bill','emergency-fund']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Adults"><Input type="number" value={adults} onChange={e=>setAdults(e.target.value)} /></Field>
          <Field label="Children (under 12)"><Input type="number" value={children} onChange={e=>setChildren(e.target.value)} /></Field>
          <Field label="Budget Plan">
            <Select value={plan} onChange={e=>setPlan(e.target.value)}>
              {Object.entries(PLAN_NAMES).map(([k,v])=><option key={k} value={k}>{v}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Grocery Budget</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Weekly" value={fmt(result.weekly)} />
          <ResultBox label="Monthly" value={fmt(result.monthly)} highlight />
          <ResultBox label="Per Person/Month" value={fmt(result.perPerson)} />
          <ResultBox label="Annual" value={fmt(result.annual)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Based on USDA 2024 food plan costs. Moderate plan is most commonly recommended for budget planning.</div>
    </ToolPage>
  );
}

export function FinalGradeNeededCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'final-grade-needed')!;
  const [currentGrade, setCurrentGrade] = useState("78");
  const [finalWeight, setFinalWeight] = useState("30");
  const [targetGrade, setTargetGrade] = useState("80");
  const [result, setResult] = useState<{needed:number;possible:boolean;message:string}|null>(null);

  const calculate = () => {
    const G = parseFloat(currentGrade)||0;
    const W = (parseFloat(finalWeight)||0)/100;
    const T = parseFloat(targetGrade)||0;
    const currentWeight = 1 - W;
    const needed = (T - G*currentWeight) / W;
    setResult({
      needed,
      possible: needed <= 100,
      message: needed <= 100
        ? needed <= 0 ? 'You have already achieved your target grade!' : `Score ${needed.toFixed(1)}% or higher on the final.`
        : `Not achievable — even a 100% would only give you ${(G*currentWeight + 100*W).toFixed(1)}%.`
    });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['gpa','grade','semester-gpa','gpa-by-credits','reverse-grade']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Current Grade (%)"><Input type="number" value={currentGrade} onChange={e=>setCurrentGrade(e.target.value)} /></Field>
          <Field label="Final Exam Weight (%)"><Input type="number" value={finalWeight} onChange={e=>setFinalWeight(e.target.value)} /></Field>
          <Field label="Target Grade (%)"><Input type="number" value={targetGrade} onChange={e=>setTargetGrade(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Required Grade</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultBox label="Score Needed on Final" value={`${result.needed.toFixed(1)}%`} highlight />
            <div className={`rounded-xl p-3 text-sm text-center font-medium ${result.possible?'bg-green-500/10 text-green-600 dark:text-green-400':'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
              {result.message}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Formula: Final Score Needed = (Target - Current × (1-W)) / W where W is the final exam weight as a decimal.</div>
    </ToolPage>
  );
}

export function GPAByCreditsCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'gpa-by-credits')!;
  type Course = { name:string; grade:string; credits:string };
  const [courses, setCourses] = useState<Course[]>([
    {name:'English 101',grade:'A',credits:'3'},
    {name:'Math 201',grade:'B+',credits:'4'},
    {name:'History 101',grade:'A-',credits:'3'},
    {name:'Science 110',grade:'B',credits:'4'},
  ]);
  const [result, setResult] = useState<{gpa:number;totalCredits:number;qualityPoints:number}|null>(null);

  const GRADE_POINTS: Record<string,number> = {
    'A+':4.0,'A':4.0,'A-':3.7,'B+':3.3,'B':3.0,'B-':2.7,
    'C+':2.3,'C':2.0,'C-':1.7,'D+':1.3,'D':1.0,'D-':0.7,'F':0.0
  };

  const update = (i:number, k:keyof Course, v:string) => setCourses(c=>c.map((x,j)=>j===i?{...x,[k]:v}:x));

  const calculate = () => {
    let totalPoints = 0, totalCredits = 0;
    for (const c of courses) {
      const cr = parseFloat(c.credits)||0;
      const gp = GRADE_POINTS[c.grade]??0;
      totalPoints += gp*cr;
      totalCredits += cr;
    }
    setResult({ gpa: totalCredits?totalPoints/totalCredits:0, totalCredits, qualityPoints: totalPoints });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['gpa','semester-gpa','final-grade-needed','grade','reverse-grade']}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground px-1"><span>Course</span><span>Grade</span><span>Credits</span></div>
          {courses.map((c,i)=>(
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input value={c.name} onChange={e=>update(i,'name',e.target.value)} placeholder="Course name" />
              <Select value={c.grade} onChange={e=>update(i,'grade',e.target.value)}>
                {['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'].map(g=><option key={g}>{g}</option>)}
              </Select>
              <Input type="number" value={c.credits} onChange={e=>update(i,'credits',e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={()=>setCourses(c=>[...c,{name:'',grade:'A',credits:'3'}])} className="text-sm text-primary hover:text-primary/80">+ Add course</button>
        <CalcButton onClick={calculate} className="w-full">Calculate GPA</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="GPA" value={result.gpa.toFixed(3)} highlight />
          <ResultBox label="Total Credits" value={`${result.totalCredits}`} />
          <ResultBox label="Quality Points" value={result.qualityPoints.toFixed(2)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function SemesterGPACalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'semester-gpa')!;
  const [cumGpa, setCumGpa] = useState("3.20");
  const [cumCredits, setCumCredits] = useState("45");
  const [semGpa, setSemGpa] = useState("3.50");
  const [semCredits, setSemCredits] = useState("15");
  const [result, setResult] = useState<{newGpa:number;newCredits:number}|null>(null);

  const calculate = () => {
    const cg = parseFloat(cumGpa)||0, cc = parseFloat(cumCredits)||0;
    const sg = parseFloat(semGpa)||0, sc = parseFloat(semCredits)||0;
    const newCredits = cc + sc;
    const newGpa = (cg*cc + sg*sc) / newCredits;
    setResult({ newGpa, newCredits });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['gpa','gpa-by-credits','final-grade-needed','grade','reverse-grade']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Cumulative GPA"><Input type="number" value={cumGpa} step="0.01" onChange={e=>setCumGpa(e.target.value)} /></Field>
          <Field label="Cumulative Credits"><Input type="number" value={cumCredits} onChange={e=>setCumCredits(e.target.value)} /></Field>
          <Field label="This Semester GPA"><Input type="number" value={semGpa} step="0.01" onChange={e=>setSemGpa(e.target.value)} /></Field>
          <Field label="This Semester Credits"><Input type="number" value={semCredits} onChange={e=>setSemCredits(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate New Cumulative GPA</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="New Cumulative GPA" value={result.newGpa.toFixed(3)} highlight />
          <ResultBox label="Total Credits" value={`${result.newCredits}`} />
          <ResultBox label="Change" value={`${(result.newGpa - parseFloat(cumGpa) >= 0 ? '+' : '')}${(result.newGpa-parseFloat(cumGpa)).toFixed(3)}`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">New GPA = (Cumulative GPA × Cumulative Credits + Semester GPA × Semester Credits) / Total Credits.</div>
    </ToolPage>
  );
}

export function ReverseGradeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'reverse-grade')!;
  const [targetPct, setTargetPct] = useState("80");
  const [totalPoints, setTotalPoints] = useState("500");
  const [earnedSoFar, setEarnedSoFar] = useState("320");
  const [remainingPoints, setRemainingPoints] = useState("80");
  const [result, setResult] = useState<{pointsNeeded:number;pctNeeded:number;possible:boolean}|null>(null);

  const calculate = () => {
    const target = (parseFloat(targetPct)||0)/100;
    const total = parseFloat(totalPoints)||0;
    const earned = parseFloat(earnedSoFar)||0;
    const remaining = parseFloat(remainingPoints)||0;
    const pointsNeeded = target * total - earned;
    const pctNeeded = remaining ? (pointsNeeded / remaining) * 100 : Infinity;
    setResult({ pointsNeeded, pctNeeded, possible: pctNeeded <= 100 });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['final-grade-needed','gpa','grade','semester-gpa','gpa-by-credits']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Target Grade (%)"><Input type="number" value={targetPct} onChange={e=>setTargetPct(e.target.value)} /></Field>
          <Field label="Total Course Points"><Input type="number" value={totalPoints} onChange={e=>setTotalPoints(e.target.value)} /></Field>
          <Field label="Points Earned So Far"><Input type="number" value={earnedSoFar} onChange={e=>setEarnedSoFar(e.target.value)} /></Field>
          <Field label="Remaining Points Available"><Input type="number" value={remainingPoints} onChange={e=>setRemainingPoints(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Points Still Needed" value={`${result.pointsNeeded.toFixed(1)}`} highlight />
          <ResultBox label="% Score Needed on Remaining" value={`${result.pctNeeded === Infinity ? 'N/A' : result.pctNeeded.toFixed(1) + '%'}`} />
          <ResultBox label="Achievable?" value={result.possible ? 'Yes' : 'No'} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}
