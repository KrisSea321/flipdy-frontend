import React, { ReactNode } from 'react'
interface ButtonProps {
    text: string
    onClick: () => void
    isBorder?: boolean
    borderColor: string
    px?: string
    py?: string
    icon?: ReactNode
    bgColor: string
    textColor: string
}
const IconButton: React.FC<ButtonProps> = ({ borderColor, text, bgColor, onClick, icon, isBorder = false, py = "py-2", px = "px-6", textColor }) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-x-2  cursor-pointer  border-[2px]  border-solid ${py} ${px} rounded-full text-center transition
    ${isBorder
                    ? "border-primary text-primary hover:bg-gradient-to-bl hover:from-primaryLight hover:to-primary hover:text-white"
                    : `  ${bgColor} ${textColor} hover:opacity-90 ${borderColor}`
                }
  `}

        >
            {text} {icon}
        </div>
    )
}

export default IconButton