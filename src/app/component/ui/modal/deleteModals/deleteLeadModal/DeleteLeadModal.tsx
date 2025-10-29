'use client'
import React from 'react'



import { useDispatch } from 'react-redux'
// import { isDeleteLeadsmodalCloseReducer } from '@/redux/slice/ModalSlice'
import toast from 'react-hot-toast'
import ModalLayout from '../../ModalLayout';
import IconButton from '../../../button/IconButton';
import DeleteIcon from '../../../icons/deleteIcon/DeleteIcon';
import { modalCloseReducer } from '@/redux/slice/ModalSlice';
import { useDeleteLead } from '@/app/hooks/contactLeads/ContactLeads';
type Props = {
    id: string | undefined;
};
const DeleteLeadsModal: React.FC<Props> = ({ id }) => {
    const dispatch = useDispatch()
    const mutation = useDeleteLead();

    const handleDelete = () => {
        if (!id) {
            toast.error("Invalid ID. Cannot delete.");
            return;
        }
        toast.success("Data deleted")
        dispatch(modalCloseReducer());
        mutation.mutate(id, {
            onSuccess: () => {
                toast.success("Data deleted")
                // dispatch(isDeleteLeadsmodalCloseReducer());
            },
            onError: () => {
                toast.error("Something went wrong")
                // dispatch(isDeleteLeadsmodalCloseReducer());
            }
        });
    };
    return (
        <ModalLayout showCrossIcon={false}>
            <div className='w-[100%] py-10'>
                <div className='mb-6 flex flex-col items-center justify-center w-full'>
                    <div className='flex items-center justify-center h-[48px] w-[48px] rounded-full bg-[#FCC4C4] border-8 border-solid border-[#FFEFEF]'>
                        <DeleteIcon width='16' height='16' />
                    </div>
                    <h1 className='normalSecondaryHeadingBlack mt-2'>Delete Contact Lead</h1>
                </div>


                <p className='text-center normalTextGrey'>Are you sure you want to delete this item? This action cannot be undone.</p>

                <div
                    className='w-[100%] mt-6 flex items-center justify-center gap-x-4'>
                    <IconButton bgColor='bg-white' borderColor='border-[#CCCCCC]' text='No, Cancel' py="py-2" textColor='text-[#131313]' onClick={() =>
                        dispatch(modalCloseReducer())} />
                    <IconButton bgColor='bg-[#DC2626]' borderColor='border-[#DC2626]' text='Yes, Delete' py="py-2" textColor='text-white' onClick={handleDelete} />
                </div>
            </div>
        </ModalLayout >
    )
}

export default DeleteLeadsModal