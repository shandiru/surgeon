'use client';
import { Lightbulb } from 'lucide-react';
import React from 'react';

const PostcoitalBleedingGuideCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="pb-10">
      <div className='max-w-5xl mx-auto p-6'>
        <div
          className="max-w-6xl mx-auto mb-1 flex flex-col gap-6 rounded-xl bg-white py-6 px-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          style={{ color: '#BB125B' }}
        >
          {/* Header */}
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 border-b pb-6">
            <div className="font-semibold flex items-center gap-2 text-2xl text-[#FF4B8B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF4B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M11 2v2"></path>
                <path d="M5 2v2"></path>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                <circle cx="20" cy="10" r="2"></circle>
              </svg>
              What Is Postcoital Bleeding?
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Postcoital bleeding is bleeding that happens after vaginal sex. It is not part of your period.
            </p>
            <ul className="space-y-2 text-[#6B7280]">
              <li>• The amount of blood can range from light spotting to heavier flow</li>
              <li>• It can happen after penetration by a penis, sex toys, or fingers</li>
              <li>• Around 1 in 10 women experience this at some point — it is common and usually not serious</li>
            </ul>
          </div>
        </div>
        {/* Continue Button */}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setShowCard(2);
            setActiveButton(1);
          }}
          className="inline-flex items-center justify-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 rounded-md text-sm font-medium transition-all h-10 px-4 w-[90%] md:w-[60%] lg:w-[40%] text-white"
        >
          Continue to Next Section
        </button>
      </div>

    </div>
  );
};

export default PostcoitalBleedingGuideCard1;
