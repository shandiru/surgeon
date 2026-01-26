// src/components/SmearTestPreparation.jsx
export default function SmearTestPreparation() {
  return (
    <section className="py-16 bg-white rounded-xl">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Card */}
          <div
            className="bg-white text-primary-pink rounded-2xl shadow-md p-8
                       transition duration-300 ease-in-out
                       hover:scale-105 hover:-translate-y-2 hover:shadow-xl
                       active:scale-[0.98] active:shadow-lg cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-pink shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Getting Ready</h2>
            </div>

            {/* Tips */}
            <ul className="space-y-4 text-black leading-relaxed">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                Book your test mid-cycle (about a week after your period)
              </li>

              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                Avoid spermicides, lubricants, pessaries or vaginal creams for a few days before
              </li>

              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                Don&apos;t have the test during your period
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div
            className="flex justify-center md:justify-end transition duration-300 ease-in-out 
                       hover:scale-105 active:scale-[0.97] cursor-pointer"
          >
            <img
              src="/smear-test-prep.png" // <-- place generated illustration in /public
              alt="Smear test preparation illustration"
              className="w-full max-w-md rounded-2xl shadow-xl border-4 border-white
                         transition duration-300 transform
                         hover:shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
