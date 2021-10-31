import { useEffect } from "react";
import ListElement from "./ListElement";
import styles from "./ListElement.module.css";

export default function Table({ searchType, data, isDataLoaded }) {
  return (
    <>
      <div className={styles.element}>
        <span>Accession</span>
        {searchType == "virus" ? <span>Virus</span> : <span>Host</span>}
        {searchType == "virus" ? <span>Host</span> : <span>Virus</span>}
        <span>Evidence</span>
        <span>Length</span>
      </div>
      {searchType == "virus" ? (
        <div>
          {data.map((data)=>
            <ListElement tableData={data} />
          )}
        </div>
      ) : (
        <div>
          {data.map((data)=>
            <ListElement tableData={data} />
          )}
      </ div>
      )}
    </>
  );
}
