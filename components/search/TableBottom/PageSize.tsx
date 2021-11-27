import styles from "./PageSize.module.css";

export default function PageSize({ offset, setOffset }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={
          offset == 25 ? `${styles.button} ${styles.active}` : styles.button
        }
        onClick={() => {
          if(offset === 25) return;
          setOffset(25)
          window.scrollTo(10000, 0);
        }}
      >
        25
      </button>
      <button
        className={
          offset == 35 ? `${styles.button} ${styles.active}` : styles.button
        }
        onClick={() => {
          if(offset === 35) return;
          setOffset(35);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }}
      >
        35
      </button>
      <button
        className={
          offset == 50 ? `${styles.button} ${styles.active}` : styles.button
        }
        onClick={() => {
          if(offset === 50) return;
          setOffset(50)
          window.scrollTo(10000, 0);
        }}
      >
        50
      </button>
    </div>
  );
}
