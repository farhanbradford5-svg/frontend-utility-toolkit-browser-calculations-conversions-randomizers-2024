import { useState } from "react";
import { ToolPage, Field, Input, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

const tool = ALL_TOOLS.find(t => t.slug === 'roi')!;

export function ROICalculator() {
  const [initial, setInitial] = useState("10000");
  const [gain, setGain] = useState("12500");
  const [result, setResult] = useState<{ roi: number; net: number; multiple: number } | null>(null);

  const calculate = () => {
    const i = parseFloat(initial);
    const g = parseFloat(gain);
    if (isNaN(i) || isNaN(g) || i === 0) return;
    const net = g - i;
    const roi = (net / i) * 100;
    const multiple = g / i;
    setResult({ roi, net, multiple });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Initial Investment ($)">
          <Input type="number" value={initial} onChange={e => setInitial(e.target.value)} placeholder="10000" />
        </Field>
        <Field label="Final Value / Total Gain ($)">
          <Input type="number" value={gain} onChange={e => setGain(e.target.value)} placeholder="12500" />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate ROI</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="ROI" value={result.roi.toFixed(2)} unit="%" highlight />
            <ResultBox label="Net Profit" value={`$${result.net.toFixed(2)}`} />
            <ResultBox label="Return Multiple" value={`${result.multiple.toFixed(2)}x`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">What is ROI?</h3>
        <p>Return on Investment (ROI) measures the efficiency or profitability of an investment as a percentage of the original cost.</p>
        <p><strong>Formula:</strong> ROI = (Net Profit / Initial Investment) × 100</p>
        <p>A positive ROI means the investment gained value; a negative ROI means it lost value.</p>
      </div>
    </ToolPage>
  );
}
