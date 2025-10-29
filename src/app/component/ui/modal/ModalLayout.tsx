'use client'

// ModalLayout.tsx
// import {    isViewLeadmodalCloseReducer     } from '@/redux/slice/ModalSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CrossIcon } from 'lucide-react'
import { modalCloseReducer } from '@/redux/slice/ModalSlice'
interface ModalLayoutProps {
    children?: React.ReactNode
    showCrossIcon?: boolean
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ children, showCrossIcon = "true" }) => {
    // const isModalOpen = useSelector((state: RootState) => state.ModalDetail.isModalOpen)
    const isModalOpen = true

    const dispatch = useDispatch()
    const closeModal = () => {

        dispatch(modalCloseReducer());

    }

    if (!isModalOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={closeModal}
        >
            <div
                className="bg-white w-full md:w-[90%] xl:w-[45%]   rounded-[16px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[80vh]relative">
                    {showCrossIcon &&
                        <div className='absolute top-7 right-4' onClick={closeModal}>
                            <CrossIcon />
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalLayout
