'use client';

import React from 'react';

export default function OvarianCystSurgery() {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-[#FF4B8B33] py-6 shadow-lg bg-white text-[#BB125B]">
      {/* Card Header */}
      <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6">
        <div className="font-semibold flex items-center gap-3 text-xl text-[#FF4B8B]">
          {/* Activity Icon */}
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
            className="w-6 h-6"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
          Surgery to Remove Ovarian Cysts
        </div>
      </div>

      {/* Card Content */}
      <div className="px-8">
        {/* Description Box */}
        <div className="mb-6 p-4 rounded-lg bg-[#FEE6EA]">
          <p className="font-medium">
            Surgery is only needed if the cyst is large, painful, persistent, or possibly cancerous.
          </p>
        </div>

        {/* Surgery Types Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Laparoscopy */}
          <div className="border border-[#FF4B8B33] rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-[#BB125B]">Laparoscopy</h4>
            <p className="text-sm mb-3">Keyhole surgery using small cuts</p>
            <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-[#FF4B8B1A] text-[#FF4B8B]">
              Often used for smaller, benign cysts
            </span>
          </div>

          {/* Laparotomy */}
          <div className="border border-[#FF4B8B33] rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-[#BB125B]">Laparotomy</h4>
            <p className="text-sm mb-3">Open surgery through a larger cut in the abdomen</p>
            <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-[#FEE6EA] text-[#BB125B]">
              Used for larger or possibly cancerous cysts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
