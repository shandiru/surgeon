import React from "react";
import {
  Calendar,
  TriangleAlert,
  Heart,
  Users,
} from "lucide-react"; // Optional: Only if you're using Lucide icons

const pink = "#ff97b3";

const symptoms = [
  {
    icon: <Calendar className="w-5 h-5" style={{ color: pink }} />,
    title: "Painful Periods",
    description: "Severe menstrual cramps that may worsen over time",
  },
  {
    icon: <TriangleAlert className="w-5 h-5" style={{ color: pink }} />,
    title: "Pelvic Pain",
    description: "Pain between periods, often chronic",
  },
  {
    icon: <Heart className="w-5 h-5" style={{ color: pink }} />,
    title: "Pain During Sex",
    description: "Discomfort during or after sexual intercourse",
  },
  {
    icon: <TriangleAlert className="w-5 h-5" style={{ color: pink }} />,
    title: "Urination Pain",
    description: "Pain when urinating, especially during periods",
  },
  {
    icon: <TriangleAlert className="w-5 h-5" style={{ color: pink }} />,
    title: "Bowel Issues",
    description: "Pain during bowel movements, particularly during menstruation",
  },
  {
    icon: <Users className="w-5 h-5" style={{ color: pink }} />,
    title: "Fertility Issues",
    description: "Difficulty getting pregnant or infertility",
  },
];

export default function SymptomsSection() {
  return (
    <section id="symptoms" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Symptoms of Endometriosis
          </h2>
          <p className="text-lg text-gray-600">
            Recognizing the signs and when to seek help
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white text-gray-800 rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                {symptom.icon}
                {symptom.title}
              </div>
              <p className="text-gray-600">{symptom.description}</p>
            </div>
          ))}
        </div>

        {/* Important Reminder card */}
        <div className="flex flex-col gap-4 rounded-xl border border-red-200 bg-red-50 text-gray-800 p-6">
          <div className="flex items-start gap-3">
            <TriangleAlert className="w-5 h-5 mt-1 text-red-600" />
            <div>
              <p className="font-semibold text-red-600 mb-2">
                Important Reminder
              </p>
              <p className="text-sm text-gray-700">
                Many women believe severe period pain is "normal" — it isn't. You don't have to live with it. If you experience these symptoms, please consult with a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
