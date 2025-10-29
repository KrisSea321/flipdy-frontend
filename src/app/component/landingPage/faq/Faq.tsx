'use client'

import React, { useState } from "react";
import ArrowDownBlue from "../../ui/icons/arrowDown/ArrowDownBlue";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const data = [
        {
            question: "Do you do the lending?",
            answer:
                "No. We connect you to lenders — banks or private. If your deal’s no good, we’ll tell you straight up.",
        },
        {
            question: "Will this hurt my credit?",
            answer: "No. Just filling out the form doesn’t affect your credit.",
        },
        {
            question: "How do you make money?",
            answer: "If your deal funds, we may get a referral cut — never from you.",
        },
        {
            question: "Don’t own the land?",
            answer:
                "Still fill it out. We’ve seen deals funded without outright ownership.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? 0 : index);
    };
    console.log(openIndex, typeof openIndex);

    return (
        <>
            <div className="bg-lightGrey px-4 sm:px-12 md:px-16 py-6">
                <p className="semiboldHeadingBlack text-center">
                    Frequently Asked Questions
                </p>
                <p className="normalTextGrey text-center mt-4">
                    We help connect the right people with the right funding solutions
                </p>

                <div className="mt-8 space-y-4">
                    {data.map((item, id) => (
                        <div
                            key={id}
                            className="p-4 border border-lightGrey bg-white rounded-lg"
                        >
                            {/* Question Row */}
                            <div
                                onClick={() => toggleFAQ(id)}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <p className="font-medium text-black">{item.question}</p>
                                <div
                                    className={`transition-transform duration-300 ${openIndex === id ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <ArrowDownBlue />
                                </div>
                            </div>

                            {/* Answer Section */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${openIndex === id ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-4 py-3 smTextGrey border border-lightGrey rounded-md">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrivacyPolicy />
        </>
    );
};

export default Faq;
