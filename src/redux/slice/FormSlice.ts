import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formDetails: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        country: '',
        state: '',
        helpType: '',
        agreement: true,
        buildingSomething: {
            loanAmount: '',
            isOwnLand: '',
            buildType: ''
        },
        shortTermBusiness: {
            amountNeed: '',
            purpose: '',
            timeLine: '',
            monthlyRevenue: '',
            collateral: '',
            buildType: '',
        },
        personalLoan: {
            amountNeed: '',
            purpose: '',
            creditEstimate: '',
            taxReturnAvailable: ''
        },
        clientFinancing: {
            amountNeed: '',
            willFinancingPayYou: '',
        },
        justNeedHelp: { text: '' }
    }
}
const UserDetail = createSlice({
    name: "FormDetail",
    initialState: initialState,
    reducers: {
        saveFormDetail: (state, action) => {
            console.log("SAVE FORM DETAILS", action.payload);

            // ✅ Merge instead of overwrite
            state.formDetails = {
                ...state.formDetails,
                ...action.payload, // this ensures only the provided keys are updated
            };
        },
        clearFormDetail: (state) => {
            state.formDetails = { ...initialState.formDetails };
        },

    }
})

export const { saveFormDetail, clearFormDetail } = UserDetail.actions
export default UserDetail.reducer