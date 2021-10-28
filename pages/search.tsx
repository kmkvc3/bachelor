import Head from "next/head";
import Layout from "../components/layout";
import SearchSection from "../components/search/SearchSection";
import { useState } from "react";
import TableSection from "../components/table/table-section";

export default function Search() {
  const [searchType, setSearchType] = useState("virus");
  const [searchMode, setSearchMode] = useState(false);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <SearchSection setSearchType={setSearchType} setSearchMode={setSearchMode}/>
      <TableSection searchMode={searchMode} searchType={searchType}/>
    </Layout>
  );
}
