import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getHostPerVirus } from "../../../Api";
import Spinner from "../components/Spinner";

export default function VirusTaxonomy() {
  const [stats, setStats] = useState(null);
  async function getStats() {
    const res = await getHostPerVirus();
    setStats(res);
  }
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h4>Host species per virus species</h4>
      <p>Number of virus species isolated on a different number of host species.</p>
      {stats ? (
        <div className={styles.table}>
          <table className={styles.tg}>
            <thead>
              <th>Different host species</th>
              <th>Virus species (count)</th>
              <th>Virus percentage</th>
            </thead>
            <tbody>
              {stats.map((data) => {
                return (
                  <tr>
                    <td>{data.hosts_count.toLocaleString("en")}</td>
                    <td>{data.virus_count.toLocaleString("en")}</td>
                    <td>{data.virus_count_percent.toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
