import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  AlertCircle,
  Shield,
  ShieldCheck,
  Eye,
  ScanSearch,
  Monitor,
  Zap,
  ClipboardCheck,
  HeartPulse,
  Layers,
  Droplets,
  Calendar,
  Circle,
  Thermometer,
  Droplet,
  Clock,
  AlertTriangle,
  ArrowRight,
  Search,
  BookOpen,
} from "lucide-react";

const GUIDES = [
  // Cancer
  {
    slug: "cervical-cancer",
    title: "Understanding Cervical Cancer",
    subtitle: "What it is, symptoms, diagnosis & treatment",
    sections: 8,
    category: "Cancer",
    Icon: Stethoscope,
  },
  {
    slug: "endometrial-cancer",
    title: "Understanding Endometrial Cancer",
    subtitle: "What it is, symptoms, diagnosis & treatment",
    sections: 6,
    category: "Cancer",
    Icon: Activity,
  },
  {
    slug: "ovarian-cancer",
    title: "Understanding Ovarian Cancer",
    subtitle: "What it is, symptoms, diagnosis & treatment",
    sections: 8,
    category: "Cancer",
    Icon: AlertCircle,
  },
  {
    slug: "vaginal-cancer",
    title: "Understanding Vaginal Cancer",
    subtitle: "What it is, symptoms, diagnosis & treatment",
    sections: 8,
    category: "Cancer",
    Icon: Shield,
  },
  {
    slug: "vulvar-cancer",
    title: "Understanding Vulvar Cancer",
    subtitle: "What it is, symptoms, diagnosis & treatment",
    sections: 8,
    category: "Cancer",
    Icon: ShieldCheck,
  },
  // Procedures
  {
    slug: "colposcopy",
    title: "Understanding Colposcopy",
    subtitle: "What it is, why it's done & what to expect",
    sections: 6,
    category: "Procedures",
    Icon: Eye,
  },
  {
    slug: "hysteroscopy",
    title: "Understanding Hysteroscopy",
    subtitle: "What it is, why it's done & what to expect",
    sections: 6,
    category: "Procedures",
    Icon: ScanSearch,
  },
  {
    slug: "ultrasound",
    title: "Understanding Gynaecological Ultrasound",
    subtitle: "What it is, why it's done & what to expect",
    sections: 5,
    category: "Procedures",
    Icon: Monitor,
  },
  {
    slug: "robotic-surgery",
    title: "Understanding Robotic Surgery",
    subtitle: "What it is, why it's done & what to expect",
    sections: 6,
    category: "Procedures",
    Icon: Zap,
  },
  {
    slug: "cervical-screening",
    title: "Understanding Cervical Screening",
    subtitle: "What it is, why it's done & what to expect",
    sections: 7,
    category: "Procedures",
    Icon: ClipboardCheck,
  },
  // Conditions
  {
    slug: "endometriosis",
    title: "Understanding Endometriosis",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 6,
    category: "Conditions",
    Icon: HeartPulse,
  },
  {
    slug: "fibroids",
    title: "Understanding Fibroids",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 8,
    category: "Conditions",
    Icon: Layers,
  },
  {
    slug: "irregular-bleeding",
    title: "Understanding Irregular Bleeding",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 7,
    category: "Conditions",
    Icon: Droplets,
  },
  {
    slug: "menstrual-disorders",
    title: "Understanding Menstrual Disorders",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 8,
    category: "Conditions",
    Icon: Calendar,
  },
  {
    slug: "ovarian-cysts",
    title: "Understanding Ovarian Cysts",
    subtitle: "What they are, how they're diagnosed & treated",
    sections: 8,
    category: "Conditions",
    Icon: Circle,
  },
  {
    slug: "pelvic-pain",
    title: "Understanding Pelvic Pain",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 8,
    category: "Conditions",
    Icon: Thermometer,
  },
  {
    slug: "postcoital-bleeding",
    title: "Understanding Postcoital Bleeding",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 6,
    category: "Conditions",
    Icon: Droplet,
  },
  {
    slug: "postmenopausal-bleeding",
    title: "Understanding Postmenopausal Bleeding",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 7,
    category: "Conditions",
    Icon: Clock,
  },
  {
    slug: "vaginal-lumps",
    title: "Understanding Vaginal Lumps",
    subtitle: "Causes, symptoms, diagnosis & treatment options",
    sections: 8,
    category: "Conditions",
    Icon: AlertTriangle,
  },
];

const CATEGORIES = ["All", "Cancer", "Procedures", "Conditions"];

const CATEGORY_META = {
  Cancer: { bg: "bg-rose-50", badge: "bg-rose-100 text-rose-700", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
  Procedures: { bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700", iconBg: "bg-purple-100", iconColor: "text-purple-600" },
  Conditions: { bg: "bg-sky-50", badge: "bg-sky-100 text-sky-700", iconBg: "bg-sky-100", iconColor: "text-sky-600" },
};

function GuideCard({ guide }) {
  const { Icon, slug, title, subtitle, sections, category } = guide;
  const meta = CATEGORY_META[category];

  return (
    <div
      className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-[0_0_25px_3px_rgba(255,75,139,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
      data-aos="fade-up"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-primary-pink w-full" />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + category badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`${meta.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={22} className={meta.iconColor} />
          </div>
          <span className={`${meta.badge} text-xs font-semibold px-3 py-1 rounded-full`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-primary-pink transition-colors duration-200">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">{subtitle}</p>

        {/* Sections pill */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
          <BookOpen size={13} />
          <span>{sections} sections</span>
        </div>

        {/* CTA */}
        <Link
          to={`/guide/${slug}`}
          className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-light-pink-1 text-primary-pink text-sm font-medium py-2.5 hover:bg-primary-pink hover:text-white transition-all duration-200 group-hover:shadow-sm"
        >
          Read Guide
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default function TreatmentGuidesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return GUIDES.filter((g) => {
      const matchesCat = activeCategory === "All" || g.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.category.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  const counts = useMemo(() => {
    const result = { All: GUIDES.length };
    CATEGORIES.slice(1).forEach((cat) => {
      result[cat] = GUIDES.filter((g) => g.category === cat).length;
    });
    return result;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#FDE7EB] py-20 md:py-28 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block border border-primary-pink text-primary-pink text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
            data-aos="fade-down"
          >
            Medical Education
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight"
            data-aos="fade-up"
          >
            Treatment <span className="text-primary-pink">Guides</span>
          </h1>

          <p
            className="text-body-large text-black/70 max-w-2xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A comprehensive library of patient guides covering gynaecological cancers,
            diagnostic procedures, and common conditions — written to help you understand
            your care every step of the way.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-6 text-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              { label: "Total Guides", value: GUIDES.length },
              { label: "Cancer Guides", value: counts.Cancer },
              { label: "Procedures", value: counts.Procedures },
              { label: "Conditions", value: counts.Conditions },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/70 backdrop-blur-sm border border-primary-pink/20 rounded-xl px-5 py-3 text-center"
              >
                <div className="text-2xl font-bold text-primary-pink">{value}</div>
                <div className="text-gray-600 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Search ── */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary-pink text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-light-pink-1 hover:text-primary-pink"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-xs font-bold rounded-full px-1.5 py-0.5 ${
                      activeCategory === cat ? "bg-white/25 text-white" : "bg-white text-gray-500"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search guides…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-pink/30 focus:border-primary-pink placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-medium">No guides found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-400 mb-6">
              Showing <span className="font-semibold text-gray-700">{filtered.length}</span> guide{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && (
                <> in <span className="font-semibold text-primary-pink">{activeCategory}</span></>
              )}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-primary-pink py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Have Questions About Your Care?</h2>
          <p className="text-white/80 mb-8 text-base">
            These guides are for educational purposes. For personalised advice, book a consultation with Mr Ketankumar Gajjar.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-primary-pink font-semibold px-7 py-3 rounded-xl hover:bg-light-pink-1 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
