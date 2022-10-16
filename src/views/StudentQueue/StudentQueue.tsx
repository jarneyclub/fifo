import { useState } from "react";
import styles from "./stQueue.module.scss";
import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn";
import { SQueue } from "../../components/SQueue/SQueue";
import { HeaderWCheckDuty } from "../../components/HeaderWCheckDuty/HeaderWCheckDuty";
import { OnDuty } from "../../components/OnDuty/OnDuty";

export function StudentQueue() {

  const [onDuty, setOnDuty] = useState(false);

  function clickDuty() {
    setOnDuty(true);
  }

  return (
    <div className={styles.container}>
      <HeaderWCheckDuty clickOnDuty={() => clickDuty()} path={"/"} />
      {onDuty? <OnDuty/>: null}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.subtitleBlue}>You’re not in queue yet.</div>
          <div className={styles.Header1}>CS 11 Queue</div>
          <div className={styles.subtitle}>Intro Computer Science</div>
        </div>

        <a className={styles.btn} href="/user/student/comp40/join-queue">
          Join Queue
        </a>
        <SQueue />
      </div>
    </div>
  );
}