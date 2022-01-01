import styles from "./Header.module.css";

export default function Header() {
  return <div className={styles.header}>
      <span>Tax name</span>
      <span>Tax rank</span>
      <span>Interactions</span>
  </div>;
}
