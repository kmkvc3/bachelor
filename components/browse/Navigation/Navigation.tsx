import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation({ taxData }) {
  function generatePath(index: number) {
    return taxData.slice(0, index + 1).join("/");
  }
  return (
    <div className={styles.header}>
      {taxData.map((tax, index) => {
        if (index === taxData.length - 1) {
          return <a key={index}>{tax}</a>;
        } else {
          return (
            <>
              <Link key={index} href={`/browse/${generatePath(index)}/`}>
                <a> {tax}</a>
              </Link>
              <span>/</span>
            </>
          );
        }
      })}
    </div>
  );
}
