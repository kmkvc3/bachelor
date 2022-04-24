import styles from "./VirusTaxonomy.module.css";
import { useEffect, useState } from "react";
import { getTopVirusStats } from "../../../Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

export default function MostRepresentativeVirus() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState({});
  async function getStats() {
    const res = await getTopVirusStats();
    setOptions({
      chart: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      title: {
        text: "",
      },
      series: [
        {
          dataLabels: {
            enabled: true,
            color: darkMode ? "#7f8994" : "#818181" ,
            style: {
              textOutline: false,
            },
          },
          backgroundColor: "transparent",
          borderColor: "transparent",
          type: "pie",
          data: res.map((data) => {
            return {
              name: data.name,
              y: data.count,
            };
          }),
        },
      ],
    });
  }
  useEffect(() => {
    getStats();
  }, []);

  if (!options) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <h4> Top 10 most representative virus families</h4>
      <p>Longer description</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
