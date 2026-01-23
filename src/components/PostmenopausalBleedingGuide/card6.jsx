"use client";
import React, { useState } from "react";

const PostmenopausalBleedingGuideCard6 = ({ setShowCard, setActiveButton }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-10">
      <div className="max-w-4xl mx-auto px-6 animate-in slide-in-from-right-5 duration-300">

        {/* MAIN WRAPPER */}
        <div
          className="bg-white flex flex-col gap-6 rounded-2xl shadow-lg py-8 px-6 hover:shadow-xl transition border"
          style={{ borderColor: "rgb(255,197,211)" }}
        >
          {/* HEADER */}
          <div className="pb-6 border-b border-[#FEE6EA] px-2">
            <div className="font-bold flex items-center gap-3 text-2xl text-primary-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FF4B8B"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M11 2v2"></path>
                <path d="M5 2v2"></path>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                <circle cx="20" cy="10" r="2"></circle>
              </svg>
              How It’s Diagnosed
            </div>

            <p className="mt-2 text-sm text-[#6B7280]">
              These tests are usually quick and done as outpatient procedures.
            </p>
          </div>

          {/* DROPDOWNS */}
          <div className="space-y-1">
            {/* ITEM 1 */}
            <div className="border-b border-[#FEE6EA]">
              <button
                onClick={() => toggle(0)}
                className="flex w-full items-center justify-between py-4 text-left 
                           text-base font-medium text-[#374151]"
              >
                Medical History and Pelvic Exam
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-5 w-5 text-[#6B7280] transition-transform duration-300 ${
                    openIndex === 0 ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-sm text-[#4B5563]">
                  Your doctor may ask about your medical history and perform a pelvic exam
                  to assess abnormalities.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="border-b border-[#FEE6EA]">
              <button
                onClick={() => toggle(1)}
                className="flex w-full items-center justify-between py-4 text-left 
                           text-base font-medium text-[#374151]"
              >
                Cervical Smear Test
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-5 w-5 text-[#6B7280] transition-transform duration-300 ${
                    openIndex === 1 ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-sm text-[#4B5563]">
                  If you're due for a cervical smear test, your doctor may perform this
                  to check for cervical abnormalities.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="border-b border-[#FEE6EA]">
              <button
                onClick={() => toggle(2)}
                className="flex w-full items-center justify-between py-4 text-left 
                           text-base font-medium text-[#374151]"
              >
                Transvaginal Ultrasound
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-5 w-5 text-[#6B7280] transition-transform duration-300 ${
                    openIndex === 2 ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-sm text-[#4B5563]">
                  Uses a small probe to view the ovaries, uterus and cervix. This helps
                  assess the thickness of the womb lining and identify abnormalities.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="border-b border-[#FEE6EA]">
              <button
                onClick={() => toggle(3)}
                className="flex w-full items-center justify-between py-4 text-left 
                           text-base font-medium text-[#374151]"
              >
                Hysteroscopy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`h-5 w-5 text-[#6B7280] transition-transform duration-300 ${
                    openIndex === 3 ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 3 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-sm text-[#4B5563]">
                  A thin camera is inserted through the cervix to view the womb lining.
                  This allows direct visualisation and tissue sampling if needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              setShowCard(7);
              setActiveButton(6);
            }}
            className="bg-primary-pink hover:bg-primary-pink/80 text-white 
                       w-[90%] md:w-[60%] lg:w-[40%] h-10 rounded-md 
                       text-sm font-medium transition px-4 shadow"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostmenopausalBleedingGuideCard6;
