import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Handshake, FlaskConical } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const stats = [
  { key: "stats.students", value: 1200, icon: Users, suffix: "+" },
  { key: "stats.faculty", value: 85, icon: BookOpen, suffix: "" },
  { key: "stats.partners", value: 40, icon: Handshake, suffix: "+" },
  { key: "stats.labs", value: 12, icon: FlaskConical, suffix: "" },
];

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ statKey, value, icon: Icon, suffix, inView }: {
  statKey: string; value: number; icon: typeof Users; suffix: string; inView: boolean;
}) => {
  const { lang } = useLang();
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <p className="font-heading text-4xl font-black text-primary mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground font-medium">{t(statKey, lang)}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-section-alt">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCard key={s.key} statKey={s.key} value={s.value} icon={s.icon} suffix={s.suffix} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
