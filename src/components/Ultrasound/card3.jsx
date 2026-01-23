import React from 'react';
import { Zap, Monitor, Stethoscope, Shield, CircleCheck } from 'lucide-react';

const UltrasoundCard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="UltrasoundCard3">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Types of Gynaecological Ultrasound
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transabdominal Ultrasound */}
            <div className="p-4 bg-primary/5 rounded-lg border hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-[0_0_25px_rgba(255,151,179,0.5)]  hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Transabdominal Ultrasound
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">The probe (transducer) is placed on your lower tummy</p>
                <div className="space-y-2">
                  {[
                    "Gives a broad view of pelvic organs",
                    "Non-invasive external scan",
                    "May require full bladder"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transvaginal Ultrasound */}
            <div className="p-4 bg-accent/5 rounded-lg border hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-[0_0_25px_rgba(255,151,179,0.5)]  hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <h4 className="font-semibold text-accent-foreground mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                Transvaginal Ultrasound
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">The probe is gently inserted into the vagina</p>
                <div className="space-y-2">
                  {[
                    "Gives closer, more detailed images",
                    "Often used for fertility assessment",
                    "Better for early pregnancy monitoring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CircleCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Safety Information
            </h4>
            <p className="text-sm leading-relaxed">
              Both types are <strong>safe and usually painless</strong>. There are no known risks or side effects from diagnostic ultrasound at the levels used in medical imaging.
            </p>
          </div>

          {/* Learn About the Procedure Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(4);
                setActiveButton(3);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-black justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn About the Procedure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard3;
