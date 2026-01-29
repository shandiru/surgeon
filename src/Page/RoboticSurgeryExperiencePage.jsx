import React from "react";
import ExperienceGrid from "../components/RoboticSurgeryExperiencePage/ExperienceGrid";
import FAQSection from "../components/RoboticSurgeryExperiencePage/FAQSection";
import FeaturesSection from "../components/RoboticSurgeryExperiencePage/FeaturesSection";
import Hero from "../components/RoboticSurgeryExperiencePage/Hero";
import TrustSection from "../components/RoboticSurgeryExperiencePage/TrustSection";

export default function RoboticSurgeryExperiencePage() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <TrustSection />
      </section>
      <section>
        <ExperienceGrid />
      </section>
      <section>
        <FAQSection />
      </section>
    </div>
  );
}
