import {ClientData} from "@/src/data/CompanyData";

type MobileClientInfoProps = {
    clientData: ClientData;
}

export const MobileClientInfo = ( { clientData }:MobileClientInfoProps ) => {

  return (
    <h1>
      клиент &laquo;{clientData.fio}&raquo;, баланс {clientData.balance}
    </h1>
  );

};
