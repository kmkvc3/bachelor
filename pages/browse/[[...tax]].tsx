import Head from "next/head";
import Layout from "../../components/layout";
import BrowseSection from "../../components/browse/BrowseSection";
import { getBrowseData } from "../../Api";

export async function getServerSideProps(context) {
  const { params } = context
  const taxs = params.tax
  let taxData = []
  const taxonId = taxs.length >= 3 ? taxs[taxs.length-1].split("&")[0] : ""
  if(taxs) {
    if(taxs[0] === "virus") {
      if(taxs[1] === "ictv") {
        taxData = await getBrowseData(taxonId, 'virus', 'ictv');
      } else {
        taxData = await getBrowseData(taxonId, 'virus', 'ncbi');
      }
    } else {
      if(taxs[1] === "alt") {
        taxData = await getBrowseData(taxonId, 'host', 'alt');
      } else {
        taxData = await getBrowseData(taxonId, 'host', 'ncbi');
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
        <title>Browse</title>
      </Head>
      <BrowseSection taxData={taxData} />
    </Layout>
  );
}
