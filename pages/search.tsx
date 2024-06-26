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
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const availableFilters = await getDbDictonary();
  return {
    props: { availableFilters },
  };
}

export default function Search({ availableFilters }) {
  const [taxonId, setTaxonId] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [offset, setOffset] = useState(25);
  const [evidence, setEvidence] = useState(null);
  const [assembly_level, setAssembly] = useState(null);
  const [molecule, setMolecule] = useState(null);
  const [size, setSize] = useState(null);
  const [sort, setSort] = useState(null);
  const [data, setData] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);
  const router = useRouter();
  const { taxon_id } = router.query as any;

  useEffect(() => {
    if (taxonId === "") return;
    requestData(taxonId);
  }, [taxonId, evidence, assembly_level, molecule, size, sort, page, offset]);

  async function requestData(taxon_id) {
    setTaxonId(taxon_id);
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results: any = await getInteractions(
        taxon_id,
        evidence,
        assembly_level,
        molecule,
        size,
        sort,
        page,
        offset
      );
      setData(results);
      setMaxPage(Math.floor(results.count / offset) + 1);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Search | PHD</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <SearchSection
        setTaxonId={setTaxonId}
        setEvidence={setEvidence}
        setAssembly={setAssembly}
        setMolecule={setMolecule}
        setSort={setSort}
        setSize={setSize}
        setPage={setPage}
        availableFilters={availableFilters}
      />
      {wasDataLoaded && taxon_id ? (
        <>
          <TableSection isDataLoaded={isDataLoaded} filters={{
            taxon_id,
            evidence,
            assembly_level,
            molecule,
            sort,
          }} data={data} />
          <TableBottom
            page={page}
            maxPage={maxPage}
            setPage={setPage}
            offset={offset}
            setOffset={setOffset}
          />
        </>
      ) : (
        <SearchIllustration />
      )}
    </Layout>
  );
}
