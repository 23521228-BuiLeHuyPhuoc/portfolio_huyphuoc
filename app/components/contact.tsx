"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "huyphuoc09112005@gmail.com" },
  { icon: Phone, label: "Phone", value: "0373025859" },
  { icon: MapPin, label: "Location", value: "Thu Duc Ward, Ho Chi Minh City, Vietnam" },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    setSent(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Could not send your message.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "", website: "" });
      window.setTimeout(() => setSent(false), 4000);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="font-dancing font-extrabold text-5xl text-primary">Contact me</h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Looking for a developer to join your team? Leave me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6" data-aos="fade-right">
            {info.map((i) => (
              <div key={i.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <i.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{i.label}</p>
                  <p className="text-foreground">{i.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/23521228-BuiLeHuyPhuoc" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"><Github size={18} /></a>
              <a href="mailto:huyphuoc09112005@gmail.com" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            data-aos="fade-left"
            className="rounded-2xl bg-card border border-border p-6 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm mb-1 text-foreground">Full Name</label>
              <input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm mb-1 text-foreground">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@company.com"
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm mb-1 text-foreground">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                maxLength={5000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>
            <div aria-live="polite">
              {error && <p className="text-sm text-red-500">{error}</p>}
              {sent && (
                <p className="text-sm text-green-600 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Thank you! Your message has been sent.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-accent transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  Sending <LoaderCircle size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
