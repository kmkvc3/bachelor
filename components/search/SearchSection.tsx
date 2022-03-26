import Searchbar from "./Searchbar/Searchbar";
import styles from "./SearchSection.module.css";
import Filters from "./Filters/Filters";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { taxon_id } = router.query as any;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar setType={setType} setTaxonId={setTaxonId} setPage={setPage}/>
      </div>
      {taxon_id ? 
      <Filters
        availableFilters={availableFilters}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
        setPage={setPage}
      /> : null }
    </div>
  );
}
