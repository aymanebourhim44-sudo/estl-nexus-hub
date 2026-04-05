import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import labCs from "@/assets/lab-cs.jpg";
import campusLife from "@/assets/campus-life.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const events = [
  {
    id: 1, image: labCs, date: "2025-03-15",
    title: { fr: "Journée portes ouvertes 2025", ar: "يوم الأبواب المفتوحة 2025", en: "Open Day 2025" },
    desc: { fr: "Venez découvrir nos formations, rencontrer nos enseignants et visiter nos laboratoires.", ar: "تعالوا لاكتشاف تكويناتنا ولقاء أساتذتنا وزيارة مختبراتنا.", en: "Come discover our programs, meet our faculty and visit our labs." },
  },
  {
    id: 2, image: campusLife, date: "2025-02-28",
    title: { fr: "Convention de partenariat", ar: "اتفاقية شراكة", en: "Partnership Convention" },
    desc: { fr: "Signature de conventions avec des entreprises régionales pour les stages et l'insertion professionnelle.", ar: "توقيع اتفاقيات مع شركات إقليمية للتدريب والإدماج المهني.", en: "Signing partnerships with regional companies for internships." },
  },
  {
    id: 3, image: heroCampus, date: "2025-02-10",
    title: { fr: "Séminaire sur l'IA et Big Data", ar: "ندوة حول الذكاء الاصطناعي", en: "AI & Big Data Seminar" },
    desc: { fr: "Un séminaire animé par des experts du domaine sur les perspectives de l'intelligence artificielle.", ar: "ندوة يؤطرها خبراء حول آفاق الذكاء الاصطناعي.", en: "A seminar led by experts on AI perspectives." },
  },
  {
    id: 4, image: labCs, date: "2025-01-20",
    title: { fr: "Compétition Hackathon 2025", ar: "مسابقة هاكاثون 2025", en: "Hackathon Competition 2025" },
    desc: { fr: "48h de code pour résoudre des problématiques réelles proposées par nos partenaires industriels.", ar: "48 ساعة من البرمجة لحل إشكاليات حقيقية.", en: "48h of coding to solve real-world problems from our industrial partners." },
  },
];

const Events = () => {
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
            {t("nav.events", lang)}
          </motion.h1>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((e, i) => (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden h-52">
                  <img src={e.image} alt={e.title[lang]} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <time>{new Date(e.date).toLocaleDateString(lang === "ar" ? "ar-MA" : lang === "en" ? "en-US" : "fr-FR", { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{e.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc[lang]}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
