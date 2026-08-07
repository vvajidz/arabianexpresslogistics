import { createFileRoute, Link } from "@tanstack/react-router";
import { Ship, Plane, Truck, Warehouse, ArrowRight } from "lucide-react";
import heroShipImg from "@/assets/hero_ship_overhead.png";
import shipImg from "@/assets/ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arabian Express Logistics — Freight Forwarding & Supply Chain" },
      {
        name: "description",
        content:
          "Arabian Express Logistics moves sea, air and land freight across the Gulf with customs clearance, warehousing and last-mile delivery.",
      },
      { property: "og:title", content: "Arabian Express Logistics — Freight Forwarding & Supply Chain" },
      {
        property: "og:description",
        content: "Sea, air and land freight across the Gulf and beyond, moved with precision.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Ship, title: "Ocean Freight", copy: "FCL and LCL sailings on every major Gulf-Asia-Europe lane." },
  { icon: Plane, title: "Air Freight", copy: "Priority uplift and charter capacity for time-critical cargo." },
  { icon: Truck, title: "Land Transport", copy: "GCC-wide trucking fleet with live temperature monitoring." },
  { icon: Warehouse, title: "Warehousing", copy: "Bonded and free-zone storage with pick, pack and fulfilment." },
];

function Home() {
  return (
    <div>
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={heroShipImg}
          alt="Container cargo ship sailing overhead view"
        />
        <div className="surface-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32" data-aos="fade-up" data-aos-duration="1000">
          <p className="eyebrow">Est. 2009 — Farwaniya, Kuwait</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Cargo that moves like <span className="text-gold-gradient">clockwork</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Arabian Express Logistics plans, clears and delivers freight across 40 countries — one
            accountable team from booking to final mile.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-white">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-outline-gold">
              Our services
            </Link>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6">
            {[
              ["40+", "Countries served"],
              ["18k", "Shipments a year"],
              ["99.2%", "On-time delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-gold">{n}</p>
                <p className="mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="eyebrow" data-aos="fade-up">What we move</p>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl" data-aos="fade-up" data-aos-delay="100">
          Four disciplines, one continuous chain of custody.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <div key={s.title} className="card-lux p-7 transition-all" data-aos="fade-up" data-aos-delay={200 + idx * 100}>
              <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-b from-transparent to-deep/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <p className="eyebrow">Door-to-Door Cargo</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">We also accept cargo door-to-door.</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Enjoy seamless, secure, and hassle-free transit for your packages. We collect from your doorstep in Kuwait and deliver directly to recipients in major international destinations, managing all customs clearance and logistics.
              </p>
              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">For details & booking:</p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-semibold">Mob:</span>
                    <a href="tel:+96555002037" className="text-muted-foreground hover:text-gold transition-colors">+965 55002037</a>
                    <span>·</span>
                    <a href="tel:+96569391295" className="text-muted-foreground hover:text-gold transition-colors">+965 69391295</a>
                    <span>·</span>
                    <a href="tel:+96567053011" className="text-muted-foreground hover:text-gold transition-colors">+965 67053011</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="card-lux p-8">
                <h3 className="text-xl text-gold font-display font-light tracking-wide">Accepting Cargo To:</h3>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    "India",
                    "Ethiopia",
                    "Sri Lanka",
                    "Nepal",
                    "Indonesia",
                    "Philippines",
                    "GCC Countries"
                  ].map((country) => (
                    <div key={country} className="flex items-center gap-3 rounded-sm border border-border/20 bg-secondary/10 px-4 py-3 text-sm font-medium tracking-[0.06em] text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <img
            src={shipImg}
            alt="Container vessel underway at dawn"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[26rem] w-full object-cover"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <p className="eyebrow">The difference</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Freight desks that answer, not ticket queues.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Every account gets a named coordinator in Kuwait who owns the shipment end to end —
              customs paperwork, exception handling, and proof of delivery in one thread.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Customs brokerage across Kuwait, UAE and KSA ports",
                "Live milestone tracking with proactive exception alerts",
                "Dangerous goods, reefer and project cargo certified",
              ].map((t) => (
                <li key={t} className="hairline flex gap-3 pt-4 text-muted-foreground">
                  <span className="text-gold">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <img src={warehouseImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="surface-veil absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-5xl">Tell us where it needs to be.</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Send us your lane, weight and deadline. You'll have a costed routing plan within one
            business day.
          </p>
          <div className="mt-9 flex justify-center">
            <Link to="/contact" className="btn-white">
              Start a shipment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
