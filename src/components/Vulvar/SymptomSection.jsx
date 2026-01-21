import { Stethoscope } from 'lucide-react'
import { useState } from 'react'

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
  })

  const handleCheckboxChange = (e) => {
    const { id } = e.currentTarget
    setSymptoms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="symptoms" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#FF4B8B]">
              <Stethoscope className="inline-block mr-2 text-[#FF4B8B]" />
              When to See Your Doctor
            </h2>
            <p className="text-lg text-gray-700">
              Check any symptoms you're experiencing to understand when medical attention is needed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Symptom Checker Card */}
            <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
              <div className="px-6">
                <div className="font-semibold flex items-center space-x-2 text-lg text-[#FF4B8B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
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
                      id={id}
                      className={`w-4 h-4 border rounded-sm mt-1 flex items-center justify-center ${
                        symptoms[id] ? 'bg-[#FF4B8B] text-white' : 'bg-white border-gray-400'
                      }`}
                    >
                      {symptoms[id] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="w-3 h-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                    <label htmlFor={id} className="text-sm cursor-pointer leading-relaxed">
                      {label}
                      {urgent && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-[#FF4B8B]/10 text-[#BB125B]">
                          Urgent
                        </span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Card */}
            <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl py-6 px-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
              <div>
                <div className="font-semibold flex items-center space-x-2 text-lg text-[#FF4B8B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                  </svg>
                  <span>Assessment</span>
                </div>
              </div>
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto mb-4 text-[#FF4B8B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </svg>
                <p className="text-gray-700">
                  Select any symptoms you're experiencing to get personalized guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SymptomsSection
