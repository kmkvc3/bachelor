import styles from "./TableBottom.module.css";
import Pagination from "./Pagination";
import PageSize from "./PageSize";
import Export from "../../table/Export";

export default function TableBottom({
  page,
  maxPage,
  setPage,
  offset,
  setOffset,
  data
}) {
  return (
    <div className={styles.wrapper}>
      {maxPage === 1 ? null : (
        <PageSize offset={offset} setOffset={setOffset} />
      )}
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      {data ? (
        data.results.length ? <Export /> : null
      ): null}
    </div>
  );
}
