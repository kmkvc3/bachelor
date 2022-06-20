import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/help.module.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function Help() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Layout>
      <Head>
        <title>Help | PHD</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1>About</h1>
        <p>
          PHD (<u>P</u>hage & <u>H</u>ost <u>D</u>aily) is a web application
          that combines information on phage-host interactions from seven
          sources —{" "}
          <a
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/"
          >
            NCBI Virus
          </a>
          ,{" "}
          <a target="_blank" href="https://www.genome.jp/virushostdb/">
            Virus-Host DB
          </a>
          ,{" "}
          <a target="_blank" href="https://mvp.medgenius.info/home">
            MVP
          </a>
          ,{" "}
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/refseq/">
            RefSeq
          </a>
          ,{" "}
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/genbank/">
            GenBank
          </a>
          ,{" "}
          <a target="_blank" href="https://www.uniprot.org/">
            UniProt
          </a>
          , and{" "}
          <a target="_blank" href="https://www.ebi.ac.uk/intact/home">
            IntAct
          </a>
          . PHD provides information on hosts for prokaryotic viruses at the
          species resolution using two alternative taxonomic classification
          systems,{" "}
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/taxonomy">
            NCBI Taxonomy
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            Genome Taxonomy Database (GTDB)
          </a>
          . Analogously, virus species are classified according to{" "}
          <a target="_blank" href="https://talk.ictvonline.org/">
            NCBI Taxonomy</a>{" "}
          and{" "}
          <a target="_blank" href="https://talk.ictvonline.org/">
            International Committee on Taxonomy of Viruses (ICTV)
          </a>.
        </p>
        <p>
          PHD also points to genome assemblies available for each virus species
          by keeping track of the{" "}
          <a target="_blank" href="https://www.ncbi.nlm.nih.gov/assembly">
            NCBI Assembly
          </a>{" "}
          resource and the{" "}
          <a target="_blank" href="https://github.com/RyanCook94/inphared">
            INPHARED
          </a>{" "}
          database of complete phage genomes.
        </p>
        <p>
          PHD also publishes daily reports on the current catalog of phage-host
          interactions.
        </p>
        <h1>Methods</h1>
        <p>
          PHD integrates information from several data sources to collect data
          related to virus genomic sequences, host information, and taxonomic
          classification.
        </p>
        <img
          src={darkMode ? "method-dark.webp" : "method-light.webp"}
          alt="PHD workflow"
        />

        <h2>1. Extract host names from virus sequence records</h2>
        <p>
            Names and/or NCBI taxonomy identifiers (<span>taxIds</span>) of
            hosts are extracted from nucleotide/protein sequence records of
            viruses available in six source databases:
            <ul className={styles.dots}>
              <li>NCBI Virus (from XML file)</li>
              <li>
                RefSeq (from{" "}
                <a
                  target="_blank"
                  href="https://ftp.ncbi.nlm.nih.gov/refseq/release/viral/"
                >
                  GenBank flat
                </a>{" "}
                files under the qualifiers <span>/host=</span> and{" "}
                <span>/lab_host=</span>)
              </li>
              <li>
                Virus-Host DB (from{" "}
                <a
                  target="_blank"
                  href="https://www.genome.jp/ftp/db/virushostdb/virushostdb.tsv"
                >
                  TSV file
                </a>
                )
              </li>
              <li>
                MVP (from{" "}
                <a target="_blank" href="https://mvp.medgenius.info/Downloads/">
                  TSV files
                </a>
                )
              </li>
              <li>
                UniProt-SwissProt (from{" "}
                <a
                  target="_blank"
                  href="https://www.uniprot.org/uniprot/?query=taxonomy:%22Viruses%20[10239]%22&format=tab&columns=id,organism,organism-id,virus%20hosts&sort=score&fil=reviewed:yes"
                >
                  protein sequence entries in UniProt-SwissProt
                </a>
                )
              </li>
              <li>
                IntAct (from protein-protein interactions available on the{" "}
                <a
                  target="_blank"
                  href="ftp://ftp.ebi.ac.uk/pub/databases/intact/current/psimitab/"
                >
                  IntAct FTP server
                </a>
                )
              </li>
            </ul>
        </p>
        <br/>

        <h2>2. Retrieve NCBI Taxonomy information for hosts</h2>
        <p>
          The extracted host names/<span>taxIds</span> are queried in{" "}
          <a target="_blank" href="https://github.com/shenwei356/taxonkit">
            TaxonKit
          </a>{" "}
          against NCBI Taxonomy to retrieve full taxonomic lineages of hosts
          including their names, ranks, and taxIds. Only viruses with prokaryotic 
          hosts defined at the species level are included in further steps.
        </p>
        <br/>

        <h2>3. Retrieve GTDB Taxonomy information for hosts</h2>
        <p>
          An additional taxonomic information (if available) for each
          prokaryotic host species is retrieved from{" "}
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            Genome Taxonomy Database (GTDB)
          </a>.
        </p>
        <p>
          Host species in NCBI Taxonomy might relate to corresponding GTDB species in three ways:
          <ul className={styles.dots}>
            <li>one-to-one (one NCBI species corresponds to one GTDB species)</li>
            <li>many-to-one (multiple NCBI species correspond to one GTDB species)</li>
            <li>one-to-many (one NCBI species correspond to multiple GTDB species)</li>
          </ul>
        </p>
        <p>
          PHD handles only one-to-one and many-to-one relations as NCBI Taxonomy is the primary classification
           used in the PHD database. For one-to-many relation, only 
          one GTDB species is selected as the corresponding NCBI species. The selection is based on three decision 
          criteria including also the majority vote pointed by the Reviewer. Specifically, if any of 
          the GTDB species has the same name as NCBI species, this one is chosen as the counterpart 
          of NCBI species. Otherwise, we select GTDB species with the highest number of genomes. If 
          multiple GTDB species have the same number of genomes, we select one with the highest assembly 
          quality (based on the assembly level reported in GenBank/RefSeq and the CheckM completeness 
          reported in GTDB).
        </p>
        <br/>

        <h2>4. Collect assignments between virus genomic sequences and host species</h2>
        <p>
          Pairwise linkages between virus genomic sequences and the prokaryotic host species 
          are collected from the source databases (i.e., NCBI Virus, Virus-Host DB, RefSeq,
            UniProt, MVP, and IntAct).
        </p>
        <br/>

        <h2>5. Map virus genomic sequences to virus species based on NCBI Taxonomy and ICTV</h2>
        <p>
          Virus <span>taxIds</span> provided in GenBank/RefSeq sequence records are used to
            retrieve virus taxonomic lineages from NCBI Taxonomy. The obtained
            virus species <span>taxIds</span> or sequence accessions are used to
            retrieve virus taxonomic lineages (if available) in{" "}
            <a target="_blank" href="https://talk.ictvonline.org/taxonomy/vmr/">
              International Committee on Taxonomy of Viruses (ICTV)
            </a>
            . Sequence accessions are then assigned to the appropriate virus
            species. For example, three genomic sequences (<span>MN125599</span>
            , <span>MN125600</span>, and <span>NC_049813</span>) belong to the{" "}
            <i>Veterinaerplatzvirus vv12210I</i> virus species.
        </p>
        <br/>

        <h2>6. Assign virus sequences to genome assemblies and select representative genome</h2>
        <p>
            Sequence accessions within virus species are grouped into genome
            assemblies based on metadata provided in the NCBI Assembly database.
            For example, two sequence accessions - <span>MN125599</span>,{" "}
            <span>MN125600</span> - are part of one genome assembly from GenBank
            (assembly accession: <span>GCA_009903655</span>) while the third
            sequence <span>NC_049813</span> is a separate genome assemble from
            RefSeq (assembly accession: <span>GCF_009671745)</span>.
        </p>
        <p>
            Assembly level category
            (i.e., <i>Complete</i> or <i>Scaffold</i> or <i>Contig</i> or{" "}
            <i>unknown</i>) is assigned to each virus assembly based on
            information provided in{" "}
            <a target="_blank" href="https://www.ncbi.nlm.nih.gov/assembly">
              NCBI Assembly
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://github.com/RyanCook94/inphared">
              INPHARED
            </a>{" "}
            databases.{" "}            
        </p>
        <p>
            A representative genome is selected for each virus species. The representative genome
            has the highest assembly level and is selected more preferably from RefSeq than GenBank.
            If multiple genomes have the same high assembly level, the genome with the longest sequence
            is selected as representative.
        </p>
        <br/>

        <h2>7. Assign source databases to virus-host interactions</h2>
        <p>
            Source databases are assigned to each interaction between virus and
            host species. For example, the interaction between{" "}
            <i>Veterinaerplatzvirus vv12210I</i> and <i>E. coli</i> was covered by
            three source databases (i.e., NCBI Virus, Virus-Host DB, and
            RefSeq).
        </p>

        <h1>Cite PHD</h1>
        <p>If you find PHD useful in your work please cite:</p>
        <i>
          Albrycht K et al. (2022). Daily reports on phage-host interactions.
        </i>
      </div>
    </Layout>
  );
}
