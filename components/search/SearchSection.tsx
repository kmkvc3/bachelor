import Searchbar from "./Searchbar/Searchbar";
import styles from "./SearchSection.module.css";
import Filters from "./Filters/Filters";
import { useRouter } from "next/router";

export default function SearchSection({
  setTaxonId,
  setEvidence,
  setAssembly,
  setMolecule,
  setSize,
  setSort,
  setPage,
  availableFilters,
}) {
  const router = useRouter();
  const { taxon_id } = router.query as any;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar
          setTaxonId={setTaxonId}
          setPage={setPage}
        />
      </div>
      {taxon_id ? (
        <Filters
          availableFilters={availableFilters}
          setEvidence={setEvidence}
          setAssembly={setAssembly}
          setMolecule={setMolecule}
          setSort={setSort}
          setSize={setSize}
          setPage={setPage}
        />
      ) : null}
    </div>
  );
}
