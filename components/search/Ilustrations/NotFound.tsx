import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h3>Nothing found</h3>
      <img src="./lost.svg"></img>
    </div>
  );
}
