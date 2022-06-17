import styles from "./Record.module.css";
import { useEffect, useState } from "react";
import EventBus from "../../EventBus";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import {
    faCodeBranch,
    faCheckCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import BookmarkHandler from "../bookmarks/BookmarksHandler";
import Link from "next/dist/client/link";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import LineageContent from "../search/table/LineageContent";
import Modal from "../modal/Modal";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Record({ data }) {
    const accession = data.virus_id;
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [open, setOpen] = useState(false);
    const [bookmark, setBookmark] = useState(null);
    useEffect(() => {
        loadBookmark();
        EventBus.on("remove-bookmark", () => {
            if (!BookmarkHandler.getBookmark(accession)) {
                BookmarkHandler.removeBookmark(accession);
                setBookmark(null);
            }
        });
    }, []);
    function loadBookmark() {
        const localBookmark = BookmarkHandler.getBookmark(accession);
        if (localBookmark) setBookmark(localBookmark);
    }
    function EvidenceIcon({ evidence_name }) {
        switch (evidence_name) {
            case "RefSeq":
                return (
                    <span className={`${styles.RefSeq} ${styles.evidence}`}>
                        <p>RefSeq</p>
                    </span>
                );
            case "MVP":
                return (
                    <span className={`${styles.MVP} ${styles.evidence}`}>
                        <p>MVP</p>
                    </span>
                );
            case "GenBank":
                return (
                    <span className={`${styles.GenBank} ${styles.evidence}`}>
                        <p>GenBank</p>
                    </span>
                );
            case "UniProt-SwissProt":
                return (
                    <span
                        className={`${styles.UniProtSwissProt} ${styles.evidence}`}
                    >
                        <p>UniProt-SwissProt</p>
                    </span>
                );
            case "UniProtKB":
                return (
                    <span className={`${styles.UniProtKB} ${styles.evidence}`}>
                        <p>UniProtKB</p>
                    </span>
                );
            case "IntAct":
                return (
                    <span className={`${styles.IntAct} ${styles.evidence}`}>
                        <p>IntAct</p>
                    </span>
                );
            case "Virus-Host DB":
                return (
                    <span className={`${styles.VHDB} ${styles.evidence}`}>
                        <p>Virus-Host DB</p>
                    </span>
                );
            case "NCBI Virus":
                return (
                    <span className={`${styles.NCBI} ${styles.evidence}`}>
                        <p>NCBI Virus</p>
                    </span>
                );
            default:
                return null;
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <img
                        src={`${
                            darkMode
                                ? "../virus-secondary-dark.svg"
                                : "../virus-secondary-light.svg"
                        }`}
                        alt=""
                    />
                    <div className={styles.names}>
                        <h1>
                            {data.name} <span>{data.genome_type}</span>
                        </h1>
                        {data.synonymes.map((synonyme) => (
                            <span>{synonyme}</span>
                        ))}
                    </div>
                </div>
                <span
                    className={styles.bookmark}
                    onClick={() => {
                        if (bookmark) {
                            BookmarkHandler.removeBookmark(accession);
                            toast.success(
                                <div>
                                    <strong>{data.name}</strong> removed from
                                    bookmarks
                                </div>
                            );
                            setBookmark(null);
                        } else {
                            toast.success(
                                <div>
                                    <strong>{data.name}</strong> added to
                                    bookmarks
                                </div>
                            );
                            BookmarkHandler.setBookmark({
                                virus: data.name,
                                virus_id: data.virus_id,
                            });
                            loadBookmark();
                        }
                        EventBus.emit("add-bookmark");
                    }}
                >
                    {bookmark ? (
                        <FontAwesomeIcon icon={faBookmark} />
                    ) : (
                        <FontAwesomeIcon icon={farBookmark} />
                    )}
                </span>
            </div>

            {data.lineage_ncbi.length > 0 ? (
                <div className={styles.representative}>
                    <h2>Lineage NCBI</h2>
                    {data.lineage_ncbi.map((host, index) => (
                        <p className={styles.lineage}>
                            <span
                                style={{
                                    marginLeft: `${
                                        index > 1 ? (index - 1) * 20 : 0
                                    }px`,
                                }}
                            >
                                {index > 0 ? (
                                    <span className={styles.taxonTree}></span>
                                ) : null}
                            </span>
                            <span>{host.rank}</span>
                            <span
                                style={{
                                    left: `${
                                        data.lineage_ncbi.length * 23 +
                                        data.lineage_ncbi[
                                            data.lineage_ncbi.length - 1
                                        ].name.length +
                                        50
                                    }px`,
                                }}
                            >
                                <Link
                                    href={`/search?taxon_id=${host.taxon_id}`}
                                >
                                    {host.name}
                                </Link>
                            </span>
                        </p>
                    ))}
                </div>
            ) : null}

            {data.lineage_ictv.length > 0 ? (
                <div className={styles.representative}>
                    <h2>Lineage ICTV</h2>
                    {data.lineage_ictv.map((host, index) => (
                        <p className={styles.lineage}>
                            <span
                                style={{
                                    marginLeft: `${
                                        index > 1 ? (index - 1) * 20 : 0
                                    }px`,
                                }}
                            >
                                {index > 0 ? (
                                    <span className={styles.taxonTree}></span>
                                ) : null}
                            </span>
                            <span>{host.rank}</span>
                            <span
                                style={{
                                    left: `${
                                        data.lineage_ictv.length * 23 +
                                        data.lineage_ictv[
                                            data.lineage_ictv.length - 1
                                        ].name.length +
                                        50
                                    }px`,
                                }}
                            >
                                <Link
                                    href={`/search?taxon_id=${host.taxon_id}`}
                                >
                                    {host.name}
                                </Link>
                            </span>
                        </p>
                    ))}
                </div>
            ) : (
                <div className={styles.representative}>
                    <h2>Lineage ICTV</h2>
                    <div className={styles.notFoundICTV}>
                        Virus species has not yet been classified by the ICTV
                        Committee <FontAwesomeIcon icon={faTimesCircle} />
                    </div>
                </div>
            )}

            <div className={styles.representative}>
                <h2 className={styles.genome}>
                    Genome assemblies{" "}
                    <i>(n = {data.genome_assemblies.length})</i>
                </h2>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <p>Assembly accession</p>
                        <p>Assembly level</p>
                        <p>Genome length</p>
                        <p>Sequence accessions</p>
                        <p  className={styles.helpIconWrapper}>
                            Representative
                            <span>
                                <FontAwesomeIcon
                                    className={styles.helpIcon}
                                    icon={faQuestionCircle}
                                ></FontAwesomeIcon>
                                <div className={styles.tooltip}>
                                    <p>...</p>
                                </div>
                            </span>
                        </p>
                    </div>
                    {data.genome_assemblies.map((other) => (
                        <div className={styles.row}>
                            <p>
                                <a target="_blank" href={other.url}>
                                    {other.name}
                                </a>
                            </p>
                            <p>{other.assembly_level}</p>
                            <p>{other.length}</p>
                            <p>
                                {other.sequences.map((seq, i) => (
                                    <p className={styles.sequence}>
                                        <a target="_blank" href={seq.url}>
                                            {seq.name}
                                        </a>
                                        {other.sequences.length > 1 &&
                                        other.sequences.length - 1 > i ? (
                                            <span>, </span>
                                        ) : null}
                                    </p>
                                ))}
                            </p>
                            {other.is_representative ? (
                                <div className={styles.representativeIcon}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                            ) : (
                                <div className={styles.none}>-</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.representative}>
                <h2>Hosts </h2>
                {data.hosts.map((host) => (
                    <>
                        {open ? (
                            <Modal
                                title="Host lineage"
                                opened={open}
                                setClose={setOpen}
                            >
                                <LineageContent
                                    host_id={host.host_id}
                                    setClose={setOpen}
                                />
                            </Modal>
                        ) : null}
                        <p className={styles.host}>
                            <span
                                onClick={() => {
                                    setOpen(true);
                                }}
                                className={styles.branch}
                            >
                                {host.name}
                                <FontAwesomeIcon icon={faCodeBranch} />
                            </span>
                            {host.evidence.map((evidence) => {
                                return (
                                    <EvidenceIcon evidence_name={evidence} />
                                );
                            })}
                        </p>
                    </>
                ))}
            </div>
        </div>
    );
}
