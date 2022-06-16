import Head from 'next/head';

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Gallery</h1>
    </div>
  );
}

export async function getStaticProps() {}
