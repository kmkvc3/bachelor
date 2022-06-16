import styles from "./ListElement.module.css";
import Link from "next/dist/client/link";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../modal/Modal";
import LineageContentGTDB from "./LineageContentGTDB";
import LineageContentNCBI from "./LineageContentNCBI";
import { useState } from "react";
import { generateUrl } from "../../../urlGenerator";

function EvidenceIcon({ evidence_name }) {
    switch (evidence_name) {
        case "RefSeq":
            return (
                <span className={`${styles.RefSeq} ${styles.evidence}`}>
                    <p>RS</p>
                </span>
            );
        case "MVP":
            return (
                <span className={`${styles.MVP} ${styles.evidence}`}>
                    <p>MV</p>
                </span>
            );
        case "GenBank":
            return (
                <span className={`${styles.GenBank} ${styles.evidence}`}>
                    <p>GB</p>
                </span>
            );
        case "UniProt-SwissProt":
            return (
                <span
                    className={`${styles.UniProtSwissProt} ${styles.evidence}`}
                >
                    <p>US</p>
                </span>
            );
        case "UniProtKB":
            return (
                <span className={`${styles.UniProtKB} ${styles.evidence}`}>
                    <p>UK</p>
                </span>
            );
        case "IntAct":
            return (
                <span className={`${styles.IntAct} ${styles.evidence}`}>
                    <p>IA</p>
                </span>
            );
        case "Virus-Host DB":
            return (
                <span className={`${styles.VHDB} ${styles.evidence}`}>
                    <p>VH</p>
                </span>
            );
        case "NCBI Virus":
            return (
                <span className={`${styles.NCBI} ${styles.evidence}`}>
                    <p>NV</p>
                </span>
            );
        default:
            return null;
    }
}

export default function ListElement({ tableData }) {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("NCBI");

    return (
        <div className={styles.element}>
            <span>
                <Link href={`/virus/${tableData.virus.virus_id}`}>
                    <strong className={styles.link}>
                        {tableData.virus.name}
                    </strong>
                </Link>
            </span>
            <span className={styles.branch}>
                <Link
                    href={`/search[key]`}
                    as={generateUrl({
                        taxon_id: tableData.host.ncbi.taxon_id,
                    })}
                >
                    <strong className={styles.link}>
                        {tableData.host.ncbi.name}
                    </strong>
                </Link>
                <FontAwesomeIcon
                    onClick={() => {
                        setOpen(true);
                        setType("NCBI");
                    }}
                    className={styles.icon}
                    icon={faCodeBranch}
                />
            </span>
            <span className={styles.branch}>
                {tableData.host.gtdb.name ? (
                    <>
                        <Link
                            href={`/search[key]`}
                            as={generateUrl({
                                taxon_id: tableData.host.gtdb.taxon_id,
                            })}
                        >
                            <strong className={styles.link}>
                                {tableData.host.gtdb.name}
                            </strong>
                        </Link>
                        <FontAwesomeIcon
                            onClick={() => {
                                setOpen(true);
                                setType("GTDB");
                            }}
                            className={styles.icon}
                            icon={faCodeBranch}
                        />
                    </>
                ) : (
                    "-"
                )}
            </span>
            <span className={styles.evidenceWrapper}>
                {tableData.evidence.map((evidence) => (
                    <EvidenceIcon key={evidence} evidence_name={evidence} />
                ))}
            </span>
            <span>{tableData.virus.genome_type}</span>
            <span>{tableData.virus.assembly_level}</span>
            <span>{tableData.virus.genome_length.toLocaleString("en")} bp</span>

            {open ? (
                type === "GTDB" ? (
                    <Modal
                        title="GTDB Lineage"
                        opened={open}
                        setClose={setOpen}
                    >
                        <LineageContentGTDB host_id={tableData.host.host_id} />
                    </Modal>
                ) : (
                    <Modal
                        title="NCBI Lineage"
                        opened={open}
                        setClose={setOpen}
                    >
                        <LineageContentNCBI host_id={tableData.host.host_id} />
                    </Modal>
                )
            ) : null}
        </div>
    );
}
