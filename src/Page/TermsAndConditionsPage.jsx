import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "Use of Our Website",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The content on this website is for general information only. You must
        not use this site for unlawful purposes or in any way that may damage
        our reputation or impair its availability.
      </p>
    ),
  },
  {
    number: "2",
    title: "Accuracy of Information",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We make reasonable efforts to keep information on this website up to
        date, but we do not guarantee accuracy, completeness, or reliability.
        Any reliance on website content is at your own risk. For clinical
        details, appointment queries, or professional advice, please contact us
        directly.
      </p>
    ),
  },
  {
    number: "3",
    title: "Intellectual Property",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          All content on this website (including text, images, graphics, and
          logos) is owned by or licensed to Mr Ketankumar Gajjar. You may view,
          download, and print content for personal use only.
        </p>
        <p className="text-gray-600 leading-relaxed">
          You must not copy, reproduce, or distribute our website content
          without prior written consent.
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Links to Other Websites",
    content: (
      <p className="text-gray-600 leading-relaxed">
        This site may include links to external websites for convenience. We are
        not responsible for the content or practices of third-party websites.
      </p>
    ),
  },
  {
    number: "5",
    title: "Liability",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We are not liable for any loss or damage arising from use of this
        website, except where required by law. Nothing in these terms excludes
        or limits liability for death or personal injury caused by negligence.
      </p>
    ),
  },
  {
    number: "6",
    title: "Privacy & Data Protection",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Our use of your personal data is explained in our{" "}
        <Link
          to="/privacy-policy"
          className="text-primary-pink underline hover:text-primary-pink/80"
        >
          Privacy Policy
        </Link>
        , which forms part of these terms.
      </p>
    ),
  },
  {
    number: "7",
    title: "Changes to These Terms",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may update these terms from time to time. Please check this page
        periodically for the latest version.
      </p>
    ),
  },
  {
    number: "8",
    title: "Governing Law",
    content: (
      <p className="text-gray-600 leading-relaxed">
        These terms are governed by the laws of England and Wales. Any disputes
        will be subject to the exclusive jurisdiction of the courts of England
        and Wales.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-light-pink-1 py-16 md:py-20 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block border border-primary-pink text-primary-pink text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            Legal
          </span>
          <h1 className="text-hero text-gray-900 mb-3">
            Terms of <span className="text-primary-pink">Use</span>
          </h1>
          <p className="text-body-small text-gray-500 mt-2">
            Last updated: 03/09/26
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-6">
        {sections.map(({ number, title, content }) => (
          <section
            key={number}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-primary-pink text-white text-sm font-bold flex items-center justify-center shrink-0">
                {number}
              </span>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {title}
              </h2>
            </div>
            <div className="pl-11">{content}</div>
          </section>
        ))}

        {/* Back link */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary-pink hover:underline font-medium"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
