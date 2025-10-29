import React from 'react'
import Hammar from '../../ui/icons/hammar/Hammar'
import BuildingIcon2 from '../../ui/icons/building/BuildingIcon2'
import Screw2 from '../../ui/icons/screw/Screw2'
import Notepad from '../../ui/icons/notepad/Notepad'

const WhoThisIsFor = () => {
    const data = [{
        icon: <Hammar />,
        heading: "Contractors",
        text: "Get funding for equipment, materials, and crew payments"

    }
        ,
    {
        icon: <BuildingIcon2 />,
        heading: "Business Owners",
        text: "Short-term loans for operations and growth"

    }
        ,
    {
        icon: <BuildingIcon2 />,
        heading: "Franchise Builders",
        text: "Capital for new locations and expansion"

    }
        ,
    {
        icon: <Screw2 />,
        heading: "Tradespeople",
        text: "Equipment financing and working capital"

    }
        ,
    {
        icon: <Notepad />,
        heading: "Project Developers",
        text: "From blueprint to completion funding"

    }
    ]
    return (
        <div className='py-16 bg-white'>
            <div className='px-4 sm:px-8 lg:px-16 bg-lightGrey py-10'>

                <p className='semiboldHeadingBlack text-center'>Who This Is For</p>
                <p className='normalTextGrey text-center mt-4'>We help connect the right people with the right funding solutions</p>
                <div className="flex flex-wrap items-center justify-between mt-6">
                    {data.map((item, id) => (
                        <div
                            key={id}
                            className={`
        bg-white
        ${id >= data.length - 2 ? "lg:w-[49%]" : "lg:w-[32%]"}
        w-full sm:w-[48%]
        flex flex-col items-center justify-center
        px-4 py-8 rounded-md mb-4 gap-y-4
      `}
                        >
                            {item.icon}
                            <p className="text-center normalSemiboldTextBlack">{item.heading}</p>
                            <p className="text-center smTextGrey">{item.text}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default WhoThisIsFor