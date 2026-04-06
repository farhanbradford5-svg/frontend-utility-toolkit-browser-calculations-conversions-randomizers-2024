import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function RandomNumberGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-number')!;
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [result, setResult] = useState<number[] | null>(null);

  const generate = () => {
    const minV = parseInt(min), maxV = parseInt(max), countV = parseInt(count);
    if (isNaN(minV) || isNaN(maxV) || isNaN(countV) || minV >= maxV) return;
    const nums: number[] = [];
    const range = maxV - minV + 1;
    if (unique && countV > range) return;
    while (nums.length < Math.min(countV, 1000)) {
      const n = Math.floor(Math.random() * range) + minV;
      if (!unique || !nums.includes(n)) nums.push(n);
    }
    setResult(nums);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Minimum"><Input type="number" value={min} onChange={e => setMin(e.target.value)} /></Field>
          <Field label="Maximum"><Input type="number" value={max} onChange={e => setMax(e.target.value)} /></Field>
          <Field label="Count"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="100" /></Field>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={unique} onChange={e => setUnique(e.target.checked)} className="w-4 h-4 accent-primary" />
          <span className="text-sm text-muted-foreground">No duplicate numbers</span>
        </label>
        <CalcButton onClick={generate} className="w-full">Generate Numbers</CalcButton>
        {result && (
          <div className="p-4 bg-secondary rounded-xl mt-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Generated Numbers</p>
            <div className="flex flex-wrap gap-2">
              {result.map((n, i) => (
                <span key={i} className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-sm font-bold text-primary">
                  {n}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomPasswordGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-password')!;
  const [length, setLength] = useState("16");
  const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [result, setResult] = useState<string[]>([]);
  const [copied, setCopied] = useState(-1);

  const generate = () => {
    const len = parseInt(length);
    if (isNaN(len) || len < 4) return;
    let chars = '';
    if (opts.upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (opts.lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (opts.numbers) chars += '0123456789';
    if (opts.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) return;
    const passwords = Array.from({ length: 5 }, () =>
      Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    );
    setResult(passwords);
  };

  const copy = async (i: number) => {
    await navigator.clipboard.writeText(result[i]);
    setCopied(i);
    setTimeout(() => setCopied(-1), 2000);
  };

  const getStrength = (len: number, optCount: number) => {
    const score = len / 8 + optCount;
    return score >= 5 ? 'Very Strong' : score >= 4 ? 'Strong' : score >= 3 ? 'Good' : 'Weak';
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label={`Password Length: ${length}`}>
          <input type="range" min="8" max="64" value={length} onChange={e => setLength(e.target.value)}
            className="w-full accent-primary" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'upper', label: 'Uppercase (A-Z)' },
            { key: 'lower', label: 'Lowercase (a-z)' },
            { key: 'numbers', label: 'Numbers (0-9)' },
            { key: 'symbols', label: 'Symbols (!@#$…)' },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={opts[key as keyof typeof opts]}
                onChange={e => setOpts(prev => ({ ...prev, [key]: e.target.checked }))}
                className="w-4 h-4 accent-primary" />
              <span className="text-sm text-foreground">{label}</span>
            </label>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground">Strength:</div>
          <div className={`text-xs font-bold ${getStrength(parseInt(length), Object.values(opts).filter(Boolean).length).includes('Strong') ? 'text-green-500' : 'text-orange-500'}`}>
            {getStrength(parseInt(length), Object.values(opts).filter(Boolean).length)}
          </div>
        </div>
        <CalcButton onClick={generate} className="w-full">Generate Passwords</CalcButton>
        {result.length > 0 && (
          <div className="space-y-2 mt-4">
            {result.map((pwd, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-xl gap-2">
                <span className="font-mono text-sm text-foreground break-all">{pwd}</span>
                <button onClick={() => copy(i)} className="shrink-0 text-xs text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
                  {copied === i ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomColorGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-color')!;
  const [result, setResult] = useState<{ hex: string; rgb: [number, number, number]; hsl: [number, number, number] }[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = () => {
    const colors = Array.from({ length: 6 }, () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rn = r / 255, gn = g / 255, bn = b / 255;
      const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
      const l = (max + min) / 2;
      let h = 0, s = 0;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        else if (max === gn) h = ((bn - rn) / d + 2) / 6;
        else h = ((rn - gn) / d + 4) / 6;
      }
      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
      return { hex, rgb: [r, g, b] as [number, number, number], hsl: [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)] as [number, number, number] };
    });
    setResult(colors);
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <CalcButton onClick={generate} className="w-full">Generate Random Colors</CalcButton>
        {result.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            {result.map((c, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border">
                <div className="h-20 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-2 bg-card space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold">{c.hex}</span>
                    <button onClick={() => copy(c.hex)} className="text-xs text-primary hover:text-primary/80">
                      {copied === c.hex ? '✓' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">rgb({c.rgb.join(', ')})</p>
                  <p className="text-xs text-muted-foreground">hsl({c.hsl.join(', ')}%)</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function ListRandomizer() {
  const tool = ALL_TOOLS.find(t => t.slug === 'list-randomizer')!;
  const [input, setInput] = useState("Alice\nBob\nCharlie\nDiana\nEvan");
  const [result, setResult] = useState<string[]>([]);

  const shuffle = () => {
    const items = input.split('\n').map(s => s.trim()).filter(Boolean);
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setResult(shuffled);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Items (one per line)">
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={6}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={shuffle} className="w-full">Shuffle List</CalcButton>
        {result.length > 0 && (
          <div className="space-y-2 mt-4">
            <p className="text-sm font-medium text-foreground">Shuffled order:</p>
            {result.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === 0 ? 'bg-primary/10 border border-primary/20' : 'bg-secondary'}`}>
                <span className={`text-xs font-bold w-6 text-center ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{i + 1}</span>
                <span className={`text-sm font-medium ${i === 0 ? 'text-primary' : 'text-foreground'}`}>{item}</span>
                {i === 0 && <span className="ml-auto text-xs text-primary font-medium">First</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function DiceRoller() {
  const tool = ALL_TOOLS.find(t => t.slug === 'dice-roller')!;
  const [diceType, setDiceType] = useState("6");
  const [count, setCount] = useState("2");
  const [result, setResult] = useState<{ rolls: number[]; total: number } | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      const sides = parseInt(diceType), n = parseInt(count);
      if (isNaN(sides) || isNaN(n) || n < 1) { setRolling(false); return; }
      const rolls = Array.from({ length: Math.min(n, 20) }, () => Math.floor(Math.random() * sides) + 1);
      setResult({ rolls, total: rolls.reduce((s, v) => s + v, 0) });
      setRolling(false);
    }, 400);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {[4, 6, 8, 10, 12, 20, 100].map(d => (
            <button key={d} onClick={() => setDiceType(d.toString())}
              className={`px-4 py-2 rounded-lg border text-sm font-bold transition-colors ${diceType === d.toString() ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary border-border hover:border-primary/40'}`}>
              d{d}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Dice Type (sides)"><Input type="number" value={diceType} onChange={e => setDiceType(e.target.value)} min="2" /></Field>
          <Field label="Number of Dice"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="20" /></Field>
        </div>
        <CalcButton onClick={roll} className="w-full" disabled={rolling}>
          {rolling ? 'Rolling…' : `Roll ${count}d${diceType}`}
        </CalcButton>
        {result && (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {result.rolls.map((r, i) => (
                <div key={i} className={`h-14 w-14 rounded-xl border-2 flex items-center justify-center font-display font-bold text-lg
                  ${r === parseInt(diceType) ? 'bg-primary/20 border-primary text-primary' : 'bg-secondary border-border text-foreground'}`}>
                  {r}
                </div>
              ))}
            </div>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-1">Total</p>
              <p className="font-display font-bold text-3xl text-primary">{result.total}</p>
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function NamePicker() {
  const tool = ALL_TOOLS.find(t => t.slug === 'name-picker')!;
  const [names, setNames] = useState("Alice\nBob\nCharlie\nDiana\nEvan\nFrank");
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [remaining, setRemaining] = useState<string[]>([]);

  const pickName = () => {
    const nameList = names.split('\n').map(s => s.trim()).filter(Boolean);
    const pool = remaining.length > 0 ? remaining : [...nameList];
    if (pool.length === 0) return;
    const idx = Math.floor(Math.random() * pool.length);
    const picked = pool[idx];
    const newPool = pool.filter((_, i) => i !== idx);
    setResult(picked);
    setHistory(prev => [picked, ...prev]);
    setRemaining(newPool);
  };

  const reset = () => {
    setRemaining([]);
    setResult(null);
    setHistory([]);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Names (one per line)">
          <textarea value={names} onChange={e => { setNames(e.target.value); reset(); }} rows={5}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <div className="flex gap-2">
          <CalcButton onClick={pickName} className="flex-1">Pick a Name</CalcButton>
          <button onClick={reset} className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-secondary transition-colors">Reset</button>
        </div>
        {result && (
          <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <p className="text-xs text-muted-foreground mb-2">Selected</p>
            <p className="font-display font-bold text-3xl text-primary">{result}</p>
          </div>
        )}
        {history.length > 1 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Previous picks</p>
            <div className="flex flex-wrap gap-2">
              {history.slice(1).map((n, i) => (
                <span key={i} className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground line-through">{n}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function TeamGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'team-generator')!;
  const [players, setPlayers] = useState("Alice\nBob\nCharlie\nDiana\nEvan\nFrank\nGrace\nHenry");
  const [numTeams, setNumTeams] = useState("2");
  const [result, setResult] = useState<string[][] | null>(null);

  const generate = () => {
    const playerList = players.split('\n').map(s => s.trim()).filter(Boolean);
    const n = parseInt(numTeams);
    if (isNaN(n) || n < 2 || n > playerList.length) return;
    const shuffled = [...playerList].sort(() => Math.random() - 0.5);
    const teams: string[][] = Array.from({ length: n }, () => []);
    shuffled.forEach((p, i) => teams[i % n].push(p));
    setResult(teams);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Players (one per line)">
          <textarea value={players} onChange={e => setPlayers(e.target.value)} rows={5}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <Field label="Number of Teams">
          <Input type="number" value={numTeams} onChange={e => setNumTeams(e.target.value)} min="2" />
        </Field>
        <CalcButton onClick={generate} className="w-full">Generate Teams</CalcButton>
        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {result.map((team, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm font-bold text-primary mb-2">Team {i + 1}</p>
                <ul className="space-y-1">
                  {team.map((p, j) => (
                    <li key={j} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}
