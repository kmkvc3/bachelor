import { useEffect, useState } from "react";
import { getBrowseData } from "../../Api";
import { toast } from "react-toastify";
import styles from "./BrowseSection.module.css";

export default function BrowseSection() {
  const [data, setData] = useState([]);
  const [db, setDb] = useState("viral");
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);
  const [stack, setStack] = useState(["Viruses"]);

  useEffect(() => {
    requestData("Viruses", db);
  }, []);

  const notify = () => toast("Something went wrong!");

  async function requestData(taxonomy: string, db: string) {
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      console.log("bah");
      const results: any = await getBrowseData(taxonomy, db);
      setData(results);
      setDataLoaded(true);
    } catch (error) {
      notify();
    }
  }

  return (
    <div>
      <div className={styles.description}>
        <h3>Browse</h3>
        <p>
          All of our database records filtered by hosts and viruses Click to
          expand
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.selection}>
          <p>Search by: </p>
          <p
            onClick={() => {
              setDb("viral");
              requestData("Viruses", "viral");
            }}
            className={db === "viral" ? styles.active : null}
          >
            Viruses
          </p>
          <p
            onClick={() => {
              setDb("host");
              requestData("Bacteria", "host");
            }}
            className={db === "host" ? styles.active : null}
          >
            Hosts
          </p>
        </div>
        <div className={styles.stack}>
          <div
            onClick={() => {
              if (stack.length === 0) return;
              requestData(stack[stack.length - 1], db);
              if (stack.length === 1) return;
              setStack(stack.slice(0, stack.length - 1));
            }}
          >
          </div>
          {stack.map((stack_tax, index) => (
            <p
              onClick={() => {
                requestData(stack_tax, "viral");
                setStack(stack.slice(0, index + 1));
              }}
            >
              {" " + stack_tax + " "}
            </p>
          ))}
        </div>
        <div className={styles.data}>
          {data.map((tax) => (
            <p
              onClick={() => {
                console.log(tax)
                requestData(tax.tax_name, "viral");
                setStack([...stack, tax.tax_name]);
              }}
            >
              {tax.tax_name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
