import Searchbar from "./Searchbar/Searchbar";
import styles from "./SearchSection.module.css";
import Filters from "./Filters/Filters";

export default function SearchSection({
  setType,
  setTaxonId,
  setEvidence,
  setAssembly,
  setMolecule,
  setSort,
  setPage,
  availableFilters,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar setType={setType} setTaxonId={setTaxonId} setPage={setPage}/>
      </div>
      <Filters
        availableFilters={availableFilters}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
        setPage={setPage}
      />
    </div>
  );
}
