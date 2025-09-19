import React from 'react';

const EmotionalWellbeingSupport = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-[#d60d64]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">💖 Emotional Wellbeing &amp; Support</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Your emotional health is just as important as your physical health
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-5 h-5 text-primary">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg">It's Normal to Feel Worried</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lumps on intimate areas can feel worrying or embarrassing - these feelings are completely normal and valid.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5 text-primary">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg">Most Are Harmless</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The vast majority of lumps are not cancer and are easily treatable or resolve on their own.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5 text-primary">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg">Ask Questions</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It's okay to ask questions and get reassurance from your healthcare provider - we are here to help.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-primary">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="font-semibold text-lg">You're Not Alone</div>
                </div>
              </div>
              <div className="px-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Many people experience similar concerns. Support groups and resources are available.
                </p>
              </div>
            </div>
          </div>

          {/* Remember Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">💗 Remember</h3>
              <div className="space-y-2 mb-6">
                <p className="text-muted-foreground">• Vulvar and vaginal lumps are common and usually harmless</p>
                <p className="text-muted-foreground">• Most are not cancerous and are easily treatable</p>
                <p className="text-muted-foreground">• Getting checked gives peace of mind and fast treatment if needed</p>
                <p className="text-muted-foreground font-medium">• If you notice a lump or bump, book an appointment — don't wait and worry alone</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="inline-flex items-center bg-[#FF4B8B]/10 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                  Book Appointment
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                  Find Support Groups
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalWellbeingSupport;
