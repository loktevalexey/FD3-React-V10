import {PagesLinks} from "@/src/components/PagesLinks";
import { MobileCompany } from "@/src/components/MobileCompany";
import getCompanyData from "@/src/data/CompanyData";

export default async function CompanyPage() {

  const companyData = await getCompanyData();

  console.log("rendering CompanyPage");

  return (
    <div>
      <PagesLinks/>
      <MobileCompany companyData={companyData} />
    </div>
  );
}
