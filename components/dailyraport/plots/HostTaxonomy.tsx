import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getVirusStatsNCBI, getVirusStatsICTV } from "../../../Api";
import Spinner from "../components/Spinner";

export default function HostTaxonomy() {
  const [statsNCBI, setStatsNCBI] = useState(null);
  const [statsICTV, setStatsICTV] = useState(null);
  async function getStats() {
    const resICTV = await getVirusStatsICTV();
    setStatsICTV(resICTV);
    const resNCBI = await getVirusStatsNCBI();
    setStatsNCBI(resNCBI);
  }
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h4>Number of taxonomic units of viruses</h4>
      <p>Longer description</p>
      {statsICTV && statsNCBI ? (
        <div className={styles.table}>
          <table className={styles.tg}>
            <thead>
              <tr>
                <th rowspan="2">Taxon rank</th>
                <th colspan="2">Virus tax(count)</th>
              </tr>
              <tr>
                <th>NCBI</th>
                <th>ICTV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phylum</td>
                <td>{statsNCBI.phylum}</td>
                <td>{statsICTV.phylum}</td>
              </tr>
              <tr>
                <td>Class</td>
                <td>{statsNCBI.class}</td>
                <td>{statsICTV.class}</td>
              </tr>
              <tr>
                <td>Order</td>
                <td>{statsNCBI.order}</td>
                <td>{statsICTV.order}</td>
              </tr>
              <tr>
                <td>Family</td>
                <td>{statsNCBI.family}</td>
                <td>{statsICTV.family}</td>
              </tr>
              <tr>
                <td>Genus</td>
                <td>{statsNCBI.genus}</td>
                <td>{statsICTV.genus}</td>
              </tr>
              <tr>
                <td>Species</td>
                <td>{statsNCBI.species}</td>
                <td>{statsICTV.species}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
