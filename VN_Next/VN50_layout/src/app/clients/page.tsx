import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClients} from "@/src/components/MobileClients";
import getCompanyData from "@/src/data/CompanyData";

export default async function ClientsPage() {

  const companyData = await getCompanyData();

  return (
    <div>
      <PagesLinks/>
      <MobileClients companyData={companyData} />
    </div>
  );
}
