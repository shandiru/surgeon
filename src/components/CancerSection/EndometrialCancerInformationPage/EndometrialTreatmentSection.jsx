import { LuShield } from "react-icons/lu";

export default function TreatmentSection() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <section className="mb-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <LuShield className="h-8 w-8" style={{ color: deepPink }} />
          <h2 className="text-3xl font-bold" style={{ color: deepPink }}>
            Treatment for Endometrial Cancer
          </h2>
        </div>

        {/* Treatment Options Card */}
        <div
          className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 shadow-sm"
         
        >
          {/* Card Header */}
          <div className="px-6 grid gap-1.5">
            <h3 className="font-semibold text-xl" style={{ color: deepPink }}>
              Treatment Options
            </h3>
            <p className="text-sm text-gray-600">
              Treatment depends on factors such as stage, tumor size, and cancer
              type.
            </p>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <p className="mb-6 text-sm text-gray-600">
              A gynaecological oncologist may recommend:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div
                  className="p-4 border rounded-lg bg-white"
                  style={{ borderColor: pink }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Surgery
                  </h4>
                  <p className="text-sm text-gray-700">
                    Often the first-line treatment to remove the uterus
                    (hysterectomy), sometimes including ovaries and fallopian
                    tubes.
                  </p>
                </div>

                <div
                  className="p-4 border rounded-lg bg-white"
                  style={{ borderColor: pink }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Radiation Therapy
                  </h4>
                  <p className="text-sm text-gray-700">
                    High-energy rays used to target and destroy cancer cells.
                  </p>
                </div>

                <div
                  className="p-4 border rounded-lg bg-white"
                  style={{ borderColor: pink }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Chemotherapy
                  </h4>
                  <p className="text-sm text-gray-700">
                    Anti-cancer drugs that destroy or slow cancer cell growth.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div
                  className="p-4 border rounded-lg bg-white"
                  style={{ borderColor: pink }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Hormone Therapy
                  </h4>
                  <p className="text-sm text-gray-700">
                    Medicines that block or lower hormones fueling cancer
                    growth.
                  </p>
                </div>

                <div
                  className="p-4 border rounded-lg bg-white"
                  style={{ borderColor: pink }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Combination Therapy
                  </h4>
                  <p className="text-sm text-gray-700">
                    A tailored mix of treatments for the best results.
                  </p>
                </div>

                <div
                  className="p-4 rounded-lg border"
                  style={{ backgroundColor: pink, borderColor: pink }}
                >
                  <p className="text-sm font-medium " style={{ color: deepPink }}>
                    <strong>Personalized Care:</strong> Every treatment plan is
                    customized to provide the best outcome for your health and
                    recovery.
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
