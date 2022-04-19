import Head from "next/head";
import styles from "./Feedback.module.css";

export default function Feedback() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <h1>Feedback & Contact</h1>
        <p>How can we improve your experience?</p>
      </div>
      <div className={styles.contact}>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <p>sample@email.com</p>
        </div>

        <div>
          <div>
            <img src="" alt="" />
          </div>
          <p>sample2another@email.com</p>
        </div>
      </div>
    </div>
  );
}
