import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import clubNextgen from "@/assets/club-nextgen-coders.png";

const clubs = [
  {
    name: "NextGen Coders",
    image: clubNextgen,
    desc: {
      fr: "Club de programmation et développement logiciel — Hackathons, formations et projets collaboratifs.",
      ar: "نادي البرمجة وتطوير البرمجيات — هاكاثونات وتكوينات ومشاريع تعاونية.",
      en: "Programming and software development club — Hackathons, training and collaborative projects.",
    },
  },
];

const ClubsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {lang === "ar" ? "أندية الطلبة" : lang === "en" ? "Student Clubs" : "Clubs Étudiants"}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clubs.map((club, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow text-center p-6"
            >
              <img
                src={club.image}
                alt={club.name}
                className="h-24 w-24 object-contain mx-auto mb-4 rounded-xl"
              />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{club.name}</h3>
              <p className="text-sm text-muted-foreground">{club.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
