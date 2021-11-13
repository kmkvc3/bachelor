import { useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func } from "../../../Api";

export default function Searchbar({ setSearchType, requestData }) {
  const [defaultSearch, setDefaultSearch] = useState("Viruses");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchHints, setSearchHints] = useState([]);

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setSearchHints([]);
  }

  async function getSearchHints() {
    try {
      const data: any = await func();
      setSearchHints(data);
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
          requestData(item);
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
            if (e.key === "Enter") {
              setSearchHints([]);
              requestData(searchContent);
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
            defaultSearch == "Viruses" ? "Search viruses" : "Search hosts"
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
            className={defaultSearch == "Viruses" ? styles.active : null}
            onClick={() => {
              if (defaultSearch == "Viruses") return;
              setSearchType("Viruses");
              setDefaultSearch("Viruses");
              clearSearch();
            }}
          >
            Virus
          </div>
          <div
            className={defaultSearch == "Hosts" ? styles.active : null}
            onClick={() => {
              if (defaultSearch == "Hosts") return;
              setSearchType("Hosts");
              setDefaultSearch("Hosts");
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
