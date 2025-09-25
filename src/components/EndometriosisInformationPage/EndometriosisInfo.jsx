import React from 'react';

function EndometriosisInfo() {
  const pink = '#FFC5D3';
  const deepPink = '#FF4B8B';

  return (
    <section className="py-16 bg-white text-[#333] px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: deepPink }}>
            What Is Endometriosis?
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the condition and how it affects your body
          </p>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-6 rounded-2xl bg-white text-[#333] shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
          {/* Title */}
          <div
            className="flex items-center gap-2 font-semibold text-lg"
            style={{ color: deepPink }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={deepPink}
              strokeWidth="2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            The Condition Explained
          </div>

          {/* Content */}
          <div className="space-y-4 mt-2">
            <p className="text-lg leading-relaxed">
              Endometriosis is a condition where the tissue that normally lines your uterus
              (called the endometrium) grows outside the uterus.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              {/* Left Side */}
              <div>
                <h4 className="font-semibold mb-3" style={{ color: deepPink }}>
                  This abnormal tissue can affect:
                </h4>
                <ul className="space-y-2">
                  {['Ovaries', 'Fallopian tubes', 'The pelvic lining', '(In rare cases) other organs'].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: deepPink }}
                        />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Right Side */}
              <div>
                <h4 className="font-semibold mb-3" style={{ color: deepPink }}>
                  This can lead to:
                </h4>
                <ul className="space-y-2">
                  {['Inflammation', 'Pain', 'Scarring and adhesions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2" style={{ color: deepPink }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={deepPink}
                        strokeWidth="2"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlight Note */}
            <div
              className="p-4 rounded-lg mt-6 shadow-inner"
              style={{ backgroundColor: pink }}
            >
              <p className="text-sm" style={{ color: deepPink }}>
                <strong>Important:</strong> Endometriosis is not dangerous, but it can cause
                significant pain and affect fertility if untreated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EndometriosisInfo;
