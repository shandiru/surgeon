import React from "react";
import { Award, GraduationCap, Calendar, Target } from "lucide-react";

export default function KetanExperience() {
  const experienceItems = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Years of Experience",
      description:
        "Extensive experience in robotic-assisted gynecological surgery with a focus on minimally invasive techniques.",
      detail: "Over 15+ years",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Specialized Training",
      description:
        "Certified in da Vinci Surgical System with advanced training in complex gynecological procedures.",
      detail: "Certified Surgeon",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Surgical Expertise",
      description:
        "Specialized in robotic surgery for endometrial cancer, cervical cancer, and complex benign conditions.",
      detail: "Multiple Specializations",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Regularly attends international conferences and workshops to stay at the forefront of robotic surgery advancements.",
      detail: "Ongoing Education",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FDE7EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-primary-pink mb-4">
              Ketan's Experience as a Robotic Surgeon
            </h2>
            <p className="text-body-large text-black max-w-2xl mx-auto">
              A dedicated commitment to excellence in robotic-assisted gynecological surgery
            </p>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {experienceItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-pink/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-pink/10 flex items-center justify-center text-primary-pink">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-card-title text-primary-pink font-semibold">
                        {item.title}
                      </h3>
                      <span className="text-caption text-primary-pink bg-primary-pink/10 px-2 py-1 rounded">
                        {item.detail}
                      </span>
                    </div>
                    <p className="text-body text-black leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-primary-pink shadow-lg">
            <div className="text-center">
              <h3 className="text-subsection text-primary-pink font-bold mb-4">
                Commitment to Patient Care
              </h3>
              <p className="text-body-large text-black max-w-3xl mx-auto leading-relaxed">
                With years of dedicated practice in robotic surgery, Ketan combines technical
                expertise with compassionate care, ensuring each patient receives personalized
                treatment tailored to their unique needs. His experience spans a wide range of
                gynecological conditions, from routine procedures to complex cancer surgeries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
