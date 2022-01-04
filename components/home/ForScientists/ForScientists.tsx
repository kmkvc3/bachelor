import Head from "next/head";
import styles from "./ForScientists.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ForScientists() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>Made for scientists, by scientists</h1>
        <h4>So you can make the world better</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="./development-bro.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="./research-bro.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="./retroviruses-bro.svg" alt="" />
        </div>
      </div>
      <p className={styles.getStarted}>Get started <FontAwesomeIcon icon={faArrowRight} /></p>
    </div>
  );
}
