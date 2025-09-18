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

const IrregularBleedingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card border-b sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-2 py-4">
          {tabs.map((tab, idx) => (
            <TabButton key={idx} icon={tab.icon} label={tab.label} />
          ))}
        </div>

        {/* Mobile Header with Hamburger */}
        <div className="md:hidden flex justify-between items-center py-4">
          <span className="text-base font-semibold text-card-foreground">
            Menu
          </span>
          <button
            className="text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4">
            {tabs.map((tab, idx) => (
              <TabButton key={idx} icon={tab.icon} label={tab.label} fullWidth />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const TabButton = ({ icon, label, fullWidth = false }) => {
  const base =
    'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all';
  const active =
    'bg-primary text-primary-foreground hover:bg-primary/90';
  const layout = fullWidth ? 'w-full justify-start' : 'justify-center whitespace-nowrap shrink-0';

  return (
    <button className={`${base} ${active} ${layout}`}>
      {icon}
      {label}
    </button>
  );
};

export default IrregularBleedingNavbar;
