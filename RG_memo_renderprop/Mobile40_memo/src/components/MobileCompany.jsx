import {memo, useState} from 'react';
import MobileClient from './MobileClient';

import './MobileCompany.css';

function MobileCompany(props) {

  const [name,setName] = useState(props.name);
  const [clients,setClients] = useState(props.clients);

  function setName1() {
      setName('МТС');
  }

  function setName2() {
      setName('A1');
  }
  
  function setBalance(clientId,newBalance) {
    let newClients=[...clients];
    newClients.forEach( c => {
      if ( c.id===clientId )
        c.balance=newBalance;
    } );
    setClients(newClients);
  }

  function setBalance1() {
    setBalance(105,230);
  }

  function setBalance2() {
    setBalance(105,250);
  }
  
  console.log("MobileCompany render");

  const clientsCode=clients.map( client =>
    <MobileClient key={client.id} info={client}  />
  );

  return (
    <div className='MobileCompany'>
      <input type="button" value="=МТС" onClick={setName1} />
      <input type="button" value="=A1" onClick={setName2} />
      <div className='MobileCompanyName'>Компания &laquo;{name}&raquo;</div>
      <div className='MobileCompanyClients'>
        {clientsCode}
      </div>
      <input type="button" value="Сидоров=230" onClick={setBalance1} />
      <input type="button" value="Сидоров=250" onClick={setBalance2} />
    </div>
  );

}

export default memo(MobileCompany);
