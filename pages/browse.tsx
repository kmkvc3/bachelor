import Head from "next/head";
import Layout from "../components/layout";
import BrowseSection from "../components/browse/BrowseSection";

export default function Browse() {
  return (
    <Layout>
      <Head>
        <title>Browse</title>
      </Head>
      <BrowseSection />
    </Layout>
  );
}
