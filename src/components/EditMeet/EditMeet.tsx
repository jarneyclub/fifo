import styles from "./EditMeet.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Tooltip from "@mui/material/Tooltip";

export function EditMeet({ meetMode }: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <LocationOnOutlinedIcon
          sx={{ marginRight: "20px", color: "#008CFF" }}
        />
        <div className={styles.Subtitle}>{meetMode}</div>
      </div>
      <Tooltip title="Edit how to meet">
        <div style={{ cursor: "pointer", margin: "0 20px", color: "#008CFF" }}>
          EDIT
        </div>
      </Tooltip>
    </div>
  );
}
