import React from 'react';

export default function PostmenopausalBleedingCard() {
  return (
    <section className="mb-12 px-4">
      <div className="bg-white text-[#1F2937] flex flex-col gap-6 rounded-2xl shadow-md py-8 max-w-3xl mx-auto transition hover:shadow-lg">
        {/* Card Header */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-[#BB125B]">
             What Is Postmenopausal Bleeding?
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-[#374151]">
            Postmenopausal bleeding is any bleeding from the vagina after menopause.
          </p>

          {/* Highlight Box */}
          <div className="bg-[#FEE6EA] p-5 rounded-xl shadow-sm">
            <p className="font-semibold mb-3 text-[#FF4B8B] text-lg">Key Facts:</p>
            <ul className="space-y-2 text-sm sm:text-base text-[#374151] list-disc list-inside">
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
