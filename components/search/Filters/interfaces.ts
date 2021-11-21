export interface SelectOption {
  value: string;
  label: string;
}

export interface AvailableFilters {
  assembly_level: Array<string>;
  evidence: Array<string>;
  genome_database: Array<string>;
  genome_type: Array<string>;
}

export interface FiltersProps {
  availableFilters: AvailableFilters;
  setDatabase: Function;
  setEvidence: Function;
  setAssembly: Function;
  setMolecule: Function;
  setSort: Function;
}
