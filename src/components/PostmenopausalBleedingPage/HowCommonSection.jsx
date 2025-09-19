import React from 'react';

export default function HowCommonSection() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B] py-6 shadow-sm max-w-3xl mx-auto">
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl">
            <span role="img" aria-label="warning">⚠️</span>
            How Common Is It?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-[#FEE6EA] rounded-lg">
              <div className="text-3xl font-bold text-[#FF4B8B] mb-2">10%</div>
              <p className="text-sm text-[#6B7280]">
                of postmenopausal women experience bleeding
              </p>
            </div>
            <div className="text-center p-6 bg-[#FFE3EC] rounded-lg">
              <div className="text-3xl font-bold text-[#FF4B8B] mb-2">1 in 10</div>
              <p className="text-sm text-[#6B7280]">
                cases may be linked to cancer
              </p>
            </div>
          </div>

          <p className="text-center mt-4 text-sm text-[#6B7280]">
            Most are diagnosed with non-cancerous conditions, which is why prompt assessment is essential.
          </p>
        </div>
      </div>
    </section>
  );
}
