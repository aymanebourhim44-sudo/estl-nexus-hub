import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import campusLife from "@/assets/campus-life.jpg";

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
              <img src={campusLife} alt="Campus" loading="lazy" width={800} height={600} className="rounded-2xl shadow-lg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="presentation">
                {t("nav.about.director", lang)}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bienvenue à l'École Supérieure de Technologie de Laâyoune, un établissement d'excellence 
                  au sein de l'Université Ibn Zohr. Depuis sa création, notre école s'est engagée à former 
                  des cadres compétents et opérationnels dans les domaines de la technologie et de l'ingénierie.
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
