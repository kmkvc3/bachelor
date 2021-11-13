import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/table/TableSection";
import SearchIllustration from "../components/search/Ilustrations/SearchIllustration";
import { getInteractions } from "../Api";

export default function Search() {
  const [searchType, setSearchType] = useState("virus");
  const [data, setData] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  async function requestData(query) {
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results = await getInteractions(query)
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
        setSearchType={setSearchType}
        requestData={requestData}
      />
      {wasDataLoaded && data ? (
        <TableSection
          searchType={searchType}
          isDataLoaded={isDataLoaded}
          data={data}
        />
      ) : (
        <SearchIllustration />
      )}
    </Layout>
  );
}
