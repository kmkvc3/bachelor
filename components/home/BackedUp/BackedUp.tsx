import Head from "next/head";
import styles from "./BackedUp.module.css";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function DailyRecord() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <h1>Credits</h1>
        <p>
          PHD combines the latest information on virus-host interactions from
          seven source databases with current taxonomic classification retrieved
          from NCBI Taxonomy, Genome Taxonomy Database (GTDB), and International
          Committee on Taxonomy of Viruses (ICTV).
        </p>
      </div>
      <div className={styles.logoHolder}>
        <div className={styles.logoWrapper}>
          <a
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/"
          >
            <img
              src={darkMode ? "logodark/ncbi-virus.svg" : "logo/ncbi-virus.svg"}
              alt=""
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.genome.jp/virushostdb/">
            <img
              src={darkMode ? "logodark/vhdb.svg" : "logo/vhdb.svg"}
              alt=""
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/refseq/">
            <img
              src={darkMode ? "logodark/refseq.svg" : "logo/refseq.svg"}
              alt=""
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.uniprot.org/help/uniprotkb">
            <img
              src={darkMode ? "logodark/uniprot.svg" : "logo/uniprot.svg"}
              alt=""
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://mvp.medgenius.info/home">
            <img src={darkMode ? "logodark/mvp.svg" : "logo/mvp.svg"} alt="" />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ebi.ac.uk/intact/home">
            <img
              src={darkMode ? "logodark/intact.svg" : "logo/intact.svg"}
              alt=""
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            <img
              src={darkMode ? "logodark/gtdb.svg" : "logo/gtdb.svg"}
              alt=""
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/taxonomy">
            <img
              src={
                darkMode
                  ? "logodark/ncbi-taxonomy.svg"
                  : "logo/ncbi-taxonomy.svg"
              }
              alt=""
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://talk.ictvonline.org/">
            <img
              src={darkMode ? "logodark/ictv.svg" : "logo/ictv.svg"}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
