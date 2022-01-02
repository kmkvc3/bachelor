import styles from "./ListElement.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import BookmarkHandler from "../../bookmarks/BookmarksHandler";
import { useEffect, useState } from "react";
import EventBus from "../../../EventBus";

function EvidenceIcon({ evidence_name, type }) {
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

export default function ListElement({ tableData, type }) {
  const accession = tableData.virus.accession_number;
  const [bookmark, setBookmark] = useState(null);
  useEffect(() => {
    loadBookmark();
    EventBus.on("remove-bookmark", ()=>{
      if(!BookmarkHandler.getBookmark(accession)){
        BookmarkHandler.removeBookmark(accession)
        setBookmark(null);
      }
    })
  }, []);

  function loadBookmark() {
    const localBookmark = BookmarkHandler.getBookmark(accession);
    if (localBookmark) setBookmark(localBookmark);
  }

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
          <EvidenceIcon type={type} evidence_name={evidence.name} />
        ))}
      </span>
      <span>{tableData.virus.genome_type.genome_type}</span>
      <span>{tableData.virus.sequence_length}</span>
      <span
        className={styles.bookmark}
        onClick={() => {
          if(bookmark) {
            BookmarkHandler.removeBookmark(accession)
            toast.success(
              <div>
                <strong>{accession}</strong> removed from bookmarks
              </div>
            );
            setBookmark(null);
          } else {
            toast.success(
              <div>
                <strong>{accession}</strong> added to bookmarks
              </div>
            );
            BookmarkHandler.setBookmark({
              accession: accession,
              virus: tableData.virus.organism_name,
              host: tableData.host.organism_name,
              type: type
            });
            loadBookmark();
          }
          EventBus.emit("add-bookmark")
        }}
      >
        {bookmark ? (
          <FontAwesomeIcon icon={faBookmark} />
        ) : (
          <FontAwesomeIcon icon={farBookmark} />
        )}
      </span>
    </div>
  );
}
