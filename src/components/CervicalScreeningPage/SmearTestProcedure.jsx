// src/components/SmearTestProcedure.jsx
export default function SmearTestProcedure() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div
          data-slot="card"
          className="bg-white text-primary-pink flex flex-col gap-8 rounded-2xl p-8 shadow-md border border-gray-200
                     transition duration-300 hover:shadow-[0_10px_30px_rgba(255,197,211,0.45)] hover:-translate-y-2 
                     active:scale-[0.98]"
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-pint shadow-md">
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
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              What Happens During the Test
            </h2>
          </div>

          {/* Highlight Box */}
          <div className="bg-[#FFF5F8] border border-gray-200 text-primary-pink p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-[#ff97b3] mb-1">
              Takes just 5 minutes
            </p>
            <p className="text-black text-sm">
              The entire procedure is quick and straightforward
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {[
              "A small speculum gently opens the vagina",
              "A soft brush collects cells from your cervix",
              "Your sample is sent to a lab for testing",
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary-pint text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                  {index + 1}
                </div>
                <p className="text-black">{step}</p>
              </div>
            ))}
          </div>

          {/* Dual Testing Box */}
          <div className="bg-[#FFF5F8] border border-gray-200 text-primary-pink p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-[#ff97b3] mb-1">
              We use Dual Testing:
            </p>
            <p className="text-black text-sm">
              Checking for high-risk HPV and abnormal cells (for women over 25)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
