import Searchbar from "./Searchbar";
import FilterButton from "./FilterButton";
import styles from "./SearchSection.module.css";
import HelpButton from "./HelpButton";
import { useState } from "react";
import Filters from "./Filters";
import AnimateHeight from "react-animate-height";

export default function SearchSection({ setSearchType, setSearchMode }) {
  const [visibleFilters, setVisibleFilters] = useState(false);
  function showFilters() {
    setVisibleFilters(!visibleFilters);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <FilterButton setVisibleFilters={showFilters} />
        <Searchbar
          setSearchType={setSearchType}
          setSearchMode={setSearchMode}
        />
        <HelpButton />
      </div>
      <AnimateHeight easing={"ease-in-out"} duration={150} height={!visibleFilters ? 0 : "auto"}>
        <Filters />
      </AnimateHeight>
    </div>
  );
}
