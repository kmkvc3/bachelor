import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHints } from "../../../Api";
import { useRouter } from 'next/router'

export default function Searchbar({ setType, setTaxonId, setPage }) {
  const [hintType, setHintsType] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchHints, setSearchHints] = useState([]);
  const router = useRouter()

  useEffect(()=>{
    const { taxon_id, type } = router.query
    if(taxon_id) {
      setTaxonId(taxon_id)
      setSearchContent("")
      setSearchbarActive(true)
    }
    if(type) {
      setHintsType(type as string)
      setType(type)
    }
  }, [])

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setSearchHints([]);
  }

  async function getSearchHints() {
    try {
      const hints: any = await getHints(searchContent, hintType);
      setSearchHints(hints)
    } catch (error) {
      console.log(error);
    }
  }

  function HintList({ children }) {
    return <div className={styles.hintList}>{children}</div>;
  }

  function HintElement({ item }) {
    return (
      <span
        onClick={() => {
          setSearchHints([]);
          setSearchContent(item.name);
          setTaxonId(item.taxon_id);
          setPage(1)
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
        searchHints.length > 0 ? `${styles.wrapper} ${styles.focused}` : styles.wrapper
      }
    >
      <div className={styles.searchField}>
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
            hintType == "virus" ? "Search viruses by name or taxonomy" : "Search hosts by name or taxonomy"
          }
        ></input>

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
              setHintsType("virus")
            }}
          >
            Virus
          </div>
          <div
            className={hintType == "host" ? styles.active : null}
            onClick={() => {
              if (hintType == "host") return;
              setType("host");
              setHintsType("host")
            }}
          >
            Host
          </div>
        </div>
      </div>

      {searchbarActive ? (
        <button className={styles.close} onClick={() => clearSearch()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : null}
    </div>
  );
}
