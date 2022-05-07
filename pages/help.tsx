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
        <link rel="shortcut icon" href="favicon.ico" />
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
          or{" "}
          <a target="_blank" href="https://gtdb.ecogenomic.org/">
            Genome Taxonomy Database (GTDB)
          </a>
          . Analogously, virus species are classified according to{" "}
          <a target="_blank" href="https://talk.ictvonline.org/">
            NCBI Taxonomy or International Committee on Taxonomy of Viruses
            (ICTV)
          </a>
          .
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
          database of complete phage genomes
        </p>
        <p>
          PHD also publishes daily reports on the current catalog of phage-host
          interactions.
        </p>
        <h1>Methods</h1>
        <p>
          PHD integrates information from several data sources to collect data
          related to virus genomic sequences, host information, and taxonomic
          classification
        </p>
        <img
          src={darkMode ? "method-dark.svg" : "method-light.svg"}
          alt="phd workflow"
        />
        <ol className={styles.points}>
          <li>
            Names and/or NCBI taxonomy identifiers (<code>taxIds</code>) of
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
                files under the qualifiers <code>/host=</code> and{" "}
                <code>/lab_host=</code>)
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
          </li>
          <li>
            The extracted host names/<code>taxIds</code> are queried in{" "}
            <a target="_blank" href="https://github.com/shenwei356/taxonkit">
              TaxonKit
            </a>{" "}
            against NCBI Taxonomy to retrieve full taxonomic lineages of hosts
            including their names, ranks, and taxIds. Only prokaryotic host
            species (from Bacteria or Archaea) are included in further steps.
            For example:
            <pre>
              Escherichia coli species 562 Escherichia genus 561
              Enterobacteriaceae family 543 Enterobacterales order 91347
              Gammaproteobacteria class 1236 Proteobactertia phylum 1224
              Bacteria superkingdom 2
            </pre>
          </li>
          <li>
            An additional taxonomic information (if available) for each
            prokaryotic host species is retrieved from{" "}
            <a target="_blank" href="https://gtdb.ecogenomic.org/">
              Genome Taxonomy Database (GTDB)
            </a>
            .
          </li>
          <li>
            Interaction assignments between virus sequence records and the
            prokaryotic host species are collected from the source databases.
          </li>
          <li>
            Virus <code>taxIds</code> provided in sequence records are used to
            retrieve virus taxonomic lineages from NCBI Taxonomy. The obtained
            virus species <code>taxIds</code> or sequence accessions are used to
            retrieve virus taxonomic lineages (if available) in{" "}
            <a target="_blank" href="https://talk.ictvonline.org/taxonomy/vmr/">
              International Committee on Taxonomy of Viruses (ICTV)
            </a>
            . Sequence accessions are then assigned to the appropriate virus
            species. For example, three genomic sequences (<code>MN125599</code>
            , <code>MN125600</code>, and <code>NC_049813</code>) belong to the{" "}
            <i>Escherichia</i> virus 12210I species.
          </li>
          <li>
            Sequence accessions within virus species are grouped into genome
            assemblies based on metadata provided in the NCBI Assembly database.
            For example, two sequence accessions - <code>MN125599</code>,{" "}
            <code>MN125600</code> - are part of one genome assembly from GenBank
            (assembly accession: <code>GCA_009903655</code>) while the third
            sequence <code>NC_049813</code> is a separate genome assemble from
            RefSeq (assembly accession: GCF_009671745). Assembly level category
            (i.e., <i>Complete</i> or <i>Scaffold</i> or <i>Contig</i> or{" "}
            <i>unknown</i>) is assigned to each virus assembly based on
            information provided by{" "}
            <a target="_blank" href="https://www.ncbi.nlm.nih.gov/assembly">
              NCBI Assembly
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://github.com/RyanCook94/inphared">
              INPHARED
            </a>{" "}
            databases.{" "}
          </li>
          <li>
            Source databases are assigned to each interaction between virus and
            host species. For example, the interaction between{" "}
            <i>Escherichia</i> virus 12210I and <i>E. coli</i> was covered by
            three source databases (i.e., NCBI Virus, Virus-Host DB, and
            RefSeq).
          </li>
        </ol>
        <h1>Cite PHD</h1>
        <p>If you find PHD useful in your work please cite:</p>
        <i>
          Albrycht K et al. (2022). Daily reports on phage-host interactions.
        </i>
      </div>
    </Layout>
  );
}
