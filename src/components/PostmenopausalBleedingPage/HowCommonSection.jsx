import React from "react";

export default function HowCommonSection() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-2xl shadow-md py-8 max-w-3xl mx-auto transition hover:shadow-lg">
        {/* Card Header */}
        <div className="px-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary-pink">
            How Common Is It?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#FEE6EA] to-[#fff0f5] shadow-sm">
              <div className="text-4xl font-extrabold text-primary-pink mb-2">10%</div>
              <p className="text-sm text-[#6B7280]">of postmenopausal women experience bleeding</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#FFE3EC] to-[#fff5f8] shadow-sm">
              <div className="text-4xl font-extrabold text-primary-pink mb-2">1 in 10</div>
              <p className="text-sm text-[#6B7280]">cases may be linked to cancer</p>
            </div>
          </div>

          <p className="text-center mt-6 text-base text-[#6B7280] leading-relaxed">
            Most women are diagnosed with{" "}
            <span className="font-semibold text-black">non-cancerous conditions</span>, which is why{" "}
            <span className="font-semibold">prompt assessment</span> is essential.
          </p>
        </div>
      </div>
    </section>
  );
}
