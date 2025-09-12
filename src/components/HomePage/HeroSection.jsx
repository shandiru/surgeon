'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSectionView = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility
      gsap.set(['.hero-left', '.hero-right', '.hero-ctas a', '.hero-icons > div', '.hero-bubble'], {
        autoAlpha: 1
      });

      // Scroll-triggered reveal animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out', duration: 0.8 }
      });

      tl.from('.hero-left', { x: -60, autoAlpha: 0 })
        .from('.hero-badge', { y: -10, autoAlpha: 0 }, '-=0.5')
        .from('.hero-title', { y: 20, autoAlpha: 0 }, '-=0.4')
        .from('.hero-desc', { y: 20, autoAlpha: 0 }, '-=0.4')
        .from('.hero-ctas a', { y: 10, autoAlpha: 0, stagger: 0.15 }, '-=0.3')
        .from('.hero-icons > div', { y: 10, autoAlpha: 0, stagger: 0.1 }, '-=0.3');

      gsap.from('.hero-right', {
        scrollTrigger: {
          trigger: '.hero-right',
          start: 'top 85%',
          once: true,
        },
        x: 60,
        autoAlpha: 0,
        duration: 1
      });

      gsap.from('.hero-bubble', {
        scrollTrigger: {
          trigger: '.hero-right',
          start: 'top 85%',
          once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.3
      });

      // Classic GSAP Animations (looping)
      gsap.to('.hero-bubble', {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 2
      });

      gsap.to('.hero-icons > div', {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.5,
        stagger: 0.3
      });

      gsap.to('.hero-title span', {
        textShadow: '0px 0px 8px #FFC5D3',
        color: '#FFB3C4',
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power1.inOut',
        delay: 2
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[#fff7f9] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="hero-left">
            <div className="mb-4 hero-badge">
              <span className="inline-block border border-[#FFC5D3] text-[#FFC5D3] text-xs font-semibold px-3 py-1 rounded-full">
                Consultant Gynaecological Oncologist
              </span>
            </div>

            <h1 className="hero-title text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Care in <span className="text-[#FFC5D3]">Women's Health</span>
            </h1>

            <p className="hero-desc text-lg text-gray-700 mb-8 leading-relaxed">
              With 26 years of dedicated experience in gynaecological oncology,
              providing compassionate, evidence-based care for women across Nottingham and beyond.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-8 opacity-100">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md bg-[#FFC5D3] text-white shadow-sm hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.5)] hover:-translate-y-0.5 transition-all"
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
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md border border-[#FFC5D3] text-[#FFC5D3] hover:bg-[#ffe5ec] hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.4)] hover:-translate-y-0.5 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="hero-icons flex items-center gap-6 text-sm text-gray-600 will-change-transform">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFC5D3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFC5D3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>NHS & Private Practice</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative hero-right opacity-100">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,197,211,0.4)] hover:-translate-y-1">
              <img
                src="/doctor.png"
                alt="Mr Ketankumar Gajjar"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="hero-bubble absolute -bottom-4 -right-4 bg-[#FFC5D3] text-white px-4 py-3 rounded-xl shadow-md will-change-transform">
                <div className="text-center">
                  <div className="text-xl font-bold leading-none">26</div>
                  <div className="text-xs mt-1">Years Experience</div>
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
