import Head from 'next/head';

export default function Gift() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Gift Registry - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            GIFT REGISTRY
          </h2>
          <div className="mt-16 space-y-16">
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Money Preferred</p>
          </div>
        </div>
      </div>
    </div>
  );
}
