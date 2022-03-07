import styles from "./Header.module.css";

export default function Header() {
  return <div className={styles.header}>
      <span>Name</span>
      <span>Rank</span>
      <span>Interactions</span>
  </div>;
}
