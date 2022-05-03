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
        type: 'bar',
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
        formatter: function() {
            return 'Genomes count: <b style="font-size: 13px">' + Highcharts.numberFormat(this.point.y, 0) +'</b>';
        } 
    },
      xAxis: {
        visible: false,
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
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 200,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#fff',
      },
      series: res.map((data) => {
        return {
          dataLabels: {
            enabled: true,
            color: darkMode ? "#7f8994" : "#818181",
            style: {
              textOutline: false,
            },
          },
          name: data.name,
          data: [data.count],
        };
      }),

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
      <p>Number of viral genomes stratified by assembly level. Only representative genomes (for virus species) are shown.</p>
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
