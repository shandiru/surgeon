import { LuShield } from "react-icons/lu";

export default function TreatmentSection() {
  return (
    <section className="mb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <LuShield className="h-8 w-8 text-[#6e993c]" />
          <h2 className="text-3xl font-bold text-[#1c1c1c]">
            Treatment for Endometrial Cancer
          </h2>
        </div>

        {/* Treatment Options Card */}
        <div className="bg-[#eaf6f0] text-[#0c0c0c] flex flex-col gap-6 rounded-xl border border-[#d2e8dd] py-6 shadow-sm">
          {/* Card Header */}
          <div className="px-6 grid gap-1.5">
            <h3 className="font-semibold text-xl">Treatment Options</h3>
            <p className="text-sm text-[#6b7280]">
              Treatment depends on factors such as stage, tumor size, and cancer type.
            </p>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <p className="mb-6 text-sm text-[#6b7280]">
              A gynaecological oncologist may recommend:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="p-4 border border-[#d6e7dd] rounded-lg bg-white">
                  <h4 className="font-semibold text-[#0c5e46] mb-2">Surgery</h4>
                  <p className="text-sm text-[#4b5563]">
                    Often the first-line treatment to remove the uterus (hysterectomy),
                    sometimes including ovaries and fallopian tubes
                  </p>
                </div>

                <div className="p-4 border border-[#d6e7dd] rounded-lg bg-white">
                  <h4 className="font-semibold text-[#0c5e46] mb-2">Radiation Therapy</h4>
                  <p className="text-sm text-[#4b5563]">
                    High-energy rays to target cancer cells
                  </p>
                </div>

                <div className="p-4 border border-[#d6e7dd] rounded-lg bg-white">
                  <h4 className="font-semibold text-[#0c5e46] mb-2">Chemotherapy</h4>
                  <p className="text-sm text-[#4b5563]">
                    Drugs to destroy or slow cancer cell growth
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="p-4 border border-[#d6e7dd] rounded-lg bg-white">
                  <h4 className="font-semibold text-[#0c5e46] mb-2">Hormone Therapy</h4>
                  <p className="text-sm text-[#4b5563]">
                    Medicines to block hormones that fuel cancer growth
                  </p>
                </div>

                <div className="p-4 border border-[#d6e7dd] rounded-lg bg-white">
                  <h4 className="font-semibold text-[#0c5e46] mb-2">Combination Therapy</h4>
                  <p className="text-sm text-[#4b5563]">
                    A tailored mix of treatments for best results
                  </p>
                </div>

                <div className="p-4 bg-[#f4fbe4] border border-[#d6e7dd] rounded-lg">
                  <p className="text-sm font-medium text-[#6e993c]">
                    <strong>Personalized Care:</strong> Every treatment plan is personalised
                    to give the best outcome for your health and recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
