import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getSummary, getUpdateStats } from "../../../Api";
import Spinner from "../components/Spinner";

export default function Summary() {
  const [summary, setSummary] = useState(null);
  const [stats, setStats] = useState(null);
  async function getStats() {
    const summary = await getSummary();
    const stats = await getUpdateStats();
    setSummary(summary);
    setStats(stats);
  }
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className={styles.wrapper}>
      {(summary && stats) ? (
        <>
          <p>This report was created on <strong>{new Date(stats.date.update).toLocaleDateString()} </strong>({stats.date.update_since})</p>
          <div className={styles.table}>
            <table className={styles.tg}>
              <tbody>
                <tr>
                  <td>{summary.virus_species.name}</td>
                  <td>{summary.virus_species.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.virus_genomes.name}</td>
                  <td>{summary.virus_genomes.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.virus_sequences.name}</td>
                  <td>{summary.virus_sequences.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.host_species.name}</td>
                  <td>{summary.host_species.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.interactions.name}</td>
                  <td>{summary.interactions.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.ictv_support.name}</td>
                  <td>{summary.ictv_support.count.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>{summary.gtdb_support.name}</td>
                  <td>{summary.gtdb_support.count.toLocaleString("en")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
