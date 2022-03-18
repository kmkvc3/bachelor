import styles from "./Bookmarks.module.css";
import { faLocationArrow, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BookmarksHandler from "./BookmarksHandler";
import EventBus from "../../EventBus";
import NoBookmarks from "./NoBookmarks";
import Link from "next/dist/client/link";

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
    }, []);
    return (
        <>
            {bookmarks.length ? (
                <div className={styles.wrapper}>
                    <div className={`${styles.row} ${styles.mainRow}`}>
                        <p>Virus</p>
                    </div>
                    {bookmarks.map((bookmark) => (
                        <div className={styles.row}>
                            <p>{bookmark.virus}</p>
                            <div
                                className={styles.button}
                                onClick={() => {
                                    BookmarksHandler.removeBookmark(
                                        bookmark.virus_id
                                    );
                                    updateBookmarks();
                                    EventBus.emit("remove-bookmark");
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={styles.searchIcon}
                                />
                            </div>
                            <div className={styles.button}>
                                <Link
                                    href={`/virus/${bookmark.virus_id}`}
                                >
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        className={styles.searchIcon}
                                    />
                                </Link>
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
