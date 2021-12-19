import styles from "./Bookmarks.module.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import BookmarksHandler from "../BookmarksHandler";
import EventBus from "../EventBus";

export default function Bookmarks() {
  const [open, setOpen] = useState(false)
  const [bookmarks, setBookmarks] = useState([])

  function getBookmarksFromStorage() {
    return JSON.parse(localStorage.getItem("accessions"))
  }

  function updateBookmarks() {
    const storedBookmarks = getBookmarksFromStorage()
    setBookmarks(storedBookmarks)
  }

  useEffect(()=>{
    const storedBookmarks = getBookmarksFromStorage()
    setBookmarks(storedBookmarks)
    BookmarksHandler.setAccessions(storedBookmarks)
    EventBus.on("add-bookmark", updateBookmarks)
  }, [])

  return (
    <div onClick={()=>{
      setOpen(true)
    }} className={styles.wrapper}>
      <Modal opened={open} setClose={setOpen}><div>x</div></Modal>
      <strong>{bookmarks.length}</strong>
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  );
}
