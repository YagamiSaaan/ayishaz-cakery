import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Sparkles,
} from "lucide-react";
import { fadeUp } from "./shared";
import { contactSchema, type ContactErrors } from "@/lib/contact-schema";
import {
  ADDRESS, EMAIL, EMAIL_URL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL,
} from "@/lib/site";

export function Contact() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;

    try {
      const data = new FormData(form);
      const raw = {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        occasion: String(data.get("occasion") ?? ""),
        message: String(data.get("message") ?? ""),
      };

      const parsed = contactSchema.safeParse(raw);
      if (!parsed.success) {
        const fieldErrors: ContactErrors = {};
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as keyof ContactErrors | undefined;
          if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
        }
        setErrors(fieldErrors);
        toast.error("Please fix the highlighted fields and try again.");
        return;
      }

      setErrors({});
      setSubmitting(true);

      const v = parsed.data;
      const subject = `Cake Enquiry — ${v.occasion || "New enquiry"} — ${v.name}`;
      const bodyLines = [
        `Name: ${v.name}`,
        `Email: ${v.email}`,
        `Phone: ${v.phone || "—"}`,
        `Occasion: ${v.occasion || "—"}`,
        "",
        "Vision / Details:",
        v.message || "—",
      ];
      const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      try {
        window.location.href = mailto;
        toast.success("Opening your email app to send the enquiry…", {
          description: "If nothing happens, please email us directly at " + EMAIL,
        });
        form.reset();
      } catch (openErr) {
        console.error("mailto open failed", openErr);
        toast.error("Couldn't open your email app.", {
          description: `Please email us directly at ${EMAIL} or message us on WhatsApp.`,
        });
      }
    } catch (err) {
      console.error("Contact form error", err);
      toast.error("Something went wrong sending your enquiry.", {
        description: "Please try again in a moment, or reach us on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Let's Create Together</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">Commission Your <span className="font-script italic text-gold-gradient">Masterpiece</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Atelier", value: ADDRESS, href: MAPS_URL, external: true },
              { icon: Phone, label: "Call", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
              { icon: Mail, label: "Email", value: EMAIL, href: EMAIL_URL },
              { icon: Clock, label: "Hours", value: "Tue – Sun · 10:00 – 20:00", href: null as string | null },
            ].map((c) => {
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-full bg-[var(--espresso)] flex items-center justify-center border border-[rgba(212,175,55,0.25)] shrink-0">
                    <c.icon className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--caramel)] mb-1">{c.label}</p>
                    <p className="text-cream">{c.value}</p>
                  </div>
                </>
              );
              const className = "glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[rgba(212,175,55,0.4)] transition";
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={className}>{inner}</div>
              );
            })}
            <div className="rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.18)] aspect-[16/9]">
              <iframe
                title="Ayishaz Cakery — Kannur location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.355%2C11.860%2C75.385%2C11.880&layer=mapnik&marker=11.870%2C75.370"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
                { Icon: Facebook, href: FACEBOOK_URL, label: "Facebook" },
                { Icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition" aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="glass-cream rounded-3xl p-8 md:p-10 text-[var(--espresso)] space-y-5 shadow-[var(--shadow-luxe)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Your Name" placeholder="Layla Hassan" required maxLength={100} error={errors.name} />
              <Field name="phone" label="Phone" placeholder="+91 98765 00000" maxLength={30} error={errors.phone} />
            </div>
            <Field name="email" label="Email" type="email" placeholder="you@email.com" required maxLength={255} error={errors.email} />
            <Field name="occasion" label="Occasion" placeholder="Wedding · Birthday · Corporate" maxLength={120} error={errors.occasion} />
            <div>
              <label htmlFor="field-message" className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--mocha)] mb-2 block">Tell Us About Your Vision</label>
              <textarea
                id="field-message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Mood, palette, size, date…"
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "field-message-error" : undefined}
                className={`w-full bg-transparent border-b py-3 focus:outline-none resize-none placeholder:text-[var(--mocha)]/40 ${errors.message ? "border-red-600 focus:border-red-700" : "border-[var(--mocha)]/30 focus:border-[var(--gold)]"}`}
              />
              {errors.message && (
                <p id="field-message-error" className="text-xs text-red-700 mt-2">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-luxe btn-luxe-hover w-full justify-center mt-3 !bg-[var(--espresso)] !text-[var(--cream)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Send Enquiry"} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[0.65rem] text-[var(--mocha)]/60 text-center pt-1">
              Prefer WhatsApp?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--espresso)]">
                Message us here
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  name,
  required,
  maxLength,
  error,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  error?: string;
}) {
  const id = `field-${name ?? label.replace(/\s+/g, "-").toLowerCase()}`;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <label htmlFor={id} className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--mocha)] mb-2 block">{label}</label>
      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={`w-full bg-transparent border-b py-3 focus:outline-none placeholder:text-[var(--mocha)]/40 ${error ? "border-red-600 focus:border-red-700" : "border-[var(--mocha)]/30 focus:border-[var(--gold)]"}`}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-700 mt-2">{error}</p>
      )}
    </div>
  );
}
