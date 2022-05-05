import Head from "next/head";
import Layout from "../components/layout";
import WorldLeading from "../components/home/WorldLeading/WorldLeading";
import Stats from "../components/home/Stats/Stats";
import DailyRaport from "../components/home/DailyRaport/DailyRaport";
import BackedUp from "../components/home/BackedUp/BackedUp";
import Feedback from "../components/home/Feedback/Feedback";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | PHD</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <WorldLeading />
      <Stats />
      <DailyRaport />
      <BackedUp />
      <Feedback />
    </Layout>
  );
}
