import styles from "./Record.module.css";
import { useEffect, useState } from "react";
import EventBus from "../../EventBus";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import BookmarkHandler from "../bookmarks/BookmarksHandler";

export default function Record({ data }) {
    const accession = data.virus_id;
    const [bookmark, setBookmark] = useState(null);
    useEffect(() => {
        loadBookmark();
        EventBus.on("remove-bookmark", () => {
            if (!BookmarkHandler.getBookmark(accession)) {
                BookmarkHandler.removeBookmark(accession);
                setBookmark(null);
            }
        });
    });
    function loadBookmark() {
        const localBookmark = BookmarkHandler.getBookmark(accession);
        if (localBookmark) setBookmark(localBookmark);
    }
    return (
        <div className={styles.wrapper}>
            <div>
                <img src="" alt="" />
                <div>
                    <p>{data.name}</p>
                    {data.synonymes.map((synonyme) => (
                        <span>{synonyme}</span>
                    ))}
                </div>
                <span
                    className={styles.bookmark}
                    onClick={() => {
                        if (bookmark) {
                            BookmarkHandler.removeBookmark(accession);
                            toast.success(
                                <div>
                                    <strong>{data.name}</strong> removed from
                                    bookmarks
                                </div>
                            );
                            setBookmark(null);
                        } else {
                            toast.success(
                                <div>
                                    <strong>{data.name}</strong> added to
                                    bookmarks
                                </div>
                            );
                            BookmarkHandler.setBookmark({
                                virus: data.name,
                                virus_id: data.virus_id,
                            });
                            loadBookmark();
                        }
                        EventBus.emit("add-bookmark");
                    }}
                >
                    {bookmark ? (
                        <FontAwesomeIcon icon={faBookmark} />
                    ) : (
                        <FontAwesomeIcon icon={farBookmark} />
                    )}
                </span>
            </div>
        </div>
    );
}
