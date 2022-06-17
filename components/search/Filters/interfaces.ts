export interface SelectOption {
  value: string;
  label: string;
}

export interface AvailableFilters {
  assembly_level: {
    name: string
    values: Array<string>
  }
  evidence: {
    name: string
    values: Array<string>
  }
  // genome_database: Array<string>;
  genome_type: {
    name: string
    values: Array<string>
  }

  genome_length: {
    name: string
    values: Array<string>
  }
}

export interface FiltersProps {
  availableFilters: AvailableFilters;
  // setDatabase: Function;
  setEvidence: Function;
  setSize: Function;
  setAssembly: Function;
  setMolecule: Function;
  setSort: Function;
  setPage: Function;
}
