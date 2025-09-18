import React from 'react';

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
  'Perimenopause or early menopause'
];

export default function CausesSection() {
  return (
    <section className="mb-16 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-6 text-[#FF4B8B]">Causes &amp; Risk Factors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {riskFactors.map((factor, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-start text-left whitespace-nowrap w-fit text-xs font-medium rounded-md border border-[#FF4B8B]/20 bg-[#FEE6EA] text-[#BB125B] px-4 py-2"
          >
            {factor}
          </span>
        ))}
      </div>
    </section>
  );
}
