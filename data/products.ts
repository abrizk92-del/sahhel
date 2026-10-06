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
    nameAr: "ميديكيوب ضمادات تونر زيرو بور باد 2.0 — ضمادة وجه مزدوجة الملمس، 70 ضمادة",
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
    ],
    benefitsAr: [
      "ضمادة مزدوجة الملمس: جانب للتقشير وجانب للتونر",
      "4.5% حمض اللاكتيك + 0.45% حمض الساليسيليك",
      "روتين بخطوة واحدة — يستبدل التونر والمقشر",
      "70 ضمادة تدوم حوالي شهرين",
    ],
    prosEn: [
      "#1 best-selling toner pad on Amazon",
      "100,000+ bought in the past month",
      "4.6 stars from 33,600+ reviews",
    ],
    prosAr: [
      "الأكثر مبيعًا في فئتها على أمازون",
      "أكثر من 100,000 عملية شراء شهريًا",
      "4.6 نجوم من 33,600+ مراجعة",
    ],
    consEn: [
      "Contains exfoliating acids — not for very sensitive skin",
      "Requires daily sunscreen use after AHA/BHA",
    ],
    consAr: [
      "يحتوي على أحماض مقشرة — غير مناسب للبشرة الحساسة جدًا",
      "يتطلب واقي شمس يومي",
    ],
    reviewEn: "This is the #1 best-selling toner pad on Amazon for a reason: it works, it is simple, and it fits into any routine. With over 33,000 reviews at 4.6 stars and 100,000+ units bought in the last month alone, this is the safest bet in Korean skincare right now.",
    reviewAr: "هذه هي ضمادة التونر الأكثر مبيعًا على أمازون لسبب واضح: فعّالة، بسيطة، وتدخل في أي روتين. مع أكثر من 33,000 مراجعة بتقييم 4.6 نجوم، هذه هي الخيار الأكثر أمانًا في العناية الكورية بالبشرة حاليًا.",
  },
  {
    id: "fullstar-chopper",
    slug: "fullstar-pro-vegetable-chopper",
    nameEn: "Fullstar Pro Original Vegetable Chopper & Spiralizer, All-in-1 Kitchen Tool — Multi-Blade Veggie Chopper, 5-Cup Container, Dishwasher Safe",
    nameAr: "فولستار برو مقطّع الخضروات الأصلي وسبيرالايزر، أداة مطبخ متعددة الوظائف — 5 أكواب، آمن في غسالة الأطباق",
    categoryId: "kitchen",
    emoji: "🥗",
    imageUrl: "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_SX679_.jpg",
    price: "$23.71",
    rating: 4.5,
    reviewCount: 96031,
    badge: { en: "Overall Pick", ar: "الاختيار الأمثل" },
    asin: "B0764HS4SL",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B0764HS4SL",
        price: "$23.71",
      },
    ],
    featured: true,
    benefitsEn: [
      "All-in-one kitchen tool: chop, dice, slice, and spiralize with one device",
      "Multiple interchangeable blades for different cuts and thickness",
      "5-cup container catches everything — no mess on the counter",
      "Soft-grip handle requires minimal hand strength",
      "Dishwasher safe — easy cleanup",
    ],
    benefitsAr: [
      "أداة مطبخ متعددة الوظائف: تقطيع، تكعيب، شرائح، وسبيرالايزر بجهاز واحد",
      "شفرات متعددة قابلة للتبديل لأشكال وسماكات مختلفة",
      "وعاء 5 أكواب يلتقط كل شيء — بدون فوضى على الطاولة",
      "مقبض ناعم يتطلب جهدًا بسيطًا من اليد",
      "آمن في غسالة الأطباق — تنظيف سهل",
    ],
    prosEn: [
      "Overall Pick on Amazon Kitchen category",
      "96,000+ reviews at 4.5 stars",
      "10,000+ bought in the past month",
      "Saves significant prep time in the kitchen",
    ],
    prosAr: [
      "الاختيار الأمثل في فئة أدوات المطبخ على أمازون",
      "96,000+ مراجعة بتقييم 4.5 نجوم",
      "10,000+ عملية شراء خلال الشهر الماضي",
      "يوفر وقتًا كبيرًا في تحضير الطعام",
    ],
    consEn: [
      "Blades are very sharp — careful when cleaning",
      "Not suitable for very hard vegetables like raw sweet potato",
    ],
    consAr: [
      "الشفرات حادة جدًا — كن حذرًا عند التنظيف",
      "غير مناسب للخضروات الصلبة جدًا مثل البطاطا الحلوة النيئة",
    ],
    reviewEn: "With over 96,000 reviews and a 4.5-star rating, this is one of the most trusted kitchen tools on Amazon. It replaces a knife, a cutting board, a mandoline, and a spiralizer — all in one compact device. For anyone with limited hand strength or arthritis, the soft-grip handle and the one-press chopping motion make vegetable prep genuinely easier.",
    reviewAr: "مع أكثر من 96,000 مراجعة وتقييم 4.5 نجوم، هذه واحدة من أكثر أدوات المطبخ الموثوقة على أمازون. تستبدل السكين ولوح التقطيع والماندولين والسبيرالايزر — كل ذلك في جهاز واحد مدمج. ولمن يعاني من ضعف في اليد أو التهاب المفاصل، المقبض الناعم وحركة التقطيع بضغطة واحدة تجعل تحضير الخضروات أسهل فعلاً.",
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
      "Large 5-inch LED display with 3-color backlight",
      "Syncs with iOS & Android app for trend tracking",
      "Fits upper arms from 8.6 to 16.5 inches",
      "One-button operation with automatic inflation",
    ],
    benefitsAr: [
      "شاشة LED كبيرة 5 بوصة بإضاءة ثلاثية الألوان",
      "تتزامن مع تطبيق iOS وأندرويد لمتابعة الاتجاهات",
      "تناسب محيط الذراع من 8.6 إلى 16.5 بوصة",
      "تعمل بضغطة زر واحدة مع نفخ تلقائي",
    ],
    prosEn: [
      "Very large, bright display",
      "Color-coded results — no need to interpret numbers",
      "App integration for tracking trends",
    ],
    prosAr: [
      "شاشة كبيرة ومضيئة",
      "النتائج ملوّنة — دون حاجة لتفسير الأرقام",
      "تكامل مع التطبيق لمتابعة الاتجاهات",
    ],
    consEn: [
      "More expensive than basic models",
      "App requires Bluetooth pairing setup",
    ],
    consAr: [
      "أغلى من الموديلات الأساسية",
      "التطبيق يتطلب إعداد البلوتوث",
    ],
    reviewEn: "We picked the RunStar because it solves the two biggest problems seniors face with blood pressure monitors: reading the numbers, and knowing what they mean. The 5-inch display is one of the largest in its class, and the 3-color backlight tells you instantly whether your reading is in a healthy range.",
    reviewAr: "اخترنا راستار لأنه يحل أكبر مشكلتين يواجهها كبار السن مع أجهزة ضغط الدم: قراءة الأرقام، وفهم معناها. الشاشة بحجم 5 بوصات من الأكبر في فئتها، والإضاءة الخلفية بثلاثة ألوان تخبرك فورًا إن كانت قراءتك في النطاق الصحي.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
