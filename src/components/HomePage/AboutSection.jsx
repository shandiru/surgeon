import React, { useState, useRef } from "react";

export default function AboutSectionView() {
  const cards = [
    {
      title: "Clinical Excellence",
      desc: "Providing world-class care with the latest evidence-based treatments and techniques.",
      icon: (
        <>
          <path d="M11 2v2" />
          <path d="M5 2v2" />
          <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
          <path d="M8 15a6 6 0 0 0 12 0v-3" />
          <circle cx="20" cy="10" r="2" />
        </>
      ),
    },
    {
      title: "Compassionate Care",
      desc: "Supporting patients and families through every step of their healthcare journey.",
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
      title: "Research & Innovation",
      desc: "Contributing to medical advancement through research and professional leadership.",
      icon: (
        <>
          <path d="M15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-section text-primary-pink mb-4" data-aos="fade-up">
            About Mr Ketankumar Gajjar
          </h2>
          <p
            className="text-body-large text-black/90 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A leading consultant in gynaecological oncology, dedicated to providing exceptional care
            and advancing women's health through clinical excellence and research.
          </p>
        </div>

        {/* ── Mobile slider ── */}
        <div className="sm:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {cards.map((card, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1">
                  <div className="group bg-white text-gray-900 flex flex-col gap-4 rounded-xl border border-primary-pink shadow-sm text-center p-6 active:scale-95 active:shadow-[0_0_15px_2px_rgba(255,75,139,0.25)] transition-all duration-300">
                    <div className="bg-primary-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary-pink"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h3 className="text-card-title mb-1 text-[#1F2937]">{card.title}</h3>
                    <p className="text-body text-black/90">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators + arrows */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="w-8 h-8 rounded-full border border-primary-pink flex items-center justify-center text-primary-pink hover:bg-light-pink-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? "w-5 h-2.5 bg-primary-pink" : "w-2.5 h-2.5 bg-primary-pink/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="w-8 h-8 rounded-full border border-primary-pink flex items-center justify-center text-primary-pink hover:bg-light-pink-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-primary-pink shadow-sm text-center p-6 transition-all duration-300
                         md:hover:scale-105 md:hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.3)]"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="bg-primary-pink/10 group-hover:bg-primary-pink/20 transition-colors duration-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-card-title mb-2 text-[#1F2937]">{card.title}</h3>
              <p className="text-body text-black/90">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
