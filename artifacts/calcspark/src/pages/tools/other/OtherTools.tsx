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
