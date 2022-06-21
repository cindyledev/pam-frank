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
          <h2 className="text-6xl font-polonaise tracking-tight text-gray-900">Gift Registry</h2>
          <div className="mt-16 space-y-16">
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              The most important thing to us is to be able to share our special day with those we
              love. We are extremely lucky to have had the last 33 years together full of love,
              laughter, and happiness, however if you would like to help us celebrate with a gift,
              cash would be most appreciated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
