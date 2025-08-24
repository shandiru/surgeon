import { LuMicroscope } from "react-icons/lu";

export default function CervicalCancerDiagnosis() {
  const methods = [
    {
      title: "Repeat Pap smear or liquid-based cytology",
      description: "to confirm abnormal cells",
    },
    {
      title: "Biopsy",
      description:
        "a small tissue sample is removed and examined under a microscope",
    },
    {
      title: "Colposcopy",
      description:
        "the cervix is examined with a lighted magnifying instrument; a biopsy may also be done",
    },
    {
      title: "Endo-cervical curettage",
      description:
        "tissue is taken from the cervical canal with a spoon-shaped tool, then checked for abnormalities",
    },
    {
      title: "Cone biopsy",
      description:
        "a larger tissue sample is removed to confirm diagnosis or as an early treatment to remove precancerous/cancerous cells",
    },
  ];

  const imagingTests = ["X-rays", "CT scans", "MRIs"];

  return (
    <div className="mt-10 px-6">
      <div className="bg-[#e6fafa] text-[#083c3d] flex flex-col gap-6 rounded-xl border border-[#c9e7e7] border-l-4 border-l-[#15938e] shadow-sm py-6">
        {/* Header */}
        <div className="px-6 grid gap-1.5">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LuMicroscope className="text-[#15938e] w-6 h-6" />
            How is Cervical Cancer Diagnosed?
          </div>
          <p className="text-[#4b6b6c]">
            If a Pap test shows abnormal results, your doctor may recommend further tests.
          </p>
        </div>

        {/* Common Diagnostic Methods */}
        <div className="px-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Common Diagnostic Methods
            </h3>
            <div className="grid gap-4">
              {methods.map((method, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 bg-[#e6fafa] border border-[#d9eeee] rounded-lg hover:shadow-md hover:ring-1 hover:ring-[#15938e] transition-all"
                >
                  <div className="w-2 h-2 bg-[#15938e] rounded-full flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-medium">{method.title}</h4>
                    <p className="text-sm text-[#4b6b6c] mt-1">– {method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#c9e7e7]" />

          {/* Additional Imaging Tests */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Additional Imaging Tests</h3>
            <p className="text-[#4b6b6c] mb-4">
              If doctors suspect the cancer has spread, additional imaging tests may be ordered:
            </p>
            <div className="flex flex-wrap gap-2">
              {imagingTests.map((test, idx) => (
                <span
                  key={idx}
                  className="text-sm border bg-[#d8f4f4] text-[#083c3d] px-2 py-0.5 rounded-md font-medium"
                >
                  {test}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
