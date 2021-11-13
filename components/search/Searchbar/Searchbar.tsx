import { useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHints } from "../../../Api";

export default function Searchbar({ setType, setQuery }) {
  const [hintType, setHintsType] = useState("viral");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchHints, setSearchHints] = useState([]);

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setQuery("");
    setSearchHints([]);
  }

  async function getSearchHints() {
    try {
      const data: any = await getHints(searchContent, hintType);
      setSearchHints(data.hints)
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
          setSearchContent(item);
          setQuery(item);
        }}
        className={styles.hintElement}
      >
        {item}
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchContent !== "") {
              setSearchHints([]);
              setQuery(searchContent);
              // requestData(searchContent, hintType);
            }
          }}
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
            hintType == "viral" ? "Search viruses" : "Search hosts"
          }
        ></input>

        {searchHints.length > 0 ? (
          <HintList>
            {searchHints.map((item) => (
              <HintElement item={item} />
            ))}
          </HintList>
        ) : null}

        <div className={styles.buttons}>
          <div
            className={hintType == "viral" ? styles.active : null}
            onClick={() => {
              if (hintType == "viral") return;
              setType("viral");
              setHintsType("host")
              clearSearch();
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
              clearSearch();
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