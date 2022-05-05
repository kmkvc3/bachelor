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

    var categories = [
      1, 6, 12, 17, 23, 28, 34, 39, 45, 50, 56, 61, 67, 72, 78, 83, 89, 94, 100,
      105, 111, 116, 122, 127, 133, 138, 144, 149, 155, 160, 166, 171, 177, 182,
      188, 193, 199, 204, 210, 215, 221, 227, 232, 238, 243, 249, 254, 260, 265,
      271, 276, 282, 287, 293, 298, 304, 309, 315, 320, 326, 331, 337, 342, 348,
      353, 359, 364, 370, 375, 381, 386, 392, 397, 403, 408, 414, 419, 425, 430,
      436, 441, 447, 452, 458, 463, 469, 474, 480, 485, 491, 496, 502, 507, 513,
      518, 524, 529, 535, 540, 546, 551,
    ];
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
        categories,
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
          return (
            "Virus species: " +
            "<b>" +
            this.point.y +
            "</b>" +
            "<br/>" +
            "Genome size: " +
            "<b>" +
            this.point.x +
            " kb</b>" +
            "</b>"
          );
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
      <h4> Size of complete genomes</h4>
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
                <td>{stats.min.toLocaleString("en")} bp</td>
                <td>{stats.q1.toLocaleString("en")} bp</td>
                <td>{stats.median.toLocaleString("en")} bp</td>
                <td>{stats.q3.toLocaleString("en")} bp</td>
                <td>{stats.max.toLocaleString("en")} bp</td>
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
