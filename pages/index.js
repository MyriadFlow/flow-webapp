/* pages/index.js */

import Landingpage from "../pages/landingpage";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Head from 'next/head';

import {
  connectwallethandler,
} from "./api/setConnection";
import NoSSR from "./NoSSR";

// export async function getServerSideProps() {
//   const response = await fetch(
//       'http://localhost:3000/api/getData');
//   const data = await response.json();

//   return {
//       props: { data: data },
//   };
// }

export default function Home({ data }) {
  const dispatch = useDispatch();
  const [errorMessage, SeterrorMessage] = useState(null);
  const [defaultAccount, SetdefaultAccount] = useState();
  const [UserBalance, SetUserBalance] = useState();

  useEffect(() => {
    connectwallethandler(
      SeterrorMessage,
      SetdefaultAccount,
      SetUserBalance,
      dispatch
    );
  }, []);

  return (
    <>
    <Head>
      <title>Marketplace</title>
        <meta name="description" content="A NFT Marketplace to Explore the Digital Gold Mine, that Supports the Creators. A Place where you can Create, Collect and Sell Digital Assets."></meta>
        <meta property="og:url" content="https://marketplace-myriadflow.netlify.app"></meta>
        <meta name="keywords" content=" crypto, wallet, metamask, nft, asset, marketplace, collections"></meta>
        <meta name="author" content="Myriadflow"></meta>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta property="og:image" content="/dark.svg"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/dark.svg"></link>
        <link rel="icon" type="image/svg" sizes="32x32" href="/dark.svg"></link>
        <link rel="icon" type="image/svg" sizes="16x16" href="/dark.svg"></link>
      </Head>
      <div>
      <NoSSR>
      <Landingpage/>
      
      </NoSSR>

    </div>
    </>
  );
}