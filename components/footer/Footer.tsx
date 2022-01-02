import styles from "./Footer.module.css";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <span>
        With <img src={router.pathname.includes("/browse") ? "../heart.svg" : "./heart.svg"} alt="" /> from{" "}
        <a target="_blank" href="http://www.combio.pl">
          combio.pl
        </a>
      </span>
      <div>
        <span>Team</span>
        <span>Publication</span>
        <span>Contact</span>
      </div>
      <span>
        Data last updated: <strong>10.12.2021</strong>
      </span>
    </footer>
  );
}
