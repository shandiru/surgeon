import React from "react";

// Sections from components/HomePage

import Header from "../components/CancerSection/CervicalCancerOverviewPage/Header";
import Symptoms from "../components/CancerSection/CervicalCancerOverviewPage/Symptoms";
import Diagnosis from "../components/CancerSection/CervicalCancerOverviewPage/Diagnosis";
import Treatment from "../components/CancerSection/CervicalCancerOverviewPage/Treatment";

import Footer from "../components/CancerSection/CervicalCancerOverviewPage/Footer";
export default function Home() {
  return (
    <div>
      
      <section >
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
        <Footer />
      </section>

      
      
    
    </div>
  );
}