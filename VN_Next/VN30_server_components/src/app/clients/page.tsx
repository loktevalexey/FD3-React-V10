import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClients} from "@/src/components/MobileClients";
import companyData from "@/src/data/CompanyData";

export default function ClientsPage() {

  console.log("rendering ClientsPage");

  return (
    <div>
      <PagesLinks/>
      <MobileClients companyData={companyData} />
    </div>
  );
}
