import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";
import labCs from "@/assets/lab-cs.jpg";
import campusLife from "@/assets/campus-life.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const newsItems = [
  {
    id: 1,
    image: labCs,
    date: "2025-03-15",
    title: { fr: "Journée portes ouvertes 2025", ar: "يوم الأبواب المفتوحة 2025", en: "Open Day 2025" },
    summary: {
      fr: "Découvrez nos formations et rencontrez nos enseignants lors de notre journée portes ouvertes annuelle.",
      ar: "اكتشف تكويناتنا وتعرف على أساتذتنا خلال يومنا المفتوح السنوي.",
      en: "Discover our programs and meet our faculty during our annual open day."
    },
  },
  {
    id: 2,
    image: campusLife,
    date: "2025-02-28",
    title: { fr: "Convention avec des entreprises régionales", ar: "اتفاقية مع شركات إقليمية", en: "Partnership with regional companies" },
    summary: {
      fr: "L'EST Laâyoune signe des conventions de partenariat avec plusieurs entreprises de la région.",
      ar: "توقع المدرسة اتفاقيات شراكة مع عدة شركات في المنطقة.",
      en: "EST Laayoune signs partnership agreements with several regional companies."
    },
  },
  {
    id: 3,
    image: heroCampus,
    date: "2025-02-10",
    title: { fr: "Résultats du semestre S1 publiés", ar: "نشر نتائج الفصل الأول", en: "S1 Semester results published" },
    summary: {
      fr: "Les résultats des examens du premier semestre sont désormais disponibles sur le portail étudiant.",
      ar: "نتائج امتحانات الفصل الأول متاحة الآن على بوابة الطالب.",
      en: "First semester exam results are now available on the student portal."
    },
  },
];

const NewsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t("news.title", lang)}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <time>{new Date(item.date).toLocaleDateString(lang === "ar" ? "ar-MA" : lang === "en" ? "en-US" : "fr-FR", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">{item.title[lang]}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{item.summary[lang]}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/events">
              {t("news.more", lang)} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
