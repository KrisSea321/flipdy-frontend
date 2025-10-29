import React from 'react'

interface SubtractIconProps {
    onlCick?: () => void
}
const SubtractIcon: React.FC<SubtractIconProps> = (props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onlCick}>
            <path d="M5 10H15" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default SubtractIcon