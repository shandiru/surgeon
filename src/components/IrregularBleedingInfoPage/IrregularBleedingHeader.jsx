// src/components/IrregularBleedingHeader.jsx
export default function IrregularBleedingHeader() {
  return (
    <header className="bg-[#FFC5D3] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 [text-wrap:balance] leading-snug text-[#FF4B8B]">
            Understanding Irregular Vaginal Bleeding
          </h1>
          <p className="text-lg md:text-xl [text-wrap:pretty] text-[#7a2f4f]">
            Know the signs, causes, and treatments for better health awareness
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/irregular-bleeding-illustration.png" // place your image in /public
            alt="Irregular bleeding awareness illustration"
            className="w-64 md:w-80 lg:w-96 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
