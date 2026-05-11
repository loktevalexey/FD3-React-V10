import {notFound} from 'next/navigation';

import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClientInfo} from "@/src/components/MobileClientInfo";
import getCompanyData from "@/src/data/CompanyData";

interface ClientPageProps {
  params: Promise<{clid: string}>;
}

export default async function ClientPage(props:ClientPageProps) {

  const params = await props.params;
  const clientId = Number(params.clid);

  const companyData = await getCompanyData();

  const clientData = companyData.clientsArr.find( c => c.id === clientId );
  if ( !clientData ) {
    notFound();
  }

  console.log("rendering ClientPage");

  return (
    <div>
      <PagesLinks/>
      <MobileClientInfo clientData={clientData} />
    </div>
  );
}
