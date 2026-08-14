import { createFileRoute, Link } from "@tanstack/react-router";
import { Ship, Plane, Truck, Warehouse, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo.png";
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
      {
        property: "og:title",
        content: "Arabian Express Logistics — Freight Forwarding & Supply Chain",
      },
      {
        property: "og:description",
        content: "Sea, air and land freight across the Gulf and beyond, moved with precision.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    copy: "FCL and LCL sailings on every major Gulf-Asia-Europe lane.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    copy: "Priority uplift and charter capacity for time-critical cargo.",
  },
  {
    icon: Truck,
    title: "Land Transport",
    copy: "GCC-wide trucking fleet with live temperature monitoring.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    copy: "Bonded and free-zone storage with pick, pack and fulfilment.",
  },
];

function Home() {
  return (
    <div>
      <section className="relative isolate flex min-h-screen items-center py-20 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/0808(1).mov"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="relative mx-auto w-full max-w-[85rem] px-5 sm:px-10 md:px-16 lg:px-24 py-28 lg:mt-[5cm]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(24rem,35%)_minmax(32rem,45%)_minmax(20rem,24%)] gap-8 lg:gap-12 items-start">
            {/* Column 1: Large logo image */}
            <div className="flex justify-center lg:justify-start relative lg:-left-[4cm] lg:top-[5cm]">
              <img
                src={logoImg}
                alt="Arabian Express Logistics logo"
                className="w-full max-w-[28rem] object-contain sm:max-h-[26rem] md:max-h-[30rem] lg:max-h-[36rem]"
              />
            </div>

            {/* Column 2: Center heading + description */}
            <div className="flex flex-col justify-center text-center lg:text-left relative lg:-left-[4cm] lg:top-[2cm]">
              <div className="space-y-5">
                <p className="text-[0.7rem] tracking-[0.32em] uppercase text-deep font-semibold">
                  Est. 2009 — Farwaniya, Kuwait
                </p>
                <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-deep">
                  <span className="block">Cargo that</span>
                  <span className="block">moves like</span>
                  <span className="block">clockwork</span>
                </h1>
              </div>

              <div className="mt-8 max-w-xl mx-auto lg:mx-0">
                <p className="text-base leading-relaxed text-deep font-medium">
                  Arabian Express Logistics plans, clears and delivers freight across 40 countries —
                  one accountable team from booking to final mile.
                </p>
              </div>
            </div>

            {/* Column 3: Buttons and stats */}
            <div className="flex flex-col justify-start gap-8 relative lg:top-[5cm]">
              <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase bg-white text-deep font-semibold transition-all hover:opacity-90"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase border border-deep text-deep font-semibold transition-all hover:bg-deep/10"
                >
                  Our services
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center lg:text-right">
                {[
                  ["40+", "Countries served"],
                  ["18k", "Shipments a year"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-2xl sm:text-3xl text-deep font-bold">{n}</p>
                    <p className="mt-1 text-xs tracking-[0.18em] uppercase text-deep/80 font-semibold">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 text-emerald-900">
        <img
          src="/second cover.jpg.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="relative mx-auto w-full max-w-[85rem] px-5 sm:px-10 md:px-16 lg:px-24 lg:left-[-3cm]">
          <p
            className="text-[0.7rem] tracking-[0.32em] uppercase text-emerald-900"
            data-aos="fade-up"
          >
            What we move
          </p>
          <h2
            className="mt-4 max-w-none text-3xl sm:text-4xl text-emerald-900"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Four disciplines, one continuous chain of custody.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-3xl mr-auto">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-8 transition-all"
                data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
              >
                <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-b from-transparent to-deep/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">
                Door-to-Door Cargo
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Moving Beyond Boundaries.
                <span className="block mt-2 text-xl sm:text-2xl text-gold font-normal">
                  Your Trusted Cargo & Logistics Partner.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Enjoy seamless, secure, and hassle-free transit for your packages. We collect from
                your doorstep in Kuwait and deliver directly to recipients in major international
                destinations, managing all customs clearance and logistics.
              </p>
              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                  For details & booking:
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-semibold">Mob:</span>
                    <a
                      href="tel:+96555002037"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +965 55002037
                    </a>
                    <span>·</span>
                    <a
                      href="tel:+96569391295"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +965 69391295
                    </a>
                    <span>·</span>
                    <a
                      href="tel:+96567053011"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +965 67053011
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-8">
                <h3 className="text-xl text-gold font-display font-light tracking-wide">
                  Accepting Cargo To:
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    "India",
                    "Ethiopia",
                    "Sri Lanka",
                    "Nepal",
                    "Indonesia",
                    "Philippines",
                    "GCC Countries",
                  ].map((country) => (
                    <div
                      key={country}
                      className="flex items-center gap-3 rounded-sm border border-border/20 bg-secondary/10 px-4 py-3 text-sm font-medium tracking-[0.06em] text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 mt-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
              <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">The difference</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Freight desks that answer, not ticket queues.
              </h2>
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
                  <li
                    key={t}
                    className="border-t border-gold/22 flex gap-3 pt-4 text-muted-foreground"
                  >
                    <span className="text-gold">—</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <img
          src={warehouseImg}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/55 to-deep/92" />
        <div className="relative mx-auto max-w-3xl px-5 text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-5xl">Tell us where it needs to be.</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Send us your lane, weight and deadline. You'll have a costed routing plan within one
            business day.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase bg-white text-deep font-semibold transition-all hover:opacity-90"
            >
              Start a shipment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
