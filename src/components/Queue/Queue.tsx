import { useState } from "react";
import styles from "./Queue.module.css";
import Emoji from "../emoji/emoji";
import Tooltip from "@mui/material/Tooltip";
import profile from "../../assets/icons/ProfilePic.png"

export function Queue() {
    const [hwClick, setHwClick] = useState(false);
    const [getClick, setGetClick] = useState(false);
    const [conceptClick, setConceptClick] = useState(false);
    const [adviceClick, setAdviceClick] = useState(false);
    const [wrongClick, setWrongClick] = useState(false);
    const [runtimeClick, setRuntimeClick] = useState(false);
    const [compileClick, setCompileClick] = useState(false);
    const [infiniteClick, setInfiniteClick] = useState(false);
    const [weirdClick, setWeirdClick] = useState(false);
    const [otherClick, setOtherClick] = useState(false);

  function handleClick(props: any) {
    if (props === "Hw") {
      setHwClick(!hwClick);
    } else if (props === "Get") {
      setGetClick(!getClick);
    } else if (props === "Concept") {
      setConceptClick(!conceptClick);
    } else if (props === "Advice") {
      setAdviceClick(!adviceClick);
    } else if (props === "Wrong"){
      setWrongClick(!wrongClick);
    } else if (props === "Runtime") {
      setRuntimeClick(!runtimeClick);
    } else if (props === "Compile") {
      setCompileClick(!compileClick);
    } else if (props === "Weird") {
      setWeirdClick(!weirdClick);
    } else if (props === "Infinite") {
      setInfiniteClick(!infiniteClick);
    } else {
      setOtherClick(!otherClick);
    }
  }

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
        </label>
      </div>
    </div>
  );
}