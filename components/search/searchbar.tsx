import { useState } from "react";

export default function Searchbar({ setSearchType, setSearchMode }) {
  const [search, setSearch] = useState(false);
  return (
    <div>
      <input
        onClick={() => {
          setSearch(true);
          setSearchMode(true);
        }}
        type="text"
      ></input>
      <div
        onClick={() => {
          setSearchType("virus");
          setSearchMode(false);
        }}
      >
        Virus
      </div>
      <div
        onClick={() => {
          setSearchType("host");
          setSearchMode(false);
        }}
      >
        Host
      </div>
      {search ? (
        <button
          onClick={() => {
            setSearch(false);
            setSearchMode(false);
          }}
        >
          X
        </button>
      ) : null}
    </div>
  );
}
