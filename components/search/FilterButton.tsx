import { useState } from "react";
import styles from "./FilterButton.module.css";

export default function FilterButton({ setVisibleFilters }) {
  const [active, setActive] = useState(false)
  return (
    <button
      onClick={() => {
        setVisibleFilters();
        setActive(!active)
      }}
      className={active ? `${styles.button} ${styles.active}` : styles.button }
    >
      <div className={styles.filterIcon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p> Filter</p>
    </button>
  );
}
