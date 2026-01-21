import React from 'react'
import { Heart, Shield, MessageCircle, Users } from 'lucide-react'

const cards = [
  {
    id: 1,
    icon: <Heart className="w-10 h-10 mx-auto mb-4 text-[#FF4B8B]" />,
    title: "It's Normal to Feel Worried",
    description:
      'Lumps on intimate areas can feel worrying or embarrassing - these feelings are completely normal and valid.',
  },
  {
    id: 2,
    icon: <Shield className="w-10 h-10 mx-auto mb-4 text-[#FF4B8B]" />,
    title: 'Most Are Harmless',
    description:
      'The vast majority of lumps are not cancer and are easily treatable or resolve on their own.',
  },
  {
    id: 3,
    icon: <MessageCircle className="w-10 h-10 mx-auto mb-4 text-[#FF4B8B]" />,
    title: 'Ask Questions',
    description:
      "It's okay to ask questions and get reassurance from your healthcare provider - we are here to help.",
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10 mx-auto mb-4 text-[#FF4B8B]" />,
    title: "You're Not Alone",
    description:
      'Many people experience similar concerns. Support groups and resources are available.',
  },
]

const EmotionalWellbeingSupport = () => {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#FF4B8B]">
              Emotional Wellbeing &amp; Support
            </h2>
            <p className="text-lg text-gray-700">
              Your emotional health is just as important as your physical health
            </p>
          </div>

          {/* Dynamic Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white flex flex-col gap-6 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="px-6 text-center">
                  {card.icon}
                  <div className="font-semibold text-lg mb-2" style={{ color: deepPink }}>
                    {card.title}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remember Section */}
          <div className="rounded-lg p-6 shadow-sm bg-[#FF4B8B]/10">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-[#BB125B]">
                <Heart className="inline-block mr-2 text-[#FF4B8B]" />
                Remember
              </h3>
              <div className="space-y-2 mb-6 text-gray-800">
                <p>• Vulvar and vaginal lumps are common and usually harmless</p>
                <p>• Most are not cancerous and are easily treatable</p>
                <p>• Getting checked gives peace of mind and fast treatment if needed</p>
                <p className="font-medium">
                  • If you notice a lump or bump, book an appointment — don't wait and worry alone
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shadow-sm h-9 px-4 py-2 bg-[#FF4B8B] text-white"
                >
                  Book Appointment
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shadow-sm h-9 px-4 py-2 border border-[#FF4B8B] text-[#FF4B8B]"
                >
                  Find Support Groups
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmotionalWellbeingSupport
