import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { getUpdateStats } from "../../Api";

export default function Footer() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState("")
  const [version, setVersion] = useState("")

  async function getStats() {
    try {
      const data: any = await getUpdateStats();
      setLastUpdatedDate(data.date.update_since)
      setVersion(data.version)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getStats()  
  })
  return (
    <footer className={styles.footer}>
      <div className={styles.combio}>
        <span>
          With <img src="heart.svg" alt="" /> from {" "}
          <a target="_blank" href="http://www.combio.pl">
            combio.pl
          </a>
        </span>
        <div>
          <span>Team</span>
          <span>Citations</span>
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
