import { useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Searchbar({ setSearchType, setSearchMode }) {
  const [defaultSearch, setDefaultSearch] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
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
      </div>

      {searchbarActive ? (
        <button
          className={styles.close}
          onClick={()=>clearSearch()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : null}

      <div className={styles.buttons}>
        <div
          className={defaultSearch == "virus" ? styles.active : null}
          onClick={() => {
            if(defaultSearch == "virus") return
            setSearchType("virus");
            setSearchMode(false);
            setDefaultSearch("virus");
            clearSearch()
          }}
        >
          Virus
        </div>
        <div
          className={defaultSearch == "host" ? styles.active : null}
          onClick={() => {
            if(defaultSearch == "host") return
            setSearchType("host");
            setSearchMode(false);
            setDefaultSearch("host");
            clearSearch()
          }}
        >
          Host
        </div>
      </div>
    </div>
  );
}
