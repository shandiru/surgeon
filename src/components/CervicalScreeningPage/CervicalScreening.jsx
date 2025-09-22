// src/pages/CervicalScreening.jsx
export default function CervicalScreening() {
  return (
    <header className="bg-[#FFC5D3] text-white py-20 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="text-center md:text-left space-y-6 px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md [text-wrap:balance]">
              Cervical Screening (Smear Test)
            </h1>
            <p className="text-xl md:text-2xl text-white/90 [text-wrap:pretty]">
              A simple test that could save your life
            </p>

            {/* ✅ Stat Content */}
            <div className="rounded-xl border border-white/40 p-6 shadow-lg bg-white/10 backdrop-blur-sm max-w-md mx-auto md:mx-0">
              <div className="text-5xl font-extrabold mb-3 text-white">83%</div>
              <p className="text-lg text-white/90 leading-relaxed">
                Regular screening can prevent up to 83% of cervical cancer cases
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end px-4 md:px-8">
            <img
              src="/cervical-screening.png" // <-- place your image in /public
              alt="Cervical screening illustration"
              className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
