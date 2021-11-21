import styles from "./ListElement.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EvidenceIcon({ evidence_name }) {
  switch (evidence_name) {
    case "RefSeq":
      return (
        <span className={`${styles.RefSeq} ${styles.evidence}`}>
          <p>RS</p>
        </span>
      );
    case "UniProt":
      return (
        <span className={`${styles.UniProt} ${styles.evidence}`}>
          <p>UP</p>
        </span>
      );
    case "Virus-Host DB":
      return (
        <span className={`${styles.VHDB} ${styles.evidence}`}>
          <p>VH</p>
        </span>
      );
    case "NCBIVirus":
      return (
        <span className={`${styles.NCBI} ${styles.evidence}`}>
          <p>NV</p>
        </span>
      );
    default:
      return null;
  }
}

export default function ListElement({ tableData }) {
  return (
    <div className={styles.element}>
      <span className={styles.accession}>
        {tableData.virus.accession_number}
      </span>
      <span>
        <strong>{tableData.virus.organism_name}</strong>
      </span>
      <span>
        <strong>{tableData.host.organism_name}</strong>
      </span>
      <span className={styles.evidenceWrapper}>
        {tableData.evidence.map((evidence) => (
          <EvidenceIcon evidence_name={evidence.name} />
        ))}
      </span>
      <span>{tableData.virus.genome_type.genome_type}</span>
      <span>{tableData.virus.sequence_length}</span>
      <span onClick={()=>{toast(`${tableData.virus.accession_number} added to bookmarks`, {
        // type: "success",
        progressClassName: 'fancy-progress-bar'
      })}}>
        <FontAwesomeIcon icon={faBookmark} />
      </span>
    </div>
  );
}
