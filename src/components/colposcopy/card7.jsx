import React from 'react';

const Colposcopycard7 = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-primary">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Emotional Wellbeing
          </div>
          <div className="text-muted-foreground text-sm">It's normal to feel nervous - you're not alone</div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Your Feelings Matter */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">💭 Your Feelings Matter</h4>
            <p className="text-sm leading-relaxed">It's completely normal to feel nervous or worried before a colposcopy. Many people experience anxiety about medical procedures, and that's okay.</p>
          </div>

          {/* Ways to Feel More Comfortable */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Ways to Feel More Comfortable</h4>
              <div className="space-y-2">
                {[
                  'Ask for a chaperone during the exam',
                  'Bring a friend or family member for support',
                  'Write down questions beforehand',
                  'Practice relaxation breathing',
                  'Talk to your nurse or doctor about worries'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4 text-accent mt-0.5 flex-shrink-0">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Remember */}
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-3">💗 Remember</h4>
              <ul className="text-sm space-y-2">
                <li>• Colposcopy is safe, quick, and effective</li>
                <li>• It helps detect problems early</li>
                <li>• Regular screening protects your health</li>
                <li>• Your healthcare team is here to support you</li>
              </ul>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">🌟 Final Thoughts</h4>
            <p className="text-sm leading-relaxed">If you've been referred for a colposcopy, try not to worry. This procedure is a positive step in taking care of your health. Your medical team will support you every step of the way, and you can always ask questions or express concerns.</p>
          </div>

          {/* Complete Guide Button */}
          <div className="pt-4">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 w-full">
              Complete Guide ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colposcopycard7;
