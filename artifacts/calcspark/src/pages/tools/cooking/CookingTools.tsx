import { useState } from "react";
import { ToolPage, Field, Input, Select, CalcButton, ResultBox, ResultGrid } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

export function RecipeScalerCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'recipe-scaler')!;
  const [original, setOriginal] = useState("4");
  const [desired, setDesired] = useState("12");
  const [ingredients, setIngredients] = useState([
    { name: 'Flour', amount: '2', unit: 'cups' },
    { name: 'Sugar', amount: '1', unit: 'cup' },
    { name: 'Eggs', amount: '2', unit: '' },
    { name: 'Butter', amount: '0.5', unit: 'cup' },
  ]);
  const [result, setResult] = useState<{ name: string; amount: string; unit: string }[] | null>(null);

  const calculate = () => {
    const o = parseFloat(original), d = parseFloat(desired);
    if (isNaN(o) || isNaN(d) || o === 0) return;
    const ratio = d / o;
    setResult(ingredients.map(i => ({
      name: i.name,
      amount: (parseFloat(i.amount) * ratio).toFixed(2),
      unit: i.unit,
    })));
  };

  const updateIngredient = (i: number, field: string, val: string) => {
    setIngredients(prev => prev.map((item, idx) => idx === i ? { ...item, [field]: val } : item));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Original Servings"><Input type="number" value={original} onChange={e => setOriginal(e.target.value)} /></Field>
          <Field label="Desired Servings"><Input type="number" value={desired} onChange={e => setDesired(e.target.value)} /></Field>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Ingredient</span>
            <span>Amount</span>
            <span>Unit</span>
          </div>
          {ingredients.map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input type="text" value={item.name} onChange={e => updateIngredient(i, 'name', e.target.value)} />
              <Input type="number" value={item.amount} onChange={e => updateIngredient(i, 'amount', e.target.value)} />
              <Input type="text" value={item.unit} onChange={e => updateIngredient(i, 'unit', e.target.value)} placeholder="cups, g…" />
            </div>
          ))}
          <button onClick={() => setIngredients(p => [...p, { name: '', amount: '', unit: '' }])}
            className="text-sm text-primary hover:text-primary/80 transition-colors">+ Add ingredient</button>
        </div>
        <CalcButton onClick={calculate} className="w-full">Scale Recipe</CalcButton>
        {result && (
          <div className="space-y-2 mt-4">
            <p className="text-sm font-medium text-foreground">Scaled for {desired} servings:</p>
            {result.map((r, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                <span className="text-sm text-muted-foreground">{r.name}</span>
                <span className="text-sm font-bold text-foreground">{r.amount} {r.unit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function PizzaDoughCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'pizza-dough')!;
  const [pizzas, setPizzas] = useState("2");
  const [size, setSize] = useState("12");
  const [style, setStyle] = useState("neapolitan");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const hydration: Record<string, number> = { neapolitan: 0.60, ny: 0.63, thin: 0.55, sicilian: 0.70 };

  const calculate = () => {
    const n = parseFloat(pizzas), s = parseFloat(size);
    if (isNaN(n) || isNaN(s)) return;
    const doughWeight = n * (Math.PI * (s / 2) * (s / 2) * 0.1);
    const h = hydration[style];
    const flour = Math.round(doughWeight / (1 + h + 0.02 + 0.003));
    const water = Math.round(flour * h);
    const salt = Math.round(flour * 0.02);
    const yeast = Math.round(flour * 0.003);
    setResult({ Flour: `${flour} g`, Water: `${water} g (${Math.round(water / 237)}¾ cup)`, Salt: `${salt} g (${(salt / 5.7).toFixed(1)} tsp)`, Yeast: `${yeast} g (${(yeast / 3).toFixed(1)} tsp)`, 'Total Dough Weight': `${flour + water + salt + yeast} g` });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Number of Pizzas"><Input type="number" value={pizzas} onChange={e => setPizzas(e.target.value)} /></Field>
          <Field label="Diameter (inches)"><Input type="number" value={size} onChange={e => setSize(e.target.value)} /></Field>
          <Field label="Style">
            <Select value={style} onChange={e => setStyle(e.target.value)}>
              <option value="neapolitan">Neapolitan (60%)</option>
              <option value="ny">New York (63%)</option>
              <option value="thin">Thin Crust (55%)</option>
              <option value="sicilian">Sicilian (70%)</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Dough</CalcButton>
        {result && (
          <div className="space-y-2 mt-4">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className={`flex justify-between items-center p-3 rounded-xl ${k === 'Flour' ? 'bg-primary/10 border border-primary/20' : 'bg-secondary'}`}>
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="text-sm font-bold text-foreground">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}

export function RiceCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'rice')!;
  const [servings, setServings] = useState("4");
  const [type, setType] = useState("white");
  const [result, setResult] = useState<{ rice: string; water: string; time: string } | null>(null);

  const types: Record<string, { ratio: number; time: string; dryPerServing: number }> = {
    white: { ratio: 2, time: '18 min', dryPerServing: 0.25 },
    brown: { ratio: 2.5, time: '45 min', dryPerServing: 0.25 },
    basmati: { ratio: 1.75, time: '20 min', dryPerServing: 0.25 },
    jasmine: { ratio: 1.5, time: '18 min', dryPerServing: 0.25 },
    sushi: { ratio: 1.2, time: '15 min', dryPerServing: 0.3 },
    wild: { ratio: 3, time: '50 min', dryPerServing: 0.2 },
  };

  const calculate = () => {
    const n = parseFloat(servings);
    if (isNaN(n)) return;
    const t = types[type];
    const cups = n * t.dryPerServing;
    const water = cups * t.ratio;
    setResult({ rice: `${cups.toFixed(2)} cups (${Math.round(cups * 192)}g)`, water: `${water.toFixed(2)} cups (${Math.round(water * 237)}ml)`, time: t.time });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Servings"><Input type="number" value={servings} onChange={e => setServings(e.target.value)} /></Field>
          <Field label="Rice Type">
            <Select value={type} onChange={e => setType(e.target.value)}>
              <option value="white">White Rice</option>
              <option value="brown">Brown Rice</option>
              <option value="basmati">Basmati Rice</option>
              <option value="jasmine">Jasmine Rice</option>
              <option value="sushi">Sushi Rice</option>
              <option value="wild">Wild Rice</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Rice</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Dry Rice" value={result.rice} highlight />
            <ResultBox label="Water" value={result.water} />
            <ResultBox label="Cooking Time" value={result.time} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function CoffeeCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'coffee')!;
  const [cups, setCups] = useState("2");
  const [strength, setStrength] = useState("medium");
  const [method, setMethod] = useState("drip");
  const [result, setResult] = useState<{ coffee: string; water: string; ratio: string } | null>(null);

  const ratios: Record<string, Record<string, number>> = {
    light: { drip: 50, french: 62, pour: 62, espresso: 7 },
    medium: { drip: 60, french: 75, pour: 70, espresso: 8 },
    strong: { drip: 75, french: 90, pour: 85, espresso: 9 },
  };

  const waterPerCup: Record<string, number> = { drip: 237, french: 237, pour: 250, espresso: 30 };

  const calculate = () => {
    const n = parseFloat(cups);
    if (isNaN(n)) return;
    const water = n * waterPerCup[method];
    const coffeeG = (water / 1000) * ratios[strength][method];
    const coffeePerCup = coffeeG / n;
    setResult({
      coffee: `${coffeeG.toFixed(1)} g (${(coffeeG / 5).toFixed(1)} tsp)`,
      water: `${water.toFixed(0)} ml (${(water / 237).toFixed(1)} cups)`,
      ratio: `1:${(water / coffeeG).toFixed(0)}`,
    });
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Cups"><Input type="number" value={cups} onChange={e => setCups(e.target.value)} /></Field>
          <Field label="Method">
            <Select value={method} onChange={e => setMethod(e.target.value)}>
              <option value="drip">Drip</option>
              <option value="french">French Press</option>
              <option value="pour">Pour Over</option>
              <option value="espresso">Espresso</option>
            </Select>
          </Field>
          <Field label="Strength">
            <Select value={strength} onChange={e => setStrength(e.target.value)}>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="strong">Strong</option>
            </Select>
          </Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Coffee Ratio</CalcButton>
        {result && (
          <ResultGrid>
            <ResultBox label="Coffee" value={result.coffee} highlight />
            <ResultBox label="Water" value={result.water} />
            <ResultBox label="Coffee:Water Ratio" value={result.ratio} />
          </ResultGrid>
        )}
      </div>
    </ToolPage>
  );
}

export function YeastCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'yeast')!;
  const [flour, setFlour] = useState("500"); const [type, setType] = useState("active-dry");
  const [result, setResult] = useState<{grams:number}|null>(null);
  const ratios: Record<string,number> = {'active-dry':0.01,'instant':0.008,'fresh':0.03};
  const calc = () => {
    const f=parseFloat(flour);
    if(isNaN(f)) return;
    setResult({grams:f*ratios[type]});
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Flour Weight (grams)"><Input type="number" value={flour} onChange={e=>setFlour(e.target.value)} /></Field>
        <Field label="Yeast Type">
          <Select value={type} onChange={e=>setType(e.target.value)}>
            <option value="active-dry">Active Dry Yeast</option>
            <option value="instant">Instant/Rapid Rise Yeast</option>
            <option value="fresh">Fresh Yeast</option>
          </Select>
        </Field>
        <CalcButton onClick={calc} className="w-full">Calculate Yeast</CalcButton>
        {result && <ResultBox label="Yeast Needed (grams)" value={result.grams.toFixed(1)} highlight />}
      </div>
    </ToolPage>
  );
}

export function BakingSubstitutionCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'baking-substitution')!;
  const [ingredient, setIngredient] = useState("butter");
  const subs: Record<string,{sub:string;ratio:string;note:string}> = {
    butter:{sub:'Coconut Oil',ratio:'1:1',note:'Works well for most baked goods'},
    'buttermilk':{sub:'Milk + Vinegar',ratio:'1 cup milk + 1 tbsp white vinegar',note:'Let sit 5 minutes before using'},
    'eggs':{sub:'Flaxseed Meal',ratio:'1 tbsp + 3 tbsp water per egg',note:'Best for binding, not leavening'},
    'flour':{sub:'Almond Flour',ratio:'1:1 (may need extra egg)',note:'Gluten-free, denser result'},
    'sugar':{sub:'Honey',ratio:'3/4 cup per 1 cup sugar',note:'Reduce liquid by 1/4 cup'},
    'milk':{sub:'Oat Milk',ratio:'1:1',note:'Mild flavor, works great'},
    'cream':{sub:'Coconut Cream',ratio:'1:1',note:'Slight coconut flavor'},
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Ingredient to Substitute">
          <Select value={ingredient} onChange={e=>setIngredient(e.target.value)}>
            {Object.keys(subs).map(k=><option key={k} value={k}>{k.charAt(0).toUpperCase()+k.slice(1)}</option>)}
          </Select>
        </Field>
        <div className="rounded-xl border border-border p-4 bg-secondary/30 space-y-3">
          <div><span className="text-xs text-muted-foreground uppercase tracking-wide">Substitute</span><p className="font-semibold text-lg">{subs[ingredient].sub}</p></div>
          <div><span className="text-xs text-muted-foreground uppercase tracking-wide">Ratio</span><p className="font-medium">{subs[ingredient].ratio}</p></div>
          <div><span className="text-xs text-muted-foreground uppercase tracking-wide">Notes</span><p className="text-sm text-muted-foreground">{subs[ingredient].note}</p></div>
        </div>
      </div>
    </ToolPage>
  );
}

export function CaloriesPerServingCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'calories-per-serving')!;
  const [totalCal, setTotalCal] = useState("2400"); const [servings, setServings] = useState("8");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const t=parseFloat(totalCal), s=parseFloat(servings);
    if([t,s].some(isNaN)||s===0) return;
    setResult(t/s);
  };
  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Total Calories"><Input type="number" value={totalCal} onChange={e=>setTotalCal(e.target.value)} /></Field>
          <Field label="Number of Servings"><Input type="number" value={servings} onChange={e=>setServings(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calc} className="w-full">Calculate Calories Per Serving</CalcButton>
        {result !== null && <ResultBox label="Calories Per Serving" value={result.toFixed(1)} highlight />}
      </div>
    </ToolPage>
  );
}

// ─── NEW COOKING TOOLS ─────────────────────────────────────────────────────

export function RecipeCostCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'recipe-cost')!;
  type Ingredient = { name:string; amount:string; unit:string; cost:string; totalCost:string };
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {name:'Flour',amount:'2',unit:'cups',cost:'0.15',totalCost:'0.30'},
    {name:'Eggs',amount:'3',unit:'each',cost:'0.25',totalCost:'0.75'},
    {name:'Butter',amount:'0.5',unit:'cups',cost:'0.80',totalCost:'0.40'},
    {name:'Sugar',amount:'1',unit:'cups',cost:'0.20',totalCost:'0.20'},
  ]);
  const [servings, setServings] = useState("12");
  const [markup, setMarkup] = useState("200");
  const [result, setResult] = useState<{total:number;perServing:number;sellingPrice:number}|null>(null);

  const updateCost = (i:number, k:keyof Ingredient, v:string) => {
    setIngredients(prev => {
      const updated = prev.map((x,j)=>j===i?{...x,[k]:v}:x);
      if (k==='amount'||k==='cost') {
        const item = updated[i];
        const total = (parseFloat(item.amount)||0)*(parseFloat(item.cost)||0);
        updated[i] = {...updated[i],totalCost:total.toFixed(2)};
      }
      return updated;
    });
  };

  const calculate = () => {
    const total = ingredients.reduce((s,i)=>s+(parseFloat(i.totalCost)||0),0);
    const perServing = total/(parseFloat(servings)||1);
    const sellingPrice = perServing*(1+(parseFloat(markup)||0)/100);
    setResult({ total, perServing, sellingPrice });
  };
  const fmt = (n:number) => `$${n.toFixed(2)}`;
  return (
    <ToolPage tool={tool} relatedSlugs={['calories-per-serving','recipe-scaler','meal-calorie-estimator','recipe-converter']}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Ingredient</span><span>Amount</span><span>Cost each</span><span>Line Total</span>
          </div>
          {ingredients.map((ing,i)=>(
            <div key={i} className="grid grid-cols-4 gap-2">
              <Input value={ing.name} onChange={e=>updateCost(i,'name',e.target.value)} placeholder="Name" />
              <Input type="number" value={ing.amount} onChange={e=>updateCost(i,'amount',e.target.value)} />
              <Input type="number" value={ing.cost} step="0.01" onChange={e=>updateCost(i,'cost',e.target.value)} />
              <div className="flex items-center px-2 bg-secondary rounded-lg text-sm">{fmt(parseFloat(ing.totalCost)||0)}</div>
            </div>
          ))}
        </div>
        <button onClick={()=>setIngredients(i=>[...i,{name:'',amount:'1',unit:'each',cost:'0',totalCost:'0'}])} className="text-sm text-primary hover:text-primary/80">+ Add ingredient</button>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Number of Servings"><Input type="number" value={servings} onChange={e=>setServings(e.target.value)} /></Field>
          <Field label="Markup (%)" hint="For selling price"><Input type="number" value={markup} onChange={e=>setMarkup(e.target.value)} /></Field>
        </div>
        <CalcButton onClick={calculate} className="w-full">Calculate Recipe Cost</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Total Ingredient Cost" value={fmt(result.total)} />
          <ResultBox label="Cost per Serving" value={fmt(result.perServing)} highlight />
          <ResultBox label={`Selling Price (${markup}% markup)`} value={fmt(result.sellingPrice)} />
        </ResultGrid>}
      </div>
    </ToolPage>
  );
}

export function MealCalorieEstimatorCalculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'meal-calorie-estimator')!;
  type FoodItem = { name:string; amount:string; unit:string; calsPerUnit:string };
  const [items, setItems] = useState<FoodItem[]>([
    {name:'Chicken breast',amount:'150',unit:'g',calsPerUnit:'1.65'},
    {name:'Brown rice',amount:'1',unit:'cup cooked',calsPerUnit:'215'},
    {name:'Broccoli',amount:'100',unit:'g',calsPerUnit:'0.34'},
    {name:'Olive oil',amount:'1',unit:'tbsp',calsPerUnit:'119'},
  ]);
  const [result, setResult] = useState<{total:number;protein:number}|null>(null);

  const update = (i:number, k:keyof FoodItem, v:string) => setItems(p=>p.map((x,j)=>j===i?{...x,[k]:v}:x));

  const calculate = () => {
    const total = items.reduce((s,item)=>{
      const amount = parseFloat(item.amount)||0;
      const cal = parseFloat(item.calsPerUnit)||0;
      return s + amount*cal;
    },0);
    setResult({ total, protein: 0 });
  };
  return (
    <ToolPage tool={tool} relatedSlugs={['calories-per-serving','recipe-cost','calorie','recipe-scaler']}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground px-1">
            <span>Food Item</span><span>Amount</span><span>Unit</span><span>Cal/unit</span>
          </div>
          {items.map((item,i)=>(
            <div key={i} className="grid grid-cols-4 gap-2">
              <Input value={item.name} onChange={e=>update(i,'name',e.target.value)} />
              <Input type="number" value={item.amount} onChange={e=>update(i,'amount',e.target.value)} />
              <Input value={item.unit} onChange={e=>update(i,'unit',e.target.value)} placeholder="g, cup, tbsp" />
              <Input type="number" value={item.calsPerUnit} step="0.1" onChange={e=>update(i,'calsPerUnit',e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={()=>setItems(p=>[...p,{name:'',amount:'100',unit:'g',calsPerUnit:'0'}])} className="text-sm text-primary hover:text-primary/80">+ Add food</button>
        <CalcButton onClick={calculate} className="w-full">Estimate Calories</CalcButton>
        {result && <ResultGrid>
          <ResultBox label="Total Calories" value={`${Math.round(result.total)} kcal`} highlight />
          <ResultBox label="Items" value={`${items.length}`} />
        </ResultGrid>}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Enter calories per unit (e.g. per gram, per cup, per tablespoon). Use food labels or USDA database for calorie values.</div>
    </ToolPage>
  );
}
