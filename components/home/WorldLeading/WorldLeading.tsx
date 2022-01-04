import Head from "next/head";
import styles from "./WorldLeading.module.css";
import Link from "next/dist/client/link";

export default function WorldLeading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.text}>
          <div>
            <h1>World leading <br/> <span>virus-host interactions</span>  database</h1>
            <p>
              Complex and intuitive tool for discovering interactions between
              viruses and bacterias
            </p>
            <p>
              Thousands records of high quality data <br /> Just for your
              research
            </p>
          </div>
          <span className={styles.line}></span>
          <div className={styles.buttons}>
            <button>
              <Link href={`/search?query=Escherichia coli&type=host`}>
                Run sample query
              </Link>
            </button>
            <button>
              <Link href={`/browse/Viruses`}>
                Browse records
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.image}>
          <img src="./bloodtest-bro.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
