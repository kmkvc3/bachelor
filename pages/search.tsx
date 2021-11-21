import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/table/TableSection";
import SearchIllustration from "../components/search/Ilustrations/SearchIllustration";
import { getInteractions } from "../Api";
import { useEffect } from "react";
import Pagination from "../components/table/Pagination";
import Export from "../components/table/Export";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDbDictonary } from "../Api";

export async function getServerSideProps(context) {
  const availableFilters = await getDbDictonary();
  return {
    props: { availableFilters },
  }
}

export default function Search({ availableFilters }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("viral");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [genome_database, setDatabase] = useState(null);
  const [evidence, setEvidence] = useState(null);
  const [assembly_level, setAssembly] = useState(null);
  const [molecule, setMolecule] = useState(null);
  const [sort, setSort] = useState(null);
  const [data, setData] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  useEffect(()=>{
    console.log(availableFilters)
  })

  useEffect(() => {
    if (query === "") return;
    requestData(query, type);
  }, [genome_database, query, type, evidence, assembly_level, molecule, sort, page]);

  const notify = () => toast("Something went wrong!");

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
        sort,
        page
      );
      setData(results);
      setMaxPage(Math.floor(results.count / 25)+1)
      setDataLoaded(true);
    } catch (error) {
      notify()
    }
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <ToastContainer />
      <SearchSection
        setDatabase={setDatabase}
        setType={setType}
        setQuery={setQuery}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
        availableFilters={availableFilters}
      />
      {wasDataLoaded ? (
        <>
          <TableSection isDataLoaded={isDataLoaded} query={query} data={data} />
          <Pagination page={page} maxPage={maxPage} setPage={setPage} />
        </>
      ) : (
        <SearchIllustration />
      )}
    </Layout>
  );
}
