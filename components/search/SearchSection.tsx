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
}) {
  const [availableFilters, setAvailableFilters] = useState(null);

  useEffect(() => {
    loadFilters();
  }, []);
  async function loadFilters() {
    try {
      const data = await getDbDictonary();
      setAvailableFilters(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    
    <div id="modal-wrapper" className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar setType={setType} setQuery={setQuery} />
        <Help />
      </div>
      {availableFilters ? (
        <Filters
          availableFilters={availableFilters}
          setDatabase={setDatabase}
          setEvidence={setEvidence}
          setAssembly={setAssembly}
          setMolecule={setMolecule}
          setSort={setSort}
        />
      ) : null}
    </div>
  );
}

