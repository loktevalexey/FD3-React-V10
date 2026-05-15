'use client'

import {PagesLinks} from "@/src/components/PagesLinks";
import { MobileCompany } from "@/src/components/MobileCompany";
import {useCompanyContext} from "@/src/contexts/CompanyContext";

export default function CompanyPage() {

  const {companyData,isLoading} = useCompanyContext();

  console.log("rendering CompanyPage");

  return (
    <div>
      <PagesLinks/>
      { isLoading ? <p>Loading...</p> : <MobileCompany companyData={companyData} /> }
    </div>
  );
}
