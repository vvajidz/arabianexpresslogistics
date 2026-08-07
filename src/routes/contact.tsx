import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import trucksImg from "@/assets/trucks.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arabian Express Logistics" },
      {
        name: "description",
        content:
          "Request a freight quote or reach the Arabian Express Logistics operations desk in Jebel Ali, Dubai by phone or email.",
      },
      { property: "og:title", content: "Contact — Arabian Express Logistics" },
      {
        property: "og:description",
        content: "Send your lane, weight and deadline — we reply with a costed routing plan in one business day.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Send us the lane. We'll send back a plan."
        blurb="Our Dubai operations desk answers quote requests within one business day, seven days a week during peak season."
        image={trucksImg}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form
            className="card-lux p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="text-2xl">Request a quote</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Origin" name="origin" />
              <Field label="Destination" name="destination" />
            </div>
            <label className="mt-5 block">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                Cargo details
              </span>
              <textarea
                name="details"
                rows={4}
                required
                className="mt-2 w-full border border-input bg-secondary/50 px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </label>
            <button type="submit" className="btn-gold mt-7">
              {sent ? "Request received" : "Send request"}
            </button>
            {sent && (
              <p className="mt-4 text-sm text-gold">
                Thank you — our team will reply within one business day.
              </p>
            )}
          </form>

          <div className="space-y-8">
            {[
              { icon: MapPin, t: "Head office", v: "Warehouse 14, Jebel Ali Free Zone South, Dubai, UAE" },
              { icon: Phone, t: "Operations desk", v: "+971 4 000 1180" },
              { icon: Mail, t: "Email", v: "ops@arabianexpresslogistics.com" },
              { icon: Clock, t: "Hours", v: "Sun–Thu 08:00–18:00 GST · On-call weekends" },
            ].map((c) => (
              <div key={c.t} className="hairline flex gap-4 pt-6">
                <c.icon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full border border-input bg-secondary/50 px-3 py-2 text-sm outline-none focus:border-gold"
      />
    </label>
  );
}
