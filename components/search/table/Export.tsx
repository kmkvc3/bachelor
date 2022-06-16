import styles from "./Export.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { download } from "../../../Api";
import { saveAs } from "file-saver";
import { useState } from "react";
import Spinner from "./Spinner";

export default function Export({ filters }) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function downloadFile() {
    setIsDownloading(true);
    try {
      const res = await download(
        filters.taxon_id,
        filters.evidence,
        filters.assembly_level,
        filters.molecule,
        filters.sort
      );
      saveAs(res, "file.csv");
      setIsDownloading(false);
    } catch (error) {
      console.log(error);
      setIsDownloading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      {isDownloading ? (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      ) : null}
      <button
        onClick={() => {
          if (!isDownloading) {
            downloadFile();
          }
        }}
        className={
          isDownloading ? `${styles.button} ${styles.active}` : styles.button 
        }
      >
        Export to CSV
      </button>
    </div>
  );
}
