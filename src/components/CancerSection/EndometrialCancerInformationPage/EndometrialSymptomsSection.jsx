import { FaExclamation } from "react-icons/fa";
import { LuTriangleAlert } from "react-icons/lu";

export default function EndometrialSymptomsSection() {
  return (
    <section className="mb-16 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <LuTriangleAlert className="h-8 w-8 text-red-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Symptoms of Endometrial Cancer
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm mb-6">
          {/* Card Header */}
          <div className="px-6">
            <div className="font-semibold text-xl mb-1">Early Warning Signs</div>
            <div className="text-sm text-gray-600">
              Endometrial cancer often shows early warning signs. The most common is abnormal vaginal bleeding.
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3">
                {[
                  "Unusual bleeding or spotting between periods or after menopause",
                  "Long, heavy, or frequent bleeding (especially in women over 40)",
                  "Thin white or clear vaginal discharge (postmenopausal women)",
                  "Lower abdominal or pelvic pain"
                ].map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-red-600 text-white mt-1">
                      <FaExclamation />
                    </span>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {[
                  "A lump or mass in the lower abdomen",
                  "Difficulty or pain while urinating",
                  "Pain during sexual intercourse",
                  "Unexplained weight loss"
                ].map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-red-600 text-white mt-1">
                      <FaExclamation />
                    </span>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-6 p-4 bg-[#f3f8e6] rounded-lg border border-[#d3e4ba] mx-6">
            <p className="text-sm font-medium text-green-800">
              <strong>Important:</strong> If you experience any of these symptoms, it's important to seek medical evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
