import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAdditionalServicesOpen, setIsAdditionalServicesOpen] = useState(false);

  // Close the dropdown after clicking a link
  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsAdditionalServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo / Name */}
          <Link
            to="/"
            className="text-lg md:text-[13px] lg:text-2xl font-bold text-gray-900 whitespace-nowrap truncate max-w-[200px] md:max-w-[300px] lg:max-w-none"
          >
            Mr Ketankumar Gajjar
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex ml-10 space-x-3 items-center relative">
            <Link to="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</Link>
            <Link to="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Experience</Link>
            <Link to="#specialties" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Specialties</Link>
            <Link to="#education" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Education</Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Services {isServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  <Link
                    to="/Cancer/Vulvar"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Vulvar Cancer
                  </Link>
                  <Link
                    to="/Cancer/VaginalCancer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Vaginal Cancer
                  </Link>
                  <Link
                    to="/Cancer/OvarianCancer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Ovarian Cancer
                  </Link>
                  <Link
                    to="/Cancer/EndometrialCancer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Endometrial Cancer
                  </Link>
                  <Link
                    to="/Cancer/CervicalCancer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Cervical Cancer
                  </Link>
                  <Link
                    to="/RoboticSurgery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Robotic Surgery
                  </Link>
                </div>
              )}
            </div>

            {/* New Additional Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAdditionalServicesOpen(!isAdditionalServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pages {isAdditionalServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isAdditionalServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  <Link
                    to="/CervicalScreening"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Cervical Screening
                  </Link>
                  <Link
                    to="/IrregularBleedingInfo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Irregular Bleeding
                  </Link>
                  <Link
                    to="/EndometriosisInformation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Endometriosis
                  </Link>
                  <Link
                    to="/FibroidInformation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Fibroids
                  </Link>
                  <Link
                    to="/MenstrualDisordersInformation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Menstrual Disorders
                  </Link>
                  <Link
                    to="/OvarianCystsPage"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Ovarian Cysts
                  </Link>
                  <Link
                    to="/PostcoitalBleeding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Postcoital Bleeding
                  </Link>
                  <Link
                    to="/postmenopausal-bleeding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Postmenopausal Bleeding
                  </Link>
                  <Link
                    to="/colposcopy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Colposcopy
                  </Link>
                  <Link
                    to="/pelvic-pain-information"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Pelvic Pain Information
                  </Link>
                  <Link
                    to="/vulvar-vaginal-lumps"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Vulvar Vaginal Lumps
                  </Link>
                </div>
              )}
            </div>

            <Link to="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</Link>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <button className="ml-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-gray-900">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <Link to="#about" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">About</Link>
            <Link to="#experience" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Experience</Link>
            <Link to="#specialties" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Specialties</Link>
            <Link to="#education" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Education</Link>

            {/* Services Mobile Collapsible */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Services
              {isServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {isServicesOpen && (
              <div className="pl-6 space-y-1">
                <Link
                  to="/Cancer/Vulvar"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Vulvar Cancer
                </Link>
                <Link
                  to="/Cancer/VaginalCancer"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Vaginal Cancer
                </Link>
                <Link
                  to="/Cancer/OvarianCancer"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Ovarian Cancer
                </Link>
                <Link
                  to="/Cancer/EndometrialCancer"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Endometrial Cancer
                </Link>
                <Link
                  to="/Cancer/CervicalCancer"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Cervical Cancer
                </Link>
                <Link
                  to="/RoboticSurgery"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Robotic Surgery
                </Link>
              </div>
            )}

            {/* New Additional Services Mobile Collapsible */}
            <button
              onClick={() => setIsAdditionalServicesOpen(!isAdditionalServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Pages
              {isAdditionalServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {isAdditionalServicesOpen && (
              <div className="pl-6 space-y-1">
                <Link
                  to="/CervicalScreening"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Cervical Screening
                </Link>
                <Link
                  to="/IrregularBleedingInfo"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Irregular Bleeding
                </Link>
                <Link
                  to="/EndometriosisInformation"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Endometriosis
                </Link>
                <Link
                  to="/FibroidInformation"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={closeDropdowns}
                >
                  Fibroids
                </Link>
              </div>
            )}

            <Link to="#contact" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            <button className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-gray-900">
              Book Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
