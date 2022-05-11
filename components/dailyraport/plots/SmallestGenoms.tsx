import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getTopSize } from "../../../Api";
import Spinner from "../components/Spinner";

export default function SmallestGenoms() {
  const [stats, setStats] = useState(null);
  async function getStats() {
    const res = await getTopSize(0);
    setStats(res);
  }
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h4>Smallest complete genomes</h4>
      {stats ? (
        <>
          <p>Ten virus species with the smallest genome size.</p>
          <div className={styles.table}>
            <table className={styles.tg}>
              <thead>
                <tr>
                  <th>Virus species</th>
                  <th>Genome size</th>
                  <th>Database</th>
                  <th>Assembly</th>
                  <th>Sequence accession</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((data) => {
                  return (
                    <tr>
                      <td>
                        <a target="_blank" href={`/virus/${data.virus_id}`}>
                          {data.virus_name}
                        </a>
                      </td>
                      <td>{data.genome_size.toLocaleString("en")} bp</td>
                      <td>{data.database}</td>
                      {data.assembly_name === "No genome assembly" ? (
                        <td>{data.assembly_name}</td>
                      ) : (
                        <td>
                          <a target="_blank" href={data.assembly_url}>
                            {data.assembly_name}
                          </a>
                        </td>
                      )}
                      <td>
                        <a target="_blank" href={data.sequence_url}>
                          {data.sequence_name}
                        </a>
                      </td>
                    </tr>
                  );
                })}
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
