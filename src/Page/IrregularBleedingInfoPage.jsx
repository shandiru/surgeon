"use client";
import React, { useState } from "react";

import IrregularBleedingHeader from "../components/IrregularBleedingInfoPage/IrregularBleedingHeader";
import IrregularBleedingNavbar from "../components/IrregularBleedingInfoPage/IrregularBleedingNavbar";
import IrregularBleedingContent from "../components/IrregularBleedingInfoPage/IrregularBleedingContent";
import IrregularBleedingFooter from "../components/IrregularBleedingInfoPage/IrregularBleedingFooter";

export default function IrregularBleedingInfoPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <section>
        <IrregularBleedingHeader />
      </section>

      <section className="px-4 pt-12">
        <IrregularBleedingNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </section>

      <section className="my-12 px-4">
        <IrregularBleedingContent activeTab={activeTab} />
      </section>

      <section className="my-12 px-4">
        <IrregularBleedingFooter />
      </section>
    </div>
  );
}
