import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function PaintCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'paint')!;
  const [length, setLength] = useState("15");
  const [width, setWidth] = useState("12");
  const [height, setHeight] = useState("9");
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("2");
  const [coats, setCoats] = useState("2");
  const [result, setResult] = useState<{ gallons: number; sqft: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length), w = parseFloat(width), h = parseFloat(height);
    const d = parseFloat(doors) || 0, win = parseFloat(windows) || 0, c = parseFloat(coats) || 1;
    if ([l, w, h].some(isNaN)) return;
    const wallArea = 2 * (l + w) * h - d * 21 - win * 15;
    const sqft = wallArea * c;
    const gallons = sqft / 350;
    setResult({ gallons, sqft });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Room Length (ft)"><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
          <Field label="Room Width (ft)"><Input type="number" value={width} onChange={e => setWidth(e.target.value)} /></Field>
          <Field label="Ceiling Height (ft)"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Number of Doors"><Input type="number" value={doors} onChange={e => setDoors(e.target.value)} /></Field>
          <Field label="Number of Windows"><Input type="number" value={windows} onChange={e => setWindows(e.target.value)} /></Field>
          <Field label="Coats of Paint"><Input type="number" value={coats} onChange={e => setCoats(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Paint Needed</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Gallons Needed" value={result.gallons.toFixed(2)} highlight />
            <ResultBox label="Total Square Feet" value={result.sqft.toFixed(0)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ConcreteCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'concrete')!;
  const [shape, setShape] = useState("slab");
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [thickness, setThickness] = useState("4");
  const [result, setResult] = useState<{ cubicYards: number; cubicFeet: number; bags60: number; bags80: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length), w = parseFloat(width), t = parseFloat(thickness) / 12;
    if ([l, w, t].some(isNaN)) return;
    const cubicFeet = l * w * t;
    const cubicYards = cubicFeet / 27;
    setResult({ cubicYards, cubicFeet, bags60: Math.ceil(cubicFeet / 0.45), bags80: Math.ceil(cubicFeet / 0.60) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Length (ft)"><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
          <Field label="Width (ft)"><Input type="number" value={width} onChange={e => setWidth(e.target.value)} /></Field>
          <Field label="Thickness (in)"><Input type="number" value={thickness} onChange={e => setThickness(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Concrete</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Cubic Yards" value={result.cubicYards.toFixed(2)} highlight />
            <ResultBox label="Cubic Feet" value={result.cubicFeet.toFixed(2)} />
            <ResultBox label="60-lb Bags" value={result.bags60.toString()} />
            <ResultBox label="80-lb Bags" value={result.bags80.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function TileCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'tile')!;
  const [roomL, setRoomL] = useState("12");
  const [roomW, setRoomW] = useState("10");
  const [tileL, setTileL] = useState("12");
  const [tileW, setTileW] = useState("12");
  const [waste, setWaste] = useState("10");
  const [result, setResult] = useState<{ tiles: number; sqft: number } | null>(null);

  const calculate = () => {
    const rl = parseFloat(roomL), rw = parseFloat(roomW), tl = parseFloat(tileL) / 12, tw = parseFloat(tileW) / 12, w = parseFloat(waste) / 100 + 1;
    if ([rl, rw, tl, tw].some(isNaN)) return;
    const sqft = rl * rw;
    const tileArea = tl * tw;
    setResult({ tiles: Math.ceil((sqft / tileArea) * w), sqft });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Room Length (ft)"><Input type="number" value={roomL} onChange={e => setRoomL(e.target.value)} /></Field>
          <Field label="Room Width (ft)"><Input type="number" value={roomW} onChange={e => setRoomW(e.target.value)} /></Field>
          <Field label="Tile Length (in)"><Input type="number" value={tileL} onChange={e => setTileL(e.target.value)} /></Field>
          <Field label="Tile Width (in)"><Input type="number" value={tileW} onChange={e => setTileW(e.target.value)} /></Field>
        </div>
        <Field label="Waste Factor (%)" hint="Typically 5–15% for cuts and breakage">
          <Input type="number" value={waste} onChange={e => setWaste(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Tiles</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Tiles Needed" value={result.tiles.toString()} highlight />
            <ResultBox label="Room Square Footage" value={result.sqft.toFixed(0)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

function MaterialCalculator(slug: string, label: string, unit: string, density?: number) {
  const tool = ALL_TOOLS.find(t => t.slug === slug)!;
  return function MaterialTool() {
    const [length, setLength] = useState("10");
    const [width, setWidth] = useState("10");
    const [depth, setDepth] = useState("3");
    const [result, setResult] = useState<{ cubicYards: number; cubicFeet: number; tons?: number } | null>(null);

    const calculate = () => {
      const l = parseFloat(length), w = parseFloat(width), d = parseFloat(depth) / 12;
      if ([l, w, d].some(isNaN)) return;
      const cubicFeet = l * w * d;
      const cubicYards = cubicFeet / 27;
      const tons = density ? cubicYards * density : undefined;
      setResult({ cubicYards, cubicFeet, tons });
    };

    return (
      <ToolPage tool={tool}>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Field label="Length (ft)"><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
            <Field label="Width (ft)"><Input type="number" value={width} onChange={e => setWidth(e.target.value)} /></Field>
            <Field label="Depth (in)"><Input type="number" value={depth} onChange={e => setDepth(e.target.value)} /></Field>
          </div>
          <CalcButton onClick={calculate} className="w-full">Calculate {label}</CalcButton>
          {result && (
            <ResultGrid>
              <ResultBox label="Cubic Yards" value={result.cubicYards.toFixed(2)} highlight />
              <ResultBox label="Cubic Feet" value={result.cubicFeet.toFixed(2)} />
              {result.tons !== undefined && <ResultBox label="Approximate Tons" value={result.tons.toFixed(2)} />}
            </ResultGrid>
          )}
        </div>
      </ToolPage>
    );
  };
}

export const GravelCalculator = MaterialCalculator('gravel', 'Gravel', 'cubic yards', 1.4);
export const MulchCalculator = MaterialCalculator('mulch', 'Mulch', 'cubic yards');
export const TopsoilCalculator = MaterialCalculator('topsoil', 'Topsoil', 'cubic yards');
export const SandCalculator = MaterialCalculator('sand', 'Sand', 'cubic yards', 1.5);

export function BrickCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'brick')!;
  const [length, setLength] = useState("10");
  const [height, setHeight] = useState("8");
  const [brickType, setBrickType] = useState("standard");
  const [result, setResult] = useState<{ bricks: number; sqft: number } | null>(null);

  const bricksPerSqFt: Record<string, number> = { standard: 6.75, modular: 7.5, queen: 5.06 };

  const calculate = () => {
    const l = parseFloat(length), h = parseFloat(height);
    if (isNaN(l) || isNaN(h)) return;
    const sqft = l * h;
    const bricks = Math.ceil(sqft * bricksPerSqFt[brickType] * 1.1);
    setResult({ bricks, sqft });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Wall Length (ft)"><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
          <Field label="Wall Height (ft)"><Input type="number" value={height} onChange={e => setHeight(e.target.value)} /></Field>
        </div>
        <Field label="Brick Type">
          <Select value={brickType} onChange={e => setBrickType(e.target.value)}>
            <option value="standard">Standard (7.5″ × 3.5″)</option>
            <option value="modular">Modular (7.6″ × 2.25″)</option>
            <option value="queen">Queen (9.6″ × 2.75″)</option>
          </Select>
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Bricks</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Bricks Needed (incl. 10% waste)" value={result.bricks.toString()} highlight />
            <ResultBox label="Wall Square Footage" value={result.sqft.toFixed(0)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SquareFootageCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'square-footage')!;
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("15");
  const [unit, setUnit] = useState("ft");
  const [result, setResult] = useState<{ sqft: number; sqm: number; sqyd: number } | null>(null);

  const toFt: Record<string, number> = { ft: 1, m: 3.28084, in: 1/12, yd: 3, cm: 0.0328084 };

  const calculate = () => {
    const l = parseFloat(length), w = parseFloat(width);
    if (isNaN(l) || isNaN(w)) return;
    const lft = l * toFt[unit], wft = w * toFt[unit];
    const sqft = lft * wft;
    setResult({ sqft, sqm: sqft / 10.764, sqyd: sqft / 9 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Unit">
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="ft">Feet</option>
            <option value="m">Meters</option>
            <option value="yd">Yards</option>
            <option value="in">Inches</option>
            <option value="cm">Centimeters</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label={`Length (${unit})`}><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
          <Field label={`Width (${unit})`}><Input type="number" value={width} onChange={e => setWidth(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Square Footage</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Square Feet" value={result.sqft.toFixed(2)} highlight />
            <ResultBox label="Square Meters" value={result.sqm.toFixed(2)} />
            <ResultBox label="Square Yards" value={result.sqyd.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function AsphaltCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'asphalt')!;
  const [length, setLength] = useState("50");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("3");
  const [result, setResult] = useState<{ tons: number; cubicYards: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length), w = parseFloat(width), d = parseFloat(depth) / 12;
    if ([l, w, d].some(isNaN)) return;
    const cubicFeet = l * w * d;
    const cubicYards = cubicFeet / 27;
    const tons = cubicYards * 2.025;
    setResult({ tons, cubicYards });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Length (ft)"><Input type="number" value={length} onChange={e => setLength(e.target.value)} /></Field>
          <Field label="Width (ft)"><Input type="number" value={width} onChange={e => setWidth(e.target.value)} /></Field>
          <Field label="Depth (in)"><Input type="number" value={depth} onChange={e => setDepth(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Asphalt</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Tons of Asphalt" value={result.tons.toFixed(2)} highlight />
            <ResultBox label="Cubic Yards" value={result.cubicYards.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MetalWeightCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'metal-weight')!;
  const [material, setMaterial] = useState("steel");
  const [length, setLength] = useState("2"); const [width, setWidth] = useState("0.1"); const [thickness, setThickness] = useState("0.005");
  const [result, setResult] = useState<{kg:number;lbs:number}|null>(null);
  const densities: Record<string,number> = {steel:7850,aluminum:2700,copper:8960,brass:8500,iron:7874,stainless:8000,zinc:7133,titanium:4500};
  const calc = () => {
    const l=parseFloat(length), w=parseFloat(width), t=parseFloat(thickness), d=densities[material];
    if([l,w,t].some(isNaN)) return;
    const kg=l*w*t*d;
    setResult({kg, lbs:kg*2.20462});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Material">
          <Select value={material} onChange={e=>setMaterial(e.target.value)}>
            {Object.keys(densities).map(m=><option key={m} value={m}>{m.charAt(0).toUpperCase()+m.slice(1)}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Length (m)"><Input type="number" value={length} onChange={e=>setLength(e.target.value)} step="0.01" /></Field>
          <Field label="Width (m)"><Input type="number" value={width} onChange={e=>setWidth(e.target.value)} step="0.01" /></Field>
          <Field label="Thickness (m)"><Input type="number" value={thickness} onChange={e=>setThickness(e.target.value)} step="0.001" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Metal Weight</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Weight (kg)" value={result.kg.toFixed(3)} highlight />
          <ResultBox label="Weight (lbs)" value={result.lbs.toFixed(3)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}
