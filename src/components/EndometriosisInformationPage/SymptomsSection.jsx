import React from "react";
import { Calendar, TriangleAlert, Heart, Users } from "lucide-react";

const pink = "#ff97b3";

const symptoms = [
  {
    icon: <Calendar className="w-6 h-6" style={{ color: pink }} />,
    title: "Painful Periods",
    description: "Severe menstrual cramps that may worsen over time",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: pink }} />,
    title: "Pelvic Pain",
    description: "Pain between periods, often chronic",
  },
  {
    icon: <Heart className="w-6 h-6" style={{ color: pink }} />,
    title: "Pain During Sex",
    description: "Discomfort during or after sexual intercourse",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: pink }} />,
    title: "Urination Pain",
    description: "Pain when urinating, especially during periods",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: pink }} />,
    title: "Bowel Issues",
    description: "Pain during bowel movements, particularly during menstruation",
  },
  {
    icon: <Users className="w-6 h-6" style={{ color: pink }} />,
    title: "Fertility Issues",
    description: "Difficulty getting pregnant or infertility",
  },
];

export default function SymptomsSection() {
  return (
    <section id="symptoms" className="py-16 bg-[#FFF5F8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#b03b66]">
            Symptoms of Endometriosis
          </h2>
          <p className="text-lg text-gray-600">
            Recognizing the signs and when to seek help
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white text-gray-800 rounded-2xl border border-[#ff97b3]/40 shadow-md p-6 
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 text-lg font-semibold text-[#b03b66]">
                {symptom.icon}
                {symptom.title}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Reminder */}
        <div className="rounded-2xl border border-[#ff97b3] bg-gradient-to-r from-[#ff97b3] to-[#ffb3c9] text-white p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <TriangleAlert className="w-8 h-8 mt-1 text-white flex-shrink-0" />
            <div>
              <p className="font-bold text-xl mb-3">Important Reminder</p>
              <p className="text-base leading-relaxed">
                Many women believe severe period pain is "normal" — it isn&apos;t.  
                You don&apos;t have to live with it.  
                If you experience these symptoms, please consult with a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
