import React from "react";
import { FaPills } from "react-icons/fa";

const Vaginalcard6 = ({ setShowCard, setActiveButton }) => {
  const primaryPink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white  rounded-xl shadow-md mb-10 transition duration-300 hover:shadow-lg hover:-translate-y-1 w-full">
          <div
            className="px-4 sm:px-6 py-4 flex items-center gap-2 rounded-t-xl"
            style={{ backgroundColor: deepPink }}
          >
            <FaPills className="text-white h-6 w-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Treatment of Vaginal Cancer
            </h2>
          </div>

          <div className="px-4 sm:px-6 pt-4 text-[#7a2f4f] text-sm sm:text-base leading-relaxed">
            <p className="mb-6">
              Treatment depends on the type, stage, spread, and your overall health.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-primary-pink mb-3">
              1. Surgery (Often the Primary Treatment)
            </h3>

            <div className="space-y-3 mb-4">
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Vaginectomy</strong>
                <span>
                  {" "}
                  – Removal of part or all of the vagina; may include nearby lymph nodes.
                  Reconstruction can restore vaginal function.
                </span>
              </div>

              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Hysterectomy</strong>
                <span> – Removal of the uterus and sometimes ovaries, tubes, and lymph nodes.</span>
              </div>
            </div>

            <div className="p-3 rounded-md shadow-sm mb-6" style={{ backgroundColor: primaryPink }}>
              <p className="text-white text-sm sm:text-base">
                After surgery, patients receive enhanced recovery support to aid healing.
              </p>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-primary-pink mb-3">
              2. Combination Treatments
            </h3>
            <p className="mb-3">In some cases, surgery may be combined with:</p>

            <div className="space-y-3">
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Radiation therapy</strong>
                <span> – Targeted energy to destroy cancer cells.</span>
              </div>

              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Chemotherapy</strong>
                <span> – Drugs to kill or slow cancer growth.</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <button
              onClick={() => {
                setShowCard(7);
                setActiveButton(6);
              }}
              className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 gap-2 rounded-md text-sm sm:text-base font-medium transition h-10 w-full px-4"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaginalcard6;
