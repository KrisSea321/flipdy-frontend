import InputField from '@/app/component/ui/inputField/InputField'
import { saveFormDetail } from '@/redux/slice/FormSlice';
import { RootState } from '@/redux/store';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
export type QuickBasicFormValues = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string;
    country: string;
    state: string;

}
const QuickBasicForm = ({ onSubmitForm }: { onSubmitForm: (data: QuickBasicFormValues) => void }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<QuickBasicFormValues>()
    const dispatch = useDispatch()
    const formData = useSelector((state: RootState) => state.FormDetails.formDetails)
    const addFun = (data: QuickBasicFormValues) => {

        dispatch(saveFormDetail(data))
        onSubmitForm(data)
    }

    useEffect(() => {
        setValue("firstName", formData.firstName)
        setValue("lastName", formData.lastName)
        setValue("phoneNumber", formData.phoneNumber)
        setValue("email", formData.email)
        setValue("state", formData.state)
        setValue("country", formData.country)
    }, [setValue, formData])

    return (
        <div className='mt-6'>
            <p className='normalSecondaryHeadingBlack'>Quick Basic</p>
            <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(addFun)}>
                <InputField<QuickBasicFormValues>
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your First Name"
                    register={register}
                    error={errors.firstName}
                    required
                />

                <InputField

                    label="Last Name"

                    name="lastName"
                    placeholder="Enter your Last Name"
                    register={register}
                    error={errors.lastName}
                    required
                />
                <InputField

                    label="Phone Number"

                    name="phoneNumber"
                    placeholder="Enter your Phone Number"
                    register={register}
                    error={errors.phoneNumber}
                    required
                />
                <InputField
                    label="Email"
                    name="email"
                    placeholder="Enter your Email"
                    register={register}
                    error={errors.email}
                    required
                />
                <div className='flex items-center justify-between'>
                    <div className='w-[49%]'>

                        <InputField
                            label="Country"
                            name="country"
                            placeholder="Enter your Country"
                            register={register}
                            error={errors.country}
                            required
                        />
                    </div>

                    <div className='w-[49%]'>

                        <InputField
                            label="State"
                            name="state"
                            placeholder="Enter your State"
                            register={register}
                            error={errors.state}
                            required
                        />
                    </div>
                </div>
                <button id="hiddenSubmit" type="submit" className="hidden"></button>
            </form>
        </div>
    )
}

export default QuickBasicForm