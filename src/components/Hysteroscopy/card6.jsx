import React from 'react';
import { CircleAlert, Shield, Phone } from 'lucide-react';

const Hysteroscopycard6 = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Header Section */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            When to Seek Medical Advice
          </div>
          <div className="text-muted-foreground text-sm">Important warning signs to watch for</div>
        </div>

        {/* Content Section */}
        <div className="px-6 space-y-4">
          {/* Urgent Warning Section */}
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <CircleAlert className="w-4 h-4" />
              Contact Your Doctor Urgently If You Have:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-background rounded border">
                <span className="text-lg">🩸</span>
                <div>
                  <h5 className="font-medium text-destructive">Heavy bleeding</h5>
                  <p className="text-sm text-muted-foreground">Soaking pads or passing clots</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background rounded border">
                <span className="text-lg">🌡️</span>
                <div>
                  <h5 className="font-medium text-destructive">Fever</h5>
                  <p className="text-sm text-muted-foreground">38°C / 100.4°F or above</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background rounded border">
                <span className="text-lg">⚡</span>
                <div>
                  <h5 className="font-medium text-destructive">Severe abdominal pain</h5>
                  <p className="text-sm text-muted-foreground">Not eased by painkillers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background rounded border">
                <span className="text-lg">⚠️</span>
                <div>
                  <h5 className="font-medium text-destructive">Foul-smelling discharge</h5>
                  <p className="text-sm text-muted-foreground">May indicate infection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">📞 Emergency Contact</h4>
            <p className="text-sm">
              These symptoms may be signs of infection or complications (which are rare). Don't hesitate to contact your healthcare provider if you're concerned about any symptoms.
            </p>
          </div>

          {/* Normal vs Concerning Section */}
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-accent-foreground mb-2">✅ Normal vs. Concerning</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-primary mb-1">Normal (Don't worry):</h5>
                <ul className="space-y-1">
                  <li>• Mild cramping</li>
                  <li>• Light spotting for a few days</li>
                  <li>• Slight discharge</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-destructive mb-1">Concerning (Call doctor):</h5>
                <ul className="space-y-1">
                  <li>• Heavy bleeding</li>
                  <li>• High fever</li>
                  <li>• Severe pain</li>
                  <li>• Bad-smelling discharge</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complete Guide Button */}
          <div className="pt-4">
            <button
              data-slot="button"
              className="inline-flex items-center bg-[#FF4B8B] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Complete Guide ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hysteroscopycard6;
