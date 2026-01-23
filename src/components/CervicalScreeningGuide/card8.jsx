'use client';
import { Star } from 'lucide-react';

const CervicalScreeningGuidecard8 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-14">

      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto 
        mb-10 flex flex-col gap-10 rounded-2xl border py-10 px-8 shadow-sm 
        animate-in slide-in-from-right-5 duration-300 bg-white"
        style={{ borderColor: "#FFC5D3" }}
      >

        {/* FINAL SECTION — NEW CONTENT ONLY */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-snug text-primary-pink">
            Ready to Book Your Test?
          </h2>
          <p className="text-[#7a2f4f] text-base sm:text-lg">
            Take the first step towards protecting your health and peace of mind.
          </p>
        </section>

        {/* BUTTON */}
        <div className="text-center">
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center gap-2 font-semibold 
            transition-all h-12 rounded-full text-lg px-8 bg-[#ff97b3] text-white 
            hover:bg-primary-pink hover:scale-105 active:scale-95 shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Star className="w-5 h-5" />
            Schedule Your Screening Today
          </button>
        </div>

      </div>
    </div>
  );
};

export default CervicalScreeningGuidecard8;
