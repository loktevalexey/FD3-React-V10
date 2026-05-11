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

export default async function getCompanyData() {

    const response=await fetch("https://fe.it-academy.by/Examples/mobile_company.json");

    if (!response.ok) {
        throw new Error(`Failed to fetch company data: ${response.status} ${response.statusText}`);
    }

    console.log("getCompanyData: data fetched");

    return await response.json() as CompanyData;
}
