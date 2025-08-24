import React from "react";
import {
  FaExclamationTriangle, // AlertTriangle
  FaHeartbeat,           // Activity
  FaCheckCircle,         // CircleCheckBig
  FaStethoscope,         // Stethoscope
  FaSearch,              // Search
  FaCut,                 // Scissors
  FaBolt,                // Zap
  FaPills,               // Pill
} from "react-icons/fa";

const VulvarCancerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaHeartbeat className="h-4 w-4" /> Medical Information Guide
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Vulvar Cancer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide covering symptoms, diagnosis, and treatment options
          </p>
        </div>

        {/* Timeline Vertical Line */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-blue-200 to-green-200 hidden lg:block"></div>

          {/* Step 1: Symptoms */}
          <StepCard
            color="red"
            step="Step 1"
            title="Recognizing Symptoms"
            icon={<FaExclamationTriangle className="h-8 w-8" />}
            description="Vulvar cancer most often affects the labia (skin folds around the vagina), but it can occur anywhere on the vulva."
            points={[
              "Persistent vulvar itching (lasting more than a few weeks)",
              "A cut or sore that won't heal",
              "A lump or mass on the vulva",
              "Vulvar pain or tenderness",
              "Unusual bleeding from the vulva (not menstrual)",
              "Burning in the genital area that continues despite treatment",
              "Changes in a mole or birthmark on the vulva (size, colour, or texture)",
            ]}
            alert="If you notice any of these symptoms, it's important to see your doctor promptly."
          />

          {/* Step 2: Diagnosis */}
          <StepCard
            color="blue"
            step="Step 2"
            title="Getting Diagnosed"
            icon={<FaStethoscope className="h-8 w-8" />}
            description="Diagnosis usually begins with a physical and pelvic exam, followed by specialized tests."
            subsections={[
              {
                title: "Examination Steps:",
                items: [
                  {
                    icon: <FaSearch className="h-6 w-6" />,
                    heading: "Pelvic Exam",
                    text: "Checking the vulva, vagina, uterus, ovaries, bladder, and rectum for abnormalities",
                  },
                  {
                    icon: <FaHeartbeat className="h-6 w-6" />,
                    heading: "Biopsy",
                    text: "Removing a small piece of tissue from the vulva to test for cancer cells",
                  },
                  {
                    icon: <FaSearch className="h-6 w-6" />,
                    heading: "Colposcopy",
                    text: "Using a magnifying instrument to closely examine the vulva",
                  },
                ],
              },
            ]}
            tags={["Chest X-ray", "CT or PET-CT scan", "MRI", "Endoscopy (if needed)"]}
          />

          {/* Step 3: Treatment */}
          <StepCard
            color="green"
            step="Step 3"
            title="Treatment Options"
            icon={<FaCut className="h-8 w-8" />}
            description="Treatment depends on the stage, size, and spread of the cancer. Surgery is the most common approach."
            treatments={{
              surgery: [
                {
                  heading: "Radical Wide Local Excision",
                  text: "Removing the cancerous tissue plus a margin of healthy tissue (usually at least 1 cm)",
                },
                {
                  heading: "Radical Partial Vulvectomy",
                  text: "Removing a larger section of the vulva (one or both labia, and sometimes the clitoris)",
                },
                {
                  heading: "Radical Vulvectomy",
                  text: "Removing the entire vulva, including inner and outer labia, and possibly the clitoris",
                },
              ],
              additional: [
                {
                  icon: <FaBolt className="h-6 w-6" />,
                  heading: "Radiation Therapy",
                  text: "Often used with surgery to destroy remaining cancer cells",
                },
                {
                  icon: <FaPills className="h-6 w-6" />,
                  heading: "Chemotherapy",
                  text: "May be combined with radiation or used for advanced cases",
                },
              ],
            }}
          />
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-20 p-8 bg-gray-50 rounded-2xl">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            This information is for educational purposes only and should not replace professional medical advice.
            Always consult with your healthcare provider for personalized medical guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

// Step Card Component
const StepCard = ({
  step,
  color,
  title,
  icon,
  description,
  points,
  alert,
  subsections,
  tags,
  treatments,
}) => {
  const colors = {
    red: {
      bg: "bg-red-50",
      border: "border-red-100",
      text: "text-red-600",
      circle: "bg-red-500",
      tag: "bg-red-100 text-red-800",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-600",
      circle: "bg-blue-500",
      tag: "bg-blue-100 text-blue-800",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-100",
      text: "text-green-600",
      circle: "bg-green-500",
      tag: "bg-green-100 text-green-800",
    },
  };

  return (
    <div className="relative mb-20">
      <div className="lg:flex lg:items-start lg:gap-12">
        {/* Step Circle */}
        <div
          className={`hidden lg:flex items-center justify-center w-16 h-16 ${colors[color].circle} rounded-full text-white mb-8 lg:mb-0 relative z-10`}
        >
          {icon}
        </div>

        {/* Card */}
        <div className="flex-1">
          <div className={`${colors[color].bg} rounded-2xl p-8 border ${colors[color].border}`}>
            <div className="mb-6">
              <span className={`${colors[color].text} font-semibold text-sm uppercase tracking-wide`}>
                {step}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">{title}</h2>
            </div>

            {description && <p className="text-gray-700 mb-8 text-lg">{description}</p>}

            {/* Symptom Points */}
            {points && (
              <div className="grid md:grid-cols-2 gap-4">
                {points.map((point, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 bg-white rounded-lg border ${colors[color].border}`}>
                    <FaCheckCircle className={`h-5 w-5 ${colors[color].text} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-800">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Alert Box */}
            {alert && (
              <div className="mt-8 p-6 rounded-xl border border-red-200 bg-red-50">
                <p className="text-red-700 font-semibold text-lg">
                      {alert}
                </p>
             </div>

            )}

            {/* Subsections */}
            {subsections &&
              subsections.map((section, i) => (
                <div key={i} className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, j) => (
                      <div key={j} className={`flex items-start gap-6 p-6 bg-white rounded-xl border ${colors[color].border}`}>
                        <div className={`flex items-center justify-center w-12 h-12 ${colors[color].tag.split(" ")[0]} rounded-lg ${colors[color].text} flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.heading}</h4>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Tags */}
            {tags && (
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span key={i} className={`px-4 py-2 rounded-md text-sm font-medium ${colors[color].tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Treatments */}
            {treatments && (
              <div className="space-y-8">
                {/* Surgery */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex items-center justify-center w-8 h-8 ${colors[color].circle} rounded-full text-white text-sm font-bold`}>
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Surgery (Primary Treatment)</h3>
                  </div>
                  <div className="grid gap-4">
                    {treatments.surgery.map((s, i) => (
                      <div key={i} className={`p-6 bg-white rounded-xl border ${colors[color].border}`}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{s.heading}</h4>
                        <p className="text-gray-700">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex items-center justify-center w-8 h-8 ${colors[color].circle} rounded-full text-white text-sm font-bold`}>
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Additional Treatments</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {treatments.additional.map((a, i) => (
                      <div key={i} className={`flex items-start gap-4 p-6 bg-white rounded-xl border ${colors[color].border}`}>
                        <div className={`flex items-center justify-center w-12 h-12 ${colors[color].tag.split(" ")[0]} rounded-lg ${colors[color].text} flex-shrink-0`}>
                          {a.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{a.heading}</h4>
                          <p className="text-gray-700">{a.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VulvarCancerPage;
