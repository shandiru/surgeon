// src/components/SmearTestExclusions.jsx
export default function SmearTestExclusions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Wrapper */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff97b3] shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#b03b66]">
              Who Doesn&apos;t Usually Need One?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Under 25 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm 
                            transition duration-300 hover:shadow-[0_8px_30px_rgba(255,151,179,0.35)] 
                            hover:border-[#ff97b3] hover:-translate-y-2 active:scale-[0.98]">
              <h3 className="text-xl font-semibold text-[#b03b66] mb-4">
                Under 25
              </h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• Cervical changes are common and usually harmless</li>
                <li>• Early treatment can affect future fertility</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                <strong className="text-[#ff97b3]">Note:</strong> See a doctor if you have unusual bleeding or bleeding after sex
              </p>
            </div>

            {/* Over 65 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm 
                            transition duration-300 hover:shadow-[0_8px_30px_rgba(255,151,179,0.35)] 
                            hover:border-[#ff97b3] hover:-translate-y-2 active:scale-[0.98]">
              <h3 className="text-xl font-semibold text-[#b03b66] mb-4">
                Over 65
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you&apos;ve had 3 normal tests in a row, no further smears are usually needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
