import Link from 'next/link'
import React from 'react'
import Logo from '../ui/icons/logo/Logo'
import CallIcon from '../ui/icons/callIcon/CallIcon'
import MessageIcon from '../ui/icons/messageIcon/MessageIcon'

const Footer = () => {
    return (
        <footer className="bg-lightGrey px-6  sm:px-10 md:px-16 py-10 md:py-16  md:rounded-tl-[48px] md:rounded-tr-[48px]">
            {/* Main Footer Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-[55%]">
                    <Link href="/" className="shrink-0">
                        <div className="relative h-[50px] w-[140px] md:h-[55px] md:w-[150px]">
                            <Logo />
                        </div>
                    </Link>
                    <p className="smTextBlack text-sm md:text-base leading-relaxed text-left md:text-justify">
                        Connecting contractors, business owners, and builders with the right funding
                        solutions. No credit checks, no spam, just honest guidance to real lenders.
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[35%]">
                    <p className="normalSemiboldTextBlack mb-4 md:mb-6 text-left md:text-right">
                        Useful Links
                    </p>
                    <div className="flex items-center md:justify-end gap-x-6">
                        <CallIcon />
                        <MessageIcon />
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <p className="text-center smTextGrey mt-10 md:mt-20 text-xs sm:text-sm">
                © 2025 Flipdy. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
