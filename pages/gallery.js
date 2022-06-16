import { useEffect } from 'react';
import Head from 'next/head';

import { mapImageResources, search } from '../lib/cloudinary';

export default function Gallery({ images, next_cursor }) {
  console.log('images', images);
  console.log('next_cursor', next_cursor);

  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search').then((res) => res.json());
      console.log('results', results);
    })();
  }, []);

  return (
    <div className="bg-white">
      <Head>
        <title>Gallery - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">GALLERY</h2>
      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {images.map((image) => (
            <a key={image.id} href={image.image} className="group text-sm">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                {/* <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-center object-cover"
                /> */}
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{image.title}</h3>
              <p className="text-gray-500 italic">{image.id}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      next_cursor,
    },
  };
}
