import { useState } from "react";
import Modal from "react-modal";
import styles from "./Help.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      zIndex: 10000,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(230, 230, 230, 0.6)",
    },
  };
  return (
    <div className={styles.content}>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <div className={styles.closeButton} onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.step}>
            <div className={styles.circle}>1</div>
            <div>Choose if you want to search viruses or hosts</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>2</div>
            <div>If viruses, search them by taxID, otherwise taxonomy name</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>3</div>
            <div>
              Apply filters and sorting to make your search more specific
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>4</div>
            <div>Browse or export your results</div>
          </div>
        </div>
      </Modal>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={styles.help}
      >
        ?
      </button>
    </div>
  );
}
