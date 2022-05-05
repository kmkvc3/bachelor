import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getAssemblyLevel } from "../../../Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Spinner from "../components/Spinner";

export default function AssemblyLevel() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState(null);
  async function getStats() {
    const res = await getAssemblyLevel();
    setOptions({
      chart: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        type: "bar",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      title: {
        text: "",
      },
      tooltip: {
        formatter: function () {
          return (
            'Genomes count: <b style="font-size: 13px">' +
            Highcharts.numberFormat(this.point.y, 0) +
            "</b> (<b style='font-size: 13px'>" +
            Math.round(this.point.percent * 100) / 100 +
            "%</b>)"
          );
        },
      },
      xAxis: {
        categories: ["Complete Genome", "unknown", "Contig", "Scaffold"],
        labels: {
          style: {
            color: darkMode ? "#7f8994" : "#818181",
          },
        },
        title: {
          text: null,
        },
      },
      yAxis: {
        title: {
          text: "Virus spieces",
          style: { color: darkMode ? "#7f8994" : "#818181" },
        },
        labels: {
          overflow: "justify",
        },
      },
      legend: {
        enabled: false,
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
          name: "",
          data: res.map((data) => {
            return {
              name: data.name,
              y: data.count,
              percent: data.count_percent,
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
      <h4> Genome assembly level</h4>
      <p>
        Number of viral genomes stratified by assembly level. Only
        representative genomes (for virus species) are shown.
      </p>
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
