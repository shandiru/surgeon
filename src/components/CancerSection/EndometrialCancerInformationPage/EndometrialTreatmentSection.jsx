'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Stethoscope, Pill, House, Users } from 'lucide-react'; // Importing the required icons

const cards = [
  {
    id: 1,
    title: "Diagnosis Process",
    description: [
      "Visual examination of the vulva and vagina",
      "Swab test for infection or abnormal cells",
      "Imaging scans (transvaginal or abdominal ultrasound)",
      "Biopsy (small tissue sample) if needed to rule out cancer",
    ],
    icon: <Stethoscope className="w-6 h-6 text-primary" />,
    tag: "Professional Care",
    bgColor: "#fce3e8",
    borderColor: "#FFC5D3",
    hoverColor: "#f5a9bd",
  },
  {
    id: 2,
    title: "Medical Treatment",
    description: [
      "Many lumps need no treatment and resolve naturally",
      "Antibiotics for bacterial infections",
      "Drainage of cysts when necessary",
      "Removal of warts or polyps if problematic",
    ],
    icon: <Pill className="w-6 h-6 text-primary" />,
    tag: "As Needed",
    bgColor: "#fce3e8",
    borderColor: "#FFC5D3",
    hoverColor: "#f5a9bd",
  },
  {
    id: 3,
    title: "Self-Care Tips",
    description: [
      "Take warm baths to help cysts drain naturally",
      "Wear loose clothing and breathable cotton underwear",
      "Avoid shaving or friction on the affected area",
      "Avoid sexual contact if lump is painful or infected",
    ],
    icon: <House className="w-6 h-6 text-primary" />,
    tag: "Home Care",
    bgColor: "#fce3e8",
    borderColor: "#FFC5D3",
    hoverColor: "#f5a9bd",
  },
  {
    id: 4,
    title: "Follow-Up Care",
    description: [
      "Most conditions are easily treated or monitored",
      "Regular follow-up checks to ensure resolution",
      "You can request a chaperone during appointments",
      "Early STI treatment prevents complications",
    ],
    icon: <Users className="w-6 h-6 text-primary" />,
    tag: "Ongoing Support",
    bgColor: "#fce3e8",
    borderColor: "#FFC5D3",
    hoverColor: "#f5a9bd",
  },
];

const TreatmentAndHomeCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    })
  }, [])

  return (
    <section id="treatment" className="py-16 bg-background bg-[#FFE6EA]">
      <div className="container mx-auto px-4 ">
        <div className="max-w-6xl mx-auto text-[#d60d64]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Treatment &amp; Home Care</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Most lumps are easy to diagnose and treat quickly with the right approach
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col gap-6 rounded-xl border bg-white py-6 shadow-sm h-full hover:shadow-lg hover:bg-[#fce3e8] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] transition-all duration-300`}
                data-aos="fade-up" // Adding animation to each card
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-startpx-6 text-center">
                  <div className="rounded-full flex items-center justify-center mx-auto">
                    {card.icon}
                  </div>
                  <div className=" mt-3 font-semibold text-lg">{card.title}</div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-1 mt-2 text-xs font-medium whitespace-nowrap shrink-0 w-fit mx-auto bg-secondary text-secondary-foreground">
                    {card.tag}
                  </span>
                </div>
                <div className="px-6">
                  <ul className="space-y-3">
                    {card.description.map((text, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20" data-aos="fade-up">
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
