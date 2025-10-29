'use client'
import LayoutHeader from '@/app/component/adminSide/layoutHeader/LayoutHeader'
import IconButton from '@/app/component/ui/button/IconButton'
import DeleteIcon from '@/app/component/ui/icons/deleteIcon/DeleteIcon'
import DeleteLeadsModal from '@/app/component/ui/modal/deleteModals/deleteLeadModal/DeleteLeadModal'
import { useGetLeadById } from '@/app/hooks/contactLeads/ContactLeads'
import { modalOpenReducer } from '@/redux/slice/ModalSlice'
import { RootState } from '@/redux/store'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const LabelData = ({ heading, text }: { heading: string, text: string }) => {
    return <div className='flex flex-col gap-y-1'>
        <p className='smTextGrey'>{heading}</p>
        <p className='smTextBlack'>{text}</p>
    </div>
}

const Page = () => {
    const params = useParams()

    const id: string = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "";
    console.log("PARAMS:", id);
    const isModalOpen = useSelector((state: RootState) => state.ModalDetail.isModalOpen)
    const { data } = useGetLeadById(id);
    console.log("DATA", data);

    const dispatch = useDispatch()
    const type = data?.helpType
    const [selectedLeadId, setSelectedLeadId] = useState<string | undefined>("");


    const handleDelete = () => {
        setSelectedLeadId(id);
        dispatch(modalOpenReducer());

    };

    return (
        <>
            {isModalOpen && <DeleteLeadsModal id={selectedLeadId} />}

            <div className='bg-white rounded-[16px] '>

                <div className='p-5 pb-0'>

                    <LayoutHeader heading='Lead Information'
                        button={<IconButton onClick={handleDelete} textColor='text-red' borderColor='border-red/30' bgColor='bg-red/30' text='Delete' icon={<DeleteIcon />} />}
                    />
                </div>
                <div className='p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-6'>
                    <LabelData heading="Customer Name" text={data?.firstName + " " + data?.lastName} />
                    <LabelData heading="Email" text={data?.email} />
                    <LabelData heading="Phone" text={data?.phoneNumber} />
                    <LabelData heading="Country" text={data?.country} />
                    <LabelData heading="State" text={data?.state} />
                    <LabelData heading="Date Summited" text={data?.createdAt} />

                </div>
                <hr className='w-full h-[2px] text-lightGrey' />

                <div className='p-5 pb-0 mt-4'>

                    <LayoutHeader heading='Loan Information' />
                    <h1 className='uppercase'>{type}</h1>
                </div>
                <div className='p-5 mt-4 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-2'>

                    {type === "justNeedHelp" && <LabelData heading="Message" text={data?.justNeedHelp?.text} />}
                    {type === "buildingSomething" && <>

                        <LabelData heading="Loan Amount" text={data?.buildingSomething?.loanAmount} />
                        <LabelData heading="Own Land" text={data?.buildingSomething?.isOwnLand} />
                        <LabelData heading="Build Type" text={data?.buildingSomething?.buildType} />
                    </>}
                    {type === "shortTermBusiness" && <>

                        <LabelData heading="Amount Needed" text={data?.shortTermBusiness?.amountNeed} />
                        <LabelData heading="Purpose" text={data?.shortTermBusiness?.purpose} />
                        <LabelData heading="Time Line" text={data?.shortTermBusiness?.timeLine} />
                        <LabelData heading="Build Type" text={data?.shortTermBusiness?.buildType} />
                        <LabelData heading="Monthly Revenue" text={data?.shortTermBusiness?.monthlyRevenue} />
                        <LabelData heading="Collateral" text={data?.shortTermBusiness?.collateral} />
                    </>}
                    {type === "personalLoan" && <>

                        <LabelData heading="Amount Needed" text={data?.personalLoan?.amountNeed} />
                        <LabelData heading="Purpose" text={data?.personalLoan?.purpose} />
                        <LabelData heading="Credit Estimate" text={data?.personalLoan?.creditEstimate} />
                        <LabelData heading="Tax Return Available" text={data?.personalLoan?.taxReturnAvailable} />

                    </>}
                    {type === "clientFinancing" && <>
                        <LabelData heading="Amount Needed" text={data?.clientFinancing?.amountNeed} />
                        <LabelData heading="Will Financing Pay You" text={data?.clientFinancing?.willFinancingPayYou} />
                    </>}


                </div>

            </div>
        </>
    )
}

export default Page