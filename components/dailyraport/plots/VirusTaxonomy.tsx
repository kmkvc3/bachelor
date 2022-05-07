import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getVirusStatsNCBI, getVirusStatsICTV } from "../../../Api";
import Spinner from "../components/Spinner";

export default function VirusTaxonomy() {
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
      <h4>Virus taxa in NCBI and ICTV</h4>
      {statsICTV && statsNCBI ? (
        <>
          <p>
            Number of virus taxonomic units across six taxonomic ranks (from
            species to phylum) according to NCBI Taxonomy and International
            Committee on Taxonomy of Viruses (ICTV). 
            <br></br>Thus far {((statsICTV.species as any) / statsNCBI.species * 100).toFixed(2)}% of virus
            species present in NCBI has been classified by ICTV.
          </p>
          <div className={styles.table}>
            <table className={styles.tg}>
              <thead>
                <tr>
                  <th rowSpan={ 2 as any}>Taxon rank</th>
                  <th colSpan={ 2 as any}>Virus taxa (count)</th>
                </tr>
                <tr>
                  <th>NCBI</th>
                  <th>ICTV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phylum</td>
                  <td>{statsNCBI.phylum.toLocaleString("en")}</td>
                  <td>{statsICTV.phylum.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{statsNCBI.class.toLocaleString("en")}</td>
                  <td>{statsICTV.class.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>Order</td>
                  <td>{statsNCBI.order.toLocaleString("en")}</td>
                  <td>{statsICTV.order.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>Family</td>
                  <td>{statsNCBI.family.toLocaleString("en")}</td>
                  <td>{statsICTV.family.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>Genus</td>
                  <td>{statsNCBI.genus.toLocaleString("en")}</td>
                  <td>{statsICTV.genus.toLocaleString("en")}</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{statsNCBI.species.toLocaleString("en")}</td>
                  <td>{statsICTV.species.toLocaleString("en")}</td>
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
