import { LuTriangleAlert } from "react-icons/lu";

export default function CervicalCancerSymptoms() {
  const symptoms = [
    "Pelvic pain",
    "Pain or bleeding during or after sex",
    "Unusual vaginal discharge",
    "Bleeding between periods",
    "Bleeding after menopause",
  ];

  return (
    <section className="mt-10 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[#fff5f8] text-[#4b1e30] flex flex-col gap-6 rounded-xl border border-[#f5a9bd] border-l-4 border-l-[#b03b66] shadow-sm p-6">
          {/* Header with icon and title */}
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2 text-xl font-semibold text-[#b03b66]">
              <LuTriangleAlert className="text-[#b03b66] w-6 h-6" />
              Symptoms of Cervical Cancer
            </div>
            <p className="text-[#7a2f4f]">
              Cervical cancer often develops without early warning signs. That's why regular
              screenings are essential.
            </p>
          </div>

          {/* Symptom Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white border border-[#f5c2d2] rounded-lg"
              >
                <div className="w-2 h-2 bg-[#b03b66] rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-[#4b1e30]">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
