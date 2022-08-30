import styles from "./BackBtn.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function BackBtn({ path}: any) {
  return (
    <div className={styles.return}>
      <a href={path}>
        <ArrowBackIcon sx={{ color: "#008CFF" }} />
      </a>
    </div>
  );
}
