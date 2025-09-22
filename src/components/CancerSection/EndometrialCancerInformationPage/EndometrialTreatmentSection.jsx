'use client'

import React from 'react';

const TreatmentAndHomeCare = () => {
  return (
    <section id="treatment" className="py-16 bg-background">
      <div className="container mx-auto px-4 ">
        <div className="max-w-6xl mx-auto text-[#d60d64]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">💊 Treatment &amp; Home Care</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Most lumps are easy to diagnose and treat quickly with the right approach
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Diagnosis Process Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg hover:bg-[#fce3e8] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] transition-all duration-300"
              style={{ borderColor: '#FFC5D3' }}
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-stethoscope w-6 h-6 text-primary"
                  >
                    <path d="M11 2v2"></path>
                    <path d="M5 2v2"></path>
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                    <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                    <circle cx="20" cy="10" r="2"></circle>
                  </svg>
                </div>
                <div className="font-semibold text-lg">Diagnosis Process</div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-secondary text-secondary-foreground">
                  Professional Care
                </span>
              </div>
              <div className="px-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Visual examination of the vulva and vagina
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Swab test for infection or abnormal cells
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Imaging scans (transvaginal or abdominal ultrasound)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Biopsy (small tissue sample) if needed to rule out cancer
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Medical Treatment Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg hover:bg-[#fce3e8] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] transition-all duration-300"
              style={{ borderColor: '#FFC5D3' }}
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pill w-6 h-6 text-primary"
                  >
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                    <path d="m8.5 8.5 7 7"></path>
                  </svg>
                </div>
                <div className="font-semibold text-lg">Medical Treatment</div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-secondary text-secondary-foreground">
                  As Needed
                </span>
              </div>
              <div className="px-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Many lumps need no treatment and resolve naturally
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Antibiotics for bacterial infections
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Drainage of cysts when necessary
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Removal of warts or polyps if problematic
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Self-Care Tips Card */}
            <div
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg hover:bg-[#fce3e8] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] transition-all duration-300"
              style={{ borderColor: '#FFC5D3' }}
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-house w-6 h-6 text-primary"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <div className="font-semibold text-lg">Self-Care Tips</div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-secondary text-secondary-foreground">
                  Home Care
                </span>
              </div>
              <div className="px-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Take warm baths to help cysts drain naturally
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Wear loose clothing and breathable cotton underwear
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Avoid shaving or friction on the affected area
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5 text-xs">•</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Avoid sexual contact if lump is painful or infected
                    </span>
                  </li>
                </ul>
              </div>
            </div>

              {/* Follow-Up Care Card */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg hover:bg-[#fce3e8] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] transition-all duration-300">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="font-semibold text-lg">Follow-Up Care</div>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-secondary text-secondary-foreground">Ongoing Support</span>
              </div>
              <div className="px-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2"><span className="text-primary mt-1.5 text-xs">•</span><span className="text-sm text-muted-foreground leading-relaxed">Most conditions are easily treated or monitored</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary mt-1.5 text-xs">•</span><span className="text-sm text-muted-foreground leading-relaxed">Regular follow-up checks to ensure resolution</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary mt-1.5 text-xs">•</span><span className="text-sm text-muted-foreground leading-relaxed">You can request a chaperone during appointments</span></li>
                  <li className="flex items-start space-x-2"><span className="text-primary mt-1.5 text-xs">•</span><span className="text-sm text-muted-foreground leading-relaxed">Early STI treatment prevents complications</span></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#FF4B8B]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-500 text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Note</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If an STI is diagnosed, early treatment helps prevent complications and protects partners. Most conditions are easily treated or monitored with proper medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentAndHomeCare;
