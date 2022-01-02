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
  const router = useRouter();
  const { tax } = router.query as any;

  useEffect(() => {
    if (tax[0] === "Viruses") {
      setType("viral");
    } else {
      setType("host");
    }
    setData(taxData);
    setPath(tax.join("/"));
  }, [taxData]);

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
        <img src="../../browse-rafiki.svg" alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.selection}>
          <p>Search by: </p>
          <Link href={`/browse/Viruses`}>
            <a className={tax[0] === "Viruses" ? styles.active : null}>
              Viruses
            </a>
          </Link>
          <Link href={`/browse/Bacteria`}>
            <a className={tax[0] === "Bacteria" ? styles.active : null}>
              Hosts
            </a>
          </Link>
        </div>
        {tax.length === 1 ? <Header /> : <Navigation taxData={tax} />}

        {taxData.length ? (
          <div className={styles.data}>
            {data.map((tax) => (
              <div key={tax.tax_id} className={styles.element}>
                <span>
                  <Link href={`/browse/${path}/${tax.tax_name}`}>
                    <a> {tax.tax_name}</a>
                  </Link>
                </span>
                <span>{tax.tax_rank}</span>
                <span>{tax.interactions}</span>
                <span>{tax.tax_id}</span>
                <button className={styles.searchButton}>
                  <a
                    target="_blank"
                    href={`/search?query=${tax.tax_name}&type=${type}`}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </button>
              </div>
            ))}
          </div>
        ) : <p className={styles.notFound}>No more records</p>}
      </div>
    </div>
  );
}
