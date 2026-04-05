import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const dutPrograms = [
  { name: "Génie Informatique", desc: "Développement logiciel, réseaux, bases de données, systèmes d'information." },
  { name: "Génie Civil", desc: "Construction, topographie, matériaux, calcul de structures." },
  { name: "Génie Biologique", desc: "Biotechnologie, chimie, microbiologie, environnement." },
  { name: "Génie Électrique", desc: "Électronique, automatique, électrotechnique, systèmes embarqués." },
];

const licencePrograms = [
  { name: "Génie Civil & Environnement", desc: "Géotechnique, gestion environnementale, BTP durable." },
  { name: "Management Stratégique des SI", desc: "ERP, gouvernance IT, gestion de projets numériques." },
  { name: "Gestion des Ressources Humaines", desc: "Droit du travail, management, communication organisationnelle." },
  { name: "Techniques de Commercialisation", desc: "Marketing, vente, relation client, commerce digital." },
];

const Formation = () => {
  const { lang } = useLang();

  return (
    <div>
      <section className="relative py-20 bg-hero-gradient">
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            {t("programs.title", lang)}
          </motion.h1>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </div>
      </section>

      {/* DUT */}
      <section id="dut" className="py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">DUT — Diplôme Universitaire de Technologie</h2>
              <p className="text-sm text-muted-foreground">Bac+2 · Formation initiale</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {dutPrograms.map((p, i) => (
              <ProgramCard key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Licences */}
      <section id="licence" className="py-16 bg-section-alt">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Licences Professionnelles</h2>
              <p className="text-sm text-muted-foreground">Bac+3 · Formation professionnalisante</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {licencePrograms.map((p, i) => (
              <ProgramCard key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <Briefcase className="mx-auto h-10 w-10 text-accent mb-4" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Intéressé par nos formations ?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Consultez les conditions d'admission et lancez votre candidature en ligne.
          </p>
          <Button variant="hero" size="lg">
            Candidater maintenant <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProgramCard = ({ name, desc, index }: { name: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
  >
    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{name}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

export default Formation;
