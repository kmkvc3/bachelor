import Searchbar from "./searchbar";

export default function SearchSection({ setSearchType, setSearchMode }) {
    return (
      <Searchbar setSearchType={setSearchType} setSearchMode={setSearchMode} />
    );
  }