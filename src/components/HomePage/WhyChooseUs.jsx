"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import { FaUserMd, FaHeartbeat, FaHeadset, FaStethoscope } from "react-icons/fa";

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (i) => setOpenIndex(openIndex === i ? null : i);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000, offset: 100 });
  }, []);

  const features = [
    {
      title: "Personalised Care",
      desc: "Every treatment plan is tailored to each woman’s unique needs with compassion and clarity.",
      icon: <FaUserMd className="text-white text-xl" />,
    },
    {
      title: "Advanced Surgical Expertise",
      desc: "Ketan delivers modern, minimally invasive gynaecological surgery with precision and safety.",
      icon: <FaHeartbeat className="text-white text-xl" />,
    },
    {
      title: "Exceptional Patient Support",
      desc: "From consultation to recovery, patients receive continuous guidance, comfort, and reassurance.",
      icon: <FaHeadset className="text-white text-xl" />,
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-light-pink-1 pb-32 overflow-hidden">

      {/* Header */}
      <div className="text-center mt-16 mb-24 px-4">
        <p className="text-body-small text-black/60 mb-3" data-aos="fade-up">
          Why Choose Us?
        </p>

        <h2
          className="text-hero font-extrabold text-black mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Leading with Heart and Expertise
        </h2>

        {/* Button */}
        <div
          className="flex items-center justify-center py-4 group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="https://www.circlehealthgroup.co.uk/consultants/ketankumar-gajjar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white font-medium rounded-lg shadow-lg transition-all duration-300">
              <span className="px-5 py-3 text-button">
                Book Appointment
              </span>
            </button>
          </a>

          <span className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg bg-primary-pink/80 ml-0.5">
            <ArrowUpRight className="absolute w-5 h-5 transform transition-all duration-300 group-hover:-translate-y-8 group-hover:translate-x-6 opacity-100" />
            <ArrowUpRight className="absolute w-5 h-5 transform translate-y-8 -translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">

        {/* MOBILE STRUCTURE: TEXT → IMAGE → ACCORDION */}
        <div className="flex flex-col lg:hidden w-full px-6 space-y-10">

          {/* TEXT FIRST */}
          <div data-aos="fade-up">
            <div className="inline-flex items-center space-x-2 bg-light-pink-1 px-3 py-1 rounded-full">
              <div className="w-5 h-5 bg-primary-pink rounded-full flex items-center justify-center">
                <FaStethoscope className="text-white text-sm" />
              </div>
              <span className="text-primary-pink text-body-small font-semibold">
                KetanKumar GynCare
              </span>
            </div>

            <h3 className="text-section font-extrabold text-black mt-4">
              Expert Surgical Care for Every Woman
            </h3>

            <p className="text-black/70 text-body mt-3 leading-relaxed">
              Experience compassionate, specialised gynaecological treatment tailored
              to your well-being. With advanced surgical expertise and a patient-first
              approach, we ensure you feel supported, informed, and confident every
              step of the way.
            </p>
          </div>

          {/* IMAGE SECOND */}
          <div data-aos="zoom-in">
            <div className="w-full h-[360px] sm:h-[420px] overflow-hidden rounded-3xl shadow-xl border-[4px] border-white">
              <img
                src="/Ketan_Gajjar-117.jpg"
                alt="Doctor consulting patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ACCORDION THIRD */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="border-b border-light-pink-2 pb-6 cursor-pointer"
                onClick={() => toggleAccordion(i)}
                data-aos="fade-up"
                data-aos-delay={`${300 + i * 100}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-pink flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <h4 className="text-card-title font-semibold text-black pt-2">
                      {item.title}
                    </h4>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`w-5 h-5 mt-2 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7L10 12L15 7"
                      stroke="#1B123D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? "max-h-28 mt-2 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-black/70 text-body-small leading-relaxed pl-16">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP VERSION (unchanged) */}
        <div
          className="relative bg-white rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] 
          hidden lg:flex flex-row items-center justify-between 
          w-full max-w-[1200px] px-16 py-20 z-10 gap-x-72"
          data-aos="fade-up"
        >
          {/* LEFT */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-light-pink-1 px-3 py-1 rounded-full">
              <div className="w-5 h-5 bg-primary-pink rounded-full flex items-center justify-center">
                <FaStethoscope className="text-white text-sm" />
              </div>
              <span className="text-primary-pink text-body-small font-semibold">
                KetanKumar GynCare
              </span>
            </div>

            <h3 className="text-section font-extrabold text-black leading-tight">
              Expert Surgical Care for Every Woman
            </h3>

            <p className="text-black/70 text-body leading-relaxed max-w-md">
              Experience compassionate, specialised gynaecological treatment tailored
              to your well-being. With advanced surgical expertise and a patient-first
              approach, we ensure you feel supported, informed, and confident every
              step of the way.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="flex-1 flex flex-col space-y-6 lg:pl-28">
            {features.map((item, i) => (
              <div
                key={i}
                className="border-b border-light-pink-2 pb-6 cursor-pointer"
                onClick={() => toggleAccordion(i)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-pink flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <h4 className="text-card-title font-semibold text-black pt-2">
                      {item.title}
                    </h4>
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`w-5 h-5 mt-2 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7L10 12L15 7"
                      stroke="#1B123D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? "max-h-28 mt-2 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-black/70 text-body-small leading-relaxed pl-16">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP FLOATING IMAGE */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block"
          data-aos="zoom-in"
        >
          <div className="w-[340px] h-[580px] rounded-full border-[6px] border-white overflow-hidden shadow-2xl">
            <img
              src="/Ketan_Gajjar-117.jpg"
              alt="Doctor consulting patient"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
