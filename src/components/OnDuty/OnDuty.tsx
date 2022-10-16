import styles from "./OnDuty.module.css";
import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn";
import Emoji from "../emoji/emoji";
import { OnDuties } from "./OnDuties/OnDuties";
import { BackBtn } from "../BackBtn/BackBtn";

export function OnDuty() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <BackBtn path={"/user/student/comp40/check-queue"} />
        </div>
        <div className={styles.content}>
          <div className={styles.Header1}>
            TAs On-Duty <Emoji emoji="😎" label="smiling face" />
          </div>
          <OnDuties />
        </div>
      </div>
    </div>
  );
}
