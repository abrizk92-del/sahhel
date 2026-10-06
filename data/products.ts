export type Store = {
  id: string;
  label: string;
  labelAr: string;
  url: string;
  price?: string;
};

export type Product = {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  categoryId: string;
  emoji: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviewCount: number;
  badge?: { en: string; ar: string };
  asin: string;
  stores: Store[];
  featured: boolean;
  benefitsEn: string[];
  benefitsAr: string[];
  prosEn: string[];
  prosAr: string[];
  consEn: string[];
  consAr: string[];
  reviewEn: string;
  reviewAr: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "runstar-bp-monitor",
    slug: "runstar-smart-blood-pressure-monitor",
    nameEn: "RunStar Smart Blood Pressure Monitor for Home Use — Upper Arm Cuff, Large 5-inch LED Display, with iOS & Android App",
    nameAr: "راستار جهاز ضغط الدم الذكي للاستخدام المنزلي — شاشة LED كبيرة 5 بوصة مع تطبيق iOS وأندرويد",
    categoryId: "health",
    emoji: "🩺",
    imageUrl: "https://m.media-amazon.com/images/I/81wo8SHftsL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$89.99",
    rating: 4.4,
    reviewCount: 215,
    badge: { en: "Best Overall", ar: "الأفضل عمومًا" },
    asin: "B0GX5MNR27",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B0GX5MNR27",
        price: "$89.99",
      },
    ],
    featured: true,
    benefitsEn: [
      "Large 5-inch LED display with 3-color backlight — instantly shows if your reading is normal, elevated, or high",
      "Syncs with iOS & Android app to track blood pressure trends over time",
      "Fits upper arms from 8.6 to 16.5 inches",
      "One-button operation with automatic inflation",
    ],
    benefitsAr: [
      "شاشة LED كبيرة 5 بوصة بإضاءة خلفية بثلاثة ألوان — توضح فورًا إن كانت القراءة طبيعية أو مرتفعة",
      "تتزامن مع تطبيق iOS وأندرويد لمتابعة اتجاهات ضغط الدم",
      "تناسب محيط الذراع من 8.6 إلى 16.5 بوصة",
      "تعمل بضغطة زر واحدة مع نفخ تلقائي",
    ],
    prosEn: [
      "Very large, bright display — one of the easiest to read",
      "Color-coded results mean no need to interpret numbers",
      "App integration for tracking trends over months",
    ],
    prosAr: [
      "شاشة كبيرة ومضيئة — من الأسهل قراءة في فئتها",
      "النتائج ملوّنة — لست بحاجة لتفسير الأرقام",
      "تكامل مع التطبيق لمتابعة الاتجاهات على مدار شهور",
    ],
    consEn: [
      "More expensive than basic models",
      "App requires Bluetooth pairing setup",
    ],
    consAr: [
      "أغلى من الموديلات الأساسية",
      "التطبيق يتطلب إعداد الاقتران عبر البلوتوث",
    ],
    reviewEn: "We picked the RunStar because it solves the two biggest problems seniors face with blood pressure monitors: reading the numbers, and knowing what they mean. The 5-inch display is one of the largest in its class, and the 3-color backlight tells you instantly whether your reading is in a healthy range — no medical training required.",
    reviewAr: "اخترنا راستار لأنه يحل أكبر مشكلتين يواجهها كبار السن مع أجهزة ضغط الدم: قراءة الأرقام، وفهم معناها. الشاشة بحجم 5 بوصات من الأكبر في فئتها، والإضاءة الخلفية بثلاثة ألوان تخبرك فورًا إن كانت قراءتك في النطاق الصحي.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
