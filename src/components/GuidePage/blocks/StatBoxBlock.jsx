import React from "react";

const StatBoxBlock = ({ stat, description }) => {
  return (
    <div
      className="rounded-xl border p-6 shadow-md bg-[#FFF5F8] bg-white/70 backdrop-blur-sm max-w-md mx-auto lg:mx-0"
      style={{ borderColor: "rgb(255,197,211)" }}
    >
      <div className="text-4xl font-extrabold mb-2 text-[#FF4B8B]">{stat}</div>
      <p className="text-base text-[#FF4B8B]/90 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StatBoxBlock;
