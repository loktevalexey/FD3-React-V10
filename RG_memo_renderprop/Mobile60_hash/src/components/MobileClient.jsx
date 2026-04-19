import {memo} from "react";

import './MobileClient.css';

function MobileClient(props) {

  console.log("MobileClient id="+props.id+" render");

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{props.balance}</span>
      <span className='MobileClientFIO'>{props.fio.fam+" "+props.fio.im+" "+props.fio.otch}</span>
    </div>
  );

}

export default memo(MobileClient);
