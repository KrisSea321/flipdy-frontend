'use client'
import React, { useState } from 'react'
import QuickBasicForm, { QuickBasicFormValues } from './QuickBasicForm'
import HelpNeedForm from './HelpNeedForm'
import SubmitForm from './SubmitForm'
import Button from '@/app/component/ui/button/Button'
import leadsApi from '@/app/apiServices/contactLeads/ContactLeadsApi'
import toast from 'react-hot-toast'
import Loader from '@/app/component/ui/loader/Loader'
import { clearFormDetail } from '@/redux/slice/FormSlice'
import { useDispatch } from 'react-redux'
import { FormDetailsValue } from '@/app/types/LeadType'
import axios from 'axios'

const Form = () => {
    const [activeState, setActiveState] = useState('quick-basics')
    const [quickBasicData, setQuickBasicData] = useState<QuickBasicFormValues>()
    const [helpNeedData, setHelpNeedData] = useState<FormDetailsValue>();
    const [loading, setLoading] = useState<boolean>(false);
    console.log("quickBasicData", quickBasicData);
    console.log("helpNeedData", helpNeedData);
    const dispatch = useDispatch()
    const tabs = [
        { href: 'quick-basics', name: 'Quick Basics' },
        { href: 'help-need', name: 'What help do you need?' },
        { href: 'submit', name: 'Trust + Submit' },
    ]


    const nextStateFun = () => {
        if (activeState === 'quick-basics') {
            document.getElementById('hiddenSubmit')?.click();
        } else if (activeState === 'help-need') {
            document.getElementById('hiddenHelpSubmit')?.click();
        } else {
            document.getElementById('hiddenSubmitFinal')?.click();

        }
    };

    const previousStateFun = () => {
        if (activeState === 'submit') setActiveState('help-need')
        else if (activeState === 'help-need') setActiveState('quick-basics')
    }

    const getStepNumber = () => {
        if (activeState === 'quick-basics') return 'Step 1 of 3'
        if (activeState === 'help-need') return 'Step 2 of 3'
        if (activeState === 'submit') return 'Step 3 of 3'
    }
    const handleQuickBasicSubmit = (data: QuickBasicFormValues) => {
        console.log("✅ Parent received Quick Basic data:", data)
        setQuickBasicData(data)
        setActiveState('help-need') // move to next step
    }

    const handleHelpNeedSubmit = (data: FormDetailsValue) => {
        console.log("✅ Parent received Help Need data:", data);
        setHelpNeedData(data);
        setActiveState('submit');
    };

    const createLead = async (submitData: FormDetailsValue) => {

        const finalData = {
            ...quickBasicData,
            ...helpNeedData,
            ...submitData,
        };
        try {
            await leadsApi.addContactLead(finalData);
            dispatch(clearFormDetail())
            toast.success("Message sent successfully!");
            window.location.reload();

        } catch (error) {
            console.error("Error while adding lead:", error);
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Failed to send message.");
            } else {
                toast.error("An unexpected error occurred.");
            }
        } finally {
            setLoading(false)
        }
        console.log("✅ Final data ready to send:", finalData);
    };
    console.log("activeState", activeState);


    return (
        <>{loading && <Loader />}
            <div className="bg-white w-full sm:w-[90%] md:w-[600px] p-6 sm:p-8 mx-auto shadow-custom rounded-3xl transition-all duration-300">
                {/* Step indicator */}
                <p className="text-primary mb-4 text-sm sm:text-base">{getStepNumber()}</p>

                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-8 gap-2">
                    {tabs.map((tab, index) => {
                        const activeIndex = tabs.findIndex(t => t.href === activeState)
                        const isActiveOrDone = index <= activeIndex

                        return (
                            <div key={tab.href} className="flex-1">
                                <div
                                    className={`h-[6px] rounded-full transition-all duration-300 ${isActiveOrDone ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                                ></div>
                            </div>
                        )
                    })}
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                    {activeState === 'quick-basics' && <QuickBasicForm onSubmitForm={handleQuickBasicSubmit} />}
                    {activeState === 'help-need' && <HelpNeedForm onSubmitForm={handleHelpNeedSubmit} />}
                    {activeState === 'submit' && <SubmitForm onSubmitForm={createLead} />}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
                    {activeState !== 'quick-basics' && (
                        <div className="w-full sm:w-[30%]">
                            <Button text="Back" onClick={previousStateFun} isBorder />
                        </div>
                    )}

                    <div className="w-full sm:w-[60%] flex items-center justify-end">
                        <Button text="Continue" onClick={nextStateFun} />
                    </div>
                </div>

                {/* Info Text */}
                <p className="text-xs sm:text-sm mt-4 text-textColor text-center sm:text-left">
                    ✓ Your info stays private. No credit checks just for applying. No spam.
                </p>
            </div>
        </>
    )
}

export default Form
