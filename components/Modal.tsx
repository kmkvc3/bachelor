import styles from "./Modal.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ children, opened, setClose }) {
  return (
    <>
      {opened ? (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <div className={styles.close} onClick={()=>setClose(true)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
