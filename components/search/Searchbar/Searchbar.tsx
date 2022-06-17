import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHints } from "../../../Api";
import { useRouter } from "next/router";
import { generateUrl } from "../../../urlGenerator";
import Spinner from "./Spinner";

export default function Searchbar({ setTaxonId, setPage }) {
  const [hintType, setHintsType] = useState("virus");
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [isExact, setIsExact] = useState(false);
  const [isDelayed, setIsDelayed] = useState(true);
  const [timerOn, setIsTimerOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [searchHints, setSearchHints] = useState([]);
  const router = useRouter();
  const { taxon_id, type } = router.query;

  useEffect(() => {
    if (taxon_id) {
      setTaxonId(taxon_id);
      setSearchContent("");
    }
    if (type) {
      setHintsType(type as string);
    }
    if(searchContent) {
      setSearchbarActive(true);
    }
  }, []);

  useEffect(() => {
    if (searchHints.length === 0) return;
    const hideListAfterClick = () => setSearchHints([]);
    if (searchHints.length > 0) {
      document.addEventListener("click", hideListAfterClick);
    } else {
      document.removeEventListener("click", hideListAfterClick);
    }
    return () => document.removeEventListener("click", hideListAfterClick);
  }, [searchHints]);

  function clearSearch() {
    setSearchbarActive(false);
    setSearchContent("");
    setSearchHints([]);
  }

  let timer = setTimeout(() => {}, 1);

  useEffect(() => {
    if (!isDelayed) {
      requestSearchHints();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isDelayed]);

  async function getSearchHints(searchContent) {
    clearTimeout(timer);
    setIsLoaded(false)
    setIsDelayed(true);
    if (!timerOn) {
      timer = setTimeout(() => {
        setIsDelayed(false);
        setIsTimerOn(false);
      }, 420);
      setIsTimerOn(true);
    }
    setSearchContent(searchContent);
  }

  async function requestSearchHints() {
    try {
      const hints: any = await getHints(searchContent, hintType);
      setIsExact(hints.is_exact);
      setSearchHints(hints.results);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  function HintList({ children }) {
    return (
      <div className={styles.hintList}>
        <div>
          {isExact ? null : <i className={styles.didyou}>Did you mean?</i>}
        </div>
        <>{children}</>
      </div>
    );
  }

  function HintElement({ item }) {
    const name = item.name;

    const newUrl = generateUrl({
      taxon_id: item.taxon_id,
    });

    const firstHintLetter = item.name[0] ? item.name[0] : "";
    const firstSearchLetter = searchContent[0] ? searchContent[0] : "";

    const isUpper =
      firstHintLetter.toUpperCase() === firstSearchLetter.toUpperCase();
    const firstLetter = isUpper ? firstHintLetter : firstSearchLetter;

    const nname = item.name.replace(
      firstLetter + searchContent.substring(1),
      `<strong>${firstLetter + searchContent.substring(1)}</strong>`
    );

    return (
      <span
        onClick={() => {
          router.push(newUrl, undefined, { shallow: true });
          setSearchHints([]);
          setTaxonId(item.taxon_id);
          setSearchContent(name);
          setSearchbarActive(true);
          setPage(1);
        }}
        className={styles.hintElement}
      >
        <div>
          <p dangerouslySetInnerHTML={{ __html: nname }}></p>
          <div className={styles.secondaryData}>
            <i>
              {" "}
              {item.taxid
                ? `(taxid: ${item.taxid})`
                : hintType === "host"
                ? "GTDB"
                : "ICTV"}{" "}
            </i>
            <i> {item.ac ? `(ac: ${item.ac}) ` : null}</i>
            <i> {item.assembly ? `(assembly: ${item.assembly}) ` : null} </i>
          </div>
        </div>
      </span>
    );
  }

  return (
    <div
      className={taxon_id ? `${styles.wrapper} ${styles.left}` : styles.wrapper}
    >
      <div className={styles.wrapperForSpinner}>
        <div
          className={
            searchHints.length > 0
              ? `${styles.searchField} ${styles.focused}`
              : styles.searchField
          }
        >
          {!isLoaded ? <Spinner></Spinner> : null}

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
                getSearchHints(e.target.value);
              } else {
                setSearchbarActive(false);
                setSearchHints([]);
              }
            }}
            onClick={(e) => {
              if (searchContent !== "") {
                return;
              }
              if (searchHints.length === 0) {
                getSearchHints("");
              }
            }}
            type="text"
            value={searchContent}
            placeholder={
              hintType == "virus"
                ? "Start typing to look for viruses"
                : "Start typing to look for hosts"
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
                <HintElement key={item.taxon_id} item={item} />
              ))}
            </HintList>
          ) : null}

          <div className={styles.buttons}>
            <div
              className={hintType == "virus" ? styles.active : null}
              onClick={() => {
                if (hintType == "virus") return;
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

        <p className={styles.example}>
          {hintType === "host"
            ? "Example: Bacteria, Escherichia coli, Bacillales"
            : "Example: Herelleviridae, Gequatrovirus G4, NC_001421, GCF_000837025"}
        </p>
      </div>
      {/* {taxon_id ? (
        <button className={styles.clearAll}>
          <Link href={"search"}>
            <p onClick={() => clearSearch()}>Clear all</p>
          </Link>
        </button>
      ) : null} */}
    </div>
  );
}
