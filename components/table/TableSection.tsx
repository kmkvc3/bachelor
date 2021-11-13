import Table from "./Table";
import styles from "./TableSection.module.css";
import SkeletonLoader from "./SkeletonLoader";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../search/Ilustrations/NotFound";

export default function TableSection({
  data,
  query,
  isDataLoaded,
}) {
  return (
    <div className={styles.content}>
      {isDataLoaded ? (
        data.results.length === 0 ? (
          <NotFound />
        ) : (
          <>
            <div className={styles.results}>
              <p>{data.count} results for  <strong>{query}</strong> </p>
            </div>
            <Table
              data={data}
            />
          </>
        )
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
}
