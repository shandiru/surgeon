import React from 'react'
import { TrendingUp, ShieldAlert, Clock, Phone, AlertCircle } from 'lucide-react'

const cardData = [
  {
    id: 1,
    icon: <TrendingUp className="w-6 h-6" style={{ color: '#b03b66' }} />,
    title: 'Rapidly growing lump',
    description: 'Any lump that increases in size quickly over days or weeks',
  },
  {
    id: 2,
    icon: <ShieldAlert className="w-6 h-6" style={{ color: '#b03b66' }} />,
    title: 'Severe pain, fever or spreading redness',
    description: 'Signs of serious infection that need immediate treatment',
  },
  {
    id: 3,
    icon: <ShieldAlert className="w-6 h-6" style={{ color: '#b03b66' }} />,
    title: "Bleeding that won't stop",
    description: 'Persistent or heavy bleeding from the affected area',
  },
  {
    id: 4,
    icon: <Clock className="w-6 h-6" style={{ color: '#b03b66' }} />,
    title: 'Lumps appearing after menopause',
    description: 'New lumps in post-menopausal women require prompt evaluation',
  },
]

const UrgentHelp = () => {
  const pink = '#FFC5D3'
  const deepPink = '#b03b66'

  return (
    <section id="urgent-help" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: deepPink }}>
              <AlertCircle className="inline-block mr-2" style={{ color: deepPink }} />
              When to Seek Urgent Help
            </h2>
            <p className="text-lg text-gray-700">
              Get medical advice quickly if you notice any of these warning signs
            </p>
          </div>

          {/* Warning Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-white flex flex-col gap-4 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 px-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: pink }}
                  >
                    {card.icon}
                  </div>
                  <div className="font-semibold text-lg" style={{ color: deepPink }}>
                    {card.title}
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Urgent Help Call To Action */}
          <div
            className="rounded-lg p-6 shadow-sm"
            style={{ backgroundColor: pink }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" style={{ color: deepPink }} />
                <div>
                  <h3 className="font-semibold" style={{ color: deepPink }}>
                    Need Immediate Help?
                  </h3>
                  <p className="text-sm text-gray-800">
                    Don't wait if you're experiencing urgent symptoms
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all shadow-sm h-9 px-4 py-2"
                  style={{
                    backgroundColor: deepPink,
                    color: 'white',
                  }}
                >
                  Call Emergency Services
                </button>
                <button
                  className="inline-flex items-center justify-center px-4 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shadow-sm h-9 border"
                  style={{
                    borderColor: deepPink,
                    color: deepPink,
                  }}
                >
                  Find Urgent Care
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UrgentHelp
