// src/components/SmearTestProcedure.jsx
export default function SmearTestProcedure() {
  return (
    <section className="px-6">
      <div
        data-slot="card"
        className="bg-[#ff97b3] text-white flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm"
      >
        {/* Header */}
        <div
          data-slot="card-header"
          className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6"
        >
          <div className="font-semibold flex items-center gap-2 text-2xl">
            {/* Stethoscope Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
            🩺 What Happens During the Test
          </div>
        </div>

        {/* Content */}
        <div data-slot="card-content" className="px-6 space-y-4">
          {/* Highlight Box */}
          <div className="bg-white text-[#333] p-4 rounded-lg">
            <p className="font-semibold text-[#ff97b3] mb-2">Takes just 5 minutes</p>
          </div>

          {/* Steps */}
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-white text-[#ff97b3] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <p>A small speculum gently opens the vagina</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white text-[#ff97b3] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <p>A soft brush collects cells from your cervix</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white text-[#ff97b3] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <p>Your sample is sent to a lab for testing</p>
            </div>
          </div>

          {/* Dual Testing Box */}
          <div className="bg-white text-[#333] p-4 rounded-lg">
            <p className="font-semibold text-[#ff97b3] mb-1">We use Dual Testing:</p>
            <p>Checking for high-risk HPV and abnormal cells (for women over 25)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
