import styles from "./ListElement.module.css";

export default function ListElement({ tableData }) {
  return (
    <div className={styles.element}>
      <span>{tableData.accession}</span>
      <span>
        <strong>{tableData.spieceA}</strong>
      </span>
      <span>
        <strong>{tableData.spieceB}</strong>
      </span>
      <span>{tableData.evidence}</span>
      <span>{tableData.length}</span>
    </div>
  );
}
