import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import warehouseImg from "@/assets/warehouse.jpg";
import shipImg from "@/assets/ship.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Arabian Express Logistics" },
      {
        name: "description",
        content:
          "Founded in Dubai in 2009, Arabian Express Logistics is a freight forwarder built on named coordinators, owned assets and disciplined customs work.",
      },
      { property: "og:title", content: "About Us — Arabian Express Logistics" },
      {
        property: "og:description",
        content: "A Dubai-born freight forwarder moving 18,000 shipments a year across 40 countries.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="Built in Dubai. Trusted on every lane out of it."
        blurb="What began as a two-desk clearing agency in Jebel Ali now runs freight for manufacturers, retailers and energy contractors across the Gulf."
        image={warehouseImg}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Seventeen years of learning the hard lanes.</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Arabian Express Logistics opened in 2009 with a single customs desk and one promise:
                the person who books your shipment is the person who answers when it stalls.
              </p>
              <p>
                Today we operate bonded warehousing in Jebel Ali, an owned GCC trucking fleet, and
                carrier allocations on the Asia-Gulf-Europe corridors — while keeping the same
                named-coordinator model that got us here.
              </p>
              <p>
                We stay deliberately mid-sized. Big enough for capacity in peak season, small enough
                that your account manager knows your cargo without opening a file.
              </p>
            </div>
          </div>
          <img
            src={shipImg}
            alt="Arabian Express Logistics container vessel at sea"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[28rem] w-full object-cover"
          />
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["2009", "Founded in Jebel Ali"],
            ["120", "Specialists on staff"],
            ["6", "Gulf offices"],
            ["40+", "Countries served"],
          ].map(([n, l]) => (
            <div key={l} className="card-lux p-7">
              <p className="font-display text-4xl text-gold">{n}</p>
              <p className="mt-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow">How we work</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {[
              ["Accountability", "One named coordinator owns your shipment from booking to POD."],
              ["Compliance", "In-house brokers, not outsourced filings. Documentation right the first time."],
              ["Transparency", "Costed routing plans and milestone updates without chasing us."],
            ].map(([t, c]) => (
              <div key={t} className="hairline pt-6">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Link to="/contact" className="btn-outline-gold">
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
