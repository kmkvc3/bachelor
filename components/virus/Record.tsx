import styles from "./Record.module.css";
import { useEffect, useState } from "react";
import EventBus from "../../EventBus";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import BookmarkHandler from "../bookmarks/BookmarksHandler";
import Link from "next/dist/client/link";

export default function Record({ data }) {
    const accession = data.virus_id;
    const [bookmark, setBookmark] = useState(null);
    useEffect(() => {
        loadBookmark();
        EventBus.on("remove-bookmark", () => {
            if (!BookmarkHandler.getBookmark(accession)) {
                BookmarkHandler.removeBookmark(accession);
                setBookmark(null);
            }
        });
    });
    function loadBookmark() {
        const localBookmark = BookmarkHandler.getBookmark(accession);
        if (localBookmark) setBookmark(localBookmark);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <img src="../virus2.svg" alt="" />
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
            <div className={styles.representative}>
                <h2>
                    Representative assembly{" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h2>
                <p>Name: {data.genome_assemblies.representative.name}</p>
                <p>Length: {data.genome_assemblies.representative.length}</p>
                <p>
                    Assembly level:{" "}
                    {data.genome_assemblies.representative.assembly_level}
                </p>

                <h3>Sequences</h3>
                {data.genome_assemblies.representative.sequences.map((seq) => (
                    <div className={styles.sequence}>
                        <p>Name: {seq.name}</p>
                        <p>Length: {seq.length}</p>
                        <p>
                            Url:{" "}
                            <a
                                className={styles.url}
                                target="_blank"
                                href={seq.url}
                            >
                                {seq.url}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
            {data.genome_assemblies.others ? (
                <div className={styles.representative}>
                    <h2>Others assembly</h2>

                    {data.genome_assemblies.other.map((other) => (
                        <div>
                            <p>Name: {other.name}</p>
                            <p>Length: {other.length}</p>
                            <p>Assembly level: {other.assembly_level}</p>
                            <h3>Sequences</h3>

                            {data.genome_assemblies.representative.sequences.map(
                                (seq) => (
                                    <div>
                                        <p>Name: {seq.name}</p>
                                        <p>Length: {seq.length}</p>
                                        <p>
                                            Url:{" "}
                                            <a
                                                className={styles.url}
                                                target="_blank"
                                                href={seq.url}
                                            >
                                                {seq.url}
                                            </a>
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>
            ) : null}
            <div className={styles.representative}>
                <h2>Hosts </h2>
                {data.hosts.map((host) => (
                    <p>{host.name}</p>
                ))}
            </div>

            {data.lineage_ictv.length > 0 ? (
                <div className={styles.representative}>
                    <h2>Lineage ICTV</h2>
                    {data.lineage_ictv.map((host, index) => (
                        <p
                            className={`${styles.lineage} ${styles.lineageICTV}`}
                        >
                            <div></div>
                            <span
                                style={{
                                    marginLeft: `${
                                        index > 1 ? (index - 1) * 22 : 0
                                    }px`,
                                }}
                            >
                                {index > 0 ? (
                                    <span className={styles.taxonTree}></span>
                                ) : null}
                            </span>
                            <span>{host.rank}</span>
                            <span>{host.name}</span>
                        </p>
                    ))}
                </div>
            ) : null}

            {data.lineage_ncbi.length > 0 ? (
                <div className={styles.representative}>
                    <h2>Lineage NCBI</h2>
                    {data.lineage_ncbi.map((host, index) => (
                        <p className={styles.lineage}>
                            <div></div>
                            <span
                                style={{
                                    marginLeft: `${
                                        index > 1 ? (index - 1) * 22 : 0
                                    }px`,
                                }}
                            >
                                {index > 0 ? (
                                    <span className={styles.taxonTree}></span>
                                ) : null}
                            </span>
                            <span>{host.rank}</span>
                            <span>{host.name}</span>
                        </p>
                    ))}
                </div>
            ) : null}

            <Link href={`/search?taxon_id=${data.taxon_id}`}>
                <button className={styles.searchBy}>
                    Search by its taxon{" "}
                    <FontAwesomeIcon
                        icon={faSearch}
                        color={"#ffffff"}
                        className={styles.searchIcon}
                    />
                </button>
            </Link>
        </div>
    );
}
