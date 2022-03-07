import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import ThemeButton from "./ThemeButton";
import BookmarksIcon from "./BookmarksIcon";

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <div>
        <ul>
          <li>
            <Link href="/">
              <p>Logo</p>
            </Link>
          </li>
          <li className={router.pathname == "/search" ? styles.active : ""}>
            <Link href="/search">
              <p>Search</p>
            </Link>
          </li>
          <li
            className={router.pathname.includes("/browse") ? styles.active : ""}
          >
            <Link href="/browse/host/ncbi">
              <p>Browse</p>
            </Link>
          </li>
          <li
            className={router.pathname.includes("/blast") ? styles.active : ""}
          >
            <Link href="/blast">
              <p>Blast</p>
            </Link>
          </li>
        </ul>
        <div className={styles.sidebar}>
          <BookmarksIcon />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}