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
      <img src="./filters.svg" className={styles.filterIcon}>
      </img>
      <p> Filter</p>
    </button>
  );
}
