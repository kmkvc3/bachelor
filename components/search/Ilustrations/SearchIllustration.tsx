import styles from "./SearchIllustration.module.css";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function SearchIllustration() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={styles.wrapper}>
      <img src={darkMode ? "/search-start-dark.svg" : "/search-start-light.svg"}alt="" />
      <div>
        <p>
          Search viruses and hosts. Start typing
          in the searchbar, then click on hint to get the results.
        </p>
      </div>
    </div>
  );
}
