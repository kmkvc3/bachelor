import Table from "./table";

export default function HostTableSection({ searchMode, searchType }) {
  return (
    <div>
      {searchMode ? <p>Results</p> : <p>Most popular searches</p>}
      <Table searchType={searchType} />;
    </div>
  );
}
