import React from "react";

const MenstrualHelpSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-pink leading-snug">
            You don't have to struggle through menstrual problems
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-black">
            Menstrual disorders are physical and/or emotional symptoms that occur before or during
            menstruation. Most have straightforward causes and can be treated effectively.
          </p>

          {/* CTA Button */}
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 text-base font-semibold transition-all
            h-12 px-8 rounded-lg shadow-md bg-primary-pink text-white
            hover:bg-primary-pink hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Learn About Treatment Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenstrualHelpSection;
