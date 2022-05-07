import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation({ taxData, type, taxo }) {
  function generatePath(index: number) {
    return taxData.slice(2, index + 1).join("/");
  }

  function mapNames() {
    return taxData.map((x) => x.split("&")[1]);
  }

  return (
    <div className={styles.header}>
      {taxData.length === 2 ? (
        <>
          <span>Root</span>
          <span>/</span>
        </>
      ) : (
        <>
          <Link href={`/browse/${type}/${taxo}`}>Root</Link>
          <span>/</span>
        </>
      )}

      {mapNames().map((tax, index) => {
        if (index === taxData.length - 1 || taxData.length === 2) {
          return <a key={index}>{tax}</a>;
        } else {
          return (
            <>
              <Link
                key={index}
                href={`/browse/${type}/${taxo}/${generatePath(index)}/`}
              >
                <a>{tax}</a>
              </Link>
              {tax ? <span>/</span> : null}
            </>
          );
        }
      })}
    </div>
  );
}
