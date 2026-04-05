import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import logoEst from "@/assets/logo-est.png";
import logoUiz from "@/assets/logo-uiz.png";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoEst} alt="EST Laâyoune" className="h-12 w-12 object-contain bg-primary-foreground rounded-lg p-1" />
              <div>
                <p className="font-heading font-bold text-lg">EST Laâyoune</p>
                <p className="text-sm text-primary-foreground/70">Université Ibn Zohr</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              École Supérieure de Technologie de Laâyoune — Former les leaders de demain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">{t("footer.quicklinks", lang)}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.home", lang)}</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.about", lang)}</Link></li>
              <li><Link to="/formation" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.formation", lang)}</Link></li>
              <li><Link to="/events" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.events", lang)}</Link></li>
              <li><Link to="/resources" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.resources", lang)}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">{t("footer.contact", lang)}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-primary-foreground/70">Laâyoune – Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/70">+212 528 89 35 56</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/70">estl@uiz.ac.ma</span>
              </li>
            </ul>
          </div>

          {/* Map + Social */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">{t("footer.social", lang)}</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/est_laayoune/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="EST Laâyoune Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d-13.2!3d27.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA5JzAwLjAiTiAxM8KwMTInMDAuMCJX!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="120"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs text-primary-foreground/50">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img src={logoEst} alt="EST Laâyoune" className="h-8 w-8 object-contain" />
            <img src={logoUiz} alt="Université Ibn Zohr" className="h-8 object-contain" />
          </div>
          © {new Date().getFullYear()} EST Laâyoune — Université Ibn Zohr. {t("footer.rights", lang)}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
