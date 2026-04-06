import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Cookie } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function CookiePage() {
  useEffect(() => {
    document.title = "Cookie Policy – CalcSpark";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "CalcSpark Cookie Policy. We use minimal cookies to keep the site running. No advertising or tracking cookies.";
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Cookie Policy</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Last updated: January 2025</p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8 mt-6">
          <p className="text-sm text-foreground font-medium">
            <strong>Short version:</strong> CalcSpark uses minimal, essential cookies only. We do not use advertising cookies or sell your data to advertisers.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <Section title="1. What Are Cookies?">
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, such as preferences and settings, to improve your experience.</p>
          </Section>

          <Section title="2. How CalcSpark Uses Cookies">
            <p>CalcSpark uses a minimal number of cookies to ensure the website functions correctly. Because our calculators are entirely client-side, we have very little need for cookies compared to typical websites.</p>
          </Section>

          <Section title="3. Types of Cookies We Use">
            <div className="overflow-x-auto -mx-1">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Purpose</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Strictly Necessary</td>
                    <td className="py-2.5 px-3">Required for the website to function. Cannot be disabled.</td>
                    <td className="py-2.5 px-3">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Analytics (anonymised)</td>
                    <td className="py-2.5 px-3">Helps us understand which tools are most used (no personal data).</td>
                    <td className="py-2.5 px-3">Up to 12 months</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground">Preference</td>
                    <td className="py-2.5 px-3">Remembers any display preferences you set (e.g., theme).</td>
                    <td className="py-2.5 px-3">Up to 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">We do <strong className="text-foreground">not</strong> use advertising cookies, social media tracking cookies, or any cookies that track you across other websites.</p>
          </Section>

          <Section title="4. Third-Party Cookies">
            <p>We use Google Fonts to display our website&apos;s typography. Google may set cookies when fonts are loaded. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google&apos;s Privacy Policy</a> for details on their cookie use.</p>
          </Section>

          <Section title="5. Managing Cookies">
            <p>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>View which cookies are stored</li>
              <li>Delete some or all cookies</li>
              <li>Block cookies from specific or all sites</li>
            </ul>
            <p>Note: blocking all cookies may affect the website&apos;s functionality. Our calculators will continue to work without cookies as they are fully client-side.</p>
            <p>Browser-specific guidance: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a>, <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a>, <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a>.</p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p>We may update this Cookie Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect any changes.</p>
          </Section>

          <Section title="7. Contact">
            <p>For questions about our use of cookies:</p>
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
