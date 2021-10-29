import Searchbar from "./Searchbar";
import FilterButton from "./FilterButton";
import styles from "./SearchSection.module.css";
import HelpButton from "./HelpButton";

export default function SearchSection({ setSearchType, setSearchMode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <FilterButton />
        <Searchbar
          setSearchType={setSearchType}
          setSearchMode={setSearchMode}
        />
        <HelpButton />
      </div>
    </div>
  );
}

