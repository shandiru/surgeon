// src/components/IrregularBleedingInfoPage/IrregularBleedingContent.jsx
import React from "react";
import { Info, CircleCheckBig, TriangleAlert } from "lucide-react";

const IrregularBleedingContent = ({ activeTab }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
      {activeTab === "Overview" && (
        <div className="space-y-6 px-4 md:px-6">
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-light-pink-2/30 py-6 shadow-md hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4 border-b border-light-pink-2/20">
              <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink text-lg">
                <Info className="w-5 h-5 text-primary-pink" />
                What Is Irregular Bleeding?
              </div>
            </div>

            {/* Content */}
            <div className="px-6 space-y-4 text-[#444]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Typical Period */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-light-pink-2">A typical period:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CircleCheckBig className="w-4 h-4 text-light-pink-2" />
                      Occurs every 28 days
                    </li>
                    <li className="flex items-center gap-2">
                      <CircleCheckBig className="w-4 h-4 text-light-pink-2" />
                      Lasts 5–7 days
                    </li>
                  </ul>
                </div>

                {/* Irregular Bleeding */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-light-pink-2">Irregular bleeding includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="w-4 h-4 text-light-pink-2" />
                      Periods that come more or less often than usual
                    </li>
                    <li className="flex items-center gap-2">
                      <TriangleAlert className="w-4 h-4 text-light-pink-2" />
                      Spotting between periods
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Causes" && (
        <div
          data-slot="card"
          className="bg-[#FFF1F5] text-[#4B0D26] flex flex-col gap-6 rounded-xl py-8 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Header */}
          <div
            data-slot="card-header"
            className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pb-6 border-b border-[#FFB3C9]/40"
          >
            <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              Common Causes
            </div>
            <p className="text-sm text-[#804659]">
              Irregular vaginal bleeding can be linked to several conditions. In most cases, the
              cause is not serious, but it's important to get checked.
            </p>
          </div>

          {/* Content */}
          <div data-slot="card-content" className="px-6">
            <div className="grid gap-4">
              {[
                { label: "common", title: "Fibroids", desc: "Non-cancerous growths in the uterus" },
                {
                  label: "common",
                  title: "Endometriosis",
                  desc: "Tissue similar to uterine lining grows outside uterus",
                },
                {
                  label: "common",
                  title: "PCOS",
                  desc: "Polycystic Ovary Syndrome affects hormone levels",
                },
                {
                  label: "common",
                  title: "Hormonal imbalances",
                  desc: "Changes in estrogen and progesterone levels",
                },
                {
                  label: "normal",
                  title: "Puberty or menopause",
                  desc: "Natural life stage transitions",
                },
                {
                  label: "normal",
                  title: "Pregnancy",
                  desc: "Early pregnancy can cause irregular bleeding",
                },
                {
                  label: "lifestyle",
                  title: "Excessive exercise",
                  desc: "Intense physical activity can affect cycles",
                },
                {
                  label: "serious",
                  title: "PID",
                  desc: "Pelvic inflammatory disease requires treatment",
                },
                {
                  label: "serious",
                  title: "Tumours or growths",
                  desc: "Abnormal growths need medical evaluation",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Label Badge */}
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-primary-pink bg-[#FFE0EB] w-fit whitespace-nowrap shrink-0">
                    {item.label}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary-pink">{item.title}</h4>
                    <p className="text-sm text-[#804659] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "When to Seek Help" && (
        <div
          data-slot="card"
          className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Header */}
          <div
            data-slot="card-header"
            className="grid auto-rows-min items-start gap-2 border-b border-light-pink-2/30 pb-4"
          >
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 2v2" />
                <path d="M5 2v2" />
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                <path d="M8 15a6 6 0 0 0 12 0v-3" />
                <circle cx="20" cy="10" r="2" />
              </svg>
              When to Seek Medical Advice
            </div>
            <p className="text-sm sm:text-base text-[#666]">
              Early assessment can rule out serious problems and help you get the right care.
            </p>
          </div>

          {/* Content */}
          <div data-slot="card-content" className="grid gap-4">
            {[
              "Bleeding between periods or after sex",
              "Periods that are much heavier or longer than usual",
              "Sudden changes to your cycle",
              "Any bleeding after menopause",
            ].map((text, idx) => (
              <div
                key={idx}
                role="alert"
                className="flex items-start gap-3 p-4 rounded-lg bg-[#fff7f9] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-light-pink-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <p className="text-sm sm:text-base text-[#444] font-medium">{text}</p>
              </div>
            ))}

            {/* Help Box */}
            <div className="mt-2 p-4 bg-[#fff7f9] rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-light-pink-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h4 className="font-semibold text-light-pink-2 text-sm sm:text-base">
                  Need immediate help?
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#555]">
                Contact your healthcare provider or call your local emergency number if you
                experience severe bleeding or pain.
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "What to Track" && (
        <div
          data-slot="card"
          className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Header */}
          <div
            data-slot="card-header"
            className="grid auto-rows-min items-start gap-2 border-b border-light-pink-2/30 pb-4"
          >
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              What to Track Before Your Appointment
            </div>
            <p className="text-sm sm:text-base text-[#666]">
              Bringing a few notes can really help your doctor understand your situation better.
            </p>
          </div>

          {/* Content */}
          <div data-slot="card-content" className="grid gap-4">
            {[
              {
                icon: <path d="M8 2v4M16 2v4M3 10h18" />,
                title: "Dates and length of your periods",
                desc: "Keep a record of when periods start and end",
              },
              {
                icon: (
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                ),
                title: "How heavy the bleeding is",
                desc: "Note if bleeding is light, normal, or heavy",
              },
              {
                icon: (
                  <>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 1 1.73-3" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </>
                ),
                title: "Any pain or other symptoms",
                desc: "Document cramping, pain, or unusual symptoms",
              },
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                ),
                title: "Changes in lifestyle",
                desc: "Track stress, exercise, weight changes, medications",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#fff7f9] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-light-pink-2/10 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-light-pink-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-light-pink-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "Your Appointment" && (
        <div
          data-slot="card"
          className="bg-white text-black flex flex-col gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Header */}
          <div
            data-slot="card-header"
            className="grid auto-rows-min items-start gap-2 border-b border-light-pink-2/30 pb-4"
          >
            <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-test-tube w-5 h-5 text-primary-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
                <path d="M8.5 2h7" />
                <path d="M14.5 16h-5" />
              </svg>
              What to Expect at Your Appointment
            </div>
            <p className="text-sm sm:text-base text-[#666]">
              These tests help find the cause so you can get the most suitable treatment.
            </p>
          </div>

          {/* Accordion Content */}
          <div data-slot="card-content" className="space-y-3">
            {[
              {
                title: "Pelvic Examination",
                desc: "A physical examination to check for any abnormalities in your reproductive organs. This is a routine procedure that helps identify potential causes of irregular bleeding.",
              },
              {
                title: "Ultrasound Scan",
                desc: "A non-invasive imaging test that uses sound waves to create pictures of your internal organs. This can help identify fibroids, cysts, or other structural issues.",
              },
              {
                title: "Blood Tests",
                desc: "Laboratory tests to check hormone levels, blood count, and other markers that might indicate the cause of irregular bleeding.",
              },
              {
                title: "Cervical Smear (if due)",
                desc: "A screening test to check for abnormal cells on the cervix. This is typically done as part of routine preventive care.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#fff7f9] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <summary className="flex justify-between items-center py-4 px-4 cursor-pointer text-sm sm:text-base font-medium text-primary-pink hover:bg-white/60 rounded-lg">
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-chevron-down w-4 h-4 text-primary-pink transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-xs sm:text-sm text-[#555]">{item.desc}</div>
              </details>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Treatment" && (
        <div className="space-y-6">
          {/* Treatment Options Card */}
          <div
            data-slot="card"
            className="bg-white text-[#804659] flex flex-col gap-4 sm:gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Header */}
            <div
              data-slot="card-header"
              className="grid auto-rows-min items-start gap-2 border-b border-light-pink-2/30 pb-4"
            >
              <div className="leading-snug font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-pink flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                  <path d="m8.5 8.5 7 7" />
                </svg>
                Treatment Options
              </div>
              <p className="text-sm sm:text-base text-[#666]">
                Treatment depends on what's causing the bleeding. We'll talk through every option
                with you so you can make an informed choice.
              </p>
            </div>

            {/* Content */}
            <div data-slot="card-content">
              <div className="grid gap-3 sm:gap-4">
                {[
                  {
                    title: "Infections",
                    desc: "Treated with medication",
                  },
                  {
                    title: "Growths or tumours",
                    desc: "May be removed surgically",
                  },
                  {
                    title: "Hormonal changes",
                    desc: "Managed with hormone therapy or birth control",
                  },
                  {
                    title: "Some cases",
                    desc: "No treatment needed – issue settles on its own",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#fff7f9] shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="p-2 rounded-full bg-primary-pink/10 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-primary-pink"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-pink text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#555] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Remember Card */}
          <div
            data-slot="card"
            className="text-[#804659] flex flex-col gap-4 sm:gap-6 rounded-xl py-6 px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300 bg-[#fff7f9]"
          >
            <div
              data-slot="card-header"
              className="font-semibold flex items-center gap-2 text-primary-pink text-lg sm:text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-heart w-5 h-5 text-primary-pink"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              Remember
            </div>

            <div data-slot="card-content" className="space-y-3 text-sm sm:text-base">
              {[
                "Irregular bleeding is common",
                "It's important to find the cause early",
                "We're here to support and guide you every step of the way",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#555]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary-pink flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs sm:text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default IrregularBleedingContent;
