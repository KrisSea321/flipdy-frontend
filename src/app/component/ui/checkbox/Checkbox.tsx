'use client'
import React from 'react'
import {
    Controller,
    Control,
    FieldError,
    RegisterOptions,
    FieldValues,
    Path,
} from 'react-hook-form'

interface CheckboxFieldProps<T extends FieldValues> {
    name: Path<T>
    label: string
    control: Control<T>
    rules?: RegisterOptions<T, Path<T>>
    error?: FieldError
}

const CheckboxField = <T extends FieldValues>({
    name,
    label,
    control,
    rules,
    error,
}: CheckboxFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        // ✅ use a proper boolean type instead of `any`
        defaultValue={false as unknown as T[Path<T>]}
        rules={rules}
        render={({ field: { value, onChange } }) => (
            <label className="flex items-start gap-x-2 cursor-pointer">
                {/* Checkbox box */}
                <div
                    onClick={() => onChange(!value)}
                    className={`w-4 h-4 md:w-6 md:h-6 border-2 rounded flex items-center justify-center transition-colors duration-200 ${value ? 'bg-primary border-primary' : 'border-lightGrey bg-white'
                        }`}
                >
                    {value && (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="text-white"
                        >
                            <path
                                d="M13.5 4.5L6 12L2.5 8.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>

                {/* Label */}
                <span
                    className={`text-textColor text-sm md:text-base md:leading-6 ${error ? 'text-red-500' : ''
                        }`}
                    style={{
                        fontFamily: 'Onest, -apple-system, Roboto, Helvetica, sans-serif',
                    }}
                >
                    {label}
                </span>
            </label>
        )}
    />
)

export default CheckboxField
