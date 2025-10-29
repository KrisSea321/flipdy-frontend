export type ServiceStatus = "Active" | "Inactive";

export interface LeadType {
    _id?: string;
    firstName?: string,
    lastName?: string,
    companyName?: string,
    jobTitle?: string,
    email?: string,
    phoneNumber?: string,
    country?: string,
    help?: string,
    message?: string,
    regularUpdates?: boolean

    createdAt?: string | undefined;
    updatedAt?: string;
}

export interface data {
    total?: number
    page?: number
    totalPages?: number
    data?: LeadType
}

export interface leadResType {
    data?: data

    message?: string
    statusCode?: number
    success?: boolean
}



export interface FormDetailsValue {
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
    country?: string,
    state?: string,
    helpType?: string,
    agreement?: boolean,
    buildingSomething?: {
        loanAmount?: string,
        isOwnLand?: string,
        buildType?: string
    },
    shortTermBusiness?: {
        amountNeed?: string,
        purpose?: string,
        timeLine?: string,
        monthlyRevenue?: string,
        collateral?: string,
        buildType?: string,
    },
    personalLoan?: {
        amountNeed?: string,
        purpose?: string,
        creditEstimate?: string,
        taxReturnAvailable?: string
    },
    clientFinancing?: {
        amountNeed?: string,
        willFinancingPayYou?: string,
    },
    justNeedHelp?: { text?: string }
}