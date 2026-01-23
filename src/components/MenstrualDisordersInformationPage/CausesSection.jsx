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
  'Perimenopause or early menopause',
];

export default function CausesSection() {
  return (
    <section className="mb-16 px-6 md:px-12">
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-8 text-primary-pink">
        Causes &amp; Risk Factors
      </h2>

      {/* Grid of factors */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {riskFactors.map((factor, index) => (
          <div
            key={index}
            className="px-5 py-3 rounded-xl bg-[#FEE6EA] text-[#BB125B] text-sm font-medium border border-primary-pink shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            {factor}
          </div>
        ))}
      </div>
    </section>
  );
}
