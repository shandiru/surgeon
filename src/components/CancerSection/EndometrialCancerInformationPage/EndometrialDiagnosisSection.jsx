import { LuStethoscope } from "react-icons/lu";

export default function EndometrialDiagnosisSection() {
  return (
    <section className="mb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6">
          <LuStethoscope className="h-8 w-8 text-[#0c5e46]" />
          <h2 className="text-3xl font-bold text-[#0c0c0c]">
            Diagnosis of Endometrial Cancer
          </h2>
        </div>

        {/* Card Box */}
        <div className="bg-[#eaf6f0] text-[#0c0c0c] flex flex-col gap-6 rounded-2xl border border-[#d2e8dd] py-6 shadow-sm mb-6">
          {/* Card Header */}
          <div className="px-6 grid gap-1.5">
            <div className="font-semibold text-xl">Diagnostic Process</div>
            <div className="text-sm text-[#4b5563]">
              Because symptoms may be similar to other conditions, a thorough evaluation is essential.
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-3">Diagnostic steps may include:</h4>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                  {[
                    "Medical & family history review",
                    "Physical exam – checking for lumps or masses in the abdomen",
                    "Pelvic exam & Pap smear"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center rounded-md border border-[#a8d5be] px-2 py-0.5 text-xs font-semibold text-[#0c5e46] bg-white">
                        {i + 1}
                      </span>
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  {[
                    "Transvaginal ultrasound – imaging of the uterus and reproductive organs",
                    "Endometrial biopsy – taking a tissue sample from the uterus for examination",
                    "Dilation & Curettage (D&C) – removing part of the uterine lining for analysis"
                  ].map((item, i) => (
                    <div key={i + 3} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center rounded-md border border-[#a8d5be] px-2 py-0.5 text-xs font-semibold text-[#0c5e46] bg-white">
                        {i + 4}
                      </span>
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stage Info Box */}
          <div className="mt-4 mx-6 p-4 bg-white rounded-lg border border-[#d2e8dd]">
            <h4 className="font-semibold mb-2">If cancer is confirmed:</h4>
            <p className="text-sm text-[#4b5563] mb-2">
              Your doctor will assign a cancer stage, which describes:
            </p>
            <ul className="text-sm space-y-1 list-disc ml-6">
              <li>How far the cancer has spread (metastasis)</li>
              <li>Tumor size and aggressiveness</li>
              <li>Grading system (letters and numbers) to classify severity</li>
            </ul>
          </div>

          {/* Key Point Box */}
          <div className="mt-4 mx-6 p-4 bg-[#e3f3e9] rounded-lg border border-[#bce1ca]">
            <p className="text-sm font-medium text-[#0c5e46]">
              <strong>Key Point:</strong> Early detection significantly improves treatment success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
