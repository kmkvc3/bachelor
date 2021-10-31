import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/table/TableSection";
import SearchIllustration from "../components/search/SearchIllustration";
import { func2 } from "../components/search/Api";

export default function Search() {
  const [searchType, setSearchType] = useState("virus");
  const [searchMode, setSearchMode] = useState(false);
  const [data, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [wasDataLoaded, setWasDataLoaded] = useState(false);

  async function requestData() {
    try {
      if (!wasDataLoaded) {
        setWasDataLoaded(true);
      }
      setDataLoaded(false);
      const results = await func2();
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
        setSearchMode={setSearchMode}
        requestData={requestData}
      />
      {wasDataLoaded ? (
        <TableSection
          searchMode={searchMode}
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
