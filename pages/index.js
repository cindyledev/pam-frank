import Head from 'next/head';
import Image from 'next/image';

import OurStory from '../components/ourstory';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-6xl font-polonaise tracking-tight text-gray-900"
            >
              Pam and Frank
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Please join us for our wedding celebration on
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">September 10, 2022</p>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              If you have any questions, please email{' '}
              <a
                className="text-red-900 hover:text-red-800"
                href="mailto:pamandfrankwedding@gmail.com"
              >
                pamandfrankwedding@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center">
            <div className="relative h-full w-full aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/diwuya9d9/image/upload/v1654876331/pam-frank/ImageID_51573688_1_jnuqnp.jpg"
                alt="ImageID_51573688_1"
                layout="fill"
                objectFit="cover"
                priority="true"
                className="object-top object-cover"
              />
            </div>

            <div className="mt-24 flex flex-col items-center">
              <h2 className="text-6xl font-polonaise tracking-tight text-center text-gray-900">
                Our Story
              </h2>
              <div className="mt-8">
                <OurStory />
              </div>
            </div>

            <div className="flex flex-col mt-16 items-center">
              <div className="max-w-xl rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/diwuya9d9/image/upload/v1655828915/pam-frank/weddinginvite_hlxyso.png"
                  alt="Wedding Invitation."
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
