import Head from "next/head";
import styles from "./WorldLeading.module.css";
import Link from "next/dist/client/link";

export default function WorldLeading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <div className={styles.text}>
          <h1>Phage & Host</h1>
          <h2>Daily updated database</h2>
          <span></span>
          <p>
            Top quality data, all in one place. <br /> Start discovery of
            interactions between phage & hosts. <br />
            Just for your research
          </p>
        </div>
        <div className={styles.image}>
          <img src="./cover.jpg" alt="" />
        </div>
      </div>
      <div className={styles.extras}>
        <p>More data on our database</p>
        <span></span>
        <div>
          <button>
            <Link href={"/search"}>Search</Link>
          </button>
          <button>
            <Link href={"/browse/host/ncbi"}>Browse</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
