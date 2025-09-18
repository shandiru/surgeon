import React from "react";

// Sections from components/HomePage
import IrregularBleedingHeader from "../components/IrregularBleedingInfoPage/IrregularBleedingHeader";
import IrregularBleedingNavbar from "../components/IrregularBleedingInfoPage/IrregularBleedingNavbar";
import IrregularBleedingContent from "../components/IrregularBleedingInfoPage/IrregularBleedingContent";
import IrregularBleedingFooter from "../components/IrregularBleedingInfoPage/IrregularBleedingFooter";
export default function IrregularBleedingInfoPage() {
  return (
    <div>
      
        <section >
        <IrregularBleedingHeader />
        </section>
        <section className=" px-4">
        <IrregularBleedingNavbar />
        </section>
        <section className="my-12 px-4">
        <IrregularBleedingContent />
        </section>

        <section className="my-12 px-4">
        <IrregularBleedingFooter />
        </section>
    
    </div>
  );
}