"use client";

import { Pin, Check } from "lucide-react";

export default function WhatAreFibroidsCard() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="px-8 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <Pin className="h-8 w-8" style={{ color: deepPink }} />
            <h2 className="font-bold text-3xl" style={{ color: deepPink }}>
              What Are Fibroids?
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          <p className="text-lg leading-relaxed text-black">
            Fibroids are benign (non-cancerous) growths that develop in the walls of the womb
            (uterus).
          </p>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-black">• Made of muscle and fibrous tissue</p>
              <p className="text-black">• Can be single or multiple</p>
            </div>
            <div className="space-y-2">
              <p className="text-black">• Can vary greatly in size</p>
              <p className="text-black">• Common and treatable</p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="rounded-lg p-5" style={{ backgroundColor: pink }}>
            <p className="font-semibold text-base flex items-center gap-2" style={{ color: deepPink }}>
              <Check className="h-5 w-5" /> Fibroids are not cancer and rarely become cancerous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
