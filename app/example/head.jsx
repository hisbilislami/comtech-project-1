import Head from "next/head";

function exampleHead() {
  return (
    <Head>
      <title>My page title</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
  );
}

export default exampleHead;
