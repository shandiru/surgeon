'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { LuMicroscope } from 'react-icons/lu';

export default function CervicalCancerDiagnosis() {
  const methods = [
    {
      title: "Repeat Pap smear or liquid-based cytology",
      description: "to confirm abnormal cells",
    },
    {
      title: "Biopsy",
      description:
        "a small tissue sample is removed and examined under a microscope",
    },
    {
      title: "Colposcopy",
      description:
        "the cervix is examined with a lighted magnifying instrument; a biopsy may also be done",
    },
    {
      title: "Endo-cervical curettage",
      description:
        "tissue is taken from the cervical canal with a spoon-shaped tool, then checked for abnormalities",
    },
    {
      title: "Cone biopsy",
      description:
        "a larger tissue sample is removed to confirm diagnosis or as an early treatment to remove precancerous/cancerous cells",
    },
  ];

  const imagingTests = ["X-rays", "CT scans", "MRIs"];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <section className="py-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[#fff5f8] text-[#4b1e30] flex flex-col gap-6 rounded-xl border border-[#f5a9bd] border-l-4 border-l-[#FF4B8B] shadow-sm py-6">
          
          {/* Header */}
          <div className="px-6 grid gap-1.5" data-aos="fade-left">
            <div className="flex items-center gap-2 text-xl font-semibold text-[#FF4B8B]">
              <LuMicroscope className="w-6 h-6" />
              How is Cervical Cancer Diagnosed?
            </div>
            <p className="text-[#7a2f4f]">
              If a Pap test shows abnormal results, your doctor may recommend further tests.
            </p>
          </div>

          {/* Common Diagnostic Methods */}
          <div className="px-6 space-y-6" data-aos="fade-up">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#4b1e30]">
                Common Diagnostic Methods
              </h3>
              <div className="grid gap-4">
                {methods.map((method, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-white border border-[#f5c2d2] rounded-lg transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]"
                    data-aos="fade-left"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFC5D3] text-[#FF4B8B] text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#4b1e30]">{method.title}</h4>
                      <p className="text-sm text-[#7a2f4f] mt-1">
                        – {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-[#f5c2d2]" />

            {/* Additional Imaging Tests */}
            <div data-aos="fade-up">
              <h3 className="font-semibold text-lg mb-4 text-[#4b1e30]">
                Additional Imaging Tests
              </h3>
              <p className="text-[#7a2f4f] mb-4">
                If doctors suspect the cancer has spread, additional imaging tests may be ordered:
              </p>
              <div className="flex flex-wrap gap-2">
                {imagingTests.map((test, idx) => (
                  <span
                    key={idx}
                    className="text-sm border border-[#f5a9bd] bg-[#FFC5D3] text-[#4b1e30] px-3 py-1 rounded-md font-medium"
                  >
                    {test}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
