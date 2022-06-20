import { useEffect, useState } from "react";
import styles from "./LineageContent.module.css";
import { getHostTaxNCBI } from "../../../Api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Link from "next/dist/client/link";
import { generateUrl } from "../../../urlGenerator";

export default function Export({ host_id }) {
    const [data, setData] = useState(undefined);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const taxonomy = await getHostTaxNCBI(host_id);
        setData(taxonomy);
    }

    return (
        <div className={styles.wrapper}>
            {data ? (
                <>
                    <div className={styles.representative}>
                        <h2>NCBI</h2>
                        {data.map((host, index) => (
                            <p className={styles.lineage}>
                                <span
                                    style={{
                                        marginLeft: `${
                                            index > 1 ? (index - 1) * 16 : 0
                                        }px`,
                                    }}
                                >
                                    {index > 0 ? (
                                        <span
                                            className={styles.taxonTree}
                                        ></span>
                                    ) : null}
                                </span>
                                <span>{host.rank}</span>
                                <span
                                    style={{
                                        left: `${
                                            data.length * 16 +
                                            data[data.length - 1].name.length +
                                            50
                                        }px`,
                                    }}
                                >
                                    <Link
                                        href={`/search[key]`}
                                        as={generateUrl({
                                            taxon_id: host.taxon_id,
                                        })}
                                    >
                                        {host.name}
                                    </Link>
                                    <span className={styles.ncbi}>
                                        <a
                                            target="_blank"
                                            href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${host.ncbi_taxid}`}
                                        >
                                            {" "}
                                            (taxId: {host.ncbi_taxid})
                                            <FontAwesomeIcon
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>{" "}
                                    </span>
                                </span>
                            </p>
                        ))}
                    </div>
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
