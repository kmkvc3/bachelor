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
          <Link href={`/search?query=Escherichia coli&type=host`}>
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
            <div>Find the desired results</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circle}>3</div>
            <div>Save it for later by clicking on bookmark icon</div>
          </div>
        </div>
        <img
          src={
            router.pathname.includes("/browse")
              ? "../bookmarks-rafiki.svg"
              : "./bookmarks-rafiki.svg"
          }
          alt=""
        />
      </div>
    </div>
  );
}
