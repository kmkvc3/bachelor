import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <span>developed by <a target="_blank" href="http://www.combio.pl">combio.pl</a> with <img src="./heart.svg" alt="" /> and passion</span>
        {/* <span>cite some article name</span> */}
    </footer>
  );
}
