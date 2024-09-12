import Image from "next/image";
import * as styles from "./statusBar.css";

export default function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.clock}>11:22</div>
      <Image src="/status-bar.png" width={72} height={12} alt="status-bar" />
    </div>
  );
}
