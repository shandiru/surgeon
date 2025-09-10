import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo / Name */}
          <a
            href="/"
            className="text-lg md:text-[13px] lg:text-2xl font-bold text-gray-900 whitespace-nowrap truncate max-w-[200px] md:max-w-[300px] lg:max-w-none"
          >
            Mr Ketankumar Gajjar
          </a>

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
          <div className="hidden md:flex ml-10 space-x-8 items-center relative">
            <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Experience</a>
            <a href="#specialties" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Specialties</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Education</a>

            {/* Services Dropdown (click to toggle) */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Services {isServicesOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
                  <a href="/Cancer/Vulvar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vulvar Cancer</a>
                  <a href="/Cancer/VaginalCancer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vaginal Cancer</a>
                  <a href="/Cancer/OvarianCancer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ovarian Cancer</a>
                  <a href="/Cancer/EndometrialCancer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Endometrial Cancer</a>
                  <a href="/Cancer/CervicalCancer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cervical Cancer</a>
                  <a href="/RoboticSurgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Robotic Surgery</a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <button className="ml-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#c3eefa] hover:bg-[#a8d5e8] text-gray-900">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <a href="#about" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">About</a>
            <a href="#experience" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#specialties" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Specialties</a>
            <a href="#education" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Education</a>

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
                <a href="/Cancer/Vulvar" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Vulvar Cancer</a>
                <a href="/Cancer/VaginalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Vaginal Cancer</a>
                <a href="/Cancer/OvarianCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Ovarian Cancer</a>
                <a href="/Cancer/EndometrialCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Endometrial Cancer</a>
                <a href="/Cancer/CervicalCancer" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Cervical Cancer</a>
                <a href="/RoboticSurgery" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Robotic Surgery</a>
              </div>
            )}

            <a href="#contact" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Contact</a>
            <button className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-[#c3eefa] hover:bg-[#a8d5e8] text-gray-900">
              Book Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
