import styles from "./HeaderWBackBtn.module.css";
import { BackBtn } from "../BackBtn/BackBtn";

export function HeaderWBackBtn({ path, title, color }: any) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <BackBtn path={path} />
        <h5 style={color}>{title}</h5>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
