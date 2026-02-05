import React from "react";
import Hero from "../components/RoboticSurgeryPage/Hero";
import RoboticSurgeryOverview from "../components/RoboticSurgeryPage/RoboticSurgeryOverview";
import DaVinciSurgicalSystem from "../components/RoboticSurgeryPage/DaVinciSurgicalSystem";
import GynecologyApplications from "../components/RoboticSurgeryPage/GynecologyApplications";
import BenefitsSection from "../components/RoboticSurgeryPage/BenefitsSection";
import GynecologyFutureSection from "../components/RoboticSurgeryPage/GynecologyFutureSection";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <RoboticSurgeryOverview />
      </section>

      <section>
        <DaVinciSurgicalSystem />
      </section>
      <section>
        <GynecologyApplications />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <GynecologyFutureSection />
      </section>
    </div>
  );
}
