import React from "react";

// Sections from components/HomePage

import EndometrialInfoSection from "../components/CancerSection/EndometrialCancerInformationPage/EndometrialInfoSection";
import  EndometrialSymptomsSection from "../components/CancerSection/EndometrialCancerInformationPage/EndometrialSymptomsSection";
import  EndometrialDiagnosisSection from "../components/CancerSection/EndometrialCancerInformationPage/EndometrialDiagnosisSection";
import  EndometrialTreatmentSection from "../components/CancerSection/EndometrialCancerInformationPage/EndometrialTreatmentSection";
import  EndometrialMoreInfoSection from "../components/CancerSection/EndometrialCancerInformationPage/EndometrialMoreInfoSection";

import  Footer from "../components/CancerSection/EndometrialCancerInformationPage/Footer";

export default function Home() {
  return (
    <div>
      
      <section >
        <EndometrialInfoSection />
      </section>
      
        <section >
        <EndometrialSymptomsSection />
      </section>
      
        <section >
        <EndometrialDiagnosisSection />
      </section>
       <section >
        <EndometrialTreatmentSection />
      </section>

       <section >
        <EndometrialMoreInfoSection />
      </section>

      <section >
        <Footer />
      </section>


    
      
    

  
    
    

    </div>
  );
}