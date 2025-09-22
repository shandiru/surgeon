// src/components/SmearTestReminder.jsx
export default function SmearTestReminder() {
  return (
    <section className="py-16 px-6 bg-[#FFF5F8] rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 rounded-2xl border border-[#ff97b3] py-10 px-8 shadow-lg bg-gradient-to-r from-[#ff97b3] to-[#ffb3c9] text-white">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-extrabold text-3xl mb-2"> Remember</h2>
          <p className="text-lg text-white/90">
            Smear tests are simple steps that protect your future.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Quick */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md transition hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#ff97b3] mb-3 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="font-semibold text-lg">Quick</p>
          </div>

          {/* Simple */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md transition hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#ff97b3] mb-3 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <p className="font-semibold text-lg">Simple</p>
          </div>

          {/* Life-saving */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md transition hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#ff97b3] mb-3 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
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
            </div>
            <p className="font-semibold text-lg">Life-saving</p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="text-center">
          <p className="text-2xl font-bold drop-shadow-md">
            Don&apos;t miss your screening — it could save your life.
          </p>
        </div>
      </div>
    </section>
  );
}
