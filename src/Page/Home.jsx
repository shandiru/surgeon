import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import About from "../components/HomePage/AboutSection";
import Experience from "../components/HomePage/Experience";
import Expertise from "../components/HomePage/Expertise";
import EducationLanguagesSection from "../components/HomePage/EducationLanguagesSection";
import GetInTouchSection from "../components/HomePage/GetInTouchSection";
import ExperienceImage from "../components/HomePage/ExperienceImage";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import TreatmentSteps from "../components/HomePage/TreatmentSteps";
import InsurersCarousel from "../components/HomePage/InsurersCarousel";
import Testimonials from "../components/HomePage/Testimonials";
import Orbit from "../components/HomePage/Orbit";
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
      <section>
        <WhyChooseUs />
      </section>

      <section>
        <TreatmentSteps />
      </section>

      {/* Insurance Providers */}
      <section>
        <InsurersCarousel />
      </section>

      {/* Patient Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Specialties / Expertise */}
      <section id="specialties" className=" bg-white">
        <Expertise />
      </section>
      <Orbit />
      {/* Contact */}
      <section id="contact" className=" ">
        <GetInTouchSection />
      </section>
    </div>
  );
}
