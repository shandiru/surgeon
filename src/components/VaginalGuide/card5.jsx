import { useState } from "react";
import { FaInfoCircle, FaMicroscope } from "react-icons/fa";

const Vaginalcard5 = ({ setShowCard, setActiveButton }) => {
  const primaryPink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <div className="w-full sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6 p-5">

        {/* CARD CONTAINER */}
        <div 
          className="bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
        >

          {/* HEADER */}
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ backgroundColor: deepPink }}
          >
            <FaMicroscope className="text-white h-6 w-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Diagnosis of Vaginal Cancer
            </h2>
          </div>

          {/* DESCRIPTION SECTION */}
          <div className="px-6 pt-4 pb-6">
            <p className="text-[#7a2f4f] mb-4 text-sm sm:text-base">
              Vaginal cancer may be detected during a routine pelvic exam before symptoms appear.
            </p>

            <p className="text-primary-pink font-semibold mb-4 text-sm sm:text-base">
              Diagnostic steps may include:
            </p>

            {/* DIAGNOSTIC STEPS */}
            <div className="space-y-3">
              {[
                {
                  title: "Pelvic exam",
                  desc: "Inspection of the vagina, cervix, uterus, and ovaries using a speculum and manual examination",
                },
                {
                  title: "Pap test",
                  desc: "Primarily for cervical cancer, but may also reveal vaginal cancer cells",
                },
                {
                  title: "Colposcopy",
                  desc: "Magnified examination of the vaginal tissue using a colposcope",
                },
                {
                  title: "Biopsy",
                  desc: "Removal of a small tissue sample during colposcopy to test for cancer cells",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="border rounded-md px-4 py-3 shadow-sm bg-white hover:shadow-md transition"
                  style={{ borderColor: primaryPink }}
                >
                  <strong className="text-primary-pink">{step.title}</strong>
                  <span className="text-[#7a2f4f]"> – {step.desc}</span>
                </div>
              ))}
            </div>

            {/* INFO BOX */}
            <div
              className="mt-6 p-4 rounded-lg flex items-center gap-3 shadow-sm"
              style={{ backgroundColor: primaryPink }}
            >
              <FaInfoCircle className="h-5 w-5 text-black" />
              <p className="font-medium text-black text-sm sm:text-base">
                These tests help confirm diagnosis and guide treatment planning.
              </p>
            </div>
          </div>
          {/* NEXT BUTTON */}
          <div className="pt-2 p-6">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="w-full bg-primary-pink hover:bg-primary-pink/80 text-white rounded-md h-10 px-4 flex items-center justify-center text-sm font-medium transition"
            >
              Learn About Treatment
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Vaginalcard5;
