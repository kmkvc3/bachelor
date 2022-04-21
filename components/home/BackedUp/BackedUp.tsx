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
          <img src="./logo/uniprot.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/refseq.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/vhdb.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/ncbi-virus.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/mvp.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/intact.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/gtdb.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/ictv.svg" alt="" />
        </div>
        <div className={styles.logoWrapper}>
          <img src="./logo/ncbi-taxonomy.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
