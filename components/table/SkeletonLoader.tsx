import styles from "./SkeletonLoader.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function SkeletonLoader({}) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={styles.wrapper}>
      <SkeletonTheme
        baseColor={darkMode ? "#2d333b" : "#f0f0f0"}
        highlightColor={darkMode ? "#3d4958" : "#f7f7f7"}
      >
        <Skeleton className={styles.header} count={1} />
        <Skeleton className={styles.row} count={13} />
      </SkeletonTheme>
    </div>
  );
}
