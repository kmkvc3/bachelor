import styles from "./NotFound.module.css";

export default function NotFound({ query }) {
  return (
    <div className={styles.wrapper}>
      <h3>Nothing found for <strong>{query}</strong></h3>
      {/* <img src="./lost.svg"></img> */}
    </div>
  );
}
