import { useEffect, useState } from "react";
import styles from "./BrowseElement.module.css";

export default function BrowseElement({tax, requestData, setStack, stack, db}) {
  const [data, setData] = useState([]);

  return (
    <div>
      <p
        onClick={() => {
          requestData(tax.tax_name, db);
          setStack([...stack, tax.tax_name]);
        }}
      >
        {tax.tax_name}
      </p>
    </div>
  );
}
