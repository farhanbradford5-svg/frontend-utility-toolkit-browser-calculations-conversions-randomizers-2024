import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Shield } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy – CalcSpark";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "CalcSpark Privacy Policy. We don't collect, store, or share your calculation data. All tools run entirely in your browser.";
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Privacy Policy</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Last updated: January 2025</p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8 mt-6">
          <p className="text-sm text-foreground font-medium">
            <strong>Short version:</strong> CalcSpark does not collect, store, or sell your personal data.
            All calculations happen entirely in your browser. We don&apos;t even have a backend server to send data to.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <Section title="1. Who We Are">
            <p>CalcSpark (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a free online calculator and converter platform operated by Muhammad Farhan, a software engineer and digital marketing expert. Our website is located at calcspark.replit.app.</p>
            <p>For privacy-related questions, contact us at: <a href="mailto:hello@calcspark.io" className="text-primary hover:underline">hello@calcspark.io</a></p>
          </Section>

          <Section title="2. Information We Do NOT Collect">
            <p>CalcSpark is a purely client-side application. This means:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>We do <strong className="text-foreground">not</strong> collect or store any values you enter into our calculators</li>
              <li>We do <strong className="text-foreground">not</strong> track what tools you use</li>
              <li>We do <strong className="text-foreground">not</strong> require registration or login</li>
              <li>We do <strong className="text-foreground">not</strong> have user accounts</li>
              <li>We do <strong className="text-foreground">not</strong> sell data to third parties</li>
            </ul>
          </Section>

          <Section title="3. Information We May Collect Automatically">
            <p>Like most websites, our hosting infrastructure may collect standard server logs including:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>IP address (anonymised where possible)</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
            <p>This information is collected solely for website performance monitoring and security purposes. It is not linked to any personally identifiable information.</p>
          </Section>

          <Section title="4. Cookies">
            <p>CalcSpark uses minimal cookies to ensure the website functions correctly:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-foreground">Strictly necessary cookies:</strong> Required for the site to function (e.g., session management).</li>
              <li><strong className="text-foreground">Analytics cookies:</strong> We may use anonymised analytics (such as basic traffic counting) to understand how our tools are used. No personally identifiable data is collected.</li>
            </ul>
            <p>We do not use advertising cookies or share cookie data with advertisers.</p>
            <p>See our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for more information.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>CalcSpark may use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-foreground">Google Fonts:</strong> Fonts are loaded from Google's servers. Google may collect limited technical data per their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a>.</li>
              <li><strong className="text-foreground">Hosting provider:</strong> Our infrastructure provider may collect server-level logs as described above.</li>
            </ul>
          </Section>

          <Section title="6. Your Rights (GDPR)">
            <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Access any personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p>Because we collect virtually no personal data, exercising most of these rights will result in confirmation that we hold no data about you. Contact us at <a href="mailto:hello@calcspark.io" className="text-primary hover:underline">hello@calcspark.io</a> to make a request.</p>
          </Section>

          <Section title="7. California Privacy Rights (CCPA)">
            <p>California residents have the right to know what personal information we collect, to request deletion, and to opt out of the sale of personal information. CalcSpark does not sell personal information. We collect only the minimal data described in Section 3 above.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>CalcSpark does not knowingly collect any information from children under the age of 13. Our calculators are educational tools suitable for all ages, but we do not market to children or knowingly process their data.</p>
          </Section>

          <Section title="9. Data Security">
            <p>Since essentially no personal data is transmitted to our servers (all calculations are browser-side), the data security risk is minimal. Any server-level logs are stored securely and protected by our hosting provider's security infrastructure.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-1 ml-0">
              <li>Email: <a href="mailto:hello@calcspark.io" className="text-primary hover:underline">hello@calcspark.io</a></li>
              <li>Via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link></li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
