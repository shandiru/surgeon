import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png" // உங்கள் logo path
              alt="Mr Ketankumar Gajjar Logo"
              className="h-30 w-auto md:h-28 lg:h-32 object-contain"
            />
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
            <HashLink smooth to="/#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </HashLink>
            <HashLink smooth to="/#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Experience
            </HashLink>
            <HashLink smooth to="/#specialties" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Specialties
            </HashLink>
            <HashLink smooth to="/#education" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Education
            </HashLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Treatments {isServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  {/* your existing Links */}
                  <Link to="/Cancer/Vulvar" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Vulvar Cancer</Link>
                  <Link to="/Cancer/VaginalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Vaginal Cancer</Link>
                  <Link to="/Cancer/OvarianCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Ovarian Cancer</Link>
                  <Link to="/Cancer/EndometrialCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Endometrial Cancer</Link>
                  <Link to="/Cancer/CervicalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Cervical Cancer</Link>
                  <Link to="/RoboticSurgery" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Robotic Surgery</Link>
                  <Link to="/CervicalScreening" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Cervical Screening</Link>
                  <Link to="/IrregularBleedingInfo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Irregular Bleeding</Link>
                  <Link to="/EndometriosisInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Endometriosis</Link>
                  <Link to="/FibroidInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Fibroids</Link>
                  <Link to="/MenstrualDisordersInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Menstrual Disorders</Link>
                  <Link to="/OvarianCystsPage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Ovarian Cysts</Link>
                  <Link to="/PostcoitalBleeding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Postcoital Bleeding</Link>
                  <Link to="/postmenopausal-bleeding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Postmenopausal Bleeding</Link>
                  <Link to="/pelvic-pain-information" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Pelvic Pain</Link>
                  <Link to="/vulvar-vaginal-lumps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Vulvar Vaginal Lumps</Link>
                </div>
              )}
            </div>

            {/* New Additional Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAdditionalServicesOpen(!isAdditionalServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Treatment guide {isAdditionalServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isAdditionalServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  <Link to="/colposcopy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Colposcopy</Link>
                  <Link to="/ultrasound" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Ultrasound</Link>
                  <Link to="/Hysteroscopy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Hysteroscopy</Link>
                </div>
              )}
            </div>

            <HashLink smooth to="/#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </HashLink>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <HashLink
              smooth
              to="/#contact"
              className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-[#FF4B8B] mb-3"
            >
              Book Consultation
            </HashLink>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <HashLink smooth to="/#about" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">About</HashLink>
            <HashLink smooth to="/#experience" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Experience</HashLink>
            <HashLink smooth to="/#specialties" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Specialties</HashLink>
            <HashLink smooth to="/#education" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Education</HashLink>

            {/* Services collapsible (keep as is) */}
            {/* ... existing code ... */}
             {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Treatments {isServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  {/* your existing Links */}
                  <Link to="/Cancer/Vulvar" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Vulvar Cancer</Link>
                  <Link to="/Cancer/VaginalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Vaginal Cancer</Link>
                  <Link to="/Cancer/OvarianCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Ovarian Cancer</Link>
                  <Link to="/Cancer/EndometrialCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Endometrial Cancer</Link>
                  <Link to="/Cancer/CervicalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Cervical Cancer</Link>
                  <Link to="/RoboticSurgery" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeDropdowns}>Robotic Surgery</Link>
                  <Link to="/CervicalScreening" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Cervical Screening</Link>
                  <Link to="/IrregularBleedingInfo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Irregular Bleeding</Link>
                  <Link to="/EndometriosisInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Endometriosis</Link>
                  <Link to="/FibroidInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Fibroids</Link>
                  <Link to="/MenstrualDisordersInformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Menstrual Disorders</Link>
                  <Link to="/OvarianCystsPage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Ovarian Cysts</Link>
                  <Link to="/PostcoitalBleeding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Postcoital Bleeding</Link>
                  <Link to="/postmenopausal-bleeding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Postmenopausal Bleeding</Link>
                  <Link to="/pelvic-pain-information" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Pelvic Pain</Link>
                  <Link to="/vulvar-vaginal-lumps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Vulvar Vaginal Lumps</Link>
                </div>
              )}
            </div>

            {/* New Additional Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAdditionalServicesOpen(!isAdditionalServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Treatment guide {isAdditionalServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isAdditionalServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  <Link to="/colposcopy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Colposcopy</Link>
                  <Link to="/ultrasound" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Ultrasound</Link>
                  <Link to="/Hysteroscopy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdowns}>Hysteroscopy</Link>
                </div>
              )}
            </div>


            <HashLink smooth to="/#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#FFC5D3] hover:bg-[#FFC5D3] text-[#FF4B8B] mb-3"
            >
              Book Consultation
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
