import Contents from "@/containers/chat/Contents";
import StatusBar from "@/containers/chat/StatusBar";
import * as styles from "./style.css";

export default function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <section className={styles.inside}>
          <StatusBar />
          <Contents />
        </section>
      </div>
    </div>
  );
}
