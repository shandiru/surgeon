import React, { useState } from "react";
import { X, Plus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item expanded by default

  const faqs = [
    {
      question: "What are the benefits of robotic surgery?",
      answer:
        "Robotic surgery offers enhanced precision, reduced blood loss, faster recovery times, and smaller incisions compared to traditional surgery. The 3D high-definition visualization provides better accuracy, and patients typically experience less post-operative pain and shorter hospital stays.",
    },
    {
      question: "How long does recovery take after robotic surgery?",
      answer:
        "Recovery time varies depending on the specific procedure, but generally robotic surgery patients experience faster recovery compared to traditional open surgery. Most patients can return to normal activities within 2-4 weeks, though this depends on the complexity of the procedure and individual patient factors.",
    },
    {
      question: "Is robotic surgery covered by insurance?",
      answer:
        "Most insurance plans cover robotic surgery when it is medically necessary. Coverage may vary depending on your specific insurance provider and plan. We recommend contacting your insurance company directly to confirm coverage for your specific procedure.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling our office or using our online booking system. During the consultation, we will discuss your condition, treatment options, and determine if robotic surgery is the best approach for your specific needs.",
    },
    {
      question: "What types of procedures can be performed robotically?",
      answer:
        "Robotic surgery is used for various gynecological procedures including hysterectomy, myomectomy (fibroid removal), treatment of endometrial and cervical cancers, ovarian cyst removal, and complex benign conditions. Ketan specializes in robotic-assisted procedures for these conditions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Heading and Introduction */}
            <div className="space-y-6">
              <h2 className="text-hero md:text-5xl font-bold text-black leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-body-large text-black leading-relaxed">
                Our experienced team is committed to ensuring that you feel comfortable and
                confident in our care. Whether you need routine consultations, robotic surgery
                procedures, or follow-up care, we're here to answer all your questions and provide
                the support you need throughout your healthcare journey.
              </p>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-5 md:p-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-body-large text-black font-bold pr-4 flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <X className="w-5 h-5 text-black" />
                      ) : (
                        <Plus className="w-5 h-5 text-black" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-body text-black leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
