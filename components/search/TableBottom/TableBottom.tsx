import styles from "./TableBottom.module.css";
import Pagination from "./Pagination";
import PageSize from "./PageSize";

export default function TableBottom({
  page,
  maxPage,
  setPage,
  offset,
  setOffset,
}) {
  return (
    <div className={styles.wrapper}>
      {maxPage === 1 ? null : (
        <PageSize offset={offset} setOffset={setOffset} />
      )}
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  );
}
