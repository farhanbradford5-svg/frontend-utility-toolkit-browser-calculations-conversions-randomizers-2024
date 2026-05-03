import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function OhmsLawCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ohms-law')!;
  const [solve, setSolve] = useState("R");
  const [v, setV] = useState("12");
  const [i, setI] = useState("2");
  const [r, setR] = useState("6");
  const [result, setResult] = useState<{ label: string; value: number; unit: string; power: number } | null>(null);

  const calculate = () => {
    const vv = parseFloat(v), iv = parseFloat(i), rv = parseFloat(r);
    if (solve === 'V') {
      if (isNaN(iv) || isNaN(rv)) return;
      setResult({ label: 'Voltage', value: iv * rv, unit: 'V', power: iv * iv * rv });
    } else if (solve === 'I') {
      if (isNaN(vv) || isNaN(rv) || rv === 0) return;
      setResult({ label: 'Current', value: vv / rv, unit: 'A', power: vv * vv / rv });
    } else {
      if (isNaN(vv) || isNaN(iv) || iv === 0) return;
      setResult({ label: 'Resistance', value: vv / iv, unit: 'Ω', power: vv * iv });
    }
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['kinetic-energy', 'power', 'acceleration', 'potential-energy', 'momentum']}>
      <div className="space-y-4">
        <Field label="Solve for">
          <Select value={solve} onChange={e => setSolve(e.target.value)}>
            <option value="V">Voltage (V)</option>
            <option value="I">Current (I)</option>
            <option value="R">Resistance (R)</option>
          </Select>
        </Field>
        {solve !== 'V' && <Field label="Voltage (V)"><Input type="number" value={v} onChange={e => setV(e.target.value)} /></Field>}
        {solve !== 'I' && <Field label="Current (A)"><Input type="number" value={i} onChange={e => setI(e.target.value)} /></Field>}
        {solve !== 'R' && <Field label="Resistance (Ω)"><Input type="number" value={r} onChange={e => setR(e.target.value)} /></Field>}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label={result.label} value={`${result.value.toFixed(4)} ${result.unit}`} highlight />
            <ResultBox label="Power (W)" value={`${result.power.toFixed(4)} W`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function KineticEnergyCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'kinetic-energy')!;
  const [mass, setMass] = useState("70");
  const [velocity, setVelocity] = useState("10");
  const [result, setResult] = useState<{ ke: number } | null>(null);

  const calculate = () => {
    const m = parseFloat(mass), v = parseFloat(velocity);
    if (isNaN(m) || isNaN(v)) return;
    setResult({ ke: 0.5 * m * v * v });
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['potential-energy', 'momentum', 'acceleration', 'ohms-law', 'work']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Mass (kg)"><Input type="number" value={mass} onChange={e => setMass(e.target.value)} /></Field>
          <Field label="Velocity (m/s)"><Input type="number" value={velocity} onChange={e => setVelocity(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Kinetic Energy</CalcButton>
        {result && <ResultBox label="Kinetic Energy" value={`${result.ke.toFixed(4)} J`} highlight />}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <p><strong>Formula:</strong> KE = ½mv² (where m = mass in kg, v = velocity in m/s)</p>
      </div>
    </ToolPage>
  );
}

export function AccelerationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'acceleration')!;
  const [mode, setMode] = useState("force");
  const [f, setF] = useState("100");
  const [m, setM] = useState("50");
  const [v1, setV1] = useState("0");
  const [v2, setV2] = useState("20");
  const [t, setT] = useState("5");
  const [result, setResult] = useState<{ a: number } | null>(null);

  const calculate = () => {
    if (mode === 'force') {
      const fv = parseFloat(f), mv = parseFloat(m);
      if (isNaN(fv) || isNaN(mv) || mv === 0) return;
      setResult({ a: fv / mv });
    } else {
      const v1v = parseFloat(v1), v2v = parseFloat(v2), tv = parseFloat(t);
      if (isNaN(v1v) || isNaN(v2v) || isNaN(tv) || tv === 0) return;
      setResult({ a: (v2v - v1v) / tv });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Calculate from">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="force">Force and mass (F = ma)</option>
            <option value="velocity">Change in velocity over time</option>
          </Select>
        </Field>
        {mode === 'force' ? (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Force (N)"><Input type="number" value={f} onChange={e => setF(e.target.value)} /></Field>
            <Field label="Mass (kg)"><Input type="number" value={m} onChange={e => setM(e.target.value)} /></Field>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            <Field label="Initial Velocity (m/s)"><Input type="number" value={v1} onChange={e => setV1(e.target.value)} /></Field>
            <Field label="Final Velocity (m/s)"><Input type="number" value={v2} onChange={e => setV2(e.target.value)} /></Field>
            <Field label="Time (s)"><Input type="number" value={t} onChange={e => setT(e.target.value)} /></Field>
          </div>
        )}
        <CalcButton onClick={calculate} className="w-full">Calculate Acceleration</CalcButton>
        {result && <ResultBox label="Acceleration" value={`${result.a.toFixed(4)} m/s²`} highlight />}
      </div>
    </ToolPage>
  );
}

export function DensityCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'density')!;
  const [solve, setSolve] = useState("density");
  const [density, setDensity] = useState("1000");
  const [mass, setMass] = useState("500");
  const [volume, setVolume] = useState("0.5");
  const [result, setResult] = useState<{ label: string; value: number; unit: string } | null>(null);

  const calculate = () => {
    const d = parseFloat(density), m = parseFloat(mass), v = parseFloat(volume);
    if (solve === 'density') {
      if (isNaN(m) || isNaN(v) || v === 0) return;
      setResult({ label: 'Density', value: m / v, unit: 'kg/m³' });
    } else if (solve === 'mass') {
      if (isNaN(d) || isNaN(v)) return;
      setResult({ label: 'Mass', value: d * v, unit: 'kg' });
    } else {
      if (isNaN(d) || isNaN(m) || d === 0) return;
      setResult({ label: 'Volume', value: m / d, unit: 'm³' });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Solve for">
          <Select value={solve} onChange={e => setSolve(e.target.value)}>
            <option value="density">Density (ρ = m/V)</option>
            <option value="mass">Mass (m = ρV)</option>
            <option value="volume">Volume (V = m/ρ)</option>
          </Select>
        </Field>
        {solve !== 'density' && <Field label="Density (kg/m³)"><Input type="number" value={density} onChange={e => setDensity(e.target.value)} /></Field>}
        {solve !== 'mass' && <Field label="Mass (kg)"><Input type="number" value={mass} onChange={e => setMass(e.target.value)} /></Field>}
        {solve !== 'volume' && <Field label="Volume (m³)"><Input type="number" value={volume} onChange={e => setVolume(e.target.value)} /></Field>}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultBox label={result.label} value={`${result.value.toFixed(4)} ${result.unit}`} highlight />}
      </div>
    </ToolPage>
  );
}

export function HalfLifeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'half-life')!;
  const [initial, setInitial] = useState("1000");
  const [halfLife, setHalfLife] = useState("5730");
  const [time, setTime] = useState("11460");
  const [result, setResult] = useState<{ remaining: number; decayed: number; halfLives: number } | null>(null);

  const calculate = () => {
    const N0 = parseFloat(initial), hl = parseFloat(halfLife), t = parseFloat(time);
    if ([N0, hl, t].some(isNaN) || hl === 0) return;
    const halfLives = t / hl;
    const remaining = N0 * Math.pow(0.5, halfLives);
    setResult({ remaining, decayed: N0 - remaining, halfLives });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Initial Quantity"><Input type="number" value={initial} onChange={e => setInitial(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Half-Life (time units)"><Input type="number" value={halfLife} onChange={e => setHalfLife(e.target.value)} /></Field>
          <Field label="Time Elapsed"><Input type="number" value={time} onChange={e => setTime(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Decay</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Remaining" value={result.remaining.toFixed(4)} highlight />
            <ResultBox label="Decayed" value={result.decayed.toFixed(4)} />
            <ResultBox label="Half-Lives Elapsed" value={result.halfLives.toFixed(2)} />
            <ResultBox label="% Remaining" value={`${(result.remaining / parseFloat(initial) * 100).toFixed(2)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PressureCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pressure')!;
  const [force, setForce] = useState("100");
  const [area, setArea] = useState("0.5");
  const [result, setResult] = useState<{ pa: number; psi: number; bar: number; atm: number } | null>(null);

  const calculate = () => {
    const f = parseFloat(force), a = parseFloat(area);
    if (isNaN(f) || isNaN(a) || a === 0) return;
    const pa = f / a;
    setResult({ pa, psi: pa * 0.000145038, bar: pa / 100000, atm: pa / 101325 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Force (N)"><Input type="number" value={force} onChange={e => setForce(e.target.value)} /></Field>
          <Field label="Area (m²)"><Input type="number" value={area} onChange={e => setArea(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Pressure</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Pascal (Pa)" value={result.pa.toFixed(4)} highlight />
            <ResultBox label="PSI" value={result.psi.toFixed(6)} />
            <ResultBox label="Bar" value={result.bar.toFixed(6)} />
            <ResultBox label="Atmosphere (atm)" value={result.atm.toFixed(6)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function GravitationalForceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'gravitational-force')!;
  const [m1, setM1] = useState("5.97e24"); const [m2, setM2] = useState("7.34e22"); const [d, setD] = useState("3.84e8");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const G=6.674e-11, m1v=parseFloat(m1), m2v=parseFloat(m2), dv=parseFloat(d);
    if([m1v,m2v,dv].some(isNaN)||dv===0) return;
    setResult(G*m1v*m2v/(dv*dv));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Mass 1 (kg)"><Input value={m1} onChange={e=>setM1(e.target.value)} /></Field>
        <Field label="Mass 2 (kg)"><Input value={m2} onChange={e=>setM2(e.target.value)} /></Field>
        <Field label="Distance (m)"><Input value={d} onChange={e=>setD(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Gravitational Force</CalcButton>
        {result !== null && <ResultBox label="Gravitational Force (N)" value={result.toExponential(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function WorkCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'work')!;
  const [force, setForce] = useState("10"); const [dist, setDist] = useState("5"); const [angle, setAngle] = useState("0");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const F=parseFloat(force), d=parseFloat(dist), a=parseFloat(angle)*Math.PI/180;
    if([F,d].some(isNaN)) return;
    setResult(F*d*Math.cos(a));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Force (N)"><Input type="number" value={force} onChange={e=>setForce(e.target.value)} /></Field>
          <Field label="Distance (m)"><Input type="number" value={dist} onChange={e=>setDist(e.target.value)} /></Field>
          <Field label="Angle (°)"><Input type="number" value={angle} onChange={e=>setAngle(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Work</CalcButton>
        {result !== null && <ResultBox label="Work (Joules)" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function PowerCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'power')!;
  const [work, setWork] = useState("500"); const [time, setTime] = useState("10");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const W=parseFloat(work), T=parseFloat(time);
    if([W,T].some(isNaN)||T===0) return;
    setResult(W/T);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Work Done (Joules)"><Input type="number" value={work} onChange={e=>setWork(e.target.value)} /></Field>
          <Field label="Time (seconds)"><Input type="number" value={time} onChange={e=>setTime(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Power</CalcButton>
        {result !== null && <ResultBox label="Power (Watts)" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function TorqueCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'torque')!;
  const [force, setForce] = useState("20"); const [arm, setArm] = useState("0.5"); const [angle, setAngle] = useState("90");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const F=parseFloat(force), r=parseFloat(arm), a=parseFloat(angle)*Math.PI/180;
    if([F,r].some(isNaN)) return;
    setResult(F*r*Math.sin(a));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Force (N)"><Input type="number" value={force} onChange={e=>setForce(e.target.value)} /></Field>
          <Field label="Moment Arm (m)"><Input type="number" value={arm} onChange={e=>setArm(e.target.value)} /></Field>
          <Field label="Angle (°)"><Input type="number" value={angle} onChange={e=>setAngle(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Torque</CalcButton>
        {result !== null && <ResultBox label="Torque (N·m)" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function MomentumCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'momentum')!;
  const [mass, setMass] = useState("5"); const [velocity, setVelocity] = useState("10");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const m=parseFloat(mass), v=parseFloat(velocity);
    if([m,v].some(isNaN)) return;
    setResult(m*v);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Mass (kg)"><Input type="number" value={mass} onChange={e=>setMass(e.target.value)} /></Field>
          <Field label="Velocity (m/s)"><Input type="number" value={velocity} onChange={e=>setVelocity(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Momentum</CalcButton>
        {result !== null && <ResultBox label="Momentum (kg·m/s)" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function FrequencyWavelengthCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'frequency-wavelength')!;
  const [freq, setFreq] = useState("440");
  const [result, setResult] = useState<{wavelength:number}|null>(null);
  const calc = () => {
    const f=parseFloat(freq);
    if(isNaN(f)||f===0) return;
    setResult({wavelength:343/f});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Frequency (Hz)"><Input type="number" value={freq} onChange={e=>setFreq(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Wavelength</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Wavelength (m)" value={result.wavelength.toFixed(6)} highlight />
          <ResultBox label="Speed of Sound" value="343 m/s" />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function PotentialEnergyCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'potential-energy')!;
  const [mass, setMass] = useState("10"); const [height, setHeight] = useState("5"); const [g, setG] = useState("9.81");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const m=parseFloat(mass), h=parseFloat(height), gv=parseFloat(g);
    if([m,h,gv].some(isNaN)) return;
    setResult(m*gv*h);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Mass (kg)"><Input type="number" value={mass} onChange={e=>setMass(e.target.value)} /></Field>
          <Field label="Height (m)"><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} /></Field>
          <Field label="Gravity (m/s²)"><Input type="number" value={g} onChange={e=>setG(e.target.value)} step="0.01" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Potential Energy</CalcButton>
        {result !== null && <ResultBox label="Potential Energy (Joules)" value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function TankVolumeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'tank-volume')!;
  const [shape, setShape] = useState("cylinder");
  const [d1, setD1] = useState("2"); const [d2, setD2] = useState("3"); const [d3, setD3] = useState("4");
  const [result, setResult] = useState<{liters:number;gallons:number}|null>(null);
  const calc = () => {
    const a=parseFloat(d1), b=parseFloat(d2), c=parseFloat(d3);
    let m3=0;
    if(shape==='cylinder') m3=Math.PI*(a/2)*(a/2)*b;
    else if(shape==='rectangular') m3=a*b*c;
    else if(shape==='sphere') m3=(4/3)*Math.PI*(a/2)**3;
    if(isNaN(m3)||m3<0) return;
    setResult({liters:m3*1000, gallons:m3*264.172});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Tank Shape">
          <Select value={shape} onChange={e=>setShape(e.target.value)}>
            <option value="cylinder">Cylinder</option>
            <option value="rectangular">Rectangular</option>
            <option value="sphere">Sphere</option>
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label={shape==='cylinder'?'Diameter (m)':shape==='sphere'?'Diameter (m)':'Length (m)'}><Input type="number" value={d1} onChange={e=>setD1(e.target.value)} /></Field>
          {shape!=='sphere' && <Field label={shape==='cylinder'?'Height (m)':'Width (m)'}><Input type="number" value={d2} onChange={e=>setD2(e.target.value)} /></Field>}
          {shape==='rectangular' && <Field label="Height (m)"><Input type="number" value={d3} onChange={e=>setD3(e.target.value)} /></Field>}
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Tank Volume</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Volume (Liters)" value={result.liters.toFixed(2)} highlight />
          <ResultBox label="Volume (US Gallons)" value={result.gallons.toFixed(2)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}
