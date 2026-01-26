"use client";
import React, { useState } from "react";
import { Activity, ChevronDown } from "lucide-react";

const AccordionItem = ({ title, badge, content, imageContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
      <h3>
        <button
          type="button"
          aria-controls="accordion-content"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium outline-none"
        >
          <div className="flex items-center gap-3">
            {badge && (
              <span className="inline-flex items-center justify-center rounded-full bg-light-pink text-primary-pink px-3 py-1 text-xs font-medium">
                {badge}
              </span>
            )}
            <span className="font-semibold text-black">{title}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-primary-pink transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      {isOpen && (
        <div
          id="accordion-content"
          role="region"
          aria-labelledby="accordion-trigger"
          className="px-5 pb-5 text-sm text-[#444] leading-relaxed"
        >
          {content}
          {imageContent && <div className="mt-3">{imageContent}</div>}
        </div>
      )}
    </div>
  );
};

const OvarianCystsCard = () => {
  const functionalCystsContent = (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-[#fff7f9] p-4 rounded-lg shadow-sm">
        <span className="font-bold text-black">Follicle Cysts</span>
        <p className="text-sm text-[#555] mt-1">
          Form when a follicle does not release an egg and keeps growing. Usually disappear within
          1–3 months.
        </p>
      </div>
      <div className="bg-[#fff7f9] p-4 rounded-lg shadow-sm">
        <span className="font-bold text-black">Corpus Luteum Cysts</span>
        <p className="text-sm text-[#555] mt-1">
          Form when the follicle reseals after releasing an egg and fills with fluid. Usually
          resolve in a few weeks.
        </p>
      </div>
    </div>
  );

  const benignCystsContent = (
    <ul className="list-disc pl-5 space-y-2 text-[#555]">
      <li>
        <strong className="text-black">Endometriomas</strong> — caused by endometriosis
      </li>
      <li>
        <strong className="text-black">Dermoid cysts</strong> — formed from cells present from birth
      </li>
      <li>
        <strong className="text-black">Cystadenomas</strong> — fluid-filled and can grow quite large
      </li>
      <li>
        <strong className="text-black">PCOS</strong> — multiple small cysts that can cause hormone
        imbalance and fertility problems
      </li>
    </ul>
  );

  const malignantCystsContent = (
    <div className="bg-[#FFF0F5] p-4 rounded-lg text-black shadow-sm">
      Rare, but more common after menopause. Must be checked by a doctor to rule out ovarian cancer.
    </div>
  );

  return (
    <div className="bg-[#FEE6EA] text-primary-pink flex flex-col gap-6 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="pb-4 border-b border-primary-pink/30">
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <Activity className="w-6 h-6 text-primary-pink" />
          Types of Ovarian Cysts
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        <AccordionItem
          title="Functional Cysts (Harmless)"
          badge="Most Common"
          imageContent={functionalCystsContent}
        />
        <AccordionItem
          title="Other Benign Cysts"
          badge="Benign"
          imageContent={benignCystsContent}
        />
        <AccordionItem
          title="Malignant (Cancerous) Cysts"
          badge="Rare"
          imageContent={malignantCystsContent}
        />
      </div>
    </div>
  );
};

export default OvarianCystsCard;
