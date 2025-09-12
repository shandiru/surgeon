'use client'

import { LuUsers, LuStethoscope, LuCircleCheckBig } from 'react-icons/lu'

export default function BenefitsSection() {
  const patientBenefits = [
    'Smaller incisions, resulting in reduced scarring',
    'Less postoperative pain',
    'Lower risk of infection',
    'Shorter hospital stays',
    'Faster return to normal activities',
    'Reduced blood loss and need for transfusion',
  ]

  const surgeonBenefits = [
    'Enhanced visualization with 3D magnified views',
    'Superior dexterity and precision',
    'Ergonomic comfort during long procedures',
    'Ability to perform complex procedures with greater control',
  ]

  return (
    <section className="py-16" style={{ backgroundColor: '#FFF5F8' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits for Patients */}
            <div className="hover:shadow-[0_0_15px_rgba(255,197,211,0.4)] transition-shadow duration-300 rounded-lg p-6 bg-white border border-[#FFC5D3]">
              <h3 className="text-2xl font-bold mb-8 text-[#b03b66] flex items-center gap-2">
                <LuUsers className="w-6 h-6 text-[#b03b66]" />
                Benefits for Patients
              </h3>
              <div className="space-y-4">
                {patientBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-[#b03b66] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages for Surgeons */}
            <div className="hover:shadow-[0_0_15px_rgba(255,197,211,0.4)] transition-shadow duration-300 rounded-lg p-6 bg-white border border-[#FFC5D3]">
              <h3 className="text-2xl font-bold mb-8 text-[#b03b66] flex items-center gap-2">
                <LuStethoscope className="w-6 h-6 text-[#b03b66]" />
                Advantages for Surgeons
              </h3>
              <div className="space-y-4">
                {surgeonBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-[#b03b66] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
