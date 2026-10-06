import Link from "next/link";

export function SiteFooter({ lang = "en" }: { lang?: "en" | "ar" }) {
  const isAr = lang === "ar";
  const prefix = isAr ? "/ar" : "";
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t-2 border-[#33404E] bg-[#151B23] pt-14 pb-8"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 grid place-items-center bg-[#FFC53D] text-[#0B0F14] rounded-xl text-[24px] font-black">
                ✓
              </span>
              <span className="text-[24px] font-black text-white">
                {isAr ? "سهّل" : "Sahhel"}
              </span>
            </div>
            <p className="text-[#9FB0C0] text-[16px] leading-relaxed m-0">
              {isAr
                ? "دليل منتجات مستقل يركّز على سهولة الاستخدام والوصول."
                : "An independent product guide focused on accessibility and ease of use."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[17px] font-black text-white mb-5">
              {isAr ? "روابط" : "Links"}
            </h3>
            <ul className="list-none m-0 p-0 grid gap-3">
              <li>
                <Link
                  href={isAr ? "/ar" : "/"}
                  className="text-[#9FB0C0] text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
                >
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/about`}
                  className="text-[#9FB0C0] text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
                >
                  {isAr ? "من نحن" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/disclosure`}
                  className="text-[#9FB0C0] text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
                >
                  {isAr ? "الإفصاح عن الأفلييت" : "Affiliate Disclosure"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/privacy`}
                  className="text-[#9FB0C0] text-[16px] no-underline hover:text-[#FFC53D] transition-colors"
                >
                  {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal note */}
          <div>
            <h3 className="text-[17px] font-black text-white mb-5">
              {isAr ? "معلومة قانونية" : "Legal"}
            </h3>
            <p className="text-[#9FB0C0] text-[15px] leading-relaxed m-0">
              {isAr
                ? "سهّل موقع مستقل. لا نصنّع أو نبيع أي منتج. عمليات الشراء تتم عبر متاجر خارجية مثل أمازون ونون وعلي إكسبرس."
                : "Sahhel is an independent website. We do not manufacture or sell any products. All purchases are completed through external stores such as Amazon, Noon, and AliExpress."}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[#33404E] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9FB0C0] text-[14px] m-0">
            {isAr
              ? `© ${year} سهّل. جميع الحقوق محفوظة.`
              : `© ${year} Sahhel. All rights reserved.`}
          </p>
          <p className="text-[#9FB0C0] text-[14px] m-0 text-center md:text-end">
            {isAr
              ? "الأسعار قابلة للتغيير. تحقق دائمًا من السعر النهائي على صفحة المتجر."
              : "Prices may change. Always verify the final price on the store page."}
          </p>
        </div>
      </div>
    </footer>
  );
}