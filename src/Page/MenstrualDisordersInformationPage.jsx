

import Header from "../components/MenstrualDisordersInformationPage/Header";
import MenstrualHelpSection from "../components/MenstrualDisordersInformationPage/MenstrualHelpSection";
import MenstrualCycleInfo from "../components/MenstrualDisordersInformationPage/MenstrualCycleInfo"
import  MenstrualDisordersSection from "../components/MenstrualDisordersInformationPage/MenstrualDisordersSection"
import SymptomsSection from "../components/MenstrualDisordersInformationPage/SymptomsSection"
import CausesSection from "../components/MenstrualDisordersInformationPage/CausesSection"
import TreatmentOptions from "../components/MenstrualDisordersInformationPage/TreatmentOptions"
import SupportSelfCare from "../components/MenstrualDisordersInformationPage/SupportSelfCare"
import RememberSection from "../components/MenstrualDisordersInformationPage/RememberSection"
export default function MenstrualDisordersInformationPage() {
  return (
    <div>
      
        <section>
            <Header />
        </section>

        <section>
            <MenstrualHelpSection />
        </section>

        <section>
            <MenstrualCycleInfo />
        </section>
         <section >
            <MenstrualDisordersSection />
        </section>

         <section >
            <SymptomsSection />
        </section>

         <section >
            <CausesSection />
        </section>
         <section >
            <TreatmentOptions />
        </section>

         <section >
            <SupportSelfCare />
        </section>
          <section >
            <RememberSection />
        </section>



    
    </div>
  );
}