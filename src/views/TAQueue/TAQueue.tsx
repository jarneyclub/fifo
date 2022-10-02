import { useState } from "react";
import styles from "./taQueue.module.scss";
import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn";
import { Queue } from "../../components/Queue/Queue";

export function TAQueue() {
  return (
    <div className={styles.container}>
      <HeaderWBackBtn
        path={"/user/instructor/comp40/clock-in"}
      />
      <div className={styles.card}>
        <Queue />
      </div>
    </div>
  );
}