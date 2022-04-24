import styles from "./DailyRaport.module.css";
import VirusTaxonomy from "./plots/VirusTaxonomy";
import MostRepresentativeVirus from "./plots/MostRepresentativeVirus";

export default function DailyRaport() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.charts}>
        <h1 id="diversity">Taxonomic diversity of viruses </h1>
        <span></span>
        <VirusTaxonomy />
        <MostRepresentativeVirus />
      </div>
      <aside className={styles.sidebar}>
        <a href="#diversity" className={styles.main}> Taxonomic diversity of viruses</a>
        <a> Number of taxonomic units of viruses</a>
        <a> Top 10 most representative virus families</a>
      </aside>
    </div>
  );
}
