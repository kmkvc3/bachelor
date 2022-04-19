import Head from "next/head";
import Layout from "../components/layout";
import WorldLeading from "../components/home/WorldLeading/WorldLeading"
import Stats from "../components/home/Stats/Stats"
import DailyRecord from "../components/home/DailyRecord/DailyRecord"
import BackedUp from "../components/home/BackedUp/BackedUp"
import Feedback from "../components/home/Feedback/Feedback"

export default function Home() {
  return (
    <Layout>
      <WorldLeading />
      <Stats />
      <DailyRecord />
      <BackedUp />
      <Feedback />
    </Layout>
  );
}
