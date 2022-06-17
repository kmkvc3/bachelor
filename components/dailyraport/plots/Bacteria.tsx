import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getBacteria } from "../../../Api";
import Spinner from "../components/Spinner";
import Select from "../components/Select";
import { getUpdateStats } from "../../../Api";

export default function Bacteria() {
  const [stats, setStats] = useState(null);
  const [pickedOption, setPickedOption] = useState("ncbi_assembly");
  const [updateData, setUpdateData] = useState(null);

  function set(option) {
    if (option === "NCBI Assembly") {
      setPickedOption("ncbi_assembly");
    } else {
      setPickedOption("ncbi_taxonomy");
    }
  }
  function placeholder() {
    if (pickedOption === "ncbi_assembly") {
      return "NCBI Assembly";
    }
    return "NCBI Taxonomy";
  }
  async function getStats() {
    const res = await getBacteria();
    const stats = await getUpdateStats();
    setStats(res);
    setUpdateData(stats);
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h4>Bacteria</h4>
      {stats && updateData ? (
        <>
          <p>
            Number of different taxonomic units of bacterial hosts across six
            taxonomic ranks compared to the number of all bacterial taxa present
            in NCBI Assembly and NCBI Taxonomy ({new Date(updateData.date.update).toLocaleDateString()}).
          </p>
          <div className={styles.select}>
            <Select
              options={["NCBI Assembly", "NCBI Taxonomy"]}
              placeholder={placeholder()}
              setPickedOption={set}
            />
          </div>
          <div className={styles.table}>
            <table className={styles.tg}>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Hosts</th>
                  <th>NCBI</th>
                  <th>Hosts (percent)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phylum</td>
                  <td>{stats.phylum.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.phylum.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.phylum.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.phylum.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.phylum.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{stats.class.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.class.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.class.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.class.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.class.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <td>Order</td>
                  <td>{stats.order.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.order.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.order.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.order.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.order.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <td>Family</td>
                  <td>{stats.family.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.family.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.family.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.family.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.family.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <td>Genus</td>
                  <td>{stats.genus.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.genus.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.genus.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.genus.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.genus.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{stats.species.count}</td>
                  {pickedOption === "ncbi_taxonomy" ? (
                    <>
                      <td>{stats.species.ncbi_taxonomy.count.toLocaleString("en")}</td>
                      <td>
                        {stats.species.ncbi_taxonomy.count_percent.toFixed(2)}%
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{stats.species.ncbi_assembly.count.toLocaleString("en")}</td>
                      <td>
                        {stats.species.ncbi_assembly.count_percent.toFixed(2)}%
                      </td>
                    </>
                  )}
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
