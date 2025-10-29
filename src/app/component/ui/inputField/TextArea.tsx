'use client'
import React from "react";
import { FieldError, UseFormRegister, FieldValues, Path } from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
    label?: string;
    name: Path<T>;
    placeholder?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    required?: boolean;
    labelColor?: string;
    rows?: number;
}

const TextArea = <T extends FieldValues>({
    label,
    name,
    placeholder,
    register,
    error,
    required = false,
    labelColor = "text-[#131313]",
    rows = 4
}: TextAreaProps<T>) => {
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

            {/* Textarea */}
            <textarea
                id={name}
                placeholder={placeholder}
                {...register(name, { required })}
                rows={rows}
                className={`flex px-4 py-3 rounded-2xl items-center gap-2 w-full border-[1.5px] resize-none
                    ${error ? "border-red" : "border-[#E6E6E6]"} 
                    bg-lightGrey text-[#686868] text-sm font-medium leading-[150%] outline-none 
                    focus:border-primary`}
                style={{
                    fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                }}
            />

            {/* Error message */}
            {error && (
                <span className="text-red-500 text-xs capitalize">
                    {error.message || `${label} is required`}
                </span>
            )}
        </div>
    );
};

export default TextArea;
