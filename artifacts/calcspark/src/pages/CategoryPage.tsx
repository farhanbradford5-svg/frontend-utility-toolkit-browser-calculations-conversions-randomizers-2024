import { useEffect } from "react";
import { Link } from "wouter";
import { Layout, Breadcrumb } from "@/components/Layout";
import { getToolsBySubcategory, CALCULATOR_SUBCATEGORIES, CONVERTER_SUBCATEGORIES, type ToolCategory } from "@/data/tools";
import { CATEGORY_CONTENT } from "@/data/categoryContent";
import { ArrowRight, ChevronDown } from "lucide-react";

interface CategoryPageProps {
  category: ToolCategory;
  subcategory: string;
}

export function CategoryPage({ category, subcategory }: CategoryPageProps) {
  const allSubs = category === 'calculators' ? CALCULATOR_SUBCATEGORIES : CONVERTER_SUBCATEGORIES;
  const sub = allSubs.find(s => s.slug === subcategory);
  const tools = getToolsBySubcategory(category, subcategory);
  const categoryLabel = category === 'calculators' ? 'Calculators' : 'Converters';
  const contentKey = `${category}/${subcategory}`;
  const content = CATEGORY_CONTENT[contentKey];

  useEffect(() => {
    if (!sub) return;
    const prev = document.title;
    document.title = `${sub.name} ${categoryLabel} – Free Online Tools – CalcSpark`;
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content = content?.intro ?? `${tools.length} free online ${sub.name.toLowerCase()} ${categoryLabel.toLowerCase()}. ${sub.description}. No sign-up required — all calculations run in your browser.`;
    return () => {
      document.title = prev;
      if (metaDesc) metaDesc.content = prevDesc;
    };
  }, [sub, tools.length, categoryLabel, content]);

  if (!sub) return <NotFoundSection />;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: categoryLabel, href: `/${category}` },
          { label: sub.name },
        ]} />

        {/* Page header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            {sub.name} {categoryLabel}
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl text-sm sm:text-base">
            {content?.intro ?? sub.description}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
              {tools.length} free {categoryLabel.toLowerCase()}
            </span>
            <span>No sign-up • Works offline • 100% browser-based</span>
          </div>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {tools.map(tool => (
            <Link key={tool.slug} href={tool.path} className="block group">
              <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all h-full">
                <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                  Open tool <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Rich content section (for SEO, LLM/AI indexing, and user education) */}
        {content && (
          <div className="mt-12 space-y-10">

            {/* About this category */}
            <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4">
                About {sub.name} {categoryLabel}
              </h2>
              <div className="space-y-4">
                {content.about.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* FAQ section */}
            <section>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4 flex items-center gap-2">
                <ChevronDown className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {content.faqs.map((faq, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Accuracy notice */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
              <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">i</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                All {sub.name.toLowerCase()} {categoryLabel.toLowerCase()} on CalcSpark use peer-reviewed formulas and run entirely in your browser. Results are for informational and educational purposes. Consult a qualified professional for decisions with legal, medical, or financial consequences.
              </p>
            </div>
          </div>
        )}

        {/* Cross links to other subcategories */}
        <div className="mt-10 pt-8 border-t border-border">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">
            More {categoryLabel}
          </h2>
          <div className="flex flex-wrap gap-2">
            {allSubs.filter(s => s.slug !== subcategory).map(s => (
              <Link
                key={s.slug}
                href={`/${category}/${s.slug}`}
                className="px-3 py-1.5 text-sm bg-secondary hover:bg-primary/10 text-foreground hover:text-primary rounded-full transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface AllCategoriesPageProps {
  category: ToolCategory;
}

export function AllCategoriesPage({ category }: AllCategoriesPageProps) {
  const allSubs = category === 'calculators' ? CALCULATOR_SUBCATEGORIES : CONVERTER_SUBCATEGORIES;
  const label = category === 'calculators' ? 'Calculators' : 'Converters';
  const totalTools = allSubs.reduce((sum, sub) => sum + getToolsBySubcategory(category, sub.slug).length, 0);

  useEffect(() => {
    const prev = document.title;
    document.title = `Free Online ${label} – ${totalTools}+ Tools – CalcSpark`;
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content = `Browse all ${totalTools}+ free online ${label.toLowerCase()} at CalcSpark — ${allSubs.length} categories covering ${label === 'Calculators' ? 'math, finance, health, physics, geometry, science, and more' : 'length, weight, temperature, volume, speed, data, and more'}. No sign-up required.`;
    return () => {
      document.title = prev;
      if (metaDesc) metaDesc.content = prevDesc;
    };
  }, [label, allSubs.length, totalTools]);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label }]} />

        <div className="mb-6 sm:mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            All {label}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            {totalTools}+ free {label.toLowerCase()} across {allSubs.length} categories — all running in your browser, no sign-up required.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {allSubs.map(sub => {
            const tools = getToolsBySubcategory(category, sub.slug);
            return (
              <div key={sub.slug}>
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                  <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground">{sub.name}</h2>
                  <Link
                    href={`/${category}/${sub.slug}`}
                    className="flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors shrink-0"
                  >
                    See all {tools.length} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {tools.slice(0, 8).map(tool => (
                    <Link key={tool.slug} href={tool.path} className="block group">
                      <div className="bg-card border border-border rounded-xl p-3 hover:border-primary/40 hover:shadow-sm transition-all h-full">
                        <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {tool.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

function NotFoundSection() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-bold text-3xl text-foreground mb-3">Category Not Found</h1>
        <p className="text-muted-foreground mb-6">This category doesn&apos;t exist yet.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
          Go home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Layout>
  );
}
export default CategoryPage;
