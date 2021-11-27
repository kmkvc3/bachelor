import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import ThemeButton from "./ThemeButton"

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <p>Logo</p>
        </li>
        <li className={router.pathname == "/search" ? styles.active : ""}>
          <Link href="/search">
            <p>Search</p>
          </Link>
        </li>
        <li className={router.pathname == "/browse" ? styles.active : ""}>
          <Link href="/browse">
            <p>Browse</p>
          </Link>
        </li>
        <li className={router.pathname == "/browse" ? styles.active : ""}>
          <Link href="/browse">
            <p>Blast</p>
          </Link>
        </li>
      </ul>
      <div>
      <ThemeButton />
      </div>
    </nav>
  );
}
