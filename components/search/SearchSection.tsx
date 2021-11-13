import Searchbar from "./Searchbar/Searchbar";
import styles from "./SearchSection.module.css";
import Filters from "./Filters/Filters";

export default function SearchSection({
  setSearchType,
  requestData,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Searchbar
          setSearchType={setSearchType}
          requestData={requestData}
        />
        <button className={styles.help}>?</button>
      </div>
      <Filters />
    </div>
  );
}
