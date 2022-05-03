import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getVirusGenomeDistro, getDistroSummary } from "../../../Api";
import Highcharts from "highcharts";
import highchartsBellcurve from "highcharts/modules/histogram-bellcurve";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Spinner from "../components/Spinner";
import Select from "../components/Select";

export default function VirusGenomeDistro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState(null);
  const [stats, setStats] = useState(null);
  const [pickedOption, setPickedOption] = useState("RefSeq");

  useEffect(() => {
    highchartsBellcurve(Highcharts);
  }, []);
  async function getStats() {
    const res = await getVirusGenomeDistro(pickedOption);
    const stats = await getDistroSummary(pickedOption);
    setStats(stats);

    setOptions({
      chart: {
        type: "column",
        backgroundColor: "transparent",
        borderColor: "transparent",
        zoomType: "x",
      },
      title: {
        text: "",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        style: { color: darkMode ? "#7f8994" : "#818181" },
      },
      xAxis: {
        title: {
          text: "Genome size (kb)",
          style: { color: darkMode ? "#7f8994" : "#818181" },
        },
        labels: {
          overflow: "justify",
        },
      },
      yAxis: {
        title: {
          text: "Virus species (count)",
          style: { color: darkMode ? "#7f8994" : "#818181" },
        },
      },
      tooltip: {
        formatter: function () {
          return "Virus species: " + "<b>" + this.point.y + "</b>";
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: -0.12,
          groupPadding: 0.1,
          borderWidth: 0.7,
        },
      },
      series: [
        {
          data: res.data,
        },
      ],
    });
  }
  useEffect(() => {
    getStats();
  }, [pickedOption]);

  if (!options) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <h4> Size of complete virus genomes</h4>
      <p>
        Size distribution of completely sequenced virus genomes. Only
        representative genomes (for virus species) are shown.
      </p>
      <div className={styles.select}>
        <Select
          options={["RefSeq", "GenBank", "RefSeq + GenBank"]}
          placeholder={pickedOption}
          setPickedOption={setPickedOption}
        />
      </div>
      {stats ? (
        <div className={styles.table}>
          <table className={styles.tg}>
            <thead>
              <tr>
                <th>Min</th>
                <th>1st quartile</th>
                <th>Median</th>
                <th>3rd quartile</th>
                <th>Max </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{stats.min} bp</td>
                <td>{stats.q1} bp</td>
                <td>{stats.median} bp</td>
                <td>{stats.q3} bp</td>
                <td>{stats.max} bp</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

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
