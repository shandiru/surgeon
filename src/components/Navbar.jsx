import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo / Name */}
         <div className="text-lg md:text-[13px] lg:text-2xl font-bold text-gray-900 whitespace-nowrap truncate max-w-[200px] md:max-w-[300px] lg:max-w-none">
  Mr Ketankumar Gajjar
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex ml-10 space-x-8 items-center">
            <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Experience</a>
            <a href="#specialties" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Specialties</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Education</a>
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
            <a href="#about" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#experience" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Experience</a>
            <a href="#specialties" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Specialties</a>
            <a href="#education" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Education</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
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
