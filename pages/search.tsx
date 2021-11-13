import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/table/TableSection";
import SearchIllustration from "../components/search/Ilustrations/SearchIllustration";
import { getInteractions } from "../Api";
import { useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("viral");
  const [page, setPage] = useState(1);
  const [genome_database, setDatabase] = useState(null);
  const [evidence, setEvidence] = useState(null);
  const [assembly_level, setAssembly] = useState(null);
  const [molecule, setMolecule] = useState(null);
  const [data, setData] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  useEffect(() => {
    if (query === "") return;
    requestData(query, type);
  }, [genome_database, query, type, evidence, assembly_level, molecule]);

  async function requestData(query, type) {
    setQuery(query);
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results = await getInteractions(
        query,
        type,
        genome_database,
        evidence,
        assembly_level,
        molecule,
        page
      );
      setData(results);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <SearchSection
        setDatabase={setDatabase}
        setType={setType}
        setQuery={setQuery}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
      />
      {wasDataLoaded ? (
        <>
          <TableSection isDataLoaded={isDataLoaded} query={query} data={data} />
          <button
            onClick={() => {
              requestData;
            }}
          >
            next
          </button>
          <button>back</button>
        </>
      ) : (
        <SearchIllustration />
      )}
    </Layout>
  );
}
