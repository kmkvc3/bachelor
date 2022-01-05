import Head from "next/head";
import Layout from "../components/layout";
import WorldLeading from "../components/home/WorldLeading/WorldLeading"
import Stats from "../components/home/Stats/Stats"
import ForScientists from "../components/home/ForScientists/ForScientists"
import Video from "../components/home/Video/Video"

export default function Home() {
  return (
    <Layout>
      <WorldLeading />
      <Stats />
      <ForScientists />
      <Video />
    </Layout>
  );
}
