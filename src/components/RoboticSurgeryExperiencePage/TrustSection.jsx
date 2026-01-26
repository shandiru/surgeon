import React from "react";
import { Users, Calendar } from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced team",
      description: "Skilled robotic surgeons, truly caring for your well-being.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible scheduling",
      description: "We offer flexible scheduling to fit your lifestyle.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <h2 className="text-hero md:text-5xl font-bold text-black leading-tight">
                Why trust our <span className="text-primary-pink">robotic surgery services?</span>
              </h2>

              {/* Descriptive Paragraph */}
              <p className="text-body-large text-black leading-relaxed">
                We maintain the highest standards of care and safety, providing personalized
                attention throughout your healthcare journey.
              </p>

              {/* Feature List */}
              <div className="space-y-6 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon in Circular Background */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-light-pink-1 border-2 border-primary-pink flex items-center justify-center">
                      <div className="text-primary-pink">{feature.icon}</div>
                    </div>

                    {/* Feature Content */}
                    <div className="flex-1">
                      <h3 className="text-subsection text-black font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-body text-black leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-r-[3rem] overflow-hidden">
                <img
                  src="/robotic-surgery-4.jpg"
                  alt="Robotic surgery team providing expert care"
                  className="w-full h-full object-cover rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
