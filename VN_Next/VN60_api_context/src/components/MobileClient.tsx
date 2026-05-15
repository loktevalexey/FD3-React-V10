import Link from "next/link";

import {ClientData} from "@/src/contexts/CompanyContext";

import './MobileClient.css';

type MobileClientProps = {
    clientData: ClientData;
}

export const MobileClient = ( { clientData }:MobileClientProps ) => {

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{clientData.balance}</span>
      <Link href={"/client/"+clientData.id} className="MobileClientFIO">{clientData.fam+" "+clientData.im}</Link>
    </div>
  );

};
