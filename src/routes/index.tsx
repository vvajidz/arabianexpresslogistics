import { createFileRoute, Link } from "@tanstack/react-router";
import { Ship, Plane, Truck, Warehouse, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroFrame from "@/assets/hero-frame.jpg";
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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroFrame}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="surface-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32">
          <p className="eyebrow">Est. 2009 — Jebel Ali, Dubai</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Cargo that moves like <span className="text-gold-gradient">clockwork</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Arabian Express Logistics plans, clears and delivers freight across 40 countries — one
            accountable team from booking to final mile.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold">
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
        <p className="eyebrow">What we move</p>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          Four disciplines, one continuous chain of custody.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card-lux p-7 transition-all">
              <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
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
          />
          <div>
            <p className="eyebrow">The difference</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Freight desks that answer, not ticket queues.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Every account gets a named coordinator in Dubai who owns the shipment end to end —
              customs paperwork, exception handling, and proof of delivery in one thread.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Customs brokerage across all UAE and KSA ports",
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
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl sm:text-5xl">Tell us where it needs to be.</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Send us your lane, weight and deadline. You'll have a costed routing plan within one
            business day.
          </p>
          <div className="mt-9 flex justify-center">
            <Link to="/contact" className="btn-gold">
              Start a shipment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
