import React from "react";

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
      <section>
        <CervicalScreening />
      </section>
      <section>
        <SmearTestInfoCard />
      </section>

      <section>
        <SmearTestExclusions />
      </section>

      <section>
        <SmearTestPreparation />
      </section>

      <section>
        <SmearTestProcedure />
      </section>

      <section>
        <SmearTestResultsAccordion />
      </section>

      <section>
        <SmearTestReminder />
      </section>

      <section>
        <SmearTestCTA />
      </section>

      <section>
        <SmearTestFooter />
      </section>
    </div>
  );
}
