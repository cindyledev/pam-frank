import { useEffect } from 'react';

import { mapImageResources, search } from '../lib/cloudinary';

const files = [
  {
    title: '03992102',
    source: 'img/03992102.jpg',
  },
  {
    title: '03992103',
    source: 'img/03992103.jpg',
  },
];

export default function Gallery({ images, next_cursor }) {
  console.log('images', images);
  console.log('next_cursor', next_cursor);
  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          next_cursor,
        }),
      }).then((res) => res.json());
      console.log('results', results);
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            GALLERY
          </h2>
          <div className="mt-16 space-y-16">
          </div>
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
    props: { images, next_cursor },
  };
}
