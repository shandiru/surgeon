import React from "react";

import EndometriosisHeroSection from "../components/EndometriosisInformationPage/EndometriosisHeroSection";
import EndometriosisInfo from "../components/EndometriosisInformationPage/EndometriosisInfo";
import SymptomsSection from "../components/EndometriosisInformationPage/SymptomsSection";
import ImpactSection from "../components/EndometriosisInformationPage/ImpactSection";
import CausesSection from "../components/EndometriosisInformationPage/CausesSection";
import DiagnosisSection from "../components/EndometriosisInformationPage/DiagnosisSection";
import TreatmentSection from "../components/EndometriosisInformationPage/TreatmentSection";
import RememberSection from "../components/EndometriosisInformationPage/RememberSection";
export default function EndometriosisInformation() {
  return (
    <div>
      <section>
        <EndometriosisHeroSection />
      </section>

      <section>
        <EndometriosisInfo />
      </section>

      <section>
        <SymptomsSection />
      </section>

      <section>
        <ImpactSection />
      </section>

      <section>
        <CausesSection />
      </section>

      <section>
        <DiagnosisSection />
      </section>

      <section>
        <TreatmentSection />
      </section>

      <section>
        <RememberSection />
      </section>
    </div>
  );
}
