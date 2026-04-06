import { Link } from "wouter";
import { Layout, Breadcrumb } from "@/components/Layout";
import { ALL_TOOLS, CALCULATOR_SUBCATEGORIES, CONVERTER_SUBCATEGORIES, getToolsBySubcategory, type ToolCategory, type Subcategory } from "@/data/tools";
import { ArrowRight } from "lucide-react";

interface CategoryPageProps {
  category: ToolCategory;
  subcategory: string;
}

export function CategoryPage({ category, subcategory }: CategoryPageProps) {
  const allSubs = category === 'calculators' ? CALCULATOR_SUBCATEGORIES : CONVERTER_SUBCATEGORIES;
  const sub = allSubs.find(s => s.slug === subcategory);
  const tools = getToolsBySubcategory(category, subcategory);
  const categoryLabel = category === 'calculators' ? 'Calculators' : 'Converters';

  if (!sub) return <NotFoundSection />;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: categoryLabel, href: `/${category}` },
          { label: sub.name },
        ]} />

        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-foreground">{sub.name} {categoryLabel}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{sub.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(tool => (
            <Link key={tool.slug} href={tool.path} className="block">
              <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer tool-card-hover">
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

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label }]} />

        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-foreground">All {label}</h1>
          <p className="text-muted-foreground mt-2">Browse all {label.toLowerCase()} by category</p>
        </div>

        <div className="space-y-10">
          {allSubs.map(sub => {
            const tools = getToolsBySubcategory(category, sub.slug);
            return (
              <div key={sub.slug}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-semibold text-xl text-foreground">{sub.name}</h2>
                  <Link
                    href={`/${category}/${sub.slug}`}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View all {tools.length} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {tools.slice(0, 8).map(tool => (
                    <Link key={tool.slug} href={tool.path} className="block">
                      <div className="bg-card border border-border rounded-xl p-3 hover:border-primary/40 hover:shadow-sm transition-all group cursor-pointer">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
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
        <p className="text-muted-foreground mb-6">This category doesn't exist yet.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
          Go home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Layout>
  );
}
export default CategoryPage;
