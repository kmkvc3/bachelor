import styles from "./Export.module.css"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Export() {
  return <button className={styles.button}>
      Export <FontAwesomeIcon icon={faArrowDown} />
  </button>
}
