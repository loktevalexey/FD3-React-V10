import {memo} from "react";

import './MobileClient.css';

function MobileClient(props) {

  console.log("MobileClient id="+props.info.id+" render");

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{props.info.balance}</span>
      <span className='MobileClientFIO'>{props.info.fio}</span>
    </div>
  );

}

export default memo(MobileClient);
