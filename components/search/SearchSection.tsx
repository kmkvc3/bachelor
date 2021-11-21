import Searchbar from "./Searchbar/Searchbar";
import styles from "./SearchSection.module.css";
import Filters from "./Filters/Filters";
import { useEffect, useState } from "react";
import { getDbDictonary } from "../../Api";
import Help from "./Help";

export default function SearchSection({
  setType,
  setDatabase,
  setQuery,
  setEvidence,
  setAssembly,
  setMolecule,
  setSort,
  availableFilters,
}) {
  return (
    <div id="modal-wrapper" className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar setType={setType} setQuery={setQuery} />
        <Help />
      </div>
      <Filters
        availableFilters={availableFilters}
        setDatabase={setDatabase}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
      />
    </div>
  );
}
