import styles from "./SearchIllustration.module.css";

export default function SearchIllustration() {
  return (
    <div className={styles.wrapper}>
        <div>
            <h1>Search</h1>
            <p>thousands of our database records</p>
        </div>
        <img src="./search.svg"></img>
    </div>
  );
}
