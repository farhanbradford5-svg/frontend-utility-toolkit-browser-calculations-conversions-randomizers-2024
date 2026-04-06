import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Mail, ExternalLink, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    document.title = "Contact Us – CalcSpark";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "Get in touch with the CalcSpark team. Report a bug, suggest a new calculator, or ask a question. We typically respond within 1–2 business days.";
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <MessageSquare className="h-4 w-4" /> Contact Us
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Have a question, found a bug, or want to suggest a new calculator?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-2">For all enquiries:</p>
              <a href="mailto:hello@calcspark.io" className="text-sm text-primary font-medium hover:underline">
                hello@calcspark.io
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within <strong className="text-foreground">1–2 business days</strong>.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="h-10 w-10 bg-[#0077B5]/10 rounded-xl flex items-center justify-center text-[#0077B5] mb-4">
                <ExternalLink className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-2">Connect with the creator:</p>
              <a
                href="https://www.linkedin.com/in/digitalfarhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#0077B5] font-medium hover:underline flex items-center gap-1"
              >
                Muhammad Farhan <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-2 text-sm">Common Reasons to Write</h3>
              <ul className="space-y-1.5">
                {[
                  "Report a calculation error",
                  "Suggest a new calculator",
                  "Partnership or collaboration",
                  "Press or media enquiry",
                  "General feedback",
                ].map(r => (
                  <li key={r} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
                  </p>
                  <Link href="/" className="inline-flex items-center gap-2 lime-gradient text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display font-bold text-xl text-foreground mb-1">Send a Message</h2>
                  <p className="text-sm text-muted-foreground mb-4">All fields are required.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-foreground">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Muhammad Farhan"
                        className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-foreground">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-foreground">Subject</label>
                    <select
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject…</option>
                      <option value="bug">Report a calculation error / bug</option>
                      <option value="suggestion">Suggest a new calculator or converter</option>
                      <option value="partnership">Partnership / collaboration</option>
                      <option value="press">Press / media enquiry</option>
                      <option value="other">General feedback / other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Describe your question or feedback in detail…"
                      className="w-full px-3 py-2.5 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full lime-gradient text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    We never sell your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
