import styles from "./StepByStep.module.css";

export default function StepByStep() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.line}></div>
        <div className={styles.step}>
            <div className={styles.circle}>1</div>
            <div>Choose if you want to search viruses or hosts</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.step}>
            <div className={styles.circle}>2</div>
            <div>If viruses, search them by taxID, otherwise taxonomy name</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.step}>
            <div className={styles.circle}>3</div>
            <div>Apply filters and sorting to make your search more specific</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.step}>
            <div className={styles.circle}>4</div>
            <div>Browse or export your results</div>
        </div>
    </div>
  );
}
