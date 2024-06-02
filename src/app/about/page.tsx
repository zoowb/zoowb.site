import * as styles from "@/containers/about/index.css";
import { vars } from "@/styles/variables.css";
import { Noto_Sans_KR, Oooh_Baby } from "next/font/google";
import Image from "next/image";

const OoohBaby = Oooh_Baby({ subsets: ["latin"], weight: "400" });
const notoSans = Noto_Sans_KR({ subsets: ["cyrillic"] });

export default function About() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.title}>
          ABOUT ME
          <div className={`${OoohBaby.className} ${styles.name}`}>Jiwoo Choi</div>
        </div>
        <div className={styles.birth}>2001.08.29</div>
      </section>
      <section className={styles.bottom}>
        <Image src={"/memoticon.png"} alt="memo" width={130} height={130} />
        <div className={`${notoSans.className} ${styles.desc}`}>
          <b>함께할 때 더 빛나는 개발자</b>, <b style={{ color: vars.color.yellow300 }}>최지우</b>
          입니다.{"\n"}
          사용자와 직접 소통하는 <b>프론트엔드</b>에 매력을 느껴{"\n"}
          여러 <b>교육, 프로젝트, 인턴을 진행</b>하며 개발경험을 쌓았습니다.{"\n"}
          <b>더 좋은 협업</b>에 대해 고민하고 <b>성능, 유지 보수성에 집중</b>하며 개발하고 있습니다.
        </div>
        <div>
          <div className={styles.education}>
            <div>Education</div>
            <p className={`${styles.wordBreak}`}>
              2024.06{"\n"}
              2023.07{"\n"}
              2023.02{"\n"}
              2019.03
            </p>
            <p className={`${notoSans.className} ${styles.wordBreak}`}>
              삼성청년SW아카데미 수료{"\n"}
              삼성청년SW아카데미 입과{"\n"}
              광운대학교 컴퓨터정보공학부 졸업{"\n"}
              광운대학교 컴퓨터정보공학부 입과
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
