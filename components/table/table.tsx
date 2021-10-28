import { useEffect } from "react";
import ListElement from "./list-element";

export default function Table({ searchType }) {
  return (
    <>
      <div>
        <span>Accession</span>
        {searchType == "virus" ? <span>Virus</span> : <span>Host</span>}
        <span>Evidence</span>
        <span>Length</span>
      </div>
      <ListElement accession="xm 1200" />
    </>
  );
}
