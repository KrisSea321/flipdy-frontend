import leadsApi from "@/app/apiServices/contactLeads/ContactLeadsApi";
import { useApiQuery } from "../useApiQuery";
import { leadResType, LeadType } from "@/app/types/LeadType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useGetAllLeads = (page: number, searchTerm: string) =>
    useApiQuery<leadResType>(
        ["leads", page?.toString(), searchTerm],
        () => leadsApi?.getAllLeads(page, searchTerm),
    );

export const useGetAllLeadsWoPagination = () =>
    useApiQuery<LeadType>(
        ["leads"],
        () => leadsApi?.getAllLeadsWoPagination(),
    );

export const useGetLeadById = (id: string) => {
    return useQuery({
        queryKey: ["leads", id],
        queryFn: () => leadsApi.getLeadId(id!).then((res) => res.data),
        enabled: !!id, // ✅ agar id null hai to query run na ho
    });
};


export const useDeleteLead = () => {
    const queryClient = useQueryClient();
    const navigate = useRouter()
    return useMutation({
        mutationFn: (id: string) => leadsApi.deleteLead(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["leads"],
            });
            navigate.push("/dashboard/leads")
        },
        onError: (error) => {
            console.error("❌ Error deleting service:", error);
            toast.error("Something went wrong");

        },
    });
};