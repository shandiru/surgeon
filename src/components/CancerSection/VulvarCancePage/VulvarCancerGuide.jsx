import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaExclamationTriangle,
  FaHeartbeat,
  FaCheckCircle,
  FaStethoscope,
  FaSearch,
  FaCut,
  FaBolt,
  FaPills,
} from "react-icons/fa";

const VulvarCancerPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens once when scrolled
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE6EA]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div
          className="flex flex-col lg:flex-row justify-center md:gap-20 items-center mb-16"
          data-aos="fade-up"
        >
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "#FF4B8B", color: "#fff" }}
            >
              <FaHeartbeat className="h-4 w-4" /> Medical Information Guide
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#FF4B8B] mb-6">
              Vulvar Cancer
            </h1>
            <p className="text-lg lg:text-xl text-[#7a2f4f] leading-relaxed">
              A comprehensive guide covering symptoms, diagnosis,
              <br /> and treatment options
            </p>
          </div>

          {/* Responsive Image */}
          <img
            src="/vulvar.png"
            className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-xl"
            alt="Vulvar Cancer Image"
            data-aos="fade-left"
          />
        </div>

        {/* Timeline Vertical Line */}
        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 hidden lg:block"
            style={{ backgroundColor: "#FF4B8B" }}
          ></div>

          {/* Step 1: Symptoms */}
          <StepCard
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
            data-aos="fade-up"
          />

          {/* Step 2: Diagnosis */}
          <StepCard
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
            data-aos="fade-up"
          />

          {/* Step 3: Treatment */}
          <StepCard
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
            data-aos="fade-up"
          />
        </div>

        {/* Disclaimer */}
        <div
          className="text-center mt-20 p-8 rounded-2xl"
          style={{ backgroundColor: "#FF4B8B" }}
          data-aos="fade-up"
        >
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            This information is for educational purposes only and should not replace professional medical advice.
            Always consult with your healthcare provider for personalized medical guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({
  step,
  title,
  icon,
  description,
  points,
  alert,
  subsections,
  tags,
  treatments,
}) => {
  const primaryPink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <div className="relative mb-20" data-aos="fade-up">
      <div className="lg:flex lg:items-start lg:gap-12">
        {/* Step Circle */}
        <div
          className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full text-white mb-8 lg:mb-0 relative z-10"
          style={{ backgroundColor: deepPink }}
        >
          {icon}
        </div>

        {/* Card */}
        <div className="flex-1">
          <div
            className="rounded-2xl p-8 border transition-all duration-300 active:bg-[#FFF5F8] active:shadow-lg hover:bg-[#FFF5F8] hover:shadow-lg"
            style={{ backgroundColor: "#fff", borderColor: primaryPink }}
          >
            <div className="mb-6">
              <span
                className="font-semibold text-sm uppercase tracking-wide"
                style={{ color: deepPink }}
              >
                {step}
              </span>
              <h2 className="text-3xl font-bold text-[#FF4B8B] mt-2">{title}</h2>
            </div>

            {description && (
              <p className="text-[#7a2f4f] mb-8 text-lg">{description}</p>
            )}

            {/* Points with Hover Effect */}
            {points && (
              <div className="grid md:grid-cols-2 gap-4">
                {points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border transition-all duration-300 active:bg-[#FFF5F8] active:shadow-lg hover:bg-[#FFF5F8] hover:shadow-lg"
                    style={{ borderColor: primaryPink }}
                  >
                    <FaCheckCircle
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: deepPink }}
                    />
                    <span className="text-[#7a2f4f]">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Alert Box */}
            {alert && (
              <div
                className="mt-8 p-6 rounded-xl"
                style={{ backgroundColor: deepPink }}
              >
                <p className="text-white font-semibold text-lg">{alert}</p>
              </div>
            )}

            {/* Subsections with Hover Effect */}
            {subsections &&
              subsections.map((section, i) => (
                <div key={i} className="space-y-6 mt-8">
                  <h3 className="text-xl font-semibold text-[#FF4B8B]">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-6 p-6 bg-white rounded-xl border transition-all duration-300 active:bg-[#FFF5F8] active:shadow-lg hover:bg-[#FFF5F8] hover:shadow-lg"
                        style={{ borderColor: primaryPink }}
                      >
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: deepPink, color: "#fff" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#FF4B8B] mb-2">
                            {item.heading}
                          </h4>
                          <p className="text-[#7a2f4f]">{item.text}</p>
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
                  <span
                    key={i}
                    className="px-4 py-2 rounded-md text-sm font-medium"
                    style={{ backgroundColor: deepPink, color: "#fff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Treatments with Hover Effect */}
            {treatments && (
              <div className="space-y-8 mt-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: deepPink }}
                    >
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-[#FF4B8B]">
                      Surgery (Primary Treatment)
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    {treatments.surgery.map((s, i) => (
                      <div
                        key={i}
                        className="p-6 bg-white rounded-xl border transition-all duration-300 active:bg-[#FFF5F8] active:shadow-lg hover:bg-[#FFF5F8] hover:shadow-lg"
                        style={{ borderColor: primaryPink }}
                      >
                        <h4 className="text-lg font-semibold text-[#FF4B8B] mb-2">
                          {s.heading}
                        </h4>
                        <p className="text-[#7a2f4f]">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: deepPink }}
                    >
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-[#FF4B8B]">
                      Additional Treatments
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {treatments.additional.map((a, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-6 bg-white rounded-xl border transition-all duration-300 active:bg-[#FFF5F8] active:shadow-lg hover:bg-[#FFF5F8] hover:shadow-lg"
                        style={{ borderColor: primaryPink }}
                      >
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: deepPink, color: "#fff" }}
                        >
                          {a.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#FF4B8B] mb-2">
                            {a.heading}
                          </h4>
                          <p className="text-[#7a2f4f]">{a.text}</p>
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
