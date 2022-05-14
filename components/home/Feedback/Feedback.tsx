import styles from "./Feedback.module.css";
import Image from "next/image";

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
          <div className={styles.picWrapper}>
            <Image
              layout="fill"
              src="/andrzej_zielezinski.webp"
              alt="Andrzej Zielezinski photo"
            />
          </div>
          <div>
            <p>Andrzej Zielezinski</p>
            <p className={styles.email}>andrzej.zielezinski@amu.edu.pl</p>
            <p className={styles.unit}>Department of Computational Biology</p>
            <p className={styles.unit}>
              Adam Mickiewicz University in Poznan, Poland
            </p>
          </div>
          <div className={styles.icons}>
            <a target="_blank" href="https://twitter.com/a_zielezinski">
              <Image layout="fill" src="/twitter.svg" alt="twitter icon" />
            </a>
            <a href="mailto:andrzej.zielezinski@amu.edu.pl">
              <Image layout="fill" src="/email.svg" alt="email icon" />
            </a>
          </div>
        </div>

        <div className={styles.person}>
          <div className={styles.picWrapper}>
            <Image
              layout="fill"
              src="/jakub_barylski.webp"
              alt="Jakub Barylski photo"
            />
          </div>
          <div>
            <p>Jakub Barylski </p>
            <p className={styles.email}>jakub.barylski@amu.edu.pl</p>
            <p className={styles.unit}>Department of Molecular Virology</p>{" "}
            <p className={styles.unit}>
              Adam Mickiewicz University in Poznan, Poland
            </p>
          </div>
          <div className={styles.icons}>
            <a href="mailto:jakub.barylski@amu.edu.pl">
              <Image layout="fill" src="/email.svg" alt="email icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
