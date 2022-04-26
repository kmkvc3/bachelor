import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getTopVirusStats } from "../../../Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Select from "../components/Select";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";

export default function MostRepresentativeVirus() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [pickedOption, setPickedOption] = useState("family");
  const [options, setOptions] = useState(null);

  async function getStats(rank) {
    const res = await getTopVirusStats(rank);
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
            `</b><br>virus count: ${this.point.y} <b style="font-size: 13px"> (${
              Math.round(this.point.percentage * 100) / 100
            } %) </b>`
          );
        },
      },
      series: [
        {
          cursor: "pointer",
          point: {
            events: {
              click: function () {
                if (this.taxon_id !== null) {
                  window.open(
                    `/search?type=virus&taxon_id=${this.taxon_id}`,
                    "_blank"
                  );
                }
              },
            },
          },
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
      credits: {
        enabled: false, // If we want to remove credits.
      },
    });
  }
  useEffect(() => {
    getStats(pickedOption);
  }, [pickedOption]);

  return (
    <div className={styles.wrapper}>
      <h4> Top 10 most representative virus {pickedOption}</h4>
      <p>Longer description</p>
      <div className={styles.select}>
        <Select
          options={["phylum", "class", "order", "family"]}
          placeholder={pickedOption}
          setPickedOption={setPickedOption}
        />
      </div>
      {options ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
