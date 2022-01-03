import Head from "next/head";
import Layout from "../components/layout";
import WorldLeading from "../components/home/WorldLeading/WorldLeading"

export default function Home() {
  return (
    <Layout>
      <WorldLeading />
    </Layout>
  );
}
