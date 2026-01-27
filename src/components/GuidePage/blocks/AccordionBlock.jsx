import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionBlock = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y border rounded-xl overflow-hidden border-light-pink-2">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors cursor-pointer"
          >
            <span className="font-semibold text-black">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-black transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && <div className="px-6 pb-4 text-black">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default AccordionBlock;
