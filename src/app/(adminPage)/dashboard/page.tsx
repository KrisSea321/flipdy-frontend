
import CardData from '@/app/component/adminSide/dashboard/CardData'
import LayoutHeader from '@/app/component/adminSide/layoutHeader/LayoutHeader'
import React from 'react'

const page = () => {
    return (
        <>
            <LayoutHeader heading='Dashboard Overview' />


            <CardData />

        </>
    )
}

export default page