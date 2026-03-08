import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote } from "lucide-react";

const REVIEWS = [
  {
    text: "Warm and welcoming atmosphere made to feel at ease straight away.",
    date: "05 Mar 2026",
    rating: 5.0,
  },
  {
    text: "Very pleasant and reassuring experience.",
    date: "13 Jan 2026",
    rating: 5.0,
  },
  {
    text: "Excellent from start to finish.",
    date: "16 Dec 2025",
    rating: 5.0,
  },
  {
    text: "My experience with Mr Gajjar was the best. I had multiple appointments to try and solve the issue and we decided on a laparoscopy. Before, during and after the laparoscopy Mr Gajjar was brilliant and explained everything well. He listened to all of my issues and helped me very well.",
    date: "20 Nov 2025",
    rating: 5.0,
  },
  {
    text: "Women's health is not taken seriously in this world but it's comforting to have people like Mr Gajjar fighting your corner.",
    date: "19 Nov 2025",
    rating: 5.0,
  },
  {
    text: "I had a Robotic Hysterectomy performed by Mr Gajjar and I am extremely happy with the outcome. After being ill for some time I now have my life back. He was understanding, professional and reassuring throughout. I was nervous about the surgery but I couldn't have been in better hands. Liz his nurse was brilliant as well — I have been very well looked after and I couldn't recommend Mr Gajjar highly enough.",
    date: "03 Oct 2025",
    rating: 4.7,
  },
  {
    text: "Great experience and results from surgery could not have been better. I feel better now (6 weeks post op) than I have done for years previously.",
    date: "30 Sep 2025",
    rating: 5.0,
  },
  {
    text: "I have had an excellent experience with Mr Gajjar. From my first consultation I felt listened to and Mr Gajjar really took the time to understand my concerns. He is very knowledgeable and took the time to explain everything in detail. I knew I would be in safe hands during the surgery which went very smoothly and I had amazing aftercare. I can't thank him enough for providing me with answers I have tried for many years to find out. I would highly recommend to anyone looking for a very professional, caring, skilled and knowledgeable gynaecology consultant.",
    date: "17 Sep 2025",
    rating: 5.0,
  },
  {
    text: "As soon as I walked in to the room Mr Gajjar instantly made me feel at ease. He listened and was very sympathetic to my issue. He advised me on what could be done and explained everything clearly. He's resolved my issue and I'm so much better. Out of all the gynaecologists I've seen in my lifetime he's by far the best.",
    date: "27 Aug 2025",
    rating: 5.0,
  },
  {
    text: "After many years of being passed around and ignored, tested, probed and scanned — to no avail. I felt finally listened to and reassured when meeting Mr Gajjar for the first time. He knew I had been through enough already and decided to finally take action. He advised me beautifully of my options and what possible outcomes could be. He went above and beyond whilst I was under his care and he has changed my life immeasurably. The best doctor I have ever encountered by far — very highly recommended.",
    date: "30 Jul 2025",
    rating: 5.0,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <Star
            key={i}
            size={15}
            className={
              filled || partial
                ? "text-primary-pink fill-primary-pink group-hover:text-white group-hover:fill-white transition-colors duration-300"
                : "text-gray-200 fill-gray-200 group-hover:text-white/30 group-hover:fill-white/30 transition-colors duration-300"
            }
          />
        );
      })}
      <span className="ml-1.5 text-xs font-semibold text-gray-500 group-hover:text-white/80 transition-colors duration-300">{rating.toFixed(1)}</span>
    </div>
  );
}

const CLAMP_THRESHOLD = 125; // characters before showing "Read more"

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > CLAMP_THRESHOLD;

  return (
    <div className="group bg-white rounded-2xl p-6 flex flex-col shadow-sm hover:bg-primary-pink transition-all duration-300">
      {/* Quote icon */}
      <Quote size={28} className="text-primary-pink/20 group-hover:text-white/30 mb-3 flex-shrink-0 transition-colors duration-300" />

      {/* Review text */}
      <p className={`text-gray-700 group-hover:text-white text-sm leading-relaxed transition-colors duration-300 ${!expanded && isLong ? "line-clamp-5" : ""}`}>
        {review.text}
      </p>

      {/* Read more / less */}
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 self-start text-xs font-semibold text-primary-pink group-hover:text-white/90 underline underline-offset-2 transition-colors duration-300"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-gray-100 group-hover:border-white/20 flex items-center justify-between gap-2 transition-colors duration-300">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white/80 font-medium transition-colors duration-300">
          <BadgeCheck size={14} className="text-primary-pink group-hover:text-white transition-colors duration-300" />
          Verified Patient
        </div>
        <span className="text-xs text-gray-400 group-hover:text-white/70 transition-colors duration-300">{review.date}</span>
      </div>
      <div className="mt-2">
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
}

const CARDS_PER_VIEW = {
  lg: 3,
  sm: 2,
  xs: 1,
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = REVIEWS.length - perView;

  const prev = useCallback(() =>
    setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() =>
    setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section className="bg-[#FFF1F5] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm text-primary-pink font-semibold mb-2 uppercase tracking-wide">
            Patient Testimonials
          </p>
          <h2 className="text-section text-gray-900 mb-4">
            What Our Patients <span className="text-primary-pink">Say</span>
          </h2>
          <p className="text-body text-gray-500 max-w-xl mx-auto mb-6">
            Real experiences from verified patients, sourced directly from Doctify.
          </p>

          {/* Doctify badge */}
          <a
            href="https://www.doctify.com/uk/specialist/mr-ketan-gajjar#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-primary-pink hover:shadow-md transition-all duration-200 group"
          >
            <div className="text-left">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-primary-pink fill-primary-pink" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">{avgRating}</span>
                <span className="text-xs text-gray-400">/ 5.0</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                {REVIEWS.length} verified reviews on{" "}
                <span className="font-semibold text-primary-pink group-hover:underline">Doctify</span>
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-primary-pink transition-colors" />
          </a>
        </div>

        {/* Slider */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          {/* Cards viewport */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current * (100 / perView)}% - ${current * (20 / perView)}px))` }}
            >
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / perView}% - ${(20 * (perView - 1)) / perView}px)` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-primary-pink hover:text-primary-pink transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-primary-pink hover:text-primary-pink transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-primary-pink"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary-pink/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Doctify CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.doctify.com/uk/specialist/mr-ketan-gajjar#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-pink hover:underline"
          >
            Read all reviews on Doctify
            <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
