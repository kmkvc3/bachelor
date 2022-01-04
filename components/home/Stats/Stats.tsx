import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <div className={styles.wrapper}>
        <div>
            <p>20.000</p>
            <p>Viruses</p>
        </div>
        <div>
            <p>12.134</p>
            <p>Hosts</p>
        </div>
        <div>
            <p>1.000.023</p>
            <p>Interactions</p>
        </div>
        <div>
            <p>12</p>
            <p>Updates per week </p>
        </div>
    </div>
  );
}
