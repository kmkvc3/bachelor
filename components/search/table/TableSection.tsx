import Table from "./Table";
import styles from "./TableSection.module.css";
import SkeletonLoader from "./SkeletonLoader";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../Ilustrations/NotFound";
import Export from "./Export";

export default function TableSection({ data, isDataLoaded, filters }) {
  return (
    <div className={styles.content}>
      {isDataLoaded ? (
        data.results.length === 0 || !data.results.length ? (
          <NotFound />
        ) : (
          <>
            <div className={styles.info}>
              <div className={styles.results}>
                <p>
                  {data.count} virus-host interactions for{" "}
                  <strong>{data.query.name}</strong>
                </p>
              </div>
              <Export filters={filters} />
            </div>

            <Table data={data} />
          </>
        )
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
}
