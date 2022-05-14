import styles from "./Chart.module.css";
import { useEffect, useState } from "react";
import { getTopVirusStats } from "../../../Api";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import Select from "../components/Select";
import Spinner from "../components/Spinner";

export default function MostRepresentativeVirus() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [pickedOption, setPickedOption] = useState("family");
  const [options, setOptions] = useState(null);
  const [range, setRange] = useState(10);

  async function getStats(rank) {
    const res = await getTopVirusStats(rank, range);
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
            `</b><br>host count: ${
              this.point.y
            }<b style="font-size: 13px"> (${
              Math.round(this.point.percentage * 100) / 100
            }%) </b>`
          );
        },
      },
      subtitle: {
        text: "Click on pie slice to see virus-host interactions",
        style: { color: darkMode ? "#7f8994" : "#818181" },
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
  }, [pickedOption, range]);

  return (
    <div className={styles.wrapper}>
      <h4> Most abundant virus taxa</h4>
      <p>Ten most abundant virus taxonomic units (represented by the highest number of virus species) at the {pickedOption} level.</p>
      <div className={styles.select}>
        <Select
          options={["phylum", "class", "order", "family"]}
          placeholder={pickedOption}
          setPickedOption={setPickedOption}
        />
        <Select
          options={[3, 5, 10, 15]}
          placeholder={range}
          setPickedOption={setRange}
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
