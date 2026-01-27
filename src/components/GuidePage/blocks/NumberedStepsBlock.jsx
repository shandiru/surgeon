import React from "react";

const NumberedStepsBlock = ({ steps }) => {
  return (
    <div className="space-y-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FF4B8B] text-white flex items-center justify-center font-bold text-lg shrink-0">
            {i + 1}
          </div>
          <p className="text-lg text-[#7a2f4f] pt-1">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberedStepsBlock;
