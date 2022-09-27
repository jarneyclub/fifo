import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import styles from "./AddCourse.module.css";

export function AddCourse({ path, title, color }: any) {
  return (
    <Tooltip title="Enroll in class">
      <a className={styles.container} href="/user/enrollment">
        <AddIcon sx={{ marginRight: "5px" }} />
        Add Course
      </a>
    </Tooltip>
  );
}
