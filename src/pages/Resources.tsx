import { motion } from "framer-motion";
import { FileText, Download, Calendar as CalendarIcon, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const resources = [
  { icon: ClipboardList, title: "Emplois du temps — Semestre S2 2025", date: "2025-03-01", type: "PDF" },
  { icon: CalendarIcon, title: "Calendrier des examens — Session Printemps", date: "2025-02-20", type: "PDF" },
  { icon: FileText, title: "Calendrier académique 2024-2025", date: "2025-01-15", type: "PDF" },
  { icon: ClipboardList, title: "Emplois du temps — Rattrapage Automne", date: "2025-01-10", type: "PDF" },
  { icon: FileText, title: "Guide de l'étudiant 2024-2025", date: "2024-09-05", type: "PDF" },
  { icon: FileText, title: "Formulaire de demande de relevé de notes", date: "2024-09-01", type: "PDF" },
];

const Resources = () => {
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
            {t("nav.resources", lang)}
          </motion.h1>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {resources.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm truncate">{r.title}</h3>
                  <p className="text-xs text-muted-foreground">{r.date} · {r.type}</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Download className="h-4 w-4 mr-1" /> Télécharger
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
