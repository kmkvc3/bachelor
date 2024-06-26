import Head from "next/head";
import Layout from "../../components/layout";
import BrowseSection from "../../components/browse/BrowseSection";
import { getBrowseData } from "../../Api";

export async function getServerSideProps(context) {
  const { params } = context;
  const taxs = params.tax;
  let taxData = [];
  const taxonId = taxs.length >= 3 ? taxs[taxs.length - 1].split("&")[0] : "";
  if (taxs) {
    if (taxs[0] === "virus") {
      if (taxs[1] === "ncbi") {
        taxData = await getBrowseData(taxonId, "virus", "ncbi");
      } else {
        taxData = await getBrowseData(taxonId, "virus", "alt");
      }
    } else {
      if (taxs[1] === "alt") {
        taxData = await getBrowseData(taxonId, "host", "alt");
      } else {
        taxData = await getBrowseData(taxonId, "host", "ncbi");
      }
    }
  }
  return {
    props: { taxData },
  };
}

export default function Browse({ taxData }) {
  return (
    <Layout>
      <Head>
        <title>Browse | PHD</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <BrowseSection taxData={taxData} />
    </Layout>
  );
}
