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

export function RandomDateGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-date')!;
  const [startDate, setStartDate] = useState("2020-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");
  const [count, setCount] = useState("5");
  const [result, setResult] = useState<string[]>([]);

  const generate = () => {
    const start = new Date(startDate).getTime(), end = new Date(endDate).getTime();
    if (isNaN(start) || isNaN(end) || start > end) return;
    const n = Math.min(parseInt(count) || 1, 20);
    const dates = Array.from({ length: n }, () => {
      const ts = start + Math.random() * (end - start);
      return new Date(ts).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    });
    setResult(dates);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start Date"><Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></Field>
          <Field label="End Date"><Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></Field>
        </div>
        <Field label="Count (max 20)"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="20" /></Field>
        <CalcButton onClick={generate} className="w-full">Generate Random Dates</CalcButton>
        {result.length > 0 && (
          <div className="space-y-2 mt-4">
            {result.map((d, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                <span className="text-xs font-bold text-primary w-5">{i + 1}</span>
                <span className="text-sm text-foreground">{d}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomTimeGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-time')!;
  const [count, setCount] = useState("5");
  const [format, setFormat] = useState("12h");
  const [result, setResult] = useState<string[]>([]);

  const generate = () => {
    const n = Math.min(parseInt(count) || 1, 20);
    const times = Array.from({ length: n }, () => {
      const totalMins = Math.floor(Math.random() * 1440);
      const h = Math.floor(totalMins / 60), m = totalMins % 60;
      if (format === '24h') return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const ampm = h < 12 ? 'AM' : 'PM';
      const h12 = h % 12 || 12;
      return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
    });
    setResult(times);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Count (max 20)"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="20" /></Field>
          <Field label="Format">
            <Select value={format} onChange={e => setFormat(e.target.value)}>
              <option value="12h">12-hour (AM/PM)</option>
              <option value="24h">24-hour</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={generate} className="w-full">Generate Random Times</CalcButton>
        {result.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {result.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-sm font-bold text-primary">{t}</span>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomDecimalGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-decimal')!;
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("1");
  const [decimals, setDecimals] = useState("4");
  const [count, setCount] = useState("6");
  const [result, setResult] = useState<number[]>([]);

  const generate = () => {
    const minV = parseFloat(min), maxV = parseFloat(max), d = parseInt(decimals);
    const n = Math.min(parseInt(count) || 1, 20);
    if (isNaN(minV) || isNaN(maxV) || minV >= maxV) return;
    setResult(Array.from({ length: n }, () => parseFloat((minV + Math.random() * (maxV - minV)).toFixed(d))));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Min"><Input type="number" value={min} onChange={e => setMin(e.target.value)} step="any" /></Field>
          <Field label="Max"><Input type="number" value={max} onChange={e => setMax(e.target.value)} step="any" /></Field>
          <Field label="Decimal Places"><Input type="number" value={decimals} onChange={e => setDecimals(e.target.value)} min="1" max="10" /></Field>
          <Field label="Count (max 20)"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="20" /></Field>
        </div>
        <CalcButton onClick={generate} className="w-full">Generate Decimals</CalcButton>
        {result.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {result.map((n, i) => (
              <span key={i} className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-sm font-mono font-bold text-primary">{n}</span>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomYesNoGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-yes-no')!;
  const [yesPct, setYesPct] = useState("50");
  const [result, setResult] = useState<{ answer: string; history: string[] }>({ answer: '', history: [] });

  const generate = () => {
    const pct = parseFloat(yesPct) / 100;
    const answer = Math.random() < pct ? 'YES' : 'NO';
    setResult(prev => ({ answer, history: [answer, ...prev.history].slice(0, 10) }));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label={`Yes Probability: ${yesPct}%`}>
          <input type="range" min="0" max="100" value={yesPct} onChange={e => setYesPct(e.target.value)}
            className="w-full accent-primary" />
        </Field>
        <CalcButton onClick={generate} className="w-full">Decide!</CalcButton>
        {result.answer && (
          <div className={`p-8 rounded-2xl text-center font-display font-black text-5xl
            ${result.answer === 'YES' ? 'bg-green-500/20 border-2 border-green-500 text-green-500' : 'bg-red-500/20 border-2 border-red-500 text-red-500'}`}>
            {result.answer}
          </div>
        )}
        {result.history.length > 1 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">History (last 10)</p>
            <div className="flex flex-wrap gap-1.5">
              {result.history.slice(1).map((h, i) => (
                <span key={i} className={`px-2 py-0.5 rounded text-xs font-bold ${h === 'YES' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>{h}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RandomLetterGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-letter')!;
  const [count, setCount] = useState("5");
  const [caseOpt, setCaseOpt] = useState("uppercase");
  const [unique, setUnique] = useState(false);
  const [result, setResult] = useState<string[]>([]);

  const generate = () => {
    const n = Math.min(parseInt(count) || 1, 26);
    const pool = (caseOpt === 'uppercase' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : caseOpt === 'lowercase' ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').split('');
    if (unique && n > pool.length) return;
    const letters: string[] = [];
    const available = [...pool];
    while (letters.length < n) {
      const idx = Math.floor(Math.random() * available.length);
      letters.push(available[idx]);
      if (unique) available.splice(idx, 1);
    }
    setResult(letters);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Count"><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="26" /></Field>
          <Field label="Case">
            <Select value={caseOpt} onChange={e => setCaseOpt(e.target.value)}>
              <option value="uppercase">Uppercase (A-Z)</option>
              <option value="lowercase">Lowercase (a-z)</option>
              <option value="mixed">Mixed</option>
            </Select>
          </Field>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={unique} onChange={e => setUnique(e.target.checked)} className="w-4 h-4 accent-primary" />
          <span className="text-sm text-muted-foreground">No duplicate letters</span>
        </label>
        <CalcButton onClick={generate} className="w-full">Generate Letters</CalcButton>
        {result.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {result.map((l, i) => (
              <span key={i} className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-black text-xl text-primary">{l}</span>
            ))}
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
