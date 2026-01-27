import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionBlock = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y border rounded-xl overflow-hidden" style={{ borderColor: "rgb(255,197,211)" }}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#FFF5F8] transition-colors"
          >
            <span className="font-semibold text-[#BB125B]">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#FF4B8B] transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 text-[#7a2f4f]">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionBlock;
