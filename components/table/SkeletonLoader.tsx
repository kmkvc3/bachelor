import styles from "./SkeletonLoader.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({}) {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.header} baseColor="#f0f0f0" />
      <Skeleton className={styles.row} count={5} />
    </div>
  );
}
