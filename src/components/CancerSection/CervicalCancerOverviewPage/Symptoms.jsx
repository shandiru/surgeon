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
    <div className="mt-10 px-6">
      <div className="bg-[#e9fcfc] text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-200 border-l-4 border-l-red-500 shadow-sm p-6">
        {/* Header with icon and title */}
        <div className="grid gap-1.5">
          <div className="flex items-center gap-2 text-xl font-semibold text-teal-800">
            <LuTriangleAlert className="text-red-500 w-6 h-6" />
            Symptoms of Cervical Cancer
          </div>
          <p className="text-gray-600">
            Cervical cancer often develops without early warning signs. That's why regular
            screenings are essential.
          </p>
        </div>

        {/* Symptom Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-[#f2fbfb] rounded-lg"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium text-teal-900">{symptom}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
