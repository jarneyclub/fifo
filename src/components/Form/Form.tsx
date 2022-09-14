import { useState } from "react";
import styles from "./Form.module.css";
import Emoji from "../emoji/emoji";
import { EditMeet } from "../EditMeet/EditMeet"

export function Form() {
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
    const [zoomClick, setZoomClick] = useState(false);
    const [inPersonClick, setInPersonClick] = useState(false);

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

  function handleMeet(props: any) {
    if (props === "Zoom") {
      setZoomClick(true);
      setInPersonClick(false);
    } else {
      setZoomClick(false);
      setInPersonClick(true);
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
        <div className={styles.Header1}>👋 What do you need help with?</div>
        <label>
          General Issue
          <br />
          <div className={styles.inputBtn}>
            <label className={hwClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="hw"
                value="hw"
                onClick={() => handleClick("Hw")}
              />
              <span>
                <Emoji emoji="🐞" label="bug" /> HW Help
              </span>
            </label>

            <label className={conceptClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="concept"
                value="concept"
                onClick={() => handleClick("Concept")}
              />
              <span>
                <Emoji emoji="🧠 " label="brain" />
                Conceptual Help
              </span>
            </label>

            <label className={getClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="get"
                value="get"
                onClick={() => handleClick("Get")}
              />
              <span>
                <Emoji emoji="🎯" label="target" />
                Getting Started
              </span>
            </label>

            <label className={adviceClick ? styles.Clicked : styles.unClicked}>
              <input
                type="checkbox"
                name="action"
                id="advice"
                value="advice"
                onClick={() => handleClick("Advice")}
              />
              <span>
                <Emoji emoji="🖥" label="computer" />
                CS Advice
              </span>
            </label>
          </div>
        </label>
      </div>

      {hwClick ? (
        <div className={styles.selection}>
          <label>
            Programming Issue (if applicable)
            <br />
            <div className={styles.inputBtn}>
              <label className={wrongClick ? styles.Clicked : styles.unClicked}>
                <input
                  type="checkbox"
                  name="secondAction"
                  id="wrong"
                  value="wrong"
                  onClick={() => handleClick("Wrong")}
                  required
                />
                <span>
                  <Emoji emoji="💀" label="skull" />
                  Wrong Output
                </span>
              </label>

              <label
                className={runtimeClick ? styles.Clicked : styles.unClicked}
              >
                <input
                  type="checkbox"
                  name="secondAction"
                  id="runtime"
                  value="runtime"
                  onClick={() => handleClick("Runtime")}
                />
                <span>
                  <Emoji emoji="😫" label="tired face" />
                  Runtime Error
                </span>
              </label>

              <label
                className={compileClick ? styles.Clicked : styles.unClicked}
              >
                <input
                  type="checkbox"
                  name="secondAction"
                  id="compile"
                  value="compile"
                  onClick={() => handleClick("Compile")}
                />
                <span>
                  <Emoji emoji="🚨" label="warning" />
                  Compile Error
                </span>
              </label>

              <label
                className={infiniteClick ? styles.Clicked : styles.unClicked}
              >
                <input
                  type="checkbox"
                  name="secondAction"
                  id="infinite"
                  value="infinite"
                  onClick={() => handleClick("Infinite")}
                />
                <span>
                  <Emoji emoji="♾️" label="infinity" />
                  Infinite Loop
                </span>
              </label>

              <label className={weirdClick ? styles.Clicked : styles.unClicked}>
                <input
                  type="checkbox"
                  name="secondAction"
                  id="weird"
                  value="weird"
                  onClick={() => handleClick("Weird")}
                />
                <span>
                  <Emoji emoji="👹" label="ghost" />
                  Weird Behavior
                </span>
              </label>

              <label className={otherClick ? styles.Clicked : styles.unClicked}>
                <input
                  type="checkbox"
                  name="secondAction"
                  id="other"
                  value="other"
                  onClick={() => handleClick("Other")}
                />
                <span>
                  <Emoji emoji="🐱" label="cat" />
                  Other
                </span>
              </label>
            </div>
          </label>
        </div>
      ) : null}
      <div className={styles.selection}>
        <div className={styles.Header1}>Add Problem Description</div>
        <textarea
          className={styles.input}
          name="description"
          rows={3}
          cols={30}
          placeholder="Please give a brief summary"
        ></textarea>
      </div>
      <div className={styles.selection}>
        <div className={styles.Header1}>Best way to meet</div>
        <div className={styles.inputBtn}>
          <label className={zoomClick ? styles.Clicked : styles.unClicked}>
            <input
              type="radio"
              name="meet"
              id="zoom"
              value="zoom"
              onClick={() => handleMeet("Zoom")}
              required
            />
            <span>Zoom</span>
          </label>

          <label className={inPersonClick ? styles.Clicked : styles.unClicked}>
            <input
              type="radio"
              name="meet"
              id="inPerson"
              value="inPerson"
              onClick={() => handleMeet("InPerson")}
            />
            <span>In-Person</span>
          </label>
        </div>
        {zoomClick ? <EditMeet meetMode="Zoom" /> : null}
        {inPersonClick ? <EditMeet meetMode="InPerson" /> : null}
      </div>
      <div className={styles.submitContainer}>
        <a className={styles.submitBtn} href="/user/student/comp40/check-queue">
          <input type="submit" value="Submit"></input>
        </a>
      </div>
    </div>
  );
}