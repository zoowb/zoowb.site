import MenuIcon from "@mui/icons-material/Menu";
import * as styles from "./index.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className={styles.title}>
        JIWOO CHOI
      </button>
      <button type="button" className={styles.title}>
        <MenuIcon />
      </button>
    </header>
  );
}
