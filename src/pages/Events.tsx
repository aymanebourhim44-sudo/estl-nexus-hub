import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import campusCourtyard from "@/assets/campus-courtyard.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import campusLife from "@/assets/campus-life.jpg";

const events = [
  {
    id: 1, image: campusCourtyard, date: "2025-05-31",
    title: { fr: "Hackathon Smart Sahara", ar: "هاكاثون سمارت صحراء", en: "Smart Sahara Hackathon" },
    desc: { fr: "Innover pour un Sahara durable et intelligent — 31 mai au 1er juin 2025 à l'École Supérieure de Technologie de Laâyoune. Gratuit.", ar: "الابتكار من أجل صحراء مستدامة وذكية — 31 ماي إلى 1 يونيو 2025 بالمدرسة العليا للتكنولوجيا بالعيون.", en: "Innovating for a sustainable and smart Sahara — May 31 to June 1, 2025 at EST Laayoune. Free." },
  },
  {
    id: 2, image: campusBuilding, date: "2025-05-13",
    title: { fr: "Premier Master Class International : Innovation Technologique, IA et Économique", ar: "أول ماستر كلاس دولي: الابتكار التكنولوجي والذكاء الاصطناعي", en: "First International Master Class: Tech Innovation, AI & Economics" },
    desc: { fr: "Du 13 au 15 mai 2025 à l'École Supérieure de Technologie de Laâyoune. Gratuit.", ar: "من 13 إلى 15 ماي 2025 بالمدرسة العليا للتكنولوجيا بالعيون. مجاني.", en: "May 13-15, 2025 at EST Laayoune. Free." },
  },
  {
    id: 3, image: eventFestival, date: "2026-04-03",
    title: { fr: "4ème Festival Printanier Universitaire — Astronomie", ar: "المهرجان الربيعي الجامعي الرابع — علم الفلك", en: "4th University Spring Festival — Astronomy" },
    desc: { fr: "« Astronomie : Regards vers l'Infini » — Du 3 au 5 avril 2026 à l'École Supérieure de Technologie de Laâyoune. En collaboration avec l'AAMF.", ar: "« علم الفلك: نظرات نحو اللانهاية » — من 3 إلى 5 أبريل 2026 بالمدرسة العليا للتكنولوجيا بالعيون.", en: "\"Astronomy: Gazing into Infinity\" — April 3-5, 2026 at EST Laayoune. In collaboration with AAMF." },
  },
  {
    id: 4, image: campusCourtyard, date: "2024-06-08",
    title: { fr: "Cérémonie de remise des diplômes — Promotion 2023-2024", ar: "حفل تخرج طلبة الدفعة التاسعة للسنة الجامعية 2023-2024", en: "Graduation Ceremony — Class of 2023-2024" },
    desc: { fr: "Cérémonie de remise des diplômes de la 9ème promotion de l'EST Laâyoune.", ar: "حفل تخرج طلبة المدرسة العليا للتكنولوجيا الدفعة التاسعة.", en: "Graduation ceremony for the 9th class of EST Laayoune." },
  },
  {
    id: 5, image: campusBuilding, date: "2024-06-04",
    title: { fr: "Conférence MENM24 — Matériaux, Énergie et Modélisation Numérique", ar: "المؤتمر الأول حول المواد والطاقة والنمذجة الرقمية", en: "MENM24 — Materials, Energy and Numerical Modeling" },
    desc: { fr: "The First Conference on Materials, Energy and Numerical Modeling à l'EST Laâyoune, 4-5 juin 2024.", ar: "المؤتمر الأول حول المواد والطاقة والنمذجة الرقمية بالمدرسة العليا للتكنولوجيا بالعيون.", en: "The First Conference on Materials, Energy and Numerical Modeling at EST Laayoune, June 4-5, 2024." },
  },
  {
    id: 6, image: campusLife, date: "2024-05-31",
    title: { fr: "Workshop : Sécurité et Sûreté Biologique", ar: "ورشة عمل: الأمن والسلامة البيولوجية", en: "Workshop: Biological Safety & Security" },
    desc: { fr: "Pratiques et Exigences en Environnement Médical et Technologique. Organisé en collaboration avec l'EST de Laâyoune.", ar: "الممارسات والمتطلبات في البيئة الطبية والتكنولوجية.", en: "Practices and Requirements in Medical and Technological Environment." },
  },
  {
    id: 7, image: campusCourtyard, date: "2024-06-03",
    title: { fr: "المناظرات الجهوية — جهة العيون الساقية الحمراء", ar: "المناظرات الجهوية — جهة العيون الساقية الحمراء", en: "Regional Debates — Laâyoune-Sakia El Hamra Region" },
    desc: { fr: "Le Plan national pour accélérer la transformation du système d'enseignement supérieur, de recherche scientifique et d'innovation (PACTE ESRI 2030).", ar: "المخطط الوطني لتسريع تحول منظومة التعليم العالي والبحث العلمي والابتكار.", en: "National plan to accelerate the transformation of the higher education system (PACTE ESRI 2030)." },
  },
  {
    id: 8, image: campusBuilding, date: "2023-06-10",
    title: { fr: "Cérémonie de remise des diplômes — Promotion 2022-2023", ar: "حفل تخرج طلبة الدفعة الثامنة للسنة الجامعية 2022-2023", en: "Graduation Ceremony — Class of 2022-2023" },
    desc: { fr: "Cérémonie de remise des diplômes de la 8ème promotion de l'EST Laâyoune.", ar: "حفل تخرج طلبة المدرسة العليا للتكنولوجيا الدفعة الثامنة.", en: "Graduation ceremony for the 8th class of EST Laayoune." },
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
