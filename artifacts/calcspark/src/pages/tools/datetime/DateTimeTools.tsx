import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function DaysBetweenDatesCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'days-between-dates')!;
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<{ days: number; weeks: number; months: number } | null>(null);

  const calculate = () => {
    if (!date1 || !date2) return;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const ms = Math.abs(d2.getTime() - d1.getTime());
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    setResult({ days, weeks: Math.floor(days / 7), months: Math.floor(days / 30.44) });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start Date">
            <Input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
          </Field>
          <Field label="End Date">
            <Input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Days</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Days" value={result.days.toLocaleString()} highlight />
            <ResultBox label="Weeks" value={result.weeks.toLocaleString()} />
            <ResultBox label="Approx. Months" value={result.months.toLocaleString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function AgeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'age')!;
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number; nextBirthday: number } | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (next <= now) next.setFullYear(next.getFullYear() + 1);
    const nextBirthday = Math.ceil((next.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    setResult({ years, months, days, nextBirthday });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Date of Birth">
          <Input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Age</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Age" value={`${result.years} years`} highlight />
            <ResultBox label="Months" value={result.months.toString()} />
            <ResultBox label="Days" value={result.days.toString()} />
            <ResultBox label="Next Birthday In" value={`${result.nextBirthday} days`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function HoursCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'hours-calculator')!;
  const [time1, setTime1] = useState("09:00");
  const [time2, setTime2] = useState("17:30");
  const [result, setResult] = useState<{ hours: number; minutes: number; totalMinutes: number } | null>(null);

  const calculate = () => {
    if (!time1 || !time2) return;
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);
    let total = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (total < 0) total += 24 * 60;
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    setResult({ hours, minutes, totalMinutes: total });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start Time">
            <Input type="time" value={time1} onChange={e => setTime1(e.target.value)} />
          </Field>
          <Field label="End Time">
            <Input type="time" value={time2} onChange={e => setTime2(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Hours</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Duration" value={`${result.hours}h ${result.minutes}m`} highlight />
            <ResultBox label="Total Minutes" value={result.totalMinutes.toString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function DateDurationCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'date-duration')!;
  const [date, setDate] = useState("");
  const [op, setOp] = useState("add");
  const [d, setD] = useState("0");
  const [m, setM] = useState("0");
  const [y, setY] = useState("0");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!date) return;
    const dt = new Date(date);
    const sign = op === 'add' ? 1 : -1;
    dt.setFullYear(dt.getFullYear() + sign * parseInt(y || '0'));
    dt.setMonth(dt.getMonth() + sign * parseInt(m || '0'));
    dt.setDate(dt.getDate() + sign * parseInt(d || '0'));
    setResult(dt.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Starting Date">
          <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </Field>
        <Field label="Operation">
          <Select value={op} onChange={e => setOp(e.target.value)}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Years"><Input type="number" value={y} onChange={e => setY(e.target.value)} /></Field>
          <Field label="Months"><Input type="number" value={m} onChange={e => setM(e.target.value)} /></Field>
          <Field label="Days"><Input type="number" value={d} onChange={e => setD(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Date</CalcButton>
        {result && (
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="text-xs text-muted-foreground mb-1">Resulting Date</p>
            <p className="font-display font-bold text-xl text-primary">{result}</p>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function SleepCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'sleep')!;
  const [mode, setMode] = useState("wake");
  const [time, setTime] = useState("07:00");
  const [result, setResult] = useState<string[]>([]);

  const calculate = () => {
    const [h, min] = time.split(':').map(Number);
    const cycleMins = 90;
    const fallAsleepMins = 14;
    const times: string[] = [];
    if (mode === 'wake') {
      for (let cycles = 6; cycles >= 3; cycles--) {
        const total = cycles * cycleMins + fallAsleepMins;
        let wakeH = h;
        let wakeMin = min;
        wakeMin -= total;
        while (wakeMin < 0) { wakeMin += 60; wakeH--; }
        if (wakeH < 0) wakeH += 24;
        const ampm = wakeH >= 12 ? 'PM' : 'AM';
        const displayH = wakeH > 12 ? wakeH - 12 : wakeH === 0 ? 12 : wakeH;
        times.push(`${displayH}:${wakeMin.toString().padStart(2, '0')} ${ampm} (${cycles} cycles, ${Math.floor(total / 60)}h ${total % 60}m sleep)`);
      }
    } else {
      for (let cycles = 4; cycles <= 7; cycles++) {
        const total = cycles * cycleMins + fallAsleepMins;
        let wakeH = h;
        let wakeMin = min + total;
        while (wakeMin >= 60) { wakeMin -= 60; wakeH++; }
        wakeH = wakeH % 24;
        const ampm = wakeH >= 12 ? 'PM' : 'AM';
        const displayH = wakeH > 12 ? wakeH - 12 : wakeH === 0 ? 12 : wakeH;
        times.push(`${displayH}:${wakeMin.toString().padStart(2, '0')} ${ampm} (${cycles} cycles, ${Math.floor(total / 60)}h ${total % 60}m sleep)`);
      }
    }
    setResult(times);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Mode">
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="wake">I need to wake up at…</option>
            <option value="sleep">I'm going to sleep at…</option>
          </Select>
        </Field>
        <Field label="Time">
          <Input type="time" value={time} onChange={e => setTime(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Sleep Times</CalcButton>
        {result.length > 0 && (
          <div className="space-y-2 mt-4">
            <p className="text-sm font-medium text-foreground">{mode === 'wake' ? 'Ideal bedtimes:' : 'Ideal wake-up times:'}</p>
            {result.map((r, i) => (
              <div key={i} className={`p-3 rounded-xl border ${i === 0 ? 'bg-primary/10 border-primary/30' : 'bg-secondary border-border'}`}>
                <p className={`text-sm font-medium ${i === 0 ? 'text-primary' : 'text-foreground'}`}>{r}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">Sleep Cycles</h3>
        <p>Each sleep cycle is approximately 90 minutes. Waking at the end of a cycle helps you feel more refreshed. On average, it takes ~14 minutes to fall asleep.</p>
      </div>
    </ToolPage>
  );
}

export function TimeCardCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'time-card')!;
  const [entries, setEntries] = useState([
    { in: '09:00', out: '17:00' },
    { in: '09:00', out: '17:00' },
    { in: '09:00', out: '17:00' },
    { in: '09:00', out: '17:00' },
    { in: '09:00', out: '17:00' },
  ]);
  const [hourly, setHourly] = useState("0");
  const [result, setResult] = useState<{ totalMins: number; totalHours: number; pay: number } | null>(null);

  const updateEntry = (i: number, field: 'in' | 'out', val: string) => {
    setEntries(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };

  const calculate = () => {
    let total = 0;
    entries.forEach(e => {
      if (!e.in || !e.out) return;
      const [h1, m1] = e.in.split(':').map(Number);
      const [h2, m2] = e.out.split(':').map(Number);
      let diff = (h2 * 60 + m2) - (h1 * 60 + m1);
      if (diff < 0) diff += 24 * 60;
      total += diff;
    });
    const rate = parseFloat(hourly);
    setResult({ totalMins: total, totalHours: total / 60, pay: isNaN(rate) ? 0 : (total / 60) * rate });
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="space-y-2">
          {entries.map((e, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 items-center">
              <span className="text-sm font-medium text-muted-foreground">{days[i]}</span>
              <Input type="time" value={e.in} onChange={ev => updateEntry(i, 'in', ev.target.value)} />
              <Input type="time" value={e.out} onChange={ev => updateEntry(i, 'out', ev.target.value)} />
            </div>
          ))}
        </div>
        <Field label="Hourly Rate ($)" hint="Optional — leave 0 to skip pay calculation">
          <Input type="number" value={hourly} onChange={e => setHourly(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate Time Card</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Total Hours" value={`${Math.floor(result.totalHours)}h ${Math.round((result.totalHours % 1) * 60)}m`} highlight />
            {parseFloat(hourly) > 0 && <ResultBox label="Total Pay" value={`$${result.pay.toFixed(2)}`} />}
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function BusinessDaysCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'business-days')!;
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<{ bizDays: number; calDays: number } | null>(null);

  const calculate = () => {
    if (!date1 || !date2) return;
    const start = new Date(date1);
    const end = new Date(date2);
    if (start > end) return;
    let bizDays = 0;
    const cur = new Date(start);
    while (cur <= end) {
      const day = cur.getDay();
      if (day !== 0 && day !== 6) bizDays++;
      cur.setDate(cur.getDate() + 1);
    }
    const calDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    setResult({ bizDays, calDays });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start Date">
            <Input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
          </Field>
          <Field label="End Date">
            <Input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Business Days</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Business Days" value={result.bizDays} highlight />
            <ResultBox label="Calendar Days" value={result.calDays} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function BirthdayCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'birthday')!;
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ dayOfWeek: string; zodiac: string; daysOld: number } | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[birth.getDay()];
    const now = new Date();
    const daysOld = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const month = birth.getMonth() + 1;
    const day = birth.getDate();
    const zodiacSigns = [
      { name: 'Capricorn', from: [12, 22] }, { name: 'Aquarius', from: [1, 20] },
      { name: 'Pisces', from: [2, 19] }, { name: 'Aries', from: [3, 21] },
      { name: 'Taurus', from: [4, 20] }, { name: 'Gemini', from: [5, 21] },
      { name: 'Cancer', from: [6, 21] }, { name: 'Leo', from: [7, 23] },
      { name: 'Virgo', from: [8, 23] }, { name: 'Libra', from: [9, 23] },
      { name: 'Scorpio', from: [10, 23] }, { name: 'Sagittarius', from: [11, 22] },
      { name: 'Capricorn', from: [12, 22] },
    ];
    let zodiac = 'Capricorn';
    for (let i = 0; i < zodiacSigns.length - 1; i++) {
      const [zm, zd] = zodiacSigns[i].from;
      const [nm, nd] = zodiacSigns[i + 1].from;
      if ((month === zm && day >= zd) || (month === nm && day < nd)) {
        zodiac = zodiacSigns[i].name;
        break;
      }
    }
    setResult({ dayOfWeek, zodiac, daysOld });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Date of Birth">
          <Input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </Field>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Born on" value={result.dayOfWeek} highlight />
            <ResultBox label="Zodiac Sign" value={result.zodiac} />
            <ResultBox label="Days Old" value={result.daysOld.toLocaleString()} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function YearsCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'years')!;
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!date1 || !date2) return;
    const d1 = new Date(date1 < date2 ? date1 : date2);
    const d2 = new Date(date1 < date2 ? date2 : date1);
    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();
    if (days < 0) { months--; days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    setResult({ years, months, days });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Date 1"><Input type="date" value={date1} onChange={e => setDate1(e.target.value)} /></Field>
          <Field label="Date 2"><Input type="date" value={date2} onChange={e => setDate2(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Years</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Years" value={result.years} highlight />
            <ResultBox label="Months" value={result.months} />
            <ResultBox label="Days" value={result.days} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function TimeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'time-calculator')!;
  const [h1, setH1] = useState("2");
  const [m1, setM1] = useState("30");
  const [s1, setS1] = useState("0");
  const [op, setOp] = useState("+");
  const [h2, setH2] = useState("1");
  const [m2, setM2] = useState("45");
  const [s2, setS2] = useState("0");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    let total1 = parseInt(h1) * 3600 + parseInt(m1) * 60 + parseInt(s1);
    let total2 = parseInt(h2) * 3600 + parseInt(m2) * 60 + parseInt(s2);
    let total = op === '+' ? total1 + total2 : Math.abs(total1 - total2);
    const rh = Math.floor(total / 3600);
    const rm = Math.floor((total % 3600) / 60);
    const rs = total % 60;
    setResult(`${rh}h ${rm}m ${rs}s`);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <Field label="Hours"><Input type="number" value={h1} onChange={e => setH1(e.target.value)} /></Field>
          <Field label="Minutes"><Input type="number" value={m1} onChange={e => setM1(e.target.value)} /></Field>
          <Field label="Seconds"><Input type="number" value={s1} onChange={e => setS1(e.target.value)} /></Field>
        </div>
        <Select value={op} onChange={e => setOp(e.target.value)}>
          <option value="+">+ Add</option>
          <option value="-">− Subtract</option>
        </Select>
        <div className="grid grid-cols-3 gap-2">
          <Field label="Hours"><Input type="number" value={h2} onChange={e => setH2(e.target.value)} /></Field>
          <Field label="Minutes"><Input type="number" value={m2} onChange={e => setM2(e.target.value)} /></Field>
          <Field label="Seconds"><Input type="number" value={s2} onChange={e => setS2(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate</CalcButton>
        {result && <ResultBox label="Result" value={result} highlight />}
      </div>
    </ToolPage>
  );
}

export function AgeDifferenceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'age-difference')!;
  const [dob1, setDob1] = useState("");
  const [dob2, setDob2] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!dob1 || !dob2) return;
    const d1 = new Date(dob1), d2 = new Date(dob2);
    const earlier = d1 < d2 ? d1 : d2;
    const later = d1 < d2 ? d2 : d1;
    let years = later.getFullYear() - earlier.getFullYear();
    let months = later.getMonth() - earlier.getMonth();
    let days = later.getDate() - earlier.getDate();
    if (days < 0) { months--; days += new Date(later.getFullYear(), later.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    setResult({ years, months, days });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Person 1 Date of Birth">
            <Input type="date" value={dob1} onChange={e => setDob1(e.target.value)} />
          </Field>
          <Field label="Person 2 Date of Birth">
            <Input type="date" value={dob2} onChange={e => setDob2(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Age Difference</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Years" value={`${result.years}`} highlight />
            <ResultBox label="Months" value={`${result.months}`} />
            <ResultBox label="Days" value={`${result.days}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function DayCounterCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'day-counter')!;
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState<{ total: number; weekdays: number; weekends: number } | null>(null);

  const calculate = () => {
    if (!startDate || !endDate) return;
    const d1 = new Date(startDate), d2 = new Date(endDate);
    let total = 0, weekdays = 0, weekends = 0;
    const cur = new Date(d1 < d2 ? d1 : d2);
    const end = new Date(d1 < d2 ? d2 : d1);
    while (cur <= end) {
      total++;
      const day = cur.getDay();
      if (day === 0 || day === 6) weekends++; else weekdays++;
      cur.setDate(cur.getDate() + 1);
    }
    setResult({ total, weekdays, weekends });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Start Date">
            <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </Field>
          <Field label="End Date">
            <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Count Days</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Total Days" value={`${result.total}`} highlight />
            <ResultBox label="Weekdays" value={`${result.weekdays}`} />
            <ResultBox label="Weekends" value={`${result.weekends}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function ChronologicalAgeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'chronological-age')!;
  const [dob, setDob] = useState("2000-06-15"); const [ref, setRef] = useState(new Date().toISOString().slice(0,10));
  const [result, setResult] = useState<{years:number;months:number;days:number}|null>(null);
  const calc = () => {
    const birth=new Date(dob), refDate=new Date(ref);
    if(isNaN(birth.getTime())||isNaN(refDate.getTime())||birth>refDate) return;
    let years=refDate.getFullYear()-birth.getFullYear();
    let months=refDate.getMonth()-birth.getMonth();
    let days=refDate.getDate()-birth.getDate();
    if(days<0){months--;days+=new Date(refDate.getFullYear(),refDate.getMonth(),0).getDate();}
    if(months<0){years--;months+=12;}
    setResult({years,months,days});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Date of Birth"><Input type="date" value={dob} onChange={e=>setDob(e.target.value)} /></Field>
          <Field label="Reference Date"><Input type="date" value={ref} onChange={e=>setRef(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Chronological Age</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Years" value={`${result.years}`} highlight />
          <ResultBox label="Months" value={`${result.months}`} />
          <ResultBox label="Days" value={`${result.days}`} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function TimeDurationWithBreaksCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'time-with-breaks')!;
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:30");
  const [breaks, setBreaks] = useState("30");
  const [result, setResult] = useState<{ total: number; worked: number } | null>(null);

  const calc = () => {
    const toMins = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    const s = toMins(start), e = toMins(end), b = parseFloat(breaks);
    if (isNaN(s) || isNaN(e) || isNaN(b)) return;
    const total = (e >= s ? e - s : 1440 - s + e);
    setResult({ total, worked: total - b });
  };

  const toHM = (m: number) => `${Math.floor(m / 60)}h ${m % 60}m`;

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start Time"><Input type="time" value={start} onChange={e => setStart(e.target.value)} /></Field>
          <Field label="End Time"><Input type="time" value={end} onChange={e => setEnd(e.target.value)} /></Field>
        </div>
        <Field label="Total Break Time (minutes)">
          <Input type="number" value={breaks} onChange={e => setBreaks(e.target.value)} min="0" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Duration</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Time Worked" value={toHM(result.worked)} highlight />
            <ResultBox label="Total Elapsed" value={toHM(result.total)} />
            <ResultBox label="Break Time" value={toHM(parseFloat(breaks) || 0)} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Time worked = End - Start - Break time. Supports overnight shifts (end time before start time).</div>
    </ToolPage>
  );
}

export function ShiftCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'shift-calculator')!;
  const [entries, setEntries] = useState([
    { start: "09:00", end: "17:00", breakMins: "30" },
    { start: "09:00", end: "17:00", breakMins: "30" },
    { start: "09:00", end: "17:00", breakMins: "30" },
    { start: "09:00", end: "17:00", breakMins: "30" },
    { start: "09:00", end: "17:00", breakMins: "30" },
  ]);
  const [hourlyRate, setHourlyRate] = useState("20");
  const [result, setResult] = useState<{ totalMins: number; pay: number } | null>(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const calc = () => {
    const toMins = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    let total = 0;
    for (const e of entries) {
      const s = toMins(e.start), en = toMins(e.end), b = parseFloat(e.breakMins) || 0;
      const diff = en >= s ? en - s : 1440 - s + en;
      total += Math.max(0, diff - b);
    }
    const rate = parseFloat(hourlyRate) || 0;
    setResult({ totalMins: total, pay: (total / 60) * rate });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-3">
        {entries.map((e, i) => (
          <div key={i} className="grid grid-cols-4 gap-2 items-end">
            <span className="text-xs font-semibold text-muted-foreground pb-2">{days[i]}</span>
            <Field label="Start"><Input type="time" value={e.start} onChange={ev => setEntries(p => p.map((r, j) => j === i ? { ...r, start: ev.target.value } : r))} /></Field>
            <Field label="End"><Input type="time" value={e.end} onChange={ev => setEntries(p => p.map((r, j) => j === i ? { ...r, end: ev.target.value } : r))} /></Field>
            <Field label="Break (min)"><Input type="number" value={e.breakMins} onChange={ev => setEntries(p => p.map((r, j) => j === i ? { ...r, breakMins: ev.target.value } : r))} /></Field>
          </div>
        ))}
        <Field label="Hourly Rate ($)">
          <Input type="number" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} step="0.01" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Shift Total</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Total Hours" value={`${(result.totalMins / 60).toFixed(2)}`} highlight />
            <ResultBox label="Total Pay" value={`$${result.pay.toFixed(2)}`} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function PayrollHoursCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'payroll-hours')!;
  const [lines, setLines] = useState("09:00-17:30\n08:00-16:00\n09:30-18:00\n10:00-14:30\n09:00-17:00");
  const [rate, setRate] = useState("18");
  const [result, setResult] = useState<{ totalHours: number; grossPay: number; lines: { raw: string; hours: number }[] } | null>(null);

  const calc = () => {
    const toMins = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    const rows = lines.trim().split('\n').filter(Boolean).map(line => {
      const parts = line.split('-');
      if (parts.length !== 2) return { raw: line, hours: 0 };
      const diff = toMins(parts[1].trim()) - toMins(parts[0].trim());
      return { raw: line, hours: Math.max(0, diff) / 60 };
    });
    const totalHours = rows.reduce((s, r) => s + r.hours, 0);
    setResult({ totalHours, grossPay: totalHours * (parseFloat(rate) || 0), lines: rows });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Time Entries (format: HH:MM-HH:MM, one per line)">
          <textarea value={lines} onChange={e => setLines(e.target.value)} rows={6}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <Field label="Hourly Rate ($)">
          <Input type="number" value={rate} onChange={e => setRate(e.target.value)} step="0.01" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Payroll</CalcButton>
        {result && (
          <div className="space-y-3">
            <ResultGrid>
              <ResultBox label="Total Hours" value={`${result.totalHours.toFixed(2)} hrs`} highlight />
              <ResultBox label="Gross Pay" value={`$${result.grossPay.toFixed(2)}`} />
            </ResultGrid>
            <div className="text-xs text-muted-foreground space-y-1">
              {result.lines.map((l, i) => (
                <div key={i} className="flex justify-between px-2 py-1 bg-secondary rounded">
                  <span className="font-mono">{l.raw}</span>
                  <span className="font-semibold">{l.hours.toFixed(2)} hrs</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function OvertimeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'overtime-calculator')!;
  const [hoursWorked, setHoursWorked] = useState("48");
  const [regularHours, setRegularHours] = useState("40");
  const [hourlyRate, setHourlyRate] = useState("20");
  const [otMultiplier, setOtMultiplier] = useState("1.5");
  const [result, setResult] = useState<{ regular: number; overtime: number; totalPay: number; otHours: number } | null>(null);

  const calc = () => {
    const hw = parseFloat(hoursWorked), rh = parseFloat(regularHours), rate = parseFloat(hourlyRate), mult = parseFloat(otMultiplier);
    if ([hw, rh, rate, mult].some(isNaN)) return;
    const otHours = Math.max(0, hw - rh);
    const regular = Math.min(hw, rh) * rate;
    const overtime = otHours * rate * mult;
    setResult({ regular, overtime, totalPay: regular + overtime, otHours });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Hours Worked"><Input type="number" value={hoursWorked} onChange={e => setHoursWorked(e.target.value)} step="0.5" /></Field>
          <Field label="Regular Hours Threshold"><Input type="number" value={regularHours} onChange={e => setRegularHours(e.target.value)} /></Field>
          <Field label="Hourly Rate ($)"><Input type="number" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} step="0.01" /></Field>
          <Field label="OT Multiplier (e.g. 1.5)"><Input type="number" value={otMultiplier} onChange={e => setOtMultiplier(e.target.value)} step="0.25" /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Pay</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Total Pay" value={`$${result.totalPay.toFixed(2)}`} highlight />
            <ResultBox label="Regular Pay" value={`$${result.regular.toFixed(2)}`} />
            <ResultBox label="Overtime Pay" value={`$${result.overtime.toFixed(2)}`} />
            <ResultBox label="Overtime Hours" value={`${result.otHours.toFixed(1)} hrs`} />
          </ResultGrid>
        )}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Standard overtime: 1.5x pay for hours beyond 40/week. Double-time (2x) applies in some jurisdictions for 12+ hour days.</div>
    </ToolPage>
  );
}
