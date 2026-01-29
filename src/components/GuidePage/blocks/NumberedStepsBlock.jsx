import React from "react";
import { parseFormattedText } from "../utils/parseFormattedText";

const NumberedStepsBlock = ({ steps }) => {
  return (
    <div className="space-y-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-pink text-white flex items-center justify-center font-bold text-lg shrink-0">
            {i + 1}
          </div>
          <p className="text-lg text-black pt-1">{parseFormattedText(step)}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberedStepsBlock;
