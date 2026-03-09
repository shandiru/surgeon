import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-gray-600 mb-4 leading-relaxed">
          When you complete a form on our website or contact us directly, we may
          collect:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Full name",
            "Email address",
            "Phone number",
            "Address (if relevant to the service)",
            "Details of your enquiry or project",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          We may also collect limited technical data automatically when you
          visit our website, such as your IP address and browser type.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Lawful Basis for Processing",
    content: (
      <>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We only process your personal data where we have a lawful basis to do
          so. This includes:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Contract",
              desc: "to provide a quote, arrange services, or fulfill an agreement with you",
            },
            {
              label: "Consent",
              desc: "when you give us permission to contact you for specific purposes",
            },
            {
              label: "Legitimate interests",
              desc: "to respond to inquiries and manage our business effectively",
            },
            {
              label: "Legal obligation",
              desc: "where we must comply with the law",
            },
          ].map(({ label, desc }) => (
            <li
              key={label}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2 shrink-0" />
              <span>
                <strong className="text-gray-800">{label}</strong> – {desc}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "3",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We use your personal data to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Respond to inquiries and provide quotes",
            "Communicate with you about your project",
            "Maintain business records and comply with legal requirements",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          We do not sell or trade your personal details to third parties.
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Sharing Your Information",
    content: (
      <>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We may share your personal data only with:
        </p>
        <ul className="space-y-2">
          {[
            "Trusted service providers (such as IT and hosting providers) who help us operate our business",
            "Professional advisers (such as accountants or insurers)",
            "Regulatory bodies or law enforcement, if required by law",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "5",
    title: "Cookies & Website Tracking",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Our website may use cookies or similar technologies to improve user
        experience and monitor website performance. You can set your browser to
        refuse cookies if you prefer.
      </p>
    ),
  },
  {
    number: "6",
    title: "Data Security",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We take appropriate measures to keep your personal information secure
        and prevent unauthorised access, disclosure, alteration, or destruction.
      </p>
    ),
  },
  {
    number: "7",
    title: "How Long We Keep Your Information",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We keep your personal data only for as long as necessary to fulfil the
        purposes for which it was collected, including legal, accounting, or
        reporting requirements.
      </p>
    ),
  },
  {
    number: "8",
    title: "Your Rights",
    content: (
      <>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Under UK GDPR, you have the right to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Access the personal data we hold about you",
            "Request correction of any inaccurate information",
            "Request deletion of your data (where legally permissible)",
            "Restrict or object to how we use your data",
            "Withdraw consent (where consent is the basis for processing)",
            "Data portability (to receive your data in a usable format)",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          To exercise your rights, please contact us using the details below.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-primary-pink">Policy</span>
          </h1>
          <p className="text-body-small text-gray-500 mt-2">
            Last updated: 03/09/26
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Numbered sections */}
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

        {/* Section 9 — Contact */}
        <section className="bg-primary-pink rounded-2xl p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-white text-primary-pink text-sm font-bold flex items-center justify-center shrink-0">
              9
            </span>
            <h2 className="text-lg md:text-xl font-semibold">Contact Us</h2>
          </div>
          <div className="pl-11 space-y-3">
            <p className="text-white/90 leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please contact us
            </p>

            <p className="text-white/80 text-sm leading-relaxed pt-2">
              If you are not satisfied with our response, you have the right to
              lodge a complaint with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white font-medium"
              >
                Information Commissioner's Office (ICO)
              </a>
              .
            </p>
          </div>
        </section>

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
