import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-[#f9d2db] shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Left Content */}
          <div className="flex items-center gap-3 text-center md:text-left">
            {/* Heart Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fff0f6] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e91e63"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>

            {/* Title + Subtitle */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-pink leading-snug">
                Understanding Menstrual Disorders
              </h1>
              <p className="text-primary-pink mt-1 text-sm md:text-base">
                What they are, causes & treatment options
              </p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-shrink-0">
            <img
              src="/menstrual-disorders-illustration.png"
              alt="Menstrual health illustration"
              className="w-40 md:w-52 lg:w-64 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
