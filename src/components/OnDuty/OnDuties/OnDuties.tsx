import styles from "./OnDuties.module.css";

export function OnDuties() {
  return (
    <div>
      <div className={styles.Header3}>Now</div>
      <div>
        <div className={styles.BodyNormal}>John Fish</div>
        <div className={styles.BodySmall}>john.fish@tufts.edu</div>
      </div>
    </div>
  );
}
