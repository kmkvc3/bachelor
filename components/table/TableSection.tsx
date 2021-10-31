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
            <p>Results</p>
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
