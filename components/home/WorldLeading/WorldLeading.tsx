import Head from "next/head";
import styles from "./WorldLeading.module.css";
import Link from "next/dist/client/link";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function WorldLeading() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <div className={styles.text}>
          <h1>Phage & Host Daily</h1>
          <p>
            PHD provides a daily updated catalog of known interactions between
            viruses and prokaryotic host species, allowing users to select
            viruses targeting specific bacterial and archaeal taxa of interest.
          </p>
          <div className={styles.extras}>
            <button>
              <Link href={"/search"}>Search</Link>
            </button>
            <button>
              <Link href={"/browse/host/ncbi"}>Browse</Link>
            </button>{" "}
          </div>
        </div>
        <div className={styles.image}>
          <img src={darkMode ? "cover-light.svg" : "cover-light.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}
