import styles from "./enroll.module.css";
import Tooltip from "@mui/material/Tooltip";
import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn"

export function Enroll() {

  return (
    <div className={styles.container}>
      <HeaderWBackBtn
        path={"/user/courses"}
        title={"Add Class"}
        color={{ color: "white" }}
      />
      <form className={styles.card}>
        <div className={styles.content}>
          <div className={styles.Header1}>Enter Class Code to Add a Class</div>
          <input
            className={styles.ClassCode}
            type="text"
            id="classCode"
            name="classCode"
            placeholder="👉 Enter Code"
          />
          <div className={styles.Subtitle}>
            Code can be found in your syllabus
          </div>
          <Tooltip title="Add Class">
            <a className={styles.btn} href="/user/courses" type="submit">
              Add Class
            </a>
          </Tooltip>
        </div>
      </form>
    </div>
  );
}
