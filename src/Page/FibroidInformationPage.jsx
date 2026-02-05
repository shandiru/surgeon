import React from "react";
import UnderstandingFibroidsSection from "../components/FibroidInformationPage/UnderstandingFibroidsSection";
import WhatAreFibroidsCard from "../components/FibroidInformationPage/WhatAreFibroidsCard";
import SymptomsOfFibroidsCard from "../components/FibroidInformationPage/SymptomsOfFibroidsCard";
import TypesOfFibroidsCard from "../components/FibroidInformationPage/TypesOfFibroidsCard";
import CausesAndRiskFactorsCard from "../components/FibroidInformationPage/CausesAndRiskFactorsCard";
import FertilityAndPregnancyCard from "../components/FibroidInformationPage/FertilityAndPregnancyCard";
import EmotionalWellbeingCard from "../components/FibroidInformationPage/EmotionalWellbeingCard";
import TreatmentOptionsCard from "../components/FibroidInformationPage/TreatmentOptionsCard";
import SelfCareSupportCards from "../components/FibroidInformationPage/SelfCareSupportCards";
import RememberCard from "../components/FibroidInformationPage/RememberCard";
export default function FibroidInformationPage() {
  return (
    <div>
      <section>
        <UnderstandingFibroidsSection />
      </section>
      <section>
        <WhatAreFibroidsCard />
      </section>
      <section>
        <SymptomsOfFibroidsCard />
      </section>
      <section>
        <TypesOfFibroidsCard />
      </section>

      <section>
        <CausesAndRiskFactorsCard />
      </section>

      <section>
        <FertilityAndPregnancyCard />
      </section>

      <section>
        <EmotionalWellbeingCard />
      </section>

      <section>
        <TreatmentOptionsCard />
      </section>

      <section>
        <SelfCareSupportCards />
      </section>

      <section>
        <RememberCard />
      </section>
    </div>
  );
}
