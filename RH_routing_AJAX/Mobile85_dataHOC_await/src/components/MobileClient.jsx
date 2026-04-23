import './MobileClient.css';

export default function MobileClient(props) {

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{props.info.balance}</span>
      <span className='MobileClientFIO'>{props.info.fio}</span>
    </div>
  );

}
