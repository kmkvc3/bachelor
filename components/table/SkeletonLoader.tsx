import styles from "./SkeletonLoader.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({}) {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.header} count={1} />
      <Skeleton className={styles.row} count={10} />
    </div>
  );
}
