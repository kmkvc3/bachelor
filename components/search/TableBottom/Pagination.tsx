import styles from "./Pagination.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ page, maxPage, setPage }) {
  if((page && maxPage) === 1) return null;
  return (
    <div className={styles.wrapper}>
      {page > 1 ? (
        <button
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(10000, 0);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      ) : null}

      <p> {page + " of " + maxPage}</p>
      {page !== maxPage ? (
        <button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(10000, 0);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      ) : null}
    </div>
  );
}
