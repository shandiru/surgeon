import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// const treatments = [
//   { label: "Vulvar Cancer", to: "/Cancer/Vulvar" },
//   { label: "Vaginal Cancer", to: "/Cancer/VaginalCancer" },
//   { label: "Ovarian Cancer", to: "/Cancer/OvarianCancer" },
//   { label: "Endometrial Cancer", to: "/Cancer/EndometrialCancer" },
//   { label: "Cervical Cancer", to: "/Cancer/CervicalCancer" },
//   { label: "Robotic Surgery", to: "/RoboticSurgery" },
//   { label: "Robotic Surgery Experience", to: "/robotic-surgery-experience" },
//   { label: "Cervical Screening", to: "/CervicalScreening" },
//   { label: "Irregular Bleeding", to: "/IrregularBleedingInfo" },
//   { label: "Endometriosis", to: "/EndometriosisInformation" },
//   { label: "Fibroids", to: "/FibroidInformation" },
//   { label: "Menstrual Disorders", to: "/MenstrualDisordersInformation" },
//   { label: "Ovarian Cysts", to: "/OvarianCystsPage" },
//   { label: "Postcoital Bleeding", to: "/PostcoitalBleeding" },
//   { label: "Postmenopausal Bleeding", to: "/postmenopausal-bleeding" },
//   { label: "Pelvic Pain", to: "/pelvic-pain-information" },
//   { label: "Vulvar Vaginal Lumps", to: "/vulvar-vaginal-lumps" },
// ];

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
  { label: "Menstrual Disorders Guide", to: "/guide/menstrual-disorders" },
  { label: "Postcoital Bleeding Guide", to: "/guide/postcoital-bleeding" },
  { label: "Vaginal Lumps Guide", to: "/guide/vaginal-lumps" },
  { label: "Pelvic Pain Guide", to: "/guide/pelvic-pain" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAdditionalServicesOpen, setIsAdditionalServicesOpen] =
    useState(false);

  const navRef = useRef(null);

  const closeAll = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsAdditionalServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={closeAll}>
            <img
              src="/logo.png"
              alt="Mr Ketankumar Gajjar Logo"
              className="h-30 w-auto md:h-28 lg:h-32 object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex ml-10 space-x-1 items-center relative">
            <HashLink
              smooth
              to="/#about"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#experience"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Experience
            </HashLink>
            <HashLink
              smooth
              to="/#specialties"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Specialties
            </HashLink>
            <HashLink
              smooth
              to="/#education"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Education
            </HashLink>
            <HashLink
              smooth
              to="/PublicationsPage"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Publications
            </HashLink>

            <HashLink
              smooth
              to="/event-list"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Event
            </HashLink>

            {/* Services Dropdown */}
            {/* <div className="relative">
              <button
                onClick={() => {
                  setIsServicesOpen(true);
                  setIsAdditionalServicesOpen(false);
                }}
                className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              >
                Treatments{" "}
                {isServicesOpen ? (
                  <FiChevronUp className="ml-1" />
                ) : (
                  <FiChevronDown className="ml-1" />
                )}
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-64 z-50 max-h-96 overflow-y-auto">
                  {treatments.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2 text-body-small text-gray-600 hover:bg-[#FFC5D3]"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {/* Additional Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsAdditionalServicesOpen(true);
                  setIsServicesOpen(false);
                }}
                className="flex items-center text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              >
                Treatment guide{" "}
                {isAdditionalServicesOpen ? (
                  <FiChevronUp className="ml-1" />
                ) : (
                  <FiChevronDown className="ml-1" />
                )}
              </button>

              {isAdditionalServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-64 z-50 max-h-96 overflow-y-auto">
                  {treatmentGuides.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-body-small text-gray-700 hover:bg-[#FFC5D3]"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <HashLink
              smooth
              to="/#contact"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
              onClick={closeAll}
            >
              Contact
            </HashLink>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden lg:block">
            <HashLink
              smooth
              to="/#contact"
              className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-[#FF4B8B] mb-3"
              onClick={closeAll}
            >
              Book Consultation
            </HashLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-200">
            <div className="space-y-1 px-2 py-2">
              {/* Main Links */}
              <HashLink
                smooth
                to="/#about"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                About
              </HashLink>

              <HashLink
                smooth
                to="/#experience"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Experience
              </HashLink>

              <HashLink
                smooth
                to="/#specialties"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Specialties
              </HashLink>

              <HashLink
                smooth
                to="/#education"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Education
              </HashLink>

              <HashLink
                smooth
                to="/PublicationsPage"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Publications
              </HashLink>

              <HashLink
                smooth
                to="/event-list"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Event
              </HashLink>

              {/* Treatments Accordion */}
              <button
                onClick={() => {
                  setIsServicesOpen(true);
                  setIsAdditionalServicesOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
              >
                <span>Treatments</span>
                {isServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {isServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {/* {treatments.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2 text-body-small text-gray-600 hover:bg-[#FFC5D3] rounded-md"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))} */}
                </div>
              )}

              {/* Treatment Guide Accordion */}
              {/* <button
                onClick={() => {
                  setIsAdditionalServicesOpen(true);
                  setIsServicesOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
              >
                <span>Treatment guide</span>
                {isAdditionalServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button> */}

              {isAdditionalServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 max-h-64 overflow-y-auto">
                  {treatmentGuides.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2 text-body-small text-gray-600 hover:bg-[#FFC5D3] rounded-md"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Contact + CTA */}
              <HashLink
                smooth
                to="/#contact"
                className="block px-3 py-2 text-body-small text-gray-600 hover:text-gray-900"
                onClick={closeAll}
              >
                Contact
              </HashLink>

              <HashLink
                smooth
                to="/#contact"
                className="w-full mt-2 inline-flex items-center justify-center rounded-md text-button transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-[#FF4B8B] mb-3"
                onClick={closeAll}
              >
                Book Consultation
              </HashLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
