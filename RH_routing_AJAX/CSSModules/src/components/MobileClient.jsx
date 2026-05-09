import styles from './MobileClient.module.css';

export default function MobileClient(props) {

  console.log("MobileClient id="+props.info.id+" render");

  return (
    <div className={styles.mobileClient}>
      <span className={styles.mobileClientBalance}>{props.info.balance}</span>
      <span className={styles.mobileClientFIO}>{props.info.fio}</span>
    </div>
  );

}
