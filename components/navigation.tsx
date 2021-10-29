import Link from "next/link";
import styles from "./Navigation.module.css"

export default function Layout({ children }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
        <Link href="/blast">
          <a>Blast</a>
        </Link>
      </ul>
    </nav>
  );
}
