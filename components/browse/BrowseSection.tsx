import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import styles from "./BrowseSection.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function BrowseSection({ taxData }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [data, setData] = useState(taxData);
  const [path, setPath] = useState("");
  const [type, setType] = useState("");
  const [taxon, setTaxon] = useState("ncbi");
  const router = useRouter();
  const { tax } = router.query as any;

  useEffect(() => {
    if (tax[0] === "virus") {
      setType("virus");
    } else {
      setType("host");
    }
    if (tax[1] === "alt") {
      setTaxon("alt");
    } else if (tax[1] === "gtdb") {
      setTaxon("alt");
    } else {
      setTaxon("ncbi");
    }
    setData(taxData);
    setPath(tax.join("/"));
  }, [taxData]);

  return (
    <div>
      <div className={styles.description}>
        <div className={styles.welcome}>
          {tax[0] === "virus" ? (
            <img
              src={
                darkMode ? "/browse-virus-dark.svg" : "/browse-virus-light.svg"
              }
              alt=""
            />
          ) : (
            <img
              src={
                darkMode ? "/browse-host-dark.svg" : "/browse-host-light.svg"
              }
              alt=""
            />
          )}
          <p>
            Hierarchical exploration of virus-host interactions through virus or
            host taxonomies based on NCBI or ICTV/GTDB Taxonomy.
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.selection}>
          <div>
            <p>Browse by: </p>
            <Link href={`/browse/virus/${taxon}`}>
              <a className={tax[0] === "virus" ? styles.active : null}>
                Viruses
              </a>
            </Link>
            <Link href={`/browse/host/${taxon}`}>
              <a className={tax[0] === "host" ? styles.active : null}>Hosts</a>
            </Link>
          </div>
          <div>
            <p>Taxonomy: </p>
            <Link href={`/browse/${type}/ncbi`}>
              <a className={tax[1] === "ncbi" ? styles.active : null}>NCBI</a>
            </Link>
            <Link href={`/browse/${type}/alt`}>
              <a className={tax[1] === "alt" ? styles.active : null}>
                {type === "host" ? "GTDB" : "ICTV"}
              </a>
            </Link>
          </div>
        </div>
        {tax.length > 1 ? (
          <Navigation taxData={tax} type={tax[0]} taxo={tax[1]} />
        ) : null}
        <Header />

        {taxData.length ? (
          <div className={styles.data}>
            {data.map((tax) => (
              <div key={tax.taxon_id} className={styles.element}>
                {tax.has_children ? (
                  <span>
                    <Link href={`/browse/${path}/${tax.taxon_id}&${tax.name}`}>
                      <a> {tax.name}</a>
                    </Link>
                  </span>
                ) : (
                  <span>{tax.name}</span>
                )}

                <span>{tax.rank}</span>
                <span className={styles.interactions}>{tax.interactions}</span>
                <button className={styles.searchButton}>
                  <a
                    target="_blank"
                    href={`/search?taxon_id=${tax.taxon_id}&type=${type}`}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.notFound}>No more records</p>
        )}
      </div>
    </div>
  );
}
