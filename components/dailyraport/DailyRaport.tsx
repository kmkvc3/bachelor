import styles from "./DailyRaport.module.css";
import VirusTaxonomy from "./plots/VirusTaxonomy";
import MostRepresentativeVirus from "./plots/MostRepresentativeVirus";
import VirusGenomeType from "./plots/VirusGenomeType";
import AssemblyLevel from "./plots/AssemblyLevel";
import VirusGenomeDistro from "./plots/VirusGenomeDistro";
import VirusGenomeSource from "./plots/VirusGenomeSource";
import { useEffect } from "react";
import { useState } from "react";

export default function DailyRaport() {
  const [id, setId] = useState("TaxDiversity");
  useEffect(() => {
    let observerOptions = {
      rootMargin: "0px",
      threshold: 0.2,
    };

    var observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setId(entry.target.id);
        }
      });
    }

    observer.observe(document.getElementById("TaxDiversity"));
    observer.observe(document.getElementById("GenDiversity"));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.charts}>
        <h1 className="targetSelector" id="TaxDiversity">
          Taxonomic diversity of viruses{" "}
        </h1>
        <span></span>
        <div id="VT"></div>
        <VirusTaxonomy />
        <div id="MRV"></div>
        <MostRepresentativeVirus />

        <h1 className="targetSelector" id="GenDiversity">
          Genomic diversity of viruses{" "}
        </h1>
        <span></span>
        <div id="VGT"></div>
        <VirusGenomeType />

        <div id="AL"></div>
        <AssemblyLevel />

        <div id="VG"></div>
        <VirusGenomeDistro />

        <div id="VGS"></div>
        <VirusGenomeSource />

        <h1 className="targetSelector" id="TaxaInteractions">
          Taxonomic diversity of hosts
        </h1>
        <span></span>
      </div>
      <aside className={styles.sidebar}>
        <a
          className={id === "TaxDiversity" ? styles.active : styles.main}
          href="#TaxDiversity"
        >
          Taxonomic diversity of viruses
        </a>
        <a href="#VT"> Number of taxonomic units of viruses</a>
        <a href="#MRV"> Top 10 most representative virus</a>
        <a
          href="#GenDiversity"
          className={id === "GenDiversity" ? styles.active : styles.main}
        >
          Genomic diversity of viruses
        </a>

        <a href="#VGT">Genome composition</a>
        <a href="#AL">Genome assembly level</a>
        <a href="#VG">Size of complete virus genomes</a>
        <a href="#VGS">Virus genome source</a>

        <a
          href="#TaxaInteractions"
          className={id === "TaxaInteractions" ? styles.active : styles.main}
        >
          Taxonomic diversity of hosts
        </a>
      </aside>
    </div>
  );
}
