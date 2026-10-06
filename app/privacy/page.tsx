import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sahhel handles your data — clear and simple privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader lang="en" />
      <main className="wrap py-16 pb-24 max-w-[820px]">
        <h1 className="text-[clamp(32px,5vw,48px)] font-black mb-6 tracking-tight">
          Privacy Policy
        </h1>

        <div className="text-[19px] leading-[1.9] text-[#D3DCE6] space-y-6">
          <p>
            <strong className="text-white">Last updated:</strong> January 2026
          </p>

          <p>
            Sahhel respects your privacy. This page explains what information
            we collect (very little), how we use it, and your rights regarding
            your data.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            What we collect
          </h2>

          <p>
            Sahhel does <strong className="text-white">not</strong> require you
            to create an account, and we do{" "}
            <strong className="text-white">not</strong> ask for personal
            information such as your name, email, or address to use this site.
          </p>

          <p>
            Like most websites, we automatically collect some basic technical
            data when you visit:
          </p>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Log data:</strong> browser type,
                device type, pages visited, and time spent — collected by our
                analytics provider (Google Analytics).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Cookies:</strong> small text
                files used by our analytics and affiliate partners to track
                referral clicks.
              </span>
            </li>
          </ul>

          <h2 className="text-[26px] font-black text-white pt-4">
            How we use this data
          </h2>

          <p>We use anonymous analytics data to:</p>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>Understand which pages are useful and which are not.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>Improve the site experience over time.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                Track affiliate commissions (so we get credit when you buy
                through our links).
              </span>
            </li>
          </ul>

          <p>
            We <strong className="text-white">never</strong> sell, rent, or
            share your personal data with third parties for marketing
            purposes.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Third-party services
          </h2>

          <p>Our site uses the following third-party services:</p>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Google Analytics</strong> — for
                anonymous traffic statistics.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">
                  Amazon Associates, Noon Affiliate, AliExpress Affiliate
                </strong>{" "}
                — to track product link clicks.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Vercel</strong> — our hosting
                provider.
              </span>
            </li>
          </ul>

          <p>
            Each of these services has its own privacy policy. When you click
            an affiliate link and go to Amazon, Noon, or AliExpress, their
            privacy policies apply to any data you enter on their site.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Your choices
          </h2>

          <p>You can:</p>

          <ul className="list-none space-y-3 ps-0">
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Disable cookies</strong> in your
                browser settings at any time.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Opt out of Google Analytics</strong>{" "}
                using the official browser add-on.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FFC53D] font-black">•</span>
              <span>
                <strong className="text-white">Use a private browser window</strong>{" "}
                if you prefer not to be tracked at all.
              </span>
            </li>
          </ul>

          <h2 className="text-[26px] font-black text-white pt-4">
            Children's privacy
          </h2>

          <p>
            Sahhel is not directed at children under 13. We do not knowingly
            collect data from children.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Changes to this policy
          </h2>

          <p>
            We may update this privacy policy occasionally. When we do, we will
            update the "Last updated" date at the top of this page.
          </p>

          <h2 className="text-[26px] font-black text-white pt-4">
            Contact us
          </h2>

          <p>
            Questions about this privacy policy? Please visit our{" "}
            <Link
              href="/about"
              className="text-[#FFC53D] underline hover:no-underline"
            >
              About page
            </Link>{" "}
            to get in touch.
          </p>
        </div>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}