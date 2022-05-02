import styles from "./DailyRaport.module.css";
import VirusTaxonomy from "./plots/VirusTaxonomy";
import MostRepresentativeVirus from "./plots/MostRepresentativeVirus";
import VirusGenomeType from "./plots/VirusGenomeType";
import AssemblyLevel from "./plots/AssemblyLevel";
import VirusGenomeDistro from "./plots/VirusGenomeDistro";
import HostHighestNumber from "./plots/HostHighestNumber";
import VirusGenomeSource from "./plots/VirusGenomeSource";
import Summary from "./plots/Summary";
import MostRepresentativeHost from "./plots/MostRepresentativeHost";
import HostPerVirus from "./plots/HostPerVirus";
import InteractionsEvidence from "./plots/InteractionsEvidence";
import { useEffect } from "react";
import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function DailyRaport() {
  const [id, setId] = useState("TaxDiversity");
  useEffect(() => {
    Highcharts.setOptions({
      colors: [
        "#41a6f6",
        "#f23f6c",
        "#f3c200",
        "#38b764",
        "#7236eb",
        "#67809f",
        "#3b5dc9",
        "#ff78aa",
        "#ef7d57",
        "#2ac0c0",
        "#785681",
        "#94b0c2",
        "#83e9e8",
        "#ffc0d7",
        "#ffd097",
        "#a7f070",
        "#9a8faf",
        "#d5e0e7",
      ],
    });

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
    observer.observe(document.getElementById("TaxaInteractions"));
    observer.observe(document.getElementById("HostVirus"));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.charts}>
        <h1 className="targetSelector" id="Summary">
          Summary
        </h1>
        <span></span>
        <Summary />
        <h1 className="targetSelector" id="TaxDiversity">
          Taxonomic diversity of viruses
        </h1>
        <span></span>
        <div id="VT"></div>
        <VirusTaxonomy />
        <div id="MRV"></div>
        <MostRepresentativeVirus />

        <h1 className="targetSelector" id="GenDiversity">
          Genomic diversity of viruses
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

        <div id="HHN"></div>
        <HostHighestNumber />

        <div id="MRH"></div>
        <MostRepresentativeHost />

        <h1 className="targetSelector" id="HostVirus">
          Virus-host interactions
        </h1>
        <span></span>

        <div id="HPV"></div>
        <HostPerVirus />

        <div id="IE"></div>
        <InteractionsEvidence />
      </div>
      <aside className={styles.sidebar}>
        <a
          className={id === "Summary" ? styles.active : styles.main}
          href="#Summary"
        >
          Summary
        </a>
        <a
          className={id === "TaxDiversity" ? styles.active : styles.main}
          href="#TaxDiversity"
        >
          Taxonomic diversity of viruses
        </a>
        <a href="#VT"> Virus taxa in NCBI and ICTV</a>
        <a href="#MRV"> Most abundant virus taxa</a>
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

        <a href="#HHN">Host taxa with the highest number of interactions</a>
        <a href="#MRH"> Top 10 most representative host classes </a>

        <a
          href="#HostVirus"
          className={id === "HostVirus" ? styles.active : styles.main}
        >
          Virus-host interactions
        </a>

        <a href="#HPV">Host species per virus species</a>
        <a href="#IE">Number of interactions covered by source databases</a>
      </aside>
    </div>
  );
}
