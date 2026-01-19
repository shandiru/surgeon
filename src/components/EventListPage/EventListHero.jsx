import React from "react";
import { FaSearch, FaHamburger, FaBuilding, FaStore, FaSchool, FaDumbbell } from "react-icons/fa";

const EventListHero = () => {
  return (
    <section className="relative w-full bg-[#FF4B8B] min-h-screen flex items-center">
      <div className="relative z-10 w-full flex flex-col items-center text-center text-white px-6 py-24 md:py-32 lg:py-40 space-y-12">

        {/* Headline */}
        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Speaking Engagements & Conferences
          </h1>

          <p className="text-base md:text-lg max-w-5xl mx-auto">
            Mr Ketankumar Gajjar regularly speaks at national and international
            medical conferences, academic meetings, and professional forums,
            sharing expertise in gynaecological oncology, surgical innovation,
            and women’s health.
          </p>
        </div>

        {/* Search / Filter Section */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-md items-stretch md:items-center md:gap-20  p-1">
          <select className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black">
            <option>Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>

          <select className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black">
            <option>Event Type</option>
            <option>Conference</option>
            <option>Workshop</option>
            <option>Webinar</option>
            <option>Panel Discussion</option>
            <option>Guest Lecture</option>
          </select>

          <select className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black">
            <option>Role</option>
            <option>Keynote Speaker</option>
            <option>Panelist</option>
            <option>Chair</option>
            <option>Invited Speaker</option>
          </select>

          <button className="bg-[#FF4B8B]/80 hover:bg-[#FF4B8B] text-white px-6 py-4 rounded-md md:rounded-r-md font-bold uppercase transition whitespace-nowrap">
            <FaSearch className="inline mr-2" />
            Discover Now
          </button>
        </div>

        {/* Learn More Button */}
        <div className="">
          <a 
            href="#list"
            className="border-2 rounded-lg border-white px-7 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[#FF4B8B] transition-all duration-300">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
};

export default EventListHero;
