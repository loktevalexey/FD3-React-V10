'use client'

import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClients} from "@/src/components/MobileClients";
import {useCompanyContext} from "@/src/contexts/CompanyContext";

export default function ClientsPage() {

  const {companyData,isLoading} = useCompanyContext();

  console.log("rendering ClientsPage");

  return (
    <div>
      <PagesLinks/>
      { isLoading ? <p>Loading...</p> : <MobileClients companyData={companyData} /> }
    </div>
  );
}
