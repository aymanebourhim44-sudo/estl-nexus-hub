import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";
import campusCourtyard from "@/assets/campus-courtyard.jpg";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={campusCourtyard}
          alt="Campus EST Laâyoune"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-accent/20 text-accent border border-accent/30"
          >
            Université Ibn Zohr
          </motion.span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-primary-foreground mb-2">
            {t("hero.title", lang)}
          </h1>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6">
            {t("hero.subtitle", lang)}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            {t("hero.desc", lang)}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/formation">
                {t("hero.cta", lang)} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold" asChild>
              <Link to="/about">
                <PlayCircle className="mr-2 h-5 w-5" /> {t("hero.discover", lang)}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-accent/90 text-accent-foreground">
        <div className="overflow-hidden py-2.5">
          <div className="ticker-scroll flex whitespace-nowrap gap-16">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-16 text-sm font-medium">
                <span>📢 Hackathon Smart Sahara — 31 mai au 1er juin 2025</span>
                <span>📋 Inscriptions ouvertes pour l'année 2025-2026</span>
                <span>🎓 Premier Master Class International : Innovation Technologique et IA</span>
                <span>🏆 EST Laâyoune classée parmi les meilleures EST du Maroc</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
