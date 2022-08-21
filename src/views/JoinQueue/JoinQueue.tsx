import {useState} from "react";
import styles from "./joinQueue.module.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function JoinQueue() {
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
    } else if (props === "Runtime"){
      setRuntimeClick(!runtimeClick);
    } else if (props === "Compile"){
      setCompileClick(!compileClick);
    } else if (props === "Weird"){
      setWeirdClick(!weirdClick);
    } else if (props === "Infinite"){
      setInfiniteClick(!infiniteClick);
    } else {
      setOtherClick(!otherClick);
    }
  }

  // function chkcontrol(j) {
  //   var total = 0;
  //   for (var i = 0; i < document.form.ckb.length; i++) {
  //     if (document.form1.ckb[i].checked) {
  //       total = total + 1;
  //     }
  //     if (total > 3) {
  //       alert("Please Select only three");
  //       document.form1.ckb[j].checked = false;
  //       return false;
  //     }
  //   }
  // }

  return (
    <div className={styles.container}>
      <div className={styles.joinQueue}>
        <div className={styles.return}>
          <a href="#">
            <ArrowBackIcon sx={{ color: "#008CFF" }} />
            <div>Queue</div>
          </a>
        </div>
        <div className={styles.header}>
          <h3>Join Queue</h3>
          <h4>CS 11 Intro Computer Science</h4>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <form id="form" className={styles.form}>
            <div className={styles.selection}>
              <label>
                What do you need help with? (1-2){" "}
                <span className={styles.required}>*</span>
                <br />
                <div className={styles.inputBtn}>
                  <label
                    className={debugClick ? styles.Clicked : styles.unClicked}
                  >
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

                  <label
                    className={hwClick ? styles.Clicked : styles.unClicked}
                  >
                    <input
                      type="checkbox"
                      name="action"
                      id="hw"
                      value="hw"
                      onClick={() => handleClick("Hw")}
                    />
                    <span>HW Help</span>
                  </label>

                  <label
                    className={getClick ? styles.Clicked : styles.unClicked}
                  >
                    <input
                      type="checkbox"
                      name="action"
                      id="get"
                      value="get"
                      onClick={() => handleClick("Get")}
                    />
                    <span>Getting Started</span>
                  </label>

                  <label
                    className={conceptClick ? styles.Clicked : styles.unClicked}
                  >
                    <input
                      type="checkbox"
                      name="action"
                      id="concept"
                      value="concept"
                      onClick={() => handleClick("Concept")}
                    />
                    <span>Conceptual Help</span>
                  </label>

                  <label
                    className={adviceClick ? styles.Clicked : styles.unClicked}
                  >
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
            <div className={styles.selection}>
              <label>
                Description <br />
                <textarea
                  className={styles.input}
                  name="description"
                  rows={3}
                  cols={30}
                  placeholder="Please describe your problem in detail so your TA is better prepared to assist you."
                ></textarea>
              </label>
            </div>
            <div className={styles.selection}>
              <label>
                Best way to meet? <span className={styles.required}>*</span>{" "}
                <br />
                <select
                  className={styles.select}
                  id="meet"
                  name="meet"
                  required
                >
                  <option value="Zoom">Zoom</option>
                  <option value="in-person">In-Person</option>
                </select>
              </label>
            </div>
            <div>
              <input
                className={styles.submitBtn}
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
