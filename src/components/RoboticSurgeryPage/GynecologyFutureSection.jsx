// src/components/GynecologyFutureSection.jsx
export default function GynecologyFutureSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "#FFC5D3" }}>
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image with Hover/Active */}
          <div className="flex justify-center">
            <img
              src="/gynecology-future.png" // <-- put your image in /public
              alt="Future of gynecologic robotic surgery"
              className="w-full max-w-lg rounded-2xl border-4 border-white shadow-xl 
              transition duration-300 transform
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.6)]
              active:scale-105 active:-translate-y-2 active:shadow-[0_10px_40px_rgba(255,255,255,0.6)]"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left text-[#b03b66] space-y-6">
            <h2 className="text-3xl font-bold">
              The Future of Gynecologic Surgery
            </h2>
            <p className="text-lg text-[#7a2f4f]">
              The da Vinci Surgical System represents a significant advancement in gynecologic surgery,
              offering a safer and more effective alternative to traditional methods in many cases.
            </p>
            <p className="text-lg text-[#7a2f4f]">
              As the technology continues to evolve and become more accessible, robotic surgery is expected
              to play an increasingly central role in women's health care.
            </p>

            {/* Highlight Box */}
            <div className="bg-white p-6 rounded-lg border border-[#f5a9bd] shadow-md transition duration-300 
              hover:shadow-[0_8px_30px_rgba(176,59,102,0.3)]
              active:shadow-[0_8px_30px_rgba(176,59,102,0.3)]">
              <p className="text-xl font-semibold mb-2 text-[#b03b66]">
                Expert Care, Advanced Technology
              </p>
              <p className="text-[#7a2f4f]">
                Gynecologists who specialize in robotic surgery are uniquely positioned to offer their
                patients cutting-edge care with excellent outcomes, especially for complex and delicate procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
