import styles from "./HeaderWBackBtn.module.css";
import { BackBtn } from "../BackBtn/BackBtn";
import calendar from "../../assets/icons/Calendar.png";

export function HeaderWCheckDuty({ path, clickOnDuty }: any) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <BackBtn path={path} />
        <div className={styles.onDuty} onClick={clickOnDuty}>
          <img src={calendar} alt="calendar" />
          <div>Check on-duty</div>
        </div>
      </div>
    </div>
  );
}
