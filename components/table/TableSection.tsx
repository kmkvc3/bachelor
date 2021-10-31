import Table from "./Table";
import styles from "./TableSection.module.css";
import SkeletonLoader from "./SkeletonLoader";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../search/NotFound";

export default function TableSection({
  searchMode,
  searchType,
  data,
  isDataLoaded,
}) {
  return (
    <div className={styles.content}>
      {isDataLoaded ? (
        data.length === 0 ? (
          <NotFound />
        ) : (
          <>
            <div className={styles.tableHeader}>
              <p>Results</p>
              <button>
                <img src="./export.svg"></img>
                <p>Export</p>
              </button>
            </div>
            <Table
              searchType={searchType}
              data={data}
              isDataLoaded={isDataLoaded}
            />
          </>
        )
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
}
