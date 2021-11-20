import ListElement from "./ListElement";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ListElement.module.css";

export default function Table({ data }) {
  return (
    <>
      <div className={`${styles.element} ${styles.header}`}>
        <span>Accession</span>
        <span>Virus</span>
        <span>Host</span>
        <span>
          Evidence
          <span className={styles.helpIconWrapper}>
            <FontAwesomeIcon
              className={styles.helpIcon}
              icon={faQuestionCircle}
            ></FontAwesomeIcon>
            <div className={styles.helpDialog}>
              <div>
                <span className={`${styles.RefSeq} ${styles.evidence}`}>
                  <p>RS</p>
                </span>
                <p>RefSeq</p>
              </div>
              <div>
                <span className={`${styles.UniProt} ${styles.evidence}`}>
                  <p>UP</p>
                </span>
                <p>UniProt</p>
              </div>
              <div>
                <span className={`${styles.VHDB} ${styles.evidence}`}>
                  <p>VH</p>
                </span>
                <p>Virus-Host DB</p>
              </div>
              <div>
                <span className={`${styles.NCBI} ${styles.evidence}`}>
                  <p>NV</p>
                </span>
                <p>NCBIVirus</p>
              </div>
            </div>
          </span>
        </span>
        <span>Genome Type</span>
        <span>Length</span>
      </div>
      <div>
        {data.results.map((data) => (
          <ListElement tableData={data} />
        ))}
      </div>
    </>
  );
}
