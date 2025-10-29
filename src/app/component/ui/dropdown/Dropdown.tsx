"use client";
import React, { useState, useRef, useEffect } from "react";
import { Controller, Control, FieldError, FieldValues, Path } from "react-hook-form";
import ArrowDown from "../icons/arrowDown/ArrowDown";

interface DropdownFieldProps<T extends FieldValues> {
    label?: string;
    name: Path<T>;
    options: string[];
    control: Control<T>;
    error?: FieldError;
    required?: boolean;
    placeholder?: string;
    labelColor?: string;
}

const DropdownField = <T extends FieldValues>({
    label,
    name,
    options,
    control,
    error,
    required = false,
    placeholder = "Select",
    labelColor = "text-[#131313]",
}: DropdownFieldProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required }}
            render={({ field: { onChange, value } }) => (
                <div className="flex flex-col items-start gap-2 flex-1 w-full text-textColor" ref={dropdownRef}>
                    {/* Label */}
                    <label
                        htmlFor={name}
                        className={`w-full ${labelColor} text-left text-sm font-medium leading-[150%]`}
                        style={{
                            fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                    >
                        {label} {required && "*"}
                    </label>

                    {/* Dropdown */}
                    <div className="relative w-full">
                        <div
                            className={`flex h-11 px-4 py-3 items-center justify-between gap-2 w-full rounded-full border-[1.5px] 
              ${error ? "border-red" : "border-[#E6E6E6]"} 
              bg-lightGrey cursor-pointer`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span
                                className={`text-sm font-medium leading-[150%] ${value ? "text-[#131313]" : "text-[#686868]"
                                    }`}
                                style={{
                                    fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                                }}
                            >
                                {value || placeholder}
                            </span>
                        </div>
                        <div
                            className={`w-4 h-4 absolute top-5 right-2 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                        >
                            <ArrowDown />
                        </div>
                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E6E6] rounded shadow-lg z-10">
                                {options.map((option) => (
                                    <div
                                        key={option}
                                        className="px-4 py-2 text-left hover:bg-gray-50 cursor-pointer text-sm text-[#131313]"
                                        style={{
                                            fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
                                        }}
                                        onClick={() => {
                                            onChange(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Error message */}
                    {error && (
                        <span className="text-red text-xs">
                            {error.message || `${label} is required`}
                        </span>
                    )}
                </div>
            )}
        />
    );
};

export default DropdownField;
