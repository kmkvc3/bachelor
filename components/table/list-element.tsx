export default function ListElement({ accession, spieceA, spieceB, evidence, length}) {
  return (
    <div>
        <span>{accession}</span>
        <span>{spieceA}</span>
        <span>{spieceB}</span>
        <span>{evidence}</span>
        <span>{length}</span>
    </div>
  );
}