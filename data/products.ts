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
    id: "medicube-toner-pads",
    slug: "medicube-zero-pore-pad-2",
    nameEn: "Medicube Toner Pads Zero Pore Pad 2.0 — Dual-Textured Facial Pad with 4.5% AHA Lactic Acid & 0.45% BHA Salicylic Acid, Korean Skin Care, 70 Pads",
    nameAr: "ميديكيوب ضمادات تونر زيرو بور باد 2.0 — ضمادة وجه مزدوجة الملمس بحمض اللاكتيك 4.5% وحمض الساليسيليك 0.45%، 70 ضمادة",
    categoryId: "beauty",
    emoji: "✨",
    imageUrl: "https://m.media-amazon.com/images/I/71Mcspt-6AL._SX679_.jpg",
    price: "$14.90",
    rating: 4.6,
    reviewCount: 33600,
    badge: { en: "#1 Best Seller", ar: "الأكثر مبيعًا" },
    asin: "B09V7Z4TJG",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B09V7Z4TJG",
        price: "$14.90",
      },
    ],
    featured: true,
    benefitsEn: [
      "Dual-textured pad: embossed side for gentle exfoliation, soft side for toning",
      "4.5% AHA Lactic Acid + 0.45% BHA Salicylic Acid for clear, smooth pores",
      "One-step routine — replaces toner, exfoliator, and cotton pad",
      "70 pads per jar — lasts about 2 months with daily use",
      "Korean skincare formula suitable for all skin types",
    ],
    benefitsAr: [
      "ضمادة مزدوجة الملمس: جانب بارز للتقشير اللطيف، وجانب ناعم للتونر",
      "4.5% حمض اللاكتيك + 0.45% حمض الساليسيليك لمسام نظيفة وناعمة",
      "روتين بخطوة واحدة — يستبدل التونر والمقشر وقطنة القطن",
      "70 ضمادة في العلبة — تدوم حوالي شهرين مع الاستخدام اليومي",
      "تركيبة كورية للعناية بالبشرة مناسبة لجميع أنواع البشرة",
    ],
    prosEn: [
      "#1 best-selling toner pad on Amazon",
      "Over 100,000+ bought in the past month",
      "4.6 stars from 33,600+ reviews",
      "Very effective on blackheads and sebum",
    ],
    prosAr: [
      "الأكثر مبيعًا في فئة ضمادات التونر على أمازون",
      "أكثر من 100,000 عملية شراء خلال الشهر الماضي",
      "4.6 نجوم من أكثر من 33,600 مراجعة",
      "فعّال جدًا مع الرؤوس السوداء والدهون",
    ],
    consEn: [
      "Contains exfoliating acids — not for very sensitive skin",
      "Requires daily sunscreen use after AHA/BHA",
    ],
    consAr: [
      "يحتوي على أحماض مقشرة — غير مناسب للبشرة الحساسة جدًا",
      "يتطلب استخدام واقي شمس يوميًا بعد AHA/BHA",
    ],
    reviewEn: "This is the #1 best-selling toner pad on Amazon for a reason: it works, it is simple, and it fits into any routine. The dual-textured pad lets you gently exfoliate on one side and tone on the other, so you replace three products with one. With over 33,000 reviews at 4.6 stars and 100,000+ units bought in the last month alone, this is the safest bet in Korean skincare right now.",
    reviewAr: "هذه هي ضمادة التونر الأكثر مبيعًا على أمازون لسبب واضح: فعّالة، بسيطة، وتدخل في أي روتين. الملمس المزدوج يتيح لك التقشير اللطيف من جهة والتونر من جهة أخرى، فتستبدل ثلاثة منتجات بواحد. مع أكثر من 33,000 مراجعة بتقييم 4.6 نجوم وأكثر من 100,000 عملية شراء خلال الشهر الماضي وحده، هذه هي الخيار الأكثر أمانًا في العناية الكورية بالبشرة حاليًا.",
  },
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
    badge: { en: "Best for Seniors", ar: "الأفضل لكبار السن" },
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
