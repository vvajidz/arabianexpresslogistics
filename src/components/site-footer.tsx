import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto max-w-[85rem] px-5 sm:px-10 md:px-16 lg:px-24 py-14 text-center">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Arabian Express Logistics"
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-center">
              Sea, air and land freight across the Gulf and beyond — moved with precision since
              2009.
            </p>
            <div className="mt-5 flex gap-2 justify-center">
              <a
                href="https://www.instagram.com/arabian__express_kwt?igsh=MWNyMXRnejhpcGV0OQ==&igsi=MWNyMXRnejhpcGV0OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors flex items-center gap-2 text-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">Navigate</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground items-center">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">Head office</p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed text-center">
              <p>Office No. 14, Multaqa Complex, Floor M, Block No. 1, Farwaniya, Kuwait</p>
              <p>Mob: +965 55002037 / 69391295 / 67053011</p>
              <p>Email: arabianexprss@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/22 mt-12 pt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground text-center">
          © {new Date().getFullYear()} Arabian Express Logistics
        </div>
      </div>
    </footer>
  );
}
