import Head from "next/head";
import styles from "./DailyRaport.module.css";
import Link from "next/dist/client/link";

export default function DailyRecord() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <div className={styles.image}>
          <img src="./cover.jpg" alt="" />
        </div>
        <div className={styles.text}>
          <h1>Daily Record</h1>
          <p>
            Top quality data, all in one place. <br /> Start discovery of
            interactions between phage & hosts. <br />
            Just for your research
          </p>
          <div className={styles.extras}>
            <button>
              <Link href={"/search"}>Search records</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
