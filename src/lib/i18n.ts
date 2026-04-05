export type Lang = "fr" | "ar" | "en";

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { fr: "Accueil", ar: "الرئيسية", en: "Home" },
  "nav.about": { fr: "Découvrir ESTL", ar: "اكتشف ESTL", en: "About ESTL" },
  "nav.about.director": { fr: "Mot du Directeur", ar: "كلمة المدير", en: "Director's Message" },
  "nav.about.org": { fr: "Organigramme", ar: "الهيكل التنظيمي", en: "Organization Chart" },
  "nav.about.presentation": { fr: "Présentation", ar: "تقديم", en: "Presentation" },
  "nav.formation": { fr: "Formation", ar: "التكوين", en: "Programs" },
  "nav.formation.dut": { fr: "DUT", ar: "دبلوم جامعي تقني", en: "DUT Diploma" },
  "nav.formation.licence": { fr: "Licences Professionnelles", ar: "إجازات مهنية", en: "Professional Licences" },
  "nav.events": { fr: "Événements & Actualités", ar: "الأحداث والأخبار", en: "Events & News" },
  "nav.resources": { fr: "Ressources Étudiant", ar: "موارد الطالب", en: "Student Resources" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا", en: "Contact" },
  "hero.title": { fr: "École Supérieure de Technologie", ar: "المدرسة العليا للتكنولوجيا", en: "Higher School of Technology" },
  "hero.subtitle": { fr: "de Laâyoune", ar: "بالعيون", en: "of Laayoune" },
  "hero.desc": { fr: "Université Ibn Zohr — Excellence académique au cœur du Sahara", ar: "جامعة ابن زهر — التميز الأكاديمي في قلب الصحراء", en: "Ibn Zohr University — Academic excellence in the heart of the Sahara" },
  "hero.cta": { fr: "Nos Formations", ar: "تكويناتنا", en: "Our Programs" },
  "hero.discover": { fr: "Découvrir nos formations", ar: "اكتشف تكويناتنا", en: "Discover our programs" },
  "stats.students": { fr: "Étudiants", ar: "طلاب", en: "Students" },
  "stats.faculty": { fr: "Enseignants", ar: "أساتذة", en: "Faculty" },
  "stats.partners": { fr: "Partenaires", ar: "شركاء", en: "Partners" },
  "stats.labs": { fr: "Laboratoires", ar: "مختبرات", en: "Research Labs" },
  "news.title": { fr: "Actualités & Événements", ar: "الأخبار والأحداث", en: "News & Events" },
  "news.more": { fr: "Voir toutes les actualités", ar: "عرض جميع الأخبار", en: "View all news" },
  "testimonials.title": { fr: "Témoignages", ar: "شهادات", en: "Testimonials" },
  "footer.quicklinks": { fr: "Liens Rapides", ar: "روابط سريعة", en: "Quick Links" },
  "footer.contact": { fr: "Contact", ar: "اتصل بنا", en: "Contact Us" },
  "footer.social": { fr: "Réseaux Sociaux", ar: "شبكات التواصل", en: "Social Media" },
  "footer.rights": { fr: "Tous droits réservés", ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  "programs.title": { fr: "Nos Formations", ar: "تكويناتنا", en: "Our Programs" },
  "about.title": { fr: "À propos de l'EST Laâyoune", ar: "حول المدرسة العليا للتكنولوجيا بالعيون", en: "About EST Laayoune" },
  "contact.title": { fr: "Contactez-nous", ar: "اتصل بنا", en: "Contact Us" },
  "contact.name": { fr: "Nom complet", ar: "الاسم الكامل", en: "Full Name" },
  "contact.email": { fr: "Email", ar: "البريد الإلكتروني", en: "Email" },
  "contact.message": { fr: "Message", ar: "الرسالة", en: "Message" },
  "contact.send": { fr: "Envoyer", ar: "إرسال", en: "Send" },
  "contact.address": { fr: "Adresse", ar: "العنوان", en: "Address" },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
