export type Category = {
  id: string;
  labelEn: string;
  labelAr: string;
  emoji: string;
};

export const CATEGORIES: Category[] = [
  { id: "all",     labelEn: "All",                 labelAr: "الكل",                emoji: "🔎" },
  { id: "health",  labelEn: "Health & Safety",     labelAr: "الصحة والسلامة",       emoji: "🩺" },
  { id: "home",    labelEn: "Home & Phone",        labelAr: "أدوات المنزل والهاتف", emoji: "🏠" },
  { id: "kitchen", labelEn: "Kitchen Aids",        labelAr: "أدوات المطبخ المريحة", emoji: "🍽️" },
  { id: "sleep",   labelEn: "Sleep & Comfort",     labelAr: "الراحة والنوم",        emoji: "🌙" },
];

export function getCategoryLabel(id: string, lang: "en" | "ar"): string {
  const c = CATEGORIES.find((x) => x.id === id);
  if (!c) return "";
  return lang === "ar" ? c.labelAr : c.labelEn;
}

export function getCategoryEmoji(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.emoji ?? "•";
}