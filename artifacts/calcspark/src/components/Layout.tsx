import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { searchTools, ALL_TOOLS, CALCULATOR_SUBCATEGORIES, CONVERTER_SUBCATEGORIES, type Tool } from "@/data/tools";
import { Search, Zap, X, ChevronDown, Menu, ChevronRight } from "lucide-react";

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
          placeholder="Search 250+ tools..."
          aria-label="Search calculators and converters"
          className="w-full pl-9 pr-9 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); }}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          {results.map(tool => (
            <Link
              key={tool.slug}
              href={tool.path}
              onClick={() => { setQuery(""); setOpen(false); }}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors"
            >
              <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full capitalize">
                {tool.subcategory.replace(/-/g, ' ')}
              </span>
              <span className="text-sm font-medium text-foreground truncate">{tool.name}</span>
            </Link>
          ))}
        </div>
      )}
      {open && query.trim() && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl z-50 p-4 text-center text-sm text-muted-foreground">
          No tools found for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}

function NavDropdown({ label, href, subcategories }: (typeof NAV_ITEMS)[0]) {
  const [open, setOpen] = useState(false);
  const [dropStyle, setDropStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);

  const computePosition = useCallback(() => {
    if (ref.current) {
      const btn = ref.current.getBoundingClientRect();
      const vpW = window.innerWidth;
      const dropW = Math.min(600, vpW - 16);
      const idealLeft = btn.left + btn.width / 2 - dropW / 2;
      const clampedLeft = Math.max(8, Math.min(idealLeft, vpW - dropW - 8));
      setDropStyle({ left: clampedLeft - btn.left, width: dropW });
    }
  }, []);

  useEffect(() => {
    if (open) computePosition();
  }, [open, computePosition]);

  useEffect(() => {
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function k(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", h);
    document.addEventListener("keydown", k);
    return () => {
      document.removeEventListener("mousedown", h);
      document.removeEventListener("keydown", k);
    };
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
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-1 py-1"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          style={dropStyle}
          className="absolute top-full mt-3 bg-card border border-border rounded-xl shadow-xl z-50 p-4"
        >
          <div className="grid grid-cols-2 gap-1">
            {subcategories.map(sub => (
              <Link
                key={sub.slug}
                href={`/${label.toLowerCase()}/${sub.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors group"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{sub.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{sub.description}</div>
                </div>
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="CalcSpark Home">
              <div className="h-8 w-8 lime-gradient rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Calc<span className="text-primary">Spark</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
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
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden ml-auto p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3">
              <GlobalSearch />
            </div>
            <nav className="flex flex-col border-t border-border" aria-label="Mobile navigation">
              {NAV_ITEMS.map(item => (
                <div key={item.href}>
                  {item.subcategories.length > 0 ? (
                    <>
                      <button
                        onClick={() => setExpandedSection(expandedSection === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                        aria-expanded={expandedSection === item.label}
                      >
                        {item.label}
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${expandedSection === item.label ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedSection === item.label && (
                        <div className="bg-secondary/50 border-t border-border px-4 py-3 grid grid-cols-2 gap-1">
                          {item.subcategories.map(sub => (
                            <Link
                              key={sub.slug}
                              href={`/${item.label.toLowerCase()}/${sub.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="col-span-2 px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary rounded-lg transition-colors mt-1"
                          >
                            View all {item.label} &rarr;
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 lime-gradient rounded-lg flex items-center justify-center">
                  <Zap className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-background">
                  Calc<span className="text-primary">Spark</span>
                </span>
              </Link>
              <p className="text-xs text-background/60 leading-relaxed">
                Free, accurate, browser-based calculators and converters for everyday use. No sign-up, no ads.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-background mb-3">Calculators</h3>
              <ul className="space-y-1.5">
                {CALCULATOR_SUBCATEGORIES.slice(0, 7).map(sub => (
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
                {CALCULATOR_SUBCATEGORIES.slice(7, 14).map(sub => (
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
                {CONVERTER_SUBCATEGORIES.map(sub => (
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
            <div className="flex gap-4 flex-wrap justify-center">
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
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
      <Link href="/" className="hover:text-foreground transition-colors shrink-0">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5 shrink-0">
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
