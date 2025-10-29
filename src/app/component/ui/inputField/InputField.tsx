'use client'
import React, { useState } from "react";
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import EyeIcon from "../icons/eyeIcon/EyeIcon";
import EyeSlashIcon from "../icons/eyeSlashIcon/EyeSlashIcon";

interface InputFieldProps<T extends FieldValues> {
    label?: string;
    name: Path<T>;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    required?: boolean;
    labelColor?: string;
    bgColor?: string;
}

const InputField = <T extends FieldValues>({
    label,
    name,
    type = "text",
    placeholder,
    register,
    bgColor = "bg-lightGrey",
    error,
    required = false,
    labelColor = "text-[#131313]",
}: InputFieldProps<T>) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="flex flex-col items-start gap-2 flex-1 w-full">
            {/* Label */}
            <label
                htmlFor={name}
                className={`flex items-center gap-x-1 w-full capitalize ${labelColor} text-sm font-medium leading-[150%]`}
                style={{
                    fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                }}
            >
                <p>{label}</p>
                {required && <p className="text-red">*</p>}
            </label>

            {/* Input */}
            <div className="relative w-[100%]">
                <input
                    id={name}
                    type={type === "password" ? (isShowPassword ? "text" : "password") : type}
                    placeholder={placeholder}
                    {...register(name, { required })}
                    className={`flex h-11 px-4 py-3 rounded-full items-center gap-2 w-full border-[1.5px]
            ${error ? "border-red" : "border-[#E6E6E6]"} 
            text-[#686868] text-sm font-medium leading-[150%] outline-none 
            ${bgColor} focus:border-primary`}
                    style={{
                        fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                />
                {type === "password" && (
                    <div
                        className="absolute right-2 top-4 cursor-pointer"
                        onClick={() => setIsShowPassword((prev) => !prev)}
                    >
                        {isShowPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </div>
                )}
            </div>

            {/* Error */}
            {error && (
                <span className="text-red-500 text-xs capitalize">
                    {error.message || `${label} is required`}
                </span>
            )}
        </div>
    );
};

export default InputField;
