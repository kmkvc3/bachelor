import styles from "./SearchIllustration.module.css";

export default function SearchIllustration() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <h1>Search</h1>
          <p>Viruses or hosts among thousands of our database records.</p>
        </div>
        <img src="../search-rafiki.svg"></img>
      </div>
    </div>
  );
}
