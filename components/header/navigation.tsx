import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import ThemeButton from "./ThemeButton";
import BookmarksIcon from "./BookmarksIcon";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav className={styles.navigation}>
      <div>
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <div className={styles.burger}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
        <ul>
          <li className={styles.logo}>
            <Link href="/">
              <Image
                loading="eager"
                layout="fill"
                src={darkMode ? "/logo-dark.svg" : "/logo-light.svg"}
                alt=""
              />
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
            className={router.pathname.includes("/report") ? styles.active : ""}
          >
            <Link href="/report">
              <p>Daily Report</p>
            </Link>
          </li>
          <li
            className={router.pathname.includes("/help") ? styles.active : ""}
          >
            <Link href="/help">
              <p>Help</p>
            </Link>
          </li>
          <li>
            <a target="_blank" href="http://afproject.org/phdaily/">
              <p>Download</p>
            </a>
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
