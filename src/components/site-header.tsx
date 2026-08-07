import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="relative flex w-full items-center justify-between px-5 md:px-10 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Arabian Express Logistics logo" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex absolute left-1/2 transform -translate-x-1/2 bg-deep/80 backdrop-blur-md border border-gold/15 px-8 py-2.5 rounded-full">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-[0.72rem] tracking-[0.22em] uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[0.78rem] tracking-[0.18em] uppercase bg-white text-deep font-semibold transition-all hover:opacity-90">
            Get a quote
          </Link>
        </div>

        <button
          className="text-gold md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-deep px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="py-2 text-xs tracking-[0.22em] uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
