export function FTCBar({ lang = "en" }: { lang?: "en" | "ar" }) {
  const isAr = lang === "ar";
  return (
    <div
      role="note"
      aria-label={isAr ? "إفصاح الأفلييت" : "Affiliate disclosure"}
      className="bg-[#3A2E08] border-b-2 border-[#FFC53D] text-[#FFE7A8]"
    >
      <div
        className="wrap flex items-start gap-4 py-4"
        dir={isAr ? "rtl" : "ltr"}
      >
        <span className="text-[22px] leading-snug" aria-hidden="true">
          ℹ️
        </span>
        <p className="m-0 text-[16.5px] font-semibold leading-relaxed">
          {isAr ? (
            <>
              <strong className="text-[#FFC53D]">إفصاح:</strong> قد نحصل على
              عمولة بسيطة عند الشراء من خلال هذه الروابط،{" "}
              <strong className="text-[#FFC53D]">
                دون أي تكلفة إضافية عليك
              </strong>
              .
            </>
          ) : (
            <>
              <strong className="text-[#FFC53D]">Disclosure:</strong> We may
              earn a small commission when you buy through these links,{" "}
              <strong className="text-[#FFC53D]">
                at no extra cost to you
              </strong>
              .
            </>
          )}
        </p>
      </div>
    </div>
  );
}