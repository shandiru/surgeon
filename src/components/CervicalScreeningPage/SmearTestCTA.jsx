// src/components/SmearTestCTA.jsx
export default function SmearTestCTA() {
  return (
    <section className="text-center px-4 sm:px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto bg-white flex flex-col gap-6 rounded-2xl border border-light-pink-2/40 py-12 px-6 sm:px-12 shadow-md hover:shadow-xl transition">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-snug text-primary-pink">
            Ready to Book Your Test?
          </h2>
          <p className="text-black text-base sm:text-lg">
            Take the first step towards protecting your health and peace of mind.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center gap-2 font-semibold transition-all h-12 rounded-full text-lg px-8 bg-light-pink-2 text-white hover:bg-primary-pink hover:scale-105 active:scale-95 shadow-md"
          >
            Schedule Your Screening Today
          </button>
        </div>
      </div>
    </section>
  );
}
