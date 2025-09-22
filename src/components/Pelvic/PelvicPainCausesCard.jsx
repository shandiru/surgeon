import React, { useState } from 'react';
import { Heart, Activity, CircleCheck, AlertTriangle, ChevronDown, Target } from 'lucide-react';

const PelvicPainAccordion = () => {
    const [openSection, setOpenSection] = useState(null); // Track only the currently open section

    const handleToggle = (section) => {
        setOpenSection((prevState) => (prevState === section ? null : section)); // Toggle between open and closed
    };

    return (
        <div className="space-y-6 bg-gradient-to-b from-primary/5 to-background py-8 px-4">
            <div className="text-[#d60d64] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 rounded-xl p-6 hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
                {/* Gynaecological Causes Accordion */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-semibold text-primary mb-4">Pelvic Pain Causes</h1>
                    <p className="text-lg text-muted-foreground">
                        Common causes of pelvic pain related to reproductive health
                    </p>
                </div>

                {/* Gynaecological Causes Accordion Trigger */}
                <div
                    className="cursor-pointer p-4 bg-primary/10 rounded-md flex justify-between items-center"
                    onClick={() => handleToggle('gynaecological')}
                >
                    <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-primary" />
                        <span>Gynaecological Causes</span>
                    </div>
                    <ChevronDown
                        className={`transform transition-all ${openSection === 'gynaecological' ? 'rotate-180' : ''} ml-auto`}
                    />
                </div>

                {/* Gynaecological Causes Accordion Content */}
                {openSection === 'gynaecological' && (
                    <div className="space-y-4 mt-4 px-6 text-sm">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-primary" />
                                Menstrual cramps <br /> Common before or during periods
                            </li>
                            <li className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-primary" />
                                Ovulation pain (mittelschmerz) <br /> Sharp pain mid-cycle on one side
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-primary" />
                                Endometriosis <br /> Womb lining tissue grows outside the uterus
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-primary" />
                                Pelvic inflammatory disease (PID) <br /> Infection of the womb and surrounding tissues
                            </li>
                            <li className="flex items-center gap-2 text-red-500">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                                Ectopic pregnancy <br /> Pregnancy growing outside the womb (medical emergency)
                            </li>
                        </ul>
                    </div>
                )}
                <hr className='text-gray-300 w-245 mt-2 mx-auto' />
                {/* Urinary Causes Accordion */}
                <div
                    className="cursor-pointer p-4 rounded-md flex justify-between items-center mt-4"
                    onClick={() => handleToggle('urinary')}
                >
                    <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-primary" />
                        <span>Urinary Causes</span>
                    </div>
                    <ChevronDown
                        className={`transform transition-all ${openSection === 'urinary' ? 'rotate-180' : ''} ml-auto`}
                    />
                </div>
                <hr className='text-gray-300 w-245 mt-2 mx-auto' />
                {/* Urinary Causes Accordion Content */}
                {openSection === 'urinary' && (
                    <div className="space-y-4 mt-4 px-6 text-sm">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-primary" />
                                Cystitis / UTI <br /> Bladder infection or urinary tract infection
                            </li>
                            <li className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-primary" />
                                Interstitial cystitis <br />Long-term bladder inflammation with no clear cause
                            </li>
                            <li className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-primary" />
                                Urinary stones <br />Crystals that form in the bladder or kidneys
                            </li>
                        </ul>
                    </div>
                )}

                {/* Digestive Causes Accordion */}
                <div
                    className="cursor-pointer p-4 bg-primary/10 rounded-md flex justify-between items-center mt-4"
                    onClick={() => handleToggle('digestive')}
                >
                    <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-primary" />
                        <span>Digestive Causes</span>
                    </div>
                    <ChevronDown
                        className={`transform transition-all ${openSection === 'digestive' ? 'rotate-180' : ''} ml-auto`}
                    />
                </div>

                {/* Digestive Causes Accordion Content */}
                {openSection === 'digestive' && (
                    <div className="space-y-4 mt-4 px-6 text-sm">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-primary" />
                                Irritable bowel syndrome (IBS) <br /> Causes pain, bloating, constipation or diarrhoea
                            </li>
                            <li className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-primary" />
                                Appendicitis <br />Inflamed appendix causing sudden pain in lower right abdomen
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PelvicPainAccordion;
