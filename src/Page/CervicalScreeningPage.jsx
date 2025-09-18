import React from "react";

// Sections from components/HomePage
import CervicalScreening from "../components/CervicalScreeningPage/CervicalScreening";
import CervicalScreeningStat from "../components/CervicalScreeningPage/CervicalScreeningStat";
import SmearTestInfoCard from "../components/CervicalScreeningPage/SmearTestInfoCard";
import SmearTestExclusions from "../components/CervicalScreeningPage/SmearTestExclusions";
import SmearTestPreparation from "../components/CervicalScreeningPage/SmearTestPreparation";
import SmearTestProcedure from "../components/CervicalScreeningPage/SmearTestProcedure";
import SmearTestResultsAccordion from "../components/CervicalScreeningPage/SmearTestResultsAccordion";
import SmearTestReminder from "../components/CervicalScreeningPage/SmearTestReminder";
import SmearTestCTA from "../components/CervicalScreeningPage/SmearTestCTA";
import SmearTestFooter from "../components/CervicalScreeningPage/SmearTestFooter";
export default function CervicalScreeningPage() {
  return (
    <div>
      
      <section >
        <CervicalScreening />
      </section>

      <section className="my-12 px-4">
        <CervicalScreeningStat />
      </section>
       
       <section className="my-12 px-4">
        <SmearTestInfoCard />
       </section>

         <section className="my-12 px-4">
        <SmearTestExclusions />
         </section>

            <section className="my-12 px-4">
        <SmearTestPreparation />
            </section>

         <section className="my-12 px-4">
        <SmearTestProcedure />
            </section>

            <section className="my-12 px-4">
        <SmearTestResultsAccordion />
            </section>
      
            <section className="my-12 px-4">
        <SmearTestReminder />
            </section>

            <section className="my-12 px-4">
        <SmearTestCTA />
            </section>
      
        <section className="my-12 px-4">
        <SmearTestFooter />
            </section>
    
    </div>
  );
}