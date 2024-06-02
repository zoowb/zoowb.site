import MenuIcon from "@mui/icons-material/Menu";
import * as styles from "./index.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" type="button" className={styles.title}>
        JIWOO CHOI
      </a>
      <button type="button" className={styles.menu}>
        <MenuIcon style={{ fontSize: "20px" }} />
      </button>
    </header>
  );
}
