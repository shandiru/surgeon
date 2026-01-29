// src/pages/CervicalScreening.jsx
export default function CervicalScreening() {
  return (
    <header className="bg-[#FFE6EA] text-primary-pink py-20 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left space-y-6 px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-sm [text-wrap:balance]">
              Cervical Screening (Smear Test)
            </h1>
            <p className="text-xl md:text-2xl text-primary-pink/80 [text-wrap:pretty]">
              A simple test that could save your life
            </p>

            {/* ✅ Stat Content */}
            <div className="rounded-xl border border-[#FF4B8B]/20 p-6 shadow-md bg-white/60 backdrop-blur-sm max-w-md mx-auto md:mx-0">
              <div className="text-5xl font-extrabold mb-3 text-primary-pink">83%</div>
              <p className="text-lg text-primary-pink/90 leading-relaxed">
                Regular screening can prevent up to 83% of cervical cancer cases
              </p>
            </div>
          </div>

          {/* Right Image with hover/active glow */}
          <div className="flex justify-center md:justify-end px-4 md:px-8">
            <img
              src="/cervical-screening.png" // <-- place your image in /public
              alt="Cervical screening illustration"
              className="w-full max-w-lg rounded-2xl shadow-xl 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,75,139,0.5)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_10px_40px_rgba(255,75,139,0.5)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
