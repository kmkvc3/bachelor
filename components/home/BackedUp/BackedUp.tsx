import Head from "next/head";
import styles from "./BackedUp.module.css";

export default function DailyRecord() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <h1>Top quality data</h1>
        <p>Everything in one place. We are backed up by the best providers.</p>
      </div>
      <div className={styles.logoHolder}>
        <div className={styles.logoWrapper}>
          <img src="./logo/ncbi-virus-logo.png" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/refseq-logo.png" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/virus-host-db.png" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/swissprot.png" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/uniprot-2.png" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/intact-logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
