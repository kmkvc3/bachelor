import Head from "next/head";
import Layout from "../../components/layout";
import BrowseSection from "../../components/browse/BrowseSection";
import { getBrowseData } from "../../Api";

export async function getServerSideProps(context) {
  const { params } = context
  const taxs = params.tax
  let taxData = null
  if(taxs) {
    if(taxs[0] === "Viruses") {
      taxData = await getBrowseData(taxs[taxs.length-1], 'viral');
    } else {
      taxData = await getBrowseData(taxs[taxs.length-1], 'host');
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
