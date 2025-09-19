import React from 'react';

const TrackBeforeAppointmentCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold flex items-center gap-2 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar h-6 w-6 text-primary"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          What to Track Before Your Appointment
        </div>
        <div className="text-muted-foreground text-sm">
          Bring this info with you — it can help your doctor find the cause quickly
        </div>
      </div>

      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>• When the bleeding happens (timing and cycle day)</li>
            <li>• How much blood (light spots or heavier flow)</li>
          </ul>
          <ul className="space-y-2">
            <li>• If there's pain during or after sex</li>
            <li>• Any other symptoms (discharge, odour, pelvic pain, fever)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackBeforeAppointmentCard;
