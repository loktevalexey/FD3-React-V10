import Link from "next/link";

import './MobileClient.css';
import {ClientData} from "@/src/data/CompanyData";

type MobileClientProps = {
    clientData: ClientData;
}

export const MobileClient = ( { clientData }:MobileClientProps ) => {

  console.log("rendering MobileClient");

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{clientData.balance}</span>
      <Link href={"/client/"+clientData.id} className="MobileClientFIO">{clientData.fam+" "+clientData.im}</Link>
    </div>
  );

};
