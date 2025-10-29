import React from 'react'

interface ButtonProps {
    text: string
    onClick?: () => void
    isBorder?: boolean
    px?: string
    py?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    isBorder = false,
    py = 'py-2',
    px = 'px-6',
    type = 'button', // default
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer w-full md:w-auto  mt-4 border-[2px] border-solid ${py} ${px} rounded-full text-center transition
                ${isBorder
                    ? 'border-primary text-primary hover:bg-gradient-to-bl hover:from-primaryLight hover:to-primary hover:text-white'
                    : 'bg-gradient-to-bl from-primaryLight to-primary text-white hover:opacity-90'}
            `}
        >
            {text}
        </button>
    )
}

export default Button
