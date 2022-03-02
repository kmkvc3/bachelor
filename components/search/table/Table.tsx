import ListElement from "./ListElement";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ListElement.module.css";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../../ThemeContext";
import { useContext, useEffect } from "react";

export default function Table({ data, type }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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

      {darkMode ? (
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #525a63",
              backgroundColor: "#1c2128",
              padding: "0.2rem 0.6rem",
              color: "#adbac7",
              borderRadius: "0.25rem",
            },
            success: {
              iconTheme: {
                primary: "#81b29a",
                secondary: "black",
              },
            },
          }}
        />
      ) : (
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #d3d2d2",
              backgroundColor: "white",
              padding: "0.2rem 0.6rem",
              color: "#505050",
              borderRadius: "0.25rem",
              boxShadow: "none",
            },
            success: {
              iconTheme: {
                primary: "#81b29a",
                secondary: "#505050",
              },
            },
            duration: 3400,
          }}
        />
      )}

      <div>
        {data.results.map((data) => (
          <ListElement key={data.virus.accession_number} type={type} tableData={data} />
        ))}
      </div>
    </>
  );
}
