import Layout from "../components/layout";
import DailyRaport from "../components/dailyraport/DailyRaport"
import Head from "next/head";

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>Daily report</title>
      </Head>
      <DailyRaport />
    </Layout>
  );
}
