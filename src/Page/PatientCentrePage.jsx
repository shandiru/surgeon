import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import {
  Stethoscope,
  ClipboardList,
  CreditCard,
  Activity,
  Calendar,
  Heart,
  Users,
  CheckCircle,
  Printer,
  Shield,
  ArrowRight,
} from "lucide-react";

// ─── Section metadata ─────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "first-appointment", label: "First Appointment", Icon: Stethoscope },
  { id: "consultation-prep", label: "Prep Template", Icon: ClipboardList },
  { id: "fees-insurance", label: "Fees & Insurance", Icon: CreditCard },
  { id: "conditions-treated", label: "Conditions Treated", Icon: Activity },
  { id: "follow-up-care", label: "Follow-up Care", Icon: Calendar },
  { id: "holistic-care", label: "Holistic Care", Icon: Heart },
  { id: "theatre-team", label: "Theatre Team", Icon: Users },
];

// ─── Reusable sub-components ─────────────────────────────────────────────────

function SectionHeader({ Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-primary-pink flex items-center justify-center shrink-0">
        <Icon size={18} className="text-white" />
      </div>
      <h2 className="text-subsection text-gray-900">{title}</h2>
    </div>
  );
}

function BulletItem({ text }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-700">
      <CheckCircle size={16} className="text-primary-pink mt-0.5 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function FirstAppointmentSection() {
  return (
    <section>
      <SectionHeader
        Icon={Stethoscope}
        title="What to Expect at Your First Appointment"
      />
      <p className="text-body text-gray-600 mb-6 leading-relaxed">
        Your first consultation provides an opportunity to discuss your
        symptoms, concerns and medical history in detail. The aim is to
        understand your condition fully and explore appropriate investigation or
        treatment options.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            During your consultation
          </h3>
          <ul className="space-y-3">
            {[
              "Discuss your symptoms and medical history",
              "Review any previous investigations or scans",
              "Perform an examination where appropriate",
              "Explain possible diagnoses",
              "Discuss treatment options and next steps",
            ].map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>
        </div>

        <div className="bg-light-pink-1 rounded-xl p-6 hover:bg-light-pink-2 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            After your consultation
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            In some cases, additional tests or imaging may be recommended to
            help clarify the diagnosis. These may include:
          </p>
          <ul className="space-y-3">
            {[
              "Blood tests",
              "Ultrasound scans",
              "Further specialist investigations",
            ].map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            A detailed clinic letter summarising the consultation and
            recommendations will normally be shared with your GP.
          </p>
        </div>
      </div>
    </section>
  );
}

function ConsultationPrepSection() {
  const questions = [
    {
      label: "What symptoms or problems are you experiencing?",
      multiline: true,
    },
    {
      label:
        "When did these symptoms start and how have they changed over time?",
      multiline: false,
    },
    {
      label: "Have you already tried any treatments or medications?",
      multiline: false,
    },
    { label: "Medications you currently take:", multiline: false },
    { label: "Previous operations:", multiline: false },
    {
      label: "Do you have any test results, scans or clinic letters to bring?",
      multiline: false,
    },
    {
      label: "What would you like help with from this consultation?",
      multiline: true,
    },
  ];

  const [answers, setAnswers] = useState(
    Object.fromEntries(questions.map((q) => [q.label, ""])),
  );
  const [downloading, setDownloading] = useState(false);

  const handleChange = (label, value) => {
    setAnswers((prev) => ({ ...prev, [label]: value }));
  };

  const handleDownload = () => {
    setDownloading(true);
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const margin = 15;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const maxWidth = pageWidth - margin * 2;
      let y = 20;

      const checkPageBreak = (neededHeight = 10) => {
        if (y + neededHeight > pageHeight - 15) {
          pdf.addPage();
          y = 20;
        }
      };

      // Header
      pdf.setFontSize(8);
      pdf.setTextColor(255, 75, 139);
      pdf.setFont("helvetica", "bold");
      pdf.text("PATIENT CONSULTATION TEMPLATE", margin, y);
      y += 5;
      pdf.setFontSize(8);
      pdf.setTextColor(160, 160, 160);
      pdf.setFont("helvetica", "normal");
      pdf.text("Mr Ketankumar Gajjar — Gynaecological Oncologist", margin, y);
      y += 6;
      pdf.setDrawColor(220, 220, 220);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 10;

      // Questions + answers
      questions.forEach(({ label }) => {
        const answer = answers[label] || "";
        pdf.setFontSize(10);
        pdf.setTextColor(50, 50, 50);
        pdf.setFont("helvetica", "bold");
        const labelLines = pdf.splitTextToSize(label, maxWidth);
        checkPageBreak(labelLines.length * 6 + 12);
        pdf.text(labelLines, margin, y);
        y += labelLines.length * 6 + 2;

        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(80, 80, 80);
        if (answer.trim()) {
          const answerLines = pdf.splitTextToSize(answer, maxWidth);
          checkPageBreak(answerLines.length * 5.5);
          pdf.text(answerLines, margin, y);
          y += answerLines.length * 5.5;
        } else {
          // blank line placeholder
          pdf.setDrawColor(200, 200, 200);
          pdf.line(margin, y + 4, pageWidth - margin, y + 4);
          y += 10;
        }
        y += 8;
      });

      pdf.save("consultation-preparation-notes.pdf");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section>
      <SectionHeader
        Icon={ClipboardList}
        title="Consultation Preparation Notes"
      />
      <p className="text-body text-gray-600 mb-6 leading-relaxed">
        Many patients find it helpful to prepare some notes before their
        appointment. Fill in the template below and download it as a PDF to
        bring to your consultation.
      </p>

      <div className="bg-white border-2 border-dashed border-primary-pink/40 rounded-xl p-8 shadow-sm">
        {/* Template header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-pink mb-1">
              Patient Consultation Template
            </p>
            <p className="text-xs text-gray-400">
              Mr Ketankumar Gajjar — Gynaecological Oncologist
            </p>
          </div>
          <Printer size={24} className="text-primary-pink/40" />
        </div>

        {/* Editable form fields */}
        <div className="space-y-6">
          {questions.map(({ label, multiline }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
              {multiline ? (
                <textarea
                  value={answers[label]}
                  onChange={(e) => handleChange(label, e.target.value)}
                  rows={3}
                  placeholder="Type your answer here…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-primary-pink focus:ring-1 focus:ring-primary-pink/30 resize-none transition-colors"
                />
              ) : (
                <input
                  type="text"
                  value={answers[label]}
                  onChange={(e) => handleChange(label, e.target.value)}
                  placeholder="Type your answer here…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-primary-pink focus:ring-1 focus:ring-primary-pink/30 transition-colors"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download button — outside the captured ref so it doesn't appear in the PDF */}
      <div className="mt-6">
        <button
          onClick={handleDownload}
          disabled={downloading}
          aria-label="Download consultation preparation template as PDF"
          className="inline-flex items-center gap-2 bg-primary-pink hover:bg-[#E03E7C] active:scale-95 disabled:opacity-60 text-white rounded-lg px-5 py-2.5 text-button transition-all shadow-sm hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.4)]"
        >
          <Printer size={16} />
          {downloading ? "Generating PDF…" : "Download as PDF"}
        </button>
        <p className="text-xs text-gray-400 mt-3">
          Please note: consultations are usually designed to assess one main
          condition at a time. If you have several concerns, you may wish to
          request additional consultation time.
        </p>
      </div>
    </section>
  );
}

function FeesInsuranceSection() {
  const selfPayFees = [
    { label: "New Patient Consultation", amount: "£250" },
    { label: "Follow-up Consultation", amount: "£150" },
    { label: "Additional Time", amount: "£100 per 10 min" },
  ];

  return (
    <section>
      <SectionHeader Icon={CreditCard} title="Fees & Insurance" />
      <p className="text-body text-gray-600 mb-6 leading-relaxed">
        Consultations and procedures are available for both self-funding
        patients and those with private medical insurance. All fees are
        transparent with no hidden charges.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Insured Patients */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary-pink/10 flex items-center justify-center">
              <Shield size={18} className="text-primary-pink" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Insured Patients
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Fees for insured patients are set and agreed directly with your
            insurance provider. Please check with your insurer before your
            appointment to confirm your consultation and any investigations or
            treatment are covered under your policy.
          </p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            You may be asked to provide:
          </p>
          <ul className="space-y-2">
            {[
              "Insurance provider name",
              "Policy number",
              "Authorisation code (if required)",
            ].map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>
        </div>

        {/* Self-Funding Patients */}
        <div className="bg-light-pink-1 rounded-xl p-6 hover:bg-light-pink-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary-pink/20 flex items-center justify-center">
              <CreditCard size={18} className="text-primary-pink" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Self-Funding Patients
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Self-funding patients are very welcome. Consultations are held at
            Spire Parkway Hospital. Current consultation fees are listed below.
          </p>

          {/* Fee table */}
          <div className="space-y-2 mb-4">
            {selfPayFees.map(({ label, amount }) => (
              <div
                key={label}
                className="flex items-center justify-between bg-white/80 rounded-lg px-4 py-3"
              >
                <span className="text-sm text-gray-700">{label}</span>
                <span className="text-sm font-bold text-primary-pink">
                  {amount}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://www.spirehealthcare.com/spire-parkway-hospital/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white/80 hover:bg-white rounded-lg px-4 py-3 mb-4 group transition-colors duration-200"
          >
            <span className="text-sm text-gray-700 group-hover:text-primary-pink transition-colors">
              View full fee information on Spire Parkway
            </span>
            <ArrowRight size={14} className="text-primary-pink shrink-0" />
          </a>

          <div className="bg-white/60 rounded-lg px-4 py-3 text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700 block mb-0.5">Please note:</strong>
            Hospital charges, anaesthetist fees and investigation costs may be
            billed separately by the relevant providers.
          </div>
        </div>
      </div>
    </section>
  );
}

function ConditionsTreatedSection() {
  const groups = [
    {
      title: "Gynaecological Cancers",
      items: [
        "Ovarian cancer",
        "Endometrial (uterine) cancer",
        "Cervical cancer",
        "Vulval cancer",
      ],
    },
    {
      title: "Benign Conditions",
      items: [
        "Postmenopausal bleeding",
        "Ovarian cysts",
        "Fibroids",
        "Endometrial polyps",
        "Abnormal uterine bleeding",
      ],
    },
    {
      title: "Specialist Surgical Care",
      items: [
        "Minimally invasive (keyhole) surgery",
        "Robotic-assisted gynaecological surgery",
        "Complex pelvic surgery",
      ],
    },
  ];

  return (
    <section>
      <SectionHeader Icon={Activity} title="Conditions Treated" />
      <p className="text-body text-gray-600 mb-6 leading-relaxed">
        I provide assessment and treatment for a wide range of gynaecological
        conditions. Each patient is assessed individually and treatment
        recommendations are tailored to the specific diagnosis and personal
        circumstances.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(({ title, items }) => (
          <div
            key={title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-1 bg-primary-pink w-full" />
            <div className="p-6">
              <h3 className="text-base font-semibold text-primary-pink mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <BulletItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowUpCareSection() {
  return (
    <section>
      <SectionHeader Icon={Calendar} title="Follow-up Care" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Post-procedure Follow-up
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Ongoing care and support are an important part of treatment. After
            your procedure or treatment, follow-up appointments will be arranged
            to:
          </p>
          <ul className="space-y-3">
            {[
              "Review your recovery progress",
              "Discuss results and findings",
              "Ensure you are progressing well",
              "Address any concerns that may arise",
            ].map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4 italic">
            Follow-up schedules are personalised depending on your condition and
            treatment.
          </p>
        </div>

        <div className="bg-light-pink-1 rounded-xl p-6 hover:bg-light-pink-2 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Cancer Follow-up
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            For patients treated for gynaecological cancers, follow-up focuses
            on monitoring recovery, long-term health and addressing any concerns
            that may arise over time.
          </p>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Coordinated Care
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              I work closely with your GP and other specialists to ensure
              coordinated care and continuity of treatment throughout your
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HolisticCareSection() {
  return (
    <section>
      <SectionHeader Icon={Heart} title="Holistic Care" />

      <div className="bg-gradient-to-r from-light-pink-1 to-white rounded-2xl p-8 hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] transition-all duration-300">
        <p className="text-body text-gray-600 leading-relaxed mb-8">
          In addition to medical and surgical treatment, supportive care is an
          important part of the patient journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-primary-pink flex items-center justify-center shrink-0">
                <Users size={14} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Specialist Nurse Support
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Patients may have access to specialist nurse support who can
              provide guidance, answer questions and assist with coordination of
              care during treatment and recovery.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-primary-pink flex items-center justify-center shrink-0">
                <Heart size={14} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Wellbeing Support
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Holistic support may include advice on:
            </p>
            <ul className="space-y-2">
              {[
                "Recovery and rehabilitation",
                "Wellbeing and quality of life",
                "Menopausal symptoms management",
                "Access to other specialist services when appropriate",
              ].map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheatreTeamSection() {
  return (
    <section>
      <SectionHeader Icon={Users} title="Experienced Theatre Team" />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.12)] hover:-translate-y-1 transition-all duration-300">
        <p className="text-body text-gray-600 leading-relaxed mb-8">
          Surgery is carried out with the support of experienced anaesthetists
          and specialist theatre staff who are familiar with advanced
          gynaecological procedures. Working together as a coordinated team
          helps ensure safe surgery and high standards of patient care
          throughout the operative and recovery process.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              label: "Consultant Anaesthetists",
              desc: "Specialist pain and sedation care",
            },
            {
              label: "Scrub Nurses",
              desc: "Expert instrument and sterile field management",
            },
            {
              label: "Recovery Team",
              desc: "Dedicated post-operative monitoring and support",
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="bg-light-pink-1 rounded-xl p-5 text-center hover:bg-light-pink-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="text-sm font-semibold text-primary-pink mb-1">
                {label}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SECTION_COMPONENTS = {
  "first-appointment": FirstAppointmentSection,
  "consultation-prep": ConsultationPrepSection,
  "fees-insurance": FeesInsuranceSection,
  "conditions-treated": ConditionsTreatedSection,
  "follow-up-care": FollowUpCareSection,
  "holistic-care": HolisticCareSection,
  "theatre-team": TheatreTeamSection,
};

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ activeSection, onSelect }) {
  return (
    <nav aria-label="Page sections">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 px-3">
        On this page
      </p>
      <ul className="space-y-1">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const NavIcon = section.Icon;
          return (
            <li key={section.id}>
              <button
                onClick={() => onSelect(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-left ${
                  isActive
                    ? "bg-light-pink-1 text-primary-pink font-semibold border-l-2 border-primary-pink"
                    : "text-gray-500 hover:bg-light-pink-1 hover:text-primary-pink"
                }`}
              >
                <NavIcon size={15} className="shrink-0" />
                {section.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Book CTA in sidebar */}
      <div className="mt-8 p-4 bg-primary-pink rounded-xl text-white text-center">
        <p className="text-xs font-semibold mb-3">Ready to book?</p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-1 text-xs font-semibold bg-white text-primary-pink rounded-lg px-4 py-2 hover:bg-light-pink-1 transition-all"
        >
          Book Consultation <ArrowRight size={12} />
        </a>
      </div>
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PatientCentrePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const contentRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!contentRef.current) return;
    // 64px fixed navbar + 48px mobile pill bar + 8px breathing room
    const offset =
      contentRef.current.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
  }, [activeSection]);

  const ActiveComponent = SECTION_COMPONENTS[activeSection];

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#FDE7EB] py-20 md:py-24 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block border border-primary-pink text-primary-pink text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
            data-aos="fade-down"
          >
            Mr Ketankumar Gajjar
          </span>
          <h1
            className="text-hero text-gray-900 mb-4 leading-tight"
            data-aos="fade-up"
          >
            Patient <span className="text-primary-pink">Centre</span>
          </h1>
          <p
            className="text-body-large text-black/70 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything you need to know before, during and after your care —
            from your first appointment to follow-up and beyond.
          </p>
        </div>
      </section>

      {/* ── Mobile quick-jump pills (sticky) ── */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div
          className="flex gap-2 px-4 py-3 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSection === id
                  ? "bg-primary-pink text-white"
                  : "bg-light-pink-1 text-primary-pink hover:bg-primary-pink hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main layout: sidebar + content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex gap-10 items-start">
          {/* Sidebar — desktop only */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-24 self-start">
            <Sidebar
              activeSection={activeSection}
              onSelect={setActiveSection}
            />
          </aside>

          {/* Content — only active section rendered */}
          <main
            ref={contentRef}
            className="flex-1 min-w-0"
            data-aos="fade-up"
            key={activeSection}
          >
            <ActiveComponent />
          </main>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-primary-pink py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Book a consultation with Mr Ketankumar Gajjar to discuss your
            symptoms, concerns or treatment options in a compassionate, expert
            setting.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-primary-pink font-semibold px-7 py-3 rounded-xl hover:bg-light-pink-1 transition-all hover:shadow-lg active:scale-95"
          >
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
