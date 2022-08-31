import styles from "./enroll.module.css";
import { BackBtn } from "../../components/BackBtn/BackBtn";

export function Enroll() {
  const path = "/user/courses";
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <BackBtn path={path} />
          <h5>Add Class</h5>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.Header1}>Enter Class Code to Add a Class</div>
        <input
          className={styles.ClassCode}
          type="text"
          id="classCode"
          name="classCode"
          placeholder="👉 Enter Code"
        />
        <div className={styles.Subtitle}>Code can be found in your syllabus</div>
        <a className={styles.btn} href="/user/courses">
          Add Class
        </a>
      </div>
    </div>
  );
}
