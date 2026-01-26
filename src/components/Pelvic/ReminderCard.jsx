import React from "react";
import { Heart } from "lucide-react"; // Importing the Heart icon from lucide-react

const ReminderCard = () => {
  return (
    <div className="text-primary-pink bg-light-pink max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl  py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg hover:border-light-pink-2 active:bg-light-pink-1 active:shadow-lg active:border-light-pink-2 hover:scale-105 active:scale-100">
      <div className="px-6 pt-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-xl font-semibold text-secondary">Remember</h3>
          <div className="space-y-2 text-foreground max-w-2xl mx-auto">
            <p>• Pelvic pain is common and usually treatable</p>
            <p>• Many causes are not serious, but some need prompt attention</p>
            <p>• Early assessment can bring relief and peace of mind</p>
            <p className="font-medium">
              If pelvic pain is affecting your life, book an appointment — we're here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
