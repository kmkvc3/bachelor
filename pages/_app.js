// import App from 'next/app'

import "./app.css";
import { ThemeProvider } from "../ThemeContext";
// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

// NProgress.configure({ minimum: 0.1, showSpinner: true });
// Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextNProgress color="#1192e9" height={3} showOnShallow={false} />
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
