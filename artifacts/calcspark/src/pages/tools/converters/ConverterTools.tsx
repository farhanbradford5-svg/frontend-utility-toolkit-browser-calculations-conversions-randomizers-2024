import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

interface UnitDef { label: string; factor: number; offset?: number }

function UnitConverter({ slug, units, title }: { slug: string; units: UnitDef[]; title: string }) {
  const tool = ALL_TOOLS.find(t => t.slug === slug)!;
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState(units[0].label);
  const [to, setTo] = useState(units[1].label);
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    const fromUnit = units.find(u => u.label === from)!;
    const toUnit = units.find(u => u.label === to)!;
    const base = (v - (fromUnit.offset || 0)) * fromUnit.factor;
    setResult(base / toUnit.factor + (toUnit.offset || 0));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3 items-end">
          <Field label="Value">
            <Input type="number" value={val} onChange={e => setVal(e.target.value)} />
          </Field>
          <Field label="From">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </Select>
          </Field>
          <Field label="To">
            <Select value={to} onChange={e => setTo(e.target.value)}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && (
          <ResultBox label={`${val} ${from} =`} value={result.toFixed(8).replace(/\.?0+$/, '')} unit={to} highlight />
        )}
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-foreground mb-3">Quick Reference</h3>
        <div className="grid grid-cols-2 gap-2">
          {units.slice(0, 6).map(u => {
            const fromBase = units.find(un => un.label === from);
            if (!fromBase) return null;
            const v = parseFloat(val) || 1;
            const base = (v - (fromBase.offset || 0)) * fromBase.factor;
            const converted = base / u.factor + (u.offset || 0);
            return (
              <div key={u.label} className="flex justify-between p-2.5 bg-secondary rounded-lg text-sm">
                <span className="text-muted-foreground">{u.label}</span>
                <span className="font-medium">{converted.toFixed(6).replace(/\.?0+$/, '')}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ToolPage>
  );
}

const lengthUnits: UnitDef[] = [
  { label: 'Meters (m)', factor: 1 },
  { label: 'Kilometers (km)', factor: 1000 },
  { label: 'Miles (mi)', factor: 1609.344 },
  { label: 'Yards (yd)', factor: 0.9144 },
  { label: 'Feet (ft)', factor: 0.3048 },
  { label: 'Inches (in)', factor: 0.0254 },
  { label: 'Centimeters (cm)', factor: 0.01 },
  { label: 'Millimeters (mm)', factor: 0.001 },
  { label: 'Nautical Miles (nm)', factor: 1852 },
  { label: 'Light Years (ly)', factor: 9.461e15 },
];

const speedUnits: UnitDef[] = [
  { label: 'Meters/second (m/s)', factor: 1 },
  { label: 'Kilometers/hour (km/h)', factor: 1/3.6 },
  { label: 'Miles/hour (mph)', factor: 0.44704 },
  { label: 'Feet/second (ft/s)', factor: 0.3048 },
  { label: 'Knots (kt)', factor: 0.514444 },
  { label: 'Mach (M)', factor: 343 },
];

const areaUnits: UnitDef[] = [
  { label: 'Square meters (m²)', factor: 1 },
  { label: 'Square kilometers (km²)', factor: 1e6 },
  { label: 'Square feet (ft²)', factor: 0.092903 },
  { label: 'Square yards (yd²)', factor: 0.836127 },
  { label: 'Square miles (mi²)', factor: 2.59e6 },
  { label: 'Acres (ac)', factor: 4046.86 },
  { label: 'Hectares (ha)', factor: 10000 },
  { label: 'Square inches (in²)', factor: 0.000645 },
];

const volumeUnits: UnitDef[] = [
  { label: 'Liters (L)', factor: 1 },
  { label: 'Milliliters (mL)', factor: 0.001 },
  { label: 'Cubic meters (m³)', factor: 1000 },
  { label: 'Cubic feet (ft³)', factor: 28.3168 },
  { label: 'Cubic inches (in³)', factor: 0.016387 },
  { label: 'US Gallons (gal)', factor: 3.78541 },
  { label: 'UK Gallons (gal UK)', factor: 4.54609 },
  { label: 'Fluid Ounces (fl oz)', factor: 0.029574 },
  { label: 'Cups (US)', factor: 0.23659 },
  { label: 'Pints (pt)', factor: 0.47318 },
  { label: 'Quarts (qt)', factor: 0.94635 },
];

const dataUnits: UnitDef[] = [
  { label: 'Bytes (B)', factor: 1 },
  { label: 'Kilobytes (KB)', factor: 1024 },
  { label: 'Megabytes (MB)', factor: 1024 ** 2 },
  { label: 'Gigabytes (GB)', factor: 1024 ** 3 },
  { label: 'Terabytes (TB)', factor: 1024 ** 4 },
  { label: 'Petabytes (PB)', factor: 1024 ** 5 },
  { label: 'Kilobits (Kb)', factor: 125 },
  { label: 'Megabits (Mb)', factor: 125000 },
  { label: 'Gigabits (Gb)', factor: 1.25e8 },
];

const energyUnits: UnitDef[] = [
  { label: 'Joules (J)', factor: 1 },
  { label: 'Kilojoules (kJ)', factor: 1000 },
  { label: 'Calories (cal)', factor: 4.184 },
  { label: 'Kilocalories (kcal)', factor: 4184 },
  { label: 'Watt-hours (Wh)', factor: 3600 },
  { label: 'Kilowatt-hours (kWh)', factor: 3.6e6 },
  { label: 'BTU', factor: 1055.06 },
  { label: 'Electron Volts (eV)', factor: 1.602e-19 },
];

const pressureUnits: UnitDef[] = [
  { label: 'Pascal (Pa)', factor: 1 },
  { label: 'Kilopascal (kPa)', factor: 1000 },
  { label: 'Bar', factor: 100000 },
  { label: 'PSI (lb/in²)', factor: 6894.76 },
  { label: 'Atmosphere (atm)', factor: 101325 },
  { label: 'mmHg (Torr)', factor: 133.322 },
];

// Temperature (special — not linear)
export function TemperatureConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'temperature')!;
  const [val, setVal] = useState("100");
  const [from, setFrom] = useState("Celsius");
  const [result, setResult] = useState<{ C: number; F: number; K: number } | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    let C: number;
    if (from === 'Celsius') C = v;
    else if (from === 'Fahrenheit') C = (v - 32) * 5 / 9;
    else C = v - 273.15;
    setResult({ C, F: C * 9 / 5 + 32, K: C + 273.15 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Temperature">
            <Input type="number" value={val} onChange={e => setVal(e.target.value)} />
          </Field>
          <Field label="From">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              <option>Celsius</option>
              <option>Fahrenheit</option>
              <option>Kelvin</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Temperature</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Celsius (°C)" value={result.C.toFixed(4)} highlight={from === 'Celsius'} />
            <ResultBox label="Fahrenheit (°F)" value={result.F.toFixed(4)} highlight={from === 'Fahrenheit'} />
            <ResultBox label="Kelvin (K)" value={result.K.toFixed(4)} highlight={from === 'Kelvin'} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export const LengthConverter = () => <UnitConverter slug="length" units={lengthUnits} title="Length" />;
export const SpeedConverter = () => <UnitConverter slug="speed-converter" units={speedUnits} title="Speed" />;
export const AreaConverterTool = () => <UnitConverter slug="area-converter" units={areaUnits} title="Area" />;
export const VolumeConverterTool = () => <UnitConverter slug="volume-converter" units={volumeUnits} title="Volume" />;
export const DataStorageConverter = () => <UnitConverter slug="data-storage" units={dataUnits} title="Data Storage" />;
export const EnergyConverter = () => <UnitConverter slug="energy-converter" units={energyUnits} title="Energy" />;
export const PressureConverterTool = () => <UnitConverter slug="pressure-converter" units={pressureUnits} title="Pressure" />;
export const MphToKmhConverter = () => <UnitConverter slug="mph-to-kmh" units={speedUnits} title="MPH to KM/H" />;
export const KmhToMphConverter = () => <UnitConverter slug="kmh-to-mph" units={speedUnits} title="KM/H to MPH" />;
export const KmToMilesConverter = () => <UnitConverter slug="km-to-miles" units={lengthUnits} title="km to miles" />;
export const MilesToKmConverter = () => <UnitConverter slug="miles-to-km" units={lengthUnits} title="Miles to km" />;
export const MetersToMilesConverter = () => <UnitConverter slug="meters-to-miles" units={lengthUnits} title="Meters to Miles" />;
export const AcresToHectaresConverter = () => <UnitConverter slug="acres-to-hectares" units={areaUnits} title="Acres to Hectares" />;
export const SqmToSqftConverter = () => <UnitConverter slug="sqm-to-sqft" units={areaUnits} title="m² to ft²" />;
export const SqftToSqmConverter = () => <UnitConverter slug="sqft-to-sqm" units={areaUnits} title="ft² to m²" />;

// Simple direction converters
function SimpleConverter({ slug, factor, from, to, fromLabel, toLabel }: { slug: string; factor: number; from: string; to: string; fromLabel?: string; toLabel?: string }) {
  const tool = ALL_TOOLS.find(t => t.slug === slug)!;
  const [val, setVal] = useState("1");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const v = parseFloat(val); if (!isNaN(v)) setResult(v * factor); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label={fromLabel || from}><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && <ResultBox label={toLabel || to} value={result.toFixed(6).replace(/\.?0+$/, '')} highlight />}
      </div>
    </ToolPage>
  );
}

export const InchesToCmConverter = () => <SimpleConverter slug="inches-to-cm" factor={2.54} from="Inches" to="Centimeters" />;
export const CmToInchesConverter = () => <SimpleConverter slug="cm-to-inches" factor={1/2.54} from="Centimeters" to="Inches" />;
export const FeetToCmConverter = () => <SimpleConverter slug="feet-to-cm" factor={30.48} from="Feet" to="Centimeters" />;
export const MetersToFeetConverter = () => <SimpleConverter slug="meters-to-feet" factor={3.28084} from="Meters" to="Feet" />;
export const MmToInchesConverter = () => <SimpleConverter slug="mm-to-inches" factor={0.0393701} from="Millimeters" to="Inches" />;

// Height Converter (special: feet+inches <-> cm)
export function HeightConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'height')!;
  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("9");
  const [cm, setCm] = useState("");
  const [mode, setMode] = useState("toCm");
  const [result, setResult] = useState<{ feet?: number; inches?: number; cm?: number } | null>(null);

  const convert = () => {
    if (mode === 'toCm') {
      const f = parseFloat(feet), i = parseFloat(inches);
      if (isNaN(f) || isNaN(i)) return;
      const total = (f * 12 + i) * 2.54;
      setResult({ cm: total });
    } else {
      const c = parseFloat(cm);
      if (isNaN(c)) return;
      const totalIn = c / 2.54;
      const f = Math.floor(totalIn / 12);
      const i = totalIn % 12;
      setResult({ feet: f, inches: i });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Convert">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="toCm">Feet & Inches → Centimeters</option>
            <option value="toFt">Centimeters → Feet & Inches</option>
          </Select>
        </Field>
        {mode === 'toCm' ? (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Feet"><Input type="number" value={feet} onChange={e => setFeet(e.target.value)} /></Field>
            <Field label="Inches"><Input type="number" value={inches} onChange={e => setInches(e.target.value)} step="0.5" /></Field>
          </div>
        ) : (
          <Field label="Centimeters"><Input type="number" value={cm} onChange={e => setCm(e.target.value)} /></Field>
        )}
        <CalcButton onClick={convert} className="w-full">Convert Height</CalcButton>
        {result && (
          <ResultGrid>
            {result.cm !== undefined && <ResultBox label="Centimeters" value={result.cm.toFixed(2)} unit="cm" highlight />}
            {result.feet !== undefined && <ResultBox label="Feet & Inches" value={`${result.feet}' ${result.inches!.toFixed(1)}"`} highlight />}
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

// Math converters
export function RomanNumeralsConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'roman-numerals')!;
  const [val, setVal] = useState("2024");
  const [mode, setMode] = useState("toRoman");
  const [result, setResult] = useState<string | null>(null);

  const toRoman = (num: number): string => {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let result = '';
    vals.forEach((v, i) => { while (num >= v) { result += syms[i]; num -= v; } });
    return result;
  };

  const fromRoman = (s: string): number => {
    const map: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const cur = map[s[i]], next = map[s[i+1]];
      result += (next && cur < next) ? -cur : cur;
    }
    return result;
  };

  const convert = () => {
    if (mode === 'toRoman') {
      const n = parseInt(val);
      if (isNaN(n) || n < 1 || n > 3999) return;
      setResult(toRoman(n));
    } else {
      setResult(fromRoman(val.toUpperCase()).toString());
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Convert">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="toRoman">Arabic → Roman</option>
            <option value="fromRoman">Roman → Arabic</option>
          </Select>
        </Field>
        <Field label={mode === 'toRoman' ? 'Arabic Number (1–3999)' : 'Roman Numeral'}>
          <Input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && <ResultBox label="Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function BinaryToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'binary-to-decimal')!;
  const [val, setVal] = useState("1010");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const n = parseInt(val, 2); if (!isNaN(n)) setResult(n); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Binary Number (e.g. 1010)"><Input type="text" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Decimal</CalcButton>
        {result !== null && <ResultBox label="Decimal" value={result.toString()} highlight />}
      </div>
    </ToolPage>
  );
}

export function DecimalToBinaryConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decimal-to-binary')!;
  const [val, setVal] = useState("42");
  const [result, setResult] = useState<string | null>(null);
  const convert = () => { const n = parseInt(val); if (!isNaN(n)) setResult(n.toString(2)); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Decimal Number"><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Binary</CalcButton>
        {result !== null && <ResultBox label="Binary" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function HexToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'hex-to-decimal')!;
  const [val, setVal] = useState("FF");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const n = parseInt(val, 16); if (!isNaN(n)) setResult(n); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Hexadecimal (e.g. FF)"><Input type="text" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Decimal</CalcButton>
        {result !== null && <ResultBox label="Decimal" value={result.toString()} highlight />}
      </div>
    </ToolPage>
  );
}

export function DecimalToHexConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decimal-to-hex')!;
  const [val, setVal] = useState("255");
  const [result, setResult] = useState<string | null>(null);
  const convert = () => { const n = parseInt(val); if (!isNaN(n)) setResult(n.toString(16).toUpperCase()); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Decimal Number"><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Hex</CalcButton>
        {result !== null && <ResultBox label="Hexadecimal" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function PercentToFractionConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'percent-to-fraction')!;
  const [val, setVal] = useState("75");
  const [result, setResult] = useState<{ n: number; d: number } | null>(null);
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const convert = () => {
    const p = parseFloat(val);
    if (isNaN(p)) return;
    const d = 100, n = p, g = gcd(n, d);
    setResult({ n: n / g, d: d / g });
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Percentage (%)"><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Fraction</CalcButton>
        {result && <ResultBox label="Fraction" value={`${result.n}/${result.d}`} highlight />}
      </div>
    </ToolPage>
  );
}

export function FractionToPercentConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'fraction-to-percent')!;
  const [n, setN] = useState("3");
  const [d, setD] = useState("4");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const nv = parseFloat(n), dv = parseFloat(d); if (!isNaN(nv) && !isNaN(dv) && dv !== 0) setResult((nv / dv) * 100); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Input type="number" value={n} onChange={e => setN(e.target.value)} className="text-center" />
          <span className="text-2xl font-bold text-muted-foreground">/</span>
          <Input type="number" value={d} onChange={e => setD(e.target.value)} className="text-center" />
        </div>
        <CalcButton onClick={convert} className="w-full">Convert to Percent</CalcButton>
        {result !== null && <ResultBox label="Percentage" value={`${result.toFixed(4)}%`} highlight />}
      </div>
    </ToolPage>
  );
}

export function DecimalToFractionConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decimal-to-fraction')!;
  const [val, setVal] = useState("0.75");
  const [result, setResult] = useState<{ n: number; d: number } | null>(null);
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    const decimals = (val.split('.')[1] || '').length;
    const d = Math.pow(10, decimals);
    const n = Math.round(v * d);
    const g = gcd(n, d);
    setResult({ n: n / g, d: d / g });
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Decimal Number"><Input type="number" value={val} onChange={e => setVal(e.target.value)} step="0.01" /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Fraction</CalcButton>
        {result && <ResultBox label="Fraction" value={`${result.n}/${result.d}`} highlight />}
      </div>
    </ToolPage>
  );
}

export function FractionToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'fraction-to-decimal')!;
  const [n, setN] = useState("7");
  const [d, setD] = useState("8");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const nv = parseFloat(n), dv = parseFloat(d); if (!isNaN(nv) && !isNaN(dv) && dv !== 0) setResult(nv / dv); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Input type="number" value={n} onChange={e => setN(e.target.value)} className="text-center" />
          <span className="text-2xl font-bold text-muted-foreground">/</span>
          <Input type="number" value={d} onChange={e => setD(e.target.value)} className="text-center" />
        </div>
        <CalcButton onClick={convert} className="w-full">Convert to Decimal</CalcButton>
        {result !== null && <ResultBox label="Decimal" value={result.toFixed(8)} highlight />}
      </div>
    </ToolPage>
  );
}

export function ShoeSizeConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'shoe-size')!;
  const [size, setSize] = useState("9");
  const [from, setFrom] = useState("US_M");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const convert = () => {
    const s = parseFloat(size);
    if (isNaN(s)) return;
    let uk: number, eu: number, us_m: number, us_f: number, cm: number;
    if (from === 'US_M') { us_m = s; uk = s - 0.5; eu = s + 33; us_f = s + 1.5; cm = (s + 3) * 0.846 * 2.54; }
    else if (from === 'US_F') { us_f = s; us_m = s - 1.5; uk = us_m - 0.5; eu = us_m + 33; cm = (us_m + 3) * 0.846 * 2.54; }
    else if (from === 'UK') { uk = s; us_m = s + 0.5; us_f = us_m + 1.5; eu = us_m + 33; cm = (us_m + 3) * 0.846 * 2.54; }
    else if (from === 'EU') { eu = s; us_m = s - 33; uk = us_m - 0.5; us_f = us_m + 1.5; cm = (us_m + 3) * 0.846 * 2.54; }
    else { cm = s; us_m = (s / 2.54 / 0.846) - 3; uk = us_m - 0.5; eu = us_m + 33; us_f = us_m + 1.5; }
    setResult({ 'US Men': us_m!.toFixed(1), 'US Women': us_f!.toFixed(1), UK: uk!.toFixed(1), EU: eu!.toFixed(0), 'cm': cm!.toFixed(1) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Shoe Size"><Input type="number" value={size} onChange={e => setSize(e.target.value)} step="0.5" /></Field>
          <Field label="From">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              <option value="US_M">US Men's</option>
              <option value="US_F">US Women's</option>
              <option value="UK">UK</option>
              <option value="EU">EU</option>
              <option value="cm">Centimeters</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Shoe Size</CalcButton>
        {result && (
          <div className="space-y-2 mt-2">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="text-sm font-bold text-foreground">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

// Time converters
export function TimeZoneConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'time-zone')!;
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState("12:00");
  const [from, setFrom] = useState("America/New_York");
  const [to, setTo] = useState("Europe/London");
  const [result, setResult] = useState<string | null>(null);

  const timezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo',
    'Asia/Shanghai', 'Asia/Dubai', 'Australia/Sydney', 'Pacific/Auckland',
    'UTC', 'America/Sao_Paulo', 'Asia/Kolkata', 'Asia/Singapore',
  ];

  const convert = () => {
    try {
      const dt = new Date(`${date}T${time}:00`);
      const result = new Intl.DateTimeFormat('en-US', {
        timeZone: to, year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      }).format(dt);
      setResult(result);
    } catch { setResult('Invalid date or timezone'); }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Date"><Input type="date" value={date} onChange={e => setDate(e.target.value)} /></Field>
          <Field label="Time"><Input type="time" value={time} onChange={e => setTime(e.target.value)} /></Field>
          <Field label="From Timezone">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </Select>
          </Field>
          <Field label="To Timezone">
            <Select value={to} onChange={e => setTo(e.target.value)}>
              {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Time Zone</CalcButton>
        {result && (
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="text-xs text-muted-foreground mb-1">Time in {to}</p>
            <p className="font-display font-bold text-lg text-primary">{result}</p>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function MilitaryTimeConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'military-time')!;
  const [val, setVal] = useState("14:30");
  const [mode, setMode] = useState("toStd");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    if (mode === 'toStd') {
      const [h, m] = val.split(':').map(Number);
      if (isNaN(h) || isNaN(m)) return;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const std = h > 12 ? h - 12 : h === 0 ? 12 : h;
      setResult(`${std}:${m.toString().padStart(2, '0')} ${ampm}`);
    } else {
      const parts = val.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!parts) return;
      let h = parseInt(parts[1]), m = parseInt(parts[2]);
      const ampm = parts[3].toUpperCase();
      if (ampm === 'PM' && h !== 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      setResult(`${h.toString().padStart(2, '0')}${m.toString().padStart(2, '0')}`);
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Convert">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="toStd">Military → Standard (e.g. 14:30 → 2:30 PM)</option>
            <option value="toMil">Standard → Military (e.g. 2:30 PM → 1430)</option>
          </Select>
        </Field>
        <Field label={mode === 'toStd' ? 'Military Time (HH:MM)' : 'Standard Time (e.g. 2:30 PM)'}>
          <Input type="text" value={val} onChange={e => setVal(e.target.value)} placeholder={mode === 'toStd' ? '14:30' : '2:30 PM'} />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result && <ResultBox label="Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function UnixTimestampConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'unix-timestamp')!;
  const [val, setVal] = useState(Date.now().toString().slice(0, 10));
  const [mode, setMode] = useState("toDate");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    if (mode === 'toDate') {
      const ts = parseInt(val) * (val.length <= 10 ? 1000 : 1);
      if (isNaN(ts)) return;
      setResult(new Date(ts).toString());
    } else {
      const d = new Date(val);
      if (isNaN(d.getTime())) return;
      setResult(Math.floor(d.getTime() / 1000).toString());
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Convert">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="toDate">Unix timestamp → Date</option>
            <option value="toUnix">Date → Unix timestamp</option>
          </Select>
        </Field>
        <Field label={mode === 'toDate' ? 'Unix Timestamp' : 'Date and Time'}>
          <Input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result && <ResultBox label="Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function MinutesToHoursConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'minutes-to-hours')!;
  const [mins, setMins] = useState("150");
  const [result, setResult] = useState<{ hours: number; minutes: number; decimal: number } | null>(null);
  const convert = () => {
    const m = parseFloat(mins);
    if (isNaN(m)) return;
    setResult({ hours: Math.floor(m / 60), minutes: Math.round(m % 60), decimal: m / 60 });
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Total Minutes"><Input type="number" value={mins} onChange={e => setMins(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Hours & Minutes" value={`${result.hours}h ${result.minutes}m`} highlight />
            <ResultBox label="Decimal Hours" value={result.decimal.toFixed(4)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SalaryConverterTool() {
  const tool = ALL_TOOLS.find(t => t.slug === 'salary-converter')!;
  const [amount, setAmount] = useState("75000");
  const [from, setFrom] = useState("annual");
  const [result, setResult] = useState<Record<string, number> | null>(null);

  const convert = () => {
    const a = parseFloat(amount);
    if (isNaN(a)) return;
    const annual = from === 'annual' ? a : from === 'monthly' ? a * 12 : from === 'weekly' ? a * 52 : from === 'daily' ? a * 260 : a * 2080;
    setResult({ Annual: annual, Monthly: annual / 12, Weekly: annual / 52, Daily: annual / 260, Hourly: annual / 2080 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Amount ($)"><Input type="number" value={amount} onChange={e => setAmount(e.target.value)} /></Field>
          <Field label="Per">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              <option value="annual">Year</option>
              <option value="monthly">Month</option>
              <option value="weekly">Week</option>
              <option value="daily">Day</option>
              <option value="hourly">Hour</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Salary</CalcButton>
        {result && (
          <div className="space-y-2 mt-2">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className={`flex justify-between items-center p-3 rounded-xl ${k === 'Annual' ? 'bg-primary/10 border border-primary/20' : 'bg-secondary'}`}>
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="text-sm font-bold text-foreground">${v.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

// Cooking converters
export function CupsToGramsConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cups-to-grams')!;
  const [cups, setCups] = useState("1");
  const [ingredient, setIngredient] = useState("flour");
  const [result, setResult] = useState<number | null>(null);

  const densities: Record<string, number> = {
    flour: 120, sugar: 200, powdered_sugar: 115, brown_sugar: 220,
    butter: 227, cocoa: 85, oats: 85, cornstarch: 125, rice: 185, salt: 273,
  };

  const convert = () => {
    const c = parseFloat(cups);
    if (isNaN(c)) return;
    setResult(c * densities[ingredient]);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Cups"><Input type="number" value={cups} onChange={e => setCups(e.target.value)} step="0.25" /></Field>
          <Field label="Ingredient">
            <Select value={ingredient} onChange={e => setIngredient(e.target.value)}>
              <option value="flour">All-purpose flour</option>
              <option value="sugar">White sugar</option>
              <option value="powdered_sugar">Powdered sugar</option>
              <option value="brown_sugar">Brown sugar</option>
              <option value="butter">Butter</option>
              <option value="cocoa">Cocoa powder</option>
              <option value="oats">Rolled oats</option>
              <option value="cornstarch">Cornstarch</option>
              <option value="rice">Rice (uncooked)</option>
              <option value="salt">Salt</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Cups to Grams</CalcButton>
        {result !== null && <ResultBox label="Grams" value={`${result.toFixed(0)} g`} highlight />}
      </div>
    </ToolPage>
  );
}

export function GramsToCupsConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'grams-to-cups')!;
  const [grams, setGrams] = useState("250");
  const [ingredient, setIngredient] = useState("flour");
  const [result, setResult] = useState<number | null>(null);

  const densities: Record<string, number> = { flour: 120, sugar: 200, butter: 227, oats: 85, rice: 185, cocoa: 85 };

  const convert = () => {
    const g = parseFloat(grams);
    if (isNaN(g)) return;
    setResult(g / densities[ingredient]);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Grams"><Input type="number" value={grams} onChange={e => setGrams(e.target.value)} /></Field>
          <Field label="Ingredient">
            <Select value={ingredient} onChange={e => setIngredient(e.target.value)}>
              <option value="flour">Flour</option>
              <option value="sugar">Sugar</option>
              <option value="butter">Butter</option>
              <option value="oats">Oats</option>
              <option value="rice">Rice</option>
              <option value="cocoa">Cocoa</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Grams to Cups</CalcButton>
        {result !== null && <ResultBox label="Cups" value={result.toFixed(3)} highlight />}
      </div>
    </ToolPage>
  );
}

function SimpleVolumeConverter({ slug, factor, from, to }: { slug: string; factor: number; from: string; to: string }) {
  const tool = ALL_TOOLS.find(t => t.slug === slug)!;
  const [val, setVal] = useState("1");
  const [result, setResult] = useState<number | null>(null);
  const convert = () => { const v = parseFloat(val); if (!isNaN(v)) setResult(v * factor); };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label={from}><Input type="number" value={val} onChange={e => setVal(e.target.value)} step="0.25" /></Field>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && <ResultBox label={to} value={result.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export const CupsToMlConverter = () => <SimpleVolumeConverter slug="cups-to-ml" factor={236.588} from="Cups" to="Milliliters (mL)" />;
export const CupsToTbspConverter = () => <SimpleVolumeConverter slug="cups-to-tbsp" factor={16} from="Cups" to="Tablespoons (tbsp)" />;
export const CupsToTspConverter = () => <SimpleVolumeConverter slug="cups-to-tsp" factor={48} from="Cups" to="Teaspoons (tsp)" />;

export function ButterConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'butter-converter')!;
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("sticks");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const toGrams: Record<string, number> = { sticks: 113, cups: 227, tbsp: 14.2, tsp: 4.7, grams: 1, oz: 28.35 };

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    const grams = v * toGrams[from];
    setResult({
      Sticks: (grams / 113).toFixed(2),
      Cups: (grams / 227).toFixed(3),
      Tablespoons: (grams / 14.2).toFixed(1),
      Teaspoons: (grams / 4.7).toFixed(1),
      Grams: grams.toFixed(0),
      Ounces: (grams / 28.35).toFixed(2),
    });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Amount"><Input type="number" value={val} onChange={e => setVal(e.target.value)} step="0.25" /></Field>
          <Field label="Unit">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              <option value="sticks">Sticks</option>
              <option value="cups">Cups</option>
              <option value="tbsp">Tablespoons</option>
              <option value="tsp">Teaspoons</option>
              <option value="grams">Grams</option>
              <option value="oz">Ounces</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Butter</CalcButton>
        {result && (
          <div className="space-y-2 mt-2">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="text-sm font-bold text-foreground">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RecipeConverterTool() {
  const tool = ALL_TOOLS.find(t => t.slug === 'recipe-converter')!;
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("cups");
  const [to, setTo] = useState("tablespoons");
  const [result, setResult] = useState<number | null>(null);

  const toMl: Record<string, number> = { 'cups': 236.588, 'tablespoons': 14.787, 'teaspoons': 4.929, 'fluid ounces': 29.574, 'pints': 473.176, 'quarts': 946.353, 'gallons': 3785.41, 'milliliters': 1, 'liters': 1000 };

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    setResult(v * toMl[from] / toMl[to]);
  };

  const units = Object.keys(toMl);

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3 items-end">
          <Field label="Amount"><Input type="number" value={val} onChange={e => setVal(e.target.value)} /></Field>
          <Field label="From">
            <Select value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </Select>
          </Field>
          <Field label="To">
            <Select value={to} onChange={e => setTo(e.target.value)}>
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && <ResultBox label={`${val} ${from} =`} value={result.toFixed(4)} unit={to} highlight />}
      </div>
    </ToolPage>
  );
}

export function GramsToMlConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'grams-to-ml')!;
  const [grams, setGrams] = useState("100");
  const [substance, setSubstance] = useState("water");
  const [result, setResult] = useState<number | null>(null);

  const densities: Record<string, number> = { water: 1, milk: 1.03, honey: 1.42, olive_oil: 0.91, flour: 0.53, sugar: 0.845 };

  const convert = () => {
    const g = parseFloat(grams);
    if (isNaN(g)) return;
    setResult(g / densities[substance]);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Grams (g)"><Input type="number" value={grams} onChange={e => setGrams(e.target.value)} /></Field>
          <Field label="Substance">
            <Select value={substance} onChange={e => setSubstance(e.target.value)}>
              <option value="water">Water</option>
              <option value="milk">Milk</option>
              <option value="honey">Honey</option>
              <option value="olive_oil">Olive Oil</option>
              <option value="flour">Flour</option>
              <option value="sugar">Sugar</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Grams to mL</CalcButton>
        {result !== null && <ResultBox label="Milliliters (mL)" value={result.toFixed(2)} highlight />}
      </div>
    </ToolPage>
  );
}

export function HexToBinaryConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'hex-to-binary')!;
  const [hex, setHex] = useState("FF");
  const [result, setResult] = useState("");

  const convert = () => {
    try {
      const decimal = parseInt(hex.replace(/^0x/i, ''), 16);
      if (isNaN(decimal)) { setResult("Invalid hex"); return; }
      setResult(decimal.toString(2));
    } catch { setResult("Invalid hex"); }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Hexadecimal Number">
          <Input value={hex} onChange={e => setHex(e.target.value)} placeholder="e.g. FF, 1A3B" />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert Hex to Binary</CalcButton>
        {result && <ResultBox label="Binary Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function BinaryToHexConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'binary-to-hex')!;
  const [binary, setBinary] = useState("11111111");
  const [result, setResult] = useState("");

  const convert = () => {
    if (!/^[01]+$/.test(binary.trim())) { setResult("Invalid binary (use 0s and 1s only)"); return; }
    const decimal = parseInt(binary.trim(), 2);
    setResult(decimal.toString(16).toUpperCase());
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Binary Number">
          <Input value={binary} onChange={e => setBinary(e.target.value)} placeholder="e.g. 11111111" />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert Binary to Hex</CalcButton>
        {result && <ResultBox label="Hexadecimal Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function PercentToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'percent-to-decimal')!;
  const [percent, setPercent] = useState("75");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const p = parseFloat(percent);
    if (isNaN(p)) return;
    setResult(p / 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Percentage (%)">
          <Input type="number" value={percent} onChange={e => setPercent(e.target.value)} />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert to Decimal</CalcButton>
        {result !== null && <ResultBox label="Decimal" value={result.toString()} highlight />}
      </div>
    </ToolPage>
  );
}

export function DecimalToPercentConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decimal-to-percent')!;
  const [decimal, setDecimal] = useState("0.75");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const d = parseFloat(decimal);
    if (isNaN(d)) return;
    setResult(d * 100);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Decimal Number">
          <Input type="number" value={decimal} onChange={e => setDecimal(e.target.value)} step="0.01" />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert to Percent</CalcButton>
        {result !== null && <ResultBox label="Percentage" value={`${result}%`} highlight />}
      </div>
    </ToolPage>
  );
}

export function OctalToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'octal-to-decimal')!;
  const [octal, setOctal] = useState("17");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    if (!/^[0-7]+$/.test(octal.trim())) { setResult("Invalid octal"); return; }
    setResult(parseInt(octal.trim(), 8).toString());
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Octal Number">
          <Input value={octal} onChange={e => setOctal(e.target.value)} placeholder="e.g. 17, 755" />
        </Field>
        <CalcButton onClick={convert} className="w-full">Convert Octal to Decimal</CalcButton>
        {result !== null && <ResultBox label="Decimal" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function MilesConverter() {
  return <UnitConverter slug="miles-converter" title="Miles Converter" units={[
    {label:'Miles',factor:1609.344},
    {label:'Kilometers',factor:1000},
    {label:'Meters',factor:1},
    {label:'Feet',factor:0.3048},
    {label:'Yards',factor:0.9144},
    {label:'Nautical Miles',factor:1852},
    {label:'Centimeters',factor:0.01},
    {label:'Inches',factor:0.0254},
  ]} />;
}

export function FeetToMetersConverter() {
  return <UnitConverter slug="feet-to-meters" title="Feet to Meters" units={[
    {label:'Feet',factor:0.3048},
    {label:'Meters',factor:1},
    {label:'Inches',factor:0.0254},
    {label:'Centimeters',factor:0.01},
    {label:'Yards',factor:0.9144},
    {label:'Miles',factor:1609.344},
    {label:'Kilometers',factor:1000},
    {label:'Millimeters',factor:0.001},
  ]} />;
}

export function LiterToGallonConverter() {
  return <UnitConverter slug="liter-to-gallon" title="Liters to Gallons" units={[
    {label:'Liters',factor:1},
    {label:'US Gallons',factor:3.78541},
    {label:'UK Gallons',factor:4.54609},
    {label:'Milliliters',factor:0.001},
    {label:'Cubic Centimeters',factor:0.001},
    {label:'US Fluid Ounces',factor:0.0295735},
    {label:'US Cups',factor:0.236588},
    {label:'US Pints',factor:0.473176},
    {label:'US Quarts',factor:0.946353},
    {label:'Cubic Inches',factor:0.0163871},
    {label:'Cubic Feet',factor:28.3168},
    {label:'Cubic Meters',factor:1000},
  ]} />;
}

export function GallonsConverter() {
  return <UnitConverter slug="gallons-converter" title="Gallons Converter" units={[
    {label:'US Gallons',factor:3.78541},
    {label:'UK Gallons',factor:4.54609},
    {label:'Liters',factor:1},
    {label:'Milliliters',factor:0.001},
    {label:'US Pints',factor:0.473176},
    {label:'US Quarts',factor:0.946353},
    {label:'US Fluid Ounces',factor:0.0295735},
  ]} />;
}

export function CubicMetersConverter() {
  return <UnitConverter slug="cubic-meters-converter" title="Cubic Meters Converter" units={[
    {label:'Cubic Meters',factor:1},
    {label:'Liters',factor:0.001},
    {label:'US Gallons',factor:0.00378541},
    {label:'Cubic Feet',factor:0.0283168},
    {label:'Cubic Inches',factor:0.0000163871},
    {label:'Cubic Centimeters',factor:0.000001},
    {label:'Cubic Yards',factor:0.764555},
    {label:'Milliliters',factor:0.000001},
  ]} />;
}

export function MPHConverter() {
  return <UnitConverter slug="mph-converter" title="MPH Converter" units={[
    {label:'Miles/Hour (mph)',factor:0.44704},
    {label:'Km/Hour (km/h)',factor:1/3.6},
    {label:'Meters/Second (m/s)',factor:1},
    {label:'Knots',factor:0.514444},
    {label:'Feet/Second (ft/s)',factor:0.3048},
    {label:'Mach',factor:343},
  ]} />;
}

export function KnotsConverter() {
  return <UnitConverter slug="knots-converter" title="Knots Converter" units={[
    {label:'Knots',factor:0.514444},
    {label:'Miles/Hour (mph)',factor:0.44704},
    {label:'Km/Hour (km/h)',factor:1/3.6},
    {label:'Meters/Second (m/s)',factor:1},
    {label:'Feet/Second (ft/s)',factor:0.3048},
  ]} />;
}

export function AcreToSqFtConverter() {
  return <UnitConverter slug="acre-to-sqft" title="Acres to Square Feet" units={[
    {label:'Acres',factor:4046.86},
    {label:'Square Feet',factor:0.092903},
    {label:'Square Meters',factor:1},
    {label:'Square Yards',factor:0.836127},
    {label:'Square Kilometers',factor:1000000},
    {label:'Square Miles',factor:2589988.1},
    {label:'Hectares',factor:10000},
    {label:'Square Inches',factor:0.00064516},
    {label:'Square Centimeters',factor:0.0001},
  ]} />;
}

export function HectaresConverter() {
  return <UnitConverter slug="hectares-converter" title="Hectares Converter" units={[
    {label:'Hectares',factor:10000},
    {label:'Acres',factor:4046.86},
    {label:'Square Meters',factor:1},
    {label:'Square Kilometers',factor:1000000},
    {label:'Square Miles',factor:2589988.1},
    {label:'Square Feet',factor:0.092903},
    {label:'Square Yards',factor:0.836127},
  ]} />;
}

export function BitsByteConverter() {
  return <UnitConverter slug="bits-bytes-converter" title="Bits & Bytes Converter" units={[
    {label:'Bits',factor:1},
    {label:'Bytes',factor:8},
    {label:'Kilobytes (KB)',factor:8*1024},
    {label:'Megabytes (MB)',factor:8*1024*1024},
    {label:'Gigabytes (GB)',factor:8*1024*1024*1024},
    {label:'Terabytes (TB)',factor:8*1024*1024*1024*1024},
    {label:'Kilobits',factor:1024},
    {label:'Megabits',factor:1024*1024},
    {label:'Gigabits',factor:1024*1024*1024},
  ]} />;
}

export function SecondToMinuteConverter() {
  return <UnitConverter slug="seconds-to-minutes" title="Seconds to Minutes" units={[
    {label:'Seconds',factor:1},
    {label:'Minutes',factor:60},
    {label:'Hours',factor:3600},
    {label:'Days',factor:86400},
    {label:'Weeks',factor:604800},
    {label:'Milliseconds',factor:0.001},
    {label:'Microseconds',factor:0.000001},
  ]} />;
}

export function HoursToMinutesConverter() {
  return <UnitConverter slug="hours-to-minutes" title="Hours to Minutes" units={[
    {label:'Hours',factor:3600},
    {label:'Minutes',factor:60},
    {label:'Seconds',factor:1},
    {label:'Days',factor:86400},
    {label:'Weeks',factor:604800},
    {label:'Milliseconds',factor:0.001},
  ]} />;
}

export function DecimalToTimeConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decimal-to-time')!;
  const [decimal, setDecimal] = useState("1.5");
  const [result, setResult] = useState<{h:number;m:number;s:number}|null>(null);
  const convert = () => {
    const d=parseFloat(decimal);
    if(isNaN(d)) return;
    const total=d*3600;
    const h=Math.floor(total/3600), m=Math.floor((total%3600)/60), s=Math.round(total%60);
    setResult({h,m,s});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Decimal Hours"><Input type="number" value={decimal} onChange={e=>setDecimal(e.target.value)} step="0.01" /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Time</CalcButton>
        {result && <ResultBox label="Time (HH:MM:SS)" value={`${result.h}:${String(result.m).padStart(2,'0')}:${String(result.s).padStart(2,'0')}`} highlight />}
      </div>
    </ToolPage>
  );
}

export function TimeToDecimalConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'time-to-decimal')!;
  const [h, setH] = useState("1"); const [m, setM] = useState("30"); const [s, setS] = useState("0");
  const [result, setResult] = useState<number|null>(null);
  const convert = () => {
    const hv=parseFloat(h)||0, mv=parseFloat(m)||0, sv=parseFloat(s)||0;
    setResult(hv + mv/60 + sv/3600);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Hours"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
          <Field label="Minutes"><Input type="number" value={m} onChange={e=>setM(e.target.value)} /></Field>
          <Field label="Seconds"><Input type="number" value={s} onChange={e=>setS(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert to Decimal Hours</CalcButton>
        {result !== null && <ResultBox label="Decimal Hours" value={result.toFixed(6)} highlight />}
      </div>
    </ToolPage>
  );
}

export function MlToCupsConverter() {
  return <UnitConverter slug="ml-to-cups" title="mL to Cups" units={[
    {label:'Milliliters (mL)',factor:0.001},
    {label:'US Cups',factor:0.236588},
    {label:'US Fluid Ounces',factor:0.0295735},
    {label:'US Tablespoons',factor:0.0147868},
    {label:'US Teaspoons',factor:0.00492892},
    {label:'Liters',factor:1},
    {label:'US Pints',factor:0.473176},
    {label:'UK Fluid Ounces',factor:0.0284131},
  ]} />;
}

export function Time24To12Converter() {
  const tool = ALL_TOOLS.find(t => t.slug === '24h-to-12h')!;
  const [time24, setTime24] = useState("14:30");
  const [result, setResult] = useState<string|null>(null);
  const convert = () => {
    const [hStr,mStr]=time24.split(':');
    const h=parseInt(hStr), m=parseInt(mStr);
    if(isNaN(h)||isNaN(m)||h<0||h>23||m<0||m>59) { setResult("Invalid time"); return; }
    const ampm=h>=12?'PM':'AM';
    const h12=h%12||12;
    setResult(`${h12}:${String(m).padStart(2,'0')} ${ampm}`);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="24-Hour Time (HH:MM)"><Input type="time" value={time24} onChange={e=>setTime24(e.target.value)} /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to 12-Hour</CalcButton>
        {result !== null && <ResultBox label="12-Hour Time" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

type UnitCategory = "Length" | "Weight" | "Volume" | "Area" | "Temperature" | "Speed" | "Data";

interface UCUnit { label: string; factor: number; offset?: number }
const UC_UNITS: Record<UnitCategory, UCUnit[]> = {
  Length: [
    { label: "Millimeter (mm)", factor: 0.001 },
    { label: "Centimeter (cm)", factor: 0.01 },
    { label: "Meter (m)", factor: 1 },
    { label: "Kilometer (km)", factor: 1000 },
    { label: "Inch (in)", factor: 0.0254 },
    { label: "Foot (ft)", factor: 0.3048 },
    { label: "Yard (yd)", factor: 0.9144 },
    { label: "Mile (mi)", factor: 1609.344 },
    { label: "Nautical Mile (nmi)", factor: 1852 },
  ],
  Weight: [
    { label: "Milligram (mg)", factor: 0.000001 },
    { label: "Gram (g)", factor: 0.001 },
    { label: "Kilogram (kg)", factor: 1 },
    { label: "Tonne (t)", factor: 1000 },
    { label: "Ounce (oz)", factor: 0.0283495 },
    { label: "Pound (lb)", factor: 0.453592 },
    { label: "Stone (st)", factor: 6.35029 },
    { label: "US Ton (ton)", factor: 907.185 },
  ],
  Volume: [
    { label: "Milliliter (mL)", factor: 0.001 },
    { label: "Liter (L)", factor: 1 },
    { label: "Cubic Meter (m³)", factor: 1000 },
    { label: "Teaspoon (tsp US)", factor: 0.00492892 },
    { label: "Tablespoon (tbsp US)", factor: 0.0147868 },
    { label: "Fl Oz (US)", factor: 0.0295735 },
    { label: "Cup (US)", factor: 0.236588 },
    { label: "Pint (US)", factor: 0.473176 },
    { label: "Quart (US)", factor: 0.946353 },
    { label: "Gallon (US)", factor: 3.78541 },
    { label: "Gallon (UK)", factor: 4.54609 },
  ],
  Area: [
    { label: "Square mm (mm²)", factor: 0.000001 },
    { label: "Square cm (cm²)", factor: 0.0001 },
    { label: "Square m (m²)", factor: 1 },
    { label: "Square km (km²)", factor: 1000000 },
    { label: "Square in (in²)", factor: 0.00064516 },
    { label: "Square ft (ft²)", factor: 0.092903 },
    { label: "Square yd (yd²)", factor: 0.836127 },
    { label: "Acre", factor: 4046.86 },
    { label: "Hectare (ha)", factor: 10000 },
    { label: "Square Mile (mi²)", factor: 2589988.11 },
  ],
  Temperature: [
    { label: "Celsius (°C)", factor: 1, offset: 0 },
    { label: "Fahrenheit (°F)", factor: 5/9, offset: -32 },
    { label: "Kelvin (K)", factor: 1, offset: -273.15 },
  ],
  Speed: [
    { label: "m/s", factor: 1 },
    { label: "km/h", factor: 1/3.6 },
    { label: "mph", factor: 0.44704 },
    { label: "ft/s", factor: 0.3048 },
    { label: "Knot (kn)", factor: 0.514444 },
    { label: "Mach (sea level)", factor: 340.29 },
  ],
  Data: [
    { label: "Bit (b)", factor: 1/8 },
    { label: "Byte (B)", factor: 1 },
    { label: "Kilobyte (KB)", factor: 1000 },
    { label: "Kibibyte (KiB)", factor: 1024 },
    { label: "Megabyte (MB)", factor: 1000000 },
    { label: "Mebibyte (MiB)", factor: 1048576 },
    { label: "Gigabyte (GB)", factor: 1e9 },
    { label: "Gibibyte (GiB)", factor: 1.07374e9 },
    { label: "Terabyte (TB)", factor: 1e12 },
    { label: "Tebibyte (TiB)", factor: 1.09951e12 },
    { label: "Petabyte (PB)", factor: 1e15 },
  ],
};

function ucToBase(v: number, unit: UCUnit): number {
  if (unit.offset !== undefined) return (v + unit.offset) * unit.factor;
  return v * unit.factor;
}
function ucFromBase(base: number, unit: UCUnit): number {
  if (unit.offset !== undefined) return base / unit.factor - unit.offset;
  return base / unit.factor;
}

export function UniversalUnitConverterTool() {
  const tool = ALL_TOOLS.find(t => t.slug === 'universal-unit-converter')!;
  const [category, setCategory] = useState<UnitCategory>("Length");
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("Meter (m)");
  const [to, setTo] = useState("Foot (ft)");
  const [result, setResult] = useState<number | null>(null);
  const [formula, setFormula] = useState("");

  const units = UC_UNITS[category];

  const handleCategory = (cat: UnitCategory) => {
    setCategory(cat);
    setFrom(UC_UNITS[cat][0].label);
    setTo(UC_UNITS[cat][1].label);
    setResult(null);
    setFormula("");
  };

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    const fromUnit = units.find(u => u.label === from)!;
    const toUnit = units.find(u => u.label === to)!;
    const base = ucToBase(v, fromUnit);
    const res = ucFromBase(base, toUnit);
    setResult(res);
    const fmt = (n: number) => n.toPrecision(7).replace(/\.?0+$/, "");
    setFormula(`${v} ${from} = ${fmt(res)} ${to}`);
  };

  const cats = Object.keys(UC_UNITS) as UnitCategory[];
  const fmt = (n: number) => {
    if (Math.abs(n) >= 0.0001 && Math.abs(n) < 1e10) return n.toPrecision(7).replace(/\.?0+$/, "");
    return n.toExponential(4);
  };

  return (
    <ToolPage tool={tool} relatedSlugs={['temperature', 'data-storage', 'speed-converter', 'length-converter', 'weight-converter']}>
      <div className="space-y-4">
        <Field label="Unit Category">
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => handleCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  category === c
                    ? "lime-gradient text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Value to Convert">
          <Input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="From">
            <Select value={from} onChange={e => { setFrom(e.target.value); setResult(null); }}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </Select>
          </Field>
          <Field label="To">
            <Select value={to} onChange={e => { setTo(e.target.value); setResult(null); }}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert</CalcButton>
        {result !== null && (
          <div className="space-y-3 mt-2">
            <ResultBox label="Result" value={fmt(result)} unit={to.replace(/\s*\(.*\)/, "")} highlight />
            {formula && (
              <div className="bg-secondary rounded-xl p-3 text-sm text-center font-mono text-foreground">
                {formula}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-8 text-sm text-muted-foreground space-y-2">
        <h3 className="font-semibold text-foreground">How conversions work</h3>
        <p>All values are first converted to a common base unit (meter, kilogram, liter, etc.), then converted to the target unit. Temperature uses offset conversion: °C = (°F − 32) × 5/9 and K = °C + 273.15.</p>
      </div>
    </ToolPage>
  );
}

export function KgToLbsConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'kg-to-lbs')!;
  const [kg, setKg] = useState("70");
  const [result, setResult] = useState<{ lbs: number; oz: number; stones: number; grams: number } | null>(null);

  const calc = () => {
    const k = parseFloat(kg);
    if (isNaN(k)) return;
    const lbs = k * 2.20462262185;
    setResult({ lbs, oz: lbs * 16, stones: lbs / 14, grams: k * 1000 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Weight in Kilograms (kg)">
          <Input type="number" value={kg} onChange={e => setKg(e.target.value)} step="0.001" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Convert kg to lbs</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Pounds (lbs)" value={result.lbs.toFixed(4)} highlight />
            <ResultBox label="Ounces (oz)" value={result.oz.toFixed(2)} />
            <ResultBox label="Stones (st)" value={result.stones.toFixed(4)} />
            <ResultBox label="Grams (g)" value={result.grams.toFixed(1)} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">1 kilogram = 2.20462 pounds. 1 pound = 0.45359 kg. Commonly used for body weight, food packaging, and shipping.</div>
    </ToolPage>
  );
}

export function LbsToKgConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'lbs-to-kg')!;
  const [lbs, setLbs] = useState("154");
  const [result, setResult] = useState<{ kg: number; grams: number; oz: number; stones: number } | null>(null);

  const calc = () => {
    const l = parseFloat(lbs);
    if (isNaN(l)) return;
    const kg = l * 0.45359237;
    setResult({ kg, grams: kg * 1000, oz: l * 16, stones: l / 14 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Weight in Pounds (lbs)">
          <Input type="number" value={lbs} onChange={e => setLbs(e.target.value)} step="0.01" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Convert lbs to kg</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Kilograms (kg)" value={result.kg.toFixed(4)} highlight />
            <ResultBox label="Grams (g)" value={result.grams.toFixed(2)} />
            <ResultBox label="Stones (st)" value={result.stones.toFixed(4)} />
            <ResultBox label="Ounces (oz)" value={result.oz.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">1 pound = 0.453592 kilograms. 1 kg = 2.20462 lbs. The pound is the primary weight unit in the US customary system.</div>
    </ToolPage>
  );
}

export function GallonToLiterConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'gallon-to-liter')!;
  const [value, setValue] = useState("1");
  const [direction, setDirection] = useState("gallon-to-liter");
  const [result, setResult] = useState<{ primary: number; usGallons?: number; ukGallons?: number; liters?: number; ml?: number } | null>(null);

  const calc = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    if (direction === 'gallon-to-liter') {
      setResult({ primary: v * 3.78541, usGallons: v, liters: v * 3.78541, ml: v * 3785.41 });
    } else {
      const usGal = v / 3.78541, ukGal = v / 4.54609;
      setResult({ primary: usGal, liters: v, usGallons: usGal, ukGallons: ukGal, ml: v * 1000 });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Direction">
          <Select value={direction} onChange={e => setDirection(e.target.value)}>
            <option value="gallon-to-liter">US Gallons to Liters</option>
            <option value="liter-to-gallon">Liters to US Gallons</option>
          </Select>
        </Field>
        <Field label={direction === 'gallon-to-liter' ? 'US Gallons' : 'Liters'}>
          <Input type="number" value={value} onChange={e => setValue(e.target.value)} step="0.001" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Convert</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label={direction === 'gallon-to-liter' ? 'Liters (L)' : 'US Gallons'} value={result.primary.toFixed(4)} highlight />
            <ResultBox label="Milliliters (mL)" value={result.ml!.toFixed(1)} />
            {result.ukGallons !== undefined && <ResultBox label="UK Gallons" value={result.ukGallons.toFixed(4)} />}
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">1 US gallon = 3.78541 liters. 1 UK (imperial) gallon = 4.54609 liters. US and UK gallons are different units.</div>
    </ToolPage>
  );
}
