import React from "react";

export default function PostcoitalBleedingHero() {
  return (
    <section
      className="py-20 px-6 shadow-inner text-center"
      style={{ backgroundColor: "#FEE6EA", color: "#BB125B" }} // ✅ soft pink bg + magenta text
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary-pink">
          Understanding Postcoital Bleeding
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-8 opacity-90 text-[#BB125B]">
          What it is, causes, and when to seek help
        </p>

        {/* CTA Button */}
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-md px-7 h-11 bg-primary-pink text-white shadow-md hover:shadow-lg hover:bg-[#e43d7a] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 7v14" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
          </svg>
          Learn More
        </button>
      </div>
    </section>
  );
}
