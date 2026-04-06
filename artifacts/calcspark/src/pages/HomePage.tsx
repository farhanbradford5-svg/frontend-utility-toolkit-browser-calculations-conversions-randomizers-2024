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
  Triangle, Sigma, Database, Zap as ZapIcon,
  ShieldCheck, Globe, RefreshCw, Star, Users, BookOpen, Award
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Briefcase, DollarSign, Calendar, Heart, Activity, Car, HardHat,
  Calculator, Triangle, Sigma, BarChart2, Atom, Database, Lock, ChefHat, Grid,
  Ruler, MapPin, Square, Box, Zap: ZapIcon, Clock, Hash, HardDrive, Thermometer,
  UtensilsCrossed, Shuffle: ShuffleIcon,
};

// Counts derived from data
const TOTAL_TOOLS = ALL_TOOLS.length;
const CALC_CATS = CALCULATOR_SUBCATEGORIES.length;
const CONV_CATS = CONVERTER_SUBCATEGORIES.length;

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
          placeholder={`Search ${TOTAL_TOOLS}+ calculators, converters, tools...`}
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
      {/* ── Hero ── */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span>{TOTAL_TOOLS}+ free tools, always available</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            Every calculator<br />
            <span className="text-primary">you'll ever need</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Fast, accurate, browser-based tools for math, finance, health, science, and more.
            No sign-up. No ads. No data collection. Just answers.
          </p>
          <HeroSearch />
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-white/50">
            {['BMI', 'CompoundInterest', 'LoanCalculator', 'AgeCalculator', 'TipCalculator', 'UnitConverter', 'PercentageCalculator'].map(tag => (
              <Link key={tag} href={`/calculators`} className="hover:text-white transition-colors">
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* ── Stats bar ── */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: `${TOTAL_TOOLS}+`, label: 'Free Tools' },
            { value: `${CALC_CATS}`, label: 'Calculator Categories' },
            { value: `${CONV_CATS}`, label: 'Converter Categories' },
            { value: '100%', label: 'Browser-Based & Private' },
          ].map(stat => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="font-display font-bold text-2xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── Popular Calculators ── */}
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

        {/* ── Popular Converters ── */}
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

        {/* ── Popular Randomizers ── */}
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

        {/* ── Keyword-targeted topic spotlight: Finance ── */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-lg bg-green-500/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Financial Calculators</h2>
              <p className="text-sm text-muted-foreground">Compound interest, loans, mortgages, investments</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Whether you're calculating compound interest on your savings account, working out monthly mortgage payments, comparing loan offers, or planning retirement contributions — CalcSpark's financial calculators use the same formulas trusted by certified financial planners (CFPs) and banking professionals. Every result is computed instantly, entirely in your browser, with no data sent anywhere.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Compound Interest', 'Loan Calculator', 'Mortgage Calculator', 'APY Calculator', 'Percentage Calculator', 'VAT Calculator'].map(name => (
              <Link
                key={name}
                href="/calculators/finance"
                className="px-3 py-1.5 text-xs font-medium bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Keyword-targeted topic spotlight: Health & Fitness ── */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Heart className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Health & Fitness Calculators</h2>
              <p className="text-sm text-muted-foreground">BMI, TDEE, macros, heart rate zones, calories</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            From BMI and ideal body weight to calorie targets, macro splits, and training heart rate zones — our health and fitness calculators are built on peer-reviewed formulas including Mifflin-St Jeor (BMR), Karvonen (heart rate), and the WHO BMI classification scale. All calculations stay private in your browser. These tools are informational only — always consult a qualified healthcare professional for medical decisions.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BMI Calculator', 'TDEE Calculator', 'Calorie Calculator', 'Body Fat Calculator', 'Ideal Weight', 'Macro Calculator'].map(name => (
              <Link
                key={name}
                href="/calculators/health"
                className="px-3 py-1.5 text-xs font-medium bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Keyword-targeted topic spotlight: Math & Science ── */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <Atom className="h-5 w-5 text-indigo-500" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Math & Science Calculators</h2>
              <p className="text-sm text-muted-foreground">Algebra, geometry, physics, statistics, trigonometry</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Students and engineers rely on CalcSpark for everything from percentage and fraction calculations to Ohm's law, kinetic energy, standard deviation, and triangle solving. Our math and science toolkit covers {CALC_CATS} subject categories with over 180 individual calculators — covering topics from a GCSE/SAT level through university physics and engineering courses. All formulas are clearly displayed alongside results to support learning.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Ohm\'s Law", 'Standard Deviation', 'Quadratic Formula', 'Triangle Calculator', 'Z-Score', 'Kinetic Energy'].map(name => (
              <Link
                key={name}
                href="/calculators/mathematics"
                className="px-3 py-1.5 text-xs font-medium bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Keyword-targeted topic spotlight: Unit Converters ── */}
        <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <RefreshCw className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground">Unit Converters</h2>
              <p className="text-sm text-muted-foreground">Length, weight, temperature, volume, speed, data storage</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            CalcSpark's unit converter collection spans {CONV_CATS} categories and 75+ individual conversions — from everyday conversions like kilometers to miles, Celsius to Fahrenheit, and liters to gallons, to specialized conversions like binary to decimal, bytes to gigabytes, and nautical miles to kilometers. Both metric (SI) and imperial/US customary systems are fully supported, and all conversions update instantly as you type.
          </p>
          <div className="flex flex-wrap gap-2">
            {['km to Miles', 'Celsius to Fahrenheit', 'kg to Pounds', 'Liters to Gallons', 'Meters to Feet', 'MB to GB'].map(name => (
              <Link
                key={name}
                href="/converters"
                className="px-3 py-1.5 text-xs font-medium bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Calculator Categories ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Calculator Categories</h2>
              <p className="text-muted-foreground text-sm mt-1">{CALC_CATS} categories, 184+ calculators</p>
            </div>
            <Link href="/calculators" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              All categories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CALCULATOR_SUBCATEGORIES.map(sub => (
              <CategoryCard key={sub.slug} sub={sub} prefix="calculators" />
            ))}
          </div>
        </section>

        {/* ── Converter Categories ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Converter Categories</h2>
              <p className="text-muted-foreground text-sm mt-1">{CONV_CATS} categories, 77+ converters</p>
            </div>
            <Link href="/converters" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              All categories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONVERTER_SUBCATEGORIES.map(sub => (
              <CategoryCard key={sub.slug} sub={sub} prefix="converters" />
            ))}
          </div>
        </section>

        {/* ── How CalcSpark Works ── */}
        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How CalcSpark Works</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl">
            Unlike most calculator websites, CalcSpark runs every single calculation inside your own browser — here's what that means for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: ShieldCheck,
                color: 'text-green-500',
                bg: 'bg-green-500/10',
                title: 'Completely Private',
                body: 'Your inputs — financial figures, health metrics, personal data — never leave your device. CalcSpark has no backend servers processing your data, because all math happens in JavaScript running locally in your browser tab.',
              },
              {
                icon: Zap,
                color: 'text-primary',
                bg: 'bg-primary/10',
                title: 'Instant Results',
                body: 'No network round-trips, no loading spinners. Results update as you type because the calculations execute directly in your browser\'s JavaScript engine. Even on a slow connection, every tool works at full speed.',
              },
              {
                icon: Globe,
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                title: 'Works Offline',
                body: 'Once the page has loaded, all {TOTAL_TOOLS}+ tools continue to work without an internet connection. Use CalcSpark on a plane, in a basement, or anywhere connectivity is limited.',
              },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <div className={`h-10 w-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why CalcSpark (trust stats) ── */}
        <section className="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">Why Choose CalcSpark?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Accurate formulas, clear explanations, and instant results — all running directly in your browser with zero data collection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Instant results', desc: 'No loading, no waiting' },
              { icon: Calculator, title: 'Accurate formulas', desc: 'Peer-reviewed math' },
              { icon: Grid, title: `${TOTAL_TOOLS}+ tools`, desc: 'Everything in one place' },
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

        {/* ── FAQ ── */}
        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are all CalcSpark tools really free?',
                a: 'Yes — every calculator, converter, and generator on CalcSpark is completely free to use with no sign-up, no subscription, and no hidden fees. The site is funded independently by Muhammad Farhan as a public resource.',
              },
              {
                q: 'Does CalcSpark collect my data?',
                a: 'No. CalcSpark is a purely client-side application — every calculation runs locally in your browser using JavaScript. No inputs are ever sent to a server. We don\'t collect, store, or sell any personal data. There are no tracking cookies beyond standard analytics.',
              },
              {
                q: 'How accurate are the calculators?',
                a: 'All formulas are based on peer-reviewed mathematical, financial, scientific, and engineering standards — the same formulas used in textbooks, professional software, and academic research. Results are checked for accuracy, but like any tool, they are intended for informational use. Always verify critical calculations independently and consult a qualified professional for important decisions.',
              },
              {
                q: 'Can I use CalcSpark offline?',
                a: 'Yes. Once the page has loaded in your browser, all tools work without an active internet connection. The calculations execute entirely in your device\'s JavaScript engine with no server communication required.',
              },
              {
                q: 'What categories of calculators are available?',
                a: `CalcSpark has ${CALC_CATS} calculator categories (business, finance, health, fitness, math, geometry, trigonometry, statistics, physics, science, construction, transportation, cooking, cryptography, data, and more) plus ${CONV_CATS} converter categories (length, distance, area, volume, speed, temperature, data storage, cooking, and more) and randomizer tools — ${TOTAL_TOOLS}+ tools in total.`,
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Developer / EEAT section ── */}
        <section className="border border-border rounded-2xl overflow-hidden">
          <div className="hero-gradient p-6 sm:p-8 text-white">
            <div className="flex items-start gap-5">
              <div className="shrink-0 h-16 w-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">Built by an expert</div>
                <h2 className="font-display font-bold text-xl sm:text-2xl mb-2">Muhammad Farhan</h2>
                <p className="text-white/70 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Software engineer and digital marketing expert with 10+ years of experience building web tools, analytics systems, and growth platforms. CalcSpark was created to give everyone access to professional-grade calculation tools — without paywalls, ads, or data collection.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/digitalfarhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                  >
                    <Users className="h-4 w-4" />
                    About CalcSpark
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border">
            {[
              { icon: Star, value: '10+ years', label: 'Engineering experience' },
              { icon: Calculator, value: `${TOTAL_TOOLS}+`, label: 'Verified tools' },
              { icon: ShieldCheck, value: '100%', label: 'Client-side, no data sent' },
              { icon: Globe, value: 'Free forever', label: 'No sign-up or paywall' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About CalcSpark (for LLM/AI indexing) ── */}
        <section className="max-w-3xl">
          <h2 className="font-display font-bold text-xl text-foreground mb-4">About CalcSpark</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              CalcSpark is a free, browser-based calculator and converter website built to give everyone instant access to accurate mathematical, financial, health, and scientific tools — without creating an account, watching ads, or sharing personal data. Every one of the {TOTAL_TOOLS}+ tools runs entirely in your browser using client-side JavaScript. There is no backend server, no database, and no data transmission of any kind.
            </p>
            <p>
              The site covers {CALC_CATS} calculator categories — from business ROI and compound interest to BMI, TDEE, Ohm's law, standard deviation, geometry, and recipe scaling — and {CONV_CATS} converter categories handling length, distance, area, volume, temperature, speed, data storage, and more. Additionally, seven randomizer tools generate random numbers, passwords, colors, names, dice rolls, lists, and teams.
            </p>
            <p>
              CalcSpark was created by Muhammad Farhan, a software engineer and digital marketing expert with over a decade of experience. All formulas used on the site are based on internationally recognized standards from sources including the World Health Organization (WHO), the National Institute of Standards and Technology (NIST), the International Bureau of Weights and Measures (BIPM), and peer-reviewed academic literature. Results are intended for informational and educational purposes.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
export default HomePage;
