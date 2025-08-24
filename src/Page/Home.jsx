import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection"
import About from "../components/HomePage/AboutSection"
import Experience from "../components/HomePage/Experience";
import Expertise from "../components/HomePage/Expertise";
import EducationLanguagesSection from "../components/HomePage/EducationLanguagesSection";
import GetInTouchSection from "../components/HomePage/GetInTouchSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <About />
      </section>

      {/* Education + Languages */}
      <section id="education" className="py-20 bg-gray-50">
        <EducationLanguagesSection />
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-gray-50">
        <Experience />
      </section>

      {/* Specialties / Expertise */}
      <section id="specialties" className="py-20 bg-white">
        <Expertise />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#c3eefa]">
        <GetInTouchSection />
      </section>
    </div>
  );
}