import React from "react";

// Sections from components/HomePage
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
        <section className="px-4 py-12">
        <WhatAreFibroidsCard />
        </section>
        <section className="px-4 ">
        <SymptomsOfFibroidsCard />
        </section>
        <section className="px-4 ">
        <TypesOfFibroidsCard />
        </section>

        <section className="px-4 ">
        <CausesAndRiskFactorsCard />
        </section>


        <section className="px-4 ">
        <FertilityAndPregnancyCard />
        </section>


        <section className="px-4 ">
        <EmotionalWellbeingCard />
        </section>

        <section className="px-4 ">
        <TreatmentOptionsCard />
        </section>

        <section className="px-4 pb-12">
        <SelfCareSupportCards />
        </section>


        <section className="px-4 pb-12">
        <RememberCard />
        </section>
      </div>
      
   
  );
}