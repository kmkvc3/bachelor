import styles from "./Header.module.css";

export default function Header() {
  return <div className={styles.header}>
      <span>Taxonomic unit</span>
      <span>Taxonomic rank</span>
      <span>Virus-host interactions</span>
  </div>;
}
