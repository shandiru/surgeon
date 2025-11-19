'use client';
import { useState, useEffect } from "react";
import { FaExclamation } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';

const EndometrialCard4 = ({ setShowCard, setActiveButton }) => {
 
  const Pink = '#FF4B8B';

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="space-y-6 px-3">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-8" data-aos="fade-left">
          <FaExclamation className="h-8 w-8" style={{ color: Pink }} />
          <h2 className="text-3xl font-bold text-center" style={{ color: Pink }}>
            Symptoms of Endometrial Cancer
          </h2>
        </div>

        {/* Card */}
        <div
          className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 shadow-sm mb-6 
                     transition-all duration-300 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
          data-aos="fade-up"
        >
          {/* Card Header */}
          <div className="px-6">
            <div className="font-semibold text-xl mb-1" style={{ color: Pink }}>
              Early Warning Signs
            </div>
            <div className="text-sm text-gray-600">
              Endometrial cancer often shows early warning signs. The most common is abnormal vaginal bleeding.
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                [
                  'Unusual bleeding or spotting between periods or after menopause',
                  'Long, heavy, or frequent bleeding (especially in women over 40)',
                  'Thin white or clear vaginal discharge (postmenopausal women)',
                  'Lower abdominal or pelvic pain'
                ],
                [
                  'A lump or mass in the lower abdomen',
                  'Difficulty or pain while urinating',
                  'Pain during sexual intercourse',
                  'Unexplained weight loss'
                ]
              ].map((column, colIndex) => (
                <div key={colIndex} className="space-y-3" data-aos="fade-left">
                  {column.map((symptom, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-white mt-1"
                        style={{ backgroundColor: Pink }}
                      >
                        <FaExclamation />
                      </span>
                      <p>{symptom}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div
            className="mt-6 p-4 rounded-lg mx-6 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            style={{ backgroundColor: Pink, border: `1px solid ${Pink}` }}
            data-aos="fade-up"
          >
            <p className="text-sm font-medium text-white text-center" >
              <strong>Important:</strong> If you experience any of these symptoms, it's important to seek medical evaluation.
            </p>
          </div>
        {/* NEXT BUTTON */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              setShowCard(5);
              setActiveButton(4);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Continue to Next Step
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default EndometrialCard4;
