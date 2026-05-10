import Link from "next/link";

import './MobileClient.css';
import {ClientData} from "@/src/data/CompanyData";

type MobileClientProps = {
    clientData: ClientData;
}

export const MobileClient = ( { clientData }:MobileClientProps ) => {

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{clientData.balance}</span>
      <Link href={"/client/"+clientData.id} className="MobileClientFIO">{clientData.fio}</Link>
    </div>
  );

};
