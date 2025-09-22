import React from 'react';
import { Heart, Calendar, Activity, Target, Clock } from 'lucide-react'; // Importing Lucide icons

const SelfCareTips = () => {
  return (
    <div className="text-[#d60d64] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
      <div className="px-6 pt-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-2xl font-semibold text-secondary">Self-Care Tips</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-3">
            {/* Tip 1 */}
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Calendar className="h-5 w-5 text-secondary mt-1" />
              <div>
                <h5 className="font-medium">Track your pain</h5>
                <p className="text-sm text-muted-foreground">Note timing, triggers, and severity</p>
              </div>
            </div>
            {/* Tip 2 */}
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Heart className="h-5 w-5 text-secondary mt-1" />
              <div>
                <h5 className="font-medium">Use heat therapy</h5>
                <p className="text-sm text-muted-foreground">Warm baths or hot water bottles for cramps</p>
              </div>
            </div>
            {/* Tip 3 */}
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Activity className="h-5 w-5 text-secondary mt-1" />
              <div>
                <h5 className="font-medium">Gentle exercise</h5>
                <p className="text-sm text-muted-foreground">Relaxation and stress management</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {/* Tip 4 */}
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Target className="h-5 w-5 text-secondary mt-1" />
              <div>
                <h5 className="font-medium">Balanced diet</h5>
                <p className="text-sm text-muted-foreground">Eat well and drink plenty of water</p>
              </div>
            </div>
            {/* Tip 5 */}
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Clock className="h-5 w-5 text-secondary mt-1" />
              <div>
                <h5 className="font-medium">Rest when needed</h5>
                <p className="text-sm text-muted-foreground">Take breaks when pain flares up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCareTips;
