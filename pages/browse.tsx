import Head from "next/head";
import Layout from "../components/layout";
import BrowseSection from "../components/browse/BrowseSection";
import { getBrowseData } from "../Api";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  // const router = useRouter()
  // const { type } = router.query
  const  { type } = context.query;
  const taxData = await getBrowseData("Bacteria", type);
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
