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
          <a target="_blank" href="https://www.uniprot.org/help/uniprotkb">
            <img src="./logo/uniprot.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/refseq/">
            <img src="./logo/refseq.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.genome.jp/virushostdb/">
            <img src="./logo/vhdb.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/"
          >
            <img src="./logo/ncbi-virus.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://mvp.medgenius.info/home">
            <img src="./logo/mvp.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ebi.ac.uk/intact/home">
            <img src="./logo/intact.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            <img src="./logo/gtdb.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://talk.ictvonline.org/">
            <img src="./logo/ictv.svg" alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/taxonomy">
            <img src="./logo/ncbi-taxonomy.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
