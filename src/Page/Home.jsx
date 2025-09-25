import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection"
import About from "../components/HomePage/AboutSection"
import Experience from "../components/HomePage/Experience";
import Expertise from "../components/HomePage/Expertise";
import EducationLanguagesSection from "../components/HomePage/EducationLanguagesSection";
import GetInTouchSection from "../components/HomePage/GetInTouchSection";
import ExperienceImage from "../components/HomePage/ExperienceImage"
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className=" bg-white">
        <About />
      </section>

      {/* Education + Languages */}
      <section id="education" className=" bg-gray-50">
        <EducationLanguagesSection />
      </section>

      {/* Experience */}
      <section id="experience" className=" bg-gray-50">
        <Experience />
      </section>
      <section>
        <ExperienceImage />
      </section>

      {/* Specialties / Expertise */}
      <section id="specialties" className=" bg-white">
        <Expertise />
      </section>

      {/* Contact */}
      <section id="contact" className=" ">
        <GetInTouchSection />
      </section>
    </div>
  );
}