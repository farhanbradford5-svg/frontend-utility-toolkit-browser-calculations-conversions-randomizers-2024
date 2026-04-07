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

// ─── NEW CONSTRUCTION TOOLS ────────────────────────────────────────────────

export function FlooringCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'flooring')!;
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("15");
  const [waste, setWaste] = useState("10");
  const [boardSf, setBoardSf] = useState("20");
  const [costPerSf, setCostPerSf] = useState("4.50");
  const [result, setResult] = useState<{area:number;withWaste:number;boards:number;cost:number}|null>(null);

  const calculate = () => {
    const area = (parseFloat(length)||0) * (parseFloat(width)||0);
    const withWaste = area * (1 + (parseFloat(waste)||0)/100);
    const boards = Math.ceil(withWaste / (parseFloat(boardSf)||1));
    const cost = withWaste * (parseFloat(costPerSf)||0);
    setResult({ area, withWaste, boards, cost });
  };
  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['tile','drywall','decking','roofing','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Room Length (ft)"><Input type="number" value={length} onChange={e=>setLength(e.target.value)} /></Field>
          <Field label="Room Width (ft)"><Input type="number" value={width} onChange={e=>setWidth(e.target.value)} /></Field>
          <Field label="Waste Factor (%)" hint="10% recommended"><Input type="number" value={waste} onChange={e=>setWaste(e.target.value)} /></Field>
          <Field label="Board/Box Coverage (sq ft)"><Input type="number" value={boardSf} onChange={e=>setBoardSf(e.target.value)} /></Field>
          <Field label="Cost per sq ft ($)" hint="Optional"><Input type="number" value={costPerSf} step="0.10" onChange={e=>setCostPerSf(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Flooring</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Room Area" value={`${result.area.toFixed(1)} sq ft`} />
          <ResultBox label="With Waste" value={`${result.withWaste.toFixed(1)} sq ft`} highlight />
          <ResultBox label="Boxes/Boards Needed" value={`${result.boards}`} />
          <ResultBox label="Material Cost" value={fmt(result.cost)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Add 10% waste for straight-lay patterns, 15% for diagonal. Always buy extra to account for cuts and future repairs.</div>
    </ToolPage>
  );
}

export function DrywallCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'drywall')!;
  const [length, setLength] = useState("24");
  const [width, setWidth] = useState("16");
  const [height, setHeight] = useState("9");
  const [doors, setDoors] = useState("2");
  const [windows, setWindows] = useState("4");
  const [sheetSize, setSheetSize] = useState("48");
  const [result, setResult] = useState<{wallArea:number;netArea:number;sheets:number;panels:number}|null>(null);

  const calculate = () => {
    const L = parseFloat(length)||0, W = parseFloat(width)||0, H = parseFloat(height)||0;
    const doorArea = (parseFloat(doors)||0) * 21; // 3x7 door
    const windowArea = (parseFloat(windows)||0) * 15; // 3x5 window
    const wallArea = 2*(L+W)*H;
    const ceilingArea = L*W;
    const netArea = wallArea + ceilingArea - doorArea - windowArea;
    const sheetSf = (parseFloat(sheetSize)||48)/12 * 4; // 4ft wide sheet
    const sheets = Math.ceil(netArea / sheetSf * 1.10); // 10% waste
    const panels = Math.ceil(netArea * 1.10 / sheetSf);
    setResult({ wallArea: wallArea+ceilingArea, netArea, sheets: panels, panels });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['flooring','paint','fence','roofing','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Room Length (ft)"><Input type="number" value={length} onChange={e=>setLength(e.target.value)} /></Field>
          <Field label="Room Width (ft)"><Input type="number" value={width} onChange={e=>setWidth(e.target.value)} /></Field>
          <Field label="Ceiling Height (ft)"><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} /></Field>
          <Field label="# of Doors"><Input type="number" value={doors} onChange={e=>setDoors(e.target.value)} /></Field>
          <Field label="# of Windows"><Input type="number" value={windows} onChange={e=>setWindows(e.target.value)} /></Field>
          <Field label="Sheet Length (in)" hint="48in = 4x8 sheet">
            <Select value={sheetSize} onChange={e=>setSheetSize(e.target.value)}>
              <option value="48">4×8 sheet</option>
              <option value="54">4×9 sheet</option>
              <option value="60">4×10 sheet</option>
              <option value="72">4×12 sheet</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Drywall</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Gross Area" value={`${result.wallArea.toFixed(0)} sq ft`} />
          <ResultBox label="Net Area" value={`${result.netArea.toFixed(0)} sq ft`} />
          <ResultBox label="Sheets Needed (+10%)" value={`${result.sheets}`} highlight />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Includes walls and ceiling. Subtracts standard door (21 sq ft) and window (15 sq ft) openings. Adds 10% waste factor.</div>
    </ToolPage>
  );
}

export function FenceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'fence')!;
  const [perimeter, setPerimeter] = useState("200");
  const [gateCount, setGateCount] = useState("1");
  const [gateWidth, setGateWidth] = useState("4");
  const [postSpacing, setPostSpacing] = useState("8");
  const [railsPerSection, setRailsPerSection] = useState("2");
  const [picketWidth, setPicketWidth] = useState("3.5");
  const [result, setResult] = useState<{posts:number;rails:number;pickets:number;linearFt:number}|null>(null);

  const calculate = () => {
    const totalFt = (parseFloat(perimeter)||0) - (parseFloat(gateCount)||0)*(parseFloat(gateWidth)||4);
    const sections = Math.ceil(totalFt / (parseFloat(postSpacing)||8));
    const posts = sections + 1 + (parseFloat(gateCount)||0)*2;
    const rails = sections * (parseFloat(railsPerSection)||2);
    const pickets = Math.ceil(totalFt / ((parseFloat(picketWidth)||3.5)/12));
    setResult({ posts, rails, pickets, linearFt: totalFt });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['drywall','flooring','decking','roofing','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Total Perimeter (ft)"><Input type="number" value={perimeter} onChange={e=>setPerimeter(e.target.value)} /></Field>
          <Field label="Number of Gates"><Input type="number" value={gateCount} onChange={e=>setGateCount(e.target.value)} /></Field>
          <Field label="Gate Width (ft)"><Input type="number" value={gateWidth} onChange={e=>setGateWidth(e.target.value)} /></Field>
          <Field label="Post Spacing (ft)"><Input type="number" value={postSpacing} onChange={e=>setPostSpacing(e.target.value)} /></Field>
          <Field label="Rails per Section"><Input type="number" value={railsPerSection} onChange={e=>setRailsPerSection(e.target.value)} /></Field>
          <Field label="Picket Width (in)"><Input type="number" value={picketWidth} step="0.5" onChange={e=>setPicketWidth(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Fence Materials</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Fence Line (ft)" value={`${result.linearFt.toFixed(0)} ft`} />
          <ResultBox label="Posts" value={`${result.posts}`} highlight />
          <ResultBox label="Rails" value={`${result.rails}`} />
          <ResultBox label="Pickets" value={`${result.pickets}`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Add ~10% to material quantities to account for waste and cuts. Gate posts require double posts on each side.</div>
    </ToolPage>
  );
}

export function StairCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'stair')!;
  const [totalRise, setTotalRise] = useState("120");
  const [riserHeight, setRiserHeight] = useState("7.5");
  const [treadDepth, setTreadDepth] = useState("10");
  const [unit, setUnit] = useState("inches");
  const [result, setResult] = useState<{risers:number;treads:number;stringerLength:number;runLength:number;angle:number}|null>(null);

  const calculate = () => {
    const rise = parseFloat(totalRise)||0;
    const rh = parseFloat(riserHeight)||7.5;
    const td = parseFloat(treadDepth)||10;
    const risers = Math.round(rise/rh);
    const treads = risers - 1;
    const runLength = treads * td;
    const stringerLength = Math.sqrt(rise*rise + runLength*runLength);
    const angle = Math.atan(rise/runLength) * 180/Math.PI;
    setResult({ risers, treads, stringerLength, runLength, angle });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['flooring','drywall','fence','decking','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Total Rise (in)" hint="Floor to floor height in inches">
            <Input type="number" value={totalRise} onChange={e=>setTotalRise(e.target.value)} />
          </Field>
          <Field label="Riser Height (in)" hint="Code: 7-7.75 inches">
            <Input type="number" value={riserHeight} step="0.25" onChange={e=>setRiserHeight(e.target.value)} />
          </Field>
          <Field label="Tread Depth (in)" hint="Code: min 10 inches">
            <Input type="number" value={treadDepth} step="0.25" onChange={e=>setTreadDepth(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Stairs</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Number of Risers" value={`${result.risers}`} highlight />
          <ResultBox label="Number of Treads" value={`${result.treads}`} />
          <ResultBox label="Total Run" value={`${result.runLength.toFixed(1)} in`} />
          <ResultBox label="Stringer Length" value={`${result.stringerLength.toFixed(1)} in`} />
          <ResultBox label="Stair Angle" value={`${result.angle.toFixed(1)}°`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Building code: risers 7-7.75 inches, treads min 10 inches. Stringer length = sqrt(total rise^2 + total run^2). Ideal angle: 30-35 degrees.</div>
    </ToolPage>
  );
}

export function DeckingCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'decking')!;
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("14");
  const [boardWidth, setBoardWidth] = useState("5.5");
  const [boardLength, setBoardLength] = useState("12");
  const [waste, setWaste] = useState("10");
  const [costPer, setCostPer] = useState("3.50");
  const [result, setResult] = useState<{area:number;boards:number;linearFt:number;cost:number}|null>(null);

  const calculate = () => {
    const area = (parseFloat(length)||0) * (parseFloat(width)||0);
    const areaWithWaste = area * (1 + (parseFloat(waste)||0)/100);
    const bw = (parseFloat(boardWidth)||5.5)/12; // ft
    const bl = parseFloat(boardLength)||12;
    const linearFt = areaWithWaste / bw;
    const boards = Math.ceil(linearFt / bl);
    const cost = linearFt * (parseFloat(costPer)||0);
    setResult({ area, boards, linearFt, cost });
  };
  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['flooring','fence','roofing','stair','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Deck Length (ft)"><Input type="number" value={length} onChange={e=>setLength(e.target.value)} /></Field>
          <Field label="Deck Width (ft)"><Input type="number" value={width} onChange={e=>setWidth(e.target.value)} /></Field>
          <Field label="Board Width (in)" hint="e.g. 5.5 for standard 1x6">
            <Input type="number" value={boardWidth} step="0.5" onChange={e=>setBoardWidth(e.target.value)} />
          </Field>
          <Field label="Board Length (ft)"><Input type="number" value={boardLength} onChange={e=>setBoardLength(e.target.value)} /></Field>
          <Field label="Waste (%)"><Input type="number" value={waste} onChange={e=>setWaste(e.target.value)} /></Field>
          <Field label="Cost per Linear Ft ($)"><Input type="number" value={costPer} step="0.10" onChange={e=>setCostPer(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Decking</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Deck Area" value={`${result.area.toFixed(0)} sq ft`} />
          <ResultBox label="Linear Feet Needed" value={`${result.linearFt.toFixed(0)} ft`} highlight />
          <ResultBox label="Boards" value={`${result.boards}`} />
          <ResultBox label="Material Cost" value={fmt(result.cost)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Add 10-15% waste for straight decking, 15-20% for diagonal patterns. Includes gaps between boards in board width calculation.</div>
    </ToolPage>
  );
}

export function RoofingCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'roofing')!;
  const [length, setLength] = useState("50");
  const [width, setWidth] = useState("30");
  const [pitch, setPitch] = useState("6");
  const [waste, setWaste] = useState("15");
  const [bundlesPerSq, setBundlesPerSq] = useState("3");
  const [result, setResult] = useState<{footprint:number;actualArea:number;squares:number;bundles:number;pitchFactor:number}|null>(null);

  const calculate = () => {
    const footprint = (parseFloat(length)||0) * (parseFloat(width)||0);
    const run = 12, rise = parseFloat(pitch)||6;
    const pitchFactor = Math.sqrt(run*run + rise*rise) / run;
    const actualArea = footprint * pitchFactor * (1 + (parseFloat(waste)||0)/100);
    const squares = actualArea / 100;
    const bundles = Math.ceil(squares * (parseFloat(bundlesPerSq)||3));
    setResult({ footprint, actualArea, squares, bundles, pitchFactor });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['flooring','drywall','decking','fence','square-footage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Roof Length (ft)"><Input type="number" value={length} onChange={e=>setLength(e.target.value)} /></Field>
          <Field label="Roof Width (ft)"><Input type="number" value={width} onChange={e=>setWidth(e.target.value)} /></Field>
          <Field label="Roof Pitch (rise per 12)" hint="e.g. 6 = 6/12 pitch">
            <Select value={pitch} onChange={e=>setPitch(e.target.value)}>
              {[3,4,5,6,7,8,9,10,12].map(p=><option key={p} value={p}>{p}/12 pitch</option>)}
            </Select>
          </Field>
          <Field label="Waste (%)"><Input type="number" value={waste} onChange={e=>setWaste(e.target.value)} /></Field>
          <Field label="Bundles per Square"><Input type="number" value={bundlesPerSq} onChange={e=>setBundlesPerSq(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Roofing</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Footprint" value={`${result.footprint.toFixed(0)} sq ft`} />
          <ResultBox label="Actual Roof Area" value={`${result.actualArea.toFixed(0)} sq ft`} />
          <ResultBox label="Roofing Squares" value={result.squares.toFixed(2)} highlight />
          <ResultBox label="Bundles Needed" value={`${result.bundles}`} />
          <ResultBox label="Pitch Factor" value={result.pitchFactor.toFixed(4)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">1 roofing square = 100 sq ft. Pitch factor adjusts footprint to actual sloped area. Standard shingles: 3 bundles per square.</div>
    </ToolPage>
  );
}
