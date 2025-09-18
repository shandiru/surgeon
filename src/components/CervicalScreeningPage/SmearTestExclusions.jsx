// src/components/SmearTestExclusions.jsx
export default function SmearTestExclusions() {
  return (
    <section className="px-6">
      <div
        data-slot="card"
        className="bg-[#ff97b3] text-white flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm"
      >
        {/* Card Header */}
        <div
          data-slot="card-header"
          className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
        >
          <div
            data-slot="card-title"
            className="font-semibold flex items-center gap-2 text-2xl"
          >
            {/* Alert Icon */}
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
            🚫 Who Doesn't Usually Need One?
          </div>
        </div>

        {/* Card Content */}
        <div data-slot="card-content" className="px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Under 25 card */}
            <div
              data-slot="card"
              className="bg-white text-[#333] flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm"
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div className="font-semibold text-lg text-[#ff97b3]">
                  Under 25
                </div>
              </div>
              <div className="px-6 space-y-2">
                <p>• Cervical changes are common and usually harmless</p>
                <p>• Early treatment can affect future fertility</p>
                <p className="text-sm text-[#666]">
                  <strong>Note:</strong> See a doctor if you have unusual bleeding or bleeding after sex
                </p>
              </div>
            </div>

            {/* Over 65 card */}
            <div
              data-slot="card"
              className="bg-white text-[#333] flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm"
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div className="font-semibold text-lg text-[#ff97b3]">
                  Over 65
                </div>
              </div>
              <div className="px-6">
                <p>
                  If you've had 3 normal tests in a row, no further smears are usually needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
