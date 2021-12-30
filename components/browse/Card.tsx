import { useEffect, useState } from "react";
import { getBrowseData } from "../../Api";
import { toast } from "react-toastify";
import styles from "./BrowseSection.module.css";

export default function Card({ taxonomy, db }) {
  const [data, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  useEffect(()=>{
    requestData()
  }, [])

  const notify = () => toast("Something went wrong!");

  async function requestData() {
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results: any = await getBrowseData(taxonomy, db);
      setData(results);
      setDataLoaded(true);
    } catch (error) {
      notify();
    }
  }

  return <div className={styles.wrapper}>
    {data.map((tax)=><div>{tax.tax_name}</div>)}
  </div>;
}
