import { useEffect } from "react";
import { useState } from "react";
import { SelectOption } from "../interfaces";
import styles from "./Select.module.css";
import {
  faCaretDown,
  faTimes,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SortSelect({
  options,
  placeholder,
  setPickedOption,
  sort = false,
}) {
  const [option, setOption] = useState(null);
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
    <div
      className={option ? `${styles.wrapper} ${styles.active} ${styles.sort}` : `${styles.wrapper} ${styles.sort}`}
    >
      {option ? (
        <div
          className={styles.option}
          onClick={() => {
            setListOpen(!listOpen);
          }}
        >
          <div>{option}</div>
          <div
            className={styles.closeIcon}
            onClick={() => {
              setListOpen(false);
              setPickedOption(null);
              setOption(null);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      ) : (
        <div onClick={() => setListOpen(true)} className={styles.option}>
          <div className={styles.placeholder}>{placeholder}</div>

          {sort ? (
            <div className={styles.sortIcon}>
              <FontAwesomeIcon icon={faSort} />
            </div>
          ) : (
            <div className={styles.openIcon}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          )}
        </div>
      )}
      {listOpen ? (
        <div className={styles.optionList}>
          {options.map((option: SelectOption) => (
            <div
              onClick={() => {
                setPickedOption(option.value);
                setOption(option.label);
              }}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
