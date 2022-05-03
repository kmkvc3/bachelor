import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getTopHostStats } from "../../../Api";
import Highcharts from "highcharts";
import highchartsTreemap from "highcharts/modules/treemap";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Spinner from "../components/Spinner";
import Select from "../components/Select";

export default function HostHighestNumber() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [options, setOptions] = useState(null);
  const [pickedOption, setPickedOption] = useState("genus");

  useEffect(() => {
    highchartsTreemap(Highcharts);
  }, []);
  async function getStats() {
    const res = await getTopHostStats(pickedOption);
    setOptions({
      chart: {
        type: "pie",
        backgroundColor: "transparent",
        borderColor: "transparent",
        zoomType: "x",
      },
      title: {
        text: "",
      },
      subtitle: {
        text: "Click on pie slice to see virus-host interactions",
        style: { color: darkMode ? "#7f8994" : "#818181" },
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
      plotOptions: {
        series: {
          cursor: "pointer",
          point: {
            events: {
              click: function () {
                if (this.taxon_id !== null) {
                  window.open(
                    `/search?type=host&taxon_id=${this.taxon_id}`,
                    "_blank"
                  );
                }
              },
            },
          },
        },
        column: {
          borderRadius: 0,
          pointPadding: -0.12,
          groupPadding: 0.1,
          borderWidth: 0.7,
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
          backgroundColor: "transparent",
          borderColor: "transparent",
          type: "pie",
          data: res.map((data) => {
            return {
              name: data.name,
              y: data.count,
              taxon_id: data.taxon_id,
            };
          }),
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
      <h4> Host taxa with the highest number of interactions</h4>
      <p>
        Proportion of viruses isolated on the top 15 most abundant host genera
        <br />(i.e. host genera infected by the highest number of viruses).
      </p>
      <div className={styles.select}>
        <Select
          options={["genus", "species", "family", "order", "class", "phylum"]}
          placeholder={pickedOption}
          setPickedOption={setPickedOption}
        />
      </div>
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
