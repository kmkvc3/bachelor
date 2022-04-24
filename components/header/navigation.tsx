import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import ThemeButton from "./ThemeButton";
import BookmarksIcon from "./BookmarksIcon";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function Navigation() {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav className={styles.navigation}>
      <div>
        <ul>
          <li className={styles.logo}>
            <Link href="/">
              <img src={darkMode ? "/logo-dark.svg" : "/logo-light.svg"} alt="" />
            </Link>
          </li>
          <li className={router.pathname == "/search" ? styles.active : ""}>
            <Link href="/search?type=virus">
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
            <Link href="/dailyraport">
              <p>Daily Raport</p>
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
