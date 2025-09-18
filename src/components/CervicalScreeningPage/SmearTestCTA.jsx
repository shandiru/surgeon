// src/components/SmearTestCTA.jsx
export default function SmearTestCTA() {
  return (
    <section className="text-center px-6">
      <div className="bg-[#ff97b3] text-white flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm">
        <div className="px-6 pt-6">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Test?</h2>
          <p className="mb-6 text-white/90">
            Take the first step towards protecting your health
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 font-medium transition-all h-10 rounded-md text-lg px-8 bg-white text-[#ff97b3] hover:bg-white/90 shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            Schedule Your Screening Today
          </button>
        </div>
      </div>
    </section>
  );
}
