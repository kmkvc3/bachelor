import styles from "./DisplayedFilter.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisplayedFilter({ filterToDisplay, removeFilter }) {
  return (
    <div className={`${styles.wrapper} ${styles.active}`}>
      <div className={styles.option}>
        <div>{filterToDisplay}</div>
        <div
          className={styles.closeIcon}
          onClick={() => removeFilter(filterToDisplay)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
}
