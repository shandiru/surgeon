import React from "react";
import { FaSearch, FaMapMarkerAlt, FaHamburger, FaBuilding, FaStore, FaSchool, FaDumbbell } from "react-icons/fa";

const categories = [
  { icon: <FaHamburger size={24} />, label: "Concert Event" },
  { icon: <FaBuilding size={24} />, label: "Restaurants Event" },
  { icon: <FaStore size={24} />, label: "Shopping Mall" },
  { icon: <FaSchool size={24} />, label: "School Event" },
  { icon: <FaDumbbell size={24} />, label: "Gym Event" },
];

const EventListHero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&q=1500&w=1920')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-24 md:py-32 lg:py-40">
        {/* Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12 leading-snug">
          Explore on-going and <br />
          Upcoming Events Around you...
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-md items-center gap-4">
          <input
            type="text"
            placeholder="I’m looking for"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black"
          />
          <select className="flex-1 px-4 py-3 rounded-md focus:outline-none text-black">
            <option>All Categories</option>
            <option>Concert Event</option>
            <option>Restaurant Event</option>
          </select>
          <button className="bg-orange-500 py-5 hover:bg-orange-600 px-6 rounded-r-md font-bold uppercase transition">
            <FaSearch className="inline mr-2" /> Discover Now
          </button>
        </div>

        {/* Quick Category Icons */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105"
            >
              <div className="bg-white text-orange-500 rounded-full p-4 shadow-lg mb-2">
                {cat.icon}
              </div>
              <p className="text-sm">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventListHero;
