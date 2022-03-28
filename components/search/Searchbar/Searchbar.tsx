import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHints } from "../../../Api";
import { useRouter } from "next/router";
import { generateUrl } from "../../../urlGenerator";
import Link from "next/link";

export default function Searchbar({ setType, setTaxonId, setPage }) {
  const [hintType, setHintsType] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchHints, setSearchHints] = useState([]);
  const router = useRouter();
  const { taxon_id, type } = router.query;

  useEffect(() => {
    if (taxon_id) {
      setTaxonId(taxon_id);
      setSearchContent("");
      setSearchbarActive(true);
    }
    if (type) {
      setHintsType(type as string);
    }
  }, []);

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setSearchHints([]);
  }

  async function getSearchHints() {
    try {
      const hints: any = await getHints(searchContent, hintType);
      setSearchHints(hints);
    } catch (error) {
      console.log(error);
    }
  }

  function HintList({ children }) {
    return <div className={styles.hintList}>{children}</div>;
  }

  function HintElement({ item }) {
    const newUrl = generateUrl({
      taxon_id: item.taxon_id,
    });
    return (
      <span
        onClick={() => {
          router.push(newUrl, undefined, { shallow: true });
          setSearchHints([]);
          setSearchContent(item.name);
          setTaxonId(item.taxon_id);
          setPage(1);
        }}
        className={styles.hintElement}
      >
        {item.name}
      </span>
    );
  }

  return (
    <div
      className={
        taxon_id
          ? `${styles.wrapper} ${styles.left}`
          : styles.wrapper
      }
    >
      <div
        className={
          searchHints.length > 0
            ? `${styles.searchField} ${styles.focused}`
            : styles.searchField
        }
      >
        <FontAwesomeIcon
          icon={faSearch}
          color={"#ffffff"}
          className={styles.searchIcon}
        />

        <input
          onChange={(e) => {
            setSearchContent(e.target.value);
            if (e.target.value !== "") {
              setSearchbarActive(true);
              getSearchHints();
            } else {
              setSearchbarActive(false);
              setSearchHints([]);
            }
          }}
          type="text"
          value={searchContent}
          placeholder={
            hintType == "virus"
              ? "Search viruses by taxonomic name"
              : "Search hosts by taxonomic name"
          }
        ></input>

        {searchbarActive ? (
          <button className={styles.close} onClick={() => clearSearch()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        ) : null}

        {searchHints.length > 0 ? (
          <HintList>
            {searchHints.map((item) => (
              <HintElement key={item} item={item} />
            ))}
          </HintList>
        ) : null}

        <div className={styles.buttons}>
          <div
            className={hintType == "virus" ? styles.active : null}
            onClick={() => {
              if (hintType == "virus") return;
              setType("virus");
              setHintsType("virus");
              setSearchContent("");
              setSearchbarActive(false);
              setSearchHints([]);
            }}
          >
            Virus
          </div>
          <div
            className={hintType == "host" ? styles.active : null}
            onClick={() => {
              if (hintType == "host") return;
              setType("host");
              setHintsType("host");
              setSearchContent("");
              setSearchbarActive(false);
              setSearchHints([]);
            }}
          >
            Host
          </div>
        </div>
      </div>
      {taxon_id ? (
        <button className={styles.clearAll}>
          <Link href={"/search"} shallow={true}>
            <p onClick={() => clearSearch()}>
              Clear <FontAwesomeIcon icon={faTimes} />
            </p>
          </Link>
        </button>
      ) : null}
    </div>
  );
}
