import { useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func } from "./Api";

function HintList({ children }) {
  return <div className={styles.hintList}>{children}</div>;
}

function HintElement({ item }) {
  return <span className={styles.hintElement}>{item}</span>;
}

export default function Searchbar({ setSearchType, setSearchMode }) {
  const [defaultSearch, setDefaultSearch] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchHints, setSearchHints] = useState([]);

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setSearchHints([])
  }

  async function getSearchHints() {
    try {
      const data = await func();
      setSearchHints(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={
        searchbarActive ? `${styles.wrapper} ${styles.focused}` : styles.wrapper
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
            getSearchHints();
            if (e.target.value != "") {
              setSearchMode(true);
              setSearchbarActive(true);
            } else {
              setSearchMode(false);
              setSearchbarActive(false);
            }
          }}
          type="text"
          value={searchContent}
          placeholder={
            defaultSearch == "virus" ? "Search viruses" : "Search hosts"
          }
        ></input>

        {searchHints.length > 0
          ? <HintList>
              {searchHints.map((item) => <HintElement item={item} />)}
          </HintList>
          : null}
      </div>

      {searchbarActive ? (
        <button className={styles.close} onClick={() => clearSearch()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : null}

      <div className={styles.buttons}>
        <div
          className={defaultSearch == "virus" ? styles.active : null}
          onClick={() => {
            if (defaultSearch == "virus") return;
            setSearchType("virus");
            setSearchMode(false);
            setDefaultSearch("virus");
            clearSearch();
          }}
        >
          Virus
        </div>
        <div
          className={defaultSearch == "host" ? styles.active : null}
          onClick={() => {
            if (defaultSearch == "host") return;
            setSearchType("host");
            setSearchMode(false);
            setDefaultSearch("host");
            clearSearch();
          }}
        >
          Host
        </div>
      </div>
    </div>
  );
}
