import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { getUpdateStats } from "../../Api";
import Image from "next/image";

export default function Footer() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");
  const [version, setVersion] = useState("");

  async function getStats() {
    try {
      const data: any = await getUpdateStats();
      setLastUpdatedDate(data.date.update_since);
      setVersion(data.version);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStats();
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.combio}>
        With
        <div className={styles.img}>
          <Image layout="fill" src="/heart.svg" alt="heart" />
        </div>
        from
        <a target="_blank" href="http://www.combio.pl">
          combio.pl
        </a>
        <div>
          <a className={styles.article} target="_blank" href="https://doi.org/10.3389/fmicb.2022.946070">
            Read about PHD
          </a>
        </div>
      </div>
      <div className={styles.data}>
        <span>
          Data last updated: <strong>{lastUpdatedDate}</strong>
        </span>
        <span>
          Version: <strong>{version}</strong>
        </span>
      </div>
    </footer>
  );
}
