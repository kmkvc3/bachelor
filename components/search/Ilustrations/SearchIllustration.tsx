import styles from "./SearchIllustration.module.css";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function SearchIllustration() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h1>Search</h1>
          <p>Viruses or hosts among thousands of our database records.</p>
        </div>
        <img src="../search-rafiki.svg"></img>
      </div>
      <div>
        <p   onClick={() => {
                router.replace(`/search?query=Escherichia coli&type=host`)
                setTimeout(()=>{
                  router.reload()
                }, 160)
              }} className={styles.sample}>
          <Link href={`/search?query=Escherichia coli&type=host`}>
            <a
            >
              Run sample query
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
