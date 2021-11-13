import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <button>
          <p>Database</p>
        </button>
        <button>
          <p>Assemble</p>
        </button>
        <button>
          <p>Evidence</p>
        </button>
      </div>
      <button>
        <p>Sort by</p>
      </button>
    </div>
  );
}
