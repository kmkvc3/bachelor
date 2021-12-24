import styles from "./Bookmarks.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BookmarksHandler from "../BookmarksHandler";
import EventBus from "../EventBus";
import NoBookmarks from "./NoBookmarks";
import { useRouter } from "next/router";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const router = useRouter();

  function getBookmarksFromStorage() {
    return JSON.parse(localStorage.getItem("accessions"));
  }

  function updateBookmarks() {
    const storedBookmarks = getBookmarksFromStorage();
    setBookmarks(storedBookmarks);
  }

  useEffect(() => {
    const storedBookmarks = getBookmarksFromStorage();
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {bookmarks.length ? (
        <div className={`${styles.row} ${styles.mainRow}`}>
          <p>Accession</p>
          <p>Virus</p>
          <p>Host</p>
        </div>
      ) : (
        <NoBookmarks />
      )}
      {bookmarks.map((bookmark) => (
        <div className={styles.row}>
          <p>{bookmark.accession}</p>
          <p>{bookmark.virus}</p>
          <p>{bookmark.host}</p>
          <div
            className={styles.button}
            onClick={() => {
              BookmarksHandler.removeBookmark(bookmark.accession);
              updateBookmarks();
              EventBus.emit("remove-bookmark");
            }}
          >
            <FontAwesomeIcon icon={faTimes} className={styles.searchIcon} />
          </div>
          <div className={styles.button}>
            <a target="_blank" href={`${router.basePath}?query=${bookmark.virus}`}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
