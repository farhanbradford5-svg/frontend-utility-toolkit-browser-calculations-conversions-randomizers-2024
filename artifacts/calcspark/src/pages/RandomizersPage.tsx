import { Link } from "wouter";
import { Layout, Breadcrumb } from "@/components/Layout";
import { ALL_TOOLS } from "@/data/tools";
import { ArrowRight } from "lucide-react";

export function RandomizersPage() {
  const tools = ALL_TOOLS.filter(t => t.category === 'randomizers');
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Randomizers' }]} />
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-foreground">Random Generators</h1>
          <p className="text-muted-foreground mt-2">Generate random numbers, passwords, colors, teams, and more</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(tool => (
            <Link key={tool.slug} href={tool.path} className="block">
              <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer tool-card-hover">
                <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
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
export default RandomizersPage;
