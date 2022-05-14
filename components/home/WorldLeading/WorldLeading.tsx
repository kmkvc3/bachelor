import styles from "./WorldLeading.module.css";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function WorldLeading() {
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
          <Image loading="eager" layout='fill' src={"/cover.svg"} alt="host attacked by viruses" />
        </div>
      </div>
    </div>
  );
}
