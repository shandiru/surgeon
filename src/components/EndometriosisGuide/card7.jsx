'use client';
import { Calendar, Heart, Pill, Star, Stethoscope } from 'lucide-react';

const Endometriosiscard7 = () => {

  const treatments = [
    {
      icon: <Pill className="h-6 w-6 text-primary-pink" />,
      title: 'Pain Relief Medication',
      description: 'Over-the-counter or prescription pain medications to manage symptoms.',
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary-pink" />,
      title: 'Hormone Therapy',
      description: 'Treatments to slow or stop endometrial tissue growth.',
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary-pink" />,
      title: 'Conservative Surgery',
      description: 'Removal of endometriosis tissue while preserving reproductive organs.',
    },
    {
      icon: <Heart className="h-6 w-6 text-primary-pink" />,
      title: 'Hysterectomy',
      description:
        "Considered only if other treatments haven't helped and you're not planning future pregnancies.",
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Outer Card */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-pink">
              Treatment Options
            </h2>
            <p className="text-lg text-black">
              Personalized treatment plans tailored to your needs
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#333] flex flex-col gap-4 rounded-2xl shadow-md p-6 
                transition duration-300 hover:shadow-[0_0_25px_rgba(176,59,102,0.35)] 
                hover:-translate-y-2 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 font-semibold text-lg text-primary-pink">
                  {item.icon}
                  {item.title}
                </div>
                <p className="text-black leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div
            className="mt-10 rounded-2xl p-8 text-center text-white shadow-md transition duration-300 
            hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
            style={{ backgroundColor: '#FF4B8B' }}
          >
            <p className="text-lg font-medium">
              We&apos;ll work closely with you to find the right balance of treatment
              based on your symptoms and goals.
            </p>
          </div>
        </div>
      </div>
      {/* Next Button */}
      {/* COMPLETE GUIDE BUTTON */}
      <div className="pt-8 flex justify-center">
        <button
          className="bg-primary-pink hover:bg-primary-pink/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all flex items-center justify-center gap-2"
        >
          <Star className="w-4 h-4" />
          Complete Guide
        </button>
      </div>

    </div>
  );
};

export default Endometriosiscard7;
