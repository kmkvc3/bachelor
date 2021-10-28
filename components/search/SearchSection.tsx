import Searchbar from "./Searchbar";
import styles from "./SearchSection.module.css";

export default function SearchSection({ setSearchType, setSearchMode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar
          setSearchType={setSearchType}
          setSearchMode={setSearchMode}
        />
      </div>
    </div>
  );
}

