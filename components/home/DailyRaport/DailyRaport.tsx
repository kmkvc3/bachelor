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
          <img 
            src={darkMode ? "stats-dark.svg" : "stats-light.svg"}
            alt="" />
        </div>
        <div className={styles.text}>
          <h1>Daily Raport</h1>
          <p>
            Top quality data, all in one place. <br /> Start discovery of
            interactions between phage & hosts. <br />
            Just for your research
          </p>
          <div className={styles.extras}>
            <button>
              <Link href={"/search"}>Browse raport</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
