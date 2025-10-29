'use client'
import LayoutHeader from '@/app/component/adminSide/layoutHeader/LayoutHeader'
import DeleteLeadsModal from '@/app/component/ui/modal/deleteModals/deleteLeadModal/DeleteLeadModal'
import Pagination from '@/app/component/ui/pagination/Pagination'
import SearchBar from '@/app/component/ui/searchBar/SearchBar'
import Table from '@/app/component/ui/table/Table'
import { useGetAllLeads } from '@/app/hooks/contactLeads/ContactLeads'
import { LeadType } from '@/app/types/LeadType'
import { modalOpenReducer } from '@/redux/slice/ModalSlice'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page = () => {

    const columns = [
        { key: "contactInfo", label: "CONTACT INFO" },
        { key: "helpType", label: "HELP TYPE" },
        { key: "phoneNumber", label: "PHONE NUMBER" },
        { key: "createdAt", label: "APPLIED DATE" },
        { key: "state", label: "STATE" },
        { key: "country", label: "COUNTRY" },
    ];
    const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const isModalOpen = useSelector((state: RootState) => state.ModalDetail.isModalOpen)
    const navigate = useRouter()
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    const { data: leadsRes } = useGetAllLeads(currentPage, searchTerm);

    const leads = leadsRes?.data?.data || [];
    console.log("LEAD RES", leads);


    // ✅ Transform leads before passing to Table
    const formattedLeads = (leads as LeadType[]).map((lead: LeadType) => ({
        ...lead,
        contactInfo: {
            name: `${lead.firstName} ${lead.lastName}`,
            email: lead.email,
        },
        createdAt: lead.createdAt
            ? new Date(lead.createdAt).toLocaleDateString("en-GB") // dd/mm/yyyy
            : ""
    }));
    const totalPages = leadsRes?.data?.totalPages || 1;

    const handleEditClick = (id: string) => {
        console.log("Edit clicked, ID:", id);
    };

    const handleViewClick = (id: string) => {
        setSelectedLeadId(id);
        navigate.push(`/dashboard/leads/${id}`)

    };

    const handleDeleteClick = (id: string) => {
        setSelectedLeadId(id);
        dispatch(modalOpenReducer());


    };
    // Reset page to 1 whenever search term changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);
    return (
        <div className='bg-white rounded-[16px] p-5'>


            {isModalOpen && selectedLeadId && <DeleteLeadsModal id={selectedLeadId} />}
            <LayoutHeader heading='Contact Leads'
                searchBar={
                    <SearchBar
                        placeholder='Search Leads by name'
                        value={searchTerm}
                        onChange={setSearchTerm}
                        bgColor="bg-lightGrey"
                    />
                }
            />

            <Table
                columns={columns}
                data={formattedLeads}
                onEditClick={handleEditClick}
                onViewClick={handleViewClick}
                isEditIconShow={false}
                onDeleteClick={handleDeleteClick}
            />
            <div className="flex justify-end mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>

        </div>
    )
}

export default Page
