import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-[#f9d2db]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          {/* Heart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e91e63" // 🎨 Pink (Primary)
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>

          {/* Title + Subtitle */}
          <div>
            <h1 className="text-3xl font-bold text-[#333] leading-snug">
              Understanding Menstrual Disorders
            </h1>
            <p className="text-[#777] mt-1">
              What they are, causes & treatment options
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
