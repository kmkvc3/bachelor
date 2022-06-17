import styles from "./DailyRaport.module.css";
// import dynamic from "next/dynamic";
// const VirusTaxonomy = dynamic(() => import("./plots/VirusTaxonomy"));
import VirusTaxonomy from "./plots/VirusTaxonomy";
import MostRepresentativeVirus from "./plots/MostRepresentativeVirus";
import VirusGenomeType from "./plots/VirusGenomeType";
import AssemblyLevel from "./plots/AssemblyLevel";
import VirusGenomeDistro from "./plots/VirusGenomeDistro";
import HostHighestNumber from "./plots/HostHighestNumber";
import VirusGenomeSource from "./plots/VirusGenomeSource";
import Summary from "./plots/Summary";
import HostPerVirus from "./plots/HostPerVirus";
import InteractionsEvidence from "./plots/InteractionsEvidence";
import Archea from "./plots/Archea";
import Bacteria from "./plots/Bacteria";
import SmallestGenoms from "./plots/SmallestGenoms";
import LargestGenoms from "./plots/LargestGenoms";
import MostRepresentativeHost from "./plots/MostRepresentativeHost";
// const MostRepresentativeVirus = dynamic(
//   () => import("./plots/MostRepresentativeVirus")
// );
// const VirusGenomeType = dynamic(() => import("./plots/VirusGenomeType"));
// const AssemblyLevel = dynamic(() => import("./plots/AssemblyLevel"));
// const VirusGenomeDistro = dynamic(() => import("./plots/VirusGenomeDistro"));
// const HostHighestNumber = dynamic(() => import("./plots/HostHighestNumber"));
// const VirusGenomeSource = dynamic(() => import("./plots/VirusGenomeSource"));
// const Summary = dynamic(() => import("./plots/Summary"));
// const MostRepresentativeHost = dynamic(
//   () => import("./plots/MostRepresentativeHost")
// );
// const HostPerVirus = dynamic(() => import("./plots/HostPerVirus"));
// const InteractionsEvidence = dynamic(
//   () => import("./plots/InteractionsEvidence")
// );
import { useEffect } from "react";
import { useState } from "react";
import Highcharts from "highcharts";
// const Archea = dynamic(() => import("./plots/Archea"));
// const Bacteria = dynamic(() => import("./plots/Bacteria"));
// const SmallestGenoms = dynamic(() => import("./plots/SmallestGenoms"));
// const LargestGenoms = dynamic(() => import("./plots/LargestGenoms"));

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

        <div className="targetSelector" id="TaxDiversity">
          <h1>Taxonomic diversity of viruses</h1>
          <span></span>
          <div id="VT"></div>
          <VirusTaxonomy />
          <div id="MRV"></div>
          <MostRepresentativeVirus />
        </div>

        <div className="targetSelector" id="GenDiversity">
          <h1>Genomic diversity of viruses</h1>
          <span></span>
          <div id="VGT"></div>
          <VirusGenomeType />

          <div id="AL"></div>
          <AssemblyLevel />

          <div id="VG"></div>
          <VirusGenomeDistro />

          <div id="VGS"></div>
          <VirusGenomeSource />

          <div id="SCG"></div>
          <SmallestGenoms />

          <div id="LCG"></div>
          <LargestGenoms />
        </div>

        <div className="targetSelector" id="TaxaInteractions">
          <h1>Taxonomic diversity of hosts</h1>
          <span></span>

          <div id="B"></div>
          <Bacteria />

          <div id="A"></div>
          <Archea />

          <div id="MRH"></div>
          <MostRepresentativeHost />
        </div>

        <div className="targetSelector" id="HostVirus">
          <h1>Virus-host interactions</h1>
          <span></span>

          <div id="HHN"></div>
          <HostHighestNumber />

          <div id="HPV"></div>
          <HostPerVirus />

          <div id="IE"></div>
          <InteractionsEvidence />
        </div>
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
        <a href="#SCG">Smallest complete genomes</a>
        <a href="#LCG">Largest complete genomes</a>

        <a
          href="#TaxaInteractions"
          className={id === "TaxaInteractions" ? styles.active : styles.main}
        >
          Taxonomic diversity of hosts
        </a>

        <a href="#B">Bacteria</a>
        <a href="#A">Archaea</a>
        <a href="#MRH"> Most abundant host taxa </a>

        <a
          href="#HostVirus"
          className={id === "HostVirus" ? styles.active : styles.main}
        >
          Virus-host interactions
        </a>

        <a href="#HHN">Hosts with most interactions</a>
        <a href="#HPV">Host species per virus species</a>
        <a href="#IE">Source databases</a>
      </aside>
    </div>
  );
}
