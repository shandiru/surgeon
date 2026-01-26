import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ProsAndCons() {
  const pros = [
    "Enhanced precision and control during surgery",
    "Reduced blood loss and faster recovery times",
    "Minimally invasive approach with smaller incisions",
    "3D high-definition visualization for better accuracy",
    "Reduced risk of complications",
    "Shorter hospital stays",
    "Less post-operative pain",
  ];

  const cons = [
    "Higher initial cost compared to traditional surgery",
    "Requires specialized training for surgeons",
    "Longer operating times in some cases",
    "Limited availability in some regions",
    "Requires specific equipment and infrastructure",
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-primary-pink mb-4">
              Pros and Cons of Robotic Surgery
            </h2>
            <p className="text-body-large text-black max-w-2xl mx-auto">
              Understanding the advantages and considerations of robotic-assisted surgery
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Pros Section */}
            <div className="bg-light-pink rounded-xl p-6 md:p-8 border border-primary-pink/20">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary-pink" />
                <h3 className="text-subsection text-primary-pink font-semibold">Advantages</h3>
              </div>
              <ul className="space-y-4">
                {pros.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-pink mt-0.5 flex-shrink-0" />
                    <span className="text-body text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-black" />
                <h3 className="text-subsection text-gray-800 font-semibold">Considerations</h3>
              </div>
              <ul className="space-y-4">
                {cons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-body text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note Section */}
          <div className="mt-12 p-6 rounded-lg bg-light-pink border border-primary-pink/20">
            <p className="text-body text-black text-center">
              <strong>Note:</strong> The decision to use robotic surgery depends on individual
              patient circumstances, the specific procedure, and consultation with your healthcare
              provider. This information is provided as a general guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
