import styles from "./NoBookmarks.module.css";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function NoBookmarks({ setClose }) {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.desc}>
        Currently you have no bookmarks. To create bookmark, follow steps below
        or{" "}
        <strong
          onClick={() => {
            setClose();
            router.reload();
          }}
          className={styles.sample}
        >
          <Link href={`/search?taxon_id=19193`}>
             run sample query
          </Link>
        </strong>
      </div>
      <div className={styles.steps}>
        <div>
          <div className={styles.step}>
            <div className={styles.circle}>1</div>
            <div> Go to search section </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>2</div>
            <div>Type in searchbar</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>3</div>
            <div>Click the desired result from hints</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>4</div>
            <div>Pick record by clicking in the virus name</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>5</div>
            <div>Click bookmarks icon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
