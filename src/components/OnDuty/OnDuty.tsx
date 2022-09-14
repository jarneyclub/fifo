import styles from "./OnDuty.module.css";
// import { BackBtn } from "../BackBtn/BackBtn";
import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn";
import Emoji from "../emoji/emoji";
import { OnDuties } from "./OnDuties/OnDuties";

export function OnDuty() {
  return (
    <div>
      <HeaderWBackBtn path={"/user/student/comp40/check-queue"} />
      <div className={styles.Header1}>
        TAs On-Duty <Emoji emoji="😎" label="smiling face" />
      </div>
      <OnDuties/>
      {/* <div className={styles.headerContainer}>
        <BackBtn path={path} />
        <h5 style={color}>{title}</h5>
        <div className={styles.circle}></div>
      </div> */}
    </div>
  );
}
