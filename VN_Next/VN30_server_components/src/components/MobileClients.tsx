import {CompanyData} from "@/src/data/CompanyData";
import { MobileClient } from './MobileClient';

import './MobileClients.css';

type MobileClientsProps = {
    companyData: CompanyData;
}

export const MobileClients = ( { companyData }:MobileClientsProps ) => {
  
  const clientsCode=companyData.clients.map( client =>
    <MobileClient key={client.id} clientData={client}  />
  );

  console.log("rendering MobileClients");

  return (
    <div className='MobileCompany'>
      <div className='MobileCompanyName'>Компания &laquo;{companyData.companyName}&raquo;</div>
      <div className='MobileCompanyClients'>
        {clientsCode}
      </div>
    </div>
  );

};
