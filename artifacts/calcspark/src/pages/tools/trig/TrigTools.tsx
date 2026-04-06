import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

function toRad(deg: number) { return deg * Math.PI / 180; }
function toDeg(rad: number) { return rad * 180 / Math.PI; }

export function TrigCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'trig')!;
  const [angle, setAngle] = useState("45");
  const [unit, setUnit] = useState("deg");
  const [result, setResult] = useState<Record<string, number> | null>(null);

  const calculate = () => {
    const a = parseFloat(angle);
    if (isNaN(a)) return;
    const rad = unit === 'deg' ? toRad(a) : a;
    setResult({ sin: Math.sin(rad), cos: Math.cos(rad), tan: Math.tan(rad), csc: 1 / Math.sin(rad), sec: 1 / Math.cos(rad), cot: 1 / Math.tan(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Angle"><Input type="number" value={angle} onChange={e => setAngle(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="deg">Degrees</option>
              <option value="rad">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate All Trig Functions</CalcButton>
        {result && (
          <ResultGrid>
            {[['sin', 'sin(θ)'], ['cos', 'cos(θ)'], ['tan', 'tan(θ)'], ['csc', 'csc(θ)'], ['sec', 'sec(θ)'], ['cot', 'cot(θ)']].map(([k, label]) => (
              <ResultBox key={k} label={label} value={isFinite(result[k]) ? result[k].toFixed(8) : '∞'} highlight={k === 'sin'} />
            ))}
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SineCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'sine')!;
  const [angle, setAngle] = useState("30");
  const [unit, setUnit] = useState("deg");
  const [result, setResult] = useState<{ sin: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(angle);
    if (isNaN(a)) return;
    const rad = unit === 'deg' ? toRad(a) : a;
    setResult({ sin: Math.sin(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Angle"><Input type="number" value={angle} onChange={e => setAngle(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="deg">Degrees</option>
              <option value="rad">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate sin(θ)</CalcButton>
        {result && <ResultBox label="sin(θ)" value={result.sin.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}

export function CosineCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cosine')!;
  const [angle, setAngle] = useState("60");
  const [unit, setUnit] = useState("deg");
  const [result, setResult] = useState<{ cos: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(angle);
    if (isNaN(a)) return;
    const rad = unit === 'deg' ? toRad(a) : a;
    setResult({ cos: Math.cos(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Angle"><Input type="number" value={angle} onChange={e => setAngle(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="deg">Degrees</option>
              <option value="rad">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate cos(θ)</CalcButton>
        {result && <ResultBox label="cos(θ)" value={result.cos.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}

export function TangentCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'tangent')!;
  const [angle, setAngle] = useState("45");
  const [unit, setUnit] = useState("deg");
  const [result, setResult] = useState<{ tan: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(angle);
    if (isNaN(a)) return;
    const rad = unit === 'deg' ? toRad(a) : a;
    setResult({ tan: Math.tan(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Angle"><Input type="number" value={angle} onChange={e => setAngle(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="deg">Degrees</option>
              <option value="rad">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate tan(θ)</CalcButton>
        {result && <ResultBox label="tan(θ)" value={isFinite(result.tan) ? result.tan.toFixed(8) : '∞'} highlight />}
      </div>
    </ToolPage>
  );
}

export function ArcsinCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'arcsin')!;
  const [val, setVal] = useState("0.5");
  const [result, setResult] = useState<{ deg: number; rad: number } | null>(null);

  const calculate = () => {
    const v = parseFloat(val);
    if (isNaN(v) || v < -1 || v > 1) return;
    const rad = Math.asin(v);
    setResult({ rad, deg: toDeg(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Value (between −1 and 1)"><Input type="number" value={val} onChange={e => setVal(e.target.value)} min="-1" max="1" step="0.01" /></Field>
        <CalcButton onClick={calculate} className="w-full">Calculate arcsin</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="arcsin (degrees)" value={`${result.deg.toFixed(6)}°`} highlight />
            <ResultBox label="arcsin (radians)" value={result.rad.toFixed(8)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ArccosCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'arccos')!;
  const [val, setVal] = useState("0.5");
  const [result, setResult] = useState<{ deg: number; rad: number } | null>(null);

  const calculate = () => {
    const v = parseFloat(val);
    if (isNaN(v) || v < -1 || v > 1) return;
    const rad = Math.acos(v);
    setResult({ rad, deg: toDeg(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Value (between −1 and 1)"><Input type="number" value={val} onChange={e => setVal(e.target.value)} min="-1" max="1" step="0.01" /></Field>
        <CalcButton onClick={calculate} className="w-full">Calculate arccos</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="arccos (degrees)" value={`${result.deg.toFixed(6)}°`} highlight />
            <ResultBox label="arccos (radians)" value={result.rad.toFixed(8)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ArctanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'arctan')!;
  const [val, setVal] = useState("1");
  const [result, setResult] = useState<{ deg: number; rad: number } | null>(null);

  const calculate = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    const rad = Math.atan(v);
    setResult({ rad, deg: toDeg(rad) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Value"><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={calculate} className="w-full">Calculate arctan</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="arctan (degrees)" value={`${result.deg.toFixed(6)}°`} highlight />
            <ResultBox label="arctan (radians)" value={result.rad.toFixed(8)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CotangentCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cotangent')!;
  const [angle, setAngle] = useState("45"); const [unit, setUnit] = useState("degrees");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const a=parseFloat(angle), rad=unit==='degrees'?a*Math.PI/180:a;
    if(isNaN(a)||Math.abs(Math.sin(rad))<1e-10) return;
    setResult(Math.cos(rad)/Math.sin(rad));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Angle"><Input type="number" value={angle} onChange={e=>setAngle(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={unit} onChange={e=>setUnit(e.target.value)}>
              <option value="degrees">Degrees</option>
              <option value="radians">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Cotangent</CalcButton>
        {result !== null && <ResultBox label="cot(angle)" value={result.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}

export function ArccotCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'arccot')!;
  const [val, setVal] = useState("1"); const [unit, setUnit] = useState("degrees");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const v=parseFloat(val);
    if(isNaN(v)) return;
    const rad=Math.PI/2-Math.atan(v);
    setResult(unit==='degrees'?rad*180/Math.PI:rad);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Value"><Input type="number" value={val} onChange={e=>setVal(e.target.value)} /></Field>
          <Field label="Output Unit">
            <Select value={unit} onChange={e=>setUnit(e.target.value)}>
              <option value="degrees">Degrees</option>
              <option value="radians">Radians</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Arccot</CalcButton>
        {result !== null && <ResultBox label={`arccot(x) in ${unit}`} value={result.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}
