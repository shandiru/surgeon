

import HeroSection from "../components/OvarianCystsPage/HeroSection"
import WhatAreOvarianCysts from "../components/OvarianCystsPage/WhatAreOvarianCysts"
import CystAlert from "../components/OvarianCystsPage/CystAlert"
import OvarianCystSupportCard from "../components/OvarianCystsPage/OvarianCystSupportCard"
import OvarianCystSurgery from "../components/OvarianCystsPage/OvarianCystSurgery"
import DiagnosisAndSelfCareSection from "../components/OvarianCystsPage/DiagnosisAndSelfCareSection"
import EmotionalWellbeingCard from "../components/OvarianCystsPage/EmotionalWellbeingCard"
import RiskFertilityCards from "../components/OvarianCystsPage/RiskFertilityCards"
import SymptomsCard from "../components/OvarianCystsPage/SymptomsCard"
export default function OvarianCystsPage() {
  return (
    <div>
      
      <section>
        <HeroSection />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-6 ">
        <WhatAreOvarianCysts />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        <CystAlert />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-6 ">
        <SymptomsCard />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-6 ">
        <RiskFertilityCards />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-6 ">
        <EmotionalWellbeingCard />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        <DiagnosisAndSelfCareSection />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        < OvarianCystSurgery />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        <OvarianCystSupportCard />
      </section>

    
    </div>
  );
}