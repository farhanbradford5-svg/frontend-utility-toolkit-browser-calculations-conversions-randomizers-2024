import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function DownloadTimeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'download-time')!;
  const [fileSize, setFileSize] = useState("1");
  const [fileSizeUnit, setFileSizeUnit] = useState("GB");
  const [speed, setSpeed] = useState("100");
  const [speedUnit, setSpeedUnit] = useState("Mbps");
  const [result, setResult] = useState<{ seconds: number; formatted: string } | null>(null);

  const toBytes: Record<string, number> = {
    B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4,
  };
  const toBps: Record<string, number> = {
    Kbps: 1000 / 8, Mbps: 1000000 / 8, Gbps: 1000000000 / 8,
  };

  const calculate = () => {
    const size = parseFloat(fileSize) * toBytes[fileSizeUnit];
    const bps = parseFloat(speed) * toBps[speedUnit];
    if (isNaN(size) || isNaN(bps) || bps === 0) return;
    const seconds = size / bps;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const formatted = h > 0 ? `${h}h ${m}m ${s}s` : m > 0 ? `${m}m ${s}s` : `${s}s`;
    setResult({ seconds, formatted });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="File Size"><Input type="number" value={fileSize} onChange={e => setFileSize(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={fileSizeUnit} onChange={e => setFileSizeUnit(e.target.value)}>
              {['B', 'KB', 'MB', 'GB', 'TB'].map(u => <option key={u} value={u}>{u}</option>)}
            </Select>
          </Field>
          <Field label="Connection Speed"><Input type="number" value={speed} onChange={e => setSpeed(e.target.value)} /></Field>
          <Field label="Speed Unit">
            <Select value={speedUnit} onChange={e => setSpeedUnit(e.target.value)}>
              {['Kbps', 'Mbps', 'Gbps'].map(u => <option key={u} value={u}>{u}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Download Time</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Download Time" value={result.formatted} highlight />
            <ResultBox label="Total Seconds" value={Math.round(result.seconds).toLocaleString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function RAIDCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'raid')!;
  const [level, setLevel] = useState("RAID5");
  const [disks, setDisks] = useState("4");
  const [diskSize, setDiskSize] = useState("4");
  const [result, setResult] = useState<{ usable: number; overhead: number; efficiency: number } | null>(null);

  const calculate = () => {
    const n = parseInt(disks), size = parseFloat(diskSize);
    if (isNaN(n) || isNaN(size) || n < 1) return;
    const total = n * size;
    let usable: number;
    switch (level) {
      case 'RAID0': usable = total; break;
      case 'RAID1': usable = size; break;
      case 'RAID5': usable = (n - 1) * size; break;
      case 'RAID6': usable = (n - 2) * size; break;
      case 'RAID10': usable = total / 2; break;
      default: usable = total;
    }
    setResult({ usable, overhead: total - usable, efficiency: (usable / total) * 100 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="RAID Level">
          <Select value={level} onChange={e => setLevel(e.target.value)}>
            <option value="RAID0">RAID 0 (Striping — no redundancy)</option>
            <option value="RAID1">RAID 1 (Mirroring — 2 disks)</option>
            <option value="RAID5">RAID 5 (Striping + 1 parity — min 3 disks)</option>
            <option value="RAID6">RAID 6 (Striping + 2 parity — min 4 disks)</option>
            <option value="RAID10">RAID 10 (Mirror + Stripe — min 4 disks)</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Number of Drives"><Input type="number" value={disks} onChange={e => setDisks(e.target.value)} min="1" /></Field>
          <Field label="Drive Size (TB)"><Input type="number" value={diskSize} onChange={e => setDiskSize(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate RAID</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Usable Storage" value={`${result.usable.toFixed(2)} TB`} highlight />
            <ResultBox label="Total Capacity" value={`${(parseInt(disks) * parseFloat(diskSize)).toFixed(2)} TB`} />
            <ResultBox label="Overhead" value={`${result.overhead.toFixed(2)} TB`} />
            <ResultBox label="Efficiency" value={`${result.efficiency.toFixed(1)}%`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

// ─── NEW DATA / TECH TOOLS ─────────────────────────────────────────────────

export function InternetSpeedCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'internet-speed')!;
  const [value, setValue] = useState("100");
  const [fromUnit, setFromUnit] = useState("Mbps");
  const [result, setResult] = useState<{kbps:number;mbps:number;gbps:number;MBps:number;KBps:number}|null>(null);

  const toBitsPerSec: Record<string,number> = {
    'bps':1,'Kbps':1e3,'Mbps':1e6,'Gbps':1e9,
    'KBps':8e3,'MBps':8e6,'GBps':8e9,
  };

  const convert = () => {
    const bps = (parseFloat(value)||0) * (toBitsPerSec[fromUnit]||1);
    setResult({ kbps:bps/1e3, mbps:bps/1e6, gbps:bps/1e9, MBps:bps/8e6, KBps:bps/8e3 });
  };

  const fmt = (n:number) => n >= 1 ? n.toFixed(3) : n.toExponential(2);
  return (
    <ToolPage tool={tool} relatedSlugs={['download-time','bits-bytes-converter','data-storage','pixel-density','aspect-ratio']}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Speed Value"><Input type="number" value={value} onChange={e=>setValue(e.target.value)} /></Field>
          <Field label="Unit">
            <Select value={fromUnit} onChange={e=>setFromUnit(e.target.value)}>
              {['bps','Kbps','Mbps','Gbps','KBps','MBps','GBps'].map(u=><option key={u} value={u}>{u}</option>)}
            </Select>
          </Field>
        </div>
        <CalcButton onClick={convert} className="w-full">Convert Speed</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Kbps" value={fmt(result.kbps)} />
          <ResultBox label="Mbps" value={fmt(result.mbps)} highlight />
          <ResultBox label="Gbps" value={fmt(result.gbps)} />
          <ResultBox label="KB/s" value={fmt(result.KBps)} />
          <ResultBox label="MB/s" value={fmt(result.MBps)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">lowercase b = bits, uppercase B = bytes. 1 byte = 8 bits. ISPs advertise in Mbps (megabits), while download speeds show in MB/s (megabytes).</div>
    </ToolPage>
  );
}

export function ScreenSizeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'screen-size')!;
  const [diagonal, setDiagonal] = useState("27");
  const [arW, setArW] = useState("16");
  const [arH, setArH] = useState("9");
  const [result, setResult] = useState<{width:number;height:number;area:number}|null>(null);

  const calculate = () => {
    const d = parseFloat(diagonal)||0, rw = parseFloat(arW)||16, rh = parseFloat(arH)||9;
    const ratio = Math.sqrt(d*d / (rw*rw + rh*rh));
    const width = rw * ratio, height = rh * ratio;
    setResult({ width, height, area: width*height });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['aspect-ratio','pixel-density','internet-speed','download-time','bits-bytes-converter']}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Field label="Diagonal Size (inches)"><Input type="number" value={diagonal} step="0.1" onChange={e=>setDiagonal(e.target.value)} /></Field>
          <Field label="Aspect Ratio Width"><Input type="number" value={arW} onChange={e=>setArW(e.target.value)} /></Field>
          <Field label="Aspect Ratio Height"><Input type="number" value={arH} onChange={e=>setArH(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Screen Size</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Width" value={`${result.width.toFixed(2)} in`} highlight />
          <ResultBox label="Height" value={`${result.height.toFixed(2)} in`} />
          <ResultBox label="Screen Area" value={`${result.area.toFixed(2)} sq in`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Screen dimensions calculated from diagonal and aspect ratio using Pythagorean theorem. Aspect ratio 16:9 is standard widescreen.</div>
    </ToolPage>
  );
}

export function AspectRatioCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'aspect-ratio')!;
  const [mode, setMode] = useState("simplify");
  const [w1, setW1] = useState("1920");
  const [h1, setH1] = useState("1080");
  const [w2, setW2] = useState("1280");
  const [result, setResult] = useState<string[]|null>(null);

  const gcd = (a:number,b:number): number => b===0?a:gcd(b,a%b);

  const calculate = () => {
    const W = parseInt(w1)||0, H = parseInt(h1)||0;
    if (mode==='simplify') {
      const g = gcd(W,H);
      setResult([`Simplified: ${W/g}:${H/g}`, `Decimal: ${(W/H).toFixed(4)}`, `As percentage: ${((W/H)*100).toFixed(2)}%`]);
    } else if (mode==='scale') {
      const W2 = parseInt(w2)||0;
      const H2 = Math.round(W2 * H/W);
      setResult([`New Height: ${H2}px`, `Scale: ${(W2/W*100).toFixed(1)}%`, `New Size: ${W2}×${H2}`]);
    } else {
      const common = ['4:3','16:9','16:10','21:9','3:2','1:1','2:1','5:4'];
      const ratio = W/H;
      const closest = common.reduce((a,b) => {
        const [bw,bh] = b.split(':').map(Number);
        const [aw,ah] = a.split(':').map(Number);
        return Math.abs(bw/bh-ratio) < Math.abs(aw/ah-ratio) ? b : a;
      });
      setResult([`Closest standard: ${closest}`, `Exact ratio: ${(ratio).toFixed(4)}`, `${W}×${H}`]);
    }
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['screen-size','pixel-density','internet-speed','download-time']}>
      <div className="space-y-4">
        <Field label="Mode">
          <Select value={mode} onChange={e=>setMode(e.target.value)}>
            <option value="simplify">Simplify Ratio</option>
            <option value="scale">Scale to New Width</option>
            <option value="match">Find Closest Standard</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Field label="Width (px)"><Input type="number" value={w1} onChange={e=>setW1(e.target.value)} /></Field>
          <Field label="Height (px)"><Input type="number" value={h1} onChange={e=>setH1(e.target.value)} /></Field>
          {mode==='scale' && <Field label="New Width (px)"><Input type="number" value={w2} onChange={e=>setW2(e.target.value)} /></Field>}
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <div className="space-y-2 mt-2">
          {result.map((r,i)=><div key={i} className={`bg-secondary rounded-xl px-4 py-3 text-sm font-medium text-center ${i===0?'text-primary text-base font-semibold':''}`}>{r}</div>)}
        </div>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Aspect ratio is the proportional relationship between width and height. Common ratios: 16:9 (widescreen), 4:3 (classic), 1:1 (square).</div>
    </ToolPage>
  );
}

export function PixelDensityCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pixel-density')!;
  const [resW, setResW] = useState("2560");
  const [resH, setResH] = useState("1440");
  const [screenSize, setScreenSize] = useState("27");
  const [result, setResult] = useState<{ppi:number;rating:string;dp:number}|null>(null);

  const calculate = () => {
    const W = parseFloat(resW)||0, H = parseFloat(resH)||0, S = parseFloat(screenSize)||1;
    const diagPx = Math.sqrt(W*W + H*H);
    const ppi = diagPx / S;
    const rating = ppi < 72 ? 'Low' : ppi < 100 ? 'Standard' : ppi < 150 ? 'Good' : ppi < 220 ? 'High' : 'Retina/HiDPI';
    const dp = ppi / 160;
    setResult({ ppi, rating, dp });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['screen-size','aspect-ratio','internet-speed','download-time']}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Field label="Width (px)"><Input type="number" value={resW} onChange={e=>setResW(e.target.value)} /></Field>
          <Field label="Height (px)"><Input type="number" value={resH} onChange={e=>setResH(e.target.value)} /></Field>
          <Field label="Screen Diagonal (in)"><Input type="number" value={screenSize} step="0.1" onChange={e=>setScreenSize(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate PPI</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Pixel Density (PPI)" value={`${result.ppi.toFixed(1)} PPI`} highlight />
          <ResultBox label="Display Quality" value={result.rating} />
          <ResultBox label="Density (dp ratio)" value={result.dp.toFixed(2)} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">PPI = sqrt(W²+H²) / diagonal. Retina displays typically exceed 220 PPI. Human eye cannot distinguish pixels above ~300 PPI at normal viewing distance.</div>
    </ToolPage>
  );
}

// ─── TEXT & NUMBER UTILITIES ───────────────────────────────────────────────

export function NumberToWordsConverter() {
  const tool = ALL_TOOLS.find(t => t.slug === 'number-to-words')!;
  const [num, setNum] = useState("1234567");
  const [result, setResult] = useState<string|null>(null);

  const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  const toWords = (n:number): string => {
    if (n === 0) return 'zero';
    if (n < 0) return 'negative ' + toWords(-n);
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n/10)] + (n%10?' '+ones[n%10]:'');
    if (n < 1000) return ones[Math.floor(n/100)] + ' hundred' + (n%100?' '+toWords(n%100):'');
    if (n < 1e6) return toWords(Math.floor(n/1000)) + ' thousand' + (n%1000?' '+toWords(n%1000):'');
    if (n < 1e9) return toWords(Math.floor(n/1e6)) + ' million' + (n%1e6?' '+toWords(n%1e6):'');
    if (n < 1e12) return toWords(Math.floor(n/1e9)) + ' billion' + (n%1e9?' '+toWords(n%1e9):'');
    return toWords(Math.floor(n/1e12)) + ' trillion' + (n%1e12?' '+toWords(n%1e12):'');
  };

  const convert = () => {
    const n = parseInt(num.replace(/,/g,''));
    if (isNaN(n)) return;
    setResult(toWords(Math.abs(n)));
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['roman-numerals','decimal-to-binary','bits-bytes-converter','download-time']}>
      <div className="space-y-4">
        <Field label="Enter a Number"><Input type="text" value={num} onChange={e=>setNum(e.target.value)} placeholder="e.g. 1234567" /></Field>
        <CalcButton onClick={convert} className="w-full">Convert to Words</CalcButton>
        {result !== null && (
          <div className="bg-secondary rounded-xl p-4 text-center">
            <p className="text-lg font-semibold text-foreground capitalize">{result}</p>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Converts integers up to trillions to English words. Used for writing checks, formal documents, and accessibility.</div>
    </ToolPage>
  );
}

export function RandomStringGenerator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'random-string')!;
  const [length, setLength] = useState("16");
  const [type, setType] = useState("alphanumeric");
  const [count, setCount] = useState("5");
  const [results, setResults] = useState<string[]|null>(null);

  const CHARSETS: Record<string,string> = {
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    hex: '0123456789abcdef',
    symbols: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
    uuid: 'uuid',
  };

  const genUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
    const r=Math.random()*16|0;return(c==='x'?r:r&0x3|0x8).toString(16);
  });

  const generate = () => {
    const len = parseInt(length)||16, n = Math.min(parseInt(count)||5,50);
    const charset = CHARSETS[type];
    const strings = Array.from({length:n},()=>{
      if (type==='uuid') return genUUID();
      return Array.from({length:len},()=>charset[Math.floor(Math.random()*charset.length)]).join('');
    });
    setResults(strings);
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['number-to-words','download-time','bits-bytes-converter','data-storage']}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Length"><Input type="number" value={length} min="1" max="256" onChange={e=>setLength(e.target.value)} /></Field>
          <Field label="Character Set">
            <Select value={type} onChange={e=>setType(e.target.value)}>
              <option value="alphanumeric">Alphanumeric</option>
              <option value="lowercase">Lowercase</option>
              <option value="uppercase">Uppercase</option>
              <option value="numeric">Numeric</option>
              <option value="hex">Hex</option>
              <option value="symbols">With Symbols</option>
              <option value="uuid">UUID v4</option>
            </Select>
          </Field>
          <Field label="Count"><Input type="number" value={count} min="1" max="50" onChange={e=>setCount(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={generate} className="w-full">Generate Strings</CalcButton>
        {results && (
          <div className="space-y-1.5">
            {results.map((s,i)=>(
              <div key={i} className="bg-secondary rounded-lg px-3 py-2 text-sm font-mono text-foreground break-all">{s}</div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Uses Math.random() for client-side generation. For cryptographic purposes, use the Web Crypto API or a server-side generator.</div>
    </ToolPage>
  );
}

export function CharacterCounterTool() {
  const tool = ALL_TOOLS.find(t => t.slug === 'character-counter')!;
  const [text, setText] = useState("");
  const [result, setResult] = useState<{chars:number;noSpaces:number;words:number;sentences:number;paragraphs:number;lines:number;readTime:string}|null>(null);

  const analyze = (t:string) => {
    const chars = t.length;
    const noSpaces = t.replace(/\s/g,'').length;
    const words = t.trim() ? t.trim().split(/\s+/).length : 0;
    const sentences = t.split(/[.!?]+/).filter(s=>s.trim().length>0).length;
    const paragraphs = t.split(/\n\n+/).filter(p=>p.trim().length>0).length || (t.trim()?1:0);
    const lines = t.split('\n').length;
    const readMinutes = words / 200;
    const readTime = readMinutes < 1 ? `${Math.ceil(readMinutes*60)} sec` : `${Math.ceil(readMinutes)} min`;
    setResult({ chars, noSpaces, words, sentences, paragraphs, lines, readTime });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['number-to-words','random-string','download-time','data-storage']}>
      <div className="space-y-4">
        <Field label="Enter Text">
          <textarea
            className="w-full min-h-[150px] rounded-xl border border-input bg-background px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
            value={text}
            onChange={e=>{setText(e.target.value);analyze(e.target.value);}}
            placeholder="Type or paste your text here..."
          />
        </Field>
        {result && (
          <ResultGrid>
            <ResultBox label="Characters" value={`${result.chars.toLocaleString()}`} highlight />
            <ResultBox label="No Spaces" value={`${result.noSpaces.toLocaleString()}`} />
            <ResultBox label="Words" value={`${result.words.toLocaleString()}`} />
            <ResultBox label="Sentences" value={`${result.sentences}`} />
            <ResultBox label="Paragraphs" value={`${result.paragraphs}`} />
            <ResultBox label="Read Time" value={result.readTime} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Real-time analysis. Read time estimated at 200 words per minute (average adult reading speed).</div>
    </ToolPage>
  );
}
