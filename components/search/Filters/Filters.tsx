import styles from "./Filters.module.css";
import { useState, useEffect } from "react";
import Select from "./Select/Select";
import { FiltersProps, SelectOption } from "./interfaces";

export default function Filters({
  availableFilters,
  setDatabase,
  setEvidence,
  setAssembly,
  setMolecule,
  setSort,
}: FiltersProps) {
  const [evidenceOptions, setEvidenceOptions] = useState([]);
  const [assemblyOptions, setAssemblyOptions] = useState([]);
  const [databaseOptions, setDatabaseOptions] = useState([]);
  const [genomeOptions, setGenomeOptions] = useState([]);
  const [sortOptions, setSortOptions] = useState([
    { value: "virus", label: "Viruses" },
    { value: "host", label: "Hosts" },
    { value: "assembly_level", label: "Assembly level" },
    { value: "genome_database", label: "Database" },
    { value: "genome_length", label: "Length" },
    { value: "molecule", label: "Molecule" },
  ]);

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
            placeholder={"Evidence"}
            setPickedOption={setEvidence}
            options={evidenceOptions}
          />
        ) : null}
        {assemblyOptions ? (
          <Select
            placeholder={"Assembly"}
            setPickedOption={setAssembly}
            options={assemblyOptions}
          />
        ) : null}
        {genomeOptions ? (
          <Select
            placeholder={"Genome type"}
            setPickedOption={setMolecule}
            options={genomeOptions}
          />
        ) : null}
        {databaseOptions ? (
          <Select
            placeholder={"Database"}
            setPickedOption={setDatabase}
            options={databaseOptions}
          />
        ) : null}
      </div>
      <Select
        placeholder={"Sort by"}
        setPickedOption={setSort}
        options={sortOptions}
        sort={true}
      />
    </div>
  );
}
