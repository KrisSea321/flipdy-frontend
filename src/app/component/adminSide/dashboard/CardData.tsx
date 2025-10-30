/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import LeadUser from '../../ui/icons/userIcon/LeadUser'
import Card from '../../ui/card/Card'
import Link from 'next/link'
import ForwardIcon from '../../ui/icons/forwardIcon/ForwardIcon'
import { useGetAllLeadsWoPagination } from '@/app/hooks/contactLeads/ContactLeads'
import { isCurrentMonth } from '@/utils/isCurrentMonth'
import { LeadType } from '@/app/types/LeadType'

const CardData = () => {


    const { data: leadsRes } :any= useGetAllLeadsWoPagination()

    const totalContactLeads = leadsRes?.data?.data?.length || 0

    const allLeads = leadsRes?.data?.data || [];
    const newLeadsThisMonth = allLeads.filter(
        (l: LeadType) => isCurrentMonth(l.createdAt)
    ).length;

    return (
        <div>

            <div className="w-[360px]">

                <Card heading='Contact Leads' hover="hover:bg-[#FFF2D5]">
                    <div className='flex flex-col items-center justify-center w-full gap-y-3 group'>

                        <div className='h-[48px] w-[48px] rounded-full border-[7px] border-solid border-[#FFF2D5] bg-[#FFD165] flex items-center justify-center'>
                            <LeadUser />
                        </div>
                        <p className={`font-bold text-[36px] `}>{totalContactLeads}</p>
                        <p className={`agBodyMediumGrey `}>Recent leads</p>
                        <p className='normalTextGrey'>{newLeadsThisMonth} leads this week</p>
                        <Link href="/dashboard/leads" className='text-[#FFD165] flex items-center gap-x-4 opacity-0 group-hover:opacity-100 duration-500 transition-all cursor-pointer'>
                            <p>Manage Leads</p>
                            <ForwardIcon color='#FFD165' />
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CardData