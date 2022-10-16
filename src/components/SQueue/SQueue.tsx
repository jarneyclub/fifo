import { useState } from "react";
import styles from "./SQueue.module.css";
import Tooltip from "@mui/material/Tooltip";

export function SQueue() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.Header3}>Waiting</div>
        <div className={styles.subtitle}>12 People</div>
      </div>
      <div className={styles.card}>
        <div className={styles.student}>
          <div className={styles.number}>1</div>
          <div className={styles.name}>Anna Folger</div>
        </div>
        <div className={styles.student}>
          <div className={styles.number}>2</div>
          <div className={styles.name}>Patrick Bateman</div>
        </div>
        <div className={styles.student}>
          <div className={styles.number}>3</div>
          <div className={styles.name}>Eren Yeager</div>
        </div>
        <div className={styles.student}>
          <div className={styles.number}>4</div>
          <div className={styles.name}>Ri Jeong-hyeok</div>
        </div>
        <hr />
        <div className={styles.showAll}>Show All</div>
      </div>
    </div>
  );
}