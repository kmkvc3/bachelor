import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.wrapper}>
        <button>filter 1</button>
        <button>filter 2</button>
        <button>filter 3</button>
    </div>
  );
}
