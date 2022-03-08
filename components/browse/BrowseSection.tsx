import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import styles from "./BrowseSection.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function BrowseSection({ taxData }) {
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
    if (tax[1] === "ictv") {
      setTaxon("ictv");
    } else if (tax[1] === "gtdb") {
      setTaxon("gtdb");
    } else {
      setTaxon("ncbi");
    }
    setData(taxData);
    setPath(tax.join("/"));
  }, [taxData]);

  useEffect(() => {});

  return (
    <div>
      <div className={styles.description}>
        <div>
          <h3>Browse</h3>
          <p>
            All of our database records filtered by hosts and viruses. Discover
            the taxonomy by clicking on <strong> Tax name</strong>.
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.selection}>
          <div>
            <p>Search by: </p>
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
            <Link href={`/browse/${type}/alt`}>
              <a className={tax[1] === "alt" ? styles.active : null}>
               {type === "host" ? "GTDB" : "ICTV"} 
              </a>
            </Link>
            <Link href={`/browse/${type}/ncbi`}>
              <a className={tax[1] === "ncbi" ? styles.active : null}>
                NCBI
              </a>
            </Link>
          </div>
        </div>
        {tax.length === 1 || tax.length === 2 ? (
          <Header />
        ) : (
          <Navigation taxData={tax} type={tax[0]} taxo={tax[1]} />
        )}

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
                <span>{tax.interactions}</span>
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
