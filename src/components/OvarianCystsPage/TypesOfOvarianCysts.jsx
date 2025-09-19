import React, { useState } from 'react';
import { Activity, ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, badge, content, imageContent, isDestructive = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border rounded-lg px-4 ${isDestructive ? 'border-destructive/20' : ''}`}>
            <h3 className="flex">
                <button
                    type="button"
                    aria-controls="accordion-content"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none"
                >
                    <div className="flex items-center gap-3">
                        {badge && (
                            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0">
                                {badge}
                            </span>
                        )}
                        <span className="font-semibold">{title}</span>
                    </div>
                    <ChevronDown className={`text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            {isOpen && (
                <div
                    id="accordion-content"
                    role="region"
                    aria-labelledby="accordion-trigger"
                    className="overflow-hidden text-sm py-4"
                >
                    {content}
                    {imageContent && <div className="mb-2">{imageContent}</div>}
                </div>
            )}
        </div>
    );
};

const OvarianCystsCard = () => {
    const functionalCystsContent = (
        <div className="flex gap-5 text-black">
            <div className="border border-gray-200 p-4 rounded-lg shadow-xl">
                <span className="font-bold">Follicle Cysts</span>
                <br /> Form when a follicle does not release an egg and keeps growing. Usually disappear within 1–3 months.
            </div>
            <div className="border border-gray-200 p-4 rounded-lg shadow-xl">
                <span className="font-bold">Corpus Luteum Cysts</span>
                <br /> Form when the follicle reseals after releasing an egg and fills with fluid. Usually resolve in a few weeks.
            </div>
        </div>
    );

    const functionalCystsContent1 = (
        <ul className="list-disc pl-5 text-black">
            <li><strong>Endometriomas</strong> — caused by endometriosis</li>
            <li><strong>Dermoid cysts</strong> — formed from cells present from birth</li>
            <li><strong>Cystadenomas</strong> — fluid-filled and can grow quite large</li>
            <li><strong>PCOS</strong> — multiple small cysts that can cause hormone imbalance and fertility problems</li>
        </ul>
    );

    const functionalCystsContent2 = (
        <div className='pl-5 bg-[#FF4B8B]/10 p-2 rounded-lg text-black'>Rare, but more common after menopause. Must be checked by a doctor to rule out ovarian cancer.</div>
    );

    return (
        <div className="text-[#d60d64] flex flex-col gap-6 rounded-xl border py-6 shadow-lg">
            <div className="px-6 pb-6 border-b">
                <div className="font-semibold flex items-center gap-3 text-2xl">
                    <Activity className="w-6 h-6 text-primary" />
                    Types of Ovarian Cysts
                </div>
            </div>
            <div className="p-8 space-y-4">
                <AccordionItem
                    title="Functional Cysts (Harmless)"
                    badge="Most Common"
                    imageContent={functionalCystsContent} // Content you want to display
                />
                <AccordionItem
                    title="Other Benign Cysts"
                    badge="Benign"
                    imageContent={functionalCystsContent1}
                />
                <AccordionItem
                    title="Malignant (Cancerous) Cysts"
                    badge="Rare"
                    imageContent={functionalCystsContent2}
                />
            </div>
        </div>
    );
};

export default OvarianCystsCard;
