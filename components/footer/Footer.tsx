import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div> */}
      <span>
        With <img src="./heart.svg" alt="" /> from{" "}
        <a target="_blank" href="http://www.combio.pl">
          combio.pl
        </a>
      </span>
      <div>
        <span>Team</span>
        <span>Publication</span>
        <span>Contact</span>
      </div>

      {/* </div>
      <div> */}
      <span>
        Data last updated: <strong>10.12.2021</strong>
      </span>
      {/* </div> */}
    </footer>
  );
}
