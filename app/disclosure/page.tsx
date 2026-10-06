import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Sahhel earns money — full transparency about affiliate links and commissions.",
};

export default function DisclosurePage() {
  return (
    <>
      <SiteHeader lang="en" />
      <main className="wrap py-16 pb-24 max-w-[820px]">
        <h1 className="text-[clamp(32px,5vw,48px)] font-black mb-6 tracking-tight">
          Affiliate Disclosure
        </h1>

        <div className="text-[19px] leading-[1.9] text-[#D3DCE6] space-y-6">
          <p>
            <strong className="text-white">Last updated:</strong> January 2026
          </p>

          <p>
            Sahhel is a participant in the Amazon Services LLC Associates
            Program, the Noon Affiliate Program, the AliExpress Affiliate
            Program, and other similar affiliate advertising programs. These
            programs are designed to provide a means for websites to earn
            advertising fees by linking to products on their platforms.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            What this means for you
          </h2>

          <p>
            When you click on a link on Sahhel and buy a product from one of
            our partner stores (Amazon, Noon, AliExpress, Walmart, and others),
            we may earn a small commission. This comes out of the store's
            marketing budget —{" "}
            <strong className="text-white">
              it does not add any cost to your purchase
            </strong>
            .
          </p>

          <p>
            The price you pay is exactly the same as if you had found the
            product yourself.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Our commitment to honest recommendations
          </h2>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                We <strong className="text-white">never</strong> rank a product
                higher because it pays a larger commission.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                We list <strong className="text-white">multiple stores</strong>{" "}
                on every product page so you can compare prices and choose the
                best deal for you.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                We include{" "}
                <strong className="text-white">honest pros and cons</strong> —
                including reasons you might <em>not</em> want to buy a product
                we recommend.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                If we ever receive a product for free to test, we will{" "}
                <strong className="text-white">
                  clearly state it on that product page
                </strong>
                .
              </span>
            </li>
          </ul>

          <h2 className="text-[26px] font-black text-white pt-4">
            FTC compliance
          </h2>

          <p>
            In accordance with the Federal Trade Commission's 16 CFR Part 255
            guidelines on "Guides Concerning the Use of Endorsements and
            Testimonials in Advertising," we disclose that material connections
            exist between Sahhel and the merchants whose products are
            featured. This disclosure is intended to be clear, conspicuous,
            and placed near the links themselves.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Questions?
          </h2>

          <p>
            If anything in this disclosure is unclear, or if you want to know
            more about how we make money, please visit our{" "}
            <Link
              href="/about"
              className="text-[#FFC53D] underline hover:no-underline"
            >
              About page
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}