import React from "react";
import { Calendar, TriangleAlert, Heart, Users } from "lucide-react";

const pink = "#FFC5D3";
const deepPink = "#FF4B8B";

const symptoms = [
  {
    icon: <Calendar className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Painful Periods",
    description: "Severe menstrual cramps that may worsen over time",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Pelvic Pain",
    description: "Pain between periods, often chronic",
  },
  {
    icon: <Heart className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Pain During Sex",
    description: "Discomfort during or after sexual intercourse",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Urination Pain",
    description: "Pain when urinating, especially during periods",
  },
  {
    icon: <TriangleAlert className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Bowel Issues",
    description: "Pain during bowel movements, particularly during menstruation",
  },
  {
    icon: <Users className="w-6 h-6" style={{ color: deepPink }} />,
    title: "Fertility Issues",
    description: "Difficulty getting pregnant or infertility",
  },
];

export default function SymptomsSection() {
  return (
    <section id="symptoms" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: deepPink }}>
            Symptoms of Endometriosis
          </h2>
          <p className="text-lg text-black/90">Recognizing the signs and when to seek help</p>
        </div>

        {/* Symptom Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white text-black rounded-2xl  shadow-md p-6 
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
            >
              <div
                className="flex items-center gap-3 text-lg font-semibold"
                style={{ color: deepPink }}
              >
                {symptom.icon}
                {symptom.title}
              </div>
              <p className="text-black/90 leading-relaxed">{symptom.description}</p>
            </div>
          ))}
        </div>

        {/* Important Reminder */}
        <div className="rounded-2xl p-8 shadow-lg bg-light-pink-2">
          <div className="flex items-start gap-4">
            <TriangleAlert className="w-8 h-8 mt-1 flex-shrink-0" style={{ color: deepPink }} />
            <div>
              <p className="font-bold text-xl mb-3" style={{ color: deepPink }}>
                Important Reminder
              </p>
              <p className="text-base leading-relaxed text-black">
                Many women believe severe period pain is "normal" — it isn&apos;t. You don&apos;t
                have to live with it. If you experience these symptoms, please consult with a
                healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
