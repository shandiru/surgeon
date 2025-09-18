import React from 'react';

export default function PostcoitalBleedingHero() {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: '#FF4B8B', color: '#FFFFFF' }} // bg-primary + text-primary-foreground
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Understanding Postcoital Bleeding
        </h1>
        <p className="text-xl mb-8 opacity-90">
          What it is, causes, and when to seek help
        </p>

        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-md px-6 h-10 shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          style={{
            backgroundColor: '#FEB6C5', // bg-secondary
            color: '#1F2937',           // text-secondary-foreground
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
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
