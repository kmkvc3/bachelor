import styles from "./FilterButton.module.css"

export default function FilterButton() {
  return (
      <button className={styles.button}>
          <div className={styles.filterIcon}>
            <span></span>  
            <span></span>  
            <span></span>  
          </div>
          Filter
      </button>
  );
}
