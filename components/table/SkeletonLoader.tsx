import styles from "./SkeletonLoader.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({}) {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.row} count={7} />
    </div>
  );
}
