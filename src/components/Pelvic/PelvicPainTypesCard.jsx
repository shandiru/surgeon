import React from "react";
import { Target, Calendar, Activity, Zap, Clock } from "lucide-react"; // Import Lucide icons

const PelvicPainTypesCard = () => {
  return (
    <div className="text-primary-pink bg-light-pink max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl  py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
        <div className="font-semibold flex items-center gap-3 text-2xl">
          <Target className="h-6 w-6 text-primary" />
          Types of Pelvic Pain
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-3">
            {/* Cyclic Pain */}
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Cyclic Pain</h4>
                <p className="text-sm text-muted-foreground">Related to menstrual cycle</p>
              </div>
            </div>

            {/* Non-cyclic Pain */}
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Activity className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Non-cyclic Pain</h4>
                <p className="text-sm text-muted-foreground">Unrelated to periods</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-3">
            {/* Sudden (Acute) Pain */}
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Zap className="h-5 w-5 text-destructive" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Sudden (Acute)</h4>
                <p className="text-sm text-muted-foreground">Appears quickly, often severe</p>
              </div>
            </div>

            {/* Persistent (Chronic) Pain */}
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Persistent (Chronic)</h4>
                <p className="text-sm text-muted-foreground">Lasts 3-6 months or more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainTypesCard;
