import { useEffect } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Shield, Award, Clock, Users, CheckCircle, ExternalLink, Zap, Star, BookOpen, Target } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About CalcSpark – Free Online Calculators & Converters";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "Learn about CalcSpark, built by Muhammad Farhan, a software engineer and marketing expert with 10+ years of experience. Free, accurate, browser-based calculators for everyone.";
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Zap className="h-4 w-4" /> About CalcSpark
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Free, Accurate Tools for Everyone
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            CalcSpark is a free, browser-based collection of 250+ calculators and converters
            built to give instant, accurate answers — no sign-up, no ads, no data collection.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: <Zap className="h-5 w-5" />, label: "250+ Tools", desc: "Calculators & converters" },
            { icon: <Shield className="h-5 w-5" />, label: "100% Free", desc: "No sign-up, ever" },
            { icon: <Clock className="h-5 w-5" />, label: "Instant Results", desc: "All in your browser" },
            { icon: <Users className="h-5 w-5" />, label: "No Data Shared", desc: "Privacy by design" },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="bg-card border border-border rounded-2xl p-4 text-center">
              <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                {icon}
              </div>
              <div className="font-display font-bold text-foreground text-sm">{label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" /> Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CalcSpark was created with a simple mission: give everyone access to the mathematical,
            financial, health, and scientific tools they need — for free, without friction. Too many
            calculator websites are cluttered with ads, require sign-ups, or send your data to
            remote servers. We built CalcSpark differently.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every single calculation on CalcSpark happens entirely inside your browser. We never
            collect your input data, never store your results, and never share anything with third
            parties. Our commitment is to accuracy, speed, and your privacy.
          </p>
        </div>

        {/* EEAT: Expertise & Experience */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> Our Expertise
            </h2>
            <ul className="space-y-3">
              {[
                "Mathematical formulas verified against peer-reviewed references",
                "Financial calculations aligned with industry-standard methods",
                "Health metrics based on WHO and scientific guidelines",
                "Physics formulas cross-checked with academic sources",
                "Unit conversions verified against NIST standards",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Why Trust CalcSpark?
            </h2>
            <ul className="space-y-3">
              {[
                "All tools are 100% client-side — no data ever leaves your device",
                "Open source formulas — you can verify every calculation",
                "No ads or monetization that could bias our tools",
                "Built by engineers with 10+ years in software and data",
                "Regular reviews and updates for accuracy and relevance",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* About the Creator - EEAT Author Card */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" /> Meet the Creator
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="shrink-0">
              <div className="h-20 w-20 rounded-2xl lime-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-lg">
                MF
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-display font-bold text-xl text-foreground">Muhammad Farhan</h3>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                  10+ Years Experience
                </span>
              </div>
              <p className="text-sm font-semibold text-primary mb-3">
                Software Engineer &amp; Digital Marketing Expert
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Muhammad Farhan is a seasoned software engineer and digital marketing expert with
                over a decade of hands-on experience building web applications, data tools, and
                digital products. His dual background in engineering and marketing gives him a
                unique perspective on building tools that are both technically accurate and
                genuinely useful for everyday people.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                With 10+ years working across software development, SEO, analytics, and digital
                strategy, Muhammad designed CalcSpark to fill a real gap: high-quality,
                trustworthy calculation tools that respect user privacy and deliver instant results
                without the bloat found on most calculator websites.
              </p>
              <a
                href="https://www.linkedin.com/in/digitalfarhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#006399] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Accuracy & Methodology */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">
            Our Accuracy Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every calculator on CalcSpark is built on well-established, publicly documented
            formulas. For financial tools, we follow standard amortization and interest models.
            For health tools, we use formulas validated by the World Health Organization (WHO)
            and major medical journals. For physics and math, we reference NIST (National
            Institute of Standards and Technology) and peer-reviewed textbooks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            All results are provided for informational and educational purposes. For medical,
            legal, or financial decisions, always consult a qualified professional. See our{" "}
            <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>{" "}
            for details.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">What We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Mathematics", "Finance & Banking", "Health & Fitness", "Geometry",
              "Statistics", "Physics", "Date & Time", "Construction",
              "Business", "Cooking", "Cryptography", "Trigonometry",
              "Transportation", "Unit Converters", "Randomizers", "And more…",
            ].map(cat => (
              <div key={cat} className="bg-secondary rounded-lg px-3 py-2 text-sm text-foreground/80 text-center">
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 lime-gradient text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            <Zap className="h-4 w-4" /> Explore All Tools
          </Link>
          <p className="text-xs text-muted-foreground mt-3">
            Have a question or feedback?{" "}
            <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
