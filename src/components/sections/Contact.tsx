import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactSchema, type ContactErrors } from "@/lib/contact-schema";
import {
  ADDRESS, EMAIL, EMAIL_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL,
} from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactMethodCard } from "@/components/ui/ContactMethodCard";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";
import { FormField } from "@/components/ui/FormField";
import { FormTextarea } from "@/components/ui/FormTextarea";

const CONTACT_METHODS = [
  { icon: MapPin, label: "Atelier", value: ADDRESS, href: MAPS_URL, external: true },
  { icon: Phone, label: "Call", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: Mail, label: "Email", value: EMAIL, href: EMAIL_URL },
  { icon: Clock, label: "Hours", value: "Tue – Sun · 10:00 – 20:00", href: null },
] as const;

/**
 * Contact section — atelier details on the left, enquiry form on the right.
 * The form dispatches enquiries via `mailto:` after Zod validation.
 */
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
      const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

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
        <SectionHeader eyebrow="Let's Create Together" align="center" className="mb-16">
          Commission Your <span className="font-script italic text-gold-gradient">Masterpiece</span>
        </SectionHeader>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="space-y-5">
            {CONTACT_METHODS.map((c) => (
              <ContactMethodCard
                key={c.label}
                icon={c.icon}
                label={c.label}
                value={c.value}
                href={c.href}
                external={c.external}
              />
            ))}
            <div className="rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.18)] aspect-[16/9]">
              <iframe
                title="Ayishaz Cakery — Kannur location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.355%2C11.860%2C75.385%2C11.880&layer=mapnik&marker=11.870%2C75.370"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
            <SocialIconLinks className="pt-2" />
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            aria-label="Cake enquiry"
            className="glass-cream rounded-3xl p-8 md:p-10 text-[var(--espresso)] space-y-5 shadow-[var(--shadow-luxe)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField name="name" label="Your Name" placeholder="Layla Hassan" required maxLength={100} error={errors.name} />
              <FormField name="phone" label="Phone" placeholder="+91 98765 00000" maxLength={30} error={errors.phone} />
            </div>
            <FormField name="email" label="Email" type="email" placeholder="you@email.com" required maxLength={255} error={errors.email} />
            <FormField name="occasion" label="Occasion" placeholder="Wedding · Birthday · Corporate" maxLength={120} error={errors.occasion} />
            <FormTextarea name="message" label="Tell Us About Your Vision" rows={5} maxLength={1000} placeholder="Mood, palette, size, date…" error={errors.message} />
            <button
              type="submit"
              disabled={submitting}
              className="btn-luxe btn-luxe-hover w-full justify-center mt-3 !bg-[var(--espresso)] !text-[var(--cream)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Send Enquiry"} <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
