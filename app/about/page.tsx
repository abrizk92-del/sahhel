import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sahhel — an independent guide to accessible products for seniors.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader lang="en" />
      <main className="wrap py-16 pb-24 max-w-[820px]">
        <h1 className="text-[clamp(32px,5vw,48px)] font-black mb-6 tracking-tight">
          About Sahhel
        </h1>

        <div className="text-[19px] leading-[1.9] text-[#D3DCE6] space-y-6">
          <p>
            <strong className="text-white">Sahhel</strong> is an independent
            product guide focused on one simple mission: helping seniors and
            people with limited mobility or vision find everyday products that
            are genuinely easier to use.
          </p>

          <p>
            We are not a store. We do not manufacture, sell, or ship any of the
            products featured on this site. Instead, we research, test, and
            recommend products that solve real problems — big buttons for
            arthritic hands, loud ringers for hearing loss, thick grips for
            weak hands, and clear displays for low vision.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            How we choose products
          </h2>

          <p>Every product on Sahhel goes through the same simple filter:</p>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">1.</span>
              <span>
                <strong className="text-white">Real usefulness.</strong> Does
                it actually make a daily task easier, or is it just a gadget?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">2.</span>
              <span>
                <strong className="text-white">Accessibility first.</strong>{" "}
                Large controls, clear sound, comfortable grip — no small
                buttons, no confusing menus.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">3.</span>
              <span>
                <strong className="text-white">Verified reviews.</strong> We
                look for products with hundreds of genuine buyer reviews and
                strong ratings over time.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">4.</span>
              <span>
                <strong className="text-white">Honest pros and cons.</strong>{" "}
                Every product page lists both what we love and what we don't.
              </span>
            </li>
          </ul>

          <h2 className="text-[26px] font-black text-white pt-4">
            How we make money
          </h2>

          <p>
            Sahhel is reader-supported. When you buy a product through one of
            our links (on Amazon, Noon, AliExpress, or other partner stores),
            we may earn a small commission — at absolutely no extra cost to
            you. This is how we keep the site running and continue testing new
            products.
          </p>

          <p>
            Our recommendations are never influenced by which store pays the
            highest commission. We recommend products because they are the
            best options for our readers — full stop.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Questions or feedback?
          </h2>

          <p>
            We read every message. If you have a suggestion for a product we
            should test, or a correction to something we wrote, please reach
            out — this guide only gets better with your input.
          </p>
        </div>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}