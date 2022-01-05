import styles from "./Video.module.css";

export default function Video() {
  return (
    <div className={styles.wrapper}>
        <h2>Watch the video</h2>
        <div className={styles.video}></div>
    </div>
  );
}
