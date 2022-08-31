// import { useState } from "react";
import styles from "./SignIn.module.css";
import img from "../../assets/illustration/Illustration_Home_SignOn.png";
import GoogleIcon from "../../assets/icons/Google.png";

export function SignIn() {

  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <img
          className={styles.illustration}
          alt={"SignIn Illustration"}
          src={img}
        />
        <div className={styles.Header1}>
          Welcome to <span className={styles.blue}>FIFO</span>
        </div>
        <div className={styles.BodyBold}>Get your questions answered</div>
        <a className={styles.btn} href="/user/enrollment">
          <img
            className={styles.icon}
            alt={"Google Icon"}
            src={GoogleIcon}
          ></img>
          <div>Continue with Google</div>
        </a>
      </div>
    </div>
  );
}
