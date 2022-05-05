import Head from "next/head";
import styles from "./DailyRaport.module.css";
import Link from "next/dist/client/link";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function DailyRecord() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <div className={styles.image}>
          <img src={darkMode ? "stats-dark.svg" : "stats-light.svg"} alt="" />
        </div>
        <div className={styles.text}>
          <h1>Daily Report</h1>
          <p>
            PHD publishes daily reports on the current catalog of virus-host
            interactions including taxonomic and genetic diversity of viruses
            and their hosts, virus-host assignments, and host range.
          </p>
          <div className={styles.extras}>
            <button>
              <Link href={"/report"}>See report</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
