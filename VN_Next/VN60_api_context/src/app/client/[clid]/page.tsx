'use client'

import { useParams } from 'next/navigation';

import {notFound} from 'next/navigation';

import {PagesLinks} from "@/src/components/PagesLinks";
import {MobileClientInfo} from "@/src/components/MobileClientInfo";
import {useCompanyContext} from "@/src/contexts/CompanyContext";

export default function ClientPage() {

  const params = useParams();
  const clientId = Number(params.clid);

  const {companyData,isLoading} = useCompanyContext();

  if ( isLoading ) {
    return <p>Loading...</p>;
  }

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
