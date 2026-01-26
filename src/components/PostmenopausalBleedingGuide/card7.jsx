"use client";
import React from "react";

const PostmenopausalBleedingGuideCard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-10 pb-10">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto animate-in slide-in-from-right-5 duration-300">
        {/* ====================================================
            ALERT SECTION — When to Seek Urgent Help
        ===================================================== */}
        <div
          role="alert"
          className="relative w-full rounded-2xl bg-gradient-to-r 
                     from-[#FEE6EA] to-[#FFF0F5] px-6 py-6 text-sm 
                     shadow-md hover:shadow-lg transition max-w-4xl mx-auto border"
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6 text-primary-pink"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>

            <h3 className="font-bold text-primary-pink text-lg sm:text-xl flex items-center gap-2">
              When to Seek Urgent Help
            </h3>
          </div>

          <div className="space-y-3 text-sm text-[#374151] leading-relaxed">
            <p className="text-[#4B5563]">
              <strong>Don’t wait and see —</strong> it’s important to get checked straight away if
              you experience:
            </p>

            <ul className="space-y-2 list-disc pl-5">
              <li>Any vaginal bleeding after menopause</li>
              <li>Heavy bleeding or clots</li>
              <li>Bleeding with pelvic pain, fever, or foul-smelling discharge</li>
              <li>Unexplained weight loss, tiredness, or loss of appetite</li>
            </ul>
          </div>
        </div>

        {/* ===================== NEXT BUTTON ===================== */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => {
              setShowCard(8);
              setActiveButton(7);
            }}
            className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard7;
