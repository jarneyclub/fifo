import { useState } from "react";
import styles from "./Queue.module.css";
import Emoji from "../emoji/emoji";
import Tooltip from "@mui/material/Tooltip";
import profile from "../../assets/icons/ProfilePic.png"

export function Queue() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={styles.selection}>
        <div className={styles.title}>
          <div className={styles.Header1}>CS 11 Queue</div>
          <div className={styles.subtitle}>12 people</div>
        </div>

        <label>
          <div className={styles.Header4}>Up Next</div>
          <div className={styles.upNextCard}>
            <img src={profile} className={styles.profile} />
            <div className={styles.name}>Anna Folger</div>
          </div>
          <br />
          <div className={styles.HelpBttn}>Start Helping</div>
          <br />
          <div className={styles.line4}></div>
          <br />
          <div className={styles.Header3}>Waiting</div>
          <div className={styles.student}>
            <div className={styles.number}>2</div>
            <div className={styles.name}>Patrick Bateman</div>
          </div>
          <div className={styles.student}>
            <div className={styles.number}>3</div>
            <div className={styles.name}>Eren Yeager</div>
          </div>
        </label>
        <hr />
        <div className={styles.showAll}>Show All</div>
      </div>
    </div>
  );
}