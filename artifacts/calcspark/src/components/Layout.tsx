import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { searchTools, ALL_TOOLS, CALCULATOR_SUBCATEGORIES, CONVERTER_SUBCATEGORIES, type Tool } from "@/data/tools";
import { Search, Zap, X, ChevronDown, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Calculators", href: "/calculators", subcategories: CALCULATOR_SUBCATEGORIES },
  { label: "Converters", href: "/converters", subcategories: CONVERTER_SUBCATEGORIES },
  { label: "Randomizers", href: "/randomizers", subcategories: [] },
];

function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchTools(query).slice(0, 8));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Search 150+ tools..."
          className="w-full pl-9 pr-9 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          {results.map(tool => (
            <Link
              key={tool.slug}
              href={tool.path}
              onClick={() => { setQuery(""); setOpen(false); }}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full capitalize">
                {tool.subcategory.replace('-', ' ')}
              </span>
              <span className="text-sm font-medium text-foreground">{tool.name}</span>
            </Link>
          ))}
        </div>
      )}
      {open && query.trim() && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-lg z-50 p-4 text-center text-sm text-muted-foreground">
          No tools found for "{query}"
        </div>
      )}
    </div>
  );
}

function NavDropdown({ label, href, subcategories }: (typeof NAV_ITEMS)[0]) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  if (!subcategories.length) {
    return (
      <Link href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-1">
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-1"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-card border border-border rounded-xl shadow-lg z-50 p-4">
          <div className="grid grid-cols-2 gap-1">
            {subcategories.map(sub => (
              <Link
                key={sub.slug}
                href={`/${label.toLowerCase()}/${sub.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{sub.name}</span>
                <span className="text-xs text-muted-foreground truncate">&mdash; {sub.description}</span>
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all {label.toLowerCase()} &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="h-8 w-8 lime-gradient rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Calc<span className="text-primary">Spark</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5">
              {NAV_ITEMS.map(item => (
                <NavDropdown key={item.href} {...item} />
              ))}
            </nav>

            {/* Search */}
            <div className="hidden md:flex flex-1 justify-center">
              <GlobalSearch />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-auto p-2 text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
            <GlobalSearch />
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map(item => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground py-2 border-b border-border/50">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 lime-gradient rounded-lg flex items-center justify-center">
                  <Zap className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-background">
                  Calc<span className="text-primary">Spark</span>
                </span>
              </div>
              <p className="text-xs text-background/60 leading-relaxed">
                Free, accurate, browser-based calculators and converters for everyday use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-background mb-3">Calculators</h3>
              <ul className="space-y-1.5">
                {CALCULATOR_SUBCATEGORIES.slice(0, 6).map(sub => (
                  <li key={sub.slug}>
                    <Link href={`/calculators/${sub.slug}`} className="text-xs text-background/60 hover:text-background transition-colors">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-background mb-3">More Calculators</h3>
              <ul className="space-y-1.5">
                {CALCULATOR_SUBCATEGORIES.slice(6, 12).map(sub => (
                  <li key={sub.slug}>
                    <Link href={`/calculators/${sub.slug}`} className="text-xs text-background/60 hover:text-background transition-colors">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-background mb-3">Converters</h3>
              <ul className="space-y-1.5">
                {CONVERTER_SUBCATEGORIES.slice(0, 6).map(sub => (
                  <li key={sub.slug}>
                    <Link href={`/converters/${sub.slug}`} className="text-xs text-background/60 hover:text-background transition-colors">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-background/50">
              &copy; {new Date().getFullYear()} CalcSpark. All calculations are for informational purposes only.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-xs text-background/50 hover:text-background transition-colors">Home</Link>
              <Link href="/calculators" className="text-xs text-background/50 hover:text-background transition-colors">Calculators</Link>
              <Link href="/converters" className="text-xs text-background/50 hover:text-background transition-colors">Converters</Link>
              <Link href="/randomizers" className="text-xs text-background/50 hover:text-background transition-colors">Randomizers</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground transition-colors capitalize">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export default Layout;
