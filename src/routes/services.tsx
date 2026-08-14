import { createFileRoute, Link } from "@tanstack/react-router";
import { Ship, Plane, Truck, Warehouse, FileCheck, PackageSearch, Package } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import trucksImg from "@/assets/trucks.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Logistics Services — Arabian Express Logistics" },
      {
        name: "description",
        content:
          "Ocean and air freight, GCC trucking, bonded warehousing, customs clearance and fulfilment from Arabian Express Logistics.",
      },
      { property: "og:title", content: "Logistics Services — Arabian Express Logistics" },
      {
        property: "og:description",
        content:
          "Ocean, air, land, warehousing, customs and fulfilment under one accountable team.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    copy: "Weekly FCL and consolidated LCL departures from Shuwaikh, Shuaiba, Jebel Ali and Dammam with direct carrier allocations.",
    points: ["FCL & LCL", "Reefer & flat rack", "Port-to-door"],
  },
  {
    icon: Plane,
    title: "Air Freight",
    copy: "Priority and deferred uplift on 20+ carriers, plus charter brokerage for oversized or emergency cargo.",
    points: ["Next-flight-out", "Charter", "Perishables"],
  },
  {
    icon: Truck,
    title: "Land Transport",
    copy: "Owned GCC fleet running curtainside, flatbed and refrigerated trailers with cross-border documentation handled.",
    points: ["FTL & LTL", "Cross-border", "Live tracking"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    copy: "Free-zone and bonded facilities with racked, bulk and temperature-controlled zones under 24/7 monitoring.",
    points: ["Bonded storage", "Cross-dock", "Inventory portal"],
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    copy: "In-house brokers filing declarations, duty exemptions and certificates of origin across UAE and KSA.",
    points: ["Import & export", "Duty advisory", "DG handling"],
  },
  {
    icon: PackageSearch,
    title: "Fulfilment",
    copy: "Pick, pack, label and last-mile dispatch for e-commerce and retail replenishment programmes.",
    points: ["Pick & pack", "Returns", "Last mile"],
  },
  {
    icon: Package,
    title: "Door-to-Door Cargo",
    copy: "Seamless direct delivery services from Kuwait to key international destinations, handling all pickup, clearance, and doorstep delivery.",
    points: ["India", "Philippines", "Sri Lanka", "Nepal", "Indonesia", "Ethiopia", "GCC"],
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Every leg of the journey, handled in-house."
        blurb="Six connected service lines so your cargo never changes hands into an unaccountable third party."
        image={trucksImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-8"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h2 className="mt-6 text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <span
                    key={p}
                    className="border border-border px-3 py-1 text-[0.65rem] tracking-[0.16em] uppercase text-gold"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="border-t border-gold/22 mt-16 flex flex-wrap items-center justify-between gap-6 pt-10"
          data-aos="fade-up"
        >
          <p className="max-w-md text-sm text-muted-foreground">
            Need a blended solution — sea in, bonded storage, then regional trucking? That's our
            default.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase bg-white text-deep font-semibold transition-all hover:opacity-90"
          >
            Build my routing
          </Link>
        </div>
      </section>
    </div>
  );
}
