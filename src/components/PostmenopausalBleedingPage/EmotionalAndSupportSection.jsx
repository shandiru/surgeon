import React from 'react';

export default function EmotionalAndSupportSection() {
  return (
    <section className="mb-12 px-4">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Emotional Wellbeing Card */}
        <div className="bg-gradient-to-br from-[#FFF7FA] to-[#FEE6EA] text-black flex flex-col gap-6 rounded-2xl py-8 shadow-md hover:shadow-lg transition">
          <div className="px-8 pb-5 border-b border-[#FFD6E5]">
            <div className="flex items-center gap-3 text-2xl font-bold text-primary-pink">
              
              Emotional Wellbeing
            </div>
          </div>
          <div className="px-8 space-y-3 text-base text-[#4B5563] leading-relaxed">
            <p>• Postmenopausal bleeding can cause worry or fear of cancer</p>
            <p>• Most causes are not serious</p>
            <p>• Getting checked quickly can bring peace of mind and prompt treatment</p>
            <p>• It's okay to bring a friend or ask for a chaperone at your appointment</p>
          </div>
        </div>

        {/* Follow-Up & Support Card */}
        <div className="bg-gradient-to-br from-[#FFF7FA] to-[#FEE6EA] text-black flex flex-col gap-6 rounded-2xl py-8 shadow-md hover:shadow-lg transition">
          <div className="px-8 pb-5 border-b border-[#FFD6E5]">
            <div className="flex items-center gap-3 text-2xl font-bold text-primary-pink">
            
              Follow-Up & Support
            </div>
          </div>
          <div className="px-8 space-y-3 text-base text-[#4B5563] leading-relaxed">
            <p>• Most women get a clear answer within a few weeks</p>
            <p>• If needed, your doctor will create a treatment plan and follow-up schedule</p>
            <p>• You are not alone — support is available every step of the way</p>
          </div>
        </div>
      </div>
    </section>
  );
}
