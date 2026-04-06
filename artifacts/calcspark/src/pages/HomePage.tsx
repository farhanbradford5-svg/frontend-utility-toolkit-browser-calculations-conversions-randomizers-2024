import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import {
  ALL_TOOLS, CALCULATOR_SUBCATEGORIES, CONVERTER_SUBCATEGORIES,
  searchTools, POPULAR_CALCULATORS, POPULAR_CONVERTERS, POPULAR_RANDOMIZERS,
  type Tool, type Subcategory
} from "@/data/tools";
import {
  Search, Zap, Calculator, ArrowRight, Shuffle, ChevronRight,
  Briefcase, DollarSign, Calendar, Heart, Activity, Car, HardHat,
  BarChart2, Atom, Lock, ChefHat, Grid, Ruler, MapPin, Square,
  Box, Clock, Hash, HardDrive, Thermometer, UtensilsCrossed, Shuffle as ShuffleIcon,
  Triangle, Sigma, Database, Zap as ZapIcon
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Briefcase, DollarSign, Calendar, Heart, Activity, Car, HardHat,
  Calculator, Triangle, Sigma, BarChart2, Atom, Database, Lock, ChefHat, Grid,
  Ruler, MapPin, Square, Box, Zap: ZapIcon, Clock, Hash, HardDrive, Thermometer,
  UtensilsCrossed, Shuffle: ShuffleIcon,
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.path} className="block">
      <div className="bg-card border border-border rounded-xl p-3.5 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer tool-card-hover">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {tool.name}
        </p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
      </div>
    </Link>
  );
}

function CategoryCard({ sub, prefix }: { sub: Subcategory; prefix: string }) {
  const IconComp = ICON_MAP[sub.icon] || Calculator;
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-500',
    green: 'bg-green-500/10 text-green-500',
    purple: 'bg-purple-500/10 text-purple-500',
    red: 'bg-red-500/10 text-red-500',
    orange: 'bg-orange-500/10 text-orange-500',
    cyan: 'bg-cyan-500/10 text-cyan-500',
    yellow: 'bg-yellow-500/10 text-yellow-600',
    indigo: 'bg-indigo-500/10 text-indigo-500',
    teal: 'bg-teal-500/10 text-teal-500',
    violet: 'bg-violet-500/10 text-violet-500',
    pink: 'bg-pink-500/10 text-pink-500',
    lime: 'bg-lime-500/10 text-lime-600',
    slate: 'bg-slate-400/10 text-slate-500',
    amber: 'bg-amber-500/10 text-amber-600',
    rose: 'bg-rose-500/10 text-rose-500',
    gray: 'bg-gray-400/10 text-gray-500',
  };
  const colorClass = colorMap[sub.color] || 'bg-primary/10 text-primary';

  return (
    <Link href={`/${prefix}/${sub.slug}`} className="block">
      <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer tool-card-hover">
        <div className="flex items-start gap-3">
          <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
            <IconComp className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{sub.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{sub.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function HeroSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchTools(query).slice(0, 8));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Search calculators, converters, tools..."
          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:bg-white/15 transition-all text-base"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          {results.map(tool => (
            <Link
              key={tool.slug}
              href={tool.path}
              onClick={() => { setQuery(""); setOpen(false); }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors border-b border-border/50 last:border-0"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full capitalize whitespace-nowrap">
                {tool.subcategory.replace('-', ' ')}
              </span>
              <span className="text-sm font-medium text-foreground">{tool.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function HomePage() {
  const popularCalcTools = POPULAR_CALCULATORS
    .map(slug => ALL_TOOLS.find(t => t.slug === slug))
    .filter(Boolean) as Tool[];

  const popularConvTools = POPULAR_CONVERTERS
    .map(slug => ALL_TOOLS.find(t => t.slug === slug))
    .filter(Boolean) as Tool[];

  const popularRandTools = POPULAR_RANDOMIZERS
    .map(slug => ALL_TOOLS.find(t => t.slug === slug))
    .filter(Boolean) as Tool[];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span>{ALL_TOOLS.length}+ free tools, always available</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            Every calculator<br />
            <span className="text-primary">you'll ever need</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Fast, accurate, browser-based tools for math, finance, health, science, and more. 
            No sign-up. No ads. Just answers.
          </p>
          <HeroSearch />
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-white/50">
            {['BMI', 'Compound Interest', 'Loan Calculator', 'Age Calculator', 'Tip Calculator'].map(tag => (
              <Link key={tag} href={`/calculators`} className="hover:text-white transition-colors">
                #{tag.replace(' ', '')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Popular Calculators */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Popular Calculators</h2>
              <p className="text-muted-foreground text-sm mt-1">Most-used tools on CalcSpark</p>
            </div>
            <Link href="/calculators" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              All calculators <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {popularCalcTools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>
        </section>

        {/* Popular Converters */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Popular Converters</h2>
              <p className="text-muted-foreground text-sm mt-1">Quick unit conversions for any need</p>
            </div>
            <Link href="/converters" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              All converters <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {popularConvTools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>
        </section>

        {/* Popular Randomizers */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Random Generators</h2>
              <p className="text-muted-foreground text-sm mt-1">Generate random numbers, colors, teams, and more</p>
            </div>
            <Link href="/randomizers" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              All generators <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {popularRandTools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>
        </section>

        {/* Calculator Categories */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Calculator Categories</h2>
              <p className="text-muted-foreground text-sm mt-1">Browse by topic</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CALCULATOR_SUBCATEGORIES.map(sub => (
              <CategoryCard key={sub.slug} sub={sub} prefix="calculators" />
            ))}
          </div>
        </section>

        {/* Converter Categories */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Converter Categories</h2>
              <p className="text-muted-foreground text-sm mt-1">Convert between any units</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONVERTER_SUBCATEGORIES.map(sub => (
              <CategoryCard key={sub.slug} sub={sub} prefix="converters" />
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">Why CalcSpark?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Accurate formulas, clear explanations, and instant results — all running directly in your browser.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Instant results', desc: 'No loading, no waiting' },
              { icon: Calculator, title: 'Accurate formulas', desc: 'Rigorously tested math' },
              { icon: Grid, title: '150+ tools', desc: 'Everything in one place' },
              { icon: Heart, title: 'Free forever', desc: 'No sign-up, no fees' },
            ].map(item => (
              <div key={item.title} className="text-center">
                <div className="h-10 w-10 lime-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="font-semibold text-sm text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
export default HomePage;
