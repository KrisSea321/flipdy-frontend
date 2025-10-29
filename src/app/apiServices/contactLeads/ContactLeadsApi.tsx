import { LeadType } from "@/app/types/LeadType";
import axiosInstance from "../axoisInstance/AxiosInstance";


class LeadsApi {
    private api = axiosInstance // ✅ use the global one with interceptors

    async addContactLead(data: LeadType) {
        try {
            const isFormData = data instanceof FormData;
            const response = await this.api.post(
                "/contact-leads/create-lead",
                data,
                {
                    headers: {
                        "Content-Type": isFormData
                            ? "multipart/form-data"
                            : "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("error", error);
            throw error || "Something went wrong. Try Again";
        }
    }

    async getAllLeads(page = 1, searchTerm = "") {
        try {
            const params = new URLSearchParams();
            params.append("page", page.toString());
            if (searchTerm) params.append("search", searchTerm);

            const response = await this.api.get(`/contact-leads/get-all-leads?${params}`);
            return response.data;
        } catch (error) {
            console.error("error", error);
            throw error || "Fetch leads failed";
        }
    }

    async getAllLeadsWoPagination() {
        try {
            const response = await this.api.get(`/contact-leads/get-all-leads-wo-pagination`);
            return response.data;
        } catch (error) {
            console.error("error", error);
            throw error || "Fetch leads failed";
        }
    }

    async getLeadId(id: string) {
        try {
            const response = await this.api.get(`/contact-leads/get-lead-by-id/${id}`);
            return response.data;
        } catch (error) {
            console.error("error", error);
            throw error || "Fetching leads failed";
        }
    }

    async deleteLead(id: string) {
        try {
            const response = await this.api.delete(`/contact-leads/delete-lead/${id}`);
            return response.data;
        } catch (error) {
            console.error("error", error);
            throw error || "Delete lead failed";
        }
    }
}

const leadsApi = new LeadsApi();
export default leadsApi;
