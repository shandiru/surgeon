import { useState } from "react";
import { FaInfoCircle, FaMicroscope } from "react-icons/fa";

const MenstrualDisordersGuidecard5 = ({ setShowCard, setActiveButton }) => {

  const riskFactors = [
  'Uterine fibroids',
  'Hormonal imbalances',
  'Polycystic ovary syndrome (PCOS)',
  'Thyroid disorders',
  'Eating disorders or sudden weight changes',
  'Stress or chronic illness',
  'Clotting disorders',
  'Sexually transmitted infections (STIs)',
  'Certain cancers',
  'Genetics/family history',
  'Perimenopause or early menopause',
];


  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6 p-6">

        <h2 className="text-3xl text-center font-bold mb-8 text-[#FF4B8B]">
          Causes &amp; Risk Factors
        </h2>

        {/* Grid of factors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {riskFactors.map((factor, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-xl bg-[#FEE6EA] text-[#BB125B] text-sm font-medium border border-[#FF4B8B]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              {factor}
            </div>
          ))}
        </div>
        {/* NEXT BUTTON */}
        <div className="pt-2 p-6">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="w-full bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white rounded-md h-10 px-4 flex items-center justify-center text-sm font-medium transition"
          >
            Learn About Treatment
          </button>
        </div>
      </div>


    </div>
  );
};

export default MenstrualDisordersGuidecard5;
