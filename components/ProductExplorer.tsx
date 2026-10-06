"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "./ProductCard";

export function ProductExplorer({
  products,
  lang = "en",
}: {
  products: Product[];
  lang?: "en" | "ar";
}) {
  const isAr = lang === "ar";
  const [activeCat, setActiveCat] = useState("all");

  const featured = products.filter((p) => p.featured);
  const filtered =
    activeCat === "all"
      ? products
      : products.filter((p) => p.categoryId === activeCat);

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="py-16 md:py-24 border-b-2 border-[#33404E]">
        <div className="wrap text-center max-w-[900px]">
          <span className="inline-block bg-[#1D2630] text-[#FFC53D] border-2 border-[#33404E] px-5 py-2 rounded-full text-[15px] font-bold mb-6">
            {isAr
              ? "🏆 أكثر من 40 منتج تم اختباره بعناية"
              : "🏆 Over 40 products carefully tested"}
          </span>

          <h1 className="text-[clamp(32px,6vw,56px)] font-black leading-[1.2] tracking-tight mb-6">
            {isAr ? (
              <>
                أدوات مختارة تجعل
                <br />
                <span className="text-[#FFC53D]">الحياة اليومية أسهل</span>
              </>
            ) : (
              <>
                Accessible products that make
                <br />
                <span className="text-[#FFC53D]">everyday life easier</span>
              </>
            )}
          </h1>

          <p className="text-[19px] md:text-[21px] text-[#D3DCE6] leading-relaxed mb-10 max-w-[720px] mx-auto">
            {isAr
              ? "نرشّح لك الأفضل فقط: أزرار كبيرة، أصوات واضحة، ومسكات مريحة — منتقاة خصيصًا لكبار السن ومن يعانون من ضعف الحركة أو البصر."
              : "We only recommend the best: big buttons, loud sounds, and comfortable grips — hand-picked for seniors and anyone with limited mobility or vision."}
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[820px] mx-auto">
            {[
              { icon: "🔍", en: "Independent reviews", ar: "مراجعات مستقلة" },
              { icon: "✅", en: "Hand-tested picks", ar: "منتجات مختبرة" },
              { icon: "💬", en: "Clear, honest pros & cons", ar: "مميزات وعيوب بصدق" },
              { icon: "🔒", en: "No sponsored rankings", ar: "بدون ترتيب مدفوع" },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#151B23] border-2 border-[#33404E] rounded-2xl px-4 py-5 flex flex-col items-center gap-2"
              >
                <span className="text-[26px]" aria-hidden="true">
                  {t.icon}
                </span>
                <span className="text-[14px] font-bold text-[#D3DCE6] text-center leading-snug">
                  {isAr ? t.ar : t.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-[#151B23] border-b-2 border-[#33404E] py-14">
        <div className="wrap">
          <div className="mb-8">
            <span className="inline-block bg-[#1D2630] text-[#FFC53D] border-2 border-[#33404E] px-5 py-1.5 rounded-full text-[15px] font-bold mb-4">
              {isAr ? "⭐ الأكثر طلبًا" : "⭐ Most Popular"}
            </span>
            <h2 className="text-[clamp(26px,4.4vw,38px)] font-black tracking-tight">
              {isAr ? "الرشحيات المختارة" : "Featured Picks"}
            </h2>
            <p className="text-[#9FB0C0] text-[18px] mt-2 max-w-[70ch]">
              {isAr
                ? "منتجات اخترناها بعناية لأنها الأسهل استخدامًا والأكثر فائدة يوميًا."
                : "Products we hand-picked because they are the easiest to use and the most useful day to day."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="py-14">
        <div className="wrap">
          <div className="mb-7">
            <span className="inline-block bg-[#1D2630] text-[#FFC53D] border-2 border-[#33404E] px-5 py-1.5 rounded-full text-[15px] font-bold mb-4">
              {isAr ? "🗂️ تصفّح حسب الفئة" : "🗂️ Browse by Category"}
            </span>
            <h2 className="text-[clamp(26px,4.4vw,38px)] font-black tracking-tight">
              {isAr ? "كل المنتجات" : "All Products"}
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-3.5 mb-9"
            role="group"
            aria-label={isAr ? "تصفية حسب الفئة" : "Filter by category"}
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className="chip"
                aria-pressed={c.id === activeCat}
                onClick={() => setActiveCat(c.id)}
              >
                <span aria-hidden="true">{c.emoji}</span>{" "}
                {isAr ? c.labelAr : c.labelEn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <p className="text-[#9FB0C0] text-[19px]">
                {isAr
                  ? "لا توجد منتجات في هذه الفئة حاليًا."
                  : "No products in this category yet."}
              </p>
            ) : (
              filtered.map((p) => (
                <ProductCard key={p.id} product={p} lang={lang} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}