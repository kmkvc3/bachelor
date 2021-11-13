import ListElement from "./ListElement";
import styles from "./ListElement.module.css";

export default function Table({ data }) {
  return (
    <>
      <div className={`${styles.element} ${styles.header}`}>
        <span>Accession</span>
        <span>Virus</span>
        <span>Host</span>
        <span>Evidence</span>
        <span>Genome Type</span>
        <span>Length</span>
      </div>
      <div>
        {data.results.map((data) => (
          <ListElement tableData={data} />
        ))}
      </div>
    </>
  );
}
