import {PagesLinks} from "@/src/components/PagesLinks";
import { MobileCompany } from "@/src/components/MobileCompany";
import companyData from "@/src/data/CompanyData";

export default function CompanyPage() {

  console.log("rendering CompanyPage");

  return (
    <div>
      <PagesLinks/>
      <MobileCompany companyData={companyData} />
    </div>
  );
}
