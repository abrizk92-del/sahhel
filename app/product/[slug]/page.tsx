import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { getCategoryEmoji, getCategoryLabel } from "@/data/categories";
import { buildAmazonUrl } from "@/lib/amazon";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FTCBar } from "@/components/FTCBar";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.nameEn,
    description: product.reviewEn.slice(0, 150),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <SiteHeader lang="en" />
      <FTCBar lang="en" />

      <div className="sticky top-[88px] z-40 bg-[#0B0F14]/95 backdrop-blur-md border-b-2 border-[#33404E]">
        <div className="wrap py-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 min-h-[62px] px-6 bg-[#1D2630] text-white border-2 border-[#4A5B6D] rounded-full text-[19px] font-extrabold no-underline hover:bg-[#26313D] hover:border-[#FFC53D] transition-colors"
          >
            <span className="text-[#FFC53D] text-[22px]" aria-hidden="true">←</span>
            Back to list
          </Link>
        </div>
      </div>

      <main className="wrap py-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:items-start">
          <aside className="bg-[#151B23] border-2 border-[#33404E] rounded-[26px] p-8 text-center lg:sticky lg:top-[180px]">
            <div
              className="grid place-items-center h-[230px] rounded-[20px] bg-gradient-to-br from-[#26313D] to-[#1D2630] border-2 border-[#33404E] text-[110px] mb-6"
              aria-hidden="true"
            >
              {product.emoji}
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 mb-6">
              <span className="bg-[#1D2630] border-2 border-[#33404E] text-[#D3DCE6] text-[16px] font-bold px-4 py-1.5 rounded-full">
                {getCategoryEmoji(product.categoryId)} {getCategoryLabel(product.categoryId, "en")}
              </span>
              <span className="bg-[#1D2630] border-2 border-[#33404E] text-[#D3DCE6] text-[16px] font-bold px-4 py-1.5 rounded-full">
                ✓ Hand-picked
              </span>
            </div>
            <span className="text-[#9FB0C0] text-[17px] font-bold">Approximate price</span>
            <span className="block mt-1.5 text-[38px] font-black text-[#FFC53D]" dir="ltr">
              {product.price}
            </span>
          </aside>

          <div>
            <h1 className="text-[clamp(28px,4.6vw,40px)] font-black leading-tight tracking-tight mb-3.5">
              {product.nameEn}
            </h1>

            <div className="bg-[#151B23] border-2 border-[#33404E] rounded-[24px] p-8 mb-7">
              <h2 className="text-[24px] font-black mb-5 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FFC53D]" aria-hidden="true" />
                Key Daily Benefits
              </h2>
              <ul className="list-none m-0 p-0 grid gap-4">
                {product.benefitsEn.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-[#1D2630] border-2 border-[#33404E] rounded-[14px] px-5 py-4 text-[19.5px] font-semibold"
                  >
                    <span
                      className="flex-none w-[38px] h-[38px] grid place-items-center bg-[#5BE49B] text-[#06251A] rounded-[11px] text-[20px] font-black mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#151B23] border-2 border-[#33404E] rounded-[24px] p-8 mb-7">
              <h2 className="text-[24px] font-black mb-5 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FFC53D]" aria-hidden="true" />
                Why We Picked It
              </h2>
              <div className="bg-[#1D2630] border-2 border-[#33404E] border-l-8 border-l-[#FFC53D] rounded-[14px] px-6 py-5 text-[19.5px] leading-loose text-[#D3DCE6]">
                {product.reviewEn}
                <span className="block mt-4 pt-4 border-t-[1.5px] border-[#33404E] text-[17px] font-bold text-[#9FB0C0]">
                  — The Sahhel editorial team
                </span>
              </div>
            </div>

            <a
              className="btn-amazon"
              href={buildAmazonUrl(product.asin)}
              target="_blank"
              rel="nofollow sponsored noopener"
              aria-label={`Buy ${product.nameEn} on Amazon — opens in a new window`}
            >
              <span className="text-[32px]" aria-hidden="true">🛒</span>
              <span>Buy Now on Amazon</span>
            </a>
            <p className="text-center text-[#9FB0C0] text-[16.5px] mt-4 leading-relaxed">
              The link will open the Amazon product page in a new window.
            </p>

            <div
              role="note"
              className="mt-7 bg-[#3A2E08] border-2 border-[#FFC53D] rounded-[14px] px-5 py-4 text-[16.5px] font-semibold text-[#FFE7A8] leading-relaxed"
            >
              <strong className="text-[#FFC53D]">Disclosure:</strong> We may earn a small commission when you buy through this link,{" "}
              <strong className="text-[#FFC53D]">at no extra cost to you</strong>.
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang="en" />
    </>
  );
}