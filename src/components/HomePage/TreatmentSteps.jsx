import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Stethoscope,
  FlaskConical,
  ClipboardList,
  CalendarCheck,
  CreditCard,
  PhoneCall,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Initial Consultation",
    desc: "Discuss your symptoms, medical history and concerns in a confidential, relaxed setting.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Investigations & Diagnosis",
    desc: "Targeted tests and scans to reach an accurate diagnosis as quickly as possible.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Treatment Options",
    desc: "A clear, personalised plan explained in full so you can make informed decisions.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Follow-up Care",
    desc: "Ongoing monitoring and support to ensure your recovery and long-term wellbeing.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Fees & Insurance",
    desc: "Transparent fee information for self-funding and insured patients, with no surprises.",
  },
  {
    number: "06",
    icon: PhoneCall,
    title: "Book Appointment",
    desc: "Ready to take the next step? Contact us to arrange your consultation today.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
  },
};

export default function TreatmentSteps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-white py-16 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-body-small text-primary-pink font-semibold mb-2 uppercase tracking-widest">
            Your journey with Mr Gajjar
          </p>
          <h2 className="text-section font-extrabold text-[#1B123D]">
            Steps to Your Treatment
          </h2>
        </motion.div>

        {/* ── Desktop layout ── */}
        <div className="hidden lg:block">
          {/* Icon row with connecting line */}
          <div className="relative flex items-center justify-between mb-8 px-8">
            {/* Background line */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-gray-100" />
            {/* Animated fill line */}
            <motion.div
              className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-primary-pink via-primary-pink/60 to-primary-pink/20 origin-left"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative z-10 flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-primary-pink flex items-center justify-center shadow-[0_0_24px_rgba(255,75,139,0.35)] cursor-default"
                    whileHover={{ scale: 1.12, boxShadow: "0 0 32px rgba(255,75,139,0.55)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon className="text-white w-6 h-6" />
                  </motion.div>
                  <span className="text-xs font-bold text-primary-pink/50 tracking-widest">
                    {step.number}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Card row */}
          <motion.div
            className="grid grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group bg-light-pink-1 rounded-2xl p-5 hover:bg-primary-pink transition-colors duration-300 cursor-default"
              >
                <h3 className="text-sm font-bold text-[#1B123D] group-hover:text-white mb-2 transition-colors duration-300 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mobile layout ── */}
        <motion.div
          className="lg:hidden flex flex-col gap-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative flex items-start gap-5 pb-8"
              >
                {/* Vertical line */}
                {!isLast && (
                  <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-pink/40 to-primary-pink/10" />
                )}

                {/* Icon */}
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-primary-pink flex items-center justify-center shadow-[0_0_16px_rgba(255,75,139,0.3)]">
                  <Icon className="text-white w-4 h-4" />
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <span className="text-xs font-bold text-primary-pink/50 tracking-widest">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-[#1B123D] mt-0.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
