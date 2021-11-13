import Table from "./Table";
import styles from "./TableSection.module.css";
import SkeletonLoader from "./SkeletonLoader";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../search/Ilustrations/NotFound";
import { useEffect } from "react";

export default function TableSection({
  // searchMode,
  searchType,
  data,
  isDataLoaded,
}) {
  useEffect(()=>{
    console.log("data table section", data)
  }, [])
  return (
    <div className={styles.content}>
      {isDataLoaded ? (
        data.length === 0 ? (
          <NotFound />
        ) : (
          <>
            <div className={styles.tableHeader}>
              {/* <p>Results</p>
              <button>
                <img src="./export.svg"></img>
                <p>Export</p>
              </button> */}
            </div>
            <Table
              searchType={searchType}
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
