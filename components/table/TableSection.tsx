import Table from "./Table";
import styles from "./TableSection.module.css";

export default function TableSection({ searchMode, searchType }) {
  return (
    <div className={styles.content}>
      {searchMode ? <p>Results</p> : <p>Most popular searches</p>}
      <Table searchType={searchType} />;
    </div>
  );
}
