import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import styles from "./ThemeButton.module.css"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === "light") {
      theme.dispatch({ type: "light" });
      document.body.classList.remove('dark');
    } else {
      theme.dispatch({ type: "dark" });
      document.body.classList.add('dark');
    }
  }, [])

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "light" });
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      theme.dispatch({ type: "dark" });
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button className={darkMode ? styles.wrapper : `${styles.wrapper} ${styles.active}` } onClick={onClick}>
      <FontAwesomeIcon icon={faSun}/>
      <FontAwesomeIcon icon={faMoon} />
      <div className={darkMode ? styles.circle : `${styles.circle} ${styles.active}` }></div>
    </button>
  );
}