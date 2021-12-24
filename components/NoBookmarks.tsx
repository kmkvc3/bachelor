import styles from "./NoBookmarks.module.css";

export default function NoBookmarks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.desc}>
        Currently you have no bookmarks. To create bookmark, follow steps below
        or <strong className={styles.sample}> run sample query</strong>
      </div>
      <div className={styles.step}>
        <div className={styles.circle}>1</div>
        <div> Go to search section </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <div className={styles.circle}>2</div>
        <div>Find the desired results</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <div className={styles.circle}>3</div>
        <div>Save it for later by clicking on bookmark icon</div>
      </div>
    </div>
  );
}
