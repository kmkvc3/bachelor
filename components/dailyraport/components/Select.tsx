import { useEffect } from "react";
import { useState } from "react";
import styles from "./Select.module.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Select({ options, placeholder, setPickedOption }) {
  const [listOpen, setListOpen] = useState(false);
  useEffect(() => {
    if (!listOpen) return;
    const hideListAfterClick = () => setListOpen(false);
    if (listOpen) {
      document.addEventListener("click", hideListAfterClick);
    } else {
      document.removeEventListener("click", hideListAfterClick);
    }
    return () => document.removeEventListener("click", hideListAfterClick);
  }, [listOpen]);

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setListOpen(true)} className={styles.option}>
        <div className={styles.placeholder}>{placeholder}</div>
        <div className={styles.openIcon}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>

      {listOpen ? (
        <div className={styles.optionList}>
          {options.map((option) => (
            <div
              onClick={() => {
                setPickedOption(option);
              }}
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
