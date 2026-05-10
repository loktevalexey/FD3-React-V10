export type ClientData={
    id: number;
    fio: string;
    balance: number;
};

export type CompanyData = {
    companyName: string;
    clients: ClientData[];
};

import companyDataJson from "../data/appData.json";
const companyData=companyDataJson as CompanyData;

export default companyData;
