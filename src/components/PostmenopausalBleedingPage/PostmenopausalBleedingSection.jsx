import React from "react";

export default function PostmenopausalHealthSection() {
  return (
    <section className="bg-gradient-to-r from-light-pink-1 to-light-pink-2 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-pink">
            Understanding Postmenopausal Bleeding
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mb-8 text-black">
            What it is, causes, and why it's important to get checked
          </p>

          {/* Alert Box */}
          <div
            role="alert"
            className="w-full rounded-xl px-5 py-5 text-sm flex items-start gap-4 bg-white shadow-md text-black"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-pink"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>

            {/* Text */}
            <div className="text-sm leading-relaxed text-black">
              <strong className="text-primary-pink">Important:</strong> Any bleeding after menopause
              should always be checked by a healthcare professional. Early diagnosis saves lives.
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="/postmenopausal-health.png"
            alt="Postmenopausal health illustration"
            className="max-w-sm w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
