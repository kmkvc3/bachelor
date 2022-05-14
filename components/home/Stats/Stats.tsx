import { useEffect, useState } from "react";
import { getBasicStats } from "../../../Api";
import styles from "./Stats.module.css";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function Stats() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const { ref, inView } = useInView({
  //   threshold: 0.02,
  //   triggerOnce: true,
  // });
  const [stats, setStats] = useState({
    virus_species: {
      name: "Virus species",
      count: 0,
    },
    virus_genomes: {
      name: "Virus genome assemblies",
      count: 0,
    },
    virus_sequences: {
      name: "Virus sequence accessions",
      count: 0,
    },
    host_species: {
      name: "Host species",
      count: 0,
    },
    interactions: {
      name: "Virus-host interactions",
      count: 0,
    },
    ictv_support: {
      name: "Virus species supported by ICTV Taxonomy",
      count: 0,
      count_percent: 20.406386066763424,
    },
    gtdb_support: {
      name: "Host species supported by GtDB Taxonomy",
      count: 0,
      count_percent: 79.39393939393939,
    },
  });
  useEffect(() => {
    getStats();
  }, []);

  async function getStats() {
    const res = await getBasicStats();
    setStats(res);
  }
  return (
    // <div ref={ref} className={styles.wrapper}>
    <div className={styles.wrapper}>
      <div className={styles.interactions}>
        <p>
          {/* {inView ? (
            <CountUp
              useEasing={true}
              duration={1.3}
              separator=","
              end={stats.interactions.count}
            ></CountUp>
          ) : (
            0
          )} */}
          {stats.interactions.count.toLocaleString("en")}
        </p>
        <p>{stats.interactions.name}</p>
      </div>
      <span>...from various sources</span>
      <div className={styles.grid}>
        <div className={styles.patternLeft}>
          <img width={"80px"} height={"80px"} src={darkMode ? "p1-dark.svg" : "p1-light.svg"} alt="shapes" />
        </div>
        <div className={styles.patternRight}>
          <img width={"80px"} height={"80px"} src={darkMode ? "p1-dark.svg" : "p1-light.svg"} alt="shapes" />
        </div>
        <div className={styles.patternBottom}>
          <img width={"80px"} height={"80px"} src={darkMode ? "p3-dark.svg" : "p3-light.svg"} alt="shapes" />
        </div>
        <div>
          <p>{stats.virus_species.count.toLocaleString("en")}</p>
          <p>{stats.virus_species.name}</p>
        </div>
        <div>
          <p>{stats.virus_genomes.count.toLocaleString("en")}</p>
          <p>{stats.virus_genomes.name}</p>
        </div>
        <div>
          <p>{stats.virus_sequences.count.toLocaleString("en")}</p>
          <p>{stats.virus_sequences.name}</p>
        </div>
        <div>
          <p>{stats.host_species.count.toLocaleString("en")}</p>
          <p>{stats.host_species.name}</p>
        </div>
        <div>
          <p>{stats.ictv_support.count.toLocaleString("en")}</p>
          <p>{stats.ictv_support.name}</p>
        </div>
        <div>
          <p>{stats.gtdb_support.count.toLocaleString("en")}</p>
          <p>{stats.gtdb_support.name}</p>
        </div>
      </div>
    </div>
  );
}
