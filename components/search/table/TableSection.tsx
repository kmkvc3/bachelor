import Table from "./Table";
import styles from "./TableSection.module.css";
import SkeletonLoader from "./SkeletonLoader";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../Ilustrations/NotFound";

export default function TableSection({
  type,
  data,
  isDataLoaded,
}) {
  return (
    <div className={styles.content}>
      {isDataLoaded ? (
        (data.results.length === 0) || (!data.results.length) ? (
          <NotFound />
        ) : (
          <>
            <div className={styles.results}>
              <p>{data.count} results</p>
            </div>
            <Table
              type={type}
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
