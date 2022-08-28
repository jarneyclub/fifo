import { useState } from "react";
import styles from "./EnterHelp.module.css";

export function EnterHelp() {
    const [debugClick, setDebugClick] = useState(false);
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
    if (props === "Debug") {
      setDebugClick(!debugClick);
    } else if (props === "Hw") {
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
    <div style={{width: "100%"}}>
      <div className={styles.selection}>
        <label>
          What do you need help with? (1-2){" "}
          <span className={styles.required}>*</span>
          <br />
          <div className={styles.inputBtn}>
            <label className={debugClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="debugging"
                value="debugging"
                onClick={() => handleClick("Debug")}
                required
              />
              <span>Debugging</span>
            </label>

            <label className={hwClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="hw"
                value="hw"
                onClick={() => handleClick("Hw")}
              />
              <span>HW Help</span>
            </label>

            <label className={getClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="get"
                value="get"
                onClick={() => handleClick("Get")}
              />
              <span>Getting Started</span>
            </label>

            <label className={conceptClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="concept"
                value="concept"
                onClick={() => handleClick("Concept")}
              />
              <span>Conceptual Help</span>
            </label>

            <label className={adviceClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="advice"
                value="advice"
                onClick={() => handleClick("Advice")}
              />
              <span>CS Advice</span>
            </label>
          </div>
        </label>
      </div>

      {hwClick || debugClick ? (
        <div className={styles.selection}>
        <label>
            Program Issue(s) <span className={styles.required}>*</span>
            <br />
            <div className={styles.inputBtn}>
            <label
                className={wrongClick ? styles.Clicked : styles.unClicked}
            >
                <input
                type="checkbox"
                name="secondAction"
                id="wrong"
                value="wrong"
                onClick={() => handleClick("Wrong")}
                required
                />
                <span>Wrong Output</span>
            </label>

            <label
                className={
                runtimeClick ? styles.Clicked : styles.unClicked
                }
            >
                <input
                type="checkbox"
                name="secondAction"
                id="runtime"
                value="runtime"
                onClick={() => handleClick("Runtime")}
                />
                <span>Runtime Error</span>
            </label>

            <label
                className={
                compileClick ? styles.Clicked : styles.unClicked
                }
            >
                <input
                type="checkbox"
                name="secondAction"
                id="compile"
                value="compile"
                onClick={() => handleClick("Compile")}
                />
                <span>Compile Error</span>
            </label>

            <label
                className={
                infiniteClick ? styles.Clicked : styles.unClicked
                }
            >
                <input
                type="checkbox"
                name="secondAction"
                id="infinite"
                value="infinite"
                onClick={() => handleClick("Infinite")}
                />
                <span>Infinite Loop</span>
            </label>

            <label
                className={weirdClick ? styles.Clicked : styles.unClicked}
            >
                <input
                type="checkbox"
                name="secondAction"
                id="weird"
                value="weird"
                onClick={() => handleClick("Weird")}
                />
                <span>Weird Behavior</span>
            </label>

            <label
                className={otherClick ? styles.Clicked : styles.unClicked}
            >
                <input
                type="checkbox"
                name="secondAction"
                id="other"
                value="other"
                onClick={() => handleClick("Other")}
                />
                <span>Other</span>
            </label>
            </div>
        </label>
        </div>
        ) : null}
    </div>
  );
}