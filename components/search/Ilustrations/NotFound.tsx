import styles from "./NotFound.module.css";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function NotFound() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={styles.wrapper}>
            <img
                src={
                    darkMode
                        ? "./search-not-found-dark.svg"
                        : "./search-not-found-light.svg"
                }
                alt=""
            />
            <h3>Nothing found with these filters applied</h3>
        </div>
    );
}
