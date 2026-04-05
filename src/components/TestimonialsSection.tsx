import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const testimonials = [
  {
    name: "Fatima Zahra El Amrani",
    role: { fr: "Diplômée DUT Informatique, 2023", ar: "خريجة دبلوم معلوميات 2023", en: "DUT Computer Science Graduate, 2023" },
    quote: {
      fr: "L'EST Laâyoune m'a offert une formation de qualité et des opportunités de stage exceptionnelles. Je recommande vivement cette école.",
      ar: "قدمت لي المدرسة تكوينا عالي الجودة وفرص تدريب استثنائية. أنصح بها بشدة.",
      en: "EST Laayoune gave me quality education and exceptional internship opportunities. I highly recommend this school."
    },
  },
  {
    name: "Ahmed Bouchta",
    role: { fr: "Étudiant LP Management Stratégique SI", ar: "طالب إجازة مهنية تدبير استراتيجي", en: "Strategic IT Management Student" },
    quote: {
      fr: "Les enseignants sont passionnés et le campus offre un cadre idéal pour étudier. L'environnement est motivant et stimulant.",
      ar: "الأساتذة شغوفون والحرم الجامعي يوفر إطارا مثاليا للدراسة. البيئة محفزة ومشجعة.",
      en: "The teachers are passionate and the campus provides an ideal environment for studying. Very motivating."
    },
  },
  {
    name: "Khadija Ouali",
    role: { fr: "Diplômée Génie Civil, 2024", ar: "خريجة هندسة مدنية 2024", en: "Civil Engineering Graduate, 2024" },
    quote: {
      fr: "Grâce à la formation pratique, j'ai pu décrocher un emploi dès la fin de mes études. L'EST prépare vraiment au monde professionnel.",
      ar: "بفضل التكوين التطبيقي، تمكنت من الحصول على عمل فور تخرجي. المدرسة تعد حقا لسوق الشغل.",
      en: "Thanks to the practical training, I got a job right after graduation. EST truly prepares you for the professional world."
    },
  },
];

const TestimonialsSection = () => {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-section-alt">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t("testimonials.title", lang)}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-card rounded-2xl border border-border p-8 sm:p-10 text-center shadow-sm"
            >
              <Quote className="mx-auto h-8 w-8 text-accent mb-6" />
              <p className="text-lg text-foreground/80 italic leading-relaxed mb-6">
                "{current.quote[lang]}"
              </p>
              <p className="font-heading font-semibold text-foreground">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role[lang]}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/5 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/5 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
