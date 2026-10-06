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
    id: "bp-monitor",
    slug: "digital-talking-blood-pressure-monitor",
    nameEn: "Digital Talking Blood Pressure Monitor",
    nameAr: "مقياس ضغط الدم الرقمي الناطق",
    categoryId: "health",
    emoji: "🩺",
    imageUrl: "",
    price: "$49.99",
    rating: 4.7,
    reviewCount: 12840,
    badge: { en: "Best Overall", ar: "الأفضل عمومًا" },
    asin: "B00XXXXXXXX",
    stores: [
      {
        id: "amazon",
        label: "Amazon",
        labelAr: "أمازون",
        url: "https://www.amazon.com/dp/B00XXXXXXXX",
        price: "$49.99",
      },
      {
        id: "noon",
        label: "Noon",
        labelAr: "نون",
        url: "https://www.noon.com/search?q=blood+pressure+monitor",
        price: "$52.00",
      },
      {
        id: "aliexpress",
        label: "AliExpress",
        labelAr: "علي إكسبرس",
        url: "https://www.aliexpress.com/wholesale?SearchText=blood+pressure+monitor",
        price: "$34.50",
      },
    ],
    featured: true,
    benefitsEn: [
      "Reads your blood pressure result out loud in a clear voice",
      "Large, bright numbers — easy to read in low light",
      "One-button operation — the cuff inflates automatically",
    ],
    benefitsAr: [
      "يقرأ نتيجة الضغط بصوت عالٍ وواضح",
      "شاشة بأرقام كبيرة ومضيئة تعمل في الإضاءة الخافتة",
      "كفة تنتفخ تلقائيًا بضغطة زر واحدة فقط",
    ],
    prosEn: [
      "Voice announcement in English and Spanish",
      "Color-coded indicator (green/yellow/red)",
      "Stores up to 60 readings for two users",
    ],
    prosAr: [
      "نطق صوتي بالإنجليزية والإسبانية",
      "مؤشر ملوّن (أخضر/أصفر/أحمر)",
      "يحفظ 60 قراءة لمستخدمين",
    ],
    consEn: ["Cuff may be tight for very large arms"],
    consAr: ["الكفة قد تكون ضيقة للأذرع الكبيرة جدًا"],
    reviewEn:
      "We chose it because it is one of the few in its class that speaks the full reading aloud, with a color-coded indicator showing instantly whether your pressure is normal or high — no need to interpret the numbers. Ideal for anyone living alone or with low vision.",
    reviewAr:
      "اخترناه لأنه من القلائل في فئته الذي ينطق القراءة كاملة، مع مؤشر ملوّن يوضح فورًا إن كان الضغط طبيعيًا أم مرتفعًا — دون الحاجة لتفسير الأرقام. مثالي لمن يعيش وحده أو لمن يعاني من ضعف البصر.",
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
      {
        id: "noon",
        label: "Noon",
        labelAr: "نون",
        url: "https://www.noon.com/search?q=big+button+phone",
        price: "$42.00",
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
      {
        id: "walmart",
        label: "Walmart",
        labelAr: "وول مارت",
        url: "https://www.walmart.com/search?q=electric+can+opener",
        price: "$29.99",
      },
      {
        id: "aliexpress",
        label: "AliExpress",
        labelAr: "علي إكسبرس",
        url: "https://www.aliexpress.com/wholesale?SearchText=electric+can+opener",
        price: "$19.80",
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