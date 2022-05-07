import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../components/layout";
import WorldLeading from "../components/home/WorldLeading/WorldLeading";
const Stats = dynamic(() => import("../components/home/Stats/Stats"));
const DailyRaport = dynamic(() =>
  import("../components/home/DailyRaport/DailyRaport")
);
const BackedUp = dynamic(() => import("../components/home/BackedUp/BackedUp"));
const Feedback = dynamic(() => import("../components/home/Feedback/Feedback"));

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
