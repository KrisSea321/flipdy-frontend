'use client'

import React from "react";
import EditIcon from "../icons/editIcon/EditIcon";
import DeleteIcon from "../icons/deleteIcon/DeleteIcon";
import EyeIcon from "../icons/eyeIcon/EyeIcon";
import NoDataFound from "../noDataFound/NoDataFound";
import { LeadType } from "@/app/types/LeadType";

interface Column {
    key: string;
    label: string;
}

interface TableProps {
    columns: Column[];
    data: LeadType[];
    onEditClick: (id: string) => void;
    onViewClick?: (id: string) => void;
    onDeleteClick?: (id: string) => void;
    isDeleteIconShow?: boolean
    isViewIconShow?: boolean
    isEditIconShow?: boolean
}

const Table: React.FC<TableProps> = ({
    columns, data, onEditClick, onViewClick, onDeleteClick, isDeleteIconShow = true,
    isViewIconShow = true,
    isEditIconShow = true,
}) => {

    return (
        <>
            {data?.length === 0 ?
                <NoDataFound /> :


                <div className="overflow-x-auto bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-lightGrey text-textColorDarkGrey text-sm ">
                            <tr className="rounded-full  p-4 ">
                                {columns.map((col, index) => (
                                    <th
                                        key={col.key}
                                        className={`${index == 0 && "rounded-l-full"} px-4 py-3 text-left font-[500]`}
                                    >
                                        {col.label}
                                    </th>
                                ))}
                                <th className="px-4 rounded-r-full py-3  font-[500]">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody >
                            {data.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={`${idx % 2 !== 0 && "bg-[#F9FAFB]"} hover:bg-gray-50 text-xs border-b border-lightGrey border-x-0`}
                                >
                                    {columns.map((col) => {
                                        const cellValue = row[col.key];

                                        return (
                                            <td key={col.key} className="px-4 py-3">
                                                {typeof cellValue === "object" && cellValue !== null ? (
                                                    // Custom render if value is object
                                                    <div className="flex items-center space-x-3">
                                                        {cellValue.img &&
                                                            <img
                                                                src="/assets/dp.jpg"
                                                                alt={cellValue.name}
                                                                className="w-10 h-10 rounded-full object-cover"
                                                            />
                                                        }
                                                        <div className="flex flex-col">
                                                            <span className="font-medium text-gray-900">{cellValue.name}</span>
                                                            <span className="text-sm text-gray-500">{cellValue.email}</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Default render
                                                    cellValue
                                                )}
                                            </td>
                                        );
                                    })}
                                    <td className="px-4 py-3 text-center align-middle">
                                        <div className="flex space-x-3 items-center justify-center">
                                            {isEditIconShow && <div className="cursor-pointer" onClick={() => onEditClick(row._id ?? "")}>
                                                <EditIcon />
                                            </div>}
                                            {isDeleteIconShow && <div className="cursor-pointer" onClick={() => onDeleteClick?.(row._id ?? "")}>
                                                <DeleteIcon />
                                            </div>}
                                            {isViewIconShow && <div className="cursor-pointer" onClick={() => onViewClick?.(row._id ?? "")}>
                                                <EyeIcon />
                                            </div>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </>
    );
};

export default Table;
