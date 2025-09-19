import React from 'react';

export default function EmotionalAndSupportSection() {
  return (
    <section className="mb-12 px-4">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Emotional Wellbeing Card */}
        <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FBCFE8] py-6 shadow-sm">
          <div className="grid items-start gap-1.5 px-6 border-b pb-6">
            <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl text-[#FF4B8B]">
              <span className="text-2xl">💖</span>
              Emotional Wellbeing
            </div>
          </div>
          <div className="px-6 space-y-3 text-sm text-[#4B5563]">
            <p>• Postmenopausal bleeding can cause worry or fear of cancer</p>
            <p>• Most causes are not serious</p>
            <p>• Getting checked quickly can bring peace of mind and prompt treatment</p>
            <p>• It's okay to bring a friend or ask for a chaperone at your appointment</p>
          </div>
        </div>

        {/* Follow-Up & Support Card */}
        <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FBCFE8] py-6 shadow-sm">
          <div className="grid items-start gap-1.5 px-6 border-b pb-6">
            <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl text-[#FF4B8B]">
              <span className="text-2xl">🗨️</span>
              Follow-Up & Support
            </div>
          </div>
          <div className="px-6 space-y-3 text-sm text-[#4B5563]">
            <p>• Most women get a clear answer within a few weeks</p>
            <p>• If needed, your doctor will create a treatment plan and follow-up schedule</p>
            <p>• You are not alone — support is available every step of the way</p>
          </div>
        </div>
      </div>
    </section>
  );
}
