export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white bg-gray-900 min-h-screen" dir="ltr">
      <h1 className="text-4xl font-bold mb-4">CreatorBoost Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last updated: January 2026</p>

      <p className="mb-6">This Privacy Policy describes how the CreatorBoost Chrome extension ("the Extension", "we", "us") handles your information.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Summary</h2>
      <p className="mb-6">CreatorBoost does not collect, store, or sell your personal information. We do not have user accounts, and we do not track you across the web. The only data we process is the content of the video you explicitly choose to analyze.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. What We Collect</h2>
      <p className="mb-4">When you click "Analyze" inside the Extension, the following information is sent to our servers for processing:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Video URL or ID — to identify which video you are analyzing.</li>
        <li>Video title and description — to understand the topic.</li>
        <li>Video transcript or audio — only if you use the "Live Audio Analysis" feature. The audio is sent to our transcription provider and immediately discarded after processing.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use This Data</h2>
      <p className="mb-4">The data above is used only to generate your SEO package (titles, description, hashtags, keywords). It is:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Sent to our API hosted on Vercel.</li>
        <li>Forwarded to Groq Inc. (our AI provider) for language model processing.</li>
        <li>Not stored on our servers. Once the response is generated, all input data is discarded.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. What We Do NOT Collect</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>We do not collect your name, email, or any personal identifiers.</li>
        <li>We do not track your browsing history outside of the supported platforms.</li>
        <li>We do not read your private messages, emails, or files.</li>
        <li>We do not sell or share your data with advertisers.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
      <p className="mb-4">We use the following trusted third-party providers to operate the Extension:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Vercel — hosting our API (vercel.com/legal/privacy-policy).</li>
        <li>Groq Inc. — AI processing (groq.com/privacy).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
      <p className="mb-6">We retain no data on our servers. Once the AI returns its response, all input is deleted from memory. We keep only anonymous, aggregated usage counters (number of requests per day) to prevent abuse.</p>
      <p className="mb-6">Additionally, any analyses you choose to save using the "Vault" feature are stored locally on your device (using Chrome's local storage). We do not have access to this data, and you can delete it at any time directly from the extension.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
      <p className="mb-6">Since we do not store any personal data on our servers, there is nothing to access, modify, or delete. If you have concerns about privacy, you can stop using the Extension at any time by disabling or uninstalling it.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Security</h2>
      <p className="mb-6">All data is transmitted over HTTPS. Our API keys are stored securely in environment variables and are never exposed in the Extension code.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
      <p className="mb-6">CreatorBoost is not intended for users under 13. We do not knowingly collect any information from children.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Policy</h2>
      <p className="mb-6">We may update this Privacy Policy occasionally. Any changes will be reflected on this page with an updated "Last updated" date.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact</h2>
      <p className="mb-6">For any privacy-related questions, contact us at: support@creatorboost.com</p>

      <p className="mt-8 text-gray-400 text-sm">This extension complies with the Chrome Web Store User Data Policy, including the Limited Use requirements.</p>
    </div>
  );
}
