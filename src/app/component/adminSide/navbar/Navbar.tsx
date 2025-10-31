
import Image from 'next/image'
import React from 'react'
const Navbar = () => {
    return (
        <div className='rounded-[16px] ml-6 py-3 px-4 bg-white flex items-center justify-between w-[100%]'>
            <div>
                <p className={` text-[16px] sm:text-[20px] font-medium`}>Hi, Admin</p>
                <p className={` text-[#676767]  hidden sm:block sm:text-[14px]`}>
                    Welcome back to Flipdy</p>
            </div>
            <div className='flex items-center gap-x-4'>

                <div className='w-[54px] h-[54px] relative'>

                    <Image src="/assets/logoLg.png"
                        alt="user"
                        fill
                        className='absolute top-0 left-0 rounded-full object-fill border-1 border-solid border-greyscale300'
                    />
                </div>
            </div>

        </div>
    )
}

export default Navbar