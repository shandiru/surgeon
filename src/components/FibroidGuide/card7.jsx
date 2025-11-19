'use client';

import { Pill, User } from "lucide-react";

const FibroidGuidecard7 = ({ setShowCard, setActiveButton }) => {

    const pink = "#FFC5D3"
  const deepPink = "#FF4B8B"


  return (
    <div className="space-y-6 pb-10 px-3">
      {/* Outer Card */}
      <div className="bg-white max-w-5xl mx-auto text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Card Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Pill className="text-3xl" style={{ color: deepPink }} />
            <h2 className="font-bold text-2xl md:text-3xl" style={{ color: deepPink }}>
              Treatment Options
            </h2>
          </div>
          <p className="text-base text-gray-600">
            Treatment depends on your symptoms and their severity:
          </p>
        </div>

        {/* Card Content */}
        <div className="space-y-10">
          {/* Medication Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ color: deepPink }}>
              Medication
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Anti-inflammatory medicines", desc: "Relieve pain" },
                { title: "Tranexamic acid", desc: "Reduces bleeding" },
                { title: "Hormonal treatments", desc: "Pill, coil, progesterone tablets – regulate periods" },
                { title: "GnRH analogues", desc: "Shrink fibroids (often used before surgery)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ backgroundColor: pink }} />

          {/* Procedures Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ color: deepPink }}>
              Procedures & Surgery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Myomectomy", desc: "Removes fibroids while keeping the womb" },
                { title: "Hysterectomy", desc: "Removes the womb (only if symptoms are severe & no further pregnancies planned)" },
                { title: "Transcervical resection", desc: "Removes submucosal fibroids through the cervix" },
                { title: "Uterine artery embolisation (UAE)", desc: "Blocks blood supply to fibroids to shrink them" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Advice Note */}
          <div
            className="rounded-xl p-5 text-center shadow-md"
            style={{ backgroundColor: pink }}
          >
            <p className="font-medium flex items-center gap-2 justify-center" style={{ color: deepPink }}>
              <User className="text-2xl" />
              Your doctor will help you choose the safest and most effective option
              based on your symptoms and fertility plans.
            </p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="pt-8 flex justify-center">
        <button
          onClick={() => {
            setShowCard(8);
            setActiveButton(7);
          }}
          className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
        >
          Continue to Next Section
        </button>
      </div>
    </div>
  );
};

export default FibroidGuidecard7;
