import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function FuelCostCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'fuel-cost')!;
  const [distance, setDistance] = useState("200");
  const [distUnit, setDistUnit] = useState("miles");
  const [mpg, setMpg] = useState("30");
  const [fuelPrice, setFuelPrice] = useState("3.50");
  const [result, setResult] = useState<{ gallons: number; cost: number } | null>(null);

  const calculate = () => {
    let dist = parseFloat(distance), efficiency = parseFloat(mpg), price = parseFloat(fuelPrice);
    if ([dist, efficiency, price].some(isNaN) || efficiency === 0) return;
    if (distUnit === 'km') dist = dist / 1.60934;
    const gallons = dist / efficiency;
    setResult({ gallons, cost: gallons * price });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Distance"><Input type="number" value={distance} onChange={e => setDistance(e.target.value)} /></Field>
          <Field label="Distance Unit">
            <Select value={distUnit} onChange={e => setDistUnit(e.target.value)}>
              <option value="miles">Miles</option>
              <option value="km">Kilometers</option>
            </Select>
          </Field>
          <Field label="Fuel Economy (MPG)"><Input type="number" value={mpg} onChange={e => setMpg(e.target.value)} /></Field>
          <Field label="Fuel Price ($/gallon)"><Input type="number" value={fuelPrice} onChange={e => setFuelPrice(e.target.value)} step="0.01" /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Fuel Cost</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Total Fuel Cost" value={`$${result.cost.toFixed(2)}`} highlight />
            <ResultBox label="Gallons Used" value={result.gallons.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function MPGCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'mpg')!;
  const [distance, setDistance] = useState("300");
  const [fuel, setFuel] = useState("10");
  const [unit, setUnit] = useState("mpg");
  const [result, setResult] = useState<{ mpg: number; L100: number } | null>(null);

  const calculate = () => {
    const d = parseFloat(distance), f = parseFloat(fuel);
    if (isNaN(d) || isNaN(f) || f === 0) return;
    const mpg = unit === 'mpg' ? d / f : (d / f) * 2.35215;
    const L100 = 235.215 / mpg;
    setResult({ mpg, L100 });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Fuel Economy Units">
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="mpg">MPG (miles per gallon)</option>
            <option value="km-L">km/L (kilometers per liter)</option>
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label={unit === 'mpg' ? 'Distance (miles)' : 'Distance (km)'}><Input type="number" value={distance} onChange={e => setDistance(e.target.value)} /></Field>
          <Field label={unit === 'mpg' ? 'Fuel Used (gallons)' : 'Fuel Used (liters)'}><Input type="number" value={fuel} onChange={e => setFuel(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate MPG</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="MPG" value={result.mpg.toFixed(2)} highlight />
            <ResultBox label="L/100km" value={result.L100.toFixed(2)} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function SpeedDistanceTimeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'speed-distance-time')!;
  const [solve, setSolve] = useState("speed");
  const [speed, setSpeed] = useState("60");
  const [distance, setDistance] = useState("120");
  const [time, setTime] = useState("2");
  const [result, setResult] = useState<{ label: string; value: string } | null>(null);

  const calculate = () => {
    const s = parseFloat(speed), d = parseFloat(distance), t = parseFloat(time);
    if (solve === 'speed') {
      if (isNaN(d) || isNaN(t) || t === 0) return;
      setResult({ label: 'Speed', value: `${(d / t).toFixed(4)} units/hr` });
    } else if (solve === 'distance') {
      if (isNaN(s) || isNaN(t)) return;
      setResult({ label: 'Distance', value: `${(s * t).toFixed(4)} units` });
    } else {
      if (isNaN(s) || isNaN(d) || s === 0) return;
      const hours = d / s;
      const h = Math.floor(hours), m = Math.round((hours % 1) * 60);
      setResult({ label: 'Time', value: `${(d / s).toFixed(4)} hours (${h}h ${m}m)` });
    }
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Solve for">
          <Select value={solve} onChange={e => setSolve(e.target.value)}>
            <option value="speed">Speed</option>
            <option value="distance">Distance</option>
            <option value="time">Time</option>
          </Select>
        </Field>
        {solve !== 'speed' && <Field label="Speed"><Input type="number" value={speed} onChange={e => setSpeed(e.target.value)} /></Field>}
        {solve !== 'distance' && <Field label="Distance"><Input type="number" value={distance} onChange={e => setDistance(e.target.value)} /></Field>}
        {solve !== 'time' && <Field label="Time (hours)"><Input type="number" value={time} onChange={e => setTime(e.target.value)} /></Field>}
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultBox label={result.label} value={result.value} highlight />}
      </div>
    </ToolPage>
  );
}

export function AverageSpeedCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'average-speed')!;
  const [legs, setLegs] = useState([
    { distance: '60', time: '1', speed: '' },
    { distance: '80', time: '1.5', speed: '' },
  ]);
  const [result, setResult] = useState<{ avgSpeed: number; totalDist: number; totalTime: number } | null>(null);

  const update = (i: number, field: string, val: string) => {
    setLegs(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };

  const calculate = () => {
    let totalDist = 0, totalTime = 0;
    legs.forEach(l => {
      const d = parseFloat(l.distance), t = parseFloat(l.time);
      if (!isNaN(d) && !isNaN(t) && t > 0) { totalDist += d; totalTime += t; }
    });
    if (totalTime === 0) return;
    setResult({ avgSpeed: totalDist / totalTime, totalDist, totalTime });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Distance</span>
            <span>Time (hours)</span>
          </div>
          {legs.map((l, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <Input type="number" value={l.distance} onChange={e => update(i, 'distance', e.target.value)} placeholder="km or miles" />
              <Input type="number" value={l.time} onChange={e => update(i, 'time', e.target.value)} placeholder="hours" />
            </div>
          ))}
          <button onClick={() => setLegs(p => [...p, { distance: '', time: '', speed: '' }])}
            className="text-sm text-primary hover:text-primary/80 transition-colors">+ Add leg</button>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Average Speed</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Average Speed" value={`${result.avgSpeed.toFixed(2)} units/hr`} highlight />
            <ResultBox label="Total Distance" value={result.totalDist.toFixed(2)} />
            <ResultBox label="Total Time" value={`${result.totalTime.toFixed(2)} hr`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CarLoanCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'car-loan')!;
  const [price, setPrice] = useState("25000"); const [down, setDown] = useState("5000");
  const [rate, setRate] = useState("5.9"); const [months, setMonths] = useState("60");
  const [result, setResult] = useState<{monthly:number;total:number;interest:number}|null>(null);
  const calc = () => {
    const P=parseFloat(price)-parseFloat(down), r=parseFloat(rate)/100/12, n=parseFloat(months);
    if([P,r,n].some(isNaN)||r===0) return;
    const monthly=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    setResult({monthly, total:monthly*n, interest:monthly*n-P});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Car Price ($)"><Input type="number" value={price} onChange={e=>setPrice(e.target.value)} /></Field>
          <Field label="Down Payment ($)"><Input type="number" value={down} onChange={e=>setDown(e.target.value)} /></Field>
          <Field label="Interest Rate (%)"><Input type="number" value={rate} onChange={e=>setRate(e.target.value)} step="0.1" /></Field>
          <Field label="Loan Term (months)"><Input type="number" value={months} onChange={e=>setMonths(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Car Loan</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Monthly Payment" value={`$${result.monthly.toFixed(2)}`} highlight />
          <ResultBox label="Total Cost" value={`$${result.total.toFixed(2)}`} />
          <ResultBox label="Total Interest" value={`$${result.interest.toFixed(2)}`} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function TripCostCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'trip-cost')!;
  const [dist, setDist] = useState("500"); const [mpg, setMpg] = useState("30"); const [gas, setGas] = useState("3.50"); const [people, setPeople] = useState("2");
  const [result, setResult] = useState<{totalCost:number;perPerson:number;gallons:number}|null>(null);
  const calc = () => {
    const d=parseFloat(dist), m=parseFloat(mpg), g=parseFloat(gas), p=parseFloat(people)||1;
    if([d,m,g].some(isNaN)||m===0) return;
    const gallons=d/m, totalCost=gallons*g;
    setResult({totalCost, perPerson:totalCost/p, gallons});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Distance (miles)"><Input type="number" value={dist} onChange={e=>setDist(e.target.value)} /></Field>
          <Field label="Fuel Economy (MPG)"><Input type="number" value={mpg} onChange={e=>setMpg(e.target.value)} /></Field>
          <Field label="Gas Price ($/gal)"><Input type="number" value={gas} onChange={e=>setGas(e.target.value)} step="0.01" /></Field>
          <Field label="Number of People"><Input type="number" value={people} onChange={e=>setPeople(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Trip Cost</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Total Fuel Cost" value={`$${result.totalCost.toFixed(2)}`} highlight />
          <ResultBox label="Per Person" value={`$${result.perPerson.toFixed(2)}`} />
          <ResultBox label="Gallons Used" value={result.gallons.toFixed(2)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function ElectricCarCostCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'ev-cost')!;
  const [dist, setDist] = useState("15000"); const [efficiency, setEfficiency] = useState("3.5"); const [rate, setRate] = useState("0.13");
  const [result, setResult] = useState<{annual:number;monthly:number}|null>(null);
  const calc = () => {
    const d=parseFloat(dist), e=parseFloat(efficiency), r=parseFloat(rate);
    if([d,e,r].some(isNaN)||e===0) return;
    const annual=(d/e)*r;
    setResult({annual, monthly:annual/12});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Annual Miles Driven"><Input type="number" value={dist} onChange={e=>setDist(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Efficiency (miles/kWh)"><Input type="number" value={efficiency} onChange={e=>setEfficiency(e.target.value)} step="0.1" /></Field>
          <Field label="Electricity Rate ($/kWh)"><Input type="number" value={rate} onChange={e=>setRate(e.target.value)} step="0.01" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate EV Cost</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Annual Cost" value={`$${result.annual.toFixed(2)}`} highlight />
          <ResultBox label="Monthly Cost" value={`$${result.monthly.toFixed(2)}`} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}
