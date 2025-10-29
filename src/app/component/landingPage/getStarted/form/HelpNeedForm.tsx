import DropdownField from '@/app/component/ui/dropdown/Dropdown'
import ArrowDownBlue from '@/app/component/ui/icons/arrowDown/ArrowDownBlue'
import BuildingIcon from '@/app/component/ui/icons/building/BuildingIcon'
import DollarImg from '@/app/component/ui/icons/dollar/DollarImg'
import Question from '@/app/component/ui/icons/question/Quesiton'
import Screw from '@/app/component/ui/icons/screw/Screw'
import UserImg from '@/app/component/ui/icons/userIcon/UserImg'
import InputField from '@/app/component/ui/inputField/InputField'
import TextArea from '@/app/component/ui/inputField/TextArea'
import { FormDetailsValue } from '@/app/types/LeadType'
import { saveFormDetail } from '@/redux/slice/FormSlice'
import { RootState } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
type FormValuesBuildingForm = {

    loanAmount: string,
    isOwnLand: string,
    buildType: string,
}
type FormValuesShortTermBusinessForm = {
    amountNeed: string,
    purpose: string,
    timeLine: string,
    monthlyRevenue: string,
    collateral: string,
    buildType: string
}
type FormValuesPersonalLoanForm = {
    amountNeed: string,
    purpose: string,
    creditEstimate: string,
    taxReturnAvailable: string,
}
type FormValuesClientFinancingForm = {
    amountNeed: string,
    willFinancingPayYou: string,
}
type FormValuesNeedHelpForm = {
    text: string
}



const BuildingSomeThing = ({ onSubmitForm }: { onSubmitForm: (data: FormValuesBuildingForm) => void }) => {
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<FormValuesBuildingForm>();
    const buildingSomething = useSelector((state: RootState) => state.FormDetails.formDetails.buildingSomething)

    const onSubmit = (data: FormValuesBuildingForm) => {
        onSubmitForm(data);
    };
    useEffect(() => {
        setValue("buildType", buildingSomething?.buildType)
        setValue("isOwnLand", buildingSomething?.isOwnLand)
        setValue("loanAmount", buildingSomething?.loanAmount)
    }, [setValue, buildingSomething])
    return <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
        <InputField

            label="Loan Amount"

            name="loanAmount"
            placeholder="$5000"
            register={register}
            error={errors.loanAmount}
            required
        />
        <DropdownField
            label="Own Land"
            name="isOwnLand"
            options={["Yes", "No"]}
            control={control}
            error={errors.isOwnLand}
            required


        />
        <InputField

            label="Build Type"

            name="buildType"
            placeholder="eg. Commercial Office"
            register={register}
            error={errors.buildType}
            required
        />

        <button type="submit" id="hiddenHelpSubmit" className="hidden" />

    </form>
}
const NeedHelp = ({ onSubmitForm }: { onSubmitForm: (data: FormValuesNeedHelpForm) => void }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValuesNeedHelpForm>();
    const justNeedHelp = useSelector((state: RootState) => state.FormDetails.formDetails.justNeedHelp)

    useEffect(() => {
        setValue("text", justNeedHelp?.text)

    }, [setValue, justNeedHelp])
    const onSubmit = (data: FormValuesNeedHelpForm) => {
        onSubmitForm(data);
    };
    return <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
        <TextArea

            name="text"
            register={register}
            error={errors.text}
            required
            label='Describe your Satuation'
            placeholder='Tell us about your project & what kind of help you need..' />


        <button type="submit" id="hiddenHelpSubmit" className="hidden" />

    </form>
}
const ShortTermBusiness = ({ onSubmitForm }: { onSubmitForm: (data: FormValuesShortTermBusinessForm) => void }) => {
    const shortTermBusiness = useSelector((state: RootState) => state.FormDetails.formDetails.shortTermBusiness)

    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<FormValuesShortTermBusinessForm>()
    const onSubmit = (data: FormValuesShortTermBusinessForm) => {
        onSubmitForm(data);
    };

    useEffect(() => {
        setValue("amountNeed", shortTermBusiness?.amountNeed)
        setValue("buildType", shortTermBusiness?.buildType)
        setValue("collateral", shortTermBusiness?.collateral)
        setValue("monthlyRevenue", shortTermBusiness?.monthlyRevenue)
        setValue("purpose", shortTermBusiness?.purpose)
        setValue("timeLine", shortTermBusiness?.timeLine)
    }, [setValue, shortTermBusiness])
    return <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
        <InputField

            label="Amount Needed"

            name="amountNeed"
            placeholder="$5000"
            register={register}
            error={errors.amountNeed}
            required
        />
        <InputField

            label="Purpose"

            name="purpose"
            placeholder="Equipment Purchases"
            register={register}
            error={errors.purpose}
            required
        />
        <DropdownField
            label="Time Line"
            name="timeLine"
            options={["2Months", "3months", "2years", "3years"]}
            control={control}
            error={errors.timeLine}
            required


        />
        <InputField

            label="Build Type"

            name="buildType"
            placeholder="eg. Commercial Office"
            register={register}
            error={errors.buildType}
            required
        />
        <InputField
            label="monthly revenue"
            name="monthlyRevenue"
            placeholder="$5000"
            register={register}
            error={errors.monthlyRevenue}
            required
        />
        <InputField
            label="Collateral"
            name="collateral"
            placeholder="eg. Commercial Office"
            register={register}
            error={errors.collateral}
            required
        />
        <button type="submit" id="hiddenHelpSubmit" className="hidden" />

    </form>
}
const PersonalLoan = ({ onSubmitForm }: { onSubmitForm: (data: FormValuesPersonalLoanForm) => void }) => {
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<FormValuesPersonalLoanForm>()
    const personalLoan = useSelector((state: RootState) => state.FormDetails.formDetails.personalLoan)

    const onSubmit = (data: FormValuesPersonalLoanForm) => {
        onSubmitForm(data);
    };

    useEffect(() => {
        setValue("amountNeed", personalLoan?.amountNeed)
        setValue("creditEstimate", personalLoan?.creditEstimate)
        setValue("purpose", personalLoan?.purpose)
        setValue("taxReturnAvailable", personalLoan?.taxReturnAvailable)
    }, [setValue, personalLoan])

    return <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
        <InputField

            label="Amount Needed"

            name="amountNeed"
            placeholder="$5000"
            register={register}
            error={errors.amountNeed}
            required
        />
        <InputField

            label="Purpose"

            name="purpose"
            placeholder="Equipment Purchases"
            register={register}
            error={errors.purpose}
            required
        />
        <DropdownField
            label="Credit Estimate"
            name="creditEstimate"
            options={["2Months", "3months", "2years", "3years"]}
            control={control}
            error={errors.creditEstimate}
            required


        />
        <DropdownField
            label="Tax returns available?"
            name="taxReturnAvailable"
            options={["Yes", "No"]}
            control={control}
            error={errors.taxReturnAvailable}
            required


        />
        <button type="submit" id="hiddenHelpSubmit" className="hidden" />

    </form>
}
const ClientFinance = ({ onSubmitForm }: { onSubmitForm: (data: FormValuesClientFinancingForm) => void }) => {
    const clientFinancing = useSelector((state: RootState) => state.FormDetails.formDetails.clientFinancing)

    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<FormValuesClientFinancingForm>()
    const onSubmit = (data: FormValuesClientFinancingForm) => {
        onSubmitForm(data);
    };

    useEffect(() => {
        setValue("amountNeed", clientFinancing?.amountNeed)
        setValue("willFinancingPayYou", clientFinancing?.willFinancingPayYou)
    }, [setValue, clientFinancing])
    return <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
        <InputField

            label="Amount Needed"

            name="amountNeed"
            placeholder="$5000"
            register={register}
            error={errors.amountNeed}
            required
        />
        <DropdownField
            label="Do they need financing to pay you?"
            name="willFinancingPayYou"
            options={["Yes", "No"]}
            control={control}
            error={errors.willFinancingPayYou}
            required


        />
        <button type="submit" id="hiddenHelpSubmit" className="hidden" />


    </form>
}





const HelpNeedForm = ({ onSubmitForm }: { onSubmitForm: (data: Partial<FormDetailsValue>) => void }) => {


    const dispatch = useDispatch()
    const [selectedForm, setSelectedForm] = useState<string | null>('buildingSomething');
    const selectedFormType = useSelector(
        (state: RootState) => state.FormDetails.formDetails.helpType
    );

    const handleSelect = (formName: string) => {
        // Toggle open/close same section
        const newForm = selectedForm === formName ? null : formName;
        setSelectedForm(newForm);

        // ✅ Immediately update Redux state when form changes
        if (newForm) {
            dispatch(saveFormDetail({ formType: newForm }));
        }
    };

    const formOptions = [
        { label: "I'm building something", value: 'buildingSomething', icon: <BuildingIcon /> },
        { label: 'Short-term business loan', value: 'shortTermBusiness', icon: <DollarImg /> },
        { label: 'Personal loan', value: 'personalLoan', icon: <UserImg /> },
        { label: 'Client financing', value: 'clientFinancing', icon: <Screw /> },
        { label: 'Not sure — just need help', value: 'justNeedHelp', icon: <Question /> }
    ];



    const handleFormSubmit = (data:
        | FormValuesNeedHelpForm
        | FormValuesBuildingForm
        | FormValuesShortTermBusinessForm
        | FormValuesPersonalLoanForm
        | FormValuesClientFinancingForm) => {
        if (selectedForm === "justNeedHelp") {
            dispatch(saveFormDetail({ helpType: selectedForm, justNeedHelp: data }))
            onSubmitForm({ helpType: selectedForm, justNeedHelp: data as FormValuesNeedHelpForm });


        } else if (selectedForm === "buildingSomething") {

            dispatch(saveFormDetail({ helpType: selectedForm, buildingSomething: data }))
            onSubmitForm({ helpType: selectedForm, buildingSomething: data as FormValuesBuildingForm });


        } else if (selectedForm === "shortTermBusiness") {

            dispatch(saveFormDetail({ helpType: selectedForm, shortTermBusiness: data }))
            onSubmitForm({ helpType: selectedForm, shortTermBusiness: data as FormValuesShortTermBusinessForm });

        }
        else if (selectedForm === "personalLoan") {
            onSubmitForm({ helpType: selectedForm, personalLoan: data as FormValuesPersonalLoanForm });

            dispatch(saveFormDetail({ helpType: selectedForm, personalLoan: data }))
        }
        else if (selectedForm === "clientFinancing") {
            onSubmitForm({ helpType: selectedForm, clientFinancing: data as FormValuesClientFinancingForm });

            dispatch(saveFormDetail({ helpType: selectedForm, clientFinancing: data }))
        }
    };


    useEffect(() => {
        setSelectedForm(selectedFormType)
    }, [selectedFormType])
    return (
        <div className='mt-6'>

            <p className='normalSecondaryHeadingBlack'>What Help Do You Need?</p>
            {formOptions.map(({ label, value, icon }) => (
                <div key={value} className="w-full">
                    <div
                        onClick={() => handleSelect(value)}
                        className={`w-full flex items-center mt-4 justify-between p-4 rounded-xl border-[2px] cursor-pointer transition-all
              ${selectedForm === value ? 'border-primary bg-primary/30 ' : 'border-lightGrey'}
            `}
                    >
                        <div className="flex items-center gap-x-4">
                            <div>{icon}</div>
                            <p className="text-textColor font-medium">{label}</p>
                        </div>
                        <div
                            className={`transform transition-transform duration-300 ${selectedForm === value ? 'rotate-0' : 'rotate-180'
                                }`}
                        >
                            <ArrowDownBlue />
                        </div>

                    </div>


                </div>
            ))}
            {/* ✅ SELECTED FORM SHOWS HERE */}
            {selectedForm && (
                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl">
                    {selectedForm === 'buildingSomething' && <BuildingSomeThing onSubmitForm={handleFormSubmit} />}
                    {selectedForm === 'shortTermBusiness' && <ShortTermBusiness onSubmitForm={handleFormSubmit} />}
                    {selectedForm === 'personalLoan' && <PersonalLoan onSubmitForm={handleFormSubmit} />}
                    {selectedForm === 'clientFinancing' && <ClientFinance onSubmitForm={handleFormSubmit} />}
                    {selectedForm === 'justNeedHelp' && <NeedHelp onSubmitForm={handleFormSubmit} />}
                </div>
            )}
        </div>
    )
}

export default HelpNeedForm