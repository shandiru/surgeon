import React from 'react';

export default function PostmenopausalHealthSection() {
  return (
    <section className="bg-[#FEE6EA] py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Understanding Postmenopausal Bleeding
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-[#6B7280]">
          What it is, causes, and why it's important to get checked
        </p>

        {/* Alert Box - Mobile responsive */}
        <div
          role="alert"
          className="w-full rounded-lg px-4 py-4 text-sm flex flex-col md:flex-row items-start md:items-center gap-3 max-w-2xl mx-auto bg-[#FFE3EC] border border-[#FF4B8B] text-[#1F2937]"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4B8B]"
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
          <div className="text-left text-sm text-[#6B7280]">
            <strong>Important:</strong> Any bleeding after menopause should always be checked by a healthcare
            professional. Early diagnosis saves lives.
          </div>
        </div>
      </div>
    </section>
  );
}
