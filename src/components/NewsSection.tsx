import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";
import campusCourtyard from "@/assets/campus-courtyard.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import campusLife from "@/assets/campus-life.jpg";

const newsItems = [
  {
    id: 1,
    image: campusCourtyard,
    date: "2025-05-31",
    title: { fr: "Hackathon Smart Sahara", ar: "هاكاثون سمارت صحراء", en: "Smart Sahara Hackathon" },
    summary: {
      fr: "Innover pour un Sahara durable et intelligent — 31 mai au 1er juin 2025 à l'EST de Laâyoune.",
      ar: "الابتكار من أجل صحراء مستدامة وذكية — 31 ماي إلى 1 يونيو 2025.",
      en: "Innovating for a sustainable and smart Sahara — May 31 to June 1, 2025."
    },
  },
  {
    id: 2,
    image: campusBuilding,
    date: "2025-05-13",
    title: { fr: "Premier Master Class International", ar: "أول ماستر كلاس دولي", en: "First International Master Class" },
    summary: {
      fr: "Innovation Technologique, Intelligence Artificielle et Économique à l'EST Laâyoune.",
      ar: "الابتكار التكنولوجي والذكاء الاصطناعي والاقتصادي بالمدرسة العليا للتكنولوجيا بالعيون.",
      en: "Technological Innovation, Artificial Intelligence and Economics at EST Laayoune."
    },
  },
  {
    id: 3,
    image: campusLife,
    date: "2025-02-18",
    title: { fr: "Symposium International en Économie et Finance", ar: "ندوة دولية في الاقتصاد والمالية", en: "International Symposium on Economics & Finance" },
    summary: {
      fr: "L'Économie et la Finance à l'ère de la Transformation Numérique et l'Intelligence Artificielle.",
      ar: "الاقتصاد والمالية في عصر التحول الرقمي والذكاء الاصطناعي.",
      en: "Economics and Finance in the era of Digital Transformation and AI."
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
