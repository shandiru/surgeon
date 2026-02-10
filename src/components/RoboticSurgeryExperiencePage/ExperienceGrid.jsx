import React from "react";
import {
  Award,
  GraduationCap,
  Target,
  Calendar,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ExperienceGrid() {
  const experienceCards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Years of Experience",
      description:
        "Extensive experience in robotic-assisted gynecological surgery with a focus on minimally invasive techniques.",
      background: "bg-[#FDE7EB]",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-[#FDE7EB]",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Surgical Expertise",
      description:
        "Specialised in robotic surgery for endometrial cancer, cervical cancer, and complex benign conditions.",
      background: "bg-white",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-primary-pink",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Specialised Training",
      description:
        "Certified in da Vinci Surgical System with advanced training in complex gynecological procedures.",
      background: "bg-[#FDE7EB]",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-[#FDE7EB]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient Care",
      description:
        "Compassionate care ensuring each patient receives personalised treatment tailored to their unique needs.",
      background: "bg-white",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-primary-pink",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Regularly attends international conferences and workshops to stay at the forefront of robotic surgery advancements.",
      background: "bg-[#FDE7EB]",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-[#FDE7EB]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teaching & Mentorship",
      description:
        "Actively teaching robotic surgery techniques to surgeons across Europe, sharing expertise and advancing surgical education.",
      background: "bg-white",
      iconBg: "bg-primary-pink",
      hoverColor: "hover:bg-primary-pink",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experienceCards.map((card, index) => (
              <div
                key={index}
                className={`${card.background} rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col`}
              >
                {/* Icon in Circular Background */}
                <div
                  className={`w-14 h-14 ${card.iconBg} rounded-full flex items-center justify-center mb-4`}
                >
                  <div className="text-white">{card.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-subsection text-gray-900 font-bold mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-body text-black leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>

                {/* Button at Bottom Right */}
                <div className="flex justify-end mt-auto">
                  <button
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary-pink font-bold text-sm transition-all duration-300 ${card.hoverColor} hover:text-white`}
                  >
                    Know more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
