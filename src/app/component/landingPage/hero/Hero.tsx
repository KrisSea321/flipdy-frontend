'use client'
import React from 'react'
import CheckBadge from '../../ui/icons/checkBadge/CheckBadge'
import WatchIcon from '../../ui/icons/watch/WatchIcon'
import Lock from '../../ui/icons/lock/Lock'
import Spam from '../../ui/icons/spam/Spam'
import Button from '../../ui/button/Button'
import WhoThisIsFor from '../whoThisIsFor/WhoThisIsFor'
import { scrollToGetStarted } from '@/utils/scrollToGetStarted'

const Hero = () => {
    const heroData = [{
        text: "No credit check required",
        icon: <CheckBadge />
    },
    {
        text: "2 minute form",
        icon: <WatchIcon />
    }
        ,
    {
        text: "100% secure",
        icon: <Lock />
    }
        ,
    {
        text: "No Spam",
        icon: <Spam />
    }


    ]
    return (
        <>
            <div className="relative w-full mt-10">
                {/* Background Image */}
                <img
                    src="/assets/heroImages/heroImg.png"
                    alt="Hero"
                    className="w-full h-[600px] object-cover opacity-100"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0">
                    <div
                        className="
        flex flex-col lg:flex-row
        items-center justify-between
        px-6 sm:px-10 lg:px-20
        py-10 lg:py-20
        gap-10
      "
                    >
                        {/* Left Text Section */}
                        <div className="w-full lg:w-[55%] flex flex-col gap-y-6 text-center lg:text-left">
                            <p className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight">
                                Need to Get a Project Moving But{" "}
                                <span className="text-primary">Money&apos;s Tight?</span>
                            </p>

                            <p className="text-base sm:text-lg font-medium text-gray-700">
                                We&apos;ll connect you to the right kind of funding.
                            </p>

                            <p className="text-sm sm:text-base text-gray-600">
                                Whether you&apos;re building from the ground up, trying to finish a job, or just need
                                to get your crew paid — we&apos;ll help you figure out if there&apos;s a way to get it done.
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {heroData?.map((data, id) => (
                                    <div
                                        key={id}
                                        className="flex items-center gap-x-3 w-[80%] sm:w-[45%] md:w-[40%] lg:w-[40%]"
                                    >
                                        {data?.icon}
                                        <p className="text-sm sm:text-base">{data?.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto lg:mx-0">
                                <Button
                                    text="Start the Form – Takes 2 Minutes"
                                    py="py-4"
                                    onClick={scrollToGetStarted}
                                />
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="hidden   md:w-[60%] lg:w-[40%] md:flex sm:justify-center">
                            <img
                                src="/assets/heroImages/heroIlusstrator.png"
                                alt="Hero Illustration"
                                className="w-full h-auto max-h-[500px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <WhoThisIsFor />
        </>
    )
}

export default Hero