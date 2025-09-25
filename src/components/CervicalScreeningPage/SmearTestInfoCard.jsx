// src/components/SmearTestInfoCard.jsx
export default function SmearTestInfoCard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Card */}
          <div
            data-slot="card"
            className="bg-white text-[#FF4B8B] flex flex-col gap-6 rounded-xl py-8 px-6 shadow-md 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(176,59,102,0.25)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_10px_30px_rgba(176,59,102,0.25)]"
          >
            {/* Card Header */}
            <div
              data-slot="card-header"
              className="flex items-center gap-3 text-2xl font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-[#ff97b3]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Who Needs a Smear Test?
            </div>

            {/* Card Content */}
            <div className="space-y-6">
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md bg-[#ff97b3] text-white px-3 py-1 font-medium text-sm w-fit"
              >
                Recommended
              </span>

              <ul className="space-y-4 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#ff97b3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Women aged 25–64
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#ff97b3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="12 6 12 12 16 14" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Every 3–5 years
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#ff97b3]"
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
                  Quick, simple, and painless — done right here at our clinic
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/smear-test-info.png"
              alt="Smear test illustration"
              className="w-full max-w-md rounded-2xl shadow-xl
                transition duration-300 transform
                hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,75,139,0.5)]
                active:scale-105 active:-translate-y-2 active:shadow-[0_10px_30px_rgba(255,75,139,0.5)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
