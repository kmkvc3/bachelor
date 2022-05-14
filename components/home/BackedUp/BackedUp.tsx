import styles from "./BackedUp.module.css";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Image from "next/image";

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
            <Image
              layout="fill"
              src={
                darkMode ? "/logodark/ncbi-virus.svg" : "/logo/ncbi-virus.svg"
              }
              alt="ncbi virus logo"
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.genome.jp/virushostdb/">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/vhdb.svg" : "/logo/vhdb.svg"}
              alt="virus host database logo"
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/refseq/">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/refseq.svg" : "/logo/refseq.svg"}
              alt="refseq logo"
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.uniprot.org/help/uniprotkb">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/uniprot.svg" : "/logo/uniprot.svg"}
              alt="uniprot logo"
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://mvp.medgenius.info/home">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/mvp.svg" : "/logo/mvp.svg"}
              alt="mvp logo"
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ebi.ac.uk/intact/home">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/intact.svg" : "/logo/intact.svg"}
              alt="intact logo"
            />
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/gtdb.svg" : "/logo/gtdb.svg"}
              alt="gtdb logo"
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/taxonomy">
            <Image
              layout="fill"
              src={
                darkMode
                  ? "/logodark/ncbi-taxonomy.svg"
                  : "/logo/ncbi-taxonomy.svg"
              }
              alt="ncbi taxonomy logo"
            />
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="https://talk.ictvonline.org/">
            <Image
              layout="fill"
              src={darkMode ? "/logodark/ictv.svg" : "/logo/ictv.svg"}
              alt="ictv logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
