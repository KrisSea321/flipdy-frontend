'use client'
import CheckboxField from '@/app/component/ui/checkbox/Checkbox'
import CheckIcon from '@/app/component/ui/icons/checkIcon/CheckIcon'
import { saveFormDetail } from '@/redux/slice/FormSlice'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

type FormValues = {
    agreement: boolean
}

const SubmitForm = ({ onSubmitForm }: { onSubmitForm: (data: FormValues) => void }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const dispatch = useDispatch()

    const addFun = (data: FormValues) => {
        dispatch(saveFormDetail(data))
        onSubmitForm(data)
    }

    const policies = [
        "We don't run your credit for filling this out",
        "We don't sell your info",
        "You're not committing to anything",
    ]

    return (
        <form className="mt-6" onSubmit={handleSubmit(addFun)}>
            <p className="normalSecondaryHeadingBlack mb-4">Trust + Submit</p>

            {/* Policy Info Section */}
            <div className="bg-lightGrey p-4 rounded-lg flex flex-col gap-y-2">
                {policies.map((policy, id) => (
                    <div className="flex items-center gap-x-4" key={id}>
                        <CheckIcon />
                        <p className="font-thin text-textColor text-sm">{policy}</p>
                    </div>
                ))}
            </div>

            {/* Checkbox */}
            <div className="mt-4">
                <CheckboxField
                    name="agreement"
                    label="I Understand and want to submit my form."
                    control={control}
                    rules={{
                        validate: (value) => value === true || 'You must agree before submitting',
                    }}
                    error={errors.agreement}
                />

                {errors.agreement && (
                    <p className="text-red-500 text-xs mt-1">{errors.agreement.message}</p>
                )}
            </div>

            {/* Hidden Submit Button (for external triggers) */}
            <button id="hiddenSubmitFinal" type="submit" className="hidden"></button>
        </form>
    )
}

export default SubmitForm
