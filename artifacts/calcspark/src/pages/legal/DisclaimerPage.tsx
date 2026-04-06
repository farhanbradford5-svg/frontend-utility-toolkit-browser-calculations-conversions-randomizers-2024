import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer – CalcSpark";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "CalcSpark Disclaimer. Our tools are for informational purposes only. Always consult qualified professionals for medical, legal, and financial decisions.";
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-600 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Disclaimer</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Last updated: January 2025</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 mt-6">
          <p className="text-sm text-yellow-900 font-medium">
            <strong>Important:</strong> CalcSpark&apos;s tools are for informational and educational purposes only.
            They are not substitutes for professional medical, legal, financial, or engineering advice.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <Section title="General Disclaimer">
            <p>The information and tools provided on CalcSpark (&ldquo;the Site&rdquo;) are for general informational and educational purposes only. While we strive for accuracy in all our calculators and converters, we make no representations or warranties about the completeness, reliability, suitability, or accuracy of the results.</p>
            <p>Any use of the tools or information on this Site is entirely at your own risk. CalcSpark, its creator, and contributors shall not be liable for any loss or damage arising from the use of, or reliance on, information provided on this Site.</p>
          </Section>

          <Section title="Medical Disclaimer">
            <p>Health and fitness calculators on CalcSpark — including but not limited to BMI calculators, calorie calculators, BMR calculators, and body fat calculators — are intended for general educational purposes <strong className="text-foreground">only</strong>.</p>
            <p>These tools are <strong className="text-foreground">not a substitute</strong> for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay seeking it because of results from our tools.</p>
            <p>If you have a medical condition, please consult a qualified healthcare professional before making any health or lifestyle decisions based on results from any calculator.</p>
          </Section>

          <Section title="Financial Disclaimer">
            <p>Financial calculators on CalcSpark — including loan calculators, compound interest calculators, investment return calculators, and salary calculators — are provided for <strong className="text-foreground">illustrative and educational purposes only</strong>.</p>
            <p>Results should not be construed as financial, investment, tax, or legal advice. Financial situations vary widely between individuals, and actual results may differ significantly from calculator outputs due to factors such as market conditions, tax laws, lender-specific terms, and other variables.</p>
            <p>Always consult a qualified financial advisor, accountant, or legal professional before making financial decisions.</p>
          </Section>

          <Section title="Legal Disclaimer">
            <p>No content on CalcSpark constitutes legal advice. Do not use any tool or information on this Site as the basis for legal decisions. Consult a qualified attorney for any legal matters.</p>
          </Section>

          <Section title="Engineering &amp; Construction Disclaimer">
            <p>Geometry, physics, and construction calculators are provided for educational reference only. They should not be used for structural engineering, load-bearing calculations, or any purpose where safety is a concern. Always work with licensed engineers for construction and structural projects.</p>
          </Section>

          <Section title="Accuracy of Calculations">
            <p>While CalcSpark is built on well-established mathematical formulas and we conduct regular accuracy reviews, no calculator can guarantee perfect accuracy in all edge cases. Floating-point arithmetic limitations, rounding, and formula simplifications may cause minor discrepancies from exact values.</p>
            <p>If you believe a calculation is incorrect, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> so we can investigate and correct it.</p>
          </Section>

          <Section title="External Links">
            <p>CalcSpark may link to external websites for reference or attribution. We are not responsible for the content, accuracy, or availability of those external sites.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have questions about this Disclaimer or believe any calculation on our site is inaccurate, please reach out:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:hello@calcspark.io" className="text-primary hover:underline">hello@calcspark.io</a></li>
              <li>Via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link></li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
