'use client';

import React, { useState } from 'react';
import {
  Info,
  TriangleAlert,
  Stethoscope,
  FileText,
  TestTube,
  Pill,
  Menu,
  X,
} from 'lucide-react';

const tabs = [
  { label: 'Overview', icon: <Info size={16} /> },
  { label: 'Causes', icon: <TriangleAlert size={16} /> },
  { label: 'When to Seek Help', icon: <Stethoscope size={16} /> },
  { label: 'What to Track', icon: <FileText size={16} /> },
  { label: 'Your Appointment', icon: <TestTube size={16} /> },
  { label: 'Treatment', icon: <Pill size={16} /> },
];

const IrregularBleedingNavbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-light-pink-1 shadow-sm rounded-full">
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-3 py-4">
          {tabs.map((tab, idx) => (
            <TabButton
              key={idx}
              icon={tab.icon}
              label={tab.label}
              active={activeTab === tab.label}
              onClick={() => setActiveTab(tab.label)}
            />
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-between items-center py-4">
          <span className="text-base font-semibold text-black">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-pink focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Items */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4">
            {tabs.map((tab, idx) => (
              <TabButton
                key={idx}
                icon={tab.icon}
                label={tab.label}
                active={activeTab === tab.label}
                onClick={() => {
                  setActiveTab(tab.label);
                  setIsOpen(false);
                }}
                fullWidth
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const TabButton = ({ icon, label, fullWidth = false, active, onClick }) => {
  const base =
    'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all';
  const activeClasses = active
    ? 'bg-primary-pink text-white'
    : 'bg-[#FFE5ED] text-black hover:bg-[#FFD2E1]';
  const layout = fullWidth
    ? 'w-full justify-start rounded-md'
    : 'justify-center whitespace-nowrap shrink-0 rounded-full';

  return (
    <button onClick={onClick} className={`${base} ${activeClasses} ${layout}`}>
      <span className="p-1 rounded-full bg-white text-primary-pink">
        {icon}
      </span>
      {label}
    </button>
  );
};

export default IrregularBleedingNavbar;
