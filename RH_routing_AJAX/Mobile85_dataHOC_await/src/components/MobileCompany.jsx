import MobileClient from './MobileClient';

import './MobileCompany.css';

export default function MobileCompany(props) {

  const clientsCode=props.companyData.clientsArr.map( client =>
    <MobileClient key={client.id} info={client}  />
  );

  return (
    <div className='MobileCompany'>
      <div className='MobileCompanyName'>Компания &laquo;{props.companyData.companyName}&raquo;</div>
      <div className='MobileCompanyClients'>
        {clientsCode}
      </div>
    </div>
  );

}
