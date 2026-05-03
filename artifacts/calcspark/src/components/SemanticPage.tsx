import React, { useEffect } from "react";
import { Link } from "wouter";
import { Layout, Breadcrumb } from "./Layout";
import { SEMANTIC_PAGES } from "@/data/semanticPages";
import { ArrowRight, BookOpen, FlaskConical, Lightbulb, HelpCircle } from "lucide-react";

interface SemanticPageProps {
  subcategory: string;
  page: string;
}

export function SemanticPage({ subcategory, page }: SemanticPageProps) {
  const meta = SEMANTIC_PAGES[page];

  useEffect(() => {
    if (!meta) return;
    const prev = document.title;
    document.title = `${meta.title} – CalcSpark`;
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content = meta.description;
    return () => {
      document.title = prev;
      if (metaDesc) metaDesc.content = prevDesc;
    };
  }, [meta]);

  if (!meta) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">This guide or formula page doesn't exist yet.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            Go to Homepage
          </Link>
        </div>
      </Layout>
    );
  }

  const breadcrumbCategory = meta.toolPath.startsWith('/calculators') ? 'Calculators' : 'Converters';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: breadcrumbCategory, href: meta.toolPath.startsWith('/calculators') ? '/calculators' : '/converters' },
          { label: subcategory.replace(/-/g, ' '), href: `/${meta.toolPath.split('/')[1]}/${subcategory}` },
          { label: meta.title },
        ]} />

        {/* Hero */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            {meta.pageType === 'formula' ? 'Formula Guide' : meta.pageType === 'how-to' ? 'How-To Guide' : 'Comparison'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
            {meta.hero.heading}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {meta.hero.subheading}
          </p>
        </div>

        {/* CTA to Calculator */}
        <Link
          href={meta.toolPath}
          className="flex items-center justify-between p-4 mb-10 bg-primary/10 border border-primary/25 rounded-2xl hover:bg-primary/15 transition-colors group"
        >
          <div>
            <p className="font-semibold text-foreground text-sm">Use the Free Calculator</p>
            <p className="text-xs text-muted-foreground mt-0.5">Get instant results — no sign-up required</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="space-y-10">

          {/* Formula */}
          {meta.formula && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="h-5 w-5 text-primary" />
                <h2 className="font-display font-bold text-xl text-foreground">The Formula</h2>
              </div>
              <div className="bg-secondary border border-border rounded-2xl p-6 mb-4">
                <p className="text-base font-mono text-foreground leading-relaxed font-semibold">{meta.formula.expression}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{meta.formula.explanation}</p>
              {meta.formula.variables.length > 0 && (
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="bg-secondary px-4 py-2 border-b border-border">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Variable Reference</p>
                  </div>
                  <div className="divide-y divide-border">
                    {meta.formula.variables.map((v, i) => (
                      <div key={i} className="flex items-start gap-4 px-4 py-3">
                        <span className="font-mono text-primary font-bold text-sm shrink-0 w-16">{v.symbol}</span>
                        <span className="text-sm text-muted-foreground">{v.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Steps / How To */}
          {meta.steps && meta.steps.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-foreground mb-4">Step-by-Step Guide</h2>
              <ol className="space-y-4">
                {meta.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{step.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Examples */}
          {meta.examples && meta.examples.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-foreground mb-4">Worked Examples</h2>
              <div className="space-y-4">
                {meta.examples.map((ex, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">{ex.title}</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium text-foreground">Given: </span><span className="text-muted-foreground">{ex.given}</span></p>
                      <p><span className="font-medium text-foreground">Solution: </span><span className="text-muted-foreground">{ex.solution}</span></p>
                      <p className="pt-1 border-t border-border">
                        <span className="font-semibold text-primary">Answer: </span>
                        <span className="text-foreground font-medium">{ex.answer}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Table */}
          {meta.table && (
            <section>
              <h2 className="font-display font-bold text-xl text-foreground mb-4">Reference Table</h2>
              <div className="border border-border rounded-xl overflow-hidden overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary">
                    <tr>
                      {meta.table.headers.map((h, i) => (
                        <th key={i} className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {meta.table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-secondary/50 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Prose Sections */}
          {meta.prose && meta.prose.map((section, i) => (
            <section key={i}>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-primary shrink-0" />
                <h2 className="font-display font-bold text-xl text-foreground">{section.heading}</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}

          {/* FAQs */}
          {meta.faqs.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h2 className="font-display font-bold text-xl text-foreground">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {meta.faqs.map((faq, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Ready to Calculate?</h2>
            <p className="text-sm text-muted-foreground mb-4">Use our free, instant calculator — no sign-up, no ads, works in your browser.</p>
            <Link
              href={meta.toolPath}
              className="inline-flex items-center gap-2 px-6 py-3 lime-gradient text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Open Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
