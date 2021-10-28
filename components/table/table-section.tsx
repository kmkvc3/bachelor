import Table from "./table";

export default function VirusTableSection({ searchMode, searchType }) {
  return (
    <div>
      {searchMode ? <p>Results</p> : <p>Most popular searches</p>}
      <Table searchType={searchType} />;
    </div>
  );
}
