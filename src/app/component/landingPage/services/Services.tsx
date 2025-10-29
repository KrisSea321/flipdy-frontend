import React from "react";
import ConnectArrow from "../../ui/icons/arrowDown/ConnectArrow";
import Chain from "../../ui/icons/chain/Chain";
import CheckBadge from "../../ui/icons/checkBadge/CheckBadge";

const Services = () => {
    const data = [
        {
            icon: <ConnectArrow />,
            heading: "We're the guide",
            text: "We connect you with real lenders who fit your specific situation. No hidden agenda.",
        },
        {
            icon: <CheckBadge height="46" width="56" />,
            heading: "No scripts or spam",
            text: "Real conversations with real people who understand your business and needs.",
        },
        {
            icon: <Chain />,
            heading: "We match you to real lenders",
            text: "Our network includes legitimate lenders who specialize in different types of funding.",
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-8 lg:px-16">
            {/* Heading */}
            <p className="semiboldHeadingBlack text-center mb-8 text-[24px] sm:text-[32px] lg:text-[36px]">
                What We Actually Do
            </p>

            {/* Layout Wrapper */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Image */}
                <div className="w-full lg:w-[35%] flex justify-center">
                    <img
                        src="/assets/heroImages/howItWorks.png"
                        alt="Hero"
                        className="w-full max-w-[500px] h-auto rounded-[16px] object-cover"
                    />
                </div>

                {/* Right Text Boxes */}
                <div className="w-full lg:w-[60%] flex flex-col gap-y-4">
                    {data.map((item, id) => (
                        <div
                            key={id}
                            className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 border border-lightGrey rounded-md"
                        >
                            <div className="shrink-0">{item.icon}</div>
                            <div className="flex flex-col gap-y-1">
                                <p className="normalSemiboldTextBlack text-[18px] sm:text-[20px]">
                                    {item.heading}
                                </p>
                                <p className="smTextGrey text-[14px] sm:text-[15px]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
