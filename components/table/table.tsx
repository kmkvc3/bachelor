import { useEffect } from "react";
import ListElement from "./ListElement";
import styles from "./Table.module.css"

export default function Table({ searchType }) {
  const data = {
    accession: "xm 1200",
    spieceA: "escherichia Coli",
    spieceB: "Somebad wirus",
    evidence: "evidenceRS",
    length: "1200"
  }
  return (
    <>
      <div className={styles.tableHeader}>
        <span>Accession</span>
        {searchType == "virus" ? <span>Virus</span> : <span>Host</span>}
        {searchType == "virus" ? <span>Host</span> : <span>Virus</span>}
        <span>Evidence</span>
        <span>Length</span>
      </div>
      <ListElement tableData={data}/>
      <ListElement tableData={data}/>
      <ListElement tableData={data}/>
      <ListElement tableData={data}/>
    </>
  );
}
