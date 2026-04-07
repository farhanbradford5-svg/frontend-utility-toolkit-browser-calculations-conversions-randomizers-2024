import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function BMICalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'bmi')!;
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [weightLbs, setWeightLbs] = useState("154");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("7");
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

  const calculate = () => {
    let bmi: number;
    if (unit === 'metric') {
      const w = parseFloat(weight);
      const h = parseFloat(height) / 100;
      if (isNaN(w) || isNaN(h) || h === 0) return;
      bmi = w / (h * h);
    } else {
      const w = parseFloat(weightLbs);
      const h = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
      if (isNaN(w) || isNaN(h) || h === 0) return;
      bmi = (w / (h * h)) * 703;
    }
    let category = 'Normal weight', color = 'green';
    if (bmi < 18.5) { category = 'Underweight'; color = 'blue'; }
    else if (bmi >= 25 && bmi < 30) { category = 'Overweight'; color = 'yellow'; }
    else if (bmi >= 30) { category = 'Obese'; color = 'red'; }
    setResult({ bmi, category, color });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Unit System">
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, ft)</option>
          </Select>
        </Field>
        {unit === 'metric' ? (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
            <Field label="Height (cm)"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            <Field label="Weight (lbs)"><Input type="number" value={weightLbs} onChange={e => setWeightLbs(e.target.value)} /></Field>
            <Field label="Height (ft)"><Input type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} /></Field>
            <Field label="Height (in)"><Input type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} /></Field>
          </div>
        )}
        <CalcButton onClick={calculate} className="w-full">Calculate BMI</CalcButton>
        {result && (
          <div className="space-y-3 mt-2">
            <ResultGrid>
              <ResultBox label="Your BMI" value={result.bmi.toFixed(1)} highlight />
              <ResultBox label="Category" value={result.category} />
            </ResultGrid>
            <div className="p-4 bg-secondary rounded-xl">
              <p className="text-xs font-medium text-muted-foreground mb-2">BMI Categories</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {[['Underweight', '< 18.5'], ['Normal', '18.5 – 24.9'], ['Overweight', '25 – 29.9'], ['Obese', '≥ 30']].map(([cat, range]) => (
                  <div key={cat} className="flex justify-between gap-2">
                    <span className="text-muted-foreground">{cat}</span>
                    <span className="text-foreground font-medium">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function CalorieCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'calorie')!;
  const [age, setAge] = useState("30");
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<{ bmr: number; tdee: number; lose: number; gain: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height), act = parseFloat(activity);
    if ([a, w, h, act].some(isNaN)) return;
    const bmr = sex === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = bmr * act;
    setResult({ bmr, tdee, lose: tdee - 500, gain: tdee + 500 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Age"><Input type="number" value={age} onChange={e => setAge(e.target.value)} /></Field>
          <Field label="Biological Sex">
            <Select value={sex} onChange={e => setSex(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </Field>
          <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
          <Field label="Height (cm)"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
        </div>
        <Field label="Activity Level">
          <Select value={activity} onChange={e => setActivity(e.target.value)}>
            <option value="1.2">Sedentary (little/no exercise)</option>
            <option value="1.375">Lightly active (1–3 days/week)</option>
            <option value="1.55">Moderately active (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">Extra active (intense/physical job)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Calories</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Maintenance Calories (TDEE)" value={`${Math.round(result.tdee)} kcal`} highlight />
            <ResultBox label="BMR (at rest)" value={`${Math.round(result.bmr)} kcal`} />
            <ResultBox label="Weight Loss Goal" value={`${Math.round(result.lose)} kcal`} />
            <ResultBox label="Weight Gain Goal" value={`${Math.round(result.gain)} kcal`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function WaterIntakeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'water-intake')!;
  const [weight, setWeight] = useState("70");
  const [unit, setUnit] = useState("kg");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<{ liters: number; cups: number; oz: number } | null>(null);

  const calculate = () => {
    let w = parseFloat(weight);
    if (isNaN(w)) return;
    if (unit === 'lbs') w = w * 0.453592;
    const activityFactor = { low: 30, moderate: 35, high: 40 }[activity] || 35;
    const ml = w * activityFactor;
    setResult({ liters: ml / 1000, cups: ml / 240, oz: ml / 29.574 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Weight">
            <Input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
          </Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="kg">Kilograms (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
            </Select>
          </Field>
        </div>
        <Field label="Activity Level">
          <Select value={activity} onChange={e => setActivity(e.target.value)}>
            <option value="low">Low (sedentary)</option>
            <option value="moderate">Moderate (active)</option>
            <option value="high">High (very active/athlete)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Water Intake</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Daily Water" value={`${result.liters.toFixed(1)} L`} highlight />
            <ResultBox label="Cups" value={`${Math.round(result.cups)} cups`} />
            <ResultBox label="Fluid Ounces" value={`${Math.round(result.oz)} fl oz`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function BodyFatCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'body-fat')!;
  const [sex, setSex] = useState("male");
  const [neck, setNeck] = useState("37");
  const [waist, setWaist] = useState("85");
  const [hip, setHip] = useState("95");
  const [height, setHeight] = useState("175");
  const [result, setResult] = useState<{ bf: number; category: string } | null>(null);

  const calculate = () => {
    const n = parseFloat(neck), w = parseFloat(waist), h = parseFloat(height);
    const hp = parseFloat(hip);
    if ([n, w, h].some(isNaN)) return;
    let bf: number;
    if (sex === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      if (isNaN(hp)) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    let category = 'Athletes';
    if (sex === 'male') {
      if (bf < 6) category = 'Essential fat';
      else if (bf < 14) category = 'Athletes';
      else if (bf < 18) category = 'Fitness';
      else if (bf < 25) category = 'Average';
      else category = 'Obese';
    } else {
      if (bf < 14) category = 'Essential fat';
      else if (bf < 21) category = 'Athletes';
      else if (bf < 25) category = 'Fitness';
      else if (bf < 32) category = 'Average';
      else category = 'Obese';
    }
    setResult({ bf, category });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Biological Sex">
          <Select value={sex} onChange={e => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Field>
        <Field label="Height (cm)">
          <Input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Neck circumference (cm)"><Input type="number" value={neck} onChange={e => setNeck(e.target.value)} /></Field>
          <Field label="Waist circumference (cm)"><Input type="number" value={waist} onChange={e => setWaist(e.target.value)} /></Field>
          {sex === 'female' && (
            <Field label="Hip circumference (cm)"><Input type="number" value={hip} onChange={e => setHip(e.target.value)} /></Field>
          )}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Body Fat</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Body Fat %" value={`${result.bf.toFixed(1)}%`} highlight />
            <ResultBox label="Category" value={result.category} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function BMRCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'bmr')!;
  const [age, setAge] = useState("30");
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const [result, setResult] = useState<{ bmr: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height);
    if ([a, w, h].some(isNaN)) return;
    const bmr = sex === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    setResult({ bmr });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Age"><Input type="number" value={age} onChange={e => setAge(e.target.value)} /></Field>
          <Field label="Biological Sex">
            <Select value={sex} onChange={e => setSex(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </Field>
          <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
          <Field label="Height (cm)"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate BMR</CalcButton>
        {result && (
          <ResultBox label="BMR (Mifflin-St Jeor)" value={`${Math.round(result.bmr)} kcal/day`} highlight />
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">What is BMR?</h3>
        <p>Basal Metabolic Rate is the number of calories your body needs at complete rest — the minimum energy required to keep basic functions alive.</p>
      </div>
    </ToolPage>
  );
}

export function WeightLossCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'weight-loss')!;
  const [current, setCurrent] = useState("85");
  const [goal, setGoal] = useState("75");
  const [deficit, setDeficit] = useState("500");
  const [result, setResult] = useState<{ days: number; weeks: number; months: number; kgPerWeek: number } | null>(null);

  const calculate = () => {
    const c = parseFloat(current), g = parseFloat(goal), d = parseFloat(deficit);
    if ([c, g, d].some(isNaN) || c <= g) return;
    const kg = c - g;
    const days = (kg * 7700) / d;
    setResult({ days, weeks: days / 7, months: days / 30.44, kgPerWeek: (d * 7) / 7700 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Current Weight (kg)"><Input type="number" value={current} onChange={e => setCurrent(e.target.value)} /></Field>
          <Field label="Goal Weight (kg)"><Input type="number" value={goal} onChange={e => setGoal(e.target.value)} /></Field>
        </div>
        <Field label="Daily Calorie Deficit (kcal)" hint="500 kcal/day = ~0.45 kg/week loss">
          <Input type="number" value={deficit} onChange={e => setDeficit(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Weight Loss Timeline</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Estimated Time" value={`${Math.round(result.weeks)} weeks`} highlight />
            <ResultBox label="Days" value={Math.round(result.days)} />
            <ResultBox label="Approx. Months" value={result.months.toFixed(1)} />
            <ResultBox label="Loss Rate" value={`${result.kgPerWeek.toFixed(2)} kg/week`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function HealthyWeightCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'healthy-weight')!;
  const [height, setHeight] = useState("170");
  const [unit, setUnit] = useState("cm");
  const [result, setResult] = useState<{ min: number; max: number; ideal: number } | null>(null);

  const calculate = () => {
    let hm = parseFloat(height);
    if (isNaN(hm)) return;
    if (unit === 'cm') hm = hm / 100;
    else if (unit === 'in') hm = hm * 0.0254;
    const min = 18.5 * hm * hm;
    const max = 24.9 * hm * hm;
    setResult({ min, max, ideal: (min + max) / 2 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Height"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="cm">Centimeters</option>
              <option value="m">Meters</option>
              <option value="in">Inches</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Healthy Weight</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Healthy Range" value={`${result.min.toFixed(1)} – ${result.max.toFixed(1)} kg`} highlight />
            <ResultBox label="Ideal Weight" value={`${result.ideal.toFixed(1)} kg`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function HeightPredictorCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'height-predictor')!;
  const [sex, setSex] = useState("male");
  const [motherHeight, setMotherHeight] = useState("162");
  const [fatherHeight, setFatherHeight] = useState("175");
  const [result, setResult] = useState<{ predicted: number; range: [number, number] } | null>(null);

  const calculate = () => {
    const m = parseFloat(motherHeight), f = parseFloat(fatherHeight);
    if (isNaN(m) || isNaN(f)) return;
    let mid = (m + f) / 2;
    const predicted = sex === 'male' ? mid + 6.5 : mid - 6.5;
    setResult({ predicted, range: [predicted - 8.5, predicted + 8.5] });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Child's Sex">
          <Select value={sex} onChange={e => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Mother's Height (cm)"><Input type="number" value={motherHeight} onChange={e => setMotherHeight(e.target.value)} /></Field>
          <Field label="Father's Height (cm)"><Input type="number" value={fatherHeight} onChange={e => setFatherHeight(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Predict Height</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Predicted Adult Height" value={`${result.predicted.toFixed(1)} cm`} highlight />
            <ResultBox label="Range" value={`${result.range[0].toFixed(1)} – ${result.range[1].toFixed(1)} cm`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">Mid-Parent Height Formula</h3>
        <p>For boys: (Mother + Father + 13) / 2. For girls: (Mother + Father - 13) / 2. Result is in centimeters. Actual height can vary by ±8.5 cm.</p>
      </div>
    </ToolPage>
  );
}

export function WaistToHipCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'waist-to-hip')!;
  const [waist, setWaist] = useState("80");
  const [hip, setHip] = useState("95");
  const [sex, setSex] = useState("female");
  const [result, setResult] = useState<{ ratio: number; risk: string; color: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), h = parseFloat(hip);
    if (isNaN(w) || isNaN(h) || h === 0) return;
    const ratio = w / h;
    let risk: string, color: string;
    if (sex === 'male') {
      risk = ratio < 0.90 ? 'Low Risk' : ratio < 1.00 ? 'Moderate Risk' : 'High Risk';
      color = ratio < 0.90 ? 'green' : ratio < 1.00 ? 'yellow' : 'red';
    } else {
      risk = ratio < 0.80 ? 'Low Risk' : ratio < 0.85 ? 'Moderate Risk' : 'High Risk';
      color = ratio < 0.80 ? 'green' : ratio < 0.85 ? 'yellow' : 'red';
    }
    setResult({ ratio, risk, color });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Sex">
          <Select value={sex} onChange={e => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Field>
        <Field label="Waist Circumference (cm)">
          <Input value={waist} onChange={e => setWaist(e.target.value)} type="number" min="0" />
        </Field>
        <Field label="Hip Circumference (cm)">
          <Input value={hip} onChange={e => setHip(e.target.value)} type="number" min="0" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate WHR</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Waist-to-Hip Ratio" value={result.ratio.toFixed(2)} highlight />
            <ResultBox label="Health Risk" value={result.risk} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function WaistToHeightCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'waist-to-height')!;
  const [waist, setWaist] = useState("80");
  const [height, setHeight] = useState("175");
  const [result, setResult] = useState<{ ratio: number; risk: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return;
    const ratio = w / h;
    const risk = ratio < 0.4 ? 'Underweight' : ratio < 0.5 ? 'Healthy' : ratio < 0.6 ? 'Overweight' : 'Obese';
    setResult({ ratio, risk });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Waist Circumference (cm)">
          <Input value={waist} onChange={e => setWaist(e.target.value)} type="number" min="0" />
        </Field>
        <Field label="Height (cm)">
          <Input value={height} onChange={e => setHeight(e.target.value)} type="number" min="0" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Waist-to-Height Ratio</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Ratio" value={result.ratio.toFixed(3)} highlight />
            <ResultBox label="Category" value={result.risk} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function RMRCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rmr')!;
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [age, setAge] = useState("30");
  const [sex, setSex] = useState("male");
  const [result, setResult] = useState<{ rmr: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height), a = parseFloat(age);
    if ([w, h, a].some(isNaN)) return;
    const rmr = sex === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    setResult({ rmr });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Sex">
          <Select value={sex} onChange={e => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Weight (kg)">
            <Input value={weight} onChange={e => setWeight(e.target.value)} type="number" min="0" />
          </Field>
          <Field label="Height (cm)">
            <Input value={height} onChange={e => setHeight(e.target.value)} type="number" min="0" />
          </Field>
          <Field label="Age (years)">
            <Input value={age} onChange={e => setAge(e.target.value)} type="number" min="0" />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate RMR</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Resting Metabolic Rate" value={`${result.rmr.toFixed(0)} kcal/day`} highlight />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function StepsToCaloriesCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'steps-to-calories')!;
  const [steps, setSteps] = useState("10000");
  const [weight, setWeight] = useState("70");
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState<{ calories: number; km: number; miles: number } | null>(null);

  const calc = () => {
    const s = parseFloat(steps);
    let w = parseFloat(weight);
    if (isNaN(s) || isNaN(w)) return;
    if (unit === 'lbs') w *= 0.453592;
    const strideLength = 0.415 * (w > 0 ? 1 : 1);
    const distKm = s * 0.762 / 1000;
    const calories = s * 0.04 * (w / 70);
    setResult({ calories, km: distKm, miles: distKm * 0.621371 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Steps"><Input type="number" value={steps} onChange={e => setSteps(e.target.value)} /></Field>
          <Field label={`Weight (${unit})`}><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
        </div>
        <Field label="Weight Unit">
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="kg">Kilograms (kg)</option>
            <option value="lbs">Pounds (lbs)</option>
          </Select>
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Calories Burned" value={`${result.calories.toFixed(0)} kcal`} highlight />
            <ResultBox label="Distance (km)" value={`${result.km.toFixed(2)} km`} />
            <ResultBox label="Distance (miles)" value={`${result.miles.toFixed(2)} mi`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Estimate: ~0.04 calories per step for a 70kg person. Actual calories vary by speed, terrain, and fitness level. Average stride length: ~76cm.</div>
    </ToolPage>
  );
}

export function WalkingCaloriesCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'walking-calories')!;
  const [weight, setWeight] = useState("70");
  const [unit, setUnit] = useState("kg");
  const [speed, setSpeed] = useState("5");
  const [duration, setDuration] = useState("30");
  const [result, setResult] = useState<{ calories: number; distance: number } | null>(null);

  const calc = () => {
    let w = parseFloat(weight);
    const spd = parseFloat(speed), dur = parseFloat(duration);
    if ([w, spd, dur].some(isNaN)) return;
    if (unit === 'lbs') w *= 0.453592;
    const metMap: Record<string, number> = { '3': 2.8, '4': 3.5, '5': 4.3, '6': 5.0, '7': 7.0, '8': 8.3 };
    const closestSpeed = Object.keys(metMap).reduce((prev, curr) =>
      Math.abs(parseFloat(curr) - spd) < Math.abs(parseFloat(prev) - spd) ? curr : prev
    );
    const met = metMap[closestSpeed] || 3.5;
    const calories = met * w * (dur / 60);
    setResult({ calories, distance: spd * (dur / 60) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label={`Body Weight (${unit})`}><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
          <Field label="Weight Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </Select>
          </Field>
          <Field label="Speed (km/h)"><Input type="number" value={speed} onChange={e => setSpeed(e.target.value)} step="0.5" min="1" max="10" /></Field>
          <Field label="Duration (minutes)"><Input type="number" value={duration} onChange={e => setDuration(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Calories</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Calories Burned" value={`${result.calories.toFixed(0)} kcal`} highlight />
            <ResultBox label="Distance Covered" value={`${result.distance.toFixed(2)} km`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Uses MET values: slow walk (3 km/h) = 2.8 MET, brisk walk (5 km/h) = 4.3 MET, fast walk (7 km/h) = 7.0 MET.</div>
    </ToolPage>
  );
}
