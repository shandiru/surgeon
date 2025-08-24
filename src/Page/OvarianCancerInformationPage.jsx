import React from "react";

// Sections from components/HomePage

import Header from "../components/CancerSection/OvarianCancerInformationPage/Header";
import Symptoms from "../components/CancerSection/OvarianCancerInformationPage/Symptoms";
import Diagnosis from "../components/CancerSection/OvarianCancerInformationPage/Diagnosis";
import Treatment from "../components/CancerSection/OvarianCancerInformationPage/Treatment";
import MedicalAdviceSection from "../components/CancerSection/OvarianCancerInformationPage/MedicalAdviceSection";
import Footer from "../components/CancerSection/OvarianCancerInformationPage/Footer";
 
export default function Home() {
  return (
    <div>
      
      <section id="hero">
        <Header />
      </section>
      
       <section >
         <Symptoms />
      </section>

       <section >
          <Diagnosis />
      </section>

      <section >
        <Treatment />
      </section>

      <section >
      <MedicalAdviceSection />
      </section>

        <section >
      <Footer />
      </section>
    

  
    
    

    </div>
  );
}