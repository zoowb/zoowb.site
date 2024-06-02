import * as styles from "@/containers/home/index.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        Welcome to my site!
        <p className={styles.icon} style={{ fontSize: "2.5rem" }}>
          &#128075;
        </p>
      </div>
      <Link href="/about" className={styles.row}>
        <span>I&#39;m JIWOO CHOI</span>
        <span>ABOUT ME</span>
        <p className={styles.icon}>&#8640;</p>
      </Link>
      <div className={styles.row}>
        <span>The skills I have</span>
        <span>SKILLS</span>
        <p className={styles.icon}>&#8640;</p>
      </div>
      <div className={styles.row}>
        <span>The projects I&#39;ve done</span>
        <span>PROJECTS</span>
        <p className={styles.icon}>&#8640;</p>
      </div>
      <div className={styles.row}>
        <span>If you have any more questions about me</span>
        <span>CONTECT</span>
        <p className={styles.icon}>&#8640;</p>
      </div>
    </main>
  );
}
