import styles from "./ListElement.module.css";
import Link from "next/dist/client/link";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../modal/Modal";
import LineageContent from "./LineageContent";
import { useState } from "react";
import { useEffect } from "react";

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

    return (
        <div className={styles.element}>
            <span>
                <Link href={`/virus/${tableData.virus.virus_id}`}>
                    <strong className={styles.virus_link}>
                        {tableData.virus.name}
                    </strong>
                </Link>
            </span>
            <span
                onClick={() => {
                    setOpen(true);
                }}
                className={styles.branch}
            >
                <strong>{tableData.host.name}</strong>
                <FontAwesomeIcon className={styles.icon} icon={faCodeBranch} />
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
                <Modal title="Lineage" opened={open} setClose={setOpen}>
                    <LineageContent host_id={tableData.host.host_id} setClose={setOpen} />
                </Modal>
            ) : null}
        </div>
    );
}
