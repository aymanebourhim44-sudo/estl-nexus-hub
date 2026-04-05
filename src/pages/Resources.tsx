import { motion } from "framer-motion";
import { FileText, Download, Calendar as CalendarIcon, ClipboardList, BookOpen, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import { useState } from "react";

type Category = "all" | "schedules" | "exams" | "admin" | "guides";

const categories: { key: Category; label: Record<string, string>; icon: React.ElementType }[] = [
  { key: "all", label: { fr: "Tout", ar: "الكل", en: "All" }, icon: BookOpen },
  { key: "schedules", label: { fr: "Emplois du temps", ar: "جداول الحصص", en: "Timetables" }, icon: ClipboardList },
  { key: "exams", label: { fr: "Examens", ar: "الامتحانات", en: "Exams" }, icon: CalendarIcon },
  { key: "admin", label: { fr: "Administratif", ar: "إداري", en: "Administrative" }, icon: FileText },
  { key: "guides", label: { fr: "Guides", ar: "أدلة", en: "Guides" }, icon: GraduationCap },
];

const resources = [
  { icon: ClipboardList, title: "Emplois du temps — Semestre S2 2025", date: "2025-03-01", type: "PDF", category: "schedules" as Category },
  { icon: CalendarIcon, title: "Calendrier des examens — Session Printemps", date: "2025-02-20", type: "PDF", category: "exams" as Category },
  { icon: FileText, title: "Calendrier académique 2024-2025", date: "2025-01-15", type: "PDF", category: "admin" as Category },
  { icon: ClipboardList, title: "Emplois du temps — Rattrapage Automne", date: "2025-01-10", type: "PDF", category: "schedules" as Category },
  { icon: GraduationCap, title: "Guide de l'étudiant 2024-2025", date: "2024-09-05", type: "PDF", category: "guides" as Category },
  { icon: FileText, title: "Formulaire de demande de relevé de notes", date: "2024-09-01", type: "PDF", category: "admin" as Category },
  { icon: CalendarIcon, title: "Calendrier des examens — Session Automne", date: "2024-11-15", type: "PDF", category: "exams" as Category },
  { icon: GraduationCap, title: "Guide des stages — Procédures et conventions", date: "2024-10-01", type: "PDF", category: "guides" as Category },
];

const Resources = () => {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
          >
            {t("nav.resources", lang)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-xl"
          >
            {lang === "ar"
              ? "جميع الوثائق والموارد الأكاديمية في مكان واحد"
              : lang === "en"
              ? "All academic documents and resources in one place"
              : "Tous les documents et ressources académiques en un seul endroit"}
          </motion.p>
          <div className="h-1 w-16 bg-accent rounded-full mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={lang === "ar" ? "بحث..." : lang === "en" ? "Search documents..." : "Rechercher un document..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label[lang] || cat.label.fr}
              </button>
            ))}
          </motion.div>

          {/* Resource grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm leading-snug mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{r.date} · {r.type}</p>
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    {lang === "ar" ? "تحميل" : lang === "en" ? "Download" : "Télécharger"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>{lang === "ar" ? "لا توجد نتائج" : lang === "en" ? "No results found" : "Aucun résultat trouvé"}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
