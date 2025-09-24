import React from 'react';

const EndometriosisHeroSection = () => {
  const pink = '#FFC5D3';
  const deepPink = '#b03b66';

  return (
    <section className="py-16" style={{ backgroundColor: pink }}>
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <span
          data-slot="badge"
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
          style={{ backgroundColor: 'white', color: deepPink, border: `1px solid ${deepPink}` }}
        >
          Medical Information Guide
        </span>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-balance mb-6"
          style={{ color: deepPink }}
        >
          Understanding Endometriosis
        </h1>

        {/* Subtext */}
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#7a2f4f' }}>
          A comprehensive guide to symptoms, diagnosis & treatment options for endometriosis
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Learn About Symptoms */}
          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 transition-all shadow-sm"
            style={{ backgroundColor: deepPink, color: 'white' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
            Learn About Symptoms
          </button>

          {/* Get Support */}
          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 transition-all shadow-sm border"
            style={{ borderColor: deepPink, color: deepPink, backgroundColor: 'white' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19.85 19.5 19.5 0 0 1 5.19 13.85 19.79 19.79 0 0 1 2.12 5.19 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Get Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default EndometriosisHeroSection;
