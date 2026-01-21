"use client";
import { ShieldCheck, Heart, Star, PlusCircle } from 'lucide-react';

const OvarianCancerGuidecard7 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-14">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10
        flex flex-col gap-6 rounded-xl border border-[#FF4B8B]/10 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">

        {/* Card Header */}
        <div
          className="grid auto-rows-min grid-rows-[auto_auto] items-start
          gap-1.5 px-6 border-b pb-6"
          style={{ borderColor: "#FFC5D3" }}
        >
          <div className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B]">
            <ShieldCheck className="w-6 h-6 text-[#FF4B8B]" />
            Prevention & Early Detection
          </div>
          <div className="text-muted-foreground text-sm">
            While there is no screening test for ovarian cancer, several steps can lower risk.
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">

          {/* Prevention Overview */}
          <div className="p-4 rounded-lg bg-[#FF4B8B]/10 border border-[#FF4B8B]/10">
            <h4 className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B]">
              <Heart className="w-5 h-5 inline-block text-[#FF4B8B]" />
              Why Prevention Matters
            </h4>
            <p className="text-sm leading-relaxed text-[#BB125B]">
              Ovarian cancer often develops silently. While there is no reliable screening test,
              knowing your risks and making informed choices can significantly reduce the likelihood.
            </p>
          </div>

          {/* Prevention Steps */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#FF4B8B]">
                Ways to Reduce Your Risk:
              </h4>
              <div className="space-y-2">
                {[
                  'Genetic testing if you have a strong family history',
                  'Using oral contraceptives (long-term use lowers risk)',
                  'Maintaining a healthy body weight',
                  'Treating endometriosis early',
                  'Considering risk-reducing surgery (BRCA1/BRCA2 carriers)',
                  'Being aware of symptoms and seeking prompt evaluation'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm"
                  >
                    <PlusCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FF4B8B]" />
                    <span className="text-[#BB125B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder Box */}
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "#FFE6EE",
                border: "1px solid #FFC5D3"
              }}
            >
              <h4 className="leading-none font-semibold flex items-center gap-2" style={{ color: "#FF4B8B" }}>
                <Heart className="w-5 h-5 inline-block" />
                Remember
              </h4>
              <ul className="text-sm space-y-2 text-[#7a2f4f]">
                <li>• There is *no routine screening test* for ovarian cancer.</li>
                <li>• Genetic testing can guide personalised prevention.</li>
                <li>• Paying attention to persistent bloating or pelvic pain is essential.</li>
                <li>• Early medical evaluation improves outcomes.</li>
              </ul>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="p-4 rounded-lg bg-white border border-[#FF4B8B]/10">
            <h4 className="leading-none font-semibold flex items-center gap-2 text-[#FF4B8B]">
              <Star className="w-5 h-5 inline-block text-[#FF4B8B]" />
              Key Takeaway
            </h4>
            <p className="text-sm leading-relaxed text-[#BB125B]">
              Although ovarian cancer cannot always be prevented, knowing your risk, staying
              alert to symptoms, and seeking medical advice early can make a meaningful difference.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-3">
            <button
              onClick={() => {
                setShowCard(8);
                setActiveButton(7);
              }}
              className="inline-flex items-center bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 
                         justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium 
                         transition-all h-9 px-4 py-2 w-full text-white"
            >
              Continue to Final Summary
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuidecard7;
