import React from "react";
import { CheckCircle2, Award, Building2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Pros and Cons of Robotic Surgery",
      description:
        "Understanding the advantages and considerations of robotic-assisted surgery helps patients make informed decisions about their treatment options.",
      highlighted: true,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ketan's Experience as a Robotic Surgeon",
      description:
        "With extensive experience in robotic-assisted procedures, Ketan combines technical expertise with compassionate care to deliver superior patient outcomes.",
      highlighted: false,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Current Work and Teaching",
      description:
        "As a lead gynecological robotic surgeon at Nottingham University Hospital and Park Hospital, Ketan oversees daily hospital operations while actively teaching robotic surgery techniques to surgeons across Europe.",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <div className="flex-1">
              <h2 className="text-hero md:text-5xl font-bold text-gray-900 mb-4">
                Robotic Surgery Excellence
              </h2>
              <p className="text-body-large text-black/90 max-w-2xl">
                Comprehensive insights into robotic surgery, from understanding
                the benefits and considerations to exploring expert experience
                and current practice.
              </p>
            </div>
            <div className="flex-shrink-0 md:mt-0 mt-4">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-pink text-white font-semibold text-button hover:bg-[#E03E7C] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                All Topics
              </button>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="space-y-0">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex items-start gap-4 p-6 rounded-lg transition-all duration-300 ${
                    feature.highlighted ? "bg-[#FDE7EB]" : "bg-white"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-primary-pink">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-subsection text-primary-pink font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-body text-black/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < features.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
