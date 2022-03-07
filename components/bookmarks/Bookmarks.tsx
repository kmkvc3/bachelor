import styles from "./Bookmarks.module.css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BookmarksHandler from "./BookmarksHandler";
import EventBus from "../../EventBus";
import NoBookmarks from "./NoBookmarks";

export default function Bookmarks({ setClose }) {
  const [bookmarks, setBookmarks] = useState([]);

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
    console.log(storedBookmarks)
  }, []);
  return (
    <>
      {bookmarks.length ? (
        <div className={styles.wrapper}>
          <div className={`${styles.row} ${styles.mainRow}`}>
            <p>Virus</p>
            <p>Host</p>
          </div>
          {bookmarks.map((bookmark) => (
            <div className={styles.row}>
              {bookmark.type === "viral" ? (
                <strong>{bookmark.virus}</strong>
              ) : (
                <p>{bookmark.virus}</p>
              )}
              {bookmark.type === "host" ? (
                <strong>{bookmark.host}</strong>
              ) : (
                <p>{bookmark.host}</p>
              )}
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
                <a
                  target="_blank"
                  href={
                    bookmark.type === "viral"
                      ? `/search?query=${bookmark.virus}&type=${bookmark.type}`
                      : `/search?query=${bookmark.host}&type=${bookmark.type}`
                  }
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.searchIcon}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoBookmarks setClose={setClose} />
      )}
    </>
  );
}
