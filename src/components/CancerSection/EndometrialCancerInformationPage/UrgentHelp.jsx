import React from 'react';

const UrgentHelp = () => {
  return (
    <section id="urgent-help" className="py-16 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-[#d60d64] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🚨 When to Seek Urgent Help</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Get medical advice quickly if you notice any of these warning signs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 text-destructive">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg text-destructive">Rapidly growing lump</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Any lump that increases in size quickly over days or weeks
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5 text-destructive">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg text-destructive">Severe pain, fever or spreading redness</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Signs of serious infection that need immediate treatment
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5 text-destructive">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg text-destructive">Bleeding that won't stop</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Persistent or heavy bleeding from the affected area
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-destructive">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg text-destructive">Lumps appearing after menopause</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  New lumps in post-menopausal women require prompt evaluation
                </p>
              </div>
            </div>
          </div>

          {/* Urgent Help Call To Action */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-destructive">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-destructive">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground">Don't wait if you're experiencing urgent symptoms</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center bg-[#FF4B8B]/10 justify-center gap-2 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-[#FF4B8B]/90 hover:text-white h-9 px-4 py-2">
                  Call Emergency Services
                </button>
                <button className="inline-flex items-center justify-center px-4 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border shadow-xs bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground border-destructive">
                  Find Urgent Care
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentHelp;
