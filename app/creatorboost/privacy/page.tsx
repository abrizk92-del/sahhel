import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CreatorBoost — Privacy Policy",
  description:
    "Privacy policy for the CreatorBoost Chrome extension — what data we collect and how we use it.",
};

export default function CreatorBoostPrivacyPage() {
  return (
    <main className="wrap py-16 pb-24 max-w-[820px]">
      <h1 className="text-[clamp(32px,5vw,48px)] font-black mb-3 tracking-tight">
        CreatorBoost Privacy Policy
      </h1>
      <p className="text-[#9FB0C0] text-[17px] mb-10">
        <strong className="text-white">Last updated:</strong> January 2026
      </p>

      <div className="text-[19px] leading-[1.9] text-[#D3DCE6] space-y-6">
        <p>
          This Privacy Policy describes how the <strong className="text-white">CreatorBoost</strong>{" "}
          Chrome extension ("the Extension", "we", "us") handles your information.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          1. Summary
        </h2>
        <p>
          CreatorBoost does <strong className="text-white">not</strong> collect, store, or sell
          your personal information. We do not have user accounts, and we do not
          track you across the web. The only data we process is the content of
          the video you explicitly choose to analyze.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          2. What We Collect
        </h2>
        <p>
          When you click <strong className="text-white">"Analyze"</strong> inside the Extension,
          the following information is sent to our servers for processing:
        </p>
        <ul className="list-none space-y-3 ps-0">
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Video URL or ID</strong> — to identify which
              video you are analyzing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Video title and description</strong> — to
              understand the topic.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Video transcript or audio</strong> — only if you
              use the "Live Audio Analysis" feature. The audio is sent to our
              transcription provider and immediately discarded after processing.
            </span>
          </li>
        </ul>

        <h2 className="text-[26px] font-black text-white pt-4">
          3. How We Use This Data
        </h2>
        <p>
          The data above is used only to generate your SEO package (titles,
          description, hashtags, keywords). It is:
        </p>
        <ul className="list-none space-y-3 ps-0">
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>Sent to our API hosted on Vercel.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              Forwarded to <strong className="text-white">Groq Inc.</strong> (our AI provider)
              for language model processing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Not stored</strong> on our servers. Once the
              response is generated, all input data is discarded.
            </span>
          </li>
        </ul>

        <h2 className="text-[26px] font-black text-white pt-4">
          4. What We Do NOT Collect
        </h2>
        <ul className="list-none space-y-3 ps-0">
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>We do not collect your name, email, or any personal identifiers.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>We do not track your browsing history outside of the supported platforms.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>We do not read your private messages, emails, or files.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>We do not sell or share your data with advertisers.</span>
          </li>
        </ul>

        <h2 className="text-[26px] font-black text-white pt-4">
          5. Third-Party Services
        </h2>
        <p>
          We use the following trusted third-party providers to operate the
          Extension:
        </p>
        <ul className="list-none space-y-3 ps-0">
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Vercel</strong> — hosting our API
              (vercel.com/legal/privacy-policy).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#FFC53D] font-black">•</span>
            <span>
              <strong className="text-white">Groq Inc.</strong> — AI processing
              (groq.com/privacy).
            </span>
          </li>
        </ul>

        <h2 className="text-[26px] font-black text-white pt-4">
          6. Data Retention
        </h2>
        <p>
          We retain <strong className="text-white">no data</strong>. Once the AI returns its
          response, all input is deleted from memory. We keep only anonymous,
          aggregated usage counters (number of requests per day) to prevent
          abuse.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          7. Your Rights
        </h2>
        <p>
          Since we do not store any personal data, there is nothing to access,
          modify, or delete. If you have concerns about privacy, you can stop
          using the Extension at any time by disabling or uninstalling it.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          8. Security
        </h2>
        <p>
          All data is transmitted over HTTPS. Our API keys are stored securely
          in environment variables and are never exposed in the Extension code.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          9. Children's Privacy
        </h2>
        <p>
          CreatorBoost is not intended for users under 13. We do not knowingly
          collect any information from children.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy occasionally. Any changes will be
          reflected on this page with an updated "Last updated" date.
        </p>

        <h2 className="text-[26px] font-black text-white pt-4">
          11. Contact
        </h2>
        <p>
          For any privacy-related questions, visit our{" "}
          <Link href="/about" className="text-[#FFC53D] underline hover:no-underline">
            About page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
