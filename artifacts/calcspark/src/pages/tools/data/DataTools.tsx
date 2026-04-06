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
