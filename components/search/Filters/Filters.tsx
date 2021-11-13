import styles from "./Filters.module.css";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";

interface SelectOption {
  value: string | false;
  label: string;
}

interface AvailableFilters {
  assembly_level: Array<string>;
  evidence: Array<string>;
  genome_database: Array<string>;
  genome_type: Array<string>;
}

interface FiltersProps {
  availableFilters: AvailableFilters;
  setDatabase: Function;
  setEvidence: Function;
  setAssembly: Function;
  setMolecule: Function;
}

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    height: "36px",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "3px",
    fontSize: "12px",
    padding: "0 0.7rem",
    border: "1px solid #d3d2d2",
    boxShadow: "none",
    height: "36px",
    minHeight: "36px",
    "&:hover": {
      border: "1px solid #505050",
      cursor: "pointer",
    },
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "36px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  dropdownIndicator: (state) => ({
    display: "none",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  clearIndicator: (state) => ({
    margin: "1.22rem 0rem 1rem 0rem",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "36px",
  }),
};

export default function Filters({
  availableFilters,
  setDatabase,
  setEvidence,
  setAssembly,
  setMolecule
}: FiltersProps) {
  const [evidenceOptions, setEvidenceOptions] = useState([]);
  const [assemblyOptions, setAssemblyOptions] = useState([]);
  const [databaseOptions, setDatabaseOptions] = useState([]);
  const [genomeOptions, setGenomeOptions] = useState([]);

  useEffect(() => {
    let evidenceOptions: Array<SelectOption> = availableFilters.evidence.map(
      (filter) => {
        return { value: filter, label: filter };
      }
    );
    setEvidenceOptions(evidenceOptions);
    let assemblyOptions: Array<SelectOption> =
      availableFilters.assembly_level.map((filter) => {
        return { value: filter, label: filter };
      });
    setAssemblyOptions(assemblyOptions);
    let databaseOptions: Array<SelectOption> =
      availableFilters.genome_database.map((filter) => {
        return { value: filter, label: filter };
      });
    setDatabaseOptions(databaseOptions);
    let genomeOptions: Array<SelectOption> = availableFilters.genome_type.map(
      (filter) => {
        return { value: filter, label: filter };
      }
    );
    setGenomeOptions(genomeOptions);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {evidenceOptions ? (
          <Select
            className={styles.select}
            isClearable={true}
            onChange={(e) => {
              if (e !== null) setEvidence(e.value);
              else setEvidence("");
            }}
            isSearchable={false}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#f0f0f0",
                primary50: "#f0f0f0",
                primary: "#4c5075",
              },
            })}
            placeholder={"Evidence"}
            options={evidenceOptions}
          />
        ) : null}

        {assemblyOptions ? (
          <Select
            className={styles.select}
            isClearable={true}
            isSearchable={false}
            onChange={(e) => {
              if (e !== null) setAssembly(e.value);
              else setAssembly("");
            }}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#f0f0f0",
                primary50: "#f0f0f0",
                primary: "#4c5075",
              },
            })}
            placeholder={"Assembly level"}
            options={assemblyOptions}
          />
        ) : null}

        {genomeOptions ? (
          <Select
            className={styles.select}
            isClearable={true}
            isSearchable={false}
            onChange={(e) => {
              if (e !== null) setMolecule(e.value);
              else setMolecule("");
            }}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#f0f0f0",
                primary50: "#f0f0f0",
                primary: "#4c5075",
              },
            })}
            placeholder={"Genome type"}
            options={genomeOptions}
          />
        ) : null}

        {databaseOptions ? (
          <Select
            className={styles.select}
            isClearable={true}
            isSearchable={false}
            onChange={(e) => {
              if (e !== null) setDatabase(e.value);
              else setDatabase("");
            }}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#f0f0f0",
                primary50: "#f0f0f0",
                primary: "#4c5075",
              },
            })}
            placeholder={"Database"}
            options={databaseOptions}
          />
        ) : null}
      </div>
      <button>
        <p>Sort by</p>
      </button>
    </div>
  );
}
