import React from 'react';

export default function PostcoitalBleedingCards() {
  const cards = [
    {
      title: 'Common Condition',
      text: 'Around 1 in 10 women experience postcoital bleeding at some point',
      icon: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
    },
    {
      title: 'Usually Painless',
      text: 'Most cases are painless and not serious',
      icon: (
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      ),
    },
    {
      title: 'Treatable',
      text: 'Most causes are harmless and easily treated',
      icon: (
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      ),
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 rounded-xl border py-6 px-6 bg-white text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                borderColor: '#FEE6EA',
                color: '#1F2937',
              }}
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#FF4B8B] mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {card.icon}
              </svg>

              {/* Title */}
              <div className="font-semibold text-lg text-[#FF4B8B]">
                {card.title}
              </div>

              {/* Text */}
              <p className="text-sm text-[#6B7280]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
