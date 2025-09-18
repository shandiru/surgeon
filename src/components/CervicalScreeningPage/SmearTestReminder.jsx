// src/components/SmearTestReminder.jsx
export default function SmearTestReminder() {
  return (
    <section className="px-6">
      <div className="flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm bg-[#ff97b3] text-white">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="font-semibold text-2xl text-center">💖 Remember</div>
        </div>

        {/* Content */}
        <div className="px-6">
          <div className="text-center space-y-6">
            <p className="text-lg">Smear tests are:</p>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              {/* Quick */}
              <div className="space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <p className="font-semibold">Quick</p>
              </div>

              {/* Simple */}
              <div className="space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="font-semibold">Simple</p>
              </div>

              {/* Life-saving */}
              <div className="space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto"
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
                <p className="font-semibold">Life-saving</p>
              </div>
            </div>

            <p className="text-xl font-semibold">
              Don&apos;t miss your screening — it could save your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
