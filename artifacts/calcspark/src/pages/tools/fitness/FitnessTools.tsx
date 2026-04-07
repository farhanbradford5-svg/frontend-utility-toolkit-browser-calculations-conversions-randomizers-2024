import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function TDEECalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'tdee')!;
  const [age, setAge] = useState("25");
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height), act = parseFloat(activity);
    if ([a, w, h, act].some(isNaN)) return;
    const bmr = sex === 'male' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    setResult({ bmr, tdee: bmr * act });
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
            <option value="1.9">Extra active (athlete / physical job)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate TDEE</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="TDEE (Maintenance)" value={`${Math.round(result.tdee)} kcal/day`} highlight />
            <ResultBox label="BMR" value={`${Math.round(result.bmr)} kcal/day`} />
            <ResultBox label="Cut (−500)" value={`${Math.round(result.tdee - 500)} kcal/day`} />
            <ResultBox label="Bulk (+300)" value={`${Math.round(result.tdee + 300)} kcal/day`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MacroCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'macro')!;
  const [calories, setCalories] = useState("2500");
  const [goal, setGoal] = useState("balanced");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);

  const presets: Record<string, [number, number, number]> = {
    balanced: [0.30, 0.40, 0.30],
    cutting: [0.40, 0.30, 0.30],
    bulking: [0.25, 0.50, 0.25],
    keto: [0.25, 0.05, 0.70],
    highCarb: [0.20, 0.55, 0.25],
  };

  const calculate = () => {
    const cal = parseFloat(calories);
    if (isNaN(cal)) return;
    const [p, c, f] = presets[goal];
    setResult({ protein: Math.round((cal * p) / 4), carbs: Math.round((cal * c) / 4), fat: Math.round((cal * f) / 9) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Daily Calories (kcal)">
          <Input type="number" value={calories} onChange={e => setCalories(e.target.value)} />
        </Field>
        <Field label="Goal">
          <Select value={goal} onChange={e => setGoal(e.target.value)}>
            <option value="balanced">Balanced (30/40/30)</option>
            <option value="cutting">Cutting (40/30/30)</option>
            <option value="bulking">Bulking (25/50/25)</option>
            <option value="keto">Keto (25/5/70)</option>
            <option value="highCarb">High Carb (20/55/25)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Macros</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Protein" value={`${result.protein} g`} highlight />
            <ResultBox label="Carbohydrates" value={`${result.carbs} g`} />
            <ResultBox label="Fat" value={`${result.fat} g`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function OneRepMaxCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'one-rep-max')!;
  const [weight, setWeight] = useState("100");
  const [reps, setReps] = useState("5");
  const [result, setResult] = useState<{ epley: number; brzycki: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), r = parseFloat(reps);
    if (isNaN(w) || isNaN(r)) return;
    const epley = w * (1 + r / 30);
    const brzycki = r === 1 ? w : w * (36 / (37 - r));
    setResult({ epley, brzycki });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Weight Lifted (kg/lbs)"><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
          <Field label="Reps Performed"><Input type="number" value={reps} onChange={e => setReps(e.target.value)} min="1" max="30" /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Estimate 1RM</CalcButton>
        {result && (
          <>
            <ResultGrid>
              <ResultBox label="1RM (Epley)" value={`${result.epley.toFixed(1)}`} highlight />
              <ResultBox label="1RM (Brzycki)" value={`${result.brzycki.toFixed(1)}`} />
            </ResultGrid>
            <div className="p-4 bg-secondary rounded-xl mt-2">
              <p className="text-xs font-medium text-muted-foreground mb-2">Percentage of 1RM</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                {[90, 80, 75, 70, 65, 60].map(pct => (
                  <div key={pct} className="flex justify-between">
                    <span className="text-muted-foreground">{pct}%</span>
                    <span className="font-medium">{(result.epley * pct / 100).toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ToolPage>
  );
}

export function TargetHeartRateCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'target-heart-rate')!;
  const [age, setAge] = useState("30");
  const [result, setResult] = useState<{ maxHR: number; zones: { label: string; min: number; max: number; purpose: string }[] } | null>(null);

  const calculate = () => {
    const a = parseFloat(age);
    if (isNaN(a)) return;
    const maxHR = 220 - a;
    const zones = [
      { label: 'Zone 1 (Recovery)', min: Math.round(maxHR * 0.50), max: Math.round(maxHR * 0.60), purpose: 'Warm-up, recovery' },
      { label: 'Zone 2 (Fat burn)', min: Math.round(maxHR * 0.60), max: Math.round(maxHR * 0.70), purpose: 'Endurance base' },
      { label: 'Zone 3 (Aerobic)', min: Math.round(maxHR * 0.70), max: Math.round(maxHR * 0.80), purpose: 'Aerobic fitness' },
      { label: 'Zone 4 (Anaerobic)', min: Math.round(maxHR * 0.80), max: Math.round(maxHR * 0.90), purpose: 'Speed, lactate' },
      { label: 'Zone 5 (Max)', min: Math.round(maxHR * 0.90), max: maxHR, purpose: 'Peak effort' },
    ];
    setResult({ maxHR, zones });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Age">
          <Input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Heart Rate Zones</CalcButton>
        {result && (
          <div className="space-y-3 mt-2">
            <ResultBox label="Max Heart Rate" value={`${result.maxHR} bpm`} highlight />
            <div className="space-y-2">
              {result.zones.map(zone => (
                <div key={zone.label} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-foreground">{zone.label}</p>
                    <p className="text-xs text-muted-foreground">{zone.purpose}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{zone.min}–{zone.max} bpm</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function PaceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pace')!;
  const [mode, setMode] = useState("pace");
  const [distance, setDistance] = useState("5");
  const [unit, setUnit] = useState("km");
  const [timeH, setTimeH] = useState("0");
  const [timeM, setTimeM] = useState("25");
  const [timeS, setTimeS] = useState("0");
  const [pace, setPace] = useState("5");
  const [result, setResult] = useState<{ value: string; label: string; extra?: string }[]>([]);

  const calculate = () => {
    const dist = parseFloat(distance);
    const totalSec = parseInt(timeH) * 3600 + parseInt(timeM) * 60 + parseInt(timeS);
    if (mode === 'pace') {
      if (isNaN(dist) || isNaN(totalSec) || dist === 0) return;
      const paceSecPerUnit = totalSec / dist;
      const paceMin = Math.floor(paceSecPerUnit / 60);
      const paceSec = Math.round(paceSecPerUnit % 60);
      const speed = (dist / (totalSec / 3600)).toFixed(2);
      setResult([
        { value: `${paceMin}:${paceSec.toString().padStart(2, '0')}`, label: `Pace (min/${unit})` },
        { value: `${speed} ${unit}/h`, label: 'Speed' },
      ]);
    } else {
      // pace to time
      const paceMin = parseFloat(pace);
      if (isNaN(dist) || isNaN(paceMin) || dist === 0) return;
      const totalSecs = dist * paceMin * 60;
      const h = Math.floor(totalSecs / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = Math.round(totalSecs % 60);
      setResult([
        { value: `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`, label: 'Finish Time' },
      ]);
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Calculate">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="pace">Pace from distance and time</option>
            <option value="time">Finish time from pace and distance</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Distance"><Input type="number" value={distance} onChange={e => setDistance(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="km">km</option>
              <option value="mi">miles</option>
              <option value="m">meters</option>
            </Select>
          </Field>
        </div>
        {mode === 'pace' ? (
          <div className="grid grid-cols-3 gap-2">
            <Field label="Hours"><Input type="number" value={timeH} onChange={e => setTimeH(e.target.value)} min="0" /></Field>
            <Field label="Minutes"><Input type="number" value={timeM} onChange={e => setTimeM(e.target.value)} min="0" /></Field>
            <Field label="Seconds"><Input type="number" value={timeS} onChange={e => setTimeS(e.target.value)} min="0" /></Field>
          </div>
        ) : (
          <Field label={`Pace (min/${unit})`}><Input type="number" value={pace} onChange={e => setPace(e.target.value)} /></Field>
        )}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result.length > 0 && (
          <ResultGrid>
            {result.map(r => <ResultBox key={r.label} label={r.label} value={r.value} highlight={result.indexOf(r) === 0} />)}
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ProteinCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'protein')!;
  const [weight, setWeight] = useState("75");
  const [unit, setUnit] = useState("kg");
  const [goal, setGoal] = useState("muscle");
  const [result, setResult] = useState<{ min: number; max: number; optimal: number } | null>(null);

  const ranges: Record<string, [number, number]> = {
    sedentary: [0.8, 1.0],
    muscle: [1.6, 2.2],
    endurance: [1.2, 1.6],
    cutting: [2.0, 2.4],
  };

  const calculate = () => {
    let w = parseFloat(weight);
    if (isNaN(w)) return;
    if (unit === 'lbs') w = w / 2.205;
    const [minR, maxR] = ranges[goal];
    setResult({ min: Math.round(w * minR), max: Math.round(w * maxR), optimal: Math.round(w * ((minR + maxR) / 2)) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Body Weight"><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </Select>
          </Field>
        </div>
        <Field label="Goal">
          <Select value={goal} onChange={e => setGoal(e.target.value)}>
            <option value="sedentary">Sedentary / General health</option>
            <option value="endurance">Endurance athlete</option>
            <option value="muscle">Muscle building</option>
            <option value="cutting">Cutting / Fat loss</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Protein Needs</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Optimal Daily Protein" value={`${result.optimal} g`} highlight />
            <ResultBox label="Range" value={`${result.min} – ${result.max} g`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CaloriesBurnedCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'calories-burned')!;
  const [weight, setWeight] = useState("70"); const [duration, setDuration] = useState("30"); const [activity, setActivity] = useState("running");
  const [result, setResult] = useState<number|null>(null);
  const mets: Record<string,number> = {running:8.0,cycling:7.5,swimming:7.0,walking:3.5,yoga:2.5,weightlifting:3.0,hiking:6.0,basketball:6.5,tennis:7.3,dancing:5.5};
  const calc = () => {
    const w=parseFloat(weight), d=parseFloat(duration);
    if([w,d].some(isNaN)) return;
    setResult((mets[activity]||5)*3.5*w/200*(d));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Activity">
          <Select value={activity} onChange={e=>setActivity(e.target.value)}>
            {Object.keys(mets).map(a=><option key={a} value={a}>{a.charAt(0).toUpperCase()+a.slice(1)}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} /></Field>
          <Field label="Duration (min)"><Input type="number" value={duration} onChange={e=>setDuration(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Calories Burned</CalcButton>
        {result !== null && <ResultBox label="Calories Burned (kcal)" value={result.toFixed(0)} highlight />}
      </div>
    </ToolPage>
  );
}

export function BodyMassIndexCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'body-mass-index')!;
  const [weight, setWeight] = useState("70"); const [height, setHeight] = useState("175");
  const [result, setResult] = useState<{bmi:number;category:string}|null>(null);
  const calc = () => {
    const w=parseFloat(weight), h=parseFloat(height)/100;
    if([w,h].some(isNaN)||h===0) return;
    const bmi=w/(h*h);
    const category=bmi<18.5?'Underweight':bmi<25?'Normal Weight':bmi<30?'Overweight':'Obese';
    setResult({bmi, category});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} /></Field>
          <Field label="Height (cm)"><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate BMI</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="BMI" value={result.bmi.toFixed(1)} highlight />
          <ResultBox label="Category" value={result.category} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function SwimmingPaceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'swimming-pace')!;
  const [distance, setDistance] = useState("1500"); const [minutes, setMinutes] = useState("30"); const [seconds, setSeconds] = useState("0");
  const [result, setResult] = useState<{per100m:string;per100yd:string}|null>(null);
  const calc = () => {
    const d=parseFloat(distance), m=parseFloat(minutes)||0, s=parseFloat(seconds)||0;
    if(isNaN(d)||d===0) return;
    const totalSec=m*60+s;
    const per100m=totalSec/d*100;
    const per100yd=totalSec/d*91.44;
    const fmt=(t:number)=>`${Math.floor(t/60)}:${Math.floor(t%60).toString().padStart(2,'0')}`;
    setResult({per100m:fmt(per100m), per100yd:fmt(per100yd)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Distance (meters)"><Input type="number" value={distance} onChange={e=>setDistance(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Minutes"><Input type="number" value={minutes} onChange={e=>setMinutes(e.target.value)} /></Field>
          <Field label="Seconds"><Input type="number" value={seconds} onChange={e=>setSeconds(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Swimming Pace</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Pace per 100m" value={result.per100m} highlight />
          <ResultBox label="Pace per 100yd" value={result.per100yd} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function CyclingPaceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cycling-pace')!;
  const [dist, setDist] = useState("40"); const [hours, setHours] = useState("1"); const [mins, setMins] = useState("30");
  const [result, setResult] = useState<{speed:number}|null>(null);
  const calc = () => {
    const d=parseFloat(dist), h=parseFloat(hours)||0, m=parseFloat(mins)||0;
    const totalHrs=h+m/60;
    if(isNaN(d)||totalHrs===0) return;
    setResult({speed:d/totalHrs});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Distance (km)"><Input type="number" value={dist} onChange={e=>setDist(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Hours"><Input type="number" value={hours} onChange={e=>setHours(e.target.value)} /></Field>
          <Field label="Minutes"><Input type="number" value={mins} onChange={e=>setMins(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Cycling Speed</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Average Speed (km/h)" value={result.speed.toFixed(2)} highlight />
          <ResultBox label="Speed (mph)" value={(result.speed*0.621371).toFixed(2)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

// ─── NEW FITNESS TOOLS ─────────────────────────────────────────────────────

export function LeanBodyMassCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'lean-body-mass')!;
  const [weight, setWeight] = useState("180");
  const [bodyFat, setBodyFat] = useState("20");
  const [unit, setUnit] = useState("lbs");
  const [result, setResult] = useState<{lbm:number;fatMass:number;unitLabel:string}|null>(null);

  const calculate = () => {
    const w = parseFloat(weight)||0, bf = parseFloat(bodyFat)||0;
    const fatMass = w * (bf/100);
    const lbm = w - fatMass;
    setResult({ lbm, fatMass, unitLabel: unit });
  };
  const fmt = (n:number,u:string) => `${n.toFixed(1)} ${u}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['ffmi','body-fat','bmi','tdee','body-surface-area']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Body Weight">
            <Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} />
          </Field>
          <Field label="Unit">
            <Select value={unit} onChange={e=>setUnit(e.target.value)}>
              <option value="lbs">lbs</option><option value="kg">kg</option>
            </Select>
          </Field>
          <Field label="Body Fat (%)"><Input type="number" value={bodyFat} onChange={e=>setBodyFat(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate LBM</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Lean Body Mass" value={fmt(result.lbm, result.unitLabel)} highlight />
          <ResultBox label="Fat Mass" value={fmt(result.fatMass, result.unitLabel)} />
          <ResultBox label="Fat %" value={`${bodyFat}%`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">LBM = Total Weight × (1 - Body Fat%). Lean body mass includes muscle, bone, organs, and water. Track LBM to monitor muscle gain and fat loss independently.</div>
    </ToolPage>
  );
}

export function FFMICalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ffmi')!;
  const [weight, setWeight] = useState("185");
  const [height, setHeight] = useState("71");
  const [bodyFat, setBodyFat] = useState("12");
  const [unit, setUnit] = useState("imperial");
  const [result, setResult] = useState<{ffmi:number;nffmi:number;rating:string}|null>(null);

  const calculate = () => {
    let weightKg = parseFloat(weight)||0, heightM = parseFloat(height)||0;
    if (unit==='imperial') { weightKg = weightKg*0.453592; heightM = heightM*0.0254; }
    const bf = (parseFloat(bodyFat)||0)/100;
    const lbm = weightKg*(1-bf);
    const ffmi = lbm/(heightM*heightM);
    const nffmi = ffmi + 6.1*(1.8-heightM);
    let rating = nffmi < 18 ? 'Below Average' : nffmi < 20 ? 'Average' : nffmi < 22 ? 'Above Average' : nffmi < 24 ? 'Excellent' : nffmi < 26 ? 'Superior' : 'Suspected Enhanced';
    setResult({ ffmi, nffmi, rating });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['lean-body-mass','body-fat','bmi','tdee','ffmi']}>
      <div className="space-y-4">
        <Field label="Units">
          <Select value={unit} onChange={e=>setUnit(e.target.value)}>
            <option value="imperial">Imperial (lbs, inches)</option>
            <option value="metric">Metric (kg, cm)</option>
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label={unit==='imperial'?'Weight (lbs)':'Weight (kg)'}><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} /></Field>
          <Field label={unit==='imperial'?'Height (in)':'Height (cm)'}><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} /></Field>
          <Field label="Body Fat (%)"><Input type="number" value={bodyFat} onChange={e=>setBodyFat(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate FFMI</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="FFMI" value={result.ffmi.toFixed(2)} />
          <ResultBox label="Normalized FFMI" value={result.nffmi.toFixed(2)} highlight />
          <ResultBox label="Rating" value={result.rating} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">FFMI (Fat-Free Mass Index) = Lean Mass (kg) / Height (m)^2. Normalized FFMI adjusts for height. Natural athletes typically score 18-25.</div>
    </ToolPage>
  );
}

export function BodySurfaceAreaCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'body-surface-area')!;
  const [weight, setWeight] = useState("80");
  const [height, setHeight] = useState("175");
  const [formula, setFormula] = useState("mosteller");
  const [result, setResult] = useState<{bsa:number;formula:string}|null>(null);

  const calculate = () => {
    const w = parseFloat(weight)||0, h = parseFloat(height)||0;
    let bsa = 0;
    if (formula==='mosteller') bsa = Math.sqrt(h*w/3600);
    else if (formula==='dubois') bsa = 0.007184 * Math.pow(h,0.725) * Math.pow(w,0.425);
    else if (formula==='haycock') bsa = 0.024265 * Math.pow(h,0.3964) * Math.pow(w,0.5378);
    setResult({ bsa, formula });
  };
  const FORMULAS: Record<string,string> = {
    mosteller:'Mosteller','dubois':'DuBois & DuBois','haycock':'Haycock'
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['lean-body-mass','ffmi','bmi','body-fat','bmr']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Weight (kg)"><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} /></Field>
          <Field label="Height (cm)"><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} /></Field>
          <Field label="Formula">
            <Select value={formula} onChange={e=>setFormula(e.target.value)}>
              <option value="mosteller">Mosteller</option>
              <option value="dubois">DuBois</option>
              <option value="haycock">Haycock</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate BSA</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Body Surface Area" value={`${result.bsa.toFixed(4)} m²`} highlight />
          <ResultBox label="Formula Used" value={FORMULAS[result.formula]} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Mosteller: BSA = sqrt(H×W/3600). Used in medical dosing calculations. Average adult BSA is approximately 1.7 m².</div>
    </ToolPage>
  );
}

export function RunningCadenceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'running-cadence')!;
  const [steps, setSteps] = useState("160");
  const [pace, setPace] = useState("9.5");
  const [result, setResult] = useState<{spm:number;strideLength:number;rating:string;target:string}|null>(null);

  const calculate = () => {
    const spm = parseFloat(steps)||0;
    const minPerMile = parseFloat(pace)||0;
    const speedMph = 60/minPerMile;
    const speedFtPerMin = speedMph * 5280/60;
    const strideLength = strideLength2(spm, speedFtPerMin);
    const rating = spm < 160 ? 'Low (overstriding risk)' : spm < 170 ? 'Below optimal' : spm <= 180 ? 'Optimal' : spm <= 190 ? 'High' : 'Very high';
    const target = spm < 170 ? `Try ${spm + 5} spm (+3%)` : 'Good cadence!';
    setResult({ spm, strideLength, rating, target });
  };

  function strideLength2(spm:number, ftPerMin:number) {
    if (!spm) return 0;
    return ftPerMin / spm * 12; // inches per step
  }

  return (
    <ToolPage tool={tool} relatedSlugs={['pace','swimming-pace','cycling-pace','calories-burned','tdee']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Current Cadence (steps/min)" hint="Count both feet for 30s, double it">
            <Input type="number" value={steps} onChange={e=>setSteps(e.target.value)} />
          </Field>
          <Field label="Current Pace (min/mile)">
            <Input type="number" value={pace} step="0.5" onChange={e=>setPace(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Analyze Cadence</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Cadence" value={`${result.spm} spm`} highlight />
          <ResultBox label="Stride Length (est.)" value={`${result.strideLength.toFixed(1)} in`} />
          <ResultBox label="Rating" value={result.rating} />
          <ResultBox label="Recommendation" value={result.target} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Optimal running cadence is 170-180 steps per minute. Higher cadence reduces injury risk and improves efficiency. Increase cadence gradually (3-5% per week).</div>
    </ToolPage>
  );
}
