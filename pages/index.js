import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/layout"));
const WorldLeading = dynamic(() =>
  import("../components/home/WorldLeading/WorldLeading")
);
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
        <link rel="shortcut icon" href="./favicon.svg" />
        <title>
          Phage and Host Daily | PHD
        </title>
        <meta
          name="description"
          content="Daily updated catalog of known interactions between viruses and prokaryotic host species"
          key="desc"
        />
      </Head>
      <WorldLeading />
      <Stats />
      <DailyRaport />
      <BackedUp />
      <Feedback />
    </Layout>
  );
}
