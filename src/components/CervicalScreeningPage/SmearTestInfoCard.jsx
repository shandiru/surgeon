// src/components/SmearTestInfoCard.jsx
export default function SmearTestInfoCard() {
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
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            🧍‍♀️ Who Needs a Smear Test?
          </div>
        </div>

        {/* Card Content */}
        <div data-slot="card-content" className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {/* Badge */}
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white text-[#ff97b3] px-2 py-0.5 font-medium w-fit text-sm"
              >
                Recommended
              </span>

              {/* List */}
              <ul className="space-y-2">
                {/* Item 1 */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Women aged 25–64
                </li>

                {/* Item 2 */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Every 3–5 years
                </li>

                {/* Item 3 */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
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
        </div>
      </div>
    </section>
  );
}
