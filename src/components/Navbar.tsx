import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t, type Lang } from "@/lib/i18n";
import logoEst from "@/assets/logo-est.png";

const langLabels: Record<Lang, string> = { fr: "FR", ar: "عربي", en: "EN" };

const Navbar = () => {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const aboutItems = [
    { label: t("nav.about.director", lang), path: "/about#director" },
    { label: t("nav.about.org", lang), path: "/about#org" },
    { label: t("nav.about.presentation", lang), path: "/about#presentation" },
  ];

  const formationItems = [
    { label: t("nav.formation.dut", lang), path: "/formation#dut" },
    { label: t("nav.formation.licence", lang), path: "/formation#licence" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoEst} alt="EST Laâyoune" className="h-10 w-10 object-contain" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold font-heading text-primary leading-tight">EST Laâyoune</p>
            <p className="text-xs text-muted-foreground">Université Ibn Zohr</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavItem label={t("nav.home", lang)} path="/" active={isActive("/")} />
          <DropdownNavItem
            label={t("nav.about", lang)}
            items={aboutItems}
            active={location.pathname === "/about"}
            open={activeDropdown === "about"}
            onToggle={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
            onClose={() => setActiveDropdown(null)}
          />
          <DropdownNavItem
            label={t("nav.formation", lang)}
            items={formationItems}
            active={location.pathname === "/formation"}
            open={activeDropdown === "formation"}
            onToggle={() => setActiveDropdown(activeDropdown === "formation" ? null : "formation")}
            onClose={() => setActiveDropdown(null)}
          />
          <NavItem label={t("nav.events", lang)} path="/events" active={isActive("/events")} />
          <NavItem label={t("nav.resources", lang)} path="/resources" active={isActive("/resources")} />
          <NavItem label={t("nav.contact", lang)} path="/contact" active={isActive("/contact")} />
        </nav>

        <div className="flex items-center gap-2">
          {/* Lang Switcher */}
          <div className="flex items-center gap-1 rounded-md border border-border p-1">
            <Globe className="h-3.5 w-3.5 text-muted-foreground" />
            {(["fr", "ar", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 text-xs rounded font-medium transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="container py-4 flex flex-col gap-2">
              <MobileLink label={t("nav.home", lang)} path="/" onClick={() => setMobileOpen(false)} />
              <MobileLink label={t("nav.about", lang)} path="/about" onClick={() => setMobileOpen(false)} />
              <MobileLink label={t("nav.formation", lang)} path="/formation" onClick={() => setMobileOpen(false)} />
              <MobileLink label={t("nav.events", lang)} path="/events" onClick={() => setMobileOpen(false)} />
              <MobileLink label={t("nav.resources", lang)} path="/resources" onClick={() => setMobileOpen(false)} />
              <MobileLink label={t("nav.contact", lang)} path="/contact" onClick={() => setMobileOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ label, path, active }: { label: string; path: string; active: boolean }) => (
  <Link
    to={path}
    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      active ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
    }`}
  >
    {label}
  </Link>
);

const DropdownNavItem = ({
  label, items, active, open, onToggle, onClose,
}: {
  label: string;
  items: { label: string; path: string }[];
  active: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => (
  <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
    <button
      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        active ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
      }`}
    >
      {label}
      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="absolute top-full left-0 mt-1 min-w-[220px] rounded-lg border border-border bg-background shadow-lg py-2"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileLink = ({ label, path, onClick }: { label: string; path: string; onClick: () => void }) => (
  <Link
    to={path}
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-md hover:bg-primary/5 hover:text-primary transition-colors"
  >
    {label}
  </Link>
);

export default Navbar;
