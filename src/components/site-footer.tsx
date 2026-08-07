import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" loading="lazy" width={36} height={36} className="h-8 w-8" />
              <span className="font-display text-sm tracking-[0.24em] text-gold-gradient">
                ARABIAN EXPRESS LOGISTICS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sea, air and land freight across the Gulf and beyond — moved with precision since 2009.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-gold">Home</Link>
              <Link to="/services" className="hover:text-gold">Services</Link>
              <Link to="/about" className="hover:text-gold">About Us</Link>
              <Link to="/contact" className="hover:text-gold">Contact</Link>
            </div>
          </div>

          <div>
            <p className="eyebrow">Head office</p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Jebel Ali Free Zone, Dubai, UAE</p>
              <p>+971 4 000 1180</p>
              <p>ops@arabianexpresslogistics.com</p>
            </div>
          </div>
        </div>

        <div className="hairline mt-12 pt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Arabian Express Logistics
        </div>
      </div>
    </footer>
  );
}
