import React from "react";

const HeroSectionView = () => {
  return (
    <section className="relative py-16 pb-24 md:py-20 md:pb-20 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/hero-banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay to keep content readable */}
      <div className="absolute inset-0 bg-[#FDE7EB]/80 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Section */}
          <div className="hero-left" data-aos="fade-up">
            <div className="mb-4 hero-badge" data-aos="fade-down">
              <span className="inline-block border border-primary-pink text-primary-pink text-caption px-3 py-1 rounded-full">
                Gynaecologist
              </span>
            </div>

            <h1
              className="hero-title text-hero text-gray-900 mb-6 leading-tight"
              data-aos="fade-up"
            >
              Expert Care in{" "}
              <span className="text-primary-pink">Women's Health</span>
            </h1>

            <p
              className="hero-desc text-body-large text-black mb-8 leading-relaxed"
              data-aos="fade-up"
            >
              With 26 years of dedicated experience in gynaecology, including
              over 16 years specialising in gynaecological oncology, providing
              compassionate, evidence-based care for women across Nottingham and
              beyond.
            </p>

            <div
              className="hero-ctas flex flex-col sm:flex-row gap-4 mb-8"
              data-aos="fade-up"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-button px-6 h-10 rounded-md bg-primary-pink text-white shadow-sm hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Schedule Consultation
              </a>
              <a
                href="/treatment-guides"
                className="inline-flex items-center justify-center gap-2 text-button px-6 h-10 rounded-md border border-primary-pink text-primary-pink hover:bg-[#FFD6E1] hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.4)] hover:-translate-y-0.5 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* ── Mobile-only image (between CTAs and icons) ── */}
            <div className="relative md:hidden mb-8" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-4 relative">
                <img
                  src="/Ketan-Gajjar.jpeg"
                  alt="Mr Ketankumar Gajjar"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 right-2 bg-primary-pink text-white px-4 py-3 rounded-xl shadow-md">
                  <div className="text-center">
                    <div className="text-card-title leading-none">26</div>
                    <div className="text-caption mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hero-icons flex flex-wrap items-center gap-x-6 gap-y-3 text-body-small text-black/90"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>16 Years Gynaecological Oncology</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>26 Years Gynaecology</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>NHS & Private Practice</span>
              </div>
            </div>
          </div>

          {/* Right Section — desktop only */}
          <div className="relative hero-right hidden md:block" data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,75,139,0.4)] hover:-translate-y-1">
              <img
                src="/Ketan-Gajjar.jpeg"
                alt="Mr Ketankumar Gajjar"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              />
              <div
                className="hero-bubble absolute -bottom-4 right-2 sm:-right-4 bg-primary-pink text-white px-4 py-3 rounded-xl shadow-md"
                data-aos="fade-up"
              >
                <div className="text-center">
                  <div className="text-card-title leading-none">26</div>
                  <div className="text-caption mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionView;
