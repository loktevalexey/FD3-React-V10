import {notFound} from 'next/navigation';

import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClientInfo} from "@/src/components/MobileClientInfo";
import companyData from "@/src/data/CompanyData";

interface ClientPageProps {
  params: Promise<{clid: string}>;
}

export default async function ClientPage(props:ClientPageProps) {

  const params = await props.params;
  const clientId = Number(params.clid);

  //console.log("client id=",typeof(clientId),companyData.clients);

  const clientData = companyData.clients.find( c => c.id === clientId );
  if ( !clientData ) {
    notFound();
  }

  return (
    <div>
      <PagesLinks/>
      <MobileClientInfo clientData={clientData} />
    </div>
  );
}
