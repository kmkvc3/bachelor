import styles from "./Filters.module.css";
import { useState, useEffect } from "react";
import Select from "./Select/Select";
import DisplayedFilter from "./DisplayedFilter/DisplayedFilter";
import SortSelect from "./Select/SortSelect";
import { FiltersProps, SelectOption } from "./interfaces";

export default function Filters({
  availableFilters,
  setEvidence,
  setAssembly,
  setMolecule,
  setSort,
  setPage
}: FiltersProps) {
  const [evidenceOptions, setEvidenceOptions] = useState([]);
  const [assemblyOptions, setAssemblyOptions] = useState([]);
  const [genomeOptions, setGenomeOptions] = useState([]);
  const [evidenceName, setEvidenceName] = useState("");
  const [assemblyName, setAssemblyName] = useState("");
  const [genomeName, setGenomeName] = useState("");
  const [sortOptions, setSortOptions] = useState([
    { value: "virus", label: "Viruses" },
    { value: "host", label: "Hosts" },
    { value: "assembly_level", label: "Assembly level" },
    { value: "genome_length", label: "Length" },
    { value: "molecule", label: "Molecule" },
  ]);

  const [evidenceFilters, setEvidenceFilters] = useState([]);
  const [assemblyFilters, setAssemblyFilters] = useState([]);
  const [genomeFilters, setGenomeFilters] = useState([]);
  const [filtersToDisplay, setFiltersToDisplay] = useState([]);

  function addEvidenceFilter(filterToAdd: string) {
    if (evidenceFilters.includes(filterToAdd)) return;

    evidenceFilters.push(filterToAdd);
    filtersToDisplay.push({
      filter: filterToAdd,
      type: "evidence",
    });

    setEvidence([...evidenceFilters]);
    setEvidenceFilters([...evidenceFilters]);
    setFiltersToDisplay([...filtersToDisplay]);
  }

  function removeEvidenceFilter(filterToRemove: string) {
    setEvidence([
      ...evidenceFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setEvidenceFilters([
      ...evidenceFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setFiltersToDisplay([
      ...filtersToDisplay.filter(
        (displayFiler) => displayFiler.filter !== filterToRemove
      ),
    ]);
  }

  function addAssemblyFilter(filterToAdd: string) {
    if (assemblyFilters.includes(filterToAdd)) return;

    assemblyFilters.push(filterToAdd);
    filtersToDisplay.push({
      filter: filterToAdd,
      type: "assembly",
    });

    setAssembly([...assemblyFilters]);
    setAssemblyFilters([...assemblyFilters]);
    setFiltersToDisplay([...filtersToDisplay]);
  }

  function removeAssemblyFilter(filterToRemove: string) {
    setAssembly([
      ...assemblyFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setAssemblyFilters([
      ...assemblyFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setFiltersToDisplay([
      ...filtersToDisplay.filter(
        (displayFiler) => displayFiler.filter !== filterToRemove
      ),
    ]);
  }

  // function addDatabaseFilter(filterToAdd: string) {
  //   if (databaseFilters.includes(filterToAdd)) return;

  //   databaseFilters.push(filterToAdd);
  //   filtersToDisplay.push({
  //     filter: filterToAdd,
  //     type: "database",
  //   });

  //   setDatabase([...databaseFilters]);
  //   setDatabaseFilters([...databaseFilters]);
  //   setFiltersToDisplay([...filtersToDisplay]);
  // }

  // function removeDatabaseFilter(filterToRemove: string) {
  //   setDatabase([
  //     ...databaseFilters.filter((filter) => filter !== filterToRemove),
  //   ]);
  //   setDatabaseFilters([
  //     ...databaseFilters.filter((filter) => filter !== filterToRemove),
  //   ]);
  //   setFiltersToDisplay([
  //     ...filtersToDisplay.filter(
  //       (displayFiler) => displayFiler.filter !== filterToRemove
  //     ),
  //   ]);
  // }

  function addGenomeFilter(filterToAdd: string) {
    if (genomeFilters.includes(filterToAdd)) return;

    genomeFilters.push(filterToAdd);
    filtersToDisplay.push({
      filter: filterToAdd,
      type: "genome",
    });

    setMolecule([...genomeFilters]);
    setGenomeFilters([...genomeFilters]);
    setFiltersToDisplay([...filtersToDisplay]);
  }

  function removeGenomeFilter(filterToRemove: string) {
    setMolecule([
      ...genomeFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setGenomeFilters([
      ...genomeFilters.filter((filter) => filter !== filterToRemove),
    ]);
    setFiltersToDisplay([
      ...filtersToDisplay.filter(
        (displayFiler) => displayFiler.filter !== filterToRemove
      ),
    ]);
  }

  function returnRemoveFilter(filterType: string) {
    switch (filterType) {
      case "evidence":
        return removeEvidenceFilter;
      case "assembly":
        return removeAssemblyFilter;
      // case "database":
      //   return removeDatabaseFilter;
      case "genome":
        return removeGenomeFilter;
    }
  }

  useEffect(() => {
    let evidenceOptions: Array<SelectOption> = availableFilters.evidence.values.map(
      (filter) => {
        return { value: filter, label: filter };
      }
    );
    setEvidenceName(availableFilters.evidence.name)
    setEvidenceOptions(evidenceOptions);
    let assemblyOptions: Array<SelectOption> =
      availableFilters.assembly_level.values.map((filter) => {
        return { value: filter, label: filter };
      });
    setAssemblyName(availableFilters.assembly_level.name)
    setAssemblyOptions(assemblyOptions);
    // let databaseOptions: Array<SelectOption> =
    //   availableFilters.genome_database.map((filter) => {
    //     return { value: filter, label: filter };
    //   });
    // setDatabaseOptions(databaseOptions);
    let genomeOptions: Array<SelectOption> = availableFilters.genome_type.values.map(
      (filter) => {
        return { value: filter, label: filter };
      }
    );
    setGenomeName(availableFilters.genome_type.name)
    setGenomeOptions(genomeOptions);
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          {evidenceOptions ? (
            <Select
              placeholder={evidenceName}
              setPickedOption={addEvidenceFilter}
              setPage={setPage}
              options={evidenceOptions}
            />
          ) : null}
          {assemblyOptions ? (
            <Select
              placeholder={assemblyName}
              setPickedOption={addAssemblyFilter}
              setPage={setPage}
              options={assemblyOptions}
            />
          ) : null}
          {genomeOptions ? (
            <Select
              placeholder={genomeName}
              setPickedOption={addGenomeFilter}
              setPage={setPage}
              options={genomeOptions}
            />
          ) : null}
          {/* {databaseOptions ? (
            <Select
              placeholder={"Database"}
              setPickedOption={addDatabaseFilter}
              setPage={setPage}
              options={databaseOptions}
            />
          ) : null} */}
        </div>
        <SortSelect
          placeholder={"Sort by"}
          setPickedOption={setSort}
          options={sortOptions}
          sort={true}
        />
      </div>
      <div className={styles.displayedFilters}>
        {filtersToDisplay.map((filter) => (
          <DisplayedFilter
            filterToDisplay={filter.filter}
            removeFilter={returnRemoveFilter(filter.type)}
            key={filter.filter}
          />
        ))}
      </div>
    </div>
  );
}
