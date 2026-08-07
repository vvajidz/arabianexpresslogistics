import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Eye, 
  Target, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Handshake, 
  Lightbulb, 
  Globe,
  User
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import warehouseImg from "@/assets/warehouse.jpg";
import shipImg from "@/assets/ship.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Arabian Express International Cargo & Logistics Co." },
      {
        name: "description",
        content:
          "Arabian Express International Cargo & Logistics Co. is a Kuwait-based logistics and cargo company located in Farwaniya. We specialize in Air Cargo, Sea Cargo, Door-to-Door Delivery, and Courier Services.",
      },
      { property: "og:title", content: "About Us — Arabian Express International Cargo & Logistics Co." },
      {
        property: "og:description",
        content: "Reliable, secure, and cost-effective international cargo and freight forwarding services for individuals and businesses.",
      },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Reliability",
      desc: "We deliver every shipment with accuracy, consistency, and care.",
    },
    {
      icon: Users,
      title: "Customer First",
      desc: "Our customers are our priority, and we are committed to exceeding their expectations.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We conduct our business with honesty, transparency, and professionalism.",
    },
    {
      icon: Lock,
      title: "Safety & Security",
      desc: "We ensure every shipment is handled with the highest standards of safety and protection.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      desc: "We optimize every stage of the logistics process to ensure fast and cost-effective delivery.",
    },
    {
      icon: Handshake,
      title: "Teamwork",
      desc: "We believe strong collaboration creates better solutions and outstanding customer service.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We continuously improve our services by embracing modern logistics technologies and industry best practices.",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      desc: "We connect Kuwait with destinations around the world through dependable international shipping and logistics solutions.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Arabian Express International Cargo & Logistics Co."
        blurb="Kuwait-based logistics and cargo specialists providing reliable, secure, and cost-effective shipping solutions for individuals and businesses."
        image={warehouseImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        {/* Profile Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div data-aos="fade-right">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">Our Profile</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-light">Kuwait's Trusted Cargo Partner</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Arabian Express International Cargo & Logistics Co. is a Kuwait-based logistics and cargo company located in Farwaniya, Block 1. We specialize in providing reliable, secure, and cost-effective international cargo and freight forwarding services for individuals and businesses.
              </p>
              <p>
                With a commitment to excellence, we offer comprehensive shipping solutions including Air Cargo, Sea Cargo, Door-to-Door Delivery, Port-to-Port Services, Courier Services, Customs Support, and International Logistics. Our experienced team ensures every shipment is handled with care, delivered on time, and reaches its destination safely.
              </p>
              <p>
                At Arabian Express, customer satisfaction, transparency, and reliability are at the heart of everything we do.
              </p>
            </div>
          </div>
          <img
            src={shipImg}
            alt="Arabian Express Logistics vessel carrying cargo at sea"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[28rem] w-full object-cover rounded-sm border border-border/40"
            data-aos="fade-left"
          />
        </div>

        {/* Vision & Mission Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <div className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-8 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-wide text-gold">Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To become one of the most trusted and preferred international logistics and cargo service providers in Kuwait and beyond by delivering innovative, efficient, and dependable shipping solutions.
              </p>
            </div>
          </div>

          <div className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-8 flex flex-col justify-between" data-aos="fade-left">
            <div>
              <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-wide text-gold">Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our mission is to provide safe, timely, and affordable logistics services that connect people and businesses worldwide. We strive to build long-term relationships with our customers through exceptional service, operational excellence, and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-28">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold text-center" data-aos="fade-up">Core Values</p>
          <h2 className="mt-4 text-3xl sm:text-4xl text-center font-display font-light" data-aos="fade-up" data-aos-delay="100">The Pillars of Our Excellence</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <div key={v.title} className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] p-6" data-aos="fade-up" data-aos-delay={200 + idx * 100}>
                <v.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h4 className="mt-5 text-lg font-semibold tracking-wide">{v.title}</h4>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-28">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold text-center" data-aos="fade-up">Our Leadership</p>
          <h2 className="mt-4 text-3xl sm:text-4xl text-center font-display font-light" data-aos="fade-up" data-aos-delay="100">Meet Our Founder</h2>
          <div className="mt-12 flex justify-center">
            <div className="bg-card border border-gold/18 rounded-sm transition-all hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(230,222,201,0.45)] max-w-sm p-8 text-center" data-aos="zoom-in">
              <div className="mx-auto h-48 w-48 rounded-full border border-border/40 bg-secondary/20 flex items-center justify-center text-gold">
                <User className="h-20 w-20" strokeWidth={1} />
              </div>
              <h3 className="mt-6 text-2xl font-display text-gold">Mr. Rashid</h3>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Founder</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Leading Arabian Express with a dedication to absolute reliability, global connectivity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Call to Action */}
        <div className="border-t border-gold/22 mt-24 pt-10 flex flex-wrap items-center justify-between gap-6" data-aos="fade-up">
          <p className="max-w-md text-sm text-muted-foreground">
            Connect your cargo to our global shipping networks directly from Kuwait.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.78rem] tracking-[0.18em] uppercase bg-white text-deep font-semibold transition-all hover:opacity-90">
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
