// import { useState } from "react";
import styles from "./SignIn.module.css";

export function SignIn() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>FIFO</h3>
          <h5>CS OH Queue</h5>
        </div>
      </div>
      <div className={styles.context}>
        <div className={styles.illustration}>Illustration</div>
        <h3>Get your questions answered.</h3>
        <a className={styles.btn} href="/user/enrollment">
          <div>Continue with Google</div>
        </a>
      </div>
    </div>
  );
}
