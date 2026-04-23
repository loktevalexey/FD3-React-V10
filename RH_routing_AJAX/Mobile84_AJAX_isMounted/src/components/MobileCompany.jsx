import {useState,useEffect} from 'react';

import MobileClient from './MobileClient';
import {useIsMounted} from "../hooks/useIsMounted";

import './MobileCompany.css';

export default function MobileCompany() {

  const isMounted=useIsMounted();

  const [isDataReady,setDataReady]=useState(false);
  const [name,setName] = useState("???");
  const [clients,setClients] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const response=await fetch("http://fe.it-academy.by/TestFetch.php", {
        method: 'post',
        headers: {
          "Accept": "application/json",
        },
      });
      if ( !isMounted() )
        return;
      if ( !response.ok ) {
        alert("fetch error " + response.status);
        return;
      }
      const data=await response.json();
      if ( !isMounted() )
        return;
      console.log(data);
      setName(data.companyName);
      setClients(data.clientsArr);
      setDataReady(true);
    })();
  },[]);

  if ( !isDataReady )
    return <div>загрузка данных...</div>;

  const clientsCode=clients.map( client =>
    <MobileClient key={client.id} info={client}  />
  );

  return (
    <div className='MobileCompany'>
      <div className='MobileCompanyName'>Компания &laquo;{name}&raquo;</div>
      <div className='MobileCompanyClients'>
        {clientsCode}
      </div>
    </div>
  );

}
