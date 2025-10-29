import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
}
const ModalDetail = createSlice({
    name: "ModalDetail",
    initialState: initialState,
    reducers: {
        modalOpenReducer: ((state) => {
            state.isModalOpen = true
        }),
        modalCloseReducer: ((state) => {
            state.isModalOpen = false
        }),


    }
})

export const { modalOpenReducer, modalCloseReducer } = ModalDetail.actions
export default ModalDetail.reducer