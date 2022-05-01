import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getVirusGenomeSource } from "../../../Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Spinner from "../components/Spinner";

export default function VirusGenomeSource() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState(null);

  async function getStats() {
    const res = await getVirusGenomeSource();
    setOptions({
      chart: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      title: {
        text: "",
      },
      tooltip: {
        formatter: function () {
          return (
            '<span style="color:' +
            this.point.color +
            '">\u25CF</span> <b>' +
            this.point.name +
            `</b><br>virus count: ${
              this.point.y
            } <b style="font-size: 13px"> (${
              Math.round(this.point.percentage * 100) / 100
            } %) </b>`
          );
        },
      },
      series: [
        {
          dataLabels: {
            enabled: true,
            color: darkMode ? "#7f8994" : "#818181",
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
      credits: {
        enabled: false,
      },
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
      <h4>Virus genome source</h4>
      <p>Longer description</p>
      <div>
        {options ? (
          <HighchartsReact highcharts={Highcharts} options={options} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
