import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const VulvarVaginalSection = () => {
    const [openSections, setOpenSections] = useState({}); // Track open sections

    const handleToggle = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section], // Toggle the state for specific section
        }));
    };

    const sections = [
        {
            id: 'vaginalCysts',
            icon: '🔵',
            title: 'Vaginal Cysts',
            description: 'Pouch-like sacs that can contain pus, air, or scar tissue',
            details: [
                'Usually small and painless',
                'Bartholin\'s cysts – near the vaginal opening',
                'Endometriosis cysts – caused by endometriosis tissue',
                'Gartner\'s duct cysts – often during pregnancy',
                'Inclusion cysts – from vaginal trauma, e.g. after childbirth',
            ],
        },
        {
            id: 'vaginalPolyps',
            icon: '🟡',
            title: 'Vaginal Polyps (Skin Tags)',
            description: 'Small, soft outgrowths of skin',
            details: [
                'Usually harmless and painless',
                'Treated only if they bleed or cause discomfort',
                "Can appear as small, flesh-colored bumps",
                "May develop due to hormonal changes or irritation"
            ],
        },
        {
            id: 'vaginalWarts',
            icon: '🔴',
            title: 'Vaginal Warts or Herpes Blisters',
            description: 'Caused by viral infections (HPV or herpes)',
            details: [
                'Warts are caused by HPV (a common STI)',
                'May appear as small, irregular growths around the vaginal opening',
                'Herpes can cause blisters or sores that may look like pimples',
                'Both conditions are treatable with proper medical care'
            ],
        },
        {
            id: 'vaginalCancer',
            icon: '⚫',
            title: 'Vaginal Cancer (Rare)',
            description: 'Uncommon but requires immediate medical attention',
            details: [
                'Can cause persistent lumps',
                'May also cause unusual bleeding or discharge',
                'Advanced symptoms can include pelvic pain, back pain, constipation or leg swelling',
                'These symptoms are much more likely to be caused by infections or benign lumps'
            ],
        },
    ];

    return (
        <section id="causes" className="py-16 text-[#d60d64]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            💡 Common Causes of Vulvar &amp; Vaginal Lumps
                        </h2>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Understanding the different types of lumps can help you know what to expect
                        </p>
                    </div>

                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div key={section.id} className="bg-card text-card-foreground flex flex-col rounded-xl border py-6 shadow-sm overflow-hidden">
                                <div
                                    className="cursor-pointer grid auto-rows-min grid-rows-[auto_auto] items-start px-6 pb-2 hover:bg-muted/50 transition-colors"
                                    onClick={() => handleToggle(section.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{section.icon}</span>
                                            <div>
                                                <div className="leading-none font-semibold text-left">{section.title}</div>
                                                <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className={`transform transition-all ${openSections[section.id] ? 'rotate-90' : ''}`}
                                        />
                                    </div>
                                </div>
                                {openSections[section.id] && (
                                    <ul className="px-14 space-y-1 list-disc text-sm">
                                        {section.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VulvarVaginalSection;
