// TreatmentSection.jsx
import React from 'react';
import { Calendar, Heart, Pill, Stethoscope } from 'lucide-react';

const treatments = [
  {
    icon: <Pill className="h-5 w-5 text-[#E91E63]" />,
    title: 'Pain Relief Medication',
    description: 'Over-the-counter or prescription pain medications to manage symptoms.',
  },
  {
    icon: <Calendar className="h-5 w-5 text-[#E91E63]" />,
    title: 'Hormone Therapy',
    description: 'Treatments to slow or stop endometrial tissue growth.',
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-[#E91E63]" />,
    title: 'Conservative Surgery',
    description: 'Removal of endometriosis tissue while preserving reproductive organs.',
  },
  {
    icon: <Heart className="h-5 w-5 text-[#E91E63]" />,
    title: 'Hysterectomy',
    description:
      "Considered only if other treatments haven't helped and you're not planning future pregnancies.",
  },
];

const TreatmentSection = () => {
  return (
    <section id="treatment" className="py-16 bg-[#fdf2f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#E91E63]">Treatment Options</h2>
            <p className="text-lg text-[#666]">Personalized treatment plans tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {treatments.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#333] flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm"
              >
                <div className="px-6">
                  <div className="flex items-center gap-2 font-semibold text-base mb-2">
                    {item.icon}
                    {item.title}
                  </div>
                  <p className="text-[#555] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#333] flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm mt-8 bg-[#fce4ec]">
            <div className="px-6 pt-6">
              <p className="text-center font-medium">
                We'll work closely with you to find the right balance of treatment based on your symptoms
                and goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
