import { useState } from 'react';

const SymptomsSection = () => {
  const [symptoms, setSymptoms] = useState({
    newLump: false,
    painful: false,
    growing: false,
    hard: false,
    pus: false,
    blood: false,
    discharge: false,
    fever: false,
    stiSymptoms: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSymptoms((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <section id="symptoms" className="py-16 text-[#d60d64]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🩺 When to See Your Doctor</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Check any symptoms you're experiencing to understand when medical attention is needed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Symptom Checker Card */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl  py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-[0_0_25px_rgba(255,151,179,0.5)] hover:-translate-y-2 active:scale-[0.98] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div className="leading-none font-semibold flex items-center space-x-2">
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
                    className="lucide lucide-clock w-5 h-5 text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Symptom Checker</span>
                </div>
              </div>
              <div className="px-6 space-y-4">
                {[
                  { id: 'newLump', label: 'A new lump that does not go away within a few weeks', urgent: true },
                  { id: 'painful', label: 'The lump is painful', urgent: true },
                  { id: 'growing', label: 'The lump is growing in size', urgent: true },
                  { id: 'hard', label: 'The lump feels hard', urgent: true },
                  { id: 'pus', label: 'Signs of infection: pus', urgent: true },
                  { id: 'blood', label: 'Signs of infection: blood', urgent: true },
                  { id: 'discharge', label: 'Unusual discharge', urgent: false },
                  { id: 'fever', label: 'Fever', urgent: true },
                  { id: 'stiSymptoms', label: 'Symptoms of a sexually transmitted infection', urgent: true },
                ].map(({ id, label, urgent }) => (
                  <div key={id} className="flex items-start space-x-3">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={symptoms[id] ? 'true' : 'false'}
                      onClick={handleCheckboxChange}
                      data-state={symptoms[id] ? 'checked' : 'unchecked'}
                      className="peer -input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:-primary focus-visible:-ring focus-visible:ring-ring/50"
                      id={id}
                    ></button>
                    <label htmlFor={id} className="text-sm cursor-pointer leading-relaxed">
                      {label}
                      {urgent && <span className="ml-2 text-xs bg-[#FF4B8B]/10 text-primary px-2 py-1 rounded">Urgent</span>}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Card */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-6 py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8]  hover:shadow-[0_0_25px_rgba(255,151,179,0.5)] hover:-translate-y-2 active:scale-[0.98] hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div className="leading-none font-semibold flex items-center space-x-2">
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
                    className="lucide lucide-thermometer w-5 h-5 text-muted-foreground"
                  >
                    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                  </svg>
                  <span>Assessment</span>
                </div>
              </div>
              <div className="text-center py-8">
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
                  className="lucide lucide-droplets w-12 h-12 text-muted-foreground mx-auto mb-4"
                >
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </svg>
                <p className="text-muted-foreground">Select any symptoms you're experiencing to get personalized guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
