import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/search/table/TableSection";
import SearchIllustration from "../components/search/Ilustrations/SearchIllustration";
import { getInteractions } from "../Api";
import { useEffect } from "react";
import { getDbDictonary } from "../Api";
import TableBottom from "../components/search/TableBottom/TableBottom";

export async function getServerSideProps(context) {
  const availableFilters = await getDbDictonary();
  return {
    props: { availableFilters },
  };
}

export default function Search({ availableFilters }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("viral");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [offset, setOffset] = useState(25);
  const [genome_database, setDatabase] = useState(null);
  const [evidence, setEvidence] = useState(null);
  const [assembly_level, setAssembly] = useState(null);
  const [molecule, setMolecule] = useState(null);
  const [sort, setSort] = useState(null);
  const [data, setData] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  useEffect(() => {
    if (query === "") return;
    requestData(query, type);
  }, [
    genome_database,
    query,
    evidence,
    assembly_level,
    molecule,
    sort,
    page,
    offset,
  ]);

  async function requestData(query, type) {
    setQuery(query);
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results: any = await getInteractions(
        query,
        type,
        genome_database,
        evidence,
        assembly_level,
        molecule,
        sort,
        page,
        offset
      );
      setData(results);
      setMaxPage(Math.floor(results.count / offset) + 1);
      setDataLoaded(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Search</title>
      </Head>
      <SearchSection
        setDatabase={setDatabase}
        setType={setType}
        setQuery={setQuery}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
        setPage={setPage}
        availableFilters={availableFilters}
      />
      {wasDataLoaded ? (
        <>
          <TableSection
            type={type}
            isDataLoaded={isDataLoaded}
            query={query}
            data={data}
          />
          <TableBottom
            page={page}
            maxPage={maxPage}
            setPage={setPage}
            offset={offset}
            setOffset={setOffset}
            data={data}
          />
        </>
      ) : (
        <SearchIllustration />
      )}
    </Layout>
  );
}
