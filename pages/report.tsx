import Layout from "../components/layout";
import DailyRaport from "../components/dailyraport/DailyRaport"
import Head from "next/head";

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>Report | PHD</title>
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      <DailyRaport />
    </Layout>
  );
}
