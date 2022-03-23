import { useEffect, useState } from "react";
import styles from "./LineageContent.module.css";
import { getHostRecord } from "../../../Api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function Export({ setClose, host_id }) {
    const [data, setData] = useState(undefined);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const taxonomy = await getHostRecord(host_id);
        setData(taxonomy);
    }

    return (
        <div className={styles.wrapper}>
            {data ? (
                <>
                    {data.ncbi.length > 0 ? (
                        <div className={styles.representative}>
                            <h2>NCBI</h2>
                            {data.ncbi.map((host, index) => (
                                <p className={styles.lineage}>
                                    <span
                                        style={{
                                            marginLeft: `${
                                                index > 1 ? (index - 1) * 22 : 0
                                            }px`,
                                        }}
                                    >
                                        {index > 0 ? (
                                            <span
                                                className={styles.taxonTree}
                                            ></span>
                                        ) : null}
                                    </span>
                                    <span>{host}</span>
                                </p>
                            ))}
                        </div>
                    ) : null}
                    
                    {data.gtdb.length > 0 ? (
                        <div className={styles.representative}>
                            <h2>GTDB</h2>
                            {data.gtdb.map((host, index) => (
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
                                            <span
                                                className={styles.taxonTree}
                                            ></span>
                                        ) : null}
                                    </span>
                                    <span>{host}</span>
                                </p>
                            ))}
                        </div>
                    ) : null}
                </>
            ) : (
                <SkeletonTheme
                    baseColor={darkMode ? "#2d333b" : "#f0f3f6"}
                    highlightColor={darkMode ? "#3b444e" : "white"}
                >
                    <Skeleton className={styles.header} count={1} />
                    <Skeleton className={styles.row} count={10} />
                </SkeletonTheme>
            )}
        </div>
    );
}
