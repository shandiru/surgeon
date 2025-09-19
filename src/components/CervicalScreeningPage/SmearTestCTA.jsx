// src/components/SmearTestCTA.jsx
export default function SmearTestCTA() {
  return (
    <section className="text-center px-4 sm:px-6">
      <div className="bg-[#ff97b3] text-white flex flex-col gap-4 sm:gap-6 rounded-xl border border-[#ff97b3] py-5 sm:py-6 shadow-sm">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-snug">
            Ready to Book Your Test?
          </h2>
          <p className="mb-5 sm:mb-6 text-white/90 text-sm sm:text-base">
            Take the first step towards protecting your health
          </p>

          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium transition-all h-12 rounded-md text-base sm:text-lg px-6 sm:px-8 bg-white text-[#ff97b3] hover:bg-white/90 shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            Schedule Your Screening Today
          </button>
        </div>
      </div>
    </section>
  );
}
