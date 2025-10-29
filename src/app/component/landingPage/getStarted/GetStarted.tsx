import React from "react";
import Form from "./form/Form";
import Dollar from "../../ui/icons/dollar/Dollar";
import UnAuthorize from "../../ui/icons/unauthorize/UnAuthorize";
import SearchFancy from "../../ui/icons/searchIcon/SearchFancy";
import CheckBadge from "../../ui/icons/checkBadge/CheckBadge";

const GetStarted = () => {
    const data = [
        { icon: <Dollar />, text: "No cost to apply" },
        { icon: <CheckBadge height="46" width="56" />, text: "No credit check just for filling out" },
        { icon: <UnAuthorize />, text: "No selling your info or spam" },
        { icon: <SearchFancy />, text: "Real review of your deal, real options qualify" },
    ];

    return (
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            {/* Form Section */}
            <div className="text-center relative bg-cover bg-center pb-10"
                style={{ backgroundImage: "url('/assets/heroImages/formImg.png')" }}
            >

                <div className=" w-full px-4 sm:px-8 lg:px-16">
                    <h1 className="semiboldHeadingBlack text-center text-[24px] sm:text-[32px] lg:text-[40px] mt-6">
                        Get Started
                    </h1>
                    <p className="normalTextGrey mb-6 mt-4 text-center text-[14px] sm:text-[16px]">
                        Takes less than 2 minutes. Just enough to point you in the right direction.
                    </p>
                    <div className="max-w-[700px] mx-auto">
                        <Form />
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="mt-16 px-4 sm:px-8 lg:px-16">
                <h1 className="semiboldHeadingBlack text-center text-[22px] sm:text-[28px] mb-12">
                    What Happens When You Fill the Form
                </h1>

                <div className="flex flex-wrap justify-between gap-y-4 md:gap-y-0 gap-6 sm:gap-8">
                    {data.map((item, id) => (
                        <div
                            key={id}
                            className="relative w-full sm:w-[45%] lg:w-[21%] bg-primaryLight/10 border border-primary rounded-[24px] h-[200px] sm:h-[220px] flex items-center justify-center"
                        >
                            {/* ${id < 2 ? "right-[-20px]" : "left-[-20px]"} */}
                            <div
                                className={`md:absolute md:top-[-20px] 
                                   
                                    ${id < 2 ? "md:right-[-20px]" : "md:left-[-20px]"}
                                    p-4 h-[220px] w-full sm:w-[45%] lg:w-[100%] flex flex-col gap-y-6 bg-white items-center justify-center rounded-[32px] shadow-custom`}
                            >
                                {item.icon}
                                <p className="text-[14px] text-center sm:text-[15px] md:text-[16px]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default GetStarted;
