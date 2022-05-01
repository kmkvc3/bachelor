import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getVirusHostDB } from "../../../Api";
import Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Spinner from "../components/Spinner";

export default function InteractionsEvidence() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState(null);

  useEffect(() => {
    HC_more(Highcharts);
  }, []);
  async function getStats() {
    const res = await getVirusHostDB();
    setOptions({
      chart: {
        type: "bubble",
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      title: {
        text: "",
      },
      yAxis: {
        title: {
          text: "Interactions",
          style: { color: darkMode ? "#7f8994" : "#818181" },
        },
      },
      xAxis: {
          visible: false
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
              Math.round(this.point.count_percent * 100) / 100
            } %) </b>`
          );
        },
      },
      plotOptions: {
        series: {
            showInLegend: false, 
          dataLabels: {
            enabled: true,
            backgroundColor: "transparent",
            shadow: false,
            color: darkMode ? "#b4c1cf" : "#818181",
            format: "{point.name}",
            style: {
                textOutline: "none"
            }
          },
        },
      },
      series: [
        {
          data: res.map((data) => {
            return {
              name: data.name,
              y: data.count,
              z: data.count_percent,
              count_percent: data.count_percent,
            };
          }),
          sizeBy: "area",
        },
      ],
      credits: {
        enabled: false, // If we want to remove credits.
      },
    });
  }
  useEffect(() => {
    getStats();
  }, [darkMode]);

  return (
    <div className={styles.wrapper}>
      <h4>Number of interactions covered by source databases</h4>
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
