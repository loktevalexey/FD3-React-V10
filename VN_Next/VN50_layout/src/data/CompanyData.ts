export type ClientData = {
    id: number;
    fam: string;
    im: string;
    otch: string;
    balance: number;
};

export type CompanyData = {
    companyName: string;
    clientsArr: ClientData[];
};

let companyDataCache:CompanyData|null=null;

export default async function getCompanyData():Promise<CompanyData> {

    if ( companyDataCache )
        return companyDataCache;

    const response=await fetch("https://fe.it-academy.by/Examples/mobile_company.json");

    if (!response.ok) {
        throw new Error(`Failed to fetch company data: ${response.status} ${response.statusText}`);
    }

    const companyData=await response.json() as CompanyData;
    companyDataCache=companyData;
    return companyData;
}

