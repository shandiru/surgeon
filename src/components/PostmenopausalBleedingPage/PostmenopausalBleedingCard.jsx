import React from 'react';

export default function PostmenopausalBleedingCard() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-xl border border-[#FF4B8B] py-6 shadow-sm max-w-3xl mx-auto">
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-xl sm:text-2xl">
            <span role="img" aria-label="pin">📌</span>
            What Is Postmenopausal Bleeding?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4 text-left">
          <p className="text-base sm:text-lg leading-relaxed">
            Postmenopausal bleeding is any bleeding from the vagina after menopause.
          </p>

          <div className="bg-[#FEE6EA] p-4 rounded-lg">
            <p className="font-medium mb-2 text-[#FF4B8B]">Key Facts:</p>
            <ul className="space-y-2 text-sm text-[#374151] list-disc list-inside">
              <li>Menopause is confirmed once you have had no period for 12 months</li>
              <li>Any vaginal bleeding after this time is not normal and should always be checked</li>
              <li>Most causes are harmless, but sometimes bleeding can be a sign of cancer or other serious conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
