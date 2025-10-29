'use client'

import React from 'react'
import CheckBadge from '../../ui/icons/checkBadge/CheckBadge'
import Lock from '../../ui/icons/lock/Lock'
import Spam from '../../ui/icons/spam/Spam'
import Storage from '../../ui/icons/storage/Storage'
import Button from '../../ui/button/Button'
import { scrollToGetStarted } from '@/utils/scrollToGetStarted'

const PrivacyPolicy = () => {
    const data = [
        {
            text: 'All data transmission is secured with 256-bit SSL encryption',
            heading: 'SSL Encrypted',
            icon: <CheckBadge />,
        },
        {
            text: 'We never sell your information to third parties or marketing companies',
            heading: 'Privacy Protected',
            icon: <Lock />,
        },
        {
            heading: 'Spam Protection',
            text: 'Only pre-screened, legitimate lenders will contact you',
            icon: <Storage />,
        },
        {
            text: 'Your personal information is stored on secure, encrypted servers',
            heading: 'Secure Storage',
            icon: <Spam />,
        },
    ]

    return (
        <div className="py-16 bg-gradient-to-t from-primaryLight/30 to-white">
            <div className="px-4 sm:px-12 md:px-16">
                {/* Heading */}
                <p className="semiboldHeadingBlack text-center">
                    Your Security & Privacy Matter
                </p>
                <p className="normalTextGrey text-center mt-4 mb-8">
                    We take data protection seriously and follow industry best practices to keep your
                    information safe.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data?.map((item, id) => (
                        <div
                            key={id}
                            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-y-4 text-center transition-all duration-300 hover:shadow-md"
                        >
                            <div className=" flex items-center justify-center">{item.icon}</div>
                            <p className="normalSemiboldTextBlack">{item.heading}</p>
                            <p className="xsTextGrey">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Trusted Section */}
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl mt-12 p-6 sm:p-10 shadow-sm">
                    <div className="w-full sm:w-[80%] md:w-[60%] flex flex-col items-center gap-y-4 text-center">
                        <p className="normalSemiboldTextBlack">Trusted & Verified</p>
                        <p className="smTextGrey">
                            We are a legitimate referral service with real business credentials. Our lender
                            network is carefully vetted to ensure you only work with reputable financial
                            institutions.
                        </p>
                        <div className="w-full sm:w-[70%] md:w-[50%]">
                            <Button
                                text="Start the Form – Takes 2 Minutes"
                                py="py-4"
                                onClick={scrollToGetStarted}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
