export type Store = {
  id: "amazon" | "noon" | "aliexpress" | "walmart";
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
    nameEn:
      "RunStar Smart Blood Pressure Monitor for Home Use — Upper Arm BP Cuff, Large 5.0'' 3-Color LED Display, FSA & HSA Eligible, with iOS & Android App",
    nameAr:
      "راستار جهاز ضغط الدم الذكي للاستخدام المنزلي — شاشة LED كبيرة 5.0 بوصة بثلاثة ألوان، مع تطبيق iOS وأندرويد",
    categoryId: "health",
    emoji: "🩺",
    imageUrl:
      "https://m.media-amazon.com/images/I/81wo8SHftsL._AC_SY300_SX300_QL70_FMwebp_.jpg",
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
      "Large 5-inch LED display with 3-color backlight — instantly shows if your reading is normal (green), elevated (yellow), or high (red)",
      "Syncs with iOS & Android app to track blood pressure and heart rate trends over time",
      "Fits upper arms from 8.6'' to 16.5'' — comfortable for most users",
      "One-button operation with automatic inflation — no manual pumping",
      "FSA & HSA eligible — can be purchased with health savings accounts",
    ],
    benefitsAr: [
      "شاشة LED كبيرة 5 بوصة بإضاءة خلفية بثلاثة ألوان — توضح فورًا إن كانت القراءة طبيعية (أخضر) أو مرتفعة (أصفر) أو عالية (أحمر)",
      "تتزامن مع تطبيق iOS وأندرويد لمتابعة اتجاهات ضغط الدم ومعدل النبض",
      "تناسب محيط الذراع من 8.6 إلى 16.5 بوصة — مريحة لمعظم المستخدمين",
      "تعمل بضغطة زر واحدة مع نفخ تلقائي — بدون ضخ يدوي",
      "مؤهلة لـ FSA و HSA — يمكن شراؤها من حسابات التوفير الصحي",
    ],
    prosEn: [
      "Very large, bright display — one of the easiest to read",
      "Color-coded results mean no need to interpret numbers",
      "App integration for tracking trends over months",
      "FSA/HSA eligible",
    ],
    prosAr: [
      "شاشة كبيرة ومضيئة — من الأسهل قراءة في فئتها",
      "النتائج ملوّنة — لست بحاجة لتفسير الأرقام",
      "تكامل مع التطبيق لمتابعة الاتجاهات على مدار شهور",
      "مؤهل لـ FSA و HSA",
    ],
    consEn: [
      "More expensive than basic models",
      "App requires Bluetooth pairing setup",
    ],
    consAr: [
      "أغلى من الموديلات الأساسية",
      "التطبيق يتطلب إعداد الاقتران عبر البلوتوث",
    ],
    reviewEn:
      "We picked the RunStar because it solves the two biggest problems seniors face with blood pressure monitors: reading the numbers, and knowing what they mean. The 5-inch display is one of the largest in its class, and the 3-color backlight tells you instantly whether your reading is in a healthy range — no medical training required. The companion app quietly tracks your readings over time, which is invaluable when your doctor asks how your pressure has been trending.",
    reviewAr:
      "اخترنا راستار لأنه يحل أكبر مشكلتين يواجهها كبار السن مع أجهزة ضغط الدم: قراءة الأرقام، وفهم معناها. الشاشة بحجم 5 بوصات من الأكبر في فئتها، والإضاءة الخلفية بثلاثة ألوان تخبرك فورًا إن كانت قراءتك في النطاق الصحي — دون الحاجة لأي معرفة طبية. التطبيق المرافق يتابع قراءاتك بهدوء على مدار الوقت، وهذا أمر لا يقدّر بثمن عندما يسألك طبيبك عن اتجاه ضغطك.",
  },
  {
    id: "big-button-phone",
    slug: "big-button-landline-phone",
    nameEn: "Big Button Landline Phone",
    nameAr: "هاتف أرضي بأزرار كبيرة وأرقام مضيئة",
    categoryId: "home",
    emoji: "☎️",
    imageUrl: "",
    price: "$39.99",
    rating: 4.5,
    reviewCount: 8320,
    badge: { en: "Best for Low Vision", ar: "الأفضل لضعف البصر" },
    asin: "B00XXXXXXXX",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B00XXXXXXXX",
        price: "$39.99",
      },
    ],
    featured: true,
    benefitsEn: [
      "Buttons are 2 cm wide with raised numbers you can feel",
      "Strong backlight makes the numbers readable in the dark",
      "Extra-loud ringer with an adjustable volume dial",
    ],
    benefitsAr: [
      "أزرار بحجم ٢ سم بأرقام بارزة يمكن تمييزها باللمس",
      "إضاءة خلفية قوية تجعل الأرقام واضحة في الظلام",
      "صوت رنين مرتفع جدًا قابل للضبط",
    ],
    prosEn: [
      "Photo memory buttons for emergency contacts",
      "Hearing-aid compatible",
      "Wall-mountable design",
    ],
    prosAr: [
      "أزرار ذاكرة بصور لجهات الاتصال الطارئة",
      "متوافق مع المعينات السمعية",
      "قابل للتعليق على الحائط",
    ],
    consEn: ["Not compatible with VoIP-only lines"],
    consAr: ["غير متوافق مع خطوط VoIP فقط"],
    reviewEn:
      "This phone was designed for people with low vision and hearing loss. The raised numbers mean you can dial by touch without looking, and the loud ringer can be heard from another room.",
    reviewAr:
      "صُمّم هذا الهاتف أصلًا لمن يعانون من ضعف البصر والسمع. الأرقام البارزة تعني إمكانية الطلب باللمس دون النظر، والرنين المرتفع يُسمع من غرفة أخرى.",
  },
  {
    id: "electric-opener",
    slug: "electric-can-opener",
    nameEn: "Electric Can Opener",
    nameAr: "فتّاحة العلب الكهربائية",
    categoryId: "kitchen",
    emoji: "🥫",
    imageUrl: "",
    price: "$27.50",
    rating: 4.6,
    reviewCount: 15670,
    badge: { en: "Best for Arthritis", ar: "الأفضل لالتهاب المفاصل" },
    asin: "B00XXXXXXXX",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B00XXXXXXXX",
        price: "$27.50",
      },
    ],
    featured: true,
    benefitsEn: [
      "Opens the whole can with a single press of a button",
      "Thick handle requires no grip strength at all",
      "Cut edge is smooth and safe on fingers",
    ],
    benefitsAr: [
      "تفتح العلبة بالكامل بضغطة زر واحدة",
      "مقبض سميك لا يتطلب أي قوة في اليد",
      "حافة القطع آمنة وغير حادة على الأصابع",
    ],
    prosEn: [
      "Works on most can sizes",
      "Leaves no sharp edges",
      "Battery-powered — no cord needed",
    ],
    prosAr: [
      "تعمل مع معظم أحجام العلب",
      "لا تترك حواف حادة",
      "تعمل بالبطارية — بلا أسلاك",
    ],
    consEn: ["Takes 10-15 seconds per can"],
    consAr: ["تستغرق 10-15 ثانية لكل علبة"],
    reviewEn:
      "We chose it because it removes the need for hand strength entirely — the first thing to fade with age or arthritis. It runs on batteries and sits on the can until it is done.",
    reviewAr:
      "اخترناها لأنها تلغي الحاجة إلى قوة اليد تمامًا — وهي أول ما يتراجع مع التقدم في العمر أو مع التهاب المفاصل. تعمل ببطارية وتُترك على العلبة حتى تنتهي.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}