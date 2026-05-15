'use client'

import {createContext, useContext, useEffect, useMemo, useState} from "react";

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

const emptyCompanyData:CompanyData={companyName:"",clientsArr:[]};

type CompanyContextType = {
    isLoading: boolean;
    companyData: CompanyData;
}

const CompanyContext = createContext<CompanyContextType>({
    isLoading: true,
    companyData: emptyCompanyData,
});

export function CompanyContextProvider({ children }: { children: React.ReactNode }) {

    const [isLoading,setIsLoading]=useState(true);
    const [companyData,setCompanyData]=useState(emptyCompanyData);

    useEffect(()=>{
        console.log("CompanyContextProvider: mounted");
        return ()=>{
            console.log("CompanyContextProvider: unmounted");
        }
    },[]);

    useEffect(()=>{

        async function getCompanyData() {

            const response=await fetch("/api/get-company-data");

            if (!response.ok) {
                throw new Error(`Failed to fetch company data: ${response.status} ${response.statusText}`);
            }

            console.log("CompanyContextProvider: data fetched");

            const companyData=await response.json() as CompanyData;
            setCompanyData(companyData);
            setIsLoading(false);
        }

        void getCompanyData();
    },[]);

    const providedValue=useMemo(()=>{
        return {isLoading,companyData};
    },[isLoading,companyData]);

    return (
        <CompanyContext.Provider value={providedValue}>
            {children}
        </CompanyContext.Provider>
    );
}

export const useCompanyContext = () => useContext(CompanyContext);
