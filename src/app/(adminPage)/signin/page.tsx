'use client'

import Button from '@/app/component/ui/button/Button'
import InputField from '@/app/component/ui/inputField/InputField'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Cookies from "js-cookie";
import authService from '@/app/apiServices/authApi/AuthApi'
import Loader from '@/app/component/ui/loader/Loader'

type FormValues = {

    email: string;
    password: string;
};
const Page = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormValues>()

    const [loading, setLoading] = useState(false)

    const loginFun = async (data: FormValues) => {
        setLoading(true)
        try {
            const response = await authService.login(data);
            // store tokens in cookie
            Cookies.set("accessToken", response.accessToken);
            Cookies.set("refreshToken", response.refreshToken);

            toast.success(response.message);

            // redirect to dashboard after login
            window.location.href = "/dashboard";
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const err = error as any; // 👈 simplest fix
            toast.error(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false)
        }
    };

    return (
        <div>
            {loading &&
                <Loader />
            }

            <div className="flex w-full h-screen items-center justify-between md:p-2 lg:p-4">
                {/* Left Image */}
                <div className="relative hidden md:relative md:flex items-center justify-center md:w-[49%] xl:w-[69%] h-full">

                    <div
                        className="absolute inset-0 rounded-[16px]"
                        style={{
                            background: "linear-gradient(to top, #00AEEF 5%, #A4E3F9 100%)",
                        }}
                    ></div>

                    <div className='w-[360px] relative h-[420px]'>

                        <Image
                            src="/assets/logoLg.png"
                            alt="Signin Img"
                            fill
                            className="object-contain "
                        />
                    </div>

                </div>

                {/* Right Section */}
                <div className="w-[100%] md:w-[50%] xl:w-[30%] md:rounded-[16px] h-full bg-gradient-to-b from-greyscale50 to-primaryLight/30  px-8 flex items-center justify-center">

                    <div className='flex flex-col gap-y-4 md:gap-y-10 w-[100%]' >
                        <div className='flex items-center justify-center mb-10'>
                            <div className='w-[150px] relative h-[150px] md:hidden'>

                                <Image
                                    src="/assets/logoLg.png"
                                    alt="Signin Img"
                                    fill
                                    className="object-contain "
                                />
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-y-1'>

                            <h1 className="semiboldHeadingBlack">Sign In</h1>
                            <p className='normalTextGrey'>Sign in to your Admin account</p>
                        </div >
                        <form onSubmit={handleSubmit(loginFun)} className='mt-2  w-[100%] flex flex-col gap-y-4'>
                            <InputField

                                label="Email ID"
                                name="email"
                                placeholder="Enter your email"
                                register={register}
                                error={errors.email}
                                required
                                bgColor='bg-white'
                            />
                            <InputField

                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                                register={register}
                                error={errors.password}
                                required
                                bgColor='bg-white'
                                type='password'
                            />
                            <div className='w-[100%] flex items-center justify-center mt-6'>
                                <Button text='Sign In' type='submit' />
                            </div>
                        </form>
                    </div >
                </div >
            </div>
        </div>


    )
}

export default Page
