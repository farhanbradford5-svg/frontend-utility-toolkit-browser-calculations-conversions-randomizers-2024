import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function AreaCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'area')!;
  const [shape, setShape] = useState("rectangle");
  const [dims, setDims] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const shapes: Record<string, { label: string; fields: { key: string; label: string }[]; calc: (d: Record<string, number>) => number }> = {
    rectangle: { label: 'Rectangle', fields: [{ key: 'w', label: 'Width' }, { key: 'h', label: 'Height' }], calc: d => d.w * d.h },
    circle: { label: 'Circle', fields: [{ key: 'r', label: 'Radius' }], calc: d => Math.PI * d.r * d.r },
    triangle: { label: 'Triangle', fields: [{ key: 'b', label: 'Base' }, { key: 'h', label: 'Height' }], calc: d => 0.5 * d.b * d.h },
    trapezoid: { label: 'Trapezoid', fields: [{ key: 'a', label: 'Base a' }, { key: 'b', label: 'Base b' }, { key: 'h', label: 'Height' }], calc: d => 0.5 * (d.a + d.b) * d.h },
    ellipse: { label: 'Ellipse', fields: [{ key: 'a', label: 'Semi-major (a)' }, { key: 'b', label: 'Semi-minor (b)' }], calc: d => Math.PI * d.a * d.b },
    parallelogram: { label: 'Parallelogram', fields: [{ key: 'b', label: 'Base' }, { key: 'h', label: 'Height' }], calc: d => d.b * d.h },
    rhombus: { label: 'Rhombus', fields: [{ key: 'd1', label: 'Diagonal 1' }, { key: 'd2', label: 'Diagonal 2' }], calc: d => 0.5 * d.d1 * d.d2 },
  };

  const calculate = () => {
    const s = shapes[shape];
    const d: Record<string, number> = {};
    for (const f of s.fields) {
      const v = parseFloat(dims[f.key] || '');
      if (isNaN(v)) return;
      d[f.key] = v;
    }
    setResult(s.calc(d));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Shape">
          <Select value={shape} onChange={e => { setShape(e.target.value); setDims({}); setResult(null); }}>
            {Object.entries(shapes).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          {shapes[shape].fields.map(f => (
            <Field key={f.key} label={f.label}>
              <Input type="number" value={dims[f.key] || ''} onChange={e => setDims(prev => ({ ...prev, [f.key]: e.target.value }))} />
            </Field>
          ))}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Area</CalcButton>
        {result !== null && <ResultBox label="Area" value={result.toFixed(4)} unit="sq units" highlight />}
      </div>
    </ToolPage>
  );
}

export function VolumeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'volume')!;
  const [shape, setShape] = useState("cube");
  const [dims, setDims] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const shapes: Record<string, { label: string; fields: { key: string; label: string }[]; calc: (d: Record<string, number>) => number }> = {
    cube: { label: 'Cube', fields: [{ key: 's', label: 'Side length' }], calc: d => Math.pow(d.s, 3) },
    box: { label: 'Rectangular Box', fields: [{ key: 'l', label: 'Length' }, { key: 'w', label: 'Width' }, { key: 'h', label: 'Height' }], calc: d => d.l * d.w * d.h },
    sphere: { label: 'Sphere', fields: [{ key: 'r', label: 'Radius' }], calc: d => (4 / 3) * Math.PI * Math.pow(d.r, 3) },
    cylinder: { label: 'Cylinder', fields: [{ key: 'r', label: 'Radius' }, { key: 'h', label: 'Height' }], calc: d => Math.PI * d.r * d.r * d.h },
    cone: { label: 'Cone', fields: [{ key: 'r', label: 'Radius' }, { key: 'h', label: 'Height' }], calc: d => (1 / 3) * Math.PI * d.r * d.r * d.h },
    pyramid: { label: 'Pyramid', fields: [{ key: 'b', label: 'Base Area' }, { key: 'h', label: 'Height' }], calc: d => (1 / 3) * d.b * d.h },
  };

  const calculate = () => {
    const s = shapes[shape];
    const d: Record<string, number> = {};
    for (const f of s.fields) {
      const v = parseFloat(dims[f.key] || '');
      if (isNaN(v)) return;
      d[f.key] = v;
    }
    setResult(s.calc(d));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Shape">
          <Select value={shape} onChange={e => { setShape(e.target.value); setDims({}); setResult(null); }}>
            {Object.entries(shapes).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          {shapes[shape].fields.map(f => (
            <Field key={f.key} label={f.label}>
              <Input type="number" value={dims[f.key] || ''} onChange={e => setDims(prev => ({ ...prev, [f.key]: e.target.value }))} />
            </Field>
          ))}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Volume</CalcButton>
        {result !== null && <ResultBox label="Volume" value={result.toFixed(4)} unit="cubic units" highlight />}
      </div>
    </ToolPage>
  );
}

export function PerimeterCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'perimeter')!;
  const [shape, setShape] = useState("rectangle");
  const [dims, setDims] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const shapes: Record<string, { label: string; fields: { key: string; label: string }[]; calc: (d: Record<string, number>) => number }> = {
    rectangle: { label: 'Rectangle', fields: [{ key: 'l', label: 'Length' }, { key: 'w', label: 'Width' }], calc: d => 2 * (d.l + d.w) },
    square: { label: 'Square', fields: [{ key: 's', label: 'Side' }], calc: d => 4 * d.s },
    circle: { label: 'Circle (Circumference)', fields: [{ key: 'r', label: 'Radius' }], calc: d => 2 * Math.PI * d.r },
    triangle: { label: 'Triangle', fields: [{ key: 'a', label: 'Side a' }, { key: 'b', label: 'Side b' }, { key: 'c', label: 'Side c' }], calc: d => d.a + d.b + d.c },
    parallelogram: { label: 'Parallelogram', fields: [{ key: 'a', label: 'Side a' }, { key: 'b', label: 'Side b' }], calc: d => 2 * (d.a + d.b) },
  };

  const calculate = () => {
    const s = shapes[shape];
    const d: Record<string, number> = {};
    for (const f of s.fields) {
      const v = parseFloat(dims[f.key] || '');
      if (isNaN(v)) return;
      d[f.key] = v;
    }
    setResult(s.calc(d));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Shape">
          <Select value={shape} onChange={e => { setShape(e.target.value); setDims({}); setResult(null); }}>
            {Object.entries(shapes).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          {shapes[shape].fields.map(f => (
            <Field key={f.key} label={f.label}>
              <Input type="number" value={dims[f.key] || ''} onChange={e => setDims(prev => ({ ...prev, [f.key]: e.target.value }))} />
            </Field>
          ))}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Perimeter</CalcButton>
        {result !== null && <ResultBox label="Perimeter" value={result.toFixed(4)} unit="units" highlight />}
      </div>
    </ToolPage>
  );
}

export function SurfaceAreaCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'surface-area')!;
  const [shape, setShape] = useState("sphere");
  const [dims, setDims] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const shapes: Record<string, { label: string; fields: { key: string; label: string }[]; calc: (d: Record<string, number>) => number }> = {
    sphere: { label: 'Sphere', fields: [{ key: 'r', label: 'Radius' }], calc: d => 4 * Math.PI * d.r * d.r },
    cylinder: { label: 'Cylinder', fields: [{ key: 'r', label: 'Radius' }, { key: 'h', label: 'Height' }], calc: d => 2 * Math.PI * d.r * (d.r + d.h) },
    cone: { label: 'Cone', fields: [{ key: 'r', label: 'Radius' }, { key: 'h', label: 'Height' }], calc: d => Math.PI * d.r * (d.r + Math.sqrt(d.r * d.r + d.h * d.h)) },
    box: { label: 'Rectangular Box', fields: [{ key: 'l', label: 'Length' }, { key: 'w', label: 'Width' }, { key: 'h', label: 'Height' }], calc: d => 2 * (d.l * d.w + d.l * d.h + d.w * d.h) },
  };

  const calculate = () => {
    const s = shapes[shape];
    const d: Record<string, number> = {};
    for (const f of s.fields) {
      const v = parseFloat(dims[f.key] || '');
      if (isNaN(v)) return;
      d[f.key] = v;
    }
    setResult(s.calc(d));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Shape">
          <Select value={shape} onChange={e => { setShape(e.target.value); setDims({}); setResult(null); }}>
            {Object.entries(shapes).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          {shapes[shape].fields.map(f => (
            <Field key={f.key} label={f.label}>
              <Input type="number" value={dims[f.key] || ''} onChange={e => setDims(prev => ({ ...prev, [f.key]: e.target.value }))} />
            </Field>
          ))}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Surface Area</CalcButton>
        {result !== null && <ResultBox label="Surface Area" value={result.toFixed(4)} unit="sq units" highlight />}
      </div>
    </ToolPage>
  );
}

export function MidpointCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'midpoint')!;
  const [x1, setX1] = useState("2");
  const [y1, setY1] = useState("4");
  const [x2, setX2] = useState("8");
  const [y2, setY2] = useState("10");
  const [result, setResult] = useState<{ mx: number; my: number; distance: number } | null>(null);

  const calculate = () => {
    const v = [parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2)];
    if (v.some(isNaN)) return;
    const [ax, ay, bx, by] = v;
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    const distance = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
    setResult({ mx, my, distance });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Point 1 X"><Input type="number" value={x1} onChange={e => setX1(e.target.value)} /></Field>
          <Field label="Point 1 Y"><Input type="number" value={y1} onChange={e => setY1(e.target.value)} /></Field>
          <Field label="Point 2 X"><Input type="number" value={x2} onChange={e => setX2(e.target.value)} /></Field>
          <Field label="Point 2 Y"><Input type="number" value={y2} onChange={e => setY2(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Midpoint</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Midpoint" value={`(${result.mx}, ${result.my})`} highlight />
            <ResultBox label="Distance" value={result.distance.toFixed(4)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PythagoreanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pythagorean')!;
  const [a, setA] = useState("3");
  const [b, setB] = useState("4");
  const [c, setC] = useState("");
  const [mode, setMode] = useState("hyp");
  const [result, setResult] = useState<{ c: number; area: number; perimeter: number } | null>(null);

  const calculate = () => {
    if (mode === 'hyp') {
      const av = parseFloat(a), bv = parseFloat(b);
      if (isNaN(av) || isNaN(bv)) return;
      const hyp = Math.sqrt(av * av + bv * bv);
      setResult({ c: hyp, area: 0.5 * av * bv, perimeter: av + bv + hyp });
    } else {
      const av = parseFloat(a), cv = parseFloat(c);
      if (isNaN(av) || isNaN(cv)) return;
      const leg = Math.sqrt(cv * cv - av * av);
      setResult({ c: leg, area: 0.5 * av * leg, perimeter: av + leg + cv });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Solve for">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="hyp">Hypotenuse (c) from legs a, b</option>
            <option value="leg">Leg (b) from leg a and hypotenuse c</option>
          </Select>
        </Field>
        {mode === 'hyp' ? (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Leg a"><Input type="number" value={a} onChange={e => setA(e.target.value)} /></Field>
            <Field label="Leg b"><Input type="number" value={b} onChange={e => setB(e.target.value)} /></Field>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Known leg a"><Input type="number" value={a} onChange={e => setA(e.target.value)} /></Field>
            <Field label="Hypotenuse c"><Input type="number" value={c} onChange={e => setC(e.target.value)} /></Field>
          </div>
        )}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label={mode === 'hyp' ? 'Hypotenuse (c)' : 'Leg (b)'} value={result.c.toFixed(4)} highlight />
            <ResultBox label="Triangle Area" value={result.area.toFixed(4)} />
            <ResultBox label="Perimeter" value={result.perimeter.toFixed(4)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CircleCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'circle')!;
  const [radius, setRadius] = useState("5");
  const [result, setResult] = useState<{area:number;circumference:number;diameter:number}|null>(null);
  const calc = () => {
    const r = parseFloat(radius);
    if(isNaN(r)) return;
    setResult({area: Math.PI*r*r, circumference: 2*Math.PI*r, diameter: 2*r});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Radius"><Input type="number" value={radius} onChange={e=>setRadius(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Circle</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Area" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Circumference" value={result.circumference.toFixed(4)} />
          <ResultBox label="Diameter" value={result.diameter.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function TriangleCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'triangle')!;
  const [a, setA] = useState("3"); const [b, setB] = useState("4"); const [c, setC] = useState("5");
  const [result, setResult] = useState<{area:number;perimeter:number;valid:boolean}|null>(null);
  const calc = () => {
    const av=parseFloat(a),bv=parseFloat(b),cv=parseFloat(c);
    if([av,bv,cv].some(isNaN)) return;
    const valid = av+bv>cv && av+cv>bv && bv+cv>av;
    if(!valid){setResult({area:0,perimeter:0,valid:false});return;}
    const s=(av+bv+cv)/2;
    setResult({area:Math.sqrt(s*(s-av)*(s-bv)*(s-cv)),perimeter:av+bv+cv,valid:true});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Side a"><Input type="number" value={a} onChange={e=>setA(e.target.value)} /></Field>
          <Field label="Side b"><Input type="number" value={b} onChange={e=>setB(e.target.value)} /></Field>
          <Field label="Side c"><Input type="number" value={c} onChange={e=>setC(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Triangle</CalcButton>
        {result && !result.valid && <p className="text-red-500 text-sm">Invalid triangle — sides do not satisfy triangle inequality.</p>}
        {result && result.valid && <ResultGrid>
          <ResultBox label="Area (Heron's)" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Perimeter" value={result.perimeter.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function RectangleCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rectangle')!;
  const [w, setW] = useState("8"); const [h, setH] = useState("5");
  const [result, setResult] = useState<{area:number;perimeter:number;diagonal:number}|null>(null);
  const calc = () => {
    const wv=parseFloat(w), hv=parseFloat(h);
    if([wv,hv].some(isNaN)) return;
    setResult({area:wv*hv, perimeter:2*(wv+hv), diagonal:Math.sqrt(wv*wv+hv*hv)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Width"><Input type="number" value={w} onChange={e=>setW(e.target.value)} /></Field>
          <Field label="Height"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Rectangle</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Area" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Perimeter" value={result.perimeter.toFixed(4)} />
          <ResultBox label="Diagonal" value={result.diagonal.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function SphereCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'sphere')!;
  const [r, setR] = useState("5");
  const [result, setResult] = useState<{volume:number;surfaceArea:number}|null>(null);
  const calc = () => {
    const rv=parseFloat(r);
    if(isNaN(rv)) return;
    setResult({volume:(4/3)*Math.PI*rv*rv*rv, surfaceArea:4*Math.PI*rv*rv});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Radius"><Input type="number" value={r} onChange={e=>setR(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Sphere</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Volume" value={result.volume.toFixed(4)} highlight />
          <ResultBox label="Surface Area" value={result.surfaceArea.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function CylinderCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cylinder')!;
  const [r, setR] = useState("3"); const [h, setH] = useState("10");
  const [result, setResult] = useState<{volume:number;surfaceArea:number}|null>(null);
  const calc = () => {
    const rv=parseFloat(r), hv=parseFloat(h);
    if([rv,hv].some(isNaN)) return;
    setResult({volume:Math.PI*rv*rv*hv, surfaceArea:2*Math.PI*rv*(rv+hv)});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Radius"><Input type="number" value={r} onChange={e=>setR(e.target.value)} /></Field>
          <Field label="Height"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Cylinder</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Volume" value={result.volume.toFixed(4)} highlight />
          <ResultBox label="Surface Area" value={result.surfaceArea.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function ConeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'cone')!;
  const [r, setR] = useState("3"); const [h, setH] = useState("8");
  const [result, setResult] = useState<{volume:number;surfaceArea:number;slantHeight:number}|null>(null);
  const calc = () => {
    const rv=parseFloat(r), hv=parseFloat(h);
    if([rv,hv].some(isNaN)) return;
    const sl=Math.sqrt(rv*rv+hv*hv);
    setResult({volume:(1/3)*Math.PI*rv*rv*hv, surfaceArea:Math.PI*rv*(rv+sl), slantHeight:sl});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Radius"><Input type="number" value={r} onChange={e=>setR(e.target.value)} /></Field>
          <Field label="Height"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Cone</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Volume" value={result.volume.toFixed(4)} highlight />
          <ResultBox label="Surface Area" value={result.surfaceArea.toFixed(4)} />
          <ResultBox label="Slant Height" value={result.slantHeight.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function DistanceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'distance')!;
  const [x1,setX1]=useState("0");const [y1,setY1]=useState("0");
  const [x2,setX2]=useState("3");const [y2,setY2]=useState("4");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const dx=parseFloat(x2)-parseFloat(x1), dy=parseFloat(y2)-parseFloat(y1);
    if(isNaN(dx)||isNaN(dy)) return;
    setResult(Math.sqrt(dx*dx+dy*dy));
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Point 1 (x, y)">
            <div className="flex gap-2">
              <Input type="number" value={x1} onChange={e=>setX1(e.target.value)} placeholder="x" />
              <Input type="number" value={y1} onChange={e=>setY1(e.target.value)} placeholder="y" />
            </div>
          </Field>
          <Field label="Point 2 (x, y)">
            <div className="flex gap-2">
              <Input type="number" value={x2} onChange={e=>setX2(e.target.value)} placeholder="x" />
              <Input type="number" value={y2} onChange={e=>setY2(e.target.value)} placeholder="y" />
            </div>
          </Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Distance</CalcButton>
        {result !== null && <ResultBox label="Distance" value={result.toFixed(6)} highlight />}
      </div>
    </ToolPage>
  );
}

export function TrapezoidCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'trapezoid-calc')!;
  const [a, setA] = useState("5"); const [b, setB] = useState("8"); const [h, setH] = useState("4");
  const [result, setResult] = useState<{area:number}|null>(null);
  const calc = () => {
    const av=parseFloat(a), bv=parseFloat(b), hv=parseFloat(h);
    if([av,bv,hv].some(isNaN)) return;
    setResult({area:0.5*(av+bv)*hv});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Base a"><Input type="number" value={a} onChange={e=>setA(e.target.value)} /></Field>
          <Field label="Base b"><Input type="number" value={b} onChange={e=>setB(e.target.value)} /></Field>
          <Field label="Height"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Trapezoid</CalcButton>
        {result && <ResultBox label="Area" value={result.area.toFixed(4)} highlight />}
      </div>
    </ToolPage>
  );
}

export function EllipseCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ellipse')!;
  const [a, setA] = useState("5"); const [b, setB] = useState("3");
  const [result, setResult] = useState<{area:number;perimeter:number}|null>(null);
  const calc = () => {
    const av=parseFloat(a), bv=parseFloat(b);
    if([av,bv].some(isNaN)) return;
    const area=Math.PI*av*bv;
    const h=Math.pow((av-bv)/(av+bv),2);
    const perimeter=Math.PI*(av+bv)*(1+3*h/(10+Math.sqrt(4-3*h)));
    setResult({area, perimeter});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Semi-major axis (a)"><Input type="number" value={a} onChange={e=>setA(e.target.value)} /></Field>
          <Field label="Semi-minor axis (b)"><Input type="number" value={b} onChange={e=>setB(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Ellipse</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Area" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Perimeter (approx.)" value={result.perimeter.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function PentagonCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pentagon')!;
  const [s, setS] = useState("5");
  const [result, setResult] = useState<{area:number;perimeter:number}|null>(null);
  const calc = () => {
    const sv=parseFloat(s);
    if(isNaN(sv)) return;
    setResult({area:(sv*sv*Math.sqrt(25+10*Math.sqrt(5)))/4, perimeter:5*sv});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Side Length"><Input type="number" value={s} onChange={e=>setS(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Pentagon</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Area" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Perimeter" value={result.perimeter.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function HexagonCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'hexagon')!;
  const [s, setS] = useState("5");
  const [result, setResult] = useState<{area:number;perimeter:number}|null>(null);
  const calc = () => {
    const sv=parseFloat(s);
    if(isNaN(sv)) return;
    setResult({area:(3*Math.sqrt(3)/2)*sv*sv, perimeter:6*sv});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Side Length"><Input type="number" value={s} onChange={e=>setS(e.target.value)} /></Field>
        <CalcButton onClick={calc} className="w-full">Calculate Hexagon</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Area" value={result.area.toFixed(4)} highlight />
          <ResultBox label="Perimeter" value={result.perimeter.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function PyramidCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pyramid')!;
  const [base, setBase] = useState("4"); const [h, setH] = useState("6");
  const [result, setResult] = useState<{volume:number;slantHeight:number;lateralArea:number}|null>(null);
  const calc = () => {
    const bv=parseFloat(base), hv=parseFloat(h);
    if([bv,hv].some(isNaN)) return;
    const sl=Math.sqrt(hv*hv+(bv/2)*(bv/2));
    setResult({volume:(1/3)*bv*bv*hv, slantHeight:sl, lateralArea:2*bv*sl});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Base Side Length"><Input type="number" value={base} onChange={e=>setBase(e.target.value)} /></Field>
          <Field label="Height"><Input type="number" value={h} onChange={e=>setH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Pyramid</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Volume" value={result.volume.toFixed(4)} highlight />
          <ResultBox label="Lateral Surface Area" value={result.lateralArea.toFixed(4)} />
          <ResultBox label="Slant Height" value={result.slantHeight.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function EndpointCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'endpoint')!;
  const [x1,setX1]=useState("1");const [y1,setY1]=useState("2");
  const [mx,setMx]=useState("4");const [my,setMy]=useState("5");
  const [result, setResult] = useState<{x:number;y:number}|null>(null);
  const calc = () => {
    const x1v=parseFloat(x1),y1v=parseFloat(y1),mxv=parseFloat(mx),myv=parseFloat(my);
    if([x1v,y1v,mxv,myv].some(isNaN)) return;
    setResult({x:2*mxv-x1v, y:2*myv-y1v});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Known Endpoint (x1, y1)">
            <div className="flex gap-2">
              <Input type="number" value={x1} onChange={e=>setX1(e.target.value)} placeholder="x1" />
              <Input type="number" value={y1} onChange={e=>setY1(e.target.value)} placeholder="y1" />
            </div>
          </Field>
          <Field label="Midpoint (mx, my)">
            <div className="flex gap-2">
              <Input type="number" value={mx} onChange={e=>setMx(e.target.value)} placeholder="mx" />
              <Input type="number" value={my} onChange={e=>setMy(e.target.value)} placeholder="my" />
            </div>
          </Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Find Other Endpoint</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="x2" value={result.x.toFixed(4)} highlight />
          <ResultBox label="y2" value={result.y.toFixed(4)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}
