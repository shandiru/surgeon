'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { LuScissors, LuZap, LuShield } from "react-icons/lu";

export default function CervicalCancerTreatment() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <section className="py-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative bg-[#fff5f8] text-[#4b1e30] rounded-xl shadow-sm px-6 py-8 mt-4 overflow-hidden border border-[#f5c2d2]">

          {/* Left Border Decoration */}
          <div className="absolute top-0 left-0 h-full w-[6px] bg-[#b03b66] rounded-bl-2xl"></div>

          {/* Header */}
          <div data-aos="fade-left">
            <div className="flex items-center gap-2 text-xl font-semibold text-[#b03b66] mb-4">
              <LuScissors className="w-6 h-6 text-[#b03b66]" />
              How is Cervical Cancer Treated?
            </div>
          </div>

          {/* “We Consider” Section */}
          <div className="mt-8" data-aos="fade-up">
            <div className="bg-white p-4 rounded-lg border border-[#f5c2d2] transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]">
              <h3 className="font-semibold mb-2 text-[#4b1e30]">We consider:</h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-[#7a2f4f ]">
                {[
                  "Type and stage of cancer",
                  "Size and location of cancer cells",
                  "Whether the cancer has spread",
                  "Your overall health and personal needs",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 ">
                    <div className="w-1.5 h-1.5 bg-[#b03b66] rounded-full"></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium mt-3 text-[#b03b66]">
                Our goal is to treat the cancer while tailoring care to you.
              </p>
            </div>
          </div>

          {/* Surgery Section */}
          <div className="mt-10" data-aos="fade-up">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-[#b03b66]">
              <LuScissors className="w-5 h-5 text-[#b03b66]" />
              1. Surgery (Often the First Step)
            </h3>
            <div className="grid gap-4">
              {[
                {
                  title: "Cryosurgery",
                  desc: "freezing tissue to kill cancer cells",
                },
                {
                  title: "Cone biopsy (conization)",
                  desc: "removing a cone-shaped section of cervical tissue",
                },
                {
                  title: "LEEP (Loop Electrosurgical Excision Procedure)",
                  desc: "removing cancerous tissue with a thin wire loop carrying electrical current",
                },
                {
                  title: "Hysterectomy",
                  desc: "removing the uterus and cervix; may include nearby tissue and lymph nodes. Minimally invasive and robotic techniques are often used.",
                },
                {
                  title: "Total pelvic exenteration",
                  desc: "a rare, radical procedure for advanced cancer; involves removing reproductive organs. Reconstruction options available to help patients continue full lives.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-[#f5c2d2] transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]"
                >
                  <div className="w-2 h-2 bg-[#b03b66] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#b03b66]">{item.title}</h4>
                    <p className="text-sm text-[#7a2f4f] mt-1">– {item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combination Treatments */}
          <div className="mt-10" data-aos="fade-up">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-[#b03b66]">
              <LuZap className="w-5 h-5 text-[#b03b66]" />
              2. Combination Treatments
            </h3>
            <p className="text-[#7a2f4f] mb-4">
              In some cases, surgery may be combined with:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Radiation therapy",
                  desc: "high-energy rays to destroy cancer cells",
                },
                {
                  title: "Chemotherapy",
                  desc: "drugs to kill or stop the growth of cancer cells",
                },
                {
                  title: "Targeted or immunotherapy",
                  desc: "in specific cases, to boost effectiveness",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-[#f5c2d2] transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]"
                >
                  <div className="w-2 h-2 bg-[#b03b66] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#b03b66]">{item.title}</h4>
                    <p className="text-sm text-[#7a2f4f] mt-1">– {item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery and Support */}
          <div className="mt-10" data-aos="fade-up">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-[#b03b66]">
              <LuShield className="w-5 h-5 text-[#b03b66]" />
              3. Recovery & Support
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-[#f5c2d2] transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]">
                <h4 className="font-medium text-[#b03b66] mb-2">
                  Enhanced Recovery Programs
                </h4>
                <p className="text-sm text-[#7a2f4f]">
                  Enhanced recovery after surgery programs help you heal faster.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#f5c2d2] transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd]">
                <h4 className="font-medium text-[#b03b66] mb-2">
                  Multi-specialty Approach
                </h4>
                <p className="text-sm text-[#7a2f4f]">
                  Our oncologists collaborate with surgeons and specialists across
                  different fields to create a comprehensive care plan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
