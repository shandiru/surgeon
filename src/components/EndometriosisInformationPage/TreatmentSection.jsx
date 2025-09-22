// TreatmentSection.jsx
import React from 'react';
import { Calendar, Heart, Pill, Stethoscope } from 'lucide-react';

const treatments = [
  {
    icon: <Pill className="h-6 w-6 text-[#ff97b3]" />,
    title: 'Pain Relief Medication',
    description: 'Over-the-counter or prescription pain medications to manage symptoms.',
  },
  {
    icon: <Calendar className="h-6 w-6 text-[#ff97b3]" />,
    title: 'Hormone Therapy',
    description: 'Treatments to slow or stop endometrial tissue growth.',
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-[#ff97b3]" />,
    title: 'Conservative Surgery',
    description: 'Removal of endometriosis tissue while preserving reproductive organs.',
  },
  {
    icon: <Heart className="h-6 w-6 text-[#ff97b3]" />,
    title: 'Hysterectomy',
    description:
      "Considered only if other treatments haven't helped and you're not planning future pregnancies.",
  },
];

const TreatmentSection = () => {
  return (
    <section id="treatment" className="py-20 bg-[#FFF5F8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b03b66]">
              Treatment Options
            </h2>
            <p className="text-lg text-gray-700">
              Personalized treatment plans tailored to your needs
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#333] flex flex-col gap-4 rounded-2xl shadow-md p-6 
                transition duration-300 hover:shadow-[0_0_25px_rgba(255,151,179,0.35)] 
                hover:-translate-y-2 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 font-semibold text-lg text-[#b03b66]">
                  {item.icon}
                  {item.title}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div
            className="text-[#333] mt-10 rounded-2xl p-8 text-center bg-gradient-to-r 
            from-[#ff97b3] to-[#ffb3c9] text-white shadow-md transition duration-300 
            hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
          >
            <p className="text-lg font-medium">
              We&apos;ll work closely with you to find the right balance of treatment
              based on your symptoms and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
