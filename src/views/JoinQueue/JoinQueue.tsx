import styles from "./joinQueue.module.css";

import { HeaderWBackBtn } from "../../components/HeaderWBackBtn/HeaderWBackBtn";
import { Form } from "../../components/Form/Form";

export function JoinQueue() {
  return (
    <div className={styles.container}>
      <HeaderWBackBtn
        path={"/user/student/comp40/check-queue"}
        title={"Join Queue - CS 11"}
      />
      <div className={styles.card}>
        <Form />
      </div>
    </div>
  );
}