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

      </div>
    </div>
  );
}

