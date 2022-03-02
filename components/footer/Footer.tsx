import styles from "./Footer.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUpdateStats } from "../../Api";

export default function Footer() {
  const router = useRouter();
  const [lastUpdatedDate, setLastUpdatedDate] = useState("")

  async function getStats() {
    try {
      const data: any = await getUpdateStats();
      setLastUpdatedDate(data.date.update)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getStats()  
  })
  return (
    <footer className={styles.footer}>
      <span>
        With <img src={router.pathname.includes("/browse") ? "../heart.svg" : "./heart.svg"} alt="" /> from{" "}
        <a target="_blank" href="http://www.combio.pl">
          combio.pl
        </a>
      </span>
      <div>
        <span>Team</span>
        <span>Publication</span>
        <span>Contact</span>
      </div>
      <span>
        Data last updated: <strong>{lastUpdatedDate}</strong>
      </span>
    </footer>
  );
}
