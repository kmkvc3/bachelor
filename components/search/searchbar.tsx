import { useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Searchbar({ setSearchType, setSearchMode }) {
  const [search, setSearch] = useState(false);
  const [defaultSearch, setDefaultSearch] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  return (
    <div
      className={
        searchbarActive ? `${styles.wrapper} ${styles.focused}` : styles.wrapper
      }
    >
      <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />

      <input
        onClick={() => {
          setSearch(true);
          setSearchMode(true);
          setSearchbarActive(true);
        }}
        type="text"
        placeholder={
          defaultSearch == "virus" ? "Search viruses" : "Search hosts"
        }
      ></input>

      {search ? (
        <button
          className={styles.close}
          onClick={() => {
            setSearch(false);
            setSearchMode(false);
            setSearchbarActive(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : null}

      <div className={styles.buttons}>
        <div
          className={defaultSearch == "virus" ? styles.active : null}
          onClick={() => {
            setSearchType("virus");
            setSearchMode(false);
            setDefaultSearch("virus");
          }}
        >
          Virus
        </div>
        <div
          className={defaultSearch == "host" ? styles.active : null}
          onClick={() => {
            setSearchType("host");
            setSearchMode(false);
            setDefaultSearch("host");
          }}
        >
          Host
        </div>
      </div>
    </div>
  );
}
