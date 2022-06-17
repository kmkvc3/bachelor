import ListElement from "./ListElement";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ListElement.module.css";

export default function Table({ data }) {
    return (
        <>
            <div className={`${styles.element} ${styles.header}`}>
                <span>Virus species</span>
                <span>NCBI host species</span>
                <span>GTDB host species</span>
                <span className={styles.source}>
                    Source
                    <span className={styles.helpIconWrapper}>
                        <FontAwesomeIcon
                            className={styles.helpIcon}
                            icon={faQuestionCircle}
                        ></FontAwesomeIcon>
                        <div className={styles.helpDialog}>
                            <div>
                                <span
                                    className={`${styles.RefSeq} ${styles.evidence}`}
                                >
                                    <p>RS</p>
                                </span>
                                <p>RefSeq</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.MVP} ${styles.evidence}`}
                                >
                                    <p>MV</p>
                                </span>
                                <p>MVP</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.GenBank} ${styles.evidence}`}
                                >
                                    <p>GB</p>
                                </span>
                                <p>GenBank</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.IntAct} ${styles.evidence}`}
                                >
                                    <p>IA</p>
                                </span>
                                <p>IntAct</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.UniProtSwissProt} ${styles.evidence}`}
                                >
                                    <p>US</p>
                                </span>
                                <p>UniProt - SwissProt</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.VHDB} ${styles.evidence}`}
                                >
                                    <p>VH</p>
                                </span>
                                <p>Virus-Host DB</p>
                            </div>
                            <div>
                                <span
                                    className={`${styles.NCBI} ${styles.evidence}`}
                                >
                                    <p>NV</p>
                                </span>
                                <p>NCBIVirus</p>
                            </div>
                        </div>
                    </span>
                </span>
                <span>
                    Type
                    <span className={styles.helpIconWrapper}>
                        <FontAwesomeIcon
                            className={styles.helpIcon}
                            icon={faQuestionCircle}
                        ></FontAwesomeIcon>
                        <div className={styles.tooltip}>
                          <p>Virus genome type</p>
                        </div>
                    </span>
                </span>
                <span>
                    Assembly level{" "}
                    <span className={styles.helpIconWrapper}>
                        <FontAwesomeIcon
                            className={styles.helpIcon}
                            icon={faQuestionCircle}
                        ></FontAwesomeIcon>
                        <div className={styles.tooltip}>
                            <p>Virus assembly level</p>
                        </div>
                    </span>
                </span>
                <span>
                    Length{" "}
                    <span className={styles.helpIconWrapper}>
                        <FontAwesomeIcon
                            className={styles.helpIcon}
                            icon={faQuestionCircle}
                        ></FontAwesomeIcon>
                        <div className={styles.tooltip}>
                          <p>Virus genome length</p>
                        </div>
                    </span>
                </span>
            </div>

            <div>
                {data.results.map((data) => (
                    <ListElement
                        key={data.virus.accession_number}
                        tableData={data}
                    />
                ))}
            </div>
        </>
    );
}
