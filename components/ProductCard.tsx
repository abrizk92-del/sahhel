import Link from "next/link";
import type { Product } from "@/data/products";
import { getCategoryEmoji, getCategoryLabel } from "@/data/categories";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <span key={i} className="text-[#FFC53D]">★</span>;
        if (i === full && hasHalf) return <span key={i} className="text-[#FFC53D]">⯨</span>;
        return <span key={i} className="text-[#4A5B6D]">★</span>;
      })}
    </span>
  );
}

export function ProductCard({
  product,
  lang = "en",
}: {
  product: Product;
  lang?: "en" | "ar";
}) {
  const isAr = lang === "ar";
  const name = isAr ? product.nameAr : product.nameEn;
  const badge = product.badge ? (isAr ? product.badge.ar : product.badge.en) : null;
  const baseUrl = isAr ? "/ar" : "";
  const hasImage = product.imageUrl && product.imageUrl.length > 0;

  return (
    <Link
      href={`${baseUrl}/product/${product.slug}`}
      className="card group"
      dir={isAr ? "rtl" : "ltr"}
      aria-label={`${name} — ${product.price}`}
    >
      {/* Image area */}
      <div className="relative">
        <div
          className="grid place-items-center h-[240px] rounded-[14px] bg-white border-2 border-[#33404E] mb-5 overflow-hidden"
          aria-hidden="true"
        >
          {hasImage ? (
            <img
              src={product.imageUrl}
              alt={name}
              className="w-full h-full object-contain p-3"
              loading="lazy"
            />
          ) : (
            <span className="text-[80px]">{product.emoji}</span>
          )}
        </div>
        {badge && (
          <span className="absolute top-3 start-3 bg-[#FFC53D] text-[#0B0F14] text-[13px] font-black px-3 py-1.5 rounded-full shadow-lg">
            {badge}
          </span>
        )}
      </div>

      {/* Category */}
      <span className="inline-block self-start bg-[#26313D] text-[#9FB0C0] border-[1.5px] border-[#33404E] px-4 py-1 rounded-full text-[14px] font-semibold mb-3">
        {getCategoryEmoji(product.categoryId)}{" "}
        {getCategoryLabel(product.categoryId, lang)}
      </span>

      {/* Name */}
      <h3 className="block text-[20px] font-extrabold leading-snug mb-2.5 text-white m-0">
        {name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <Stars rating={product.rating} />
        <span className="text-[15px] text-[#9FB0C0] font-semibold">
          {product.rating.toFixed(1)} ({product.reviewCount.toLocaleString()})
        </span>
      </div>

      {/* Price */}
      <span
        className="block mt-auto pt-3 text-[24px] font-black text-[#FFC53D]"
        dir="ltr"
      >
        {product.price}
      </span>

      {/* Stores count */}
      <span className="text-[14px] text-[#9FB0C0] mt-1 font-semibold">
        {isAr
          ? `متوفر في ${product.stores.length} متاجر`
          : `Available on ${product.stores.length} store${product.stores.length > 1 ? "s" : ""}`}
      </span>

      {/* CTA */}
      <span className="flex items-center gap-2 mt-3 pt-4 border-t-2 border-[#33404E] text-[16px] font-bold text-[#D3DCE6] group-hover:text-[#FFC53D] transition-colors">
        {isAr ? "اعرض التفاصيل والأسعار" : "View details & prices"}
        <span className="text-[#FFC53D] text-[18px]" aria-hidden="true">
          {isAr ? "←" : "→"}
        </span>
      </span>
    </Link>
  );
}
