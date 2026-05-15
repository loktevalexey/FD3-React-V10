import {ClientData} from "@/src/contexts/CompanyContext";

type MobileClientInfoProps = {
    clientData: ClientData;
}

export const MobileClientInfo = ( { clientData }:MobileClientInfoProps ) => {

  return (
    <h1>
      клиент &laquo;{clientData.fam+" "+clientData.im+" "+clientData.otch}&raquo;, баланс {clientData.balance}
    </h1>
  );

};
