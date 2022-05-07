import styles from "./Feedback.module.css";

export default function Feedback() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <h1>Feedback & Contact</h1>
        <p>
          We appreciate all feedback regarding PHD. Let us know what you think.
        </p>
      </div>
      <div className={styles.contact}>
        <div className={styles.person}>
          <div>
            <img src="andrzej_zielezinski.jpg" alt="" />
          </div>
          <div>
            <p>Andrzej Zielezinski</p>
            <p className={styles.email}>andrzej.zielezinski@amu.edu.pl</p>
          </div>
          <div className={styles.icons}>
            <a target="_blank" href="https://twitter.com/a_zielezinski">
              <img src="twitter.svg" alt="" />
            </a>
            <a href="mailto:andrzej.zielezinski@amu.edu.pl">
              <img src="email.svg" alt="" />
            </a>
          </div>
        </div>

        <div className={styles.person}>
          <div>
            <p>Jakub Barylski </p>
            <p className={styles.email}>jakub.barylski@amu.edu.pl</p>
          </div>
          <div className={styles.icons}>
            <a href="mailto:jakub.barylski@amu.edu.pl">
              <img src="email.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
