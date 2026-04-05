import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import campusBuilding from "@/assets/campus-building.jpg";
import campusCourtyard from "@/assets/campus-courtyard.jpg";
import logoUiz from "@/assets/logo-uiz.png";

const About = () => {
  const { lang } = useLang();

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            {t("about.title", lang)}
          </motion.h1>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </div>
      </section>

      {/* Director's Message */}
      <section id="director" className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={campusBuilding} alt="Campus EST Laâyoune" loading="lazy" width={800} height={600} className="rounded-2xl shadow-lg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="presentation">
                {t("nav.about.director", lang)}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'EST de Laâyoune est un établissement d'enseignement supérieur public de l'Université 
                  Ibn Zohr qui cultive l'excellence avec des formations et axes de recherche de pointe dans 
                  de nombreux domaines et une grande variété de disciplines.
                </p>
                <p>
                  Notre mission est de préparer nos étudiants aux défis du marché de l'emploi en leur offrant 
                  une formation alliant théorie et pratique, encadrée par un corps professoral qualifié et 
                  passionné.
                </p>
                <p>
                  L'EST Laâyoune dispose de laboratoires modernes, de partenariats solides avec le tissu 
                  économique régional et national, et d'un environnement propice à l'épanouissement 
                  académique et personnel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Affiliation */}
      <section className="py-12 bg-section-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <img src={logoUiz} alt="Université Ibn Zohr" className="h-24 object-contain" />
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Université Ibn Zohr — Agadir</h3>
              <p className="text-muted-foreground max-w-lg">
                L'EST Laâyoune est un établissement rattaché à l'Université Ibn Zohr, l'une des plus grandes universités publiques du Maroc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              {lang === "ar" ? "الحرم الجامعي" : lang === "en" ? "Our Campus" : "Notre Campus"}
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={campusCourtyard} alt="Campus courtyard" loading="lazy" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src={campusBuilding} alt="Campus building" loading="lazy" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organization */}
      <section id="org" className="py-16 bg-section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">{t("nav.about.org", lang)}</h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Direction", desc: "Direction de l'établissement et coordination générale" },
              { title: "Département Informatique", desc: "Formation en développement logiciel et systèmes d'information" },
              { title: "Département Génie Civil", desc: "Formation en construction et aménagement du territoire" },
              { title: "Département Génie Biologique", desc: "Formation en biotechnologie et environnement" },
              { title: "Service Scolarité", desc: "Gestion administrative et accompagnement des étudiants" },
              { title: "Service Stages", desc: "Coordination des stages et relations entreprises" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border shadow-sm"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
