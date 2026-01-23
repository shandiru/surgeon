'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStethoscope, FaMicroscope, FaPills, FaInfoCircle } from "react-icons/fa";

export default function VaginalCancerInfo() {
  const primaryPink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4 text-primary-pink">Vaginal Cancer Information</h1>
          <p className="text-lg text-[#7a2f4f] max-w-2xl mx-auto">
            Comprehensive guide covering symptoms, diagnosis, and treatment options for vaginal cancer
          </p>
        </div>

        {/* Symptoms */}
        <div
          className="bg-white rounded-xl shadow-md mb-10 transition duration-300 hover:shadow-lg hover:-translate-y-2"
          data-aos="fade-up"
        >
          <div className="px-6 py-4 rounded-t-xl flex items-center gap-2" style={{ backgroundColor: deepPink }}>
            <FaStethoscope className="text-white h-6 w-6" />
            <h2 className="text-2xl font-semibold text-white">Symptoms of Vaginal Cancer</h2>
          </div>
          <div className="px-6 pt-4 pb-6 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-[#7a2f4f] mb-4">
                Early vaginal cancer often has no symptoms. As it progresses, signs may include:
              </p>
              <ul className="space-y-2 mb-6 text-sm text-[#7a2f4f]">
                {[
                  "Unusual vaginal bleeding (after intercourse or after menopause)",
                  "Watery vaginal discharge",
                  "A lump or mass in the vagina",
                  "Painful urination",
                  "Frequent urination",
                  "Constipation",
                  "Pelvic pain",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: deepPink }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/vaginal.png"
                alt="Vaginal Cancer Awareness"
                className="w-full max-w-xs rounded-xl shadow-md"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div
            className="m-6 p-4 rounded-lg flex items-center gap-2 shadow-sm"
            style={{ backgroundColor: primaryPink }}
          >
            <FaInfoCircle className="h-5 w-5 text-white" />
            <p className="font-medium text-white">
              Routine pelvic exams are important for early detection.
            </p>
          </div>
        </div>

        {/* Diagnosis */}
        <div
          className="bg-white rounded-xl shadow-md mb-10 transition duration-300 hover:shadow-lg hover:-translate-y-2"
          data-aos="fade-up"
        >
          <div className="px-6 py-4 flex items-center gap-2 rounded-t-xl" style={{ backgroundColor: deepPink }}>
            <FaMicroscope className="text-white h-6 w-6" />
            <h2 className="text-2xl font-semibold text-white">Diagnosis of Vaginal Cancer</h2>
          </div>
          <div className="px-6 pt-4 pb-6">
            <p className="text-[#7a2f4f] mb-4">
              Vaginal cancer may be detected during a routine pelvic exam before symptoms appear.
            </p>
            <p className="text-primary-pink font-semibold mb-4">Diagnostic steps may include:</p>
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
                  className="border rounded-md px-4 py-3 shadow-sm bg-white transition duration-300 hover:shadow-md"
                  style={{ borderColor: primaryPink }}
                  data-aos="fade-left"
                >
                  <strong className="text-primary-pink">{step.title}</strong>
                  <span className="text-[#7a2f4f]"> – {step.desc}</span>
                </div>
              ))}
            </div>
            <div
              className="mt-6 p-4 rounded-lg flex items-center gap-2 shadow-sm"
              style={{ backgroundColor: primaryPink }}
            >
              <FaInfoCircle className="h-5 w-5 text-white" />
              <p className="font-medium text-white">
                These tests help confirm diagnosis and guide treatment planning.
              </p>
            </div>
          </div>
        </div>

        {/* Treatment */}
        <div
          className="bg-white rounded-xl shadow-md mb-10 transition duration-300 hover:shadow-lg hover:-translate-y-2"
          data-aos="fade-up"
        >
          <div className="px-6 py-4 flex items-center gap-2 rounded-t-xl" style={{ backgroundColor: deepPink }}>
            <FaPills className="text-white h-6 w-6" />
            <h2 className="text-2xl font-semibold text-white">Treatment of Vaginal Cancer</h2>
          </div>
          <div className="px-6 pt-4 pb-6 text-sm text-[#7a2f4f]">
            <p className="mb-6">
              Treatment depends on the type, stage, spread, and your overall health.
            </p>

            <h3 className="text-lg font-semibold text-primary-pink mb-3">
              1. Surgery (Often the Primary Treatment)
            </h3>
            <div className="space-y-3 mb-4">
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white transition duration-300 hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Vaginectomy</strong>
                <span> – Removal of part or all of the vagina; may include nearby lymph nodes. Reconstruction with tissue grafts can restore vaginal function.</span>
              </div>
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white transition duration-300 hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Hysterectomy</strong>
                <span> – Removal of the uterus and sometimes ovaries, fallopian tubes, and lymph nodes; often combined with vaginectomy for advanced cases.</span>
              </div>
            </div>

            <div
              className="p-3 rounded-md shadow-sm mb-6"
              style={{ backgroundColor: primaryPink }}
            >
              <p className="text-white text-sm">
                After surgery, patients receive enhanced recovery support to aid healing.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-primary-pink mb-3">
              2. Combination Treatments
            </h3>
            <p className="mb-3">In some cases, surgery may be combined with:</p>
            <div className="space-y-3">
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white transition duration-300 hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Radiation therapy</strong>
                <span> – Targeted energy to destroy cancer cells</span>
              </div>
              <div
                className="border rounded-md px-4 py-3 shadow-sm bg-white transition duration-300 hover:shadow-md"
                style={{ borderColor: primaryPink }}
              >
                <strong className="text-primary-pink">Chemotherapy</strong>
                <span> – Drugs to kill or slow cancer growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="p-6 rounded-lg text-center shadow-md"
          style={{ backgroundColor: deepPink }}
          data-aos="fade-up"
        >
          <p className="text-sm text-white">
            This information is for educational purposes only. Always consult with healthcare professionals for personalized medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
