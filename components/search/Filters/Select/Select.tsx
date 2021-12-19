import { useEffect } from "react";
import { useState } from "react";
import { SelectOption } from "../interfaces";
import styles from "./Select.module.css";
import { faCaretDown, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Select({
  options,
  placeholder,
  setPickedOption,
  setPage,
  sort = false,
}) {
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

      {listOpen ? (
        <div className={styles.optionList}>
          {options.map((option: SelectOption) => (
            <div
              onClick={() => {
                setPickedOption(option.value);
                setPage(1);
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
