import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// ─── Nav data ─────────────────────────────────────────────────────────────────

const aboutItems = [
  { label: "About Mr Gajjar", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Education", to: "/#education" },
  { label: "Specialties", to: "/#specialties" },
  { label: "Testimonials", to: "/#testimonials" },
];

const treatmentGuides = [
  { label: "Colposcopy Guide", to: "/guide/colposcopy" },
  { label: "Ultrasound Guide", to: "/guide/ultrasound" },
  { label: "Hysteroscopy Guide", to: "/guide/hysteroscopy" },
  { label: "Vulvar Cancer Guide", to: "/guide/vulvar-cancer" },
  { label: "Vaginal Cancer Guide", to: "/guide/vaginal-cancer" },
  { label: "Ovarian Cancer Guide", to: "/guide/ovarian-cancer" },
  { label: "Endometrial Cancer Guide", to: "/guide/endometrial-cancer" },
  { label: "Cervical Cancer Guide", to: "/guide/cervical-cancer" },
  { label: "Robotic Surgery Guide", to: "/guide/robotic-surgery" },
  { label: "Endometriosis Guide", to: "/guide/endometriosis" },
  { label: "Cervical Screening Guide", to: "/guide/cervical-screening" },
  { label: "Fibroid Guide", to: "/guide/fibroids" },
  { label: "Irregular Bleeding Guide", to: "/guide/irregular-bleeding" },
  { label: "Ovarian Cysts Guide", to: "/guide/ovarian-cysts" },
  {
    label: "Postmenopausal Bleeding Guide",
    to: "/guide/postmenopausal-bleeding",
  },
  { label: "Postcoital Bleeding Guide", to: "/guide/postcoital-bleeding" },
  { label: "Pelvic Pain Guide", to: "/guide/pelvic-pain" },
];

// ─── Dropdown (desktop) ───────────────────────────────────────────────────────

function DesktopDropdown({ label, children, isActive }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-150 ${
          isActive
            ? "text-primary-pink"
            : "text-black/80 hover:text-primary-pink"
        }`}
      >
        {label}
        <FiChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="menu"
        className={`absolute left-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] min-w-[220px] z-50 overflow-hidden transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{ transformOrigin: "top" }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileGuidesOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    closeMobile();
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeMobile();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isHomePage = location.pathname === "/";

  const linkClass = (path) =>
    `px-2 py-2 text-sm font-medium transition-colors duration-150 ${
      location.pathname === path
        ? "text-primary-pink"
        : "text-black/80 hover:text-primary-pink"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50"
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Mr Ketankumar Gajjar — Home"
            onClick={closeMobile}
          >
            <img
              src="/logo.png"
              alt="Mr Ketankumar Gajjar — Gynaecological Oncologist"
              className="h-[52px] w-auto md:h-28 lg:h-32 object-contain"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {/* About dropdown */}
            <DesktopDropdown label="About" isActive={isHomePage}>
              {aboutItems.map((item) => (
                <HashLink
                  key={item.to}
                  smooth
                  to={item.to}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-light-pink-1 hover:text-primary-pink transition-colors"
                  onClick={closeMobile}
                >
                  {item.label}
                </HashLink>
              ))}
            </DesktopDropdown>

            {/* Treatment Guides dropdown */}
            <DesktopDropdown
              label="Treatment Guides"
              isActive={
                location.pathname.startsWith("/guide") ||
                location.pathname === "/treatment-guides"
              }
            >
              <Link
                to="/treatment-guides"
                role="menuitem"
                className="flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-primary-pink hover:bg-light-pink-1 border-b border-gray-100 transition-colors"
                onClick={closeMobile}
              >
                View All Guides →
              </Link>
              <div className="max-h-72 overflow-y-auto">
                {treatmentGuides.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    role="menuitem"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === item.to
                        ? "text-primary-pink bg-light-pink-1"
                        : "text-gray-700 hover:bg-light-pink-1 hover:text-primary-pink"
                    }`}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </DesktopDropdown>

            <Link
              to="/robotic-surgery-experience"
              className={linkClass("/robotic-surgery-experience")}
              onClick={closeMobile}
            >
              Robotic Surgery
            </Link>

            <Link
              to="/patient-centre"
              className={linkClass("/patient-centre")}
              onClick={closeMobile}
            >
              Patient Centre
            </Link>

            <Link
              to="/publications"
              className={linkClass("/publications")}
              onClick={closeMobile}
            >
              Publications
            </Link>

            <Link
              to="/events"
              className={linkClass("/events")}
              onClick={closeMobile}
            >
              Events
            </Link>
          </div>

          {/* CTA button — desktop */}
          <div className="hidden lg:block">
            <HashLink
              smooth
              to="/#contact"
              className="inline-flex items-center justify-center rounded-lg text-sm font-semibold px-5 py-2.5 bg-primary-pink hover:bg-[#E03E7C] hover:shadow-[0_0_15px_2px_rgba(255,75,139,0.4)] text-white transition-all duration-200 active:scale-95"
              onClick={closeMobile}
            >
              Book Consultation
            </HashLink>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-light-pink-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-pink transition-colors"
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-4 py-3 space-y-1 overflow-y-auto max-h-[80vh]">
          {/* About accordion */}
          <button
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            aria-expanded={mobileAboutOpen}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-light-pink-1 rounded-lg transition-colors"
          >
            About
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${mobileAboutOpen ? "max-h-64" : "max-h-0"}`}
          >
            <div className="ml-3 pl-3 border-l-2 border-light-pink-2 space-y-0.5 py-1">
              {aboutItems.map((item) => (
                <HashLink
                  key={item.to}
                  smooth
                  to={item.to}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-pink hover:bg-light-pink-1 rounded-lg transition-colors"
                  onClick={closeMobile}
                >
                  {item.label}
                </HashLink>
              ))}
            </div>
          </div>

          {/* Treatment Guides accordion */}
          <button
            onClick={() => setMobileGuidesOpen(!mobileGuidesOpen)}
            aria-expanded={mobileGuidesOpen}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-light-pink-1 rounded-lg transition-colors"
          >
            Treatment Guides
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${mobileGuidesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${mobileGuidesOpen ? "max-h-64" : "max-h-0"}`}
          >
            <div className="ml-3 pl-3 border-l-2 border-light-pink-2 space-y-0.5 py-1 overflow-y-auto max-h-52">
              <Link
                to="/treatment-guides"
                className="block px-3 py-2 text-sm font-semibold text-primary-pink hover:bg-light-pink-1 rounded-lg transition-colors"
                onClick={closeMobile}
              >
                View All Guides →
              </Link>
              {treatmentGuides.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-pink hover:bg-light-pink-1 rounded-lg transition-colors"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Flat links */}
          {[
            { to: "/robotic-surgery-experience", label: "Robotic Surgery" },
            { to: "/patient-centre", label: "Patient Centre" },
            { to: "/publications", label: "Publications" },
            { to: "/events", label: "Events" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === to
                  ? "text-primary-pink bg-light-pink-1"
                  : "text-gray-800 hover:bg-light-pink-1 hover:text-primary-pink"
              }`}
              onClick={closeMobile}
            >
              {label}
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <HashLink
              smooth
              to="/#contact"
              className="w-full inline-flex items-center justify-center rounded-lg text-sm font-semibold px-5 py-2.5 bg-primary-pink hover:bg-[#E03E7C] text-white transition-all duration-200 active:scale-95"
              onClick={closeMobile}
            >
              Book Consultation
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
