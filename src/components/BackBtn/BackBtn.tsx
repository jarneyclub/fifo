import styles from "./BackBtn.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function BackBtn({ path, text }: any) {
  return (
    <div className={styles.return}>
      <a href={path}>
        <ArrowBackIcon sx={{ color: "#008CFF" }} />
        <div>{text}</div>
      </a>
    </div>
  );
}
