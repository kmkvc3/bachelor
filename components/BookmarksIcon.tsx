import styles from "./BookmarksIcon.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import BookmarksHandler from "../BookmarksHandler";
import BookmarksContent from "./Bookmarks";
import EventBus from "../EventBus";

export default function Bookmarks() {
  const [open, setOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  function getBookmarksFromStorage() {
    return JSON.parse(localStorage.getItem("accessions"));
  }

  function updateBookmarks() {
    const storedBookmarks = getBookmarksFromStorage();
    if(storedBookmarks) {
      setBookmarks(storedBookmarks);
    } else {
      setBookmarks([])
    }
  }

  useEffect(() => {
    BookmarksHandler.setAccessions();
    const storedBookmarks = getBookmarksFromStorage();
    if(storedBookmarks) {
      setBookmarks(storedBookmarks);
    } else {
      setBookmarks([])
    }
    EventBus.on("add-bookmark", updateBookmarks);
    EventBus.on("remove-bookmark", updateBookmarks)
  }, []);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className={styles.wrapper}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <div className={styles.count}>{bookmarks.length}</div>
      </div>
      {open ? (
        <Modal title="Bookmarks" opened={open} setClose={setOpen}>
          <BookmarksContent />
        </Modal>
      ) : null}
    </div>
  );
}
