import React from 'react';
import { Info, CircleCheckBig, TriangleAlert } from 'lucide-react';

const IrregularBleedingContent = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white">
      <div className="space-y-6">
        <div className="bg-white text-[#ff97b3] flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm">
          {/* Card Header */}
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6 border-b border-[#ff97b3]">
            <div className="leading-none font-semibold flex items-center gap-2 text-[#ff97b3]">
              <Info className="w-5 h-5" />
              What Is Irregular Bleeding?
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6 space-y-4 text-[#ff97b3]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Typical Period */}
              <div className="space-y-3">
                <h4 className="font-semibold">A typical period:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-[#ff97b3]" />
                    Occurs every 28 days
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-[#ff97b3]" />
                    Lasts 5–7 days
                  </li>
                </ul>
              </div>

              {/* Irregular Bleeding */}
              <div className="space-y-3">
                <h4 className="font-semibold">Irregular bleeding includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <TriangleAlert className="w-4 h-4 text-[#ff97b3]" />
                    Periods that come more or less often than usual
                  </li>
                  <li className="flex items-center gap-2">
                    <TriangleAlert className="w-4 h-4 text-[#ff97b3]" />
                    Spotting between periods
                  </li>
                  <li className="flex items-center gap-2">
                    <TriangleAlert className="w-4 h-4 text-[#ff97b3]" />
                    Unusually heavy bleeding
                  </li>
                </ul>
              </div>
            </div>

            {/* Alert Box */}
            <div
              role="alert"
              className="relative w-full rounded-lg border border-[#ff97b3] px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-x-3 items-start bg-white text-[#ff97b3]"
            >
              <Info className="w-4 h-4" />
              <div className="col-start-2 grid gap-1 text-sm">
                <p>Any bleeding that doesn't follow your normal pattern may be considered irregular.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IrregularBleedingContent;
