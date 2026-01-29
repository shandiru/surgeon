import React from "react";
import { Building2, GraduationCap, Users, Briefcase, Globe, BookOpen } from "lucide-react";

export default function CurrentWork() {
  const mdRoleItems = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      text: "Overseeing daily surgical operations and patient care",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Leading multidisciplinary teams in complex cases",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      text: "Managing hospital protocols and surgical standards",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Ensuring continuous improvement in surgical outcomes",
    },
  ];

  const teachingItems = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Conducting workshops and training sessions across European medical centers",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "Mentoring surgeons in advanced robotic surgery techniques",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Participating in international conferences and symposia",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Contributing to surgical education and best practice guidelines",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-primary-pink mb-4">Current Work and Involvement</h2>
            <p className="text-body-large text-gray-700 max-w-2xl mx-auto">
              Balancing clinical excellence with educational leadership in robotic surgery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* MD Role Section */}
            <div className="bg-primary-pink/10 rounded-xl p-6 md:p-8 border border-[#FF4B8B]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-pink flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-subsection text-primary-pink font-semibold">
                  Medical Director Role
                </h3>
              </div>
              <p className="text-body text-gray-700 mb-6 leading-relaxed">
                As Medical Director, Ketan plays a crucial role in the day-to-day operations of the
                hospital, ensuring the highest standards of surgical care and patient safety. His
                leadership extends beyond the operating room to include strategic planning, team
                development, and quality improvement initiatives.
              </p>
              <div className="space-y-3">
                {mdRoleItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 text-primary-pink mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-body text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-pink flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-subsection text-gray-800 font-semibold">
                  Teaching Robotic Surgery in Europe
                </h3>
              </div>
              <p className="text-body text-gray-700 mb-6 leading-relaxed">
                Ketan is actively involved in teaching and training surgeons across Europe, sharing
                his expertise in robotic-assisted surgery. Through workshops, mentorship programs,
                and educational initiatives, he contributes to advancing surgical techniques and
                improving patient outcomes on an international scale.
              </p>
              <div className="space-y-3">
                {teachingItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 text-primary-pink mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-body text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Combined Impact Section */}
          <div className="mt-12 bg-gradient-to-r from-[#FF4B8B]/10 to-[#FF4B8B]/5 rounded-xl p-6 md:p-8 border border-[#FF4B8B]/20">
            <div className="text-center">
              <h3 className="text-subsection text-primary-pink font-bold mb-4">
                A Dual Commitment
              </h3>
              <p className="text-body-large text-gray-700 max-w-3xl mx-auto leading-relaxed">
                By combining hands-on clinical practice as Medical Director with active teaching and
                mentorship across Europe, Ketan ensures that the latest advances in robotic surgery
                reach both patients and the next generation of surgeons. This dual role reflects a
                commitment to excellence in both patient care and medical education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
