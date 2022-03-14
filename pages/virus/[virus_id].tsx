import Head from "next/head";
import Layout from "../../components/layout";
import Record from "../../components/virus/Record";
import { getVirusRecord } from "../../Api";
import { ThemeContext } from "../../ThemeContext";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";

export async function getServerSideProps(context) {
  const { params } = context
  const virus_id = params.virus_id
  const recordData = await getVirusRecord(virus_id);
  return {
    props: { recordData },
  };
}

export default function Search({ recordData }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Layout>
      <Head>
        <title>Virus</title>
      </Head>
      {darkMode ? (
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #525a63",
              backgroundColor: "#1c2128",
              padding: "0.2rem 0.6rem",
              color: "#adbac7",
              borderRadius: "0.25rem",
            },
            success: {
              iconTheme: {
                primary: "#81b29a",
                secondary: "black",
              },
            },
            duration: 3000,
          }}
        />
      ) : (
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #d3d2d2",
              backgroundColor: "white",
              padding: "0.2rem 0.6rem",
              color: "#505050",
              borderRadius: "0.25rem",
              boxShadow: "none",
            },
            success: {
              iconTheme: {
                primary: "#81b29a",
                secondary: "#505050",
              },
            },
            duration: 3000,
          }}
        />
      )}
      <Record data={recordData} />
    </Layout>
  );
}
