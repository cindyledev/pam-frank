import { useState } from 'react';
import Head from 'next/head';

import { mapImageResources, search } from '../lib/cloudinary';

export default function Gallery({ initial_images, next_cursor }) {
  const [images, setImages] = useState(initial_images);
  const [nextCursor, setNextCursor] = useState(next_cursor);
  console.log('initial images', initial_images);
  console.log('next_cursor', next_cursor);

  async function handleLoadMore(event) {
    event.preventDefault();

    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ next_cursor }),
    }).then((res) => res.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(updatedNextCursor);
  }

  return (
    <div className="bg-white">
      <Head>
        <title>Gallery - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          GALLERY
        </h2>
      </div>
        <div className="grid grid-cols-1 mt-16 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {initial_images.map((image) => (
            <a key={image.id} href={image.image} className="group text-sm">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{image.title}</h3>
              <p className="text-gray-500 italic">{image.id}</p>
            </a>
          ))}
        </div>
        <div className="flex mt-4 mx-auto justify-center">
          <button
            onClick={handleLoadMore}
            type="button"
            className="inline-flex items-center mt-2 px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor } = results;

  const initial_images = mapImageResources(resources);

  return {
    props: {
      initial_images,
      next_cursor,
    },
  };
}
