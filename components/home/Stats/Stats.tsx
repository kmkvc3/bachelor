import { useEffect, useState } from "react";
import { getBasicStats } from "../../../Api";
import styles from "./Stats.module.css";

export default function Stats() {
  const [stats, setStats] = useState({
    virus_species: {
      name: "Virus species",
      count: 13780,
    },
    virus_genomes: {
      name: "Virus genome assemblies",
      count: 19295,
    },
    virus_sequences: {
      name: "Virus sequence accessions",
      count: 23663,
    },
    host_species: {
      name: "Host species",
      count: 990,
    },
    interactions: {
      name: "Virus-host interactions",
      count: 14341,
    },
    ictv_support: {
      name: "Virus species supported by ICTV Taxonomy",
      count: 2812,
      count_percent: 20.406386066763424,
    },
    gtdb_support: {
      name: "Host species supported by GtDB Taxonomy",
      count: 786,
      count_percent: 79.39393939393939,
    },
  });
  useEffect(() => {
    getStats();
  });

  async function getStats() {
    const res = await getBasicStats();
    setStats(res);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.interactions}>
        <p>{stats.interactions.count}</p>
        <p>{stats.interactions.name}</p>
      </div>
      <span>...and growing everyday</span>
      <div className={styles.grid}>
        <div>
          <p>{stats.virus_species.count}</p>
          <p>{stats.virus_species.name}</p>
        </div>
        <div>
          <p>{stats.virus_genomes.count}</p>
          <p>{stats.virus_genomes.name}</p>
        </div>
        <div>
          <p>{stats.virus_sequences.count}</p>
          <p>{stats.virus_sequences.name}</p>
        </div>
        <div>
          <p>{stats.host_species.count}</p>
          <p>{stats.host_species.name}</p>
        </div>
        <div>
          <p>{stats.ictv_support.count}</p>
          <p>{stats.ictv_support.name}</p>
        </div>
        <div>
          <p>{stats.gtdb_support.count}</p>
          <p>{stats.gtdb_support.name}</p>
        </div>
      </div>
    </div>
  );
}
