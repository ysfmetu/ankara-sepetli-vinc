'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface PricingFAQProps {
    items: FAQItem[];
}

export default function PricingFAQ({ items }: PricingFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((faq, index) => (
                <div
                    key={index}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50 bg-red-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                    <button
                        className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none"
                        onClick={() => handleToggle(index)}
                    >
                        <span
                            className={`font-bold text-base pr-6 ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}
                        >
                            {faq.question}
                        </span>
                        <div
                            className={`p-1 rounded-full shrink-0 ${openIndex === index ? 'bg-primary/10 text-primary' : 'text-gray-400'}`}
                        >
                            {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                    </button>

                    <div
                        className={`transition-all duration-300 px-5 overflow-hidden ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="h-px w-full bg-gray-100 mb-3"></div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
