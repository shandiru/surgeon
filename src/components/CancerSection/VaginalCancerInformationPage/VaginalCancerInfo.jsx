'use client'

import React from 'react'

export default function VaginalCancerInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vaginal Cancer Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guide covering symptoms, diagnosis, and treatment options for vaginal cancer
          </p>
        </div>

        {/* Symptoms */}
        <div className="bg-white border rounded-xl shadow-lg mb-8">
          <div className="bg-red-50 px-6 py-4 rounded-t-xl">
            <h2 className="text-2xl font-semibold text-red-800 flex items-center gap-2">
              🩺 Symptoms of Vaginal Cancer
            </h2>
          </div>
          <div className="px-6 pt-4 pb-6">
            <p className="text-gray-600 mb-4">Early vaginal cancer often has no symptoms. As it progresses, signs may include:</p>
            <ul className="space-y-2 mb-6">
              {[
                "Unusual vaginal bleeding (after intercourse or after menopause)",
                "Watery vaginal discharge",
                "A lump or mass in the vagina",
                "Painful urination",
                "Frequent urination",
                "Constipation",
                "Pelvic pain"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 text-lg">•</span>{item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-blue-800 font-medium">👉 Routine pelvic exams are important for early detection.</p>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-white border rounded-xl shadow-lg mb-8">
          <div className="bg-blue-50 px-6 py-4 rounded-t-xl">
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              🔬 Diagnosis of Vaginal Cancer
            </h2>
          </div>
          <div className="px-6 pt-4 pb-6">
            <p className="text-gray-600 mb-4">
              Vaginal cancer may be detected during a routine pelvic exam before symptoms appear.
            </p>
            <p className="text-gray-800 font-medium mb-4">Diagnostic steps may include:</p>
            <div className="space-y-3 text-sm">
              {[
                {
                  title: "Pelvic exam",
                  desc: "Inspection of the vagina, cervix, uterus, and ovaries using a speculum and manual examination"
                },
                {
                  title: "Pap test",
                  desc: "Primarily for cervical cancer, but may also reveal vaginal cancer cells"
                },
                {
                  title: "Colposcopy",
                  desc: "Magnified examination of the vaginal tissue using a colposcope"
                },
                {
                  title: "Biopsy",
                  desc: "Removal of a small tissue sample during colposcopy to test for cancer cells"
                }
              ].map((step, i) => (
                <div key={i} className="bg-white border border-blue-200 rounded-md px-4 py-3 shadow-sm">
                  <strong className="text-gray-800">{step.title}</strong>
                  <span className="text-gray-600"> – {step.desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
              <p className="text-green-800 font-medium">👉 These tests help confirm diagnosis and guide treatment planning.</p>
            </div>
          </div>
        </div>

        {/* Treatment */}
        <div className="bg-white border rounded-xl shadow-lg mb-8">
          <div className="bg-purple-50 px-6 py-4 rounded-t-xl">
            <h2 className="text-2xl font-semibold text-purple-800 flex items-center gap-2">
              💊 Treatment of Vaginal Cancer
            </h2>
          </div>
          <div className="px-6 pt-4 pb-6 text-sm text-gray-700">
            <p className="mb-6">Treatment depends on the type, stage, spread, and your overall health.</p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Surgery (Often the Primary Treatment)</h3>
            <div className="space-y-3 mb-4">
              <div className="border border-purple-200 rounded-md px-4 py-3">
                <strong className="text-gray-800">Vaginectomy</strong>
                <span> – Removal of part or all of the vagina; may include nearby lymph nodes. Reconstruction with tissue grafts can restore vaginal function.</span>
              </div>
              <div className="border border-purple-200 rounded-md px-4 py-3">
                <strong className="text-gray-800">Hysterectomy</strong>
                <span> – Removal of the uterus and sometimes ovaries, fallopian tubes, and lymph nodes; often combined with vaginectomy for advanced cases.</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-6 p-3 bg-gray-50 rounded-md">
              After surgery, patients receive enhanced recovery support to aid healing.
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Combination Treatments</h3>
            <p className="mb-3">In some cases, surgery may be combined with:</p>
            <div className="space-y-3">
              <div className="border border-indigo-200 rounded-md px-4 py-3">
                <strong className="text-gray-800">Radiation therapy</strong>
                <span> – Targeted energy to destroy cancer cells</span>
              </div>
              <div className="border border-indigo-200 rounded-md px-4 py-3">
                <strong className="text-gray-800">Chemotherapy</strong>
                <span> – Drugs to kill or slow cancer growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600 text-sm">
            This information is for educational purposes only. Always consult with healthcare professionals for personalized medical advice.
          </p>
        </div>
      </div>
    </div>
  )
}
