import Link from "next/link";

export function SiteHeader({ lang = "en" }: { lang?: "en" | "ar" }) {
  const isAr = lang === "ar";
  const otherHref = isAr ? "/" : "/ar";
  const otherLabel = isAr ? "English" : "العربية";
  const prefix = isAr ? "/ar" : "";

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F14]/95 backdrop-blur-md border-b-2 border-[#33404E]">
      <div className="wrap flex items-center justify-between gap-4 py-4">
        <Link
          href={isAr ? "/ar" : "/"}
          className="flex items-center gap-4 no-underline text-white"
        >
          <span
            className="w-14 h-14 grid place-items-center bg-[#FFC53D] text-[#0B0F14] rounded-2xl text-[30px] font-black"
            aria-hidden="true"
          >
            ✓
          </span>
          <span dir={isAr ? "rtl" : "ltr"}>
            <span className="block text-[clamp(24px,3.6vw,32px)] font-black leading-tight">
              {isAr ? "سهّل" : "Sahhel"}
            </span>
            <small className="block text-[15px] font-semibold text-[#9FB0C0] leading-snug">
              {isAr
                ? "أدوات مختارة لحياة أسهل"
                : "Accessible picks for easier living"}
            </small>
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label={isAr ? "التنقل الرئيسي" : "Main navigation"}
        >
          <Link
            href={isAr ? "/ar" : "/"}
            className="text-[#D3DCE6] font-bold text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
          >
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <Link
            href={`${prefix}/about`}
            className="text-[#D3DCE6] font-bold text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
          >
            {isAr ? "من نحن" : "About"}
          </Link>
          <Link
            href={`${prefix}/disclosure`}
            className="text-[#D3DCE6] font-bold text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
          >
            {isAr ? "الإفصاح" : "Disclosure"}
          </Link>
        </nav>

        <Link
          href={otherHref}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[#33404E] bg-[#151B23] text-white font-bold text-[16px] no-underline hover:border-[#FFC53D] hover:bg-[#1D2630] transition-colors"
          aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
        >
          🌐 {otherLabel}
        </Link>
      </div>
    </header>
  );
}