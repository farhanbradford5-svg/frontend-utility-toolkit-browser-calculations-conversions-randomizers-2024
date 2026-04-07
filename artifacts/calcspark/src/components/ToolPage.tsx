import React, { useEffect } from "react";
import { Link } from "wouter";
import { Layout, Breadcrumb } from "./Layout";
import { ALL_TOOLS, type Tool } from "@/data/tools";
import { TOOL_SEO } from "@/data/toolSeo";
import { Calculator, ExternalLink, ArrowRight } from "lucide-react";

interface ToolPageProps {
  tool: Tool;
  children: React.ReactNode;
  relatedSlugs?: string[];
}

export function ToolPage({ tool, children, relatedSlugs }: ToolPageProps) {
  const related = relatedSlugs
    ? relatedSlugs.map(s => ALL_TOOLS.find(t => t.slug === s)).filter(Boolean) as Tool[]
    : ALL_TOOLS.filter(t =>
        t.subcategory === tool.subcategory && t.slug !== tool.slug
      ).slice(0, 6);

  const categoryLabel = tool.category === 'calculators' ? 'Calculators' :
                        tool.category === 'converters' ? 'Converters' : 'Randomizers';

  const sameCategoryTools = ALL_TOOLS.filter(t =>
    t.category === tool.category && t.subcategory !== tool.subcategory
  ).slice(0, 4);

  const seo = TOOL_SEO[tool.slug];

  useEffect(() => {
    const prev = document.title;
    document.title = `${tool.name} – CalcSpark`;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content = seo
      ? seo.quickAnswer
      : `${tool.description} Free, instant, browser-based — no sign-up required.`;

    return () => {
      document.title = prev;
      if (metaDesc) metaDesc.content = prevDesc;
    };
  }, [tool, seo]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: categoryLabel, href: `/${tool.category}` },
          ...(tool.category !== 'randomizers' ? [{
            label: tool.subcategory.replace(/-/g, ' '),
            href: `/${tool.category}/${tool.subcategory}`,
          }] : []),
          { label: tool.name },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">{tool.name}</h1>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">{tool.description}</p>

            {/* Quick Answer */}
            {seo && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Quick Answer</p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{seo.quickAnswer}</p>
              </div>
            )}

            {/* Tool UI */}
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm">
              {children}
            </div>

            {/* Cross-category links on mobile (below tool) */}
            {sameCategoryTools.length > 0 && (
              <div className="mt-6 lg:hidden">
                <h3 className="text-sm font-semibold text-foreground mb-3">More {categoryLabel}</h3>
                <div className="flex flex-wrap gap-2">
                  {sameCategoryTools.map(t => (
                    <Link
                      key={t.slug}
                      href={t.path}
                      className="text-xs px-3 py-1.5 bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
                    >
                      {t.name}
                    </Link>
                  ))}
                  <Link
                    href={`/${tool.category}`}
                    className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full transition-colors font-medium"
                  >
                    View all &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* SEO Content Sections */}
            {seo && (
              <div className="mt-10 space-y-8">

                {/* What Is */}
                <section>
                  <h2 className="font-display font-bold text-xl text-foreground mb-3">What Is the {tool.name}?</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{seo.whatIs}</p>
                </section>

                {/* How To Use */}
                {seo.howToUse.length > 0 && (
                  <section>
                    <h2 className="font-display font-bold text-xl text-foreground mb-3">How to Use This Calculator</h2>
                    <ol className="space-y-2">
                      {seo.howToUse.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {/* Formula */}
                {seo.formula && (
                  <section>
                    <h2 className="font-display font-bold text-xl text-foreground mb-3">Formula &amp; How It Works</h2>
                    <div className="bg-secondary rounded-xl p-4 border border-border">
                      <p className="text-sm text-foreground leading-relaxed">{seo.formula}</p>
                    </div>
                  </section>
                )}

                {/* Examples */}
                {seo.examples.length > 0 && (
                  <section>
                    <h2 className="font-display font-bold text-xl text-foreground mb-4">Worked Examples</h2>
                    <div className="space-y-4">
                      {seo.examples.map((ex, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl p-5">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{ex.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium text-foreground">Scenario: </span>{ex.scenario}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            <span className="text-foreground font-normal">Result: </span>{ex.result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Use Cases */}
                {seo.useCases.length > 0 && (
                  <section>
                    <h2 className="font-display font-bold text-xl text-foreground mb-3">Common Use Cases</h2>
                    <ul className="space-y-2">
                      {seo.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* FAQs */}
                {seo.faqs.length > 0 && (
                  <section>
                    <h2 className="font-display font-bold text-xl text-foreground mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                      {seo.faqs.map((faq, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl p-5">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{faq.q}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* AI Q&A */}
                {seo.aiQA.length > 0 && (
                  <section className="bg-card border border-border rounded-2xl p-6">
                    <h2 className="font-display font-bold text-xl text-foreground mb-4">Common Questions Answered</h2>
                    <div className="divide-y divide-border">
                      {seo.aiQA.map((qa, i) => (
                        <div key={i} className="py-3 first:pt-0 last:pb-0">
                          <p className="font-semibold text-foreground text-sm mb-1">{qa.q}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{qa.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {related.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-primary" />
                  Related Tools
                </h2>
                <ul className="space-y-1">
                  {related.map(r => (
                    <li key={r.slug}>
                      <Link
                        href={r.path}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {r.name}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${tool.category}/${tool.subcategory}`}
                  className="flex items-center gap-1 mt-3 pt-3 border-t border-border text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  All {tool.subcategory.replace(/-/g, ' ')} tools <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5">
              <h3 className="font-semibold text-sm text-foreground mb-2">How to use</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enter your values in the fields and click Calculate or press Enter.
                All calculations happen instantly in your browser — no data is sent anywhere.
              </p>
            </div>

            {/* Cross-category sidebar links (desktop) */}
            {sameCategoryTools.length > 0 && (
              <div className="hidden lg:block bg-card border border-border rounded-2xl p-5">
                <h3 className="font-semibold text-sm text-foreground mb-3">More {categoryLabel}</h3>
                <ul className="space-y-1">
                  {sameCategoryTools.map(t => (
                    <li key={t.slug}>
                      <Link
                        href={t.path}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors group text-xs"
                      >
                        <span className="text-foreground/80 group-hover:text-primary transition-colors">{t.name}</span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${tool.category}`}
                  className="flex items-center gap-1 mt-2 pt-2 border-t border-border text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  All {categoryLabel} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface FieldProps {
  label: string;
  hint?: string;
  children: React.ReactNode;
}

export function Field({ label, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-foreground">{label}</label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {children}
    </div>
  );
}

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors ${className}`}
    />
  );
}

export function Select({ className = "", children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors ${className}`}
    >
      {children}
    </select>
  );
}

export function CalcButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`w-full sm:w-auto px-6 py-2.5 lime-gradient text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

interface ResultBoxProps {
  label?: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
}

export function ResultBox({ label, value, unit, highlight }: ResultBoxProps) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-primary/10 border-primary/30' : 'bg-secondary border-border'}`}>
      {label && <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">{label}</p>}
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className={`text-xl sm:text-2xl font-display font-bold break-all ${highlight ? 'text-primary' : 'text-foreground'}`}>
          {value}
        </span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
    </div>
  );
}

export function ResultGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">{children}</div>;
}
